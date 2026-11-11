import { test, expect } from '@playwright/test';
import { pages, groups, addressOf, childAddressOf } from '../tools/pages.mjs';

// Counts follow the registry, so adding a page does not break these tests.
const products = pages.filter(p => p.group !== 'start');
const scripts = pages.filter(p => p.group === 'scripts');

test('first visit follows the system setting', async ({ browser }) => {
  for (const scheme of ['dark', 'light']) {
    const page = await (await browser.newContext({ colorScheme: scheme })).newPage();
    await page.goto('/resources/policeTape/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', scheme);
  }
});

test('the mode button switches, and the choice survives a reload', async ({ browser }) => {
  const page = await (await browser.newContext({ colorScheme: 'dark' })).newPage();
  await page.goto('/resources/policeTape/');
  await page.getByRole('button', { name: /light|dark/i }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('the switch works without view transitions', async ({ browser }) => {
  const page = await (await browser.newContext({ colorScheme: 'dark' })).newPage();
  await page.addInitScript(() => { delete Document.prototype.startViewTransition; });
  await page.goto('/resources/policeTape/');
  await page.getByRole('button', { name: /light|dark/i }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('the cross-fade is 0.7 s, and near-instant with reduced motion', async ({ page }) => {
  await page.goto('/resources/policeTape/');
  const found = await page.evaluate(() => {
    const out = { normal: null, reduced: null };
    const walk = (rules, reduced) => {
      for (const r of rules) {
        if (r.selectorText) {
          if (r.selectorText.includes('::view-transition-old(root)')) out[reduced ? 'reduced' : 'normal'] = r.style.animationDuration;
        } else if (r.cssRules) {
          walk(r.cssRules, reduced || /prefers-reduced-motion:\s*reduce/.test(r.conditionText || ''));
        }
      }
    };
    for (const sheet of document.styleSheets) walk(sheet.cssRules, false);
    return out;
  });
  expect(found.normal).toBe('0.7s');
  // The build's CSS minifier writes 0.01s as 10ms, so compare in seconds.
  const seconds = (d) => (d.endsWith('ms') ? parseFloat(d) / 1000 : parseFloat(d));
  expect(seconds(found.reduced)).toBeLessThanOrEqual(0.01);
});

test('kit colours and fonts are applied in both modes', async ({ browser }) => {
  const expected = { dark: ['rgb(11, 10, 21)', 'rgb(229, 227, 240)'], light: ['rgb(246, 245, 251)', 'rgb(25, 22, 40)'] };
  for (const scheme of ['dark', 'light']) {
    const page = await (await browser.newContext({ colorScheme: scheme })).newPage();
    await page.goto('/resources/policeTape/');
    const body = page.locator('body');
    await expect(body).toHaveCSS('background-color', expected[scheme][0]);
    await expect(body).toHaveCSS('color', expected[scheme][1]);
    await expect(body).toHaveCSS('font-family', /Manrope/);
    await expect(page.locator('h1').first()).toHaveCSS('font-family', /Tektur/);
  }
});

test('top bar: mark, wordmark, three links, one mode button', async ({ page }) => {
  await page.goto('/resources/policeTape/');
  const header = page.locator('header').first();
  await expect(header.getByText('Nights Software')).toBeVisible();
  for (const name of ['Store', 'Discord', 'YouTube']) await expect(header.getByRole('link', { name })).toBeVisible();
  await expect(header.locator('select')).toHaveCount(0);
});

test('sidebar: three groups, the open page is marked', async ({ page }) => {
  await page.goto('/resources/policeTape/');
  const nav = page.getByRole('navigation', { name: /main/i });
  for (const g of ['Start here', 'Emergency Response Simulator', 'Scripts']) await expect(nav.getByText(g, { exact: true })).toBeVisible();
  await expect(nav.locator('[aria-current="page"]')).toHaveText('Police Tape');
});

test('the mode button says what it will do, and nothing is stored before it is pressed', async ({ browser }) => {
  const page = await (await browser.newContext({ colorScheme: 'dark' })).newPage();
  await page.goto('/resources/policeTape/');
  expect(await page.evaluate(() => localStorage.getItem('starlight-theme'))).toBeNull();
  await page.getByRole('button', { name: 'Switch to light mode' }).click();
  await expect(page.getByRole('button', { name: 'Switch to dark mode' })).toBeVisible();
  await page.getByRole('button', { name: 'Switch to dark mode' }).click();
  await expect(page.getByRole('button', { name: 'Switch to light mode' })).toBeVisible();
});

test('the mode button also works from a light system setting, with nothing stored', async ({ browser }) => {
  const page = await (await browser.newContext({ colorScheme: 'light' })).newPage();
  await page.goto('/resources/policeTape/');
  expect(await page.evaluate(() => localStorage.getItem('starlight-theme'))).toBeNull();
  await page.getByRole('button', { name: 'Switch to dark mode' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.getByRole('button', { name: 'Switch to light mode' })).toBeVisible();
});

test('/favicon.ico still answers, for browsers and crawlers that ask for it by name', async ({ request }) => {
  expect((await request.get('/favicon.ico')).status()).toBe(200);
});

test('kit-btn links in page content are Kit buttons, not content links', async ({ page }) => {
  await page.goto('/resources/acePerms/');
  const btn = page.locator('a.kit-btn').first();
  await expect(btn).toBeVisible();
  await expect(btn).toHaveCSS('text-decoration-line', 'none');
  await expect(btn).toHaveCSS('border-radius', '0px');
  await expect(btn).toHaveCSS('font-family', /Tektur/);
});

test('"on this page" says Top of page and Overview once', async ({ page }) => {
  await page.goto('/resources/policeTape/');
  const toc = page.locator('starlight-toc nav');
  await expect(toc.getByText('Top of page', { exact: true })).toHaveCount(1);
  await expect(toc.getByText('Overview', { exact: true })).toHaveCount(1);
});

test('the open page is scrolled into view in the sidebar on load', async ({ browser }) => {
  const page = await (await browser.newContext({ viewport: { width: 1280, height: 720 } })).newPage();
  await page.goto('/resources/policeTape/');
  await expect(page.locator('nav.sidebar [aria-current="page"]')).toBeInViewport();
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
});

test('the last entry of the sidebar is fully in view when its page is open', async ({ browser }) => {
  const page = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
  await page.goto('/resources/wPerms/');
  const link = page.locator('nav.sidebar [aria-current="page"]');
  await expect(link).toBeInViewport({ ratio: 1 });
});

test('light mode: the search field is visibly different from the bar', async ({ browser }) => {
  const page = await (await browser.newContext({ colorScheme: 'light' })).newPage();
  await page.goto('/resources/policeTape/');
  const bg = (sel) => page.locator(sel).first().evaluate((e) => getComputedStyle(e).backgroundColor);
  expect(await bg('button[data-open-modal]')).toBe('rgb(235, 233, 246)');
});

test('product header: breadcrumb, lead, the two buttons', async ({ page }) => {
  await page.goto('/resources/policeTape/');
  const main = page.locator('main');
  await expect(main.getByRole('navigation', { name: /breadcrumb/i })).toHaveText(/Scripts\s*\/\s*Police Tape/);
  await expect(main.locator('h1')).toHaveText('Police Tape');
  await expect(main.locator('.kit-lead')).toContainText('Seal off any scene');
  await expect(main.getByRole('link', { name: 'Buy on the store' })).toHaveAttribute('href', 'https://store.nights-software.com/package/7724061');
  await expect(main.getByRole('link', { name: 'Watch the showcase' })).toHaveAttribute('href', 'https://youtu.be/3gFb-lHzLnI');
  await expect(main.locator('img.kit-cover')).toHaveCount(0);
});

test('a guide has no buttons; ERS shows its cover', async ({ page }) => {
  await page.goto('/resources/acePerms/');
  await expect(page.getByRole('link', { name: 'Buy on the store' })).toHaveCount(0);
  await expect(page.locator('main').getByRole('navigation', { name: /breadcrumb/i })).toHaveText(/Start here\s*\/\s*ACE Permissions/);
  await page.goto('/resources/ers/');
  await expect(page.locator('img.kit-cover')).toBeVisible();
});

test('callouts carry their own name and colour', async ({ page }) => {
  await page.goto('/resources/policeTape/');
  const caution = page.locator('aside.starlight-aside--caution').first();
  await expect(caution).toBeVisible();
  await expect(caution).toHaveCSS('border-radius', '0px');
  await expect(caution.locator('.starlight-aside__title')).toHaveText(/critical installation order/i);
  const tip = page.locator('aside.starlight-aside--tip').first();
  const colour = (l) => l.locator('.starlight-aside__title').evaluate((e) => getComputedStyle(e).color);
  expect(await colour(caution)).not.toBe(await colour(tip));
});

test('sections and hand-set ids are reachable', async ({ page }) => {
  await page.goto('/resources/nightShifts/#anpr-npc-traffic');
  await expect(page.locator('#anpr-npc-traffic')).toBeInViewport();
});

test('no emoji left in headings, no leftover table of contents', async ({ page }) => {
  await page.goto('/resources/policeTape/');
  const heads = await page.locator('main h2, main h3').allTextContents();
  for (const h of heads) expect(h).not.toMatch(/\p{Extended_Pictographic}/u);
  expect(heads).not.toContain('Table of Contents');
});

test('breadcrumb uses the registry label, which can differ from the title', async ({ page }) => {
  await page.goto('/resources/ers/');
  await expect(page.locator('main').getByRole('navigation', { name: /breadcrumb/i })).toHaveText(/Emergency Response Simulator\s*\/\s*ERS v1/);
  await expect(page.locator('main h1')).toHaveText('Emergency Response Simulator');
});

test('home: title, search, three tiles, a section per product group', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText('Documentation');
  const tiles = page.locator('.kit-tiles a');
  await expect(tiles).toHaveCount(3);
  await expect(tiles.nth(0)).toHaveAttribute('href', '/resources/installation-guide/');
  await expect(tiles.nth(1)).toHaveAttribute('href', '/resources/acePerms/');
  await expect(tiles.nth(2)).toHaveAttribute('href', 'https://discord.nights-software.com/');
  // One section per group other than start that has pages, in the registry's group order; Scripts adds a count.
  const sections = groups.filter(g => g.id !== 'start' && pages.some(p => p.group === g.id));
  await expect(page.locator('.kit-cat h2')).toHaveText(sections.map(g => (g.id === 'scripts' ? new RegExp(`^${g.label}`) : g.label)));
});

test('home: one card per product, each leading to a page that exists', async ({ page, request }) => {
  await page.goto('/');
  const hrefs = await page.locator('.kit-card').evaluateAll(els => els.map(e => e.getAttribute('href')));
  expect(hrefs.length).toBe(products.length);
  for (const h of hrefs) expect((await request.get(h)).status(), h).toBe(200);
  await expect(page.locator('.kit-card img').first()).toBeVisible();
});

test('home has no sidebar; the hexagon keeps its proportions', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('navigation', { name: /main/i })).toBeHidden();
  const box = await page.locator('.kit-hexmark svg').boundingBox();
  expect(box.width / box.height).toBeCloseTo(0.866, 1);   // pointy-top, as on the covers
});

test('search finds a setting from the middle of a page', async ({ page }) => {
  await page.goto('/');
  // The shortcut is wired by the search script, which enables the top bar's button when it is ready.
  await expect(page.locator('button[data-open-modal]')).toBeEnabled();
  await page.keyboard.press('Control+k');
  // The search field is built after the dialog opens; keys typed before it exists are lost.
  await page.getByRole('dialog').getByRole('textbox').fill('EveryoneHasPermission');
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByRole('link').first()).toBeVisible();
  // Both pages really contain the setting; the first link alone would only prove the index answered.
  await expect(dialog.locator('a[href*="/resources/policeTape/"], a[href*="/resources/pedAndPlayerCPR/"]').first()).toBeVisible();
});

// The wide tables of the MDT page moved to its sub-pages, so those are listed too.
for (const path of ['/', '/resources/policeTape/', '/resources/nightShifts/', '/resources/nightShifts/integration/', '/resources/nightShifts/exports-reads/', '/resources/ers/']) {
  test(`no sideways scroll on a phone: ${path}`, async ({ browser }) => {
    const page = await (await browser.newContext({ viewport: { width: 390, height: 844 } })).newPage();
    await page.goto(path);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  });
}

test('a shared link carries the preview picture, and the picture loads', async ({ page }) => {
  for (const address of ['/', '/resources/policeTape/']) {
    await page.goto(address);
    const image = await page.locator('meta[property="og:image"]').getAttribute('content');
    expect(image).toBe('https://docs.nights-software.com/og.jpg');
    expect(await page.locator('meta[name="twitter:image"]').getAttribute('content')).toBe(image);
  }
  // The tag names the live domain; the file itself is checked on the site under test.
  const res = await page.request.get('/og.jpg');
  expect(res.status()).toBe(200);
  expect(res.headers()['content-type']).toContain('image/jpeg');
});

test('unknown address shows the Kit 404 with a way home', async ({ page }) => {
  const res = await page.goto('/resources/nothing-here/');
  expect(res.status()).toBe(404);
  await expect(page.getByRole('navigation', { name: /main/i })).toBeHidden();
  await expect(page.getByRole('link', { name: /home/i })).toBeVisible();
});

test('the large search field on the home page opens the search dialog', async ({ page }) => {
  await page.goto('/');
  await page.locator('.kit-hero-search').click();
  await expect(page.getByRole('dialog')).toBeVisible();
});

test('home shows no last-updated line, no previous/next and no "on this page"', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('main footer .pagination-links a')).toHaveCount(0);
  await expect(page.locator('main footer .meta')).toBeHidden();
  await expect(page.locator('starlight-toc, mobile-starlight-toc')).toHaveCount(0);
});

test('the hexagon mark follows the mode', async ({ browser }) => {
  for (const [scheme, shown] of [['dark', 'dark'], ['light', 'light']]) {
    const page = await (await browser.newContext({ colorScheme: scheme })).newPage();
    await page.goto('/');
    await expect(page.locator(`.kit-hexmark img.kit-hexmark-${shown}`)).toBeVisible();
    await expect(page.locator(`.kit-hexmark img.kit-hexmark-${shown === 'dark' ? 'light' : 'dark'}`)).toBeHidden();
  }
});

test('home cards: the grid has four columns on a wide screen, one on a small phone', async ({ browser }) => {
  const cols = async (width) => {
    const page = await (await browser.newContext({ viewport: { width, height: 900 } })).newPage();
    await page.goto('/');
    return page.locator('.kit-grid').first().evaluate((e) => getComputedStyle(e).gridTemplateColumns.split(' ').length);
  };
  expect(await cols(1280)).toBe(4);
  expect(await cols(900)).toBe(3);
  expect(await cols(600)).toBe(2);
  expect(await cols(430)).toBe(2);
  expect(await cols(390)).toBe(1);
});

test('text selection is violet on every page, in both modes', async ({ browser }) => {
  for (const scheme of ['dark', 'light']) {
    const page = await (await browser.newContext({ colorScheme: scheme })).newPage();
    await page.goto('/resources/policeTape/');
    const p = page.locator('main .sl-markdown-content p').first();
    const sel = await p.evaluate((e) => { const s = getComputedStyle(e, '::selection'); return [s.backgroundColor, s.color]; });
    expect(sel).toEqual(['rgb(91, 33, 230)', 'rgb(255, 255, 255)']);
  }
});

for (const path of ['/', '/resources/nothing-here/']) {
  test(`a page without a sidebar keeps the mode button and the three links on a phone: ${path}`, async ({ browser }) => {
    for (const width of [390, 360]) {
      const page = await (await browser.newContext({ viewport: { width, height: 844 }, colorScheme: 'dark' })).newPage();
      await page.goto(path);
      const mode = page.locator('header').getByRole('button', { name: /Switch to/ });
      await expect(mode).toBeVisible();
      await mode.click();
      await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
      const footer = page.locator('footer.kit-footer');
      for (const name of ['Store', 'Discord', 'YouTube']) await expect(footer.getByRole('link', { name })).toBeVisible();
      await expect(footer).toContainText(`© ${new Date().getFullYear()} Nights Software`);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    }
  });
}

test('a page with a sidebar keeps its own footer, not the link row', async ({ page }) => {
  await page.goto('/resources/policeTape/');
  await expect(page.locator('footer.kit-footer')).toHaveCount(0);
  await expect(page.locator('main footer .pagination-links')).toHaveCount(1);
});

test('the home catalogue lists Scripts in the sidebar order', async ({ page }) => {
  await page.goto('/');
  const cards = await page.locator('.kit-cat').filter({ hasText: /^Scripts/ }).locator('.kit-card b').allTextContents();
  await page.goto('/resources/policeTape/');
  const rows = page.locator('nav.sidebar details').filter({ has: page.locator('summary', { hasText: 'Scripts' }) }).locator(':scope > ul > li');
  const side = await rows.evaluateAll((items) => items.map((li) => (li.querySelector(':scope > details > summary') ?? li.querySelector(':scope > a')).textContent));
  expect(cards.length).toBe(scripts.length);
  expect(cards.map((t) => t.trim())).toEqual(side.map((t) => t.trim()));
});

test('selected text inside a filled button stays readable, in both modes', async ({ browser }) => {
  const expected = { dark: ['rgb(255, 255, 255)', 'rgb(11, 10, 21)'], light: ['rgb(11, 9, 22)', 'rgb(246, 245, 251)'] };
  for (const scheme of ['dark', 'light']) {
    const page = await (await browser.newContext({ colorScheme: scheme })).newPage();
    await page.goto('/resources/policeTape/');
    const sel = await page.locator('a.kit-btn--fill').first().evaluate((e) => { const s = getComputedStyle(e, '::selection'); return [s.backgroundColor, s.color]; });
    expect(sel).toEqual(expected[scheme]);
  }
});

// Products that are no longer provided: their pages were removed on purpose, so their addresses must stay gone.
const REMOVED = [
  { label: 'Objectives', file: 'objectives' },
  { label: 'Configurable Zones', file: 'configurableZones' },
  { label: 'Gemstone Mining Job', file: 'gemstoneMiningJob' },
];

for (const { label, file } of REMOVED) {
  test(`the removed ${label} page is gone from the sidebar, the home page and the address`, async ({ page }) => {
    await page.goto('/resources/policeTape/');
    await expect(page.getByRole('navigation', { name: /main/i }).getByRole('link', { name: label })).toHaveCount(0);
    await page.goto('/');
    await expect(page.locator(`a[href*="/resources/${file}"]`)).toHaveCount(0);
    const res = await page.goto(`/resources/${file}/`);
    expect(res.status()).toBe(404);
    await expect(page.getByRole('link', { name: /home/i })).toBeVisible();
  });
}

// ───────── polish round ─────────

const phone = { width: 390, height: 844 };
const rgb = { dark: { panel2: 'rgb(29, 26, 53)', accent: 'rgb(165, 139, 255)', line: 'rgb(38, 35, 67)' }, light: { panel2: 'rgb(235, 233, 246)', accent: 'rgb(91, 33, 230)', line: 'rgb(219, 216, 236)' } };

test('phone: a two-column table fits the screen with both columns readable', async ({ browser }) => {
  const page = await (await browser.newContext({ viewport: phone })).newPage();
  await page.goto('/resources/policeTape/');
  const table = page.locator('#configuration-files').locator('xpath=ancestor::div[contains(@class,"sl-heading-wrapper")]/following-sibling::table[1]');
  await table.scrollIntoViewIfNeeded();
  const m = await table.evaluate((t) => ({ scroll: t.scrollWidth, client: t.clientWidth, widths: [...t.querySelectorAll('tr')].flatMap((r) => [...r.cells].map((c) => c.getBoundingClientRect().width)) }));
  expect(m.scroll).toBe(m.client);
  for (const w of m.widths) expect(w).toBeGreaterThanOrEqual(120);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  // A table that fits shows no cue.
  expect(await table.evaluate((t) => getComputedStyle(t).boxShadow)).toBe('none');
});

test('phone: a wide table scrolls inside its own box and shows the cue on the side with more', async ({ browser }) => {
  const page = await (await browser.newContext({ viewport: phone })).newPage();
  await page.goto('/resources/nightShifts/integration/');
  const table = page.locator('.sl-markdown-content table').filter({ has: page.locator('tr:first-child > :nth-child(5)') }).first();
  await table.scrollIntoViewIfNeeded();
  const m = await table.evaluate((t) => ({ scroll: t.scrollWidth, client: t.clientWidth }));
  expect(m.scroll).toBeGreaterThan(m.client);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  const shadow = () => table.evaluate((t) => getComputedStyle(t).boxShadow);
  const atStart = await shadow();
  expect(atStart).not.toBe('none');
  await table.evaluate((t) => { t.scrollLeft = t.scrollWidth; });
  await expect.poll(shadow).not.toBe(atStart);
  expect(await shadow()).not.toBe('none');
});

test('desktop: code in a table cell does not wrap where there is room', async ({ browser }) => {
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
  await page.goto('/resources/policeTape/');
  expect(await page.locator('.sl-markdown-content td code').first().evaluate((e) => getComputedStyle(e).overflowWrap)).not.toBe('anywhere');
});

for (const path of ['/resources/nightShifts/', '/resources/nightShifts/integration/', '/resources/nightShifts/exports-reads/', '/resources/ers/']) {
  test(`phone: tables never push the page sideways and keep column widths: ${path}`, async ({ browser }) => {
    const page = await (await browser.newContext({ viewport: phone })).newPage();
    await page.goto(path);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
    const narrow = await page.evaluate(() => [...document.querySelectorAll('.sl-markdown-content table tbody td')].filter((c) => c.getBoundingClientRect().width < 100).length);
    expect(narrow).toBe(0);
  });
}

test('phone top bar: the icon buttons are Kit buttons in both modes', async ({ browser }) => {
  for (const scheme of ['dark', 'light']) {
    const page = await (await browser.newContext({ viewport: phone, colorScheme: scheme })).newPage();
    await page.goto('/resources/policeTape/');
    const bodyColour = await page.locator('body').evaluate((e) => getComputedStyle(e).color);
    for (const sel of ['.sl-menu-button', 'button[data-open-modal]']) {
      const b = page.locator(sel).first();
      const box = await b.boundingBox();
      expect(box.width, sel).toBeGreaterThanOrEqual(44);
      expect(box.height, sel).toBeGreaterThanOrEqual(44);
      await expect(b, sel).toHaveCSS('background-color', rgb[scheme].panel2);
      await expect(b, sel).toHaveCSS('border-top-width', '0px');
      await expect(b, sel).toHaveCSS('border-top-left-radius', '0px');
      expect(await b.evaluate((e) => getComputedStyle(e).clipPath), sel).not.toBe('none');
      expect(await b.evaluate((e) => getComputedStyle(e).color), sel).toBe(bodyColour);
    }
  }
});

test('phone top bar without a sidebar: the mode button is a sibling of the search button on one baseline', async ({ browser }) => {
  for (const scheme of ['dark', 'light']) {
    const page = await (await browser.newContext({ viewport: phone, colorScheme: scheme })).newPage();
    await page.goto('/');
    const mode = page.locator('header').getByRole('button', { name: /Switch to/ });
    const search = page.locator('button[data-open-modal]');
    const [a, b] = [await mode.boundingBox(), await search.boundingBox()];
    expect(a.width).toBeGreaterThanOrEqual(44);
    expect(a.height).toBeGreaterThanOrEqual(44);
    expect(Math.abs(a.y + a.height / 2 - (b.y + b.height / 2))).toBeLessThanOrEqual(1);
    await expect(mode).toHaveCSS('background-color', rgb[scheme].panel2);
    await expect(mode).toHaveCSS('border-top-width', '0px');
  }
});

for (const path of ['/resources/policeTape/', '/']) {
  test(`keyboard focus: every one of the first 12 stops shows an accent ring: ${path}`, async ({ browser }) => {
    for (const scheme of ['dark', 'light']) {
      const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: scheme })).newPage();
      await page.goto(path);
      await expect(page.locator('button[data-open-modal]')).toBeEnabled();
      for (let i = 1; i <= 12; i++) {
        await page.keyboard.press('Tab');
        const r = await page.evaluate(() => {
          const e = document.activeElement;
          const cs = getComputedStyle(e);
          return { tag: e.tagName + '.' + e.className, outline: [cs.outlineStyle, cs.outlineWidth, cs.outlineColor], shadow: cs.boxShadow };
        });
        const ring = (r.outline[0] !== 'none' && parseFloat(r.outline[1]) >= 2 && r.outline[2] === rgb[scheme].accent) || r.shadow.includes(rgb[scheme].accent);
        expect(ring, `${scheme} stop ${i} ${JSON.stringify(r)}`).toBe(true);
      }
    }
  });
}

