import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "img_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "img element",
  description:
    "img 요소는 HTML 문서에서 이미지를 삽입할 때 사용하는 태그로, src 속성에 이미지 경로를 지정하고 alt 속성을 통해 대체 텍스트를 제공하여 시각적 정보와 접근성을 함께 고려할 수 있도록 설계되어 있습니다. 이 페이지에서는 img 요소의 주요 역할 및 특징을 설명하고, img 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, img, image",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_450" aria-hidden />;
}

function ImgElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;img&gt;</code> 요소는 문서에 이미지를 삽입할 때 사용하는{" "}
          <b>
            <i className="underline">비시맨틱 태그</i>
          </b>
          로, <b>시각적 콘텐츠를 표시하는 데 사용</b>됩니다.
          <br />
          <code>src</code> 속성에 이미지의 경로를 지정하고, <code>alt</code>{" "}
          속성을 통해 <b>이미지의 대체 텍스트를 제공</b>하여 접근성과 정보
          전달을 높입니다. 자체적으로 닫는 태그 없이 사용되며, 레이아웃 제어를
          위해 <code>width</code>, <code>height</code> 등의 속성과 CSS 스타일을
          함께 사용할 수 있습니다. 의미보다는 <b>시각적 표현이 목적</b>인
          요소입니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>이미지 삽입</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;img&gt;</code> 요소는{" "}
                <b>문서 내에서 이미지를 표시하는 기본 요소</b>입니다.
              </li>
              <li>
                <code>src</code> 속성을 사용해 이미지의 경로나 URL을 지정합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>대체 텍스트 제공 가능 (alt 속성)</strong>
            <ul className="dot_lst">
              <li>
                <code>alt</code> 속성을 통해{" "}
                <b>이미지가 로드되지 않을 경우 표시될 텍스트를 지정</b>할 수
                있습니다.
              </li>
              <li>
                또한,{" "}
                <b>
                  스크린 리더가 해당 텍스트를 읽어줄 수 있어 웹 접근성을 향상
                </b>
                시킵니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>파일 형식 지원</strong>
            <ul className="dot_lst">
              <li>
                <b>JPEG(JPG), PNG, GIF, SVG, WebP, AVIF</b> 등의 다양한 이미지
                포맷을 지원합니다.
              </li>
              <li>
                WebP와 AVIF는 최신 포맷으로,{" "}
                <b>
                  파일 크기가 작고 성능이 뛰어나지만 브라우저 호환성을 확인해야
                  합니다.
                </b>
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>SEO 및 성능 최적화</strong>
            <ul className="dot_lst">
              <li>
                <code>alt</code> 속성을 올바르게 설정하면{" "}
                <b>검색 엔진이 이미지를 인식하는 데 도움</b>을 줍니다.
              </li>
              <li>
                <code>loading=&quot;lazy&quot;</code> 속성을 사용하면 필요한
                순간에만 이미지를 로드해 <b>성능을 향상</b>시킬 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>반응형 디자인 적용 가능</strong>
            <p>
              <code>width</code>/<code>height</code> 속성을 사용하거나 CSS에서{" "}
              <code>max-width: 100%</code>를 적용하면 화면 크기에 맞게
              유동적으로 조정할 수 있습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;img&gt;</code> 요소는 기본적으로 인라인 레벨 요소입니다.
        </p>
        <CodeBlock title="img element CSS" className="mt_m" language="css">
          {`img {
  display: inline;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="img element syntax" className="mt_l" language="html">
          {`<img src="image.jpg" alt="예제 이미지" width="500" height="300">`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;img&gt;
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
                  <code className="t_darkgreen">src</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">이미지 파일의 경로 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">alt</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">대체 텍스트 (접근성 및 SEO)</p>
              </li>
              <li>
                <p className="cell value">
                  <code>width</code>/<code>height</code>
                </p>
                <p className="cell content">
                  이미지의 크기 지정 (CSS에서 설정 가능)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>srcset</code>
                </p>
                <p className="cell content">
                  반응형 이미지 지원 (다양한 해상도의 이미지 제공)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>sizes</code>
                </p>
                <p className="cell content">
                  <code>srcset</code>과 함께 사용되며, 뷰포트 크기에 따라 적절한
                  이미지 선택
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>loading</code> [권장]
                </p>
                <p className="cell content">
                  지연 로딩(<code>lazy</code>)을 지원하여 성능 최적화
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>decoding</code>
                </p>
                <p className="cell content">
                  브라우저가 이미지를 디코딩하는 방법 지정 (<code>sync</code>,{" "}
                  <code>async</code>, <code>auto</code>)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>crossorigin</code>
                </p>
                <p className="cell content">
                  CORS 요청을 위한 속성 (<code>anonymous</code>,{" "}
                  <code>use-credentials</code>)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>referrerpolicy</code>
                </p>
                <p className="cell content">
                  이미지를 요청할 때 참조 헤더(<code>Referer</code>)를 제어(거의
                  사용되지 않음)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>usemap</code>
                </p>
                <p className="cell content">
                  <code>&lt;map&gt;</code> 요소와 연결하여 이미지 맵 기능 제공
                  (거의 사용되지 않음)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>ismap</code>
                </p>
                <p className="cell content">
                  서버 측 이미지 맵을 사용할 때 클릭 좌표 전달 (거의 사용되지
                  않음)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>longdesc</code>
                </p>
                <p className="cell content">
                  이미지의 긴 설명을 위한 URL 지정, HTML5에서 폐기됐다가
                  HTML5.1에 다시 추가 (거의 사용되지 않음,{" "}
                  <code>aria-describedby</code> 사용을 권장)
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_l indent">
          <h3 className="ml_mn">
            [src] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;img src="이미지 경로"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;img&gt;</code> 태그에서 <b>반드시 필요한 속성</b>으로,
            이미지 파일의 경로(URL)를 지정합니다.
          </p>
          <CodeBlock title="img 속성 [src]" className="mt_s" language="html">
            {`<img src="image.jpg" alt="설명 텍스트">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [alt] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;img alt="설명 텍스트"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            접근성을 위해 필수적인 속성으로, 이미지가 표시되지 않을 경우 대신
            보여줄 텍스트를 설정합니다.
          </p>
          <CodeBlock title="img 속성 [alt]" className="mt_s" language="html">
            {`<img src="image.jpg" alt="설명 텍스트">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [width / height] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;img width="값" height="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            이미지의 가로(<code>width</code>), 세로(<code>height</code>) 크기를
            지정합니다.
          </p>
          <CodeBlock
            title="img 속성 [width / height]"
            className="mt_s"
            language="html"
          >
            {`<img src="image.jpg" width="500" height="300" alt="설명 텍스트">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [srcset] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;img srcset="이미지 경로1, 이미지 경로2"&gt;
            </span>
          </h3>
          <CodeBlock title="img 속성 [srcset]" className="mt_s" language="html">
            {`<img src="medium.jpg" srcset="small.jpg 600w, medium.jpg 1200w, large.jpg 1800w" alt="설명 텍스트">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [sizes] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;img sizes="값"&gt;
            </span>
          </h3>
          <CodeBlock title="img 속성 [sizes]" className="mt_s" language="html">
            {`<img
  src="default.jpg"
  srcset="small.jpg 600w, medium.jpg 1200w"
  sizes="(max-width: 800px) 600px, 1200px"
  alt="설명 텍스트"
>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [loading] <i className="attr_optional">선택 사항 - 권장</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;img loading="값"&gt;
            </span>
          </h3>
          <CodeBlock
            title="img 속성 [loading]"
            className="mt_s"
            language="html"
          >
            {`<img src="image.jpg" loading="lazy" alt="설명 텍스트">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [decoding] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;img decoding="값"&gt;
            </span>
          </h3>
          <CodeBlock
            title="img 속성 [decoding]"
            className="mt_s"
            language="html"
          >
            {`<img src="image.jpg" decoding="async" alt="설명 텍스트">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [crossorigin] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;img crossorigin="값"&gt;
            </span>
          </h3>
          <CodeBlock
            title="img 속성 [crossorigin]"
            className="mt_s"
            language="html"
          >
            {`<img src="https://example.com/image.jpg" crossorigin="anonymous" alt="설명 텍스트">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [referrerpolicy]{" "}
            <i className="attr_optional">선택 사항 - 거의 사용 안함</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;img referrerpolicy="값"&gt;
            </span>
          </h3>
          <CodeBlock
            title="img 속성 [referrerpolicy]"
            className="mt_s"
            language="html"
          >
            {`<img src="image.jpg" referrerpolicy="no-referrer" alt="설명 텍스트">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [usemap] <i className="attr_optional">선택 사항 - 거의 사용 안함</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;img usemap="#map"&gt;
            </span>
          </h3>
          <CodeBlock title="img 속성 [usemap]" className="mt_s" language="html">
            {`<img src="image.jpg" usemap="#map" alt="이미지 맵 예제">
<map name="map">
  <area shape="rect" coords="34,44,270,350" alt="버튼1" href="button1.html">
  <area shape="circle" coords="337,300,44" alt="버튼2" href="button2.html">
</map>`}
          </CodeBlock>
          <p className="mt_m">
            <a
              href="/publishing/html/06-embedded/03-map_element"
              target="_blank"
              title="map 요소 자세히보기"
              className="box_link external"
            >
              [map 요소] 자세한 설명 보기
            </a>
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [ismap] <i className="attr_optional">선택 사항 - 거의 사용 안함</i>{" "}
            <span className="t_blue el_inline_block">&lt;img ismap&gt;</span>
          </h3>
          <CodeBlock title="img 속성 [ismap]" className="mt_s" language="html">
            {`<img src="image.jpg" ismap alt="서버 측 이미지 맵 예제">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [longdesc]{" "}
            <i className="attr_optional">선택 사항 - 거의 사용 안함</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;img longdesc="URL"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            현재는 거의 사용되지 않으며 <code>aria-describedby</code> 또는{" "}
            <code>&lt;figure&gt;</code>와 <code>&lt;details&gt;</code> 조합이
            권장됩니다.
          </p>
          <CodeBlock
            title="img 속성 [longdesc]"
            className="mt_s"
            language="html"
          >
            {`<img src="chart.png" alt="매출 분석 차트" longdesc="chart-description.html">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">자주 사용하는 속성 조합</h3>
          <ul className="dot_lst mt_s">
            <li>
              <code>src</code> + <code>alt</code>는 필수에 가깝고, 반응형
              이미지는 <code>srcset</code> + <code>sizes</code>를 함께
              사용합니다.
            </li>
            <li>
              성능 개선을 위해 <code>loading=&quot;lazy&quot;</code>,{" "}
              <code>decoding=&quot;async&quot;</code> 조합이 자주 사용됩니다.
            </li>
            <li>
              외부 도메인 이미지를 Canvas 등에서 다뤄야 하면{" "}
              <code>crossorigin</code> 설정과 서버 CORS 정책을 함께 확인해야
              합니다.
            </li>
          </ul>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code>srcset</code> / <code>sizes</code> 예시
          </h3>
          <CodeBlock
            title="img srcset and sizes"
            className="mt_m"
            language="html"
          >
            {`<img
  src="default.jpg"
  srcset="small.jpg 600w, medium.jpg 1200w, large.jpg 1800w"
  sizes="(max-width: 800px) 600px, 1200px"
  alt="설명 텍스트"
/>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <p className="mt_sm t_blue">
          아래 모든 예제에는 지연 로딩(<code>loading=&quot;lazy&quot;</code>)이
          적용됩니다.
        </p>

        <article className="mt_l indent">
          <h3 className="ml_mn">기본 이미지 삽입 및 크기 지정</h3>
          <p className="mt_ms">
            이미지 비율을 유지하려면 <code>width</code>만 지정하고{" "}
            <code>height</code>를 <code>auto</code>로 두는 방식이 권장됩니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.2.img_element_1.html"
                className="min_height_450 mb_result_height_350"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="기본 이미지 삽입 및 크기 지정"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">반응형 이미지 (max-width: 100%)</h3>
          <p className="mt_ms">
            <code>max-width: 100%</code>를 지정하면 이미지가 부모 요소를
            초과하지 않고 자동 축소됩니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.2.img_element_2.html"
                className="min_height_450 mb_result_height_350"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="반응형 이미지 (max-width: 100%)"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">반응형 이미지 (srcset 활용)</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.2.img_element_3.html"
                className="min_height_450 mb_result_height_350"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="반응형 이미지 (srcset 활용)"
                minHeight="450px"
              />
            </Suspense>
          </div>
          <div className="mt_m">
            <p className="t_blue weight-600">
              위 예제에서 브라우저 크기에 따라 이미지가 변경되지 않는다면, 아래
              버튼을 클릭하여 새 창에서 확인해 보세요.
            </p>
            <a
              href="/_code_samples/6.2.img_element_srcset.html"
              target="_blank"
              title="새창 열림"
              className="box_link before_none external mt_s"
            >
              새창에서 예제 확인
            </a>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">object-fit: cover / contain</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.2.img_element_4.html"
                className="min_height_300 mb_result_height_200"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="object-fit: cover"
                minHeight="300px"
              />
            </Suspense>
          </div>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.2.img_element_5.html"
                className="min_height_300 mb_result_height_200"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="object-fit: contain"
                minHeight="300px"
              />
            </Suspense>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          이미지 용량 크기의 문제와 압축의 필요성
        </h2>
        <p className="mt_l">
          웹사이트에서 사용하는 이미지 용량이 크면{" "}
          <b>로딩 속도 저하, 사용자 이탈, SEO 악영향</b>으로 이어질 수 있습니다.
        </p>
        <p className="mt_sm">
          따라서 <strong>이미지 압축</strong>을 통해 시각적 품질을 유지하면서
          파일 크기를 줄이는 작업이 필요합니다.
        </p>
        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">이미지 용량이 클 때 발생하는 문제</h3>
          <ul className="dot_lst mt_s">
            <li>초기 로딩 지연으로 사용자 이탈 가능성이 높아집니다.</li>
            <li>Core Web Vitals 저하로 SEO 평가에 불리할 수 있습니다.</li>
            <li>모바일 환경에서는 데이터 사용량 부담이 커집니다.</li>
          </ul>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">이미지 압축 도구 추천</h3>
          <ul className="mt_ml ol_lst info_lst gap-column-important-m">
            <li className="t_black_before weight-600-before">
              <strong>TinyPNG</strong>
              <ul className="dot_lst">
                <li>
                  <b className="t_black">특징 :</b> PNG, JPG 파일을 고품질로
                  압축해 줍니다. 사용법이 매우 직관적이며, 최대 20개 파일을 한
                  번에 압축 가능합니다.
                </li>
                <li>
                  <b className="t_black">장점 :</b> 시각적 품질 저하 없이 파일
                  크기 대폭 감소합니다.
                </li>
              </ul>
              <a
                href="https://tinypng.com/"
                target="_blank"
                title="새창 열림"
                className="box_link before_none external mt_s mb_sm"
              >
                TinyPNG 사이트 바로가기
              </a>
            </li>
            <li className="t_black_before weight-600-before">
              <strong>Website Planet - 이미지 압축기</strong>
              <ul className="dot_lst">
                <li>
                  <b className="t_black">특징 :</b> 한국어 인터페이스 제공하며,
                  JPG/PNG 압축 가능합니다. 각 사진의 크기는 최대 50MB 까지
                  가능합니다.
                </li>
                <li>
                  <b className="t_black">장점 :</b> 모든 작업이 브라우저 내에서
                  이루어지기 때문에 비교적 안전하고 빠릅니다.
                </li>
              </ul>
              <a
                href="https://www.websiteplanet.com/ko/webtools/imagecompressor/"
                target="_blank"
                title="새창 열림"
                className="box_link before_none external mt_s mb_sm"
              >
                Website Planet 사이트 바로가기
              </a>
            </li>
          </ul>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l gap-column-important-sm">
          <li>
            접근성과 SEO 최적화를 위해 모든 <code>&lt;img&gt;</code> 요소에는{" "}
            <code>alt</code> 속성을 추가해야 합니다.
          </li>
          <li>
            <code>width</code>/<code>height</code>를 잘못 지정하면 비율이 깨질
            수 있으므로 주의해야 합니다. 특별한 경우가 아니라면{" "}
            <code>height</code>를 설정하지 않고 <code>width</code>만 지정하여
            비율을 유지하는 것이 좋습니다.
          </li>
          <li>
            정보 전달 의미가 없는 장식 이미지는 <code>&lt;img&gt;</code>보다 CSS{" "}
            <code>background-image</code>를 활용하는 것이 효율적입니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="img">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">지원</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/06_html_02.png"} alt="img 요소" />
        <figcaption>img 요소</figcaption>
      </figure>
    </>
  );
}

export default ImgElementPage;
