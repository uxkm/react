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
  title: "중첩(Nesting) 문법 이해하기",
  description:
    "SCSS의 중첩(Nesting) 문법을 상세히 알아봅니다. 선택자를 중첩하여 HTML 구조와 유사하게 스타일을 작성하는 방법, 중첩의 장점과 주의사항, 실제 사용 예시를 단계별로 설명합니다.",
  keyword: "scss 중첩, scss nesting, scss 선택자 중첩, scss 문법, scss 기본 문법",
};

function NestingPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>중첩(Nesting)</b>은 SCSS의 핵심 기능 중 하나로,{" "}
          <b>선택자를 HTML 구조처럼 안쪽으로 들여쓰기</b>하여 작성할 수 있게
          해줍니다.
          <br />
          중첩을 사용하면 코드의 가독성이 높아지고, 어떤 요소 안에 어떤 스타일이
          적용되는지 한눈에 파악할 수 있습니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 SCSS 중첩 문법의 기본 개념부터 실제 사용 예시, 중첩의
          장점과 주의사항, 그리고 깊은 중첩을 피하는 방법까지 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">중첩(Nesting)이란?</h2>
        <p className="mt_l">
          중첩(Nesting)은 <b>선택자를 HTML 구조와 비슷하게 안쪽으로 들여쓰기</b>
          하여 작성하는 SCSS 문법입니다.
          <br />
          CSS에서는 각 선택자를 별도로 작성해야 하지만, SCSS에서는{" "}
          <b>부모 선택자 안에 자식 선택자를 중첩</b>하여 작성할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">CSS와 SCSS 비교</h3>
          <p className="mt_m">
            같은 스타일을 CSS와 SCSS로 작성했을 때의 차이를 비교해봅니다.
          </p>
          <div className="mt_l indent">
            <h4 className="ml_mn">CSS 방식 (중첩 없음)</h4>
            <p className="mt_ms">
              <code className="t_blue">.card</code> 선택자를 반복해서 사용하고
              있어, 선택자 이름이 변경될 경우{" "}
              <b>여러 줄에 걸쳐 수정해야 하는 불편함</b>이 있으며, 반복 사용으로
              인해 코드의 가독성도 떨어집니다.
            </p>
            <CodeBlock
              title="CSS 방식 (중첩 없음)"
              language="css"
              className="mt_ms"
            >
              {`.card {
  padding: 16px;
}
.card .card__title {
  font-size: 18px;
  margin-bottom: 8px;
}
.card .card__body {
  margin-top: 8px;
}
.card .card__link {
  color: #0a58ca;
}
.card .card__link:hover {
  color: #084298;
}`}
            </CodeBlock>
          </div>
          <div className="mt_l indent">
            <h4 className="ml_mn">SCSS 방식 (중첩 사용)</h4>
            <p className="mt_ms">
              SCSS 중첩을 사용하면 <b>HTML 구조와 유사한 형태</b>로 스타일을
              작성할 수 있어, <b>어떤 요소가 어떤 부모 안에 있는지</b> 한눈에
              파악할 수 있습니다.
              <br />
              또한 <code className="t_blue">.card</code> 선택자를 반복해서 쓰지
              않아도 되므로 <b>코드가 더 간결</b>해집니다.
            </p>
            <CodeBlock
              title="SCSS 방식 (중첩 사용)"
              language="css"
              className="mt_ms"
            >
              {`.card {
  padding: 16px;

  .card__title {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .card__body {
    margin-top: 8px;
  }

  .card__link {
    color: #0a58ca;
    &:hover {
      color: #084298;
    }
  }
}`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">중첩의 기본 구조</h3>
          <p className="mt_m">
            중첩은 <b>부모 선택자 안에 자식 선택자를 들여쓰기</b>하여
            작성합니다.
            <br />
            들여쓰기는 보통 2칸(스페이스) 또는 1탭을 사용하며, 프로젝트에서
            일관되게 유지하는 것이 중요합니다.
          </p>
          <CodeBlock title="중첩 기본 구조" language="css" className="mt_m">
            {`// 부모 선택자
.parent {
  // 부모의 스타일
  padding: 16px;

  // 자식 선택자 (한 단계 들여쓰기)
  .child {
    // 자식의 스타일
    margin-top: 8px;

    // 손자 선택자 (두 단계 들여쓰기)
    .grandchild {
      font-size: 14px;
    }
  }
}`}
          </CodeBlock>
          <p className="mt_m">위 코드는 컴파일되면 다음과 같이 변환됩니다:</p>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.parent {
  padding: 16px;
}
.parent .child {
  margin-top: 8px;
}
.parent .child .grandchild {
  font-size: 14px;
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">중첩 사용 예시</h2>
        <p className="mt_l">
          실제 프로젝트에서 자주 사용하는 중첩 패턴을 예시로 살펴봅니다.
          <br />
          카드, 네비게이션, 미디어 쿼리처럼 현업에서 정말 많이 마주치는 사례를
          중심으로, <b>어디까지 중첩이 유용하고 어디서부터 과한지</b>를
          감각적으로 익혀볼 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">카드 컴포넌트 중첩</h3>
          <p className="mt_m">
            카드 컴포넌트의 제목, 본문, 링크를 중첩으로 작성하는 예시입니다.
          </p>
          <div className="mt_ml indent">
            <h4 className="ml_mn">HTML 마크업</h4>
            <CodeBlock title="카드 마크업" language="html" className="mt_ms">
              {`<!-- HTML 마크업 -->
<article class="card">
	<h3 class="card__title">카드 제목</h3>
	<div class="card__body">카드 본문 내용</div>
	<a href="#" class="card__link">더보기</a>
</article>`}
            </CodeBlock>
          </div>
          <div className="mt_ml indent">
            <h4 className="ml_mn">SCSS 중첩 코드</h4>
            <CodeBlock
              title="카드 스타일 (중첩)"
              language="css"
              className="mt_ms"
            >
              {`.card {
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;

  .card__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .card__body {
    margin-top: 8px;
    line-height: 1.6;
  }

  .card__link {
    color: #0a58ca;
    text-decoration: none;
    &:hover {
      color: #084298;
    }
  }
}`}
            </CodeBlock>
          </div>
          <p className="mt_ms">
            중첩을 사용하면{" "}
            <b>카드 컴포넌트의 모든 스타일이 하나의 블록 안에 모여</b> 있어,
            구조를 파악하기 쉽고 수정도 편리합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">네비게이션 메뉴 중첩</h3>
          <p className="mt_m">
            네비게이션 메뉴의 다단계 구조를 중첩으로 표현하는 예시입니다.
          </p>
          <CodeBlock
            title="네비게이션 스타일 (중첩)"
            language="css"
            className="mt_m"
          >
            {`.nav {
  display: flex;
  list-style: none;

  .nav__item {
    margin-right: 16px;

    .nav__link {
      color: #333;
      text-decoration: none;
      &:hover {
        color: #0a58ca;
      }
    }

    // 서브메뉴
    .nav__submenu {
      display: none;
      position: absolute;

      .nav__submenu-item {
        padding: 8px 16px;
      }
    }
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            다단계 메뉴 구조도 중첩을 사용하면 <b>계층 관계를 명확하게 표현</b>
            할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">미디어 쿼리 중첩</h3>
          <p className="mt_m">
            SCSS에서는 <b>미디어 쿼리도 선택자 안에 중첩</b>하여 작성할 수
            있습니다.
          </p>
          <CodeBlock title="미디어 쿼리 중첩" language="css" className="mt_m">
            {`.container {
  width: 100%;
  padding: 16px;

  @media (min-width: 768px) {
    max-width: 720px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    max-width: 960px;
  }
}`}
          </CodeBlock>
          <p className="mt_m">
            미디어 쿼리를 중첩하면{" "}
            <b>해당 선택자의 반응형 스타일을 한 곳에 모아</b> 관리할 수 있어
            유지보수가 편리합니다.
          </p>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.container {
  width: 100%;
  padding: 16px;
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">중첩의 장점</h2>

        <article className="mt_xl indent">
          <h3 className="ml_mn">코드 가독성 및 재사용성 향상</h3>
          <p className="mt_m">
            중첩을 사용하면 <b>HTML 구조와 유사한 형태</b>로 스타일을 작성할 수
            있어, 어떤 요소가 어떤 부모 안에 있는지 한눈에 파악할 수 있습니다.
            <br />
            특히 복잡한 컴포넌트의 경우, 중첩 없이는 부모 선택자를 반복해서 써야
            하지만, 중첩을 사용하면 <b>구조가 명확하게 드러나</b> 코드를
            이해하기 쉬워집니다.
          </p>
          <p className="mt_s">
            또한, <b>컴포넌트 단위로 코드를 모듈화</b>할 수 있어, 같은 구조의
            컴포넌트를 만들 때 코드를 재사용하기 쉬워집니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">스타일 영향 범위 제한</h3>
          <p className="mt_m">
            중첩을 사용하면{" "}
            <b>스타일의 영향 범위를 특정 컴포넌트 안으로 제한</b>할 수 있습니다.
          </p>
          <CodeBlock
            title="영향 범위 제한 예시"
            language="css"
            className="mt_m"
          >
            {`.card {
  .card__title {
    font-size: 18px;
  }
}

// 다른 곳의 .title에는 영향 없음
.article .title {
  font-size: 24px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">.card .card__title</code>의 스타일은{" "}
            <b>카드 컴포넌트 안에서만 적용</b>되므로, 다른 곳의{" "}
            <code className="t_blue">.title</code>에 영향을 주지 않습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">중첩 사용 시 주의사항</h2>
        <p className="mt_l">
          중첩은 강력한 기능이지만, <b>과도하게 사용하면 오히려 문제</b>가 될 수
          있습니다.
          <br />
          다음 주의사항을 지키면 효율적으로 중첩을 활용할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">깊은 중첩 피하기</h3>
          <p className="mt_m">
            중첩은 <b>3단계 이상 깊게 하지 않는 것</b>을 권장합니다.
            <br />
            너무 깊은 중첩은 가독성을 해치고, 컴파일된 CSS 선택자가 불필요하게
            길어질 수 있습니다.
          </p>
          <CodeBlock
            title="나쁜 예시 (너무 깊은 중첩)"
            language="css"
            className="mt_ms"
          >
            {`.page {
  .section {
    .article {
      .card {
        .card__title {
          font-size: 18px;
        }
      }
    }
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            위 코드는 컴파일되면{" "}
            <code className="t_blue">
              .page .section .article .card .card__title
            </code>
            처럼 <b>매우 긴 선택자</b>가 됩니다.
            <br />
            이렇게 긴 선택자는 성능에도 영향을 줄 수 있고, 나중에 수정하기도
            어렵습니다.
          </p>
          <CodeBlock
            title="좋은 예시 (적절한 중첩)"
            language="css"
            className="mt_ms"
          >
            {`.card {
  padding: 16px;

  .card__title {
    font-size: 18px;
  }

  .card__body {
    margin-top: 8px;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            컴포넌트 단위로 중첩을 제한하면{" "}
            <b>코드가 더 명확하고 관리하기 쉬워집니다</b>.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">불필요한 중첩 피하기</h3>
          <p className="mt_m">
            모든 선택자를 중첩할 필요는 없습니다.
            <br />
            <b>독립적인 스타일은 중첩 없이</b> 작성하는 것이 더 명확할 수
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
            {`.button--primary {
  background: #0a58ca;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">.button--primary</code>는{" "}
            <b>수정자(Modifier) 클래스</b>이므로, 중첩 없이 독립적으로 작성하는
            것이 더 명확합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">성능 고려사항</h3>
          <p className="mt_m">
            너무 깊거나 복잡한 중첩은{" "}
            <b>컴파일된 CSS 선택자가 길어져 성능에 영향을</b> 줄 수 있습니다.
            <br />
            일반적으로 선택자는 <b>3-4단계를 넘지 않는 것</b>을 권장합니다.
          </p>
          <CodeBlock
            title="성능에 좋지 않은 예시"
            language="css"
            className="mt_m"
          >
            {`// 컴파일되면 매우 긴 선택자가 됨
.page .section .article .card .card__title .card__title-text {
  font-size: 18px;
}`}
          </CodeBlock>
          <CodeBlock title="더 효율적인 방법" language="css" className="mt_m">
            {`.card__title-text {
  font-size: 18px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            BEM 방법론을 사용하면 <b>클래스명 자체가 의미를 담고 있어</b> 긴
            선택자 체인 없이도 스타일을 명확하게 구분할 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">중첩과 BEM 방법론</h2>
        <p className="mt_l">
          중첩은 <b>BEM(Block Element Modifier) 방법론</b>과 함께 사용할 때 특히
          효과적입니다.
        </p>
        <p>
          BEM 방법론에서는 블록(Block), 요소(Element), 수정자(Modifier)를 명확히
          구분합니다. 중첩을 사용하면 <b>BEM 구조를 코드로도 명확하게 표현</b>할
          수 있습니다.
        </p>

        <CodeBlock title="BEM + 중첩 예시" language="css" className="mt_m">
          {`// Block
.card {
  padding: 16px;

  // Element
  &__title {
    font-size: 18px;
  }

  &__body {
    margin-top: 8px;
  }

  // Modifier
  &--featured {
    border: 2px solid #0a58ca;
  }
}`}
        </CodeBlock>
        <p className="mt_ms">
          <code className="t_blue">&amp;</code> 기호(부모 선택자 참조)를
          사용하면 <b>BEM 네이밍을 더 간결하게</b> 작성할 수 있습니다.
          <br />
          <b className="t_blue">BEM 방법론</b>에 대해서는 다음 페이지
          <b className="t_blue">{"[부모 선택자 &의 역할과 사용법]"}</b>에서
          자세히 알아봅니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          SCSS 중첩(Nesting) 문법에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>중첩의 개념</b>: 선택자를 HTML 구조처럼 안쪽으로 들여쓰기하여
            작성하는 문법
          </li>
          <li>
            <b>중첩의 장점</b>: 코드 가독성 향상, 스타일 영향 범위 제한, 코드
            재사용성 향상
          </li>
          <li>
            <b>사용 예시</b>: 카드 컴포넌트, 네비게이션 메뉴, 미디어 쿼리 등
            다양한 상황에서 활용
          </li>
          <li>
            <b>주의사항</b>: 깊은 중첩 피하기(3단계 이하), 불필요한 중첩 피하기,
            성능 고려
          </li>
          <li>
            <b>BEM과의 조합</b>: BEM 방법론과 함께 사용하면 더 효과적
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>부모 선택자 참조 기호(&amp;)의 역할과 사용법</b>
          을 자세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/03_scss_01.png"} alt="SCSS 중첩" />
        <figcaption>SCSS 중첩</figcaption>
      </figure>
    </>
  );
}

export default NestingPage;
