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
  title: "SCSS 파일을 분리하는 이유",
  description:
    "SCSS 파일을 분리하는 이유와 필요성을 상세히 알아봅니다. 단일 파일의 문제점, 파일 분리의 장점, 유지보수성 향상, 협업 효율성, 그리고 실제 프로젝트에서의 효과를 예시와 함께 설명합니다.",
  keyword:
    "scss 파일 분리, scss 구조, scss 파일 관리, scss 모듈화, scss 유지보수",
};

function WhySeparatePage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          프로젝트가 커지면{" "}
          <b>하나의 SCSS 파일에 모든 스타일을 작성하는 것은 비효율적</b>입니다.
          <br />
          파일을 분리하면 <b>코드를 체계적으로 관리</b>할 수 있고,{" "}
          <b>유지보수성과 협업 효율성</b>이 크게 향상됩니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 단일 파일의 문제점, 파일 분리의 장점, 유지보수성 향상,
          협업 효율성, 그리고 실제 프로젝트에서의 효과를 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">단일 파일의 문제점</h2>
        <p className="mt_l">
          모든 스타일을 <b>하나의 파일에 작성</b>할 때 발생하는 문제점들을
          살펴봅니다.
          <br />
          파일 크기 증가, 코드 찾기 어려움, 협업 충돌, 재사용 어려움 등은
          프로젝트가 커질수록 <b>
            개발 속도와 유지보수 비용에 직접적인 영향을
          </b>{" "}
          미치기 때문에 먼저 이해해 두는 것이 중요합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파일 크기 문제</h3>
          <p className="mt_m">
            프로젝트가 커지면 <b>하나의 파일이 수천 줄</b>이 될 수 있습니다.
          </p>
          <CodeBlock title="단일 파일 예시" language="css" className="mt_m">
            {`// styles.scss (3000줄 이상)
// 변수 정의
$color-primary: #0a58ca;
$color-secondary: #6c757d;
// ... (수백 줄)

// 믹스인 정의
@mixin button { }
@mixin card { }
// ... (수백 줄)

// 컴포넌트 스타일
.button { }
.card { }
.nav { }
// ... (수천 줄)

// 유틸리티
.mt-1 { }
.mt-2 { }
// ... (수백 줄)`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 되면 <b>파일을 열고 찾는 데 시간이 오래 걸리고</b>,{" "}
            <b>에디터가 느려질 수 있습니다</b>.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">코드 찾기 어려움</h3>
          <p className="mt_m">
            수천 줄의 파일에서 <b>특정 스타일을 찾는 것은 매우 어렵습니다</b>.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">작업</li>
              <li className="cell content">단일 파일</li>
              <li className="cell content">파일 분리</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">버튼 스타일 찾기</p>
                <p className="cell content" data-title="단일 파일">
                  3000줄 파일에서 검색 필요
                </p>
                <p className="cell content" data-title="파일 분리">
                  _button.scss 파일 바로 열기
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">변수 수정</p>
                <p className="cell content" data-title="단일 파일">
                  파일 상단에서 찾아야 함
                </p>
                <p className="cell content" data-title="파일 분리">
                  _variables.scss 파일 열기
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">믹스인 추가</p>
                <p className="cell content" data-title="단일 파일">
                  적절한 위치 찾기 어려움
                </p>
                <p className="cell content" data-title="파일 분리">
                  _mixins.scss에 추가
                </p>
              </li>
            </ul>
          </div>
          <p className="mt_ms">
            파일을 분리하면 <b>원하는 코드를 빠르게 찾을 수 있습니다</b>.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">협업 시 충돌</h3>
          <p className="mt_m">
            여러 명이 함께 작업할 때 <b>같은 파일을 수정하면 충돌</b>이
            발생합니다.
          </p>
          <CodeBlock title="협업 충돌 시나리오" language="css" className="mt_m">
            {`// styles.scss (3000줄)
// 개발자 A: 버튼 스타일 수정 (1000줄 근처)
.button {
  background: #0a58ca;  // 수정
}

// 개발자 B: 카드 스타일 수정 (1500줄 근처)
.card {
  padding: 16px;  // 수정
}

// Git 충돌 발생!
// 같은 파일의 다른 부분을 수정했지만 충돌 발생 가능`}
          </CodeBlock>
          <p className="mt_ms">
            파일을 분리하면 각자 맞은 역할에 따라 다른 파일을 수정하게 되어{" "}
            <b>Git 충돌 발생 가능성이 낮아집니다</b>.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">재사용 어려움</h3>
          <p className="mt_m">
            하나의 파일에 모든 것이 있으면{" "}
            <b>특정 부분만 재사용하기 어렵습니다</b>.
            <br />
            예를 들어, 다른 프로젝트에서 버튼 스타일만 가져오고 싶어도{" "}
            <code className="t_blue">styles.scss</code> 파일(3000줄)에서 버튼
            부분만 찾아서 복사해야 하고, 불필요한 코드도 함께 가져올 위험이
            있습니다.
          </p>
          <p className="mt_s">
            파일을 분리하면 <b>필요한 파일만 가져와서 재사용</b>할 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">파일 분리의 장점</h2>
        <p className="mt_l">
          파일을 분리하면 얻을 수 있는 <b>주요 장점</b>들을 살펴봅니다.
          <br />
          코드 조직화, 유지보수성 향상, 협업 효율성, 재사용성 등은 단일 파일의
          문제점을 해결하면서도, <b>프로젝트 규모가 커져도 안정적으로 관리</b>할
          수 있는 기반을 만들어 줍니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">코드 조직화</h3>
          <p className="mt_m">
            파일을 분리하면 <b>관련 있는 코드끼리 묶어서 관리</b>할 수 있습니다.
          </p>
          <CodeBlock title="파일 분리 예시" language="css" className="mt_m">
            {`// ❌ 파일 분리 전: styles.scss (3000줄)
// 모든 것이 섞여 있음

// ✅ 파일 분리 후:
_variables.scss    // 변수만 모음
_mixins.scss       // 믹스인만 모음
_buttons.scss      // 버튼 스타일만 모음
_cards.scss        // 카드 스타일만 모음
_layout.scss       // 레이아웃만 모음
// 각 파일이 명확한 역할을 가짐`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>어떤 파일에 무엇이 있는지 바로 알 수 있습니다</b>.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">유지보수성 향상</h3>
          <p className="mt_m">
            파일을 분리하면 <b>수정할 때 해당 파일만 열면 됩니다</b>.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">작업</li>
              <li className="cell content">단일 파일</li>
              <li className="cell content">파일 분리</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">버튼 색상 변경</p>
                <p className="cell content" data-title="단일 파일">
                  3000줄 파일에서 버튼 부분 찾기
                </p>
                <p className="cell content" data-title="파일 분리">
                  <i className="filename">_buttons.scss</i> 파일만 열기
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">새 변수 추가</p>
                <p className="cell content" data-title="단일 파일">
                  파일 상단에서 적절한 위치 찾기
                </p>
                <p className="cell content" data-title="파일 분리">
                  <i className="filename">_variables.scss</i>에 추가
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">믹스인 수정</p>
                <p className="cell content" data-title="단일 파일">
                  믹스인 섹션 찾기
                </p>
                <p className="cell content" data-title="파일 분리">
                  <i className="filename">_mixins.scss</i>에서 수정
                </p>
              </li>
            </ul>
          </div>
          <p className="mt_ms">
            파일을 분리하면 <b>수정 시간이 크게 단축</b>됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">협업 효율성</h3>
          <p className="mt_m">
            여러 명이 함께 작업할 때 <b>각자 다른 파일을 수정</b>할 수 있어
            충돌이 줄어듭니다.
          </p>
          <CodeBlock title="협업 효율성 예시" language="css" className="mt_m">
            {`// 파일 분리 후 협업
// 개발자 A: _buttons.scss 수정
// 개발자 B: _cards.scss 수정
// 개발자 C: _variables.scss 수정

// 각자 다른 파일을 수정하므로 충돌 없음
// 병렬 작업 가능`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>여러 명이 동시에 작업</b>할 수 있어 프로젝트 진행
            속도가 빨라집니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">재사용성 향상</h3>
          <p className="mt_m">
            파일을 분리하면 <b>필요한 파일만 가져와서 재사용</b>할 수 있습니다.
          </p>
          <CodeBlock title="재사용성 예시" language="css" className="mt_m">
            {`// 다른 프로젝트에서 버튼 스타일만 재사용
// _buttons.scss 파일만 복사하면 됨

// 또는 변수만 재사용
// _variables.scss 파일만 복사

// 불필요한 코드 없이 필요한 것만 가져올 수 있음`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">테스트와 디버깅 용이</h3>
          <p className="mt_m">
            파일을 분리하면 <b>특정 부분만 테스트하거나 디버깅</b>하기 쉽습니다.
          </p>
          <CodeBlock title="테스트 예시" language="css" className="mt_m">
            {`// 버튼 스타일에 문제가 있을 때
// _buttons.scss 파일만 확인하면 됨

// 변수에 문제가 있을 때
// _variables.scss 파일만 확인하면 됨

// 문제 범위를 빠르게 좁힐 수 있음`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">파일 분리 전후 비교</h2>
        <p className="mt_l">
          파일을 분리하기 전과 후를 <b>구체적으로 비교</b>해봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파일 분리 전</h3>
          <p className="mt_m">
            모든 스타일이 <b>하나의 파일에 있는 경우</b>입니다.
          </p>
          <CodeBlock title="파일 분리 전 구조" language="css" className="mt_m">
            {`// styles.scss (3000줄)
// ============================================
// 변수 (100줄)
// ============================================
$color-primary: #0a58ca;
$color-secondary: #6c757d;
// ... (100줄)

// ============================================
// 믹스인 (200줄)
// ============================================
@mixin button { }
@mixin card { }
// ... (200줄)

// ============================================
// 컴포넌트 (2000줄)
// ============================================
.button { }
.card { }
.nav { }
// ... (2000줄)

// ============================================
// 유틸리티 (700줄)
// ============================================
.mt-1 { }
.mt-2 { }
// ... (700줄)`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 되면 <b>파일이 너무 길어서</b> 작업하기 어렵습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파일 분리 후</h3>
          <p className="mt_m">
            관련 있는 코드끼리 <b>파일로 분리한 경우</b>입니다.
          </p>
          <CodeBlock
            title="_variables.scss (100줄)"
            language="css"
            className="mt_m"
          >
            {`$color-primary: #0a58ca;
$color-secondary: #6c757d;
// ...`}
          </CodeBlock>
          <CodeBlock
            title="_mixins.scss (200줄)"
            language="css"
            className="mt_ms"
          >
            {`@mixin button { }
@mixin card { }
// ...`}
          </CodeBlock>
          <CodeBlock
            title="_buttons.scss (300줄)"
            language="css"
            className="mt_ms"
          >
            {`.button { }
// ...`}
          </CodeBlock>
          <CodeBlock
            title="_cards.scss (400줄)"
            language="css"
            className="mt_ms"
          >
            {`.card { }
// ...`}
          </CodeBlock>
          <CodeBlock
            title="_utilities.scss (700줄)"
            language="css"
            className="mt_ms"
          >
            {`.mt-1 { }
.mt-2 { }
// ...`}
          </CodeBlock>
          <CodeBlock title="main.scss (10줄)" language="css" className="mt_ms">
            {`@use "variables";
@use "mixins";
@use "buttons";
@use "cards";
@use "utilities";`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>각 파일이 작고 명확한 역할</b>을 가지게 됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">작업 효율성 비교</h3>
          <p className="mt_m">
            파일 분리 전후의 <b>작업 효율성</b>을 비교해봅니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">작업</li>
              <li className="cell content">파일 분리 전</li>
              <li className="cell content">파일 분리 후</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">버튼 스타일 찾기</p>
                <p className="cell content" data-title="파일 분리 전">
                  3000줄 파일에서 검색 (30초)
                </p>
                <p className="cell content" data-title="파일 분리 후">
                  <i className="filename">_buttons.scss</i> 열기 (2초)
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">변수 추가</p>
                <p className="cell content" data-title="파일 분리 전">
                  파일 상단 찾기 (20초)
                </p>
                <p className="cell content" data-title="파일 분리 후">
                  <i className="filename">_variables.scss</i> 열기 (2초)
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">협업 충돌</p>
                <p className="cell content" data-title="파일 분리 전">
                  자주 발생
                </p>
                <p className="cell content" data-title="파일 분리 후">
                  거의 없음
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">코드 이해</p>
                <p className="cell content" data-title="파일 분리 전">
                  전체 구조 파악 어려움
                </p>
                <p className="cell content" data-title="파일 분리 후">
                  파일명으로 역할 파악 가능
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">파일 분리의 실제 효과</h2>
        <p className="mt_l">
          파일을 분리했을 때 <b>실제 프로젝트에서 얻을 수 있는 효과</b>를
          살펴봅니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">개발 속도 향상</dt>
          <dd>
            파일을 분리하면 <b>코드를 찾는 시간이 줄어</b> 개발 속도가
            향상됩니다.
          </dd>
          <dd>
            예를 들어, 버튼 스타일을 수정할 때 3000줄 파일에서 찾는 것보다{" "}
            <code className="t_blue">_buttons.scss</code> 파일을 여는 것이 훨씬
            빠릅니다.
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">버그 감소</dt>
          <dd>
            파일을 분리하면 <b>실수로 다른 코드를 수정할 위험이 줄어듭니다</b>.
          </dd>
          <dd>
            하나의 큰 파일에서는 실수로 다른 부분을 수정할 수 있지만, 작은
            파일에서는 <b>해당 파일의 코드만 보이므로</b> 실수 가능성이
            줄어듭니다.
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">온보딩 시간 단축</dt>
          <dd>
            <p>
              새로운 팀원이 프로젝트에 합류할 때{" "}
              <b>파일 구조만 보면 프로젝트를 빠르게 이해</b>할 수 있습니다.
            </p>
            <CodeBlock
              title="파일 구조로 이해"
              language="css"
              className="mt_ms"
            >
              {`// 파일 구조만 봐도 프로젝트 이해 가능
_variables.scss    // 변수 관리
_mixins.scss       // 믹스인 관리
_buttons.scss      // 버튼 컴포넌트
_cards.scss        // 카드 컴포넌트
_layout.scss       // 레이아웃

// 각 파일의 역할이 명확함`}
            </CodeBlock>
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">언제 파일을 분리해야 할까?</h2>
        <p className="mt_l">
          <b>언제 파일을 분리하는 것이 좋은지</b> 가이드라인을 제시합니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">파일 분리가 필요한 경우</dt>
          <dd>
            <b>파일이 500줄 이상</b>: 파일이 너무 길어서 작업하기 어려울 때
          </dd>
          <dd>
            <b>명확한 기능 구분</b>: 변수, 믹스인, 컴포넌트 등 기능이 명확히
            구분될 때
          </dd>
          <dd>
            <b>여러 명이 작업</b>: 여러 명이 동시에 작업할 때
          </dd>
          <dd>
            <b>재사용 필요</b>: 특정 부분을 다른 프로젝트에서 재사용할 때
          </dd>
          <dd>
            <b>유지보수 어려움</b>: 코드를 찾거나 수정하기 어려울 때
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">파일 분리가 불필요한 경우</dt>
          <dd>
            <b>작은 프로젝트</b>: 파일이 200줄 이하인 작은 프로젝트
          </dd>
          <dd>
            <b>단순한 구조</b>: 구조가 단순해서 분리할 필요가 없을 때
          </dd>
          <dd>
            <b>개인 프로젝트</b>: 혼자 작업하는 작은 프로젝트
          </dd>
        </dl>
        <p className="mt_s indent_small">
          하지만 <b>나중에 커질 가능성을 고려</b>하면 처음부터 분리하는 것도
          좋은 방법입니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          SCSS 파일을 분리하는 이유에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>단일 파일의 문제점</b>: 파일 크기 문제, 코드 찾기 어려움, 협업 시
            충돌, 재사용 어려움
          </li>
          <li>
            <b>파일 분리의 장점</b>: 코드 조직화, 유지보수성 향상, 협업 효율성,
            재사용성 향상, 테스트와 디버깅 용이
          </li>
          <li>
            <b>작업 효율성</b>: 파일 분리 후 작업 시간이 크게 단축
          </li>
          <li>
            <b>실제 효과</b>: 개발 속도 향상, 버그 감소, 온보딩 시간 단축
          </li>
          <li>
            <b>파일 분리 시기</b>: 파일이 500줄 이상, 명확한 기능 구분, 여러
            명이 작업할 때
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>_partial.scss 개념</b>을 자세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/09_scss_01.png"} alt="SCSS 파일 분리의 필요성" />
        <figcaption>SCSS 파일 분리의 필요성</figcaption>
      </figure>
    </>
  );
}

export default WhySeparatePage;
