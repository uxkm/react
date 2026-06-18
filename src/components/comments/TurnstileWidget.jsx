import { useEffect, useRef } from 'react'

function TurnstileWidget({ siteKey, onVerify, onExpire }) {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)

  useEffect(() => {
    if (!siteKey || !containerRef.current) return undefined

    const renderWidget = () => {
      if (!window.turnstile || !containerRef.current) return
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: onVerify,
        'expired-callback': onExpire,
      })
    }

    if (window.turnstile) {
      renderWidget()
      return () => {
        if (widgetIdRef.current != null) {
          window.turnstile.remove(widgetIdRef.current)
          widgetIdRef.current = null
        }
      }
    }

    const existingScript = document.querySelector(
      'script[data-turnstile-script="true"]',
    )

    if (existingScript) {
      existingScript.addEventListener('load', renderWidget)
      return () => {
        existingScript.removeEventListener('load', renderWidget)
        if (widgetIdRef.current != null && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current)
          widgetIdRef.current = null
        }
      }
    }

    const script = document.createElement('script')
    script.src =
      'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.dataset.turnstileScript = 'true'
    script.onload = renderWidget
    document.head.appendChild(script)

    return () => {
      if (widgetIdRef.current != null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [siteKey, onVerify, onExpire])

  if (!siteKey) return null

  return <div ref={containerRef} className="page_comments__turnstile" />
}

export default TurnstileWidget
