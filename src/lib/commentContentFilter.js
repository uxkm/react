/** 댓글 이름·본문 금지 표현 (KISO/방통위/공공기관 가이드라인 반영) */
const ABUSE_AND_HATE_SUBSTRINGS = [
  '씨발',
  '시발',
  '씹',
  '좆',
  '지랄',
  '병신',
  '썅',
  '개새끼',
  '개세끼',
  '미친놈',
  '미친년',
  '또라이',
  '등신',
  '쌍놈',
  '쌍년',
  '엠창',
  'fuck',
  'shit',
  'bitch',
  'asshole',
  'bastard',
  'motherfucker',
  '한남',
  '한녀',
  '김치녀',
  '틀딱',
  '홍어',
  '짱깨',
  '쪽바리',
]

const BLOCKED_REGEXPS = [
  /<script\b/i,
  /javascript\s*:/i,
  /on\w+\s*=/i,
  /data\s*:\s*text\/html/i,
  /(.)\1{9,}/,
  /(죽여|죽이|살인|테러|폭탄|강간|성폭행|불법촬영)/,
  /\b\d{2,3}-\d{3,4}-\d{4}\b/,
  /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/i,
  /\b\d{6}-?\d{7}\b/,
  /\b(장애인|여성|남성|외국인|이주민|흑인|중국인|일본인)\s*(혐오|비하|멸시|추방)\b/,
]

function normalizeVariants(value) {
  const base = String(value ?? '')
    .toLowerCase()
    .replace(/[\s._\-*~!@#$%^&()+=[\]{}|\\:;"'<>,.?/･·]/g, '')

  const leet = base
    .replace(/0/g, 'o')
    .replace(/1/g, 'i')
    .replace(/3/g, 'e')
    .replace(/4/g, 'a')
    .replace(/5/g, 's')
    .replace(/7/g, 't')
    .replace(/8/g, 'b')
    .replace(/@/g, 'a')
    .replace(/\$/g, 's')

  const noDigits = base.replace(/\d/g, '')

  return [leet, noDigits]
}

export function containsProhibitedContent(value) {
  const raw = String(value ?? '')
  if (!raw.trim()) return false

  for (const pattern of BLOCKED_REGEXPS) {
    if (pattern.test(raw)) return true
  }

  const variants = normalizeVariants(raw)
  return variants.some((normalized) =>
    ABUSE_AND_HATE_SUBSTRINGS.some((term) => normalized.includes(term)),
  )
}

export function validateCommentContent({ authorName, body }) {
  if (containsProhibitedContent(authorName)) {
    return { ok: false, field: 'authorName' }
  }

  if (containsProhibitedContent(body)) {
    return { ok: false, field: 'body' }
  }

  return { ok: true }
}
