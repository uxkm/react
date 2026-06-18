import { Link } from "react-router-dom";

function CssFlexibleCommonPage() {
  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>Flex</b>(Flexbox)는 <strong className="t_black">CSS3</strong>에서
          도입된 레이아웃 방식으로, 요소의 크기가 불명확하거나 동적으로 변화할
          때에도 유연한 레이아웃을 구현할 수 있습니다.
          <br />
          플렉스 컨테이너(부모 요소)와 플렉스 요소(자식 요소)로 구성되며,{" "}
          <code>display: flex</code> 또는 <code>display: inline-flex</code>로
          설정한 요소가 플렉스 컨테이너가 됩니다.
        </p>
        <p className="mt_ms">
          복잡한 레이아웃도 적은 코드로 간단하게 표현할 수 있으며, 다양한 화면
          크기와 기기에서 요소들이 자동으로 재정렬되어 반응형 웹을 구현하는 데
          유용합니다.
          <br />
          과거에는 <code>float</code>이 주로 사용되었지만, 현재는{" "}
          <code>flex</code> 또는 <code>grid</code>가 주로 사용됩니다.
        </p>
      </blockquote>
      <p className="mt_l">
        <Link to="/publishing/css/04-cssAdvanced/04-css_flexible_part1">
          본문은 part 1 페이지로 이동합니다.
        </Link>
      </p>
    </>
  );
}

export default CssFlexibleCommonPage;