test('keyboard focus: links, buttons, summaries and tables take the same ring', async ({ browser }) => {
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: 'dark' })).newPage();
  await page.goto('/resources/policeTape/');
  await expect(page.locator('button[data-open-modal]')).toBeEnabled();
  const selectors = ['button[data-open-modal]', '.sidebar-content ul a', '.sidebar-content summary', 'a.kit-btn--fill', 'a.kit-btn:not(.kit-btn--fill)', 'main footer .pagination-links a', '.sl-markdown-content p a:not(.kit-btn, .sl-anchor-link)', 'starlight-toc a', '.expressive-code .copy button'];
  for (const sel of selectors) {
    const el = page.locator(sel).first();
    expect(await el.count(), sel).toBeGreaterThan(0);
    await el.scrollIntoViewIfNeeded();
    await el.focus();
    // Tab away and back, so the browser treats the focus as the keyboard's.
    await page.keyboard.press('Tab');
    await page.keyboard.press('Shift+Tab');
    const cs = await el.evaluate((e) => { const c = getComputedStyle(e); return [document.activeElement === e, c.outlineStyle, c.outlineWidth, c.outlineColor, c.boxShadow]; });
    expect(cs[0], `${sel} holds focus`).toBe(true);
    const ring = (cs[1] === 'solid' && cs[2] === '2px' && cs[3] === rgb.dark.accent) || cs[4].includes(rgb.dark.accent);
    expect(ring, `${sel} ${JSON.stringify(cs)}`).toBe(true);
  }
});

