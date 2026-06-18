/**
 * codeFormatting
 *
 * Pure helpers extracted from `uk_gist_skin_code()` in
 * `src/assets/js/uk_common.js`. They are deliberately free of
 * DOM access so they can be unit-tested and reused by both <CodeBlock /> and
 * <TerminalBlock />.
 */

export const TAB_SIZE = '  '

/** Color markers that pages embed in code samples to highlight specific
 * fragments. Mirrors the `____red__` / `__red____` style markers from the
 * original script. The order matters: longer/more-specific markers first. */
export const COLOR_MARKERS = [
  ['____error__', '__error____', 'uk_color_error'],
  ['____red__', '__red____', 't_red'],
  ['____green__', '__green____', 't_green'],
  ['____blue__', '__blue____', 't_blue'],
  ['____purple__', '__purple____', 't_purple'],
]

/**
 * Strip the leading whitespace that JSX template literals add when a code
 * sample is indented inside React markup, then convert tabs to two-space
 * indents like the previous script does.
 *
 * - Trims fully blank lines from the start and the end.
 * - Detects the longest common indent across non-empty lines and removes it.
 * - Replaces each tab character with `TAB_SIZE` spaces.
 */
export function normalizeCodeIndent(raw) {
  if (typeof raw !== 'string' || raw.length === 0) return ''

  const lines = raw.replace(/\r\n?/g, '\n').split('\n')

  while (lines.length > 0 && lines[0].trim() === '') lines.shift()
  while (lines.length > 0 && lines[lines.length - 1].trim() === '') lines.pop()
  if (lines.length === 0) return ''

  let commonIndent = null
  for (const line of lines) {
    if (line.trim() === '') continue
    const match = /^[ \t]*/.exec(line)
    const leading = match ? match[0] : ''
    if (commonIndent === null) {
      commonIndent = leading
      continue
    }
    let i = 0
    while (i < commonIndent.length && i < leading.length && commonIndent[i] === leading[i]) {
      i += 1
    }
    commonIndent = commonIndent.slice(0, i)
    if (commonIndent.length === 0) break
  }

  const stripped = commonIndent
    ? lines.map((line) => (line.startsWith(commonIndent) ? line.slice(commonIndent.length) : line))
    : lines

  return stripped.join('\n').replace(/\t/g, TAB_SIZE)
}

/**
 * Replace every previous color marker with the equivalent `<span class="...">`
 * pair. Operates on already-escaped HTML produced by highlight.js so it never
 * introduces unbalanced tags.
 */
export function applyColorMarkers(html) {
  let out = html
  for (const [open, close, cls] of COLOR_MARKERS) {
    out = out.split(open).join(`<span class="${cls}">`)
    out = out.split(close).join('</span>')
  }
  return out
}

/**
 * Split a string of (possibly multiline) HTML into one HTML chunk per logical
 * line, re-opening any tags that span across the newline so each chunk is
 * standalone valid HTML.
 *
 * The result is a list of HTML strings; the caller can wrap each one in
 * `<span class="uk_gist_code_line">` (or any other element) without breaking
 * the syntax-highlight markup that highlight.js produced.
 */
