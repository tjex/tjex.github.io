import { getCollection } from "astro:content";

export async function noDrafts() {
const noDrafts = getCollection("blog", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
});
    return noDrafts
}
