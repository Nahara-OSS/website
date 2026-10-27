import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
    loader: glob({
        base: "./blog",
        pattern: ["*.md", "*/index.md"],
        generateId: (options) => options.entry.split(/[./]/, 2)[0],
    }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            brief: z.string(),
            author: z.string(),
            badges: z.array(z.string()),
            tags: z.array(z.string()),
            cover: z
                .object({
                    image: image(),
                    title: z.string().optional(),
                    artist: z.string().optional(),
                    license: z.string().optional(),
                })
                .optional(),
            publishedOn: z.coerce.date().optional(),
        }),
});

export const collections = { blog };
