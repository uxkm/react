import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "scss_start",
  type: "publishing",
  info: false,
  note: false,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: false,
};

const PAGE_DATA = {
  title: "CSS 변수와 SCSS 변수의 차이",
  description:
    "CSS Custom Properties(CSS 변수)와 SCSS 변수의 차이를 상세히 비교합니다. 각각의 특징, 사용 시기, 장단점, 그리고 함께 사용하는 방법을 예시와 함께 설명합니다.",
  keyword: "css 변수, scss 변수, css custom properties, css 변수 vs scss 변수, css --variable, scss $variable",
};

function CssVsScssVariablesPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          CSS와 SCSS 모두 <b>변수 기능을 제공</b>하지만, 각각의 특징과 사용
          방법이 다릅니다.
          <br />
          <b>CSS Custom Properties</b>(
          <code className="t_blue">--variable</code>)는 브라우저에서 직접
          실행되는 변수이고, <b>SCSS 변수</b>(
          <code className="t_blue">$variable</code>)는 컴파일 시점에 값으로
          치환됩니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 CSS 변수와 SCSS 변수의 차이를 상세히 비교하고, 각각의
          장단점, 사용 시기, 그리고 함께 사용하는 방법을 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">
          <i className="t_blue">SCSS 변수</i>와{" "}
          <i className="t_green">CSS 변수</i>의 기본 차이
        </h2>
        <p className="mt_l">
          CSS 변수와 SCSS 변수는 <b>근본적으로 다른 방식</b>으로 동작합니다.
          <br />
          어떤 상황에서 어떤 변수를 써야 할지 판단하려면, 두 변수가{" "}
          <b>어느 시점에, 어떤 규칙으로 값이 결정되는지</b>를 먼저 이해하는 것이
          중요합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">SCSS 변수 ($variable)</h3>
          <p className="mt_m">
            SCSS 변수는 <b>컴파일 시점에 값으로 치환</b>됩니다.
            <br />
            최종 CSS 파일에는 변수명이 아닌 실제 값이 들어갑니다.
          </p>
          <CodeBlock title="SCSS 변수 예시" language="css" className="mt_m">
            {`// SCSS
$primary-color: #0a58ca;

.button {
  background: $primary-color;
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`/* CSS */
.button {
  background: #0a58ca;
}`}
          </CodeBlock>
          <p className="mt_ms">
            SCSS 변수는 <b>컴파일 전에만 존재</b>하며, 브라우저는 변수 자체를 볼
            수 없습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_green">CSS 변수 (--variable)</h3>
          <p className="mt_m">
            CSS Custom Properties는 <b>브라우저에서 실행되는 변수</b>입니다.
            <br />
            최종 CSS 파일에도 변수명이 그대로 남아있고, 브라우저가 런타임에 값을
            해석합니다.
          </p>
          <CodeBlock title="CSS 변수 예시" language="css" className="mt_m">
            {`/* CSS */
:root {
  --primary-color: #0a58ca;
}

.button {
  background: var(--primary-color);
}`}
          </CodeBlock>
          <p className="mt_ms">
            CSS 변수는 <b>브라우저에서 직접 읽고 사용</b>할 수 있으며,
            JavaScript로도 동적으로 변경할 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">주요 차이점 비교</h2>
        <p className="mt_l">
          <b className="t_green">CSS 변수</b>와{" "}
          <b className="t_blue">SCSS 변수</b>의 <b>주요 차이점</b>을 체계적으로
          비교해봅니다.
          <br />
          처리 시점, 동적 변경, 스코프, 호환성처럼 자주 헷갈리는 항목들을 표로
          정리해 두면, <b>실무에서 변수 전략을 세울 때 빠르게 참고</b>할 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">처리 시점</h3>
          <p className="mt_m">
            가장 큰 차이는 <b>변수가 처리되는 시점</b>입니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">변수 타입</li>
              <li className="cell content">처리 시점</li>
              <li className="cell content">최종 CSS</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_blue weight-600">SCSS 변수</p>
                <p className="cell content" data-title="처리 시점">
                  컴파일 시점 (빌드 타임)
                </p>
                <p className="cell content" data-title="최종 CSS">
                  실제 값으로 치환됨
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen weight-600">CSS 변수</p>
                <p className="cell content" data-title="처리 시점">
                  런타임 (브라우저에서 실행)
                </p>
                <p className="cell content" data-title="최종 CSS">
                  변수명이 그대로 유지됨
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">동적 변경 가능 여부</h3>
          <p className="mt_m">
            CSS 변수는 <b>JavaScript로 동적으로 변경</b>할 수 있지만, SCSS
            변수는 컴파일 후에는 변경할 수 없습니다.
          </p>
          <CodeBlock
            title="CSS 변수 동적 변경 예시"
            language="css"
            className="mt_m"
          >
            {`/* CSS */
:root {
  --primary-color: #0a58ca;
}

.button {
  background: var(--primary-color);
}

// JavaScript
document.documentElement.style.setProperty('--primary-color', '#0066cc');
// 버튼 색상이 즉시 변경됨
`}
          </CodeBlock>
          <p className="mt_ms">
            CSS 변수는 <b>테마 전환, 다크 모드, 사용자 설정</b> 등 런타임에 값을
            변경해야 할 때 유용합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">스코프(Scope)</h3>
          <p className="mt_m">
            두 변수 모두 <b>스코프를 가지지만</b>, 동작 방식이 다릅니다.
          </p>
          <CodeBlock title="SCSS 변수 스코프" language="css" className="mt_m">
            {`// 전역 변수
$primary-color: #0a58ca;

.button {
  // 지역 변수 (이 블록 안에서만 사용 가능)
  $local-color: #084298;
  background: $local-color;
}

// $local-color는 여기서 사용 불가
`}
          </CodeBlock>
          <CodeBlock title="CSS 변수 스코프" language="css" className="mt_m">
            {`/* 전역 변수 */
:root {
  --primary-color: #0a58ca;
}

.button {
  /* 지역 변수 (이 요소와 자식 요소에서 사용 가능) */
  --local-color: #084298;
  background: var(--local-color);
}

/* 자식 요소에서도 --local-color 사용 가능 */
`}
          </CodeBlock>
          <p className="mt_ms">
            CSS 변수는 <b>상속되므로 자식 요소에서도 사용</b>할 수 있지만, SCSS
            변수는 선언된 범위에서만 사용 가능합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">브라우저 호환성</h3>
          <p className="mt_m">브라우저 호환성도 중요한 차이점입니다.</p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">변수 타입</li>
              <li className="cell content">호환성</li>
              <li className="cell content">설명</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_blue weight-600">SCSS 변수</p>
                <p className="cell content" data-title="호환성">
                  모든 브라우저
                </p>
                <p className="cell content" data-title="설명">
                  컴파일되어 일반 CSS가 되므로 모든 브라우저에서 동작
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen weight-600">CSS 변수</p>
                <p className="cell content" data-title="호환성">
                  IE11 미지원
                </p>
                <p className="cell content" data-title="설명">
                  모던 브라우저에서만 지원 (Chrome 49+, Firefox 31+, Safari
                  9.1+)
                </p>
              </li>
            </ul>
          </div>
          <p className="mt_ms">
            IE11을 지원해야 하는 프로젝트에서는 <b>SCSS 변수를 사용</b>하거나,
            CSS 변수와 함께 폴백 값을 제공해야 합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">각 변수의 장단점</h2>
        <p className="mt_l">
          <b className="t_green">CSS 변수</b>와{" "}
          <b className="t_blue">SCSS 변수</b> 각각의 <b>장점과 단점</b>을
          정리합니다.
          <br />두 변수 중 하나만 고집하기보다는,{" "}
          <b>어떤 역할은 SCSS 변수로, 어떤 역할은 CSS 변수로 맡길지</b>를 결정할
          때 기준점으로 삼을 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">SCSS 변수</i>의 장단점
          </h3>
          <p className="mt_m">SCSS 변수를 사용할 때의 장점과 단점입니다.</p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">구분</li>
              <li className="cell content">내용</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_blue">장점</p>
                <p className="cell content" data-title="내용">
                  • 모든 브라우저 호환
                  <br />
                  • 컴파일 시점에 최적화 가능
                  <br />
                  • SCSS 문법과 자연스럽게 통합 (연산, 함수 등)
                  <br />• 미사용 변수 자동 제거 가능
                </p>
              </li>
              <li>
                <p className="cell value t_blue">단점</p>
                <p className="cell content" data-title="내용">
                  • 런타임에 변경 불가
                  <br />
                  • JavaScript로 접근 불가
                  <br />• 컴파일 과정 필요
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_green">CSS 변수</i>의 장단점
          </h3>
          <p className="mt_m">CSS 변수를 사용할 때의 장점과 단점입니다.</p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">구분</li>
              <li className="cell content">내용</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">장점</p>
                <p className="cell content" data-title="내용">
                  • 런타임에 동적 변경 가능
                  <br />
                  • JavaScript로 접근 및 수정 가능
                  <br />
                  • 상속을 통한 스코프 관리
                  <br />• 컴파일 불필요 (순수 CSS)
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">단점</p>
                <p className="cell content" data-title="내용">
                  • IE11 미지원
                  <br />
                  • SCSS 연산/함수와 직접 사용 불가
                  <br />• 성능 오버헤드 (약간)
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">언제 어떤 변수를 사용할까?</h2>
        <p className="mt_l">
          상황에 따라 <b>어떤 변수를 사용하는 것이 적합한지</b> 가이드라인을
          제시합니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">SCSS 변수를 사용하는 경우</dt>
          <dd>
            <b>IE11 지원이 필요한 경우</b>: CSS 변수는 IE11에서 동작하지
            않으므로 SCSS 변수 사용
          </dd>
          <dd>
            <b>컴파일 시점에 최적화가 필요한 경우</b>: SCSS 연산이나 함수를
            사용해야 할 때
          </dd>
          <dd>
            <b>런타임 변경이 불필요한 경우</b>: 정적인 값만 필요한 경우
          </dd>
          <dd>
            <b>기존 SCSS 프로젝트</b>: 이미 SCSS 변수를 사용 중인 프로젝트
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">CSS 변수를 사용하는 경우</dt>
          <dd>
            <b>다크 모드나 테마 전환이 필요한 경우</b>: 런타임에 값을 변경해야
            할 때
          </dd>
          <dd>
            <b>JavaScript로 동적 제어가 필요한 경우</b>: 사용자 설정이나 실시간
            변경이 필요할 때
          </dd>
          <dd>
            <b>모던 브라우저만 지원하는 경우</b>: IE11 지원이 필요 없을 때
          </dd>
          <dd>
            <b>순수 CSS 프로젝트</b>: SCSS를 사용하지 않는 프로젝트
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">함께 사용하는 방법</h2>
        <p className="mt_l">
          SCSS 변수와 CSS 변수를 <b>함께 사용</b>할 수도 있습니다.
          <br />
          각각의 장점을 활용하는 방법을 알아봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">SCSS 변수로 CSS 변수 생성</h3>
          <p className="mt_m">
            SCSS 변수를 사용하여 <b>CSS 변수를 동적으로 생성</b>할 수 있습니다.
          </p>
          <CodeBlock
            title="SCSS 변수로 CSS 변수 생성"
            language="css"
            className="mt_m"
          >
            {`// SCSS 변수
$primary-color: #0a58ca;
$spacing-md: 16px;

:root {
  // SCSS 변수를 CSS 변수로 변환
  --primary-color: #{$primary-color};
  --spacing-md: #{$spacing-md};
}

.button {
  // CSS 변수 사용
  background: var(--primary-color);
  padding: var(--spacing-md);
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면{" "}
            <b>SCSS의 컴파일 시점 최적화와 CSS 변수의 런타임 유연성</b>을 모두
            활용할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">다크 모드 예시</h3>
          <p className="mt_m">
            SCSS 변수와 CSS 변수를 함께 사용하여 <b>다크 모드를 구현</b>하는
            예시입니다.
          </p>
          <CodeBlock
            title="다크 모드 구현 예시"
            language="css"
            className="mt_m"
          >
            {`// SCSS 변수로 기본 색상 정의
$color-primary: #0a58ca;
$color-bg-light: #ffffff;
$color-bg-dark: #212529;
$color-text-light: #212529;
$color-text-dark: #ffffff;

:root {
  // 라이트 모드 CSS 변수
  --primary-color: #{$color-primary};
  --bg-color: #{$color-bg-light};
  --text-color: #{$color-text-light};
}

[data-theme="dark"] {
  // 다크 모드 CSS 변수
  --primary-color: #{$color-primary};
  --bg-color: #{$color-bg-dark};
  --text-color: #{$color-text-dark};
}

.body {
  background: var(--bg-color);
  color: var(--text-color);
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 구성하면{" "}
            <b>
              JavaScript로 <code className="t_blue">data-theme</code> 속성만
              변경해도 전체 테마가 즉시 전환됩니다.
            </b>
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실무 사용 가이드</h2>
        <p className="mt_l">
          실무에서 <b>어떻게 변수를 선택하고 사용할지</b> 가이드라인을
          제시합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">하이브리드 접근법</h3>
          <p className="mt_m">
            실무에서는 <b>두 변수를 함께 사용</b>하는 하이브리드 접근법이
            효과적입니다.
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>SCSS 변수</b>: 컴파일 시점에 결정되는 값 (색상 팔레트, 간격
              시스템, 폰트 크기 등)
            </li>
            <li>
              <b>CSS 변수</b>: 런타임에 변경될 수 있는 값 (테마 색상, 사용자
              설정 등)
            </li>
          </ul>
          <CodeBlock
            title="하이브리드 접근법 예시"
            language="css"
            className="mt_m"
          >
            {`// SCSS 변수: 정적인 디자인 토큰
$color-primary: #0a58ca;
$color-bg-light: #ffffff;
$spacing-sm: 8px;
$spacing-md: 16px;
$font-size-base: 16px;

:root {
  // CSS 변수: 동적으로 변경 가능한 값
  --theme-primary: #{$color-primary};
  --theme-bg: #{$color-bg-light};
}

.button {
  // SCSS 변수 사용 (정적 값)
  padding: $spacing-sm $spacing-md;
  font-size: $font-size-base;

  // CSS 변수 사용 (동적 값)
  background: var(--theme-primary);
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">마이그레이션 전략</h3>
          <p className="mt_m">
            기존 SCSS 변수 프로젝트에서 CSS 변수로 전환하는 전략입니다.
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>점진적 전환</b>: 새로운 기능부터 CSS 변수 사용, 기존 코드는
              유지
            </li>
            <li>
              <b>하이브리드 유지</b>: 두 변수를 함께 사용하여 각각의 장점 활용
            </li>
            <li>
              <b>폴백 제공</b>: IE11 지원이 필요한 경우 CSS 변수와 함께 기본값
              제공
            </li>
          </ul>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          CSS 변수와 SCSS 변수의 차이에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>처리 시점</b>: SCSS 변수는 컴파일 시점, CSS 변수는 런타임
          </li>
          <li>
            <b>동적 변경</b>: CSS 변수는 JavaScript로 런타임 변경 가능, SCSS
            변수는 불가
          </li>
          <li>
            <b>브라우저 호환</b>: SCSS 변수는 모든 브라우저, CSS 변수는 IE11
            미지원
          </li>
          <li>
            <b>사용 시기</b>: SCSS 변수는 정적 값, CSS 변수는 동적 변경이 필요한
            경우
          </li>
          <li>
            <b>함께 사용</b>: 하이브리드 접근법으로 각각의 장점 활용 가능
          </li>
        </ul>
        <p className="mt_m">
          다음 섹션에서는 <b>SCSS의 연산과 함수</b>에 대해 자세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img
          src={IMG.SCSS + "/04_scss_05.png"}
          alt="CSS 변수와 SCSS 변수 비교"
        />
        <figcaption>CSS 변수와 SCSS 변수 비교</figcaption>
      </figure>
    </>
  );
}

export default CssVsScssVariablesPage;
