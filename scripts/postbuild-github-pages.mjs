/**
 * GitHub Pages(doc.uxkm.io 스테이징 등) SPA fallback.
 * 존재하지 않는 경로 요청 시 GitHub가 404.html을 내려주고, index.html과 동일한 앱이
 * 로드되어 React Router가 UXKM 404 페이지를 렌더링한다.
 * (.htaccess / _redirects 는 GitHub Pages에서 동작하지 않음)
 */
import { copyFileSync, existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { syncLegacyAssets } from './sync-legacy-assets.mjs'

const root = fileURLToPath(new URL('..', import.meta.url))
const distDir = join(root, 'dist')
const indexHtml = join(distDir, 'index.html')
const notFoundHtml = join(distDir, '404.html')
const noJekyllFile = join(distDir, '.nojekyll')

if (!existsSync(indexHtml)) {
  console.error('[postbuild-github-pages] dist/index.html 이 없습니다. vite build 를 먼저 실행하세요.')
  process.exit(1)
}

const legacyCopied = syncLegacyAssets({ rootDir: root, distDir })
if (legacyCopied > 0) {
  console.log(
    `[postbuild-github-pages] _assets/images fallback: mirrored ${legacyCopied} file(s) from /images`,
  )
}

copyFileSync(indexHtml, notFoundHtml)
// Jekyll 기본 규칙: `_`로 시작하는 경로·파일 미배포 → 청크 404 방지
writeFileSync(noJekyllFile, '')

const bundleDir = join(distDir, 'pages')
if (existsSync(bundleDir)) {
  const underscoreBundles = readdirSync(bundleDir).filter((name) => name.startsWith('_'))
  if (underscoreBundles.length > 0) {
    console.warn(
      '[postbuild-github-pages] 경고: pages/ 에 `_`로 시작하는 번들이 있습니다.',
      'GitHub Pages 배포 시 서브 페이지가 깨질 수 있습니다:',
      underscoreBundles.slice(0, 5).join(', '),
      underscoreBundles.length > 5 ? `외 ${underscoreBundles.length - 5}개` : '',
    )
  }
}

const cnamePath = join(distDir, 'CNAME')
if (existsSync(cnamePath)) {
  console.log(`[postbuild-github-pages] dist/CNAME 확인: ${readFileSync(cnamePath, 'utf8').trim()}`)
} else {
  console.warn('[postbuild-github-pages] dist/CNAME 이 없습니다. public/CNAME 을 확인하세요.')
}

console.log('[postbuild-github-pages] dist/404.html, dist/.nojekyll 생성 완료 (GitHub Pages SPA)')
