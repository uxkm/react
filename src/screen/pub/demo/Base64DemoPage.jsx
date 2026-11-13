'use client'

import { useMemo, useState } from 'react' // React
import { encode, decode } from 'js-base64' // Base64 인코딩
import { DemoLayout } from '@/screen/pub/layout/DemoLayout' // Demo Layout 컴포넌트
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock' // Demo Block 컴포넌트
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode' // wrap Page Example

/** js-base64 데모 */
export default function Base64DemoPage () {
  const [plain, setPlain] = useState('안녕하세요 퍼블리싱 목록')
  const [encoded, setEncoded] = useState(() => encode('안녕하세요 퍼블리싱 목록'))

  const decoded = useMemo(() => {
    try {
      return decode(encoded)
    } catch (err) {
      return `(디코드 실패) ${err.message}`
    }
  }, [encoded])

  return (
    <DemoLayout
      title="js-base64"
      description="js-base64 — 유니코드 안전 Base64 인코딩/디코딩"
      slug="base64"
    >
      <DemoBlock
        title="인코드"
        code={wrapPageExample(`const [plain, setPlain] = useState('안녕하세요 퍼블리싱 목록')
const encoded = useMemo(() => encode(plain), [plain])

<div className="demo-stack">
  <textarea
    className="lib-demo-textarea"
    value={plain}
    onChange={(e) => setPlain(e.target.value)}
    aria-label="원문"
  />
  <pre className="lib-demo-pre">{encoded}</pre>
</div>`, {
          name: 'Base64EncodeExample',
          reactImports: ['useMemo', 'useState'],
          compImports: [],
          extraImports: ["import { encode } from 'js-base64'"]
        })}
      >
        <div className="demo-stack">
          <textarea
            className="lib-demo-textarea"
            value={plain}
            onChange={(e) => {
              setPlain(e.target.value)
              setEncoded(encode(e.target.value))
            }}
            aria-label="원문"
          />
          <pre className="lib-demo-pre">{encoded}</pre>
        </div>
      </DemoBlock>
      <DemoBlock
        title="디코드"
        code={wrapPageExample(`const [encoded, setEncoded] = useState('7JWI64WV7ZWY7IS47JqU')

const decoded = useMemo(() => {
  try {
    return decode(encoded)
  } catch (err) {
    return '(디코드 실패) ' + err.message
  }
}, [encoded])

<div className="demo-stack">
  <textarea
    className="lib-demo-textarea"
    value={encoded}
    onChange={(e) => setEncoded(e.target.value)}
    aria-label="Base64"
  />
  <pre className="lib-demo-pre">{decoded}</pre>
</div>`, {
          name: 'Base64DecodeExample',
          reactImports: ['useMemo', 'useState'],
          compImports: [],
          extraImports: ["import { decode } from 'js-base64'"]
        })}
      >
        <div className="demo-stack">
          <textarea
            className="lib-demo-textarea"
            value={encoded}
            onChange={(e) => setEncoded(e.target.value)}
            aria-label="Base64"
          />
          <pre className="lib-demo-pre">{decoded}</pre>
        </div>
      </DemoBlock>
    </DemoLayout>
  )
}
