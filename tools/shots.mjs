// Screenshots for the visual check against the mock-up: node tools/shots.mjs
// Writes .shots/<page>-<mode>-<width>.png (git-ignored). Needs a fresh `npm run build` and Chrome.
import { mkdirSync } from 'node:fs';
import { chromium } from '@playwright/test';
import { startPreview } from './lib/preview.mjs';

const pages = { home: '/', ers: '/resources/ers/', policeTape: '/resources/policeTape/', nightShifts: '/resources/nightShifts/' };
const widths = [1920, 1280, 390];
const modes = ['dark', 'light'];

mkdirSync('.shots/slices', { recursive: true });
const { base, stop } = await startPreview(4323);
let browser;
try {
  browser = await chromium.launch({ channel: 'chrome' });
  for (const mode of modes) {
    for (const width of widths) {
      const context = await browser.newContext({ colorScheme: mode, viewport: { width, height: width === 390 ? 844 : 900 } });
      const page = await context.newPage();
      for (const [name, path] of Object.entries(pages)) {
        await page.goto(base + path, { waitUntil: 'networkidle' });
        await page.evaluate(() => document.fonts.ready);
        // Lazy covers must be in view to be in the picture.
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); }
          scrollTo(0, 0);
        });
        await page.waitForTimeout(300);
        // Chrome tiles screenshots taller than ~16000 px, so long pages are cut to their first screens.
        const height = await page.evaluate(() => Math.min(document.documentElement.scrollHeight, 3200));
        await page.screenshot({ path: `.shots/${name}-${mode}-${width}.png`, fullPage: true, clip: { x: 0, y: 0, width, height } });
        console.log(`.shots/${name}-${mode}-${width}.png`);
        // Sections of 1500 px, legible at full size: the first three, then one from the middle and one three quarters down.
        const total = await page.evaluate(() => document.documentElement.scrollHeight);
        const starts = [0, 1500, 3000, Math.round(total / 2 / 100) * 100, Math.round(total * 0.75 / 100) * 100]
          .filter((y, i, all) => y + 200 < total && all.indexOf(y) === i);
        for (const [k, y] of starts.entries()) {
          await page.screenshot({ path: `.shots/slices/${name}-${mode}-${width}-${k}.png`, fullPage: true, clip: { x: 0, y, width, height: Math.min(1500, total - y) } });
        }
      }
      await context.close();
    }
  }
} finally {
  await browser?.close();
  await stop();
}
