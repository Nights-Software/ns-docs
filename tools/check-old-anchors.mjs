import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const idsOf = file => new Set([...readFileSync(file, 'utf8').matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));

// src/old-anchors.json says where the headings of the three split pages went. Every target must be a built page,
// and a target with a hash must be a heading id on that page; an id that still exists on the overview must not be listed
// with itself as the target (it would loop).
export function brokenRedirects(distDir, oldAnchors) {
  const problems = [];
  for (const [product, map] of Object.entries(oldAnchors)) {
    for (const [id, target] of Object.entries(map)) {
      const [address, hash] = target.split('#');
      let ids;
      try {
        ids = idsOf(join(distDir, ...address.split('/').filter(Boolean), 'index.html'));
      } catch {
        problems.push(`${product} #${id}: ${address} is not built`);
        continue;
      }
      if (hash && !ids.has(hash)) problems.push(`${product} #${id}: ${address} has no #${hash}`);
      if (address === `/resources/${product}/` && hash === id) problems.push(`${product} #${id}: redirects to itself`);
    }
  }
  return problems;
}
