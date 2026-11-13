/**
 * SCSS → CSS 빌드
 * - .css     : compact — 규칙마다 한 줄 + SCSS 주석 유지 (slash-comment, block-comment)
 *              예) #root {margin: 0;min-height: 100vh;}
 * - .min.css : compressed — 한 줄·주석 제거 (build 호출용)
 *
 *   node scripts/build/build-styles.mjs
 */
import {
  mkdirSync,
  readFileSync,
  existsSync,
  unlinkSync
} from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import * as sass from 'sass-embedded'
import { STYLE_ENTRIES, getStyleEntries } from './style-entries.mjs'
import { writeIfChanged } from '../write-if-changed.mjs'

/** 이 스크립트 파일이 있는 디렉터리 (scripts/build/) */
const __dirname = path.dirname(fileURLToPath(import.meta.url))
/** 프로젝트 루트 (scripts/build/의 상위 두 단계) */
const root = path.join(__dirname, '../..')
/** SCSS 소스 루트 — loadPaths·엔트리 해석 기준 */
const stylesRoot = path.join(root, 'src/styles')
/** 컴파일 결과 CSS 출력 루트 (src/styles/css) */
const distRoot = path.join(stylesRoot, 'css')

/**
 * 엔트리 상대경로 → 가독용 .css 출력 절대경로.
 * styles 루트 직하 엔트리는 css/파일명.css, 그 외는 src/ 기준 상대경로를 css/ 아래에 복제.
 */
function toDistCss (entryRel) {
  const abs = path.join(root, entryRel)
  if (entryRel.startsWith('src/styles/') && path.dirname(abs) === stylesRoot) {
    return path.join(distRoot, path.basename(entryRel, '.scss') + '.css')
  }
  const rel = path.relative(path.join(root, 'src'), abs)
  return path.join(distRoot, rel.replace(/\.scss$/i, '.css'))
}

/** .css 경로 → 동일 위치의 .min.css 경로 */
function toDistMinCss (cssPath) {
  return cssPath.replace(/\.css$/i, '.min.css')
}

/**
 * common/global 를 소스 앞에 주입할지 여부.
 * styles 루트 엔트리(index/pub/demo)는 global 미주입.
 */
function needsGlobal (entryRel) {
  const f = entryRel.replace(/\\/g, '/')
  if (/\/styles\/(index|pub|demo)\.scss$/.test(f)) return false
  return true
}

/**
 * SCSS slash-comment(//)를 CSS block-comment로 변환.
 * Sass는 // 를 출력하지 않으므로 compact .css에 주석을 남기기 위함. URL의 :// 는 제외.
 */
function scssSilentCommentsToLoud (source) {
  const lines = String(source).split('\n')
  return lines.map((line) => {
    let out = ''
    let quote = null
    for (let i = 0; i < line.length; i++) {
      const ch = line[i]
      const prev = line[i - 1]

      if (quote) {
        out += ch
        if (ch === quote && prev !== '\\') quote = null
        continue
      }
      if (ch === '"' || ch === "'") {
        quote = ch
        out += ch
        continue
      }
      // 이미 블록 주석이면 그대로
      if (ch === '/' && line[i + 1] === '*') {
        out += line.slice(i)
        break
      }
      // // 주석 (URL 의 :// 제외)
      if (ch === '/' && line[i + 1] === '/' && prev !== ':') {
        out += '/*' + line.slice(i + 2) + ' */'
        break
      }
      out += ch
    }
    return out
  }).join('\n')
}

/**
 * 엔트리 파일을 읽어 Sass compileString용 소스를 준비.
 * keepComments면 slash → block 주석 변환, needsGlobal면 global @use 를 앞에 붙임.
 * @returns {{ input: string, src: string }}
 */
function readEntrySource (entryRel, { keepComments }) {
  const input = path.join(root, entryRel)
  let src = readFileSync(input, 'utf8')
  if (keepComments) src = scssSilentCommentsToLoud(src)
  if (needsGlobal(entryRel)) src = "@use 'common/global' as *;\n" + src
  return { input, src }
}

/**
 * 단일 엔트리를 Sass로 컴파일해 CSS 문자열 반환.
 * @param {string} entryRel - 프로젝트 루트 기준 상대경로
 * @param {{ style: string, keepComments: boolean }} opts - style: expanded|compressed 등
 */
function compileEntry (entryRel, { style, keepComments }) {
  const { input, src } = readEntrySource(entryRel, { keepComments })
  return sass.compileString(src, {
    loadPaths: [stylesRoot],
    style,
    // 비ASCII 주석 시 기본값이 CSS 선두 BOM 을 넣어 :root 토큰이 깨질 수 있음
    charset: false,
    sourceMap: false,
    url: pathToFileURL(input)
  }).css
}

/**
 * 한 규칙 블록 내부의 불필요 공백을 줄여 한 줄로 만든다.
 * 블록 주석 토큰은 유지하고, 선택자·값·함수 인자 사이 의미 있는 공백은 남긴다.
 */
