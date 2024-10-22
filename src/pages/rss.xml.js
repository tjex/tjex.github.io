import rss from "@astrojs/rss";
import site from "../data/settings.js";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import * as colUtil from "../scripts/collectionUtil.ts";

const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await colUtil.noDrafts("posts");
  return rss({
    title: "tjex.net - posts",
    description: site.description,
    site: context.site,
    customData: `
      <atom:link href='${site.rssURL}' rel='self' type='application/rss+xml'
      xmlns:atom='http://www.w3.org/2005/Atom' xmlns:content='http://purl.org/rss/1.0/modules/content/'>
      </atom:link>
    `,
    stylesheet: "/rss/styles.xsl",
    items: posts
      .map((post) => {
        return {
          title: post.data.title,
          pubDate: post.data.date, // 'pubDate' (syntax) pertains to the rss schema. (schema / frontmatter)
          description: post.data.description,
          categories: post.data.tags,
          link: `/posts/${post.slug}/`,
          content: sanitizeHtml(parser.render(post.body)),
        };
      })
      .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate)),
  });
}
