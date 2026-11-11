import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { pages, addressesOf } from './pages.mjs';
import { missingAddresses, missingFromSources } from './check-addresses.mjs';

test('exact case is required even on a case-insensitive disk', () => {
  const dist = mkdtempSync(join(tmpdir(), 'addr-'));
  mkdirSync(join(dist, 'resources', 'discordapi'), { recursive: true });
  writeFileSync(join(dist, 'resources', 'discordapi', 'index.html'), '');
  writeFileSync(join(dist, 'index.html'), '');
  assert.deepEqual(missingAddresses(dist, ['/', '/resources/discordAPI/']), ['/resources/discordAPI/']);
});

test('a folder without index.html is missing', () => {
  const dist = mkdtempSync(join(tmpdir(), 'addr-'));
  mkdirSync(join(dist, 'resources', 'ers'), { recursive: true });
  assert.deepEqual(missingAddresses(dist, ['/resources/ers/']), ['/resources/ers/']);
});

// The list is fixed on purpose: a page dropped from the registry later must still fail. Pages added later
// are checked through the registry instead, so the list is a lower bound, not the whole set.
const ORIGINAL = [
  '/',
  '/resources/acePerms/',
  '/resources/advancedPlayerTracking/',
  '/resources/airRaidSirens/',
  '/resources/aircraftRadar/',
  '/resources/airstrikes/',
  '/resources/ammoBox/',
  '/resources/boatRescue/',
  '/resources/cbrnDisasters/',
  '/resources/comaAndDownSystem/',
  '/resources/discordAPI/',
  '/resources/discordAllowlist/',
  '/resources/discordLockers/',
  '/resources/discordPlayerNames/',
  '/resources/discordPlayerlist/',
  '/resources/discordSpawn/',
  '/resources/discordWelcome/',
  '/resources/easy3dTextLabels/',
  '/resources/ers/',
  '/resources/garageSystem/',
  '/resources/gates/',
  '/resources/henchmen/',
  '/resources/installation-guide/',
  '/resources/landingZoneAlarm/',
  '/resources/loadingScreen/',
  '/resources/metabuild/',
  '/resources/naturalDisasters/',
  '/resources/nightShifts/',
  '/resources/ontoTheSeas/',
  '/resources/partySystem/',
  '/resources/pedAndPlayerCPR/',
  '/resources/policeTape/',
  '/resources/propsAndSpeedzones/',
  '/resources/raids/',
  '/resources/smokeGenerator/',
  '/resources/smokeScreen/',
  '/resources/speedometer/',
  '/resources/stormChasing/',
  '/resources/subtitles/',
  '/resources/vPerms/',
  '/resources/vehicleLift/',
  '/resources/vehicleLocks/',
  '/resources/vehicleRentals/',
  '/resources/vehicleSpawns/',
  '/resources/wPerms/',
  '/resources/weaponCrates/',
];

test('the protected list holds the 46 addresses that remain', () => {
  const list = JSON.parse(readFileSync('tools/addresses.json', 'utf8'));
  assert.equal(ORIGINAL.length, 46);
  for (const address of ORIGINAL) assert.ok(list.includes(address), address);
  assert.equal(new Set(list).size, list.length);
});

test('a missing address names the list it came from', () => {
  const dist = mkdtempSync(join(tmpdir(), 'addr-'));
  writeFileSync(join(dist, 'index.html'), '');
  const missing = missingFromSources(dist, [
    { name: 'fixed', addresses: ['/'] },
    { name: 'registry', addresses: ['/', '/resources/newThing/'] },
  ]);
  assert.deepEqual(missing, [{ list: 'registry', address: '/resources/newThing/' }]);
});

function runCheck(dist, list, extraEnv = {}) {
  const env = { ...process.env, DIST_DIR: dist, ADDRESS_LIST: list, ...extraEnv };
  if (!('CI' in extraEnv)) delete env.CI;
  return spawnSync(process.execPath, ['tools/check-addresses-cli.mjs'], { env, encoding: 'utf8' });
}

