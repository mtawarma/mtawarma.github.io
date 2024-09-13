import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://mohit.prof/',
  base: '/',
  integrations: [svelte(), tailwind({
    applyBaseStyles: false
  }), 
  sitemap()]
});
