import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { redirectScript } from './route-data.mjs';
import { pages, addressesOf } from '../tools/pages.mjs';

const anchors = JSON.parse(readFileSync('src/old-anchors.json', 'utf8'));

// Runs the script the way a browser would: with a location holding the hash.
function visit(map, hash) {
  const calls = [];
  vm.runInNewContext(redirectScript(map), { location: { hash, replace: to => calls.push(to) } });
  return calls;
}

test('an old hash that moved is replaced by the new address', () => {
  assert.deepEqual(visit({ a: '/resources/p/sub/#a' }, '#a'), ['/resources/p/sub/#a']);
});

test('a hash that is not in the map, or no hash, does nothing', () => {
  assert.deepEqual(visit({ a: '/x/' }, '#b'), []);
  assert.deepEqual(visit({ a: '/x/' }, ''), []);
  assert.deepEqual(visit({ a: '/x/' }, '#'), []);
});

test('names that exist on every object are not treated as old anchors', () => {
  for (const name of ['constructor', 'toString', '__proto__', 'hasOwnProperty']) assert.deepEqual(visit({ a: '/x/' }, `#${name}`), [], name);
});

test('an encoded hash is decoded; a broken encoding does not throw', () => {
  assert.deepEqual(visit({ 'a b': '/x/' }, '#a%20b'), ['/x/']);
  assert.deepEqual(visit({ '%E0%A4%A': '/x/' }, '#%E0%A4%A'), ['/x/']);
});

test('the data file covers exactly the products with sub-pages and points only at registry addresses', () => {
  assert.deepEqual(Object.keys(anchors).sort(), pages.filter(p => p.children).map(p => p.file).sort());
  for (const p of pages.filter(p => p.children)) {
    const own = new Set(addressesOf(p));
    for (const [id, target] of Object.entries(anchors[p.file])) assert.ok(own.has(target.split('#')[0]), `${p.file} #${id} -> ${target}`);
  }
});
