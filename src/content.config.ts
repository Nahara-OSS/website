import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
    loader: glob({ base: "./blog", pattern: "**/*.md" }),
    schema: z.object({
        title: z.string(),
        brief: z.string(),
        author: z.string(),
        badges: z.array(z.string()),
        tags: z.array(z.string()),
        publishedOn: z.coerce.date().optional(),
    }),
});

export const collections = { blog };