export function splitHtmlIntoLines(html) {
  const lines = []
  const openStack = []
  let buffer = ''
  let index = 0

  const flush = () => {
    let trailing = ''
    for (let i = openStack.length - 1; i >= 0; i -= 1) {
      const tagName = openStack[i].tagName
      trailing += `</${tagName}>`
    }
    lines.push(buffer + trailing)
    buffer = ''
    for (const open of openStack) buffer += open.raw
  }

  while (index < html.length) {
    const ch = html[index]

    if (ch === '<') {
      const end = html.indexOf('>', index)
      if (end === -1) {
        buffer += html.slice(index)
        break
      }
      const tag = html.slice(index, end + 1)
      buffer += tag
      const isClosing = tag.startsWith('</')
      const isSelfClosing = tag.endsWith('/>')

      if (isClosing) {
        openStack.pop()
      } else if (!isSelfClosing) {
        const tagName = (/^<\s*([a-zA-Z][a-zA-Z0-9-]*)/.exec(tag) || [])[1] || ''
        openStack.push({ tagName, raw: tag })
      }
      index = end + 1
      continue
    }

    if (ch === '\n') {
      flush()
      index += 1
      continue
    }

    buffer += ch
    index += 1
  }

  if (buffer.length > 0 || lines.length === 0) {
    let trailing = ''
    for (let i = openStack.length - 1; i >= 0; i -= 1) {
      trailing += `</${openStack[i].tagName}>`
    }
    lines.push(buffer + trailing)
  }

  return lines
}

/**
 * `&` / `<` / `>` escape used when highlight.js is unavailable or fails for
 * the requested language.
 */
export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/**
 * Gulp diff 마커(`--add--`, `--no_change--` 등)를 레거시 `uk_gist_skin_code()`와
 * 동일한 `data_extxt` span으로 변환한다. 마커 문자열은 하이라이트 전에 제거한다.
 */
export function processGulpDiffLine(line) {
  let working = String(line ?? '')
  let addTxt = ''
  let editTxt = ''

  const addTxtIdx = working.indexOf(' --add_txt:')
  if (addTxtIdx >= 0) {
    addTxt = working.slice(addTxtIdx + ' --add_txt:'.length)
    working = working.slice(0, addTxtIdx)
  }

  const editTxtIdx = working.indexOf(' --edit_txt:')
  if (editTxtIdx >= 0) {
    editTxt = working.slice(editTxtIdx + ' --edit_txt:'.length)
    working = working.slice(0, editTxtIdx)
  }

  let suffix = ''

  if (working.includes('--no_change--')) {
    working = working.replace(/--no_change--/g, '')
    suffix = '<span class="data_extxt no_change" data-extxt="[-- 변경 없음 --]"></span>'
  }
  if (working.includes('--add--')) {
    working = working.replace(/--add--/g, '')
    suffix = addTxt
      ? `<span class="data_extxt code_add" data-extxt="[-- 추가된 부분(${addTxt}) --]"></span>`
      : '<span class="data_extxt code_add" data-extxt="[-- 추가된 부분 --]"></span>'
  }
  if (working.includes('--add_start--')) {
    working = working.replace(/--add_start--/g, '')
    suffix =
      '<span class="data_extxt code_add" data-extxt="[-- 추가된 부분 start {{ --]"></span>'
  }
  if (working.includes('--add_end--')) {
    working = working.replace(/--add_end--/g, '')
    suffix = '<span class="data_extxt code_add" data-extxt="[-- }} 추가된 부분 end --]"></span>'
  }
  if (working.includes('--edit--')) {
    working = working.replace(/--edit--/g, '')
    suffix = editTxt
      ? `<span class="data_extxt code_edit" data-extxt="[-- 수정된 부분(${editTxt}) --]"></span>`
      : '<span class="data_extxt code_edit" data-extxt="[-- 수정된 부분 --]"></span>'
  }
  if (working.includes('--del--')) {
    working = working.replace(/--del--/g, '')
    suffix = '<span class="data_extxt code_edit" data-extxt="[-- 삭제된 부분 --]"></span>'
  }

  return { line: working, suffix }
}

/** Gulp diff 마커가 포함된 코드를 하이라이트용 소스와 줄별 suffix HTML로 분리한다. */
export function applyGulpDiffMarkers(normalized) {
  const lines = String(normalized ?? '').split('\n')
  const suffixes = []
  const cleanedLines = lines.map((line) => {
    const { line: cleaned, suffix } = processGulpDiffLine(line)
    suffixes.push(suffix)
    return cleaned
  })

  return {
    source: cleanedLines.join('\n'),
    suffixes,
  }
}
