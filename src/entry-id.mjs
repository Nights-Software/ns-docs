// Astro's default id lower-cases the file path, so a page without a `slug` line would be built at
// /resources/newthing/ while the sidebar and the previous/next links point at /resources/newThing/.
// Addresses here are case sensitive on the live host, so the id keeps the path as written.
export function entryId({ entry, data }) {
  if (data.slug) return String(data.slug);
  const path = entry.replace(/\.[^./]+$/, '');
  return path === 'index' ? path : path.replace(/\/index$/, '');
}
