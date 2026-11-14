'use client'

import { useMemo, useState } from 'react' // React
import { dayjs } from '@/lib/vendor/dayjs' // dayjs
import { DemoLayout } from '@/screen/pub/layout/DemoLayout' // Demo Layout 컴포넌트
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock' // Demo Block 컴포넌트
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode' // wrap Page Example

/** dayjs 데모 */
export default function DayjsDemoPage () {
  const [input, setInput] = useState(() => dayjs().format('YYYY-MM-DD HH:mm'))
  const parsed = useMemo(() => dayjs(input, 'YYYY-MM-DD HH:mm'), [input])
  const valid = parsed.isValid()

  return (
    <DemoLayout
      title="Day.js"
      description="dayjs + utc/timezone/relativeTime/customParseFormat (@/lib/vendor/dayjs)"
      slug="dayjs"
    >
      <DemoBlock
        title="입력 · 포맷"
        code={wrapPageExample(`const [input, setInput] = useState(() => dayjs().format('YYYY-MM-DD HH:mm'))
const parsed = useMemo(() => dayjs(input, 'YYYY-MM-DD HH:mm'), [input])

<div className="demo-stack">
  <input
    className="lib-demo-input"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    aria-label="날짜 입력"
  />
  <pre tabIndex={0} className="lib-demo-pre">
    {parsed.isValid()
      ? [
          'ISO: ' + parsed.toISOString(),
          'KO: ' + parsed.format('YYYY년 M월 D일 HH:mm'),
          '상대: ' + parsed.fromNow(),
          'Asia/Seoul: ' + parsed.tz('Asia/Seoul').format()
        ].join('\\n')
      : '유효하지 않은 날짜입니다.'}
  </pre>
</div>`, {
          name: 'DayjsExample',
          reactImports: ['useMemo', 'useState'],
          compImports: [],
          extraImports: ["import { dayjs } from '@/lib/vendor/dayjs'"]
        })}
      >
        <div className="demo-stack">
          <input
            className="lib-demo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-label="날짜 입력"
          />
          <pre tabIndex={0} className="lib-demo-pre">
            {valid
              ? [
                  `ISO: ${parsed.toISOString()}`,
                  `KO: ${parsed.format('YYYY년 M월 D일 HH:mm')}`,
                  `상대: ${parsed.fromNow()}`,
                  `Asia/Seoul: ${parsed.tz('Asia/Seoul').format()}`
                ].join('\n')
              : '유효하지 않은 날짜입니다. (YYYY-MM-DD HH:mm)'}
          </pre>
        </div>
      </DemoBlock>
    </DemoLayout>
  )
}
