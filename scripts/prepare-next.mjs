/**
 * Omit Next's empty metadata host for this static-export application.
 * Apply before starting Next so SSR and client navigation use the same tree.
 * Never remove React-owned DOM nodes after hydration.
 */
import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const nextRoot = path.dirname(require.resolve('next/package.json'))
const version = JSON.parse(fs.readFileSync(path.join(nextRoot, 'package.json'), 'utf8')).version
const marker = '/* uxkm: metadata boundary without an empty host */'
const targets = [
  ['dist/lib/metadata/metadata.js', '_react.Fragment'],
  ['dist/lib/metadata/metadata-parallel.js', '_react.Fragment'],
  ['dist/esm/lib/metadata/metadata.js', 'React.Fragment'],
  ['dist/esm/lib/metadata/metadata-parallel.js', 'React.Fragment']
]
const config = fs.readFileSync(new URL('../next.config.ts', import.meta.url), 'utf8')
if (!config.includes("output: 'export'") || !config.includes('htmlLimitedBots: /.*/')) {
  throw new Error('The metadata patch requires static export and htmlLimitedBots: /.*/. Review it before enabling streaming metadata.')
}
const changes = []
for (const [relative, fragment] of targets) {
  const file = path.join(nextRoot, relative)
  const source = fs.readFileSync(file, 'utf8')
  if (source.includes(marker)) continue
  const pattern = /("div", \{\s*)hidden: true,(\s*children: [^\n]*\n\s*name: "Next\.Metadata",)/g
  const matches = [...source.matchAll(pattern)]
  if (matches.length !== 1) {
    throw new Error(`Next.js ${version}: metadata wrapper changed in ${relative}. Review the compatibility patch before starting Next.`)
  }
  const output = source.replace(pattern, `${marker} ${fragment}, {$2`)
  changes.push([file, output])
}
// Verify every target first, then update all module variants together.
for (const [file, source] of changes) fs.writeFileSync(file, source)
console.log(`[next] ${version}: static metadata uses no empty div (${changes.length} modules updated)`)
