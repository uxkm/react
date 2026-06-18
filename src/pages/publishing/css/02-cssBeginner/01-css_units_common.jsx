import { Link } from "react-router-dom";
import { usePageMeta } from "@/components/common/PageMeta";

const PAGE_LAYOUT = {
  mainClass: "css_units",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: false,
};

const PAGE_DATA = {
  title: "CSS 단위 (공통 안내)",
  description:
    "CSS 단위 개요: 길이 단위와 색상 단위의 역할을 설명하는 공통 안내 블록입니다. 상세 내용은 part 페이지를 참고하세요.",
  keyword: "CSS 단위, 길이 단위, 색상 단위, em, rem, px",
};

function CssUnitsCommonPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });
  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          CSS 단위는 요소의 크기, 간격, 색상 등을 정확하게 표현하기 위해 숫자와
          함께 사용하는 측정 단위입니다.
          <br />
          CSS 속성 값에 크기나 색상을 지정할 때 단위를 사용하여 브라우저가 값을
          해석하고 화면에 표시할 수 있도록 합니다.
        </p>
      </blockquote>
      <p className="mt_l">
        <Link to="/publishing/css/02-cssBeginner/01-css_units_part1">
          본문은 part 1 페이지로 이동합니다.
        </Link>
      </p>
    </>
  );
}
export default CssUnitsCommonPage;
