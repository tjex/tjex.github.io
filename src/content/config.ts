import { z, defineCollection } from 'astro:content';
// 1. Import utilities from `astro:content`
// 2. Define your collection(s)
const blog = defineCollection({ 
  type: 'content', 
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().transform((str) => {
      const date = new Date(str);
      const options = { month: 'long', day: '2-digit', year: 'numeric', hour12:false };
      return date.toLocaleDateString('en-US', options);
    }),
    author: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean(),
    category: z.string().optional(),
    image: z
      .object({
        src: z.optional(image()),
        alt: z.optional(z.string()),
      })
      .optional(),
  }),
});


// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blog,
};
