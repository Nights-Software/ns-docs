import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

function run(html, extraEnv = {}) {
  const dir = mkdtempSync(join(tmpdir(), 'out-'));
  mkdirSync(join(dir, 'resources', 'x'), { recursive: true });
  writeFileSync(join(dir, 'resources', 'x', 'index.html'), html);
  const env = { ...process.env, OUTPUT_DIR: dir, ...extraEnv };
  if (!('CI' in extraEnv)) delete env.CI;
  return { dir, ...spawnSync(process.execPath, ['tools/check-output.mjs'], { env, encoding: 'utf8' }) };
}

for (const marker of ['{: .tip }', ':::note', '{#my-id}', '<div markdown="1">']) {
  test(`a leftover "${marker}" in the page text fails and is named`, () => {
    const r = run(`<p>Text ${marker.replace(/</g, '&lt;')} more</p>`);
    assert.equal(r.status, 1);
    assert.ok(r.stderr.includes('resources'), r.stderr);
    assert.ok(r.stderr.includes(marker.startsWith('<') ? 'markdown="' : marker.slice(0, 2)), r.stderr);
  });
}

test('the same markers inside pre or code are code samples and pass', () => {
  const r = run('<pre><code>{: .tip } ::: {#id} markdown="1"</code></pre><p>a <code>{#x}</code></p>');
  assert.equal(r.status, 0, r.stderr);
});

test('table rows that rendered as paragraph text fail and are named', () => {
  // A paragraph typed into the middle of a table cuts it in two; the rows after it have no header and come out as text.
  const r = run('<table><tr><td>a</td></tr></table>\n<p>Players manage their own stats.\n| <code>config/npc.lua</code> | NPC Backup settings |\n| <code>config/pursuit.lua</code> | Pursuit settings |</p>');
  assert.equal(r.status, 1);
  assert.ok(r.stderr.includes('table row'), r.stderr);
  assert.ok(r.stderr.includes('resources'), r.stderr);
});

test('a pipe in ordinary prose or inside inline code is not a table row', () => {
  const r = run('<p>Use <code>a | b | c</code> or write yes | no in the field.</p><p>| a lone leading pipe</p>');
  assert.equal(r.status, 0, r.stderr);
});

test('a clean page passes', () => {
  assert.equal(run('<p>Nothing to see.</p>').status, 0);
});

test('on CI the folder override is ignored', () => {
  const r = run('<p>{: .tip }</p>', { CI: 'true' });
  assert.ok(!(r.stdout + r.stderr).includes(r.dir), 'the override folder must not appear');
});

test('a Lua sample in Expressive Code markup passes: the copy button repeats the code in data-code', () => {
  const html = '<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.css"><script type="module" src="/_astro/ec.js"></script>'
    + '<figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="lua"><code><div class="ec-line"><div class="code">'
    + '<span style="--0:var(--kit-text)">local n = {#list}</span></div></div></code></pre>'
    + '<div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="local n = {#list}&#x27;::: {: x}"><div></div></button></div></figure></div>'
    + '<script>const s = "{#x} ::: {:";</script><style>a::before{content:"{#"}</style>';
  const r = run(html);
  assert.equal(r.status, 0, r.stderr);
});

test('a marker in a paragraph still fails next to such a sample', () => {
  const sample = '<pre><code>{#list}</code></pre><div data-code="{#list}"></div>';
  for (const marker of ['{:', ':::', '{#', 'markdown="']) {
    assert.equal(run(`${sample}<p>text ${marker} text</p>`).status, 1, marker);
  }
});

test('a ">" inside an attribute value is not the end of the tag', () => {
  const r = run('<button data-code="if a > b then local n = {#list} end">Copy</button>');
  assert.equal(r.status, 0, r.stderr);
});

test('a real leak in a paragraph still fails next to a button with ">" in its attribute', () => {
  const r = run('<button data-code="if a > b then local n = {#list} end">Copy</button><p>text {#leak} text</p>');
  assert.equal(r.status, 1);
  assert.ok(r.stderr.includes('{#'), r.stderr);
});

test('a single-quoted attribute value with ">" is removed whole too', () => {
  assert.equal(run("<div data-code='a > {:'>x</div>").status, 0);
});
