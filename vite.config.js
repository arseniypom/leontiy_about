import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'links-en': resolve(__dirname, 'pages/en/links.html'),
        'links-ru': resolve(__dirname, 'pages/ru/links.html'),
      },
    },
  },
});
