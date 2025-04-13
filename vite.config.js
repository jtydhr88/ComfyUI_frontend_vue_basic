import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import transformImports from './vite-plugin-transform-imports'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    transformImports()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': '{}',
    'process.env.SSR': false,
    '__VUE_OPTIONS_API__': true,
    '__VUE_PROD_DEVTOOLS__': false
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
        'vue',
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