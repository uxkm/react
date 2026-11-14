'use client'

import { useId, useRef, useState } from 'react' // React
import { Button, Drawer, Modal } from '@/comp' // comp

/** 초기 초점과 서로 다른 대화상자 중첩을 키보드로 확인하는 공통 예시. */
export function OverlayAccessibilityDemo ({ component }) {
  const [open, setOpen] = useState(false)
  const [nested, setNested] = useState(false)
  const [backdrop, setBackdrop] = useState(true)
  const [showTitle, setShowTitle] = useState(true)
  const [customFocus, setCustomFocus] = useState(false)
  const input = useRef(null)
  const descriptionId = useId()
  const Component = component === 'Drawer' ? Drawer : Modal
  const Child = component === 'Drawer' ? Modal : Drawer

  return (
    <div data-overlay-accessibility-demo={component}>
      <label><input type="checkbox" checked={backdrop} onChange={(event) => setBackdrop(event.target.checked)} /> 배경 dim 표시</label>
      <label><input type="checkbox" checked={showTitle} onChange={event => setShowTitle(event.target.checked)} /> 제목 표시</label>
      <label><input type="checkbox" checked={customFocus} onChange={event => setCustomFocus(event.target.checked)} /> 초기 초점을 입력으로 지정</label>
      <Button label="접근성 예시 열기" onClick={() => setOpen(true)} />
      <Component
        open={open}
        title={showTitle ? `${component} 접근성 예시` : undefined}
        aria-label={showTitle ? undefined : `${component} 접근성 예시`}
        backdrop={backdrop}
        initialFocusRef={customFocus ? input : undefined}
        aria-describedby={descriptionId}
        onClose={() => setOpen(false)}
      >
        <div className="demo-stack">
          <p id={descriptionId}>이름을 입력하거나 추가 확인을 열어 보세요.</p>
          <label>이름 <input ref={input} type="text" /></label>
          <Button label="추가 확인 열기" onClick={() => setNested(true)} />
          <Child open={nested} aria-label="추가 확인" onClose={() => setNested(false)}>
            <p>Escape로 닫으면 이전 대화상자로 초점이 돌아갑니다.</p>
          </Child>
        </div>
      </Component>
    </div>
  )
}
