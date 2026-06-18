import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "q_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "q element",
  description:
    "q 요소는 HTML 문서에서 짧은 인라인 인용문을 표시할 때 사용하는 태그로, 브라우저는 기본적으로 인용된 텍스트 주위에 따옴표를 자동으로 렌더링하며 문장 안에서 다른 사람의 말이나 글을 간결하게 인용할 때 사용됩니다. 이 페이지에서는 q 요소의 주요 역할 및 특징을 설명하고, q 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, q",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_350" aria-hidden />;
}

function QElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;q&gt;</code> 요소는{" "}
          <strong>짧은 인라인 인용문(quotation)</strong>을 나타내는 시맨틱
          태그로, 문장 흐름 안에서 간결한 인용을 표현할 때 사용합니다.
          <br />
          브라우저는 기본적으로 인용된 텍스트 주위에 따옴표를 자동으로
          렌더링합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>짧은 인용문 표현</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;q&gt;</code>는 짧은 인용문을 문장 안에서 표현할 때
                사용합니다.
              </li>
              <li>
                긴 인용문은 <code>&lt;blockquote&gt;</code>가 적합합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>자동 인용부호 렌더링</strong>
            <p>
              언어 설정에 따라 인용부호 모양이 달라질 수 있으며, 인용문 의미를
              시맨틱하게 전달합니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;q&gt;</code> 요소는 기본적으로 인라인 요소이며 아래와 같은
          기본값이 적용됩니다.
        </p>
        <CodeBlock title="q element CSS" className="mt_m" language="css">
          {`q {
  display: inline;
}
q::before {
  content: open-quote;
}
q::after {
  content: close-quote;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="q element syntax" className="mt_l" language="html">
          {`<q>짧은 인용문 텍스트</q>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            [cite]
            <i className="attr_optional">선택 사항</i>
            <span className="t_blue el_inline_block">
              &lt;q cite="출처 URL"&gt;
            </span>
          </h3>
          <p className="mt_m">
            인용문의 출처 URL을 지정합니다. 화면에는 보이지 않지만 메타데이터로
            활용됩니다.
          </p>
          <CodeBlock title="q cite attribute" className="mt_m" language="html">
            {`<q cite="https://example.com">짧은 인용문 입니다.</q>`}
          </CodeBlock>
        </article>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 및 출처가 포함된 인용문</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.13.q_element_1.html"
                className="min_height_350 mb_result_height_350"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="기본 및 출처가 포함된 인용문"
                minHeight="350px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">스타일링 및 따옴표 변경</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.13.q_element_2.html"
                className="min_height_350 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="스타일링 및 따옴표 변경"
                minHeight="350px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">따옴표 제거</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.13.q_element_3.html"
                className="min_height_370 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="따옴표 제거"
                minHeight="370px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">다국어 인용문</h3>
          <CodeBlock title="다국어 인용문" className="mt_m" language="html">
            {`<p lang="en"><q>This is a quote in English.</q></p>
<p lang="fr"><q>Ceci est une citation en français.</q></p>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 인용문</h3>
          <CodeBlock
            title="접근성을 고려한 인용문"
            className="mt_m"
            language="html"
          >
            {`<p>
  <q aria-label="웹 표준은 중요하다는 발언">웹 표준은 중요합니다</q>.
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
            <code>&lt;q&gt;</code>는 짧은 인용문에 적합하며, 긴 인용문은{" "}
            <code>&lt;blockquote&gt;</code>를 사용해야 합니다.
          </li>
          <li>단순 강조 목적이 아닌 실제 인용 의미가 있을 때 사용하세요.</li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="q">
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
        <img src={`${IMG.HTML}/05_html_13.png`} alt="q 요소" />
        <figcaption>q 요소</figcaption>
      </figure>
    </>
  );
}

export default QElementPage;
