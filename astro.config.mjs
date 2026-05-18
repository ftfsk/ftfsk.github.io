import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ftfsk.github.io',
  integrations: [sitemap()]
});