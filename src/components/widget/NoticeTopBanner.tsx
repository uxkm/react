'use client'

import { useEffect, useId, useState } from 'react'
import type { TopBannerProps } from './TopBanner'
import { Icon } from '@/comp/ui/Icon'
import { useDailyDismissal } from '@/hooks/interaction/useDailyDismissal'
import { useHydrated } from '@/hooks/react/useHydrated'
import { hasNodes } from '@/utils/react'
import { classNames } from '@/utils/style/classNames'

/** 텍스트 공지 전용. 링크 포커스를 유지한 채 키보드로 공지를 바꾼다. */
export function NoticeTopBanner ({
  items, children, width = '100%', innerMaxWidth = 1200, height = 44,
  contentAlign = 'left', autoplay = true, interval = 5000,
  storageKey = 'app-notice-banner', closable = true, ariaLabel = '상단 공지',
  onClose, className, style,
  onFocusCapture, onBlurCapture, onKeyDown, ...rest
}: Omit<TopBannerProps, 'variant' | 'effect' | 'showTodayOption'>) {
  const hydrated = useHydrated()
  const { isHidden, dismiss } = useDailyDismissal(storageKey)
  const instructionsId = useId()
  const [position, setPosition] = useState({ index: 0, previous: -1 })
  const index = position.index
  const [focused, setFocused] = useState(false)
  const [paused, setPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(true)
  const banners = (items ?? [{ id: 'single', content: children }]).filter((item) => hasNodes(item.content))
  const count = banners.length
  const multiple = count > 1
  const activeIndex = count ? index % count : 0
  const active = banners[activeIndex]

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!hydrated || isHidden || !multiple || !autoplay || focused || paused || reduceMotion) return
    const timer = window.setInterval(() => setPosition((current) => ({ index: (current.index + 1) % count, previous: current.index % count })), Math.max(1000, interval))
    return () => window.clearInterval(timer)
  }, [hydrated, isHidden, multiple, autoplay, focused, paused, reduceMotion, count, interval])

  if (!hydrated || isHidden || !active) return null
  const select = (next: number) => setPosition({ index: next, previous: -1 })
  const content = <>
    {position.previous >= 0 && banners[position.previous] && <span key={`previous-${index}`} className="top-banner_notice-previous" aria-hidden="true">{banners[position.previous].content}</span>}
    <span key={active.id} className="top-banner_notice-text">{active.content}</span>
  </>
  const description = multiple ? instructionsId : undefined

  return (
    <aside
      {...rest}
      className={classNames('top-banner', 'top-banner_notice', className)}
      aria-label={ariaLabel}
      data-top-banner=""
      data-count={count}
      data-index={activeIndex}
      data-effect={multiple ? 'vertical' : undefined}
      data-content-align={contentAlign}
      style={{ width, ['--top-banner-height' as string]: typeof height === 'number' ? `${height}px` : height, ...style }}
      onFocusCapture={(event) => { setFocused(true); onFocusCapture?.(event) }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false)
        onBlurCapture?.(event)
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event)
        if (event.defaultPrevented || !multiple || !(event.target instanceof HTMLElement) || !event.target.closest('.top-banner_content')) return
        if (['ArrowUp', 'ArrowDown', 'Home', 'End', ' '].includes(event.key)) event.preventDefault()
        if (event.key === 'ArrowUp') select((activeIndex + count - 1) % count)
        if (event.key === 'ArrowDown') select((activeIndex + 1) % count)
        if (event.key === 'Home') select(0)
        if (event.key === 'End') select(count - 1)
        if (event.key === ' ') setPaused((current) => !current)
      }}
    >
      <div className="top-banner_inner" style={{ maxWidth: innerMaxWidth }}>
        <div className="top-banner_body">
          {active.href
            ? <a className="top-banner_content" href={active.href} target={active.target} rel={active.target === '_blank' ? 'noopener noreferrer' : undefined} title={active.target === '_blank' ? '새 창 열림' : undefined} aria-describedby={description} aria-keyshortcuts={multiple ? 'ArrowUp ArrowDown Home End Space' : undefined}>{content}</a>
            : <div className="top-banner_content" tabIndex={multiple ? 0 : undefined} aria-describedby={description}>{content}</div>}
          {multiple && <span id={instructionsId} className="top-banner_notice-help">위·아래 방향키로 이전·다음 공지, Home·End로 처음·마지막 공지를 선택합니다. Space로 자동 롤링을 정지하거나 재생합니다. 링크는 Enter로 이동합니다. {activeIndex + 1}/{count}, {paused ? '자동 롤링 정지됨' : '포커스 중 자동 롤링 일시 정지'}.</span>}
        </div>
        {closable && <button type="button" className="top-banner_close" aria-label="상단 배너 닫기" onClick={() => { dismiss(false); onClose?.('close') }}><Icon name="close" /></button>}
      </div>
    </aside>
  )
}
