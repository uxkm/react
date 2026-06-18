import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

const PAGE_LAYOUT = {
  mainClass: "css_color",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: false,
};

const IMG_CSS = "/images/css";

function EditorFallback({ className = "uk_editor min_height_400" }) {
  return <div className={className} aria-hidden />;
}

function CssColorPage() {
  usePageMeta({
    title: "Color 속성",
    description:
      "CSS의 Color 속성은 텍스트의 색상을 지정하는 속성으로, 디자인에 있어 가장 기본적인 속성입니다. 이 페이지에서는 색상 키워드, RGB 색상값, RGBA 색상값, HEX 색상값, HSL 색상값, HSLA 색상값, transparent, currentColor 등 다양한 색상 표현 방법을 함께 소개합니다.",
    keyword:
      "style, css, Cascading Style Sheets, color, RGB, RGBA, transparent, HSL, HSLA",
    layout: PAGE_LAYOUT,
  });
  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          CSS에서 색을 표현하는 방법으로, 디자인에 있어 가장 기본적인
          속성입니다. 색상을 표현하는 대표적인 방법에는 색상 이름, RGB 색상값,
          16진수 색상값 등이 있으며, 현재 W3C에서 명시하는 색상 단위로는 기본
          color 키워드, 수치 color 값(RGB, RGBA, transparent, HSL, HSLA), 확장
          color 키워드(currentColor) 등이 있습니다. (시스템 color는 더 이상
          사용되지 않습니다)
        </p>
        <p className="mt_s reference">
          <strong className="t_black">CSS Level 1</strong>은 16개의 기본 색상만
          지니고 있었으며, VGA 그래픽 카드가 표현할 수 있는 색에서 가져온
          것이기에 VGA 색상이라고 칭했습니다.
          <br />
          <strong className="t_black">CSS Level 2</strong>에서는 orange 키워드를
          추가했습니다. 초기 브라우저들은 명세에 없음에도 불구하고 주로 X11
          색상표에서 가져온 다양한 색상을 지원했지만, SVG 1.0과 CSS Colors Level
          3 이전까지 그 목록이 정식으로 정해진 적은 없었습니다.
          <br />
          추가한 색상 키워드는 확장 색상 키워드, X11 색상, 또는 SVG 색상이라고
          부르며, CSS Colors Level 4에선 웹 개척자 에릭 메이어를 기리기 위해{" "}
          <a
            href="https://codepen.io/trezy/post/honoring-a-great-man"
            target="_blank"
            title="새창열림"
          >
            rebeccapurple 키워드
          </a>
          를 추가했습니다.
        </p>
      </blockquote>
      <p className="mt_m">
        color의 기본값은 <code>inherit</code>으로 부모의 색상을 가져옵니다.
      </p>
      <CodeBlock
        title={"color CSS value"}
        language="css"
        className="uk_gist_code_box mt_m"
      >
        {`p {
				color: inherit | rgb() | rgba() | hsl() | hsla() | hex-color | named-color | currentcolor;
			}`}
      </CodeBlock>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">color 키워드</h2>
        <p className="mt_l">
          color 키워드는 대소문자를 구분하지 않는 식별자로{" "}
          <span style={{ color: "red" }}>red</span>,{" "}
          <span style={{ color: "blue" }}>blue</span>,{" "}
          <span style={{ color: "black" }}>black</span>,{" "}
          <span style={{ color: "lightseagreen" }}>lightseagreen</span>처럼 특정
          색을 나타냅니다.
          <br />
          키워드 이름은 색상을 대략적으로 나타내지만, 각 키워드가 정확히 어떤
          색을 나타내는지는 미리 정의된 표준에 따르며 특별한 규칙은 없습니다.
        </p>
        <div className="ol_lst mt_m">
          <strong className="font-16 t_black">
            색상 키워드를 사용할 때 고려할 점
          </strong>
          <ol className="indent mt_s">
            <li>모든 색상 키워드는 투명도 없는 단일 색상을 표현합니다.</li>
            <li className="mt_sm">
              일부 키워드는 같은 색을 나타내는 다른 이름입니다. (예:{" "}
              <code>aqua</code> = <code>cyan</code>, <code>gray</code> ={" "}
              <code>grey</code>)
              <div className="color_keyword_ex mt_sm">
                <span style={{ background: "aqua", color: "#000" }}>aqua</span>{" "}
                /<span style={{ background: "cyan", color: "#000" }}>cyan</span>
                <br />
                <span style={{ background: "fuchsia", color: "#fff" }}>
                  fuchsia
                </span>{" "}
                /
                <span style={{ background: "magenta", color: "#fff" }}>
                  magenta
                </span>
                <br />
                <span style={{ background: "gray", color: "#fff" }}>
                  gray
                </span>{" "}
                /<span style={{ background: "grey", color: "#fff" }}>grey</span>
              </div>
            </li>
            <li className="mt_sm">
              HTML의 <code>[style]</code> 속성에서는 16가지 기본 색상만
              인식하며, 나머지 색상 키워드는 CSS 파일이나{" "}
              <code>&lt;style&gt;</code> 태그에서만 사용해야 합니다.
            </li>
          </ol>
        </div>
        <CodeBlock
          title={"color : keyword"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {color: red;}
				p {color: blue;}`}
        </CodeBlock>
        <aside className="browser_support mt_m" data-tit="color">
          <ul>
            <li className="ie">지원</li>
            <li className="edge">지원</li>
            <li className="chrome">지원</li>
            <li className="firefox">지원</li>
            <li className="opera">지원</li>
            <li className="safari">지원</li>
          </ul>
        </aside>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">RGB 색상</h2>
        <p className="mt_l">
          RGB 색상 모델은 빨강, 초록, 파랑을 통해 특정 색을 표현하며,
          선택사항으로 색의 투명도를 알파 채널로 표현할 수 있습니다.
          <br />
          RGB 색상은 # 뒤의 16진수 표기법이나 함수형 표기법(<code>
            rgb()
          </code>, <code>rgba()</code>)으로 표현할 수 있습니다.
        </p>
        <div className="ol_lst indent mt_m">
          <ol>
            <li className="line_code font14">
              <strong>16진수 표기법</strong>
              <p className="mt_sm">
                <code>#RRGGBB</code> 형식으로 빨강(R), 초록(G), 파랑(B) 각각을
                00~FF(0~255) 사이의 16진수로 표현합니다.
                <br />
                <code>#RGB</code> 형식은 각 색상 값의 두 자리가 같을 때 3자리로
                축약할 수 있습니다. (예: <code>#f00</code> ={" "}
                <code>#ff0000</code>, <code>#f09</code> = <code>#ff0099</code>)
                <br />
                투명도를 추가하려면 <code>#RRGGBBAA</code> 또는{" "}
                <code>#RGBA</code> 형식을 사용할 수 있습니다. (예:{" "}
                <code>#ff0000ff</code> = <code>#ff0000</code>)
              </p>
            </li>
            <li className="line_code font14 mt_s">
              <strong>함수형 표기법</strong>
              <p className="mt_sm">
                <code>rgb(빨강, 초록, 파랑)</code> 또는{" "}
                <code>rgba(빨강, 초록, 파랑, 투명도)</code> 형식으로 표현합니다.
                <br />
                빨강, 초록, 파랑은 0~255 사이의 숫자 또는 0%~100% 사이의
                백분율로 표현할 수 있으며, 255 = 100%입니다.
                <br />
                투명도(알파)는 0~1 사이의 숫자 또는 0%~100% 사이의 백분율로
                표현하며, 1 = 100%(완전 불투명)입니다. (예:{" "}
                <code>rgb(255, 0, 0)</code>, <code>rgba(255, 0, 0, 0.5)</code>)
              </p>
            </li>
          </ol>
        </div>
        <CodeBlock
          title={"color : rgb"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`/* 아래 4가지 표기법은 모두 같은 색상(red)으로 표현됩니다. */
				p {color: #f00;}
				p {color: #ff0000;}
				p {color: rgb(255, 0, 0);}
				p {color: rgba(255, 0, 0, 1);}`}
        </CodeBlock>
        <aside className="browser_support mt_m" data-tit="RGB">
          <ul>
            <li className="ie">3.0</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">1.0</li>
            <li className="opera">3.5</li>
            <li className="safari">1.0</li>
          </ul>
        </aside>
        <aside className="browser_support mt_m" data-tit="RGBA">
          <ul>
            <li className="ie">9+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">3.0</li>
            <li className="opera">10.0</li>
            <li className="safari">3.1</li>
          </ul>
        </aside>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">HSL 색상</h2>
        <p className="mt_l">
          HSL 색상 모델은 색상, 채도, 명도를 통해 특정 색상을 표현하며,
          선택사항으로 색의 투명도를 알파 채널로 표현할 수 있습니다.
          <br />
          많은 디자이너들은 색상, 채도, 명도를 따로 조절할 수 있는 HSL이 RGB보다
          더 직관적임을 발견하며, HSL을 사용하면 짝이 맞는 색(예컨대 한 가지
          색의 여러 밝기) 여러 종류를 더 쉽게 만들 수 있습니다.
          <br />
          HSL 색상은 함수형 <code>hsl()</code>과 <code>hsla()</code> 표기법을
          사용합니다.
        </p>
        <p className="mt_s t_blue">
          <strong>참고:</strong>
          <b>
            CSS Colors Level 4부터 <code className="t_darkblue">hsla()</code>는{" "}
            <code className="t_darkblue">hsl()</code>의 별칭(alias)입니다. 즉,{" "}
            <code className="t_darkblue">hsla(60, 100%, 50%, 1)</code>와
            <code className="t_darkblue">hsl(60, 100%, 50%, 1)</code>는 완전히
            동일하게 작동합니다. 투명도가 있는 경우에도{" "}
            <code className="t_darkblue">hsl()</code> 함수만 사용해도 됩니다.
          </b>
        </p>
        <div className="ol_lst indent mt_m">
          <ol>
            <li className="line_code font14">
              <strong>함수형 표기법</strong>
              <p className="mt_sm">
                <code>hsl(색상, 채도, 명도)</code> 또는{" "}
                <code>hsla(색상, 채도, 명도, 투명도)</code> 형식으로 표현합니다.
              </p>
              <p className="mt_sm">
                <strong>H(색상):</strong> 0~360 사이의 숫자로 색상환의 각도를
                나타냅니다. (0 또는 360=빨강, 120=초록, 240=파랑) 단위 없이
                숫자만 사용하면 각도로 해석됩니다.
              </p>
              <p className="mt_sm">
                <strong>S(채도):</strong> 0%~100% 사이의 백분율로 색의 진함을
                나타냅니다. 100%는 가장 진한 색, 0%는 회색입니다.
              </p>
              <p className="mt_sm">
                <strong>L(명도):</strong> 0%~100% 사이의 백분율로 색의 밝기를
                나타냅니다. 0%는 검은색, 50%는 보통 색, 100%는 흰색입니다.
              </p>
              <p className="mt_sm">
                <strong>A(투명도):</strong> 0~1 사이의 숫자 또는 0%~100% 사이의
                백분율로 표현하며, 1 = 100%(완전 불투명)입니다. (예:{" "}
                <code>hsl(0, 100%, 50%)</code>,{" "}
                <code>hsla(240, 100%, 50%, 0.5)</code>)
              </p>
            </li>
          </ol>
        </div>
        <CodeBlock
          title={"color : HSL"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {color: hsla(0, 100%, 50%, 1);}     /* #ff0000와 같은 색(red) */
				p {color: hsla(120, 100%, 50%, 1);}   /* #00ff00와 같은 색(green) */
				p {color: hsla(240, 100%, 50%, 1);}   /* #0000ff와 같은 색(blue) */
				p {color: hsla(240, 100%, 50%, 0.5);} /* #0000ff와 같은 색(blue)이면서 50% 만큼의 투명도를 가지고 있음 */

				/* CSS Colors Level 4부터는 hsla() 대신 hsl()을 사용해도 동일하게 작동합니다 */
				p {color: hsl(240, 100%, 50%, 0.5);}   /* 위의 hsla()와 동일 */`}
        </CodeBlock>
        <aside className="browser_support mt_m" data-tit="HSL">
          <ul>
            <li className="ie">3.0</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">1.0</li>
            <li className="opera">3.5</li>
            <li className="safari">1.0</li>
          </ul>
        </aside>
        <aside className="browser_support mt_m" data-tit="HSLA">
          <ul>
            <li className="ie">9+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">3.0</li>
            <li className="opera">10.0</li>
            <li className="safari">3.1</li>
          </ul>
        </aside>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn css3">transparent 키워드</h2>
        <p className="mt_l">
          <strong className="t_black">CSS3</strong> 속성으로,{" "}
          <code>transparent</code> 키워드는 완전히 투명한 색으로 "색"을 입힌
          항목의 뒷편이 모두 보입니다.
          <br />
          <code>transparent</code> = <code>rgba(0,0,0,0)</code>와 같습니다.
        </p>
        <CodeBlock
          title={"color : transparent"}
          language="css"
          className="uk_gist_code_box mt_l"
        >
          {`p {color: transparent;}`}
        </CodeBlock>
        <aside className="browser_support mt_m" data-tit="transparent">
          <ul>
            <li className="ie">9+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">3.0</li>
            <li className="opera">10.0</li>
            <li className="safari">3.1</li>
          </ul>
        </aside>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn css3">currentColor 키워드</h2>
        <p className="mt_l">
          <strong className="t_black">CSS3</strong> 속성으로,{" "}
          <code>currentColor</code> 키워드는 요소의 현재 <code>color</code>{" "}
          속성값을 참조합니다. 이를 통해 다른 속성(예: <code>border-color</code>
          , <code>background-color</code> 등)이 <code>color</code> 속성값을
          따라가도록 설정할 수 있습니다.
        </p>
        <p className="mt_ms">
          <code>currentColor</code>는 요소에 명시적으로 설정된{" "}
          <code>color</code> 값이 있으면 그 값을 사용하고, 없으면 상속받은{" "}
          <code>color</code> 값을 사용합니다. 이는 <code>color: inherit</code>
          과는 다릅니다. <code>inherit</code>은 항상 부모 요소의 값을 명시적으로
          상속받지만,
          <code>currentColor</code>는 요소의 현재 <code>color</code>{" "}
          값(명시적이든 상속이든)을 참조합니다.
        </p>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">최신 색상 모델 (CSS Color Level 4, 5)</h2>
        <p className="mt_l">
          <strong className="t_black">CSS Color Level 4</strong>와{" "}
          <strong className="t_black">Level 5</strong>에서는 sRGB 색역을
          넘어서는 더 넓은 색역을 지원하는 새로운 색상 모델을 제공합니다.
          <br />
          <code>lab()</code>, <code>lch()</code>, <code>color()</code> 함수와{" "}
          <code>color-mix()</code> 함수를 사용하여 더 풍부하고 정확한 색상
          표현과 색상 혼합이 가능합니다.
        </p>
        <p className="mt_ms">
          이러한 색상 모델은 특히 넓은 색역을 지원하는 디스플레이에서 더 생생한
          색상을 표현할 수 있으며, 접근성을 고려한 명도와 채도 제어에도
          유용합니다.
        </p>

        <article className="indent mt_l">
          <h3 className="ml_mn t_blue">lab() 색상 함수</h3>
          <p className="mt_ms">
            <code>lab()</code>는 CIE Lab 색 공간을 사용하는 색상 함수입니다.
            인간의 시각에 더 가까운 균일한 색 공간을 제공하며, sRGB를 초과하는
            색역을 표현할 수 있습니다.
          </p>
          <CodeBlock
            title={"lab()"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`.element {
						/* lab(명도, a축, b축) */
						background-color: lab(50% 50 0);
						/* lab(명도, a축, b축, 투명도) */
						background-color: lab(50% 50 0 / 0.8);
					}

					/* 예제 */
					.box1 { background-color: lab(60% 50 0); }      /* 밝은 빨강 */
					.box2 { background-color: lab(40% -50 0); }     /* 어두운 청록 */
					.box3 { background-color: lab(80% 0 50); }     /* 밝은 노랑 */`}
          </CodeBlock>
          <ul className="dot_lst indent mt_s">
            <li>첫 번째 값: 명도(Lightness) - 0% (검정) ~ 100% (흰색)</li>
            <li>두 번째 값: a축 - 녹색(-) ~ 빨강(+)</li>
            <li>세 번째 값: b축 - 파랑(-) ~ 노랑(+)</li>
            <li>네 번째 값(선택): 투명도(alpha) - 0 ~ 1</li>
          </ul>

          <div className="indent mt_ml">
            <h4 className="ml_mn t_blue">lab() 예제</h4>
            <p className="mt_ms">
              CIE Lab 색 공간을 사용한 색상 표현 예제입니다.
            </p>
            <div className="view_editor edit_code mt_m">
              <Suspense
                fallback={
                  <EditorFallback
                    className={`uk_editor min_height_500 mb_result_height_500 mt_m`}
                  />
                }
              >
                <UkEditorTarget
                  target="css/step01/2.3.color/2.3.2.lab-color.html"
                  className={`uk_editor min_height_500 mb_result_height_500 mt_m`}
                  mode="htmlmixed"
                  browser="default"
                  title={"2.3.2.lab-color"}
                  minHeight="500px"
                  result
                />
              </Suspense>
            </div>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">lch() 색상 함수</h3>
          <p className="mt_ms">
            <code>lch()</code>는 명도(Lightness), 채도(Chroma), 색조(Hue)를
            사용하는 색상 함수입니다. <code>lab()</code>보다 직관적이며, 채도를
            조절하여 접근성을 개선할 수 있습니다.
          </p>
          <CodeBlock
            title={"lch()"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`.element {
						/* lch(명도, 채도, 색조) */
						background-color: lch(50% 50 0);
						/* lch(명도, 채도, 색조, 투명도) */
						background-color: lch(50% 50 0 / 0.8);
					}

					/* 예제 */
					.box1 { background-color: lch(60% 50 0); }      /* 밝은 빨강 */
					.box2 { background-color: lch(40% 30 240); }   /* 어두운 파랑 */
					.box3 { background-color: lch(80% 40 90); }    /* 밝은 노랑 */`}
          </CodeBlock>
          <ul className="dot_lst indent mt_s">
            <li>첫 번째 값: 명도(Lightness) - 0% (검정) ~ 100% (흰색)</li>
            <li>두 번째 값: 채도(Chroma) - 0 (무채색) ~ 약 150 (최대 채도)</li>
            <li>세 번째 값: 색조(Hue) - 0 ~ 360 (각도)</li>
            <li>네 번째 값(선택): 투명도(alpha) - 0 ~ 1</li>
          </ul>
          <p className="mt_ms">
            <strong className="t_blue">접근성 활용:</strong> 채도를 낮춰서 색상
            대비를 조절하거나, 명도를 조절하여 가독성을 개선할 수 있습니다.
          </p>

          <div className="indent mt_ml">
            <h4 className="ml_mn t_blue">lch() 예제</h4>
            <p className="mt_ms">
              명도, 채도, 색조를 사용한 색상 표현 예제입니다.
            </p>
            <div className="view_editor edit_code mt_m">
              <Suspense
                fallback={
                  <EditorFallback
                    className={`uk_editor min_height_520 mb_result_height_520 mt_m`}
                  />
                }
              >
                <UkEditorTarget
                  target="css/step01/2.3.color/2.3.2.lch-color.html"
                  className={`uk_editor min_height_520 mb_result_height_520 mt_m`}
                  mode="htmlmixed"
                  browser="default"
                  title={"2.3.2.lch-color"}
                  minHeight="520px"
                  result
                />
              </Suspense>
            </div>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">color() 함수</h3>
          <p className="mt_ms">
            <code>color()</code> 함수는 다양한 색 공간을 지정할 수 있는 범용
            색상 함수입니다. <code>srgb</code>, <code>display-p3</code>,{" "}
            <code>rec2020</code> 등의 색 공간을 사용할 수 있습니다.
          </p>
          <CodeBlock
            title={"color()"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`.element {
						/* sRGB 색 공간 (기본) */
						background-color: color(srgb 1 0 0);

						/* Display P3 색 공간 (넓은 색역) */
						background-color: color(display-p3 1 0 0);

						/* Rec2020 색 공간 (초광색역) */
						background-color: color(rec2020 0.8 0.2 0.1);

						/* 투명도 추가 */
						background-color: color(srgb 1 0 0 / 0.5);
					}`}
          </CodeBlock>
          <p className="mt_ms">
            <strong className="t_blue">색 공간:</strong>
          </p>
          <ul className="dot_lst indent mt_s">
            <li>
              <code>srgb</code>: 표준 RGB 색 공간 (기본)
            </li>
            <li>
              <code>display-p3</code>: Apple Display P3 색 공간 (sRGB보다 넓은
              색역)
            </li>
            <li>
              <code>rec2020</code>: Rec. 2020 색 공간 (초광색역, HDR
              디스플레이용)
            </li>
          </ul>

          <div className="indent mt_ml">
            <h4 className="ml_mn t_blue">color() 예제</h4>
            <p className="mt_ms">
              다양한 색 공간(sRGB, Display P3)을 지정한 색상 표현 예제입니다.
            </p>
            <div className="view_editor edit_code mt_m">
              <Suspense
                fallback={
                  <EditorFallback
                    className={`uk_editor min_height_500 mb_result_height_500 mt_m`}
                  />
                }
              >
                <UkEditorTarget
                  target="css/step01/2.3.color/2.3.2.color-function.html"
                  className={`uk_editor min_height_500 mb_result_height_500 mt_m`}
                  mode="htmlmixed"
                  browser="default"
                  title={"2.3.2.color-function"}
                  minHeight="500px"
                  result
                />
              </Suspense>
            </div>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">color-mix() 함수</h3>
          <p className="mt_ms">
            <code>color-mix()</code> 함수는 두 색상을 지정된 비율로 혼합하여
            새로운 색상을 만듭니다. CSS에서 직접 색상을 혼합할 수 있어
            JavaScript 없이도 동적 색상 조절이 가능합니다.
          </p>
          <CodeBlock
            title={"color-mix()"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`.element {
						/* 두 색상을 50:50으로 혼합 */
						background-color: color-mix(in srgb, red 50%, blue 50%);

						/* 빨강 70%, 파랑 30%로 혼합 */
						background-color: color-mix(in srgb, red 70%, blue 30%);

						/* 다른 색 공간 사용 */
						background-color: color-mix(in lch, red 50%, blue 50%);

						/* 투명도가 있는 색상 혼합 */
						background-color: color-mix(in srgb, red 50%, transparent 50%);
					}`}
          </CodeBlock>
          <p className="mt_ms">
            <code>color-mix()</code> 문법:{" "}
            <code>color-mix(in 색공간, 색상1 비율%, 색상2 비율%)</code>
          </p>
          <p className="mt_ms">
            <strong className="t_blue">실용 예제:</strong> 테마 색상을 기본
            색상과 흰색/검정을 혼합하여 자동으로 밝기 변형을 만들 수 있습니다.
          </p>

          <div className="indent mt_ml">
            <h4 className="ml_mn t_blue">color-mix() 예제</h4>
            <p className="mt_ms">
              두 색상을 지정된 비율로 혼합한 결과 예제입니다.
            </p>
            <div className="view_editor edit_code mt_m">
              <Suspense
                fallback={
                  <EditorFallback
                    className={`uk_editor min_height_670 mb_result_height_670 mt_m`}
                  />
                }
              >
                <UkEditorTarget
                  target="css/step01/2.3.color/2.3.2.color-mix.html"
                  className={`uk_editor min_height_670 mb_result_height_670 mt_m`}
                  mode="htmlmixed"
                  browser="default"
                  title={"2.3.2.color-mix"}
                  minHeight="670px"
                  result
                />
              </Suspense>
            </div>
          </div>
        </article>

        <aside className="browser_support mt_xl" data-tit="modern color models">
          <ul>
            <li className="edge">79.0</li>
            <li className="chrome">111.0</li>
            <li className="firefox">113.0</li>
            <li className="opera">97.0</li>
            <li className="safari">15.4</li>
          </ul>
        </aside>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">
          접근성: <i className="t_blue">prefers-color-scheme</i>과{" "}
          <i className="t_blue">color-scheme</i>
        </h2>
        <p className="mt_l">
          사용자의 시스템 다크 모드 설정에 따라 웹사이트의 색상을 자동으로
          조정할 수 있습니다.
          <br />
          <code>prefers-color-scheme</code> 미디어 쿼리를 사용하면 사용자가
          선호하는 색상 테마(라이트/다크)를 감지하여 적절한 스타일을 적용할 수
          있습니다.
        </p>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">prefers-color-scheme</h3>
          <p className="mt_ms">
            <code>prefers-color-scheme</code>은 사용자의 시스템 색상 테마 설정을
            감지하는 미디어 쿼리입니다.
          </p>
          <CodeBlock
            title={"prefers-color-scheme"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`body {
						background-color: white;
						color: black;
					}

					/* 사용자가 다크 모드를 선호하는 경우 */
					@media (prefers-color-scheme: dark) {
						body {
							background-color: #1a1a1a;
							color: #e0e0e0;
						}
					}

					/* 사용자가 라이트 모드를 선호하는 경우 */
					@media (prefers-color-scheme: light) {
						body {
							background-color: white;
							color: black;
						}
					}`}
          </CodeBlock>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">color-scheme</h3>
          <p className="mt_ms">
            <code>color-scheme</code> 속성은 브라우저에게 요소가 어떤 색상
            테마를 지원하는지 알려줍니다.
            <br />
            이를 통해 브라우저가 스크롤바, 폼 컨트롤 등의 기본 스타일을 자동으로
            조정할 수 있습니다.
          </p>
          <CodeBlock
            title={"color-scheme"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`/* 라이트 모드만 지원 */
					:root {
						color-scheme: light;
					}

					/* 다크 모드만 지원 */
					:root {
						color-scheme: dark;
					}

					/* 라이트와 다크 모드 모두 지원 */
					:root {
						color-scheme: light dark;
					}`}
          </CodeBlock>
          <p className="mt_ms">
            <code>color-scheme</code>을 <code>meta</code> 태그에도 설정할 수
            있습니다:
          </p>
          <CodeBlock
            title={"color-scheme meta"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`&lt;meta name="color-scheme" content="light dark"&gt;`}
          </CodeBlock>
        </article>

        <article className="view_editor edit_code mt_xl indent">
          <h3 className="ml_mn ve_tit">prefers-color-scheme 예제</h3>
          <p className="mt_ms">
            시스템 다크 모드 설정에 따라 자동으로 색상이 변경되는 예제입니다.
          </p>
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_650 mb_result_height_650 mt_m`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.3.color/2.3.1.prefers-color-scheme.html"
              className={`uk_editor min_height_650 mb_result_height_650 mt_m`}
              mode="htmlmixed"
              browser="default"
              title={"2.3.1.prefers-color-scheme"}
              minHeight="650px"
              result
            />
          </Suspense>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">테스트 방법</h3>
          <p className="mt_ms">
            <code>prefers-color-scheme</code>을 테스트하는 방법:
          </p>
          <ul className="dot_lst indent mt_s">
            <li>
              <strong>Windows:</strong> 설정 → 개인 설정 → 색 → 다크 모드 선택
            </li>
            <li>
              <strong>macOS:</strong> 시스템 설정 → 일반 → 외관 → 다크 모드 선택
            </li>
            <li>
              <strong>브라우저 DevTools:</strong> 렌더링 탭에서
              "prefers-color-scheme" 에뮬레이션
            </li>
          </ul>
          <p className="mt_ms">
            <strong className="t_blue">참고:</strong> <code>color-scheme</code>{" "}
            속성이 설정되어 있어 브라우저의 기본 스크롤바와 폼 컨트롤도 자동으로
            조정됩니다.
          </p>
        </article>

        <aside
          className="browser_support mt_xl"
          data-tit="prefers-color-scheme"
        >
          <ul>
            <li className="edge">79.0</li>
            <li className="chrome">76.0</li>
            <li className="firefox">67.0</li>
            <li className="opera">62.0</li>
            <li className="safari">12.1</li>
          </ul>
        </aside>
      </section>

      <section
        className="view_editor edit_code mt_xxl"
        aria-label={"Color 속성 예제"}
      >
        <h2 className="ve_tit">Color 속성 예제</h2>
        <Suspense
          fallback={
            <EditorFallback
              className={`uk_editor indent min_height_600 mb_result_height_630 mt_l`}
            />
          }
        >
          <UkEditorTarget
            target="css/step01/2.3.color/2.3.color.html"
            className={`uk_editor indent min_height_600 mb_result_height_630 mt_l`}
            mode="htmlmixed"
            browser="default"
            title={"Color 속성 예제"}
            minHeight="600px"
            result
          />
        </Suspense>
      </section>

      <figure className="img_figure indent mt_l">
        <img src={`${IMG_CSS}/02_css_03.png`} alt="CSS 색상" />
        <figcaption className="reference">CSS 색상</figcaption>
      </figure>

      <aside className="reference_box mt_xxl">
        <strong className="tit">Color 속성 참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a
              href="https://www.w3.org/TR/css-color-3/"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              CSS Color Module Level 3
            </a>
          </li>
          <li className="reference">
            <a
              href="https://www.w3.org/TR/css-color-4/"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              CSS Color Module Level 4
            </a>
          </li>
          <li className="reference">
            <a
              href="https://www.w3.org/TR/css-color-5/"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              CSS Color Module Level 5
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/ko/docs/Web/CSS/color"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              MDN CSS Color
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
export default CssColorPage;
