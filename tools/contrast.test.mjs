import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync('src/styles/kit-tokens.css', 'utf8');

// A token block runs from its selector to the first closing brace; light only overrides what it sets.
function tokens(selector) {
  const start = css.indexOf(selector + ' {');
  assert.ok(start >= 0, `${selector} block not found`);
  const body = css.slice(start, css.indexOf('}', start));
  return Object.fromEntries([...body.matchAll(/(--kit-[a-z0-9-]+):\s*(#[0-9a-f]{6})\s*;/gi)].map(m => [m[1], m[2]]));
}

const dark = tokens(':root');
const light = { ...dark, ...tokens(":root[data-theme='light']") };

function luminance(hex) {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map(c => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function ratio(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

for (const [mode, t] of [['dark', dark], ['light', light]]) {
  test(`${mode}: text, strong and muted text reach 4.5:1 on page, panel and raised panel`, () => {
    for (const fg of ['--kit-text', '--kit-strong', '--kit-muted']) {
      for (const bg of ['--kit-bg', '--kit-panel', '--kit-panel-2']) {
        const r = ratio(t[fg], t[bg]);
        assert.ok(r >= 4.5, `${fg} on ${bg}: ${r.toFixed(2)}`);
      }
    }
  });

  test(`${mode}: muted text, which also colours code comments, reaches 4.5:1 on the code background`, () => {
    const r = ratio(t['--kit-muted'], t['--kit-code-bg']);
    assert.ok(r >= 4.5, `--kit-muted on --kit-code-bg: ${r.toFixed(2)}`);
  });

  test(`${mode}: the accent used as text reaches 4.5:1 on page and panel`, () => {
    for (const bg of ['--kit-bg', '--kit-panel']) {
      const r = ratio(t['--kit-accent'], t[bg]);
      assert.ok(r >= 4.5, `--kit-accent on ${bg}: ${r.toFixed(2)}`);
    }
  });

  test(`${mode}: white on the accent fill reaches 4.5:1`, () => {
    const r = ratio('#ffffff', t['--kit-accent-fill']);
    assert.ok(r >= 4.5, `white on --kit-accent-fill: ${r.toFixed(2)}`);
  });
}
