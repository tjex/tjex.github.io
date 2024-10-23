import { z, defineCollection } from "astro:content";
const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      arve: z.string(),
      tags: z.array(z.string()),
      draft: z.boolean(),
      image: z
        .object({
          src: z.optional(image()),
          alt: z.optional(z.string()),
        })
        .optional(),
    }),
});

const logs = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      date: z.date(),
      arve: z.string(),
    }),
});

export const collections = {
  posts: posts,
  logs: logs,
};
