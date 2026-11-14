/** One lifecycle for registry generation, static refresh, and Next dev (SCSS). */
import fs from 'node:fs'
import path from 'node:path'
import { spawn, execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { fileURLToPath } from 'node:url'
import { root } from '../generate/project.mjs'
import { getStyleEntries } from '../build/style-entries.mjs'
import { watchSourceFiles } from './watch-files.mjs'
import { syncLottieList } from '../generate/lottie-list.mjs'
import { stopChild } from '../lib/stop-child.mjs'

const execute = promisify(execFile)
function sourceTopology () {
  const files = []
  function walk (dir) {
    if (!fs.existsSync(dir)) return
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.')) continue
      const file = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(file)
      else if (/\.(jsx|tsx|js|ts)$/.test(entry.name)) files.push(path.relative(root, file))
    }
  }
  walk(path.join(root, 'src/app'))
  walk(path.join(root, 'src/screen'))
  walk(path.join(root, 'src/widgets'))
  return JSON.stringify([files.sort(), getStyleEntries()])
}
function registrySnapshot () {
  const file = path.join(root, 'src/generated/registry-ids.js')
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''
}
export async function startDevelopment () {
  let child = null
  let closing = false
  let topology = sourceTopology()
  let registry = registrySnapshot()
  let revision = 0
  let ownsDevCache = false
  let refreshTimer
  const expectedExit = new WeakSet()
  // 기동 시점에 lottie 폴더 목록을 맞춰 둔다 (watch 코드 반영 전 추가분 포함)
  syncLottieList()

  function startServer () {
    if (child || closing) return
    const current = spawn(process.execPath, [path.join(root, 'scripts/serve/serve-next.mjs'), '--dev'], {
      cwd: root,
      env: { ...process.env, STYLE_MODE: 'scss' },
      stdio: ['inherit', 'inherit', 'inherit', 'ipc']
    })
    child = current
    current.on('message', (message) => {
      if (child === current && message?.type === 'server-ready') ownsDevCache = true
    })
    current.on('error', (error) => console.error('[watch]', error.message))
    current.on('exit', (code) => {
      if (child === current) child = null
      if (!closing && !expectedExit.has(current)) console.error(`[watch] Next exited (${code}); watching for the next correction`)
    })
  }
  async function stopServer () {
    const current = child
    if (!current) return
    expectedExit.add(current)
    await stopChild(current)
    if (child === current) child = null
  }
  async function regenerate () {
    const { stdout } = await execute(process.execPath, [path.join(root, 'scripts/generate/registry.mjs')], { cwd: root })
    const { stdout: validation } = await execute(process.execPath, [path.join(root, 'scripts/generate/validate-project.mjs')], { cwd: root })
    process.stdout.write(stdout + validation)
  }
  function refreshBrowser () {
    clearTimeout(refreshTimer)
    refreshTimer = setTimeout(() => {
      if (child?.connected) child.send({ type: 'static-refresh', revision: ++revision })
    }, 500)
  }
  const watcher = watchSourceFiles({
    root,
    async onBatch (paths) {
      if (closing) return
      const before = sourceTopology()
      const changedTopology = before !== topology
      const configuration = paths.some((file) => !file.includes('/') || file.startsWith('scripts/') || file.startsWith('src/config/'))
      let restart = changedTopology || configuration
      if (restart) await stopServer()
      const needsRegistry = changedTopology || paths.some((file) => file === 'src/screen' || file.startsWith('src/screen/') || file.startsWith('src/widgets/') || file === 'public/data/pub/index.json' || file.startsWith('scripts/'))
      if (needsRegistry) await regenerate()
      const nextRegistry = registrySnapshot()
      if (nextRegistry !== registry) restart = true
      if (restart) await stopServer()
      // lottie JSON 추가·삭제 시 목록만 갱신 (Next 재시작 불필요)
      if (paths.some((file) => file === 'public/images/lottie' || file.startsWith('public/images/lottie/'))) {
        const files = syncLottieList()
        console.log(`[watch] lottie list synced (${files.length})`)
      }
      // A structural restart must not reuse manifests from the previous route graph.
      // Only clear cache after a server owned by this supervisor actually started.
      if (restart && ownsDevCache) {
        fs.rmSync(path.join(root, '.next/dev'), { recursive: true, force: true })
        ownsDevCache = false
      }
      topology = sourceTopology() // includes managed routes created by the registry
      registry = nextRegistry
      startServer()
      if (!restart && paths.some((file) => file.startsWith('public/') || (file.startsWith('src/') && !/\.(?:[cm]?[jt]sx?|scss|sass)$/.test(file)))) refreshBrowser()
      console.log(`[watch] ${restart ? 'routes/config refreshed; Next restarted' : 'updated'}: ${paths.slice(0, 4).join(', ')}${paths.length > 4 ? ' …' : ''}`)
    },
    onError (error) {
      console.error('[watch] update failed; fix the source to retry:', error.stderr || error.message || error)
      if (!closing) startServer()
    }
  })
  startServer()
  console.log('[watch] src/ · public/ · scripts/ · config — create/change/delete; generated output excluded')
  async function close () {
    if (closing) return
    closing = true
    clearTimeout(refreshTimer)
    await watcher.close()
    await stopServer()
  }
  for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => { close().then(() => process.exit(0)) })
  if (process.connected) {
    const shutdown = () => { close().then(() => process.exit(0)) }
    process.on('message', (message) => { if (message?.type === 'shutdown') shutdown() })
    process.once('disconnect', shutdown)
  }
  return { close }
}
if (process.argv[1] && fs.realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await startDevelopment()
}
