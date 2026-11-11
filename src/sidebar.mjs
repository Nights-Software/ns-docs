import { addressOf, byLabel } from '../tools/pages.mjs';

// link items, not slugs: the sidebar must not depend on how Starlight cases entry ids.
export function buildSidebar(pages, groups) {
  return groups
    .map(group => {
      const inGroup = pages.filter(p => p.group === group.id);
      if (group.id === 'scripts') inGroup.sort(byLabel);
      const items = inGroup.map(p => ({ label: p.label, link: addressOf(p.file) }));
      return group.id === 'scripts'
        ? { label: group.label, collapsed: true, items }
        : { label: group.label, items };
    })
    .filter(g => g.items.length > 0);
}
