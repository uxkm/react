import { usePageMeta } from "@/components/common/PageMeta";

const PAGE_LAYOUT = {
  mainClass: "css_selectors_level_common",
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
  title: "CSS 선택자 (공통 안내)",
  description:
    "선택자와 우선순위에 대한 공통 안내입니다. 상세 내용은 part 1, part 2 페이지를 참고하세요.",
  keyword: "CSS 선택자, selector, specificity, class, id",
};

function CssSelectorsLevelCommonPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });
  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          선택자는 스타일링하고 싶은 HTML 요소나 부여한 <code>id</code>, <code>class</code>를 지정하는 위치입니다. 선언부에 여러 개의 속성과 속성값이 있을 때는 세미콜론(<code>;</code>)으로 구분하고, 각 선언은 속성과 속성값을 콜론(<code>:</code>)으로 구분합니다.<br />
          CSS는 기본적으로 선언된 순서에 따라 적용되지만 각종 선택자와 삽입 위치에 따라 우선순위가 달라질 수 있으며,
          선택자 우선순위는 <b>[<code>!important</code> &gt; 인라인 스타일 &gt; 아이디 선택자 &gt; 클래스/속성/가상 선택자 &gt; 태그 선택자 &gt; 전체 선택자]</b> 순으로 적용됩니다.
        </p>
      </blockquote>
    </>
  );
}
export default CssSelectorsLevelCommonPage;
