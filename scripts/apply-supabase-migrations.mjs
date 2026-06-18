/**
 * Supabase DB 마이그레이션 적용
 *
 * .env.production.local 에 SUPABASE_DB_URL 설정 후:
 *   pnpm db:migrate
 *
 * DB URL: Dashboard → Project Settings → Database → Connection string (URI)
 */
import fs from 'node:fs'
import path from 'node:path'
import pg from 'pg'
import { loadProductionEnv, root } from './load-env.mjs'

loadProductionEnv()

const dbUrl = process.env.SUPABASE_DB_URL?.trim()
if (!dbUrl) {
  console.error('SUPABASE_DB_URL 이 없습니다.')
  console.error('Supabase Dashboard → Settings → Database → Connection string (URI) 를')
  console.error('.env.production.local 에 SUPABASE_DB_URL=... 로 추가하세요.')
  console.error('')
  console.error('또는 supabase/apply_all.sql 을 SQL Editor에 붙여넣어 실행하세요.')
  process.exit(1)
}

const sqlPath = path.join(root, 'supabase', 'apply_all.sql')
const sql = fs.readFileSync(sqlPath, 'utf8')

const client = new pg.Client({
  connectionString: dbUrl,
  ssl: { rejectUnauthorized: false },
})

try {
  await client.connect()
  console.log('마이그레이션 적용 중…')
  await client.query(sql)
  console.log('완료: comments 테이블·RPC·관리자 비밀번호(uxkm-admin) 설정됨')
} catch (error) {
  console.error('마이그레이션 실패:', error.message)
  process.exit(1)
} finally {
  await client.end()
}
