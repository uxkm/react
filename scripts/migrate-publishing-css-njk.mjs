#!/usr/bin/env node
/**
 * Convert legacy publishing CSS Nunjucks pages to React JSX.
 * Usage: node scripts/migrate-publishing-css-njk.mjs [category] [--skip=slug]
 * Example: node scripts/migrate-publishing-css-njk.mjs 03-cssMiddleclass
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const CATEGORY = process.argv[2] ?? '03-cssMiddleclass'
const AS_IS = path.join(ROOT, 'src/as-is/publishing/css', CATEGORY)
const PAGES = path.join(ROOT, 'src/pages/publishing/css', CATEGORY)

const skipSlugs = new Set(
  process.argv
    .filter((arg) => arg.startsWith('--skip='))
    .map((arg) => arg.slice('--skip='.length)),
)

const PATH_IMG_MAP = {
  img_css: 'IMG.CSS',
}

/** Nunjucks `path.*` → React `IMG.CSS` 하위 경로 */
const IMG_SUBPATH_MAP = {
  img_cssMiddleclass: '${IMG.CSS}/cssMiddleclass',
  img_cssAdvanced: '${IMG.CSS}/cssAdvanced',
  img_grid: '${IMG.CSS}/grid',
  img_flex: '${IMG.CSS}/flexbox',
}

const SCSS_IMPORT_MAP = {
  'css_selectors.min.css': '../../../../assets/css/css_selectors.scss',
  'css_module3_part2.min.css': '../../../../assets/css/css_module3_part2.scss',
  'css_fontface.min.css': '../../../../assets/css/css_fontface.scss',
  'transform_2d.min.css': '../../../../assets/css/transform_2d.scss',
  'transform_3d.min.css': '../../../../assets/css/transform_3d.scss',
  'css_transition.min.css': '../../../../assets/css/css_transition.scss',
  'css_animation.min.css': '../../../../assets/css/css_animation.scss',
  'css_flexible_part2.min.css': '../../../../assets/css/css_flexible_part2.scss',
  'css_grid_part6.min.css': '../../../../assets/css/css_grid_part6.scss',
}

function replaceNjkImagePaths(html) {
  let out = html
  for (const [pathKey, imgConst] of Object.entries(PATH_IMG_MAP)) {
    out = out.replace(new RegExp(`\\{\\{\\s*path\\.${pathKey}\\s*\\}\\}`, 'g'), `\${${imgConst}}`)
  }
  for (const [pathKey, replacement] of Object.entries(IMG_SUBPATH_MAP)) {
    out = out.replace(new RegExp(`\\{\\{\\s*path\\.${pathKey}\\s*\\}\\}`, 'g'), replacement)
  }
  return out
}

function walkNjk(dir, list = []) {
  if (!fs.existsSync(dir)) {
    console.error(`Source not found: ${dir}`)
    process.exit(1)
  }
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walkNjk(full, list)
    else if (
      entry.name.endsWith('.njk') &&
      !entry.name.startsWith('_') &&
      !entry.name.endsWith('_common.njk')
    ) {
      list.push(full)
    }
  }
  return list
}

function slugFromPath(njkPath) {
  return path.basename(njkPath, '.njk')
}

function toComponentName(slug) {
  const base = slug
    .replace(/^[0-9]+-/, '')
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
  return `${base || 'Page'}Page`
}

function extractBlock(njk, blockName) {
  const re = new RegExp(
    `\\{%-?\\s*block ${blockName}\\s*-?%\\}([\\s\\S]*?)\\{%-?\\s*endblock\\s*-?%\\}`,
    'i',
  )
  const match = njk.match(re)
  return match ? match[1].trim() : ''
}

function extractSetObject(njk, name) {
  const match = njk.match(new RegExp(`\\{%\\s*set\\s+${name}\\s*=\\s*\\{([\\s\\S]*?)\\}\\s*%\\}`))
  if (!match) return {}
  const block = match[1]
  const result = {}

  const titleMatch = block.match(/title:\s*"([\s\S]*?)",\s*\n\s*description:/)
  if (titleMatch) result.title = titleMatch[1].replace(/\s+/g, ' ').trim()

  const descMatch = block.match(/description:\s*"([\s\S]*?)",\s*\n\s*keyword:/)
  if (descMatch) result.description = descMatch[1].replace(/\s+/g, ' ').trim()

  const keywordMatch = block.match(/keyword:\s*"([\s\S]*?)",\s*\n/)
  if (keywordMatch) result.keyword = keywordMatch[1].replace(/\s+/g, ' ').trim()

  const stringRe = /(\w+):\s*"((?:\\.|[^"\\])*)"/g
  let m
  while ((m = stringRe.exec(block)) !== null) {
    if (['title', 'description', 'keyword'].includes(m[1])) continue
    result[m[1]] = m[2].replace(/\\"/g, '"').replace(/\s+/g, ' ').trim()
  }
  const boolRe = /(\w+):\s*(true|false)/g
  while ((m = boolRe.exec(block)) !== null) {
    result[m[1]] = m[2] === 'true'
  }
  return result
}

