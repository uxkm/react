'use client'

import { Suspense } from 'react' // Suspense
import { useSearchParams } from 'next/navigation' // 검색 파라미터 훅
import { Page, PageLoading } from '@/comp' // comp
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import MainHero from '@/screen/b2b/main/sections/MainHero' // Main Hero 컴포넌트
import MainCardSection from '@/screen/b2b/main/sections/MainCardSection' // Main Card Section 컴포넌트
import MainInsightSection from '@/screen/b2b/main/sections/MainInsightSection' // Main Insight Section 컴포넌트
import MainCaseSection from '@/screen/b2b/main/sections/MainCaseSection' // Main Case Section 컴포넌트
import MainCalloutSection from '@/screen/b2b/main/sections/MainCalloutSection' // Main Callout Section 컴포넌트
import MainNewsletterCalloutCard from '@/widgets/b2b/main/MainNewsletterCalloutCard' // Main Newsletter Callout Card 컴포넌트
import IndexSkeleton from './skeleton/indexSkeleton' // Index Skeleton 컴포넌트

export const pageTitle = '메인 섹션 프리뷰'
export const meta = { banner: false, header: false, footer: false, floating: false }

function SearchPreview () {
  return <p role="status">통합검색 위젯은 작업 예정입니다.</p>
}

const sections = {
  hero: { title: '메인 타이틀', Component: MainHero },
  search: { title: '통합검색 위젯', Component: SearchPreview },
  cards: { title: '첫 번째 섹션 · 추천 및 상담', Component: MainCardSection },
  insights: { title: '두 번째 섹션 · 멀캠ON', Component: MainInsightSection },
  cases: { title: '세 번째 섹션 · 고객사례', Component: MainCaseSection },
  callouts: { title: '네 번째 섹션 · 상담 및 구독', Component: MainCalloutSection },
  newsletter: { title: '뉴스레터 구독 카드', Component: MainNewsletterCalloutCard }
}

function MainSectionPreview () {
  const params = useSearchParams()
  const requested = params.get('section') ?? 'cards'
  const key = Object.hasOwn(sections, requested) ? requested as keyof typeof sections : 'cards'
  const { title, Component } = sections[key]
  const skeletonId = 'b2b/common/main-section'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page={`main-section-${key}`} title={title} className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IndexSkeleton /> : undefined}
        className="main main-section-preview"
      >
        {key === 'newsletter' ? (
          <div className="main-section-preview_card">
            <Component />
          </div>
        ) : <Component />}
      </PageLoading>
    </>
  )
}

/** 메인의 실제 섹션을 재사용하며 선택한 영역만 표시합니다. */
export default function MainSectionPreviewPage () {
  return (
    <Suspense fallback={null}>
      <MainSectionPreview />
    </Suspense>
  )
}
