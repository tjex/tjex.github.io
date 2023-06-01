import { defineConfig } from "astro/config"; // import lit from '@astrojs/lit';

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://tjex.net",
    markdown: {
        drafts: true,
    },
  integrations: [sitemap({}), mdx({
      drafts: true,
  })],
  experimental: {
    assets: true,
  },
});
