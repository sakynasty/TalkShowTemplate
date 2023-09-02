import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://vsp-demo.pages.dev",
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare({ mode: 'directory', functionPerRoute: true })
});