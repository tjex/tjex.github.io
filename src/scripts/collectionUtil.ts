import { getCollection } from "astro:content";

export async function noDrafts(collection: string) {
    const noDrafts = getCollection(collection, ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    }
    );
    return noDrafts;
}

export async function getPostsPerTag(collections: string[]) {
    const l = []
    for (const collection of collections) {
        const posts = await noDrafts(collection);

        const uniqueTags = [...new Set(posts.map((post: any) => post.data.tags).flat())];

        const allFiltPosts = uniqueTags.map((tag) => {
            const filtPosts = posts
                .filter((post) => post.data.tags.includes(tag))
                .map(({ data, slug }) => ({
                    slug: slug,
                    title: data.title,
                    description: data.description,
                    pubDate: data.pubDate,
                    collection: collection,
                }));
            return {
                params: { tag },
                props: { posts: filtPosts },
            };
        });
        l.push(...allFiltPosts);
    }
    return l
}

