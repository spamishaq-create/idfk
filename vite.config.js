import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' lets the build work on GitHub Pages (project sites) and Vercel alike.
export default defineConfig({
  base: './',
  plugins: [react()],
});
