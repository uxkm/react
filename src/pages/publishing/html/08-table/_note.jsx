function FolderCommonNote({ sectionTitle = "" }) {
  return (
    <>
      <blockquote className="uk_note" role="note">
        <strong className="sound_only">{sectionTitle} 요약 설명</strong>
        <ul>
          <li>
            표 데이터 요소들의 집합은 표 형식의 데이터를 처리하기 위해
            만들어졌으며, 데이터를 시각적으로 구조화하고 비교할 수 있도록
            도와줍니다.
          </li>
          <li>
            행과 열의 형태로 구성되어 있고, 각 셀에는 특정한 데이터나 정보가
            들어가게 됩니다.
          </li>
          <li>
            일반적으로 데이터베이스나 스프레드시트에서 사용되는 형식이며, HTML의{" "}
            <code>&lt;table&gt;</code> 요소를 사용하여 웹 페이지에 표현됩니다.
          </li>
          <li>
            표 데이터 요소를 레이아웃 보조 도구로 사용하는 것은 권장하지
            않습니다.
          </li>
        </ul>
      </blockquote>
    </>
  );
}

export default FolderCommonNote;
