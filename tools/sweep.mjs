// Whole-site sweep: node tools/sweep.mjs   (npm run sweep)
// Loads every protected address plus an unknown one in both modes at a desktop and a phone width,
// prints a table and exits 1 on any failure. Needs a fresh `npm run build` and Chrome.
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { chromium } from '@playwright/test';
import { startPreview } from './lib/preview.mjs';
import { pages, addressOf } from './pages.mjs';

const UNKNOWN = '/this-address-does-not-exist/';
// SWEEP_ONLY=/a/,/b/ narrows the run while a failure is being fixed.
const only = process.env.SWEEP_ONLY?.split(',');
// The protected list plus the registry, so pages added later are swept too.
const addresses = only ?? [...new Set([...JSON.parse(readFileSync('tools/addresses.json', 'utf8')), ...pages.map(p => addressOf(p.file))]), UNKNOWN];
const viewports = [{ width: 1280, height: 800 }, { width: 390, height: 844 }];
const modes = ['dark', 'light'];

// Runs inside the page.
function pageChecks() {
  const out = {};
  const main = document.querySelector('main');
  const h1s = [...document.querySelectorAll('h1')];
  out.h1 = h1s.length === 1 && h1s[0].textContent.trim() ? '' : `${h1s.length} h1 (${h1s.map(h => JSON.stringify(h.textContent.trim())).join(', ')})`;
  out.overflow = document.documentElement.scrollWidth - innerWidth;

  const leaks = [];
  out.mainText = main ? main.textContent.trim().length : 0;
  if (main) {
    const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      if (n.parentElement.closest('pre, code, script, style')) continue;
      const text = n.data;
      for (const marker of ['{:', ':::', '{#', 'markdown="', 'undefined', 'NaN', '[object Object]']) {
        if (text.includes(marker)) leaks.push(`${marker} in "${text.trim().slice(0, 60)}"`);
      }
      // A marker that leaked on the second or later line of a paragraph sits inside the same text node.
      for (const line of text.split(String.fromCharCode(10))) {
        if (line.trimStart().startsWith('> ')) leaks.push(`"> " in "${line.trim().slice(0, 60)}"`);
      }
    }
  }
  out.leaks = leaks;

  const radius = [];
  const scope = [...(main ? main.querySelectorAll('*') : []), ...document.querySelectorAll('header, header *')];
  for (const el of scope) {
    const cs = getComputedStyle(el);
    const r = [cs.borderTopLeftRadius, cs.borderTopRightRadius, cs.borderBottomRightRadius, cs.borderBottomLeftRadius];
    if (r.some(v => v !== '0px')) {
      const cls = typeof el.className === 'string' && el.className.trim() ? '.' + el.className.trim().split(/\s+/).join('.') : '';
      radius.push(`${el.tagName.toLowerCase()}${cls} ${r.join('/')}`);
    }
  }
  out.radius = [...new Set(radius)];
  out.radiusExamined = scope.length;

  out.links = [...new Set([...document.querySelectorAll('a[href^="/"]')].map(a => a.getAttribute('href')).filter(h => !h.startsWith('//')))];

  const sidebar = document.querySelector('.sidebar-content');
  out.hasSidebar = !!sidebar;
  if (sidebar) {
    const current = sidebar.querySelectorAll('[aria-current="page"]');
    out.currentCount = current.length;
    if (current[0]) {
      const r = current[0].getBoundingClientRect();
      out.currentInView = r.top >= 0 && r.bottom <= innerHeight && r.left >= 0 && r.right <= innerWidth;
    }
  }
  const imgs = [...document.images];
  out.imagesChecked = imgs.length;
  out.imagesBad = imgs.filter(i => !i.complete || i.naturalWidth === 0).map(i => i.currentSrc || i.src || '(no src)');
  out.counts = {
    aside: document.querySelectorAll('aside.starlight-aside').length,
    pre: main ? main.querySelectorAll('pre').length : 0,
    table: main ? main.querySelectorAll('table').length : 0,
    img: main ? main.querySelectorAll('img').length : 0,
    details: main ? main.querySelectorAll('details').length : 0,
  };
  return out;
}

