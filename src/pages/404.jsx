import { useEffect, useRef } from "react";
import { usePageMeta } from "../components/common/PageMeta";
import "../assets/css/404.scss";

/** `App.jsx` 의 `*` 캐치올 — 등록되지 않은 모든 경로. HTML/퍼블리싱 전용이 아님. */
const PAGE_LAYOUT = {
  mainClass: "page_404",
  info: false,
  note: false,
  sideMenu: false,
  reference: false,
  contentList: false,
  depth3Last: false,
  bottomEditor: false,
  comments: false,
};

const GENTLE_WAVE_PATH =
  "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z";

function parseFlagLength(flagEl) {
  if (!flagEl) return 40;
  const raw = flagEl.style.getPropertyValue("--flag-length").trim();
  if (raw) {
    const n = Number.parseInt(raw, 10);
    if (!Number.isNaN(n) && n > 0) return n;
  }
  const attr = flagEl.getAttribute("style") || "";
  const afterColon = attr.split(":")[1];
  if (!afterColon) return 40;
  const n = Number.parseInt(afterColon.split(";")[0].trim(), 10);
  return Number.isNaN(n) || n < 1 ? 40 : n;
}

function Doc404Page() {
  const flagRef = useRef(null);

  usePageMeta({
    title: "Page not found",
    description:
      "요청한 주소의 페이지를 찾을 수 없습니다. UXKM 웹 문서·접근성 학습 콘텐츠를 제공합니다.",
    keyword: "uxkm, page not found, 404",
    layout: PAGE_LAYOUT,
  });

  // 404.njk: `html.device` 일 때 `html, body` 높이를 뷰포트에 맞춤
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    let prevHtmlHeight;
    let prevBodyHeight;
    const isDevice = html.classList.contains("device");
    if (isDevice) {
      prevHtmlHeight = html.style.height;
      prevBodyHeight = body.style.height;
      const target = `${window.innerHeight}px`;
      html.style.height = target;
      body.style.height = target;
    }

    return () => {
      if (isDevice) {
        html.style.height = prevHtmlHeight ?? "";
        body.style.height = prevBodyHeight ?? "";
      }
    };
  }, []);

  // 404.njk 스크립트: `.flag` 의 `--flag-length` 만큼 `p` 안에 `<i class="flag_N">` 생성
  useEffect(() => {
    const flag = flagRef.current;
    if (!flag) return;
    const p = flag.querySelector("p");
    if (!p) return;
    const length = parseFlagLength(flag);
    const frag = document.createDocumentFragment();
    for (let i = 0; i < length; i += 1) {
      const el = document.createElement("i");
      el.className = `flag_${i + 1}`;
      frag.appendChild(el);
    }
    p.appendChild(frag);
    return () => {
      p.querySelectorAll('i[class^="flag_"]').forEach((node) => node.remove());
    };
  }, []);

  return (
    <>
      <svg
        style={{ position: "absolute", left: 0, top: -9999 }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="info_content">
        <h1>PAGE NOT FOUND</h1>
        <h2>
          Your GPU is on fire!!
          <br />
          Damn it!! This place is hell!!
          <br />
          Get out now!!!!
        </h2>
        <a href="/">HOME</a>
      </div>

      <div className="wave_area">
        <div className="seagull">
          <span className="wing" />
          <span className="normal" />
        </div>
        <div className="cloud_box">
          <div className="cloud_back">cloud_back</div>
          <div className="cloud_middle">cloud_middle</div>
          <div className="cloud_front">cloud_front</div>
          <i className="sunshine">sunshine</i>
        </div>
        <div className="wave_box">
          <svg
            className="wave_items wave_items_2"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
            aria-hidden="true"
          >
            <defs>
              <path id="gentle-wave-back" d={GENTLE_WAVE_PATH} />
            </defs>
            <g className="parallax">
              <use
                className="wave_item wave_4"
                xlinkHref="#gentle-wave-back"
                x="48"
                y="0"
              />
              <use
                className="wave_item wave_3"
                xlinkHref="#gentle-wave-back"
                x="48"
                y="3"
              />
            </g>
          </svg>

          <svg
            className="wave_items wave_items_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
            aria-hidden="true"
          >
            <defs>
              <path id="gentle-wave-mid" d={GENTLE_WAVE_PATH} />
            </defs>
            <g className="parallax">
              <use
                className="wave_item wave_2"
                xlinkHref="#gentle-wave-mid"
                x="48"
                y="5"
              />
              <use
                className="wave_item wave_1"
                xlinkHref="#gentle-wave-mid"
                x="48"
                y="7"
              />
            </g>
          </svg>

          <div className="filter_box">
            <svg
              className="wave_items wave_items_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
              aria-hidden="true"
            >
              <defs>
                <path id="gentle-wave-filter" d={GENTLE_WAVE_PATH} />
              </defs>
              <g className="parallax">
                <use
                  className="wave_item wave_2"
                  xlinkHref="#gentle-wave-filter"
                  x="48"
                  y="5"
                />
                <use
                  className="wave_item wave_1"
                  xlinkHref="#gentle-wave-filter"
                  x="48"
                  y="7"
                />
              </g>
            </svg>
            <div className="txt_404">
              <svg
                width="440"
                height="360"
                viewBox="0 0 440 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M76.502 356.773V315.973H0.00195312V275.773L48.602 98.7729H129.002V273.073H142.802V315.973H129.002V356.773H76.502ZM45.902 273.073H76.502V143.173L45.902 273.073Z"
                  fill="white"
                />
                <path
                  d="M219.644 359.173C197.844 359.173 181.044 353.073 169.244 340.873C157.444 328.473 151.544 310.873 151.544 288.073V171.673C151.544 147.273 157.244 128.673 168.644 115.873C180.044 103.073 197.044 96.6729 219.644 96.6729C242.444 96.6729 259.544 103.073 270.944 115.873C282.344 128.673 288.044 147.273 288.044 171.673V288.073C288.044 311.073 282.144 328.673 270.344 340.873C258.544 353.073 241.644 359.173 219.644 359.173ZM219.644 311.773C223.444 311.773 226.544 310.073 228.944 306.673C231.344 303.073 232.544 298.873 232.544 294.073V166.873C232.544 159.473 231.644 153.873 229.844 150.073C228.244 146.073 224.844 144.073 219.644 144.073C214.444 144.073 211.044 146.073 209.444 150.073C207.844 153.873 207.044 159.473 207.044 166.873V294.073C207.044 298.873 208.144 303.073 210.344 306.673C212.744 310.073 215.844 311.773 219.644 311.773Z"
                  fill="white"
                />
                <path
                  d="M372.986 356.773V315.973H296.486V275.773L345.086 98.7729H425.486V273.073H439.286V315.973H425.486V356.773H372.986ZM342.386 273.073H372.986V143.173L342.386 273.073Z"
                  fill="white"
                />
              </svg>
              <div
                ref={flagRef}
                className="flag"
                style={{
                  "--flag-length": 40,
                }}
              >
                <p>flag</p>
              </div>
            </div>
          </div>
        </div>
        <div className="copy">
          <i>&copy; 2019 All Right Reserved. By UXKM.</i>
        </div>
      </div>
    </>
  );
}

export default Doc404Page;
