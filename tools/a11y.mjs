// Accessibility pass with axe: node tools/a11y.mjs   (npm run a11y)
// Runs axe on the main page types in both modes at desktop and phone width; exits 1 on a serious or critical violation.
// Needs a fresh `npm run build` and Chrome. Writes .shots/a11y.json.
import { mkdirSync, writeFileSync } from 'node:fs';
import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { startPreview } from './lib/preview.mjs';

const addresses = ['/', '/resources/policeTape/', '/resources/ers/', '/resources/nightShifts/', '/resources/acePerms/', '/this-address-does-not-exist/'];
const viewports = [{ width: 1280, height: 800 }, { width: 390, height: 844 }];

const { base, stop } = await startPreview(4325);
const report = [];
let browser;
try {
  browser = await chromium.launch({ channel: 'chrome' });
  for (const address of addresses) {
    for (const mode of ['dark', 'light']) {
      for (const vp of viewports) {
        const context = await browser.newContext({ colorScheme: mode, viewport: vp });
        const page = await context.newPage();
        await page.goto(base + address, { waitUntil: 'networkidle' });
        await page.evaluate(() => document.fonts.ready);
        // The page fades between modes; measure after any cross-fade has finished.
        await page.waitForTimeout(900);
        const result = await new AxeBuilder({ page }).analyze();
        for (const v of result.violations) {
          report.push({
            address, combo: `${mode} ${vp.width}`, id: v.id, impact: v.impact, help: v.help,
            nodes: v.nodes.map(n => ({ target: n.target.join(' '), summary: (n.failureSummary || '').split('\n').slice(0, 3).join(' | ') })),
          });
        }
        await context.close();
      }
    }
  }
} finally {
  await browser?.close();
  await stop();
}

mkdirSync('.shots', { recursive: true });
writeFileSync('.shots/a11y.json', JSON.stringify(report, null, 2));
for (const r of report) {
  console.log(`${r.impact.padEnd(8)} ${r.id} ${r.address} [${r.combo}] ${r.nodes.length} node(s)`);
  for (const n of r.nodes.slice(0, 3)) console.log(`           ${n.target}  ${n.summary.slice(0, 200)}`);
}
const bad = report.filter(r => r.impact === 'serious' || r.impact === 'critical');
console.log(`${report.length} violation groups, ${bad.length} serious or critical`);
process.exitCode = bad.length ? 1 : 0;
