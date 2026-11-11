// Always runs the check; the logic lives in check-addresses.mjs, which does nothing on import.
// DIST_DIR and ADDRESS_LIST exist for the tests; on CI they are ignored so a stray variable
// cannot point the check at something other than the real build and the real list.
// Two lists are checked: the protected addresses (every old link must keep working) and the registry
// (every page the sidebar and the home catalogue link to must exist at exactly that address).
import { readFileSync } from 'node:fs';
import { missingFromSources } from './check-addresses.mjs';
import { pages, addressOf } from './pages.mjs';

const useOverrides = !process.env.CI;
const distDir = (useOverrides && process.env.DIST_DIR) || 'dist';
const listFile = (useOverrides && process.env.ADDRESS_LIST) || 'tools/addresses.json';

const addresses = JSON.parse(readFileSync(listFile, 'utf8'));
if (!Array.isArray(addresses) || addresses.length === 0) {
  console.error(`${listFile} lists no addresses; an empty list would let every page go missing unnoticed.`);
  process.exit(1);
}
const registry = pages.map(p => addressOf(p.file));
const missing = missingFromSources(distDir, [
  { name: `protected list (${listFile})`, addresses },
  { name: 'page registry (tools/pages.mjs)', addresses: registry },
]);
for (const { list, address } of missing) console.error(`Address missing from ${distDir}: ${address} (from the ${list})`);
if (missing.length) process.exit(1);
console.log(`All ${addresses.length} protected addresses and all ${registry.length} registry pages are in ${distDir}.`);
