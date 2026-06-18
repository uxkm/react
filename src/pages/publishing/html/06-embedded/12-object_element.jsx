import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "object_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "object element",
  description:
    "object 요소는 HTML 문서에서 다양한 외부 콘텐츠(예: 이미지, HTML 문서, PDF, 멀티미디어 등)를 삽입할 수 있도록 하는 범용 임베드 태그로, data, type, width, height 등의 속성을 통해 삽입할 리소스의 경로와 형식을 정의하며 콘텐츠를 불러오지 못했을 때를 대비해 대체 콘텐츠를 내부에 작성할 수 있는 점이 특징입니다. 이 페이지에서는 object 요소의 주요 역할 및 특징을 설명하고, object 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, object",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function ObjectElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;object&gt;</code> 요소는{" "}
          <b>
            외부 리소스(예: 이미지, 오디오, 비디오, PDF, SVG, HTML 문서 등)를
            HTML 문서 안에 포괄적으로 삽입할 수 있는 시맨틱 태그
          </b>
          로, 다양한 콘텐츠 형식을 포함할 수 있도록 설계된{" "}
          <b>범용 임베드(embed) 요소</b>입니다.
          <br />
          <code>data</code>, <code>type</code>, <code>width</code>,{" "}
          <code>height</code> 등의 속성을 통해{" "}
          <b>삽입할 리소스의 경로와 형식을 지정</b>하며, 콘텐츠를 불러오지
          못했을 경우를 대비해 대체 콘텐츠를 내부에 작성할 수도 있습니다.{" "}
          <code>&lt;embed&gt;</code>보다 유연하지만, 삽입된 콘텐츠는{" "}
          <b>독립된 문서로 취급되기 때문에</b> CSS나 JavaScript로 내부를 직접
          제어할 수 없습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>다양한 외부 콘텐츠 삽입 가능</strong>
            <ul className="dot_lst">
              <li>
                PDF, 비디오, 오디오, 플래시, 다른 웹 페이지 등 다양한 파일
                형식을 문서에 포함할 수 있습니다.
              </li>
              <li>
                MIME 타입을 지정하여 적절한 애플리케이션에서 실행되도록 할 수
                있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>&lt;embed&gt; 요소보다 유연한 기능 제공</strong>
            <p>
              <code>&lt;object&gt;</code> 요소 내에 대체 콘텐츠를 포함할 수
              있어, 브라우저에서 지원하지 않는 경우에도 다른 콘텐츠를 보여줄 수
              있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>플러그인과의 호환성</strong>
            <p>
              <code>&lt;object&gt;</code> 요소는 플러그인 기반 콘텐츠(예: Flash,
              Java Applet 등)도 지원하지만, 최근에는 HTML5 표준이 권장됩니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>폼과 연동 가능 (form 속성 지원)</strong>
            <p>
              <code>&lt;object&gt;</code> 요소는 <code>&lt;form&gt;</code>{" "}
              요소와 함께 사용할 수 있어 폼 데이터와 연동할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>HTML 요소 포함 가능</strong>
            <p>
              <code>&lt;embed&gt;</code> 요소와 달리 <code>&lt;object&gt;</code>{" "}
              내부에 텍스트, 이미지, 링크 등 HTML 요소를 포함할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>JavaScript와 연동하여 동적으로 조작 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>getElementById()</code> 등을 활용하여 동적으로 속성을
                변경할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>&lt;param&gt; 요소와 함께 사용 가능</strong>
            <ul className="dot_lst">
              <li>
                객체의 추가 속성을 설정할 때 <code>&lt;param&gt;</code> 요소를
                함께 사용할 수 있습니다.
              </li>
              <li>
                예를 들어, 비디오 자동 재생 여부, 컨트롤 표시 여부 등을 지정할
                수 있습니다.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;object&gt;</code> 요소는 기본적으로 인라인 블록 레벨
          요소입니다.
        </p>
        <CodeBlock title="object element CSS" className="mt_m" language="css">
          {`object {
  display: inline-block;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="object element syntax"
          className="mt_l"
          language="html"
        >
          {`<object data="example.pdf" type="application/pdf" width="600" height="400">
  브라우저가 PDF를 표시할 수 없습니다.
  <a href="example.pdf">PDF 다운로드</a>
</object>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;object&gt;
            </code>{" "}
            속성 요약
          </h3>
          <div className="table_summary value_200 mt_m">
            <ul className="lst_hd">
              <li className="cell value">속성명</li>
              <li className="cell content">설명</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">data</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">포함할 외부 콘텐츠의 URL을 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>type</code>
                </p>
                <p className="cell content">포함할 콘텐츠의 MIME 유형을 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>width</code> / <code>height</code>
                </p>
                <p className="cell content">콘텐츠의 너비 / 높이를 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>form</code>
                </p>
                <p className="cell content">
                  해당 <code>&lt;object&gt;</code> 요소를 포함하는{" "}
                  <code>&lt;form&gt;</code>을 지정
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>name</code>
                </p>
                <p className="cell content">
                  <code>object</code> 요소의 이름을 지정하여 참조 가능
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>usemap</code>
                </p>
                <p className="cell content">
                  이미지 맵을 사용할 경우 맵 ID를 지정
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [data] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;object data="파일 경로(URL)"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;object&gt;</code> 요소가 포함할 외부 콘텐츠의 URL을
            지정합니다.
            <br />
            <code>data</code> 속성이 없으면 <code>object</code> 요소는 아무것도
            표시하지 않습니다.
          </p>
          <CodeBlock
            title="object 속성 [data]"
            className="mt_m"
            language="html"
          >
            {`<object data="example.pdf" type="application/pdf" width="600" height="400">
  PDF가 표시되지 않을 경우 이 텍스트가 나타납니다. <!-- 대체 콘텐츠  -->
</object>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [type] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;object type="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            포함할 콘텐츠의 MIME 유형을 지정합니다.
            <br />
            <code>data</code> 속성과 함께 사용하면 브라우저가 파일을 적절하게
            해석할 수 있도록 도와줍니다.
          </p>
          <CodeBlock
            title="object 속성 [type]"
            className="mt_m"
            language="html"
          >
            {`<object data="example.pdf" type="application/pdf" width="600" height="400">
  PDF가 표시되지 않을 경우 이 텍스트가 나타납니다. <!-- 대체 콘텐츠  -->
</object>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [width / height] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;object width="값" height="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            포함된 콘텐츠의 너비 / 높이를 지정합니다.
            <br />
            단위(<code>px</code>)를 생략하면 픽셀(<code>px</code>)로 자동
            해석됩니다.
          </p>
          <CodeBlock
            title="object 속성 [width / height]"
            className="mt_m"
            language="html"
          >
            {`<object data="example.pdf" width="600" height="400">
  PDF가 표시되지 않을 경우 이 텍스트가 나타납니다. <!-- 대체 콘텐츠  -->
</object>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [form] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;object form="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;object&gt;</code> 요소가 특정 <code>&lt;form&gt;</code>과
            연결될 때 사용됩니다.
            <br />
            <code>form</code> 속성에 폼의 <code>id</code>를 지정하면 해당 폼과
            연관됩니다.
          </p>
          <CodeBlock
            title="object 속성 [form]"
            className="mt_m"
            language="html"
          >
            {`<form id="myForm">
  <object data="survey.html" form="myForm"></object>
</form>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [name] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;object name="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;object&gt;</code> 요소에 이름을 지정하여 JavaScript에서
            참조할 수 있도록 합니다.
            <br />
            <code>window.open</code> 등에서 참조할 때 사용됩니다.
          </p>
          <CodeBlock
            title="object 속성 [name]"
            className="mt_m"
            language="html"
          >
            {`<object data="example.pdf" name="exampleFrame">
  PDF가 표시되지 않을 경우 이 텍스트가 나타납니다. <!-- 대체 콘텐츠  -->
</object>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [usemap] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;object usemap="ID"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;object&gt;</code>가 이미지 맵을 사용할 경우, 해당 맵의{" "}
            <code>id</code>를 지정합니다.
          </p>
          <CodeBlock
            title="object 속성 [usemap]"
            className="mt_m"
            language="html"
          >
            {`<object data="image.svg" usemap="#map"></object>
<map name="map">
  <area shape="rect" coords="0,0,100,100" href="https://example.com">
</map>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn">
            PDF 파일 삽입 및 JavaScript를 활용한 동적 조작
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.12.object_element_1.html"
                className="min_height_600 mb_result_height_400"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="PDF 파일 삽입 및 JavaScript를 활용한 동적 조작"
                minHeight="600px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">외부 웹페이지 포함</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.12.object_element_2.html"
                className="min_height_600 mb_result_height_350"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="외부 웹페이지 포함"
                minHeight="600px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">SVG(벡터 이미지) 삽입</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.12.object_element_3.html"
                className="min_height_460 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="SVG(벡터 이미지) 삽입"
                minHeight="460px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">MP4 비디오 파일 포함</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.12.object_element_4.html"
                className="min_height_370 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="MP4 비디오 파일 포함"
                minHeight="370px"
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
            일부 브라우저에서는 <code>&lt;object&gt;</code> 요소를 완전히
            지원하지 않을 수 있습니다. 특히 비디오, 오디오, 이미지 등의 경우
            HTML5 요소(<code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code>,{" "}
            <code>&lt;img&gt;</code>)를 사용하는 것이 더 안정적이며 권장됩니다.
            <br />
            또한, <code>&lt;iframe&gt;</code>을 사용하여 웹 페이지를 삽입하는
            것이 <code>&lt;object&gt;</code>보다 더 널리 지원됩니다.
          </li>
          <li>
            PDF, 플래시(SWF) 등 일부 콘텐츠는 브라우저에 따라 별도의 플러그인이
            필요할 수 있습니다.
          </li>
          <li>
            모바일 브라우저에서는 PDF 또는 특정 형식의 콘텐츠가 제대로 표시되지
            않을 수도 있습니다.
          </li>
          <li>
            외부 콘텐츠를 포함할 경우, 악성 코드가 포함될 위험이 있으므로 신뢰할
            수 있는 출처에서만 파일을 로드해야 합니다.
            <br />
            XSS(Cross-Site Scripting) 공격의 위험이 있을 수 있어 주의해야
            합니다.
          </li>
          <li>
            <code>&lt;object&gt;</code> 요소는 Flash 및 Java Applet 콘텐츠를
            포함할 수 있지만, 대부분의 브라우저에서는 이러한 기술을 더 이상
            지원하지 않습니다.
            <br />
            HTML5 표준 기술로 대체하는 것이 필요합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="object">
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
        <img src={IMG.HTML + "/06_html_12.png"} alt="object 요소" />
        <figcaption>object 요소</figcaption>
      </figure>
    </>
  );
}

export default ObjectElementPage;
