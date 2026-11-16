'use client'

import { Link } from '@/lib/router'
import { Icon } from '@/comp/ui/Icon'
import { useHeroSectionScroll } from '@/widgets/b2b/main/useHeroSectionScroll'

/** typeB: 헤더·공지와 함께 브라우저 첫 화면을 채우는 메인 비주얼. */
export default function MainHero () {
  const scrollToNext = useHeroSectionScroll()

  return (
    <section id="hero" className="main-hero main-hero_typeB" aria-labelledby="main-hero-title">
      <div className="main-hero_artwork" aria-hidden="true">
        <span className="main-hero_object main-hero_object-knot" />
        <span className="main-hero_object main-hero_object-orb" />
        <span className="main-hero_object main-hero_object-flower" />
        <span className="main-hero_object main-hero_object-wave" />
        <span className="main-hero_object main-hero_object-bubble main-hero_object-bubble-far" />
        <span className="main-hero_object main-hero_object-bubble main-hero_object-bubble-middle" />
        <span className="main-hero_object main-hero_object-bubble main-hero_object-bubble-near" />
      </div>
      <div className="main-hero_overlap" aria-hidden="true">
        <span className="main-hero_object main-hero_object-ribbed-sphere" />
      </div>
      <div className="main-hero_content">
        <p className="main-hero_eyebrow">16,000개 + 기업이 먼저 경험했습니다</p>
        <h1 id="main-hero-title"><span>’27년 교육,</span>{' '}<span>어디서부터 하시겠어요?</span></h1>
        <p className="main-hero_description">멀티캠퍼스와 시작하면 해결이 훨씬 빨라집니다.</p>
        <div className="main-hero_actions">
          <Link to="/b2b/contact/education" className="main-hero_cta main-hero_cta-primary">기업교육 문의 <Icon name="arrow-right" size={20} /></Link>
          <Link to="/b2b/service/diagnosis" className="main-hero_cta">진단&맞춤추천 <Icon name="arrow-right" size={20} /></Link>
        </div>
      </div>
      <button type="button" className="main-hero_scroll" onClick={scrollToNext} aria-label="두 번째 섹션 기업교육 추천 및 상담으로 이동">
        <span className="main-hero_scroll-line" aria-hidden="true" />
        <span>아래로 스크롤 해주세요.</span>
        <Icon name="chevron-down" size={16} />
      </button>
    </section>
  )
}
