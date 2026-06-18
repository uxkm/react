import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import legacyAssetsPlugin from './vite/plugins/legacyAssetsPlugin.js'

const publicDir = fileURLToPath(new URL('./public', import.meta.url))

function liveDetectReloadPlugin() {
  const liveExtensions = new Set([
    '.html',
    '.htm',
    '.md',
    '.mdx',
    '.scss',
    '.sass',
    '.css',
    '.png',
    '.jpg',
    '.jpeg',
    '.gif',
    '.svg',
    '.webp',
    '.avif',
  ])

  const isLiveFile = (filePath) => {
    const normalized = filePath.toLowerCase()
    for (const extension of liveExtensions) {
      if (normalized.endsWith(extension)) return true
    }
    return false
  }

  return {
    name: 'live-detect-reload',
    apply: 'serve',
    configureServer(server) {
      const reloadIfLiveFile = (filePath) => {
        if (!isLiveFile(filePath)) return
        server.ws.send({ type: 'full-reload', path: '*' })
      }

      // Detect file edits and also newly added/removed files in real time.
      server.watcher.on('change', reloadIfLiveFile)
      server.watcher.on('add', reloadIfLiveFile)
      server.watcher.on('unlink', reloadIfLiveFile)
    },
  }
}

/** GitHub Pages(Jekyll)은 `_`로 시작하는 파일명을 배포에서 제외한다. */
function sanitizeBundleFileName(name) {
  const base = String(name ?? 'chunk').replace(/^\/+/, '')
  return base.startsWith('_') ? `chunk-${base.slice(1)}` : base
}

const bundleDir = 'pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), legacyAssetsPlugin({ publicDir }), liveDetectReloadPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Vite 8 기본값(lightningcss)은 레거시 SCSS 산출물에서 규칙 누락·깨짐이 날 수 있음
    cssMinify: 'esbuild',
    assetsDir: bundleDir,
    rolldownOptions: {
      output: {
        entryFileNames: `${bundleDir}/[name]-[hash].js`,
        chunkFileNames: (chunkInfo) =>
          `${bundleDir}/${sanitizeBundleFileName(chunkInfo.name)}-[hash].js`,
        assetFileNames: (assetInfo) => {
          const baseName = assetInfo.names?.[0] ?? assetInfo.name ?? 'asset'
          return `${bundleDir}/${sanitizeBundleFileName(baseName)}-[hash][extname]`
        },
        manualChunks(id) {
          if (id.includes('@uiw/react-codemirror')) return 'editor-vendor'
          if (id.includes('@codemirror/lang-html')) return 'codemirror-lang-html'
          if (id.includes('@codemirror/lang-css')) return 'codemirror-lang-css'
          if (id.includes('@codemirror/lang-javascript')) return 'codemirror-lang-javascript'
          if (id.includes('@codemirror/')) return 'codemirror-core'
          if (id.includes('@lezer/')) return 'codemirror-vendor'
          return undefined
        },
      },
    },
  },
})
