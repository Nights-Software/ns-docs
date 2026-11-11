import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// OUTPUT_DIR exists for the tests; on CI it is ignored so the real build is always the one checked.
const outDir = (!process.env.CI && process.env.OUTPUT_DIR) || 'dist';

function* htmlFiles(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* htmlFiles(path);
    else if (name.endsWith('.html')) yield path;
  }
}

// Only text a visitor can read is checked. Code samples may legitimately show these markers, and the copy button
// Expressive Code adds repeats the raw code in a data-code attribute, so scripts, styles, code and every tag
// (with its attribute values) are removed first. Anything left is Jekyll markup the converter missed
// (a kramdown attribute list, a heading id, a leftover directive fence or the kramdown-only markdown attribute).
const MARKERS = ['{:', ':::', '{#', 'markdown="'];
// A tag ends at the first ">" outside a quoted attribute value: Expressive Code writes ">" unescaped in data-code.
const TAG = /<(?:[^>"']|"[^"]*"|'[^']*')*>/g;
const visibleText = html => html
  .replace(/<(script|style)\b[\s\S]*?<\/\1>/g, ' ')
  .replace(/<pre\b[\s\S]*?<\/pre>/g, ' ')
  .replace(/<code\b[\s\S]*?<\/code>/g, ' ')
  .replace(TAG, ' ');

// A paragraph typed into the middle of a Markdown table cuts it in two: the rows after it have no header, so they
// come out as one paragraph of text full of pipes. Inline code is blanked first because a pipe there is content.
const TABLE_ROW = /^\s*\|.+\|\s*$/;
const hasTableRowAsText = html => [...html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].some(([, inner]) =>
  inner.replace(/<code\b[\s\S]*?<\/code>/g, 'x').replace(/<[^>]*>/g, '').split('\n').some(line => TABLE_ROW.test(line)));

let bad = 0;
for (const f of htmlFiles(outDir)) {
  const html = readFileSync(f, 'utf8');
  const text = visibleText(html);
  for (const marker of MARKERS) {
    if (text.includes(marker)) { console.error(`"${marker}" left in ${f}`); bad++; }
  }
  if (hasTableRowAsText(html)) { console.error(`a table row rendered as text in ${f}`); bad++; }
}
if (bad) process.exit(1);
console.log('No Jekyll markers in dist.');
