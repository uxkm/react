function FolderCommonNote({ sectionTitle = "" }) {
  return (
    <>
      <blockquote className="uk_note" role="note">
        <strong className="sound_only">{sectionTitle} 요약 설명</strong>
        <ul>
          <li>
            섹션 콘텐츠는 "콘텐츠 구획화 요소"와 동의어로 HTML 문서를 논리적인
            섹션으로 나누는 역할을 하는 요소들을 말합니다.
          </li>
          <li>
            대표적인 섹션 콘텐츠 요소로는
            <code>&lt;header&gt;</code>,<code>&lt;footer&gt;</code>,
            <code>&lt;article&gt;</code>,<code>&lt;section&gt;</code>,
            <code>&lt;nav&gt;</code>,<code>&lt;aside&gt;</code> 등이 있습니다.
          </li>
          <li>
            이러한 요소들은 문서의 의미와 구조를 명확하게 정의하고 의미론적인
            정보를 전달하는 데 사용되며, 검색 엔진이나 스크린 리더 등의 보조
            기술이 정보를 파악하는 데 도움을 줍니다.
          </li>
        </ul>
      </blockquote>
    </>
  );
}

export default FolderCommonNote;
