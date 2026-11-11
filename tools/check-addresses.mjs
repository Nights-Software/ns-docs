import { readdirSync } from 'node:fs';
import { join } from 'node:path';

// Directory entry names are compared with ===, not existsSync: GitHub Pages is case sensitive,
// a Windows or macOS disk is not, and a lost capital must fail here rather than on the live site.
function hasEntry(dir, name, wantDir) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return false;
  }
  return entries.some(e => e.name === name && (wantDir ? e.isDirectory() : e.isFile()));
}

function exists(distDir, address) {
  const segments = address.split('/').filter(Boolean);
  let dir = distDir;
  for (const segment of segments) {
    if (!hasEntry(dir, segment, true)) return false;
    dir = join(dir, segment);
  }
  return hasEntry(dir, 'index.html', false);
}

export function missingAddresses(distDir, addresses) {
  return addresses.filter(address => !exists(distDir, address));
}

// Each source is { name, addresses }; the result says which list a missing address came from, so a
// failure points at the right place to fix (the protected list, or the page registry).
export function missingFromSources(distDir, sources) {
  return sources.flatMap(({ name, addresses }) =>
    missingAddresses(distDir, addresses).map(address => ({ list: name, address })));
}