function withTimeout(ms, promise) {
  let timer;
  const limit = new Promise((_, reject) => { timer = setTimeout(() => reject(new Error(`no answer after ${ms / 1000} s`)), ms); });
  return Promise.race([promise, limit]).finally(() => clearTimeout(timer));
}

async function scrollThrough(page) {
  await page.evaluate(async () => {
    // Images inside a closed <details> in the page are never loaded; open them so they have to prove themselves.
    // The sidebar's own groups are <details> too and stay as the visitor finds them.
    document.querySelectorAll('main details').forEach(d => { d.open = true; });
    const step = Math.max(300, innerHeight - 100);
    // The cap keeps a page that grows as it is scrolled from holding the sweep forever.
    for (let y = 0, i = 0; y < document.documentElement.scrollHeight && i < 200; y += step, i++) {
      scrollTo(0, y);
      await new Promise(r => setTimeout(r, 80));
    }
    scrollTo(0, document.documentElement.scrollHeight);
    await new Promise(r => setTimeout(r, 150));
    scrollTo(0, 0);
    // A lazy image the browser has begun to fetch but not finished is not broken yet; give each up to 15 s.
    const settle = img => img.complete ? null : new Promise(done => {
      img.addEventListener('load', done, { once: true });
      img.addEventListener('error', done, { once: true });
      setTimeout(done, 15000);
    });
    await Promise.all([...document.images].map(settle));
  });
  await page.waitForLoadState('networkidle');
}

