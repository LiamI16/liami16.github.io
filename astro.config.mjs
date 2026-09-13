// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://liami16.github.io',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // Both palettes are emitted as CSS variables; global.css picks one per theme.
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
});
