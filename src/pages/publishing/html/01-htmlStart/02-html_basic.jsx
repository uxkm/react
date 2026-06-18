import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "html_start",
  type: "publishing",
  info: true,
  note: false,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "HTML 기본구조",
  description:
    "HTML 문서는 웹 페이지의 내용을 구조화하기 위한 기본 뼈대를 가지며, 반드시 문서 유형 선언(DOCTYPE)과 루트 요소(html)부터 시작됩니다. 그 안에는 문서의 정보와 설정을 담는 head 영역과, 실제 화면에 표시되는 콘텐츠를 담는 body 영역으로 구성됩니다. 이 페이지에서는 HTML5 기준의 가장 기본적인 문서 구조를 설명합니다.",
  keyword:
    "Markup, HTML, doctype, DTD, head, body, title, meta, HTML 기본구조, html5, 루트 요소, 헤드, 본문",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_660" aria-hidden />;
}

function HtmlBasicPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          HTML의 기본 구조는 웹 페이지를 구성하는 골격으로,{" "}
          <strong>문서 형식 선언(Doctype)</strong>,{" "}
          <strong>루트 요소(html)</strong>, <strong>헤드(Head)</strong>,{" "}
          <strong>본문(Body)</strong>으로 구성됩니다.
          <br />이 구조는 웹 페이지 개발에 필수적이며, 웹 브라우저가 올바르게
          해석하여 사용자에게 메타데이터와 실제 콘텐츠를 구분하여 표시합니다.
        </p>
      </blockquote>

      <section className="view_editor edit_code mt_xxl">
        <h2 className="ve_tit">HTML 기본 구조</h2>
        <Suspense fallback={<EditorFallback />}>
          <UkEditorTarget
            target="html/01-htmlStart/1.1.html_basic_markup.html"
            className="indent mt_m min_height_660 mb_result_height_430"
            mode="htmlmixed"
            browser="default"
            theme="ayu-mirage"
            title="HTML 기본 구조"
            minHeight="660px"
            result
          />
        </Suspense>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn">HTML 구조 설명</h2>
        <p className="mt_m">
          다음은 위 예제 <b className="t_blue">HTML 기본 구조</b> 기준으로 각
          요소에 대한 설명입니다.
        </p>

        <article className="txt_ex indent mt_ml">
          <h3 className="ml_mn t_blue">문서 형식 선언 (DOCTYPE)</h3>
          <p className="mt_ms">
            문서 형식 선언(Doctype)은 HTML 문서가 어떤 버전의 HTML이나 XHTML로
            작성되었는지 웹 브라우저에게 알려주는 역할을 합니다. Doctype은 웹
            브라우저에게 문서를 올바르게 해석하고 렌더링하는 데 필요한 정보를
            제공합니다.
            <br />
            Doctype 선언은 HTML 문서의 맨 위에 위치하며 다음과 같은 형식으로
            작성됩니다.
          </p>
          <ol className="ol_lst info_lst gap-column-important-m mt_m">
            <li className="t_blue_before weight-700-before">
              <strong className="t_blue">HTML5 Doctype 선언</strong>
              <CodeBlock title="html5 DOCTYPE" language="html">
                {`<!DOCTYPE html>`}
              </CodeBlock>
              <p className="mt_s">
                <b className="t_blue">
                  위 예제에 사용된 Doctype으로 현재 대부분의 웹에서 사용되는
                  표준 Doctype입니다.
                </b>
                <br />
                HTML5에서는 더 이상 DTD(Document Type Definition)를 사용하지
                않고 간단한 Doctype 선언만으로 버전을 명시합니다.
              </p>
            </li>
            <li>
              <strong className="t_666">이전 버전의 Doctype 선언</strong>
              <p>
                이전 버전의 HTML에서는 다른 형식의 Doctype 선언을 사용해야
                했습니다.
              </p>
              <ul className="dot_lst">
                <li className="font-14-important-before mt_s">
                  <strong className="font-14-important mb_0 t_666">
                    HTML 4.01 Strict DTD
                  </strong>
                  <CodeBlock title="HTML 4.01 Strict DOCTYPE" language="html">
                    {`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`}
                  </CodeBlock>
                </li>
                <li className="font-14-important-before mt_ms">
                  <strong className="font-14-important mb_0 t_666">
                    XHTML 1.0 Strict
                  </strong>
                  <CodeBlock title="XHTML 1.0 Strict DOCTYPE" language="html">
                    {`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`}
                  </CodeBlock>
                </li>
              </ul>
            </li>
          </ol>
        </article>

        <article className="txt_ex indent mt_l">
          <h3 className="ml_mn t_blue">루트 요소 (html)</h3>
          <p className="mt_ms">
            루트 요소(<code>&lt;html&gt;</code>)는 HTML 문서의 최상위 요소이며,
            모든 다른 HTML 요소들을 포함하는 부모 요소입니다.
            <br />
            모든 HTML 문서는 <code>&lt;html&gt;</code> 요소로 시작하며, 다음과
            같은 형식으로 작성됩니다.
          </p>
          <CodeBlock title="html element" language="html">
            {`<!DOCTYPE html>
<html lang="ko">
  <!-- HTML 문서의 내용 -->
</html>`}
          </CodeBlock>
          <p className="mt_ms">
            <code>&lt;html&gt;</code> 요소에는{" "}
            <code className="t_navy">lang</code> 속성이 포함될 수 있습니다.
            만약, 영어로 작성된 문서라면{" "}
            <code className="t_blue">lang="en"</code>
            과 같이 작성됩니다.
            <br />
            <code className="t_blue">lang</code> 속성은 스크린 리더 및 검색 엔진
            등이 문서의 언어를 이해하는 데 도움이 됩니다.
          </p>
        </article>

        <article className="txt_ex indent mt_l">
          <h3 className="ml_mn t_blue">헤드 (head)</h3>
          <p className="mt_ms">
            헤드 (<code>&lt;head&gt;</code>) 요소는 HTML 문서의 메타데이터와
            외부 리소스에 대한 정보를 포함하는 부분입니다.{" "}
            <code>&lt;head&gt;</code> 요소는 화면에 직접적으로 보이지 않지만, 웹
            브라우저가 문서를 처리하고 표시하는 데 중요한 역할을 합니다.
            <br />
            <code>&lt;head&gt;</code> 요소는 다음과 같은 요소를 포함합니다.
          </p>
          <ol className="ol_lst info_lst gap-column-important-ml mt_m">
            <li>
              <strong>문서 제목 (title)</strong>
              <p>
                문서의 제목을 지정합니다. 브라우저의 제목 표시줄이나 북마크
                목록에서 표시됩니다.
              </p>
              <CodeBlock title="title element" language="html">
                {`<head>
  <title>문서 제목</title>
</head>`}
              </CodeBlock>
            </li>
            <li>
              <strong>메타데이터(meta data)</strong>
              <p>
                문서의 특정 정보를 정의하는데 사용됩니다. 주로 검색 엔진
                최적화(SEO), 문자 인코딩, 뷰포트 설정 등을 지정합니다.
                <br />
                일반적으로 name과 content 속성을 사용하여 다양한 메타데이터를
                정의합니다.
              </p>
              <CodeBlock title="meta data" language="html">
                {`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="문서에 대한 간단한 설명">
  <meta name="keywords" content="키워드1, 키워드2, 키워드3">
  <meta name="author" content="작성자 이름">
</head>`}
              </CodeBlock>
            </li>
            <li>
              <strong>스타일시트 및 외부 리소스</strong>
              <p>
                문서에 스타일을 적용하기 위해 <code>&lt;style&gt;</code> 요소를
                사용할 수 있으며, CSS 파일, JavaScript 파일 등과 같은 외부
                리소스를 문서에 연결합니다.
              </p>
              <CodeBlock
                title="Style sheets and external resources"
                language="html"
              >
                {`<head>
  <style>
    h1 {
      background-color: #f0f0f0;
    }
    p {
      color: green;
    }
  </style>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js"></script>
</head>`}
              </CodeBlock>
            </li>
          </ol>
        </article>

        <article className="txt_ex indent mt_l">
          <h3 className="ml_mn t_blue">본문 (body)</h3>
          <p className="mt_ms">
            본문 (<code>&lt;body&gt;</code>) 요소는 HTML 문서의 실제 내용을 담고
            있는 부분입니다. 웹 페이지를 구성하는 모든 텍스트, 이미지, 링크,
            테이블, 폼 등의 콘텐츠는 <code>&lt;body&gt;</code> 요소 내에
            포함됩니다.
            <br />
            사용자가 브라우저에서 웹 페이지를 열면 <code>
              &lt;body&gt;
            </code>{" "}
            요소 안에 있는 내용이 표시됩니다.
            <br />
            <code>&lt;body&gt;</code> 요소는 다음과 같은 요소를 포함합니다.
          </p>
          <ol className="ol_lst info_lst gap-column-important-ml mt_m">
            <li>
              <strong>텍스트</strong>
              <p>
                웹 페이지의 본문 내용을 작성할 수 있습니다. 제목, 단락, 목록
                등의 텍스트 요소를 사용하여 웹 페이지의 구조를 정의할 수
                있습니다.
              </p>
              <CodeBlock title="text content" language="html">
                {`<body>
  <h1>본문 제목</h1>
  <p>본문의 첫 번째 단락입니다.</p>
  <p>본문의 두 번째 단락입니다.</p>
</body>`}
              </CodeBlock>
            </li>
            <li>
              <strong>이미지</strong>
              <p>웹 페이지에 이미지를 삽입할 수 있습니다.</p>
              <CodeBlock title="image content" language="html">
                {`<body>
  <img src="/_assets/images/example.jpg" alt="예시 이미지">
</body>`}
              </CodeBlock>
            </li>
            <li>
              <strong>링크</strong>
              <p>다른 웹 페이지로 연결하는 하이퍼링크를 만들 수 있습니다.</p>
              <CodeBlock title="link content" language="html">
                {`<body>
  <a href="https://uxkm.io/" target="_blank">UXKM 바로가기</a>
</body>`}
              </CodeBlock>
              <p className="mt_ms">
                위에 언급된 요소 외에 테이블(<code>&lt;table&gt;</code>), 폼(
                <code>&lt;form&gt;</code>) 요소 등 다양한 구성 요소가 본문 (
                <code>&lt;body&gt;</code>) 요소에 포함됩니다.
              </p>
            </li>
          </ol>
        </article>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn t_blue">한눈에 보는 커리큘럼</h2>
        <figure className="img_figure mt_l">
          <img src={`${IMG.HTML}/01_html_02.png`} alt="HTML 기본 배우기" />
          <figcaption>HTML 기본 배우기</figcaption>
        </figure>
      </section>
    </>
  );
}

export default HtmlBasicPage;
