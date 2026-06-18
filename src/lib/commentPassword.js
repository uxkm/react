export const COMMENT_PASSWORD_MIN = 4
export const COMMENT_PASSWORD_MAX = 32

export async function hashCommentPassword(password) {
  const encoded = new TextEncoder().encode(password)
  const digest = await crypto.subtle.digest('SHA-256', encoded)
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

export function isValidCommentPassword(password) {
  const length = String(password ?? '').length
  return length >= COMMENT_PASSWORD_MIN && length <= COMMENT_PASSWORD_MAX
}
