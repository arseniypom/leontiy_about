import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/leontiy_about/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'links-en': resolve(__dirname, 'pages/en/links.html'),
      },
    },
  },
});
