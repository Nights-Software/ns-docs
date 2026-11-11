import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, existsSync } from 'node:fs';
import { pages, groups, addressOf } from './pages.mjs';
import { buildSidebar } from '../src/sidebar.mjs';

// The Jekyll folder is gone after the switch; the converted pages then carry the list.
const dir = existsSync('resources') ? 'resources' : 'src/content/docs/resources';

test('the registry lists exactly the pages in resources/', () => {
  const onDisk = readdirSync(dir).filter(f => f.endsWith('.md')).map(f => f.slice(0, -3)).sort();
  assert.deepEqual(pages.map(p => p.file).sort(), onDisk);
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
  assert.equal(sb[1].items[0].link, '/resources/alphaThing/');
  const withAssets = buildSidebar([...fixturePages, { file: 'tex', label: 'Tex', group: 'assets', cover: null }], fixtureGroups);
  assert.deepEqual(withAssets.map(g => g.label), ['G Start', 'G Scripts', 'G Assets']);
});

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
  const links = sb.flatMap(g => g.items.map(i => i.link)).sort();
  assert.deepEqual(links, pages.map(p => addressOf(p.file)).sort());
});
