import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
import { resolve } from 'path';
export default defineConfig({
  plugins: [react(), svgr({ exportAsDefault: true })],
  resolve: {
    alias: {
      '@layouts': resolve(__dirname, './src/layouts'),
      '@pages': resolve(__dirname, './src/pages'),
      '@assets': resolve(__dirname, './src/assets'),
    },
  },
  server: {
    open: true,
    port: 3000,
  },
});
