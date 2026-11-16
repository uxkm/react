'use client'

import { TopBanner } from '@/comp/widget/TopBanner'
import { Icon } from '@/comp/ui/Icon'

/** typeB 공지는 헤더 아래에서 같은 배경 위에 표시합니다. */
export default function MainTopBanner () {
  return (
    <TopBanner
      variant="notice"
      className="main-top-banner"
      storageKey="b2b-main-typeB-notices"
      innerMaxWidth="100%"
      height={44}
      items={[{
        id: 'hr-trends-2027',
        href: '/b2b/insight/on/list',
        content: <span className="main-top-banner_message"><span className="main-top-banner_badge">NEW</span><span className="main-top-banner_text">데이터로 읽는 2027트렌드 - HR이 주목해야 할 변화와 과제</span><Icon name="arrow-right" size={16} /></span>
      }]}
    />
  )
}
