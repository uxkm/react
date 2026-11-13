'use client'

import { Page, PageLoading } from '@/comp' // comp
import Header from '@/widgets/b2b/common/Header' // Header 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import GnbSkeleton from './skeleton/indexSkeleton' // Gnb Skeleton 컴포넌트

export const pageTitle = "헤더"
export const meta = { banner: false, header: false, footer: false, floating: false }

/** 공통 레이아웃 없이 헤더 위젯만 표시합니다. */
export default function B2bCommonGnbPage () {
  const skeletonId = 'b2b/common/gnb'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="common-gnb" title={pageTitle} className="project-content widget-preview" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <GnbSkeleton /> : undefined}
        className="header-preview"
      >
        <Header />

      </PageLoading>
    </>
  )
}
