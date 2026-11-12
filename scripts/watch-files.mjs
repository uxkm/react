import fs from 'node:fs'
import path from 'node:path'

/** Generated files never feed back into the source watcher. */
export function isWatchedPath (relative) {
  const parts = relative.replaceAll('\\', '/').split('/')
  if (['node_modules', '.git', '.next', 'out', 'reports', 'test-results'].includes(parts[0])) return false
  if (parts.includes('node_modules') || parts.includes('.git')) return false
  if (parts[0] === 'src' && (parts[1] === 'generated' || (parts[1] === 'styles' && ['css', 'dist'].includes(parts[2])))) return false
  if (parts.includes('.DS_Store')) return false
  const name = parts.at(-1)
  if (name.endsWith('~') || /\.(?:swp|tmp|tsbuildinfo)$/.test(name) || relative === 'public/data/pub/b2b.generated.json') return false
  return ['src', 'public', 'scripts'].includes(parts[0]) ||
    (parts.length === 1 && /^(?:next\.config\.|postcss\.config\.|tsconfig\.json$|package\.json$|README\.md$|\.env)/.test(name))
}

/** Debounced, serial batches; changes during a running job are never discarded. */
export function watchSourceFiles ({ root, onBatch, onError = console.error, debounce = 180, pollInterval = 750 }) {
  const watchers = new Map()
  const pending = new Set()
  let closed = false
  let timer
  let active = Promise.resolve()
  let running = false
  let warned = false
  // Polling also catches lost native events on network/virtualized filesystems.
  function takeSnapshot () {
    const result = new Map()
    function walk (relative) {
      if (!isWatchedPath(relative)) return
      const file = path.join(root, relative)
      try {
        const stat = fs.lstatSync(file)
        if (stat.isSymbolicLink()) return
        result.set(relative, stat.isDirectory() ? 'directory' : `${stat.size}:${stat.mtimeMs}:${stat.ctimeMs}:${stat.ino}`)
        if (stat.isDirectory()) for (const name of fs.readdirSync(file)) walk(relative + '/' + name)
      } catch (error) { if (error.code !== 'ENOENT') onError(error) }
    }
    for (const name of fs.readdirSync(root)) if (isWatchedPath(name)) walk(name)
    return result
  }
  let snapshot = takeSnapshot()
  function nativeFailure (error) {
    if (!warned) { console.warn(`[watch] native watcher unavailable (${error.code}); polling remains active`); warned = true }
  }
  const schedule = (relative) => {
    if (closed || !isWatchedPath(relative)) return
    pending.add(relative)
    clearTimeout(timer)
    timer = setTimeout(flush, debounce)
  }
  async function flush () {
    if (closed || running || !pending.size) return
    const paths = [...pending].sort()
    pending.clear()
    snapshot = takeSnapshot()
    running = true
    active = Promise.resolve().then(() => onBatch(paths)).catch(onError)
    await active
    running = false
    if (pending.size && !closed) { clearTimeout(timer); timer = setTimeout(flush, debounce) }
  }
  function attach (name) {
    if (watchers.has(name)) return
    const dir = path.join(root, name)
    if (!fs.existsSync(dir)) return
    let watcher
    try {
      watcher = fs.watch(dir, { recursive: true }, (_event, filename) => {
        schedule(filename ? `${name}/${String(filename).replaceAll('\\', '/')}` : name)
      })
    } catch (error) { nativeFailure(error); return }
    watcher.on('error', (error) => {
      watcher.close()
      watchers.delete(name)
      nativeFailure(error)
    })
    watchers.set(name, watcher)
  }
  for (const name of ['src', 'public', 'scripts']) attach(name)
  // Root is nonrecursive: never descend into node_modules, .next or out.
  let rootWatcher
  try { rootWatcher = fs.watch(root, (_event, filename) => {
    if (!filename) return
    const name = String(filename)
    if (['src', 'public', 'scripts'].includes(name)) {
      const old = watchers.get(name)
      old?.close()
      watchers.delete(name)
      attach(name)
    }
    schedule(name)
  }) } catch (error) { nativeFailure(error) }
  rootWatcher?.on('error', (error) => { rootWatcher.close(); nativeFailure(error) })
  const poller = setInterval(() => {
    if (closed) return
    const current = takeSnapshot()
    for (const file of new Set([...snapshot.keys(), ...current.keys()])) if (snapshot.get(file) !== current.get(file)) schedule(file)
    snapshot = current
  }, pollInterval)
  return {
    async close () {
      closed = true
      clearTimeout(timer)
      clearInterval(poller)
      rootWatcher?.close()
      for (const watcher of watchers.values()) watcher.close()
      await active
    }
  }
}
