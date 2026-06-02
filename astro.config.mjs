import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://chaveiroanchietarj24h.com.br',
  output: 'static',

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});