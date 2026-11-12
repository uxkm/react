/**
 * screen 폴더를 스캔해 Next 동적 import 레지스트리를 생성한다.
 * - 단일 B2B: 재귀 JSX/TSX 화면 자동 인식
 * - pub/guide · pub/demo: 페이지 파일 자동 인식 (수동 맵 없음)
 * - 메뉴 JSON의 분류와 generated/pub-pages.js의 현재 화면 목록을 병합
 *
 * 사용: node scripts/registry.mjs
 */
import { syncProject } from './project.mjs'
import fs from 'node:fs'
import { writeIfChanged } from './write-if-changed.mjs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

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

/** 정적인 meta 객체만 읽는다. 화면 코드를 실행하지 않고 중첩 항목·주석·타입 구문을 처리한다. */
function readPageMeta (filePath) {
  if (!fs.existsSync(filePath)) return null
  const source = ts.createSourceFile(filePath, fs.readFileSync(filePath, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  function unwrap (node) {
    while (node && (ts.isAsExpression(node) || ts.isSatisfiesExpression(node) || ts.isParenthesizedExpression(node))) node = node.expression
    return node
  }
  function booleanValue (node, key) {
    const value = unwrap(node)
    if (value?.kind === ts.SyntaxKind.TrueKeyword) return true
    if (value?.kind === ts.SyntaxKind.FalseKeyword) return false
    throw new Error(`${filePath}: meta.${key} must be a static true or false`)
  }
  function propertyName (node) {
    return node && (ts.isIdentifier(node) || ts.isStringLiteral(node)) ? node.text : null
  }
  for (const statement of source.statements) {
    if (!ts.isVariableStatement(statement) || !statement.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword)) continue
    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || declaration.name.text !== 'meta') continue
      const object = unwrap(declaration.initializer)
      if (!object || !ts.isObjectLiteralExpression(object)) throw new Error(`${filePath}: export const meta must be a static object`)
      const meta = {}
      for (const property of object.properties) {
        if (ts.isSpreadAssignment(property) || ts.isShorthandPropertyAssignment(property)) {
          throw new Error(`${filePath}: meta requires explicit static properties without spreads or shorthand`)
        }
        if (!ts.isPropertyAssignment(property)) continue
        const name = propertyName(property.name)
        if (['banner', 'header', 'footer', 'floating'].includes(name)) meta[name] = booleanValue(property.initializer, name)
        if (name === 'floatingItems') {
          const items = unwrap(property.initializer)
          if (!ts.isObjectLiteralExpression(items)) throw new Error(`${filePath}: meta.floatingItems must be a static object`)
          meta.floatingItems = Object.fromEntries(items.properties.map((item) => {
            const key = propertyName(item.name)
            if (!ts.isPropertyAssignment(item) || key == null) throw new Error(`${filePath}: meta.floatingItems requires named boolean entries`)
            return [key, booleanValue(item.initializer, `floatingItems.${key}`)]
          }))
        }
      }
      return Object.keys(meta).length ? meta : null
    }
  }
  return null
}

/** export const name = 'value' */
function readExportString (filePath, exportName) {
  if (!fs.existsSync(filePath)) return null
  const src = fs.readFileSync(filePath, 'utf8')
  const re = new RegExp(`export\\s+const\\s+${exportName}\\s*=\\s*['"\`]([^'"\`]*)['"\`]`)
  const match = src.match(re)
  return match ? match[1] : null
}

/** JSX 의 slug="..." (DemoLayout 등) — routeId 대용 */
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
      // 페이지명/index.tsx는 폴더 경로로 등록합니다. URL에는 index를 붙이지 않습니다.
      const key = prefix === '' && stem === 'index' ? 'main'
        : /^index$/i.test(stem) ? prefix.replace(/\/$/, '')
          : prefix + kebabCase(stem.replace(/Page$/, ''))
      if (!key) continue
      // Root index keeps the existing /main alias in preference to main/index.
      if (entries.has(key)) {
        const rootIndex = prefix === '' && stem === 'index'
        const previousIsRootIndex = /^index\.(jsx|tsx)$/.test(path.relative(dir, entries.get(key).file))
        if (key === 'main' && previousIsRootIndex && prefix === 'main/' && stem === 'index') continue
        if (!(key === 'main' && rootIndex && /[/\\]main[/\\]index\.(jsx|tsx)$/.test(entries.get(key).file))) {
          throw new Error(`Duplicate route: ${id}/${key}`)
        }
      }
      entries.set(key, { file, importPath: importBase + path.relative(sourceRoot, file).split(path.sep).join('/'), index: /^index$/i.test(stem) || key === 'main' })
    }
  }
  walk(dir)
  // Project widget previews keep their own sources outside screen/. PUB imports no loaders.
  walk(path.join(root, 'src/widgets', id, 'previews'), 'common/', '@/widgets/', path.join(root, 'src/widgets'))
  if (!entries.has('main')) throw new Error(`Missing src/screen/${id}/index.jsx (or index.tsx / main/index.tsx)`)
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
const b2b = syncProject()
const entries = b2b ? buildProject(b2b.id) : new Map()
const registryFiles = {}
if (b2b) {
  let output = banner
  for (const [group, isIndex] of [['index', true], ['screen', false]]) {
    const selected = [...entries].filter(([, page]) => page.index === isIndex)
    output += `export const ${group}Loaders = {\n${selected.map(([key, page]) => `  '${key}': () => import('${page.importPath}')`).join(',\n')}\n}\n`
    output += `export const ${group}Meta = {\n${selected.map(([key, page]) => metaLine(key, page.file)).filter(Boolean).join(',\n')}\n}\n`
  }
  registryFiles.b2b = output
}
for (const [group, lines, meta] of [
  ['component', componentLines, componentMetaLines],
  ['demo', demoLines, demoMetaLines]
]) {
  registryFiles[group] = banner + `export const ${group}Loaders = {\n${lines.join(',\n')}\n}\nexport const ${group}Meta = {\n${meta.join(',\n')}\n}\n`
}
// PUB 공통 진입점은 B2B 화면 로더를 가져오지 않습니다.
const content = banner + "export * from './registry-component'\nexport * from './registry-demo'\n"

/** 정적 제목 추출. 명시한 pageTitle export가 있으면 우선 사용한다. */
function readPageTitle (filePath) {
  const source = fs.readFileSync(filePath, 'utf8')
  return readExportString(filePath, 'pageTitle') ||
    source.match(/<(?:Page|GuideLayout|DemoLayout)\b[^>]*?\btitle\s*=\s*["']([^"']+)["']/)?.[1]
}

const routeTitles = {}
if (b2b) {
  for (const [key, page] of entries) {
    const title = readPageTitle(page.file)
    if (title) {
      routeTitles[`/b2b/${key}`] = title
      if (key === 'main') routeTitles['/b2b'] = title
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

const b2bRoutes = [...entries.keys()]
const idsContent = banner + `export const b2bRoutes = ${JSON.stringify(b2bRoutes, null, 2)}
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
console.log('project', b2b?.id || '(PUB only)')
console.log('components', componentNames.length, 'demos', demoNames.length)

const pubPages = Object.fromEntries([['guide', componentPages], ['demo', demoPages]].map(([group, pages]) => [group,
  Object.entries(pages).sort(([a], [b]) => a.localeCompare(b)).map(([id, page]) => ({ id, label: page.label }))
]))
writeIfChanged(path.join(generatedRoot, 'pub-pages.js'), banner + `export const pubPages = ${JSON.stringify(pubPages, null, 2)}\n`)
