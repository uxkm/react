import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";
import CodeBlock from "@/components/code/CodeBlock";

const PAGE_LAYOUT = {
  mainClass: "only_empty",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: false,
  contentList: true,
  depth3Last: false,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "단일 요소 또는 빈 요소",
  description:
    "단일 요소(또는 빈 요소, self-closing element)는 내용을 포함하지 않고 열기 태그만으로 의미를 가지는 HTML 요소를 말합니다. 이 페이지에서는 단일 요소의 특징과 종류를 소개합니다.",
  keyword:
    "Markup, HTML, elements, tag, 요소, 단일 요소, 빈 요소, empty elements, empty tag, img, hr, br",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_350" aria-hidden />;
}

function OnlyEmptyPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <strong>단일 요소(또는 빈 요소, self-closing element)</strong>는{" "}
          <b>내용을 포함하지 않고 열기 태그만으로 의미를 가지는 HTML 요소</b>를
          말합니다.
          <br />
          이러한 요소는 <b>종료 태그 없이도 독립적으로 동작</b>하며, 일반적으로{" "}
          <b>
            브라우저가 자체적으로 처리하는 기능이나 시각적 표시를 위한 간단한
            태그
          </b>
          입니다.
          <br />
          대표적으로 <code>&lt;br&gt;</code>, <code>&lt;img&gt;</code>,{" "}
          <code>&lt;hr&gt;</code>, <code>&lt;input&gt;</code>,{" "}
          <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code> 등이 있으며,
          HTML5에서는 슬래시(<code>/</code>) 없이 <code>&lt;br&gt;</code>,{" "}
          <code>&lt;img&gt;</code>처럼 작성해도 유효합니다. 단일 요소는{" "}
          <b>자체적으로 닫히기 때문에 중첩 구조가 필요 없는 경우</b>에
          사용됩니다.
        </p>
      </blockquote>

      <section className="mt_xxl indent">
        <h2 className="ml_mn">단일 요소의 종류</h2>

        <article className="indent mt_l">
          <h3 className="ml_mn t_blue font-20 font-family-code">
            <code className="weight-600 font-20-important t_darkblue">
              &lt;br&gt;
            </code>{" "}
            <i className="font-18 weight-400 font-family-en">(Line Break)</i>
          </h3>
          <p className="mt_ms">
            텍스트 또는 인라인 요소에 대해 시각적인 줄바꿈이 필요할 때 사용되며,
            일반적으로 단락을 구분하기 위해 사용되지는 않습니다.
          </p>
          <CodeBlock title="단일 요소 - br" language="html">
            {`<p>
  안녕하세요.<br>
  UXKM 입니다.
</p>`}
          </CodeBlock>
          <p className="mt_ms">
            <a
              href="/publishing/html/05-textLevel/06-br_element"
              target="_blank"
              title="br 요소 자세히보기"
              className="reference_link weight-600 box_link"
            >
              [br 요소] 자세한 설명 보기
            </a>
          </p>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue font-20 font-family-code">
            <code className="weight-600 font-20-important t_darkblue">
              &lt;hr&gt;
            </code>{" "}
            <i className="font-18 weight-400 font-family-en">
              (Horizontal Rule)
            </i>
          </h3>
          <p className="mt_ms">
            HTML에서 시각적인 수평선을 삽입하는 데 사용됩니다. 여러 줄의
            텍스트를 구분하거나 섹션을 나눌 때 유용하게 쓰입니다.
            <br />
            기본적으로 스타일이 적용되지 않고, CSS를 사용하여 스타일을 추가할 수
            있으며, 주로 단락의 변경, 콘텐츠의 구분, 주제의 전환 등을 나타내는
            데 사용됩니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.6.only_empty_hr.html"
                className="min_height_350 mb_result_height_250"
                mode="htmlmixed"
                browser="default"
                theme="ayu-mirage"
                title="단일 요소 - hr"
                minHeight="350px"
                result
              />
            </Suspense>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue font-20 font-family-code">
            <code className="weight-600 font-20-important t_darkblue">
              &lt;img&gt;
            </code>{" "}
            <i className="font-18 weight-400 font-family-en">(Image)</i>
          </h3>
          <p className="mt_ms">
            웹 페이지에 이미지를 삽입하는 데 사용됩니다. <code>src</code>{" "}
            속성으로 이미지 파일의 경로를 지정하고, <code>alt</code> 속성으로
            이미지의 대체 텍스트를 지정합니다.
          </p>
          <CodeBlock title="단일 요소 - img" language="html">
            {`<img src="image.jpg" alt="이미지 설명">`}
          </CodeBlock>
          <p className="mt_ms">
            <a
              href="/publishing/html/06-embedded/02-img_element"
              target="_blank"
              title="br 요소 자세히보기"
              className="reference_link weight-600 box_link"
            >
              [img 요소] 자세한 설명 보기
            </a>
          </p>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue font-20 font-family-code">
            <code className="weight-600 font-20-important t_darkblue">
              &lt;input&gt;
            </code>{" "}
            <i className="font-18 weight-400 font-family-en">(Input Field)</i>
          </h3>
          <p className="mt_ms">
            사용자로부터 입력을 받는 필드를 생성하는 데 사용됩니다. type
            속성으로 입력 유형을 지정할 수 있습니다.
            <br />
            (예: text, password, radio, checkbox 등)
          </p>
          <CodeBlock title="단일 요소 - input" language="html">
            {`<form>
  <input type="text" name="username" placeholder="이름을 입력하세요.">
</form>`}
          </CodeBlock>
          <p className="mt_ms">
            <a
              href="/publishing/html/09-forms/03-input_element_part1"
              target="_blank"
              title="br 요소 자세히보기"
              className="reference_link weight-600 box_link"
            >
              [input 요소] 자세한 설명 보기
            </a>
          </p>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue font-20 font-family-code">
            <code className="weight-600 font-20-important t_darkblue">
              &lt;meta&gt;
            </code>{" "}
            <i className="font-18 weight-400 font-family-en">(Metadata)</i>
          </h3>
          <p className="mt_ms">
            문서에 대한 메타데이터를 제공하는 데 사용됩니다. 일반적으로{" "}
            <code>&lt;head&gt;</code> 요소 안에 위치합니다.
          </p>
          <CodeBlock title="단일 요소 - meta" language="html">
            {`<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
          </CodeBlock>
          <p className="mt_ms">
            <a
              href="/publishing/html/01-htmlStart/02-html_basic#inner_link:meta"
              target="_blank"
              title="br 요소 자세히보기"
              className="reference_link weight-600 box_link"
            >
              [meta 요소] 자세한 설명 보기
            </a>
          </p>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue font-20 font-family-code">
            <code className="weight-600 font-20-important t_darkblue">
              &lt;link&gt;
            </code>{" "}
            <i className="font-18 weight-400 font-family-en">
              (Link to External Resource)
            </i>
          </h3>
          <p className="mt_ms">
            외부 리소스(예: CSS 파일)를 문서에 연결하는 데 사용됩니다. 주로{" "}
            <code>&lt;head&gt;</code> 요소 안에 위치합니다.
          </p>
          <CodeBlock title="단일 요소 - link" language="html">
            {`<link rel="stylesheet" href="styles.css">`}
          </CodeBlock>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue font-20 font-family-code">
            <code className="weight-600 font-20-important t_darkblue">
              &lt;base&gt;
            </code>{" "}
            <i className="font-18 weight-400 font-family-en">(Base URL)</i>
          </h3>
          <p className="mt_ms">
            모든 상대 URL에 대한 기본 URL을 설정하는 데 사용됩니다. 주로{" "}
            <code>&lt;head&gt;</code> 요소 안에 위치합니다.
          </p>
          <CodeBlock title="단일 요소 - base" language="html">
            {`<head>
  <base href="https://www.example.com/">
</head>`}
          </CodeBlock>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue font-20 font-family-code">
            <code className="weight-600 font-20-important t_darkblue">
              &lt;source&gt;
            </code>{" "}
            <i className="font-18 weight-400 font-family-en">(Media Source)</i>
          </h3>
          <p className="mt_ms">
            <code>&lt;video&gt;</code> 또는 <code>&lt;audio&gt;</code> 요소
            안에서 사용할 수 있는 다양한 미디어 파일을 지정하는 데 사용됩니다.
          </p>
          <CodeBlock title="단일 요소 - source" language="html">
            {`<!-- video -->
<video>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  지원하지 않는 브라우저입니다.
</video>`}
          </CodeBlock>
          <p className="mt_ms">
            <a
              href="/publishing/html/06-embedded/09-source_element"
              target="_blank"
              title="br 요소 자세히보기"
              className="reference_link weight-600 box_link"
            >
              [source 요소] 자세한 설명 보기
            </a>
          </p>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue font-20 font-family-code">
            <code className="weight-600 font-20-important t_darkblue">
              &lt;area&gt;
            </code>{" "}
            <i className="font-18 weight-400 font-family-en">
              (Image Map Area)
            </i>
          </h3>
          <p className="mt_ms">
            이미지 맵에서 클릭 가능한 영역을 정의하는 데 사용됩니다.{" "}
            <code>shape</code>, <code>coords</code>, <code>href</code> 등의
            속성을 통해 정의할 수 있습니다.
          </p>
          <CodeBlock title="단일 요소 - area" language="html">
            {`<img src="planets.jpg" usemap="#planetmap" alt="행성 이미지">
<map name="planetmap">
  <area shape="rect" coords="34,44,270,350" alt="행성1" href="planet1.html">
  <area shape="circle" coords="120,200,75" alt="행성2" href="planet2.html">
</map>`}
          </CodeBlock>
          <p className="mt_ms">
            <a
              href="/publishing/html/06-embedded/04-area_element"
              target="_blank"
              title="br 요소 자세히보기"
              className="reference_link weight-600 box_link"
            >
              [area 요소] 자세한 설명 보기
            </a>
          </p>
        </article>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn">단일 요소의 특징</h2>

        <blockquote className="uk_note mt_xl" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>
            단일 요소(Self-closing element)는{" "}
            <b>시작 태그만 존재하고 종료 태그 없이 스스로 닫히는 태그</b>로,{" "}
            <b>
              내용을 포함하지 않으며 주로 속성을 통해 기능이나 표시 방식이
              정의됩니다.
            </b>
          </p>
        </blockquote>

        <article className="tit_h3 weight-400-before indent mt_xl">
          <h3 className="ml_mn t_blue">자체 닫힘</h3>
          <p className="mt_ms">
            단일 요소는 자체적으로 닫히며 별도의 종료 태그가 필요하지 않습니다.
            <br />
            또한, 일부 단일 요소는 doctype에 따라 슬래시(<code>/</code>) 사용
            여부가 달라집니다.
          </p>
          <CodeBlock title="단일 요소 특징 - 자체 닫힘" language="html">
            {`<!-- html5 (기본) -->
<br>
<img src="image.jpg" alt="이미지 설명">

<!-- xhtml -->
<br />
<img src="image.jpg" alt="이미지 설명" />`}
          </CodeBlock>
        </article>

        <article className="tit_h3 weight-400-before indent mt_xl">
          <h3 className="ml_mn t_blue">내용 없음</h3>
          <p className="mt_ms">
            단일 요소는 내용(content)을 가지지 않습니다. 이 요소들은
            속성(attributes)을 통해 필요한 정보를 전달합니다.
          </p>
          <CodeBlock title="단일 요소 특징 - 내용 없음" language="html">
            {`<!-- 내용(content)을 가지는 요소는 반드시 닫는 태그가 있음 -->
<p>...content...</p>

<!-- 단일 요소는 닫는 태그가 없기 때문에 내용(content)을 감싸는 마크업 구조를 가질 수 없음 -->
____error__<img src="image.jpg" alt="이미지 설명">...content...</img>__error____ <!-- 잘못된 예 -->
<img src="image.jpg" alt="이미지 설명"> <!-- 올바른 예 -->`}
          </CodeBlock>
        </article>

        <article className="tit_h3 weight-400-before indent mt_xl">
          <h3 className="ml_mn t_blue">속성으로 기능 지정</h3>
          <p className="mt_ms">
            단일 요소의 기능과 동작은 주로 속성을 통해 정의됩니다.
            <br />
            아래 예제에서 <code>&lt;link&gt;</code> 요소는 속성을 통해 외부
            스타일시트를 문서에 연결하고, <code>&lt;source&gt;</code> 요소는
            속성을 통해 비디오 소스를 지정합니다.
          </p>
          <CodeBlock
            title="단일 요소 특징 - 속성으로 기능 지정"
            language="html"
          >
            {`<!-- link -->
<link rel="stylesheet" href="styles.css">

<!-- source -->
<source src="video.mp4" type="video/mp4">`}
          </CodeBlock>
        </article>

        <article className="tit_h3 weight-400-before indent mt_xl">
          <h3 className="ml_mn t_blue">DOM 구조의 단순화</h3>
          <p className="mt_ms">
            단일 요소는 DOM 트리를 단순하게 유지합니다. 불필요한 중첩을 피하고,
            명확한 구조를 유지합니다.
          </p>
          <CodeBlock title="단일 요소 특징 - DOM 구조의 단순화" language="html">
            {`<meta charset="UTF-8">
<base href="https://www.example.com/">`}
          </CodeBlock>
        </article>
      </section>

      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/02_html_06.png`} alt="단일 요소" />
        <figcaption>단일 요소</figcaption>
      </figure>
    </>
  );
}

export default OnlyEmptyPage;
