import { getCollection } from "astro:content";

export async function noDrafts(collection: string) {
  const noDrafts = getCollection(collection, ({ data }) => {
      return import.meta.env.PROD ? data.draft !== true : true;
    }
  );
  return noDrafts;
}

export async function getStaticPaths(collection: string) {
    const entries = await noDrafts(collection);

    const uniqueTags = [...new Set(entries.map((entry: any) => entry.data.tags).flat())];

    return uniqueTags.map((tag) => {
        const filteredentries = entries
            .filter((entry) => entry.data.tags.includes(tag))
            .map(({ data, slug }) => ({
                slug: slug,
                title: data.title,
                description: data.description,
                pubDate: data.pubDate,
            }));
        return {
            params: { tag },
            props: { entries: filteredentries },
        };
    });
}

