/**
 * 단일 SQL 파일을 Supabase Postgres에 적용
 *
 * .env.production.local 에 SUPABASE_DB_URL 설정 후:
 *   pnpm db:fix-spam
 *   node scripts/run-supabase-sql.mjs supabase/fix_comment_content_filter.sql
 */
import fs from 'node:fs'
import path from 'node:path'
import pg from 'pg'
import { loadProductionEnv, root } from './load-env.mjs'

const relativePath = process.argv[2]
if (!relativePath) {
  console.error('사용법: node scripts/run-supabase-sql.mjs <sql-file>')
  process.exit(1)
}

loadProductionEnv()

const dbUrl = process.env.SUPABASE_DB_URL?.trim()
if (!dbUrl) {
  console.error('SUPABASE_DB_URL 이 없습니다.')
  console.error('Supabase Dashboard → Settings → Database → Connection string (URI)')
  console.error('.env.production.local 에 SUPABASE_DB_URL=... 를 추가하세요.')
  console.error('')
  console.error('또는 SQL Editor에서 해당 .sql 파일을 직접 실행하세요.')
  process.exit(1)
}

const sqlPath = path.join(root, relativePath)
if (!fs.existsSync(sqlPath)) {
  console.error(`파일 없음: ${sqlPath}`)
  process.exit(1)
}

const sql = fs.readFileSync(sqlPath, 'utf8')
const client = new pg.Client({
  connectionString: dbUrl,
  ssl: { rejectUnauthorized: false },
})

try {
  await client.connect()
  console.log(`적용 중: ${relativePath}`)
  await client.query(sql)
  console.log('완료')
} catch (error) {
  console.error('실패:', error.message)
  process.exit(1)
} finally {
  await client.end()
}
