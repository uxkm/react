function FolderCommonNote({ sectionTitle = "" }) {
  return (
    <>
      <blockquote className="uk_note" role="note">
        <strong className="sound_only">{sectionTitle} 요약 설명</strong>
        <ul>
          <li>
            이 섹션은 HTML 학습과 실무에 참고할 수 있는 공식 문서, 표준 사양,
            브라우저 지원 정보 사이트를 모아둔 링크 모음입니다.
          </li>
          <li>
            W3C, WHATWG, MDN 등 공신력 있는 출처를 중심으로 확인하고, 브라우저
            지원 범위는 <code>caniuse</code>와 함께 교차 검증하는 것을
            권장합니다.
          </li>
          <li>
            표준 문서는 개정될 수 있으므로 정기적으로 링크 유효성과 최신 버전을
            점검해 참고 정보를 업데이트해야 합니다.
          </li>
        </ul>
      </blockquote>
    </>
  );
}

export default FolderCommonNote;
