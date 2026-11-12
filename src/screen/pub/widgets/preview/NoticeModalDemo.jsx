'use client'

import { useState } from 'react'
import { Button, Checkbox, Flex, Modal } from '@/comp'
import { useDailyDismissal } from '@/hooks/useDailyDismissal'
import { useHydrated } from '@/hooks/useHydrated'

/** 공지사항 모달 예시. 하루 숨김은 공통 배너와 같은 자정 만료 로직을 사용한다. */
export function NoticeModalDemo () {
  const [open, setOpen] = useState(false)
  const [hideToday, setHideToday] = useState(false)
  const hydrated = useHydrated()
  const { isHidden, dismiss } = useDailyDismissal('guide-notice-modal-v1')
  const close = () => {
    if (hideToday) dismiss(true)
    setOpen(false)
    setHideToday(false)
  }
  return (
    <div data-notice-modal-demo="">
      <Button label="공지사항 모달 열기" disabled={!hydrated || isHidden} onClick={() => setOpen(true)} />
      {hydrated && isHidden && <p role="status">공지사항을 오늘 하루 숨겼습니다. 다음 자정 이후 다시 열 수 있습니다.</p>}
      <Modal
        open={hydrated && open && !isHidden}
        title="공지사항"
        onClose={close}
        footer={(
          <Flex align="center" justify="between" gap="sm" wrap style={{ width: '100%' }}>
            <Checkbox label="오늘 하루 보지 않기" checked={hideToday} onChange={(event) => setHideToday(event.target.checked)} />
            <Button label="닫기" onClick={close} />
          </Flex>
        )}
      >
        <h2>서비스 이용 안내</h2>
        <p>주요 공지사항을 확인해 주세요. 이 영역에 안내 문구·이미지·링크 등 공지 내용을 넣을 수 있습니다.</p>
        <p>오늘 하루 보지 않기를 선택하고 닫으면 같은 공지는 브라우저의 다음 자정까지 표시하지 않습니다.</p>
      </Modal>
    </div>
  )
}

export default NoticeModalDemo
