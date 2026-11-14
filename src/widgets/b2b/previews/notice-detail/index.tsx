'use client'

import { Page } from '@/comp' // comp
import ComingSoon from '@/widgets/b2b/common/ComingSoon' // Coming Soon 컴포넌트

export const pageTitle = "공지사항 상세"

/** 미작업 화면 — ComingSoon. 시안 반영 시 본문을 교체한다. */
export default function B2bCommonNoticeDetailPage () {
  return (
    <>
      <Page page="common-notice-detail" title={pageTitle}  className="p-content" />
      <div className="page-container">
        <h1 className="visually-hidden">{pageTitle}</h1>
        <ComingSoon />

      </div>
    </>
  )
}
