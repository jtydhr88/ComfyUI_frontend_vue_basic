import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    lib: {
      entry: './src/main.js',
      formats: ['es'],
      fileName: 'main'
    },
    rollupOptions: {
      external: [
        '../../../scripts/app.js',
        '../../../scripts/domWidget.js',
          '../../../scripts/utils.js',
        'vue',
        "primevue"
      ],
      output: {
        dir: 'js',
        assetFileNames: 'assets/[name].[ext]',
        entryFileNames: 'main.js'
      }
    },
    outDir: 'js',
    sourcemap: false,
    assetsInlineLimit: 0,
    cssCodeSplit: false
  }
})