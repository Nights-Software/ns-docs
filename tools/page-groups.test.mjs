import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { parse } from 'yaml';
import { pages } from './pages.mjs';

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
const groupOf = file => settled(() => {
  const m = readFileSync(`${dir}/${file}.md`, 'utf8').replace(/\r/g, '').match(/^---\n([\s\S]*?)\n---/);
  return parse(m[1]).group;
});

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
