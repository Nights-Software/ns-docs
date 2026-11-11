import { defineConfig } from '@playwright/test';

// SITE_URL points the tests at a server that is already running (it must be serving a fresh build);
// without it the tests start `astro preview` themselves.
const external = process.env.SITE_URL?.replace(/\/+$/, '');

export default defineConfig({
  testDir: 'tests',
  testMatch: '*.spec.mjs',
  use: { baseURL: external ?? 'http://localhost:4321', channel: 'chrome' },
  // Serves the built dist/, so run `npm run build` first.
  ...(external
    ? {}
    : {
        webServer: {
          command: 'npm run preview -- --port 4321',
          url: 'http://localhost:4321/',
          reuseExistingServer: false,
        },
      }),
});
