import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/Sristi222/Beautywebsite.git',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});


