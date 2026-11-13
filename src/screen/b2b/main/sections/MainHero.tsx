/** 메인 첫 화면의 타이틀 위젯. */
export default function MainHero () {
  return (
    <section id="hero" className="main-hero" aria-labelledby="main-hero-title">
      <h1 id="main-hero-title">
        성과 없는{' '}
        <span className="main-hero_emoji" aria-hidden="true">
          🤔
        </span>
        교육은 그만, 기업교육은 역시{' '}
        <span className="main-hero_brand">멀티캠퍼스</span>
      </h1>
      <p>
        30년의 기업교육 노하우, 진단부터 성과관리까지 차원이 다른{' '}
        <strong>Total HRD</strong>
      </p>
    </section>
  )
}
