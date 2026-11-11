import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { parse } from 'yaml';
import { pages, childAddressOf } from './pages.mjs';

// The sidebar reads the registry and the breadcrumb reads the front matter; they must say the same.
const dir = 'src/content/docs/resources';

// Until the switch the converter's own test rewrites these files while this one runs (tests run in parallel),
// so a read can land between its delete and its write; reading again settles it.
function settled(read) {
  for (let attempt = 0; ; attempt++) {
    try { return read(); } catch (error) {
      if (attempt >= 40) throw error;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 50);
    }
  }
}
const pageFiles = () => settled(() => {
  const found = readdirSync(dir).filter(f => f.endsWith('.md')).map(f => f.slice(0, -3));
  if (found.length < pages.length && existsSync('tools/convert')) throw new Error('conversion in progress');
  return found;
});
const source = file => settled(() => readFileSync(`${dir}/${file}.md`, 'utf8').replace(/\r/g, ''));
const frontMatter = file => parse(source(file).match(/^---\n([\s\S]*?)\n---/)[1]);
const groupOf = file => frontMatter(file).group;
const bodyOf = file => source(file).replace(/^---\n[\s\S]*?\n---\n/, '');
// The sub-pages of the products that have them, as paths below resources/ without .md: <product file>/<child file>.
const subPageFiles = () => settled(() => readdirSync(dir, { withFileTypes: true }).filter(e => e.isDirectory())
  .flatMap(e => readdirSync(`${dir}/${e.name}`).filter(f => f.endsWith('.md')).map(f => `${e.name}/${f.slice(0, -3)}`)));

test('every page file carries the group of its registry row', () => {
  for (const file of pageFiles()) {
    const row = pages.find(p => p.file === file);
    assert.ok(row, `${file} has no registry row`);
    assert.equal(groupOf(file), row.group, file);
  }
});

test('every registry page has a page file', () => {
  const files = pageFiles();
  for (const p of pages) assert.ok(files.includes(p.file), p.file);
});

test('every sub-page file has a child in its product row and carries the group of that row; every child has a file', () => {
  const found = subPageFiles();
  for (const path of found) {
    const [file, name] = path.split('/');
    const row = pages.find(p => p.file === file);
    assert.ok(row?.children?.some(c => c.file === name), `${path} has no registry child`);
    assert.equal(groupOf(path), row.group, path);
  }
  for (const p of pages) for (const c of p.children ?? []) assert.ok(found.includes(`${p.file}/${c.file}`), `${p.file}/${c.file}`);
});

test('a sub-page has its own slug, names its product in its title, and has no store, video or cover', () => {
  for (const p of pages.filter(p => p.children)) {
    const overview = frontMatter(p.file);
    for (const c of p.children) {
      const at = `${p.file}/${c.file}`;
      const fm = frontMatter(at);
      // starlight-links-validator lower-cases the path of a page without a slug, so capitals in the folder name need it
      assert.equal(fm.slug, `resources/${p.file}/${c.file}`, at);
      assert.ok(fm.title.endsWith(` · ${p.label}`), `${at}: ${fm.title}`);
      assert.ok(fm.description, at);
      assert.equal(String(fm.lastUpdated), String(overview.lastUpdated), at);
      for (const key of ['store', 'video', 'cover', 'showCover']) assert.equal(fm[key], undefined, `${at}: ${key}`);
    }
  }
});

test('the overview of a product lists its sub-pages under "In This Guide", in order, with their descriptions', () => {
  for (const p of pages.filter(p => p.children)) {
    const lines = bodyOf(p.file).split('\n');
    const start = lines.indexOf('## In This Guide');
    assert.ok(start >= 0, `${p.file}: no "In This Guide" section`);
    const rest = lines.slice(start + 1);
    const items = rest.slice(0, rest.findIndex(l => /^## /.test(l))).filter(l => l.startsWith('- '));
    assert.equal(items.length, p.children.length, p.file);
    p.children.forEach((c, i) => {
      const { description } = frontMatter(`${p.file}/${c.file}`);
      assert.equal(items[i], `- [${c.label}](${childAddressOf(p, c)}) — ${description}`, `${p.file}/${c.file}`);
    });
  }
});
