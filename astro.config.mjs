// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import pagefind from "astro-pagefind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://mohit.prof/',
  base: '/',
  output: "static",
  build: {
    format: "directory",
  },

  vite: {
    plugins: [tailwindcss(), pagefind()],
  },

  integrations: [mdx(), svelte(), sitemap()],
});
