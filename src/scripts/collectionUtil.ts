import { getCollection } from "astro:content";

export async function noDrafts(collection: string) {
  const noDrafts = await getCollection(collection, ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  return noDrafts;
}

export async function getPostsPerTag(collections: string[]) {
  const l = [];
  for (const collection of collections) {
    const posts = await noDrafts(collection);

    const uniqueTags = [...new Set(posts.map((post: any) => post.data.tags).flat())];

    const allFiltPosts = uniqueTags.map((tag) => {
      const filtPosts = posts
        .filter((post) => post.data.tags.includes(tag))
        .map(({ data, slug }) => ({
          slug: slug,
          collection: collection,
          title: data.title,
          description: data.description,
          arve: data.arve,
          date: data.date,
        }))
        .sort((a, b) => new Date(b.date) - new Date(a.date));
      return {
        params: { tag },
        props: { posts: filtPosts },
      };
    });
    l.push(...allFiltPosts);
  }
  return l;
}

export async function getAllPostsFromCollection(collection: string) {
  const posts = await noDrafts(collection);
  const numberOfPosts = posts.length;

  const postsSortedByDate = posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  return postsSortedByDate.map((post: any, i) => ({
    params: { slug: post.slug },
    props: {
      post,
      // Previous post
      prevPost:
        i + 1 === numberOfPosts // If the current post is the oldest
          ? { data: "" }
          : posts[i + 1],
      // Next post
      nextPost:
        i === 0 // If the current post is the newest
          ? { data: "" }
          : posts[i - 1],
    },
  }));
}

export async function getPostsOnArve(collection: string, arve: string) {
  const posts = await noDrafts(collection);
  const postsOnArve = posts.filter(({ data }) => {
    return data.arve == arve;
  });
  return postsOnArve;
}
