import { z, defineCollection } from "astro:content";
const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      arvDate: z.string(),
      modDate: z.date().optional(),
      author: z.string(),
      tags: z.array(z.string()),
      draft: z.boolean(),
      license: z.string().optional(),
      image: z
        .object({
          src: z.optional(image()),
          alt: z.optional(z.string()),
        })
        .optional(),
    }),
});

export const collections = {
  blog: blog,
};
