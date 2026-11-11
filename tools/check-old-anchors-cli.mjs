// Part of `npm run check`: the old anchors of the split pages must still lead somewhere.
import { readFileSync } from 'node:fs';
import { brokenRedirects } from './check-old-anchors.mjs';

const distDir = (!process.env.CI && process.env.DIST_DIR) || 'dist';
const oldAnchors = JSON.parse(readFileSync('src/old-anchors.json', 'utf8'));
const problems = brokenRedirects(distDir, oldAnchors);
for (const p of problems) console.error(`Old anchor broken: ${p}`);
if (problems.length) process.exit(1);
const total = Object.values(oldAnchors).reduce((n, m) => n + Object.keys(m).length, 0);
console.log(`All ${total} old anchors of the split pages lead to a heading in ${distDir}.`);
