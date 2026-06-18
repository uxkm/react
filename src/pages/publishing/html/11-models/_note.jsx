function FolderCommonNote({ sectionTitle = "" }) {
  return (
    <>
      <blockquote className="uk_note" role="note">
        <strong className="sound_only">{sectionTitle} 요약 설명</strong>
        <ul>
          <li>
            콘텐츠 모델은 HTML 요소가 어떤 종류의 콘텐츠를 포함할 수 있는지를
            정의하는 규칙의 집합입니다.
          </li>
          <li>
            HTML5에서는 각 요소가 특정 종류의 콘텐츠를 허용하는 콘텐츠 모델을
            가지고 있습니다. 대부분의 요소는 특정 유형의 콘텐츠를 포함할 수
            있지만, 일부 요소는 다른 요소만을 포함할 수 있습니다.
          </li>
          <li>
            콘텐츠 모델을 이해하면 HTML 문서의 구조와 의미를 파악하는 데 도움이
            되며, 이는 웹 브라우저나 검색 엔진이 문서를 더 잘 이해하고 해석할 수
            있도록 합니다.
          </li>
        </ul>
      </blockquote>
    </>
  );
}

export default FolderCommonNote;
