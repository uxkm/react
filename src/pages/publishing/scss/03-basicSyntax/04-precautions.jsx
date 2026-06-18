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
  title: "SCSS 문법을 사용할 때 주의할 점",
  description:
    "SCSS 문법을 사용할 때 주의해야 할 사항들을 종합적으로 정리합니다. 중첩 깊이, 선택자 복잡도, 성능 고려사항, 유지보수성, 일반적인 실수와 해결 방법을 상세히 설명합니다.",
  keyword: "scss 주의사항, scss 모범 사례, scss best practices, scss 실수, scss 성능, scss 유지보수",
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
          SCSS는 강력한 기능을 제공하지만, <b>잘못 사용하면 오히려 문제</b>가 될
          수 있습니다.
          <br />
          과도한 중첩, 복잡한 선택자, 성능 저하, 유지보수 어려움 등은 주의해야
          할 주요 사항입니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 SCSS 문법을 사용할 때 주의해야 할 사항들을 종합적으로
          정리하고, 각 문제에 대한 해결 방법과 모범 사례를 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">중첩 깊이 제한</h2>
        <p className="mt_l">
          중첩은 유용하지만, <b>너무 깊게 중첩하면 문제</b>가 발생할 수
          있습니다.
          <br />
          선택자가 길어질수록 코드가 복잡해지고, 나중에 수정하거나 디버깅할 때{" "}
          <b>어디에서 스타일이 적용됐는지 찾기 어려워질 수 있습니다</b>.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">깊은 중첩의 문제점</h3>
          <p className="mt_m">
            너무 깊은 중첩은 다음과 같은 문제를 일으킬 수 있습니다:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>가독성 저하</b>: 코드가 복잡해져 이해하기 어려워짐
            </li>
            <li>
              <b>긴 선택자 생성</b>: 컴파일된 CSS 선택자가 불필요하게 길어짐
            </li>
            <li>
              <b>성능 저하</b>: 브라우저가 긴 선택자를 해석하는 데 시간이 걸림
            </li>
            <li>
              <b>유지보수 어려움</b>: 수정 시 영향 범위를 파악하기 어려움
            </li>
          </ul>
          <CodeBlock
            title="나쁜 예시 (너무 깊은 중첩)"
            language="css"
            className="mt_m"
          >
            {`.page {
  .section {
    .article {
      .card {
        .card__header {
          .card__title {
            font-size: 18px;
          }
        }
      }
    }
  }
}`}
          </CodeBlock>
          <p className="mt_m">
            위 코드는 컴파일되면{" "}
            <code className="t_blue">
              .page .section .article .card .card__header .card__title
            </code>
            처럼 <b>매우 긴 선택자</b>가 됩니다.
          </p>
          <CodeBlock
            title="나쁜 예시 (컴파일 후)"
            language="css"
            className="mt_m"
          >
            {`.page .section .article .card .card__header .card__title {
  font-size: 18px;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">권장 중첩 깊이</h3>
          <p className="mt_m">
            일반적으로 <b>중첩은 3단계를 넘지 않는 것</b>을 권장합니다.
            <br />
            컴포넌트 단위로 중첩을 제한하면 코드가 더 명확해집니다.
          </p>
          <CodeBlock
            title="좋은 예시 (적절한 중첩)"
            language="css"
            className="mt_m"
          >
            {`.card {
  padding: 16px;

  .card__header {
    margin-bottom: 8px;

    .card__title {
      font-size: 18px;
    }
  }

  .card__body {
    margin-top: 8px;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 작성하면 <b>컴포넌트 구조가 명확</b>하고, 선택자도 적절한
            길이를 유지합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">중첩 대신 BEM 사용</h3>
          <p className="mt_m">
            깊은 중첩 대신 <b>BEM 방법론을 사용</b>하면 클래스명 자체가 의미를
            담고 있어 중첩 없이도 명확하게 스타일을 구분할 수 있습니다.
          </p>
          <CodeBlock title="BEM 사용 예시" language="css" className="mt_m">
            {`// 중첩 없이도 명확함
.card__title {
  font-size: 18px;
}

.card__header {
  margin-bottom: 8px;
}

.card__body {
  margin-top: 8px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            BEM을 사용하면 <b>중첩 없이도 컴포넌트 구조를 명확하게 표현</b>할 수
            있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">선택자 복잡도 관리</h2>
        <p className="mt_l">
          선택자가 너무 복잡하면 <b>성능과 유지보수에 문제</b>가 될 수 있습니다.
          <br />한 번 만들어 놓은 선택자는 프로젝트 전반에 영향을 주기 때문에,
          처음부터 <b>간단하고 명확한 형태</b>로 설계하는 것이 중요합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">복잡한 선택자의 문제</h3>
          <p className="mt_m">
            복잡한 선택자는 다음과 같은 문제를 일으킬 수 있습니다:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>성능 저하</b>: 브라우저가 복잡한 선택자를 해석하는 데 시간이
              걸림
            </li>
            <li>
              <b>특이성(Specificity) 증가</b>: 나중에 스타일을 덮어쓰기 어려워짐
            </li>
            <li>
              <b>재사용 어려움</b>: 특정 컨텍스트에 종속되어 다른 곳에서
              사용하기 어려움
            </li>
          </ul>
          <CodeBlock title="복잡한 선택자 예시" language="css" className="mt_m">
            {`/* 너무 복잡한 선택자 */
.page .section .article .card .card__header .card__title .card__title-text {
  font-size: 18px;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">간단한 선택자 사용</h3>
          <p className="mt_m">
            가능하면 <b>간단하고 명확한 선택자</b>를 사용하는 것이 좋습니다.
          </p>
          <CodeBlock title="간단한 선택자 예시" language="css" className="mt_m">
            {`/* 간단하고 명확한 선택자 */
.card__title-text {
  font-size: 18px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            BEM 방법론을 사용하면 <b>클래스명 자체가 충분히 구체적</b>이어서 긴
            선택자 체인이 필요 없습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">성능 고려사항</h2>
        <p className="mt_l">
          SCSS 코드가 <b>최종 CSS 성능에 미치는 영향</b>을 고려해야 합니다.
          <br />
          작성하는 순간에는 티 나지 않더라도, 누적된 스타일과 선택자는{" "}
          <b>파일 크기와 렌더링 속도</b>에 직접적인 영향을 줍니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">불필요한 중첩 피하기</h3>
          <p className="mt_m">
            모든 것을 중첩할 필요는 없습니다.
            <br />
            <b>독립적인 스타일은 중첩 없이</b> 작성하는 것이 더 효율적일 수
            있습니다.
          </p>
          <CodeBlock title="불필요한 중첩 예시" language="css" className="mt_m">
            {`// 불필요한 중첩
.button {
  .button--primary {
    background: #0a58ca;
  }
}`}
          </CodeBlock>
          <CodeBlock title="더 나은 방법" language="css" className="mt_m">
            {`// 중첩 없이 작성
.button--primary {
  background: #0a58ca;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파일 크기 최적화</h3>
          <p className="mt_m">
            불필요하게 긴 선택자나 중복 코드는 <b>최종 CSS 파일 크기를 증가</b>
            시킵니다. 파일 크기가 커지면 로딩 시간이 길어질 수 있습니다.
            <br />
            프로덕션 환경에서는 <b>압축(compressed) 형식</b>으로 컴파일하여 파일
            크기를 최소화하는 것이 좋습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">유지보수성 고려사항</h2>
        <p className="mt_l">
          코드는 <b>나중에 수정하기 쉬워야</b> 합니다.
          <br />
          작성한 사람이 아니더라도 구조를 빠르게 이해하고,{" "}
          <b>안전하게 수정·추가할 수 있는 상태</b>를 유지하는 것이 중요합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">일관된 네이밍 규칙</h3>
          <p className="mt_m">
            프로젝트 전체에서 <b>일관된 네이밍 규칙을 사용</b>하면 코드를
            이해하고 수정하기 쉬워집니다.
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>BEM 방법론</b>: Block__Element--Modifier 형태로 통일
            </li>
            <li>
              <b>변수명</b>: 소문자와 하이픈 사용 (
              <code className="t_blue">$primary-color</code>)
            </li>
            <li>
              <b>믹스인명</b>: 동사 형태로 명명 (
              <code className="t_blue">@mixin flex-center</code>)
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">모듈화 및 파일 분리</h3>
          <p className="mt_m">
            큰 파일보다는 <b>기능별로 파일을 나누어</b> 관리하는 것이 좋습니다.
          </p>
          <CodeBlock title="파일 분리 예시" language="css" className="mt_m">
            {`// _variables.scss
$primary-color: #0a58ca;

// _buttons.scss
.button {
  // ...
}

// _cards.scss
.card {
  // ...
}

// main.scss
@use "variables";
@use "buttons";
@use "cards";`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 파일을 분리하면 <b>원하는 부분만 빠르게 찾아 수정</b>할 수
            있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">의미 있는 주석 작성</h3>
          <p className="mt_m">
            복잡한 로직이나 특별한 이유가 있는 코드에는{" "}
            <b>의미 있는 주석을 작성</b>하면 나중에 이해하기 쉬워집니다.
          </p>
          <CodeBlock
            title="의미 있는 주석 예시"
            language="css"
            className="mt_m"
          >
            {`.card {
  // 모바일에서 터치 영역을 충분히 확보하기 위해
  // 최소 높이를 44px로 설정
  min-height: 44px;

  // 다크 모드 지원을 위해 CSS 변수 사용
  background: var(--card-bg, #fff);
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">일반적인 실수와 해결 방법</h2>
        <p className="mt_l">
          SCSS를 사용할 때 자주 발생하는 <b>실수와 그 해결 방법</b>을
          정리합니다.
          <br />
          처음에는 사소해 보이지만, 프로젝트 규모가 커질수록 이런 실수들이{" "}
          <b>디버깅 시간을 크게 늘리는 원인</b>이 되기 쉽습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">{"& 기호 앞뒤 공백 실수"}</h3>
          <p className="mt_m">
            <code className="t_blue">&amp;</code> 기호 앞뒤의 공백에 따라 컴파일
            결과가 달라집니다.
          </p>
          <CodeBlock title="잘못된 사용 예시" language="css" className="mt_m">
            {`.button {
  // & 앞에 공백: .button :hover (자식 선택자)
  :hover {
    background: #084298;
  }

  // & 뒤에 공백: .button --primary (잘못된 선택자)
  & --primary {
    background: #0a58ca;
  }
}`}
          </CodeBlock>
          <CodeBlock title="올바른 사용 예시" language="css" className="mt_m">
            {`.button {
  // & 앞뒤 공백 없음
  &:hover {
    background: #084298;
  }

  &--primary {
    background: #0a58ca;
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">변수 스코프 오해</h3>
          <p className="mt_m">
            변수는 <b>선언된 위치에 따라 사용 범위가 달라집니다</b>.
          </p>
          <CodeBlock title="변수 스코프 예시" language="css" className="mt_m">
            {`// 전역 변수
$primary-color: #0a58ca;

.button {
  // 지역 변수 (이 블록 안에서만 사용 가능)
  $local-color: #084298;
  background: $local-color;
}

// $local-color는 여기서 사용 불가
.card {
  background: $primary-color; // 전역 변수는 사용 가능
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">중첩된 선택자에서 부모 참조 오류</h3>
          <p className="mt_m">
            <code className="t_blue">&amp;</code>는 <b>직접 부모만 참조</b>
            합니다.
          </p>
          <CodeBlock title="잘못된 이해 예시" language="css" className="mt_m">
            {`.page {
  .section {
    .card {
      // &는 .card만 참조 (할아버지 .page는 참조 안 함)
      // &:hover → .card:hover 로 컴파일

      // .page .card가 되려면?
      // .page & { } 형태로 작성해야 함
    }
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파셜 파일 불러오기 실수</h3>
          <p className="mt_m">
            파셜 파일을 불러올 때 <b>경로와 파일명을 정확히</b> 지정해야 합니다.
          </p>
          <CodeBlock title="파셜 불러오기 예시" language="css" className="mt_m">
            {`// _variables.scss 파일을 불러올 때
@use "variables";      // ✅ _와 확장자 생략

// 잘못된 예시
@use "_variables";     // ❌ _ 포함하면 안 됨
@use "variables.scss"; // ❌ 확장자 포함하면 안 됨`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">모범 사례 요약</h2>
        <p className="mt_l">
          SCSS를 효과적으로 사용하기 위한 <b>모범 사례</b>를 요약합니다.
          <br />
          앞에서 다룬 내용을 한 번에 정리해 두면, 새로운 파일을 작성할 때마다{" "}
          <b>체크리스트처럼 참고</b>할 수 있습니다.
          <br />이 섹션의 내용을 팀 규칙이나 스타일 가이드에 반영해 두면,{" "}
          <b>프로젝트 전반의 코드 품질을 일정 수준 이상으로 유지</b>하는 데
          도움이 됩니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">코드 작성 원칙</dt>
          <dd>
            <b>중첩 깊이 제한</b>: 3단계를 넘지 않기
          </dd>
          <dd>
            <b>간단한 선택자</b>: BEM 방법론 활용하여 긴 선택자 체인 피하기
          </dd>
          <dd>
            <b>모듈화</b>: 기능별로 파일 분리하여 관리
          </dd>
          <dd>
            <b>일관성</b>: 프로젝트 전체에서 일관된 네이밍과 구조 유지
          </dd>
          <dd>
            <b>의미 있는 주석</b>: 복잡한 로직이나 특별한 이유에 주석 추가
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">성능 최적화</dt>
          <dd>
            <b>불필요한 중첩 피하기</b>: 독립적인 스타일은 중첩 없이 작성
          </dd>
          <dd>
            <b>파일 크기 최적화</b>: 프로덕션에서는 압축 형식 사용
          </dd>
          <dd>
            <b>선택자 복잡도 관리</b>: 간단하고 명확한 선택자 사용
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">유지보수성 향상</dt>
          <dd>
            <b>파일 구조화</b>: abstracts, base, components, layout 등으로
            체계적 분리
          </dd>
          <dd>
            <b>변수 활용</b>: 반복되는 값은 변수로 관리
          </dd>
          <dd>
            <b>믹스인 활용</b>: 반복되는 패턴은 믹스인으로 추출
          </dd>
          <dd>
            <b>문서화</b>: 복잡한 컴포넌트나 믹스인은 주석으로 문서화
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          SCSS 문법을 사용할 때 주의해야 할 점에 대해 알아본 내용을 정리합니다.
          <br />
          지금까지 살펴본 내용은 모두 거창한 규칙이라기보다,{" "}
          <b>실제 프로젝트에서 문제를 줄이기 위해</b> 많은 팀들이 공통으로
          합의한 경험칙에 가깝습니다.
          <br />
          처음부터 모든 것을 완벽하게 지키는 것보다,{" "}
          <b>중요한 원칙들부터 하나씩 습관으로 만드는 것</b>을 목표로 삼으면
          좋습니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>중첩 깊이 제한</b>: 3단계를 넘지 않기, BEM 방법론 활용
          </li>
          <li>
            <b>선택자 복잡도 관리</b>: 간단하고 명확한 선택자 사용
          </li>
          <li>
            <b>성능 고려</b>: 불필요한 중첩 피하기, 파일 크기 최적화
          </li>
          <li>
            <b>유지보수성</b>: 일관된 네이밍, 모듈화, 의미 있는 주석
          </li>
          <li>
            <b>일반적인 실수</b>: {"&"} 공백, 변수 스코프, 파셜 불러오기 등 주의
          </li>
          <li>
            <b>모범 사례</b>: 코드 작성 원칙, 성능 최적화, 유지보수성 향상 방법
          </li>
        </ul>
        <p className="mt_m">
          다음 섹션에서는 <b>변수(Variables)로 스타일을 관리</b>하는 방법을
          자세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img
          src={IMG.SCSS + "/03_scss_04.png"}
          alt="SCSS 문법을 사용할 때 주의할 점"
        />
        <figcaption>SCSS 문법을 사용할 때 주의할 점</figcaption>
      </figure>
    </>
  );
}

export default PrecautionsPage;
