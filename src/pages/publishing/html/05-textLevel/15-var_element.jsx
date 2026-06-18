import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "var_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "var element",
  description:
    "var(variable) 요소는 HTML 문서에서 수학식의 변수, 프로그래밍 코드의 변수명 또는 사용자 정의 식별자를 나타낼 때 사용하는 인라인 태그로, 브라우저는 기본적으로 기울임체로 렌더링하며 일반 텍스트와 구분하여 해당 내용이 변수임을 의미적으로 명확히 전달합니다. 이 페이지에서는 var 요소의 주요 역할 및 특징을 설명하고, var 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, var, variable, 변수",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_300" aria-hidden />;
}

function VarElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;var&gt;</code> 요소는 수학식이나 프로그래밍 코드에서
          변수(variable)를 나타내는 시맨틱 태그로, 변수명/식별자/미지수를 표현할
          때 사용됩니다.
          <br />
          브라우저는 기본적으로 기울임체로 렌더링하며 일반 텍스트와 변수 표현을
          의미적으로 구분해 전달합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>가변 값을 표현</strong>
            <ul className="dot_lst">
              <li>
                수식의 미지수, 함수 인수, 코드 변수명을 표현할 때 사용합니다.
              </li>
              <li>
                예: <code>E = mc²</code>에서 <code>m</code>, <code>c</code>
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>의미론적 역할</strong>
            <p>
              단순 스타일링이 아니라 "변수" 의미를 전달해 문서 가독성을
              높입니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다른 요소와의 관계</strong>
            <p>
              코드 전체는 <code>&lt;code&gt;</code>, 입력 안내는{" "}
              <code>&lt;kbd&gt;</code>, 출력은 <code>&lt;samp&gt;</code>와
              구분해 사용합니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <CodeBlock title="var element CSS" className="mt_l" language="css">
          {`var {
  display: inline;
  font-style: italic;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="var element syntax" className="mt_l" language="html">
          {`<var>변수 이름</var>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;var&gt;</code> 요소는 고유 속성이 없으며 글로벌 속성(
          <code>class</code>, <code>id</code>, <code>style</code>,{" "}
          <code>aria-*</code>, <code>data-*</code>)만 사용할 수 있습니다.
        </p>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">수학 공식</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.15.var_element_1.html"
                className="min_height_300 mb_result_height_320"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="수학 공식"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">코드에서 변수 표현</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.15.var_element_2.html"
                className="min_height_300 mb_result_height_240"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="코드에서 변수 표현"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 변수</h3>
          <CodeBlock
            title="접근성을 고려한 변수"
            className="mt_m"
            language="html"
          >
            {`<p>
  수학식에서 <var aria-label="변수 a">a</var>와 <var aria-label="변수 b">b</var>는 미지수입니다.
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
            <code>&lt;var&gt;</code>는 변수/가변 값 의미가 있을 때만 사용하고
            단순 이탤릭 스타일 목적 사용은 피하세요.
          </li>
          <li>
            문맥상 변수 의미가 불명확한 경우에는 주변 설명을 함께 제공하세요.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="var">
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
        <img src={`${IMG.HTML}/05_html_15.png`} alt="var 요소" />
        <figcaption>var 요소</figcaption>
      </figure>
    </>
  );
}

export default VarElementPage;
