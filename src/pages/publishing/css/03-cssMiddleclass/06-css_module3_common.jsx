import { Link } from "react-router-dom";

function CssModule3CommonPage() {
  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>CSS3 Module</b>은 <strong className="t_black">W3C</strong>의 CSS
          Working Group이 표준화 작업을 효율적으로 진행하기 위해 CSS를 기능별로
          나눈 작은 컴포넌트 단위입니다.
          <br />
          각 모듈은 특정 기능이나 주제에 대한 CSS 속성들을 모아놓은 것으로, 예를
          들어 배경과 테두리, 레이아웃, 애니메이션 등을 독립적으로 다룹니다.
        </p>
        <p className="mt_ms">
          <b>CSS3</b>는 공식적인 단일 표준이 아니라 여러 모듈로 구성되며, 각
          모듈은 독립적으로 표준화 과정을 거칩니다.
          <br />
          이를 통해 필요한 기능만 선택적으로 사용할 수 있으며, 새로운 요구사항이
          발생할 때마다 새로운 모듈이 추가됩니다.
        </p>
      </blockquote>
      <p className="mt_l">
        <Link to="/publishing/css/03-cssMiddleclass/06-css_module3_part1">
          본문은 part 1 페이지로 이동합니다.
        </Link>
      </p>
    </>
  );
}

export default CssModule3CommonPage;
