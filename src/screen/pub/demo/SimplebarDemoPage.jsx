'use client'

import { SimpleBar } from '@/lib/simplebar' // Simple Bar 컴포넌트
import { DemoLayout } from '@/screen/pub/layout/DemoLayout' // Demo Layout 컴포넌트
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock' // Demo Block 컴포넌트
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode' // wrap Page Example

const lines = Array.from({ length: 24 }, (_, i) => (
  `라인 ${i + 1} — SimpleBar 커스텀 스크롤 영역 예시입니다.`
))

/** simplebar-react 데모 */
export default function SimplebarDemoPage () {
  return (
    <DemoLayout
      title="SimpleBar"
      description="simplebar-react — 커스텀 스크롤바 (@/lib/simplebar)"
      slug="simplebar"
    >
      <DemoBlock
        title="고정 높이 스크롤"
        code={wrapPageExample(`const lines = Array.from({ length: 24 }, (_, i) => 'Line ' + (i + 1))

<div className="lib-demo-scroll">
  <SimpleBar style={{ maxHeight: 180 }}>
    {lines.map((line) => (
      <p key={line} style={{ margin: '0 0 8px' }}>{line}</p>
    ))}
  </SimpleBar>
</div>`, {
          name: 'SimplebarExample',
          reactImports: [],
          compImports: [],
          extraImports: ["import { SimpleBar } from '@/lib/simplebar'"]
        })}
      >
        <div className="lib-demo-scroll">
          <SimpleBar style={{ maxHeight: 180 }}>
            <div className="lib-demo-scroll_inner">
              {lines.map((line) => (
                <p key={line} style={{ margin: '0 0 8px' }}>{line}</p>
              ))}
            </div>
          </SimpleBar>
        </div>
      </DemoBlock>
    </DemoLayout>
  )
}
