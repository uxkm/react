import { spawnSync } from 'node:child_process'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
// Invoke the installed CLI directly, without shell-specific env syntax or npx downloads.
const result = spawnSync(process.execPath, [require.resolve('next/dist/bin/next'), 'build'], {
  stdio: 'inherit',
  env: { ...process.env, STYLE_MODE: 'css' }
})
if (result.error) console.error('[build]', result.error)
process.exitCode = result.status ?? 1
