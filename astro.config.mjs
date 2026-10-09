// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://observer-ja.github.io",
  base: "/gnjb-utawari-note",
  integrations: [sitemap()],
});