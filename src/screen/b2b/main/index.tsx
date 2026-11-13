'use client'

import { Page, PageLoading } from '@/comp' // comp
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import MainHero from './sections/MainHero' // Main Hero 컴포넌트
import MainCardSection from './sections/MainCardSection' // Main Card Section 컴포넌트
import MainInsightSection from './sections/MainInsightSection' // Main Insight Section 컴포넌트
import MainCaseSection from './sections/MainCaseSection' // Main Case Section 컴포넌트
import MainCalloutSection from './sections/MainCalloutSection' // Main Callout Section 컴포넌트
import IndexSkeleton from './skeleton/indexSkeleton' // Index Skeleton 컴포넌트

export const pageTitle = "메인"

/** 메인 화면은 sections의 섹션을 호출하고, 각 섹션은 widgets의 개별 콘텐츠를 배치합니다. */
export default function B2bMainPage () {
  const skeletonId = 'b2b/main'
  const skeletonMode = resolveSkeletonMode(skeletonId)
  return (
    <>
      <Page page="main" title={pageTitle} className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IndexSkeleton /> : undefined}
        className="main"
      >
        {/* 메인 타이틀 영역 */}
        <MainHero />
        {/* 기업교육 추천 및 상담 섹션 */}
        <MainCardSection />
        {/* 멀캠ON 인사이트 섹션 */}
        <MainInsightSection />
        {/* 고객사례 섹션 */}
        <MainCaseSection />
        {/* 교육 상담·뉴스레터 구독 섹션 */}
        <MainCalloutSection />
        {/* 다음 본문 시안 작업을 위한 기존 앵커를 유지합니다. */}
        <div id="search" hidden />
      </PageLoading>
    </>
  )
}
