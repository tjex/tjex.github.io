import { defineConfig } from "astro/config"; // import lit from '@astrojs/lit';

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://tjex.net",
  integrations: [sitemap(), mdx()],
  experimental: {
    assets: true
  }
});
