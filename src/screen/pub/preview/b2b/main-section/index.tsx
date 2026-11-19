'use client'

import { Suspense } from 'react' // Suspense
import { useSearchParams } from 'next/navigation' // 검색 파라미터 훅
import { Page } from '@/comp' // comp
import MainHero from '@/screen/b2b/main/sections/MainHero' // Main Hero 컴포넌트
import MainHeroTypeA from '@/screen/b2b/main/sections/MainHeroTypeA'
import MainCardSection from '@/screen/b2b/main/sections/MainCardSection' // Main Card Section 컴포넌트
import MainInsightSection from '@/screen/b2b/main/sections/MainInsightSection' // Main Insight Section 컴포넌트
import MainCaseSection from '@/screen/b2b/main/sections/MainCaseSection' // Main Case Section 컴포넌트
import MainCalloutSectionTypeA from '@/screen/b2b/main/sections/MainCalloutSectionTypeA' // Main Callout Section 컴포넌트
import MainNewsletterCalloutCard from '@/widgets/b2b/main/MainNewsletterCalloutCard' // Main Newsletter Callout Card 컴포넌트

export const pageTitle = '메인 섹션 프리뷰'
export const meta = { banner: false, header: false, footer: false, floating: false }

const sections = {
  hero: { title: '타이틀', Component: MainHero },
  cards: { title: '추천 및 상담', Component: MainCardSection },
  insights: { title: '멀캠ON', Component: MainInsightSection },
  cases: { title: '고객사례', Component: MainCaseSection },
  callouts: { title: '상담 및 구독', Component: MainCalloutSectionTypeA },
  newsletter: { title: '뉴스레터 구독 카드', Component: MainNewsletterCalloutCard }
}

function MainSectionPreview () {
  const params = useSearchParams()
  const requested = params.get('section') ?? 'cards'
  const key = Object.hasOwn(sections, requested) ? requested as keyof typeof sections : 'cards'
  const type = params.get('type')
  const designType = type === 'typeA' ? 'typeA' : 'typeB'
  const heroType = type === 'typeVideo' || type === 'typeB' ? type : undefined
  const { title, Component } = sections[key]
  const pageTitle = key === 'hero' && heroType === 'typeVideo' ? '메인 타이틀 (영상)' : title

  return (
    <>
      <Page page={`main-section-${key}`} title={pageTitle} className="p-content" />
      {key !== 'hero' && <h1 className="visually-hidden">{title}</h1>}
      <div className={`main main-section-preview${designType === 'typeA' ? ' main_typeA' : ''}`}>
        {key === 'newsletter' ? (
          <div className="main-section-preview_card">
            <Component />
          </div>
        ) : key === 'hero' ? (
          designType === 'typeA' ? <MainHeroTypeA /> : <MainHero type={heroType} />
        ) : <Component designType={designType} />}
      </div>
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
