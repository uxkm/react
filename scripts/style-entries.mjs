import fs from 'node:fs'
import path from 'node:path'
import { discoverProject, root } from './project.mjs'

/** Discover standalone SCSS entries, including entries created after startup. */
export function getStyleEntries () {
  const b2b = discoverProject()
  const entries = []
  function walk (folder) {
    if (!fs.existsSync(folder)) return
    for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
      if (['css', 'dist', 'generated'].includes(entry.name) || entry.name.startsWith('.')) continue
      const file = path.join(folder, entry.name)
      const relative = path.relative(root, file).split(path.sep).join('/')
      const owner = relative.match(/^src\/styles\/pages\/([^/]+)\//)?.[1] ||
        relative.match(/^src\/(?:screen|widgets|modules)\/([^/]+)\//)?.[1]
      if (owner && !['pub', 'error', 'common'].includes(owner) && owner !== b2b?.id) continue
      if (entry.isDirectory()) walk(file)
      else if (entry.name.endsWith('.scss') && !entry.name.startsWith('_')) entries.push(relative)
    }
  }
  walk(path.join(root, 'src'))
  const core = ['src/styles/index.scss', 'src/styles/pub.scss', 'src/styles/demo.scss']
  return [...core.filter((file) => entries.includes(file)), ...entries.filter((file) => !core.includes(file)).sort()]
}
export const STYLE_ENTRIES = getStyleEntries()
