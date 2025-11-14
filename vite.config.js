import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gerenciador-de-marmitas-react/',
  plugins: [
    react(),
    tailwindcss()
  ],
})
