import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

const PAGE_LAYOUT = {
  mainClass: "css_text",
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

function CssTextPage() {
  usePageMeta({
    title: "Text 속성",
    description:
      "CSS의 Text 속성은 웹 페이지에서 텍스트가 어떻게 표시될지 제어하는 속성들로 구성됩니다. 이 페이지에서는 텍스트의 정렬(text-align, vertical-align), 간격(letter-spacing, word-spacing), 줄바꿈(word-break, word-wrap), 공백 처리(white-space), 들여쓰기(text-indent), 장식(text-decoration), 변환(text-transform), 그림자(text-shadow) 등을 함께 소개합니다.",
    keyword:
      "style, css, Cascading Style Sheets, 텍스트, text, text-align, vertical-align, letter-spacing, word-spacing, word-break, word-wrap, white-space, text-indent, text-decoration, text-transform, text-overflow, direction, text-shadow",
    layout: PAGE_LAYOUT,
  });
  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note" aria-label="요약 설명">
        <strong className="sound_only">요약 설명</strong>
        <p>
          CSS의 <code>text</code> 속성은 텍스트의 표시 방식을 제어하는 속성들로
          구성됩니다.
          <br />
          텍스트의 정렬(<code>text-align</code>, <code>vertical-align</code>),
          간격(<code>letter-spacing</code>, <code>word-spacing</code>), 줄바꿈(
          <code>word-break</code>, <code>word-wrap</code>), 공백 처리(
          <code>white-space</code>), 들여쓰기(<code>text-indent</code>), 장식(
          <code>text-decoration</code>), 변환(<code>text-transform</code>),
          그림자(<code>text-shadow</code>) 등을 설정할 수 있습니다.
        </p>
      </blockquote>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="text-align 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">text-align</i> 속성
        </h2>
        <p className="mt_l">
          <code>text-align</code> 속성은 텍스트의 수평 방향 정렬을 설정합니다.
          <br />
          <code>text-align</code> 속성으로 설정된 정렬 방향은{" "}
          <code>direction</code> 속성과는 상관없이 우선적으로 적용됩니다.
        </p>
        <CodeBlock
          title={"text-align"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					text-align: left | right | center | justify | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">left</strong> : 박스의 왼쪽
              정렬입니다.
            </li>
            <li>
              <strong className="t_black">right</strong> : 박스의 오른쪽
              정렬입니다.
            </li>
            <li>
              <strong className="t_black">center</strong> : 박스의 중앙
              정렬입니다.
            </li>
            <li>
              <strong className="t_black">justify</strong> : 텍스트는 마지막
              줄을 제외하고 양쪽 정렬합니다. (자동 줄바꿈 시 오른쪽 경계선 부분
              정리)
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_450`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.5.text/2.5.text-align.html"
              className={`uk_editor min_height_450 mb_result_height_450`}
              mode="htmlmixed"
              browser="default"
              title={"2.5.text-align"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="text-align">
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

      <section
        className="txt_ex indent mt_xxl"
        aria-label="vertical-align 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">vertical-align</i> 속성
        </h2>
        <p className="mt_l">
          HTML 요소 내의 인라인(<code>inline</code>) 요소와 인라인 블록(
          <code>inline-block</code>) 요소의 수직 방향 정렬을 설정합니다.
          <br />
          요소 자체만을 정렬하고 내용에는 영향을 미치지 않지만, 테이블 셀에
          적용할 때는 내용에 영향을 미칩니다.
          <br />
          <code>vertical-align</code>은 정렬하려는 요소를 다른 인라인 요소에
          상대적으로 정렬하며, 같은 줄에서 인라인 요소의 크기나{" "}
          <code>line-height</code> 설정에 따라 높낮이가 달라질 수 있습니다.
          <br />
          대부분 부모 요소에 상대적으로 정렬합니다.
        </p>
        <CodeBlock
          title={"vertical-align"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`<style>
					p {
						vertical-align: baseline | length | % | sub | super | top | text-top | middle | bottom | text-bottom | initial | inherit;
					}
				</style>`}
        </CodeBlock>
        <div className="ol_lst mt_m">
          <p className="font-16 t_black">
            <strong>부모 기준 값</strong> : 이 값은 요소를 부모 요소를 기준으로
            세로로 정렬합니다.
          </p>
          <ol className="indent mt_s">
            <li>
              <strong className="t_black">baseline</strong> : 기본값으로 부모
              요소의 기준 선(baseline)에 맞춥니다.
            </li>
            <li>
              <strong className="t_black">middle</strong> : 부모 요소 중앙에
              위치합니다. 인라인 요소를 줄에서 가장 큰 요소의 중간에 정렬하지
              않고 가장 작은 소문자 x 높이의 중앙에 정렬합니다.
            </li>
            <li>
              <strong className="t_black">sub</strong> : 부모의 아래첨자
              기준선에 맞춥니다.
            </li>
            <li>
              <strong className="t_black">super</strong> : 부모의 위첨자
              기준선에 맞춥니다.
            </li>
            <li>
              <strong className="t_black">text-top</strong> : 요소의 맨 위를
              부모 <code>font</code>의 맨 위에 맞춥니다.
            </li>
            <li>
              <strong className="t_black">text-bottom</strong> : 요소의 맨
              아래를 부모 <code>font</code>의 맨 아래에 맞춥니다.
            </li>
            <li>
              <strong className="t_black">
                길이값(<code>px</code>, <code>cm</code> 등)
              </strong>{" "}
              : <code>0px</code>는 <code>baseline</code>과 같은 값입니다.
            </li>
            <li>
              <strong className="t_black">%(백분율)</strong> :{" "}
              <code>line-height</code>(줄간격)의 백분율이며, <code>0%</code>는{" "}
              <code>baseline</code>과 같은 값입니다.
            </li>
          </ol>
        </div>
        <div className="ol_lst mt_m">
          <p className="font-16 t_black">
            <strong>라인 기준 값</strong> : 전체 라인을 기준으로 요소를 세로로
            정렬합니다. 기준선이없는 요소의 경우 아래쪽 여백 가장자리가 대신
            사용됩니다.
          </p>
          <ol className="indent mt_s">
            <li>
              <strong className="t_black">top</strong> : 요소의 상단과 하위
              항목을 전체 줄의 상단(가장 큰 요소의 맨 위)과 정렬합니다.
            </li>
            <li>
              <strong className="t_black">bottom</strong> : 요소의 아래쪽과 그
              하위 항목을 전체 줄의 아래쪽(가장 낮은 요소)에 맞춥니다.
            </li>
          </ol>
        </div>
        <div className="ol_lst mt_m">
          <p className="font-16 t_black">
            <strong>테이블 셀의 값</strong>
          </p>
          <ol className="indent mt_s">
            <li>
              <strong className="t_black">
                baseline(그리고 sub, super, text-top, text-bottom, length, %)
              </strong>{" "}
              : 셀의 기준선을 기준선이 정렬된 행에 있는 다른 모든 셀의 기준선과
              정렬합니다.
            </li>
            <li>
              <strong className="t_black">top</strong> : 셀의 위쪽 패딩
              가장자리를 행의 위쪽에 맞춥니다.
            </li>
            <li>
              <strong className="t_black">middle</strong> : 행 내에서 셀의 패딩
              상자를 가운데에 맞춥니다.
            </li>
            <li>
              <strong className="t_black">bottom</strong> : 셀의 아래쪽 패딩
              모서리를 행의 아래쪽에 맞춥니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_550 mb_result_height_600`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.5.text/2.5.vertical-align.html"
              className={`uk_editor min_height_550 mb_result_height_600`}
              mode="htmlmixed"
              browser="default"
              title={"2.5.vertical-align"}
              minHeight="550px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="vertical-align">
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

      <section
        className="txt_ex indent mt_xxl"
        aria-label="letter-spacing 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">letter-spacing</i> 속성
        </h2>
        <p className="mt_l">
          <code>letter-spacing</code> 속성은 텍스트 내에서 글자 사이의
          간격(자간)을 설정합니다.
        </p>
        <CodeBlock
          title={"letter-spacing"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					letter-spacing: normal | length | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">normal</strong> : 현재 글꼴의 일반적인
              문자 간격입니다.
            </li>
            <li>
              <strong className="t_black">length</strong> : 문자 사이의 기본
              공백 외에 추가 문자 간 공백을 지정합니다. 값은 음수일 수 있지만
              구현별 제한이 있을 수 있습니다. 사용자 에이전트는 텍스트를
              정당화하기 위해 문자 간 공간을 더 늘리거나 줄일 수 없습니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_450`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.5.text/2.5.letter-spacing.html"
              className={`uk_editor min_height_450 mb_result_height_450`}
              mode="htmlmixed"
              browser="default"
              title={"2.5.letter-spacing"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="letter-spacing">
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

      <section
        className="txt_ex indent mt_xxl"
        aria-label="word-spacing 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">word-spacing</i> 속성
        </h2>
        <p className="mt_l">
          <code>word-spacing</code> 속성은 텍스트 내에서 단어 사이의 간격을
          설정합니다.
          <br />
          <code>letter-spacing</code> 속성과는 달리 문자 간의 간격이 아닌 단어
          간의 간격을 기준으로 설정합니다.
          <br />
          참고로 일부 스크린리더기에서는 양수 또는 음수{" "}
          <code>word-spacing</code> 값이 크면 스타일링이 적용된 문장을 읽을 수
          없게 됩니다.
        </p>
        <CodeBlock
          title={"word-spacing"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					word-spacing: normal | length | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">normal</strong> : 현재 글꼴 또는
              브라우저에 의해 정의된 일반적인 단어 간격입니다.
            </li>
            <li>
              <strong className="t_black">length</strong> : 글꼴로 정의된 고유한
              단어 간 간격 외에 추가 간격을 지정합니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_690`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.5.text/2.5.word-spacing.html"
              className={`uk_editor min_height_450 mb_result_height_690`}
              mode="htmlmixed"
              browser="default"
              title={"2.5.word-spacing"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="word-spacing">
          <ul>
            <li className="ie">6+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">1.0</li>
            <li className="opera">3.5</li>
            <li className="safari">1.0</li>
          </ul>
        </aside>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="word-break 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">word-break</i> 속성
        </h2>
        <p className="mt_l">
          단어의 분리(줄바꿈)를 어떻게 할 것인지 결정하는 속성입니다.
          <br />
          줄바꿈을 할 때 단어 기준으로 할지 글자 기준으로 할지 정하는 속성이며,
          반응형 웹디자인의 경우 가로 크기가 작을 때를 대비해서{" "}
          <code>word-break</code>의 속성값을 <code>break-all</code>로 정하는
          것이 좋습니다.
          <br />
          참고로 중국어/일본어/한글의 경우 W3C 문서에서 CJK(Chinese, Japanese,
          Korean의 약자)로 사용하고 있습니다.
        </p>
        <p className="mt_s">
          줄바꿈은 허용된 중단점에서 수행(soft wrap opportunity)되는 것이며,
          모든 속성이 기본값이라는 전제하에 줄바꿈은 대부분의 non-CJK(CJK 이외의
          문자)의 경우 '공백(띄어쓰기)'에서, CJK의 경우 '음절'에서 수행됩니다.
          <br />
          값은 <code>normal</code>(기본값), <code>break-all</code>,{" "}
          <code>keep-all</code>이 있습니다.
          <br />(<code>keep-all</code>의 경우 IE에서는 계속 지원하였으나
          webkit에서는 15년 6월부터 지원하였습니다.)
        </p>
        <CodeBlock
          title={"word-break"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`<style>
					p {
						word-break: normal | keep-all | break-all | break-word;
					}
				</style>`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">normal</strong> : 기본값으로 CJK
              문자는 글자(음절) 기준으로, CJK 이외의 문자는 단어 또는
              공백(띄어쓰기, 하이픈 <code>-</code>) 기준으로 줄바꿈합니다.
            </li>
            <li>
              <strong className="t_black">keep-all</strong> : 공백(띄어쓰기,
              하이픈 <code>-</code>, 그 외 기호) 기준으로 줄바꿈합니다. (CJK에만
              적용됨)
            </li>
            <li>
              <strong className="t_black">break-all</strong> : 글자(음절)
              기준으로 줄바꿈합니다.
            </li>
            <li>
              <strong className="t_black">break-word</strong> : 단어 기준으로
              줄바꿈합니다. (IE에서는 지원 안 함)
            </li>
          </ol>
        </div>
        <blockquote
          className="uk_note mt_xl"
          role="note"
          aria-label="요약 설명"
        >
          <strong className="sound_only">요약 설명</strong>
          <p className="reference">
            W3C에서 모든 어휘 자원(
            <a
              href="http://www.unicode.org/reports/tr14/"
              target="_blank"
              title="새창열림"
            >
              w3의 모든 [UAX14] 유니코드 내용
            </a>
            )을 제공하는 것이 아니기 때문에 CSS는 줄바꿈이 허용되는 곳을 완전히
            정의하지 않으며 예외 사항이 존재할 수 있습니다. 태국어, 라오어 및
            크메르어와 같은 언어는 단어를 구분하는데 공백이나 구두점을 사용하지
            않습니다. (음절 사이사이를 기반으로 한다는 정의도 없습니다.)
            결과적으로 그러한 텍스트의 중단점 수행 기회를 식별하기 위해서는 어휘
            자원이 필요합니다.
          </p>
        </blockquote>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_500`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.5.text/2.5.word-break.html"
              className={`uk_editor min_height_450 mb_result_height_500`}
              mode="htmlmixed"
              browser="default"
              title={"2.5.word-break"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="word-break">
          <ul>
            <li className="ie">5.5+</li>
            <li className="edge">12.0</li>
            <li className="chrome">4.0</li>
            <li className="firefox">15.0</li>
            <li className="opera">15.0</li>
            <li className="safari">3.1</li>
          </ul>
        </aside>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="word-wrap 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">word-wrap</i> 속성
        </h2>
        <p className="mt_l">
          박스의 가로 영역을 넘친 단어 내에서 임의의 분리 여부를 결정합니다.
          <br />
          넘친 단어를 줄바꿈하고 싶다면 <code>word-wrap</code> 속성의 값을
          바꾸면 됩니다.
          <br />
          이때 넘친 단어의 임의의 분리는 음절에서 발생하며{" "}
          <code>white-space</code> 속성이 기본값(<code>normal</code>)일 때만
          적용됩니다.
          <br />
          <code>word-wrap</code> 속성의 값은 <code>normal</code>(기본값),{" "}
          <code>break-word</code>가 있습니다.
          <br />
          줄바꿈을 할 때 <code>word-break</code> 속성과 <code>word-wrap</code>{" "}
          속성을 같이 사용하면 좀 더 원하는 결과를 얻을 수 있습니다.
        </p>
        <ul className="dot_lst mt_s">
          <li>
            예) 줄바꿈을 글자 단위로 하면{" "}
            <code>word-wrap: break-word; word-break: break-all;</code>
          </li>
          <li>
            예) 줄바꿈을 단어 단위로 하면{" "}
            <code>word-wrap: break-word; word-break: keep-all;</code>
          </li>
        </ul>
        <CodeBlock
          title={"word-wrap"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					word-wrap: normal | break-word | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">normal</strong> : 기본값으로 글자가
              길어도 끊어지지 않고 한 줄에 계속 표시합니다.
            </li>
            <li>
              <strong className="t_black">break-word</strong> : 강제로 끊어서
              줄바꿈합니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_620`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.5.text/2.5.word-wrap.html"
              className={`uk_editor min_height_450 mb_result_height_620`}
              mode="htmlmixed"
              browser="default"
              title={"2.5.word-wrap"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="word-wrap">
          <ul>
            <li className="ie">5.5+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">3.5</li>
            <li className="opera">10.5</li>
            <li className="safari">1.0</li>
          </ul>
        </aside>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="white-space 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">white-space</i> 속성
        </h2>
        <p className="mt_l">
          <code>white-space</code> 속성은 HTML 요소 내의 여백을 설정합니다.
        </p>
        <CodeBlock
          title={"white-space"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					white-space: normal | pre | nowrap | pre-wrap | pre-line | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">normal</strong> : 기본값으로 공백을
              여러 개 넣어도 공백 1개만 표시하고, 글이 길어지면 텍스트가 자동
              줄바꿈됩니다(wrap).
            </li>
            <li>
              <strong className="t_black">nowrap</strong> : 공백을 여러 개
              넣어도 1개만 표시하고, 텍스트가 길어도 줄바꿈되지 않고 같은 줄에
              계속 표시합니다.
            </li>
            <li>
              <strong className="t_black">pre</strong> : 공백을 코드에 있는
              그대로 표시합니다. <code>&lt;pre&gt;</code> 요소처럼 행동하며,
              코드에 줄바꿈이 없다면 줄바꿈이 되지 않습니다.
            </li>
            <li>
              <strong className="t_black">pre-wrap</strong> : 공백을 코드에 있는
              그대로 표시합니다. 코드에 줄바꿈이 없어도 자동 줄바꿈이 되며,
              IE8+부터 지원합니다.
            </li>
            <li>
              <strong className="t_black">pre-line</strong> : 공백을 여러 개
              넣어도 1개만 표시합니다. 코드에 줄바꿈이 없어도 자동 줄바꿈이
              되며, 코드에 줄바꿈이 있을 때도 그대로 표시합니다. IE8+부터
              지원합니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_550`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.5.text/2.5.white-space.html"
              className={`uk_editor min_height_450 mb_result_height_550`}
              mode="htmlmixed"
              browser="default"
              title={"2.5.white-space"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="white-space">
          <ul>
            <li className="ie">6+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">1.0</li>
            <li className="opera">6.0</li>
            <li className="safari">1.0</li>
          </ul>
        </aside>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="text-indent 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">text-indent</i> 속성
        </h2>
        <p className="mt_l">
          <code>text-indent</code> 속성은 단락의 첫 줄에 들여쓰기할지 안 할지를
          설정합니다.
          <br />웹 페이지에서 단락은 기본적으로 들여쓰기가 설정되어 있지
          않습니다.
        </p>
        <CodeBlock
          title={"text-indent"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					text-indent: normal | length | percentage | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">normal</strong> : 기본값으로 기본
              공란을 재설정합니다. 현재 글꼴 및 브라우저에 의해 정의된 일반적인
              단어 간격입니다.
            </li>
            <li>
              <strong className="t_black">length</strong> : <code>px</code>,{" "}
              <code>em</code>, <code>cm</code> 등으로 지정합니다. (음수값 허용)
            </li>
            <li>
              <strong className="t_black">percentage</strong> : 간격을 백분율(
              <code>%</code>)로 지정합니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_630`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.5.text/2.5.text-indent.html"
              className={`uk_editor min_height_450 mb_result_height_630`}
              mode="htmlmixed"
              browser="default"
              title={"2.5.text-indent"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="text-indent">
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

      <section
        className="txt_ex indent mt_xxl"
        aria-label="text-decoration 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">text-decoration</i> 속성
        </h2>
        <p className="mt_l reference">
          <code>text-decoration</code> 속성은 텍스트에 여러 가지 효과를
          설정하거나 제거하는데 사용합니다.
          <br />
          <code>text-decoration</code> 속성값을 <code>none</code>으로 설정하여
          링크(link)가 설정된 텍스트의 밑줄을 제거하는데 자주 사용합니다.
          <br />
          <code>text-decoration</code> 속성값은{" "}
          <a
            href="https://drafts.csswg.org/css-text-decor-3/#text-decoration-line"
            target="_blank"
            title="새창열림"
          >
            CSS Text Decoration Module Level 3 해당 사양에서
            'text-decoration-line'으로 새롭게 정의
          </a>
          되었습니다.
        </p>
        <CodeBlock
          title={"text-decoration"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					text-decoration: none | [ underline | overline | line-through ] | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">none</strong> : 기본값으로 밑줄이 없는
              보통 글자입니다.
            </li>
            <li>
              <strong className="t_black">underline</strong> : 글자 아래에
              밑줄입니다.
            </li>
            <li>
              <strong className="t_black">overline</strong> : 글자 위에 줄이
              그어집니다.
            </li>
            <li>
              <strong className="t_black">line-through</strong> : 글자 중간에
              줄이 그어집니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_550`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.5.text/2.5.text-decoration.html"
              className={`uk_editor min_height_450 mb_result_height_550`}
              mode="htmlmixed"
              browser="default"
              title={"2.5.text-decoration"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="text-decoration">
          <ul>
            <li className="ie">6+</li>
            <li className="edge">12.0</li>
            <li className="chrome">4.0</li>
            <li className="firefox">2.0</li>
            <li className="opera">10.0</li>
            <li className="safari">3.2</li>
          </ul>
        </aside>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="text-transform 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">text-transform</i> 속성
        </h2>
        <p className="mt_l reference">
          <code>text-transform</code> 속성은 텍스트에 포함된 영문자에 대한
          대소문자를 설정합니다.
          <br />
          이 속성은 텍스트에 포함된 모든 영문자를 대문자나 소문자로 변경시켜
          주며, 단어의 첫 문자만을 대문자로 변경시킬 수도 있습니다.
          <br />
          <code>text-transform</code> 속성은 한글에는 영향을 주지 않으며, 오직
          영문자에만 적용됩니다.
        </p>
        <CodeBlock
          title={"text-transform"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					text-transform: none | capitalize | uppercase | lowercase | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">none</strong> : 기본값으로 텍스트를
              HTML 코드에 있는 그대로 읽습니다.
            </li>
            <li>
              <strong className="t_black">capitalize</strong> : 각 단어의 첫
              번째 문자를 대문자로 만듭니다. (예: Cascading Style Sheets.)
            </li>
            <li>
              <strong className="t_black">uppercase</strong> : 모든 문자를
              대문자로 바꿉니다. (예: CASCADING STYLE SHEETS.)
            </li>
            <li>
              <strong className="t_black">lowercase</strong> : 모든 문자를
              소문자로 바꿉니다. (예: cascading style sheets.)
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={<EditorFallback className={`uk_editor min_height_450`} />}
          >
            <UkEditorTarget
              target="css/step01/2.5.text/2.5.text-transform.html"
              className={`uk_editor min_height_450`}
              mode="htmlmixed"
              browser="default"
              title={"2.5.text-transform"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="text-transform">
          <ul>
            <li className="ie">6+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">1.0</li>
            <li className="opera">3.5</li>
            <li className="safari">1.0</li>
          </ul>
        </aside>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="text-overflow 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">text-overflow</i> 속성
        </h2>
        <p className="mt_l reference">
          부모 영역을 벗어난 wrapping(자동줄바꿈)이 되지 않은 텍스트의 처리
          방법을 정의합니다.
          <br />
          이 프로퍼티를 사용하기 위해서는 아래의 조건이 필요합니다.
          <br />
          <code>width</code> 프로퍼티가 지정되어 있어야 하며, 이를 위해 필요할
          경우 block 레벨 요소로 변경하여야 합니다.
          <br />
          자동 줄바꿈을 방지하려면 <code>white-space</code> 프로퍼티를{" "}
          <code>nowrap</code>으로 설정합니다.
          <br />
          <code>overflow</code> 프로퍼티에 반드시 <code>visible</code> 이외의
          값이 지정되어 있어야 합니다.
        </p>
        <CodeBlock
          title={"text-overflow"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					text-overflow: clip | ellipsis | initial | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">clip</strong> : 영역을 벗어난 텍스트를
              표시하지 않습니다. (기본값)
            </li>
            <li>
              <strong className="t_black">ellipsis</strong> : 영역을 벗어난
              텍스트를 잘라내어 보이지 않게 하고 말줄임표(…)를 표시합니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_550 mb_result_height_580`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.5.text/2.5.text-overflow.html"
              className={`uk_editor min_height_550 mb_result_height_580`}
              mode="htmlmixed"
              browser="default"
              title={"2.5.text-overflow"}
              minHeight="550px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="text-overflow">
          <ul>
            <li className="ie">6+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">7.0</li>
            <li className="opera">11.0</li>
            <li className="safari">1.3</li>
          </ul>
        </aside>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="direction 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">direction</i> 속성
        </h2>
        <p className="mt_l reference">
          <code>direction</code> 속성은 텍스트가 써지는 방향을 설정합니다.
          <br />
          웹 페이지에서 텍스트는 기본적으로 왼쪽에서 오른쪽 방향으로 써집니다.
          <br />
          <code>direction</code> 속성이 <code>left-to-right</code>(
          <code>ltr</code>)일 때는 기본 설정처럼 텍스트가 왼쪽에서 오른쪽
          방향으로 써집니다.
          <br />
          하지만 <code>direction</code> 속성이 <code>right-to-left</code>(
          <code>rtl</code>)일 때는 텍스트가 반대 방향인 오른쪽에서 왼쪽 방향으로
          써집니다.
          <br />
          아랍어는 한글이나 영어와는 달리 오른쪽에서 왼쪽 방향으로 텍스트를 읽고
          쓰는 언어입니다.
          <br />
          따라서 아랍어와 같이 텍스트를 반대 방향으로 쓰는 언어를 나타낼 때는
          텍스트가 써지는 방향을 <code>direction</code> 속성을 사용하여 변경해야
          합니다.
        </p>
        <CodeBlock
          title={"direction"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					direction: ltr | rtl;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">ltr</strong> : 기본값으로 왼쪽에서
              오른쪽으로 이동합니다.
            </li>
            <li>
              <strong className="t_black">rtl</strong> : 오른쪽에서 왼쪽으로
              이동합니다.
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_500 mb_result_height_530`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.5.text/2.5.direction.html"
              className={`uk_editor min_height_500 mb_result_height_530`}
              mode="htmlmixed"
              browser="default"
              title={"2.5.direction"}
              minHeight="500px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="direction">
          <ul>
            <li className="ie">5.5+</li>
            <li className="edge">12.0</li>
            <li className="chrome">2.0</li>
            <li className="firefox">1.0</li>
            <li className="opera">9.2</li>
            <li className="safari">1.0</li>
          </ul>
        </aside>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="text-shadow 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">text-shadow</i> 속성
        </h2>
        <p className="mt_l reference">
          <code>text-shadow</code> 속성은 텍스트에 그림자 효과를 설정합니다.
          <br />
          <code>text-shadow</code> 속성은 쉼표(<code>,</code>)로 구분하여 여러
          개의 텍스트 그림자를 적용할 수 있습니다.
        </p>
        <CodeBlock
          title={"text-shadow"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`p {
					text-shadow: offset-x offset-y blur-radius color | none | initial | inherit;
				}`}
        </CodeBlock>
        <div className="ol_lst indent mt_ms">
          <ol>
            <li>
              <strong className="t_black">none</strong> : 그림자 효과를
              없앱니다.
            </li>
            <li>
              <strong className="t_black">initial</strong> : 기본값으로
              설정합니다.
            </li>
            <li>
              <strong className="t_black">inherit</strong> : 부모 요소의
              속성값을 상속받습니다.
            </li>
            <li>
              <strong className="t_black">offset-x</strong> : 그림자의 수평
              거리를 정합니다. (필수)
            </li>
            <li>
              <strong className="t_black">offset-y</strong> : 그림자의 수직
              거리를 정합니다. (필수)
            </li>
            <li>
              <strong className="t_black">blur-radius</strong> : 흐림 정도를
              정합니다. (선택: 값을 정하지 않으면 0)
            </li>
            <li>
              <strong className="t_black">color</strong> : 색을 정합니다. (선택:
              값을 정하지 않으면 브라우저 기본값)
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_550`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.5.text/2.5.text-shadow.html"
              className={`uk_editor min_height_450 mb_result_height_550`}
              mode="htmlmixed"
              browser="default"
              title={"2.5.text-shadow"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
        <aside className="browser_support mt_m" data-tit="text-shadow">
          <ul>
            <li className="ie">10+</li>
            <li className="edge">12.0</li>
            <li className="chrome">2.0</li>
            <li className="firefox">3.5</li>
            <li className="opera">9.5</li>
            <li className="safari">1.1</li>
          </ul>
        </aside>
      </section>

      <figure className="img_figure indent mt_l">
        <img src={`${IMG_CSS}/02_css_05.png`} alt="CSS 텍스트" />
        <figcaption className="reference">CSS 텍스트</figcaption>
      </figure>

      <aside className="reference_box mt_xxl" aria-label="Text 속성 참조">
        <strong className="tit">Text 속성 참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a
              href="https://www.w3.org/TR/CSS2/text.html"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              W3C Text
            </a>
          </li>
          <li className="reference">
            <a
              href="https://www.w3.org/TR/css-text-3/"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              CSS Text Module Level 3
            </a>
          </li>
          <li className="reference">
            <a
              href="https://drafts.csswg.org/css-text-decor-3/"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              CSS Text Decoration Module Level 3
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              MDN Text
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
export default CssTextPage;