function readPartialContent(njkPath) {
  if (!fs.existsSync(njkPath)) return ''
  const raw = fs.readFileSync(njkPath, 'utf8')
  return extractBlock(raw, 'content') || raw.trim()
}

function resolveLayoutPartials(content, njkDir, layout) {
  let prefix = ''
  if (layout.partCommon) {
    prefix = `${readPartialContent(path.join(njkDir, layout.partCommon))}\n\n`
  }
  return `${prefix}${content}`
}

function detectScssImport(njk) {
  const cssBlock = extractBlock(njk, 'css')
  if (!cssBlock) return ''
  for (const [file, importPath] of Object.entries(SCSS_IMPORT_MAP)) {
    if (cssBlock.includes(file)) return importPath
  }
  return ''
}

function isPartPage(slug) {
  return /_part\d+$/.test(slug)
}

function escapeJsTemplateLiteral(code) {
  return code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
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

function detectCodeLanguage(code, title = '', filename = '') {
  const sample = `${title} ${filename} ${code}`.toLowerCase()
  if (/\.njk|nunjucks|{%|{{/.test(sample)) return 'html'
  if (/\.scss|sass\(/.test(sample)) return 'scss'
  if (/\.css/.test(sample)) return 'css'
  if (/package\.json|"dependencies"/.test(sample)) return 'json'
  if (/\.html|<!doctype|<html/.test(sample)) return 'html'
  return 'javascript'
}

function convertUkGistBlocks(content) {
  const parts = []
  let lastIndex = 0
  const re = /<div\s+class="[^"]*\buk_gist_code_box\b[^"]*"([\s\S]*?)<\/textarea>\s*<\/div>/gi
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

function buildUkEditorTargetJsx(target, editorClass, editorAttrs) {
  const mode = editorAttrs.match(/data-mode="([^"]+)"/)?.[1] ?? 'htmlmixed'
  const theme = editorAttrs.match(/data-theme="([^"]+)"/)?.[1] ?? 'ayu-mirage'
  const browser = editorAttrs.match(/data-browser="([^"]+)"/)?.[1] ?? 'default'
  const result = /data-result="true"/i.test(editorAttrs)
  const minHeight = editorClass.match(/min_height_(\d+)/)?.[1]
  const mbResult = editorClass.match(/mb_result_height_(\d+)/)?.[1]
  const cls = ['uk_editor', editorClass.trim()].filter(Boolean).join(' ')
  const props = [
    `target="${target}"`,
    `className="${cls}"`,
    `mode="${mode}"`,
    `theme="${theme}"`,
    `browser="${browser}"`,
  ]
  if (result) props.push('result')
  if (minHeight) props.push(`minHeight="${minHeight}px"`)
  if (mbResult) props.push(`mbResultHeight="${mbResult}px"`)
  return `<Suspense fallback={<EditorFallback />}>\n<UkEditorTarget ${props.join(' ')} />\n</Suspense>`
}

function convertViewEditorBlocks(html) {
  let out = html

  // section/article: 제목·figure 등 uk_editor 앞뒤 형제 요소 유지
  out = out.replace(
    /<(section|article)\s+class="([^"]*\bview_editor\b[^"]*)"[^>]*\bdata-target="([^"]+)"[^>]*>([\s\S]*?)<div\s+class="uk_editor([^"]*)"([^>]*)>\s*<div\s+class="code_wrap">[\s\S]*?<\/div>\s*<\/div>([\s\S]*?)<\/\1>/gi,
    (_full, tag, viewClass, target, before, editorClass, editorAttrs, after) => {
      const editorJsx = buildUkEditorTargetJsx(target, editorClass, editorAttrs)
      return `<${tag} className="${viewClass.trim()}">${before}${editorJsx}${after}</${tag}>`
    },
  )

  // div.view_editor: uk_editor 직전 형제(h3.ve_tit 등) + uk_editor 한 덩어리만 매칭
  out = out.replace(
    /<div\s+class="([^"]*\bview_editor\b[^"]*)"[^>]*\bdata-target="([^"]+)"[^>]*>([\s\S]*?)<div\s+class="uk_editor([^"]*)"([^>]*)>\s*<div\s+class="code_wrap">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi,
    (_full, viewClass, target, before, editorClass, editorAttrs) => {
      const editorJsx = buildUkEditorTargetJsx(target, editorClass, editorAttrs)
      return `<div className="${viewClass.trim()}">${before}${editorJsx}</div>`
    },
  )

  return out
}

function fixReferenceLinks(html) {
  return html
    .replace(/(<a\b[^>]+>)([^<\n]+)\n(\s+<li)/g, '$1$2</a></li>\n$3')
    .replace(/<\/a>\n(\s+<li className="reference">)/g, '</a></li>\n$1')
    .replace(/<\/a>\n(\s+<\/ul>)/g, '</a></li>\n$1')
    .replace(/(<a\b[^>]+>)([^<\n]+)\n(\s+<\/ul>)/g, '$1$2</a></li>\n$3')
}

function fixUnclosedListItems(html) {
  let out = html
    .replace(/<\/p>\n(?!\s*<\/li>)(\s*)<li>/g, '</p>\n$1</li>\n$1<li>')
    .replace(/<\/p>\n(?!\s*<\/li>)(\s*)<\/ul>/g, '</p>\n$1</li>\n$1</ul>')
    .replace(/(<li>\s*\n(?:(?!<\/li>)[\s\S])*?)\n(\s*<li>)/g, (match, block, next) => {
      if (block.includes('</li>')) return match
      if (/<(p|div|ul|ol|article|section|figure|blockquote)\b/.test(block)) return match
      return `${block.trimEnd()}\n</li>\n${next}`
    })
    .replace(/(<li>\s*\n(?:(?!<\/li>)[\s\S])*?)\n(\s*<\/ul>)/g, (match, block, close) => {
      if (block.includes('</li>')) return match
      if (/<(p|div|ul|ol|article|section|figure|blockquote)\b/.test(block)) return match
      return `${block.trimEnd()}\n</li>\n${close}`
    })
  return out
}

function escapeTextGreaterThan(html) {
  return html.replace(/(>)([^<]+)(<\/a>)/g, (_, open, text, close) => {
    return `${open}${text.replace(/ > /g, " {'>'} ")}${close}`
  })
}

function escapeJsxCurlyBracesInHtml(html) {
  return html.replace(/>([^<]*)</g, (match, text) => {
    if (!/[{}]/.test(text)) return match
    const escaped = text.replace(/[{}]/g, (ch) => (ch === '{' ? "{'{'}" : "{'}'}"))
    return `>${escaped}<`
  })
}

function escapeJsxGreaterThanInHtml(html) {
  return html.replace(/>([^<]*)</g, (match, text) => {
    if (!/ > /.test(text)) return match
    return `>${text.replace(/ > /g, " {'>'} ")}<`
  })
}

function stripHtmlComments(html) {
  return html.replace(/<!--[\s\S]*?-->/g, '')
}

function preprocessNjkMarkup(html, pageTitle) {
  let out = stripNjkComments(html)
  out = out.replace(/\{\{\s*pageData\.title\s*\}\}/g, pageTitle)
  out = out.replace(/\{\{\s*title_d3\s*\}\}/g, pageTitle)
  out = replaceNjkImagePaths(out)
  out = out.replace(/\{\{[^}]+\}\}/g, '')
  out = out.replace(/\{%-?[\s\S]*?-?%\}/g, '')
  out = escapeJsxCurlyBracesInHtml(out)
  return escapeJsxGreaterThanInHtml(out)
}

function convertHtmlChunk(html, pageTitle) {
  let out = html
  out = out.replace(/<style>[\s\S]*?<\/style>/gi, '')
  out = out.replace(/<code>([^<]+)><\/code>/g, '<code>$1&gt;</code>')
  out = out.replace(/<\/code>code>/g, '</code>')
  out = out.replace(/\bclass=([a-zA-Z_][\w-]*)(?=[\s/>])/g, 'class="$1"')
  out = out.replace(/<!--[\s\S]*?-->/g, '')
  out = replaceNjkImagePaths(out)
  out = out.replace(/\bsrc="\$\{IMG\.CSS\}\/([^"]+)"/g, 'src={`${IMG.CSS}/$1`}')
  out = out.replace(/\bhref="\$\{(IMG\.[A-Z0-9_]+)\}\/([^"]+)"/g, 'href={`${$1}/$2`}')
  out = out.replace(/\bposter="\$\{(IMG\.[A-Z0-9_]+)\}\/([^"]+)"/g, 'poster={`${$1}/$2`}')
  out = out.replace(/<source\b([^>]*?)(?<!\/)>/gi, '<source$1 />')
  out = out.replace(/\bonclick="toggleContent\(this\)"/gi, 'onClick={(event) => toggleContent(event.currentTarget)}')
  out = out.replace(/>웹와치></g, '>웹와치<')
  out = out.replace(/\{:[^}]*\}/g, '')
  out = out.replace(/\balt="([^"]*)"/g, (_, alt) => {
    const safe = alt.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    return `alt="${safe}"`
  })
  out = out.replace(/<sup\s*\/>/gi, '<sup>')
  out = out.replace(/\bclass=/g, 'className=')
  out = out.replace(/\bfor=/g, 'htmlFor=')
  out = out.replace(/\bframeborder=/gi, 'frameBorder=')
  out = out.replace(/\ballowfullscreen\b/gi, 'allowFullScreen')
  out = out.replace(/<br(\s[^>]*)?>/gi, '<br />')
  out = out.replace(/<img\b([\s\S]*?)\s*\/>/gi, '<img$1 />')
  out = out.replace(/<img\b([\s\S]*?)>/gi, (match, attrs) => {
    if (match.trimEnd().endsWith('/>')) return match
    return `<img${attrs} />`
  })
  out = out.replace(/<hr(\s[^>]*)?>/gi, '<hr />')
  out = out.replace(/<input([^>]*?)(?<!\/)>/gi, '<input$1 />')
  out = out.replace(/\btarget="_blank"/g, 'target="_blank" rel="noreferrer"')
  out = out.replace(/readonly="readonly"/g, '')

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
        const jsxKey = rawKey.startsWith('--')
          ? `'${rawKey}'`
          : rawKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
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
  out = out.replace(/ __STYLE_(\d+)__/g, (_, index) => stylePlaceholders[Number(index)])
  out = fixReferenceLinks(out)
  out = fixUnclosedListItems(out)
  out = escapeTextGreaterThan(out)
  return out
}

