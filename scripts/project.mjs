/** Single project metadata and generated route lifecycle. */
import fs from 'node:fs'
import { writeIfChanged } from './write-if-changed.mjs'
import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const marker = '// @generated-project-route\n'
/** The application owns one project; PUB remains an independent shared tool. */
export function discoverProject (base = root) {
  const config = JSON.parse(fs.readFileSync(path.join(base, 'public/data/pub/index.json'), 'utf8'))
  if ('tabs' in config || 'project' in config || 'projects' in config) {
    throw new Error('Legacy project settings are not supported; use the b2b object in public/data/pub/index.json')
  }
  const b2b = config.b2b || {}
  if (b2b.id !== 'b2b' || b2b.base !== 'b2b/') {
    throw new Error('Single project configuration requires id="b2b" and base="b2b/"')
  }
  const screens = path.join(base, 'src/screen')
  if (!fs.existsSync(screens)) return null
  const extra = fs.readdirSync(screens, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !['b2b', 'pub', 'error'].includes(entry.name))
  if (extra.length) throw new Error('Only src/screen/b2b is supported: ' + extra.map((entry) => entry.name).join(', '))
  return fs.existsSync(path.join(screens, 'b2b'))
    ? { id: 'b2b', label: b2b.label || 'B2B', base: 'b2b/' }
    : null
}
function write (relative, content) {
  const file = path.join(root, relative)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  writeIfChanged(file, content)
}
export function syncProject () {
  const b2b = discoverProject()
  const output = 'public/data/pub/b2b.generated.json'
  // 빈 폴더는 유지하고, 새 체크아웃에 없는 작업 폴더만 생성합니다.
  const folders = ['src/screen/pub/widgets', 'src/screen/pub/layout', 'src/screen/pub/hooks', 'src/screen/pub/lib', 'src/widgets/common', 'src/modules/common', 'public/images/pages', 'public/images/common', 'public/images/@dummy', 'public/images/icon', 'public/images/lottie']
  if (b2b) folders.push('src/widgets/b2b', 'src/modules/b2b', 'public/assets/b2b')
  for (const folder of folders) fs.mkdirSync(path.join(root, folder), { recursive: true })
  // A PUB-only checkout must not retain route shells importing removed loaders.
  if (!b2b) {
    const folder = path.join(root, 'src/app/b2b')
    if (fs.existsSync(folder)) {
      const prune = (dir) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const file = path.join(dir, entry.name)
          if (entry.isDirectory()) prune(file)
          else if (fs.readFileSync(file, 'utf8').startsWith(marker)) fs.unlinkSync(file)
        }
        if (!fs.readdirSync(dir).length) fs.rmdirSync(dir)
      }
      prune(folder)
    }
  }
  if (b2b) {
    const { id } = b2b
    const route = `src/app/${id}/[...slug]/page.jsx`
    write(route, marker + `import { RegistryPage } from '@/lib/RegistryPage'
import { b2bStaticParams } from '@/lib/staticParams'
import { routeMetadata } from '@/lib/routeMetadata'
import { indexLoaders, screenLoaders, indexMeta, screenMeta } from '@/generated/registry-${id}'
import RouteRedirect from '@/comp/providers/RouteRedirect'

export const dynamicParams = false
export function generateStaticParams () { return b2bStaticParams() }
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
  write(output, JSON.stringify({ b2b }, null, 2) + '\n')
  write('src/generated/b2b.js', `/** scripts/project.mjs가 자동 생성하는 B2B 정보입니다. 화면 모듈은 가져오지 않습니다. */\nexport const b2b = ${JSON.stringify(b2b, null, 2)}\n`)
  // 이전 다중 프로젝트 및 project 이름으로 만들었던 메타데이터를 정리합니다.
  for (const legacy of ['src/generated/projects.js', 'src/generated/project.js', 'public/data/pub/projects.generated.json', 'public/data/pub/project.generated.json']) {
    const file = path.join(root, legacy)
    if (fs.existsSync(file)) fs.unlinkSync(file)
  }
  return b2b
}
if (process.argv[1] && import.meta.url === pathToFileURL(fs.realpathSync(process.argv[1])).href) {
  const [command = 'sync'] = process.argv.slice(2)
  if (command !== 'sync') throw new Error('Usage: project.mjs [sync]. Only one project is supported.')
  execFileSync(process.execPath, [path.join(root, 'scripts/registry.mjs')], { stdio: 'inherit' })
}
