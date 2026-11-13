'use client'

import type { ReactNode } from 'react'
import { Carousel, CarouselSlide } from '@/comp/ui/Carousel'
import MainHrTrendCard from '@/widgets/b2b/main/MainHrTrendCard'
import MainAxInsightCard from '@/widgets/b2b/main/MainAxInsightCard'
import MainLeadershipInsightCard from '@/widgets/b2b/main/MainLeadershipInsightCard'

interface MainInsightSectionProps {
  readonly children?: ReactNode
}

/** 섹션은 제목과 3열 캐러셀 배치만 담당합니다. 자식으로 슬라이드를 교체·추가합니다. */
export default function MainInsightSection ({ children }: Readonly<MainInsightSectionProps>) {
  return (
    <section id="on" className="main-insights" aria-labelledby="main-insights-title">
      <h2 id="main-insights-title">
        <span className="main-insights_headline">
          <span className="main-insights_brand">
            멀캠{' '}
            <span>⏻N</span>
          </span>
          <span>으로 HR 인사이트 ON!</span>
        </span>
        <span>변화를 읽고 조직의 미래를 준비하세요</span>
      </h2>
      <Carousel
        ariaLabel="멀캠ON HR 인사이트"
        slidesPerView={3}
        spaceBetween={28}
        pagination={false}
        navigation
      >
        {children ?? [
          <CarouselSlide key="hr-trend">
            <MainHrTrendCard />
          </CarouselSlide>,
          <CarouselSlide key="ax-mind">
            <MainAxInsightCard />
          </CarouselSlide>,
          <CarouselSlide key="leadership-ai">
            <MainLeadershipInsightCard />
          </CarouselSlide>
        ]}
      </Carousel>
    </section>
  )
}
