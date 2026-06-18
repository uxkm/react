function FolderCommonNote({ sectionTitle = "" }) {
  return (
    <>
      <blockquote className="uk_note" role="note">
        <strong className="sound_only">{sectionTitle} 요약 설명</strong>
        <ul>
          <li>
            HTML에는 블록 요소(block level element)와 인라인 요소(inline level
            element)라는 두 가지 종류의 요소가 있습니다.
          </li>
          <li>
            HTML의 대부분의 요소는 웹 브라우저에서 어떻게 보이는지를 결정하는{" "}
            <code>display</code> 속성을 가지며, 주로 <code>block</code> 또는{" "}
            <code>inline</code> 두 가지 값 중 하나를 가집니다.
          </li>
          <li>
            단, 테이블(<code>table</code>)은 블록 요소로 간주되지만,{" "}
            <code>display</code> 속성 값은 <code>table</code>입니다.
          </li>
        </ul>
      </blockquote>
    </>
  );
}

export default FolderCommonNote;
