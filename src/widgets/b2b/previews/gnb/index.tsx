'use client'

import { Page } from '@/comp' // comp
import Header from '@/widgets/b2b/common/Header' // Header 컴포넌트

export const pageTitle = "헤더"
export const meta = { banner: false, header: false, footer: false, floating: false }

/** 공통 레이아웃 없이 헤더 위젯만 표시합니다. */
export default function B2bCommonGnbPage () {
  return (
    <>
      <Page page="common-gnb" title={pageTitle} className="project-content widget-preview" />
      <h1 className="visually-hidden">{pageTitle}</h1>
      <div className="header-preview">
        <Header />

      </div>
    </>
  )
}
