import { Link } from "react-router-dom";

function CssGridCommonPage() {
  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>CSS Grid</b>는 웹 페이지 컨텐츠를 행과 열로 나눌 수 있는{" "}
          <b>2차원 레이아웃 시스템</b>입니다.
          <br />
          <code>display: grid</code> 또는 <code>display: inline-grid</code>로
          설정한 요소가 그리드 컨테이너가 되며, 그 안에 포함된 자식 요소들이
          그리드 아이템이 됩니다.
        </p>
        <p className="mt_ms">
          <code>flex</code>는 1차원 레이아웃(행 또는 열)을 다루지만,{" "}
          <code>grid</code>는 2차원 레이아웃(행과 열)을 다룹니다.
          <br />
          복잡한 레이아웃을 구현하는 데 유용하며, 브라우저 대부분이 완벽하게
          지원하고 있습니다.
        </p>
      </blockquote>
      <p className="mt_l">
        <Link to="/publishing/css/04-cssAdvanced/05-css_grid_part1">
          본문은 part 1 페이지로 이동합니다.
        </Link>
      </p>
    </>
  );
}

export default CssGridCommonPage;