function renderCodeBlock(part) {
  const props = []
  if (part.filename) props.push(`filename="${part.filename.replace(/"/g, '\\"')}"`)
  if (part.title) {
    const title = part.title.replace(/"/g, '\\"')
    props.push(part.title.includes(':') ? `title={${JSON.stringify(part.title)}}` : `title="${title}"`)
  }
  props.push(`language="${part.language}"`)
  const className = ['uk_gist_code_box', part.classExtra].filter(Boolean).join(' ')
  if (className) props.push(`className="${className}"`)
  const body = escapeJsTemplateLiteral(part.code)
  return `<CodeBlock ${props.join(' ')}>\n{\`${body}\`}\n</CodeBlock>`
}

function stripOrphanUkGist(html) {
  return html.replace(
    /<div\s+class="[^"]*\buk_gist_code_box\b[^"]*"[\s\S]*?<\/textarea>\s*<\/div>/gi,
    (block) => {
      const codeMatch = block.match(/<textarea[^>]*>([\s\S]*?)<\/textarea>/i)
      const code = decodeHtmlEntities((codeMatch?.[1] ?? '').trim())
      const titleMatch = block.match(/data-tit="([^"]*)"/)
      const filenameMatch = block.match(/data-filename="([^"]*)"/)
      const classMatch = block.match(/class="([^"]*)"/)
      return renderCodeBlock({
        type: 'code',
        classExtra: classMatch?.[1]?.replace(/\buk_gist_code_box\b/, '').trim() ?? '',
        title: titleMatch?.[1] ?? '',
        filename: filenameMatch?.[1] ?? '',
        language: detectCodeLanguage(code, titleMatch?.[1] ?? '', filenameMatch?.[1] ?? ''),
        code,
      })
    },
  )
}

