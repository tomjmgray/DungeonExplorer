import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const ASSET_URL = process.env.ASSET_URL || '';


export default defineConfig({
  // base: `${ASSET_URL}/index.html`,
  plugins: [vue()],
  server: {
    '/': {
      target: 'http://localhost:80'
    }
  }
})
