import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "area_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "area element",
  description:
    "area 요소는 HTML 문서에서 map 요소 내부에 사용되며, 이미지 맵에서 클릭 가능한 영역을 정의하는 태그로, shape, coords, href, alt 등의 속성을 사용하여 영역의 모양, 위치, 연결 대상, 대체 텍스트 등을 지정할 수 있습니다. 이 페이지에서는 area 요소의 주요 역할 및 특징을 설명하고, area 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, area",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_380" aria-hidden />;
}

function AreaElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;area&gt;</code> 요소는 <code>&lt;map&gt;</code> 요소 내에서{" "}
          <b>이미지 맵의 클릭 가능한 영역을 정의하는 태그</b>로,{" "}
          <b>이미지의 특정 좌표를 링크 등과 연결</b>할 수 있게 합니다.
          <br />
          <code>shape</code>, <code>coords</code>, <code>href</code>,{" "}
          <code>alt</code> 속성을 통해 영역의 형태와 링크 대상을 지정합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>이미지의 특정 영역을 클릭 가능하게 만듦</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;area&gt;</code>는 <code>&lt;map&gt;</code> 안에서
                정의되며 특정 좌표를 클릭 영역으로 설정합니다.
              </li>
              <li>예: 지도에서 특정 국가를 클릭해 상세 페이지로 이동.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다양한 형태(Shape) 지원</strong>
            <p>
              <code>shape</code> 속성으로 <code>default</code>,{" "}
              <code>rect</code>, <code>circle</code>, <code>poly</code> 영역을
              정의할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>
              <code className="font-16-important">coords</code>로 위치 정의
            </strong>
            <p>
              <code>coords</code> 속성으로 영역의 정확한 좌표를 설정하며, 이미지
              크기 변경 시 재조정이 필요할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>브라우저 렌더링</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;area&gt;</code>는 시각적으로 보이지 않지만 지정
                영역에서 클릭 가능합니다.
              </li>
              <li>
                CSS를 직접 적용할 수 없어 필요 시 JavaScript 기반 보완이
                필요합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>SEO 및 접근성</strong>
            <ul className="dot_lst">
              <li>
                <code>alt</code>를 올바르게 제공하면 접근성과 검색 해석에 도움이
                됩니다.
              </li>
              <li>
                키보드 사용자 고려 시 <code>tabindex</code> 등을 함께 검토할 수
                있습니다.
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
          <code>&lt;area&gt;</code> 요소는{" "}
          <mark>
            시각적으로 표시되지 않으며 기본 CSS 스타일링 대상이 아닙니다.
          </mark>{" "}
          인터랙션 영역 정의에 특화된 요소입니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="area element syntax" className="mt_l" language="html">
          {`<img src="map.jpg" usemap="#example-map" alt="예제 이미지 맵">

<map name="example-map">
  <area shape="rect" coords="50,50,150,150" href="https://example.com/section1" alt="섹션 1">
</map>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;area&gt;
            </code>{" "}
            속성 요약
          </h3>
          <div className="table_summary value_200 mt_ml">
            <ul className="lst_hd">
              <li className="cell value">속성명</li>
              <li className="cell content">설명</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">href</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">클릭 시 이동할 URL을 지정합니다.</p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">alt</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">
                  이미지 맵 영역의 대체 텍스트를 제공합니다. (접근성을 위해
                  필수)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">shape</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">
                  영역 모양 지정 (<code>rect</code>, <code>circle</code>,{" "}
                  <code>poly</code>, <code>default</code>)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">coords</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">
                  영역 좌표 값 설정 (<code>shape</code>와 함께 사용)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>target</code>
                </p>
                <p className="cell content">
                  링크가 열리는 방식 지정 (<code>_blank</code>,{" "}
                  <code>_self</code> 등)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>rel</code>
                </p>
                <p className="cell content">
                  현재 문서와 링크 대상 관계 설정 (<code>noopener</code>,{" "}
                  <code>nofollow</code> 등)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>referrerpolicy</code>
                </p>
                <p className="cell content">
                  Referer 헤더 정보 전송 방식 설정 (<code>origin</code>,{" "}
                  <code>no-referrer</code> 등)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>download</code>
                </p>
                <p className="cell content">
                  클릭 시 파일 다운로드 설정 (<code>href</code> 필요)
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [href] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;area href="URL"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            클릭 시 이동할 URL을 지정합니다. 내부/외부 링크 및 앵커(
            <code>#</code>)를 사용할 수 있습니다.
          </p>
          <CodeBlock title="area 속성 [href]" className="mt_m" language="html">
            {`<area shape="circle" coords="100,100,50" href="https://example.com">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [alt] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;area alt="텍스트"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            이미지 맵에 대체 텍스트를 제공합니다. 접근성을 고려하여 반드시
            작성하는 것이 좋습니다.
          </p>
          <CodeBlock title="area 속성 [alt]" className="mt_m" language="html">
            {`<area shape="rect" coords="50,50,150,150" href="https://example.com" alt="예제 링크">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [shape] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;area shape="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;area&gt;</code> 영역의 모양을 지정합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>설정 가능한 값 :</dt>
            <dd>
              <code>rect</code> : 사각형 (<code>x1</code>, <code>y1</code>,{" "}
              <code>x2</code>, <code>y2</code>)
            </dd>
            <dd>
              <code>circle</code> : 원 (<code>centerX</code>,{" "}
              <code>centerY</code>, <code>radius</code>)
            </dd>
            <dd>
              <code>poly</code> : 다각형 (<code>x1</code>, <code>y1</code>,{" "}
              <code>x2</code>, <code>y2</code>, <code>x3</code>, <code>y3</code>
              , ...)
            </dd>
            <dd>
              <code>default</code> : 전체 이미지 영역
            </dd>
          </dl>
          <CodeBlock title="area 속성 [shape]" className="mt_m" language="html">
            {`<area shape="rect" coords="50,50,150,150" href="https://example.com">
<area shape="circle" coords="100,100,50" href="https://example.com">
<area shape="poly" coords="400,32,416,32,422,22,441,23,464" href="https://example.com">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn" data-conlist-h4="true">
            [coords] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;area coords="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>shape</code> 속성과 함께 사용되며, 영역의 좌표를 지정합니다.
          </p>

          <div className="mt_m indent">
            <h4 className="ml_mn t_blue">
              shape 속성의 값이 rect(사각형)인 경우
            </h4>
            <p className="mt_s">
              사각형을 정의하는 도형으로, 두 개의 대각선 꼭짓점 좌표를 이용하여
              크기와 위치를 지정합니다.
            </p>
            <dl className="dl_dot_lst mt_sm">
              <dt>
                형식 : <code>x1, y1, x2, y2</code>
              </dt>
              <dd>
                <code>x1, y1</code> : 사각형의 왼쪽 상단 꼭짓점 좌표
              </dd>
              <dd>
                <code>x2, y2</code> : 사각형의 오른쪽 하단 꼭짓점 좌표
              </dd>
            </dl>
            <figure className="img_figure mt_ms">
              <img src="/images/html/uxkm_img_map_rect.svg" alt="" />
              <figcaption>
                [<code>shape="rect"</code> 속성에서 <code>coords</code> 좌표
                계산 예시]
              </figcaption>
            </figure>
            <CodeBlock
              title='area [coords="rect"]'
              className="mt_m"
              language="html"
            >
              {`<!-- rect 1 -->
<area shape="rect" coords="0, 0, 100, 100" href="https://example.com" alt="rect 1">

<!-- rect 2 -->
<area shape="rect" coords="100, 0, 200, 100" href="https://example.com" alt="rect 2">`}
            </CodeBlock>
          </div>

          <div className="mt_ml indent">
            <h4 className="ml_mn t_blue">
              shape 속성의 값이 circle(원)인 경우
            </h4>
            <p className="mt_s">
              원의 중심 좌표와 반지름을 이용하여 크기와 위치를 결정합니다.
            </p>
            <dl className="dl_dot_lst mt_sm">
              <dt>
                형식 : <code>centerX, centerY, radius</code>
              </dt>
              <dd>
                <code>centerX, centerY</code> : 원의 중심 좌표
              </dd>
              <dd>
                <code>radius</code> : 원의 반지름
              </dd>
            </dl>
            <figure className="img_figure mt_ms">
              <img src="/images/html/uxkm_img_map_circle.svg" alt="" />
              <figcaption>
                [<code>shape="circle"</code> 속성에서 <code>coords</code> 좌표
                계산 예시]
              </figcaption>
            </figure>
            <CodeBlock
              title='area [coords="circle"]'
              className="mt_m"
              language="html"
            >
              {`<!-- circle 1 -->
<area shape="circle" coords="50,50,50" href="https://example.com" alt="circle 1">

<!-- circle 2 -->
<area shape="circle" coords="150,50,50" href="https://example.com" alt="circle 2">`}
            </CodeBlock>
          </div>

          <div className="mt_ml indent">
            <h4 className="ml_mn t_blue">
              shape 속성의 값이 poly(다각형)인 경우
            </h4>
            <p className="mt_s">
              여러 개의 꼭짓점 좌표를 나열하여 형태를 지정합니다.
            </p>
            <dl className="dl_dot_lst mt_sm">
              <dt>
                형식 : <code>x1, y1, x2, y2, x3, y3, ...</code>
              </dt>
              <dd>
                각 <code>x, y</code> 쌍은 다각형 꼭짓점 좌표입니다.
              </dd>
              <dd>최소 세 개 이상의 좌표가 필요합니다.</dd>
            </dl>
            <figure className="img_figure mt_ms">
              <img src="/images/html/uxkm_img_map_poly_worldmap.svg" alt="" />
              <figcaption>
                [<code>shape="poly"</code> 속성에서 <code>coords</code> 좌표
                계산 예시]
              </figcaption>
            </figure>
            <CodeBlock
              title='area [coords="poly"]'
              className="mt_m"
              language="html"
            >
              {`<area shape="poly" coords="2,5,32,1,33,22,51,36,33,57" alt="America">
<area shape="poly" coords="57,14,70,2,111,3,114,23,97,34" alt="Eurasia">
<area shape="poly" coords="57,14,86,29,73,52,66,49,50,28" alt="Africa">
<area shape="poly" coords="105,40,108,49,122,52,127,41,117,34" alt="Australia">`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [target] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;area target="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">링크가 열릴 위치를 지정합니다.</p>
          <dl className="dl_dot_lst mt_s">
            <dt>설정 가능한 값 :</dt>
            <dd>
              <code>_self</code> : 같은 창에서 열기 (기본값)
            </dd>
            <dd>
              <code>_blank</code> : 새 창 또는 새 탭에서 열기
            </dd>
            <dd>
              <code>_parent</code> : 부모 프레임에서 열기
            </dd>
            <dd>
              <code>_top</code> : 최상위 프레임에서 열기
            </dd>
          </dl>
          <CodeBlock
            title="area 속성 [target]"
            className="mt_m"
            language="html"
          >
            {`<area shape="rect" coords="50,50,150,150" href="https://example.com" target="_blank">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [rel] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;area rel="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">현재 문서와 링크 대상의 관계를 설정합니다.</p>
          <dl className="dl_dot_lst mt_s">
            <dt>설정 가능한 값 :</dt>
            <dd>
              <code>noopener</code> : 새 창에서 열릴 때 보안 강화
            </dd>
            <dd>
              <code>nofollow</code> : 검색 엔진이 링크를 따라가지 않음
            </dd>
            <dd>
              <code>noreferrer</code> : <code>Referer</code> 헤더 미전송
            </dd>
          </dl>
          <CodeBlock title="area 속성 [rel]" className="mt_m" language="html">
            {`<area shape="rect" coords="10,10,100,100" href="https://example.com" rel="noopener">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [referrerpolicy] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;area referrerpolicy="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            Referer 헤더 정보를 전송하는 방식을 제어합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>설정 가능한 값 :</dt>
            <dd>
              <code>no-referrer</code> : Referer 미전송
            </dd>
            <dd>
              <code>origin</code> : 도메인만 전송
            </dd>
            <dd>
              <code>strict-origin</code> : HTTPS에서만 Referer 전송
            </dd>
            <dd>
              <code>same-origin</code> : 같은 도메인에서만 Referer 포함
            </dd>
          </dl>
          <CodeBlock
            title="area 속성 [referrerpolicy]"
            className="mt_m"
            language="html"
          >
            {`<area shape="rect" coords="10,10,100,100" href="https://example.com" referrerpolicy="no-referrer">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [download] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;area download="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            클릭 시 링크된 파일을 다운로드하도록 설정합니다.
          </p>
          <CodeBlock
            title="area 속성 [download]"
            className="mt_m"
            language="html"
          >
            {`<!-- download 속성만 선언 -->
<area shape="rect" coords="10,10,100,100" href="example.pdf" download>

<!-- 파일명 지정 -->
<area shape="rect" coords="10,10,100,100" href="file.pdf" download="example.pdf">`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">사각형(Rectangle) 영역 링크</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.4.area_element_1.html"
                className="min_height_300 mb_result_height_230"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="사각형(Rectangle) 영역 링크"
                minHeight="300px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">원형(Circle) 영역 링크</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.4.area_element_2.html"
                className="min_height_300 mb_result_height_230"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="원형(Circle) 영역 링크"
                minHeight="300px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">다각형(Polygon) 영역 링크 (MDN 링크)</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.4.area_element_3.html"
                className="min_height_380 mb_result_height_360"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="다각형(Polygon) 영역 링크 (MDN 링크)"
                minHeight="380px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            다각형(Polygon) 영역 링크 (반응형 세계 지도)
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.3.map_element_1.html"
                className="min_height_380 mb_result_height_330"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="다각형(Polygon) 영역 링크 (반응형 세계 지도)"
                minHeight="380px"
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
            <code>&lt;area&gt;</code>는 단독 사용이 불가하며 반드시{" "}
            <code>&lt;map&gt;</code> 내부에서 사용해야 합니다.
          </li>
          <li>
            <code>&lt;img&gt;</code>에 <code>usemap=&quot;#map-name&quot;</code>{" "}
            속성을 추가하지 않으면 이미지 맵이 정상적으로 동작하지 않습니다.
          </li>
          <li>
            <code>&lt;area&gt;</code> 요소는 이미지의 일부를 클릭할 수 있는
            기능이므로, 반드시 <code>alt</code> 속성을 추가하여 의미를 전달해야
            합니다.
          </li>
          <li>
            <code>&lt;area&gt;</code> 요소는 스타일을 적용할 수 없으므로, 시각적
            효과가 필요할 경우 JavaScript를 활용해야 합니다.
          </li>
        </ul>
      </section>

      <aside className="browser_support mt_xxl" data-tit="area">
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
        <img src={IMG.HTML + "/06_html_04.png"} alt="area 요소" />
        <figcaption>area 요소</figcaption>
      </figure>
    </>
  );
}

export default AreaElementPage;
