'use client'

import { useEffect, useMemo, useState } from 'react'
import { chunk, debounce, uniq } from 'lodash-es'
import { DemoLayout } from '@/screen/pub/layout/DemoLayout'
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock'
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode'

/** lodash-es 데모 */
export default function LodashDemoPage () {
  const [csv, setCsv] = useState('a, b, a, c, b, d, e, f')
  const [query, setQuery] = useState('')
  const [debounced, setDebounced] = useState('')

  const items = useMemo(
    () => csv.split(',').map((s) => s.trim()).filter(Boolean),
    [csv]
  )
  const unique = useMemo(() => uniq(items), [items])
  const chunks = useMemo(() => chunk(unique, 3), [unique])

  useEffect(() => {
    const run = debounce((value) => setDebounced(value), 400)
    run(query)
    return () => run.cancel()
  }, [query])

  return (
    <DemoLayout
      title="lodash-es"
      description="lodash-es — uniq / chunk / debounce 예시"
      slug="lodash"
    >
      <DemoBlock
        title="uniq · chunk"
        code={wrapPageExample(`const [csv, setCsv] = useState('a, b, a, c, b, d, e, f')

const items = useMemo(
  () => csv.split(',').map((s) => s.trim()).filter(Boolean),
  [csv]
)
const unique = useMemo(() => uniq(items), [items])
const chunks = useMemo(() => chunk(unique, 3), [unique])

<div className="demo-stack">
  <input
    className="lib-demo-input"
    value={csv}
    onChange={(e) => setCsv(e.target.value)}
    aria-label="쉼표 구분 값"
  />
  <pre className="lib-demo-pre">
    {'uniq → ' + JSON.stringify(unique) + '\\nchunk(3) → ' + JSON.stringify(chunks)}
  </pre>
</div>`, {
          name: 'LodashChunkExample',
          reactImports: ['useMemo', 'useState'],
          compImports: [],
          extraImports: ["import { chunk, uniq } from 'lodash-es'"]
        })}
      >
        <div className="demo-stack">
          <input
            className="lib-demo-input"
            value={csv}
            onChange={(e) => setCsv(e.target.value)}
            aria-label="쉼표 구분 값"
          />
          <pre className="lib-demo-pre">
            {`uniq → ${JSON.stringify(unique)}\nchunk(3) → ${JSON.stringify(chunks)}`}
          </pre>
        </div>
      </DemoBlock>
      <DemoBlock
        title="debounce (400ms)"
        code={wrapPageExample(`const [query, setQuery] = useState('')
const [debounced, setDebounced] = useState('')

useEffect(() => {
  const run = debounce((value) => setDebounced(value), 400)
  run(query)
  return () => run.cancel()
}, [query])

<div className="demo-stack">
  <input
    className="lib-demo-input"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="입력 후 잠시 기다려 보세요"
    aria-label="디바운스 입력"
  />
  <pre className="lib-demo-pre">즉시: {query || '(비어 있음)'}{'\\n'}지연: {debounced || '(비어 있음)'}</pre>
</div>`, {
          name: 'LodashDebounceExample',
          reactImports: ['useEffect', 'useState'],
          compImports: [],
          extraImports: ["import { debounce } from 'lodash-es'"]
        })}
      >
        <div className="demo-stack">
          <input
            className="lib-demo-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="입력 후 잠시 기다려 보세요"
            aria-label="디바운스 입력"
          />
          <pre className="lib-demo-pre">즉시: {query || '(비어 있음)'}{'\n'}지연: {debounced || '(비어 있음)'}</pre>
        </div>
      </DemoBlock>
    </DemoLayout>
  )
}
