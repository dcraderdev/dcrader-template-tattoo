// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dcraderdev.github.io',
  base: '/dcrader-template-tattoo',
  vite: {
    plugins: [tailwindcss()]
  }
});
