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
  title: "SCSS 컴파일 개념",
  description:
    "SCSS가 CSS로 변환되는 컴파일 과정을 상세히 알아봅니다. 컴파일러의 역할, 컴파일 방법(Gulp, Webpack, CLI 등), 컴파일 옵션, 그리고 실제 변환 예시를 단계별로 설명합니다.",
  keyword: "scss 컴파일, scss css 변환, scss 빌드, sass 컴파일러, scss 컴파일 방법",
};

function CompilationPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          SCSS는 브라우저가 직접 읽을 수 없는 언어이므로,{" "}
          <b>반드시 CSS로 컴파일(변환)</b>해야 합니다.
          <br />
          컴파일은 SCSS 문법을 해석하여 표준 CSS 코드로 변환하는 과정이며,{" "}
          <b>빌드 도구나 컴파일러를 통해 자동화</b>할 수 있습니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 SCSS 컴파일의 개념, 컴파일 방법(Gulp, Webpack, CLI
          등), 컴파일 옵션, 그리고 실제 변환 과정을 예시와 함께 상세히
          살펴봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">SCSS 컴파일이란?</h2>
        <p className="mt_l">
          컴파일(Compile)은{" "}
          <b>SCSS 코드를 브라우저가 이해할 수 있는 표준 CSS 코드로 변환</b>하는
          과정입니다.
          <br />
          SCSS는 전처리기 언어이므로, <b>반드시 컴파일 단계를 거쳐야</b> 실제 웹
          페이지에 적용할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">컴파일의 필요성</h3>
          <p className="mt_m">
            브라우저는 <b>SCSS 문법을 직접 해석하지 못합니다</b>. 변수, 중첩,
            믹스인 같은 SCSS 기능은 브라우저가 이해할 수 없기 때문입니다.
            <br />
            따라서 SCSS 파일을 작성한 후에는 <b>반드시 표준 CSS로 변환</b>해야
            브라우저가 스타일을 적용할 수 있습니다.
          </p>
          <CodeBlock title="SCSS 원본 코드" language="css" className="mt_m">
            {`// style.scss
$primary-color: #0a58ca;

.button {
  background: $primary-color;
  &:hover {
    background: darken($primary-color, 10%);
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS 결과" language="css" className="mt_m">
            {`/* style.css */
.button {
  background: #0a58ca;
}
.button:hover {
  background: #084298;
}`}
          </CodeBlock>
          <p className="mt_m">
            위 예시처럼 SCSS의 <b>변수와 중첩 문법이 표준 CSS로 변환</b>되어
            브라우저가 이해할 수 있는 형태가 됩니다.
            <br />
            컴파일러는 변수를 실제 값으로 치환하고, 중첩된 선택자를 평탄화하며,
            믹스인을 실제 CSS 코드로 확장합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">컴파일러의 역할</h3>
          <p className="mt_m">SCSS 컴파일러는 다음과 같은 작업을 수행합니다:</p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>변수 치환</b>: <code className="t_blue">$variable</code>을 실제
              값으로 변환
            </li>
            <li>
              <b>중첩 해제</b>: 중첩된 선택자를 평탄한 CSS 선택자로 변환
            </li>
            <li>
              <b>믹스인 확장</b>: <code className="t_blue">@mixin</code>을 실제
              CSS 코드로 확장
            </li>
            <li>
              <b>파셜 병합</b>: <code className="t_blue">@use</code>로 불러온
              파일들을 하나로 합침
            </li>
            <li>
              <b>연산 처리</b>: 수치 연산, 색상 함수 등을 계산하여 결과값으로
              변환
            </li>
          </ul>
          <p className="mt_ms">
            이러한 변환 과정을 통해{" "}
            <b>개발자가 작성한 SCSS 코드가 최종적으로 표준 CSS가 됩니다</b>.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">SCSS 컴파일 방법</h2>
        <p className="mt_l">
          SCSS를 컴파일하는 방법은 여러 가지가 있습니다.{" "}
          <b>프로젝트 환경과 요구사항에 맞는 방법을 선택</b>하면 됩니다.
          <br />
          간단한 학습용 프로젝트에서는 에디터 확장만으로도 충분하지만,
          실무에서는 보통 빌드 도구나 CLI를 함께 사용해{" "}
          <b>자동화된 컴파일 흐름</b>을 구성합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">빌드 도구를 이용한 컴파일</h3>
          <p className="mt_m">
            <b>Gulp, Webpack, Vite</b> 같은 빌드 도구를 사용하면{" "}
            <b>파일 저장 시 자동으로 컴파일</b>되도록 설정할 수 있습니다.
            <br />
            대규모 프로젝트나 팀 프로젝트에서는 빌드 도구를 사용하는 것이
            일반적입니다.
          </p>
          <div className="mt_ml indent">
            <h4 className="ml_mn">Gulp를 이용한 컴파일</h4>
            <p className="mt_ms">
              Gulp는 <code className="t_blue">gulp-sass</code> 플러그인을 통해
              SCSS를 컴파일합니다.
            </p>
            <CodeBlock
              title="gulpfile.js 예시"
              language="javascript"
              className="mt_ms"
            >
              {`const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
});`}
            </CodeBlock>
            <p className="mt_ms">
              이 설정으로 <code className="t_blue">gulp sass</code> 명령을
              실행하면 <i className="folder">scss</i> 폴더의 모든 SCSS 파일이{" "}
              <i className="folder">css</i> 폴더로 컴파일됩니다.
              <br />
              <code className="t_blue">gulp watch</code>를 실행하면 파일 변경 시
              자동으로 컴파일됩니다.
            </p>
            <p className="mt_ms mb_s button_flex">
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
          </div>
          <div className="mt_ml indent">
            <h4 className="ml_mn">Webpack을 이용한 컴파일</h4>
            <p className="mt_ms">
              Webpack은 <code className="t_blue">sass-loader</code>를 통해
              SCSS를 컴파일합니다.
            </p>
            <CodeBlock
              title="webpack.config.js 예시"
              language="javascript"
              className="mt_ms"
            >
              {`module.exports = {
  module: {
    rules: [
      {
        test: /\\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};`}
            </CodeBlock>
            <p className="mt_ms">
              Webpack은 <b>모듈 번들러</b>이므로, SCSS 파일을 JavaScript
              모듈처럼 <code className="t_blue">import</code>하여 사용할 수
              있습니다.
            </p>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">VS Code 확장 프로그램</h3>
          <p className="mt_m">
            VS Code에서 <b>&quot;Live Sass Compiler&quot;</b> 같은 확장
            프로그램을 설치하면, <b>에디터에서 바로 컴파일</b>할 수 있습니다.
            <br />
            작은 프로젝트나 학습 목적에는 이 방법이 간편합니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">확장 프로그램</li>
              <li className="cell content">설명</li>
              <li className="cell content">설치 방법</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">Live Sass Compiler</p>
                <p className="cell content" data-title="설명">
                  파일 저장 시 자동으로 SCSS를 CSS로 컴파일하고, Live Reload
                  기능 제공
                </p>
                <p className="cell content" data-title="설치 방법">
                  VS Code 확장 프로그램에서 &quot;Live Sass Compiler&quot; 검색
                  후 설치
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">Sass</p>
                <p className="cell content" data-title="설명">
                  SCSS 문법 하이라이팅과 자동 완성 기능 제공
                </p>
                <p className="cell content" data-title="설치 방법">
                  VS Code 확장 프로그램에서 &quot;Sass&quot; 검색 후 설치
                </p>
              </li>
            </ul>
          </div>
          <p className="mt_ms">
            VS Code 확장 프로그램은 <b>별도의 설정 없이 바로 사용</b>할 수 있어
            초보자에게 적합합니다.
            <br />
            다만 프로젝트 규모가 커지면 빌드 도구를 사용하는 것이 더
            효율적입니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Sass CLI (명령줄 도구)</h3>
          <p className="mt_m">
            <b>Sass 공식 CLI 도구</b>를 사용하면 터미널에서 직접 컴파일할 수
            있습니다.
            <br />
            Node.js가 설치되어 있다면 <code className="t_blue">npm</code>을 통해
            설치할 수 있습니다.
          </p>
          <CodeBlock
            title="Sass CLI 설치 및 사용"
            language="bash"
            className="mt_m"
          >
            {`// Sass CLI 설치
npm install -g sass

// 단일 파일 컴파일
sass input.scss output.css

// 폴더 전체 컴파일 (변경 감지)
sass --watch scss:css`}
          </CodeBlock>
          <p className="mt_ms">
            CLI 도구는 <b>빌드 도구 없이 간단하게 컴파일</b>하고 싶을 때
            유용합니다.
            <br />
            <code className="t_blue">--watch</code> 옵션을 사용하면 파일 변경 시
            자동으로 재컴파일됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">온라인 컴파일러</h3>
          <p className="mt_m">
            웹 브라우저에서 바로 사용할 수 있는 <b>온라인 SCSS 컴파일러</b>도
            있습니다.
            <br />
            <mark>간단한 테스트나 학습 목적으로 사용하기 좋습니다.</mark>
          </p>
          <ul className="dot_lst mt_ms indent_small">
            <li>
              <b>CodePen</b>: SCSS를 지원하는 온라인 코드 에디터
              <p className="mt_s">
                <a
                  href="https://codepen.io/"
                  className="box_link external"
                  target="_blank"
                  rel="noreferrer"
                >
                  CodePen 바로가기
                </a>
              </p>
            </li>
            <li className="mt_ms">
              <b>JSFiddle</b>: SCSS를 지원하는 온라인 코드 에디터
              <p className="mt_s">
                <a
                  href="https://jsfiddle.net/"
                  className="box_link external"
                  target="_blank"
                  rel="noreferrer"
                >
                  JSFiddle 바로가기
                </a>
              </p>
            </li>
          </ul>
          <p className="mt_m">
            <mark>
              온라인 컴파일러는 <b>설치나 설정 없이 바로 사용</b>할 수 있지만,
              대규모 프로젝트에는 적합하지 않습니다.
            </mark>
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">컴파일 옵션</h2>
        <p className="mt_l">
          SCSS 컴파일 시 <b>다양한 옵션을 설정</b>하여 출력 결과를 제어할 수
          있습니다.
          <br />
          출력 스타일, 소스맵, 인클루드 경로 같은 옵션을 이해해 두면, 개발
          환경과 배포 환경에서 <b>각기 다른 형태의 CSS</b>를 손쉽게 만들어낼 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">출력 스타일 (Output Style)</h3>
          <p className="mt_m">
            컴파일된 CSS의 <b>포맷 형식을 선택</b>할 수 있습니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">스타일</li>
              <li className="cell content">설명</li>
              <li className="cell content">용도</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">expanded</code>
                </p>
                <p className="cell content" data-title="설명">
                  읽기 쉬운 형식, 들여쓰기와 줄바꿈 포함
                </p>
                <p className="cell content" data-title="용도">
                  개발 환경, 디버깅
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">compressed</code>
                </p>
                <p className="cell content" data-title="설명">
                  모든 공백 제거, 한 줄로 압축
                </p>
                <p className="cell content" data-title="용도">
                  프로덕션 환경, 파일 크기 최소화
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">compact</code>
                </p>
                <p className="cell content" data-title="설명">
                  각 규칙을 한 줄로 표시
                </p>
                <p className="cell content" data-title="용도">
                  중간 형식
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">nested</code>
                </p>
                <p className="cell content" data-title="설명">
                  중첩 구조를 유지한 형식
                </p>
                <p className="cell content" data-title="용도">
                  중첩 구조 확인
                </p>
              </li>
            </ul>
          </div>
          <CodeBlock
            title="Gulp에서 출력 스타일 설정"
            language="javascript"
            className="mt_ms"
          >
            {`sass({
  outputStyle: 'expanded'  // 또는 'compressed', 'compact', 'nested'
})`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">소스맵 (Source Map)</h3>
          <p className="mt_m">
            소스맵은 <b>컴파일된 CSS와 원본 SCSS 파일을 연결</b>해주는
            파일입니다.
            <br />
            브라우저 개발자 도구에서 <b>원본 SCSS 파일의 위치를 확인</b>할 수
            있게 해줍니다.
          </p>
          <CodeBlock
            title="소스맵 생성 예시"
            language="javascript"
            className="mt_m"
          >
            {`sass({
  sourceMap: true,
  sourceMapContents: true
})`}
          </CodeBlock>
          <p className="mt_ms">
            소스맵을 사용하면 <b>디버깅이 훨씬 쉬워집니다</b>.
            <br />
            브라우저 개발자 도구에서 스타일을 확인할 때, 컴파일된 CSS가 아닌
            원본 SCSS 파일의 줄 번호를 볼 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">인클루드 경로 (Include Paths)</h3>
          <p className="mt_m">
            <code className="t_blue">@use</code>나{" "}
            <code className="t_blue">@import</code>로 파일을 불러올 때{" "}
            <b>검색할 경로를 지정</b>할 수 있습니다.
          </p>
          <CodeBlock
            title="인클루드 경로 설정"
            language="javascript"
            className="mt_m"
          >
            {`sass({
  includePaths: [
    'node_modules',
    'scss'
  ]
})`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 설정하면{" "}
            <code className="t_blue">@use &quot;variables&quot;</code>
            처럼 상대 경로 없이도 파일을 불러올 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">컴파일 과정 상세 예시</h2>
        <p className="mt_l">
          실제 SCSS 코드가 어떻게 CSS로 변환되는지 <b>단계별로 살펴봅니다</b>.
          <br />
          변수 치환, 중첩 해제, 믹스인 확장, 파셜 병합이 각각 어떤 형태의 CSS로
          바뀌는지 눈으로 확인해 보면, 추상적인 개념이 아닌{" "}
          <b>&quot;코드 수준에서 일어나는 변화&quot;</b>를 직관적으로 이해할 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">변수 치환</h3>
          <p className="mt_m">
            SCSS 변수는 컴파일 시 <b>실제 값으로 치환</b>됩니다.
          </p>
          <div className="mt_ml indent">
            <h4 className="ml_mn">_variables.scss</h4>
            <CodeBlock title="변수 정의" language="css" className="mt_ms">
              {`$primary-color: #0a58ca;
$font-size-base: 16px;
$spacing: 8px;`}
            </CodeBlock>
          </div>
          <div className="mt_ml indent">
            <h4 className="ml_mn">style.scss</h4>
            <CodeBlock title="변수 사용" language="css" className="mt_ms">
              {`@use "variables";

.button {
  background: variables.$primary-color;
  font-size: variables.$font-size-base;
  padding: variables.$spacing;
}`}
            </CodeBlock>
          </div>
          <div className="mt_ml indent">
            <h4 className="ml_mn">컴파일된 style.css</h4>
            <CodeBlock title="변환 결과" language="css" className="mt_ms">
              {`.button {
  background: #0a58ca;
  font-size: 16px;
  padding: 8px;
}`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">중첩 해제</h3>
          <p className="mt_m">
            중첩된 선택자는 <b>평탄한 CSS 선택자로 변환</b>됩니다.
          </p>
          <CodeBlock title="SCSS (중첩)" language="css" className="mt_m">
            {`.card {
  padding: 16px;

  .card__title {
    font-size: 18px;
  }

  .card__body {
    margin-top: 8px;
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.card {
  padding: 16px;
}
.card .card__title {
  font-size: 18px;
}
.card .card__body {
  margin-top: 8px;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">믹스인 확장</h3>
          <p className="mt_m">
            믹스인은 컴파일 시 <b>실제 CSS 코드로 확장</b>됩니다.
          </p>
          <div className="mt_ml indent">
            <h4 className="ml_mn">_mixins.scss</h4>
            <CodeBlock title="믹스인 정의" language="css" className="mt_ms">
              {`@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}`}
            </CodeBlock>
          </div>
          <div className="mt_ml indent">
            <h4 className="ml_mn">style.scss</h4>
            <CodeBlock title="믹스인 사용" language="css" className="mt_ms">
              {`@use "mixins";

.button-group {
  @include mixins.flex-center;
}`}
            </CodeBlock>
          </div>
          <div className="mt_ml indent">
            <h4 className="ml_mn">컴파일된 style.css</h4>
            <CodeBlock title="확장 결과" language="css" className="mt_ms">
              {`.button-group {
  display: flex;
  align-items: center;
  justify-content: center;
}`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파셜 병합</h3>
          <p className="mt_m">
            여러 파셜 파일을 불러오면 <b>하나의 CSS 파일로 병합</b>됩니다.
          </p>
          <CodeBlock title="main.scss" language="css" className="mt_m">
            {`@use "variables";
@use "mixins";
@use "components/buttons";
@use "components/cards";
@use "layout/header";`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 불러온 모든 파일의 내용이{" "}
            <b>
              하나의 <code className="t_blue">main.css</code> 파일로 합쳐집니다
            </b>
            .
            <br />
            HTML에서는 이 하나의 CSS 파일만 연결하면 됩니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">컴파일 시 주의사항</h2>
        <p className="mt_l">
          SCSS 컴파일은 대부분 자동으로 진행되지만,{" "}
          <b>몇 가지 주의해야 할 사항</b>이 있습니다.
          <br />
          컴파일 과정에서 발생할 수 있는 문제를 미리 알고 대비하면,{" "}
          <b>개발 시간을 절약하고 실수를 줄일 수 있습니다</b>.
        </p>
        <p className="mt_s">
          특히 초보자라면 컴파일이 실패했을 때{" "}
          <b>어디서 문제가 발생했는지 파악하는 것이 중요</b>합니다.
          <br />
          에러 메시지를 제대로 읽고 해석할 수 있으면, 문법 오류나 설정 문제를
          빠르게 해결할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">컴파일 전 파일 저장 확인</h3>
          <p className="mt_m">
            SCSS 파일을 수정한 후에는 <b>반드시 저장</b>해야 컴파일이
            실행됩니다.
            <br />
            자동 컴파일이 설정되어 있어도 파일이 저장되지 않으면 변경사항이
            반영되지 않습니다.
          </p>
          <p className="mt_s">
            에디터의 <b>자동 저장 기능</b>을 활성화하면 파일 수정 시 자동으로
            저장되어 컴파일이 즉시 실행됩니다.
            <br />
            <b>VS Code</b>: <code className="t_blue">File</code> →{" "}
            <code className="t_blue">Auto Save</code>
            <br />
            <b>WebStorm</b>: <code className="t_blue">File</code> →{" "}
            <code className="t_blue">Settings</code> →{" "}
            <code className="t_blue">Appearance &amp; Behavior</code> →{" "}
            <code className="t_blue">System Settings</code> →{" "}
            <code className="t_blue">Save files automatically</code>
          </p>
          <p className="mt_s">
            만약 컴파일이 실행되지 않는다면,{" "}
            <b>파일이 제대로 저장되었는지 확인</b>하고 필요시 수동으로 저장(
            <code className="t_blue">Ctrl+S</code> 또는{" "}
            <code className="t_blue">Cmd+S</code>
            )을 해보세요.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">컴파일 에러 확인 및 해결</h3>
          <p className="mt_m">
            SCSS 문법 오류가 있으면 컴파일이 실패합니다.
            <br />
            <b>터미널이나 에디터의 에러 메시지를 정확히 읽고 해석</b>하면 문제를
            빠르게 해결할 수 있습니다.
          </p>

          <div className="mt_l indent">
            <h4 className="ml_mn">일반적인 컴파일 에러 유형</h4>
            <p className="mt_ms">
              다음은 자주 발생하는 컴파일 에러와 해결 방법입니다.
            </p>

            <ol className="ol_lst info_lst gap-column-important-ml mt_m">
              <li className="weight-700-before t_black_before">
                <strong>에러: 변수명 오타</strong>
                <CodeBlock
                  title="변수명 오타 에러"
                  language="css"
                  className="mt_ms"
                >
                  {`$primary-color: #0a58ca;
.button {
  background: $primary-colr;  // 오타: $primary-color가 아님
}`}
                </CodeBlock>
                <p className="mt_ms">
                  <b className="t_red">에러 메시지</b>:{" "}
                  <code className="t_red">
                    Undefined variable: &quot;$primary-colr&quot;
                  </code>
                  <br />
                  <b className="t_blue">해결 방법</b>: 변수명을 정확히 확인하고
                  오타를 수정합니다. 에디터의 자동 완성 기능을 활용하면 오타를
                  줄일 수 있습니다.
                </p>
              </li>

              <li className="weight-700-before t_black_before">
                <strong>에러: 중괄호 누락</strong>
                <CodeBlock
                  title="중괄호 누락 에러"
                  language="css"
                  className="mt_ms"
                >
                  {`.button {
  background: #0a58ca;
  // 닫는 중괄호 누락`}
                </CodeBlock>
                <p className="mt_ms">
                  <b className="t_red">에러 메시지</b>:{" "}
                  <code className="t_red">{`Expected "}"`}</code>
                  <br />
                  <b className="t_blue">해결 방법</b>: 열린 중괄호와 닫힌
                  중괄호의 개수를 확인하고, 누락된 중괄호를 추가합니다. 에디터의
                  중괄호 하이라이팅 기능을 활용하면 쉽게 찾을 수 있습니다.
                </p>
              </li>

              <li className="weight-700-before t_black_before">
                <strong>에러: 세미콜론 누락</strong>
                <CodeBlock
                  title="세미콜론 누락 에러"
                  language="css"
                  className="mt_ms"
                >
                  {`.button {
  background: #0a58ca  // 세미콜론 누락
  padding: 8px 16px;
}`}
                </CodeBlock>
                <p className="mt_ms">
                  <b className="t_red">에러 메시지</b>:{" "}
                  <code className="t_red">Expected &quot;;&quot;</code>
                  <br />
                  <b className="t_blue">해결 방법</b>: 각 CSS 속성 선언 뒤에
                  세미콜론을 추가합니다. 에디터의 자동 포맷팅 기능을 사용하면
                  자동으로 추가됩니다.
                </p>
              </li>

              <li className="weight-700-before t_black_before">
                <strong>에러: 존재하지 않는 파일 불러오기</strong>
                <CodeBlock
                  title="파일 경로 오류"
                  language="css"
                  className="mt_ms"
                >
                  {`//
@use "nonexistent-file";`}
                </CodeBlock>
                <p className="mt_ms">
                  <b className="t_red">에러 메시지</b>:{" "}
                  <code className="t_red">
                    Can&apos;t find stylesheet to import
                  </code>
                  <br />
                  <b className="t_blue">해결 방법</b>: 파일 경로와 파일명을
                  정확히 확인합니다. 파셜 파일은{" "}
                  <code className="t_blue">_</code> 접두사와 확장자를 생략하고
                  불러옵니다.
                </p>
              </li>
            </ol>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">에러 메시지 읽는 방법</h4>
            <p className="mt_ms">
              에러 메시지는 보통 다음과 같은 형식으로 표시됩니다:
            </p>
            <CodeBlock
              title="에러 메시지 예시"
              language="text"
              className="mt_ms"
            >
              {`Error: Undefined variable: "$primary-colr"
  ╷
3 │   background: $primary-colr;
  │              ^^^^^^^^^^^^^^
  ╵
  scss/components/_button.scss 3:15  root stylesheet`}
            </CodeBlock>
            <ul className="dot_lst mt_ms indent_small">
              <li>
                <b>에러 유형</b>: &quot;Error: Undefined variable&quot; - 어떤
                종류의 에러인지 알려줍니다
              </li>
              <li>
                <b>에러 위치</b>: 줄 번호와 열 번호 (3:15) - 어디서 에러가
                발생했는지 정확히 표시
              </li>
              <li>
                <b>파일 경로</b>: &quot;scss/components/_button.scss&quot; -
                어떤 파일에서 에러가 발생했는지 표시
              </li>
              <li>
                <b>에러가 난 코드</b>: <code className="t_blue">^</code> 표시로
                정확한 위치를 가리킴
              </li>
            </ul>
            <p className="mt_ms">
              에러 메시지를 읽을 때는 <b>파일 경로와 줄 번호를 먼저 확인</b>
              하고, 해당 위치의 코드를 살보면 문제를 빠르게 찾을 수 있습니다.
            </p>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">개발/프로덕션 환경 분리</h3>
          <p className="mt_m">
            개발 환경과 프로덕션 환경에서는 <b>서로 다른 컴파일 설정</b>을
            사용하는 것이 좋습니다.
            <br />
            개발 중에는 디버깅이 쉬운 형식을, 배포 시에는 최적화된 형식을
            사용합니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">환경</li>
              <li className="cell content">출력 스타일</li>
              <li className="cell content">소스맵</li>
              <li className="cell content">이유</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">개발 환경</p>
                <p className="cell content" data-title="출력 스타일">
                  <code>expanded</code> 또는 <code>nested</code>
                </p>
                <p className="cell content" data-title="소스맵">
                  활성화
                </p>
                <p className="cell content" data-title="이유">
                  읽기 쉬운 코드, 디버깅 용이, 원본 SCSS 위치 확인 가능
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">프로덕션 환경</p>
                <p className="cell content" data-title="출력 스타일">
                  <code>compressed</code>
                </p>
                <p className="cell content" data-title="소스맵">
                  비활성화 (선택)
                </p>
                <p className="cell content" data-title="이유">
                  파일 크기 최소화, 로딩 속도 향상, 보안 (소스 코드 숨김)
                </p>
              </li>
            </ul>
          </div>
          <div className="mt_l indent">
            <h4 className="ml_mn">Gulp에서 환경별 설정 예시</h4>
            <p className="mt_ms">
              Gulp에서는 환경 변수나 별도의 설정 파일을 통해 개발/프로덕션
              환경을 구분할 수 있습니다.
            </p>
            <CodeBlock
              title="개발 환경 설정"
              language="javascript"
              className="mt_ms"
            >
              {`const isDev = process.env.NODE_ENV !== 'production';

sass({
  outputStyle: isDev ? 'expanded' : 'compressed',
  sourceMap: isDev
})`}
            </CodeBlock>
            <p className="mt_ms">
              이렇게 설정하면{" "}
              <code className="t_blue">NODE_ENV=production</code>으로 실행할
              때만 압축된 CSS가 생성됩니다.
            </p>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파일 경로 및 출력 경로 확인</h3>
          <p className="mt_m">
            컴파일 설정에서 <b>입력 파일 경로와 출력 파일 경로를 정확히 지정</b>
            해야 합니다.
            <br />
            경로가 잘못되면 컴파일이 실패하거나 예상치 못한 위치에 파일이 생성될
            수 있습니다.
          </p>
          <ul className="dot_lst mt_ms indent_small">
            <li>
              <b>상대 경로 vs 절대 경로</b>: 프로젝트 루트를 기준으로 한 상대
              경로를 사용하는 것이 일반적입니다
            </li>
            <li>
              <b>와일드카드 사용</b>:{" "}
              <code className="t_blue">scss/**/*.scss</code>처럼 모든 하위
              폴더의 SCSS 파일을 포함할 수 있습니다
            </li>
            <li>
              <b>제외 경로 설정</b>:{" "}
              <code className="t_blue">node_modules</code>나{" "}
              <code className="t_blue">.git</code> 폴더는 컴파일에서 제외하는
              것이 좋습니다
            </li>
          </ul>
          <p className="mt_ms">
            컴파일 후 생성된 CSS 파일의 위치를 확인하고, HTML에서 올바른 경로로
            연결되어 있는지 확인하세요.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">캐시 문제 해결</h3>
          <p className="mt_m">
            브라우저나 빌드 도구가 <b>이전에 컴파일된 CSS 파일을 캐시</b>하고
            있을 수 있습니다.
            <br />
            변경사항이 반영되지 않는다면 캐시를 지우고 다시 컴파일해보세요.
          </p>
          <ul className="dot_lst mt_ms indent_small">
            <li>
              <b>브라우저 캐시</b>: 개발자 도구에서 &quot;Disable cache&quot;
              옵션 활성화 또는 <code className="t_blue">Ctrl+Shift+R</code>{" "}
              (하드 리프레시)
            </li>
            <li>
              <b>빌드 도구 캐시</b>: Gulp나 Webpack의 캐시를 지우고 다시 빌드
            </li>
            <li>
              <b>파일명 변경</b>: CSS 파일명에 버전 번호를 추가하여 캐시 무효화
              (<code className="t_blue">style.css?v=1.0.1</code>)
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">성능 최적화 팁</h3>
          <p className="mt_m">
            대규모 프로젝트에서는 컴파일 시간이 길어질 수 있습니다. 다음 팁을
            활용하면 <b>컴파일 속도를 향상</b>시킬 수 있습니다.
          </p>
          <ul className="dot_lst mt_ms indent_small">
            <li>
              <b>증분 컴파일</b>: 변경된 파일만 컴파일하는 방식 사용 (Gulp의{" "}
              <code className="t_blue">gulp-dependents</code> 등)
            </li>
            <li>
              <b>불필요한 파일 제외</b>: 컴파일 대상에서 제외할 파일을 명확히
              지정
            </li>
            <li>
              <b>파일 구조 최적화</b>: 너무 깊은 중첩 구조를 피하고, 필요한
              파일만 불러오기
            </li>
            <li>
              <b>컴파일러 버전</b>: 최신 버전의 Sass 컴파일러 사용 (성능 개선이
              포함될 수 있음)
            </li>
          </ul>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          SCSS 컴파일 개념에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>컴파일 필요성</b>: SCSS는 브라우저가 직접 읽을 수 없으므로 반드시
            CSS로 변환해야 함
          </li>
          <li>
            <b>컴파일 방법</b>: 빌드 도구(Gulp, Webpack), VS Code 확장 프로그램,
            CLI, 온라인 컴파일러 등
          </li>
          <li>
            <b>컴파일 옵션</b>: 출력 스타일, 소스맵, 인클루드 경로 등을 설정
            가능
          </li>
          <li>
            <b>변환 과정</b>: 변수 치환, 중첩 해제, 믹스인 확장, 파셜 병합 등이
            자동으로 수행됨
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>VS Code와 WebStorm에서 SCSS를 사용하는 방법</b>을
          상세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/02_scss_02.png"} alt="SCSS 컴파일" />
        <figcaption>SCSS 컴파일</figcaption>
      </figure>
    </>
  );
}

export default CompilationPage;
