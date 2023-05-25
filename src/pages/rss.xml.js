import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "tjex",
    description: "Software development, blogging and some occasional music",
    site: "https://tjex.net",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-au</language>`,
  });
}
