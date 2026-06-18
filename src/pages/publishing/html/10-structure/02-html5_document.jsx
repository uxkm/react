import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "html5_document",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
};

const PAGE_DATA = {
  title: "HTML5에서의 문서 구조",
  description:
    "HTML5는 W3C와 WHATWG가 공동으로 개발한 최신 HTML 표준으로, 2014년에 공식 권고안으로 채택되었으며 HTML5는 기존 HTML4의 구조적 한계를 극복하고 웹 문서를 보다 의미 중심(시맨틱)으로 표현할 수 있도록 설계되었습니다. 이 페이지에서는 HTML5 기본 구조, 아웃라인 방식, HTML5 구조의 장점에 대해 설명합니다.",
  keyword: "Markup, HTML, HTML5 tag, elements, document, 문서 구조",
};

function Html5DocumentPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          HTML5는 <b>W3C와 WHATWG가 공동으로 개발한 최신 HTML 표준</b>으로,{" "}
          <b>2014년에 공식 권고안으로 채택</b>되었습니다.
          <br />
          HTML5는 기존 <b>HTML4의 구조적 한계를 극복</b>하고, 웹 문서를 보다{" "}
          <b>의미 중심(시맨틱) 으로 표현할 수 있도록 설계</b>되었습니다. 새로운
          시맨틱 태그 도입, 멀티미디어 태그 지원, 폼 기능 향상, 자바스크립트 API
          내장 등을 통해 <b>현대 웹 개발의 중심</b>이 되고 있습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">HTML5 문서 선언</h2>
        <p className="mt_ml">
          HTML5에서는 복잡한 DTD(문서 유형 정의)가 사라지고,{" "}
          <b>매우 간단한 형태의 문서 선언만으로 HTML5 문서임을 명시</b>할 수
          있습니다.
        </p>
        <CodeBlock title="HTML5 문서 선언" className="mt_m" language="html">
          {`<!DOCTYPE html>`}
        </CodeBlock>
        <p className="mt_m">
          <b>이 선언만으로 브라우저는 해당 문서를 HTML5 문법으로 해석</b>하며,
          문서의 호환성과 일관성을 높이기 위해 항상 명시하는 것이 좋습니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 시맨틱 요소
        </h2>
        <p className="mt_ml">
          HTML5에서는 문서 구조를 명확하게 표현할 수 있는{" "}
          <b>다양한 시맨틱 태그를 제공</b>합니다.
        </p>
        <div className="table_summary value_200 mt_m">
          <ul className="lst_hd">
            <li className="cell value">요소</li>
            <li className="cell content">의미 및 용도</li>
          </ul>
          <ul className="lst_bd">
            <li>
              <p className="cell value">
                <code>&lt;header&gt;</code>
              </p>
              <p className="cell content">
                문서나 섹션의 머리말, 보통 제목, 로고, 설명 포함
              </p>
            </li>
            <li>
              <p className="cell value">
                <code>&lt;nav&gt;</code>
              </p>
              <p className="cell content">내비게이션 링크 그룹, 사이트 메뉴</p>
            </li>
            <li>
              <p className="cell value">
                <code>&lt;main&gt;</code>
              </p>
              <p className="cell content">
                주요 콘텐츠 영역, 문서 내 하나만 존재 가능
              </p>
            </li>
            <li>
              <p className="cell value">
                <code>&lt;section&gt;</code>
              </p>
              <p className="cell content">
                주제별 논리적 그룹화, 보통 제목 포함
              </p>
            </li>
            <li>
              <p className="cell value">
                <code>&lt;article&gt;</code>
              </p>
              <p className="cell content">
                독립적인 콘텐츠 블록 (게시글, 뉴스, 리뷰 등)
              </p>
            </li>
            <li>
              <p className="cell value">
                <code>&lt;aside&gt;</code>
              </p>
              <p className="cell content">
                문맥적으로 부가적인 정보 (광고, 사이드바 등)
              </p>
            </li>
            <li>
              <p className="cell value">
                <code>&lt;footer&gt;</code>
              </p>
              <p className="cell content">
                문서나 섹션의 바닥글 (저작권, 연락처 등)
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          HTML5 기본 구조
        </h2>
        <p className="mt_ml">
          HTML5 문서의 구조는 <code>&lt;html&gt;</code>,{" "}
          <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code> 요소로 구성되며,{" "}
          <code>&lt;head&gt;</code>에는 메타데이터와 리소스,{" "}
          <code>&lt;body&gt;</code>에는 사용자에게 보여지는 콘텐츠가 포함됩니다.
        </p>
        <p className="mt_s">
          <code>lang</code> 속성은 문서의 주 언어를 명확히 지정하여 접근성과
          검색 정확성을 높여주는 역할을 합니다.
        </p>
        <CodeBlock title="HTML5 기본 구조" className="mt_m" language="html">
          {`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <title>HTML5 문서 예시</title>
    <meta name="description" content="HTML5 문서 구조 예시">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <!-- 시맨틱 구조 기반 콘텐츠 -->
  </body>
</html>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          HTML5 문서 구조 예시
        </h2>
        <p className="mt_ml">
          아래는 HTML5의 대표적인 구조를 활용한 마크업 예시입니다.
        </p>
        <CodeBlock
          title="HTML5 문서 구조 예시"
          className="mt_m"
          language="html"
        >
          {`<body>
  <header>
    <h1>웹사이트 제목</h1>
    <p>사이트 간단 소개</p>
  </header>
  <nav>
    <ul>
      <li><a href="#">홈</a></li>
      <li><a href="#">서비스</a></li>
      <li><a href="#">문의</a></li>
    </ul>
  </nav>
  <main>
    <section>
      <h2>주요 서비스</h2>
      <article>
        <h3>웹 개발</h3>
        <p>반응형 웹사이트, 웹앱, UI/UX 설계 등 다양한 웹 개발 서비스를 제공합니다.</p>
      </article>
    </section>
  </main>
  <aside>
    <h2>광고</h2>
    <p>이벤트 안내 또는 배너 영역입니다.</p>
  </aside>
  <footer>
    <p>&copy; 2025 회사명. All rights reserved.</p>
  </footer>
</body>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">HTML5 아웃라인 방식</h2>
        <p className="mt_ml">
          <b>
            HTML5는 시맨틱 구조를 기반으로 자동 아웃라인 생성 기능을 도입하여,
            문서의 논리적 구조와 계층을 보다 명확하게 표현할 수 있게 했습니다.
          </b>
        </p>
        <article className="indent mt_l">
          <h3 className="ml_mn">특징</h3>
          <ul className="mt_m dot_lst info_lst gap-column-important-ms">
            <li>
              <strong>시맨틱 구조 기반</strong>
              <p>시맨틱 요소가 새로운 아웃라인 섹션을 시작합니다.</p>
            </li>
            <li>
              <strong>자동 헤딩 계층 관리</strong>
              <p>각 시맨틱 섹션은 고유의 아웃라인 컨텍스트를 가집니다.</p>
            </li>
            <li>
              <strong>명시적 계층보다 논리적 구조 중시</strong>
              <p>콘텐츠 의미 기반 계층을 정의합니다.</p>
            </li>
            <li>
              <strong>보조 기술 및 SEO에 유리</strong>
              <p>명확한 구조는 스크린 리더/크롤러 해석에 유리합니다.</p>
            </li>
          </ul>
        </article>
        <article className="indent mt_xl">
          <h3 className="ml_mn">일반적인 계층에 의한 아웃라인</h3>
          <p className="mt_ms">
            HTML5에서의 <strong>아웃라인 구조</strong>를 이해하려면 시맨틱
            요소와 <code>&lt;h1&gt;</code> ~ <code>&lt;h6&gt;</code> 태그를
            논리적 계층에 따라 배치하는 것이 중요합니다.
          </p>
          <CodeBlock
            title="일반적인 계층 문서 구조"
            className="mt_m"
            language="html"
          >
            {`<body>
  <header>
    <h1>웹사이트 제목</h1>
  </header>
  <nav>
    <h2>사이트 내비게이션</h2>
  </nav>
  <main>
    <section>
      <h2>회사 소개</h2>
    </section>
    <section>
      <h2>서비스</h2>
      <article><h3>웹 개발</h3></article>
      <article><h3>모바일 앱</h3></article>
    </section>
  </main>
  <footer>
    <h2>사이트 정보</h2>
  </footer>
</body>`}
          </CodeBlock>
          <CodeBlock
            title="일반적인 계층 트리 구조"
            className="mt_m"
            language="text"
          >
            {`1. 웹사이트 제목 (h1)
├─ 사이트 내비게이션 (h2)
├─ 회사 소개 (h2)
├─ 서비스 (h2)
│  ├─ 웹 개발 (h3)
│  └─ 모바일 앱 (h3)
└─ 사이트 정보 (h2)`}
          </CodeBlock>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">&lt;h1&gt;</code>{" "}
            중복 사용 아웃라인
          </h3>
          <p className="mt_ms">
            HTML5에서는 시맨틱 요소가 각각 독립적인 아웃라인을 형성하므로 각
            섹션 내부의 <code>&lt;h1&gt;</code> 반복 사용이 문법상 허용됩니다.
          </p>
          <CodeBlock
            title="h1 중복 사용 문서 구조"
            className="mt_m"
            language="html"
          >
            {`<main>
  <section>
    <h1>공지사항</h1>
    <article><h2>[공지] 4월 운영 안내</h2></article>
  </section>
  <section>
    <h1>이벤트</h1>
    <article><h2>봄맞이 할인 행사</h2></article>
  </section>
</main>`}
          </CodeBlock>
          <CodeBlock
            title="h1 중복 사용 트리 구조"
            className="mt_m"
            language="text"
          >
            {`1. 웹사이트 제목
├─ 1.1 주요 메뉴
└─ main
   ├─ 2. 공지사항 (section > h1)
   │  └─ 2.1 [공지] 4월 운영 안내 (article > h2)
   └─ 3. 이벤트 (section > h1)
      └─ 3.1 봄맞이 할인 행사 (article > h2)`}
          </CodeBlock>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn" data-conlist-h4="true">
            h1 중복 사용 주의점과 권장 방식
          </h3>
          <p className="mt_ms">
            문법적으로 허용되더라도 접근성 도구/검색엔진의 실제 해석을 고려하면{" "}
            <b>
              단일 <code>&lt;h1&gt;</code> + 명시적 계층
            </b>{" "}
            방식이 실무에서 더 안전합니다.
          </p>
          <ul className="dot_lst mt_m">
            <li>
              문서 전체에서 <code>&lt;h1&gt;</code>은 하나만 두고, 섹션은{" "}
              <code>&lt;h2&gt;</code>부터 계층적으로 내려가는 구조를 권장합니다.
            </li>
            <li>
              시맨틱 태그만으로 계층을 기대하지 말고 제목 레벨도 명시적으로
              설계합니다.
            </li>
            <li>
              제목 크기는 CSS로 제어하고, 제목 태그는 의미 구조 기준으로
              선택합니다.
            </li>
          </ul>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          HTML5 구조의 장점
        </h2>
        <p className="mt_ml">
          HTML5는 이전 버전과 비교하여 문서 구조, 유지보수, 접근성, 검색 최적화
          등 다양한 측면에서 큰 장점을 제공합니다.
        </p>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>구조적 명확성</strong>
            <p>시맨틱 태그 사용으로 각 영역의 역할이 명확해집니다.</p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성 향상</strong>
            <p>스크린 리더가 콘텐츠 맥락을 이해하기 쉬워집니다.</p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>SEO 최적화</strong>
            <p>검색 엔진이 콘텐츠 중요도를 더 잘 파악합니다.</p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>유지 보수 용이성</strong>
            <p>명확한 구조와 구획화 덕분에 수정/확장이 편리합니다.</p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>모바일 친화성</strong>
            <p>
              <code>&lt;meta viewport&gt;</code>와 함께 모바일 퍼스트 구현이
              쉽습니다.
            </p>
          </li>
        </ol>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/10_html_02.png"} alt="HTML5 문서 구조" />
        <figcaption>HTML5 문서 구조</figcaption>
      </figure>
    </>
  );
}

export default Html5DocumentPage;
