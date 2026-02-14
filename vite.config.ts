import { defineConfig } from 'vite';
import tailwind from '@tailwindcss/vite'
export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
  },
  plugins: [tailwind()]
});
