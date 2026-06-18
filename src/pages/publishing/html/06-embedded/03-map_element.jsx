import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "map_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "map element",
  description:
    "map 요소는 HTML 문서에서 이미지 내 특정 영역을 클릭 가능한 링크로 지정하기 위한 이미지 맵을 정의하는 태그로, name 속성을 통해 img 요소의 usemap 속성과 연결되며 내부에는 하나 이상의 area 요소를 포함하여 좌표 기반의 인터랙티브한 링크 영역을 설정할 수 있습니다. 이 페이지에서는 map 요소의 주요 역할 및 특징을 설명하고, map 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, map",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_450" aria-hidden />;
}

function MapElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;map&gt;</code> 요소는{" "}
          <b>이미지 맵(image map)을 정의하는 시맨틱 태그</b>로,{" "}
          <code>&lt;img&gt;</code> 요소와 함께 사용되어{" "}
          <b>이미지 안의 특정 영역에 다양한 하이퍼링크를 연결</b>할 수 있게
          해줍니다.
          <br />
          <code>&lt;map&gt;</code> 내부에는 하나 이상의{" "}
          <code>&lt;area&gt;</code> 요소를 포함하며, 각{" "}
          <code>&lt;area&gt;</code>는 이미지의 특정 좌표에 클릭 가능한 영역을
          지정합니다. 이 구조를 통해{" "}
          <b>하나의 이미지 안에 여러 개의 링크 기능을 부여</b>할 수 있으며,
          시각적으로 풍부한 내비게이션 또는 인터랙션 요소를 구현할 수 있습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>인터랙티브한 이미지 맵 생성</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;map&gt;</code>을 사용하면 이미지의 특정 부분을 클릭할
                수 있도록 설정할 수 있습니다.
              </li>
              <li>
                예: 세계 지도에서 특정 국가를 클릭하면 해당 국가의 정보를
                제공하는 페이지로 이동할 수 있음.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>
              <code className="font-16-important">usemap</code> 속성과 연동
            </strong>
            <p>
              <code>&lt;img&gt;</code> 요소의 <code>usemap</code> 속성을{" "}
              <code>&lt;map&gt;</code> 요소의 <code>name</code> 속성과 연결하여
              사용해야 합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다양한 형태(Shape) 지원</strong>
            <p>
              <code>&lt;area&gt;</code> 요소를 사용하여 사각형, 원형, 다각형
              등의 클릭 가능한 영역을 정의할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다양한 입력 방식</strong>
            <p>
              <code>coords</code> 속성을 사용하여 영역의 좌표를 정의할 수
              있으며, <code>href</code> 속성으로 각 영역에 링크를 설정할 수
              있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>반응형 디자인 고려 필요</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;map&gt;</code>의 하위 요소인 <code>&lt;area&gt;</code>
                는 고정된 좌표값을 사용하기 때문에, 반응형 디자인을 적용할 때
                주의가 필요합니다.
              </li>
              <li>CSS 및 JavaScript를 활용하여 크기를 조정해야 합니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>SEO 및 접근성 고려</strong>
            <p>
              <code>&lt;map&gt;</code> 요소 내에 사용되는{" "}
              <code>&lt;area&gt;</code> 요소의 <code>alt</code> 속성을 올바르게
              설정하면, 검색 엔진이 이미지 맵을 해석하는 데 도움이 됩니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;map&gt;</code> 요소는{" "}
          <mark>
            특정한 CSS 기본 값이 없으며, <code>&lt;map&gt;</code> 요소는 화면에
            표시되지 않습니다.
          </mark>
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;img&gt;</code> 요소의
            <code>usemap=&quot;#mapname&quot;</code>을 <code>&lt;map&gt;</code>{" "}
            요소의 <code>name=&quot;mapname&quot;</code>과 연결합니다.
          </li>
          <li>
            <code>&lt;map&gt;</code> 요소는 반드시 하나 이상의{" "}
            <code>&lt;area&gt;</code> 요소와 함께 사용해야 하며,{" "}
            <code>&lt;map&gt;</code>은 <code>&lt;img&gt;</code> 요소와 연결되어
            이미지 맵을 정의하는 역할을 합니다.
            <br />
            <code>&lt;area&gt;</code> 요소는 클릭할 수 있는 영역을 지정하여,
            특정 부분을 클릭했을 때 링크로 이동하거나 특정 동작을 수행할 수
            있도록 합니다.
          </li>
        </ul>
        <CodeBlock title="map element syntax" className="mt_l" language="html">
          {`<img src="image.jpg" usemap="#mapname" alt="이미지 맵">
<map name="mapname">
  <area shape="rect" coords="34,44,270,350" href="https://example.com" alt="Example" title="Example Area">
  <area shape="circle" coords="150,150,50" href="https://another-example.com" alt="Another Example">
</map>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            [name] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;map name="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;map&gt;</code>의 고유 이름이며{" "}
            <code>&lt;img usemap="#이름"&gt;</code>과 연결됩니다.
          </p>
          <CodeBlock
            title="map 요소의 [name] 속성"
            className="mt_m"
            language="html"
          >
            {`<map name="citymap"></map> <!-- name -->`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">반응형 세계 지도 이미지맵</h3>
          <p className="mt_ms">
            <code>&lt;map&gt;</code>과 <code>&lt;area&gt;</code> 요소를 이용하여
            구현한 반응형 세계지도 예제입니다. 마우스를 오버하면 각 대륙의
            경계선에 맞춰 링크 영역이 나뉘는 것을 확인할 수 있습니다.
            <br />
            다만, <code>&lt;area&gt;</code> 요소의 <code>coords</code> 값은
            고정되어 있으므로, 반응형 웹을 구현하려면 JavaScript를 활용하여
            동적으로 조정해야 합니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.3.map_element_1.html"
                className="min_height_380 mb_result_height_330"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="반응형 세계 지도 이미지맵"
                minHeight="380px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">coords</i> 좌표 설정 과정(위 예제의 세계 지도
            기준)
          </h3>
          <p className="mt_ms">
            세계 지도처럼 링크 영역의 모양이 원이나 네모처럼 일정하지 않고
            불규칙한 경우, 좌표를 계산하고 생성하는 과정이 까다로울 수 있습니다.
            <br />
            이럴 때는 <b className="t_blue">Image Map Generator</b> 같은 도구를
            활용하여 직접 좌표를 설정하는 것이 좋은 방법입니다.
          </p>
          <a
            href="https://www.image-map.net/"
            className="box_link external mt_s"
            target="_blank"
            title="새창 열림"
          >
            Image Map Generator 바로가기
          </a>
          <ol className="ol_lst info_lst gap-column-important-ml mt_ml">
            <li className="t_black_before weight-600-before">
              <strong>사이트 접속 후 이미지 업로드</strong>
              <p>
                위 링크를 클릭하여 <b className="t_blue">Image Map Generator</b>
                에 접속한 후,{" "}
                <b className="t_darkgreen underline">
                  "Select Image from My PC"
                </b>{" "}
                버튼을 클릭하여 좌표를 생성할 이미지를 업로드합니다.
              </p>
              <p className="mt_ms">
                <img
                  src="/images/html/map_generator1.png"
                  alt="사이트 접속 후 이미지 업로드"
                  loading="lazy"
                  style={{ maxWidth: "787px" }}
                />
              </p>
            </li>
            <li className="t_black_before weight-600-before">
              <strong>필요한 갯수만큼 area 생성</strong>
              <p>
                <b className="t_red underline">"+ Add New Area"</b> 버튼을
                클릭하여 필요한 만큼 입력 필드를 생성한 후, 각 입력 필드에
                내용을 채워 넣습니다.
                <br />각 행은 하나의 <code>area</code>가 되며,{" "}
                <b className="t_black">Shape</b> 부분은 모두{" "}
                <b className="t_blue">Poly</b>(다각형 모드, Polygon의 약어)로
                선택합니다.
              </p>
              <p className="mt_ms">
                <img
                  src="/images/html/map_generator2.png"
                  alt="필요한 갯수만큼 area 생성"
                  loading="lazy"
                  style={{ maxWidth: "787px" }}
                />
              </p>
            </li>
            <li className="t_black_before weight-600-before">
              <strong>coords 좌표 생성</strong>
              <p>
                입력 필드의 <b className="t_black">Active</b> 항목에서 선택된{" "}
                <code>area</code>를 기준으로 좌표를 생성합니다. 이미지에서
                원하는 영역을 연속적으로 클릭하여 좌표를 이어갈 수 있습니다.
                <br />
                (마우스 우클릭으로 직전에 생성한 좌표를 삭제할 수 있으며, 좌표
                생성이 완료된 후에는 좌표를 드래그하여 수정할 수 있습니다.)
                <br />
                다른 <code>area</code>에 좌표를 생성하려면{" "}
                <b className="t_black">Active</b> 항목에서 해당{" "}
                <code>area</code>를 선택한 후, 이미지에서 좌표를 생성하면
                됩니다.
              </p>
              <p className="mt_ms">
                <img
                  src="/images/html/map_generator3.png"
                  alt="coords 좌표 생성"
                  loading="lazy"
                  style={{ maxWidth: "787px" }}
                />
              </p>
            </li>
            <li className="t_black_before weight-600-before">
              <strong>map 코드 생성</strong>
              <p>
                각 <code>area</code>의 <code>coords</code> 좌표를 모두 생성한
                후, <b className="t_darkgreen underline">"Show Me The Code!"</b>{" "}
                버튼을 클릭하여 완성된 코드를 확인합니다.
                <br />
                <i className="underline">따로 복사 버튼은 없기 때문에</i>{" "}
                <mark>코드를 직접 드레그 후 복사하여 사용</mark>하면 됩니다.
              </p>
              <p className="mt_ms">
                <img
                  src="/images/html/map_generator4.png"
                  alt="map 코드 생성"
                  loading="lazy"
                  style={{ maxWidth: "787px" }}
                />
              </p>
            </li>
          </ol>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;map&gt;</code> 요소는 반드시 하위 요소인{" "}
            <code>&lt;area&gt;</code>와 함께 사용해야 합니다.
            <br />
            <code>&lt;map&gt;</code>은 <code>&lt;img&gt;</code> 요소와 연결하는
            역할을 하며, 실제로 클릭 가능한 영역을 정의하고 링크 또는 액션을
            설정하는 것은 <code>&lt;area&gt;</code> 요소입니다.
          </li>
          <li>
            <code>&lt;img&gt;</code> 요소의 <code>usemap</code> 속성과{" "}
            <code>&lt;map&gt;</code> 요소의 <code>name</code> 속성이 일치해야
            이미지 맵이 정상 작동합니다.
          </li>
          <li>
            클릭할 수 있는 영역이 많아질수록, 피싱 공격이나 보안 취약점이 발생할
            수 있습니다. 외부 링크를 연결할 경우{" "}
            <code>target="_blank" rel="noopener noreferrer"</code> 속성을
            사용하는 것이 좋습니다.
          </li>
          <li>
            일부 브라우저에서는 <code>&lt;map&gt;</code> 기능이 제한적으로
            동작할 수 있습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="map">
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
        <img src={IMG.HTML + "/06_html_03.png"} alt="map 요소" />
        <figcaption>map 요소</figcaption>
      </figure>
    </>
  );
}

export default MapElementPage;
