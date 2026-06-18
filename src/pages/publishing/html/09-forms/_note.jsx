function FolderCommonNote({ sectionTitle = "" }) {
  return (
    <>
      <blockquote className="uk_note" role="note">
        <strong className="sound_only">{sectionTitle} 요약 설명</strong>
        <ul>
          <li>
            폼 콘텐츠는 사용자로부터 정보를 입력받는 웹 양식(form)을 구성하는
            요소들을 가리킵니다. 이러한 요소들은 사용자가 텍스트를 입력하거나
            선택하고 제출하는 등의 상호 작용을 할 수 있도록 도와줍니다.
          </li>
          <li>
            주요 폼 콘텐츠 요소로는 <code>&lt;input&gt;</code>,{" "}
            <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code>,
            <code>&lt;button&gt;</code>, <code>&lt;label&gt;</code> 등이
            있습니다.
          </li>
          <li>
            폼 콘텐츠 요소들을 조합하여 로그인 폼, 등록 폼, 설문조사 등 다양한
            웹 양식을 만들면 사용자로부터 다양한 종류의 정보를 수집하고 처리할
            수 있습니다.
          </li>
        </ul>
      </blockquote>
    </>
  );
}

export default FolderCommonNote;
