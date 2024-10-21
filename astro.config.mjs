import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://tjex.net",
  redirects: {
    "/blog": "/posts",
    "/blog/[...page]": "/posts/[...page]",
    "/blog/[...slug]/2024": "/posts/[...slug]",
    "/blog/[...slug]/2023": "/posts/[...slug]",
  },
  markdown: {
    drafts: true,
    remarkRehype: {
      footnoteLabelTagName: "h5",
      footnoteBackContent: "⤴",
      footnoteLabel: "Footnotes",
    },
  },
  integrations: [
    sitemap({}),
    mdx({
      drafts: true,
    }),
  ],
  experimental: {},
});
