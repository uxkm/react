import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "html4_vs_html5",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
};

const PAGE_DATA = {
  title: "HTML4 vs HTML5",
  description:
    "HTML4와 HTML5는 웹 문서 구조와 기능 면에서 여러 차이를 가지고 있으며, HTML5는 HTML4의 한계를 보완하고 현대 웹 환경에 맞게 발전한 표준입니다. 이 페이지에서는 문서 선언, 구조 구성 방식, 접근성과 SEO 측면 등 HTML4와 HTML5의 차이점을 설명합니다.",
  keyword:
    "Markup, HTML, HTML4, HTML5 tag, elements, document, HTML4 vs HTML5, HTML4 / HTML5 차이점, HTML4와 HTML5의 차이점",
};

function Html4VsHtml5Page() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          HTML4와 HTML5는 웹 문서 구조와 기능 면에서 여러 차이를 가지고 있으며,{" "}
          <b>HTML5는 HTML4의 한계를 보완하고 현대 웹 환경에 맞게 발전한 표준</b>
          입니다.
          <br />
          HTML5는{" "}
          <b>
            표현뿐 아니라 기능적인 면까지 고려한 최신 웹 표준으로, 반응형
            디자인, 접근성, 웹 애플리케이션 구현
          </b>
          에 유리한 구조를 제공합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          문서 선언 비교
        </h2>
        <p className="mt_ml">
          HTML4와 HTML5의 가장 눈에 띄는 차이 중 하나는 문서 유형 선언
          방식입니다.
          <br />
          HTML4는 문서 유형에 따라 Strict, Transitional, Frameset 등 세 가지
          DTD를 사용하고
          <br />
          HTML5는{" "}
          <b>
            문서 구조의 간결성을 위해 하나의 선언만으로 브라우저가 HTML5로 해석
          </b>
          하게 합니다.
        </p>
        <article className="indent mt_l">
          <h3 className="ml_mn t_skyblue">HTML4 문서 선언</h3>
          <CodeBlock title="HTML4 문서 선언" className="mt_m" language="html">
            {`<!-- Strict -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- Transitional -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!-- Frameset -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">`}
          </CodeBlock>
        </article>
        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">HTML5 문서 선언</h3>
          <CodeBlock title="HTML5 문서 선언" className="mt_m" language="html">
            {`<!DOCTYPE html>`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          구조 구성 방식
        </h2>
        <p className="mt_ml">
          문서를 구성하는 방식에서도 HTML4와 HTML5는 큰 차이를 보입니다.
        </p>
        <div className="table_summary value_150 html4_html5 mt_m">
          <ul className="lst_hd">
            <li className="cell value">항목</li>
            <li className="cell content t_skyblue">HTML4</li>
            <li className="cell content t_blue">HTML5</li>
          </ul>
          <ul className="lst_bd">
            <li>
              <p className="cell value t_black weight-600">구조화 방식</p>
              <p className="cell content" data-title="HTML4">
                <code>&lt;div&gt;</code>, <code>&lt;table&gt;</code> 등 비시맨틱
                요소 중심으로 구성
              </p>
              <p className="cell content" data-title="HTML5">
                <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
                <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> 등
                시맨틱 태그 사용
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">의미 전달</p>
              <p className="cell content" data-title="HTML4">
                <code>id</code>와 <code>class</code>로 역할을 명시
              </p>
              <p className="cell content" data-title="HTML5">
                태그 자체가 의미를 전달함
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">유지보수</p>
              <p className="cell content" data-title="HTML4">
                역할 파악이 어려움, 코드 해석이 필요함
              </p>
              <p className="cell content" data-title="HTML5">
                구조가 명확하여 가독성과 유지보수 용이
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          시맨틱 요소 비교
        </h2>
        <p className="mt_ml">
          HTML4에서는 동일한 구조를 표현하기 위해 모두 <code>&lt;div&gt;</code>
          로 처리하기 때문에 의미 전달이 어렵고 중복 코드가 많습니다.
        </p>
        <div className="table_summary value_150 html4_html5 mt_m">
          <ul className="lst_hd">
            <li className="cell value">항목</li>
            <li className="cell content t_skyblue">HTML4 요소</li>
            <li className="cell content t_blue">HTML5 대체 시맨틱 요소</li>
          </ul>
          <ul className="lst_bd">
            <li>
              <p className="cell value t_black weight-600">header</p>
              <p className="cell content" data-title="HTML4 요소">
                <code>&lt;div id="header"&gt;</code>
              </p>
              <p className="cell content" data-title="HTML5 대체 시맨틱 요소">
                <code>&lt;header&gt;</code>
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">nav</p>
              <p className="cell content" data-title="HTML4 요소">
                <code>&lt;div id="nav"&gt;</code>
              </p>
              <p className="cell content" data-title="HTML5 대체 시맨틱 요소">
                <code>&lt;nav&gt;</code>
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">content</p>
              <p className="cell content" data-title="HTML4 요소">
                <code>&lt;div id="content"&gt;</code>
              </p>
              <p className="cell content" data-title="HTML5 대체 시맨틱 요소">
                <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">footer</p>
              <p className="cell content" data-title="HTML4 요소">
                <code>&lt;div id="footer"&gt;</code>
              </p>
              <p className="cell content" data-title="HTML5 대체 시맨틱 요소">
                <code>&lt;footer&gt;</code>
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          문서 아웃라인 방식 차이
        </h2>
        <p className="mt_ml">
          HTML4는 <code>&lt;h1&gt;</code> ~ <code>&lt;h6&gt;</code> 태그만으로
          아웃라인을 구성하고, HTML5는 시맨틱 요소가{" "}
          <b>독립적인 아웃라인 컨텍스트를 형성</b>합니다.
        </p>
        <div className="table_summary value_150 html4_html5 mt_m">
          <ul className="lst_hd">
            <li className="cell value">항목</li>
            <li className="cell content t_skyblue">HTML4</li>
            <li className="cell content t_blue">HTML5</li>
          </ul>
          <ul className="lst_bd">
            <li>
              <p className="cell value t_black weight-600">
                아웃라인 구성 기준
              </p>
              <p className="cell content" data-title="HTML4 요소">
                <code>&lt;h1&gt;</code> ~ <code>&lt;h6&gt;</code> 태그만
                사용하여 계층 구성
              </p>
              <p className="cell content" data-title="HTML5 대체 시맨틱 요소">
                <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>,{" "}
                <code>&lt;nav&gt;</code>, <code>&lt;aside&gt;</code> 등 시맨틱
                요소마다 독립적인 아웃라인 생성
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">구조 표현 방식</p>
              <p className="cell content" data-title="HTML4 요소">
                대부분 <code>&lt;div&gt;</code>로 구성되어 의미 구분 어려움
              </p>
              <p className="cell content" data-title="HTML5 대체 시맨틱 요소">
                시맨틱 태그로 문서 구조가 명확하게 표현됨
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">
                제목 태그 사용 방식
              </p>
              <p className="cell content" data-title="HTML4 요소">
                <code>&lt;h1&gt;</code>은 보통 1회만 사용 (문서 전체 제목)
              </p>
              <p className="cell content" data-title="HTML5 대체 시맨틱 요소">
                각 시맨틱 블록 안에 <code>&lt;h1&gt;</code> 중복 사용 가능
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">구조 해석 난이도</p>
              <p className="cell content" data-title="HTML4 요소">
                스크린 리더 및 검색 엔진이 구조 해석에 어려움
              </p>
              <p className="cell content" data-title="HTML5 대체 시맨틱 요소">
                브라우저와 보조 기술이 문서 구조를 자동 인식
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          h1 중복 사용 주의점과 권장 방식
        </h2>
        <p className="mt_ml">
          HTML5에서 시맨틱 요소 내부의 <code>&lt;h1&gt;</code> 중복 사용은
          문법상 가능하지만, 실무에서는 접근성 도구와 검색엔진 해석 차이를
          고려해 신중히 사용해야 합니다.
        </p>
        <article className="indent mt_l">
          <h3 className="ml_mn t_red">[주의점]</h3>
          <ul className="ol_lst info_lst gap-column-important-ms mt_ms">
            <li className="weight-600-before t_black_before">
              <strong>접근성 도구 해석 불일치</strong>
              <p>
                다수의 스크린 리더/진단 도구는 HTML5 아웃라인 알고리즘을
                완전하게 반영하지 않아, 여러 <code>&lt;h1&gt;</code>을 같은
                최상위 제목으로 처리할 수 있습니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>SEO 해석 혼선 가능</strong>
              <p>
                페이지 주제 파악 시 제목 구조가 혼재되면 문서 중요도 해석이
                불안정해질 수 있습니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>사용자 경험 저하</strong>
              <p>
                시각적 계층과 의미 계층이 어긋나면 일반 사용자와 보조기기 사용자
                모두 문서 흐름 파악이 어려워집니다.
              </p>
            </li>
          </ul>
        </article>
        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">[실무 권장 방식]</h3>
          <ul className="ol_lst info_lst gap-column-important-ms mt_ms">
            <li className="weight-600-before t_black_before">
              <strong>문서 단위로 &lt;h1&gt; 하나 유지</strong>
              <p>
                보통 문서 최상위 제목만 <code>&lt;h1&gt;</code>로 두고, 섹션은{" "}
                <code>&lt;h2&gt;</code>부터 계층적으로 내려가는 방식이 가장
                안전합니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>시맨틱 요소와 제목 레벨을 함께 설계</strong>
              <p>
                시맨틱 태그만으로 계층을 기대하지 말고, 제목 레벨도 명시적으로
                설계해 접근성과 유지보수성을 확보합니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>시각 스타일과 의미 구조 분리</strong>
              <p>
                제목 크기/스타일은 CSS로 처리하고, 제목 태그는 문서 논리 구조
                기준으로 선택하는 것이 바람직합니다.
              </p>
            </li>
          </ul>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          접근성과 SEO 측면 비교
        </h2>
        <p className="mt_ml">
          시맨틱 구조의 도입은 웹 접근성과 검색 최적화에도 긍정적인 영향을
          줍니다.
        </p>
        <div className="table_summary value_150 html4_html5 mt_m">
          <ul className="lst_hd">
            <li className="cell value">항목</li>
            <li className="cell content t_skyblue">HTML4</li>
            <li className="cell content t_blue">HTML5</li>
          </ul>
          <ul className="lst_bd">
            <li>
              <p className="cell value t_black weight-600">접근성</p>
              <p className="cell content" data-title="HTML4 요소">
                시각적 구분만 가능. 보조 기술이 의미를 파악하기 어려움
              </p>
              <p className="cell content" data-title="HTML5 대체 시맨틱 요소">
                시맨틱 태그를 통해 구조적 의미를 직접 표현
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">SEO 최적화</p>
              <p className="cell content" data-title="HTML4 요소">
                구조 파악이 어려워 크롤러가 콘텐츠의 중요도를 구분하기 어려움
              </p>
              <p className="cell content" data-title="HTML5 대체 시맨틱 요소">
                의미 기반 구조로 콘텐츠의 우선순위 파악이 용이
              </p>
            </li>
            <li>
              <p className="cell value t_black weight-600">ARIA 활용</p>
              <p className="cell content" data-title="HTML4 요소">
                접근성 향상을 위해 추가 구성 필요
              </p>
              <p className="cell content" data-title="HTML5 대체 시맨틱 요소">
                시맨틱 태그만으로도 상당 부분 보완 가능
              </p>
            </li>
          </ul>
        </div>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/10_html_03.png"} alt="HTML4 vs HTML5" />
        <figcaption>HTML4 vs HTML5</figcaption>
      </figure>
    </>
  );
}

export default Html4VsHtml5Page;
