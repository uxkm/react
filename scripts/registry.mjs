/**
 * screen 폴더를 스캔해 Next 동적 import 레지스트리를 생성한다.
 * - 활성 프로젝트: 재귀 JSX/TSX 화면 자동 인식
 * - pub/guide · pub/demo: 페이지 파일 자동 인식 (수동 맵 없음)
 * - 메뉴 JSON의 분류와 generated/pub-pages.js의 현재 화면 목록을 병합
 *
 * 사용: node scripts/registry.mjs
 */
import { syncProjects } from './projects.mjs'
import fs from 'node:fs'
import { writeIfChanged } from './files.mjs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

/** 이 스크립트 폴더 */
const __dirname = path.dirname(fileURLToPath(import.meta.url))
/** 프로젝트 루트 */
const root = path.join(__dirname, '..')
/** 화면 소스 루트 */
const screensRoot = path.join(root, 'src/screen')
/** 생성물 출력 폴더. 화면 폴더와 분리 */
const generatedRoot = path.join(root, 'src/generated')
/** 동적 import 레지스트리 출력 */
const outFile = path.join(generatedRoot, 'registry.js')
/** 정적 경로용 id 만 담는 출력 */
const idsFile = path.join(generatedRoot, 'registry-ids.js')

function kebabCase (value) {
  return String(value || '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase()
}

/**
 * 가이드/데모 파일명 → 기본 route id (export const routeId 로 덮어쓸 수 있음)
 * - guide: 파일은 PascalCase(Button.jsx), URL id 는 kebab (button) → /pub/guide/button
 * - demo: kebab-case (ChartDemoPage → chart)
 */
function guideFileToRouteId (fileName, { demo = false } = {}) {
  let raw = String(fileName || '').replace(/\.(jsx|tsx)$/, '')
  if (demo) raw = raw.replace(/DemoPage$/, '')
  else raw = raw.replace(/Page$/, '')
  return kebabCase(raw)
}

/**
 * 화면 파일의 export const meta 를 읽는다. (공통 빌드, 로딩 전에 쓰기 위해 필수)
 *
 * header / footer 만 본다.
 * true 표시, false 숨김. 없는 키는 맵에 넣지 않고, 화면에서는 표시로 둔다.
 * 중괄호 안 주석에 '}' 가 있으면 여기서 객체가 끊기니 넣지 않는다.
 */
function readPageMeta (filePath) {
  if (!fs.existsSync(filePath)) return null
  const src = fs.readFileSync(filePath, 'utf8')
  // 주석 안의 예시(export const meta …)는 무시
  const code = src
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^\s*\/\/.*$/gm, '')
  const match = code.match(/export\s+const\s+meta\s*=\s*\{([^}]*)\}/)
  if (!match) return null
  const body = match[1]
  const meta = {}
  const header = body.match(/header\s*:\s*(true|false)/)
  const footer = body.match(/footer\s*:\s*(true|false)/)
  if (header) meta.header = header[1] === 'true'
  if (footer) meta.footer = footer[1] === 'true'
  return Object.keys(meta).length ? meta : null
}

/** export const name = 'value' */
function readExportString (filePath, exportName) {
  if (!fs.existsSync(filePath)) return null
  const src = fs.readFileSync(filePath, 'utf8')
  const re = new RegExp(`export\\s+const\\s+${exportName}\\s*=\\s*['"\`]([^'"\`]*)['"\`]`)
  const match = src.match(re)
  return match ? match[1] : null
}

/** JSX 의 slug="..." (DemoPageShell 등) — routeId 대용 */
function readSlugProp (filePath) {
  if (!fs.existsSync(filePath)) return null
  const src = fs.readFileSync(filePath, 'utf8')
  const match = src.match(/\bslug\s*=\s*['"]([^'"]+)['"]/)
  return match ? match[1] : null
}

/** meta 가 있으면 레지스트리 한 줄. 없으면 null */
function metaLine (key, filePath) {
  const meta = readPageMeta(filePath)
  if (!meta) return null
  return `  '${key}': ${JSON.stringify(meta)}`
}

