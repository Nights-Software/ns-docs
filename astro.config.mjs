import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import { createCssVariablesTheme } from 'shiki';
import { pages, groups } from './tools/pages.mjs';
import starlightLinksValidator from 'starlight-links-validator';
import { remarkHeadingId } from './src/plugins/heading-id.mjs';
import { buildSidebar } from './src/sidebar.mjs';

// Small page behaviours, one inline script. Starlight restores the sidebar's scroll on load; only when the open page is still out of sight
// afterwards do we centre it, inside the sidebar so the page itself does not move.
// It runs again once the fonts are in, because their arrival changes the row heights and would leave the
// last entry of a long list partly under the edge.
const pageScript = `const reveal = () => {
  const pane = document.getElementById('starlight__sidebar');
  const link = pane && pane.querySelector('[aria-current="page"]');
  if (!pane || !link) return;
  const p = pane.getBoundingClientRect();
  const l = link.getBoundingClientRect();
  if (l.top >= p.top && l.bottom <= p.bottom) return;
  pane.scrollTo({ top: pane.scrollTop + (l.top - p.top) - (p.height - l.height) / 2, behavior: 'instant' });
};
// A table that scrolls sideways must be reachable by keyboard; only the ones that overflow get a tab stop.
// The same pass marks which side has more to scroll to (data-more-start / data-more-end), which drives the edge cue in kit-content.css.
const markCue = (t) => {
  t.toggleAttribute('data-more-start', t.scrollLeft > 1);
  t.toggleAttribute('data-more-end', t.scrollLeft < t.scrollWidth - t.clientWidth - 1);
};
const focusWideTables = () => {
  document.querySelectorAll('.sl-markdown-content table').forEach((t) => {
    if (t.scrollWidth > t.clientWidth) t.setAttribute('tabindex', '0');
    else t.removeAttribute('tabindex');
    if (!t.dataset.cue) { t.dataset.cue = '1'; t.addEventListener('scroll', () => markCue(t), { passive: true }); }
    markCue(t);
  });
};
// "On this page": only the section being read shows its sub-entries. Starlight marks the current entry with
// aria-current; the group of that entry gets data-open, and data-fold on the column turns the folding on, so
// without this script the whole list shows.
const foldToc = () => {
  const toc = document.querySelector('starlight-toc');
  if (!toc) return;
  const sync = () => {
    const entry = toc.querySelector('a[aria-current="true"]')?.closest('li');
    const group = entry && (entry.parentElement.closest('li') || entry);
    toc.querySelectorAll('li[data-open]').forEach((li) => { if (li !== group) li.removeAttribute('data-open'); });
    if (group) group.setAttribute('data-open', '');
    toc.setAttribute('data-fold', '');
  };
  sync();
  new MutationObserver(sync).observe(toc, { attributes: true, attributeFilter: ['aria-current'], subtree: true });
};
// The search button is named "Search" but its visible text also holds the shortcut ("Ctrl K"), which a
// voice-control user would have to say too. The key names move into CSS content (kit-base.css), so the
// button's text and its name agree.
const moveKeyHintToCss = () => {
  document.querySelectorAll('button[data-open-modal] kbd > kbd').forEach((key) => {
    const text = key.textContent.trim();
    if (text) { key.dataset.key = text; key.textContent = ''; }
  });
};
addEventListener('DOMContentLoaded', () => {
  reveal();
  document.fonts.ready.then(() => { reveal(); focusWideTables(); });
  moveKeyHintToCss();
  focusWideTables();
  foldToc();
});
addEventListener('load', moveKeyHintToCss);
// Resize fires continuously while a window is dragged; the table layout work runs at most once per frame.
let resizeQueued = false;
addEventListener('resize', () => {
  if (resizeQueued) return;
  resizeQueued = true;
  requestAnimationFrame(() => { resizeQueued = false; focusWideTables(); moveKeyHintToCss(); });
});`;

// One theme for both modes: the token colours are CSS variables that kit-content.css points at the
// --kit-c-* tokens, so the light/dark switch needs no second highlight pass.
// Expressive Code reads the theme's editor colours as hex to derive its UI; every one of them is
// overridden below with a --kit-* variable, so these two are placeholders that never reach the page.
const cssTheme = createCssVariablesTheme({ name: 'kit' });
const kitCode = {
  ...cssTheme,
  // Plain text would otherwise take the placeholder foreground above.
  tokenColors: [
    { scope: ['source', 'text'], settings: { foreground: 'var(--kit-text)' } },
    ...cssTheme.tokenColors,
  ],
  colors: { 'editor.background': '#000000', 'editor.foreground': '#ffffff' },
};

