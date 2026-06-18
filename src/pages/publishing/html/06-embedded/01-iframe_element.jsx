import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "iframe_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "iframe element",
  description:
    "iframe 요소는 HTML 문서에서 다른 HTML 페이지나 외부 콘텐츠를 현재 문서 안에 삽입할 때 사용하는 태그로, src 속성을 통해 불러올 대상의 URL을 지정하며 문서 내에 독립적인 브라우저 창처럼 작동하는 프레임을 생성합니다. 이 페이지에서는 iframe 요소의 주요 역할 및 특징을 설명하고, iframe 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, iframe",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_500" aria-hidden />;
}

function IframeElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;iframe&gt;</code> 요소는{" "}
          <b>다른 HTML 페이지를 현재 문서 안에 삽입할 수 있도록 하는 태그</b>로,{" "}
          <b>문서 내에 독립적인 브라우저 창(프레임)을 생성합니다.</b>
          <br />
          외부 웹페이지, 지도, 동영상, 광고 등 다양한 콘텐츠를 포함할 수 있으며,{" "}
          <code>src</code> 속성으로 불러올 URL을 지정합니다. 보안과 접근성을
          위해 <code>title</code>, <code>sandbox</code>, <code>loading</code>,{" "}
          <code>referrerpolicy</code> 등의 속성을 함께 사용하는 것이 권장되며,
          콘텐츠의 소스가 외부일 경우 <b>CORS 정책과 보안 제한</b>을 고려해야
          합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>웹페이지 내에 다른 문서(웹사이트) 삽입</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;iframe&gt;</code>은 외부 웹페이지 또는 같은 도메인의
                다른 HTML 문서를 현재 페이지에 포함할 수 있습니다.
              </li>
              <li>
                예: YouTube 동영상, Google 지도, 외부 광고 등을 삽입하는 데
                활용됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>독립적인 문서 컨텍스트</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;iframe&gt;</code>에 로드된 콘텐츠는 현재 문서와
                독립적인 컨텍스트를 가집니다.
              </li>
              <li>
                즉, <code>&lt;iframe&gt;</code> 내부의 CSS, JavaScript는 부모
                문서의 영향을 받지 않습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>동적인 콘텐츠 추가</strong>
            <p>
              <code>&lt;iframe&gt;</code>을 활용하면 특정 웹 애플리케이션이나
              대시보드, 소셜 미디어 콘텐츠 등을 불러와 웹사이트 내에서 동적으로
              표시할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>보안 제한이 있을 수 있음</strong>
            <ul className="dot_lst">
              <li>
                일부 웹사이트(예: Google, Facebook 등)는 보안상의 이유로{" "}
                <code>&lt;iframe&gt;</code>을 통한 로딩을 차단할 수 있습니다.
              </li>
              <li>
                <code>X-Frame-Options</code>라는 HTTP 헤더를 통해 외부 사이트가{" "}
                <code>&lt;iframe&gt;</code>으로 불러오는 것을 차단할 수도
                있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>CORS(교차 출처 리소스 공유) 정책 주의</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;iframe&gt;</code> 내에서 다른 도메인의 콘텐츠를
                조작하는 것은 보안 정책상 제한될 수 있습니다.
              </li>
              <li>
                예를 들어, 자바스크립트로 <code>&lt;iframe&gt;</code> 내부의
                다른 도메인 페이지에 접근하는 것은 Same-Origin Policy(동일 출처
                정책)에 의해 차단될 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>브라우저 렌더링 및 크기 조정</strong>
            <ul className="dot_lst">
              <li>
                기본적으로 <code>&lt;iframe&gt;</code>은 지정된{" "}
                <code>width</code> 및 <code>height</code> 크기로 표시됩니다.
              </li>
              <li>CSS를 사용해 100% 너비로 조정할 수도 있습니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>SEO 및 성능에 부정적인 영향</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;iframe&gt;</code>을 과도하게 사용하면 검색 엔진이
                콘텐츠를 분석하기 어려워 SEO에 부정적인 영향을 줄 수 있습니다.
              </li>
              <li>
                또한, 페이지 로딩 속도를 저하시킬 수도 있으므로 적절한 사용이
                필요합니다.
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
          <code>&lt;iframe&gt;</code> 요소는 기본적으로 인라인 블록 레벨
          요소이며, 별도의 CSS를 지정하지 않아도 아래와 같은 기본값이
          적용됩니다.
        </p>
        <CodeBlock title="iframe element CSS" className="mt_m" language="css">
          {`iframe {
  display: inline-block;
  border: none; /* 기본적으로 테두리가 없습니다. */
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="iframe element syntax"
          className="mt_l"
          language="html"
        >
          {`<iframe src="https://example.com" width="600" height="400"></iframe>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;iframe&gt;
            </code>{" "}
            속성 요약
          </h3>
          <div className="table_summary iframe_summary mt_ml">
            <ul className="lst_hd">
              <li className="cell name">속성명</li>
              <li className="cell content">설명</li>
              <li className="cell code">예제</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell name">
                  <code className="t_darkgreen">src</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">불러올 웹페이지의 URL 지정</p>
                <p className="cell code">
                  <code>
                    &lt;iframe
                    src=&quot;https://example.com&quot;&gt;&lt;/iframe&gt;
                  </code>
                </p>
              </li>
              <li>
                <p className="cell name">
                  <code className="t_darkgreen">title</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">접근성을 위한 설명 제공</p>
                <p className="cell code">
                  <code>
                    &lt;iframe title=&quot;YouTube
                    Video&quot;&gt;&lt;/iframe&gt;
                  </code>
                </p>
              </li>
              <li>
                <p className="cell name">
                  <code>width/height</code>
                </p>
                <p className="cell content">
                  프레임의 가로/세로 길이(px 또는 %)
                </p>
                <p className="cell code">
                  <code>
                    &lt;iframe width=&quot;600&quot;
                    height=&quot;400&quot;&gt;&lt;/iframe&gt;
                  </code>
                </p>
              </li>
              <li>
                <p className="cell name">
                  <code>frameborder</code>
                </p>
                <p className="cell content">
                  테두리 표시 여부(0: 없음, 1: 있음)
                </p>
                <p className="cell code">
                  <code>
                    &lt;iframe frameborder=&quot;0&quot;&gt;&lt;/iframe&gt;
                  </code>{" "}
                  <mark>(현재는 CSS로 제어)</mark>
                </p>
              </li>
              <li>
                <p className="cell name">
                  <code>allowfullscreen</code>
                </p>
                <p className="cell content">전체 화면 모드 허용</p>
                <p className="cell code">
                  <code>&lt;iframe allowfullscreen&gt;&lt;/iframe&gt;</code>
                </p>
              </li>
              <li>
                <p className="cell name">
                  <code>loading</code>
                </p>
                <p className="cell content">
                  로딩 방식 설정 (<code>lazy</code>, <code>eager</code>)
                </p>
                <p className="cell code">
                  <code>
                    &lt;iframe loading=&quot;lazy&quot;&gt;&lt;/iframe&gt;
                  </code>
                </p>
              </li>
              <li>
                <p className="cell name">
                  <code>srcdoc</code>
                </p>
                <p className="cell content">
                  <code>&lt;iframe&gt;</code> 내부에 직접 HTML 코드 삽입
                </p>
                <p className="cell code">
                  <code>
                    &lt;iframe srcdoc=&quot;&lt;p&gt;Hello
                    World!!&lt;/p&gt;&quot;&gt;&lt;/iframe&gt;
                  </code>
                </p>
              </li>
              <li>
                <p className="cell name">
                  <code>sandbox</code>
                </p>
                <p className="cell content">
                  보안 설정 (스크립트 실행 제한 등)
                </p>
                <p className="cell code">
                  <code>&lt;iframe sandbox&gt;&lt;/iframe&gt;</code>
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [src] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;iframe src="URL"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;iframe&gt;</code>이 불러올 웹페이지의 URL을 지정하는
            속성입니다.
          </p>
          <CodeBlock
            title="iframe의 속성 [src]"
            className="mt_s"
            language="html"
          >
            {`<iframe src="https://example.com" title="제목 또는 설명"></iframe>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [title] <i className="attr_required">필수 - 접근성 고려</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;iframe title="타이틀"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;iframe&gt;</code>의 내용을 설명하는 접근성 속성입니다.
            스크린 리더 등의 보조 기술이 <code>&lt;iframe&gt;</code>의 용도를
            안내할 때 사용됩니다.
          </p>
          <CodeBlock
            title="iframe의 속성 [title]"
            className="mt_s"
            language="html"
          >
            {`<iframe src="https://example.com" title="제목 또는 설명"></iframe>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [width / height] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;iframe width="px/%" height="px/%"&gt;
            </span>
          </h3>
          <div className="mt_ms indent">
            <h4 className="ml_mn">
              <code className="font-18-important weight-600">width/height</code>{" "}
              속성 설명 및 기본 예제
            </h4>
            <p className="mt_s">
              <code>&lt;iframe&gt;</code>의 가로(<code>width</code>) 및 세로(
              <code>height</code>) 크기를 픽셀(<code>px</code>) 또는 백분율(
              <code>%</code>) 단위로 설정하는 속성입니다.
            </p>
            <CodeBlock
              title="iframe의 속성 [width/height]"
              className="mt_s"
              language="html"
            >
              {`<iframe src="https://example.com" width="600" height="400" title="제목 또는 설명"></iframe>`}
            </CodeBlock>
          </div>

          <div className="mt_ml indent">
            <h4 className="ml_mn t_blue">
              <code className="font-18-important weight-600 t_blue">width</code>
              는 <code className="font-18-important weight-600 t_blue">%</code>{" "}
              값 사용 가능
            </h4>
            <ul className="mt_s dot_lst">
              <li>
                <code>&lt;iframe&gt;</code>의 <code>width</code> 속성에는{" "}
                <b>
                  퍼센트(<code>%</code>) 값이 적용될 수 있습니다.
                </b>
              </li>
              <li>
                <code>%</code> 값은{" "}
                <b>부모 요소의 너비를 기준으로 상대적으로 크기를 조정합니다.</b>
              </li>
            </ul>
            <CodeBlock
              title="iframe의 속성 [width]"
              className="mt_ms"
              language="html"
            >
              {`<div style="width: 80%;">
  <iframe src="https://example.com" width="100%" height="300" title="제목 또는 설명"></iframe>
</div>`}
            </CodeBlock>
          </div>

          <div className="mt_ml indent">
            <h4 className="ml_mn t_blue">
              <code className="font-18-important weight-600 t_blue">
                height
              </code>
              는 <code className="font-18-important weight-600 t_blue">%</code>{" "}
              값이 기본적으로 적용되지 않음
            </h4>
            <ul className="mt_s dot_lst">
              <li>
                <code>&lt;iframe&gt;</code>의 <code>height</code> 속성에{" "}
                <code>%</code> 값을 지정해도,{" "}
                <b>부모 요소가 명확한 높이를 가지고 있어야 적용됩니다.</b>
              </li>
              <li>
                부모 요소가 높이를 지정하지 않으면, <code>&lt;iframe&gt;</code>
                의 높이는 <code>0</code>으로 설정될 수도 있습니다.
              </li>
            </ul>
            <CodeBlock
              title="iframe의 속성 [height]"
              className="mt_ms"
              language="html"
            >
              {`<!-- 잘못된 예제: 부모 높이 없음 -->
<div style="width: 80%;">
  <iframe src="https://example.com" width="100%" height="100%" title="제목 또는 설명"></iframe>
</div>

<!-- 올바른 예제: 부모 높이 지정 -->
<div style="width: 80%; height: 500px;">
  <iframe src="https://example.com" width="100%" height="100%" title="제목 또는 설명"></iframe>
</div>`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [frameborder] <i className="attr_warning">HTML5에서 제거됨</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;iframe frameborder="0"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;iframe&gt;</code>의 테두리(<code>border</code>)를 표시할지
            여부를 지정하는 속성이지만, HTML5에서는 더 이상 지원되지 않습니다.
            대신 CSS의 <code>border</code> 속성을 사용하는 것이 권장됩니다.
          </p>
          <CodeBlock
            title="iframe의 속성 [frameborder]"
            className="mt_m"
            language="html"
          >
            {`<!-- HTML4 방식, 비권장 -->
<iframe src="https://example.com" frameborder="0" title="제목 또는 설명"></iframe>

<!-- HTML5 권장 방식 -->
<style>
  iframe { border: none; }
</style>
<iframe src="https://example.com" title="제목 또는 설명"></iframe>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [allowfullscreen] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;iframe allowfullscreen&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;iframe&gt;</code> 내 콘텐츠(예: 동영상)를 전체 화면으로 볼
            수 있도록 허용하는 속성입니다.
          </p>
          <CodeBlock
            title="iframe의 속성 [allowfullscreen]"
            className="mt_m"
            language="html"
          >
            {`<iframe src="https://example.com" allowfullscreen title="제목 또는 설명"></iframe>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [loading] <i className="attr_optional">선택 사항 - 성능 최적화</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;iframe loading="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;iframe&gt;</code>을 언제 로드할지를 결정하는 속성입니다.
          </p>
          <ul className="indent_small mt_sm dot_lst">
            <li>
              <code>lazy</code> : 화면에 나타날 때 로드(지연 로딩, 성능 최적화
              가능)
            </li>
            <li>
              <code>eager</code> : 페이지가 로드될 때 즉시 로드(기본값)
            </li>
          </ul>
          <CodeBlock
            title="iframe의 속성 [loading]"
            className="mt_m"
            language="html"
          >
            {`<iframe src="https://example.com" loading="lazy" title="제목 또는 설명"></iframe>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [srcdoc] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;iframe srcdoc="유효한 HTML 코드"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;iframe&gt;</code> 내부에 직접 HTML 코드를 작성하여 표시할
            수 있도록 합니다.
          </p>
          <ul className="indent_small mt_sm dot_lst">
            <li>
              <code>src</code> 속성을 대신하여 별도의 HTML 문서 없이 즉시 콘텐츠
              삽입 가능
            </li>
            <li>
              JavaScript, CSS, HTML을 포함할 수 있고, 외부 리소스를 로드하지
              않아 보안 및 성능 면에서 유리합니다.
            </li>
          </ul>
          <CodeBlock
            title="iframe의 속성 [srcdoc]"
            className="mt_m"
            language="html"
          >
            {`<iframe srcdoc="
  <h2>내부 HTML 페이지</h2>
  <p>이 HTML은 srcdoc 속성을 사용해 직접 작성되었습니다.</p>
" title="제목 또는 설명"></iframe>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [sandbox] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;iframe sandbox="값"&gt;
            </span>
          </h3>
          <div className="mt_m indent">
            <h4 className="ml_mn">
              <code className="font-18-important weight-600">sandbox</code> 속성
              설명
            </h4>
            <p className="mt_s">
              <code>&lt;iframe&gt;</code> 내 콘텐츠의 보안 정책을 설정하는
              속성입니다.
            </p>
            <ul className="indent_small mt_sm dot_lst">
              <li>
                <code>sandbox</code>만 지정하면 모든 기능이 제한됩니다.
              </li>
              <li>특정 기능을 허용하려면 추가 속성을 명시해야 합니다.</li>
            </ul>
            <CodeBlock
              title="iframe의 속성 [sandbox]"
              className="mt_ms"
              language="html"
            >
              {`<!-- 모든 제한 적용 -->
<iframe src="https://example.com" sandbox title="제목 또는 설명"></iframe>

<!-- 특정 기능 허용 -->
<iframe src="https://example.com" sandbox="allow-scripts allow-forms" title="제목 또는 설명"></iframe>`}
            </CodeBlock>
          </div>
          <div className="mt_ml indent">
            <h4 className="ml_mn">
              <code className="font-18-important weight-600">sandbox</code>{" "}
              속성의 사용 가능한 값
            </h4>
            <div className="table_summary value_300 mt_ms">
              <ul className="lst_hd">
                <li className="cell value">값</li>
                <li className="cell content">설명</li>
              </ul>
              <ul className="lst_bd">
                <li>
                  <p className="cell value">
                    <code>sandbox</code> (속성만 지정)
                  </p>
                  <p className="cell content">모든 제한 적용 (기본값)</p>
                </li>
                <li>
                  <p className="cell value">
                    <code>
                      sandbox=&quot;<i className="t_darkblue">allow-forms</i>
                      &quot;
                    </code>
                  </p>
                  <p className="cell content">
                    <code>&lt;form&gt;</code>을 통한 데이터 전송 허용
                  </p>
                </li>
                <li>
                  <p className="cell value">
                    <code>
                      sandbox=&quot;<i className="t_darkblue">allow-modals</i>
                      &quot;
                    </code>
                  </p>
                  <p className="cell content">
                    <code>window.alert()</code>, <code>confirm()</code>,{" "}
                    <code>prompt()</code> 등 모달 창 허용
                  </p>
                </li>
                <li>
                  <p className="cell value">
                    <code>
                      sandbox=&quot;
                      <i className="t_darkblue">allow-downloads</i>&quot;
                    </code>
                  </p>
                  <p className="cell content">
                    사용자가 <code>&lt;iframe&gt;</code> 내에서 파일을
                    다운로드할 수 있도록 허용
                  </p>
                </li>
                <li>
                  <p className="cell value">
                    <code>
                      sandbox=&quot;<i className="t_darkblue">allow-popups</i>
                      &quot;
                    </code>
                  </p>
                  <p className="cell content">
                    <code>window.open()</code>과 같은 새 창(팝업) 열기 허용
                  </p>
                </li>
                <li>
                  <p className="cell value">
                    <code>
                      sandbox=&quot;
                      <i className="t_darkblue">
                        allow-popups-to-escape-sandbox
                      </i>
                      &quot;
                    </code>
                  </p>
                  <p className="cell content">
                    <code>allow-popups</code>가 활성화된 상태에서 팝업 창이{" "}
                    <code>sandbox</code> 밖에서 실행될 수 있도록 허용
                  </p>
                </li>
                <li>
                  <p className="cell value">
                    <code>
                      sandbox=&quot;
                      <i className="t_darkblue">allow-same-origin</i>&quot;
                    </code>
                  </p>
                  <p className="cell content">
                    <code>&lt;iframe&gt;</code>이 부모 페이지와 같은 출처
                    (same-origin)로 동작하도록 허용
                  </p>
                </li>
                <li>
                  <p className="cell value">
                    <code>
                      sandbox=&quot;<i className="t_darkblue">allow-scripts</i>
                      &quot;
                    </code>
                  </p>
                  <p className="cell content">
                    JavaScript 실행 허용 (<code>eval()</code>은 여전히 제한됨)
                  </p>
                </li>
                <li>
                  <p className="cell value">
                    <code>
                      sandbox=&quot;
                      <i className="t_darkblue">allow-top-navigation</i>
                      &quot;
                    </code>
                  </p>
                  <p className="cell content">
                    <code>&lt;iframe&gt;</code>이 부모 페이지를 변경할 수 있도록
                    허용 (<code>window.top.location</code> 변경 가능)
                  </p>
                </li>
                <li>
                  <p className="cell value">
                    <code>
                      sandbox=&quot;
                      <i className="t_darkblue">
                        allow-top-navigation-by-user-activation
                      </i>
                      &quot;
                    </code>
                  </p>
                  <p className="cell content">
                    사용자의 직접적인 액션(예: 클릭)으로만 부모 페이지 변경 가능
                  </p>
                </li>
                <li>
                  <p className="cell value">
                    <code>
                      sandbox=&quot;
                      <i className="t_darkblue">allow-presentation</i>&quot;
                    </code>
                  </p>
                  <p className="cell content">Presentation API 사용 허용</p>
                </li>
                <li>
                  <p className="cell value">
                    <code>
                      sandbox=&quot;
                      <i className="t_darkblue">
                        allow-storage-access-by-user-activation
                      </i>
                      &quot;
                    </code>
                  </p>
                  <p className="cell content">
                    사용자가 <code>&lt;iframe&gt;</code> 내부에서 직접
                    상호작용할 때만 Storage API 접근 가능
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">외부 웹페이지 삽입</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.1.iframe_element_1.html"
                className="min_height_500 mb_result_height_500"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="외부 웹페이지 삽입"
                minHeight="500px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">YouTube 동영상 삽입</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.1.iframe_element_2.html"
                className="min_height_380 mb_result_height_250"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="YouTube 동영상 삽입"
                minHeight="380px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Google 지도 삽입</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.1.iframe_element_3.html"
                className="min_height_430 mb_result_height_350"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="Google 지도 삽입"
                minHeight="430px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">CodePen 삽입</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.1.iframe_element_4.html"
                className="min_height_500 mb_result_height_400"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="CodePen 삽입"
                minHeight="500px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code>srcdoc</code>을 활용한 내부 HTML 문서 포함
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.1.iframe_element_5.html"
                className="min_height_400 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="srcdoc을 활용한 내부 HTML 문서 포함"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l gap-column-sm">
          <li>
            다른 도메인의 콘텐츠를 포함할 때, JavaScript로 해당{" "}
            <code>&lt;iframe&gt;</code>에 접근하려면 <b>CORS 정책이 허용</b>
            되어야 합니다.
            <br />
            (해결 방법: <code>sandbox</code> 속성을 적절히 사용하거나, JSONP
            또는 서버 프록시 활용.)
          </li>
          <li>
            <code>&lt;iframe&gt;</code> 내부 콘텐츠는 검색 엔진이 직접
            크롤링하지 않으므로 SEO에 불리할 수 있습니다.
            <br />
            중요한 콘텐츠는 <code>&lt;iframe&gt;</code>이 아닌 일반 HTML로
            추가하는 것이 바람직합니다.
          </li>
          <li>
            신뢰할 수 없는 외부 콘텐츠를 포함하면{" "}
            <b>XSS(크로스 사이트 스크립팅) 공격</b>에 노출될 위험이 있습니다.{" "}
            <code>sandbox</code> 속성을 적극 활용하세요.
          </li>
          <li>
            <code>&lt;iframe&gt;</code>을 남용하면 페이지 로딩 속도가 느려질 수
            있습니다. <code>loading=&quot;lazy&quot;</code> 속성을 사용하여 성능
            저하를 방지하는 것이 권장됩니다.
          </li>
          <li>
            일부 <code>&lt;iframe&gt;</code> 콘텐츠가 크기에 맞지 않으면
            스크롤이 생길 수 있습니다. <code>scrolling=&quot;no&quot;</code>{" "}
            속성을 사용하면 스크롤을 숨길 수 있지만, CSS로{" "}
            <code>overflow: hidden;</code>을 설정하는 것이 더 추천됩니다.
          </li>
        </ul>
      </section>

      <aside className="browser_support mt_xxl" data-tit="iframe">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">1.0</li>
          <li className="firefox">지원</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/06_html_01.png"} alt="iframe 요소" />
        <figcaption>iframe 요소</figcaption>
      </figure>
    </>
  );
}

export default IframeElementPage;
