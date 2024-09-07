import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.mohit.prof/',
  integrations: [svelte(), tailwind({applyBaseStyles: false,})]
});
