'use client'

import { useCallback, useRef, useState, type AnchorHTMLAttributes, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react' // React
import type { Swiper as SwiperInstance } from 'swiper' // Swiper Instance 타입
import { Carousel, CarouselSlide } from '@/comp/ui/Carousel' // UI 컴포넌트 · Carousel 컴포넌트
import { Checkbox } from '@/comp/ui/Checkbox' // Checkbox 컴포넌트
import { Icon } from '@/comp/ui/Icon' // Icon 컴포넌트
import { useDailyDismissal } from '@/hooks/interaction/useDailyDismissal' // Daily Dismissal 훅
import { useHydrated } from '@/hooks/react/useHydrated' // Hydrated 훅
import { classNames } from '@/utils/style/classNames' // 조건부 className 조합
import { hasNodes } from '@/utils/react' // has Nodes

export interface TopBannerItem {
  id: string
  content: ReactNode
  href?: string
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target']
}

export interface TopBannerProps extends Omit<HTMLAttributes<HTMLElement>, 'children' | 'onClose'> {
  /** 여러 배너. 생략하면 children을 단일 배너로 사용한다. */
  items?: TopBannerItem[]
  children?: ReactNode
  /** 바깥 너비. 기본 100%, 숫자는 px. */
  width?: CSSProperties['width']
  /** 가운데 정렬할 안쪽 영역의 최대 너비. */
  innerMaxWidth?: CSSProperties['maxWidth']
  /** 콘텐츠 최소 높이. 긴 내용이나 모바일에서는 필요한 만큼 늘어난다. */
  height?: CSSProperties['minHeight']
  contentAlign?: 'left' | 'center' | 'right'
  effect?: 'slide' | 'fade'
  autoplay?: boolean
  interval?: number
  /** 캠페인별로 다르게 지정하면 하루 숨김 기록을 구분한다. */
  storageKey?: string
  showTodayOption?: boolean
  closable?: boolean
  ariaLabel?: string
  onClose?: (reason: 'close' | 'today') => void
}

/** 헤더 위 공통 배너. 1개는 정적 콘텐츠, 2개 이상만 Carousel로 전환한다. */
export function TopBanner ({
  items,
  children,
  width = '100%',
  innerMaxWidth = 1200,
  height = 80,
  contentAlign = 'center',
  effect = 'slide',
  autoplay = true,
  interval = 5000,
  storageKey = 'app-top-banner',
  showTodayOption = true,
  closable = true,
  ariaLabel = '상단 안내 배너',
  onClose,
  className,
  style,
  onMouseEnter,
  onMouseLeave,
  onFocusCapture,
  onBlurCapture,
  ...rest
}: TopBannerProps) {
  const hydrated = useHydrated()
  const { isHidden, dismiss } = useDailyDismissal(storageKey)
  const [hideToday, setHideToday] = useState(false)
  const [playing, setPlaying] = useState(true)
  const sliderRef = useRef<SwiperInstance | null>(null)
  const hovered = useRef(false)
  const focused = useRef(false)
  const onSwiper = useCallback((slider: SwiperInstance) => {
    sliderRef.current = slider
    if (hovered.current || focused.current) slider.autoplay?.pause()
  }, [])
  const banners = (items ?? [{ id: 'single', content: children }]).filter((item) => hasNodes(item.content))
  const multiple = banners.length > 1
  if (!hydrated || isHidden || !banners.length) return null

  const pauseSlider = () => {
    if (sliderRef.current && !sliderRef.current.destroyed) sliderRef.current.autoplay?.pause()
  }
  const resumeSlider = () => {
    if (!hovered.current && !focused.current && autoplay && playing && sliderRef.current && !sliderRef.current.destroyed) sliderRef.current.autoplay?.resume()
  }

  const renderBanner = (item: TopBannerItem) => item.href
    ? <a className="top-banner_content" href={item.href} target={item.target} title={item.target === '_blank' ? '새 창 열림' : undefined} rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}>{item.content}</a>
    : <div className="top-banner_content">{item.content}</div>
  return (
    <aside
      {...rest}
      className={classNames('top-banner', multiple && 'top-banner_multiple', className)}
      aria-label={ariaLabel}
      data-top-banner=""
      data-count={banners.length}
      data-effect={multiple ? effect : undefined}
      data-content-align={contentAlign}
      style={{ width, ['--top-banner-height' as string]: typeof height === 'number' ? `${height}px` : height, ...style }}
      onMouseEnter={(event) => { hovered.current = true; pauseSlider(); onMouseEnter?.(event) }}
      onMouseLeave={(event) => {
        hovered.current = false
        resumeSlider()
        onMouseLeave?.(event)
      }}
      onFocusCapture={(event) => { focused.current = true; pauseSlider(); onFocusCapture?.(event) }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          focused.current = false
          resumeSlider()
        }
        onBlurCapture?.(event)
      }}
    >
      <div className="top-banner_inner" style={{ maxWidth: innerMaxWidth }}>
        <div className="top-banner_body">
          {multiple
            ? <Carousel
                ariaLabel={ariaLabel}
                effect={effect === 'fade' ? 'fade' : undefined}
                loop
                autoplay={autoplay}
                delay={interval}
                autoplayToggle={autoplay}
                playing={autoplay && playing}
                onPlayingChange={setPlaying}
                onSwiper={onSwiper}
                pagination="fraction"
              >
                {banners.map((item) => <CarouselSlide key={item.id}>{renderBanner(item)}</CarouselSlide>)}
              </Carousel>
            : renderBanner(banners[0])}
        </div>
        {closable && <div className="top-banner_actions">
          {showTodayOption && <Checkbox label="오늘 하루 열지 않기" checked={hideToday} onChange={(event) => setHideToday(event.target.checked)} />}
          <button
            type="button"
            className="top-banner_close"
            aria-label="상단 배너 닫기"
            onClick={() => {
              const forToday = showTodayOption && hideToday
              setHideToday(false)
              hovered.current = false
              focused.current = false
              dismiss(forToday)
              onClose?.(forToday ? 'today' : 'close')
            }}
          ><Icon name="close" /></button>
        </div>}
      </div>
    </aside>
  )
}

export default TopBanner
