import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://tjex.net",
    markdown: {
        drafts: true,
        remarkRehype: { footnoteLabelTagName: "h5"},
    },
  integrations: [
      sitemap({}),
      mdx({
      drafts: true,
  })],
  experimental: {
  },
});
