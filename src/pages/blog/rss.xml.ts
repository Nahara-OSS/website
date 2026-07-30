import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (context) => {
    return await rss({
        title: "Nahara's Organization Blog",
        description: "Blog posts",
        site: new URL("blog", context.site ?? "/"),
        customData: "<language>en-US</language>",
        items: (await getCollection("blog"))
            .filter((post) => post.data.publishedOn != null)
            .map((post) => ({
                title: post.data.title,
                author: post.data.author,
                description: post.data.brief,
                categories: post.data.badges,
                pubDate: post.data.publishedOn,
                link: `/blog/${post.id}`,
            })),
    });
};
