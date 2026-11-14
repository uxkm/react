'use client'

import { Page, PageLoading, useSiteTitle, usePageData } from '@/comp' // 페이지 공통
import { useScrollToHash } from '@/hooks/react/useScrollToHash' // URL 해시 스크롤
import {
  MainHero,
  MainCardSection,
  MainInsightSection,
  MainCaseSection,
  MainCalloutSection
} from './sections' // 메인 섹션
import IndexSkeleton from './skeleton/indexSkeleton' // Index Skeleton 컴포넌트

/** 메인 화면은 sections의 섹션을 호출하고, 각 섹션은 widgets의 개별 콘텐츠를 배치합니다. */
export default function B2bMainPage () {
  // 메인은 페이지명 없이 사이트명만 표시한다.
  useSiteTitle()
  // 헤더 고객사례(/b2b#cases) 등 해시로 진입 시 해당 섹션으로 스크롤
  useScrollToHash()

  /*
   * 로딩(스켈레톤) — API 없음, 이 페이지 폴더에서 호출한 모듈 기준
   *
   * 동작: 처음 loading=true → 스켈레톤 먼저 표시 → 준비되면 loading=false → 본문
   *       짧은 시간 차로 스켈레톤이 먼저 보이는 것은 정상이다.
   *
   * 1) 기본: 위에서 import 한 ./sections 등이 준비되면 loading=false
   *    const { loading } = usePageData()
   *
   * 2) 페이지 폴더에 로컬 data 가 있을 때:
   *    const { loading, data } = usePageData({
   *      load: () => import('./data').then((m) => m.default)
   *    })
   *
   * 3) 로딩 없이 바로 본문 (스켈레톤 선표시 없음):
   *    const { loading } = usePageData({ enabled: false })
   *
   * 4) 디자인 작업용 — 스켈레톤만 계속 보기:
   *    const loading = true
   *    → PageLoading 의 loading 이 항상 true 라 IndexSkeleton 만 유지된다.
   *    → 확인 끝나면 1) 또는 3) 으로 되돌린다.
   *
   * 5) PageLoading 연결:
   *    <PageLoading loading={loading} skeletonMode="manual" skeleton={<IndexSkeleton />} />
   */
  // const { loading } = usePageData() // 기본: 스켈레톤 먼저 → 모듈 준비 후 본문
  const { loading } = usePageData({ enabled: false }) // 스켈레톤 선표시 없이 바로 본문
  // const loading = true // 디자인 확인용: 스켈레톤만 계속 표시

  return (
    <>
      {/*
        AppLayout 의 <main> 에 메타를 반영 (화면에는 안 그림)
        - page="main" → <main data-page="main">
        - className="p-content" → <main class="app-layout_main p-content">
          (B2B 본문 폭: min 1440 / max 1600, styles/pages/b2b/index.scss)
        메인은 title 없이 사이트명만. (주석에 title="…" 리터럴을 쓰면
        registry 가 타이틀로 긁어가니, 예시는 title={pageTitle} 형태로만 적을 것)
        예) <Page page="main" className="p-content" />
            <Page page="contents-it" title={pageTitle} className="p-content" />
      */}
      <Page page="main" className="p-content" />
      <PageLoading
        loading={loading}
        // manual: 수동 스켈레톤(IndexSkeleton). auto 로 바꾸면 DOM 측정 자동 뼈대
        skeletonMode="manual"
        // manual 일 때 사용할 뼈대. auto 이면 생략 가능
        skeleton={<IndexSkeleton />}
        // auto 캐시 키로도 사용 (skeletonId 생략 시 className)
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
