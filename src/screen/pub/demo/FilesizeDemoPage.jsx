'use client'

import { useMemo, useState } from 'react' // React
import { filesize } from 'filesize' // filesize
import { DemoLayout } from '@/screen/pub/layout/DemoLayout' // Demo Layout 컴포넌트
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock' // Demo Block 컴포넌트
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode' // wrap Page Example

const presets = [0, 512, 1024, 1536, 1048576, 1073741824, 5368709120]

/** filesize 데모 */
export default function FilesizeDemoPage () {
  const [bytes, setBytes] = useState(1536)
  const formatted = useMemo(() => filesize(bytes, { base: 2, standard: 'jedec' }), [bytes])

  return (
    <DemoLayout
      title="filesize"
      description="filesize — 바이트를 읽기 쉬운 용량 문자열로 변환"
      slug="filesize"
    >
      <DemoBlock
        title="바이트 입력"
        code={wrapPageExample(`const [bytes, setBytes] = useState(1536)
const formatted = useMemo(() => filesize(bytes, { base: 2, standard: 'jedec' }), [bytes])

<div className="demo-stack">
  <input
    className="lib-demo-input"
    type="number"
    min={0}
    value={bytes}
    onChange={(e) => setBytes(Number(e.target.value) || 0)}
    aria-label="바이트"
  />
  <pre className="lib-demo-pre">{bytes} bytes → {formatted}</pre>
  <div className="demo-row">
    {presets.map((value) => (
      <button key={value} type="button" onClick={() => setBytes(value)}>
        {filesize(value, { base: 2, standard: 'jedec' })}
      </button>
    ))}
  </div>
</div>`, {
          name: 'FilesizeExample',
          reactImports: ['useMemo', 'useState'],
          compImports: [],
          extraImports: [
            "import { filesize } from 'filesize'\n\nconst presets = [0, 512, 1024, 1536, 1048576, 1073741824]"
          ]
        })}
      >
        <div className="demo-stack">
          <input
            className="lib-demo-input"
            type="number"
            min={0}
            value={bytes}
            onChange={(e) => setBytes(Number(e.target.value) || 0)}
            aria-label="바이트"
          />
          <pre className="lib-demo-pre">{bytes} bytes → {formatted}</pre>
          <div className="demo-row">
            {presets.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setBytes(value)}
                style={{ padding: '6px 10px', cursor: 'pointer' }}
              >
                {filesize(value, { base: 2, standard: 'jedec' })}
              </button>
            ))}
          </div>
        </div>
      </DemoBlock>
    </DemoLayout>
  )
}
