function FolderCommonNote({ sectionTitle = "" }) {
  return (
    <>
      <blockquote className="uk_note" role="note">
        <strong className="sound_only">{sectionTitle} 요약 설명</strong>
        <ul>
          <li>
            내장 콘텐츠란 HTML 문서 안에 외부 소스로부터 가져온 다른 유형의
            콘텐츠를 포함하는 요소를 말합니다. 주로 이미지, 오디오, 비디오,
            그래픽 등을 웹 페이지에 삽입하는 데 사용됩니다.
          </li>
          <li>
            대표적인 내장 콘텐츠 요소로는 <code>&lt;img&gt;</code>,{" "}
            <code>&lt;audio&gt;</code>,<code>&lt;video&gt;</code>,{" "}
            <code>&lt;iframe&gt;</code> 등이 있습니다.
          </li>
          <li>
            내장 콘텐츠를 통해 웹 페이지는 다양한 종류의 멀티미디어 콘텐츠를
            표현하고 더욱 풍부한 사용자 경험을 제공할 수 있습니다.
          </li>
        </ul>
      </blockquote>
    </>
  );
}

export default FolderCommonNote;