test('keyboard focus: a table that scrolls sideways can be focused and shows the ring', async ({ browser }) => {
  const page = await (await browser.newContext({ viewport: phone, colorScheme: 'dark' })).newPage();
  await page.goto('/resources/nightShifts/integration/');
  const table = page.locator('.sl-markdown-content table[tabindex]').first();
  await expect(table).toHaveCount(1);
  await table.focus();
  await page.keyboard.press('Shift+Tab');
  await page.keyboard.press('Tab');
  expect(await table.evaluate((e) => { const c = getComputedStyle(e); return [document.activeElement === e, c.outlineStyle, c.outlineWidth, c.outlineColor]; })).toEqual([true, 'solid', '2px', rgb.dark.accent]);
});

test('search dialog is a Kit surface: square, token border, accent matches', async ({ browser }) => {
  for (const scheme of ['dark', 'light']) {
    const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: scheme })).newPage();
    await page.goto('/resources/policeTape/');
    await expect(page.locator('button[data-open-modal]')).toBeEnabled();
    await page.keyboard.press('Control+k');
    const dialog = page.getByRole('dialog');
    const input = dialog.getByRole('textbox');
    await input.fill('permissions');
    await expect(dialog.getByRole('link').first()).toBeVisible();
    await expect(input).toHaveCSS('border-top-left-radius', '0px');
    await expect(input).toHaveCSS('border-top-color', rgb[scheme].accent);
    await expect(dialog.locator('mark').first()).toHaveCSS('color', rgb[scheme].accent);
    await expect(dialog).toHaveCSS('border-top-color', rgb[scheme].line);
    await expect(dialog).toHaveCSS('box-shadow', 'none');
    await dialog.getByRole('link').first().focus();
    await expect(input).toHaveCSS('border-top-color', rgb[scheme].line);
  }
});

