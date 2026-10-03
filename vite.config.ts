import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative assets work on GitHub Pages whether at root or subpath
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
