function ProjectInfoCard() {
  return (
    <article className="project-info-card">
      <h3>기존 콘텐츠 보존</h3>
      <p>
        기존 Nunjucks 기반 학습 자료는 저장소 루트의 <code>src</code> 디렉터리에 유지됩니다.
      </p>
      <p>
        신규 화면 구현은 <code>src</code> 하위에서 진행하고, 점진적으로 이관하는 방식을
        권장합니다.
      </p>
    </article>
  )
}

export default ProjectInfoCard
