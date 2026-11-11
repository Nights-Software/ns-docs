const TRAILING_ID = /\s*\{#([\w-]+)\}\s*$/;

function walk(node, fn) {
  fn(node);
  if (node.children) for (const child of node.children) walk(child, fn);
}

// Jekyll pages pin heading ids as "{#id}"; Astro would print that text and slug it into a new id.
export function remarkHeadingId() {
  return tree => walk(tree, node => {
    if (node.type !== 'heading') return;
    const last = node.children[node.children.length - 1];
    if (last?.type !== 'text') return;
    const m = last.value.match(TRAILING_ID);
    if (!m) return;
    last.value = last.value.slice(0, m.index);
    if (last.value === '') node.children.pop();
    node.data = { ...node.data, hProperties: { ...node.data?.hProperties, id: m[1] } };
  });
}
