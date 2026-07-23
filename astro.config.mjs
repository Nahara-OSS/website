// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://nahara.io.vn",
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