// A dist folder holding the home page, every registry page and sub-page (except those named in `omit`, a file name or a
// whole address) and, when asked, the ers page.
function fixture(addresses, withErs, omit = []) {
  const dir = mkdtempSync(join(tmpdir(), 'addr-'));
  const list = join(dir, 'list.json');
  writeFileSync(list, JSON.stringify(addresses));
  mkdirSync(join(dir, 'dist'));
  writeFileSync(join(dir, 'dist', 'index.html'), '');
  for (const p of pages) {
    for (const address of addressesOf(p)) {
      if (omit.includes(p.file) || omit.includes(address) || (address === '/resources/ers/' && !withErs)) continue;
      mkdirSync(join(dir, 'dist', ...address.split('/').filter(Boolean)), { recursive: true });
      writeFileSync(join(dir, 'dist', ...address.split('/').filter(Boolean), 'index.html'), '');
    }
  }
  return { dist: join(dir, 'dist'), list };
}

test('the command exits 1 for a missing address and 0 for an intact folder', () => {
  const missing = fixture(['/', '/resources/ers/'], false);
  const r = runCheck(missing.dist, missing.list);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /resources\/ers\//);
  const intact = fixture(['/', '/resources/ers/'], true);
  assert.equal(runCheck(intact.dist, intact.list).status, 0);
});

test('a registry page missing from the build fails even when the protected list is intact', () => {
  const f = fixture(['/'], true, ['gates']);
  const r = runCheck(f.dist, f.list);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /resources\/gates\/.*page registry/);
});

test('a sub-page missing from the build fails even when its product page is there', () => {
  const sub = pages.find(p => p.children?.length);
  const address = `/resources/${sub.file}/${sub.children[0].file}/`;
  const f = fixture(['/'], true, [address]);
  const r = runCheck(f.dist, f.list);
  assert.equal(r.status, 1);
  assert.ok(r.stderr.includes(`${address} (from the page registry`), r.stderr);
  assert.ok(!r.stderr.includes(`/resources/${sub.file}/ (from`), 'the product page itself is not reported');
});

test('a sub-page built with the wrong capitals fails', () => {
  const sub = pages.find(p => p.file === 'nightShifts');
  const address = `/resources/nightShifts/${sub.children[0].file}/`;
  // The whole product is left out: on a case-insensitive disk a lower-case folder would merge into an existing one.
  const f = fixture(['/'], true, ['nightShifts']);
  mkdirSync(join(f.dist, 'resources', 'nightshifts', sub.children[0].file), { recursive: true });
  writeFileSync(join(f.dist, 'resources', 'nightshifts', sub.children[0].file, 'index.html'), '');
  const r = runCheck(f.dist, f.list);
  assert.equal(r.status, 1);
  assert.ok(r.stderr.includes(address), r.stderr);
});

test('a registry page built with the wrong capitals fails', () => {
  const f = fixture(['/'], true, ['discordAPI']);
  mkdirSync(join(f.dist, 'resources', 'discordapi'), { recursive: true });
  writeFileSync(join(f.dist, 'resources', 'discordapi', 'index.html'), '');
  const r = runCheck(f.dist, f.list);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /resources\/discordAPI\//);
});

test('an empty list is refused', () => {
  const f = fixture([], true);
  const r = runCheck(f.dist, f.list);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /no addresses/);
});

test('on CI the overrides are ignored: the real list is checked against dist/', () => {
  // The fixture list is empty and its folder is intact; if the overrides were honoured this would be refused or pass
  // for the wrong reason. The real list against the real dist/ decides instead.
  const f = fixture(['/'], true);
  const r = runCheck(f.dist, f.list, { CI: 'true' });
  assert.match(r.stdout + r.stderr, /dist|addresses/);
  assert.ok(!(r.stdout + r.stderr).includes(f.dist), 'the override folder must not appear');
});
