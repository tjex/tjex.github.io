import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";

const options = {
  contentPath: "src/content/posts",
};

export default defineConfig({
  site: "https://tjex.net",
  redirects: {
    "/blog": "/posts",
    "/blog/[...page]": "/posts/[...page]",
    "/blog/[...slug]": "/posts/[...slug]",
  },
  markdown: {
    drafts: true,
    remarkRehype: {
      footnoteLabelTagName: "h5",
      footnoteBackContent: "⤴",
      footnoteLabel: "Footnotes",
    },
    rehypePlugins: [[rehypeAstroRelativeMarkdownLinks, options]],
  },
  integrations: [
    sitemap({}),
    mdx({
      drafts: true,
    }),
  ],
  experimental: {},
});
