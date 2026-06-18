import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "small_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "small element",
  description:
    "small 요소는 HTML 문서에서 덜 중요한 부가 정보를 작고 가볍게 표시할 때 사용하는 인라인 태그로, 브라우저는 기본적으로 글자 크기를 줄여 렌더링하며 저작권 정보, 면책 조항, 각주, 보조 설명 등 본문보다 중요도가 낮은 내용을 시각적으로 구분할 때 사용됩니다. 이 페이지에서는 small 요소의 주요 역할 및 특징을 설명하고, small 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, small",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_450" aria-hidden />;
}

function SmallElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;small&gt;</code>은 저작권, 주석, 면책 문구 같은 부가 설명에
          사용합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>텍스트 크기 축소</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;small&gt;</code>은 현재 문맥에서 상대적으로 작은
                텍스트를 표시합니다.
              </li>
              <li>기본 스타일은 `font-size: smaller`로 렌더링됩니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>부가 정보 표시</strong>
            <ul className="dot_lst">
              <li>저작권/면책/각주 같은 보충 정보를 표시할 때 적합합니다.</li>
              <li>본문보다 중요도가 낮은 텍스트를 시각적으로 구분합니다.</li>
            </ul>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <CodeBlock title="small element CSS" className="mt_l" language="css">
          {`small {
  display: inline;
  font-size: smaller;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="small element syntax"
          className="mt_l"
          language="html"
        >
          {`<small>작은 텍스트</small>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;small&gt;</code> 요소는 고유 속성이 없으며 글로벌 속성만
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
                target="html/05-textLevel/5.7.small_element_1.html"
                className="min_height_450 mb_result_height_500"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="상황별 예제"
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
                target="html/05-textLevel/5.7.small_element_2.html"
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
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;small&gt;</code>은 부수 정보 표현에 적합하며 강조가 필요한
            경우 <code>&lt;strong&gt;</code> 또는 <code>&lt;em&gt;</code>을
            사용하세요.
          </li>
          <li>
            과도한 사용은 가독성을 떨어뜨릴 수 있으므로 핵심 본문에는 남용하지
            않는 것이 좋습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="small">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/05_html_07.png`} alt="small 요소" />
        <figcaption>small 요소</figcaption>
      </figure>
    </>
  );
}

export default SmallElementPage;
