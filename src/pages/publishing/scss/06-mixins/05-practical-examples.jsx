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
  title: "믹스인 실무 예제",
  description:
    "실무에서 자주 사용하는 SCSS 믹스인 예제를 상세히 알아봅니다. Flexbox 레이아웃, clearfix, 반응형 미디어 쿼리, 트랜지션, 트랜스폼, 그리드 레이아웃 등 실용적인 믹스인 예제를 제공합니다.",
  keyword:
    "scss flex 믹스인, scss clearfix, scss 반응형 믹스인, scss 실무 믹스인, scss 미디어 쿼리 믹스인",
};

function PracticalExamplesPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          실무에서는 <b>Flexbox 레이아웃, clearfix, 반응형 미디어 쿼리</b> 등을
          자주 사용합니다.
          <br />
          이런 패턴들을 <b>믹스인으로 만들어 두면</b> 프로젝트 전반에서 일관되게
          사용할 수 있고, 코드 작성 효율도 크게 향상됩니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 실무에서 자주 사용하는 믹스인 예제들을 카테고리별로
          나누어 상세히 살펴보고, 각 믹스인의 사용법과 활용 예시를 제공합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Flexbox 레이아웃 믹스인</h2>
        <p className="mt_l">
          Flexbox 레이아웃은 <b>가장 자주 사용되는 패턴</b> 중 하나입니다.
          <br />
          자주 사용하는 Flexbox 조합을 믹스인으로 만들어두면,
          헤더·내비게이션·카드 리스트 등 다양한 컴포넌트에서{" "}
          <b>정렬 규칙을 일관되게 재사용</b>할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">flex-center - 중앙 정렬</h3>
          <p className="mt_m">
            요소를 <b>수평·수직 중앙 정렬</b>하는 믹스인입니다.
          </p>
          <CodeBlock title="flex-center 믹스인" language="css" className="mt_m">
            {`@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
  height: 100vh;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">flex-between - 양쪽 정렬</h3>
          <p className="mt_m">
            요소를 <b>양쪽 끝에 배치</b>하는 믹스인입니다.
          </p>
          <CodeBlock
            title="flex-between 믹스인"
            language="css"
            className="mt_m"
          >
            {`@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header {
  @include flex-between;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">flex-column - 세로 방향</h3>
          <p className="mt_m">
            Flexbox를 <b>세로 방향</b>으로 사용하는 믹스인입니다.
          </p>
          <CodeBlock title="flex-column 믹스인" language="css" className="mt_m">
            {`@mixin flex-column {
  display: flex;
  flex-direction: column;
}

.sidebar {
  @include flex-column;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파라미터가 있는 Flexbox 믹스인</h3>
          <p className="mt_m">
            더 유연하게 사용할 수 있도록 <b>파라미터를 받는 Flexbox 믹스인</b>
            입니다.
          </p>
          <CodeBlock
            title="파라미터가 있는 Flexbox 믹스인"
            language="css"
            className="mt_m"
          >
            {`@mixin flex($direction: row, $justify: flex-start, $align: stretch, $gap: 0) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
  gap: $gap;
}

.container {
  @include flex(row, space-between, center, 16px);
}

.vertical-center {
  @include flex($justify: center, $align: center);
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Clearfix 믹스인</h2>
        <p className="mt_l">
          Float를 사용한 레이아웃에서 <b>부모 요소의 높이 문제를 해결</b>하는
          clearfix 믹스인입니다.
          <br />
          레거시 코드나 기존 프로젝트를 다룰 때 여전히 만나게 되는 패턴이므로,
          한 번 만들어 두면 <b>예상치 못한 레이아웃 깨짐</b>을 빠르게 잡는 데
          도움이 됩니다.
        </p>
        <CodeBlock title="clearfix 믹스인" language="css" className="mt_m">
          {`@mixin clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

.container {
  @include clearfix;
}`}
        </CodeBlock>
        <p className="mt_m">
          이 믹스인을 사용하면{" "}
          <b>Float 레이아웃에서 부모 요소가 자식 요소의 높이를 인식</b>하게
          됩니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">반응형 미디어 쿼리 믹스인</h2>
        <p className="mt_l">
          반응형 디자인을 위한 <b>미디어 쿼리 믹스인</b>입니다.
          <br />
          브레이크포인트를 변수·믹스인으로 관리하면, 새로운 기기 해상도가
          추가되더라도 <b>여러 곳의 미디어 쿼리를 하나의 규칙으로</b> 조정할 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 반응형 믹스인</h3>
          <p className="mt_m">
            브레이크포인트를 파라미터로 받는 <b>기본 반응형 믹스인</b>입니다.
          </p>
          <CodeBlock title="반응형 믹스인" language="css" className="mt_m">
            {`@mixin responsive($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

.container {
  width: 100%;

  @include responsive(768px) {
    max-width: 720px;
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">사전 정의된 브레이크포인트</h3>
          <p className="mt_m">
            자주 사용하는 브레이크포인트를 <b>사전에 정의</b>해두면 더
            편리합니다.
          </p>
          <CodeBlock
            title="사전 정의된 브레이크포인트"
            language="css"
            className="mt_m"
          >
            {`$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;

@mixin tablet {
  @media (min-width: $breakpoint-md) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: $breakpoint-lg) {
    @content;
  }
}

.container {
  width: 100%;

  @include tablet {
    max-width: 720px;
  }

  @include desktop {
    max-width: 1140px;
  }
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">트랜지션 믹스인</h2>
        <p className="mt_l">
          CSS 트랜지션의 <b>속성과 지속 시간을 파라미터로 받는 믹스인</b>입니다.
          <br />
          버튼, 링크, 카드 등 여러 컴포넌트에서 같은 트랜지션 규칙을 공유하면,
          인터랙션의 속도와 느낌이 <b>서비스 전반에서 일관되게 유지</b>됩니다.
        </p>

        <CodeBlock title="트랜지션 믹스인" language="css" className="mt_m">
          {`@mixin transition($property: all, $duration: 0.3s, $timing: ease) {
  transition: $property $duration $timing;
}

.button {
  @include transition(background, 0.3s);
}

.link {
  @include transition(color, 0.2s, ease-in-out);
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">트랜스폼 믹스인</h2>
        <p className="mt_l">
          변형 효과를 위한 <b>트랜스폼 믹스인</b>입니다.
          <br />
          요소를 가운데 맞추거나, 특정 방향으로 이동·회전시키는 코드를
          믹스인으로 묶어 두면, <b>레이아웃 실험과 인터랙션 구현</b>을 빠르게
          반복할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">중앙 정렬 트랜스폼</h3>
          <p className="mt_m">
            요소를 <b>절대 위치로 중앙 정렬</b>하는 믹스인입니다.
          </p>
          <CodeBlock title="중앙 정렬 트랜스폼" language="css" className="mt_m">
            {`@mixin absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal {
  @include absolute-center;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">회전 트랜스폼</h3>
          <p className="mt_m">
            요소를 <b>지정한 각도만큼 회전</b>시키는 믹스인입니다.
          </p>
          <CodeBlock title="회전 트랜스폼" language="css" className="mt_m">
            {`@mixin rotate($degrees: 45deg) {
  transform: rotate($degrees);
}

.icon {
  @include rotate(90deg);
}

.arrow {
  @include rotate(180deg);
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">이동 트랜스폼</h3>
          <p className="mt_m">
            요소를 <b>X축, Y축 방향으로 이동</b>시키는 믹스인입니다.
          </p>
          <CodeBlock title="이동 트랜스폼" language="css" className="mt_m">
            {`@mixin translate($x: 0, $y: 0) {
  transform: translate($x, $y);
}

.tooltip {
  @include translate(10px, -5px);
}

.slide-in {
  @include translate(100%, 0);
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">확대/축소 트랜스폼</h3>
          <p className="mt_m">
            요소를 <b>지정한 비율로 확대하거나 축소</b>하는 믹스인입니다.
          </p>
          <CodeBlock title="확대/축소 트랜스폼" language="css" className="mt_m">
            {`@mixin scale($ratio: 1.1) {
  transform: scale($ratio);
}

.button {
  @include scale(1);

  &:hover {
    @include scale(1.05);
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">복합 트랜스폼</h3>
          <p className="mt_m">
            여러 트랜스폼을 <b>조합하여 사용</b>하는 믹스인입니다.
          </p>
          <CodeBlock title="복합 트랜스폼" language="css" className="mt_m">
            {`@mixin transform($translate: 0, $rotate: 0, $scale: 1) {
  transform: translate($translate) rotate($rotate) scale($scale);
}

.card {
  @include transform(10px 20px, 5deg, 1.02);
}

.animated-icon {
  @include transform(0, 45deg, 1.1);
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">그리드 레이아웃 믹스인</h2>
        <p className="mt_l">
          CSS Grid를 사용한 <b>그리드 레이아웃 믹스인</b>입니다.
          <br />
          복잡한 레이아웃을 간단하게 구성할 수 있고, 반응형 디자인에서도
          유연하게 대응할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 그리드</h3>
          <p className="mt_m">
            컬럼 개수를 파라미터로 받는 <b>그리드 믹스인</b>입니다.
          </p>
          <CodeBlock title="그리드 믹스인" language="css" className="mt_m">
            {`@mixin grid($columns: 12, $gap: 16px) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: $gap;
}

.container {
  @include grid(12, 24px);
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">반응형 그리드</h3>
          <p className="mt_m">
            화면 크기에 따라 <b>컬럼 개수가 자동으로 조정</b>되는 그리드
            믹스인입니다.
          </p>
          <CodeBlock title="반응형 그리드" language="css" className="mt_m">
            {`@mixin responsive-grid($min-width: 250px, $gap: 16px) {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax($min-width, 1fr));
  gap: $gap;
}

.card-list {
  @include responsive-grid(280px, 20px);
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">그리드 템플릿 영역</h3>
          <p className="mt_m">
            템플릿 영역을 지정하여 <b>복잡한 레이아웃을 구성</b>하는 그리드
            믹스인입니다.
          </p>
          <CodeBlock title="그리드 템플릿 영역" language="css" className="mt_m">
            {`@mixin grid-template($areas) {
  display: grid;
  grid-template-areas: $areas;
}

.layout {
  @include grid-template(
    "header header header"
    "sidebar main main"
    "footer footer footer"
  );
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">그리드 아이템 배치</h3>
          <p className="mt_m">
            그리드 아이템의 <b>시작 위치와 끝 위치를 지정</b>하는 믹스인입니다.
          </p>
          <CodeBlock title="그리드 아이템 배치" language="css" className="mt_m">
            {`@mixin grid-item($row-start: auto, $row-end: auto, $col-start: auto, $col-end: auto) {
  grid-row: $row-start / $row-end;
  grid-column: $col-start / $col-end;
}

.featured {
  @include grid-item(1, 3, 1, 3);  // 2행 2열 차지
}

.wide {
  @include grid-item(auto, auto, 1, -1);  // 전체 너비
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">그리드 정렬</h3>
          <p className="mt_m">
            그리드 컨테이너의 <b>정렬 방식을 지정</b>하는 믹스인입니다.
          </p>
          <CodeBlock title="그리드 정렬" language="css" className="mt_m">
            {`@mixin grid-align($justify: stretch, $align: stretch) {
  justify-items: $justify;
  align-items: $align;
}

.container {
  @include grid(3, 16px);
  @include grid-align(center, center);
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">텍스트 말줄임표 믹스인</h2>
        <p className="mt_l">
          긴 텍스트를 <b>말줄임표로 처리</b>하는 믹스인입니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">한 줄 말줄임표</h3>
          <p className="mt_m">
            텍스트를 <b>한 줄로 제한하고 말줄임표</b>를 표시합니다.
          </p>
          <CodeBlock
            title="한 줄 말줄임표 믹스인"
            language="css"
            className="mt_m"
          >
            {`@mixin text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.title {
  @include text-ellipsis;
  max-width: 200px;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">여러 줄 말줄임표</h3>
          <p className="mt_m">
            텍스트를 <b>여러 줄로 제한하고 말줄임표</b>를 표시합니다.
          </p>
          <CodeBlock
            title="여러 줄 말줄임표 믹스인"
            language="css"
            className="mt_m"
          >
            {`@mixin text-ellipsis_multi($line_number, $line-height) {
  max-height: $line-height * $line_number;
  line-height: $line-height;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $line_number;
  -webkit-box-orient: vertical;
}

.description {
  @include text-ellipsis_multi($line_number: 2, $line-height: 20px);
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          실무에서 자주 사용하는 믹스인 예제에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>Flexbox 레이아웃</b>: flex-center, flex-between, flex-column 등
            자주 사용하는 패턴
          </li>
          <li>
            <b>Clearfix</b>: Float 레이아웃에서 부모 요소 높이 문제 해결
          </li>
          <li>
            <b>반응형 미디어 쿼리</b>: 브레이크포인트를 파라미터로 받는 반응형
            믹스인
          </li>
          <li>
            <b>트랜지션</b>: 애니메이션 효과를 위한 트랜지션 믹스인
          </li>
          <li>
            <b>트랜스폼</b>: 중앙 정렬 등 변형 효과를 위한 믹스인
          </li>
          <li>
            <b>그리드 레이아웃</b>: CSS Grid를 사용한 레이아웃 믹스인
          </li>
          <li>
            <b>텍스트 말줄임표</b>: 한 줄/여러 줄 말줄임표 처리
          </li>
        </ul>
        <p className="mt_m">
          다음 섹션에서는 <b>상속과 확장(@extend)</b>에 대해 자세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img
          src={IMG.SCSS + "/06_scss_05.png"}
          alt="실무에서 자주 사용하는 믹스인 예제"
        />
        <figcaption>실무에서 자주 사용하는 믹스인 예제</figcaption>
      </figure>
    </>
  );
}

export default PracticalExamplesPage;
