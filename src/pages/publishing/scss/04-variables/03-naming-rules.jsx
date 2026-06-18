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
  title: "변수 네이밍 규칙",
  description:
    "SCSS 변수 네이밍 규칙을 상세히 알아봅니다. 좋은 변수명의 특징, 네이밍 컨벤션, 실제 프로젝트에서 사용하는 네이밍 패턴, 그리고 팀 프로젝트에서 일관된 네이밍을 유지하는 방법을 설명합니다.",
  keyword: "scss 변수 네이밍, scss 변수명, scss 네이밍 규칙, scss 변수 컨벤션, scss 변수명 규칙",
};

function NamingRulesPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>변수 네이밍 규칙</b>은 코드의 가독성과 유지보수성에 큰 영향을
          미칩니다.
          <br />
          좋은 변수명은 <b>값의 의미를 명확하게 전달</b>하고, 나중에 코드를 읽을
          때도 쉽게 이해할 수 있게 해줍니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 좋은 변수명의 특징, 다양한 네이밍 컨벤션, 실제
          프로젝트에서 사용하는 네이밍 패턴, 그리고 팀 프로젝트에서 일관된
          네이밍을 유지하는 방법을 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">좋은 변수명의 특징</h2>
        <p className="mt_l">
          좋은 변수명은 <b>값의 의미를 명확하게 전달</b>하고,{" "}
          <b>코드를 읽는 사람이 쉽게 이해</b>할 수 있어야 합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">의미가 명확한 이름</h3>
          <p className="mt_m">
            변수명은 <b>무엇을 의미하는지 바로 알 수 있어야</b> 합니다.
          </p>
          <CodeBlock title="❌ 나쁜 예시" language="css" className="mt_m">
            {`$c1: #0a58ca;             // ❌ 무엇을 의미하는지 알 수 없음
$s1: 16px;                // ❌ 크기? 여백? 불명확
$val: 8px;                // ❌ 너무 일반적인 이름
`}
          </CodeBlock>
          <CodeBlock title="✅ 좋은 예시" language="css" className="mt_m">
            {`$color-primary: #0a58ca;  // ✅ 메인 색상임을 명확히 알 수 있음
$font-size-base: 16px;    // ✅ 기본 폰트 크기임을 알 수 있음
$spacing-sm: 8px;         // ✅ 작은 여백임을 알 수 있음
`}
          </CodeBlock>
          <p className="mt_ms">
            의미 있는 이름을 사용하면{" "}
            <b>코드를 읽는 사람이 변수의 용도를 바로 이해</b>할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">일관된 네이밍 패턴</h3>
          <p className="mt_m">
            프로젝트 전체에서 <b>일관된 네이밍 패턴을 사용</b>하면 변수를 찾고
            이해하기 쉬워집니다.
          </p>
          <CodeBlock title="일관된 네이밍 예시" language="css" className="mt_m">
            {`// 색상: color-로 시작
$color-primary: #0a58ca;
$color-secondary: #6c757d;

// 폰트 크기: font-size-로 시작
$font-size-base: 16px;
$font-size-lg: 18px;

// 여백: spacing-로 시작
$spacing-sm: 8px;
$spacing-md: 16px;
`}
          </CodeBlock>
          <p className="mt_ms">
            일관된 접두사를 사용하면{" "}
            <b>에디터의 자동 완성에서도 쉽게 찾을 수 있고</b>, 변수의 종류를
            빠르게 파악할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">적절한 길이</h3>
          <p className="mt_m">
            변수명은 <b>너무 짧지도 길지도 않게</b> 적절한 길이로 작성합니다.
          </p>
          <CodeBlock title="변수명 길이 비교" language="css" className="mt_m">
            {`// ❌ 너무 짧음 (의미 불명확)
$c: #0a58ca;
$s: 16px;

// ✅ 적절한 길이
$color-primary: #0a58ca;
$font-size-base: 16px;

// ❌ 너무 김 (불필요하게 장황함)
$the-primary-brand-color-that-we-use: #0a58ca;
`}
          </CodeBlock>
          <p className="mt_ms">
            일반적으로 <b>2-4단어 조합</b>이 적절하며, 의미를 전달하는 데 필요한
            만큼만 길게 작성합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">네이밍 컨벤션</h2>
        <p className="mt_l">
          프로젝트에서 사용할 수 있는 <b>다양한 네이밍 컨벤션</b>을 알아봅니다.
          <br />
          <b>camelCase</b>, <b>kebab-case</b>, <b>snake_case</b>처럼 자주
          등장하는 패턴을 비교해 보고,{" "}
          <b>SCSS와 가장 잘 맞는 방식이 무엇인지</b>를 정리합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">카멜 케이스 (camelCase)</h3>
          <p className="mt_m">
            첫 단어는 소문자로 시작하고, 이후 단어의 첫 글자는 대문자로 작성하는
            방식입니다.
          </p>
          <CodeBlock title="카멜 케이스 예시" language="css" className="mt_m">
            {`$primaryColor: #0a58ca;
$fontSizeBase: 16px;
$spacingSmall: 8px;
`}
          </CodeBlock>
          <p className="mt_ms">
            카멜 케이스는 JavaScript와 호환성이 좋지만, SCSS에서는{" "}
            <b className="t_blue">하이픈을 사용하는 케밥 케이스가 더 일반적</b>
            입니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i>케밥 케이스 (kebab-case)</i> <i className="t_blue">추천</i>
          </h3>
          <p className="mt_m">
            모든 단어를 소문자로 작성하고, 단어 사이를 하이픈(<code>-</code>
            )으로 구분하는 방식입니다.
          </p>
          <CodeBlock title="케밥 케이스 예시" language="css" className="mt_m">
            {`$primary-color: #0a58ca;
$font-size-base: 16px;
$spacing-small: 8px;
`}
          </CodeBlock>
          <p className="mt_ms">
            케밥 케이스는 <b>SCSS에서 가장 널리 사용되는 방식</b>이며, CSS
            클래스명과도 일관성을 유지할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">스네이크 케이스 (snake_case)</h3>
          <p className="mt_m">
            모든 단어를 소문자로 작성하고, 단어 사이를 언더스코어(<code>_</code>
            )로 구분하는 방식입니다.
          </p>
          <CodeBlock
            title="스네이크 케이스 예시"
            language="css"
            className="mt_m"
          >
            {`$primary_color: #0a58ca;
$font_size_base: 16px;
$spacing_small: 8px;
`}
          </CodeBlock>
          <p className="mt_ms">
            스네이크 케이스는 Python이나 Ruby 개발자에게 친숙하지만, SCSS에서는{" "}
            <b className="t_blue">하이픈을 사용하는 케밥 케이스가 더 일반적</b>
            입니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">변수 타입별 네이밍 패턴</h2>
        <p className="mt_l">
          변수의 타입(색상, 폰트, 여백 등)에 따라 <b>일관된 네이밍 패턴</b>을
          사용하면 더 체계적으로 관리할 수 있습니다.
          <br />이 섹션에서는 색상·폰트·여백 등 자주 쓰이는 타입별로 추천
          접두사와 예시를 정리해, <b>팀에서 바로 가져다 쓸 수 있는 규칙</b>을
          제안합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">색상 변수 네이밍</h3>
          <p className="mt_m">
            색상 변수는 <code className="t_blue">color-</code> 접두사를
            사용하고, 용도나 이름을 붙입니다.
          </p>
          <CodeBlock
            title="색상 변수 네이밍 예시"
            language="css"
            className="mt_m"
          >
            {`// 용도별 네이밍
$color-primary: #0a58ca;
$color-secondary: #6c757d;
$color-success: #28a745;
$color-danger: #dc3545;

// 색상 이름 네이밍
$color-blue: #0a58ca;
$color-gray: #6c757d;
$color-green: #28a745;

// 변형 색상
$color-primary-light: #3d7dd8;
$color-primary-dark: #084298;
`}
          </CodeBlock>
          <p className="mt_ms">
            용도별 네이밍(<code className="t_blue">primary</code>,{" "}
            <code className="t_blue">secondary</code>)은{" "}
            <b>디자인 시스템과 잘 맞아</b> 실무에서 많이 사용됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">폰트 변수 네이밍</h3>
          <p className="mt_m">
            폰트 관련 변수는 <code className="t_blue">font-</code> 접두사를
            사용합니다.
          </p>
          <CodeBlock
            title="폰트 변수 네이밍 예시"
            language="css"
            className="mt_m"
          >
            {`// 폰트 크기
$font-size-base: 16px;
$font-size-sm: 14px;
$font-size-lg: 18px;

// 폰트 굵기
$font-weight-normal: 400;
$font-weight-bold: 700;

// 줄간격
$line-height-normal: 1.5;
$line-height-tight: 1.2;
`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">여백 변수 네이밍</h3>
          <p className="mt_m">
            여백 변수는 <code className="t_blue">spacing-</code> 접두사를
            사용하고, 크기를 나타내는 접미사를 붙입니다.
          </p>
          <CodeBlock
            title="여백 변수 네이밍 예시"
            language="css"
            className="mt_m"
          >
            {`$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;
`}
          </CodeBlock>
          <p className="mt_ms">
            크기 접미사(
            <code className="t_blue">xs</code>,{" "}
            <code className="t_blue">sm</code>,{" "}
            <code className="t_blue">md</code>,{" "}
            <code className="t_blue">lg</code>,{" "}
            <code className="t_blue">xl</code>)는 <b>일관되게 사용</b>하면
            이해하기 쉽습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기타 변수 네이밍</h3>
          <p className="mt_m">
            다른 타입의 변수들도 일관된 패턴으로 네이밍합니다.
          </p>
          <CodeBlock
            title="기타 변수 네이밍 예시"
            language="css"
            className="mt_m"
          >
            {`// 테두리
$border-radius-sm: 4px;
$border-radius-md: 8px;
$border-width: 1px;

// 그림자
$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);

// 전환 시간
$transition-fast: 0.15s;
$transition-normal: 0.3s;
`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실무 네이밍 패턴 예시</h2>
        <p className="mt_l">
          실제 프로젝트에서 사용하는 <b>네이밍 패턴</b>을 예시로 살펴봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Bootstrap 스타일 네이밍</h3>
          <p className="mt_m">Bootstrap과 유사한 네이밍 패턴입니다.</p>
          <CodeBlock
            title="Bootstrap 스타일 네이밍"
            language="css"
            className="mt_m"
          >
            {`// 색상
$blue: #0a58ca;
$indigo: #6610f2;
$purple: #6f42c1;

// 그레이스케일
$gray-100: #f8f9fa;
$gray-200: #e9ecef;
$gray-500: #adb5bd;
$gray-900: #212529;

// 여백
$spacer: 1rem;
$spacer-sm: $spacer * 0.5;
$spacer-lg: $spacer * 1.5;
`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">의미 중심 네이밍</h3>
          <p className="mt_m">용도나 의미를 중심으로 네이밍하는 패턴입니다.</p>
          <CodeBlock title="의미 중심 네이밍" language="css" className="mt_m">
            {`// 브랜드 색상
$brand-primary: #0a58ca;
$brand-secondary: #6c757d;

// 텍스트 색상
$text-primary: #212529;
$text-secondary: #6c757d;
$text-muted: #adb5bd;

// 배경 색상
$bg-primary: #ffffff;
$bg-secondary: #f8f9fa;
`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">크기 기반 네이밍</h3>
          <p className="mt_m">크기를 중심으로 네이밍하는 패턴입니다.</p>
          <CodeBlock title="크기 기반 네이밍" language="css" className="mt_m">
            {`// 작은 크기
$size-xs: 4px;
$size-sm: 8px;

// 기본 크기
$size-md: 16px;

// 큰 크기
$size-lg: 24px;
$size-xl: 32px;
`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">네이밍 시 주의사항</h2>

        <article className="mt_xl indent">
          <h3 className="ml_mn">예약어 사용 금지</h3>
          <p className="mt_m">
            SCSS의 <b className="t_blue">예약어</b>
            <sup className="sup">1)</sup>는 변수명으로 사용할 수 없습니다.
          </p>
          <p className="mt_ms ex_box">
            <span className="t_blue">
              1) <b>예약어</b>란?
            </span>
            <br />
            <b>SCSS(또는 CSS) 문법에서 이미 특정한 의미로 사용</b>되고 있어{" "}
            <mark>
              변수명이나 일반 식별자로 사용할 수 없거나, 사용 시 주의가 필요한
              단어
            </mark>
            를 말합니다.
          </p>
          <CodeBlock title="예약어 예시" language="css" className="mt_m">
            {`// 사용 불가능한 예약어
$if: #0a58ca;     // ❌
$for: 16px;       // ❌
$each: 8px;       // ❌
$while: #fff;     // ❌
$return: 1.5;     // ❌
`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">숫자로 시작 금지</h3>
          <p className="mt_m">
            변수명은 <b>숫자로 시작할 수 없습니다</b>.
          </p>
          <CodeBlock title="잘못된 예시" language="css" className="mt_m">
            {`$1st-color: #0a58ca;    // ❌ 숫자로 시작
$16px-size: 16px;       // ❌ 숫자로 시작
`}
          </CodeBlock>
          <CodeBlock title="올바른 예시" language="css" className="mt_m">
            {`$color-first: #0a58ca;  // ✅
$font-size-16: 16px;    // ✅ 숫자는 중간이나 끝에 가능
`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">일관성 유지</h3>
          <p className="mt_m">
            프로젝트 전체에서 <b>일관된 네이밍 규칙을 유지</b>해야 합니다.
          </p>
          <CodeBlock
            title="❌ 일관성 없는 예시"
            language="css"
            className="mt_m"
          >
            {`// ❌ 일관성 없음
$primaryColor: #0a58ca;      // 카멜 케이스
$font-size-base: 16px;       // 케밥 케이스
$spacing_small: 8px;         // 스네이크 케이스
`}
          </CodeBlock>
          <CodeBlock title="✅ 일관된 예시" language="css" className="mt_m">
            {`// ✅ 모두 케밥 케이스로 통일
$primary-color: #0a58ca;
$font-size-base: 16px;
$spacing-small: 8px;
`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">약어 사용 주의</h3>
          <p className="mt_m">
            약어는 <b>팀에서 공통으로 이해하는 것만 사용</b>하고, 모호한 약어는
            피하는 것이 좋습니다.
          </p>
          <CodeBlock title="약어 사용 예시" language="css" className="mt_m">
            {`// ❌ 모호한 약어
$bg-clr: #0a58ca;    // bg-clr이 무엇인지 불명확

// ✅ 명확한 약어
$bg-color: #0a58ca;  // background-color의 약어임을 알 수 있음
`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">팀 프로젝트에서의 네이밍 규칙</h2>
        <p className="mt_l">
          여러 명이 함께 작업할 때 <b>일관된 네이밍을 유지</b>하는 방법을
          알아봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">네이밍 규칙 문서화</h3>
          <p className="mt_m">
            프로젝트 시작 시 <b>네이밍 규칙을 문서로 정리</b>하고 모든 팀원이
            공유합니다.
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>컨벤션 선택</b>: 케밥 케이스, 카멜 케이스 등 어떤 방식을
              사용할지 결정
            </li>
            <li>
              <b>접두사 규칙</b>: 색상은 <code className="t_blue">color-</code>,
              폰트는 <code className="t_blue">font-</code> 등 접두사 규칙 정리
            </li>
            <li>
              <b>크기 표기</b>: <code className="t_blue">xs</code>,{" "}
              <code className="t_blue">sm</code>,{" "}
              <code className="t_blue">md</code> 등 크기 표기법 통일
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">변수 목록 관리</h3>
          <p className="mt_m">
            프로젝트에서 사용하는 모든 변수를{" "}
            <b>한 파일에 모아두고 주석으로 설명</b>을 추가합니다.
          </p>
          <CodeBlock title="변수 목록 예시" language="css" className="mt_m">
            {`// ============================================
// 색상 변수
// ============================================
// 메인 브랜드 색상, 버튼, 링크 등에 사용
$color-primary: #0a58ca;

// 보조 색상, 덜 중요한 요소에 사용
$color-secondary: #6c757d;

// ============================================
// 폰트 변수
// ============================================
// 기본 폰트 크기, body 텍스트에 사용
$font-size-base: 16px;
`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 정리해 두면{" "}
            <b>새로운 팀원도 빠르게 프로젝트의 디자인 시스템을 이해</b>할 수
            있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          SCSS 변수 네이밍 규칙에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>좋은 변수명의 특징</b>: 의미가 명확하고, 일관된 패턴을 따르며,
            적절한 길이
          </li>
          <li>
            <b>네이밍 컨벤션</b>: 케밥 케이스(kebab-case)가 SCSS에서 가장 일반적
          </li>
          <li>
            <b>타입별 네이밍</b>: 색상은 <code>color-</code>, 폰트는{" "}
            <code>font-</code>, 여백은 <code>spacing-</code> 접두사 사용
          </li>
          <li>
            <b>주의사항</b>: 예약어 사용 금지, 숫자로 시작 금지, 일관성 유지,
            약어 사용 주의
          </li>
          <li>
            <b>팀 프로젝트</b>: 네이밍 규칙 문서화, 변수 목록 관리로 일관성 유지
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>실무에서 자주 사용하는 변수 구성 예시</b>를
          살펴봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/04_scss_03.png"} alt="변수 네이밍 규칙" />
        <figcaption>변수 네이밍 규칙</figcaption>
      </figure>
    </>
  );
}

export default NamingRulesPage;
