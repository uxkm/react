'use client'

import { Page, PageLoading } from '@/comp'
import Footer from '@/widgets/b2b/common/Footer'
import { resolveSkeletonMode } from '@/config/skeleton'
import FooterSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "Footer"
export const meta = { banner: false, header: false, footer: false, floating: false }

/** 공통 레이아웃 없이 푸터 위젯만 표시합니다. */
export default function B2bCommonFooterPage () {
  const skeletonId = 'b2b/common/footer'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="common-footer" title={pageTitle} className="project-content widget-preview" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <FooterSkeleton /> : undefined}
        className="footer-preview"
      >
        <Footer />

      </PageLoading>
    </>
  )
}
