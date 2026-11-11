import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, statSync } from 'node:fs';
import sharp from 'sharp';
import { pages } from './pages.mjs';

test('every page with a cover has a 1440 px wide file under 300 KB', async () => {
  for (const p of pages.filter(p => p.cover)) {
    const f = `src/assets/covers/${p.file}.jpg`;
    assert.ok(existsSync(f), f);
    assert.ok(statSync(f).size < 300_000, f + ' ' + statSync(f).size);
    assert.equal((await sharp(f).metadata()).width, 1440, f);
  }
});
