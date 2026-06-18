import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "embed_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "embed element",
  description:
    "embed 요소는 HTML 문서에서 외부 리소스(예: 미디어, SVG, PDF 등)를 현재 페이지에 직접 삽입할 수 있도록 하는 태그로, src, type, width, height 등의 속성을 사용하여 삽입할 파일의 경로와 형식, 크기를 지정할 수 있으며 브라우저는 해당 콘텐츠를 내장 프레임 안에 렌더링합니다. 이 페이지에서는 embed 요소의 주요 역할 및 특징을 설명하고, embed 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, embed",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function EmbedElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;embed&gt;</code> 요소는
          <b>
            외부 리소스(예: 멀티미디어, 플러그인 기반 콘텐츠, SVG, PDF 등)를
            현재 HTML 문서 내에 <strong>직접 삽입(embed)</strong>할 때 사용하는{" "}
            <i className="underline">비시맨틱 태그</i>
          </b>
          입니다.
          <br />
          <code>src</code> 속성으로 삽입할 파일 경로를 지정하며,{" "}
          <code>type</code>, <code>width</code>, <code>height</code> 등의
          속성으로 <b>컨텐츠의 형식과 표시 크기</b>를 정의할 수 있습니다.{" "}
          <code>&lt;iframe&gt;</code>이나 <code>&lt;object&gt;</code>와
          유사하지만, <b>상대적으로 간단하고 제한적인 제어만 가능</b>하며,
          삽입된 콘텐츠는 <b>독립적인 외부 리소스로 동작</b>하므로 CSS나
          JavaScript로 내부 내용을 직접 제어할 수는 없습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>외부 콘텐츠 임베딩(Embedding)</strong>
            <p>
              <code>&lt;embed&gt;</code> 요소는 PDF, SWF(플래시), 오디오,
              비디오, 다른 웹페이지 등 다양한 콘텐츠를 포함할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>별도의 플러그인 또는 브라우저 지원 필요</strong>
            <p>
              일부 콘텐츠는 브라우저에서 기본적으로 지원하지 않을 수 있으며,
              플러그인(예: Adobe Flash, PDF Viewer)이 필요할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>독립적인 컨텐츠 표시</strong>
            <p>
              <code>&lt;iframe&gt;</code>과 유사하지만, HTML 문서를 포함하는
              용도보다는 미디어 콘텐츠를 직접 표시하는 데 특화되어 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>자동 렌더링</strong>
            <ul className="dot_lst">
              <li>
                외부 파일을 직접 삽입하여, 별도의 파일 로드 없이 브라우저 내에서
                자동으로 콘텐츠를 렌더링합니다.
              </li>
              <li>
                브라우저에서 지원하는 콘텐츠 형식에 따라 렌더링되며, 형식이 맞지
                않으면 빈 공간이 표시될 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>웹 표준과의 호환성</strong>
            <ul className="dot_lst">
              <li>
                HTML5에서 <code>&lt;embed&gt;</code> 요소는 웹 표준에 맞게 기존
                플러그인 사용을 대체할 수 있습니다.
              </li>
              <li>
                특히 비디오와 오디오 형식은 <code>&lt;embed&gt;</code> 요소 대신{" "}
                <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code> 요소로
                대체할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>CSS 및 JavaScript와 연동 가능</strong>
            <p>
              CSS로 크기 조정이 가능하며, JavaScript로 동적으로 컨트롤할 수
              있습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;embed&gt;</code> 요소는 기본적으로 인라인 블록 레벨
          요소입니다.
        </p>
        <CodeBlock title="embed element CSS" className="mt_m" language="css">
          {`embed {
  display: inline-block;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="embed element syntax"
          className="mt_l"
          language="html"
        >
          {`<embed src="example.pdf" type="application/pdf" width="600" height="400"> <!-- embed -->`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;embed&gt;
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
                  <code className="t_darkgreen">src</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">포함할 외부 콘텐츠의 URL을 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>type</code>
                </p>
                <p className="cell content">콘텐츠의 MIME 타입을 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>width</code> / <code>height</code>
                </p>
                <p className="cell content">콘텐츠의 너비 / 높이를 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>align</code>
                </p>
                <p className="cell content">
                  콘텐츠의 정렬 방식을 지정 (HTML5에서는 비권장)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>name</code>
                </p>
                <p className="cell content">
                  객체의 이름을 지정하여 <code>window.open</code> 등에서 참조
                  가능
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [src] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;embed src="파일 경로(URL)"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;embed&gt;</code> 요소가 포함할 외부 콘텐츠의 URL을
            지정합니다.
            <br />
            <code>src</code> 속성이 없으면 <code>embed</code>는 아무것도
            표시하지 않습니다.
          </p>
          <CodeBlock title="embed 속성 [src]" className="mt_m" language="html">
            {`<embed src="example.pdf" width="600" height="400">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [type] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;embed type="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            포함할 콘텐츠의 MIME 유형을 지정합니다. 브라우저가 파일 형식을
            올바르게 해석하도록 도와줍니다.
          </p>
          <CodeBlock title="embed 속성 [type]" className="mt_m" language="html">
            {`<embed src="example.pdf" type="application/pdf" width="600" height="400"> <!-- type -->`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [width / height] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;embed width="값" height="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            포함된 콘텐츠의 너비 / 높이를 지정합니다. 단위(<code>px</code>)를
            생략하면 픽셀(<code>px</code>)로 자동 해석됩니다.
          </p>
          <CodeBlock
            title="embed 속성 [width / height]"
            className="mt_m"
            language="html"
          >
            {`<embed src="example.pdf" width="800" height="600">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [align]{" "}
            <i className="attr_optional">선택 사항 - HTML5에서 비권장</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;embed align="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            콘텐츠를 주변 요소와 정렬하는 속성입니다.
            <br />
            <mark>
              HTML5에서는 더 이상 사용되지 않으며, 대신 CSS의 float 또는{" "}
              <code>text-align</code>을 사용해야 합니다.
            </mark>
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>사용 가능한 값 :</dt>
            <dd>
              <code>left</code>
            </dd>
            <dd>
              <code>right</code>
            </dd>
            <dd>
              <code>top</code>
            </dd>
            <dd>
              <code>bottom</code>
            </dd>
            <dd>
              <code>middle</code>
            </dd>
          </dl>
          <CodeBlock
            title="embed 속성 [align]"
            className="mt_m"
            language="html"
          >
            {`<embed src="example.mp3" align="right">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [name] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;embed name="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;embed&gt;</code> 요소에 이름을 지정하여{" "}
            <code>window.open</code> 등에서 참조할 수 있도록 합니다. 여러 개의{" "}
            <code>&lt;embed&gt;</code> 요소를 제어할 때 유용합니다.
          </p>
          <CodeBlock title="embed 속성 [name]" className="mt_m" language="html">
            {`<embed src="video.mp4" name="videoPlayer" width="600" height="400">`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn">PDF 파일 삽입 및 미리보기</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.11.embed_element_1.html"
                className="min_height_600 mb_result_height_350"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="PDF 파일 삽입 및 미리보기"
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
                target="html/06-embedded/6.11.embed_element_2.html"
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
                target="html/06-embedded/6.11.embed_element_3.html"
                className="min_height_400 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="SVG(벡터 이미지) 삽입"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">MP4 비디오 파일 포함</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.11.embed_element_4.html"
                className="min_height_300 mb_result_height_250"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="MP4 비디오 파일 포함"
                minHeight="300px"
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
            <code>&lt;embed&gt;</code> 요소는 일부 콘텐츠(예: Flash, Java
            Applet)에서 보안 이슈로 인해 최신 브라우저에서 제한될 수 있습니다.
          </li>
          <li>
            모든 브라우저가 모든 <code>type</code> 속성을 지원하지 않으므로,
            필요하면 대체 콘텐츠(<code>&lt;iframe&gt;</code> 등)를 고려해야
            합니다.
          </li>
          <li>
            모바일 브라우저에서는 PDF나 비디오 삽입이 제한될 수 있으며, 별도의
            뷰어 앱이 필요할 수도 있습니다.
          </li>
          <li>
            <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>,{" "}
            <code>&lt;iframe&gt;</code> 등의 사용을 권장합니다. 특히 플러그인
            기반 콘텐츠는 점차 HTML5 표준을 따르는 미디어 요소로 대체되고
            있습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="embed">
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
        <img src={IMG.HTML + "/06_html_11.png"} alt="embed 요소" />
        <figcaption>embed 요소</figcaption>
      </figure>
    </>
  );
}

export default EmbedElementPage;
