'use client'

/**
 * B2B 미작업 화면 공통 안내.
 * 아이콘 + "준비중입니다." 를 본문 중앙에 표시한다.
 */
import { Icon } from '@/comp' // Icon

export interface ComingSoonProps {
  /** 안내 문구. 기본: 준비중입니다. */
  message?: string
}

/** 본문 최소 높이를 확보한 준비중 섹션 */
export default function ComingSoon ({ message = '준비중입니다.' }: ComingSoonProps) {
  return (
    <section className="coming-soon" aria-label={message}>
      <Icon name="clock" size={48} color="muted" className="coming-soon_icon" />
      <p className="coming-soon_text">{message}</p>
    </section>
  )
}
