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
  title: "색상, 폰트, 여백 변수 만들기",
  description:
    "SCSS에서 색상, 폰트, 여백 변수를 실제로 만드는 방법을 상세히 알아봅니다. 각 변수 타임 선언 방법, 실제 사용 예시, 변수를 활용한 스타일 작성 방법을 단계별로 설명합니다.",
  keyword: "scss 색상 변수, scss 폰트 변수, scss 여백 변수, scss 변수 만들기, scss 변수 선언, scss 변수 사용",
};

function CreatingVariablesPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          SCSS에서 <b>색상, 폰트, 여백 변수를 만드는 방법</b>을 실제 예시와 함께
          알아봅니다.
          <br />각 변수 타입별로 선언 방법과 사용법을 배우고, 변수를 활용하여
          일관된 스타일을 작성하는 방법을 익힙니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 색상 변수, 폰트 관련 변수(크기, 굵기, 줄간격), 여백
          변수를 만드는 방법과 실제 프로젝트에서 활용하는 예시를 상세히
          알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">색상 변수 만들기</h2>
        <p className="mt_l">
          색상은 프로젝트에서 <b>가장 자주 변경되는 값</b> 중 하나입니다.
          <br />
          색상 변수를 만들어 두면 브랜드 색상 변경이나 테마 변경 시 빠르게
          대응할 수 있고, <b>디자인 시스템 전체의 톤을 한 번에 조정</b>할 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 색상 변수</h3>
          <p className="mt_m">
            프로젝트에서 사용하는 주요 색상들을 변수로 정의합니다.
          </p>
          <CodeBlock
            title="기본 색상 변수 예시"
            language="css"
            className="mt_m"
          >
            {`// 메인 색상
$color-primary: #0a58ca;
$color-secondary: #6c757d;

// 상태 색상
$color-success: #28a745;
$color-danger: #dc3545;
$color-warning: #ffc107;
$color-info: #17a2b8;

// 중성 색상
$color-white: #ffffff;
$color-black: #000000;
$color-gray: #6c757d;
`}
          </CodeBlock>
          <p className="mt_ms">
            색상 변수는 <b>용도별로 그룹화</b>하여 관리하면 나중에 찾기
            쉽습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">색상 변수 사용 예시</h3>
          <p className="mt_m">정의한 색상 변수를 실제 스타일에 적용해봅니다.</p>
          <CodeBlock title="색상 변수 사용" language="css" className="mt_m">
            {`$color-primary: #0a58ca;
$color-success: #28a745;
$color-danger: #dc3545;
$color-white: #ffffff;

.button-primary {
  background: $color-primary;
  color: $color-white;
}

.button-success {
  background: $color-success;
  color: $color-white;
}

.button-danger {
  background: $color-danger;
  color: $color-white;
}

.link {
  color: $color-primary;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 작성하면 <b>색상을 변경할 때 변수 선언 부분만 수정</b>하면
            모든 버튼과 링크에 자동으로 반영됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">색상 변형 변수</h3>
          <p className="mt_m">
            같은 색상의 <b>밝기나 어두움을 조절한 변형</b>도 변수로 만들 수
            있습니다.
          </p>
          <CodeBlock
            title="색상 변형 변수 예시"
            language="css"
            className="mt_m"
          >
            {`// 기본 색상
$color-primary: #0a58ca;

// 변형 색상
$color-primary-light: #3d7dd8;
$color-primary-dark: #084298;
$color-primary-lighter: #6ba3e8;
$color-primary-darker: #063c86;
`}
          </CodeBlock>
          <p className="mt_ms">
            또는 SCSS의 내장 함수를 사용하여 자동으로 변형 색상을 만들 수도
            있습니다. (이에 대해서는{" "}
            <b className="t_blue">[연산과 함수 기초]</b> 섹션에서 자세히
            알아봅니다)
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">폰트 변수 만들기</h2>
        <p className="mt_l">
          폰트 크기, 굵기, 줄간격 등 <b>폰트 관련 값들을 변수로 관리</b>하면
          일관된 타이포그래피를 유지할 수 있습니다.
          <br />이 섹션에서는 제목·본문·보조 텍스트 등 역할에 따라 폰트 변수를
          어떻게 나누면 좋은지 예시와 함께 살펴봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">폰트 크기 변수</h3>
          <p className="mt_m">
            프로젝트에서 사용하는 폰트 크기들을 변수로 정의합니다.
          </p>
          <CodeBlock
            title="폰트 크기 변수 예시"
            language="css"
            className="mt_m"
          >
            {`// 기본 폰트 크기
$font-size-base: 16px;

// 작은 크기
$font-size-sm: 14px;
$font-size-xs: 12px;

// 큰 크기
$font-size-lg: 18px;
$font-size-xl: 20px;
$font-size-xxl: 24px;

// 제목 크기
$font-size-h1: 32px;
$font-size-h2: 28px;
$font-size-h3: 24px;
`}
          </CodeBlock>
          <p className="mt_ms">
            폰트 크기는{" "}
            <b>기본 크기를 기준으로 작은/큰 크기를 체계적으로 정의</b>하면
            일관성을 유지하기 쉽습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">폰트 굵기 변수</h3>
          <p className="mt_m">폰트 굵기도 변수로 관리할 수 있습니다.</p>
          <CodeBlock
            title="폰트 굵기 변수 예시"
            language="css"
            className="mt_m"
          >
            {`$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">줄간격(Line Height) 변수</h3>
          <p className="mt_m">
            줄간격도 변수로 관리하면 <b>일관된 가독성</b>을 유지할 수 있습니다.
          </p>
          <CodeBlock title="줄간격 변수 예시" language="css" className="mt_m">
            {`$line-height-tight: 1.2;
$line-height-normal: 1.5;
$line-height-relaxed: 1.8;
`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">폰트 변수 사용 예시</h3>
          <p className="mt_m">
            정의한 폰트 변수들을 실제 스타일에 적용해봅니다.
          </p>
          <CodeBlock title="폰트 변수 사용" language="css" className="mt_m">
            {`$font-size-base: 16px;
$font-size-lg: 18px;
$font-weight-bold: 700;
$line-height-normal: 1.5;

body {
  font-size: $font-size-base;
  line-height: $line-height-normal;
}

.heading {
  font-size: $font-size-lg;
  font-weight: $font-weight-bold;
}

.small-text {
  font-size: $font-size-sm;
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">여백 변수 만들기</h2>
        <p className="mt_l">
          여백(<code>margin</code>, <code>padding</code>) 값들을 변수로 관리하면{" "}
          <b>일관된 간격 시스템</b>을 구축할 수 있습니다.
          <br />
          여백이 정리되면 화면 전체의 리듬감이 안정되기 때문에, 디자인과 구현
          모두에서 <b>레이아웃 품질을 높이는 핵심 요소</b>가 됩니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 여백 변수</h3>
          <p className="mt_m">
            프로젝트에서 사용하는 여백 값들을 <b>크기별로 체계적으로 정의</b>
            합니다.
          </p>
          <CodeBlock title="여백 변수 예시" language="css" className="mt_m">
            {`// 작은 여백
$spacing-xs: 4px;
$spacing-sm: 8px;

// 기본 여백
$spacing-md: 16px;

// 큰 여백
$spacing-lg: 24px;
$spacing-xl: 32px;
$spacing-xxl: 48px;
`}
          </CodeBlock>
          <p className="mt_ms">
            여백 변수는 <b>일정한 배수 관계</b>로 정의하면 더 체계적입니다. 예를
            들어 <code>4px</code>, <code>8px</code>, <code>16px</code>,{" "}
            <code>32px</code>처럼 2배씩 증가하는 방식입니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">여백 변수 사용 예시</h3>
          <p className="mt_m">정의한 여백 변수를 실제 스타일에 적용해봅니다.</p>
          <CodeBlock title="여백 변수 사용" language="css" className="mt_m">
            {`$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;

.card {
  padding: $spacing-md;
  margin-bottom: $spacing-lg;
}

.button {
  padding: $spacing-sm $spacing-md;
  margin-right: $spacing-sm;
}

.section {
  margin-top: $spacing-lg;
  margin-bottom: $spacing-lg;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 작성하면 <b>여백 값이 일관되게 유지</b>되고, 나중에 간격
            시스템을 조정할 때도 변수만 수정하면 됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">컨테이너 너비 변수</h3>
          <p className="mt_m">
            레이아웃에서 사용하는 <b>컨테이너 최대 너비</b>도 변수로 관리할 수
            있습니다.
          </p>
          <CodeBlock
            title="컨테이너 너비 변수 예시"
            language="css"
            className="mt_m"
          >
            {`$container-sm: 540px;
$container-md: 720px;
$container-lg: 960px;
$container-xl: 1140px;

.container {
  max-width: $container-lg;
  margin: 0 auto;
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">변수를 파일로 분리하기</h2>
        <p className="mt_l">
          변수가 많아지면 <b>별도의 파일로 분리</b>하여 관리하는 것이 좋습니다.
          <br />
          파셜 파일을 사용하여 변수를 체계적으로 관리하는 방법을 알아봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">변수 파일 생성</h3>
          <p className="mt_m">변수만 모아둔 파셜 파일을 만듭니다.</p>
          <div className="mt_ml indent">
            <h4 className="ml_mn">_variables.scss</h4>
            <CodeBlock title="변수 파일 예시" language="css" className="mt_ms">
              {`// ============================================
// 색상 변수
// ============================================
$color-primary: #0a58ca;
$color-secondary: #6c757d;
$color-success: #28a745;
$color-danger: #dc3545;

// ============================================
// 폰트 변수
// ============================================
$font-size-base: 16px;
$font-size-sm: 14px;
$font-size-lg: 18px;
$font-weight-bold: 700;

// ============================================
// 여백 변수
// ============================================
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn" data-conlist-h4="true">
            변수 파일 불러오기
          </h3>
          <p className="mt_m">
            메인 SCSS 파일에서 변수 파일을 불러와 사용합니다.{" "}
            <code className="t_blue">@use</code>를 사용할 때는{" "}
            <b>네임스페이스를 사용하는 방법</b>과 <b>생략하는 방법</b> 두 가지가
            있습니다.
          </p>

          <div className="mt_l indent">
            <h4 className="ml_mn">방법 1. 네임스페이스 사용</h4>
            <p className="mt_s">
              네임스페이스(파일명)를 붙여서 변수를 사용하는 방법입니다.
            </p>
            <CodeBlock
              title="네임스페이스 사용"
              language="css"
              className="mt_ms"
            >
              {`// 변수 파일 불러오기
@use "variables";

// 변수 사용 (네임스페이스 필요)
.button {
  background: variables.$color-primary;
  padding: variables.$spacing-sm variables.$spacing-md;
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">방법 2. 네임스페이스 생략</h4>
            <p className="mt_s">
              <code className="t_blue">as *</code>를 사용하면 네임스페이스 없이
              변수를 사용할 수 있습니다.
            </p>
            <CodeBlock
              title="네임스페이스 생략"
              language="css"
              className="mt_ms"
            >
              {`// 변수 파일 불러오기 (네임스페이스 생략)
@use "variables" as *;

// 변수 사용 (네임스페이스 없이)
.button {
  background: $color-primary;
  padding: $spacing-sm $spacing-md;
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">두 방법의 장단점 비교</h4>
            <div className="table_summary value_150 mt_ms">
              <ul className="lst_hd">
                <li className="cell value">구분</li>
                <li className="cell content">네임스페이스 사용</li>
                <li className="cell content">네임스페이스 생략</li>
              </ul>
              <ul className="lst_bd">
                <li>
                  <p className="cell value t_darkgreen">
                    <strong>장점</strong>
                  </p>
                  <p className="cell content" data-title="네임스페이스 사용">
                    • 변수 출처가 명확함
                    <br />
                    • 여러 파일에서 같은 이름의 변수를 사용해도 충돌 없음
                    <br />• 코드 가독성과 유지보수성 향상
                  </p>
                  <p className="cell content" data-title="네임스페이스 생략">
                    • 코드 작성이 간결함
                    <br />
                    • 변수 사용이 직관적이고 빠름
                    <br />• 기존 Sass 문법과 유사한 느낌
                  </p>
                </li>
                <li>
                  <p className="cell value t_darkgreen">
                    <strong>단점</strong>
                  </p>
                  <p className="cell content" data-title="네임스페이스 사용">
                    • 변수명이 길어짐 (예: variables.$color-primary)
                    <br />• 코드 작성 시 타이핑이 많아짐
                  </p>
                  <p className="cell content" data-title="네임스페이스 생략">
                    • 변수 출처 파악이 어려움
                    <br />
                    • 여러 파일에서 같은 이름의 변수가 있으면 충돌 가능
                    <br />• 대규모 프로젝트에서 혼란 가능성 증가
                  </p>
                </li>
                <li>
                  <p className="cell value t_darkgreen">
                    <strong>추천 상황</strong>
                  </p>
                  <p className="cell content" data-title="네임스페이스 사용">
                    • 여러 팀원이 협업하는 프로젝트
                    <br />
                    • 대규모 프로젝트
                    <br />• 명확한 변수 출처 추적이 필요한 경우
                  </p>
                  <p className="cell content" data-title="네임스페이스 생략">
                    • 소규모 프로젝트
                    <br />
                    • 단독 작업
                    <br />• 빠른 프로토타이핑
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">변수 조합 사용 예시</h2>
        <p className="mt_l">
          여러 변수를 <b>조합하여 사용</b>하는 실제 예시를 살펴봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">버튼 컴포넌트 예시</h3>
          <p className="mt_m">
            색상, 여백, 폰트 변수를 조합하여 버튼 스타일을 작성합니다.
          </p>
          <CodeBlock title="변수 조합 예시" language="css" className="mt_m">
            {`$color-primary: #0a58ca;
$color-white: #ffffff;
$spacing-sm: 8px;
$spacing-md: 16px;
$font-size-base: 16px;
$font-weight-bold: 700;

.button {
  // 색상 변수
  background: $color-primary;
  color: $color-white;

  // 여백 변수
  padding: $spacing-sm $spacing-md;

  // 폰트 변수
  font-size: $font-size-base;
  font-weight: $font-weight-bold;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 작성하면 <b>모든 값이 변수로 관리</b>되어, 디자인 변경 시
            빠르게 대응할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">카드 컴포넌트 예시</h3>
          <p className="mt_m">
            카드 컴포넌트에서도 여러 변수를 조합하여 사용합니다.
          </p>
          <CodeBlock
            title="카드 변수 조합 예시"
            language="css"
            className="mt_m"
          >
            {`$spacing-md: 16px;
$spacing-lg: 24px;
$color-white: #ffffff;
$color-gray: #e9ecef;
$font-size-lg: 18px;
$font-weight-bold: 700;

.card {
  padding: $spacing-md;
  margin-bottom: $spacing-lg;
  background: $color-white;
  border: 1px solid $color-gray;

  .card__title {
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
    margin-bottom: $spacing-md;
  }
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          색상, 폰트, 여백 변수를 만드는 방법에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>색상 변수</b>: 메인 색상, 상태 색상, 중성 색상을 변수로 정의하여
            일관성 유지
          </li>
          <li>
            <b>폰트 변수</b>: 폰트 크기, 굵기, 줄간격을 변수로 관리하여
            타이포그래피 일관성 유지
          </li>
          <li>
            <b>여백 변수</b>: 간격 시스템을 변수로 구축하여 일관된 여백 유지
          </li>
          <li>
            <b>파일 분리</b>: 변수가 많아지면 파셜 파일로 분리하여 체계적으로
            관리
          </li>
          <li>
            <b>변수 조합</b>: 여러 변수를 조합하여 컴포넌트 스타일 작성
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>변수 네이밍 규칙</b>에 대해 자세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img
          src={IMG.SCSS + "/04_scss_02.png"}
          alt="색상, 폰트, 여백 변수를 만드는 방법"
        />
        <figcaption>색상, 폰트, 여백 변수를 만드는 방법</figcaption>
      </figure>
    </>
  );
}

export default CreatingVariablesPage;
