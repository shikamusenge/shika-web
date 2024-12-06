import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import netlify from "@astrojs/netlify";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [db()]
});