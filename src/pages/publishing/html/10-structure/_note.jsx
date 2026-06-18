function FolderCommonNote({ sectionTitle = "" }) {
  return (
    <>
      <blockquote className="uk_note" role="note">
        <strong className="sound_only">{sectionTitle} 요약 설명</strong>
        <ul>
          <li>
            HTML4, HTML5, 그리고 프레임셋 문서의 구조는 각각의 HTML 버전에 따라
            약간씩 다릅니다. 이러한 문서 구조는 HTML 문서의 기본적인 레이아웃과
            구획을 정의하는 역할을 합니다.
          </li>
          <li>
            HTML5는 HTML4에 비해 더 많은 의미론적 요소를 도입하여 문서의 의미를
            더 명확하게 정의했습니다. 이렇게 함으로써 검색 엔진이나 스크린 리더
            등의 보조 기술이 문서를 더 잘 이해하고 해석할 수 있게 되었습니다
          </li>
          <li>
            HTML5에서는 프레임셋 문서를 더 이상 지원하지 않으며, 기존 프레임셋
            문서는 여러 개의 프레임으로 구성되고 각 프레임은 개별적인 HTML
            문서로 간주됩니다.
          </li>
        </ul>
      </blockquote>
    </>
  );
}

export default FolderCommonNote;
