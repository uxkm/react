import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "sub_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "sub element",
  description:
    "sub 요소는 HTML 문서에서 텍스트를 아래 첨자 �形태로 표시할 때 사용하는 인라인 태그로, 주로 화학식, 수학식, 각주 번호 등 기준선보다 아래쪽에 작게 표시해야 하는 경우에 사용되며 브라우저는 이 요소를 기준선 아래로 내려 고정폭 또는 축소된 크기로 렌더링합니다. 이 페이지에서는 sub 요소의 주요 역할 및 특징을 설명하고, sub 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, sub",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_450" aria-hidden />;
}

function SubElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;sub&gt;</code>는 화학식, 수식 등 기준선 아래 표기가 필요한
          경우 사용합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ul className="dot_lst mt_l">
          <li>분자식, 이온 표기, 첨자 인덱스 표현에 적합합니다.</li>
          <li>
            단순한 시각 효과가 아니라 의미 있는 아래 첨자일 때 사용합니다.
          </li>
        </ul>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <CodeBlock title="sub element CSS" className="mt_l" language="css">
          {`sub {
  display: inline;
  vertical-align: sub;
  font-size: smaller;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="sub element syntax" className="mt_l" language="html">
          {`<sub>아래 첨자</sub>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;sub&gt;</code> 요소는 고유 속성이 없으며 글로벌 속성만
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
                target="html/05-textLevel/5.10.sub_element_1.html"
                className="min_height_450 mb_result_height_430"
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
                target="html/05-textLevel/5.10.sub_element_2.html"
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
          <h3 className="ml_mn">접근성을 고려한 아래 첨자</h3>
          <CodeBlock
            title="접근성을 고려한 아래 첨자"
            className="mt_m"
            language="html"
          >
            {`<p>
  화학식: H<sub aria-label="아래 첨자 2">2</sub>O
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
            <code>&lt;sub&gt;</code>는 아래 첨자 의미가 있을 때만 사용하고 단순
            스타일 목적 사용은 피하세요.
          </li>
          <li>
            스크린 리더 전달 보완이 필요하면 <code>aria-label</code> 또는{" "}
            <code>aria-describedby</code>를 활용하세요.
          </li>
          <li>
            화학식/수식/주석 번호 같은 적절한 문맥에서만 사용하고 과도한 사용은
            피하세요.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="sub">
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
        <img src={`${IMG.HTML}/05_html_10.png`} alt="sub 요소" />
        <figcaption>sub 요소</figcaption>
      </figure>
    </>
  );
}

export default SubElementPage;
