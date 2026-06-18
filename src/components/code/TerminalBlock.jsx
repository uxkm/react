import { useMemo } from 'react'
import { TAB_SIZE, escapeHtml } from './codeFormatting.js'

/**
 * <TerminalBlock /> — React port of `terminal_code_box()` from
 * `src/assets/js/uk_common.js`.
 *
 * Renders shell-style snippets (npm/npx/gulp commands, CLI flags, inline
 * comments) with the same class names the previous SCSS already styles
 * (`<i class="npm">`, `<i class="install">`, `<i class="save">`,
 * `<span data-note="// ...">`).
 *
 * Props:
 *   - className: extra class names appended to the outer wrapper
 *   - children:  the terminal sample as a string (template literal recommended)
 */
const FIRST_WORD_NPM = new Set(['npm', 'npx', 'gulp'])
const SECOND_WORD_INSTALL = new Set([
  'i',
  'install',
  'uninstall',
  'update',
  'info',
])
const FLAGS = ['--save', '-dev', '-D', '--global', '-g', '-y']

function escapeAttribute(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

function highlightFlagsInside(html) {
  let out = html
  for (const flag of FLAGS) {
    const escaped = flag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // Only highlight when the flag stands as its own token. Lookbehind/ahead
    // restrict matches to whitespace or string boundaries so e.g. "-D" inside
    // a longer identifier is left alone.
    const re = new RegExp(`(^|\\s)${escaped}(?=\\s|$)`, 'g')
    out = out.replace(re, (_match, lead) => `${lead}<i class="save">${flag}</i>`)
  }
  return out
}

function processTerminalLine(rawLine) {
  // Convert tabs to two spaces and pre-escape `module_name` / `version`
  // placeholders the same way the previous script does.
  const tabbed = rawLine
    .replace(/\t/g, TAB_SIZE)
    .replace(/module_name/g, '&lt;module_name&gt;')
    .replace(/version/g, '&lt;version&gt;')

  // Detect inline comment ("//"). Everything after the first "//" is preserved
  // verbatim through a `data-note` attribute the SCSS uses to render comments.
  const noteIndex = tabbed.indexOf('//')
  const main = noteIndex === -1 ? tabbed : tabbed.slice(0, noteIndex)
  const note = noteIndex === -1 ? '' : tabbed.slice(noteIndex)

  // Tokenize on whitespace while preserving the whitespace tokens so the
  // original spacing is not lost.
  const tokens = main.split(/(\s+)/)
  let nonBlankIndex = 0
  const decorated = tokens
    .map((token) => {
      if (token === '' || /^\s+$/.test(token)) return token
      const safe = escapeHtml(token)
      let rendered = safe
      if (nonBlankIndex === 0 && FIRST_WORD_NPM.has(token)) {
        rendered = `<i class="npm">${safe}</i>`
      } else if (nonBlankIndex === 1 && SECOND_WORD_INSTALL.has(token)) {
        rendered = `<i class="install">${safe}</i>`
      }
      nonBlankIndex += 1
      return rendered
    })
    .join('')

  const decoratedWithFlags = highlightFlagsInside(decorated)

  if (note) {
    return `<span data-note="${escapeAttribute(note)}">${decoratedWithFlags}</span>`
  }
  return `<span>${decoratedWithFlags}</span>`
}

function TerminalBlock({ className = '', children }) {
  const html = useMemo(() => {
    const raw = typeof children === 'string'
      ? children
      : Array.isArray(children)
      ? children.join('')
      : ''
    if (!raw) return ''
    const lines = raw.replace(/\r\n?/g, '\n').split('\n')
    while (lines.length > 0 && lines[0].trim() === '') lines.shift()
    while (lines.length > 0 && lines[lines.length - 1].trim() === '') lines.pop()
    return lines.map(processTerminalLine).join('\n')
  }, [children])

  const wrapperClassName = ['terminal_code_box', className].filter(Boolean).join(' ')

  return (
    <div className={wrapperClassName}>
      <pre className="terminal_pre">
        <code
          className="terminal_code"
          // The HTML is built from a fixed allow-list of tags (`<i>`, `<span>`)
          // and every dynamic value is escaped through `escapeHtml` /
          // `escapeAttribute`, so this assignment is safe.
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    </div>
  )
}

export default TerminalBlock
