import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ??
  import.meta.env.VITE_SUPABASE_ANON_KEY

const PLACEHOLDER_VALUES = new Set([
  'your-anon-key',
  'your-publishable-key',
  'https://your-project.supabase.co',
])

export function isCommentsConfigured() {
  const url = supabaseUrl?.trim()
  const key = supabaseAnonKey?.trim()
  if (!url || !key) return false
  if (PLACEHOLDER_VALUES.has(url) || PLACEHOLDER_VALUES.has(key)) return false
  return true
}

export const supabase = isCommentsConfigured()
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null
