# Nights Software docs

The documentation site for Nights Software, built with [Astro Starlight](https://starlight.astro.build/).
It is published at https://docs.nights-software.com/; the domain is set in the repository's Pages settings.
A push to `main` builds the site and deploys it to GitHub Pages through `.github/workflows/deploy.yml`.

## Running it locally

You need Node 22.23.4 or newer: the highest minimum declared by an installed production dependency (`@astrojs/prism`;
`undici` asks for 22.19, `astro` for 22.12). `engines` in `package.json` says the same, and the deploy workflow's `22`
resolves to the newest 22.x.

```sh
npm install
npm run dev       # development server at http://localhost:4321
npm run build     # builds the site into dist/
npm run preview   # serves dist/ after a build
```

## The checks

| Command | What it proves |
|---------|----------------|
| `npm test` | The unit tests pass: the page list, the plugins and the address check itself. |
| `npm run check` | Builds the site, then proves that no Jekyll markup is left in `dist/` (`{:`, `:::`, `{#` and `markdown="` outside code fail), that every internal link and anchor resolves, and that every protected address in `tools/addresses.json` and every page in the registry exists at exactly that address, capitals included (`tools/check-addresses-cli.mjs` names the list a missing address came from; an empty list fails, and on CI the `DIST_DIR`, `ADDRESS_LIST` and `OUTPUT_DIR` overrides used by the tests are ignored). |
| `npm run sweep` | Loads every address (and an unknown one) in both modes at desktop and phone width and checks status, console, images, overflow, headings, leaked markup, corners, links and the sidebar. Needs Chrome and a fresh build; writes only under `.shots/`. |
| `npm run a11y` | Runs axe on the main page types in both modes at desktop and phone width; fails on a serious or critical violation. Needs Chrome and a fresh build. |
| `npm run test:site` | Browser tests of the built site. Needs Chrome installed and a fresh `npm run build`. |

The deploy workflow runs `npm test` and `npm run check`. It does not run the browser tests.

Astro allows one preview server per project, so the browser tools (`npm run test:site`, `npm run sweep`, `npm run a11y` and `node tools/shots.mjs`) cannot start their own while one is already open. Set `SITE_URL` (for example `SITE_URL=http://localhost:4321`) and they use that running server and start and stop nothing; the server must be serving a fresh `npm run build`, and without `SITE_URL` they start their own preview as before.

## Adding a page

1. Add a row to `tools/pages.mjs`: the file name (without `.md`), the sidebar label, the group and the cover name.
   The groups are `start` (Start here), `ers` (Emergency Response Simulator), `scripts` (Scripts) and `assets` (Assets).
   Use `cover: null` for a page without a cover: the home page then shows a placeholder card for it.
2. Import its cover, if it has one: `node tools/import-covers.mjs <covers folder> --page <file>` reads only
   `Cover – <cover name>.png` from the covers folder and writes `src/assets/covers/<file>.jpg` (1440 px wide, under 300 KB;
   nothing is written when it cannot get under the limit). Without `--page` the command takes the covers folder and the
   brand folder and imports every cover and the brand marks.
3. Add the page file `src/content/docs/resources/<file>.md` with the front matter below. Do not add a `slug` line:
   the page is built at `/resources/<file>/` with the capitals of the file name (`src/entry-id.mjs`), which is the address
   the sidebar, the previous/next links and the home page use.
4. Run `npm test` and `npm run check`.

Front matter of a page:

| Field | Required | What it does |
|-------|----------|--------------|
| `title` | yes | The page heading, the browser tab and the search result. |
| `description` | recommended | The lead paragraph under the heading and the page's meta description. |
| `group` | yes, for a page in the registry | One of the group ids above. It gives the page its header with the breadcrumb; without it the page shows a plain heading. |
| `store` | no | A store address: adds the "Buy on the store" button to the header. |
| `video` | no | A video address: adds the "Watch the showcase" button. |
| `cover` | only with `showCover` | The cover image, as `../../../assets/covers/<file>.jpg`. The home page takes its cards' covers from `src/assets/covers/<file>.jpg` by name, not from this field. |
| `showCover` | no (default `false`) | `true` shows the cover in the page header; only the ERS page does. |
| `lastUpdated` | no | A date, shown as "Last updated". The pages converted from the old site carry one so that they keep their own dates. Remove the line when you next edit such a page: without it the date is the page's last git commit (`lastUpdated: true` in `astro.config.mjs`). A new page needs no line. |
| `slug` | no | Present on the converted pages; leave it out of new ones. |

A new address goes into `tools/addresses.json` only if it must be protected from then on. Once it is listed,
`npm run check` fails if the address ever disappears. Every page in the registry is checked in any case.

## The theme

- `src/styles/kit-tokens.css` holds the colours, fonts and sizes. It is the only file with literal colours.
- `src/styles/kit-base.css` styles the site chrome: top bar, sidebar, search, "on this page" and footer.
- `src/styles/kit-content.css` styles the product header and everything inside a page.
- `src/components/` holds the Starlight component overrides (title, top links, mode button, footer, home catalogue).

Selectors that target Starlight's own markup sit in blocks marked "Starlight's own markup" in the two style files.
After a Starlight upgrade, check those blocks first.

## Editing a page

The pages under `src/content/docs/resources/` are the source of truth: edit them directly, then run `npm test` and
`npm run check`. A push to `main` publishes the site.
