import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";
import PublishingPartTabs from "@/components/docs/PublishingPartTabs";

const PAGE_LAYOUT = {
  mainClass: "css_units",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: false,
};

const PAGE_DATA = {
  title: "CSS 단위 part-2",
  description:
    "CSS 단위는 요소의 크기, 간격, 색상 등을 정확하게 표현하기 위해 숫자와 함께 사용하는 측정 단위입니다. 이 페이지에서는 CSS 단위 비교 표, 색상 표현 단위(색상 이름, HEX, RGB, RGBA, HSL, HSLA), opacity 속성을 통한 요소 투명도 설정 방법을 함께 소개합니다.",
  keyword:
    "style, css, Cascading Style Sheets, 글꼴 단위 길이, 상대 단위, 절대 단위, em, %, rem, px, ex, ch",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback({ className = "uk_editor min_height_400" }) {
  return <div className={className} aria-hidden />;
}

function UnitsCommonIntro() {
  return (
    <blockquote className="uk_note common_note mt_xxl" role="note">
      <strong className="sound_only">요약 설명</strong>
      <p>
        CSS 단위는 요소의 크기, 간격, 색상 등을 정확하게 표현하기 위해 숫자와
        함께 사용하는 측정 단위입니다.
        <br />
        CSS 속성 값에 크기나 색상을 지정할 때 단위를 사용하여 브라우저가 값을
        해석하고 화면에 표시할 수 있도록 합니다.
      </p>
      <p className="mt_ms">
        CSS 단위는 크게 <b>길이 단위</b>와 <b>색상 단위</b>로 나뉩니다.
        <br />
        길이 단위는 요소의 크기나 간격을 지정할 때 사용하며, 색상 단위는 요소의
        색상을 표현할 때 사용합니다.
      </p>
    </blockquote>
  );
}

function CssUnitsPart2Page() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });
  return (
    <>
      <UnitsCommonIntro />
      <PublishingPartTabs sectionType="css" />
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b className="t_blue">CSS 단위 part-2</b>에서는
          <br />
        </p>
        <ul className="dot_lst indent_small">
          <li className="before_note">
            <b>CSS 단위 비교 표</b>
          </li>
          <li className="before_note">
            <b>색상 표현 단위</b>
          </li>
          <li className="before_note">
            <b>opacity 속성</b>에 대해 다룹니다.
          </li>
        </ul>
        <p className="mt_ms">
          CSS 색상은 <b>색상 이름</b>, <b>RGB/RGBA</b>, <b>HEX</b>,{" "}
          <b>HSL/HSLA</b> 등으로 표현할 수 있으며, <code>opacity</code> 속성은
          요소의 투명도를 0.0(완전 투명)부터 1.0(완전 불투명)까지 설정할 수
          있습니다.
          <br />
          <strong className="t_red">주의:</strong> 숫자와 단위 사이에는 공백을
          두지 않습니다. (예: <code>#ff0000</code>(○), <code>#ff 0000</code>(×))
        </p>
      </blockquote>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">CSS 단위 비교 표</h2>

        <figure className="img_figure mt_l">
          <img
            src={IMG.CSS + "/cssBeginner/uxkm_unit_table.svg"}
            alt="CSS 단위 비교 표"
          />
          <figcaption>[px, em, %, pt, HTML, KeyCode 비교표]</figcaption>
        </figure>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">색상 표현 단위</h2>
        <p className="mt_l">
          CSS에서 색상을 지정하는 방법은 <b>색상 이름</b>, <b>RGB/RGBA</b>,{" "}
          <b>HEX</b>, <b>HSL/HSLA</b> 등이 있으며, <code>color</code>,{" "}
          <code>background-color</code>, <code>border-color</code> 등 색상 관련
          속성에 사용됩니다.
          <br />
          색상 키워드 목록은{" "}
          <span className="reference">
            <a
              href="https://www.w3.org/TR/css-color-3/"
              target="_blank"
              title="새창열림"
            >
              W3C css3-color
            </a>
          </span>
          를 참고하세요.
        </p>
        <div className="ol_lst indent mt_sm">
          <ol>
            <li>색상 이름(red,black, blue 등)</li>
            <li>rgb(red, green, blue)값</li>
            <li>rgba(red, green, blue, alpha)값</li>
            <li>hsl(hue, saturation, lightness)값</li>
            <li>hsla(hue, saturation, lightness, alpha)값</li>
          </ol>
        </div>
        <p className="mt_s">
          위의 5가지 방법 중에서 <code>rgba</code>, <code>hsl</code>,{" "}
          <code>hsla</code>는 CSS 3에서 새로 추가된 속성입니다.
        </p>

        <article className="indent mt_l">
          <h3 className="ml_mn">색상 이름</h3>
          <p className="mt_ms">
            색상 키워드(color keyword)를 사용하는 방법으로, 예를 들어{" "}
            <code>red</code>, <code>blue</code>, <code>green</code> 등을 사용할
            수 있습니다. 사용이 간편하지만 표현할 수 있는 색상의 수는
            제한적입니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={
                <EditorFallback
                  className={`uk_editor min_height_350 mb_result_height_250`}
                />
              }
            >
              <UkEditorTarget
                target="css/step01/2.1.unit/2.1.4.name-color.html"
                className={`uk_editor min_height_350 mb_result_height_250`}
                mode="htmlmixed"
                browser="default"
                title={"2.1.4.name-color"}
                minHeight="350px"
                result
              />
            </Suspense>
          </div>
          <aside className="browser_support mt_m" data-tit="color keyword">
            <ul>
              <li className="ie">지원</li>
              <li className="edge">지원</li>
              <li className="chrome">지원</li>
              <li className="firefox">지원</li>
              <li className="opera">지원</li>
              <li className="safari">지원</li>
            </ul>
          </aside>
        </article>

        <article className="indent mt_l">
          <h3 className="ml_mn">HEX 코드</h3>
          <p className="mt_ms">
            HEX 코드는 16진수로 색상을 표현하는 방법으로, <code>#</code> 기호와
            6자리 16진수로 구성됩니다. (예: <code>#000000</code>,{" "}
            <code>#ff0000</code>)
          </p>
          <p className="mt_ms">
            HEX 색상 코드는 <code>#RRGGBB</code> 형식으로, 처음 두 자리(
            <code>RR</code>)는 빨강, 세 번째와 네 번째(<code>GG</code>)는 녹색,
            다섯 번째와 여섯 번째(<code>BB</code>)는 파랑의 강도를 나타냅니다.
            <br />
            16진수는 0-9와 A-F를 사용하며, 각 색상 값은 <code>00</code>(최소,
            0)부터 <code>FF</code>(최대, 255)까지입니다. 예를 들어 16진법에서{" "}
            <code>FF</code>는 십진법의 <code>255</code>를 의미합니다. (F=15,
            FF=15×16+15=255)
          </p>
          <p className="mt_ms">
            각 색상 값의 두 자리가 같으면 3자리로 축약할 수 있습니다. (예:{" "}
            <code>#0099FF</code> → <code>#09F</code>, <code>#ffffff</code> →{" "}
            <code>#fff</code>)<br />
            단, 두 자리가 다르면 축약할 수 없습니다. (예: <code>#009AFF</code>는
            축약 불가)
          </p>
          <p className="mt_ms">
            다음 색상 값은 모두 동일한 빨간색을 표현합니다: <code>#f00</code>,{" "}
            <code>#ff0000</code>, <code>rgb(255,0,0)</code>,{" "}
            <code>rgb(100%, 0%, 0%)</code>
            <br />
            대소문자는 구분하지 않지만 소문자 사용을 권장합니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={
                <EditorFallback
                  className={`uk_editor min_height_500 mb_result_height_500`}
                />
              }
            >
              <UkEditorTarget
                target="css/step01/2.1.unit/2.1.4.hex-color.html"
                className={`uk_editor min_height_500 mb_result_height_500`}
                mode="htmlmixed"
                browser="default"
                title={"2.1.4.hex-color"}
                minHeight="500px"
                result
              />
            </Suspense>
          </div>
          <aside className="browser_support mt_m" data-tit="Hexadecimal Colors">
            <ul>
              <li className="ie">지원</li>
              <li className="edge">지원</li>
              <li className="chrome">지원</li>
              <li className="firefox">지원</li>
              <li className="opera">지원</li>
              <li className="safari">지원</li>
            </ul>
          </aside>
        </article>

        <article className="indent mt_l">
          <h3 className="ml_mn">RGB</h3>
          <p className="mt_ms">
            RGB(Red, Green, Blue)로 색상을 표현하며, 예를 들어{" "}
            <code>rgb(255, 255, 0)</code>처럼 사용할 수 있습니다.
            <br />
            0~255 사이의 숫자 또는 0%~100% 사이의 백분율로 표현할 수 있으며,{" "}
            <code>rgb(0,0,255) = rgb(0%,0%,100%)</code>와 같이 동일한 색상을
            표현할 수 있습니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={
                <EditorFallback
                  className={`uk_editor min_height_350 mb_result_height_250`}
                />
              }
            >
              <UkEditorTarget
                target="css/step01/2.1.unit/2.1.4.rgb-color.html"
                className={`uk_editor min_height_350 mb_result_height_250`}
                mode="htmlmixed"
                browser="default"
                title={"2.1.4.rgb-color"}
                minHeight="350px"
                result
              />
            </Suspense>
          </div>
          <aside className="browser_support mt_m" data-tit="RGB">
            <ul>
              <li className="ie">지원</li>
              <li className="edge">지원</li>
              <li className="chrome">지원</li>
              <li className="firefox">지원</li>
              <li className="opera">지원</li>
              <li className="safari">지원</li>
            </ul>
          </aside>
        </article>

        <article className="indent mt_l">
          <h3 className="ml_mn">RGBA</h3>
          <p className="mt_ms">
            RGBA는 RGB에 투명도(Alpha)를 추가한 것으로, 예를 들어{" "}
            <code>rgba(255, 255, 0, 1)</code>처럼 사용할 수 있습니다.
            <br />
            Alpha 값은 <code>0.0</code>(완전 투명)부터 <code>1.0</code>(완전
            불투명)까지 설정할 수 있습니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={
                <EditorFallback
                  className={`uk_editor min_height_350 mb_result_height_250`}
                />
              }
            >
              <UkEditorTarget
                target="css/step01/2.1.unit/2.1.4.rgba-color.html"
                className={`uk_editor min_height_350 mb_result_height_250`}
                mode="htmlmixed"
                browser="default"
                title={"2.1.4.rgba-color"}
                minHeight="350px"
                result
              />
            </Suspense>
          </div>
          <aside className="browser_support mt_m" data-tit="RGBA">
            <ul>
              <li className="ie">9+</li>
              <li className="edge">지원</li>
              <li className="chrome">지원</li>
              <li className="firefox">지원</li>
              <li className="opera">지원</li>
              <li className="safari">지원</li>
            </ul>
          </aside>
        </article>

        <article className="indent mt_l">
          <h3 className="ml_mn">HSL</h3>
          <p className="mt_ms">
            HSL(색상, 채도, 명도)로 색상을 표현하며, 예를 들어{" "}
            <code>hsl(0, 100%, 50%)</code>처럼 사용할 수 있습니다.
            <br />
            <strong>Hue(색상)</strong>는 0~360 사이의 숫자로 색상환의 각도를
            나타냅니다. 0 또는 360은 빨강, 120은 녹색, 240은 파랑입니다.
            <br />
            <strong>Saturation(채도)</strong>는 0%~100%로 색의 진함을
            나타냅니다. 0%는 회색, 100%는 가장 진한 색입니다.
            <br />
            <strong>Lightness(명도)</strong>는 0%~100%로 색의 밝기를 나타냅니다.
            0%는 검정, 50%는 보통 색, 100%는 흰색입니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={
                <EditorFallback
                  className={`uk_editor min_height_350 mb_result_height_250`}
                />
              }
            >
              <UkEditorTarget
                target="css/step01/2.1.unit/2.1.4.hsl-color.html"
                className={`uk_editor min_height_350 mb_result_height_250`}
                mode="htmlmixed"
                browser="default"
                title={"2.1.4.hsl-color"}
                minHeight="350px"
                result
              />
            </Suspense>
          </div>
          <aside className="browser_support mt_m" data-tit="HSL">
            <ul>
              <li className="ie">9+</li>
              <li className="edge">지원</li>
              <li className="chrome">지원</li>
              <li className="firefox">지원</li>
              <li className="opera">지원</li>
              <li className="safari">지원</li>
            </ul>
          </aside>
        </article>

        <article className="indent mt_l">
          <h3 className="ml_mn">HSLA</h3>
          <p className="mt_ms">
            HSLA는 HSL에 투명도(Alpha)를 추가한 것으로, 예를 들어{" "}
            <code>hsla(60, 100%, 50%, 1)</code>처럼 사용할 수 있습니다.
            <br />
            Alpha 값은 <code>0.0</code>(완전 투명)부터 <code>1.0</code>(완전
            불투명)까지 설정할 수 있습니다.
          </p>
          <p className="mt_ms t_blue">
            <strong>참고:</strong>
            <b>
              CSS Colors Level 4부터 <code className="t_darkblue">hsla()</code>
              는 <code className="t_darkblue">hsl()</code>의 별칭(alias)입니다.
              즉, <code className="t_darkblue">hsla(60, 100%, 50%, 1)</code>와
              <code className="t_darkblue">hsl(60, 100%, 50%, 1)</code>는 완전히
              동일하게 작동합니다. 투명도가 있는 경우에도{" "}
              <code className="t_darkblue">hsl()</code> 함수만 사용해도 됩니다.
            </b>
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={
                <EditorFallback
                  className={`uk_editor min_height_350 mb_result_height_250`}
                />
              }
            >
              <UkEditorTarget
                target="css/step01/2.1.unit/2.1.4.hsla-color.html"
                className={`uk_editor min_height_350 mb_result_height_250`}
                mode="htmlmixed"
                browser="default"
                title={"2.1.4.hsla-color"}
                minHeight="350px"
                result
              />
            </Suspense>
          </div>
          <aside className="browser_support mt_m" data-tit="HSLA">
            <ul>
              <li className="ie">9+</li>
              <li className="edge">지원</li>
              <li className="chrome">지원</li>
              <li className="firefox">지원</li>
              <li className="opera">지원</li>
              <li className="safari">지원</li>
            </ul>
          </aside>
        </article>

        <article className="view_editor edit_code mt_l">
          <h3 className="ve_tit">색상 표현 단위 종합 예제</h3>
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor indent min_height_600 mb_result_height_500 mt_m`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.1.unit/2.1.color.html"
              className={`uk_editor indent min_height_600 mb_result_height_500 mt_m`}
              mode="htmlmixed"
              browser="default"
              title={"2.1.color"}
              minHeight="600px"
              result
            />
          </Suspense>
        </article>

        <aside className="reference_box mt_l">
          <strong className="tit">참조</strong>
          <ul className="link_lst">
            <li className="reference">
              <a
                href="https://www.w3.org/TR/css-values-3/#relative-lengths"
                target="_blank"
                className="fas"
                title="새창열림"
              >
                W3C Unit
              </a>
            </li>
            <li className="reference">
              <a
                href="https://www.w3.org/TR/css-color-3/#colorunits"
                target="_blank"
                className="fas"
                title="새창열림"
              >
                W3C CSS Color Module Level 3
              </a>
            </li>
            <li className="reference">
              <a
                href="https://search.naver.com/search.naver?where=nexearch&query=%EC%83%89%EC%83%81%EC%BD%94%EB%93%9C&sm=top_hty&fbm=1&ie=utf8"
                target="_blank"
                className="fas"
                title="새창열림"
              >
                네이버 색상 코드표
              </a>
            </li>
            <li className="reference">
              <a
                href="https://www.css3maker.com/css-3-rgba.html"
                target="_blank"
                className="fas"
                title="새창열림"
              >
                css3maker.com
              </a>
            </li>
          </ul>
        </aside>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">opacity 속성</h2>
        <p className="mt_l">
          요소의 불투명도를 설정하는 속성으로, 불투명도는 요소 뒤쪽 콘텐츠가
          숨겨지는 정도를 의미하며 투명도의 반대 개념입니다.
          <br />
          <code>opacity</code>는 요소 전체(내용과 배경 모두)에 영향을 주지만
          자식 요소는 상속하지 않으며, <code>opacity</code> 값이 1이 아니면
          새로운 쌓임 맥락(stacking context)을 생성합니다.
        </p>
        <dl className="dl_dot_lst mt_m">
          <dt>값 :</dt>
          <dd>
            <code>0</code> : 요소가 완전히 투명해 보이지 않습니다.
          </dd>
          <dd>
            <code>0과 1 사이의 숫자</code> : 요소가 반투명해 뒤의 내용을 볼 수
            있습니다.
          </dd>
          <dd>
            <code>1</code> (기본값) : 요소가 완전히 불투명합니다.
          </dd>
        </dl>

        <div className="view_editor edit_code mt_ml">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_350 mb_result_height_250`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.1.unit/2.1.5.opacity.html"
              className={`uk_editor min_height_350 mb_result_height_250`}
              mode="htmlmixed"
              browser="default"
              title={"2.1.5.opacity"}
              minHeight="350px"
              result
            />
          </Suspense>
        </div>

        <aside className="browser_support mt_m" data-tit="opacity">
          <ul>
            <li className="ie">9+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">1.0</li>
            <li className="opera">9.0</li>
            <li className="safari">2.0</li>
          </ul>
        </aside>
      </section>

      <figure className="img_figure indent mt_l">
        <img src={IMG.CSS + "/02_css_01_2.png"} alt="CSS 단위" />
        <figcaption className="reference">CSS 단위</figcaption>
      </figure>
    </>
  );
}
export default CssUnitsPart2Page;