/** Recursively collect JSX/TSX screens; skeleton/widget/data folders are not routes. */
function buildProject (id) {
  const dir = path.join(screensRoot, id)
  const entries = new Map()
  function walk (folder, prefix = '', importBase = '@/screen/', sourceRoot = screensRoot) {
    if (!fs.existsSync(folder)) return
    for (const entry of fs.readdirSync(folder, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      if (entry.isDirectory()) {
        if (!['skeleton', 'widgets', 'modules', 'shared', 'data'].includes(entry.name)) walk(path.join(folder, entry.name), prefix + entry.name + '/', importBase, sourceRoot)
        continue
      }
      if (!/\.(jsx|tsx)$/.test(entry.name)) continue
      const file = path.join(folder, entry.name)
      const stem = entry.name.replace(/\.(jsx|tsx)$/, '')
      const key = prefix === '' && stem === 'IndexPage' ? 'main'
        : /^index$/i.test(stem) ? prefix.replace(/\/$/, '')
          : prefix + kebabCase(stem.replace(/Page$/, ''))
      if (!key) continue
      // Root IndexPage keeps the existing /main alias in preference to main/index.
      if (entries.has(key) && key !== 'main') throw new Error(`Duplicate route: ${id}/${key}`)
      if (entries.has(key) && stem !== 'IndexPage') continue
      entries.set(key, { file, importPath: importBase + path.relative(sourceRoot, file).split(path.sep).join('/'), index: /^index$/i.test(stem) || key === 'main' })
    }
  }
  walk(dir)
  // Project widget previews keep their own sources outside screen/. PUB imports no loaders.
  walk(path.join(root, 'src/widgets', id, 'previews'), 'common/', '@/widgets/', path.join(root, 'src/widgets'))
  if (!entries.has('main')) throw new Error(`Missing src/screen/${id}/IndexPage.jsx (or main/index.tsx)`)
  return entries
}

/** Recursively register guide/demo screens, including folder/index.jsx and TSX. */
function buildPubPages (group) {
  const dir = path.join(screensRoot, 'pub', group)
  const pages = {}
  const skipped = new Set(['skeleton', 'widgets', 'modules', 'shared', 'data'])
  function walk (folder, prefix = '') {
    if (!fs.existsSync(folder)) return
    for (const entry of fs.readdirSync(folder, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      if (entry.isDirectory()) {
        if (!entry.name.startsWith('_') && !skipped.has(entry.name)) walk(path.join(folder, entry.name), prefix + kebabCase(entry.name) + '/')
        continue
      }
      if (!/\.(jsx|tsx)$/.test(entry.name) || entry.name.startsWith('_')) continue
      const isIndex = /^index\.(jsx|tsx)$/i.test(entry.name)
      if (isIndex && !prefix) continue // guide home has its own fixed route
      const filePath = path.join(folder, entry.name)
      const routeId = readExportString(filePath, 'routeId') || readSlugProp(filePath) ||
        (isIndex ? prefix.slice(0, -1) : prefix + guideFileToRouteId(entry.name, { demo: group === 'demo' }))
      if (!/^[a-z0-9][a-z0-9-]*(?:\/[a-z0-9][a-z0-9-]*)*$/.test(routeId)) throw new Error(`Invalid ${group} routeId: ${routeId}`)
      if (Object.hasOwn(pages, routeId)) throw new Error(`Duplicate ${group} route: ${routeId}`)
      pages[routeId] = {
        importPath: '@/screen/pub/' + group + '/' + path.relative(dir, filePath).split(path.sep).join('/'),
        filePath,
        label: readExportString(filePath, 'guideLabel') || titleFromId(routeId)
      }
    }
  }
  walk(dir)
  return pages
}

/** id → 표시용 라벨 (routeId 없을 때). PascalCase·kebab 모두 지원 */
function titleFromId (id) {
  const s = String(id || '')
  if (s.includes('-')) {
    return s
      .split('-')
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')
  }
  return s.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
}

const componentPages = buildPubPages('guide')
const demoPages = buildPubPages('demo')

const componentLines = Object.entries(componentPages)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([id, page]) => `  '${id}': () => import('${page.importPath}')`)

const demoLines = Object.entries(demoPages)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([id, page]) => `  '${id}': () => import('${page.importPath}')`)

const componentMetaLines = Object.entries(componentPages)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([id, page]) => metaLine(id, page.filePath))
  .filter(Boolean)

const demoMetaLines = Object.entries(demoPages)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([id, page]) => metaLine(id, page.filePath))
  .filter(Boolean)

