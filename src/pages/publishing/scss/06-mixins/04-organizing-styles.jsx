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
  title: "반복되는 스타일을 믹스인으로 정리하기",
  description:
    "프로젝트에서 반복되는 스타일 패턴을 믹스인으로 정리하는 방법을 상세히 알아봅니다. 어떤 스타일을 믹스인으로 만들지 판단하는 기준, 믹스인으로 정리하는 과정, 그리고 실제 예시를 단계별로 설명합니다.",
  keyword:
    "scss 믹스인 정리, scss 반복 스타일, scss 코드 중복 제거, scss 믹스인 리팩토링",
};

function OrganizingStylesPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          프로젝트를 진행하다 보면 <b>같은 스타일 패턴이 여러 곳에서 반복</b>
          되는 경우가 많습니다.
          <br />
          이런 반복되는 스타일을 <b>믹스인으로 정리</b>하면 코드 중복을 줄이고
          유지보수성을 크게 향상시킬 수 있습니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 어떤 스타일을 믹스인으로 만들지 판단하는 기준,
          반복되는 스타일을 찾아내는 방법, 믹스인으로 정리하는 과정, 그리고 실제
          예시를 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">믹스인으로 정리할 스타일 찾기</h2>
        <p className="mt_l">
          프로젝트에서 <b>어떤 스타일을 믹스인으로 만들지 판단</b>하는 기준을
          알아봅니다.
          <br />
          모든 코드를 믹스인으로 만들 필요는 없기 때문에, 반복되는 패턴과 고유한
          스타일을 구분하는 기준을 세워 두면{" "}
          <b>코드 구조가 훨씬 깔끔해집니다</b>.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">반복되는 패턴 식별</h3>
          <p className="mt_m">
            다음과 같은 경우에는 <b>믹스인으로 정리</b>하는 것이 좋습니다:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>3회 이상 반복</b>: 같은 스타일이 3곳 이상에서 사용되는 경우
            </li>
            <li>
              <b>복잡한 패턴</b>: 여러 속성이 함께 사용되는 복잡한 패턴
            </li>
            <li>
              <b>의미 있는 단위</b>: 하나의 의미 있는 기능을 수행하는 스타일
              묶음
            </li>
            <li>
              <b>변경 가능성</b>: 나중에 변경될 가능성이 있는 스타일
            </li>
          </ul>
          <CodeBlock title="반복되는 패턴 예시" language="css" className="mt_m">
            {`// 같은 패턴이 여러 곳에서 반복됨
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
  gap: 16px;  // 동일한 패턴 반복
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;  // 동일한 패턴 반복
}`}
          </CodeBlock>
          <p className="mt_ms">
            이런 경우 <b>믹스인으로 정리</b>하면 코드 중복을 줄일 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">믹스인으로 만들지 말아야 할 경우</h3>
          <p className="mt_m">
            다음과 같은 경우에는 <b>믹스인을 만들지 않는 것이 좋습니다</b>:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>1-2회만 사용</b>: 한두 곳에서만 사용되는 스타일
            </li>
            <li>
              <b>단순한 속성</b>: 속성 하나만 있는 단순한 경우
            </li>
            <li>
              <b>고유한 스타일</b>: 특정 컴포넌트에만 고유한 스타일
            </li>
          </ul>
          <CodeBlock title="믹스인 불필요 예시" language="css" className="mt_m">
            {`// 한 곳에서만 사용되는 스타일
.unique-component {
  background: #f8f9fa;
  padding: 20px;
}
// 이런 경우는 믹스인으로 만들 필요 없음`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">믹스인으로 정리하는 과정</h2>
        <p className="mt_l">
          반복되는 스타일을 <b>믹스인으로 정리하는 단계별 과정</b>을 알아봅니다.
          <br />
          <i className="t_black">공통 패턴 찾기</i> →{" "}
          <i className="t_black">믹스인 정의</i> →{" "}
          <i className="t_black">적용까지의 흐름</i>을 차근차근 따라가 보면,
          실무 코드에서도 <b>어디부터 리팩터링을 시작할지</b> 감을 잡기
          쉬워집니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">1단계: 공통 패턴 찾기</h3>
          <p className="mt_m">
            먼저 <b>반복되는 공통 패턴을 찾아냅니다</b>.
          </p>
          <CodeBlock title="공통 패턴 찾기" language="css" className="mt_m">
            {`// 여러 버튼에서 공통으로 사용되는 속성 찾기
.button-primary {
  padding: 8px 16px;           // 공통
  border-radius: 4px;          // 공통
  font-weight: 700;            // 공통
  background-color: #0a58ca;   // 배경 색상 다름
  color: #ffffff;              // 공통
}

.button-secondary {
  padding: 8px 16px;           // 공통
  border-radius: 4px;          // 공통
  font-weight: 700;            // 공통
  background-color: #6c757d;   // 배경 색상 다름
  color: #ffffff;              // 공통
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">2단계: 공통 부분을 믹스인으로 정의</h3>
          <p className="mt_m">
            공통으로 사용되는 속성들을 <b>믹스인으로 정의</b>합니다.
          </p>
          <CodeBlock title="믹스인 정의" language="css" className="mt_m">
            {`// 공통 속성을 믹스인으로 정의
@mixin button-base {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  color: #ffffff;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">3단계: 믹스인 적용</h3>
          <p className="mt_m">
            정의한 믹스인을 <b>각 선택자에 적용</b>합니다.
          </p>
          <CodeBlock title="믹스인 적용" language="css" className="mt_m">
            {`.button-primary {
  @include button-base;
  background-color: #0a58ca;  // 개별 속성만 추가
}

.button-secondary {
  @include button-base;
  background-color: #6c757d;  // 개별 속성만 추가
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>공통 스타일은 믹스인으로, 개별 스타일은 직접 작성</b>
            하여 코드가 간결해집니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실제 정리 예시</h2>
        <p className="mt_l">
          실제 프로젝트에서 <b>반복되는 스타일을 믹스인으로 정리</b>하는 예시를
          살펴봅니다.
          <br />
          Flexbox 레이아웃, 카드 스타일처럼 현업에서 자주 등장하는 패턴을
          기준으로, 믹스인 적용 전·후 코드를 비교해 보면서 <b>리팩터링 효과</b>
          를 직접 확인할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Flexbox 레이아웃 정리</h3>
          <p className="mt_m">
            여러 곳에서 사용되는 <b>Flexbox 레이아웃 패턴</b>을 정리합니다.
          </p>
          <div className="mt_l indent">
            <h4 className="ml_mn">정리 전</h4>
            <CodeBlock title="정리 전 코드" language="css" className="mt_ms">
              {`.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}`}
            </CodeBlock>
          </div>
          <div className="mt_l indent">
            <h4 className="ml_mn">정리 후</h4>
            <CodeBlock title="정리 후 코드" language="css" className="mt_ms">
              {`@mixin flex-between {
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
              이렇게 정리하면 <b>코드가 훨씬 간결</b>해지고, 레이아웃을 변경할
              때도 믹스인 한 곳만 수정하면 됩니다.
            </p>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">카드 스타일 정리</h3>
          <p className="mt_m">
            여러 카드 컴포넌트에서 사용되는 <b>공통 스타일</b>을 정리합니다.
          </p>
          <div className="mt_l indent">
            <h4 className="ml_mn">정리 전</h4>
            <CodeBlock title="정리 전 코드" language="css" className="mt_ms">
              {`.card {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}

/* 위, 아래 모두 같은 속성과 값을 가지고 있음 */

.product-card {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}`}
            </CodeBlock>
          </div>
          <div className="mt_l indent">
            <h4 className="ml_mn">정리 후</h4>
            <CodeBlock title="정리 후 코드" language="css" className="mt_ms">
              {`@mixin card-base {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}

.card {
  @include card-base;
}

.product-card {
  @include card-base;
}`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">반응형 미디어 쿼리 정리</h3>
          <p className="mt_m">
            여러 곳에서 사용되는 <b>반응형 미디어 쿼리</b>를 정리합니다.
          </p>
          <div className="mt_l indent">
            <h4 className="ml_mn">정리 전</h4>
            <CodeBlock title="정리 전 코드" language="css" className="mt_ms">
              {`.container {
  width: 100%;

  @media (min-width: 768px) {
    max-width: 720px;
    margin: 0 auto;
  }
}

.section {
  padding: 16px;

  @media (min-width: 768px) {
    padding: 24px;
  }
}`}
            </CodeBlock>
          </div>
          <div className="mt_l indent">
            <h4 className="ml_mn">정리 후</h4>
            <CodeBlock title="정리 후 코드" language="css" className="mt_ms">
              {`@mixin tablet {
  @media (min-width: 768px) {
    @content;
  }
}

.container {
  width: 100%;

  @include tablet {
    max-width: 720px;
    margin: 0 auto;
  }
}

.section {
  padding: 16px;

  @include tablet {
    padding: 24px;
  }
}`}
            </CodeBlock>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">믹스인 네이밍 가이드</h2>
        <p className="mt_l">
          믹스인 이름을 <b>명확하고 일관되게</b> 짓는 방법을 알아봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">좋은 네이밍 예시</h3>
          <p className="mt_m">
            믹스인 이름은 <b>무엇을 하는지 명확하게</b> 전달해야 합니다.
          </p>
          <CodeBlock
            title="✅ 좋은 네이밍 예시"
            language="css"
            className="mt_m"
          >
            {`// ✅ 용도가 명확함
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin card-shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@mixin button-base {
  padding: 8px 16px;
  border-radius: 4px;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">나쁜 네이밍 예시</h3>
          <p className="mt_m">의미가 불명확한 이름은 피해야 합니다.</p>
          <CodeBlock
            title="❌ 나쁜 네이밍 예시"
            language="css"
            className="mt_m"
          >
            {`// ❌ 무엇을 하는지 알 수 없음
@mixin style1 { }
@mixin mixin1 { }
@mixin helper { }`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          반복되는 스타일을 믹스인으로 정리하는 방법에 대해 알아본 내용을
          정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>믹스인으로 정리할 스타일</b>: 3회 이상 반복, 복잡한 패턴, 의미
            있는 단위, 변경 가능성
          </li>
          <li>
            <b>정리 과정</b>: 공통 패턴 찾기 → 믹스인 정의 → 적용
          </li>
          <li>
            <b>실제 예시</b>: Flexbox 레이아웃, 카드 스타일, 반응형 미디어 쿼리
            등
          </li>
          <li>
            <b>네이밍 가이드</b>: 용도가 명확한 이름 사용, 의미 불명확한 이름
            피하기
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>실무에서 자주 사용하는 믹스인 예제</b>를 자세히
          알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img
          src={IMG.SCSS + "/06_scss_04.png"}
          alt="반복되는 스타일을 믹스인으로 정리하는 방법"
        />
        <figcaption>반복되는 스타일을 믹스인으로 정리하는 방법</figcaption>
      </figure>
    </>
  );
}

export default OrganizingStylesPage;
