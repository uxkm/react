import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const args = process.argv.slice(2)
if (args.length && (args.length !== 1 || args[0] !== '--modules')) {
  throw new Error('Usage: node scripts/build/clean.mjs [--modules]')
}
const targets = args[0] === '--modules'
  ? ['node_modules']
  : ['.next', 'out', 'next-env.d.ts', 'src/styles/css', 'src/styles/dist', 'node_modules/.cache', '.cache', '.turbo']

for (const target of targets) {
  // Resolve from this script, including when the checkout path contains spaces.
  fs.rmSync(fileURLToPath(new URL('../../' + target, import.meta.url)), {
    recursive: true,
    force: true,
    maxRetries: 5,
    retryDelay: 200
  })
}
