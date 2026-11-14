'use client'

import { Link } from '@/lib/router'
import { BackTop } from '@/comp/ui/BackTop'
import { Icon } from '@/comp/ui/Icon'

/** 공통 플로팅 슬롯 안에서 사용하는 B2B 서비스 바로가기. */
export default function QuickMenu () {
  return (
    <nav className="quick-menu" aria-label="빠른 서비스 메뉴">
      <Link className="quick-menu_link" to="/b2b/contents/mandatory/estimate">
        <span className="quick-menu_icon" aria-hidden="true">
          <Icon size={32}>
            <path d="M8 16V3l1.5 1L11 3l1.5 1L14 3l1.5 1L17 3l1.5 1L20 3v15a3 3 0 0 1-6 0v-2H3v2a3 3 0 0 0 3 3h11" />
          </Icon>
        </span>
        <span className="quick-menu_label">법정필수 간편견적</span>
      </Link>
      <Link className="quick-menu_link" to="/b2b/common/education-diagnosis">
        <span className="quick-menu_icon" aria-hidden="true">
          <Icon size={32}>
            <path d="M13 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-6M8 11l4 4L21 5" />
          </Icon>
        </span>
        <span className="quick-menu_label">진단&amp;맞춤검색</span>
      </Link>
      <Link className="quick-menu_link" to="/b2b/insight/resources/list">
        <span className="quick-menu_icon" aria-hidden="true">
          <Icon size={32}>
            <path d="M6 19a4 4 0 0 1-1-7.9A6 6 0 0 1 16.7 9a5 5 0 0 1 1.3 10H6Z" />
            <path d="M12 10v6m-2-2 2 2 2-2" />
          </Icon>
        </span>
        <span className="quick-menu_label">제안서 다운로드</span>
      </Link>
      <BackTop visible variant="ghost" label="맨 위로 이동" className="quick-menu_top">
        <Icon size={24}><path d="m4 15 8-7 8 7" /></Icon>
        <span aria-hidden="true">TOP</span>
      </BackTop>
    </nav>
  )
}