test('"on this page" opens the sub-entries of the current section only', async ({ browser }) => {
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
  await page.goto('/resources/policeTape/');
  const toc = page.locator('starlight-toc');
  await expect(toc.getByRole('link', { name: 'Language' })).toBeHidden();
  await expect(toc.getByRole('link', { name: 'Configuration Setup' })).toBeVisible();
  await page.evaluate(() => document.getElementById('configuration-setup').scrollIntoView());
  await expect(toc.getByRole('link', { name: 'Language' })).toBeVisible();
  await expect(toc.getByRole('link', { name: 'Framework Compatibility' })).toBeHidden();
});

test('"on this page": clicking a folded entry still jumps there', async ({ browser }) => {
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
  await page.goto('/resources/policeTape/');
  await page.locator('starlight-toc').getByRole('link', { name: 'Configuration Setup' }).click();
  await expect(page.locator('#configuration-setup')).toBeInViewport();
});

test('"on this page" shows the full list without JavaScript, and on a phone', async ({ browser }) => {
  const plain = await (await browser.newContext({ viewport: { width: 1440, height: 900 }, javaScriptEnabled: false })).newPage();
  await plain.goto('/resources/policeTape/');
  await expect(plain.locator('starlight-toc').getByRole('link', { name: 'Language' })).toBeVisible();
  const mobile = await (await browser.newContext({ viewport: phone })).newPage();
  await mobile.goto('/resources/policeTape/');
  await mobile.locator('mobile-starlight-toc summary').click();
  await expect(mobile.locator('mobile-starlight-toc').getByRole('link', { name: 'Language' })).toBeVisible();
});

