'use client'

import { Carousel, CarouselSlide } from '@/comp/ui/Carousel' // UI 컴포넌트 · Carousel 컴포넌트
import { useMediaQuery } from '@/hooks/useMediaQuery' // Media Query 훅
import MainFinanceTestimonialCard from '@/widgets/b2b/main/MainFinanceTestimonialCard' // Main Finance Testimonial Card 컴포넌트
import MainLeadershipTestimonialCard from '@/widgets/b2b/main/MainLeadershipTestimonialCard' // Main Leadership Testimonial Card 컴포넌트
import MainManufacturingTestimonialCard from '@/widgets/b2b/main/MainManufacturingTestimonialCard' // Main Manufacturing Testimonial Card 컴포넌트

const coverflowEffect = {
  rotate: 0,
  stretch: 0,
  depth: 0,
  scale: 0.84,
  modifier: 1,
  slideShadows: false
}

/** 세 번째 본문 섹션의 고객사례 카드 배치. */
export default function MainCaseSection () {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  return (
    <section id="cases" className="main-cases" aria-labelledby="main-cases-title">
      <h2 id="main-cases-title">
        1.6만개의 기업이
        <br />
        멀티캠퍼스와 함께 성장하고 있습니다
      </h2>
      {/* 전체 너비 고객사례 영역. 가운데 카드를 강조하고 좌우 카드는 축소합니다. */}
      <Carousel
        ariaLabel="고객사례"
        effect="coverflow"
        coverflowSides={1}
        coverflowStyle="rise"
        coverflowEffect={coverflowEffect}
        initialSlide={1}
        speed={reducedMotion ? 0 : 550}
        spaceBetween={32}
        loop
        pagination={false}
        navigation
      >
        {/* 리더십·금융·제조 고객사례 카드 영역 */}
        <CarouselSlide>
          <MainLeadershipTestimonialCard />
        </CarouselSlide>
        <CarouselSlide>
          <MainFinanceTestimonialCard />
        </CarouselSlide>
        <CarouselSlide>
          <MainManufacturingTestimonialCard />
        </CarouselSlide>
        {/* 순환 동작 확인용 반복 카드. 최종 고객사례 확보 시 개별 위젯으로 교체합니다. */}
        <CarouselSlide>
          <MainLeadershipTestimonialCard />
        </CarouselSlide>
        <CarouselSlide>
          <MainFinanceTestimonialCard />
        </CarouselSlide>
        <CarouselSlide>
          <MainManufacturingTestimonialCard />
        </CarouselSlide>
      </Carousel>
    </section>
  )
}
