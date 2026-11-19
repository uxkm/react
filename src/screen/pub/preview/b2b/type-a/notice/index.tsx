'use client'

import { Page } from '@/comp'
import { TopBanner } from '@/comp/widget/TopBanner'
import { mainTypeANoticeProps } from '@/widgets/b2b/main/MainTopBanner'

export const pageTitle = '상단 공지'
export const meta = { banner: false, header: false, footer: false, floating: false }

export default function TypeANoticePreview () {
  return (
    <>
      <Page page="type-a-notice" title={pageTitle} className="project-content widget-preview" />
      <h1 className="visually-hidden">{pageTitle}</h1>
      <TopBanner {...mainTypeANoticeProps} storageKey="preview-b2b-type-a-notices" />
    </>
  )
}
