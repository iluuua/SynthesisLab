import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

// PAGES_BASE / PAGES_SITE — для сборки под GitHub Pages (под-путь /SynthesisLab/)
const base = process.env.PAGES_BASE || undefined;
const site = process.env.PAGES_SITE || undefined;

// hybrid: страницы пререндерятся (быстро/статика), только /api/lead работает на сервере (Node)
export default defineConfig({
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }),
  integrations: [tailwind()],
  site,
  base,
});
