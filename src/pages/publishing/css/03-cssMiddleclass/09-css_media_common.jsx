import { Link } from "react-router-dom";

function CssMediaCommonPage() {
  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>@media</code>는 출력 장치의 특징을 참조하여 CSS 코드를 분기
          처리하는 규칙입니다.
          <br />
          출력 장치의 유형, 크기, 해상도 등을 조건으로 하여 하나의 HTML 소스가
          여러 가지 뷰를 갖도록 구현할 수 있으며, 이를{" "}
          <b>미디어 쿼리(Media Query)</b>라고 합니다.
        </p>
        <p className="mt_ms">
          미디어 쿼리는 <strong className="t_black">CSS2</strong>부터
          사용되었으며, <strong className="t_black">CSS3</strong>에서 본격적으로
          쓰이기 시작했습니다.
          <br />
          <strong className="t_black">CSS2</strong>에서는 매체 유형(media type)만
          지원했지만, <strong className="t_black">CSS3</strong>에서는 매체
          유형과 <code>width</code>, <code>height</code>, <code>color</code> 등의
          표현식으로 구성된 미디어 쿼리를 사용할 수 있습니다.
          <br />
          반응형 웹의 핵심 기법으로, 뷰포트 해상도에 따라 CSS 코드를 분기하여
          반응형 레이아웃을 구현하거나 문서를 인쇄할 때 사용됩니다.
        </p>
      </blockquote>
      <p className="mt_l">
        <Link to="/publishing/css/03-cssMiddleclass/09-css_media_part1">
          본문은 part 1 페이지로 이동합니다.
        </Link>
      </p>
    </>
  );
}

export default CssMediaCommonPage;
