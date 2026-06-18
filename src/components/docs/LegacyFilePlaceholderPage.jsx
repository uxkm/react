function LegacyFilePlaceholderPage({ slug, sourcePath }) {
  return (
    <article className="indent">
      <header className="mt_xxl">
        <p className="sound_only">Previous aligned file</p>
        <h1>{slug}</h1>
      </header>

      <blockquote className="uk_note mt_xxl" role="note">
        <p>기존 파일명 정합성을 위해 생성된 React 파일입니다.</p>
      </blockquote>

      <section>
        <h2>원본 경로</h2>
        <pre>
          <code>{sourcePath}</code>
        </pre>
      </section>
    </article>
  )
}

export default LegacyFilePlaceholderPage