// What a page's source says it contains, to compare with what the browser rendered.
function countSource(file) {
  let asides = 0, fences = 0, open = null;
  for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
    const bare = line.replace(/^\s*(?:>\s*)*/, '');
    const m = bare.match(/^(`{3,}|~{3,})/);
    if (open) {
      if (m && m[1][0] === open[0] && m[1].length >= open.length && bare.trim() === m[1]) open = null;
      continue;
    }
    if (m) { open = m[1]; fences++; continue; }
    if (/^:::[a-z]/i.test(bare)) asides++;
  }
  return { asides, fences };
}

// Source files map one to one onto addresses: / is index.mdx, /resources/<name>/ is resources/<name>.md.
function sourceFor(address) {
  if (address === '/') return 'src/content/docs/index.mdx';
  const m = address.match(/^\/resources\/([^/]+)\/$/);
  return m ? `src/content/docs/resources/${m[1]}.md` : null;
}

const { base, stop } = await startPreview(4324);
const failures = [];
const rows = new Map();
const internalLinks = new Set();
let browser;
try {
  browser = await chromium.launch({ channel: 'chrome' });
  for (const address of addresses) {
    const row = { address, fails: 0, counts: null };
    rows.set(address, row);
    const isUnknown = address === UNKNOWN;
    for (const mode of modes) {
      for (const vp of viewports) {
        const combo = `${mode} ${vp.width}`;
        const fail = (kind, detail) => { failures.push({ address, combo, kind, detail }); row.fails++; };
        const context = await browser.newContext({ colorScheme: mode, viewport: vp });
        const page = await context.newPage();
        const consoleErrors = [];
        page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text()); });
        page.on('pageerror', e => fail('page error', e.message));
        page.on('requestfailed', r => fail('request failed', `${r.url()} ${r.failure()?.errorText}`));
        page.on('response', r => {
          // The unknown address answers its own document with 404 by design.
          if (r.status() >= 400 && !(isUnknown && r.url() === base + address)) fail('bad response', `${r.status()} ${r.url()}`);
        });
        try {
          await withTimeout(90000, (async () => {
          const res = await page.goto(base + address, { waitUntil: 'load' });
          const want = isUnknown ? 404 : 200;
          if (res.status() !== want) fail('status', `${res.status()} (wanted ${want})`);
          await scrollThrough(page);
          // The browser logs the 404 document's own failed load; that is the point of that page.
          for (const text of consoleErrors) {
            if (!(isUnknown && /Failed to load resource.*404/.test(text))) fail('console error', text.slice(0, 200));
          }
          const r = await page.evaluate(pageChecks);
          for (const src of r.imagesBad) fail('broken image', src);
          if (r.mainText === 0) fail('main', 'missing or empty');
          if (r.radiusExamined === 0) fail('corner check', 'examined no elements');
          if (r.overflow > 0) fail('horizontal overflow', `${r.overflow}px`);
          if (r.h1) fail('h1', r.h1);
          for (const l of r.leaks) fail('leaked markup', l);
          for (const x of r.radius) fail('rounded corner', x);
          if (r.hasSidebar) {
            if (r.currentCount !== 1) fail('sidebar current', `${r.currentCount} aria-current entries`);
            else if (vp.width === 1280 && !r.currentInView) fail('sidebar current', 'not in the viewport');
          } else if (!isUnknown && address !== '/') {
            fail('sidebar', 'page has no sidebar');
          }
          r.links.forEach(l => internalLinks.add(l.split('#')[0].split('?')[0] || '/'));
          if (mode === 'dark' && vp.width === 1280) Object.assign(row, { counts: r.counts, images: r.imagesChecked, radius: r.radiusExamined });
          })());
        } catch (e) {
          fail('exception', e.message.split('\n')[0]);
        }
        await context.close();
      }
    }
    process.stdout.write(row.fails ? 'F' : '.');
  }
  console.log('');

  for (const link of internalLinks) {
    const res = await fetch(base + link, { redirect: 'follow' }).catch(() => null);
    if (!res || res.status !== 200) {
      failures.push({ address: '(links)', combo: '', kind: 'internal link', detail: `${link} -> ${res ? res.status : 'no answer'}` });
    }
  }

  const totals = { aside: 0, pre: 0, table: 0, img: 0, details: 0 };
  const keys = Object.keys(totals);
  const srcTotals = { asides: 0, fences: 0 };
  let imagesChecked = 0, radiusExamined = 0, pagesCompared = 0;
  console.log('address'.padEnd(40), 'fails', ...keys.map(k => k.padStart(7)), 'images'.padStart(7), 'radius'.padStart(7), 'vs source');
  for (const row of rows.values()) {
    const c = row.counts ?? {};
    for (const k of keys) totals[k] += c[k] ?? 0;
    imagesChecked += row.images ?? 0;
    radiusExamined += row.radius ?? 0;
    // Compared page by page, so a block missing on one page cannot cancel an extra one on another.
    let verdict = '-';
    const file = sourceFor(row.address);
    if (file && row.counts) {
      const want = countSource(file);
      pagesCompared++;
      srcTotals.asides += want.asides;
      srcTotals.fences += want.fences;
      verdict = c.aside === want.asides && c.pre === want.fences ? 'match' : `MISMATCH (aside ${c.aside}/${want.asides}, pre ${c.pre}/${want.fences})`;
      if (verdict !== 'match') failures.push({ address: row.address, combo: 'dark 1280', kind: 'source comparison', detail: verdict });
    }
    console.log(row.address.padEnd(40), String(row.fails).padStart(5), ...keys.map(k => String(c[k] ?? '-').padStart(7)), String(row.images ?? '-').padStart(7), String(row.radius ?? '-').padStart(7), verdict);
  }
  console.log(`
totals: ${keys.map(k => `${k} ${totals[k]}`).join(', ')}`);
  console.log(`sources of the ${pagesCompared} pages compared: ::: openings ${srcTotals.asides}, fenced code blocks ${srcTotals.fences}`);
  console.log(`per page: ${pagesCompared} compared, ${failures.filter(f => f.kind === 'source comparison').length} mismatches`);
  console.log(`images checked (dark 1280, details opened): ${imagesChecked}; elements examined by the corner check: ${radiusExamined}`);
  console.log(`unique internal links checked: ${internalLinks.size}`);
  console.log(`pages x combinations: ${addresses.length} x ${modes.length * viewports.length} = ${addresses.length * modes.length * viewports.length}`);

  const byKind = {};
  for (const f of failures) byKind[f.kind] = (byKind[f.kind] ?? 0) + 1;
  console.log(`failures: ${failures.length}`, byKind);
  for (const f of failures) console.log(`  ${f.address} [${f.combo}] ${f.kind}: ${f.detail}`);
  mkdirSync('.shots', { recursive: true });
  writeFileSync('.shots/sweep.json', JSON.stringify({ totals, srcTotals, links: internalLinks.size, failures }, null, 2));
  process.exitCode = failures.length ? 1 : 0;
} finally {
  await browser?.close();
  await stop();
}
