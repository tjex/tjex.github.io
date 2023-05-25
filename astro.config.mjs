import { defineConfig } from "astro/config"; // import lit from '@astrojs/lit';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tjex.net/",
  integrations: [sitemap()],
  experimental: {
    assets: true,
  },
});
