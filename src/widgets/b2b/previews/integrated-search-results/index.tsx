'use client'

import { Page } from '@/comp' // comp
import ComingSoon from '@/widgets/b2b/common/ComingSoon' // Coming Soon 컴포넌트

export const pageTitle = "통합검색 결과"

/** 미작업 화면 — ComingSoon. 시안 반영 시 본문을 교체한다. */
export default function B2bCommonIntegratedSearchResultsPage () {
  return (
    <>
      <Page page="common-integrated-search-results" title={pageTitle}  className="p-content" />
      <div className="page-container">
        <h1 className="visually-hidden">{pageTitle}</h1>
        <ComingSoon />

      </div>
    </>
  )
}
