import { existsSync } from 'node:fs'
import { join } from 'node:path'

const LEGACY_PREFIX = '/_assets/images/'

function resolveLegacyAssetUrl(urlPath, assetsRoot) {
  if (!urlPath.startsWith(LEGACY_PREFIX)) return null

  const relativePath = urlPath.slice(LEGACY_PREFIX.length)
  if (!relativePath || relativePath.includes('..')) return null

  const directPath = join(assetsRoot, '_assets/images', relativePath)
  if (existsSync(directPath)) return urlPath

  const fallbackPath = join(assetsRoot, 'images', relativePath)
  if (existsSync(fallbackPath)) return `/images/${relativePath}`

  return null
}

function createLegacyAssetsMiddleware(assetsRoot) {
  return (req, _res, next) => {
    const rawUrl = req.url ?? ''
    const [urlPath, query = ''] = rawUrl.split('?')
    const resolved = resolveLegacyAssetUrl(urlPath, assetsRoot)

    if (resolved && resolved !== urlPath) {
      req.url = query ? `${resolved}?${query}` : resolved
    }

    next()
  }
}

export default function legacyAssetsPlugin({ publicDir }) {
  const middleware = createLegacyAssetsMiddleware(publicDir)

  return {
    name: 'legacy-assets',
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}
