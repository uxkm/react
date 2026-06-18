import { Suspense, lazy, useEffect, useRef, useState } from "react";
import PageMeta from "../components/common/PageMeta";
import { applyDetectClassesTo, getDetect } from "../utils/deviceDetect.js";
import "../assets/css/uk_main.scss";

// CodeMirror 6 + ayu-mirage theme + language extensions weigh ~500kB minified.
// Splitting UkEditor into its own chunk keeps MainPage and any other route
// embedding the editor lean while still letting the chunk be cached and
// shared across pages.
const UkEditor = lazy(() => import("../components/code/UkEditor.jsx"));

const MAIN_EDITOR_INITIAL_CODE = `<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
    <meta name="format-detection" content="telephone=no, address=no, email=no" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Welcome UXKM</title>
  </head>
  <body>
    <h1>UXKM 홈페이지 입니다.</h1>
    <h2>여러분을 환영합니다!!</h2>
  </body>
</html>`;

const PARALLAX_RATIOS_PC = [-0.8, -0.6, -0.4, -0.2, -0.1];
const PARALLAX_RATIOS_MB = [-0.4, -0.3, -0.2, -0.1, -0.05];

function MainPage() {
  const [is3DActive, setIs3DActive] = useState(false);
  const [hoverState, setHoverState] = useState(false);
  const [hasStarted] = useState(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.removeProperty("height");
    }
    return true;
  });

  const introRef = useRef(null);
  const infoRef = useRef(null);
  const stepRefs = useRef([null, null, null, null, null]);
  const hoverResetTimerRef = useRef(null);
  const hoverEnsureTimerRef = useRef(null);

  // Apply ukDetect classes to the intro and brand mark, mirroring uk_main.js
  // window.load callbacks (`_main_intro.ukDetect({device_check, all_check:false})`
  // and `_main_intro.find('.uxkm_front').ukDetect({browser_check:true})`).
  useEffect(() => {
    if (!introRef.current) return;
    applyDetectClassesTo(introRef.current, { deviceCheck: true });
    const front = introRef.current.querySelector(".uxkm_front");
    if (front) applyDetectClassesTo(front, { browserCheck: true });
  }, []);

  // Reproduce `_html.removeAttr('style')` (see `hasStarted` initializer above)
  // and mirror the resize handler that pegs `.main_intro` height to the viewport
  // height on touch devices.
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const sync = () => {
      const intro = introRef.current;
      if (!intro) return;
      const { deviceType } = getDetect();
      if (deviceType === "device") {
        intro.style.height = `${window.innerHeight}px`;
      } else {
        intro.style.removeProperty("height");
      }
    };

    sync();
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("resize", sync);
    };
  }, []);

  // Scroll-driven parallax for `.main_info .step1` … `.step5`, plus the
  // `info_scroll` flag that the previous SCSS uses to lock the keyboard hero.
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const onScroll = () => {
      const intro = introRef.current;
      const info = infoRef.current;
      if (!intro || !info) return;

      const header = document.querySelector(".uk_header");
      const headerHeight = header ? header.offsetHeight : 0;
      const infoTop = intro.offsetHeight - headerHeight;
      const sct = window.scrollY;

      if (sct >= infoTop) info.classList.add("info_scroll");
      else info.classList.remove("info_scroll");

      const offset = sct - infoTop;
      const html = document.documentElement;
      const ratios = html.classList.contains("mb")
        ? PARALLAX_RATIOS_MB
        : PARALLAX_RATIOS_PC;

      stepRefs.current.forEach((el, index) => {
        if (!el) return;
        el.style.transform = `translateY(${offset * ratios[index]}px)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Cleanup any pending timers on unmount so a fast SPA navigation never
  // applies a class to a stale <article>.
  useEffect(() => {
    return () => {
      if (hoverResetTimerRef.current) clearTimeout(hoverResetTimerRef.current);
      if (hoverEnsureTimerRef.current)
        clearInterval(hoverEnsureTimerRef.current);
    };
  }, []);

  const handle3DChange = (event) => {
    const checked = event.target.checked;
    if (checked) {
      // Match the original pattern: enter "3D off" state immediately and run a
      // short interval that re-asserts hover_state until the SCSS transition
      // settles (the original used a 100ms setInterval guard).
      setIs3DActive(true);
      setHoverState(true);
      if (hoverResetTimerRef.current) {
        clearTimeout(hoverResetTimerRef.current);
        hoverResetTimerRef.current = null;
      }
      if (hoverEnsureTimerRef.current)
        clearInterval(hoverEnsureTimerRef.current);
      hoverEnsureTimerRef.current = setInterval(() => {
        setHoverState(true);
      }, 100);
      // Single guard: stop re-asserting once we've held the state for a
      // little while, otherwise the interval would run forever.
      setTimeout(() => {
        if (hoverEnsureTimerRef.current) {
          clearInterval(hoverEnsureTimerRef.current);
          hoverEnsureTimerRef.current = null;
        }
      }, 600);
    } else {
      setIs3DActive(false);
      if (hoverEnsureTimerRef.current) {
        clearInterval(hoverEnsureTimerRef.current);
        hoverEnsureTimerRef.current = null;
      }
      if (hoverResetTimerRef.current) clearTimeout(hoverResetTimerRef.current);
      hoverResetTimerRef.current = setTimeout(() => {
        setHoverState(false);
        hoverResetTimerRef.current = null;
      }, 1600);
    }
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    const intro = introRef.current;
    if (!intro) return;
    const header = document.querySelector(".uk_header");
    const headerHeight = header ? header.offsetHeight : 0;
    window.scrollTo({
      top: intro.offsetHeight - headerHeight,
      behavior: "smooth",
    });
  };

  const introClassName = [
    "main_intro",
    hasStarted && "start",
    is3DActive && "none_3d",
    hoverState && "hover_state",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <PageMeta
        title="UXKM"
        description="UXKM 웹 문서와 접근성 학습 콘텐츠를 제공합니다."
        keyword="UXKM, Publishing, HTML, CSS, SCSS, A11Y"
      />
      <h1 className="sound_only">UXKM</h1>

      <article ref={introRef} className={introClassName}>
        <h2 className="sound_only">Intro</h2>
        <article className="txt_box">
          <h3>UXKM motto</h3>
          <div className="d3_button">
            <label>
              <input
                type="checkbox"
                tabIndex={0}
                checked={is3DActive}
                onChange={handle3DChange}
              />
              <i>3D 버튼</i>
            </label>
          </div>
          <div className="txt">
            <p>
              <span>&nbsp;</span>
              <span>Web Publisher 또는</span>
            </p>
            <p>
              <span>Web Publisher 또는</span>
              <span>Ui developer 란?</span>
            </p>
            <p>
              <span>Ui developer 란?</span>
              <span>디자인 구조를 이해하고</span>
            </p>
            <p>
              <span>디자인 구조를 이해하고</span>
              <span>디자인을 웹 화면으로 구현하며,</span>
            </p>
            <p>
              <span>디자인을 웹 화면으로 구현하며,</span>
              <span>html, css, javascript를</span>
            </p>
            <p>
              <span>html, css, javascript를</span>
              <span>기본 소양으로 가지고 있어야 한다.</span>
            </p>
            <p>
              <span>기본 소양으로 가지고 있어야 한다.</span>
              <span>&nbsp;</span>
            </p>
          </div>
          <div className="brand_name">
            <span></span>
            <p className="name">
              <strong className="uxkm_front" data-text="UXKM">
                UXKM
              </strong>
              <span className="uxkm_back">UXKM</span>
            </p>
          </div>
          <p className="created_by">
            UXKM Created by.
            <br />
            Dae-min, Kyo-sung
          </p>
        </article>
        <a href="#main_info" className="next_content" onClick={handleNextClick}>
          <i>다음 화면</i>
        </a>
      </article>

      <article ref={infoRef} className="main_info" id="main_info">
        <h2 className="sound_only">Information</h2>
        <div className="txt_area">
          <div className="txt_box1">
            <p>
              UXKM 홈페이지의 모든 문서는 <i>UXKM의 자산</i>입니다.
            </p>
            <p>
              UXKM 홈페이지는 <i>강의 목적으로 제작</i>되었으며,
              <br />
              공부를 위해 홈페이지에 접속한 모두를 환영합니다.
            </p>
          </div>
          <div className="txt_box2">
            <strong>
              UXKM UI/UX 문서 기준은
              <br />
              <b>W3C &amp; MDN</b> 입니다.
            </strong>
            <p>
              모든 예제는 <i>실무와 강의 경험</i>을 바탕으로
              <br />
              최대한 이해하기 쉽게 예시를 두어 제작하였습니다.
            </p>
            <p>
              부족한 부분은 계속 보완 및 업데이트할 예정이며,
              <br />
              <i>꼭 필요하거나 자주 사용되는 요소</i>들 위주로 설명되어 있어
              <br />
              일부 부족한 설명은 강의하면서 진행될 예정입니다.
            </p>
          </div>
        </div>
        <div className="keyboard">
          {[1, 2, 3, 4, 5].map((step, index) => (
            <span
              key={step}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className={`step step${step}`}
            >
              <i></i>
            </span>
          ))}
        </div>
      </article>

      <article className="main_editor">
        <h2>
          <span>
            UXKM <i>E</i>ditor
          </span>
        </h2>
        <div className="txt">
          <p>
            ‘코드미러’ 라이브러리를 이용하여 자체 개발한
            <br className="dp_mb" />
            <b>UXKM Editor</b>로 강의의 예제를 표현합니다.
          </p>
          <p>
            에디터기에서 코드를 작성하면 오른쪽 Result 영역의
            <br className="dp_mb" />
            브라우저에 <i>실시간으로 반영</i>됩니다.
            <br />
            <i>Desktop 환경에서 에디터기 작성이 가능</i>하며,
            <br className="dp_mb" />
            Device 환경에서는 코드와 결과물 확인만 가능합니다.
          </p>
        </div>
        <ul className="info_txt">
          <li className="info">각 버튼의 기능을 확인할 수 있습니다.</li>
          <li className="reset">
            초기 코드로 되돌립니다.{" "}
            <span className="dp_in_pc">
              에디터기를 마음껏 테스트 할 수 있습니다.
            </span>
          </li>
          <li className="download">
            <span className="dp_in_pc">초기 코드 및 테스트 한 </span>코드를 html
            파일로 다운로드할 수 있습니다.
          </li>
          <li className="fullscreen dp_pc">
            에디터기를 브라우저 기준 전체영역으로 확장하여 사용할 수 있습니다.
          </li>
          <li className="fullscreen dp_mb">
            에디터기를 브라우저 전체영역으로 확장합니다.
          </li>
          <li className="browser">
            Result 영역의 브라우저를 닫았을 때 다시 켤 수 있습니다. 브라우저를
            닫았을 때 버튼이 보여집니다.
          </li>
        </ul>
        <div className="editor_wrap">
          <Suspense
            fallback={
              <div className="uk_editor min_height_420">Loading editor...</div>
            }
          >
            <UkEditor
              className="min_height_420 mb_result_height_300 keep_split"
              mode="htmlmixed"
              browser="default"
              title="Welcome UXKM"
              showResultWindowControls={false}
              minHeight="420px"
              code={MAIN_EDITOR_INITIAL_CODE}
            />
          </Suspense>
        </div>
      </article>

      <article className="main_created inner">
        <h2>
          <span>Created by</span>
        </h2>
        <ul className="created">
          <li className="dae_min">
            <div className="box">
              <div className="box_inner">
                <strong>DAE-MIN, KIM</strong>
                <div>
                  <b>김대민</b>
                  <p>html, css, javascript, ncs, accessibility</p>
                </div>
              </div>
            </div>
          </li>
          <li className="kyo_sung">
            <a
              href="http://921430km.com"
              target="_blank"
              rel="noreferrer"
              className="box"
            >
              <div className="box_inner">
                <strong>KYO-SUNG, CHU</strong>
                <div>
                  <b>추교성</b>
                  <p>html, css, javascript, jquery, design</p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </article>
    </>
  );
}

export default MainPage;
