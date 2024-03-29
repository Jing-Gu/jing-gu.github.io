import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://jinggu.dev',
  integrations: [mdx(), sitemap(), tailwind(), markdoc(), react()]
});