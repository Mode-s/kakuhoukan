// @ts-check
import { defineConfig } from 'astro/config';
import { siteConfig } from './src/config/site.ts';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.url,
});
