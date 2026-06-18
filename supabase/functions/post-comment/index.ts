import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
}

const MIN_SUBMIT_MS = 3000
const BODY_MAX = 2000
const AUTHOR_MAX = 40
const PASSWORD_MIN = 4
const PASSWORD_MAX = 32

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

function getNotifyRecipients(): string[] {
  const raw = Deno.env.get('COMMENT_NOTIFY_RECIPIENTS') ?? ''
  return raw
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean)
}

function getNotifyProvider(): string {
  return (Deno.env.get('COMMENT_NOTIFY_PROVIDER') ?? 'kakao').trim().toLowerCase()
}

function buildKakaoMessage(params: {
  pagePath: string
  authorName: string
  body: string
  status: string
  commentId: string | null
}) {
  const preview = params.body.length > 80 ? `${params.body.slice(0, 80)}...` : params.body
  return [
    '[UXKM 댓글 알림]',
    `작성자: ${params.authorName}`,
    `상태: ${params.status || 'pending'}`,
    `페이지: ${params.pagePath}`,
    `내용: ${preview}`,
    params.commentId ? `ID: ${params.commentId}` : null,
  ]
    .filter(Boolean)
    .join('\n')
}

function buildSlackMessage(params: {
  pagePath: string
  authorName: string
  body: string
  status: string
  commentId: string | null
}) {
  const preview = params.body.length > 160 ? `${params.body.slice(0, 160)}...` : params.body
  return [
    '*[UXKM 댓글 알림]*',
    `- 작성자: ${params.authorName}`,
    `- 상태: ${params.status || 'pending'}`,
    `- 페이지: ${params.pagePath}`,
    `- 내용: ${preview}`,
    params.commentId ? `- ID: ${params.commentId}` : null,
  ]
    .filter(Boolean)
    .join('\n')
}

async function sendCommentNotifications(params: {
  pagePath: string
  authorName: string
  body: string
  status: string
  commentId: string | null
}) {
  const provider = getNotifyProvider()
  const endpoint =
    Deno.env.get('KAKAO_NOTIFY_ENDPOINT_URL')?.trim() ??
    Deno.env.get('COMMENT_NOTIFY_ENDPOINT_URL')?.trim()
  const token =
    Deno.env.get('KAKAO_NOTIFY_ENDPOINT_TOKEN')?.trim() ??
    Deno.env.get('COMMENT_NOTIFY_ENDPOINT_TOKEN')?.trim()
  const senderKey = Deno.env.get('KAKAO_SENDER_KEY')?.trim() ?? ''
  const templateCode = Deno.env.get('KAKAO_TEMPLATE_CODE')?.trim() ?? ''
  const recipients = getNotifyRecipients()

  if (!endpoint) return

  if (provider === 'slack') {
    try {
      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          text: buildSlackMessage(params),
        }),
      })
    } catch {
      // 댓글 등록 성공 여부에 영향 주지 않기 위해 알림 실패는 무시
    }
    return
  }

  if (recipients.length === 0) return

  for (const recipient of recipients) {
    try {
      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          provider,
          to: recipient,
          source: 'uxkm-comment',
          page_path: params.pagePath,
          author_name: params.authorName,
          body: params.body,
          status: params.status,
          comment_id: params.commentId,
          // 카카오 알림톡 게이트웨이가 바로 사용할 수 있는 기본 필드
          kakao: {
            sender_key: senderKey,
            template_code: templateCode,
            message: buildKakaoMessage(params),
          },
        }),
      })
    } catch {
      // 댓글 등록 성공 여부에 영향 주지 않기 위해 알림 실패는 무시
    }
  }
}

async function hashIp(ip: string, salt: string): Promise<string> {
  const data = new TextEncoder().encode(`${salt}:${ip}`)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

async function verifyTurnstile(
  token: string,
  ip: string,
  secret: string,
): Promise<boolean> {
  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: token,
        remoteip: ip,
      }),
    },
  )
  const result = await response.json()
  return result.success === true
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return json({ error: 'invalid' }, 405)
  }

  try {
    const payload = await req.json()
    const pagePath = String(payload.page_path ?? '').trim()
    const body = String(payload.body ?? '').trim()
    const authorName = String(payload.author_name ?? '').trim()
    const password = String(payload.password ?? '').trim()
    const turnstileToken = String(payload.turnstile_token ?? '')
    const honeypot = String(payload.website ?? '').trim()
    const parentId = payload.parent_id ? String(payload.parent_id).trim() : null
    const formOpenedAtRaw = payload.form_opened_at
      ? String(payload.form_opened_at).trim()
      : ''

    if (honeypot) {
      return json({ error: 'spam' }, 400)
    }

    if (formOpenedAtRaw) {
      const openedAt = Date.parse(formOpenedAtRaw)
      if (!Number.isNaN(openedAt)) {
        if (openedAt > Date.now() || Date.now() - openedAt < MIN_SUBMIT_MS) {
          return json({ error: 'spam' }, 400)
        }
      }
    }

    if (!pagePath.startsWith('/') || !body || !authorName || !password) {
      return json({ error: 'invalid' }, 400)
    }

    if (
      body.length > BODY_MAX ||
      authorName.length > AUTHOR_MAX ||
      password.length < PASSWORD_MIN ||
      password.length > PASSWORD_MAX
    ) {
      return json({ error: 'invalid' }, 400)
    }

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    const turnstileSecret = Deno.env.get('TURNSTILE_SECRET_KEY')

    if (turnstileSecret) {
      if (!turnstileToken) {
        return json({ error: 'turnstile_failed' }, 400)
      }
      const verified = await verifyTurnstile(turnstileToken, ip, turnstileSecret)
      if (!verified) {
        return json({ error: 'turnstile_failed' }, 400)
      }
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    if (!supabaseUrl || !serviceRoleKey) {
      return json({ error: 'server_error' }, 500)
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey)
    const ipHash = await hashIp(ip, Deno.env.get('IP_HASH_SALT') ?? 'uxkm')

    const { data, error } = await supabase.rpc('submit_page_comment', {
      p_page_path: pagePath,
      p_author_name: authorName,
      p_body: body,
      p_password: password,
      p_website: honeypot,
      p_parent_id: parentId,
      p_ip_hash: ipHash,
      p_form_opened_at: formOpenedAtRaw || null,
    })

    if (error || !data) {
      return json({ error: 'server_error' }, 500)
    }

    if (data.error) {
      return json({ error: data.error }, 400)
    }

    await sendCommentNotifications({
      pagePath,
      authorName,
      body,
      status: String(data.status ?? ''),
      commentId: data.id ? String(data.id) : null,
    })

    return json(data)
  } catch {
    return json({ error: 'server_error' }, 500)
  }
})
