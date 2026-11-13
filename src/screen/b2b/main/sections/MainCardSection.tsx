import MainPromotionBanner from '@/widgets/b2b/main/MainPromotionBanner'
import MainConsultationCard from '@/widgets/b2b/main/MainConsultationCard'
import MainDiagnosisCard from '@/widgets/b2b/main/MainDiagnosisCard'
import MainQuickLinks from '@/widgets/b2b/main/MainQuickLinks'

/** 섹션은 영역 배치만 담당하고 각 레이아웃 안에서 해당 위젯을 호출합니다. */
export default function MainCardSection () {
  return (
    <section
      id="card-grid"
      className="main-cards"
      aria-label="기업교육 추천 및 상담"
    >
      <div className="main-cards_promotion">
        {/*
          프로모션 배너 영역. showControlsWhenSingle은 기본 false이며,
          true로 전달하면 슬라이드가 1장이어도 컨트롤을 표시하되 이동·재생 버튼은 비활성화합니다.
          2장 이상이면 옵션값과 관계없이 컨트롤을 표시합니다.
        */}
        <MainPromotionBanner />
      </div>

      <div className="main-cards_consultation">
        {/* 기업교육 맞춤상담 카드 영역 */}
        <MainConsultationCard />
      </div>

      <div className="main-cards_diagnosis">
        {/* 간편 진단 및 맞춤 교육추천 카드 영역 */}
        <MainDiagnosisCard />
      </div>

      <div className="main-cards_quick-links">
        {/* 주요 서비스 바로가기 영역 */}
        <MainQuickLinks />
      </div>
    </section>
  )
}
