import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, existsSync } from 'node:fs';
import { pages, groups, addressOf, childAddressOf, addressesOf } from './pages.mjs';
import { buildSidebar } from '../src/sidebar.mjs';

// The Jekyll folder is gone after the switch; the converted pages then carry the list.
const dir = existsSync('resources') ? 'resources' : 'src/content/docs/resources';

test('the registry lists exactly the pages in resources/', () => {
  const onDisk = readdirSync(dir).filter(f => f.endsWith('.md')).map(f => f.slice(0, -3)).sort();
  assert.deepEqual(pages.map(p => p.file).sort(), onDisk);
});

// Sub-pages live in a folder named like their product's file: resources/<file>/<child>.md.
const subFolders = () => readdirSync(dir, { withFileTypes: true }).filter(e => e.isDirectory()).map(e => e.name).sort();
const childFiles = folder => readdirSync(`${dir}/${folder}`).filter(f => f.endsWith('.md')).map(f => f.slice(0, -3)).sort();

test('a folder in resources/ belongs to the registry row of the same file name, and its files are exactly the row children', () => {
  for (const folder of subFolders()) {
    const row = pages.find(p => p.file === folder);
    assert.ok(row, `${folder}/ has no registry row`);
    assert.ok(row.children?.length, `${folder}/ holds pages but the row declares no children`);
    assert.deepEqual(childFiles(folder), row.children.map(c => c.file).sort(), folder);
  }
});

test('every child in the registry has a page file in its product folder', () => {
  for (const p of pages.filter(p => p.children)) {
    assert.ok(existsSync(`${dir}/${p.file}`), `${p.file}/ is missing`);
    const files = childFiles(p.file);
    for (const c of p.children) assert.ok(files.includes(c.file), `${p.file}/${c.file}.md`);
  }
});

test('a child has a file name and a label, both unique within its product, and its product has a page of its own', () => {
  for (const p of pages.filter(p => p.children)) {
    assert.ok(p.children.length > 0, p.file);
    assert.ok(existsSync(`${dir}/${p.file}.md`), p.file);
    for (const c of p.children) {
      assert.match(c.file, /^[a-z0-9-]+$/, `${p.file}: ${c.file}`);
      assert.ok(c.label, `${p.file}/${c.file}`);
    }
    assert.equal(new Set(p.children.map(c => c.file)).size, p.children.length, p.file);
    assert.equal(new Set(p.children.map(c => c.label)).size, p.children.length, p.file);
  }
});

test('the three long pages are products with sub-pages', () => {
  for (const file of ['ers', 'nightShifts', 'discordAPI']) assert.ok(pages.find(p => p.file === file).children.length >= 3, file);
});

test('every page belongs to a known group', () => {
  const ids = groups.map(g => g.id);
  for (const p of pages) assert.ok(ids.includes(p.group), `${p.file}: ${p.group}`);
});

test('pages in start have no cover; a product may lack one (the home page shows a placeholder)', () => {
  for (const p of pages.filter(p => p.group === 'start')) assert.equal(p.cover, null, p.file);
});

test('file names are unique', () => {
  assert.equal(new Set(pages.map(p => p.file)).size, pages.length);
});

// Design decisions as of the redesign, pinned so they change on purpose.
test('current decisions: two guides in start, ERS alone in its group with its cover shown', () => {
  const ers = pages.find(p => p.file === 'ers');
  assert.equal(pages.find(p => p.file === 'installation-guide').group, 'start');
  assert.equal(pages.find(p => p.file === 'acePerms').group, 'start');
  assert.equal(ers.group, 'ers');
  assert.equal(ers.showCover, true);
});

test('addresses keep their capitals', () => {
  assert.equal(addressOf('discordAPI'), '/resources/discordAPI/');
});

test('a child address is its product address plus the child file, capitals kept', () => {
  const row = { file: 'nightShifts', children: [{ file: 'exports-reads', label: 'Exports: Reads' }] };
  assert.equal(childAddressOf(row, row.children[0]), '/resources/nightShifts/exports-reads/');
  assert.deepEqual(addressesOf(row), ['/resources/nightShifts/', '/resources/nightShifts/exports-reads/']);
  assert.deepEqual(addressesOf({ file: 'gates' }), ['/resources/gates/']);
});

