'use client'

import { useState } from 'react'
import { Alert, Button, Drawer, Modal, Popover, Snackbar, Tooltip } from '@/comp'

const COMPONENTS = { Alert, Snackbar, Drawer, Popover, Tooltip, Modal }

/** 페이지 진입 시 열리며 자동 닫힘 시간을 지정하지 않는 예시. */
export function LoadOpenOverlayDemo ({ component, backdrop = true, placement }) {
  const [attempt, setAttempt] = useState(0)
  const Component = COMPONENTS[component]
  const content = backdrop
    ? '로드 시 열립니다. 자동 닫힘 시간은 설정하지 않았습니다.'
    : '배경 dim 없이 표시합니다. 닫기 버튼으로 닫을 수 있습니다.'
  const props = component === 'Tooltip'
    ? { content, trigger: '도움말 대상' }
    : component === 'Popover'
      ? { content, trigger: '팝오버 대상' }
      : component === 'Snackbar'
        ? { message: content, closable: true }
        : component === 'Alert'
          ? { children: content, title: '안내', closable: true }
          : { children: content, title: '안내', staticDemo: true, backdrop }
  const frameClass = component === 'Modal' || component === 'Drawer'
    ? `${component.toLowerCase()}_demo-frame`
    : component === 'Tooltip' || component === 'Popover'
      ? `${component.toLowerCase()}_demo-stage`
      : undefined

  return (
    <div className="demo-stack" data-load-open-overlay-demo={component}>
      <Button label="예시 다시 불러오기" onClick={() => setAttempt((previous) => previous + 1)} />
      <div className={frameClass}>
        <Component key={attempt} {...props} {...(component === 'Drawer' ? { placement } : {})} openOnLoad />
      </div>
    </div>
  )
}
