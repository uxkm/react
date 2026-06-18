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
  title: "SCSS란 무엇인가",
  description:
    "SCSS(Sassy CSS)는 Sass의 한 문법으로, 익숙한 CSS 형식을 유지하면서 변수, 중첩, 믹스인 같은 확장 기능을 제공하는 CSS 전처리기 문법입니다. 이 페이지에서는 SCSS가 무엇인지, Sass와의 관계, 그리고 브라우저에서 어떻게 동작하는지 기초부터 살펴봅니다.",
  keyword: "scss란, sass 관계, scss 개념, css 전처리기",
};

function ScssIntroPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>SCSS(Sassy CSS)</b>는 CSS를 더 편하게 작성하기 위한{" "}
          <b>CSS 전처리기(Preprocessor) 문법</b>입니다.
          <br />
          브라우저가 직접 읽는 언어는 아니며, 먼저{" "}
          <b>SCSS → 순수 CSS로 컴파일</b>한 뒤 그 CSS를 브라우저가 해석합니다.
        </p>
        <p className="mt_s">
          SCSS는 <b>CSS 문법과 거의 같은 형식</b>을 사용하면서도 변수, 중첩,
          믹스인, 파셜 등 <b>크고 복잡한 스타일을 관리하기 좋은 기능</b>을
          제공합니다.
          <br />이 페이지에서는 SCSS의 기본 개념과 Sass와의 관계, 그리고 코드가
          어떻게 CSS로 변환되는지를 기초부터 살펴봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">SCSS 문법의 핵심 특징</h2>
        <p className="mt_l">
          SCSS 문법의 핵심 특징에는{" "}
          <b>변수 · 중첩 · 믹스인 · 파셜(Partials) · 모듈 시스템</b> 등이
          있습니다. 이 섹션에서는 SCSS를 이해할 때 꼭 알아두면 좋은 이{" "}
          <b>핵심 문법 기능</b>들을 간단한 예제와 함께 먼저 정리해 보겠습니다.
          <br />
          <code>if</code>, <code>for</code>, <code>each</code> 같은 난이도가
          조금 더 높은 제어문 문법은 뒤에서 따로 모아 보다 자세하게 살펴봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">변수(Variables)</h3>
          <p className="mt_m">
            색상, 간격, 폰트 크기처럼 여러 곳에서 반복해서 쓰이는 값을{" "}
            <b>이름이 있는 변수</b>로 저장해 두고 필요할 때마다 불러 쓸 수
            있습니다.
            <br />
            예를 들어 브랜드 메인 색상을 변수 하나로 관리하면, 디자인이 바뀌어도{" "}
            <b>코드 한 곳만 수정해서 전체 스타일을 함께 바꿀 수 있어</b>{" "}
            유지보수가 훨씬 편해집니다.
          </p>
          <CodeBlock title="변수 예시" language="css" className="mt_m">
            {`$primary-color: #0a58ca;

body {
  color: $primary-color;
}
.button-primary {
  background: $primary-color;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">중첩(Nesting)</h3>
          <p className="mt_m">
            HTML 구조와 비슷하게 선택자를 <b>안쪽으로 들여쓰기</b>해서 작성하면,
            어떤 요소 안에 어떤 스타일이 들어가는지 한눈에 보기 쉽습니다.
            <br />
            특정 컴포넌트(예: <code className="t_blue">.card</code>) 안에서만
            사용하는 스타일을 블록 하나로 모아 둘 수 있어서,{" "}
            <b>다른 영역에 스타일 영향이 퍼지지 않도록 안전하게 관리</b>할 수
            있습니다.
          </p>
          <CodeBlock title="중첩 예시" language="css" className="mt_m">
            {`.card {
  padding: 16px;

  h3 { font-size: 18px; }
  p  { margin-top: 8px; }
  a  { color: #0a58ca; }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">믹스인(Mixins)</h3>
          <p className="mt_m">
            자주 쓰는 스타일 묶음을 <b>함수처럼 정의</b>해 두고, 필요한 곳에서{" "}
            <code className="t_blue">@include</code>로 불러와 여러 요소에 쉽게
            적용할 수 있습니다.
            <br />
            버튼, 카드, 레이아웃처럼{" "}
            <b>
              여러 컴포넌트에서 반복되는 스타일 패턴을 하나의 믹스인으로 만들어
              두면
            </b>
            , 새로운 요소를 추가할 때도 코드 몇 줄만으로 동일한 규칙을 적용할 수
            있습니다.
          </p>
          <CodeBlock title="믹스인 예시" language="css" className="mt_m">
            {`@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-group {
  @include flex-center;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파셜(Partials)과 모듈 시스템</h3>
          <p className="mt_m">
            공통 스타일을 <b>작은 파일(파셜)</b>로 쪼개 두고,{" "}
            <code className="t_blue">@use</code>,{" "}
            <code className="t_blue">@forward</code>
            로 필요한 곳에서만 불러오면 큰 프로젝트도 구조적으로 관리할 수
            있습니다.
            <br />
            색상, 폰트, 버튼, 카드처럼 <b>역할별로 파일을 나누어 두면</b>{" "}
            “어디를 고쳐야 할지”를 빨리 찾을 수 있고, 여러 명이 함께 작업할 때도
            충돌을 줄일 수 있습니다.
          </p>

          <div className="mt_ml indent">
            <h4 className="ml_mn">_colors.scss</h4>
            <CodeBlock
              title="파셜과 @use 예시(_colors.scss)"
              language="css"
              className="mt_ms"
            >
              {`$primary: #0a58ca;`}
            </CodeBlock>
          </div>

          <div className="mt_ml indent">
            <h4 className="ml_mn">main.scss</h4>
            <CodeBlock
              title="파셜과 @use 예시(main.scss)"
              language="css"
              className="mt_ms"
            >
              {`@use "colors"; /* _colors.scss 파일에서 정의한 변수·설정을 불러옵니다. */

.button {
	background: colors.$primary;
}`}
            </CodeBlock>
          </div>
        </article>

        <p className="mt_l">
          이러한 기능 덕분에 SCSS는 <b>코드를 더 짧고 읽기 좋게 만들고</b>,
          <br />
          <b>큰 프로젝트에서도 스타일을 안전하게 유지보수</b>할 수 있도록
          도와줍니다.
          <br />
          <b className="t_blue">[1. SCSS 시작]</b>에서는 SCSS의 기초를 확실히
          익힐 수 있도록,
          <br />
          <b>변수 · 중첩 · 믹스인 · 파셜(Partials) · 모듈 시스템</b>을 여러
          섹션에서 반복해 설명하며 자연스럽게 익히도록 돕습니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">SCSS와 Sass의 관계</h2>
        <p className="mt_l">
          <b>Sass</b>는 CSS를 더 효율적으로 작성하기 위해 만들어진{" "}
          <b>스타일시트 언어</b>
          이고,
          <br />
          <b>SCSS</b>는 Sass에서 제공하는 <b>두 가지 문법 형식 중 하나</b>
          입니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Sass(인덴트 문법)</h3>
          <p className="mt_m">
            중괄호(<code>{"{}"}</code>)와 세미콜론(<code>;</code>) 대신{" "}
            <b>들여쓰기(인덴트)</b>로 블록을 구분하는 문법으로, 파일 확장자는{" "}
            <code className="t_blue">.sass</code>입니다.
            <br />
            <span className="underline">
              다만 들여쓰기 공백 수에 매우 민감해{" "}
              <b>탭·스페이스가 섞이면 쉽게 에러가 날 수 있고</b>, 팀에서 코드
              스타일을 맞추지 않으면 관리가 어려운 편입니다.
            </span>
          </p>
          <CodeBlock title="Sass(인덴트) 예시" language="css" className="mt_m">
            {`// example.sass
.button
	padding: 8px 16px
	background: #0a58ca
	color: #fff`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">SCSS(Sassy CSS)</h3>
          <p className="mt_m">
            우리가 익숙한 <b>일반 CSS 문법에 변수, 중첩, 믹스인</b> 등을 추가한
            문법으로, 파일 확장자는 <code className="t_blue">.scss</code>입니다.
            <br />
            <mark>
              기존 CSS 코드를 거의 그대로 가져와서, 필요한 부분에만 SCSS 문법을
              추가해 사용할 수 있습니다.
            </mark>
          </p>
          <CodeBlock title="SCSS 예시" language="css" className="mt_m">
            {`/* example.scss */
.button {
	padding: 8px 16px;
	background: #0a58ca;
	color: #fff;
}`}
          </CodeBlock>
        </article>

        <p className="mt_l">
          정리하면, <b>Sass는 도구 이름</b>이고,{" "}
          <b>SCSS는 Sass 안에서 사용하는 문법 형식</b>
          이라고 이해하면 됩니다.
          <br />
          실무에서는 <b>CSS와 가장 비슷한 형식인 SCSS 문법</b>을 사용하는 경우가
          훨씬 많습니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">SCSS는 어떻게 시작하나요?</h2>
        <p className="mt_l">
          SCSS는 <b>브라우저가 바로 읽을 수 있는 언어가 아니라</b>, 먼저{" "}
          <b>SCSS → CSS로 변환</b>한 뒤 사용해야 합니다.
          <br />
          즉, <code className="t_blue">.scss</code> 파일을 빌드 도구로 컴파일해{" "}
          <code className="t_blue">.css</code> 파일을 만들고, 그 결과물을
          HTML에서 <code>&lt;link&gt;</code> 태그로 연결해 화면에 적용하게
          됩니다.
        </p>
        <ol className="ol_lst info_lst gap-column-important-m mt_ml">
          <li className="t_black_before weight-600-before">
            <strong>파일 확장자</strong>
            <p className="mt_s">
              SCSS 파일은 보통 <code className="t_blue">style.scss</code>처럼{" "}
              <code>.scss</code> 확장자를 사용합니다. (기존 CSS 파일은{" "}
              <code>.css</code>입니다.)
            </p>
          </li>
          <li className="t_black_before weight-600-before">
            <strong>컴파일 결과</strong>
            <p className="mt_s">
              <code className="t_blue">style.scss</code>를 컴파일하면{" "}
              <code className="t_blue">style.css</code>가 생성되고, HTML에서는
              이전과 마찬가지로{" "}
              <code>
                &lt;link href=&quot;style.css&quot; rel=&quot;stylesheet&quot;
                /&gt;
              </code>{" "}
              형태로 연결합니다.
            </p>
          </li>
          <li className="t_black_before weight-600-before">
            <strong>어디에서 컴파일하나요?</strong>
            <p className="mt_s">
              개발 환경에 따라 여러 가지 방법이 있습니다. 가장 많이 쓰이는
              방법은 <b>Gulp나 Webpack 같은 빌드 도구</b>를 이용해 저장할 때마다
              자동으로 <code className="t_blue">.scss</code>를{" "}
              <code className="t_blue">.css</code>
              로 바꾸는 방식입니다.
              <br />
              VS Code 확장 프로그램(Sass 플러그인 등)을 쓰면 에디터 안에서 바로
              컴파일할 수도 있고, <code className="t_blue">sass</code>{" "}
              명령어(CLI)를 설치해 터미널에서 직접 변환할 수도 있습니다.
              <br />
              <mark>
                이후 Gulp 커리큘럼에서 실제로 SCSS를 컴파일하는 작업을 단계별로
                함께 진행해 보겠습니다.
              </mark>
            </p>
            <p className="mt_ms mb_sm button_flex">
              <a
                href="/build-system/gulp/01-gulp_start/01-intro"
                className="box_link external"
                target="_blank"
                rel="noreferrer"
              >
                UXKM Gulp 커리큘럼 바로가기
              </a>
              <a
                href="/build-system/gulp/06-assets/01-scss_compilation"
                className="box_link external"
                target="_blank"
                rel="noreferrer"
              >
                UXKM Gulp &gt; SCSS 컴파일 바로가기
              </a>
            </p>
          </li>
          <li className="t_black_before weight-600-before">
            <strong>기존 CSS 재사용</strong>
            <p className="mt_s">
              이미 가지고 있는 CSS 코드도 <code className="t_blue">.scss</code>{" "}
              파일로 옮겨 두고, 필요한 부분만 조금씩 변수·믹스인·중첩으로
              바꾸면서 점진적으로 SCSS에 익숙해지면 됩니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">간단한 SCSS → CSS 변환 예시</h2>
        <p className="mt_l">
          같은 스타일을 여러 번 반복해서 쓰는 대신, SCSS에서는 <b>변수</b>를
          만들어 재사용할 수 있습니다.
        </p>
        <CodeBlock title="SCSS 코드" language="css" className="mt_m">
          {`$main-color: #0d6efd;
$base-padding: 8px;

.button-primary {
	padding: $base-padding * 2 $base-padding * 3;
	background: $main-color;
	color: #fff;
}`}
        </CodeBlock>
        <CodeBlock title="컴파일된 CSS 코드" language="css" className="mt_m">
          {`.button-primary {
	padding: 16px 24px;
	background: #0d6efd;
	color: #fff;
}`}
        </CodeBlock>
        <p className="mt_m">
          위 예시처럼 SCSS에서는 <b className="t_blue">$main-color</b>,{" "}
          <b className="t_blue">$base-padding</b> 같은 변수를 사용하지만,
          <br />
          컴파일된 CSS에서는 <b>실제 값만 남고 변수는 사라진 형태</b>로
          브라우저에 전달됩니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/01_scss_01.png"} alt="SCSS란?" />
        <figcaption>SCSS란?</figcaption>
      </figure>
      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/01_scss_01_roadmap.png"} alt="SCSS 로드맵" />
        <figcaption>SCSS 로드맵</figcaption>
      </figure>
    </>
  );
}

export default ScssIntroPage;