function stripNjkComments(content) {
  return content.replace(/\{#-[\s\S]*?#\}/g, '').replace(/\{#[\s\S]*?#\}/g, '')
}

function convertContent(rawContent, pageTitle) {
  const withoutComments = stripHtmlComments(stripNjkComments(rawContent))
  const parts = convertUkGistBlocks(withoutComments)
  const chunks = parts.map((part) => {
    if (part.type === 'code') return renderCodeBlock(part)
    let html = part.value
    html = preprocessNjkMarkup(html, pageTitle)
    html = convertViewEditorBlocks(html)
    html = convertHtmlChunk(html, pageTitle)
    html = stripOrphanUkGist(html)
    return html
  })
  return chunks.join('\n')
}

function buildLayout(pageLayout) {
  return {
    mainClass: pageLayout.mainClass ?? 'css_page',
    type: 'publishing',
    info: pageLayout.Info === true || pageLayout.info === true,
    note: pageLayout.note === true,
    sideMenu: pageLayout.sideMenu !== false,
    reference: pageLayout.reference === true,
    contentList: pageLayout.contentList !== false,
    depth3Last: false,
    bottomEditor: pageLayout.bottomEditor === true,
  }
}

function injectPartTabsAfterCommonNote(content, partPage) {
  if (!partPage) return content
  const tabsLine = '<PublishingPartTabs sectionType="css" />'
  const commonRe =
    /(<blockquote className="uk_note common_note mt_xxl" role="note">[\s\S]*?<\/blockquote>\n?)/
  const match = content.match(commonRe)
  if (match) {
    return content.replace(match[0], `${match[0]}\n${tabsLine}\n`)
  }
  return `${tabsLine}\n${content}`
}

function buildPage({ componentName, pageData, pageLayout, content, scssImport, partPage }) {
  const needsCodeBlock = content.includes('<CodeBlock')
  const needsEditor = content.includes('<UkEditorTarget')
  const needsToggle = content.includes('toggleContent(')
  const needsImg = /\bIMG\.CSS\b/.test(content)

  const imports = []
  imports.push("import { usePageMeta } from '@/components/common/PageMeta'")
  if (scssImport) imports.push(`import '${scssImport}'`)
  if (partPage) imports.push("import PublishingPartTabs from '@/components/docs/PublishingPartTabs'")
  if (needsImg) imports.push("import { IMG } from '@/config/path'")
  if (needsEditor) {
    imports.push("import { Suspense, lazy } from 'react'")
    imports.push("const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))")
    imports.push('function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }')
  }
  if (needsCodeBlock) imports.push("import CodeBlock from '@/components/code/CodeBlock'")
  if (needsToggle) imports.push("import { toggleContent } from '@/utils/toggleContent.js'")

  const pageContent = injectPartTabsAfterCommonNote(content, partPage)

  return `${imports.join('\n')}

const PAGE_LAYOUT = ${JSON.stringify(buildLayout(pageLayout), null, 2).replace(/"([^"]+)":/g, '$1:')}

const PAGE_DATA = {
  title: ${JSON.stringify(pageData.title ?? '')},
  description: ${JSON.stringify(pageData.description ?? '')},
  keyword: ${JSON.stringify(pageData.keyword ?? '')},
}

function ${componentName}() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
${pageContent
  .split('\n')
  .map((line) => (line ? `      ${line}` : ''))
  .join('\n')}
    </>
  )
}

export default ${componentName}
`
}

function migrateOne(njkPath) {
  const slug = slugFromPath(njkPath)
  if (skipSlugs.has(slug)) {
    console.log(`Skip ${slug}`)
    return
  }

  const jsxPath = path.join(PAGES, `${slug}.jsx`)
  const njk = fs.readFileSync(njkPath, 'utf8')
  const njkDir = path.dirname(njkPath)
  const pageData = extractSetObject(njk, 'pageData')
  const pageLayout = extractSetObject(njk, 'pageLayout')

  if (pageData.description) pageData.description = pageData.description.replace(/\s+/g, ' ').trim()

  let rawContent = extractBlock(njk, 'content') || njk.trim()
  rawContent = resolveLayoutPartials(rawContent, njkDir, pageLayout)

  const content = convertContent(rawContent, pageData.title ?? '')
  const componentName = toComponentName(slug)
  const scssImport = detectScssImport(njk)
  const partPage = isPartPage(slug)
  const page = buildPage({
    componentName,
    pageData,
    pageLayout,
    content,
    scssImport,
    partPage,
  })

  fs.mkdirSync(path.dirname(jsxPath), { recursive: true })
  fs.writeFileSync(jsxPath, page)
  console.log(`Migrated ${slug}`)
}

const all = walkNjk(AS_IS)
for (const njkPath of all) migrateOne(njkPath)
console.log(`Done. ${all.length} files processed in ${CATEGORY}.`)
