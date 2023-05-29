import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const blog = await getCollection('blog');
  return rss({
    title: "tjex.net - blog",
    description: "Software development and other thought excercises",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      categories: post.data.tags,
      customData: post.data.customData, 
      link: `/blog/${post.slug}/`,
    })),
  });
}
