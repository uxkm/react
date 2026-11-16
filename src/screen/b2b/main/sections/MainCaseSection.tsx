'use client'

import { useEffect, useState } from 'react'
import { Carousel, CarouselSlide } from '@/comp/ui/Carousel'
import Card from '@/comp/ui/Card'
import type { TestimonialCardData } from '@/comp/ui/Card'
import { Icon } from '@/comp/ui/Icon'
import { Link } from '@/lib/router'
import { useMediaQuery } from '@/hooks/layout/useMediaQuery'
import { mainCustomerStories } from '@/widgets/b2b/main/mainCustomerStories'
import MainCaseSectionTypeA from './MainCaseSectionTypeA'

function MoreCasesLink ({ className }: { className: string }) {
  return (
    <Link className={`main-cases_more ${className}`} to="https://www.multicampus.com/b2b/kr/service/bpo.html" target="_blank" rel="noopener noreferrer">
      고객사례 더보기 <Icon name="arrow-right" size={18} aria-hidden />
    </Link>
  )
}

/** 카드 전체에만 초점을 두고, 스크린리더는 aria-label로 내용을 읽습니다. */
function CaseStoryCard ({ card }: { card: TestimonialCardData }) {
  const label = [card.category, card.quote.replace(/\n/g, ' '), card.author].filter(Boolean).join('. ')
  return (
    <div className="main-cases_card" tabIndex={0} role="group" aria-label={label}>
      <div aria-hidden="true">
        <Card type="testimonial" card={card} shadow={false} />
      </div>
    </div>
  )
}

/** typeB는 화면 전체 너비에서 가운데 카드를 기준으로 한 개씩 자동 순환합니다. */
export default function MainCaseSection ({ designType = 'typeB' }: { designType?: 'typeA' | 'typeB' }) {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const compact = useMediaQuery('(max-width: 1099px)')
  const [playing, setPlaying] = useState(() => !reducedMotion)
  useEffect(() => {
    setPlaying(!reducedMotion)
  }, [reducedMotion])
  if (designType === 'typeA') return <MainCaseSectionTypeA />

  return (
    <section id="cases" className="main-cases main-cases_typeB" aria-labelledby="main-cases-title">
      <div className="main-cases_heading">
        <h2 id="main-cases-title">
          <span>1.6만개의 기업이</span>
          <span>멀티캠퍼스와 함께<br className="main-cases_mobile-break" />{' '}성장하고 있습니다</span>
        </h2>
        <MoreCasesLink className="main-cases_more-desktop" />
      </div>
      <Carousel
        ariaLabel="고객사례"
        slidesPerView="auto"
        slidesPerGroup={1}
        centered
        initialSlide={2}
        speed={reducedMotion ? 0 : 500}
        spaceBetween={compact ? 20 : 24}
        loop
        autoplay={!reducedMotion}
        delay={5000}
        playing={playing}
        onPlayingChange={setPlaying}
        pagination={false}
        navigation={false}
        onBlurCapture={event => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null) && !reducedMotion) {
            setPlaying(true)
          }
        }}
      >
        {mainCustomerStories.map((card, index) => (
          <CarouselSlide key={`${card.category}-${index}`}>
            <CaseStoryCard card={card} />
          </CarouselSlide>
        ))}
      </Carousel>
      <MoreCasesLink className="main-cases_more-mobile" />
    </section>
  )
}
