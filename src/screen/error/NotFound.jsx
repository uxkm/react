'use client'

import { Link } from '@/lib/router' // 클라이언트 링크
import { Page, PageLayoutVisibility } from '@/comp' // Page · 레이아웃 표시 제어

/**
 * 404 — 헤더·푸터 없이 본문만.
 */
export const meta = {
  header: false,
  footer: false
}

/** 404 화면. 레지스트리 밖이라 PageLayoutVisibility 에 meta 를 직접 넘긴다 */
export default function NotFoundView () {
  return (
    <>
      <Page page="error" title="404" />
      <PageLayoutVisibility meta={meta} />

      <div className="page-container error-status">
        <p className="error-status_code">404</p>
        <h1 className="error-status_title">페이지를 찾을 수 없습니다</h1>
        <p className="error-status_desc">
          요청한 주소가 없거나 이동되었습니다. URL을 확인하거나 메인으로 이동해 주세요.
        </p>
        <div className="error-status_actions">
          <Link className="error-status_btn error-status_btn_primary" to="/">
            메인으로 가기
          </Link>
        </div>
      </div>
    </>
  )
}
