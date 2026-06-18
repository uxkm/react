function FolderCommonNote({ sectionTitle = "" }) {
  return (
    <>
      <blockquote className="uk_note" role="note">
        <strong className="sound_only">{sectionTitle} 요약 설명</strong>
        <ul>
          <li>
            콘텐츠 그룹화는 HTML 요소를 사용하여 문서의 콘텐츠를 그룹화하는 것을
            의미하며, 문서의 구조를 더 명확하게 정의하고 관련된 콘텐츠를 묶어서
            표현할 수 있습니다.
          </li>
          <li>
            콘텐츠 그룹화를 통해 웹 페이지의 레이아웃을 구성하고 서로 다른
            부분을 시각적으로 구분할 수 있으며, 웹 콘텐츠를 더 의미론적으로
            이해하기 쉽게 만들어줍니다.
          </li>
        </ul>
      </blockquote>
    </>
  );
}

export default FolderCommonNote;
