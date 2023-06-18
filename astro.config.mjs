import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // site: 'https://arjsarmiento.github.io',
  // base: '/SPARCS-UPMIN-Website',
  integrations: [tailwind(), react()]
});