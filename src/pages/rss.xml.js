import rss from '@astrojs/rss';
import site from '../data/settings';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import * as getBlog from "../../components/utility/getBlog.js"

const parser = new MarkdownIt();

export async function GET(context) {
    const blog = await getBlog.noDrafts();
  return rss({
    title: "tjex.net - blog",
    description: site.description,
    site: context.site,
    customData: `
      <atom:link href='${site.rssURL}' rel='self' type='application/rss+xml' 
      xmlns:atom='http://www.w3.org/2005/Atom' xmlns:content='http://purl.org/rss/1.0/modules/content/'>
      </atom:link>
    `,
    stylesheet: "/rss/styles.xsl",
    items: blog.map((post) => {
      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        categories: post.data.tags,
        link: `/blog/${post.slug}/`,
        content: sanitizeHtml(parser.render(post.body)),
      };
    }),
  });
}


