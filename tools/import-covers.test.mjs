import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, existsSync, readdirSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { randomBytes } from 'node:crypto';
import sharp from 'sharp';
import { importCover } from './import-covers.mjs';
import { pages } from './pages.mjs';

const page = pages.find(p => p.file === 'gates');
const sourceName = `Cover – ${page.cover}.png`;

async function setup(raw) {
  const dir = mkdtempSync(join(tmpdir(), 'cover-'));
  const covers = join(dir, 'covers');
  const root = join(dir, 'root');
  mkdirSync(covers, { recursive: true });
  await sharp(raw.data, { raw: raw.info }).png().toFile(join(covers, sourceName));
  return { covers, root };
}

test('one cover is imported from a folder that holds only that source file', async () => {
  const w = 1800, h = 600;
  const { covers, root } = await setup({ data: Buffer.alloc(w * h * 3, 90), info: { width: w, height: h, channels: 3 } });
  const r = await importCover(covers, 'gates', root);
  const out = join(root, 'src/assets/covers/gates.jpg');
  assert.ok(existsSync(out));
  assert.ok(statSync(out).size < 300_000);
  assert.equal((await sharp(out).metadata()).width, 1440);
  assert.equal(r.file, 'gates');
});

test('a cover that cannot get under the limit fails and leaves no file behind', async () => {
  const w = 1800, h = 1800;
  const noise = randomBytes(w * h * 3);
  const { covers, root } = await setup({ data: noise, info: { width: w, height: h, channels: 3 } });
  await assert.rejects(importCover(covers, 'gates', root), /still over/);
  const dir = join(root, 'src/assets/covers');
  assert.deepEqual(existsSync(dir) ? readdirSync(dir) : [], []);
});

test('a page without a cover in the registry is refused', async () => {
  await assert.rejects(importCover(tmpdir(), 'acePerms', mkdtempSync(join(tmpdir(), 'cover-'))), /no cover/);
  await assert.rejects(importCover(tmpdir(), 'notAPage', mkdtempSync(join(tmpdir(), 'cover-'))), /not in the registry/);
});
