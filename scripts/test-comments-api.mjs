/**
 * Supabase 댓글 API 통합 테스트 (마이그레이션 후)
 *   pnpm test:comments-api
 */
import { loadProductionEnv } from './load-env.mjs'

loadProductionEnv()

const url = process.env.VITE_SUPABASE_URL?.trim()
const key =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim() ||
  process.env.VITE_SUPABASE_ANON_KEY?.trim()
const adminPassword = process.env.VITE_COMMENTS_DEV_ADMIN_PASSWORD?.trim() || 'uxkm-admin'
const pagePath = '/publishing/scss/01-scssStart/01-scss_intro'
const commentPassword = 'test1234'

if (!url || !key) {
  console.error('VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY 가 필요합니다.')
  process.exit(1)
}

const headers = {
  apikey: key,
  Authorization: `Bearer ${key}`,
  'Content-Type': 'application/json',
}

function fail(step, detail) {
  console.error(`✗ ${step}: ${detail}`)
  process.exit(1)
}

function ok(step, detail = '') {
  console.log(`✓ ${step}${detail ? ` — ${detail}` : ''}`)
}

async function rpc(name, body) {
  const res = await fetch(`${url}/rest/v1/rpc/${name}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
  const text = await res.text()
  let data
  try {
    data = JSON.parse(text)
  } catch {
    data = text
  }
  return { status: res.status, data }
}

console.log('Supabase 댓글 API 테스트\n')

// 1. 테이블 조회
const listRes = await fetch(
  `${url}/rest/v1/comments?select=id&limit=1`,
  { headers: { apikey: key, Authorization: `Bearer ${key}` } },
)
if (listRes.status === 404) {
  fail('comments 테이블', '없음 — supabase/apply_all.sql 실행 필요')
}
ok('comments 테이블', `HTTP ${listRes.status}`)

// 2. 욕설·금지 표현 차단
const blocked = await rpc('submit_page_comment', {
  p_page_path: pagePath,
  p_author_name: '테스트',
  p_body: '이건 씨발 테스트입니다',
  p_password: commentPassword,
  p_website: '',
  p_parent_id: null,
  p_ip_hash: null,
  p_form_opened_at: null,
})
if (blocked.status !== 200 || blocked.data?.error !== 'prohibited') {
  if (blocked.data?.id) {
    await rpc('admin_delete_comment', {
      p_admin_password: adminPassword,
      p_comment_id: blocked.data.id,
    })
  }
  fail(
    '콘텐츠 필터',
    blocked.data?.error
      ? `응답 error=${blocked.data.error} — supabase/fix_comment_rpc_consolidate.sql 전체 실행 후 notify pgrst 확인`
      : `응답=${JSON.stringify(blocked.data)} — 구버전 RPC 오버로드 가능성. fix_comment_rpc_consolidate.sql 실행`,
  )
}
ok('콘텐츠 필터', 'prohibited')

// 2b. 최소 제출 시간 (스팸 보강 마이그레이션)
const tooFast = await rpc('submit_page_comment', {
  p_page_path: pagePath,
  p_author_name: '테스트',
  p_body: '너무 빠른 제출 테스트',
  p_password: commentPassword,
  p_website: '',
  p_parent_id: null,
  p_ip_hash: null,
  p_form_opened_at: new Date().toISOString(),
})
if (tooFast.status !== 200 || tooFast.data?.error !== 'spam') {
  fail(
    '최소 제출 시간',
    tooFast.data?.error
      ? `error=${tooFast.data.error} — pnpm db:fix-spam 실행 필요`
      : JSON.stringify(tooFast.data),
  )
}
ok('최소 제출 시간', 'spam')

// 3. 댓글 등록
const openedAt = new Date(Date.now() - 5000).toISOString()
const submit = await rpc('submit_page_comment', {
  p_page_path: pagePath,
  p_author_name: 'API테스트',
  p_body: `통합 테스트 ${new Date().toISOString()}`,
  p_password: commentPassword,
  p_website: '',
  p_parent_id: null,
  p_ip_hash: `test-${Date.now()}`,
  p_form_opened_at: openedAt,
})
if (submit.status !== 200 || submit.data?.error) {
  fail('submit_page_comment', JSON.stringify(submit.data))
}
const commentId = submit.data.id
ok('댓글 등록', `id=${commentId}, status=${submit.data.status}`)

// 4. 승인 전 공개 목록 (0건이어야 함)
const before = await fetch(
  `${url}/rest/v1/comments?select=id&page_path=eq.${encodeURIComponent(pagePath)}&status=eq.approved`,
  { headers: { apikey: key, Authorization: `Bearer ${key}` } },
)
const beforeRows = await before.json()
if (!Array.isArray(beforeRows) || beforeRows.some((r) => r.id === commentId)) {
  fail('승인 전 RLS', 'pending 댓글이 공개 조회됨')
}
ok('승인 전 RLS', 'pending 숨김')

// 5. 관리자 목록
const adminList = await rpc('admin_list_comments', {
  p_admin_password: adminPassword,
  p_status: 'pending',
  p_page_path: pagePath,
})
if (adminList.data?.error) {
  fail('admin_list_comments', adminList.data.error)
}
const found = (adminList.data.comments ?? []).some((c) => c.id === commentId)
if (!found) fail('admin_list_comments', '등록한 댓글 없음')
ok('관리자 목록', 'pending 조회')

// 6. 승인
const approve = await rpc('admin_update_comment_status', {
  p_admin_password: adminPassword,
  p_comment_id: commentId,
  p_status: 'approved',
})
if (approve.data?.error) fail('승인', approve.data.error)
ok('관리자 승인')

// 7. 공개 조회
const after = await fetch(
  `${url}/rest/v1/comments?select=id,author_name,body&page_path=eq.${encodeURIComponent(pagePath)}&status=eq.approved&id=eq.${commentId}`,
  { headers: { apikey: key, Authorization: `Bearer ${key}` } },
)
const afterRows = await after.json()
if (!Array.isArray(afterRows) || afterRows.length !== 1) {
  fail('승인 후 공개 조회', JSON.stringify(afterRows))
}
ok('승인 후 공개 조회', afterRows[0].author_name)

// 8. 삭제
const del = await rpc('delete_page_comment', {
  p_comment_id: commentId,
  p_password: commentPassword,
})
if (del.data?.error) fail('delete_page_comment', del.data.error)
ok('본인 삭제')

console.log('\n모든 테스트 통과')
