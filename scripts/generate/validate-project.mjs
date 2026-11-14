/** Enforce project boundaries and the static-export contract before dev/build. */
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import ts from 'typescript'
import { discoverProject, root } from './project.mjs'

const codePattern = /\.(?:[cm]?js|jsx|ts|tsx|scss)$/
function filesUnder (folder) {
  if (!fs.existsSync(folder)) return []
  return fs.readdirSync(folder, { withFileTypes: true }).flatMap((entry) => {
    if (['css', 'node_modules'].includes(entry.name)) return []
    const file = path.join(folder, entry.name)
    return entry.isDirectory() ? filesUnder(file) : codePattern.test(file) ? [file] : []
  })
}
export function validateProject (base = root) {
  const errors = []
  const b2b = discoverProject(base)
  // 화면 외에 남아 있는 이전 프로젝트 전용 폴더도 검사합니다.
  for (const folder of ['src/app', 'src/widgets', 'src/modules', 'src/styles/pages', 'public/assets', 'public/data/pub']) {
    for (const legacy of ['web', 'mobile', 'project']) {
      if (fs.existsSync(path.join(base, folder, legacy))) errors.push(`Legacy project directory: ${folder}/${legacy}`)
    }
  }
  if (b2b) {
    const { id } = b2b
    for (const folder of [`public/data/pub/${id}`]) {
      if (!fs.existsSync(path.join(base, folder))) errors.push(`Missing ${folder}`)
    }
    const dataFile = path.join(base, `public/data/pub/${id}/index.json`)
    if (!fs.existsSync(dataFile)) errors.push(`Missing PUB index: public/data/pub/${id}/index.json`)
    else {
      const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'))
      for (const folder of data.folders || []) {
        const file = folder.file || `${folder.id}.json`
        if (!file.startsWith('/') && !/^https?:/.test(file) && !fs.existsSync(path.join(path.dirname(dataFile), file))) errors.push(`Missing PUB data: ${id}/${file}`)
      }
    }
  }
  const owner = (file) => {
    const rel = path.relative(base, file).split(path.sep).join('/')
    const match = rel.match(/^src\/(?:screen|app|widgets|modules)\/([^/]+)\//) || rel.match(/^src\/styles\/pages\/([^/]+)\//)
    return match && !['pub', 'guide', 'demo', 'error', 'common'].includes(match[1]) ? match[1] : null
  }
  function resolveLocal (file, specifier) {
    let target
    if (specifier === '@/comp') target = path.join(base, 'src/components')
    else if (specifier.startsWith('@/comp/')) target = path.join(base, 'src/components', specifier.slice(7))
    else if (specifier.startsWith('@/')) target = path.join(base, 'src', specifier.slice(2))
    else if (specifier.startsWith('@components/')) target = path.join(base, 'src/components', specifier.slice(12))
    else if (specifier.startsWith('@screen/')) target = path.join(base, 'src/screen', specifier.slice(8))
    else if (specifier.startsWith('.')) target = path.resolve(path.dirname(file), specifier)
    else if (file.endsWith('.scss') && !specifier.startsWith('sass:')) {
      const candidates = [path.resolve(path.dirname(file), specifier), path.join(base, 'src/styles', specifier)]
      return candidates.flatMap((candidate) => [candidate, candidate + '.scss', path.join(path.dirname(candidate), '_' + path.basename(candidate) + '.scss'), path.join(candidate, '_index.scss')]).find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile()) || null
    } else return null
    return ['', '.js', '.jsx', '.ts', '.tsx', '.scss', '/index.js', '/index.jsx', '/index.ts', '/index.tsx'].map((ext) => target + ext).find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile()) || target
  }
  const files = filesUnder(path.join(base, 'src'))
  const graph = new Map()
  for (const file of files) {
    const rel = path.relative(base, file)
    const source = fs.readFileSync(file, 'utf8')
    const specs = []
    if (file.endsWith('.scss')) {
      for (const match of source.matchAll(/@(?:use|forward|import)\s+['"]([^'"]+)['"]/g)) specs.push(match[1])
    } else {
      const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, file.endsWith('x') ? ts.ScriptKind.TSX : ts.ScriptKind.JS)
      const visit = (node) => {
        if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) specs.push(node.moduleSpecifier.text)
        if (ts.isCallExpression(node) && (node.expression.kind === ts.SyntaxKind.ImportKeyword || node.expression.getText(ast) === 'require') && node.arguments[0] && ts.isStringLiteral(node.arguments[0])) specs.push(node.arguments[0].text)
        if (ts.isExpressionStatement(node) && ts.isStringLiteral(node.expression) && node.expression.text === 'use server') errors.push(`${rel}: Server Actions are incompatible with static export`)
        ts.forEachChild(node, visit)
      }
      visit(ast)
      if (specs.includes('next/headers') || specs.includes('next/server')) errors.push(`${rel}: request-time server API is incompatible with static export`)
      if (/[/\\]app[/\\]/.test(file)) {
        if (/[/\\](?:route|proxy|middleware)\.[jt]sx?$/.test(file)) errors.push(`${rel}: runtime route handlers are not supported in this static project`)
        if (/\b(?:await\s+searchParams|searchParams\s*\.)/.test(source)) errors.push(`${rel}: read query parameters in a client component for static export`)
        if (/\bparams\s*\./.test(source)) errors.push(`${rel}: await params before reading its properties (Next.js 16)`)
        if (/\bdynamicParams\s*=\s*true\b|\bdynamic\s*=\s*['"]force-dynamic['"]/.test(source)) errors.push(`${rel}: runtime dynamic routes are incompatible with static export`)
        if (rel.includes('[') && /[/\\]page\.[jt]sx?$/.test(file) && (!/\bgenerateStaticParams\b/.test(source) || !/\bdynamicParams\s*=\s*false/.test(source))) errors.push(`${rel}: dynamic pages require generateStaticParams and dynamicParams=false`)
      }
    }
    const dependencies = specs.map((specifier) => resolveLocal(file, specifier)).filter(Boolean)
    graph.set(file, dependencies)
    for (const dependency of dependencies) {
      const generatedOwner = path.basename(file).match(/^registry-(.+)\.js$/)?.[1]
      const from = owner(file) || (generatedOwner && !['component', 'demo', 'ids'].includes(generatedOwner) ? generatedOwner : null)
      const to = owner(dependency)
      const generated = path.relative(base, dependency).match(/^src[/\\]generated[/\\]registry-(.+?)(?:\.js)?$/)?.[1]
      const projectTarget = to || (generated && !['component', 'demo', 'ids'].includes(generated) ? generated : null)
      if (projectTarget && from !== projectTarget) errors.push(`${rel}: project dependency is forbidden: ${path.relative(base, dependency)}`)
    }
  }
  // Traverse every PUB entry too, so dependencies hidden behind a core barrel are checked.
  const seen = new Set()
  function visitCore (file) {
    if (seen.has(file)) return
    seen.add(file)
    if (owner(file)) { errors.push(`PUB depends on a project through ${path.relative(base, file)}`); return }
    for (const dependency of graph.get(file) || []) visitCore(dependency)
  }
  for (const file of files.filter((file) => /src[/\\](?:screen[/\\]pub|app[/\\](?:pub|guide|demo))[/\\]/.test(file))) visitCore(file)
  if (errors.length) throw new Error([...new Set(errors)].join('\n'))
  return b2b
}
if (process.argv[1] && import.meta.url === pathToFileURL(fs.realpathSync(process.argv[1])).href) {
  const b2b = validateProject()
  console.log(`[project] validated ${b2b ? 1 : 0} project and PUB independence`)
}
