function FolderCommonNote({ sectionTitle = "" }) {
  return (
    <>
      <blockquote className="uk_note" role="note">
        <strong className="sound_only">{sectionTitle} 요약 설명</strong>
        <ul>
          <li>
            수정 콘텐츠는 HTML 문서에서 변경된 부분을 표시하는 요소를 말하며,
            특정 텍스트 또는 문서의 변경 이력을 표시하거나 강조하기 위해
            사용됩니다.
          </li>
          <li>
            <code>&lt;ins&gt;</code>와 <code>&lt;del&gt;</code> 요소가 있으며,
            각각 추가된 텍스트와 삭제된 텍스트를 나타냅니다.
          </li>
          <li>
            수정 콘텐츠를 통해 사용자는 문서의 변경 내용을 쉽게 파악할 수 있고,
            공동 작업이나 리뷰 프로세스에서 유용하게 활용될 수 있습니다.
          </li>
        </ul>
      </blockquote>
    </>
  );
}

export default FolderCommonNote;
