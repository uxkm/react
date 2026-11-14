'use client'

import { useEffect, useRef, useState } from 'react' // React
import { client as createStompClient } from 'webstomp-client' // create Stomp Client
import { DemoLayout } from '@/screen/pub/layout/DemoLayout' // Demo Layout 컴포넌트
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock' // Demo Block 컴포넌트
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode' // wrap Page Example

/** 로컬/데모용 기본 엔드포인트 (브로커 없으면 실패가 정상) */
const DEFAULT_WS = 'ws://127.0.0.1:15674/ws'

/** webstomp-client 데모 */
export default function WebstompDemoPage () {
  const [url, setUrl] = useState(DEFAULT_WS)
  const [status, setStatus] = useState('연결 안 됨')
  const [log, setLog] = useState([])
  const clientRef = useRef(null)

  const pushLog = (line) => {
    setLog((prev) => [`${new Date().toLocaleTimeString()}  ${line}`, ...prev].slice(0, 12))
  }

  const disconnect = () => {
    const c = clientRef.current
    if (c && c.connected) {
      c.disconnect(() => {
        setStatus('연결 해제됨')
        pushLog('disconnect')
      })
    }
    clientRef.current = null
  }

  const connect = () => {
    disconnect()
    setStatus('연결 중…')
    pushLog(`connect → ${url}`)

    try {
      const stomp = createStompClient(url, { debug: false, protocols: ['v12.stomp'] })
      clientRef.current = stomp
      stomp.connect({}, () => {
        setStatus('연결됨')
        pushLog('connected')
        stomp.subscribe('/topic/demo', (message) => {
          pushLog(`message: ${message.body}`)
        })
      }, (err) => {
        setStatus('연결 실패 (브로커 없음이 일반적)')
        pushLog(`error: ${err}`)
        clientRef.current = null
      })
    } catch (err) {
      setStatus('생성 실패')
      pushLog(`exception: ${err.message}`)
    }
  }

  useEffect(() => () => {
    const c = clientRef.current
    if (c?.connected) {
      try { c.disconnect(() => {}) } catch { /* ignore */ }
    }
    clientRef.current = null
  }, [])

  return (
    <DemoLayout
      title="webstomp-client"
      description="webstomp-client — STOMP over WebSocket (브로커 필요)"
      slug="webstomp"
    >
      <DemoBlock
        title="연결 시도"
        description="RabbitMQ 등 STOMP 브로커가 없으면 실패가 정상입니다. API 호출 흐름만 확인합니다."
        code={wrapPageExample(`const [url, setUrl] = useState('ws://127.0.0.1:15674/ws')
const [status, setStatus] = useState('연결 안 됨')
const [log, setLog] = useState([])
const clientRef = useRef(null)

const pushLog = (line) => {
  setLog((prev) => [new Date().toLocaleTimeString() + '  ' + line, ...prev].slice(0, 12))
}

const disconnect = () => {
  const c = clientRef.current
  if (c && c.connected) {
    c.disconnect(() => {
      setStatus('연결 해제됨')
      pushLog('disconnect')
    })
  }
  clientRef.current = null
}

const connect = () => {
  disconnect()
  setStatus('연결 중…')

  const stomp = createStompClient(url, { debug: false, protocols: ['v12.stomp'] })
  clientRef.current = stomp
  stomp.connect({}, () => {
    setStatus('연결됨')
    stomp.subscribe('/topic/demo', (message) => pushLog('message: ' + message.body))
  }, (err) => {
    setStatus('연결 실패')
    pushLog('error: ' + err)
    clientRef.current = null
  })
}

useEffect(() => disconnect, [])

<div className="demo-stack">
  <input
    className="lib-demo-input"
    value={url}
    onChange={(e) => setUrl(e.target.value)}
    aria-label="WebSocket URL"
  />
  <div className="demo-row">
    <button type="button" onClick={connect}>연결</button>
    <button type="button" onClick={disconnect}>해제</button>
    <span>{status}</span>
  </div>
  <pre tabIndex={0} className="lib-demo-pre">{log.join('\\n') || '(로그 없음)'}</pre>
</div>`, {
          name: 'WebstompExample',
          reactImports: ['useEffect', 'useRef', 'useState'],
          compImports: [],
          extraImports: ["import { client as createStompClient } from 'webstomp-client'"]
        })}
      >
        <div className="demo-stack">
          <input
            className="lib-demo-input"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            aria-label="WebSocket URL"
          />
          <div className="demo-row">
            <button type="button" onClick={connect} style={{ padding: '8px 12px', cursor: 'pointer' }}>
              연결
            </button>
            <button type="button" onClick={disconnect} style={{ padding: '8px 12px', cursor: 'pointer' }}>
              해제
            </button>
            <span role="status" style={{ fontSize: 13 }}>{status}</span>
          </div>
          <pre tabIndex={0} className="lib-demo-pre">{log.join('\n') || '(로그 없음)'}</pre>
        </div>
      </DemoBlock>
    </DemoLayout>
  )
}
