import { getCollection } from "astro:content";

export async function noDrafts() {
let noDrafts = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
});
    return noDrafts
}

export function test() {
    return "text"
}
