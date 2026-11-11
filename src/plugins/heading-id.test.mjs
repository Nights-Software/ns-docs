import test from 'node:test';
import assert from 'node:assert/strict';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { remarkHeadingId } from './heading-id.mjs';

const renderWithPlugin = async md => String(await unified()
  .use(remarkParse).use(remarkHeadingId).use(remarkRehype).use(rehypeStringify).process(md));

test('{#id} at the end of a heading becomes its id and leaves the text', async () => {
  const html = await renderWithPlugin('### Client Exports (`a.lua`) {#client-side-exports}\n');
  assert.match(html, /<h3 id="client-side-exports">Client Exports \(<code>a\.lua<\/code>\)<\/h3>/);
});
