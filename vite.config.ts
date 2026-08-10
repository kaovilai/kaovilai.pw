/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// Injected only at build time so Vite dev-server HMR (websocket, inline
// module preamble) is unaffected. 'unsafe-inline' in style-src is required
// by Vue template style attributes and the animated typing components.
const csp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
  "font-src 'self' https://cdn.jsdelivr.net",
  "img-src 'self' data: https://raw.githubusercontent.com",
  "connect-src 'self' https://raw.githubusercontent.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'"
].join('; ')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'inject-csp',
      apply: 'build',
      transformIndexHtml: (html: string) =>
        html.replace(
          /<!-- csp-placeholder[^>]*-->/,
          `<meta http-equiv="Content-Security-Policy" content="${csp}">`
        ),
    },
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'docs', // Keep same output directory for GitHub Pages
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.includes('node_modules/vue') || id.includes('node_modules/@vue')) {
            return 'vendor'
          }
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
})