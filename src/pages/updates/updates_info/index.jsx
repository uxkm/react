import { usePageMeta } from "../../../components/common/PageMeta";

const PAGE_LAYOUT = {
  mainClass: "uxkm_updates",
  contentList: false,
  note: false,
  reference: false,
  sideMenu: false,
  info: false,
  comments: false,
};

function IndexPage() {
  usePageMeta({
    title: "UXKM 업데이트 예정 컨텐츠",
    description: "UXKM의 업데이트 예정인 커리큘럼을 소개합니다.",
    keyword:
      "UXKM Updates, 웹 접근성(ACCESSIBILITY), ACCESSIBILITY, 국가직무능력표준(NCS), NCS, Javascript, Jquery, Gulp babel",
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <header className="update_header">
        <h1 className="sound_only">
          <span>UXKM 업데이트 예정 콘텐츠 </span>
          <em>- by. UXKM</em>
        </h1>

        <p className="update_txt">
          <span className="txt_wrap">
            <strong
              id="content_title"
              className="update_front"
              data-text="UPDATE"
            >
              UPDATE
            </strong>
          </span>
        </p>

        <div className="wrap_box">
          <div className="wrap_inner">
            <div className="wrap">
              <div className="wall wall-right"></div>
              <div className="wall wall-left"></div>
              <div className="wall wall-top"></div>
              <div className="wall wall-bottom"></div>
              <div className="wall wall-back"></div>
            </div>
            <div className="wrap">
              <div className="wall wall-right"></div>
              <div className="wall wall-left"></div>
              <div className="wall wall-top"></div>
              <div className="wall wall-bottom"></div>
              <div className="wall wall-back"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="info_txt inner">
        <span>
          <strong>UXKM</strong>에서 준비하고 있는
          <br className="dp_mb" />
          커리큘럼을 소개합니다.
        </span>
        <br />
        <i>
          Coming
          <br />
          Soon
        </i>
      </div>

      <div className="content_wrap inner">
        <section className="ud_con a11y complete">
          <h2>접근성(Accessibility)</h2>
          <h3 className="mt_m">접근성이란?</h3>
          <p className="mt_sm">
            접근성(accessibility)은 &quot;ability to access(접근
            가능성)&quot;이며, 모든 사용자가 장애 여부와 상관없이 웹사이트,
            모바일 애플리케이션, 무인단말기(ATM, 키오스크, 자동 티켓 발매기
            등등) 등 다양한 디지털 서비스와 기술을 원활하게 이용할 수 있도록
            보장하는 중요한 원칙입니다.
            <br />
            접근성을 향상시키는 것은 사용자 경험을 개선하고, 사회적 포용성을
            높이며, 법적 요구사항을 충족시키는 데 중요한 역할을 합니다.
          </p>
          <a
            href="/accessibility/a11y/01-a11yStart/a11yStart"
            className="curriculum_link"
          >
            접근성 바로가기
          </a>
        </section>

        <section className="ud_con scss complete">
          <h2>SCSS (Sassy CSS)</h2>
          <h3 className="mt_m">SCSS란?</h3>
          <p className="mt_sm">
            SCSS는 CSS 전처리기인 Sass(Syntactically Awesome Stylesheets)의 문법
            형식 중 하나로, CSS와 완전히 호환되면서도 변수, 중첩(Nesting),
            믹스인(Mixin), 함수, 연산 등의 프로그래밍적 기능을 추가하여 스타일을
            더 구조적이고 효율적으로 작성할 수 있게 해줍니다.
            <br />
            SCSS를 통해 반복되는 스타일 코드를 줄이고, 코드의 재사용성과
            유지보수성을 높일 수 있습니다. SCSS로 작성된 코드는 브라우저에서
            바로 실행되지 않으므로, 일반 CSS로 컴파일하여 사용해야 합니다.
            이러한 특징 덕분에 대규모 웹 프로젝트나 팀 단위의 협업 환경에서
            스타일 관리의 일관성과 생산성을 크게 향상시킬 수 있습니다.
          </p>
          <a
            href="/publishing/scss/01-scssStart/01-scss_intro"
            className="curriculum_link"
          >
            SCSS 바로가기
          </a>
        </section>

        <section className="ud_con script">
          <h2>자바스크립트(Javascript) &amp; 제이쿼리(jquery)</h2>
          <h3 className="mt_m">자바스크립트란?</h3>
          <p className="mt_sm">
            자바스크립트는 `웹페이지에 생동감을 불어넣기 위해` 만들어진
            객체(object) 기반의 프로그래밍 언어이며, 자바스크립트로 작성한
            프로그램을 스크립트(script)라고 부릅니다.
            <br />
            퍼블리셔의 시각으로 본 자바스크립트의 역할이란,
            <br />
            디자인을 html, css로 웹 화면에 구현한 후, 자바스크립트로 웹의 동작을
            구현하는 것입니다.
            <br />
            퍼블리셔로써 효율적인 자바스크립트의 학습과 실무를 위해 html, css를
            선행학습하는 것이 필수입니다.
          </p>

          <h3 className="mt_m">제이쿼리란?</h3>
          <p className="mt_sm">
            웹사이트에 자바스크립트를 쉽게 활용할 수 있도록 도와주는 오픈소스
            기반의 자바스크립트 라이브러리입니다.
            <br />
            자바스크립트에 비해 DOM을 쉽게 찾고 조작할 수 있고, 쉬운 애니메이션
            구현이 가능하며 거의 모든 웹 브라우저에 대응할 정도로 호환성이 매우
            뛰어납니다.
            <br />
            하지만 제이쿼리를 효율적으로 다루기 위해서 자바스크립트의 기초
            지식은 필수입니다.
          </p>
        </section>

        <section className="ud_con gulp complete">
          <h2>Gulp babel</h2>
          <h3 className="mt_m">Gulp 란?</h3>
          <p className="mt_sm">
            웹서버 운영, 설치에 사용되는 빌드 툴입니다.
            <br />
            자바스크립트에서 반복적이고 자주 사용되는 일은 자동화해주는 매우
            유용한 툴로 빌드 시스템이라고 불립니다. 이를 사용하면 시간을 줄일 수
            있고 생산성 향상에 큰 도움이 되므로 프로젝트 진행시 많이 사용됩니다.
            <br />
            <br />
            less, scss 같은 css 전처리기를 보다 쉽게 세팅 및 컴파일 할 수 있고,
            css, js를 압축하여 min 파일로 분기할 수 있습니다.
            <br />
            또한 ECMA 인터네셔널의 ECMA-262 기술 규격에 정의된 표준화된
            스크립트인 ESMAScript(ES6+)를 사용할 수 있습니다. 아직은
            ESMAScript를 지원하지 않는 브라우저(MS 계열)가 있으므로
            바벨(Babel)이라는 트랜스파일러를 Gulp에 설치하여 컴파일 할 수
            있습니다.
            <br />
            <br />
            위에 언급한 것 외에 퍼블리셔의 시각으로 본 Gulp의 장점은 서버사이드
            언어(jsp, php, asp 등)를 사용하지 않고 정적인 html 파일에 반복되는
            요소를 include 하여 빌드가 가능하다는 것입니다.
          </p>
          <a
            href="/build-system/gulp/01-gulp_start/01-intro"
            className="curriculum_link"
          >
            Gulp 바로가기
          </a>
        </section>
      </div>

      <footer className="update_footer">
        <p>이해하기 쉽도록 간편하고 꼼꼼하게 제작될 예정입니다.</p>
      </footer>
    </>
  );
}

export default IndexPage;
