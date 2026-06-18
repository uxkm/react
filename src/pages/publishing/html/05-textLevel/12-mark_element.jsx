import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "mark_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "mark element",
  description:
    "mark 요소는 HTML 문서에서 특정 텍스트를 강조하거나 하이라이트할 때 사용하는 인라인 태그로, 보통 사용자가 검색한 키워드나 주목해야 할 정보를 시각적으로 구분하기 위해 사용되며 브라우저는 기본적으로 배경색을 적용하여 강조합니다. 이 페이지에서는 mark 요소의 주요 역할 및 특징을 설명하고, mark 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, mark",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_450" aria-hidden />;
}

function MarkElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;mark&gt;</code>는 문맥상 중요한 텍스트를 눈에 띄게 표시할 때
          사용합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>mark</code>는 현재 문맥에서 중요한 텍스트를 시각적으로
            하이라이트할 때 사용합니다.
          </li>
          <li>
            기본 렌더링은 노란 배경/검은 글자이며 CSS로 변경할 수 있습니다.
          </li>
        </ul>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <CodeBlock title="mark element CSS" className="mt_l" language="css">
          {`mark {
  display: inline;
  background-color: yellow;
  color: black;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="mark element syntax" className="mt_l" language="html">
          {`<mark>중요한 텍스트</mark>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;mark&gt;</code> 요소는 고유 속성이 없으며 글로벌 속성만
          사용합니다.
        </p>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          예제
        </h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">상황별 예제</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.12.mark_element_1.html"
                className="min_height_450 mb_result_height_430"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="상황별 mark 예제"
                minHeight="450px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">CSS로 스타일 변경</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.12.mark_element_2.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="CSS로 스타일 변경"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 강조</h3>
          <CodeBlock
            title="접근성을 고려한 강조"
            className="mt_m"
            language="html"
          >
            {`<p>
  업데이트 사항: <mark aria-label="중요한 부분">보안 패치가 적용되었습니다.</mark>
</p>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;mark&gt;</code>는 단순 시각 효과가 아니라 문맥상 중요한
            텍스트를 표시할 때만 사용하세요.
          </li>
          <li>
            CSS로 강조 색상을 변경하더라도 사용자가 강조된 정보를 쉽게 식별할 수
            있도록 대비를 유지하세요.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="mark">
        <ul>
          <li className="ie">9+</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">4.0</li>
          <li className="opera">11.0</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/05_html_12.png`} alt="mark 요소" />
        <figcaption>mark 요소</figcaption>
      </figure>
    </>
  );
}

export default MarkElementPage;
