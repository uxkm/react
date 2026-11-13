'use client'

import { useState } from 'react' // 상태 훅
import { copyText } from '@/lib/clipboard' // copy Text
import { DemoLayout } from '@/screen/pub/layout/DemoLayout' // Demo Layout 컴포넌트
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock' // Demo Block 컴포넌트
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode' // wrap Page Example

/** clipboard-copy 데모 */
export default function ClipboardDemoPage () {
  const [text, setText] = useState('퍼블리싱 목록 — clipboard demo')
  const [status, setStatus] = useState('')

  const onCopy = async () => {
    try {
      await copyText(text)
      setStatus('복사됨')
    } catch (err) {
      setStatus(`실패: ${err?.message || err}`)
    }
  }

  return (
    <DemoLayout
      title="Clipboard"
      description="clipboard-copy — 텍스트 클립보드 복사 (@/lib/clipboard)"
      slug="clipboard"
    >
      <DemoBlock
        title="copyText()"
        code={wrapPageExample(`const [text, setText] = useState('복사할 텍스트')
const [status, setStatus] = useState('')

const onCopy = async () => {
  try {
    await copyText(text)
    setStatus('복사됨')
  } catch (err) {
    setStatus('실패: ' + (err?.message || err))
  }
}

<div className="demo-stack">
  <textarea
    className="lib-demo-textarea"
    value={text}
    onChange={(e) => setText(e.target.value)}
    aria-label="복사할 텍스트"
  />
  <div className="demo-row">
    <button type="button" onClick={onCopy}>클립보드에 복사</button>
    {status ? <span>{status}</span> : null}
  </div>
</div>`, {
          name: 'ClipboardExample',
          reactImports: ['useState'],
          compImports: [],
          extraImports: ["import { copyText } from '@/lib/clipboard'"]
        })}
      >
        <div className="demo-stack">
          <textarea
            className="lib-demo-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            aria-label="복사할 텍스트"
          />
          <div className="demo-row">
            <button type="button" onClick={onCopy} style={{ padding: '8px 12px', cursor: 'pointer' }}>
              클립보드에 복사
            </button>
            {status ? <span style={{ fontSize: 13 }}>{status}</span> : null}
          </div>
        </div>
      </DemoBlock>
    </DemoLayout>
  )
}
