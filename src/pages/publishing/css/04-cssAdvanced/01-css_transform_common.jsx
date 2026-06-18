import { Link } from "react-router-dom";

function CssTransformCommonPage() {
  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          CSS의 <code>transform</code> 속성은 요소가 위치하는{" "}
          <b>시각적 좌표 공간(visual formatting model)</b>을 변형할 수 있도록
          해줍니다.
          <br />
          이 속성을 사용하면 요소를 <b>이동</b>(<code>translate</code>),{" "}
          <b>회전</b>(<code>rotate</code>), <b>크기 변경</b>(<code>scale</code>
          ), <b>기울이기</b>(<code>skew</code>) 등 다양한 방식으로 변형할 수
          있으며, <strong className="t_black">CSS3</strong>에서는 <b>2D</b>와{" "}
          <b>3D</b> 변형 모두를 지원합니다.
        </p>
        <p className="mt_ms">
          Transform은 <code>x</code>, <code>y</code>, <code>z</code>{" "}
          <b>좌표 체계</b>를 따르며, 좌표의 기준점은{" "}
          <b>브라우저 화면의 왼쪽 상단</b>입니다.
          <br />
          <b>Z축</b>은 화면 밖에서 사용자가 바라보는 방향을 기준으로{" "}
          <b>앞/뒤</b> 방향을 나타내며, 각 축의 <b>화살표 방향이 양의 값</b>,
          반대쪽이 <b>음의 값</b>이 됩니다.
        </p>
      </blockquote>
      <p className="mt_l">
        <Link to="/publishing/css/04-cssAdvanced/01-css_transform_part1">
          본문은 part 1(2D) 페이지로 이동합니다.
        </Link>
      </p>
    </>
  );
}

export default CssTransformCommonPage;
