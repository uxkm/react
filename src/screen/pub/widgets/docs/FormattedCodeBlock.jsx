'use client'

import { useFormattedExampleCode } from '@/screen/pub/hooks/useFormattedExampleCode'

export function FormattedCodeBlock ({ code, language }) {
  const { value, ready } = useFormattedExampleCode(code, language || 'text')
  return (
    <pre className="guide-md_pre" tabIndex={0} data-lang={language || undefined} aria-busy={!ready}>
      <code>{value}</code>
    </pre>
  )
}
