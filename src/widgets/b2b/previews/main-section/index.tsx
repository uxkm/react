'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Page, PageLoading } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import MainHero from '@/screen/b2b/main/sections/MainHero'
import MainCardSection from '@/screen/b2b/main/sections/MainCardSection'
import MainInsightSection from '@/screen/b2b/main/sections/MainInsightSection'
import MainCaseSection from '@/screen/b2b/main/sections/MainCaseSection'
import MainCalloutSection from '@/screen/b2b/main/sections/MainCalloutSection'
import MainNewsletterCalloutCard from '@/widgets/b2b/main/MainNewsletterCalloutCard'
import IndexSkeleton from './skeleton/indexSkeleton'

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
