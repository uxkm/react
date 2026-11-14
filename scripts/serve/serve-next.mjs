/**
 * HTTP + HTTPS 동시 제공
 * - HTTP : PORT (기본 8090)
 * - HTTPS: HTTPS_PORT (기본 8443), certificates/localhost*.pem
 *
 * 사용:
 *   node scripts/serve/serve-next.mjs --dev   # 개발 (HMR)
 *   node scripts/serve/serve-next.mjs         # 프로덕션 (next build 후)
 */
import { createServer as createHttpServer } from 'node:http'
import { createServer as createHttpsServer } from 'node:https'
import { readFileSync, existsSync } from 'node:fs'
import { networkInterfaces } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { listenServer } from './listen-server.mjs'
import next from 'next'
import { createDevelopmentRefresh } from './development-refresh.mjs'

/**
 * Next handle() 용 parsedUrl — deprecated url.parse 대신 WHATWG URL.
 * @param {string} requestUrl req.url
 */
function parseRequestUrl (requestUrl) {
  const u = new URL(requestUrl || '/', 'http://localhost')
  /** @type {Record<string, string | string[]>} */
  const query = {}
  for (const key of new Set(u.searchParams.keys())) {
    const all = u.searchParams.getAll(key)
    query[key] = all.length > 1 ? all : all[0]
  }
  const pathWithSearch = u.pathname + u.search
  return {
    pathname: u.pathname,
    query,
    search: u.search,
    hash: u.hash,
    href: pathWithSearch + u.hash,
    path: pathWithSearch
  }
}

/** 이 스크립트 파일이 있는 디렉터리 (scripts/serve/) */
const __dirname = path.dirname(fileURLToPath(import.meta.url))
/** 프로젝트 루트 — Next dir */
const root = path.join(__dirname, '../..')

/** --dev 플래그: 개발(HMR) vs 프로덕션 */
const isDev = process.argv.includes('--dev')
const developmentRefresh = isDev ? createDevelopmentRefresh() : null
if (developmentRefresh) process.on('message', (message) => {
  if (message?.type === 'static-refresh') developmentRefresh.refresh(message.revision)
})
/** HTTP 포트 — env PORT, 기본 8090 */
const HTTP_PORT = Number(process.env.PORT || 8090)
/** HTTPS 포트 — env HTTPS_PORT, 기본 8443 */
const HTTPS_PORT = Number(process.env.HTTPS_PORT || 8443)

/** 로컬 HTTPS용 private key 경로 */
const keyPath = path.join(root, 'certificates/localhost-key.pem')
/** 로컬 HTTPS용 인증서 경로 */
const certPath = path.join(root, 'certificates/localhost.pem')

/** LAN IPv4 주소(외부 공개용). 없으면 null */
function lanAddress () {
  try {
    const nets = networkInterfaces()
    for (const list of Object.values(nets || {})) {
      for (const net of list || []) {
        if (net.family === 'IPv4' && !net.internal) return net.address
      }
    }
  } catch {
    // 샌드박스·권한 환경에서 networkInterfaces 실패 시 Network URL만 생략
  }
  return null
}

/**
 * listen 실패 처리 — EADDRINUSE면 안내 후 종료.
 * @param {string} label - HTTP|HTTPS
 * @param {number} port
 * @param {NodeJS.ErrnoException} err
 */
function onListenError (label, port, err) {
  if (err?.code === 'EADDRINUSE') {
    console.error(`[serve] ${label} 포트 ${port} 사용 중 — 기존 node 서버를 종료한 뒤 다시 실행하세요.`)
    console.error(process.platform === 'win32'
      ? `[serve]   PowerShell 확인: Get-NetTCPConnection -LocalPort ${port} | Select-Object OwningProcess`
      : `[serve]   프로세스 확인: lsof -nP -iTCP:${port} -sTCP:LISTEN`)
  } else {
    console.error(`[serve] ${label}`, err)
  }
  process.exit(1)
}

/** Next가 HMR upgrade를 붙일 HTTP 서버 */
const httpServer = createHttpServer()
let httpsServer

/** Next 앱 인스턴스 — httpServer에 HMR/WebSocket 자동 연결 */
const app = next({
  dev: isDev,
  // 개발·빌드 모두 Next.js 16의 기본 번들러인 Turbopack 사용
  ...(isDev ? { turbopack: true } : {}),
  dir: root,
  hostname: 'localhost',
  port: HTTP_PORT,
  // HMR/WebSocket 은 httpServer 에 자동 연결 (getUpgradeHandler 불필요)
  httpServer
})

await app.prepare()

// Finish Next's writers before the supervisor starts another process on the same cache.
if (isDev) {
  let shuttingDown = false
  const shutdown = async () => {
    if (shuttingDown) return
    shuttingDown = true
    developmentRefresh.close()
    httpServer.close()
    httpServer.closeAllConnections()
    httpsServer?.close()
    httpsServer?.closeAllConnections()
    try {
      await app.close()
    } finally {
      process.exit(0)
    }
  }
  process.once('SIGINT', shutdown)
  process.once('SIGTERM', shutdown)
  process.on('message', (message) => { if (message?.type === 'shutdown') shutdown() })
  if (process.connected) process.once('disconnect', shutdown)
}

/** Next 요청 핸들러 */
const handle = app.getRequestHandler()

httpServer.on('request', async (req, res) => {
  if (developmentRefresh?.handle(req, res)) return
  try {
    await handle(req, res, parseRequestUrl(req.url))
  } catch (err) {
    console.error('[serve]', req.url, err)
    res.statusCode = 500
    res.end('internal server error')
  }
})

/** 콘솔 Network URL용 LAN IP */
const lan = lanAddress()
/** 시작 로그용 모드 라벨 */
const label = isDev ? 'development · turbopack' : 'production'

listenServer(httpServer, HTTP_PORT).then(() => {
  if (isDev && process.connected) process.send({ type: 'server-ready' })
  console.log('')
  console.log(`  ▲ 실행 결과 (${label})`)
  console.log(`  - Local HTTP:    http://localhost:${HTTP_PORT}`)
  if (lan) console.log(`  - Network HTTP:  http://${lan}:${HTTP_PORT}`)

  if (!existsSync(keyPath) || !existsSync(certPath)) {
    console.warn('  ! certificates/localhost*.pem 없음 — HTTPS 생략')
    console.log('')
    return
  }

  /** HTTPS 서버 — 인증서 있을 때만 기동 */
  httpsServer = createHttpsServer({
    key: readFileSync(keyPath),
    cert: readFileSync(certPath)
  })

  httpsServer.on('request', async (req, res) => {
    if (developmentRefresh?.handle(req, res)) return
    try {
      await handle(req, res, parseRequestUrl(req.url))
    } catch (err) {
      console.error('[serve]', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })

  // HTTPS 로 접속할 때도 HMR 업그레이드 처리
  httpsServer.on('upgrade', (req, socket, head) => {
    httpServer.emit('upgrade', req, socket, head)
  })

  listenServer(httpsServer, HTTPS_PORT).then(() => {
    console.log(`  - Local HTTPS:   https://localhost:${HTTPS_PORT}`)
    if (lan) console.log(`  - Network HTTPS: https://${lan}:${HTTPS_PORT}`)
    console.log('')
  }).catch((err) => onListenError('HTTPS', HTTPS_PORT, err))
}).catch((err) => onListenError('HTTP', HTTP_PORT, err))
