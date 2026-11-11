import test from 'node:test';
import assert from 'node:assert/strict';
import { entryId } from './entry-id.mjs';

test('a page without slug keeps the capitals of its file path', () => {
  assert.equal(entryId({ entry: 'resources/newThing.md', data: {} }), 'resources/newThing');
  assert.equal(entryId({ entry: 'resources/discordAPI.md', data: {} }), 'resources/discordAPI');
});

test('an explicit slug still wins', () => {
  assert.equal(entryId({ entry: 'resources/ers.md', data: { slug: 'resources/ers' } }), 'resources/ers');
});

test('the root pages and index files keep Starlight\'s ids', () => {
  assert.equal(entryId({ entry: 'index.mdx', data: {} }), 'index');
  assert.equal(entryId({ entry: '404.md', data: {} }), '404');
  assert.equal(entryId({ entry: 'resources/sub/index.md', data: {} }), 'resources/sub');
});
