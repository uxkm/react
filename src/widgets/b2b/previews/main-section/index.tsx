'use client'

import { Suspense } from 'react' // Suspense
import { useSearchParams } from 'next/navigation' // 검색 파라미터 훅
import { Page } from '@/comp' // comp
import MainHero from '@/screen/b2b/main/sections/MainHero' // Main Hero 컴포넌트
import MainCardSection from '@/screen/b2b/main/sections/MainCardSection' // Main Card Section 컴포넌트
import MainInsightSection from '@/screen/b2b/main/sections/MainInsightSection' // Main Insight Section 컴포넌트
import MainCaseSection from '@/screen/b2b/main/sections/MainCaseSection' // Main Case Section 컴포넌트
import MainCalloutSection from '@/screen/b2b/main/sections/MainCalloutSection' // Main Callout Section 컴포넌트
import MainNewsletterCalloutCard from '@/widgets/b2b/main/MainNewsletterCalloutCard' // Main Newsletter Callout Card 컴포넌트
import Card from '@/modules/b2b/cards/Card' // B2B 카드 공통 입구

export const pageTitle = '메인 섹션 프리뷰'
export const meta = { banner: false, header: false, footer: false, floating: false }

function SearchPreview () {
  return <p role="status">통합검색 위젯은 작업 예정입니다.</p>
}

/** 동일한 썸네일을 image prop과 card.image로 각각 전달하는 사용 예시. */
function CoursePreview () {
  return (
    <section className="main-section-preview_courses" aria-labelledby="course-preview-title">
      <h1 id="course-preview-title">교육과정 카드 프리뷰</h1>
      <div className="main-section-preview_course-grid">
        <Card
          type="course"
          card={{
            id: 'python-intro',
            title: '파이썬 입문',
            format: '대면',
            href: '#course-preview-title'
          }}
          image="/images/@dummy/course-python.svg"
          priority
        />
        <Card
          type="course"
          card={{
            id: 'python-practice',
            title: '파이썬 입문부터 데이터 분석 실습까지, 업무에 바로 활용하는 파이썬 프로그래밍 과정',
            format: '온라인',
            href: '#course-preview-title',
            image: '/images/@dummy/course-python.svg'
          }}
          priority
        />
      </div>
    </section>
  )
}

const sections = {
  hero: { title: '메인 타이틀', Component: MainHero },
  search: { title: '통합검색 위젯', Component: SearchPreview },
  cards: { title: '첫 번째 섹션 · 추천 및 상담', Component: MainCardSection },
  insights: { title: '두 번째 섹션 · 멀캠ON', Component: MainInsightSection },
  cases: { title: '세 번째 섹션 · 고객사례', Component: MainCaseSection },
  callouts: { title: '네 번째 섹션 · 상담 및 구독', Component: MainCalloutSection },
  newsletter: { title: '뉴스레터 구독 카드', Component: MainNewsletterCalloutCard },
  courses: { title: '교육과정 카드 프리뷰', Component: CoursePreview }
}

function MainSectionPreview () {
  const params = useSearchParams()
  const requested = params.get('section') ?? 'cards'
  const key = Object.hasOwn(sections, requested) ? requested as keyof typeof sections : 'cards'
  const { title, Component } = sections[key]

  return (
    <>
      <Page page={`main-section-${key}`} title={title} className="p-content" />
      {key !== 'hero' && key !== 'courses' && <h1 className="visually-hidden">{title}</h1>}
      <div className="main main-section-preview">
        {key === 'newsletter' ? (
          <div className="main-section-preview_card">
            <Component />
          </div>
        ) : <Component />}
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