export default defineConfig({
  site: 'https://docs.nights-software.com',
  // Astro 7 renders with Satteri by default; a remark plugin needs the unified processor.
  markdown: { processor: unified({ remarkPlugins: [remarkHeadingId] }) },
  integrations: [
    starlight({
      title: 'Nights Software Docs',
      // British English only for the date order (day first); the site stays one language with no path prefix.
      locales: { root: { label: 'English', lang: 'en-GB' } },
      favicon: '/favicon.svg',
      lastUpdated: true,
      // The docs collection already has a 404 entry, which the catch-all route renders; the built-in route would collide with it.
      disable404Route: true,
      plugins: [starlightLinksValidator()],
      routeMiddleware: './src/route-data.mjs',
      sidebar: buildSidebar(pages, groups),
      head: [
        { tag: 'script', content: pageScript },
        // The picture chat apps show under a shared link. The address must be absolute.
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://docs.nights-software.com/og.jpg' } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '960' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '540' } },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: 'Nights Software Documentation' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: 'https://docs.nights-software.com/og.jpg' } },
      ],
      expressiveCode: {
        themes: [kitCode],
        useStarlightUiThemeColors: false,
        styleOverrides: {
          borderRadius: '0px',
          borderWidth: '0px',
          codeBackground: 'var(--kit-code-bg)',
          codeForeground: 'var(--kit-text)',
          codeFontFamily: 'var(--kit-font-mono)',
          codeFontSize: '0.875rem',
          codeLineHeight: '1.65',
          codePaddingBlock: '16px',
          codePaddingInline: '20px',
          borderColor: 'var(--kit-line)',
          focusBorder: 'var(--kit-accent)',
          codeSelectionBackground: 'var(--kit-accent-fill)',
          uiSelectionBackground: 'var(--kit-accent-fill)',
          uiSelectionForeground: 'var(--kit-on-accent)',
          scrollbarThumbColor: 'var(--kit-line)',
          scrollbarThumbHoverColor: 'var(--kit-muted)',
          uiFontFamily: 'var(--kit-font-body)',
          frames: {
            frameBoxShadowCssValue: 'none',
            editorTabBarBackground: 'transparent',
            editorTabBarBorderBottomColor: 'transparent',
            editorActiveTabBackground: 'var(--kit-panel-2)',
            editorActiveTabForeground: 'var(--kit-text)',
            editorActiveTabBorderColor: 'transparent',
            editorActiveTabIndicatorHeight: '0px',
            editorActiveTabIndicatorTopColor: 'transparent',
            editorActiveTabIndicatorBottomColor: 'transparent',
            editorTabBorderRadius: '0px',
            terminalBackground: 'var(--kit-code-bg)',
            terminalTitlebarBackground: 'var(--kit-panel-2)',
            terminalTitlebarForeground: 'var(--kit-text)',
            terminalTitlebarBorderBottomColor: 'transparent',
            terminalTitlebarDotsForeground: 'var(--kit-muted)',
            inlineButtonForeground: 'var(--kit-text)',
            inlineButtonBackground: 'var(--kit-panel-2)',
            inlineButtonBackgroundIdleOpacity: '0',
            inlineButtonBackgroundHoverOrFocusOpacity: '1',
            inlineButtonBackgroundActiveOpacity: '1',
            tooltipSuccessBackground: 'var(--kit-accent-fill)',
            tooltipSuccessForeground: 'var(--kit-on-accent)',
            inlineButtonBorder: 'transparent',
            inlineButtonBorderOpacity: '0',
          },
        },
      },
      customCss: ['./src/styles/kit-tokens.css', './src/styles/kit-base.css', './src/styles/kit-content.css'],
      components: {
        Footer: './src/components/Footer.astro',
        PageTitle: './src/components/PageTitle.astro',
        SiteTitle: './src/components/SiteTitle.astro',
        SocialIcons: './src/components/TopLinks.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
    }),
  ],
});
