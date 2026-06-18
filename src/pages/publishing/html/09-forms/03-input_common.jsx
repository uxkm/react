import { usePageMeta } from "@/components/common/PageMeta";

const PAGE_LAYOUT = {
  mainClass: "input_element_common",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "input element common",
  description:
    "input 요소 공통 개념과 주요 속성, 접근성 고려사항을 정리합니다.",
  keyword: "Markup, HTML, input, common",
};

function InputCommonPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;input&gt;</code> 요소는{" "}
          <b>사용자 입력을 받기 위한 HTML 폼 요소</b>입니다.
          <br />
          다양한 <code>type</code> 속성을 사용해 텍스트 입력, 비밀번호 입력,
          체크박스, 라디오 버튼, 파일 업로드 등 다양한 입력 형식을 제공합니다.
          <br />
          <code>name</code>, <code>value</code>, <code>placeholder</code>,{" "}
          <code>required</code> 등의 속성을 활용해 입력 데이터의 특성을 정의할
          수 있으며, JavaScript와 함께 사용해 유효성 검사 및 동적 처리가
          가능합니다.
        </p>
      </blockquote>
    </>
  );
}

export default InputCommonPage;
