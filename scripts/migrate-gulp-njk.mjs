#!/usr/bin/env node
/**
 * Convert legacy Gulp Nunjucks content blocks to React JSX pages.
 * Usage: node scripts/migrate-gulp-njk.mjs [relative-njk-path...]
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const AS_IS = path.join(ROOT, 'src/as-is/buildSystem/gulp')
const PAGES = path.join(ROOT, 'src/pages/buildSystem/gulp')

const NJK_TO_JSX = [
  ['01-gulp_start/02-gulp_of_uxkm.njk', '01-gulp_start/02-gulp_of_uxkm.jsx', 'GulpOfUxkmPage'],
  ['02-scaffolding/01-folder_terminal.njk', '02-scaffolding/01-folder_terminal.jsx', 'FolderTerminalPage'],
  ['02-scaffolding/02-nodejs_npm.njk', '02-scaffolding/02-nodejs_npm.jsx', 'NodejsNpmPage'],
  ['02-scaffolding/03-package_json.njk', '02-scaffolding/03-package_json.jsx', 'PackageJsonPage'],
  ['02-scaffolding/04-base_setting.njk', '02-scaffolding/04-base_setting.jsx', 'BaseSettingPage'],
  ['02-scaffolding/05-gulp_babel.njk', '02-scaffolding/05-gulp_babel.jsx', 'GulpBabelPage'],
  ['03-gulp_api/gulp_api.njk', '03-gulp_api/gulp_api.jsx', 'GulpApiPage'],
  ['04-gulp_njk/01-njk_setting.njk', '04-gulp_njk/01-njk_setting.jsx', 'NjkSettingPage'],
  ['04-gulp_njk/02-njk_syntax.njk', '04-gulp_njk/02-njk_syntax.jsx', 'NjkSyntaxPage'],
  ['05-ws_watch/01-webserver.njk', '05-ws_watch/01-webserver.jsx', 'WebserverPage'],
  ['05-ws_watch/02-watch.njk', '05-ws_watch/02-watch.jsx', 'WatchPage'],
  ['06-assets/01-scss_compilation.njk', '06-assets/01-scss_compilation.jsx', 'ScssCompilationPage'],
  ['06-assets/02-babel_support.njk', '06-assets/02-babel_support.jsx', 'BabelSupportPage'],
  ['06-assets/03-image_optimization.njk', '06-assets/03-image_optimization.jsx', 'ImageOptimizationPage'],
  ['07-deploying/01-repository_push.njk', '07-deploying/01-repository_push.jsx', 'RepositoryPushPage'],
  ['07-deploying/02-github_deploy.njk', '07-deploying/02-github_deploy.jsx', 'GithubDeployPage'],
]

function extractContentBlock(njk) {
  const match = njk.match(/\{%\s*block content\s*%\}([\s\S]*?)\{%-?\s*endblock\s*-?%\}/i)
  return match ? match[1].trim() : ''
}

function extractLayoutOverrides(njk) {
  const overrides = {}
  const contentList = njk.match(/contentList:\s*(true|false)/)
  if (contentList && contentList[1] === 'false') overrides.contentList = false
  return overrides
}

function escapeJsTemplateLiteral(code) {
  return code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
}

function detectCodeLanguage(code, title = '', filename = '') {
  const sample = `${title} ${filename} ${code}`.toLowerCase()
  if (/\.njk|nunjucks|{%|{{/.test(sample)) return 'html'
  if (/\.scss|sass\(|gulp\.src\(.*scss/.test(sample)) return 'scss'
  if (/\.css|minificss|autoprefixer/.test(sample)) return 'css'
  if (/package\.json|"dependencies"|"devDependencies"/.test(sample)) return 'json'
  if (/\.html|<!doctype|<html/.test(sample)) return 'html'
  return 'javascript'
}

function convertUkGistBlocks(content) {
  const parts = []
  let lastIndex = 0
  const re = /<div\s+class="uk_gist_code_box([\s\S]*?)<\/textarea>\s*<\/div>/gi
  let match
  while ((match = re.exec(content)) !== null) {
    parts.push({ type: 'html', value: content.slice(lastIndex, match.index) })
    const fullMatch = match[0]
    const classMatch = fullMatch.match(/class="uk_gist_code_box([^"]*)"/)
    const titleMatch = fullMatch.match(/data-tit="([^"]*)"/)
    const filenameMatch = fullMatch.match(/data-filename="([^"]*)"/)
    const codeMatch = fullMatch.match(/<textarea[^>]*>([\s\S]*?)<\/textarea>/i)
    const code = decodeHtmlEntities((codeMatch?.[1] ?? '').trim())
    parts.push({
      type: 'code',
      classExtra: classMatch?.[1]?.trim() ?? '',
      title: titleMatch?.[1] ?? '',
      filename: filenameMatch?.[1] ?? '',
      language: detectCodeLanguage(code, titleMatch?.[1] ?? '', filenameMatch?.[1] ?? ''),
      code,
    })
    lastIndex = re.lastIndex
  }
  parts.push({ type: 'html', value: content.slice(lastIndex) })
  return parts
}

function decodeHtmlEntities(value) {
  return String(value ?? '')
    .replace(/&#123;/g, '{')
    .replace(/&#125;/g, '}')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function convertTerminalBlocks(html) {
  return html.replace(
    /<div\s+class="terminal_code_box([^"]*)"([^>]*)>\s*<textarea[^>]*>([\s\S]*?)<\/textarea>\s*<\/div>/gi,
    (_full, classExtra, _attrs, code) => {
      const cls = ['terminal_code_box', classExtra.trim()].filter(Boolean).join(' ')
      const body = escapeJsTemplateLiteral(code.replace(/^\s+|\s+$/g, ''))
      return `<TerminalBlock className="${cls}">\n{\`${body}\`}\n</TerminalBlock>`
    },
  )
}

function convertTerminalLines(html) {
  return html.replace(
    /<div\s+class="terminal_code_line([^"]*)">\s*<span[^>]*>\s*<code\s+class="terminal_code">([\s\S]*?)<\/code>\s*<\/span>\s*<\/div>/gi,
    (_full, classExtra, inner) => {
      const cls = ['terminal_code_line', classExtra.trim()].filter(Boolean).join(' ')
      const cleaned = inner.trim().replace(/\s+/g, ' ')
      return `<div className="${cls}">\n<span className="terminal_cmd_box">\n<code className="terminal_code" dangerouslySetInnerHTML={{ __html: '${cleaned.replace(/'/g, "\\'")}' }} />\n</span>\n</div>`
    },
  )
}

function convertHtmlChunk(html) {
  let out = html
  out = out.replace(/\{#-[\s\S]*?#\}/g, '')
  out = out.replace(/\{#-[\s\S]*?-#\}/g, '')
  out = out.replace(/\{%[\s\S]*?%\}/g, '')
  out = out.replace(/<!--[\s\S]*?-->/g, '')
  out = out.replace(/\{\{\s*path\.img_gulp\s*\}\}/g, '${IMG.GULP}')
  out = out.replace(/\balt="([^"]*)"/g, (_, alt) => `alt="${alt.replace(/>/g, '&gt;')}"`)
  out = out.replace(/\bsrc="\$\{IMG\.GULP\}\/([^"]+)"/g, 'src={`${IMG.GULP}/$1`}')
  out = out.replace(/\bhref="\$\{IMG\.GULP\}\/([^"]+)"/g, 'href={`${IMG.GULP}/$1`}')
  out = out.replace(/\bclass=/g, 'className=')
  out = out.replace(/\bfor=/g, 'htmlFor=')
  out = out.replace(/\bframeborder=/gi, 'frameBorder=')
  out = out.replace(/\ballowfullscreen\b/gi, 'allowFullScreen')
  out = out.replace(/<br\s+\/\s+\/>/gi, '<br />')
  out = out.replace(/<br(\s[^>]*)?>/gi, '<br />')
  out = out.replace(/<img\b([^>]*?)\s*\/>/gi, '<img$1 />')
  out = out.replace(/<img\b((?:(?!\/>)[\s\S])*?)>/gi, '<img$1 />')
  out = out.replace(/<hr(\s[^>]*)?>/gi, '<hr />')
  out = out.replace(/<input([^>]*?)(?<!\/)>/gi, '<input$1 />')
  out = out.replace(/readonly="readonly"/g, '')
  out = out.replace(/\btarget="_blank"/g, 'target="_blank" rel="noreferrer"')
  const stylePlaceholders = []
  out = out.replace(/\sstyle="([^"]*)"/g, (_, style) => {
    const entries = style
      .split(';')
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const [key, ...rest] = part.split(':')
        const value = rest.join(':').trim()
        const rawKey = key.trim()
        const jsxKey = rawKey.startsWith('--') ? `'${rawKey}'` : rawKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
        return `${jsxKey}: "${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`
      })
    if (!entries.length) return ''
    stylePlaceholders.push(` style={{ ${entries.join(', ')} }}`)
    return ` __STYLE_${stylePlaceholders.length - 1}__`
  })

  const attrPlaceholders = []
  out = out.replace(/\s([a-zA-Z][\w:-]*)="([^"]*)"/g, (match) => {
    const index = attrPlaceholders.length
    attrPlaceholders.push(match)
    return ` __ATTR_${index}__`
  })
  out = out.replace(/"/g, '&quot;')
  out = out.replace(/ __ATTR_(\d+)__/g, (_, index) => attrPlaceholders[Number(index)])
  out = out.replace(/&quot;>/g, '&quot;&gt;')
  out = out.replace(/ > /g, ' &gt; ')
  out = out.replace(/'/g, '&apos;')
  out = out.replace(/ __STYLE_(\d+)__/g, (_, index) => stylePlaceholders[Number(index)])
  return out
}

function renderCodeBlock(part) {
  const props = []
  if (part.filename) props.push(`filename="${part.filename.replace(/"/g, '\\"')}"`)
  if (part.title) props.push(`title="${part.title.replace(/"/g, '\\"')}"`)
  props.push(`language="${part.language}"`)
  const className = ['uk_gist_code_box', part.classExtra].filter(Boolean).join(' ')
  if (className) props.push(`className="${className}"`)
  const body = escapeJsTemplateLiteral(part.code)
  return `<CodeBlock ${props.join(' ')}>\n{\`${body}\`}\n</CodeBlock>`
}

function convertContent(content) {
  const parts = convertUkGistBlocks(content)
  const chunks = parts.map((part) => {
    if (part.type === 'code') return renderCodeBlock(part)
    let html = part.value
    html = convertTerminalBlocks(html)
    html = convertTerminalLines(html)
    html = convertHtmlChunk(html)
    return html
  })
  return chunks.join('\n')
}

function buildPage({ componentName, content, layoutOverrides }) {
  const needsCodeBlock = content.includes('<CodeBlock')
  const needsTerminal = content.includes('<TerminalBlock')
  const needsImg = content.includes('${IMG.GULP}')

  const imports = [
    "import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'",
    needsImg ? "import { IMG } from '@/config/path'" : null,
    needsCodeBlock ? "import CodeBlock from '@/components/code/CodeBlock'" : null,
    needsTerminal ? "import TerminalBlock from '@/components/code/TerminalBlock'" : null,
  ].filter(Boolean)

  const layoutLine =
    Object.keys(layoutOverrides).length > 0
      ? `\n  useGulpPageMeta({ layout: ${JSON.stringify(layoutOverrides)} })`
      : '\n  useGulpPageMeta()'

  return `${imports.join('\n')}

function ${componentName}() {${layoutLine}

  return (
    <>
${content
  .split('\n')
  .map((line) => (line ? `      ${line}` : ''))
  .join('\n')}
    </>
  )
}

export default ${componentName}
`
}

function migrateOne([njkRel, jsxRel, componentName]) {
  const njkPath = path.join(AS_IS, njkRel)
  const jsxPath = path.join(PAGES, jsxRel)
  const njk = fs.readFileSync(njkPath, 'utf8')
  const block = extractContentBlock(njk)
  if (!block) throw new Error(`No content block in ${njkRel}`)
  const layoutOverrides = extractLayoutOverrides(njk)
  const content = convertContent(block)
  const page = buildPage({ componentName, content, layoutOverrides })
  fs.writeFileSync(jsxPath, page)
  console.log(`Migrated ${jsxRel}`)
}

const targets = process.argv.slice(2)
const list = targets.length
  ? NJK_TO_JSX.filter(([njkRel]) => targets.some((t) => njkRel.includes(t)))
  : NJK_TO_JSX

for (const entry of list) migrateOne(entry)
