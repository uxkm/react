const DEFAULT_IP_HASH_SALT = 'uxkm'

export async function hashCommentIp(
  ip,
  salt = import.meta.env.VITE_IP_HASH_SALT?.trim() || DEFAULT_IP_HASH_SALT,
) {
  const data = new TextEncoder().encode(`${salt}:${ip}`)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}
