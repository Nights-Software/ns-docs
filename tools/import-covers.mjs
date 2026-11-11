// Usage: node tools/import-covers.mjs <covers folder> <brand folder>      (every cover and the brand marks)
//        node tools/import-covers.mjs <covers folder> --page <file>        (one cover)
// Reads only the files the registry names; the source folders hold much more and stay out of the repository.
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';
import { pages } from './pages.mjs';

const LIMIT = 300_000;
const MARKS = ['ns_mark_white.svg', 'ns_mark_violet.svg', 'ns_mark_midnight.svg'];

// Encodes in memory and writes only a result under the limit, so a failed run never leaves an over-limit file.
async function encode(source, target) {
  for (let quality = 86; quality >= 50; quality -= 4) {
    const buffer = await sharp(source).resize({ width: 1440, withoutEnlargement: true }).jpeg({ quality, progressive: true }).toBuffer();
    if (buffer.length < LIMIT) {
      writeFileSync(target, buffer);
      return { quality, size: buffer.length };
    }
  }
  throw new Error(`${target} is still over ${LIMIT} bytes at quality 50`);
}

async function importOne(coversDir, p, coverOut) {
  const { quality, size } = await encode(join(coversDir, `Cover – ${p.cover}.png`), join(coverOut, `${p.file}.jpg`));
  return { file: p.file, quality, size };
}

// One cover, by page file name: needs only that page's source image, no brand folder.
export async function importCover(coversDir, file, root = process.cwd()) {
  const p = pages.find(x => x.file === file);
  if (!p) throw new Error(`${file} is not in the registry (tools/pages.mjs); add its row first.`);
  if (!p.cover) throw new Error(`${file} has no cover in the registry.`);
  const coverOut = join(root, 'src/assets/covers');
  mkdirSync(coverOut, { recursive: true });
  return importOne(coversDir, p, coverOut);
}

export async function importCovers(coversDir, brandDir, root = process.cwd()) {
  const coverOut = join(root, 'src/assets/covers');
  const brandOut = join(root, 'src/assets/brand');
  mkdirSync(coverOut, { recursive: true });
  mkdirSync(brandOut, { recursive: true });
  mkdirSync(join(root, 'public'), { recursive: true });
  const results = [];
  for (const p of pages.filter(p => p.cover)) results.push(await importOne(coversDir, p, coverOut));
  for (const m of MARKS) copyFileSync(join(brandDir, m), join(brandOut, m));
  copyFileSync(join(brandDir, 'ns_mark_violet.svg'), join(root, 'public/favicon.svg'));
  return results;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2);
  const usage = 'Usage: node tools/import-covers.mjs <covers folder> <brand folder>\n       node tools/import-covers.mjs <covers folder> --page <file>';
  const at = args.indexOf('--page');
  if (at !== -1) {
    const [coversDir] = args;
    const file = args[at + 1];
    if (!coversDir || coversDir === '--page' || !file) { console.error(usage); process.exit(2); }
    const r = await importCover(coversDir, file);
    console.log(`${r.file}	q${r.quality}	${(r.size / 1000).toFixed(1)} KB`);
  } else {
    const [coversDir, brandDir] = args;
    if (!coversDir || !brandDir) { console.error(usage); process.exit(2); }
    for (const r of await importCovers(coversDir, brandDir)) console.log(`${r.file}	q${r.quality}	${(r.size / 1000).toFixed(1)} KB`);
  }
}
