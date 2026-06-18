import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "a_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "a element",
  description:
    "a 요소는 HTML 문서에서 다른 페이지, 문서 내 위치, 이메일 주소, 파일 등으로 연결되는 하이퍼링크를 생성하는 태그로, href 속성으로 이동할 목적지를 지정하며 텍스트나 이미지 등 다양한 콘텐츠에 링크를 적용할 수 있습니다. 이 페이지에서는 a 요소의 주요 역할 및 특징을 설명하고, a 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, a, anchor, link, hyperlink, 링크",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_350" aria-hidden />;
}

function AElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;a&gt;</code> 요소는 <strong>하이퍼링크(anchor)</strong>를
          정의하는 시맨틱 태그로, 다른 웹페이지, 같은 문서 내의 위치, 이메일
          주소, 파일 등으로 사용자를 연결하는 링크를 만듭니다.
          <br />
          <code>href</code> 속성을 통해 이동할 목적지를 지정하며, 텍스트 또는
          이미지 등 다양한 콘텐츠에 링크를 적용할 수 있습니다. 외부 링크, 내부
          링크, 페이지 내 앵커 등 다양한 형태로 활용되며, <code>target</code>,{" "}
          <code>target</code>, <code>rel</code>, <code>download</code> 같은
          속성으로 동작 방식을 제어할 수 있습니다.
        </p>
        <p className="mt_s">
          <code>&lt;a&gt;</code> 요소는{" "}
          <b>
            웹 문서에서 기본적인 탐색 기능을 제공하는 가장 중요한 내비게이션
            도구 중 하나
          </b>
          입니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>하이퍼링크 생성</strong>
            <ul className="dot_lst">
              <li>
                <code>href</code> 속성을 사용해 연결하려는 URL이나 링크 대상을
                지정합니다.
              </li>
              <li>
                링크는 텍스트, 이미지, 또는 기타 콘텐츠로 표현할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다양한 링크 대상</strong>
            <ul className="dot_lst">
              <li>
                <b>외부 링크</b> : 다른 웹사이트로 연결.
              </li>
              <li>
                <b>내부 링크</b> : 같은 웹사이트 내 다른 페이지나 특정 섹션으로
                연결.
              </li>
              <li>
                <b>파일 다운로드</b> : 파일을 다운로드하도록 설정.
              </li>
              <li>
                <b>특수 프로토콜</b> : 이메일(<code>mailto:</code>), 전화번호(
                <code>tel:</code>) 등.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>의미론적 역할</strong>
            <p>
              <code>&lt;a&gt;</code> 요소는 기본적으로 내비게이션 목적을 가지며,
              사용자는 링크를 통해 추가 정보를 탐색할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>글로벌 접근성</strong>
            <p>
              스크린 리더 사용자에게 링크의 목적을 명확히 전달하기 위해 의미
              있는 텍스트를 포함해야 합니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;a&gt;</code> 요소는 기본적으로 인라인 요소이며 아래와 같은
          기본 스타일이 적용됩니다.
        </p>
        <CodeBlock title="a element CSS" className="mt_m" language="css">
          {`a {
  display: inline;
  text-decoration: underline; /* href 속성이 적용된 링크 */
  color: blue; /* 기본 상태 */
  color: purple; /* 방문한 링크 */
  color: red; /* 활성화된 링크 */
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="a element syntax" className="mt_l" language="html">
          {`<a href="https://example.com">링크 텍스트</a>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            [href]
            <i className="attr_required">필수</i>
            <span className="t_blue el_inline_block">
              &lt;a href="링크 주소"&gt;
            </span>
          </h3>
          <p className="mt_m">
            <code>href</code> 속성은 <code>&lt;a&gt;</code> 요소의 핵심(필수)
            속성으로, 링크할 URL이나 같은 문서 내의 앵커 대상을 지정합니다.
            <code>href</code>가 없는 <code>&lt;a&gt;</code> 요소는 링크로
            동작하지 않습니다.
          </p>
          <CodeBlock title="a [href]" className="mt_m" language="html">
            {`<a href="https://example.com">외부 링크</a>
<a href="#section1">내부 링크</a>
<a href="mailto:example@example.com">이메일 링크</a>
<a href="tel:01012345678">전화 걸기 링크</a>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [target]
            <i className="attr_optional">선택 사항</i>
            <span className="t_blue el_inline_block">
              &lt;a href="링크 주소" target="값"&gt;
            </span>
          </h3>
          <CodeBlock
            title='a [target="_blank"]'
            className="mt_m"
            language="html"
          >
            {`<a href="https://example.com" target="_blank" rel="noopener noreferrer">새 창에서 열기</a>`}
          </CodeBlock>
          <CodeBlock
            title='a [target="_self"]'
            className="mt_m"
            language="html"
          >
            {`<a href="https://example.com" target="_self">현재 창에서 열기(생략 가능)</a>`}
          </CodeBlock>
          <CodeBlock
            title='a [target="_parent"]'
            className="mt_m"
            language="html"
          >
            {`<a href="https://example.com" target="_parent">부모 프레임에서 열기</a>`}
          </CodeBlock>
          <CodeBlock title='a [target="_top"]' className="mt_m" language="html">
            {`<a href="https://example.com" target="_top">최상위 프레임에서 열기</a>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [rel]
            <i className="attr_optional">선택 사항</i>
            <span className="t_blue el_inline_block">
              &lt;a href="링크 주소" rel="속성값"&gt;
            </span>
          </h3>
          <p className="mt_m">
            <code>&lt;a&gt;</code> 요소의 <code>rel</code> 속성은 링크와 링크
            대상 간의 관계를 명시하는 데 사용됩니다. <code>rel</code> 속성은
            SEO, 보안, 접근성 등을 고려한 링크의 동작을 제어하는 데 중요한
            역할을 합니다.
          </p>
          <div className="table_summary a_rel_summary mt_m">
            <ul className="lst_hd">
              <li className="cell value">
                <code>rel</code> 값
              </li>
              <li className="cell content">의미</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code>alternate</code>
                </p>
                <p className="cell content">대체 버전 (예: RSS 피드)</p>
              </li>
              <li>
                <p className="cell value">
                  <code>author</code>
                </p>
                <p className="cell content">작성자 정보</p>
              </li>
              <li>
                <p className="cell value">
                  <code>bookmark</code>
                </p>
                <p className="cell content">북마크 가능 URL</p>
              </li>
              <li>
                <p className="cell value">
                  <code>external</code>
                </p>
                <p className="cell content">외부 리소스</p>
              </li>
              <li>
                <p className="cell value">
                  <code>help</code>
                </p>
                <p className="cell content">도움말 페이지</p>
              </li>
              <li>
                <p className="cell value">
                  <code>license</code>
                </p>
                <p className="cell content">라이선스 정보</p>
              </li>
              <li>
                <p className="cell value">
                  <code>next</code>
                </p>
                <p className="cell content">다음 페이지</p>
              </li>
              <li>
                <p className="cell value">
                  <code>prev</code>
                </p>
                <p className="cell content">이전 페이지</p>
              </li>
              <li>
                <p className="cell value">
                  <code>nofollow</code>
                </p>
                <p className="cell content">검색 엔진에 따라가지 말라는 지침</p>
              </li>
              <li>
                <p className="cell value">
                  <code>noopener</code>
                </p>
                <p className="cell content">새 창에서 부모 페이지 조작 방지</p>
              </li>
              <li>
                <p className="cell value">
                  <code>noreferrer</code>
                </p>
                <p className="cell content">HTTP 참조 정보 전달 방지</p>
              </li>
              <li>
                <p className="cell value">
                  <code>prefetch</code>
                </p>
                <p className="cell content">
                  리소스를 미리 로드하여 성능 최적화
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>search</code>
                </p>
                <p className="cell content">검색 기능 제공 리소스</p>
              </li>
              <li>
                <p className="cell value">
                  <code>tag</code>
                </p>
                <p className="cell content">관련 태그</p>
              </li>
              <li>
                <p className="cell value">
                  <code>ugc</code>
                </p>
                <p className="cell content">사용자 생성 콘텐츠 (댓글 등)</p>
              </li>
            </ul>
          </div>
          <CodeBlock title="a [rel]" className="mt_m" language="html">
            {`<a href="https://example.com/rss" rel="alternate">Subscribe to our RSS feed</a>
<a href="https://example.com/author" rel="author">About the Author</a>
<a href="https://example.com/important" rel="bookmark">Bookmark page</a>
<a href="https://external-site.com" rel="external">Visit External Site</a>
<a href="https://example.com/help" rel="help">Help Center</a>
<a href="https://example.com/license" rel="license">View License</a>
<a href="https://example.com/page2" rel="next">Next Page</a>
<a href="https://example.com/page1" rel="prev">Previous Page</a>
<a href="https://sponsored-link.com" rel="nofollow">Sponsored Link</a>
<a href="https://example.com" target="_blank" rel="noopener">Open Safely</a>
<a href="https://example.com" target="_blank" rel="noreferrer">No Referrer</a>
<a href="https://example.com/next-page" rel="prefetch">Prefetch Next Page</a>
<a href="search.html" rel="search">Search Page</a>
<a href="tags/javascript" rel="tag">JavaScript Tag</a>
<a href="https://example.com" rel="ugc">User Generated Content</a>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [download]
            <i className="attr_optional">선택 사항</i>
          </h3>
          <CodeBlock title="a [download]" className="mt_m" language="html">
            {`<a href="file.pdf" download>PDF 다운로드</a>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [type]
            <i className="attr_optional">선택 사항</i>
          </h3>
          <p className="mt_m">
            링크 대상의 <b className="t_blue">MIME 타입</b>(Media Type)을
            명시하는 데 사용됩니다. 이 속성을 통해 브라우저나 사용자 에이전트가
            링크를 처리하기 전에 대상 리소스의 유형을 예상할 수 있습니다.
          </p>
          <div className="table_summary a_type_summary mt_m">
            <ul className="lst_hd">
              <li className="cell value">
                <code>type</code> 값
              </li>
              <li className="cell content">의미</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code>text/html</code>
                </p>
                <p className="cell content">html 문서 링크</p>
              </li>
              <li>
                <p className="cell value">
                  <code>application/json</code>
                </p>
                <p className="cell content">JSON 데이터 링크</p>
              </li>
              <li>
                <p className="cell value">
                  <code>application/pdf</code>
                </p>
                <p className="cell content">PDF 파일 링크</p>
              </li>
              <li>
                <p className="cell value">
                  <code>text/plain</code>
                </p>
                <p className="cell content">Plain Text 링크</p>
              </li>
              <li>
                <p className="cell value">
                  <code>image/png</code>
                </p>
                <p className="cell content">PNG 이미지 링크</p>
              </li>
              <li>
                <p className="cell value">
                  <code>image/jpeg</code>
                </p>
                <p className="cell content">JPEG 이미지 링크</p>
              </li>
              <li>
                <p className="cell value">
                  <code>image/gif</code>
                </p>
                <p className="cell content">GIF 이미지 링크</p>
              </li>
              <li>
                <p className="cell value">
                  <code>image/svg+xml</code>
                </p>
                <p className="cell content">SVG 이미지 링크</p>
              </li>
              <li>
                <p className="cell value">
                  <code>audio/mpeg</code>
                </p>
                <p className="cell content">Audio 파일 링크</p>
              </li>
              <li>
                <p className="cell value">
                  <code>video/mp4</code>
                </p>
                <p className="cell content">Video 파일 링크</p>
              </li>
            </ul>
          </div>
          <CodeBlock
            title='a [type="application/pdf"]'
            className="mt_m"
            language="html"
          >
            {`<a href="https://example.com" type="text/html">Visit HTML Page</a>
<a href="data.json" type="application/json">View JSON Data</a>
<a href="document.pdf" type="application/pdf">Download PDF</a>
<a href="textfile.txt" type="text/plain">Download Plain Text</a>
<a href="image.png" type="image/png">Download PNG Image</a>
<a href="image.jpg" type="image/jpeg">View JPEG Image</a>
<a href="image.gif" type="image/gif">View GIF Image</a>
<a href="image.svg" type="image/svg+xml">View SVG Image</a>
<a href="audio.mp3" type="audio/mpeg">Listen to Audio</a>
<a href="video.mp4" type="video/mp4">Watch Video</a>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [hreflang]
            <i className="attr_optional">선택 사항</i>
          </h3>
          <p className="mt_m">
            링크된 리소스의 언어 및 지역 정보를 검색 엔진이나 사용자 에이전트에
            전달하기 위해 사용됩니다.
          </p>
          <CodeBlock title="a [hreflang]" className="mt_m" language="html">
            {`<a href="https://example.com/en-us" hreflang="en-us">English (US)</a>
<a href="https://example.com/en-gb" hreflang="en-gb">English (UK)</a>
<a href="https://example.com/fr-fr" hreflang="fr-fr">Français (France)</a>
<a href="https://example.com/ja-jp" hreflang="ja-jp">日本語 (日本)</a>
<a href="https://example.com/ko-kr" hreflang="ko-kr">한국어</a>
<a href="https://example.com/" hreflang="x-default">Default Version</a>`}
          </CodeBlock>
          <div className="table_summary a_lang_summary mt_m">
            <ul className="lst_hd">
              <li className="cell lang">언어와 지역</li>
              <li className="cell code">코드</li>
              <li className="cell lang">언어와 지역</li>
              <li className="cell code">코드</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell lang">영어(미국)</p>
                <p className="cell code">
                  <code>en-us</code>
                </p>
                <p className="cell lang">영어(영국)</p>
                <p className="cell code">
                  <code>en-gb</code>
                </p>
              </li>
              <li>
                <p className="cell lang">스페인어(스페인)</p>
                <p className="cell code">
                  <code>es-es</code>
                </p>
                <p className="cell lang">스페인어(멕시코)</p>
                <p className="cell code">
                  <code>es-mx</code>
                </p>
              </li>
              <li>
                <p className="cell lang">프랑스어(프랑스)</p>
                <p className="cell code">
                  <code>fr-fr</code>
                </p>
                <p className="cell lang">프랑스어(캐나다)</p>
                <p className="cell code">
                  <code>fr-ca</code>
                </p>
              </li>
              <li>
                <p className="cell lang">중국어(간체)</p>
                <p className="cell code">
                  <code>zh-cn</code>
                </p>
                <p className="cell lang">중국어(번체, 대만)</p>
                <p className="cell code">
                  <code>zh-tw</code>
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">외부 웹사이트로 연결</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.1.a_element.html"
                className="min_height_350 mb_result_height_250"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="외부 웹사이트로 연결"
                minHeight="350px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">새 창(탭)으로 링크 열기</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.1.a_element_blank.html"
                className="min_height_350 mb_result_height_250"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="새 창(탭)으로 링크 열기"
                minHeight="350px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">내부 문서의 특정 위치로 이동</h3>
          <p className="dp_pc full_screen_code_info mt_ms">
            (Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.1.a_element_internal_link.html"
                className="min_height_500 mb_result_height_400"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="내부 문서의 특정 위치로 이동"
                minHeight="500px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">파일 다운로드</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.1.a_element_download.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="파일 다운로드"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">전화번호와 이메일 링크</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.1.a_element_tel_email.html"
                className="min_height_350 mb_result_height_250"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="전화번호와 이메일 링크"
                minHeight="350px"
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
            href 속성이 없는 <code>&lt;a&gt;</code> 요소는 링크로 동작하지
            않으며, 클릭 시 아무런 동작을 하지 않습니다.
          </li>
          <li>
            항상 링크가 유효한지 확인하고, 잘못된 URL을 제공하지 않도록 주의해야
            합니다.
          </li>
          <li>
            외부 링크에서 <code>target="_blank"</code>를 사용할 때는 보안을 위해{" "}
            <code>rel="noopener noreferrer"</code>를 함께 사용하세요.
          </li>
          <li>
            링크 텍스트는 "여기를 클릭"과 같은 모호한 텍스트는 피해야 하며, 링크
            목적을 명확히 표현하는 것이 좋습니다.
            <CodeBlock
              title="올바른 링크 텍스트 적용"
              className="mt_sm"
              language="html"
            >
              {`<a href="uxkm.io">여기 클릭</a>     <!-- 잘못된 경우 -->
<a href="uxkm.io">UXKM 바로가기</a> <!-- 올바른 경우 -->`}
            </CodeBlock>
          </li>
        </ul>
      </section>
      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/05_html_01.png`} alt="a 요소" />
        <figcaption>a 요소</figcaption>
      </figure>
    </>
  );
}

export default AElementPage;
