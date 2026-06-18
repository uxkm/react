import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

const PAGE_LAYOUT = {
  mainClass: "css_font",
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
const IMG_CSS_BEGINNER = "/images/css/cssBeginner";

function EditorFallback({ className = "uk_editor min_height_400" }) {
  return <div className={className} aria-hidden />;
}

function CssFontPage() {
  usePageMeta({
    title: "Font 속성",
    description:
      "CSS의 Font 속성은 텍스트의 글꼴을 제어하는 속성들로 구성됩니다. 이 페이지에서는 글꼴의 종류(font-family), 크기(font-size), 두께(font-weight), 스타일(font-style), 줄 간격(line-height)을 개별적으로 설정하는 방법과 font 축약형 속성을 사용하여 한 번에 설정하는 방법을 함께 소개합니다.",
    keyword:
      "style, css, Cascading Style Sheets, 글꼴, font, font-style, font-family, font-weight, line-height, 축약형",
    layout: PAGE_LAYOUT,
  });
  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note" aria-label="요약 설명">
        <strong className="sound_only">요약 설명</strong>
        <p>
          CSS의 <code>font</code> 속성은 텍스트의 글꼴을 제어하는 속성들로
          구성됩니다.
          <br />
          글꼴의 종류(<code>font-family</code>), 크기(<code>font-size</code>),
          두께(<code>font-weight</code>), 스타일(<code>font-style</code>), 줄
          간격(<code>line-height</code>) 등을 개별적으로 설정하거나,{" "}
          <code>font</code> 축약형 속성을 사용하여 한 번에 설정할 수 있습니다.
        </p>
      </blockquote>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="font-family 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">font-family</i> 속성
        </h2>
        <p className="mt_l">
          폰트를 지정하는 속성입니다. 다만 컴퓨터에 해당 폰트가 설치되어 있지
          않으면 적용되지 않습니다.
          <br />
          <code>font-family</code> 속성은 하나의 글꼴만 설정할 수도 있고, 여러
          개의 글꼴을 함께 설정할 수도 있습니다.
          <br />
          여러 개의 글꼴을 설정하면 웹 브라우저는 앞에서부터 순서대로 글꼴을
          확인합니다.
          <br />
          첫 번째 글꼴이 없으면 다음 글꼴을 확인하고, 이런 식으로 존재하는
          글꼴을 찾아 해당 글꼴로 표시합니다.
          <br />
          글꼴 이름이 한 단어 이상이면 반드시 따옴표로 감싸야 하고, 여러 개의
          글꼴을 나열할 때는 쉼표(<code>,</code>)로 구분합니다.
        </p>
        <div className="mt_s">
          <strong className="t_black">
            CSS에는 두 가지의 글꼴 집합(font family)이 존재합니다.
          </strong>
          <br />
          <div className="indent">
            <i className="t_black">generic family</i> : 비슷한 모양을 가지는
            글꼴 집합 (<code>Serif</code>, <code>Sans Serif</code>,{" "}
            <code>Display</code>, <code>Handwriting</code>,{" "}
            <code>Monospace</code> 등)
            <br />
            <i className="t_black">font family</i> : 특정 글꼴 집합 (
            <code>"Roboto"</code>, <code>"Noto Sans KR"</code>,{" "}
            <code>"Nanum Gothic"</code> 등)
          </div>
        </div>
        <CodeBlock
          title={"font-family"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					font-family: inherit | family-name;
				}
				p {
					font-family: "Malgun Gothic", "Times New Roman", Times, serif;
				}`}
        </CodeBlock>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="font-style 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">font-style</i> 속성
        </h2>
        <p className="mt_l">
          <code>font-style</code> 속성은 주로 이탤릭체를 표현할 때 사용하며,
          다음과 같이 4가지 속성값을 가집니다.
        </p>
        <CodeBlock
          title={"font-style"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					font-style: normal | italic | oblique | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">normal</strong> : 기본값으로 텍스트에
              스타일을 적용하지 않습니다.
            </li>
            <li>
              <strong className="t_black">italic</strong> : 텍스트를 이탤릭체로
              표시합니다.
            </li>
            <li>
              <strong className="t_black">oblique</strong> : 비스듬한 모양으로
              지정합니다. <code>italic</code>과 매우 유사하지만 지원하는
              브라우저가 거의 없습니다.
            </li>
            <li>
              <strong className="t_black">inherit</strong> : 부모 요소의 값을
              상속 받습니다.
            </li>
          </ol>
        </div>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="font-size 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">font-size</i> 속성
        </h2>
        <p className="mt_l">
          <code>font-size</code> 속성은 텍스트의 크기를 설정합니다.
          <br />
          웹 디자인에서 텍스트 크기는 매우 중요한 요소지만, 제목을 표현할 때는
          텍스트 크기만 키우면 안 됩니다.
          <br />
          제목을 표현할 때는 <code>&lt;h1&gt;</code>부터 <code>&lt;h6&gt;</code>{" "}
          같은 제목용 HTML 요소를 사용해야 합니다.
          <br />
          <code>font-size</code> 속성값은 절대 크기와 상대 크기로 나눌 수
          있습니다.
          <br />
          절대 크기는 명시된 크기 그대로 설정되며, 모든 웹 브라우저에서 같은
          크기로 표현됩니다.
          <br />
          상대 크기는 주변 HTML 요소의 크기에 따라 텍스트 크기도 함께 변하고,
          사용자가 웹 브라우저를 통해 텍스트 크기를 직접 변경할 수도 있습니다.
          <br />
          자주 사용되는 크기 단위는 백분율(<code>%</code>), 배수(<code>em</code>
          ), 픽셀(<code>px</code>)입니다.
        </p>
        <CodeBlock
          title={"font-size"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					font-size: 절대 크기(xx-small | x-small | small | medium | large | x-large | xx-large) | 상대 크기(em) | length(길이) | % | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">length(길이)</strong> : 부동 소수점
              숫자 뒤에 절대 단위(<code>cm</code>, <code>mm</code>,{" "}
              <code>in</code>, <code>pt</code>, <code>pc</code>) 또는 상대 단위(
              <code>em</code>, <code>ex</code>, <code>px</code>)를 붙여서
              사용합니다.
            </li>
            <li>
              <strong className="t_black">%(퍼센트)</strong> : 퍼센트 부호(
              <code>%</code>)가 뒤에 오는 정수를 지정합니다.
            </li>
            <li>
              <strong className="t_black">initial</strong> : 기본값을
              지정합니다.
            </li>
            <li>
              <strong className="t_black">inherit</strong> : 부모 요소의 값을
              상속 받습니다.
            </li>
          </ol>
        </div>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="font-weight 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">font-weight</i> 속성
        </h2>
        <p className="mt_l">
          글꼴의 두께를 지정하는 속성입니다.
          <br />
          <code>font-weight</code> 속성으로 텍스트를 얼마나 두껍게 표현할지
          설정할 수 있습니다.
          <br />
          <code>lighter</code>, <code>normal</code>, <code>bold</code>,{" "}
          <code>bolder</code> 같은 키워드를 사용하거나,
          <code>100</code>, <code>200</code>, <code>300</code>, ... ,{" "}
          <code>900</code> 같은 숫자로도 두께를 설정할 수 있습니다.
        </p>
        <CodeBlock
          title={"font-weight"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					font-weight: normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">normal</strong> : 기본값으로 보통
              두께를 지정합니다.
            </li>
            <li>
              <strong className="t_black">bold</strong> : 굵은 글꼴을
              지정합니다.
            </li>
            <li>
              <strong className="t_black">bolder</strong> : 기본{" "}
              <code>bold</code>보다 더 굵은 글꼴을 지정합니다.
            </li>
            <li>
              <strong className="t_black">lighter</strong> : 보통보다 얇은
              글꼴을 지정합니다.
            </li>
            <li>
              <strong className="t_black">
                100, 200, 300, 400, 500, 600, 700, 800, 900
              </strong>{" "}
              : <code>100</code>이 가장 얇고 숫자가 커질수록 더 굵어집니다.{" "}
              <code>400</code>은 <code>normal</code>과 같고, <code>700</code>은{" "}
              <code>bold</code>와 같습니다.
            </li>
          </ol>
        </div>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="font-variant 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">font-variant</i> 속성
        </h2>
        <p className="mt_l">
          글꼴을 작은 대문자로 지정하는 속성입니다.
          <br />
          <code>font-variant</code> 속성값을 <code>small-caps</code>로 설정하면
          텍스트의 모든 소문자가 작은 대문자로 변경됩니다.
          <br />
          이때 대문자는 기존 크기 그대로 유지되고, 소문자만 작은 대문자로
          바뀝니다.
          <br />
          작은 대문자(small-caps)는 기존 대문자보다 약간 작은 크기의 대문자를
          의미합니다.
          <br />
          <code>font-variant</code> 속성은 한글에는 적용되지 않고 영문자에만
          적용됩니다.
          <br />
          <code>small-caps</code>를 지원하는 기본 폰트가 적기 때문에,
          <code>font-size: 0.8em</code>과 <code>text-transform: uppercase</code>
          를 함께 사용하면 비슷한 효과를 얻을 수 있습니다.
        </p>
        <CodeBlock
          title={"font-variant"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					font-variant: normal | small-caps | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">normal</strong> : 기본값으로 보통
              글꼴을 지정합니다.
            </li>
            <li>
              <strong className="t_black">small-caps</strong> : 작은 대문자
              글꼴을 지정합니다.
            </li>
            <li>
              <strong className="t_black">inherit</strong> : 부모 요소의 값을
              상속 받습니다.
            </li>
          </ol>
        </div>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="font-stretch 속성 설명"
      >
        <h2 className="ml_mn css3">
          <i className="t_blue">font-stretch</i> 속성
        </h2>
        <p className="mt_l">
          <strong className="t_black">CSS3</strong>에 추가된 속성으로, 글자의
          폭(너비)을 넓게 늘이거나 좁게 축소할 수 있습니다.
          <br />
          <code>font-stretch</code> 속성은 처음에{" "}
          <strong className="t_black">CSS2</strong>에서 정의되었지만, 브라우저
          구현 부족으로 <strong className="t_black">CSS2.1</strong>에서 삭제되고{" "}
          <strong className="t_black">CSS3</strong>에서 다시 정의되었습니다.
        </p>
        <CodeBlock
          title={"font-stretch"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					font-stretch: normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">ultra-condensed</strong> : 할 수 있는
              한 폭을 좁힙니다.
            </li>
            <li>
              <strong className="t_black">extra-condensed</strong> :{" "}
              <code>condensed</code>보다 좁지만 <code>ultra-condensed</code>
              보다는 넓습니다.
            </li>
            <li>
              <strong className="t_black">condensed</strong> :{" "}
              <code>semi-condensed</code>보다 좁지만{" "}
              <code>extra-condensed</code>보다는 넓습니다.
            </li>
            <li>
              <strong className="t_black">semi-condensed</strong> :{" "}
              <code>normal</code>보다 좁지만 <code>condensed</code>보다는
              넓습니다.
            </li>
            <li>
              <strong className="t_black">normal</strong> : 기본값으로 글꼴을
              넓히거나 좁히지 않습니다.
            </li>
            <li>
              <strong className="t_black">semi-expanded</strong> :{" "}
              <code>normal</code>보다 넓지만 <code>expanded</code>보다는
              좁습니다.
            </li>
            <li>
              <strong className="t_black">expanded</strong> :{" "}
              <code>semi-expanded</code>보다 넓지만 <code>extra-expanded</code>
              보다는 좁습니다.
            </li>
            <li>
              <strong className="t_black">extra-expanded</strong> :{" "}
              <code>expanded</code>보다 넓지만 <code>ultra-expanded</code>보다는
              좁습니다.
            </li>
            <li>
              <strong className="t_black">ultra-expanded</strong> : 할 수 있는
              한 폭을 넓힙니다.
            </li>
            <li>
              <strong className="t_black">inherit</strong> : 부모 요소의 값을
              상속 받습니다.
            </li>
          </ol>
        </div>

        <figure className="img_figure mt_m">
          <img
            src={`${IMG_CSS_BEGINNER}/universwidths.png`}
            alt="font-stretch 예시"
          />
          <figcaption>
            <code>font-stretch</code> 예시 [이미지 참조 : W3C CSS Fonts Module
            Level 3]
          </figcaption>
        </figure>
        <aside className="browser_support mt_m" data-tit="font-stretch">
          <ul>
            <li className="ie">9+</li>
            <li className="edge">12.0</li>
            <li className="chrome">48.0</li>
            <li className="firefox">9.0</li>
            <li className="opera">45.0</li>
            <li className="safari">11.0</li>
          </ul>
        </aside>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="font-size-adjust 속성 설명"
      >
        <h2 className="ml_mn css3">
          <i className="t_blue">font-size-adjust</i> 속성
        </h2>
        <p className="mt_l">
          소문자의 높이에 따라 글꼴 크기를 조정하는 속성입니다. 작은 크기에서
          글꼴의 가독성은 대문자보다 소문자 크기에 의해 결정되기 때문에
          유용합니다.
          <br />
          <strong className="t_black">CSS3</strong>에 추가된 속성으로, 소문자와
          대문자 사이의 비율을 유지하면서
          <code>font-size</code> 값을 조정해 글꼴에 관계없이 가독성을 일정하게
          유지합니다.
          <br />
          일반적으로 <code>font-family</code>에 따라 글꼴 크기가 달라질 수
          있는데,
          <code>font-size-adjust</code> 속성으로 이를 예방할 수 있습니다.
          <br />
          대소문자 사이의 비율은 <code>font x-height / font size</code> 값으로
          계산됩니다.
          <br />
          <code>font-size-adjust</code>은 처음에{" "}
          <strong className="t_black">CSS2</strong>에서 정의되었지만{" "}
          <strong className="t_black">CSS 2.1</strong>에서 삭제되고
          <strong className="t_black">CSS3</strong>에서 새롭게 정의되었습니다.
          <br />
          <b>
            최신 브라우저에서는 대부분 지원되지만, 일부 구형 브라우저에서는
            지원하지 않을 수 있습니다.
          </b>
        </p>
        <CodeBlock
          title={"font-size-adjust"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {font-size-adjust: none | number | inherit;}
				p {
					font-size: 14px;
					font-size-adjust: 0.5;
				}
				/* (0.5 × 14px) = 14px */`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">number(숫자)</strong> : 사용할 비율을
              지정합니다.
            </li>
            <li>
              <strong className="t_black">none</strong> : 기본값으로 글꼴 크기를
              변경하지 않습니다.
            </li>
            <li>
              <strong className="t_black">inherit</strong> : 부모 요소의 값을
              상속 받습니다.
            </li>
          </ol>
        </div>

        <figure className="img_figure mt_m">
          <img
            src={`${IMG_CSS_BEGINNER}/fontsizeadjust.png`}
            alt="font-size-adjust 예시"
          />
          <figcaption>
            font-size-adjust 예시 [이미지 참조 : W3C CSS Fonts Module Level 3]
          </figcaption>
        </figure>
        <aside className="browser_support mt_m" data-tit="font-size-adjust">
          <ul>
            <li className="ie false">지원안함</li>
            <li className="edge">127+</li>
            <li className="chrome">127+</li>
            <li className="firefox">118+</li>
            <li className="opera">113+</li>
            <li className="safari">17.0+</li>
          </ul>
        </aside>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="line-height 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">line-height</i> 속성
        </h2>
        <p className="mt_l">
          <code>line-height</code> 속성은 텍스트의 줄 간격을 설정합니다.
          <br />
          <code>font</code> 속성을 축약형으로 사용할 때는{" "}
          <code>font-size/line-height</code> 형식으로 함께 사용할 수 있습니다.
        </p>
        <CodeBlock
          title={"line-height"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {line-height: normal | number | length | initial | inherit;}

				p {line-height: normal;}
				p {line-height: 1.6;}
				p {line-height: 26px;}
				p {line-height: 140%;}`}
        </CodeBlock>
      </section>

      <section className="txt_ex indent mt_xxl" aria-label="축약형 설명">
        <h2 className="ml_mn">
          <i className="t_blue">축약형</i> 속성
        </h2>
        <p className="mt_l">
          <code>font</code> 속성을 축약형(Shorthand font property) 방식으로
          사용하면 모든 <code>font</code> 속성을 한번에 지정할 수 있습니다.
          <br />
          축약형으로 사용할 때는 <code>line-height</code> 속성도 함께 사용할 수
          있습니다.
        </p>
        <CodeBlock
          title={"Shorthand font property"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p { font: font-style | font-variant | font-weight | font-stretch | font-size/line-height | font-family | inherit }
				p { font: 12pt/14pt sans-serif; }
				p { font: 80% sans-serif; }
				p { font: x-large/110% "new century schoolbook", serif; }
				p { font: bold italic large Palatino, serif; }
				p { font: normal small-caps 120%/120% fantasy; }
				p { font: condensed oblique 12pt "Helvetica Neue", serif; }

				/* 글씨 크기 12픽셀, 줄 높이 14픽셀, 글꼴 sans-serif */
				p { font: 12px/14px sans-serif }

				/* 글씨 크기 부모 또는 기본값(부모가 없을 경우)의 80%, 글꼴 sans-serif */
				p { font: 80% sans-serif }

				/* 글씨 굵기 굵게, 스타일 기울이기, 글씨 크기 크게, 글꼴 serif */
				p { font: bold italic large serif }

				/* 창의 상태표시줄과 같은 글꼴 사용 */
				p { font: status-bar }`}
        </CodeBlock>
      </section>

      <section
        className="view_editor edit_code mt_xxl"
        aria-label={"Font 속성 예제"}
      >
        <h2 className="ve_tit">Font 속성 예제</h2>
        <Suspense
          fallback={
            <EditorFallback
              className={`uk_editor indent min_height_450 mb_result_height_550 mt_l`}
            />
          }
        >
          <UkEditorTarget
            target="css/step01/2.4.font/2.4.font.html"
            className={`uk_editor indent min_height_450 mb_result_height_550 mt_l`}
            mode="htmlmixed"
            browser="default"
            title={"Font 속성 예제"}
            minHeight="450px"
            result
          />
        </Suspense>
      </section>

      <figure className="img_figure mt_xxl" aria-label="Typography 예시">
        <img src={`${IMG_CSS_BEGINNER}/uxkm_typo.svg`} alt="Typography 예시" />
        <figcaption>[Typography 예시]</figcaption>
      </figure>

      <aside
        className="browser_support mt_xxl"
        data-tit="font"
        aria-label="브라우저 지원 현황"
      >
        <ul>
          <li className="ie">지원</li>
          <li className="edge">12.0</li>
          <li className="chrome">1.0</li>
          <li className="firefox">1.0</li>
          <li className="opera">3.5</li>
          <li className="safari">1.0</li>
        </ul>
      </aside>

      <figure className="img_figure indent mt_l">
        <img src={`${IMG_CSS}/02_css_04.png`} alt="CSS 글꼴" />
        <figcaption className="reference">CSS 글꼴</figcaption>
      </figure>

      <aside className="reference_box mt_xxl" aria-label="Font 속성 참조">
        <strong className="tit">Font 속성 참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a
              href="https://www.w3.org/TR/CSS2/fonts.html"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              W3C Font
            </a>
          </li>
          <li className="reference">
            <a
              href="https://drafts.csswg.org/css-fonts-3/"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              CSS Fonts Module Level 3
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
export default CssFontPage;
