'use client'

import { TopBanner, type TopBannerProps } from '@/comp/widget/TopBanner'
import { useLayoutSlotSync } from './LayoutContext'

/** 페이지 배너를 공통 레이아웃의 헤더 위에 등록한다. 페이지 이동 시 슬롯을 정리한다. */
export function PageBanner (props: TopBannerProps) {
  useLayoutSlotSync((setSlot) => {
    setSlot('banner', <TopBanner key={props.storageKey || 'app-top-banner'} {...props} />)
  }, ['banner'])
  return null
}

export default PageBanner
