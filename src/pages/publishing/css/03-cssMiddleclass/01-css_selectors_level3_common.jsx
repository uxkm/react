import { Link } from "react-router-dom";

function CssSelectorsLevel3CommonPage() {
  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>CSS 선택자 Level 3</b>는 HTML 요소를 선택하는 규칙들을 표준화한{" "}
          <strong className="t_black">W3C</strong> 기술 문서이며,{" "}
          <strong className="t_black">CSS 3</strong>에서 새로 추가되거나
          개선된 선택자들을 의미합니다.
          <br />
          선택자는 스타일을 적용할 요소를 지정하는 방법으로, 요소의 태그명,
          클래스, 속성, 구조적 위치 등을 기반으로 요소를 선택할 수 있습니다.
        </p>
        <p className="mt_ms">
          <b>CSS 선택자 Level 3</b>에는 <b>조합 선택자</b>, <b>속성 선택자</b>,{" "}
          <b>의사(가상) 클래스</b>, <b>의사(가상) 요소</b> 등 다양한 선택
          방법이 포함되어 있으며,
          <i className="underline">
            오늘날 웹에서 사용하는 선택자의 대부분이 Level 3 기준입니다.
          </i>
        </p>
      </blockquote>
      <p className="mt_l">
        <Link to="/publishing/css/03-cssMiddleclass/01-css_selectors_level3_part1">
          본문은 part 1 페이지로 이동합니다.
        </Link>
      </p>
    </>
  );
}

export default CssSelectorsLevel3CommonPage;
