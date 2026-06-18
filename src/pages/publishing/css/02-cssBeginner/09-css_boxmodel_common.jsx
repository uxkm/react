import { Link } from "react-router-dom";
import { usePageMeta } from "@/components/common/PageMeta";

const PAGE_LAYOUT = {
  mainClass: "css_boxmodel_common",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: false,
};

function CssBoxmodelCommonPage() {
  usePageMeta({
    title: "CSS 박스 모델 (공통 안내)",
    description:
      "박스 모델 개요 공통 안내입니다. 상세 내용은 part 1, part 2 페이지를 참고하세요.",
    keyword: "CSS 박스 모델, box model, margin, padding, border",
    layout: PAGE_LAYOUT,
  });
  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          박스 모델(Box Model)은 CSS가 모든 HTML 요소를 사각형 박스로 취급하여
          배치하는 기본 개념입니다.
        </p>
      </blockquote>
      <p className="mt_l">
        <Link to="/publishing/css/02-cssBeginner/09-css_boxmodel_part1">
          본문은 part 1 페이지로 이동합니다.
        </Link>
      </p>
    </>
  );
}
export default CssBoxmodelCommonPage;
