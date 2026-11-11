import { addressOf, childAddressOf, byLabel } from '../tools/pages.mjs';

// link items, not slugs: the sidebar must not depend on how Starlight cases entry ids.
// A product with sub-pages becomes a collapsed sub-group (Starlight opens the one that holds the current page):
// its own page first, as "Overview", then its sub-pages in registry order.
function itemOf(page) {
  if (!page.children?.length) return { label: page.label, link: addressOf(page.file) };
  return {
    label: page.label,
    collapsed: true,
    items: [
      { label: 'Overview', link: addressOf(page.file) },
      ...page.children.map(child => ({ label: child.label, link: childAddressOf(page, child) })),
    ],
  };
}

export function buildSidebar(pages, groups) {
  return groups
    .map(group => {
      const inGroup = pages.filter(p => p.group === group.id);
      if (group.id === 'scripts') inGroup.sort(byLabel);
      const items = inGroup.map(itemOf);
      return group.id === 'scripts'
        ? { label: group.label, collapsed: true, items }
        : { label: group.label, items };
    })
    .filter(g => g.items.length > 0);
}
