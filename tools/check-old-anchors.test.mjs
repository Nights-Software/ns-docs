import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { brokenRedirects } from './check-old-anchors.mjs';

function dist(pages) {
  const dir = mkdtempSync(join(tmpdir(), 'anchors-'));
  for (const [address, ids] of Object.entries(pages)) {
    const folder = join(dir, ...address.split('/').filter(Boolean));
    mkdirSync(folder, { recursive: true });
    writeFileSync(join(folder, 'index.html'), ids.map(id => `<h2 id="${id}">x</h2>`).join(''));
  }
  return dir;
}

test('a target that is a built page with that heading is fine, with or without a hash', () => {
  const d = dist({ '/resources/p/': ['top'], '/resources/p/sub/': ['moved'] });
  assert.deepEqual(brokenRedirects(d, { p: { moved: '/resources/p/sub/#moved', dropped: '/resources/p/sub/' } }), []);
});

test('a target page that is not built, or a hash that is not on it, is reported', () => {
  const d = dist({ '/resources/p/': ['top'], '/resources/p/sub/': ['moved'] });
  const problems = brokenRedirects(d, { p: { a: '/resources/p/gone/#a', b: '/resources/p/sub/#nope' } });
  assert.equal(problems.length, 2);
  assert.match(problems[0], /gone\/ is not built/);
  assert.match(problems[1], /no #nope/);
});

test('an id redirecting to itself on the overview is reported', () => {
  const d = dist({ '/resources/p/': ['same'] });
  assert.equal(brokenRedirects(d, { p: { same: '/resources/p/#same' } }).length, 1);
});