const byName = (a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' });

test('sidebar on a fixture registry: empty groups vanish, scripts are A to Z and collapsed, items are links', () => {
  const fixtureGroups = [
    { id: 'start', label: 'G Start' },
    { id: 'ers', label: 'G Ers' },
    { id: 'scripts', label: 'G Scripts' },
    { id: 'assets', label: 'G Assets' },
  ];
  const fixturePages = [
    { file: 'guide', label: 'Guide', group: 'start', cover: null },
    { file: 'zeta', label: 'Zeta', group: 'scripts', cover: null },
    { file: 'alphaThing', label: 'alpha thing', group: 'scripts', cover: null },
    { file: 'mid', label: 'Mid', group: 'scripts', cover: null },
  ];
  const sb = buildSidebar(fixturePages, fixtureGroups);
  assert.deepEqual(sb.map(g => g.label), ['G Start', 'G Scripts']);
  assert.equal(sb[0].collapsed, undefined);
  assert.deepEqual(sb[0].items, [{ label: 'Guide', link: '/resources/guide/' }]);
  assert.equal(sb[1].collapsed, true);
  assert.deepEqual(sb[1].items.map(i => i.label), ['alpha thing', 'Mid', 'Zeta']);
  assert.deepEqual(sb[1].items[1], { label: 'Mid', link: '/resources/mid/' });
  assert.equal(sb[1].items[0].link, '/resources/alphaThing/');
  const withAssets = buildSidebar([...fixturePages, { file: 'tex', label: 'Tex', group: 'assets', cover: null }], fixtureGroups);
  assert.deepEqual(withAssets.map(g => g.label), ['G Start', 'G Scripts', 'G Assets']);
});

test('sidebar: a product with children is a collapsed sub-group, Overview first, children in registry order, sorted among its siblings', () => {
  const fixtureGroups = [{ id: 'ers', label: 'G Ers' }, { id: 'scripts', label: 'G Scripts' }];
  const kids = [{ file: 'zz', label: 'Zz' }, { file: 'aa', label: 'Aa' }];
  const fixturePages = [
    { file: 'zeta', label: 'Zeta', group: 'scripts', cover: null },
    { file: 'beta', label: 'Beta', group: 'scripts', cover: null, children: kids },
    { file: 'alpha', label: 'Alpha', group: 'scripts', cover: null },
    { file: 'ersMain', label: 'ERS Main', group: 'ers', cover: null, children: kids },
    { file: 'ersAlone', label: 'ERS Alone', group: 'ers', cover: null },
  ];
  const sb = buildSidebar(fixturePages, fixtureGroups);
  const scripts = sb.find(g => g.label === 'G Scripts');
  assert.deepEqual(scripts.items.map(i => i.label), ['Alpha', 'Beta', 'Zeta']);
  assert.deepEqual(scripts.items[1], {
    label: 'Beta',
    collapsed: true,
    items: [
      { label: 'Overview', link: '/resources/beta/' },
      { label: 'Zz', link: '/resources/beta/zz/' },
      { label: 'Aa', link: '/resources/beta/aa/' },
    ],
  });
  assert.equal(scripts.items[0].items, undefined);
  const ers = sb.find(g => g.label === 'G Ers');
  assert.deepEqual(ers.items.map(i => i.label), ['ERS Main', 'ERS Alone']);
  assert.equal(ers.items[0].collapsed, true);
  assert.equal(ers.items[0].items[0].label, 'Overview');
});

const flatLinks = items => items.flatMap(i => i.items ? flatLinks(i.items) : [i.link]);

test('sidebar on the real registry: invariants only', () => {
  const sb = buildSidebar(pages, groups);
  for (const g of sb) assert.ok(g.items.length > 0, g.label);
  const labelOf = id => groups.find(x => x.id === id).label;
  for (const g of groups) {
    assert.equal(sb.some(x => x.label === g.label), pages.some(p => p.group === g.id), g.id);
  }
  const scripts = sb.find(g => g.label === labelOf('scripts'));
  assert.equal(scripts.collapsed, true);
  const labels = scripts.items.map(i => i.label);
  assert.deepEqual(labels, [...labels].sort(byName));
  const links = sb.flatMap(g => flatLinks(g.items)).sort();
  assert.deepEqual(links, pages.flatMap(addressesOf).sort());
  // every product with sub-pages is a sub-group whose first item is its own page
  for (const p of pages.filter(p => p.children)) {
    const group = sb.flatMap(g => g.items).find(i => i.label === p.label);
    assert.equal(group.collapsed, true, p.file);
    assert.deepEqual(group.items.map(i => i.link), addressesOf(p), p.file);
    assert.equal(group.items[0].label, 'Overview', p.file);
  }
});
