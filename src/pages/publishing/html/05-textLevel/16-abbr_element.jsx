import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "abbr_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "abbr element",
  description:
    "abbr 요소는 HTML 문서에서 약어나 축약어를 나타낼 때 사용하는 인라인 태그로, title 속성과 함께 사용하여 약어의 전체 뜻이나 설명을 제공할 수 있으며 브라우저는 마우스를 올렸을 때 툴팁으로 해당 내용을 보여줍니다. 이 페이지에서는 abbr 요소의 주요 역할 및 특징을 설명하고, abbr 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, abbr, 약어",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_300" aria-hidden />;
}

function AbbrElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;abbr&gt;</code> 요소는 약어나 축약어(abbreviation)를
          나타내는 시맨틱 태그로, <code className="weight-600">title</code>{" "}
          속성과 함께 사용하면 전체 뜻을 툴팁으로 제공할 수 있습니다.
          <br />
          보조 기술(스크린 리더 등)이 의미를 더 정확히 전달하도록 도와 접근성과
          가독성을 높입니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>약어 또는 축약어 정의</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;abbr&gt;</code>는 약어를 문서에서 명확히 표현합니다.
              </li>
              <li>예: HTML = HyperText Markup Language</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>title 속성과 함께 사용</strong>
            <ul className="dot_lst">
              <li>
                <code>title</code> 속성으로 전체 의미를 제공할 수 있습니다.
              </li>
              <li>마우스 오버 시 툴팁으로 노출됩니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성 개선</strong>
            <p>스크린 리더 사용자에게 약어 의미를 전달하는 데 도움이 됩니다.</p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;abbr&gt;</code> 요소는 기본적으로 인라인 레벨 요소입니다.
        </p>
        <CodeBlock title="abbr element CSS" className="mt_m" language="css">
          {`abbr {
  display: inline;
}

abbr[title] {
  display: inline;
  text-decoration: underline dotted;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="abbr element syntax" className="mt_l" language="html">
          {`<abbr title="풀 네임 또는 설명">약어</abbr>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            [title]
            <i className="attr_optional">선택 사항</i>
            <span className="t_blue el_inline_block">
              &lt;abbr title="풀 네임 또는 설명"&gt;
            </span>
          </h3>
          <p className="mt_m">
            약어의 의미/설명을 제공하는 속성입니다. 없으면 브라우저가 특별한
            툴팁 정보를 제공하지 않습니다.
          </p>
          <CodeBlock
            title="abbr 요소의 title 속성"
            className="mt_m"
            language="html"
          >
            {`<abbr title="HyperText Markup Language">HTML</abbr>`}
          </CodeBlock>
        </article>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            <code className="font-21-important">title</code> 속성이 없는 약어
          </h3>
          <CodeBlock
            title="title 속성이 없는 약어"
            className="mt_m"
            language="html"
          >
            {`<p>코딩 언어 중 하나는 <abbr>JS</abbr>입니다.</p>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">약어의 전체 의미 제공</h3>
          <p className="mt_ms">
            약어에 마우스를 올리면 <code>title</code> 속성 내용이 툴팁으로
            표시됩니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.16.abbr_element_1.html"
                className="min_height_300 mb_result_height_300"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="약어의 전체 의미 제공"
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
            약어에는 가능하면 <code>title</code> 속성을 추가해 전체 의미를
            제공하세요.
          </li>
          <li>
            브라우저별 표시 차이가 있으므로 필요하면 CSS로 시각적 강조를
            보완하세요.
          </li>
          <li>
            문맥에서 이미 전체 의미를 설명했다면 <code>title</code> 중복 정보를
            과도하게 반복하지 않는 것이 좋습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="abbr">
        <ul>
          <li className="ie">7+</li>
          <li className="edge">지원</li>
          <li className="chrome">2.0</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/05_html_16.png`} alt="abbr 요소" />
        <figcaption>abbr 요소</figcaption>
      </figure>
    </>
  );
}

export default AbbrElementPage;
