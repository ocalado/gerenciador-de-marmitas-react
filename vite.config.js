import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProd ? '/gerenciador-de-marmitas-react/' : '/',
  plugins: [
    react(),
    tailwindcss()
  ],
})
