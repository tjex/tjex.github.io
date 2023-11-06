import { getCollection } from "astro:content";

export async function noDrafts(collection) {
const noDrafts = getCollection(collection, ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
});
    return noDrafts
}
