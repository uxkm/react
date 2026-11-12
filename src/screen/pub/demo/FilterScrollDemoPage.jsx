'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { DemoLayout } from '@/screen/pub/layout/DemoLayout'
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock'
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode'
import '@/styles/pub.scss'

/** 번호를 두 자리로. 1 → 01 */
function pad (n) {
  const s = String(n)
  return s.length < 2 ? '0' + s : s
}

/**
 * 필터 가로 스크롤 데모.
 * 하위 칩이 많을 때 가로 스크롤이 생기는지 확인한다.
 */
export default function FilterScrollDemoPage () {
  const [chipCount, setChipCount] = useState(40)
  const [metrics, setMetrics] = useState({
    scrollWidth: 0,
    clientWidth: 0,
    canScrollX: false
  })
  const subsRef = useRef(null)

  const measure = useCallback(() => {
    const el = subsRef.current
    if (!el) return
    const scrollWidth = el.scrollWidth
    const clientWidth = el.clientWidth
    setMetrics({
      scrollWidth,
      clientWidth,
      canScrollX: scrollWidth > clientWidth + 1
    })
  }, [])

  useEffect(() => {
    measure()
  }, [chipCount, measure])

  useEffect(() => {
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  return (
    <DemoLayout
      title="Filter Scroll"
      description="하위 칩이 많을 때 .wbs-filter-subs 에 가로 스크롤이 생기는지 확인합니다."
      slug="filter-scroll"
    >
      <div className="wbs filter-scroll-demo">
        <DemoBlock
          title="필터 하위목록 가로 스크롤"
          code={wrapPageExample(`const [chipCount, setChipCount] = useState(40)
const subsRef = useRef(null)

const measure = useCallback(() => {
  const el = subsRef.current
  if (!el) return
  console.log(el.scrollWidth, el.clientWidth, el.scrollWidth > el.clientWidth + 1)
}, [])

useEffect(() => {
  measure()
}, [chipCount, measure])

useEffect(() => {
  window.addEventListener('resize', measure)
  return () => window.removeEventListener('resize', measure)
}, [measure])

<div className="wbs filter-scroll-demo">
  <div className="wbs-filter-bar">
    <button type="button" className="wbs-filter-btn is-active" aria-label="필터, 로그인">
      <span className="wbs-filter-btn__label">로그인</span>
      <span className="wbs-filter-btn__icon" aria-hidden="true">▾</span>
    </button>
    <div className="wbs-filter-selected">
      <span className="wbs-filter-selected__sep" aria-hidden="true" />
      <ul ref={subsRef} className="wbs-filter-subs" aria-label="선택한 화면명 하위 목록">
        {Array.from({ length: chipCount }, (_, i) => i + 1).map((n) => (
          <li key={'chip-' + n}>
            <span className="wbs-filter-sub is-static">로그인 화면 {n}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
  <div className="filter-scroll-demo__actions">
    <button type="button" className="wbs-btn" onClick={() => setChipCount(5)}>칩 5개</button>
    <button type="button" className="wbs-btn" onClick={() => setChipCount(40)}>칩 40개</button>
    <button type="button" className="wbs-btn" onClick={measure}>다시 측정</button>
  </div>
</div>`, {
            name: 'FilterScrollExample',
            reactImports: ['useCallback', 'useEffect', 'useRef', 'useState'],
            compImports: [],
            extraImports: ["import '@/styles/pub.scss'"]
          })}
        >
          <div className="wbs-filter-bar">
            <button
              type="button"
              className="wbs-filter-btn is-active"
              aria-label="필터, 로그인"
            >
              <span className="wbs-filter-btn__label">로그인</span>
              <span className="wbs-filter-btn__icon" aria-hidden="true">▾</span>
            </button>
            <div className="wbs-filter-selected">
              <span className="wbs-filter-selected__sep" aria-hidden="true" />
              <ul
                ref={subsRef}
                className="wbs-filter-subs"
                aria-label="선택한 화면명 하위 목록"
              >
                {Array.from({ length: chipCount }, (_, i) => i + 1).map((n) => (
                  <li key={'chip-' + n}>
                    <span className="wbs-filter-sub is-static">로그인 화면 {pad(n)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <dl className="filter-scroll-demo__meta">
            <div>
              <dt>칩 개수</dt>
              <dd>{chipCount}</dd>
            </div>
            <div>
              <dt>scrollWidth</dt>
              <dd>{metrics.scrollWidth}</dd>
            </div>
            <div>
              <dt>clientWidth</dt>
              <dd>{metrics.clientWidth}</dd>
            </div>
            <div>
              <dt>가로 스크롤</dt>
              <dd className={metrics.canScrollX ? 'is-ok' : 'is-fail'}>
                {metrics.canScrollX ? '있음 (OK)' : '없음 (FAIL)'}
              </dd>
            </div>
          </dl>

          <div className="filter-scroll-demo__actions">
            <button type="button" className="wbs-btn" onClick={() => setChipCount(5)}>칩 5개</button>
            <button type="button" className="wbs-btn" onClick={() => setChipCount(20)}>칩 20개</button>
            <button type="button" className="wbs-btn" onClick={() => setChipCount(40)}>칩 40개</button>
            <button type="button" className="wbs-btn" onClick={measure}>다시 측정</button>
          </div>
        </DemoBlock>
      </div>
    </DemoLayout>
  )
}
