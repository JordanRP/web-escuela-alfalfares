// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
//arreglos
export default defineConfig({
  site: "https://www.escuelaalfalfares.cl",
  integrations: [mdx(), sitemap()],
  output:'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
