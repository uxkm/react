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
  title: "@extend 사용 시 주의사항",
  description:
    "SCSS에서 @extend를 사용할 때 주의해야 할 사항들을 상세히 알아봅니다. 의도하지 않은 그룹화, 복잡한 선택자, 유지보수 문제 등을 예시와 함께 설명하고, 플레이스홀더 선택자와 믹스인으로 대체하는 전략을 제시합니다.",
  keyword:
    "scss extend 주의사항, scss 플레이스홀더, scss extend 문제, scss extend vs mixin, scss 유지보수",
};

function PrecautionsPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code className="t_blue">@extend</code>는 강력한 기능이지만, 잘못
          사용하면 <b>예상치 못한 CSS 출력과 유지보수 문제</b>를 일으킬 수
          있습니다.
          <br />
          특히 의도하지 않은 선택자 그룹화나 복잡한 선택자 생성은{" "}
          <b>대규모 프로젝트에서 디버깅을 어렵게 만들 수 있는 중요한 리스크</b>
          입니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 <code className="t_blue">@extend</code> 사용 시
          주의해야 할 사항들을 실제 예제와 함께 살펴보고, 플레이스홀더 선택자,
          믹스인, 유틸리티 클래스 등으로 <b>문제를 예방하거나 해결하는 전략</b>
          을 정리합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">의도하지 않은 그룹화</h2>
        <p className="mt_l">
          <code className="t_blue">@extend</code>의 가장 큰 문제 중 하나는{" "}
          <b>의도하지 않은 선택자 그룹화</b>입니다.
          <br />
          하나의 선택자를 extend하면, 그 선택자가 포함된{" "}
          <b>모든 선택자 조합에 스타일이 퍼져 나갈 수 있어</b>, 예상치 못한 곳에
          스타일이 적용될 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">문제 상황 예시</h3>
          <p className="mt_m">
            다음 예시는 <code className="t_blue">@extend</code> 사용으로 인해{" "}
            <b>원하지 않는 곳까지 스타일이 퍼지는 문제</b>를 보여줍니다.
          </p>
          <CodeBlock
            title="의도하지 않은 그룹화 예시 (SCSS)"
            language="css"
            className="mt_m"
          >
            {`.button {
  padding: 8px 16px;
  border-radius: 4px;
}

// 여러 곳에서 @extend 사용
.sidebar .button-secondary {
  @extend .button;
}

.header .button-primary {
  @extend .button;
}`}
          </CodeBlock>
          <CodeBlock
            title="의도하지 않은 그룹화 예시 (컴파일된 CSS)"
            language="css"
            className="mt_m"
          >
            {`.button,
.sidebar .button-secondary,
.header .button-primary {
  padding: 8px 16px;
  border-radius: 4px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이제 <code className="t_blue">.button</code>을 어디에서 사용하든{" "}
            <code className="t_blue">.sidebar .button-secondary</code>와{" "}
            <code className="t_blue">.header .button-primary</code>가{" "}
            <b>항상 함께 묶여</b> 스타일을 공유하게 됩니다.
            <br />
            나중에 <code className="t_blue">.button</code>을 다른 곳에 추가하면,{" "}
            <b>예상치 못한 요소까지 스타일이 함께 적용</b>될 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">해결 방법 1: 플레이스홀더 선택자 사용</h3>
          <p className="mt_m">
            이 문제를 해결하려면 <b>플레이스홀더 선택자</b>를 사용하는 것이
            좋습니다.
            <br />
            <span className="underline">
              플레이스홀더 선택자는 <code className="t_blue">%</code>로 시작하는{" "}
              <b>컴파일되지 않는 가상 선택자</b>로,{" "}
              <code className="t_blue">@extend</code>의 대상이 되기 전까지는
              실제 CSS에 출력되지 않습니다.
            </span>
          </p>
          <p className="mt_s">
            즉, 플레이스홀더 선택자는{" "}
            <b>{'"상속 전용 베이스 스타일"을 정의하는 용도'}</b>로 사용되며,
            <br />
            일반 클래스와 달리 직접 HTML에서 사용되지 않기 때문에{" "}
            <b>의도하지 않은 그룹화나 스타일 누출을 방지</b>할 수 있습니다.
          </p>
          <CodeBlock
            title="플레이스홀더 선택자 사용"
            language="css"
            className="mt_m"
          >
            {`// 플레이스홀더 선택자 (컴파일되지 않음)
%button-base {
  padding: 8px 16px;
  border-radius: 4px;
}

// 원하는 선택자만 extend
.sidebar .button {
  @extend %button-base;
}

.header .button-primary {
  @extend %button-base;
}`}
          </CodeBlock>
          <CodeBlock
            title="플레이스홀더 선택자 사용 (컴파일된 CSS)"
            language="css"
            className="mt_m"
          >
            {`.sidebar .button,
.header .button-primary {
  padding: 8px 16px;
  border-radius: 4px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            플레이스홀더 선택자를 사용하면{" "}
            <code className="t_blue">.button</code> 같은 {'"실제 클래스"'}를
            extend하지 않고도, <b>원하는 선택자만 명시적으로 그룹화</b>할 수
            있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">해결 방법 2: 믹스인으로 대체</h3>
          <p className="mt_m">
            또 다른 방법은 <b>믹스인으로 공통 스타일을 캡슐화</b>하고, 필요한
            곳에서 <code className="t_blue">@include</code>로 호출하는 것입니다.
          </p>
          <CodeBlock title="믹스인으로 대체" language="css" className="mt_m">
            {`@mixin button-base {
  padding: 8px 16px;
  border-radius: 4px;
}

.sidebar .button-secondary {
  @include button-base;
}

.header .button-primary {
  @include button-base;
}`}
          </CodeBlock>
          <p className="mt_ms">
            믹스인은 선택자를 그룹화하지 않고 <b>스타일만 복사</b>하므로, 어디에
            어떤 스타일이 적용되는지 <b>CSS 출력 결과를 더 직관적으로 파악</b>할
            수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">복잡한 선택자와 유지보수 문제</h2>
        <p className="mt_l">
          <code className="t_blue">@extend</code>를 과도하게 사용하면{" "}
          <b>복잡한 선택자와 유지보수 문제</b>가 발생할 수 있습니다.
          <br />
          특히 중첩된 선택자나 BEM 스타일 네이밍을 사용할 때는{" "}
          <code className="t_blue">@extend</code>가 예상치 못한 결과를 만들 수
          있어 주의가 필요합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">복잡한 선택자 예시</h3>
          <p className="mt_m">
            다음 예시는 중첩된 선택자에 <code className="t_blue">@extend</code>
            를 사용했을 때 <b>선택자가 어떻게 복잡해지는지</b> 보여줍니다.
          </p>
          <CodeBlock
            title="복잡한 선택자 예시 (SCSS)"
            language="css"
            className="mt_m"
          >
            {`.nav {
  &__item {
    padding: 8px 16px;
  }
}

.footer-nav__item {
  @extend .nav__item;
}`}
          </CodeBlock>
          <CodeBlock
            title="복잡한 선택자 예시 (컴파일된 CSS)"
            language="css"
            className="mt_m"
          >
            {`.nav__item,
.nav .footer-nav__item {
  padding: 8px 16px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">.footer-nav__item</code>이{" "}
            <code className="t_blue">.nav</code> 안에 있을 것이라고 가정한
            선택자가 생성되어, <b>실제 HTML 구조와 다른 CSS</b>가
            만들어졌습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">해결 방법: 유틸리티 클래스 사용</h3>
          <p className="mt_m">
            이런 경우에는 <b>유틸리티 클래스</b>를 사용하는 것이 더 안전한
            방법일 수 있습니다.
          </p>
          <CodeBlock
            title="유틸리티 클래스 사용"
            language="css"
            className="mt_m"
          >
            {`.u-nav-item {
  padding: 8px 16px;
}

.nav__item {
  @extend .u-nav-item;
}

.footer-nav__item {
  @extend .u-nav-item;
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.u-nav-item,
.nav__item,
.footer-nav__item {
  padding: 8px 16px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            공통 스타일을 <b>유틸리티 클래스</b>로 분리하면, 의미적 클래스와
            스타일 클래스가 분리되어 <b>역할이 더 명확</b>해집니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실무에서의 @extend 사용 가이드</h2>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">사용을 고려해볼 수 있는 경우</dt>
          <dd>
            <b>의미적 상속 관계</b>: <code className="t_blue">.btn</code> →{" "}
            <code className="t_blue">.btn-primary</code>처럼 명확한 상속 관계가
            있을 때
          </dd>
          <dd>
            <b>스타일 변경 빈도가 낮은 베이스 컴포넌트</b>에만 사용할 때
          </dd>
          <dd>
            <b>파일 크기 최적화</b>가 중요한 프로젝트에서 선택자 그룹화를 통해
            이득을 볼 수 있을 때
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">사용을 피하는 것이 좋은 경우</dt>
          <dd>
            <b>깊게 중첩된 선택자</b>가 많은 경우
          </dd>
          <dd>
            <b>BEM 네이밍</b>처럼 구조가 명확한 클래스를 사용하는 경우
          </dd>
          <dd>
            <b>동적으로 값이 자주 변경되는 스타일</b> (예: 색상, 간격, 폰트 크기
            등)
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">권장 패턴</dt>
          <dd>
            <b>공통 스타일</b>은 가능한 한 <b>믹스인</b>이나{" "}
            <b>유틸리티 클래스</b>로 관리
          </dd>
          <dd>
            <b>정적이고 변경 가능성이 낮은 베이스 스타일</b>에 한해{" "}
            <code className="t_blue">@extend</code> 사용
          </dd>
          <dd>
            <b>플레이스홀더 선택자</b>를 적극적으로 활용해 의도하지 않은 그룹화
            방지
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          <code className="t_blue">@extend</code> 사용 시 주의사항에 대해 알아본
          내용을 정리합니다.
          <br />
          @extend의 동작 방식과 문제점을 이해하고, 플레이스홀더 선택자, 믹스인,
          유틸리티 클래스 등을 적절히 조합하면{" "}
          <b>유지보수하기 쉽고 예측 가능한 SCSS 구조</b>를 만들 수 있습니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>의도하지 않은 그룹화</b>: 일반 클래스를 직접 extend하면 예기치
            않은 곳까지 스타일이 퍼질 수 있음
          </li>
          <li>
            <b>플레이스홀더 선택자</b>: <code className="t_blue">%</code>로
            시작하는 컴파일되지 않는 베이스 스타일로, 안전한 상속에 사용
          </li>
          <li>
            <b>믹스인 대체</b>: 스타일을 복사하는 방식으로, CSS 출력 결과를 더
            직관적으로 제어 가능
          </li>
          <li>
            <b>복잡한 선택자 문제</b>: 중첩 선택자와 함께 사용 시 예상치 못한
            선택자가 생성될 수 있음
          </li>
          <li>
            <b>유틸리티 클래스</b>: 공통 스타일을 분리해 의미적 클래스와 스타일
            클래스를 분리
          </li>
          <li>
            <b>실무 가이드</b>: 정적인 베이스 스타일에는 @extend, 동적인
            스타일과 유틸리티에는 믹스인/유틸리티 클래스 권장
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는{" "}
          <b>실제 프로젝트에서 @extend와 믹스인을 어떻게 조합해 사용하는지</b>에
          대한 실무 예시를 살펴봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/07_scss_03.png"} alt="@extend 사용 시 주의사항" />
        <figcaption>@extend 사용 시 주의사항</figcaption>
      </figure>
    </>
  );
}

export default PrecautionsPage;
