import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";
import CodeBlock from "@/components/code/CodeBlock";

const PAGE_LAYOUT = {
  mainClass: "div_block",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: false,
  contentList: true,
  depth3Last: false,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "대표적인 블록 요소 - div",
  description:
    "div 요소는 HTML 문서에서 콘텐츠를 구분하거나 묶기 위한 비시맨틱 블록 요소로, 구조적인 구획을 형성하는 데 사용됩니다. 이 페이지에서는 div 요소의 주요 역할, 특징, 사용 예시를 소개합니다.",
  keyword:
    "UXKM, uxkm, Markup, HTML, block elements, block level elements, 블록 요소, elements, div, division, 분할, tag, 컨테이너",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_450" aria-hidden />;
}

function DivBlockPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;div&gt;</code> 요소는 <strong>Division(분할, 구획)</strong>
          의 줄임말로,
          <b>
            HTML에서 콘텐츠를 구분하거나 그룹화하기 위한{" "}
            <i className="underline">비시맨틱한 블록 요소</i>
          </b>
          입니다.
          <br />
          별도의 의미를 가지지는 않지만,{" "}
          <b>레이아웃 구성, 스타일 적용, 스크립트 제어를 위한 컨테이너 역할</b>
          로 널리 사용됩니다. 다른 블록 요소나 인라인 요소를 자유롭게 포함할 수
          있으며,
          <code>class</code>나 <code>id</code> 속성과 함께 사용하여
          <b>CSS 스타일링이나 JavaScript 동작의 기준 영역으로 활용</b>됩니다.
          <br />
          의미보다는 <b>구조적 묶음과 기능적 목적</b>에 초점을 둔 기본적인
          레이아웃 도구입니다.
        </p>
        <p className="mt_s">
          기본적으로 <code>&lt;div&gt;</code> 요소는 블록 레벨 요소이며, 한 줄을
          차지하고 다음 요소는 그 아래에 배치됩니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>구조적인 레이아웃 그룹화</strong>
            <p>
              여러 요소를 하나의 그룹으로 묶을 때 사용되며, 페이지의 구획을
              나누고 레이아웃을 구성하는 데 유용합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>의미 없는 컨테이너</strong>
            <p>
              <code>&lt;div&gt;</code> 자체는 의미적 정보를 제공하지 않으며,
              단지 스타일이나 구조적 그룹화를 위한 컨테이너 역할만 합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>
              class, id, style 속성 등을 활용한 스타일링 및 동작 추가
            </strong>
            <p>
              특정한 스타일이나 기능을 적용하기 위해 CSS 또는 JavaScript와 함께
              자주 사용됩니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>블록 레벨 요소</strong>
            <p>
              <code>&lt;div&gt;</code>는 블록 레벨 요소로, 기본적으로 100%
              너비를 차지하고 다음 요소와 줄 바꿈이 발생합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>시맨틱 요소와 구분해 사용해야 함</strong>
            <p>
              의미가 명확한 상황에서는 <code>&lt;section&gt;</code>,{" "}
              <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code> 등 시맨틱
              요소를 우선적으로 사용하는 것이 권장됩니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn">
          <i className="t_blue weight-900">div</i>와 Layout
        </h2>

        <p className="mt_ml">
          <code>&lt;div&gt;</code> 요소는 HTML 문서에서 레이아웃을 만드는 데
          핵심적인 역할을 합니다.
          <br />웹 페이지의{" "}
          <b className="t_blue">
            레이아웃은 다양한 구획을 조합하여 페이지의 전반적인 디자인과 배치를
            결정하는 것을 의미하며
          </b>
          , 페이지의 구조를 정의하고 사용자에게 콘텐츠를 효과적으로 전달하는 데
          중요합니다.
        </p>
        <p className="mt_s">
          <code>&lt;div&gt;</code> 요소는 아래와 같은 방법으로 레이아웃을
          구성하는 데 사용될 수 있습니다.
          <br />
          <i className="t_green">
            (아래 예제는 시멘틱 요소를 사용하지 않고, 오직{" "}
            <code>&lt;div&gt;</code> 요소만을 사용하여 구성한 일반적인
            예제입니다.)
          </i>
        </p>

        <article className="tit_h3 weight-500-before indent mt_l">
          <h3 className="ml_mn">구획 분할</h3>
          <p className="mt_ms">
            <code>&lt;div&gt;</code> 요소를 사용하여 웹 페이지를 여러 구획으로
            분할할 수 있습니다.
            <br />
            예를 들어, 페이지의 헤더, 내용, 사이드바, 푸터 등의 영역을{" "}
            <code>&lt;div&gt;</code>로 묶어 각각의 구획을 정의할 수 있습니다.
          </p>
          <CodeBlock title="div elements - 구획 분할" language="html">
            {`<!-- 구획 분할 -->
<div class="header">헤더 영역</div>
<div class="container">
  <div class="content">본문 영역</div>
  <div class="sidebar">사이드바 영역</div>
</div>
<div class="footer">푸터 영역</div>`}
          </CodeBlock>
        </article>

        <article className="tit_h3 weight-500-before indent mt_xl">
          <h3 className="ml_mn">스타일링</h3>
          <p className="mt_ms">
            <code>&lt;div&gt;</code> 요소를 사용하여 스타일을 적용할 수
            있습니다.
            <br />
            CSS를 사용하여 각 구획의 디자인을 지정하고 레이아웃을 조정하며,
            헤더, 내용, 사이드바, 푸터 등의 영역을 스타일링하고 배치할 수
            있습니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.2.div_block_styling.html"
                className="min_height_450 mb_result_height_400"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="div - 스타일링"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>

        <article className="tit_h3 weight-500-before indent mt_xl">
          <h3 className="ml_mn">레이아웃 관리</h3>
          <p className="mt_ms">
            <code>&lt;div&gt;</code> 요소를 사용하여 레이아웃을 관리할 수
            있으며, 각 구획을 유연하게 배치하여 사용자 경험을 향상시킬 수
            있습니다.
            <br />
            예를 들어, 반응형 디자인을 구현하여 다양한 디바이스 및 화면 크기에
            대응할 수 있습니다.
          </p>
          <p className="t_blue">
            (브라우저 크기를 줄이면, 해상도에 맞춰 레이아웃이 유연하게 변하는
            것을 확인할 수 있습니다.)
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/02-blockInline/2.2.div_block_responsive.html"
                className="min_height_450 mb_result_height_420"
                result={true}
                mode="htmlmixed"
                theme="ayu-mirage"
                browser="default"
                title="div - 레이아웃 관리"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn">
          <i className="t_blue weight-900">div</i> 활용 예제
        </h2>

        <article className="tit_h3 weight-500-before indent mt_l">
          <h3 className="ml_mn">이미지 갤러리</h3>
          <CodeBlock title="div elements - 이미지 갤러리" language="html">
            {`<!-- 이미지 갤러리 -->
<div class="gallery">
  <div class="image"><img src="image1.jpg" alt="이미지 1"></div>
  <div class="image"><img src="image2.jpg" alt="이미지 2"></div>
  <div class="image"><img src="image3.jpg" alt="이미지 3"></div>
</div>`}
          </CodeBlock>
        </article>

        <article className="tit_h3 weight-500-before indent mt_xl">
          <h3 className="ml_mn">카드 레이아웃</h3>
          <CodeBlock title="div elements - 카드 레이아웃" language="html">
            {`<!-- 카드 레이아웃 -->
<div class="card">
  <img src="image.jpg" alt="카드 이미지">
  <div class="card-content">
    <strong>카드 제목</strong>
    <p>카드 내용...</p>
    <a href="#">자세히 보기</a>
  </div>
</div>`}
          </CodeBlock>
        </article>

        <article className="tit_h3 weight-500-before indent mt_xl">
          <h3 className="ml_mn">탭 메뉴</h3>
          <CodeBlock title="div elements - 탭 메뉴" language="html">
            {`<!-- 탭 메뉴 -->
<div class="tab-menu">
  <div class="tab">탭 1</div>
  <div class="tab">탭 2</div>
  <div class="tab">탭 3</div>
</div>
<div class="tab-content">
  <div class="content">탭 1 내용</div>
  <div class="content">탭 2 내용</div>
  <div class="content">탭 3 내용</div>
</div>`}
          </CodeBlock>
        </article>

        <article className="tit_h3 weight-500-before indent mt_xl">
          <h3 className="ml_mn">이벤트 일정</h3>
          <CodeBlock title="div elements - 이벤트 일정" language="html">
            {`<!-- 이벤트 일정 -->
<div class="event">
  <div class="event-date">3월 15일</div>
  <div class="event-details">
    <strong>이벤트 제목</strong>
    <p>이벤트 내용...</p>
    <a href="#">자세히 보기</a>
  </div>
</div>`}
          </CodeBlock>
        </article>

        <article className="tit_h3 weight-500-before indent mt_xl">
          <h3 className="ml_mn">팝업 창</h3>
          <CodeBlock title="div elements - 팝업 창" language="html">
            {`<!-- 팝업 창 -->
<div class="popup">
  <div class="popup-content">
    <strong>팝업 제목</strong>
    <button class="close">&times;</button>
    <p>팝업 내용...</p>
  </div>
</div>`}
          </CodeBlock>
        </article>

        <div className="notice_blue mt_xl">
          <p>
            <strong>
              <code className="t_fff bg_none">&lt;div&gt;</code>
            </strong>{" "}
            요소는 거의 모든 경우에 사용할 수 있는 다목적 컨테이너입니다.
          </p>
        </div>
        <p className="mt_sm t_blue weight-500">
          이 밖에 무한한 상황에서 <code>&lt;div&gt;</code> 요소를 활용하여 웹
          페이지의 레이아웃을 구성하거나 요소를 그룹화하고 스타일을 적용하는 데
          사용할 수 있습니다.
        </p>
      </section>

      <aside className="browser_support mt_xxl" data-tit="div">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">지원</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>

      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/02_html_02.png`} alt="div 요소" />
        <figcaption>div 요소</figcaption>
      </figure>
    </>
  );
}

export default DivBlockPage;
