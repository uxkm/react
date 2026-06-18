import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "svg_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "svg element",
  description:
    "svg 요소는 HTML 문서에서 벡터 기반의 그래픽을 직접 정의하거나 삽입할 수 있도록 하는 태그로, 선, 도형, 텍스트, 경로 등 다양한 요소를 조합해 해상도에 구애받지 않는 이미지를 표현할 수 있으며 CSS 및 JavaScript를 활용한 스타일링과 인터랙션도 가능합니다. 이 페이지에서는 svg 요소의 주요 역할 및 특징을 설명하고, svg 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, svg",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_450" aria-hidden />;
}

function SvgElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;svg&gt;</code> 요소는{" "}
          <b>
            벡터 기반의 그래픽을 문서 내에 직접 삽입하거나 정의할 수 있는 시맨틱
            태그
          </b>
          로, 선(Line), 도형(Rectangle, Circle), 텍스트, 패스(Path) 등을 사용해{" "}
          <b>해상도에 의존하지 않는 그래픽을 표현</b>할 수 있습니다.
          <br />
          픽셀 기반 이미지(.png, .jpg 등)와 달리,{" "}
          <b>
            SVG는 확대하거나 축소해도 품질 저하 없이 선명하게 유지되는 벡터
            그래픽 포맷
          </b>
          으로, 반응형 웹과 고해상도 화면에 매우 적합합니다.
          <br />
          SVG는{" "}
          <i className="underline">
            HTML 문서 안에 직접 작성(이하 "<b className="t_black">inline-svg</b>
            ")
          </i>
          하거나 <i className="underline">외부 파일</i>로 불러올 수 있으며,{" "}
          <b>
            <i className="t_black">inline-svg</i>의 경우 CSS와 JavaScript를 통해
            세밀한 스타일링과 동적 제어가 가능합니다.
          </b>{" "}
          하지만 외부 파일로 삽입한 경우에는 내부 요소에 대한 제어가 제한됩니다.
          <br />
          아이콘, 차트, 애니메이션 등 다양한 웹 그래픽에서 널리 활용됩니다.
        </p>
        <p className="mt_s">
          <code>&lt;svg&gt;</code> 요소는 <code>&lt;img&gt;</code> 요소로{" "}
          <code>.svg</code> 파일을 불러오는 방식이 아니라,
          <mark>
            HTML 문서 내에서 <code>&lt;svg&gt;</code> 태그를 직접 작성하여
            사용하는 Inline SVG를 의미합니다.
          </mark>
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>해상도에 독립적인 그래픽 표현</strong>
            <ul className="dot_lst">
              <li>
                픽셀 기반의 래스터 이미지(PNG, JPG)와 달리, SVG는 수학적 정의를
                기반으로 하므로 확대/축소 시에도 해상도가 깨지지 않습니다.
              </li>
              <li>
                반응형 웹 디자인에서 고해상도 디스플레이(예: Retina
                디스플레이)에서도 선명한 그래픽을 제공할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>XML 기반의 코드 사용</strong>
            <ul className="dot_lst">
              <li>
                HTML 내부에 직접 SVG 코드를 삽입할 수 있으며, XML 문법을
                따릅니다.
              </li>
              <li>
                예: <code>&lt;circle&gt;</code>, <code>&lt;rect&gt;</code>,{" "}
                <code>&lt;path&gt;</code> 등의 태그를 사용하여 도형을 그릴 수
                있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>CSS 및 JavaScript와 연동 가능</strong>
            <ul className="dot_lst">
              <li>
                SVG 요소는 CSS를 통해 스타일링할 수 있으며, JavaScript를
                사용하여 동적으로 조작할 수 있습니다.
              </li>
              <li>
                SVG 내부 요소는 CSS 및 JavaScript를 활용하여 애니메이션을 적용할
                수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>파일 크기 최적화</strong>
            <ul className="dot_lst">
              <li>
                동일한 복잡도를 가진 래스터 이미지(png, jpg)보다 파일 크기가
                작을 수 있어 웹 성능 최적화에 유리합니다.
              </li>
              <li>텍스트 기반의 XML 형식이므로 압축 및 최적화가 용이합니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>브라우저에서 직접 렌더링 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;img&gt;</code> 요소로 불러오는 방식과 달리, HTML
                내에서 <code>&lt;svg&gt;</code> 태그를 직접 작성하면 브라우저가
                즉시 렌더링합니다.
              </li>
              <li>
                별도의 요청 없이 즉시 표시되므로 로딩 속도가 빠릅니다. 대부분의
                최신 브라우저(Chrome, Firefox, Edge, Safari 등)에서 기본적으로
                지원됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_blue_before t_blue">
            <strong className="t_blue">SVG의 주요 도형 요소</strong>
            <ul className="dot_lst">
              <li>
                SVG의 내부 도형 요소로는 사각형을 그리는{" "}
                <code>&lt;rect&gt;</code>, 원을 그리는{" "}
                <code>&lt;circle&gt;</code>, 타원을 표현하는{" "}
                <code>&lt;ellipse&gt;</code>, 선을 생성하는{" "}
                <code>&lt;line&gt;</code>, 다각형을 그리는{" "}
                <code>&lt;polygon&gt;</code>, 자유로운 형태를 지정하는{" "}
                <code>&lt;path&gt;</code> 등이 있습니다.
              </li>
              <li>
                내부 도형 요소를 활용하여 자유로운 그래픽을 직접 그릴 수
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
          <code>&lt;svg&gt;</code> 요소는 기본적으로 인라인 레벨 요소입니다.
        </p>
        <CodeBlock title="svg element CSS" className="mt_m" language="css">
          {`svg {
  display: inline;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="svg element syntax" className="mt_l" language="html">
          {`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- 하위 도형 요소 (필수) -->
</svg>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          SVG의 주요 도형 요소
        </h2>
        <p className="mt_l">
          <i className="underline">
            SVG는 도형 요소 없이도 단독으로 사용할 수 있지만
          </i>
          ,
          <mark>
            시각적인 요소를 표시하려면 <code>&lt;rect&gt;</code>,{" "}
            <code>&lt;circle&gt;</code> 등의 도형 요소나{" "}
            <code>&lt;image&gt;</code> 요소가 필요합니다.
          </mark>
        </p>

        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">도형 요소 요약</h3>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">요소</li>
              <li className="cell value">성명</li>
              <li className="cell content">주요 속성</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code>&lt;rect&gt;</code>
                </p>
                <p className="cell value">사각형</p>
                <p className="cell content">
                  <code>x</code>, <code>y</code>, <code>width</code>,{" "}
                  <code>height</code>, <code>rx</code>, <code>ry</code>
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>&lt;circle&gt;</code>
                </p>
                <p className="cell value">원</p>
                <p className="cell content">
                  <code>cx</code>, <code>cy</code>, <code>r</code>
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>&lt;ellipse&gt;</code>
                </p>
                <p className="cell value">타원</p>
                <p className="cell content">
                  <code>cx</code>, <code>cy</code>, <code>rx</code>,{" "}
                  <code>ry</code>
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>&lt;line&gt;</code>
                </p>
                <p className="cell value">선</p>
                <p className="cell content">
                  <code>x1</code>, <code>y1</code>, <code>x2</code>,{" "}
                  <code>y2</code>, <code>stroke</code>
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>&lt;polygon&gt;</code>
                </p>
                <p className="cell value">다각형</p>
                <p className="cell content">
                  <code>points</code> (꼭짓점 좌표 나열)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>&lt;polyline&gt;</code>
                </p>
                <p className="cell value">연속된 선</p>
                <p className="cell content">
                  <code>points</code>
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>&lt;path&gt;</code>
                </p>
                <p className="cell value">자유로운 선</p>
                <p className="cell content">
                  <code>d</code> (경로 데이터)
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">&lt;rect&gt; (사각형)</h3>
          <dl className="dl_dot_lst mt_ms">
            <dt>속성 설명 :</dt>
            <dd>
              <code>x</code> : 사각형의 왼쪽 상단 꼭짓점의 X 좌표
            </dd>
            <dd>
              <code>y</code> : 사각형의 왼쪽 상단 꼭짓점의 Y 좌표
            </dd>
            <dd>
              <code>width</code> : 사각형의 가로 길이
            </dd>
            <dd>
              <code>height</code> : 사각형의 세로 길이
            </dd>
            <dd>
              <code>rx</code> : 가로 방향의 모서리 둥글기 (값이 클수록 둥글어짐)
            </dd>
            <dd>
              <code>ry</code> : 세로 방향의 모서리 둥글기
            </dd>
          </dl>
          <CodeBlock
            title="SVG 도형 요소 <rect>"
            className="mt_m"
            language="html"
          >
            {`<rect x="20" y="20" width="100" height="50" rx="10" ry="10" fill="red"/>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">&lt;circle&gt; (원)</h3>
          <dl className="dl_dot_lst mt_ms">
            <dt>속성 설명 :</dt>
            <dd>
              <code>cx</code> : 원의 중심 X 좌표
            </dd>
            <dd>
              <code>cy</code> : 원의 중심 Y 좌표
            </dd>
            <dd>
              <code>r</code> : 원의 반지름
            </dd>
          </dl>
          <CodeBlock
            title="SVG 도형 요소 <circle>"
            className="mt_m"
            language="html"
          >
            {`<circle cx="100" cy="100" r="50" fill="blue"/>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">&lt;ellipse&gt; (타원)</h3>
          <dl className="dl_dot_lst mt_ms">
            <dt>속성 설명 :</dt>
            <dd>
              <code>cx</code> : 타원의 중심 X 좌표
            </dd>
            <dd>
              <code>cy</code> : 타원의 중심 Y 좌표
            </dd>
            <dd>
              <code>rx</code> : 타원의 가로 반지름
            </dd>
            <dd>
              <code>ry</code> : 타원의 세로 반지름
            </dd>
          </dl>
          <CodeBlock
            title="SVG 도형 요소 <ellipse>"
            className="mt_m"
            language="html"
          >
            {`<ellipse cx="100" cy="100" rx="60" ry="40" fill="green"/>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">&lt;line&gt; (선)</h3>
          <dl className="dl_dot_lst mt_ms">
            <dt>속성 설명 :</dt>
            <dd>
              <code>x1</code> : 선의 시작점 X 좌표
            </dd>
            <dd>
              <code>y1</code> : 선의 시작점 Y 좌표
            </dd>
            <dd>
              <code>x2</code> : 선의 끝점 X 좌표
            </dd>
            <dd>
              <code>y2</code> : 선의 끝점 Y 좌표
            </dd>
          </dl>
          <CodeBlock
            title="SVG 도형 요소 <line>"
            className="mt_m"
            language="html"
          >
            {`<line x1="10" y1="10" x2="190" y2="190" stroke="black" stroke-width="2"/>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">&lt;polygon&gt; (다각형)</h3>
          <dl className="dl_dot_lst mt_ms">
            <dt>속성 설명 :</dt>
            <dd>
              <code>points</code> : 꼭짓점 좌표들의 집합 (X, Y 값 나열)
            </dd>
          </dl>
          <CodeBlock
            title="SVG 도형 요소 <polygon>"
            className="mt_m"
            language="html"
          >
            {`<polygon points="50,10 90,80 10,80" fill="yellow" stroke="black"/>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">&lt;polyline&gt; (연속된 선)</h3>
          <dl className="dl_dot_lst mt_ms">
            <dt>속성 설명 :</dt>
            <dd>
              <code>points</code> : 연속된 점들의 좌표 (각 점을 연결한 선)
            </dd>
          </dl>
          <CodeBlock
            title="SVG 도형 요소 <polyline>"
            className="mt_m"
            language="html"
          >
            {`<polyline points="10,30 50,90 90,30 130,90" stroke="black" fill="none"/>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">&lt;path&gt; (자유로운 경로)</h3>
          <dl className="dl_dot_lst mt_ms">
            <dt>속성 설명 :</dt>
            <dd>
              <code>d</code> : 경로를 정의하는 속성
            </dd>
          </dl>
          <dl className="dl_dot_lst mt_ms">
            <dt>경로를 정의하는 속성 설명 :</dt>
            <dd>
              <code>M x y</code> : (Move To) x, y 좌표로 시작점 이동
            </dd>
            <dd>
              <code>L x y</code> : (Line To) x, y 좌표로 선 그리기
            </dd>
            <dd>
              <code>C x1 y1, x2 y2, x y</code> : (Cubic Bezier) 제어점 (x1, y1),
              (x2, y2)와 끝점 (x, y)으로 곡선 그리기
            </dd>
            <dd>
              <code>S x2 y2, x y</code> : (Smooth Bezier) C와 비슷하지만 이전
              제어점을 기준으로 부드러운 곡선 생성
            </dd>
          </dl>
          <CodeBlock
            title="SVG 도형 요소 <path>"
            className="mt_m"
            language="html"
          >
            {`<path d="M10 80 C40 10, 65 10, 95 80 S150 150, 180 80" stroke="black" fill="none"/> <!-- path -->`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">SVG와 도형 요소의 공통 속성</h2>
        <p className="mt_l">
          <code>fill</code>, <code>stroke</code>, <code>stroke-width</code>,{" "}
          <code>opacity</code>, <code>transform</code> 속성은{" "}
          <code>&lt;svg&gt;</code> 요소와 그 하위 도형 요소에서 모두 사용할 수
          있습니다.
          <br />
          하지만 <code>&lt;svg&gt;</code> 요소에서 적용할 경우, 기본적으로
          내부의 모든 도형에 영향을 미치며, 개별 도형 요소에서 설정하면 해당
          도형에만 적용됩니다.
        </p>

        <article className="mt_l indent">
          <h3 className="ml_mn t_blue">공통 속성 설명</h3>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">속성</li>
              <li className="cell content">설명</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code>fill</code>
                </p>
                <p className="cell content">
                  도형 내부 색상 (<code>none</code> 사용 시 투명)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>stroke</code>
                </p>
                <p className="cell content">테두리 색상</p>
              </li>
              <li>
                <p className="cell value">
                  <code>stroke-width</code>
                </p>
                <p className="cell content">테두리 두께</p>
              </li>
              <li>
                <p className="cell value">
                  <code>opacity</code>
                </p>
                <p className="cell content">투명도 (0 ~ 1)</p>
              </li>
              <li>
                <p className="cell value">
                  <code>transform</code>
                </p>
                <p className="cell content">
                  이동, 회전, 크기 조정 (<code>translate()</code>,{" "}
                  <code>rotate()</code>, <code>scale()</code>)
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">SVG에 적용</i> vs{" "}
            <i className="t_darkgreen">개별 도형 요소에 적용</i>
          </h3>
          <div className="mt_m indent">
            <h4 className="ml_mn t_blue">&lt;svg&gt; 요소에서 사용될 때</h4>
            <p className="mt_ms">
              <code>&lt;svg&gt;</code> 요소에 적용하면 기본값으로 하위 도형
              요소들에게 영향을 줍니다.
              <br />
              <mark>
                하위 요소가 개별적으로 속성을 설정하지 않으면,{" "}
                <code>&lt;svg&gt;</code>에서 지정한 값이 적용됩니다.
              </mark>
            </p>
            <dl className="dl_dot_lst mt_s">
              <dt>예시 설명 :</dt>
              <dd>
                <code>&lt;circle&gt;</code>에 <code>fill</code>,{" "}
                <code>stroke</code>를 따로 지정하지 않았기 때문에{" "}
                <code>&lt;svg&gt;</code>의 속성을 상속받습니다.
              </dd>
            </dl>
            <CodeBlock
              title="공통 속성을 svg 요소에 사용"
              className="mt_m"
              language="html"
            >
              {`<svg width="200" height="200" fill="red" stroke="blue" stroke-width="5">
  <circle cx="50" cy="50" r="40" /> <!-- red로 채워지고, 파란색 stroke 적용 -->
</svg>`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn t_darkgreen">개별 도형 요소에서 사용될 때</h4>
            <p className="mt_ms">
              도형 요소에서 직접 <code>fill</code>, <code>stroke</code>,{" "}
              <code>stroke-width</code> 등을 설정하면 개별 스타일이 적용됩니다.
              <br />
              <mark>
                <code>&lt;svg&gt;</code>에서 설정한 값보다 개별 도형의 속성이
                우선됩니다.
              </mark>
            </p>
            <dl className="dl_dot_lst mt_s">
              <dt>예시 설명 :</dt>
              <dd>
                <code>&lt;circle&gt;</code>에 <code>fill="yellow"</code>를
                설정했기 때문에, <code>&lt;svg&gt;</code>의{" "}
                <code>fill="red"</code> 값은 적용되지 않습니다.
              </dd>
              <dd>
                <code>stroke="green"</code>을 설정하여 <code>&lt;svg&gt;</code>
                의 <code>stroke="blue"</code> 값도 덮어씁니다.
              </dd>
            </dl>
            <CodeBlock
              title="공통 속성을 개별 요소에 사용"
              className="mt_m"
              language="html"
            >
              {`<svg width="200" height="200" fill="red" stroke="blue" stroke-width="5">
  <circle cx="50" cy="50" r="40" fill="yellow" stroke="green" stroke-width="3"/>
</svg>`}
            </CodeBlock>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">SVG 속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;svg&gt;
            </code>{" "}
            속성 요약
          </h3>
          <div className="table_summary value_250 mt_ml">
            <ul className="lst_hd">
              <li className="cell value">속성명</li>
              <li className="cell content">설명</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">xmlns</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">SVG 네임스페이스를 정의</p>
              </li>
              <li>
                <p className="cell value">
                  <code>viewBox</code>
                </p>
                <p className="cell content">좌표 시스템과 크기를 설정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>preserveAspectRatio</code>
                </p>
                <p className="cell content">
                  <code>viewBox</code>가 <code>SVG</code>의 크기와 어떻게
                  맞춰지는지 설정
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>width</code> / <code>height</code>
                </p>
                <p className="cell content">SVG의 너비 / 높이를 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>x</code> / <code>y</code>
                </p>
                <p className="cell content">
                  SVG가 부모 요소 내에서 배치되는 위치를 지정
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>overflow</code>
                </p>
                <p className="cell content">
                  SVG 내용이 부모 요소를 벗어날 때의 동작을 설정
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>baseProfile</code>
                </p>
                <p className="cell content">
                  SVG의 프로파일을 설정 (SVG 1.1에서 사용)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>contentScriptType</code>
                </p>
                <p className="cell content">
                  내장된 <code>&lt;script&gt;</code> 요소의 MIME 타입을 지정
                  (거의 사용되지 않음)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>contentStyleType</code>
                </p>
                <p className="cell content">
                  내장된 <code>&lt;style&gt;</code> 요소의 MIME 타입을 지정
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>externalResourcesRequired</code>
                </p>
                <p className="cell content">
                  외부 리소스 (예: 이미지, CSS 등)의 로딩 여부 설정
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [xmlns] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;svg xmlns="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;svg&gt;</code> 문서를 XML 기반으로 해석할 수 있도록
            필수적으로 포함해야 하는 속성입니다.
            <br />
            일반적으로 <code>http://www.w3.org/2000/svg</code> 값이 사용됩니다.
          </p>
          <CodeBlock title="svg 속성 [xmlns]" className="mt_m" language="html">
            {`<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <!-- 하위 도형 요소 (필수) -->
</svg>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [viewBox] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;svg viewBox="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;svg&gt;</code> 내부의 좌표계를 정의하며, 가상의 좌표
            시스템을 설정합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>형식 :</dt>
            <dd>
              <code>viewBox="minX minY width height"</code>
            </dd>
          </dl>
          <p className="mt_s">
            아래 코드에서 <code>viewBox="0 0 200 100"</code>은 내부적으로
            200x100 좌표계를 사용하지만,{" "}
            <mark>실제 SVG 크기는 400x200으로 조정됩니다.</mark>
          </p>
          <CodeBlock
            title="svg 속성 [viewBox]"
            className="mt_m"
            language="html"
          >
            {`<svg viewBox="0 0 200 100" width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- 하위 도형 요소 (필수) -->
</svg>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [preserveAspectRatio] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;svg preserveAspectRatio="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>viewBox</code>가 <code>&lt;svg&gt;</code> 요소의 크기와 어떻게
            맞춰지는지를 정의합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>
              형식 : <code>preserveAspectRatio="align meet/slice"</code>
            </dt>
            <dd>
              <code>meet</code> : 원본 비율을 유지하며 SVG 안에 맞춤
            </dd>
            <dd>
              <code>slice</code> : SVG 영역을 초과하더라도 비율 유지
            </dd>
          </dl>
          <dl className="dl_dot_lst mt_s">
            <dt>기본값 :</dt>
            <dd>
              <code>xMidYMid meet</code>
            </dd>
          </dl>
          <CodeBlock
            title="svg 속성 [preserveAspectRatio]"
            className="mt_m"
            language="html"
          >
            {`<svg preserveAspectRatio="xMinYMin meet" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <!-- 하위 도형 요소 (필수) -->
</svg>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [width / height] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;svg width="값" height="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;svg&gt;</code> 요소의 실제 표시 크기를 지정합니다.
            <br />
            <code>viewBox</code> 없이 사용하면 해당 크기가 절대 크기로
            적용됩니다.
          </p>
          <CodeBlock
            title="svg 속성 [width / height]"
            className="mt_m"
            language="html"
          >
            {`<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <!-- 하위 도형 요소 (필수) -->
</svg>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [x / y] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;svg x="값" y="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;svg&gt;</code>가 부모 요소 내에서 배치되는 위치를
            지정합니다.
            <code>inline-svg</code>에서만 적용됩니다.
            <br />
            <i className="t_blue">
              (<code className="t_darkblue">inline-svg</code>란?{" "}
              <code className="t_darkblue">.svg</code> 파일을{" "}
              <code className="t_darkblue">&lt;img&gt;</code> 요소로 불러오는
              방식이 아니라, HTML 문서 내에서{" "}
              <code className="t_darkblue">&lt;svg&gt;</code> 태그를 직접
              사용하여 <code className="t_darkblue">SVG</code> 그래픽을 삽입하는
              방식을 의미합니다.)
            </i>
          </p>
          <CodeBlock title="svg 속성 [x / y]" className="mt_m" language="html">
            {`<svg x="50" y="50" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <!-- 하위 도형 요소 (필수) -->
</svg>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [overflow] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;svg overflow="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;svg&gt;</code> 내부 내용이 <code>&lt;svg&gt;</code> 요소의
            크기를 초과할 경우 어떻게 처리할지 결정합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>사용 가능 값 :</dt>
            <dd>
              <code>visible</code> (기본값) : 초과된 부분을 보여줌
            </dd>
            <dd>
              <code>hidden</code> : 초과된 부분을 숨김
            </dd>
            <dd>
              <code>scroll</code> : 스크롤 가능 (거의 사용되지 않음)
            </dd>
          </dl>
          <CodeBlock
            title="svg 속성 [overflow]"
            className="mt_m"
            language="html"
          >
            {`<svg overflow="hidden" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <!-- 하위 도형 요소 (필수) -->
</svg>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [baseProfile] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;svg baseProfile="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;svg&gt;</code> 버전을 정의하는 속성입니다. (SVG 1.1에서
            사용됨, 최신 버전에서는 필요 없습니다.)
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>값 :</dt>
            <dd>
              <code>tiny</code> : 제한된 기능을 가진 가장 가벼운 프로파일
            </dd>
            <dd>
              <code>basic</code> : <code>tiny</code>보다 기능이 많지만{" "}
              <code>full</code>보다는 제한적인 중간 수준 프로파일
            </dd>
            <dd>
              <code>full</code> : 모든 SVG 기능을 지원하는 가장 강력한 프로파일
            </dd>
          </dl>
          <CodeBlock
            title="svg 속성 [baseProfile]"
            className="mt_m"
            language="html"
          >
            {`<svg baseProfile="full" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <!-- 하위 도형 요소 (필수) -->
</svg>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [contentScriptType] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;svg contentScriptType="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;svg&gt;</code> 요소에서 사용할 스크립트 타입을 정의합니다.
            <mark>거의 사용되지 않으며, 현대 브라우저에서는 무시됩니다.</mark>
          </p>
          <CodeBlock
            title="svg 속성 [contentScriptType]"
            className="mt_m"
            language="html"
          >
            {`<svg contentScriptType="application/ecmascript">
  <script><![CDATA[
    alert("Hello SVG!");
  ]]></script>
</svg>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [contentStyleType] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;svg contentStyleType="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;svg&gt;</code> 요소에서 사용할 스타일 시트의 MIME 타입을
            정의합니다.
            <mark>
              현대 브라우저에서는 기본적으로 <code>text/css</code>로 인식하므로
              필요하지 않습니다.
            </mark>
          </p>
          <CodeBlock
            title="svg 속성 [contentStyleType]"
            className="mt_m"
            language="html"
          >
            {`<svg contentStyleType="text/css">
  <style><![CDATA[
    circle { fill: pink; }
  ]]></style>
  <circle cx="50" cy="50" r="40" />
</svg>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [externalResourcesRequired]{" "}
            <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;svg externalResourcesRequired="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            외부 리소스(예: 이미지, CSS, JS)가 모두 로드될 때까지 SVG를
            렌더링하지 않도록 설정합니다.
            <mark>최신 브라우저에서는 무시될 가능성이 높습니다.</mark>
          </p>
          <CodeBlock
            title="svg 속성 [externalResourcesRequired]"
            className="mt_m"
            language="html"
          >
            {`<svg externalResourcesRequired="true">
  <image xlink:href="external-image.png" width="100" height="100" />
</svg>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 도형 (원, 사각형, 선, 다각형) 그리기</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.10.svg_element_1.html"
                className="min_height_400 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="기본 도형 (원, 사각형, 선, 다각형) 그리기"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">JavaScript로 동적 SVG 조작</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.10.svg_element_2.html"
                className="min_height_500 mb_result_height_500"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="JavaScript로 동적 SVG 조작"
                minHeight="500px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">CSS로 동적 SVG 조작</h3>
          <p className="dp_pc reset_code_info mt_ms">
            (Reset) 버튼을 클릭하거나 페이지를 새로고침(
            <i className="key_f5">F5</i> or <i className="key_ctrl">ctrl</i>+
            <i className="key_r">R</i> or <i className="key_mac_cmd">cmd</i>+
            <i className="key_r">R</i>)하여 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.10.svg_element_3.html"
                className="min_height_500 mb_result_height_500"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="CSS로 동적 SVG 조작"
                minHeight="500px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">로고 애니메이션</h3>
          <p className="mt_ms">
            실제 프로젝트에서 구현한 svg 애니메이션으로, JavaScript 도움 없이
            CSS 만으로 대부분의 svg 애니메이션 구현이 가능합니다.
            <br />
          </p>
          <p className="dp_pc reset_code_info">
            (Reset) 버튼을 클릭하거나 페이지를 새로고침(
            <i className="key_f5">F5</i> or <i className="key_ctrl">ctrl</i>+
            <i className="key_r">R</i> or <i className="key_mac_cmd">cmd</i>+
            <i className="key_r">R</i>)하여 예제를 확인하세요.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.10.svg_element_4.html"
                className="min_height_450 mb_result_height_380"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="로고 애니메이션"
                minHeight="450px"
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
            SVG 파일을 <code>&lt;img&gt;</code> 요소(
            <code>&lt;img src="image.svg"&gt;</code>)로 불러오면 CSS 및
            JavaScript로 조작할 수 없습니다.
            <br />
            반면, 직접 <code>&lt;svg&gt;</code> 요소를 사용하면 스타일 변경과
            애니메이션 적용이 용이합니다.
          </li>
          <li>
            <code>&lt;svg&gt;</code> 요소의 크기를 조절할 때{" "}
            <code>viewBox</code>를 활용하는 것이 중요합니다. 단순히{" "}
            <code>width</code>와 <code>height</code>만 변경하면 왜곡될 수
            있으므로, <code>viewBox</code>를 적절히 설정해야 합니다.
          </li>
          <li>
            SVG 파일이라 하더라도 복잡한 SVG 파일은 파일 크기가 클 수 있습니다.
            너무 복잡한 벡터 그래픽은 성능 저하를 유발할 수 있으므로, 최적화가
            필요합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="svg">
        <ul>
          <li className="ie">9+</li>
          <li className="edge">18.0</li>
          <li className="chrome">4.0</li>
          <li className="firefox">2.0</li>
          <li className="opera">10.0</li>
          <li className="safari">3.1</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/06_html_10.png"} alt="svg 요소" />
        <figcaption>svg 요소</figcaption>
      </figure>
    </>
  );
}

export default SvgElementPage;
