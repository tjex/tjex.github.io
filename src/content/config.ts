// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const blogCollection = defineCollection({ 
    type: 'content', 
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.string().transform((str) => new Date(str)),
        author: z.string(),
        authorContact: z.string().email(),
        tags: z.array(z.string()),
        category: z.string(),
        image: z.object({
            src: z.string().optional(),
            alt: z.string().optional(),
        }
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
};
