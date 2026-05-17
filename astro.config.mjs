// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tattoo.dcrader.dev',
  base: '/',
  vite: {
    plugins: [tailwindcss()]
  }
});
