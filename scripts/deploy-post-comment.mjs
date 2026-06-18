/**
 * post-comment Edge Function 배포
 *
 * 사전: supabase login 및 프로젝트 link
 *   supabase link --project-ref vfouzkmevuvaxosowmkx
 *
 * 시크릿 (최초 1회):
 *   supabase secrets set TURNSTILE_SECRET_KEY=... IP_HASH_SALT=... SUPABASE_SERVICE_ROLE_KEY=...
 *
 * 배포:
 *   pnpm functions:deploy:comments
 */
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { loadProductionEnv, root } from './load-env.mjs'

loadProductionEnv()

const projectRef =
  process.env.SUPABASE_PROJECT_REF?.trim() ||
  (() => {
    const linkedPath = path.join(root, 'supabase', '.temp', 'linked-project.json')
    if (!fs.existsSync(linkedPath)) return ''
    try {
      return JSON.parse(fs.readFileSync(linkedPath, 'utf8')).ref ?? ''
    } catch {
      return ''
    }
  })()

const args = ['functions', 'deploy', 'post-comment', '--no-verify-jwt']
if (projectRef) {
  args.push('--project-ref', projectRef)
}

console.log(`supabase ${args.join(' ')}`)

const result = spawnSync('supabase', args, {
  cwd: root,
  stdio: 'inherit',
  env: process.env,
})

if (result.error) {
  console.error('\nsupabase CLI를 찾을 수 없습니다. 설치: https://supabase.com/docs/guides/cli')
  process.exit(1)
}

if ((result.status ?? 1) !== 0) {
  console.error('\n배포 실패 시:')
  console.error('  1. supabase login')
  console.error('  2. supabase link --project-ref vfouzkmevuvaxosowmkx')
  console.error('  3. supabase secrets set SUPABASE_SERVICE_ROLE_KEY=... IP_HASH_SALT=...')
  console.error('  4. pnpm functions:deploy:comments')
}

process.exit(result.status ?? 1)
