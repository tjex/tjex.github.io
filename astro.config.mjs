import { defineConfig } from "astro/config";
import { targetBlank } from "./src/plugins/targetBlank.ts";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://tjex.net",
  redirects: {
    "/blog/2024/zettelkasten-grid-system-organisation/": "/posts/zettelkasten-grid-system-organisation",
  },
  markdown: {
    drafts: true,
    remarkRehype: {
      footnoteLabelTagName: "h5",
      footnoteBackContent: "⤴",
      footnoteLabel: "Footnotes",
    },
    rehypePlugins: [[targetBlank, { domain: "tjex.net" }]],
  },
  integrations: [
    sitemap({}),
    mdx({
      drafts: true,
    }),
  ],
  experimental: {},
});
