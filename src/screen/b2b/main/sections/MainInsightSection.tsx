'use client'

import type { ReactNode } from 'react'
import { Carousel, CarouselSlide } from '@/comp/ui/Carousel'
import Card from '@/comp/ui/Card'
import { useMediaQuery } from '@/hooks/layout/useMediaQuery'
import { mainInsightContent } from '@/widgets/b2b/main/mainInsightContent'
import MainInsightSectionTypeA from './MainInsightSectionTypeA'

interface MainInsightSectionProps {
  readonly children?: ReactNode
  readonly designType?: 'typeA' | 'typeB'
}

/** typeB는 PC 3개 묶음, 태블릿·모바일 1개씩 이동하는 비순환 인사이트 캐러셀입니다. */
export default function MainInsightSection ({ children, designType = 'typeB' }: Readonly<MainInsightSectionProps>) {
  const compact = useMediaQuery('(max-width: 1099px)')
  if (designType === 'typeA') return <MainInsightSectionTypeA>{children}</MainInsightSectionTypeA>

  return (
    <section id="on" className="main-insights main-insights_typeB" aria-labelledby="main-insights-title">
      <h2 id="main-insights-title">
        <span>멀캠ON으로 HR 인사이트 ON!</span>
        <span>변화를 읽고 조직의 미래를<br className="main-insights_mobile-break" />{' '}준비하세요</span>
      </h2>
      <Carousel
        ariaLabel="멀캠ON HR 인사이트"
        slidesPerView={compact ? 1.12 : 3}
        slidesPerGroup={compact ? 1 : 3}
        spaceBetween={compact ? 16 : 30}
        pagination={compact}
        dotsOutside={compact}
        navigation={!compact}
        loop={false}
      >
        {children ?? mainInsightContent.map(card => (
          <CarouselSlide key={card.id} data-insight={card.id}>
            <Card type="content" card={card} shadow={false} />
          </CarouselSlide>
        ))}
      </Carousel>
    </section>
  )
}
