import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog.html'),
        projets: resolve(__dirname, 'projets.html'),
        voila_pourquoi_jai_cree_le_site_leprimipile: resolve(__dirname, 'articles/voila_pourquoi_jai_cree_le_site_leprimipile.html')
      },
    },
  },
})