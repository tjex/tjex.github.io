import { z, defineCollection } from 'astro:content';
// 1. Import utilities from `astro:content`
// 2. Define your collection(s)
const blogCollection = defineCollection({ 
    type: 'content', 
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date().transform((str) => {
          const date = new Date(str);
          const options = { month: 'short', day: 'numeric', year: 'numeric' };
          return date.toLocaleDateString('en-US', options);
        }),
        author: z.string(),
        tags: z.array(z.string()),
        draft: z.boolean(),
        cover: image().optional(),
        category: z.string().optional(),
        imageSlug: z.string().optional(),
        imageAlt: z.string().optional(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
};
