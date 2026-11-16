'use client'

import { Link } from '@/lib/router'
import { BackTop } from '@/comp/ui/BackTop'
import { Icon } from '@/comp/ui/Icon'

/** 공통 플로팅 슬롯 안에서 사용하는 B2B 서비스 바로가기. */
export default function QuickMenuTypeA () {
  return (
    <nav className="quick-menu quick-menu_typeA" aria-label="빠른 서비스 메뉴">
      <Link className="quick-menu_link" to="/b2b/contents/mandatory/estimate">
        <span className="quick-menu_icon" aria-hidden="true">
          <Icon name="receipt" size={32} />
        </span>
        <span className="quick-menu_label">법정필수 간편견적</span>
      </Link>
      <Link className="quick-menu_link" to="/b2b/service/diagnosis">
        <span className="quick-menu_icon" aria-hidden="true">
          <Icon name="clipboard-check" size={32} />
        </span>
        <span className="quick-menu_label">진단&amp;맞춤검색</span>
      </Link>
      <Link className="quick-menu_link" to="/b2b/insight/resources/list">
        <span className="quick-menu_icon" aria-hidden="true">
          <Icon name="cloud-download" size={32} />
        </span>
        <span className="quick-menu_label">제안서 다운로드</span>
      </Link>
      <BackTop visible variant="ghost" label="맨 위로 이동" className="quick-menu_top">
        <Icon name="chevron-up" size={24} />
        <span aria-hidden="true">TOP</span>
      </BackTop>
    </nav>
  )
}
