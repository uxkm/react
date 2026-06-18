import { tags as t } from '@lezer/highlight'
import { createTheme } from '@uiw/codemirror-themes'

/**
 * ayu-mirage theme for CodeMirror 6.
 *
 * Direct port of the color palette in `src/assets/css/ayu-mirage.scss`, which
 * the previous CodeMirror 5 build under `src/assets/lib/` used.
 *
 * Mappings:
 *   $bg       -> editor background, gutter background
 *   $gray     -> default foreground / caret / selection inactive text
 *   $value    -> string-like values (CSS values, attribute values, atoms)
 *   $tag      -> HTML tag names / property definitions
 *   $property -> CSS property names
 *   $number   -> number literals
 *   $comment  -> comments (italic)
 *   $atom     -> atoms (true / false / null)
 *   $error    -> invalid tokens
 *   $keyword  -> keywords (return, if, else, ...)
 *   $drag     -> selection background
 */
const $bg = '#1a1d28'
const $gray = '#ccc'
const $value = '#a8d589'
const $tag = '#93b6ff'
const $property = '#ccd9dc'
const $number = '#5fb9e3'
const $comment = '#677079'
const $atom = '#d07fe5'
const $error = '#ff6161'
const $keyword = '#e7862f'
const $drag = '#214283'

export const ayuMirageTheme = createTheme({
  theme: 'dark',
  settings: {
    background: $bg,
    foreground: $gray,
    caret: $gray,
    selection: $drag,
    selectionMatch: 'rgba(255, 255, 255, 0.08)',
    lineHighlight: 'rgba(255, 255, 255, 0.04)',
    gutterBackground: $bg,
    gutterForeground: 'rgba(255, 255, 255, 0.25)',
    gutterBorder: 'transparent',
  },
  styles: [
    { tag: t.comment, color: $comment, fontStyle: 'italic' },
    { tag: [t.lineComment, t.blockComment, t.docComment], color: $comment, fontStyle: 'italic' },
    { tag: [t.string, t.special(t.string)], color: $value },
    { tag: t.number, color: $number },
    { tag: [t.bool, t.null, t.atom], color: $atom },
    { tag: t.keyword, color: $keyword },
    { tag: [t.controlKeyword, t.modifier, t.operatorKeyword, t.definitionKeyword], color: $keyword },
    { tag: [t.tagName, t.standard(t.tagName)], color: $tag },
    { tag: t.attributeName, color: $gray },
    { tag: t.attributeValue, color: $value },
    { tag: t.propertyName, color: $property },
    { tag: t.definition(t.propertyName), color: $tag },
    { tag: t.variableName, color: $gray },
    { tag: t.definition(t.variableName), color: '#ffd580' },
    { tag: [t.function(t.variableName), t.function(t.propertyName)], color: '#f29e74' },
    { tag: t.typeName, color: '#5998a6' },
    { tag: t.className, color: '#d4bfff' },
    { tag: t.unit, color: $number },
    { tag: t.color, color: $value },
    { tag: t.regexp, color: '#ffd580' },
    { tag: t.escape, color: $atom },
    { tag: t.invalid, color: $error },
    { tag: t.meta, color: '#ffd580' },
    { tag: t.link, color: $tag, textDecoration: 'underline' },
    { tag: t.heading, color: $keyword, fontWeight: 'bold' },
    { tag: t.emphasis, fontStyle: 'italic' },
    { tag: t.strong, fontWeight: 'bold' },
  ],
})

export default ayuMirageTheme
