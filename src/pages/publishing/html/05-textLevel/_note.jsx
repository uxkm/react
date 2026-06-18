function FolderCommonNote({ sectionTitle = "" }) {
  return (
    <>
      <blockquote className="uk_note" role="note">
        <strong className="sound_only">{sectionTitle} 요약 설명</strong>
        <ul>
          <li>
            문자 컨텐츠는 HTML 요소를 사용하여 텍스트의 의미를 정의하는 것을
            의미하며, 텍스트의 일부분에 특정 의미를 부여하여 웹 브라우저와 검색
            엔진이 해당 텍스트를 더 잘 이해하고 해석할 수 있도록 돕는 것입니다.
          </li>
          <li>
            예를 들어, <code>&lt;b&gt;</code> 요소는 텍스트를 단순히 굵게
            표시하며,
            <code>&lt;strong&gt;</code> 요소는 중요한 텍스트를 강조합니다.
          </li>
          <li>
            문자 컨텐츠는 웹 콘텐츠의 의미를 더 명확하게 전달하기 위해 사용되는
            중요한 HTML 요소입니다.
          </li>
        </ul>
      </blockquote>
    </>
  );
}

export default FolderCommonNote;