function compactRule (raw) {
  let out = ''
  let depth = 0
  const s = String(raw).trim()
  let i = 0

  while (i < s.length) {
    if (s[i] === '/' && s[i + 1] === '*') {
      const end = s.indexOf('*/', i + 2)
      if (end < 0) break
      out += s.slice(i, end + 2).replace(/\s+/g, ' ').trim()
      i = end + 2
      continue
    }

    const ch = s[i]

    if (/\s/.test(ch)) {
      const ws = s.slice(i).match(/^\s+/)[0]
      i += ws.length
      const prev = out[out.length - 1]
      const next = s[i]
      if (!prev || !next) continue
      if ('{};,'.includes(prev) || '{};,'.includes(next)) continue
      // 선택자·값·함수 인자 사이 공백 유지 (0 1px, @keyframes spin 등)
      if (prev !== ' ') out += ' '
      continue
    }

    if (ch === '{') {
      if (out[out.length - 1] && out[out.length - 1] !== ' ') out += ' '
      out += '{'
      depth += 1
      i += 1
      continue
    }

    if (ch === '}') {
      depth = Math.max(0, depth - 1)
      out += '}'
      i += 1
      continue
    }

    if (ch === ':' && depth > 0 && out[out.length - 1] !== ':') {
      out += ':'
      i += 1
      if (s[i] && s[i] !== ' ' && s[i] !== ':' && s[i] !== '/') out += ' '
      continue
    }

    out += ch
    i += 1
  }

  return out
}

/**
 * expanded CSS → 규칙마다 한 줄(compact).
 * 최상위 block-comment는 별도 줄로 두고, 규칙 안 주석은 규칙 줄에 함께 둔다.
 */
function toCompactCss (expanded) {
  let out = ''
  let depth = 0
  let buf = ''
  const s = String(expanded || '')
  let i = 0

  /** 버퍼에 쌓인 규칙/at-rule을 compactRule 후 출력에 추가 */
  const flushRule = () => {
    const rule = compactRule(buf)
    if (rule) out += rule + '\n'
    buf = ''
  }

  while (i < s.length) {
    if (s[i] === '/' && s[i + 1] === '*') {
      const end = s.indexOf('*/', i + 2)
      if (end < 0) break
      const comment = s.slice(i, end + 2).replace(/\s*\n\s*/g, ' ').trim()
      if (depth === 0) {
        if (buf.trim()) flushRule()
        out += comment + '\n'
      } else {
        buf += ' ' + comment + ' '
      }
      i = end + 2
      continue
    }

    const ch = s[i]

    if (depth === 0 && /\s/.test(ch)) {
      // @keyframes spin, @charset "UTF-8" 등 공백 유지
      let j = i
      while (j < s.length && /\s/.test(s[j])) j += 1
      if (
        buf.length &&
        buf[buf.length - 1] !== ' ' &&
        j < s.length &&
        s[j] !== '{'
      ) {
        buf += ' '
      }
      i = j
      continue
    }

    buf += ch
    if (ch === '{') depth += 1
    if (ch === '}') {
      depth = Math.max(0, depth - 1)
      if (depth === 0) flushRule()
    } else if (ch === ';' && depth === 0) {
      // @charset "UTF-8";
      flushRule()
    }
    i += 1
  }

  if (buf.trim()) flushRule()
  return out.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n'
}

/**
 * 엔트리 하나 컴파일: .css(compact+주석)와 .min.css(compressed)를 디스크에 기록.
 * 파일이 없으면 warn 후 false, 성공 시 true.
 */
function compileOne (entryRel) {
  const input = path.join(root, entryRel)
  if (!existsSync(input)) {
    console.warn('[styles] skip (missing):', entryRel)
    return false
  }

  const cssPath = toDistCss(entryRel)
  const minPath = toDistMinCss(cssPath)
  mkdirSync(path.dirname(cssPath), { recursive: true })

  // .css — 주석 유지 + 규칙당 1줄
  const expanded = compileEntry(entryRel, { style: 'expanded', keepComments: true })
  writeIfChanged(cssPath, toCompactCss(expanded))

  // .min.css — 주석 제거·한 줄 압축
  const compressed = compileEntry(entryRel, { style: 'compressed', keepComments: false }).trim()
  writeIfChanged(minPath, compressed + '\n')

  console.log(
    '[styles]',
    entryRel,
    '→',
    path.relative(root, cssPath),
    '+',
    path.basename(minPath)
  )
  return true
}

/**
 * 엔트리 전부 컴파일.
 * @returns {number} 성공한 엔트리 수
 */
let previousEntries = new Set(STYLE_ENTRIES)
export function compileAll () {
  const entries = getStyleEntries()
  for (const entry of previousEntries) {
    if (entries.includes(entry)) continue
    for (const output of [toDistCss(entry), toDistMinCss(toDistCss(entry))]) if (existsSync(output)) unlinkSync(output)
  }
  previousEntries = new Set(entries)
  let ok = 0
  for (const entry of entries) {
    if (compileOne(entry)) ok += 1
  }
  if (ok > 0) {
    console.log(`[styles] compiled ${ok}/${entries.length} (.css compact + .min.css compressed)`)
  }
  return ok
}

/** CLI로 직접 실행했는지 여부 (import만 한 경우는 false) */
const isMain = process.argv[1] &&
  path.normalize(process.argv[1]) === path.normalize(fileURLToPath(import.meta.url))

if (isMain) compileAll()
