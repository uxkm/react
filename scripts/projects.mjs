/** Project discovery, scaffolding and generated route lifecycle. */
import fs from 'node:fs'
import { writeIfChanged } from './files.mjs'
import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const reserved = new Set(['pub', 'guide', 'demo', 'error', 'common', 'api', 'assets', 'component', 'ids'])
const marker = '// @generated-project-route\n'
export function assertProjectId (id) {
  if (!/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(id || '') || reserved.has(id)) {
    throw new Error(`Invalid or reserved project id: ${id}`)
  }
}
export function discoverProjects (base = root) {
  const screens = path.join(base, 'src/screen')
  if (!fs.existsSync(screens)) return []
  const config = JSON.parse(fs.readFileSync(path.join(base, 'public/data/pub/index.json'), 'utf8'))
  const tabs = config.tabs || []
  return fs.readdirSync(screens, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !reserved.has(d.name) && fs.existsSync(path.join(base, 'src/app', d.name)))
    .map((d) => {
      assertProjectId(d.name)
      const tab = tabs.find((t) => t.id === d.name)
      return { id: d.name, label: tab?.label || d.name.toUpperCase(), base: `${d.name}/` }
    })
    .sort((a, b) => {
      const rank = (id) => { const i = tabs.findIndex((t) => t.id === id); return i < 0 ? tabs.length : i }
      return rank(a.id) - rank(b.id) || a.id.localeCompare(b.id)
    })
}
function write (relative, content) {
  const file = path.join(root, relative)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  writeIfChanged(file, content)
}
export function syncProjects () {
  const projects = discoverProjects()
  const output = 'public/data/pub/projects.generated.json'
  const previous = fs.readdirSync(path.join(root, 'src/app'), { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !reserved.has(entry.name))
    .map((entry) => ({ id: entry.name }))
  for (const { id } of previous) {
    if (projects.some((p) => p.id === id)) continue
    // Only remove shells owned by this generator; authored files are preserved.
    const dir = path.join(root, 'src/app', id)
    if (fs.existsSync(dir)) {
      for (const file of fs.readdirSync(dir, { recursive: true })) {
        const full = path.join(dir, file)
        if (fs.statSync(full).isFile() && fs.readFileSync(full, 'utf8').startsWith(marker)) fs.unlinkSync(full)
      }
      const prune = (folder) => {
        for (const entry of fs.readdirSync(folder, { withFileTypes: true })) if (entry.isDirectory()) prune(path.join(folder, entry.name))
        if (!fs.readdirSync(folder).length) fs.rmdirSync(folder)
      }
      prune(dir)
    }
  }
  for (const { id } of projects) {
    const route = `src/app/${id}/[...slug]/page.jsx`
    write(route, marker + `import { RegistryPage } from '@/lib/RegistryPage'
import { projectStaticParams } from '@/lib/staticParams'
import { routeMetadata } from '@/lib/routeMetadata'
import { indexLoaders, screenLoaders, indexMeta, screenMeta } from '@/generated/registry-${id}'
import RouteRedirect from '@/comp/providers/RouteRedirect'

export const dynamicParams = false
export function generateStaticParams () { return projectStaticParams('${id}') }
export default async function Page ({ params }) {
  const { slug } = await params
  const key = slug.join('/')
  if (key === 'main') return <RouteRedirect href="/${id}" />
  return <RegistryPage loaders={{ ...indexLoaders, ...screenLoaders }} metaMap={{ ...indexMeta, ...screenMeta }} routeKey={key} />
}
export async function generateMetadata ({ params }) {
  const { slug } = await params
  return routeMetadata('/${id}/' + slug.join('/'))
}
`)
    // These root shells contain no project-specific implementation.
    write(`src/app/${id}/page.jsx`, marker + `import { RegistryPage } from '@/lib/RegistryPage'
import { indexLoaders, indexMeta } from '@/generated/registry-${id}'
import { routeMetadata } from '@/lib/routeMetadata'
export const metadata = routeMetadata('/${id}')
export default function Page () { return <RegistryPage loaders={indexLoaders} metaMap={indexMeta} routeKey="main" /> }
`)
    const styleImport = fs.existsSync(path.join(root, `src/styles/pages/${id}/index.scss`)) ? `import '@/styles/pages/${id}/index.scss'\n` : ''
    write(`src/app/${id}/layout.jsx`, marker + `${styleImport}export default function Layout ({ children }) { return children }
`)
  }
  write(output, JSON.stringify({ projects }, null, 2) + '\n')
  write('src/generated/projects.js', `/** Auto-generated: metadata only; no project imports. */\nexport const projects = ${JSON.stringify(projects, null, 2)}\n`)
  return projects
}
export function addProject (id) {
  assertProjectId(id)
  const dirs = [`src/app/${id}`, `src/screen/${id}`, `src/widgets/${id}`, `src/modules/${id}`, `src/styles/pages/${id}`, `public/data/pub/${id}`, `public/assets/${id}`]
  if (dirs.some((dir) => fs.existsSync(path.join(root, dir)))) throw new Error(`Project directory already exists: ${id}`)
  for (const dir of dirs) fs.mkdirSync(path.join(root, dir), { recursive: true })
  for (const dir of [`src/widgets/${id}`, `src/modules/${id}`, `public/assets/${id}`]) write(`${dir}/.gitkeep`, '')
  write(`src/screen/${id}/IndexPage.jsx`, `import { Page } from '@/comp'\nexport default function IndexPage () { return <><Page page="${id}-main" title="${id}" /><section className="page-container"><h1>${id}</h1></section></> }\n`)
  write(`src/styles/pages/${id}/index.scss`, `// ${id} project styles\n`)
  write(`public/data/pub/${id}/index.json`, JSON.stringify({ folders: [{ id: 'main', name: '메인화면', file: 'main.json' }] }, null, 2) + '\n')
  write(`public/data/pub/${id}/main.json`, JSON.stringify({ id: 'main', name: '메인화면', depth2: [{ id: `${id}-main`, name: '메인화면', pageUrl: `/${id}`, filePath: `src/screen/${id}/IndexPage.jsx` }] }, null, 2) + '\n')
}
export function removeProject (id) {
  assertProjectId(id)
  for (const dir of [`src/app/${id}`, `src/screen/${id}`, `src/widgets/${id}`, `src/modules/${id}`, `src/styles/pages/${id}`, `public/data/pub/${id}`, `public/assets/${id}`]) {
    fs.rmSync(path.join(root, dir), { recursive: true, force: true })
  }
}
if (process.argv[1] && import.meta.url === pathToFileURL(fs.realpathSync(process.argv[1])).href) {
  const [command = 'sync', id] = process.argv.slice(2)
  if (command === 'add') addProject(id)
  else if (command === 'remove') removeProject(id)
  else if (command !== 'sync') throw new Error('Usage: projects.mjs [sync|add <id>|remove <id>]')
  execFileSync(process.execPath, [path.join(root, 'scripts/registry.mjs')], { stdio: 'inherit' })
}
