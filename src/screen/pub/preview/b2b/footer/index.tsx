'use client'

import { Page } from '@/comp' // comp
import Footer from '@/widgets/b2b/common/Footer' // Footer 컴포넌트

export const pageTitle = "Footer"
export const meta = { banner: false, header: false, footer: false, floating: false }

/** 공통 레이아웃 없이 푸터 위젯만 표시합니다. */
export default function B2bCommonFooterPage () {
  return (
    <>
      <Page page="common-footer" title={pageTitle} className="project-content widget-preview" />
      <h1 className="visually-hidden">{pageTitle}</h1>
      <div className="footer-preview">
        <Footer />

      </div>
    </>
  )
}
