'use client'

import { useState } from 'react'
import { Alert, Button, Drawer, Modal, Popover, Snackbar, Tooltip } from '@/comp'

const COMPONENTS = { Alert, Snackbar, Drawer, Popover, Tooltip, Modal }

/** 예시를 새로 마운트해 초기 열림과 자동 닫힘을 반복 확인한다. */
export function TimedOverlayDemo ({ component, placement }) {
  const [attempt, setAttempt] = useState(0)
  const [closed, setClosed] = useState(false)
  const Component = COMPONENTS[component]
  const content = `${component}: 열린 후 5초가 지나면 닫힙니다.`
  const props = component === 'Tooltip'
    ? { content, trigger: '도움말 대상' }
    : component === 'Popover'
      ? { content, trigger: '팝오버 대상', closeOnOutsideClick: false }
      : component === 'Snackbar'
        ? { message: content, closable: true }
        : component === 'Alert'
          ? { children: content, title: component, closable: true }
          : { children: content, title: component }

  return (
    <div className="demo-stack" data-timed-overlay-demo={component}>
      <Button
        label="자동 열림 예시 실행"
        onClick={() => {
          setClosed(false)
          setAttempt((previous) => previous + 1)
        }}
      />
      <span role="status" data-timed-overlay-status>{attempt === 0 ? '실행 버튼을 누르면 예시를 마운트합니다.' : closed ? '닫힘' : '열림'}</span>
      {attempt > 0 && (
        <Component
          key={attempt}
          {...props}
          {...(component === 'Drawer' ? { placement } : {})}
          openOnLoad
          autoCloseDelay={5000}
          onOpenChange={(next) => setClosed(!next)}
        />
      )}
    </div>
  )
}
