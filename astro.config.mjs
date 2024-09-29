import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://mohit.prof/',
  base: '/',
  integrations: [svelte(), tailwind({
    applyBaseStyles: false
  }), sitemap(), mdx(), pagefind()]
});
