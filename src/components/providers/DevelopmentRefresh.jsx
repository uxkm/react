'use client'

import { useEffect } from 'react' // effect 훅

/** Refresh fetch-once JSON and cached static assets after filesystem changes. */
export default function DevelopmentRefresh () {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return undefined
    const stream = new EventSource('/__uxkm/watch')
    let connected = false
    let timer
    const reload = () => {
      clearTimeout(timer)
      timer = setTimeout(() => window.location.reload(), 100)
    }
    stream.onopen = () => {
      if (connected) reload() // a supervised Next restart completed
      connected = true
    }
    stream.addEventListener('refresh', reload)
    return () => { clearTimeout(timer); stream.close() }
  }, [])
  return null
}
