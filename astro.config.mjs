// @ts-check
import { unified } from "@astrojs/markdown-remark";
import { defineConfig, fontProviders } from "astro/config";
import rehypeMermaid from "rehype-mermaid";

// https://astro.build/config
export default defineConfig({
    site: "https://nahara.io.vn",
    markdown: {
        processor: unified({
            rehypePlugins: [rehypeMermaid],
        }),
        syntaxHighlight: {
            excludeLangs: ["mermaid"],
        },
    },
    fonts: [
        {
            provider: fontProviders.google(),
            name: "Inter",
            cssVariable: "--font-inter",
            weights: [300, 400, 500, 700, 800],
            fallbacks: ["sans-serif"],
        },
    ],
});
