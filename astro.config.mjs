// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://pixelized.me',
  integrations: [mdx()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-sans',
      weights: ['400 800'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Limelight',
      cssVariable: '--font-display',
      weights: [400],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
});
