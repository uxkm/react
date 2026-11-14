'use client'

import { useMemo, useState } from 'react' // React
import filterXss from 'xss' // filter Xss
import { DemoLayout } from '@/screen/pub/layout/DemoLayout' // Demo Layout 컴포넌트
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock' // Demo Block 컴포넌트
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode' // wrap Page Example

const SAMPLE_LINE = `const SAMPLE = '<p>안녕 <script>alert(1)</script><b onclick="evil()">강조</b></p>'`
const SAMPLE_IMPORT = '\n' + SAMPLE_LINE
const FILTER_IMPORT = "import filterXss from 'xss'\n\n" + SAMPLE_LINE

const SAMPLE = '<p>안녕 <script>alert(1)</script><b onclick="evil()">강조</b> <a href="javascript:alert(1)">링크</a></p>'

/** xss 새니타이즈 데모 */
export default function XssDemoPage () {
  const [raw, setRaw] = useState(SAMPLE)
  const cleaned = useMemo(() => filterXss(raw), [raw])

  return (
    <DemoLayout
      title="xss"
      description="xss — 위험 HTML 태그/속성 제거"
      slug="xss"
    >
      <DemoBlock
        title="원본 HTML"
        code={wrapPageExample(`const [raw, setRaw] = useState(SAMPLE)

<textarea
  className="lib-demo-textarea"
  value={raw}
  onChange={(e) => setRaw(e.target.value)}
  aria-label="원본 HTML"
/>`, {
          name: 'XssInputExample',
          reactImports: ['useState'],
          compImports: [],
          extraImports: [SAMPLE_IMPORT]
        })}
      >
        <textarea
          className="lib-demo-textarea"
          style={{ maxWidth: 640, minHeight: 120 }}
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          aria-label="원본 HTML"
        />
      </DemoBlock>
      <DemoBlock
        title="필터 결과 (문자열)"
        code={wrapPageExample(`const [raw] = useState(SAMPLE)
const cleaned = useMemo(() => filterXss(raw), [raw])

<pre tabIndex={0} className="lib-demo-pre">{cleaned}</pre>`, {
          name: 'XssFilterExample',
          reactImports: ['useMemo', 'useState'],
          compImports: [],
          extraImports: [FILTER_IMPORT]
        })}
      >
        <pre tabIndex={0} className="lib-demo-pre">{cleaned}</pre>
      </DemoBlock>
      <DemoBlock
        title="안전 렌더 (dangerouslySetInnerHTML)"
        code={wrapPageExample(`const [raw] = useState(SAMPLE)
const cleaned = useMemo(() => filterXss(raw), [raw])

<div
  style={{
    padding: 12,
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-panel)'
  }}
  dangerouslySetInnerHTML={{ __html: cleaned }}
/>`, {
          name: 'XssRenderExample',
          reactImports: ['useMemo', 'useState'],
          compImports: [],
          extraImports: [FILTER_IMPORT]
        })}
      >
        <div
          style={{
            padding: 12,
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-panel)',
            background: 'var(--color-bg)'
          }}
          dangerouslySetInnerHTML={{ __html: cleaned }}
        />
      </DemoBlock>
    </DemoLayout>
  )
}
