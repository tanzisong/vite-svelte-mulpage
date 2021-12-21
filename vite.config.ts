import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {resolve} from "path";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [legacy({
    targets: ['ie >= 11'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime']
  }), svelte()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html'),
        one: resolve(__dirname, 'nested/one/index.html')
      }
    }
  }
})
