import PageMeta from "../common/PageMeta";

function DocsPageTemplate({ summary, children, meta }) {
  return (
    <>
      {meta ? <PageMeta {...meta} /> : null}
      {summary ? (
        <blockquote className="uk_note mt_xxl" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>{summary}</p>
        </blockquote>
      ) : null}
      <div className="docs_content">{children}</div>
    </>
  );
}

export default DocsPageTemplate;
