// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Static output – no server-side rendering
  output: 'static',

  // Set the site URL for canonical URLs and hreflang tags
  site: 'https://birds.family',

  // All pages live under /[lang]/, so the root redirects to /en/
  trailingSlash: 'always',

  // Static redirects
  redirects: {
    '/': '/en/',
    '/en/coloring/': '/en/printables/coloring/',
    '/de/coloring/': '/de/printables/coloring/',
    '/fr/coloring/': '/fr/printables/coloring/',
  },
});
