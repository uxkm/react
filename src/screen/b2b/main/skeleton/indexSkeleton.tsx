import { Skeleton } from '@/comp/ui/Skeleton' // Skeleton 컴포넌트

/** 영역 전체를 채우는 뼈대. 부모 그리드·카드 높이를 그대로 따른다. */
function FillBone ({ radius = 20 }: { readonly radius?: number }) {
  return (
    <Skeleton
      block
      height="100%"
      style={{ display: 'block', borderRadius: radius }}
    />
  )
}

/** 멀캠ON 콘텐츠 카드와 같은 비율·패딩 구조의 뼈대. */
function InsightCardBone () {
  return (
    <div className="card card_content" aria-hidden="true">
      <span
        className="skeleton card_content-media"
        style={{ display: 'block', width: '100%', aspectRatio: '16 / 9', borderRadius: 0 }}
        aria-hidden="true"
      />
      <div className="card_content-body">
        <Skeleton variant="chip" width={88} height={32} />
        <Skeleton
          block
          height={34}
          width="90%"
          style={{ display: 'block', marginTop: 22 }}
        />
        <Skeleton
          block
          height={16}
          width="100%"
          style={{ display: 'block', marginTop: 14 }}
        />
        <Skeleton
          block
          height={16}
          width="78%"
          style={{ display: 'block', marginTop: 8 }}
        />
      </div>
    </div>
  )
}

/** 메인 실제 섹션 클래스·그리드·카드 크기를 그대로 쓰는 수동 스켈레톤. */
export default function IndexSkeleton () {
  return (
    <>
      <section className="main-hero" aria-hidden="true">
        <h1>
          <Skeleton height={68} width={720} style={{ maxWidth: '100%' }} />
        </h1>
        <p>
          <Skeleton
            height={22}
            width={520}
            style={{ display: 'block', maxWidth: '100%', marginInline: 'auto' }}
          />
        </p>
      </section>

      <section className="main-cards" aria-hidden="true">
        <div className="main-cards_promotion">
          <FillBone />
        </div>
        <div className="main-cards_consultation">
          <FillBone />
        </div>
        <div className="main-cards_diagnosis">
          <FillBone />
        </div>
        <div className="main-cards_quick-links">
          <div className="main-quick-links">
            <FillBone />
            <FillBone />
            <FillBone />
          </div>
        </div>
      </section>

      <section className="main-insights" aria-hidden="true">
        <h2>
          <span className="main-insights_headline">
            <Skeleton height={48} width={280} style={{ maxWidth: '100%' }} />
            <Skeleton height={48} width={360} style={{ maxWidth: '100%' }} />
          </span>
          <Skeleton
            height={48}
            width={520}
            style={{ display: 'block', maxWidth: '100%', marginTop: 8 }}
          />
        </h2>
        <div className="main-skeleton_insights-grid">
          <InsightCardBone />
          <InsightCardBone />
          <InsightCardBone />
        </div>
      </section>

      <section className="main-cases" aria-hidden="true">
        <h2>
          <Skeleton
            height={48}
            width={420}
            style={{ display: 'block', maxWidth: '100%' }}
          />
          <Skeleton
            height={48}
            width={520}
            style={{ display: 'block', maxWidth: '100%', marginTop: 8 }}
          />
        </h2>
        <div className="main-skeleton_cases-track">
          <span className="skeleton main-skeleton_case" aria-hidden="true" />
          <span className="skeleton main-skeleton_case" aria-hidden="true" />
          <span className="skeleton main-skeleton_case" aria-hidden="true" />
        </div>
      </section>

      <section className="main-callouts" aria-hidden="true">
        <div className="card card_callout">
          <Skeleton
            height={48}
            width="55%"
            style={{ display: 'block', marginInline: 'auto' }}
          />
          <Skeleton
            height={22}
            width="78%"
            style={{ display: 'block', margin: '18px auto 0' }}
          />
          <Skeleton
            height={22}
            width="68%"
            style={{ display: 'block', margin: '8px auto 0' }}
          />
          <div className="card_callout-actions">
            <Skeleton height={56} width={160} style={{ borderRadius: 60 }} />
            <Skeleton height={56} width={180} style={{ borderRadius: 60 }} />
          </div>
        </div>
        <div className="card card_callout">
          <Skeleton
            height={48}
            width="60%"
            style={{ display: 'block', marginInline: 'auto' }}
          />
          <Skeleton
            height={22}
            width="72%"
            style={{ display: 'block', margin: '18px auto 0' }}
          />
          <Skeleton
            height={22}
            width="64%"
            style={{ display: 'block', margin: '8px auto 0' }}
          />
          <div className="card_callout-actions">
            <Skeleton height={56} width={140} style={{ borderRadius: 60 }} />
            <Skeleton height={40} width={40} round />
            <Skeleton height={40} width={40} round />
            <Skeleton height={40} width={40} round />
          </div>
        </div>
      </section>
    </>
  )
}
