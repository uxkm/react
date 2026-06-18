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
  title: "CSS와 SCSS의 차이",
  description:
    "CSS가 가진 한계와 유지보수 문제를 짚어 보고, SCSS(Sass)의 장점을 살펴봅니다. CSS·SCSS 차이를 한눈에 비교해 이해할 수 있습니다.",
  keyword: "scss, sass, css 한계, scss 장점, scss 필요성, 퍼블리셔 scss",
};

function CssVsScssPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          CSS는 웹 페이지의 스타일을 정의하는 핵심 언어이지만, 규모가 커질수록
          반복 코드와 전역 영향으로 유지보수가 어려워집니다.
          <br />
          <b>SCSS(Sass)</b>는 변수, 중첩, 믹스인, 파셜 등{" "}
          <b>재사용성과 확장성을 높여 주는 기능</b>을 제공해 이런 문제를
          해결합니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 CSS가 가진 한계와 SCSS의 장점, 퍼블리셔가 SCSS를
          익혀야 하는 이유, 그리고 CSS·SCSS 차이를 한눈에 정리합니다.
          <br />
          실무에서 바로 응용할 수 있는 코드 예제를 함께 제공합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">CSS의 한계와 유지보수 문제</h2>
        <p className="mt_l">
          프로젝트가 커질수록 CSS는 <b>반복 선언, 전역 충돌, 구조화 어려움</b>{" "}
          때문에 유지보수가 힘들어집니다.
          <br />
          특히 스타일 가이드가 없거나 컴포넌트 단위로 쪼개지지 않은 상태에서는{" "}
          <b>비슷한 코드가 계속 늘어나고, 수정 범위를 예측하기 어렵다</b>는
          문제가 자주 발생합니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">반복되는 스타일과 전역 영향</dt>
          <dd>
            비슷한 요소마다 동일한 여백, 색상, 폰트를 반복 선언하면{" "}
            <b>수정할 때 변경 지점을 모두 찾아야 하는 부담</b>이 생깁니다.
          </dd>
          <dd>
            또한 전역 선택자나 범위가 넓은 클래스는{" "}
            <b>예상치 못한 요소까지 스타일을 덮어쓰기</b> 쉬워 협업 시 충돌이
            잦습니다.
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">협업 시 가독성과 일관성 문제</dt>
          <dd>
            다른 팀원이 작성한 CSS를 빠르게 이해하기 어렵고,{" "}
            <b>네이밍 규칙·디렉터리 구조가 제각각</b>이면 수정 범위 예측이
            어렵습니다.
          </dd>
          <dd>
            디자인 변경이 잦은 퍼블리싱 환경에서는{" "}
            <b>재사용 가능한 패턴과 일관된 규칙</b>이 필수입니다.
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">SCSS(Sass)의 장점</h2>
        <p className="mt_l">
          <b>SCSS(Sass)</b>는 CSS의 상위 문법으로,{" "}
          <b>컴파일 시 표준 CSS로 변환</b>됩니다.
          <br />
          변수, 중첩, 믹스인, 파셜, 모듈 시스템 등{" "}
          <b>코드 재사용과 구조화에 필요한 기능</b>을 제공해 대규모 스타일
          작업을 수월하게 합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">변수, 중첩, 믹스인으로 코드 재사용</h3>
          <p className="mt_m">
            SCSS 변수로 <b>색상·여백·폰트</b>를 한 곳에서 관리하고, 중첩으로{" "}
            <b>컴포넌트 구조를 그대로 표현</b>할 수 있습니다.
            <br />
            믹스인과 함수는 반복되는 패턴을 캡슐화해 <b>한 줄로 재사용</b>하게
            도와줍니다.
          </p>
          <CodeBlock
            title="SCSS 변수·중첩·믹스인 예시"
            language="css"
            className="mt_ms"
          >
            {`// 번수 선언
$brand: #0a58ca;
$spacing: 8px;

// 믹스인 선언
@mixin card-spacing {
	margin-bottom: $spacing;
}

// 중첩 활용
.card {
	h3 { @include card-spacing; color: darken($brand, 5%); }
	p  { @include card-spacing; }
	a  { @include card-spacing; color: $brand; &:hover { color: darken($brand, 12%); } }
}`}
          </CodeBlock>
          <p className="mt_ms">
            <b>변수</b>로 공통 값(색상, 여백)을 한 곳에서 관리하고,{" "}
            <b>믹스인</b>으로 반복되는 패턴을 캡슐화하면{" "}
            <b>유지보수 범위를 최소화</b>할 수 있습니다.
            <br />
            중첩을 통해 컴포넌트 구조를 그대로 표현하면 읽으면서도{" "}
            <b>어느 요소에 어떤 스타일이 적용되는지 직관적으로 확인</b>할 수
            있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파셜과 모듈 시스템</h3>
          <p className="mt_m">
            파일을 <b>파셜(partial)로 나누고</b> 필요한 곳에서 가져오면,
            기능별로 관리가 쉬워집니다.
            <br />
            최근 Sass는 <code className="t_blue">@use</code>·
            <code className="t_blue">@forward</code> 모듈 시스템을 제공해{" "}
            <b>네임스페이스 충돌을 막고 의존성을 명확히</b> 합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">SCSS가 주는 추가 장점</h3>
          <p className="mt_m">
            SCSS를 사용하면 단순히 문법을 확장하는 것 이상으로,{" "}
            <b>코드를 짧고 깔끔하게 유지</b>하고 <b>디자인 변경·협업·배포</b>
            까지 한 번에 챙길 수 있습니다.
          </p>
          <ol className="ol_lst info_lst gap-column-important-m mt_m">
            <li className="t_black_before weight-600-before">
              <strong>코드 간결화</strong>
              <p>
                반복되는 여백·색상·폰트 값을 변수와 믹스인으로 모아두면 같은
                스타일을 여러 번 쓰더라도 코드 길이는 짧게 유지할 수 있습니다.
              </p>
            </li>
            <li className="t_black_before weight-600-before">
              <strong>디자인 변경 대응</strong>
              <p>
                브랜드 색상이나 기본 여백 규칙이 바뀌어도 토큰(변수) 몇 개만
                수정하면 전체 스타일이 함께 바뀌어, 여러 곳을 일일이 수정할
                때보다 실수가 훨씬 줄어듭니다.
              </p>
            </li>
            <li className="t_black_before weight-600-before">
              <strong>구조를 눈으로 보기 쉬움</strong>
              <p>
                중첩 문법으로 HTML 구조와 비슷한 형태로 스타일을 작성할 수 있어,{" "}
                <code className="t_blue">.card</code> 안에 제목·내용·버튼이
                어떻게 스타일링되는지 한 블록 안에서 바로 확인할 수 있습니다.
              </p>
            </li>
            <li className="t_black_before weight-600-before">
              <strong>파일 분리와 재사용</strong>
              <p>
                파셜과 모듈(<code className="t_blue">@use</code>,{" "}
                <code className="t_blue">@forward</code>)을 사용하면 버튼, 카드,
                레이아웃 등 기능별로 파일을 쪼개고 필요한 곳에서만 불러와 쓸 수
                있어, 거대한 하나의 CSS 파일을 직접 관리하는 것보다 훨씬
                안전합니다.
              </p>
            </li>
            <li className="t_black_before weight-600-before">
              <strong>팀 작업과 코드 리뷰</strong>
              <p>
                공통 토큰과 믹스인을 팀 전체가 함께 사용하면 모두가 같은
                규칙으로 코드를 작성하게 되어, 여백 값이나 색상이 제각각인
                문제를 줄이고 새로 합류한 사람도 SCSS 구조를 빠르게 파악할 수
                있습니다.
              </p>
            </li>
            <li className="t_black_before weight-600-before">
              <strong>빌드 도구와의 연계</strong>
              <p>
                Gulp나 Webpack과 함께 사용하면 SCSS 컴파일 → 오토프리픽스 추가 →
                압축(minify)까지 한 번에 처리하여, 개발용(읽기 쉬운 CSS)과
                배포용(최적화된 CSS)을 자동으로 분리할 수 있습니다.
              </p>
            </li>
            <li className="t_black_before weight-600-before">
              <strong>기존 CSS 지식 활용</strong>
              <p>
                SCSS는 CSS 위에 얇게 기능을 더한 문법이라 기존 CSS를 거의 그대로
                옮겨오고, 필요한 부분에만 변수·믹스인·중첩을 추가하는 식으로
                점진적으로 도입할 수 있습니다.
              </p>
            </li>
          </ol>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">CSS와 SCSS의 차이 한눈에 보기</h2>
        <p className="mt_l">
          아래 표는 CSS와 SCSS의 주요 기능을 비교한 것입니다. SCSS는{" "}
          <b>CSS 문법을 그대로 사용</b>하면서도 <b>추가 기능</b>을 제공해 대규모
          프로젝트에서 특히 유용합니다.
        </p>
        <div className="table_summary value_150 mt_m">
          <ul className="lst_hd">
            <li className="cell value">속성명</li>
            <li className="cell content">CSS</li>
            <li className="cell content">SCSS</li>
          </ul>
          <ul className="lst_bd">
            <li>
              <p className="cell value">
                <code className="t_darkgreen">변수</code>{" "}
                <i className="t_darkgreen">[필수]</i>
              </p>
              <p className="cell content" data-title="css">
                CSS 변수(<code className="t_blue">--token</code>) 제공, 런타임
                변경 가능
              </p>
              <p className="cell content" data-title="scss">
                컴파일 변수(<code className="t_blue">$token</code>) 제공,
                설계·토큰 관리 용이
              </p>
            </li>
            <li>
              <p className="cell value">
                <code>중첩</code>
              </p>
              <p className="cell content" data-title="css">
                직접 중첩 문법 없음
              </p>
              <p className="cell content" data-title="scss">
                선택자·미디어쿼리 중첩 지원, 구조 표현이 직관적
              </p>
            </li>
            <li>
              <p className="cell value">
                <code>재사용</code>
              </p>
              <p className="cell content" data-title="css">
                <code className="t_blue">@layer</code>,{" "}
                <code className="t_blue">@property</code> 등 최신 기능 활용
              </p>
              <p className="cell content" data-title="scss">
                <code className="t_blue">@mixin</code>,{" "}
                <code className="t_blue">@function</code>, 파셜로 패턴 재사용
              </p>
            </li>
            <li>
              <p className="cell value">
                <code>모듈</code>
              </p>
              <p className="cell content" data-title="css">
                전역 스코프, 구조화는 설계에 의존
              </p>
              <p className="cell content" data-title="scss">
                <code className="t_blue">@use</code>/
                <code className="t_blue">@forward</code>로 네임스페이스 분리
              </p>
            </li>
            <li>
              <p className="cell value">
                <code>컴파일</code>
              </p>
              <p className="cell content" data-title="css">
                브라우저가 바로 해석
              </p>
              <p className="cell content" data-title="scss">
                컴파일 후 CSS 생성, 빌드 파이프라인과 함께 사용
              </p>
            </li>
          </ul>
        </div>

        <article className="mt_xl indent">
          <h3 className="ml_mn">CSS와 SCSS의 비교 예시</h3>

          <div className="indent mt_ml indent">
            <h4 className="ml_mn">마크업</h4>
            <p className="mt_m">
              아래와 같은 일반적인 카드 ui가 있다고 가정할 때
            </p>
            <CodeBlock
              title="Card 마크업 예시"
              language="html"
              className="mt_ms"
            >
              {`<article class="card">
	<h3 class="card__title">Title</h3>
	<p class="card__desc">Description text</p>
	<a class="card__link" href="#">More</a>
</article>`}
            </CodeBlock>
          </div>

          <div className="indent mt_l indent">
            <h4 className="ml_mn">CSS</h4>
            <p className="mt_m">
              같은 마진을 반복 선언하면{" "}
              <b>바꿀 때마다 모든 선언을 찾아야 하고</b>,{" "}
              <b>
                <code className="weight-600">.card</code>처럼 상위에서 잡은
                선택자
              </b>
              는 <b>다른 카드에도 영향을 줄 수 있습니다.</b>
            </p>
            <CodeBlock
              title="CSS 예시 (중복 선언)"
              language="css"
              className="mt_ms"
            >
              {`.card .card__title { margin-bottom: 8px; font-weight: 700; }
.card .card__desc  { margin-bottom: 8px; line-height: 1.6; }
.card .card__link  { margin-bottom: 8px; color: #0a58ca; }
.card .card__link:hover { color: #063c86; }`}
            </CodeBlock>
          </div>

          <div className="indent mt_l indent">
            <h4 className="ml_mn">SCSS</h4>
            <p className="mt_m">
              <b>변수·믹스인·중첩</b>을 사용하면{" "}
              <b>여백·색상 값을 한 곳에서 관리</b>
              하고, <b>스타일 영향 범위를 카드 내부로 한정</b>해 안전하게 수정할
              수 있습니다.
            </p>
            <CodeBlock
              title="SCSS 예시 (변수·중첩 적용)"
              language="css"
              className="mt_ms"
            >
              {`$space: 8px;
$link-color: #0a58ca;

@mixin card-spacing {
	margin-bottom: $space;
}

.card {
	&__title { @include card-spacing; font-weight: 700; }
	&__desc  { @include card-spacing; line-height: 1.6; }
	&__link  {
		@include card-spacing;
		color: $link-color;
		&:hover { color: darken($link-color, 12%); }
	}
}`}
            </CodeBlock>
            <p className="mt_ms">
              여백 값은 <b>$space</b> 한 곳만 바꾸면 되고, 링크 색상도{" "}
              <b>$link-color</b>만 교체하면 모든 카드에 반영됩니다.
              <br />
              중첩을 사용해 카드 내부 구조를 그대로 표현하므로{" "}
              <b>가독성이 높아지고, 스타일 영향 범위가 컴포넌트 안으로 제한</b>
              됩니다.
            </p>
          </div>

          <p className="mt_l">
            <b>요약</b>: SCSS는 익숙한 CSS 문법을 확장해 대규모 스타일 작업을 더
            안전하고 효율적으로 만듭니다.
            <br />
            변수·중첩·믹스인·파셜을 적절히 활용하면 유지보수성이 크게
            향상됩니다.
          </p>
        </article>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/01_scss_02.png"} alt="CSS와 SCSS의 비교 예시" />
        <figcaption>CSS와 SCSS의 비교 예시</figcaption>
      </figure>
    </>
  );
}

export default CssVsScssPage;
