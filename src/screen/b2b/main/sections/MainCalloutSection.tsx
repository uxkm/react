import MainInquiryCalloutCard from '@/widgets/b2b/main/MainInquiryCalloutCard'
import MainNewsletterCalloutCard from '@/widgets/b2b/main/MainNewsletterCalloutCard'

/** 네 번째 본문 섹션: 상담·뉴스레터 안내 카드 2열 배치. */
export default function MainCalloutSection () {
  return (
    <section id="cta" className="main-callouts" aria-label="교육 상담 및 뉴스레터 구독">
      {/* 기업교육 문의·간편 진단 안내 영역 */}
      <MainInquiryCalloutCard />
      {/* 멀캠ON 구독·공식 소셜 채널 안내 영역 */}
      <MainNewsletterCalloutCard />
    </section>
  )
}
