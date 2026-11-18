'use client'

import { Link } from '@/lib/router'
import { Icon } from '@/comp/ui/Icon'
import { useHeroSectionScroll } from '@/widgets/b2b/main/useHeroSectionScroll'
import MainHeroVideoBackground from '@/widgets/b2b/main/MainHeroVideoBackground'

const heroDetails = [
  { id: 'leadership', label: '리더십', title: '적립금 리더십', description: '6시간. 임원 팀장 신입리더' },
  { id: 'satisfaction', title: '4.3점', description: '만족도 평균 · 응답 38,412건' },
  { id: 'language', label: '외국어', title: '비즈니스 외국어', description: '8주~ · OPIc·회화·현지적응' },
  { id: 'assessment', label: '기업AX', title: 'AX역량진단', description: '2시간 · KAIST 공동개발' },
  { id: 'onboarding', label: '온보딩', title: '[신입 온보딩] 4주 직무적용 집중' },
  { id: 'response', title: '24h', description: '평균 컨설턴트 회신' },
  { id: 'customers', title: '16,000 +', description: '누적고객기업' }
]

function MainHeroDetails () {
  return heroDetails.map(({ id, label, title, description }) => (
    <span key={id} className={`main-hero_detail main-hero_detail-${id}`}>
      {label && <span className="main-hero_detail-label">{label}</span>}
      <strong>{title}</strong>
      <span className="main-hero_detail-description">{description}</span>
    </span>
  ))
}

function MainHeroArtwork () {
  return (
    <div className="main-hero_artwork" aria-hidden="true">
      <span className="main-hero_object main-hero_object-knot" />
      <span className="main-hero_object main-hero_object-wave" />
      <span className="main-hero_object main-hero_object-ribbed-sphere-lit" />
      <span className="main-hero_object main-hero_object-orb" />
      <span className="main-hero_object main-hero_object-bubble-right" />
      <span className="main-hero_object main-hero_object-bubble-left" />
      <span className="main-hero_object main-hero_object-flower" />
      <MainHeroDetails />
    </div>
  )
}

/** 헤더·공지와 함께 첫 화면을 채우며 typeVideo 호출 시 배경 영상 레이어를 사용합니다. */
export default function MainHero ({ type = 'typeB' }: { type?: 'typeB' | 'typeVideo' }) {
  const scrollToNext = useHeroSectionScroll()

  return (
    <section id="hero" className="main-hero main-hero_typeB" aria-labelledby="main-hero-title">
      {type === 'typeVideo' ? <MainHeroVideoBackground><MainHeroDetails /></MainHeroVideoBackground> : <MainHeroArtwork />}
      <div className="main-hero_overlap" aria-hidden="true">
        <span className="main-hero_object main-hero_object-ribbed-sphere" />
      </div>
      <div className="main-hero_content">
        <p className="main-hero_eyebrow"><strong className="main-hero_count">16,000</strong>개 + 기업이 먼저 경험했습니다</p>
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
      </button>
    </section>
  )
}