test('a page with a sidebar ends with the copyright at the left of the last-updated line', async ({ page }) => {
  await page.goto('/resources/policeTape/');
  const meta = page.locator('main footer .meta');
  await expect(meta).toContainText(`© ${new Date().getFullYear()} Nights Software`);
  await expect(meta).toContainText('Last updated');
  const [c, d] = [await meta.locator('.kit-copy').boundingBox(), await meta.locator('time').boundingBox()];
  expect(c.x).toBeLessThan(d.x);
  expect(Math.abs(c.y - d.y)).toBeLessThanOrEqual(4);
});

test('dates read day first', async ({ page }) => {
  await page.goto('/resources/policeTape/');
  await expect(page.locator('main footer .meta time')).toHaveText(/^\d{1,2} [A-Z][a-z]{2} \d{4}$/);
});

// Products whose long page is split into a folder of pages.
const split = pages.filter(p => p.children);
const groupLabelOf = (p) => groups.find(g => g.id === p.group).label;
const sidebarGroup = (page, p) => page.locator('nav.sidebar details').filter({ has: page.locator(':scope > summary', { hasText: new RegExp(`^\\s*${p.label.replace(/[()]/g, '\\$&')}\\s*$`) }) });

for (const p of split) {
  test(`sidebar: ${p.label} is a sub-group with Overview and its pages in order, and opening a page keeps it open and marks it`, async ({ page }) => {
    // Away from the product the sub-group is closed.
    await page.goto('/resources/policeTape/');
    await expect(sidebarGroup(page, p)).not.toHaveAttribute('open', '');
    await page.goto(addressOf(p.file));
    const group = sidebarGroup(page, p);
    await expect(group).toHaveAttribute('open', '');
    await expect(group.locator('a')).toHaveText(['Overview', ...p.children.map(c => c.label)]);
    const hrefs = await group.locator('a').evaluateAll((links) => links.map((a) => new URL(a.href).pathname));
    expect(hrefs).toEqual([addressOf(p.file), ...p.children.map(c => childAddressOf(p, c))]);
    await expect(page.locator('nav.sidebar [aria-current="page"]')).toHaveText('Overview');
    for (const c of p.children) {
      await page.goto(childAddressOf(p, c));
      await expect(page.locator('nav.sidebar [aria-current="page"]')).toHaveCount(1);
      await expect(page.locator('nav.sidebar [aria-current="page"]')).toHaveText(c.label);
      await expect(sidebarGroup(page, p)).toHaveAttribute('open', '');
    }
  });

  test(`${p.label}: a sub-page has the breadcrumb Group / Product / Page, the short label as its heading and a longer tab title`, async ({ page }) => {
    const c = p.children[0];
    await page.goto(childAddressOf(p, c));
    const crumb = page.locator('main').getByRole('navigation', { name: /breadcrumb/i });
    await expect(crumb).toHaveText(new RegExp(`^\\s*${groupLabelOf(p)}\\s*/\\s*${p.label}\\s*/\\s*${c.label}\\s*$`));
    await expect(crumb.getByRole('link', { name: p.label })).toHaveAttribute('href', addressOf(p.file));
    await expect(page.locator('main h1')).toHaveText(c.label);
    await expect(page).toHaveTitle(`${c.label} \u00b7 ${p.label} | Nights Software Docs`);
  });
}

