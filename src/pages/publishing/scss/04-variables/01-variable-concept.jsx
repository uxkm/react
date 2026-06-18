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
  title: "변수의 개념과 필요성",
  description:
    "SCSS 변수의 기본 개념과 왜 필요한지 상세히 알아봅니다. 변수가 무엇인지, CSS와 비교했을 때 변수를 사용하면 어떤 장점이 있는지, 실제 사용 예시를 통해 변수의 필요성을 설명합니다.",
  keyword: "scss 변수, scss variable, scss $, 변수 개념, scss 변수 필요성, scss 변수 장점",
};

function VariableConceptPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>변수(Variable)</b>는 SCSS에서{" "}
          <b>값을 저장해 두고 여러 곳에서 재사용</b>할 수 있게 해주는
          기능입니다.
          <br />
          색상, 폰트 크기, 여백 값 등을 변수로 관리하면,{" "}
          <b>한 곳만 수정해도 전체 스타일에 반영</b>되어 유지보수가 훨씬
          편해집니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 변수의 기본 개념, CSS에서 변수를 사용하지 않을 때의
          문제점, SCSS 변수를 사용하면 얻을 수 있는 장점을 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">변수(Variable)란?</h2>
        <p className="mt_l">
          변수는{" "}
          <b>
            값에 이름을 붙여 저장해 두고, 필요할 때마다 그 이름으로 불러 쓸 수
            있게 해주는 기능
          </b>
          입니다.
          <br />
          프로그래밍 언어에서 일반적으로 사용하는 개념이며, SCSS에서도 동일하게
          사용할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">변수의 기본 개념</h3>
          <p className="mt_m">
            SCSS에서 변수는 <code className="t_blue">$</code> 기호로 시작하며,
            다음과 같이 선언하고 사용합니다.
          </p>
          <CodeBlock title="변수 선언과 사용" language="css" className="mt_m">
            {`// 변수 선언
$primary-color: #0a58ca;
$font-size-base: 16px;
$spacing: 8px;

// 변수 사용
.button {
  background: $primary-color;
  font-size: $font-size-base;
  padding: $spacing;
}`}
          </CodeBlock>
          <p className="mt_ms">
            변수를 사용하면 <b>값을 한 곳에서 정의하고 여러 곳에서 재사용</b>할
            수 있습니다.
            <br />
            나중에 값을 변경해야 할 때도 <b>변수 선언 부분만 수정</b>하면 모든
            곳에 자동으로 반영됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">변수와 일반 값의 차이</h3>
          <p className="mt_m">
            변수를 사용하지 않으면 매번 값을 직접 입력해야 하지만, 변수를
            사용하면 <b>의미 있는 이름으로 값에 접근</b>할 수 있습니다.
          </p>
          <CodeBlock title="변수 없이 작성" language="css" className="mt_m">
            {`.button {
  background: #0a58ca;
  color: #fff;
}

.link {
  color: #0a58ca;
}

.card {
  border: 1px solid #0a58ca;
}`}
          </CodeBlock>
          <CodeBlock title="변수 사용" language="css" className="mt_m">
            {`$primary-color: #0a58ca;

.button {
  background: $primary-color;
  color: #fff;
}

.link {
  color: $primary-color;
}

.card {
  border: 1px solid $primary-color;
}`}
          </CodeBlock>
          <p className="mt_ms">
            변수를 사용하면 <code className="t_blue">#0a58ca</code>가 무엇을
            의미하는지 바로 알 수 있고, <b>색상을 변경할 때도 한 곳만 수정</b>
            하면 됩니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">변수가 필요한 이유</h2>
        <p className="mt_l">
          CSS에서 변수를 사용하지 않을 때 발생하는 <b>문제점</b>과, SCSS 변수를
          사용하면 해결되는 <b>장점</b>을 살펴봅니다.
          <br />
          “변수를 쓰면 좋다”는 말이 추상적으로 느껴진다면, 이 섹션의 사례들을
          통해 <b>유지보수와 협업에서 어떤 차이가 생기는지</b>를 구체적으로
          느껴볼 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">값의 반복과 수정의 어려움</h3>
          <p className="mt_m">
            CSS에서는 같은 값을 여러 곳에서 반복해서 사용해야 할 때,{" "}
            <b>각각의 위치를 찾아서 일일이 수정</b>해야 합니다.
          </p>
          <CodeBlock
            title="CSS에서 값 반복 사용"
            language="css"
            className="mt_m"
          >
            {`.button-primary {
  background: #0a58ca;
}

.link {
  color: #0a58ca;
}

.card {
  border: 1px solid #0a58ca;
}

.header {
  background: #0a58ca;
}

.footer {
  background: #0a58ca;
}`}
          </CodeBlock>
          <p className="mt_ms">
            만약 브랜드 색상이 <code className="t_blue">#0a58ca</code>에서{" "}
            <code className="t_blue">#0066cc</code>로 변경된다면,{" "}
            <b>5곳을 모두 찾아서 수정</b>해야 합니다.
            <br />
            실수로 하나라도 놓치면 일관성이 깨질 수 있습니다.
          </p>
          <CodeBlock
            title="SCSS 변수 사용 (한 곳만 수정)"
            language="css"
            className="mt_ms"
          >
            {`// 변수 한 곳만 수정하면 모든 곳에 반영
$primary-color: #0066cc;

.button-primary {
  background: $primary-color;
}

.link {
  color: $primary-color;
}

.card {
  border: 1px solid $primary-color;
}

.header {
  background: $primary-color;
}

.footer {
  background: $primary-color;
}`}
          </CodeBlock>
          <p className="mt_ms">
            SCSS 변수를 사용하면 <b>변수 선언 부분 한 곳만 수정</b>하면 모든
            곳에 자동으로 반영됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">값의 의미 파악 어려움</h3>
          <p className="mt_m">
            CSS에서 <code className="t_blue">#0a58ca</code>나{" "}
            <code className="t_blue">16px</code> 같은 값만 봐서는{" "}
            <b>무엇을 의미하는지 바로 알기 어렵습니다</b>.
          </p>
          <CodeBlock
            title="의미 파악 어려운 예시"
            language="css"
            className="mt_m"
          >
            {`.button {
  padding: 8px 16px;  // 이 값이 무엇을 의미하는지?
  font-size: 16px;    // 기본 크기? 큰 크기?
  color: #0a58ca;    // 메인 색상? 보조 색상?
}`}
          </CodeBlock>
          <CodeBlock title="변수로 의미 명확화" language="css" className="mt_m">
            {`$spacing-sm: 8px;
$spacing-md: 16px;
$font-size-base: 16px;
$primary-color: #0a58ca;

.button {
  padding: $spacing-sm $spacing-md;
  font-size: $font-size-base;
  color: $primary-color;
}`}
          </CodeBlock>
          <p className="mt_ms">
            변수를 사용하면 <b>값의 의미가 변수명으로 명확하게 드러나</b> 코드를
            이해하기 쉬워집니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">일관성 유지의 어려움</h3>
          <p className="mt_m">
            CSS에서는 같은 목적의 값이라도 <b>약간씩 다른 값이 사용</b>될 수
            있습니다.
            <br />
            예를 들어 &quot;작은 간격&quot;을 의미하는데{" "}
            <code className="t_blue">8px</code>,{" "}
            <code className="t_blue">7px</code>,{" "}
            <code className="t_blue">9px</code> 등이 섞여 사용될 수 있습니다.
          </p>
          <CodeBlock title="일관성 없는 예시" language="css" className="mt_m">
            {`.card {
  margin-bottom: 8px;
}

.button {
  margin-right: 7px;  // 8px가 아닌 7px
}

.list-item {
  padding: 9px;  // 또 다른 값
}`}
          </CodeBlock>
          <CodeBlock title="변수로 일관성 유지" language="css" className="mt_m">
            {`$spacing-sm: 8px;

.card {
  margin-bottom: $spacing-sm;
}

.button {
  margin-right: $spacing-sm;
}

.list-item {
  padding: $spacing-sm;
}`}
          </CodeBlock>
          <p className="mt_ms">
            변수를 사용하면 <b>같은 목적의 값은 항상 동일한 변수를 사용</b>
            하므로 일관성이 유지됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">디자인 시스템 구축</h3>
          <p className="mt_m">
            변수를 사용하면 <b>디자인 토큰(Design Token)을 체계적으로 관리</b>할
            수 있습니다.
            <br />
            색상, 폰트, 여백 등을 변수로 정의해 두면,{" "}
            <b>전체 디자인 시스템의 일관성을 유지</b>할 수 있습니다.
          </p>
          <CodeBlock title="디자인 토큰 예시" language="css" className="mt_m">
            {`// 색상 토큰
$color-primary: #0a58ca;
$color-secondary: #6c757d;
$color-success: #28a745;
$color-danger: #dc3545;

// 폰트 토큰
$font-size-sm: 14px;
$font-size-base: 16px;
$font-size-lg: 18px;

// 여백 토큰
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 토큰을 정의해 두면,{" "}
            <b>디자이너와 개발자가 같은 기준으로 작업</b>할 수 있고, 디자인 변경
            시에도 빠르게 대응할 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">변수 사용의 효과</h2>
        <p className="mt_l">
          변수를 사용했을 때 얻을 수 있는 <b>긍정적인 효과</b>를 한 가지 예시로
          알아봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">브랜드 색상 변경 시나리오</h3>
          <p className="mt_m">
            프로젝트 중간에 브랜드 색상이 변경되는 상황을 가정해봅니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">방식</li>
              <li className="cell content">수정해야 할 곳</li>
              <li className="cell content">소요 시간</li>
              <li className="cell content">실수 가능성</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">CSS (변수 없음)</p>
                <p className="cell content" data-title="수정해야 할 곳">
                  모든 파일에서 #0a58ca 검색 후 수정 (수십~수백 곳)
                </p>
                <p className="cell content" data-title="소요 시간">
                  30분~수시간
                </p>
                <p className="cell content" data-title="실수 가능성">
                  높음 (일부 누락 가능)
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">SCSS (변수 사용)</p>
                <p className="cell content" data-title="수정해야 할 곳">
                  변수 선언 부분 1곳만 수정
                </p>
                <p className="cell content" data-title="소요 시간">
                  10초 이내
                </p>
                <p className="cell content" data-title="실수 가능성">
                  거의 없음
                </p>
              </li>
            </ul>
          </div>
          <p className="mt_ms">
            변수를 사용하면 <b>수정 시간이 크게 단축</b>되고,{" "}
            <b>실수할 가능성도 거의 없습니다</b>.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">팀 협업 시 효과</h3>
          <p className="mt_m">
            여러 명이 함께 작업할 때 변수를 사용하면 다음과 같은 효과가
            있습니다:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>일관성 보장</b>: 모든 팀원이 같은 변수를 사용하므로 일관된
              스타일 유지
            </li>
            <li>
              <b>의사소통 향상</b>: &quot;primary-color를 사용하세요&quot;처럼
              명확한 지시 가능
            </li>
            <li>
              <b>온보딩 시간 단축</b>: 새 팀원도 변수 목록만 보면 프로젝트의
              디자인 시스템을 빠르게 이해
            </li>
            <li>
              <b>코드 리뷰 효율성</b>: 변수 사용 여부로 코드 품질을 빠르게 판단
              가능
            </li>
          </ul>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">변수의 기본 문법</h2>
        <p className="mt_l">
          SCSS 변수를 선언하고 사용하는 <b>기본 문법</b>을 알아봅니다.
          <br />이 섹션에서 문법을 한 번 정리해 두면, 이후 다른 챕터에서 나오는
          예제 코드도 자연스럽게 따라갈 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">변수 선언</h3>
          <p className="mt_m">
            변수는 <code className="t_blue">$</code> 기호로 시작하며,{" "}
            <code className="t_blue">:</code> 뒤에 값을 지정합니다.
          </p>
          <CodeBlock title="변수 선언 문법" language="css" className="mt_m">
            {`// 기본 문법
$변수명: 값;

// 예시
$primary-color: #0a58ca;
$font-size-base: 16px;
$spacing: 8px;
$border-radius: 4px;
`}
          </CodeBlock>
          <p className="mt_ms">
            변수명은 <b>영문자, 숫자, 하이픈(-), 언더스코어(_)</b>를 사용할 수
            있으며, <b>숫자로 시작할 수 없습니다</b>.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">변수 사용</h3>
          <p className="mt_m">
            변수는 선언된 이후 어디서든 사용할 수 있습니다.
          </p>
          <CodeBlock title="변수 사용 예시" language="css" className="mt_m">
            {`$primary-color: #0a58ca;
$font-size-base: 16px;

.button {
  background: $primary-color;
  font-size: $font-size-base;
}

.link {
  color: $primary-color;
}

.card {
  border: 1px solid $primary-color;
}`}
          </CodeBlock>
          <p className="mt_ms">
            변수는 <b>선언된 위치보다 아래에서만 사용</b>할 수 있습니다. 변수를
            사용하기 전에 먼저 선언해야 합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">변수 재할당</h3>
          <p className="mt_m">
            SCSS에서는 <b>같은 변수명으로 다시 값을 할당</b>할 수 있습니다.
            <br />
            나중에 할당한 값이 이전 값을 덮어씁니다.
          </p>
          <CodeBlock title="변수 재할당 예시" language="css" className="mt_m">
            {`$primary-color: #0a58ca;

.button {
  background: $primary-color;  // #0a58ca 사용
}

$primary-color: #0066cc;  // 값 재할당

.link {
  color: $primary-color;  // #0066cc 사용
}`}
          </CodeBlock>
          <p className="mt_ms">
            변수 재할당은 <b>조건부로 값을 변경</b>하거나,{" "}
            <b>특정 범위에서만 다른 값을 사용</b>할 때 유용합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          SCSS 변수의 개념과 필요성에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>변수의 개념</b>: 값에 이름을 붙여 저장하고 재사용할 수 있는 기능
          </li>
          <li>
            <b>변수가 필요한 이유</b>: 값의 반복 수정 어려움 해결, 의미 파악
            용이, 일관성 유지, 디자인 시스템 구축
          </li>
          <li>
            <b>실제 효과</b>: 수정 시간 단축, 실수 방지, 팀 협업 효율성 향상
          </li>
          <li>
            <b>기본 문법</b>: $변수명: 값; 형태로 선언, 선언 후 사용, 재할당
            가능
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>색상, 폰트, 여백 변수를 실제로 만드는 방법</b>을
          단계별로 자세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/04_scss_01.png"} alt="변수(Variable)란?" />
        <figcaption>변수(Variable)란?</figcaption>
      </figure>
    </>
  );
}

export default VariableConceptPage;
