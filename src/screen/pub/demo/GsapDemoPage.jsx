'use client'

import { useEffect, useRef } from 'react' // React
import gsap from 'gsap' // gsap
import { DemoLayout } from '@/screen/pub/layout/DemoLayout' // Demo Layout 컴포넌트
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock' // Demo Block 컴포넌트
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode' // wrap Page Example

/** gsap 트윈 데모 */
export default function GsapDemoPage () {
  const boxRef = useRef(null)
  const tweenRef = useRef(null)

  useEffect(() => {
    const el = boxRef.current
    if (!el) return undefined

    tweenRef.current = gsap.to(el, {
      x: 160,
      rotation: 360,
      scale: 1.15,
      duration: 1.4,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    })

    return () => {
      tweenRef.current?.kill()
      gsap.set(el, { clearProps: 'all' })
    }
  }, [])

  const replay = () => {
    tweenRef.current?.restart()
  }

  return (
    <DemoLayout
      title="GSAP"
      description="gsap — 트윈 / yoyo 반복 애니메이션"
      slug="gsap"
    >
      <DemoBlock
        title="박스 트윈"
        code={wrapPageExample(`const boxRef = useRef(null)
const tweenRef = useRef(null)

useEffect(() => {
  const el = boxRef.current
  if (!el) return undefined

  tweenRef.current = gsap.to(el, {
    x: 160,
    rotation: 360,
    scale: 1.15,
    duration: 1.4,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1
  })

  return () => {
    tweenRef.current?.kill()
    gsap.set(el, { clearProps: 'all' })
  }
}, [])

<div className="demo-stack">
  <div ref={boxRef} className="lib-demo-box">GSAP</div>
  <button type="button" onClick={() => tweenRef.current?.restart()}>다시 시작</button>
</div>`, {
          name: 'GsapExample',
          reactImports: ['useEffect', 'useRef'],
          compImports: [],
          extraImports: ["import gsap from 'gsap'"]
        })}
      >
        <div className="demo-stack">
          <div style={{ height: 140, display: 'flex', alignItems: 'center' }}>
            <div ref={boxRef} className="lib-demo-box">GSAP</div>
          </div>
          <button type="button" onClick={replay} style={{ width: 'fit-content', padding: '8px 12px', cursor: 'pointer' }}>
            다시 시작
          </button>
        </div>
      </DemoBlock>
    </DemoLayout>
  )
}