test('the store button stays on the overview of a split product, not on its sub-pages', async ({ page }) => {
  for (const file of ['ers', 'nightShifts']) {
    await page.goto(addressOf(file));
    await expect(page.getByRole('link', { name: 'Buy on the store' })).toHaveCount(1);
    const row = pages.find(p => p.file === file);
    for (const c of row.children) {
      await page.goto(childAddressOf(row, c));
      await expect(page.getByRole('link', { name: 'Buy on the store' })).toHaveCount(0);
      await expect(page.locator('img.kit-cover')).toHaveCount(0);
    }
  }
});

test('previous and next at the foot of a page walk through a product in sidebar order', async ({ page }) => {
  for (const p of split) {
    const order = [addressOf(p.file), ...p.children.map(c => childAddressOf(p, c))];
    for (const [i, address] of order.entries()) {
      await page.goto(address);
      const next = page.locator('.pagination-links a[rel="next"]');
      const prev = page.locator('.pagination-links a[rel="prev"]');
      if (i + 1 < order.length) await expect(next).toHaveAttribute('href', order[i + 1]);
      else await expect(next).not.toHaveAttribute('href', order[0]);
      if (i > 0) await expect(prev).toHaveAttribute('href', order[i - 1]);
    }
  }
});

test('old links to anchors of the split pages land on the heading, wherever it is now', async ({ page }) => {
  await page.goto('/resources/nightShifts/#getversion');
  await expect(page).toHaveURL(/\/resources\/nightShifts\/exports-reads\/#getversion$/);
  await expect(page.locator('#getversion')).toBeInViewport();
  await page.goto('/resources/ers/#exports');
  await expect(page).toHaveURL(/\/resources\/ers\/exports\/$/);
  await expect(page.locator('main h1')).toHaveText('Exports');
  await page.goto('/resources/discordAPI/#troubleshooting');
  await expect(page).toHaveURL(/\/resources\/discordAPI\/troubleshooting\/#troubleshooting$/);
  await page.goto('/resources/nightShifts/#exports');
  await expect(page).toHaveURL(/\/resources\/nightShifts\/exports\/$/);
});

test('an anchor that stayed on the overview does not redirect', async ({ page }) => {
  await page.goto('/resources/nightShifts/#support');
  await expect(page).toHaveURL(/\/resources\/nightShifts\/#support$/);
  await expect(page.locator('#support')).toBeInViewport();
  await page.goto('/resources/ers/#support--community');
  await expect(page).toHaveURL(/\/resources\/ers\/#support--community$/);
  await expect(page.locator('#support--community')).toBeInViewport();
});

test('the redirect script is on the three overviews and nowhere else', async ({ request }) => {
  const has = async (path) => (await (await request.get(path)).text()).includes('location.replace(');
  for (const p of split) {
    expect(await has(addressOf(p.file)), p.file).toBe(true);
    expect(await has(childAddressOf(p, p.children[0])), p.file + ' child').toBe(false);
  }
  expect(await has('/resources/policeTape/')).toBe(false);
  expect(await has('/')).toBe(false);
});

test('search: pages of a split product are found under their product name, not as a bare "Installation"', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('button[data-open-modal]')).toBeEnabled();
  await page.keyboard.press('Control+k');
  const dialog = page.getByRole('dialog');
  await dialog.getByRole('textbox').fill('Installation');
  const titles = dialog.locator('.pagefind-ui__result-inner > .pagefind-ui__result-title a');
  await expect(titles.first()).toBeVisible();
  const found = await titles.evaluateAll((links) => links.map((a) => ({ text: a.textContent.trim(), path: new URL(a.href).pathname })));
  for (const text of ['Installation \u00b7 ERS v1', 'Installation \u00b7 Night Shifts MDT', 'Installation & Setup \u00b7 Discord API']) {
    expect(found.map(f => f.text), text).toContain(text);
  }
  // No page-level result of a sub-page may lack its product.
  for (const f of found.filter(f => /^\/resources\/(ers|nightShifts|discordAPI)\/[^/]+\/$/.test(f.path))) expect(f.text, f.path).toContain(' \u00b7 ');
});

for (const p of split) {
  for (const address of [addressOf(p.file), ...p.children.map(c => childAddressOf(p, c))]) {
    test(`one H1 and no skipped heading level: ${address}`, async ({ page }) => {
      await page.goto(address);
      const levels = await page.locator('main :is(h1, h2, h3, h4, h5, h6)').evaluateAll((hs) => hs.map((h) => Number(h.tagName[1])));
      expect(levels.filter(l => l === 1)).toHaveLength(1);
      expect(levels[0]).toBe(1);
      levels.forEach((l, i) => { if (i > 0) expect(l, `heading ${i}`).toBeLessThanOrEqual(levels[i - 1] + 1); });
    });
  }
}
