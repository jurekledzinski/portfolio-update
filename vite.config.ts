import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { handlebarsPlugin } from './plugins/vite-plugin-handlebars';

export default defineConfig({
  plugins: [react(), handlebarsPlugin()],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
