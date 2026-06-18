import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "param_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "param element",
  description:
    "param 요소는 HTML 문서에서 object 요소와 함께 사용되며, 삽입된 외부 콘텐츠에 전달할 초기 설정값이나 매개변수를 정의하는 태그로, name과 value 속성을 사용하여 설정 항목과 값을 지정하고 플러그인 기반 콘텐츠에 특정 동작이나 옵션을 전달하는 데 활용됩니다. 이 페이지에서는 param 요소의 주요 역할 및 특징을 설명하고, param 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, param",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function ParamElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;param&gt;</code> 요소는 <code>&lt;object&gt;</code> 요소
          내부에서 사용되며,{" "}
          <b>삽입된 외부 콘텐츠에 전달할 설정 값(파라미터)을 정의하는 태그</b>
          입니다.
          <br />
          <code>name</code>과 <code>value</code> 속성으로 구성되어, 예를 들어{" "}
          <b>플러그인, 미디어 플레이어, 플래시 객체 등</b>에 초기 설정값을
          전달하는 데 사용됩니다. <code>&lt;param&gt;</code>은 화면에 표시되지
          않으며, <code>&lt;object&gt;</code>에 연결된 리소스가 이를 읽어
          처리합니다. 과거 플러그인 기반 콘텐츠에서 많이 사용되었지만,{" "}
          <b>
            현대 웹에서는 사용 빈도가 낮아졌고, 대체 기술이 주로 활용됩니다.
          </b>
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>
              <mark>&lt;object&gt; 요소 내부에서만 사용 가능</mark>
            </strong>
            <p>
              <code>&lt;param&gt;</code> 요소는 <code>&lt;embed&gt;</code>{" "}
              요소와 달리 단독으로 사용할 수 없으며, 반드시{" "}
              <code>&lt;object&gt;</code> 요소 내에서만 동작합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>
              외부 콘텐츠(플러그인, 미디어 플레이어 등)에 설정 값 전달
            </strong>
            <p>
              예를 들어, PDF 뷰어나 비디오 플레이어에 특정 매개변수를 전달하여
              동작을 제어할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>객체의 속성을 동적으로 설정 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>name</code> 속성과 <code>value</code> 속성을 사용하여
                객체의 속성을 지정할 수 있습니다.
              </li>
              <li>
                예를 들어, 자동 재생 여부, 배경색, 볼륨 등을 설정할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>자체적인 콘텐츠를 가지지 않음</strong>
            <p>
              <code>&lt;param&gt;</code> 요소는 빈 태그(self-closing tag)로,
              별도의 콘텐츠를 포함하지 않습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>JavaScript 및 CSS와 함께 사용할 필요 없음</strong>
            <p>
              <code>&lt;param&gt;</code> 요소는 JavaScript 및 CSS 스타일링이
              불가능하며, 오직 객체 설정 값을 정의하는 용도로만 사용됩니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>
              <mark>이전 HTML(HTML4)에서 주로 사용됨</mark>
            </strong>
            <ul className="dot_lst">
              <li>
                과거에는 Flash, Java Applet과 같은 플러그인의 설정을 조정하는 데
                많이 사용되었습니다.
              </li>
              <li>
                <mark>
                  하지만 최근 HTML5에서는 <code>&lt;video&gt;</code>,{" "}
                  <code>&lt;audio&gt;</code> 등의 요소로 대체되면서{" "}
                  <code>&lt;param&gt;</code>의 사용이 줄어들었습니다.
                </mark>
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
          <mark>
            <code>&lt;param&gt;</code> 요소는 특별한 기본 스타일을 가지지
            않으며,
          </mark>{" "}
          기본적으로 스타일링되지 않는 빈 태그로 취급됩니다.
        </p>
        <CodeBlock title="param element CSS" className="mt_m" language="css">
          {`param {
  display: none;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <dl className="dl_dot_lst mt_l">
          <dt>문법 설명 :</dt>
          <dd>
            <code>&lt;object&gt;</code> 요소가 <code>video-player.swf</code>{" "}
            파일을 로드합니다.
          </dd>
          <dd>
            <code>&lt;param name="autoplay" value="true"&gt;</code> : 자동 재생
            설정
          </dd>
          <dd>
            <code>&lt;param name="loop" value="false"&gt;</code> : 반복 재생
            비활성화
          </dd>
        </dl>
        <CodeBlock
          title="param element syntax"
          className="mt_m"
          language="html"
        >
          {`<!-- 기본 문법 -->
<object data="example.mp4" type="video/mp4" width="640" height="360">
  <param name="autoplay" value="true"> <!-- param -->
  <param name="loop" value="true">     <!-- param -->
  브라우저가 동영상을 지원하지 않습니다. <a href="example.mp4" download>example.mp4 다운로드</a>
</object>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;param&gt;
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
                  <code className="t_darkgreen">name</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">매개변수의 이름을 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">value</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">매개변수의 값을 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>type</code>
                </p>
                <p className="cell content">매개변수 값의 MIME 유형을 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>valuetype</code>
                </p>
                <p className="cell content">
                  매개변수 값의 유형을 지정 (<code>data</code>, <code>ref</code>
                  , <code>object</code>)
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [name] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;param name="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;param&gt;</code> 요소의 필수 속성으로, 매개변수의 이름을
            지정합니다. <code>&lt;object&gt;</code> 요소와 함께 사용되며,
            플러그인이나 미디어 플레이어에서 인식할 매개변수의 키 역할을 합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>예제 설명 :</dt>
            <dd>
              아래 예제에서 <code>quality</code>는 플러그인에서 인식하는
              매개변수의 이름입니다.
            </dd>
          </dl>
          <CodeBlock title="param 속성 [name]" className="mt_m" language="html">
            {`<!-- name -->
<object data="movie.swf" type="application/x-shockwave-flash">
  <param name="quality" value="high">
</object>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [value] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;param value="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;param&gt;</code> 요소의 필수 속성으로, <code>name</code>{" "}
            속성에 해당하는 값을 지정합니다. 문자열 형태로 값을 입력하며,{" "}
            <code>name</code>과 함께 설정해야 유효합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>예제 설명 :</dt>
            <dd>
              아래 예제에서 <code>bgcolor</code> 매개변수의 값은{" "}
              <code>#FFFFFF</code>입니다.
            </dd>
          </dl>
          <CodeBlock
            title="param 속성 [value]"
            className="mt_m"
            language="html"
          >
            {`<!-- value -->
<object data="movie.swf" type="application/x-shockwave-flash">
  <param name="bgcolor" value="#FFFFFF">
</object>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [type] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;param type="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            매개변수 값의 MIME 유형을 지정합니다. <code>&lt;param&gt;</code>{" "}
            요소에서 자주 사용되지 않으며, 일부 구형 브라우저나 플러그인에서만
            인식됩니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>예제 설명 :</dt>
            <dd>
              아래 예제에서 <code>type</code>은 <code>video/quicktime</code>으로
              설정되었습니다.
            </dd>
          </dl>
          <CodeBlock title="param 속성 [type]" className="mt_m" language="html">
            {`<!-- type -->
<object data="example.mov" type="video/quicktime">
  <param name="src" value="example.mov" type="video/quicktime">
</object>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [valuetype] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;param valuetype="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">매개변수 값의 형식을 지정합니다.</p>
          <dl className="dl_dot_lst mt_s">
            <dt>설정 가능한 값 :</dt>
            <dd>
              <code>data</code>(기본값) : 일반적인 문자열 데이터를 의미합니다.
            </dd>
            <dd>
              <code>ref</code> : <code>value</code>가 URL을 참조하고 있음을
              의미합니다.
            </dd>
            <dd>
              <code>object</code> : <code>value</code>가 다른 객체를 참조하고
              있음을 의미합니다.
            </dd>
          </dl>
          <dl className="dl_dot_lst mt_s">
            <dt>예제 설명 :</dt>
            <dd>
              아래 예제에서 <code>valuetype="ref"</code>는 <code>value</code>가
              URL을 참조하고 있음을 나타냅니다.
            </dd>
          </dl>
          <CodeBlock
            title="param 속성 [valuetype]"
            className="mt_m"
            language="html"
          >
            {`<!-- valuetype -->
<object data="example.mov" type="video/quicktime">
  <param name="src" value="video.mp4" valuetype="ref">
</object>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">플래시(SWF) 파일에 매개변수 전달</h3>
          <ul className="mt_ms dot_lst">
            <li>
              <code>quality="high"</code> : 플래시 품질을 높임
            </li>
            <li>
              <code>bgcolor="#ffffff"</code> : 배경색을 흰색으로 설정
            </li>
            <li>
              <code>allowScriptAccess="always"</code> : JavaScript와의 상호작용
              허용
            </li>
          </ul>
          <CodeBlock
            title="플래시(SWF) 파일에 매개변수 전달"
            className="mt_m"
            language="html"
          >
            {`<object data="game.swf" type="application/x-shockwave-flash" width="800" height="600">
  <param name="quality" value="high">
  <param name="bgcolor" value="#ffffff">
  <param name="allowScriptAccess" value="always">
  플래시 콘텐츠를 실행하려면 <a href="game.swf">여기</a>를 클릭하세요.
</object>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Windows Media Player 임베딩 (HTML4 기준)</h3>
          <ul className="mt_ms dot_lst">
            <li>
              <code>url="music.mp3"</code> : 재생할 오디오 파일 지정
            </li>
            <li>
              <code>autostart="true"</code> : 자동 재생 활성화
            </li>
            <li>
              <code>loop="false"</code> : 반복 재생 비활성화
            </li>
          </ul>
          <CodeBlock
            title="Windows Media Player 임베딩"
            className="mt_m"
            language="html"
          >
            {`<object classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" width="320" height="240">
  <param name="url" value="music.mp3">
  <param name="autostart" value="true">
  <param name="loop" value="false">
  브라우저가 Windows Media Player를 지원하지 않습니다.
</object>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">PDF 문서 설정</h3>
          <ul className="mt_ms dot_lst">
            <li>
              <code>zoom="100%"</code> : PDF 파일 확대/축소 비율 설정
            </li>
            <li>
              <code>navpanes="0"</code> : 네비게이션 패널 숨기기
            </li>
          </ul>
          <CodeBlock title="PDF 문서 설정" className="mt_m" language="html">
            {`<object data="report.pdf" type="application/pdf" width="600" height="400">
  <param name="zoom" value="100%">
  <param name="navpanes" value="0">
  브라우저에서 PDF를 열 수 없습니다. <a href="report.pdf">여기에서 다운로드</a>.
</object>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">동영상 자동 재생</h3>
          <ul className="mt_ms dot_lst">
            <li>
              아래 예제에서 <code>&lt;param&gt;</code> 요소에
              <code>name="autoplay" value="true"</code> 속성을 설정했지만,
              동영상이 자동 재생되지 않는 것을 확인할 수 있습니다.
            </li>
            <li>
              <mark>
                이유는 최근 대부분의 웹 브라우저(Chrome, Firefox, Edge 등)에서
                사용자 상호작용 없이 자동 재생되는 미디어를 차단하는 정책을
                적용하고 있기 때문입니다.
              </mark>
            </li>
            <li>
              동영상이나 오디오 콘텐츠를 자동으로 재생하려면{" "}
              <code>&lt;video&gt;</code> 또는 <code>&lt;audio&gt;</code> 요소를
              사용하고, <code>muted</code> 속성을 추가하는 것이 필요합니다.
            </li>
          </ul>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.13.param_element_1.html"
                className="min_height_330 mb_result_height_250"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="동영상 자동 재생"
                minHeight="330px"
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
            <code>&lt;param&gt;</code> 요소는 반드시 <code>&lt;object&gt;</code>{" "}
            요소의 자식으로 사용되어야 하며, 독립적으로 사용할 수 없습니다.
          </li>
          <li>
            <code>&lt;object&gt;</code> 요소와 <code>&lt;param&gt;</code> 요소를
            사용하여 미디어를 삽입하는 것은 구식 방식입니다.
            <br />
            대신 <code>&lt;video&gt;</code> 또는 <code>&lt;audio&gt;</code>{" "}
            요소를 사용하는 것이 더 권장됩니다.
          </li>
          <li>
            <code>&lt;param&gt;</code> 요소는 Flash와 함께 자주 사용되었지만,
            Flash는 2020년 이후 공식적으로 지원이 종료되었습니다.
            <br />
            따라서 대체 기술(예: <code>&lt;canvas&gt;</code> 또는{" "}
            <code>&lt;video&gt;</code> 요소) 사용을 고려해야 합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="param">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">1.0</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/06_html_13.png"} alt="param 요소" />
        <figcaption>param 요소</figcaption>
      </figure>
    </>
  );
}

export default ParamElementPage;
