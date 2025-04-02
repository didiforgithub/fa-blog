import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import unocss from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    vue(),
    mdx(),
    sitemap(),
    unocss({
      injectReset: true
    })
    // tailwind({
    //   applyBaseStyles: false
    // })
  ]
});
