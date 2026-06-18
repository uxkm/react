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
  title: "믹스인의 개념과 역할",
  description:
    "SCSS 믹스인(Mixin)의 기본 개념과 역할을 상세히 알아봅니다. 믹스인이 무엇인지, 왜 필요한지, 변수와 어떤 차이가 있는지, 실제 사용 예시를 통해 믹스인의 필요성을 설명합니다.",
  keyword:
    "scss 믹스인, scss mixin, scss @mixin, scss @include, scss 재사용, scss 함수",
};

function MixinConceptPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>믹스인(Mixin)</b>은 SCSS에서{" "}
          <b>재사용 가능한 스타일 블록을 만드는 기능</b>입니다.
          <br />
          변수가 값을 재사용하는 것이라면, 믹스인은{" "}
          <b>여러 CSS 속성과 규칙을 묶어서 재사용</b>할 수 있게 해줍니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 믹스인의 기본 개념, 변수와의 차이, 믹스인이 필요한
          이유, 그리고 실제 사용 예시를 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">믹스인(Mixin)이란?</h2>
        <p className="mt_l">
          믹스인은 <b>여러 CSS 속성을 묶어서 하나의 이름으로 저장</b>하고,
          필요할 때마다 불러와 사용할 수 있게 해주는 기능입니다.
          <br />
          함수처럼 정의하고 호출하여 사용할 수 있으며, 반복되는 스타일 패턴을{" "}
          <b>안전하게 재사용하는 기본 단위</b>가 됩니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">믹스인의 기본 개념</h3>
          <p className="mt_m">
            믹스인은 <code className="t_blue">@mixin</code>으로 정의하고,{" "}
            <code className="t_blue">@include</code>로 사용합니다.
          </p>
          <CodeBlock title="믹스인 기본 예시" language="css" className="mt_m">
            {`// 믹스인 정의
@mixin button-style {
  padding: 8px 16px;
  background: #0a58ca;
  color: #ffffff;
  border-radius: 4px;
}

// 믹스인 사용
.button {
  @include button-style;
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.button {
  padding: 8px 16px;
  background: #0a58ca;
  color: #ffffff;
  border-radius: 4px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            믹스인을 사용하면 <b>여러 속성을 한 번에 재사용</b>할 수 있어 코드
            중복을 크게 줄일 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">변수와 믹스인의 차이</h3>
          <p className="mt_m">
            변수는 <b>값 하나</b>를 재사용하고,{" "}
            <mark>
              믹스인은 <b>여러 속성의 묶음</b>을 재사용합니다.
            </mark>
          </p>
          <CodeBlock
            title="변수 사용 (값만 재사용)"
            language="css"
            className="mt_m"
          >
            {`// 변수: 값 하나만 재사용
$primary-color: #0a58ca;

.button {
  background: $primary-color;  // 값만 재사용
}`}
          </CodeBlock>
          <CodeBlock
            title="믹스인 사용 (여러 속성 재사용)"
            language="css"
            className="mt_m"
          >
            {`// 믹스인: 여러 속성을 재사용
@mixin button-style {
  padding: 8px 16px;
  background: #0a58ca;
  border-radius: 4px;
}

.button {
  @include button-style;  // 여러 속성 재사용
}`}
          </CodeBlock>
          <p className="mt_ms">
            변수는 <b>단일 값</b>을, 믹스인은 <b>스타일 블록 전체</b>를 재사용할
            때 사용합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">믹스인이 필요한 이유</h2>
        <p className="mt_l">
          믹스인을 사용하지 않을 때 발생하는 <b>문제점</b>과, 믹스인을 사용하면
          해결되는 <b>장점</b>을 살펴봅니다.
          <br />
          스타일이 점점 늘어날수록 코드 중복과 수정 범위가 함께 커지기 때문에,
          어디까지를 믹스인으로 묶어야 <b>유지보수와 협업에 유리한지</b> 감을
          잡는 것이 중요합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">코드 중복 문제</h3>
          <p className="mt_m">
            같은 스타일을 여러 곳에서 반복해서 작성해야 할 때,{" "}
            <b>코드가 중복</b>됩니다.
          </p>
          <CodeBlock title="코드 중복 예시" language="css" className="mt_m">
            {`.button-primary {
  padding: 8px 16px;    // 중복
  background: #0a58ca;  // 색상만 다름
  color: #ffffff;       // 중복
  border-radius: 4px;   // 중복
  font-weight: 700;     // 중복
}

.button-secondary {
  padding: 8px 16px;    // 중복
  background: #6c757d;  // 색상만 다름
  color: #ffffff;       // 중복
  border-radius: 4px;   // 중복
  font-weight: 700;     // 중복
}

.button-success {
  padding: 8px 16px;    // 중복
  background: #28a745;  // 색상만 다름
  color: #ffffff;       // 중복
  border-radius: 4px;   // 중복
  font-weight: 700;     // 중복
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 작성하면 <b>스타일을 변경할 때 여러 곳을 수정</b>해야 하고,
            실수로 일부만 수정할 위험이 있습니다.
          </p>
          <CodeBlock title="믹스인으로 해결" language="css" className="mt_ms">
            {`// 공통 스타일을 믹스인으로 정의
@mixin button-base {
  padding: 8px 16px;
  color: #ffffff;
  border-radius: 4px;
  font-weight: 700;
}

.button-primary {
  @include button-base;
  background: #0a58ca;
}

.button-secondary {
  @include button-base;
  background: #6c757d;
}

.button-success {
  @include button-base;
  background: #28a745;
}`}
          </CodeBlock>
          <p className="mt_ms">
            믹스인을 사용하면 <b>공통 스타일을 한 곳에서 관리</b>할 수 있어
            유지보수가 훨씬 편해집니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">복잡한 스타일 패턴 재사용</h3>
          <p className="mt_m">
            복잡한 스타일 패턴(예: flexbox 레이아웃, 그리드 레이아웃, 반응형
            미디어 쿼리)을 <b>여러 곳에서 사용</b>할 때 믹스인이 유용합니다.
          </p>
          <CodeBlock
            title="복잡한 패턴 반복 예시"
            language="css"
            className="mt_m"
          >
            {`// Flexbox 레이아웃을 여러 곳에서 사용
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;  // 같은 패턴 반복
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;  // 같은 패턴 반복
}`}
          </CodeBlock>
          <CodeBlock title="믹스인으로 정리" language="css" className="mt_m">
            {`// Flexbox 패턴을 믹스인으로 정의
@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.header {
  @include flex-between;
}

.navigation {
  @include flex-between;
}

.footer {
  @include flex-between;
}`}
          </CodeBlock>
          <p className="mt_ms">
            복잡한 패턴을 믹스인으로 정의하면 <b>코드가 간결해지고 일관성</b>이
            유지됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">조건부 스타일 적용</h3>
          <p className="mt_m">
            믹스인은 <b>파라미터를 받아서 조건에 따라 다른 스타일을 적용</b>할
            수 있습니다.
          </p>
          <CodeBlock title="조건부 스타일 예시" language="css" className="mt_m">
            {`// 파라미터를 받는 믹스인
@mixin button($bg-color) {
  padding: 8px 16px;
  background-color: $bg-color;
  color: #ffffff;
  border-radius: 4px;
}

.button-primary {
  @include button(#0a58ca);
}

.button-success {
  @include button(#28a745);
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.button-primary {
  padding: 8px 16px;
  background-color: #0a58ca;  // 배경 색상이 다름
  color: #ffffff;
  border-radius: 4px;
}

.button-success {
  padding: 8px 16px;
  background-color: #28a745;  // 배경 색상이 다름
  color: #ffffff;
  border-radius: 4px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            파라미터를 사용하면 <b>같은 패턴을 다양한 값으로 재사용</b>할 수
            있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">믹스인의 역할</h2>
        <p className="mt_l">
          믹스인이 프로젝트에서 수행하는 <b>주요 역할</b>들을 정리합니다.
          <br />
          코드 재사용, 일관성 유지, 디자인 시스템 구현 등에서 믹스인이 어떤
          식으로 쓰이는지 한 번에 정리해 두면,{" "}
          <b>언제 믹스인을 떠올려야 할지</b>가 선명해집니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">코드 재사용성 향상</dt>
          <dd>
            믹스인은 <b>같은 스타일을 여러 곳에서 재사용</b>할 수 있게 해줍니다.
          </dd>
          <dd>
            공통 스타일을 믹스인으로 정의해 두면,{" "}
            <b>새로운 컴포넌트를 만들 때도 빠르게 적용</b>할 수 있습니다.
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">일관성 유지</dt>
          <dd>
            믹스인을 사용하면 <b>모든 곳에서 동일한 스타일 패턴을 사용</b>할 수
            있어 일관성이 유지됩니다.
          </dd>
          <dd>
            예를 들어 버튼 스타일을 믹스인으로 정의하면,{" "}
            <b>모든 버튼이 같은 패딩, 테두리 반경, 폰트 굵기를 사용</b>하게
            됩니다.
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">유지보수성 향상</dt>
          <dd>
            스타일을 변경할 때 <b>믹스인 정의 부분만 수정</b>하면 모든 곳에
            자동으로 반영됩니다.
          </dd>
          <dd>
            예를 들어 버튼 패딩을 변경하려면 믹스인 한 곳만 수정하면 되므로,{" "}
            <b>수정 시간이 크게 단축</b>되고 실수도 줄어듭니다.
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">코드 가독성 향상</dt>
          <dd>
            <p>
              복잡한 스타일을 믹스인으로 묶으면,{" "}
              <b>코드의 의도가 명확하게 드러나</b> 가독성이 향상됩니다.
            </p>
            <CodeBlock title="가독성 향상 예시" language="css" className="mt_s">
              {`// 복잡한 스타일이 믹스인 이름으로 명확해짐
.card {
  @include flex-center;
  @include card-shadow;
  @include responsive-padding;
}`}
            </CodeBlock>
            <p className="mt_s">
              이렇게 작성하면 <b>무엇을 하는 코드인지 바로 이해</b>할 수
              있습니다.
            </p>
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">믹스인 사용 시나리오</h2>
        <p className="mt_l">
          실제 프로젝트에서 <b>믹스인을 사용하면 좋은 상황</b>들을 예시로
          살펴봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">버튼 스타일 통일</h3>
          <p className="mt_m">
            여러 종류의 버튼이 있지만 <b>기본 스타일은 동일</b>한 경우입니다.
          </p>
          <CodeBlock
            title="버튼 스타일 통일 예시"
            language="css"
            className="mt_m"
          >
            {`@mixin button-base {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
}

.button-primary {
  @include button-base;
  background: #0a58ca;
  color: #ffffff;
}

.button-outline {
  @include button-base;
  background: transparent;
  border: 2px solid #0a58ca;
  color: #0a58ca;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">반응형 미디어 쿼리</h3>
          <p className="mt_m">
            같은 브레이크포인트를 <b>여러 곳에서 사용</b>하는 경우입니다.
          </p>
          <CodeBlock
            title="반응형 미디어 쿼리 예시"
            language="css"
            className="mt_m"
          >
            {`@mixin tablet {
  @media (min-width: 768px) {
    @content;
  }
}

.container {
  width: 100%;

  @include tablet {
    max-width: 720px;
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">벤더 프리픽스</h3>
          <p className="mt_m">
            여러 브라우저를 지원하기 위해 <b>벤더 프리픽스를 반복해서 사용</b>
            하는 경우입니다.
          </p>
          <CodeBlock title="벤더 프리픽스 예시" language="css" className="mt_m">
            {`@mixin transform($value) {
  -webkit-transform: $value;
  -moz-transform: $value;
  -ms-transform: $value;
  transform: $value;
}

.element {
  @include transform(rotate(45deg));
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.element {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          믹스인의 개념과 역할에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>믹스인의 개념</b>: 여러 CSS 속성을 묶어서 재사용할 수 있게 해주는
            기능
          </li>
          <li>
            <b>변수와의 차이</b>: 변수는 값 하나, 믹스인은 여러 속성의 묶음
          </li>
          <li>
            <b>필요한 이유</b>: 코드 중복 해결, 복잡한 패턴 재사용, 조건부
            스타일 적용
          </li>
          <li>
            <b>주요 역할</b>: 코드 재사용성 향상, 일관성 유지, 유지보수성 향상,
            가독성 향상
          </li>
          <li>
            <b>사용 시나리오</b>: 버튼 스타일 통일, 반응형 미디어 쿼리, 벤더
            프리픽스 등
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>@mixin과 @include의 기본 문법</b>을 자세히
          알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/06_scss_01.png"} alt="믹스인의 개념과 역할" />
        <figcaption>믹스인의 개념과 역할</figcaption>
      </figure>
    </>
  );
}

export default MixinConceptPage;
