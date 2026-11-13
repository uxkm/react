import '@/styles/demo.scss' // demo 스타일
import { PageLayoutVisibility } from '@/comp/layout/PageLayoutVisibility' // Page Layout Visibility 컴포넌트

/**
 * /pub/guide · /pub/guide/:name 공통.
 * 퍼블리싱 가이드는 공통 AppFooter 숨김.
 * 좌측 메뉴·본문은 각 화면 GuideLayout → GuideMenu.
 */
export default function GuideLayoutRoute ({ children }) {
  return (
    <>
      <PageLayoutVisibility meta={{ footer: false }} />
      {children}
    </>
  )
}