const componentNames = Object.keys(componentPages).sort()
const demoNames = Object.keys(demoPages).sort()

const banner = '/* eslint-disable */\n/** Auto-generated by scripts/registry.mjs — do not edit */\n'
const projects = syncProjects()
const bundles = Object.fromEntries(projects.map(({ id }) => [id, buildProject(id)]))
const registryFiles = {}
for (const [id, entries] of Object.entries(bundles)) {
  let output = banner
  for (const [group, isIndex] of [['index', true], ['screen', false]]) {
    const selected = [...entries].filter(([, page]) => page.index === isIndex)
    output += `export const ${group}Loaders = {\n${selected.map(([key, page]) => `  '${key}': () => import('${page.importPath}')`).join(',\n')}\n}\n`
    output += `export const ${group}Meta = {\n${selected.map(([key, page]) => metaLine(key, page.file)).filter(Boolean).join(',\n')}\n}\n`
  }
  registryFiles[id] = output
}
for (const [group, lines, meta] of [
  ['component', componentLines, componentMetaLines],
  ['demo', demoLines, demoMetaLines]
]) {
  registryFiles[group] = banner + `export const ${group}Loaders = {\n${lines.join(',\n')}\n}\nexport const ${group}Meta = {\n${meta.join(',\n')}\n}\n`
}
// Core barrel intentionally never imports optional projects.
const content = banner + "export * from './registry-component'\nexport * from './registry-demo'\n"

/** 정적 제목 추출. 명시한 pageTitle export가 있으면 우선 사용한다. */
function readPageTitle (filePath) {
  const source = fs.readFileSync(filePath, 'utf8')
  return readExportString(filePath, 'pageTitle') ||
    source.match(/<(?:Page|GuideLayout|DemoPageShell)\b[^>]*?\btitle\s*=\s*["']([^"']+)["']/)?.[1]
}

const routeTitles = {}
for (const [id, entries] of Object.entries(bundles)) {
  for (const [key, page] of entries) {
    const title = readPageTitle(page.file)
    if (title) {
      routeTitles[`/${id}/${key}`] = title
      if (key === 'main') routeTitles[`/${id}`] = title
    }
  }
}
for (const [group, pages] of [['guide', componentPages], ['demo', demoPages]]) {
  for (const [id, page] of Object.entries(pages)) {
    const title = readPageTitle(page.filePath) || page.label
    routeTitles[`/pub/${group}/${id}`] = title + ' - 퍼블리싱가이드'
  }
}
routeTitles['/pub/guide'] = '소개 - 퍼블리싱가이드'
routeTitles['/pub'] = '퍼블리시 목록'

const projectRoutes = Object.fromEntries(Object.entries(bundles).map(([id, entries]) => [id, [...entries.keys()]]))
const idsContent = banner + `export const projectRoutes = ${JSON.stringify(projectRoutes, null, 2)}
export const componentNames = ${JSON.stringify(componentNames, null, 2)}
export const demoNames = ${JSON.stringify(demoNames, null, 2)}
export const routeTitles = ${JSON.stringify(routeTitles, null, 2)}
`

fs.mkdirSync(generatedRoot, { recursive: true })
for (const file of fs.readdirSync(generatedRoot)) {
  const match = file.match(/^registry-(.+)\.js$/)
  if (match && match[1] !== 'ids' && !Object.hasOwn(registryFiles, match[1])) fs.unlinkSync(path.join(generatedRoot, file))
}
for (const [group, source] of Object.entries(registryFiles)) {
  writeIfChanged(path.join(generatedRoot, `registry-${group}.js`), source)
}
writeIfChanged(outFile, content)
writeIfChanged(idsFile, idsContent)
console.log('wrote', path.relative(root, outFile))
console.log('wrote', path.relative(root, idsFile))
console.log('projects', projects.map(({ id }) => id).join(', ') || '(PUB only)')
console.log('components', componentNames.length, 'demos', demoNames.length)

const pubPages = Object.fromEntries([['guide', componentPages], ['demo', demoPages]].map(([group, pages]) => [group,
  Object.entries(pages).sort(([a], [b]) => a.localeCompare(b)).map(([id, page]) => ({ id, label: page.label }))
]))
writeIfChanged(path.join(generatedRoot, 'pub-pages.js'), banner + `export const pubPages = ${JSON.stringify(pubPages, null, 2)}\n`)
