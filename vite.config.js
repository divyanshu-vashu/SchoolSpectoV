import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Change this to 'dist' if Vercel expects this directory
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        // Remove 'bootstrap/dist/css/bootstrap.min.css' from externals
      ],
    },
  },
});
