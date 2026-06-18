import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "i_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "i element",
  description:
    "i 요소는 HTML 문서에서 텍스트를 기울임체로 시각적으로 구분할 때 사용하는 인라인 태그로, 의미상 강조를 위한 것은 아니며 외래어, 기술 용어, 전문 용어, 아이콘 글꼴 등 문맥상 구분이 필요한 텍스트를 표현할 때 사용됩니다. 이 페이지에서는 i 요소의 주요 역할 및 특징을 설명하고, i 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, i",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_300" aria-hidden />;
}

function IElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl italic" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p className="italic">
          <code className="italic">&lt;i&gt;</code> 요소는{" "}
          <b>
            텍스트를 <strong>기울임(italic)</strong>으로 표시하는 시맨틱 태그
          </b>
          지만, <code className="italic">&lt;em&gt;</code>처럼 의미상 강조보다는{" "}
          <b>스타일이나 톤의 변화, 외래어, 기술 용어, 아이콘 등</b> 의미적
          구분이 필요한 경우에 사용됩니다.
          <br />
          시각적 효과는 비슷하지만, 의미적으로는 강조보다는{" "}
          <b>문체적 차별화 또는 관례적인 표현</b>을 위한 마크업입니다. 의미
          강조가 목적이라면 <code className="italic">&lt;em&gt;</code>을
          사용하는 것이 더 적절합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>기울임꼴 텍스트 표시</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;i&gt;</code> 요소는 브라우저에서 기본적으로 이탤릭체(
                <code>font-style: italic;</code>)로 렌더링됩니다.
              </li>
              <li>단순히 텍스트를 스타일링하는 목적으로 사용됩니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>특정 텍스트 구분</strong>
            <ul className="dot_lst">
              <li>
                외국어 단어, 기술 용어, 아이콘, 가상의 목소리, 작품 제목 등의
                구분에 사용됩니다.
              </li>
              <li>
                예: <i className="italic">Lorem ipsum, CSS, HTML 등.</i>
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>의미론적 강조 아님</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;i&gt;</code>는 텍스트의 중요성을 강조하는 의미는
                없습니다.
              </li>
              <li>
                의미론적으로 강조하려면 <code>&lt;em&gt;</code> 또는{" "}
                <code>&lt;strong&gt;</code> 요소를 사용해야 합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>아이콘 폰트와 함께 사용</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;i&gt;</code>는 아이콘 폰트(FontAwesome, Material Icons
                등)와 함께 자주 사용됩니다.
              </li>
              <li>아이콘 폰트를 렌더링하기 위해 특정 클래스를 설정합니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>CSS 스타일 변경 가능</strong>
            <p>기본 이탤릭체 스타일을 CSS를 사용해 변경할 수 있습니다.</p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;i&gt;</code> 요소는 기본적으로 인라인 레벨 요소이며, 별도의
          CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="i element CSS" className="mt_m" language="css">
          {`i {
  display: inline;
  font-style: italic;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="i element syntax" className="mt_l" language="html">
          {`<i>기울임꼴 텍스트</i>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;i&gt;</code> 요소는 <b className="t_black">고유 속성</b>을
          가지지 않으며, <mark>글로벌 속성</mark>(<code>class</code>,{" "}
          <code>id</code>, <code>style</code>, <code>aria-*</code>,{" "}
          <code>data-*</code> 등)만 사용할 수 있습니다.
        </p>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit" data-conlist="false">
          예제
        </h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">단순 기울임꼴 적용</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.3.i_element_1.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="단순 기울임꼴 적용"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">&lt;i&gt;</code>{" "}
            요소의 다양한 활용
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.3.i_element_2.html"
                className="min_height_450 mb_result_height_500"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="i 요소의 다양한 활용"
                minHeight="450px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 가상의 목소리</h3>
          <CodeBlock
            title="접근성을 고려한 가상의 목소리"
            className="mt_m"
            language="html"
          >
            {`<p>그녀는 <i aria-label="상상의 목소리">왜 이렇게 됐을까</i>라고 말했다.</p>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">아이콘 폰트 사용</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.3.i_element_3.html"
                className="min_height_300 mb_result_height_250"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="아이콘 폰트 사용"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">CSS로 스타일 변경</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.3.i_element_4.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="CSS로 스타일 변경"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;i&gt;</code>는 의미론적 강조를 나타내지 않으므로, 강조가
            필요한 경우 <code>&lt;em&gt;</code> 또는 <code>&lt;strong&gt;</code>
            을 사용해야 합니다.
          </li>
          <li>
            단순히 기울임꼴 스타일을 적용하려는 경우, <code>&lt;i&gt;</code>{" "}
            대신 CSS에서 <code>font-style: italic;</code>을 사용하는 것이
            권장됩니다.
          </li>
        </ul>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          <code className="font-24-important weight-600">&lt;i&gt;</code> 요소를
          사용하면 안되는 경우
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            강조된 텍스트로 나타낼 때{" "}
            <mark>
              <code>&lt;em&gt;</code>
            </mark>{" "}
            요소 사용
          </li>
          <li>
            중요한(중요성) 텍스트로 나타낼 때{" "}
            <mark>
              <code>&lt;strong&gt;</code>
            </mark>{" "}
            요소 사용
          </li>
          <li>
            창작물의 제목, 작품(책, 플레이, 음악)의 이름을 표시할 때는{" "}
            <mark>
              <code>&lt;cite&gt;</code>
            </mark>{" "}
            요소 사용
          </li>
          <li>
            용어(term)의 정의 인스턴스를 표시할 때는{" "}
            <mark>
              <code>&lt;dfn&gt;</code>
            </mark>{" "}
            요소 사용
          </li>
          <li>
            하이라이트된(highlighted) 텍스트로 나타낼 때{" "}
            <mark>
              <code>&lt;mark&gt;</code>
            </mark>{" "}
            요소 사용
          </li>
        </ul>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          <code className="font-24-important weight-600">&lt;i&gt;</code> vs{" "}
          <code className="font-24-important weight-600">&lt;em&gt;</code>
        </h2>
        <div className="table_summary vs_summary mt_l">
          <ul className="lst_hd">
            <li className="cell features">특징</li>
            <li className="cell content">
              <code>&lt;i&gt;</code>
            </li>
            <li className="cell content">
              <code>&lt;em&gt;</code>
            </li>
          </ul>
          <ul className="lst_bd">
            <li>
              <p className="cell features">의미(Semantics)</p>
              <div className="cell content" data-tit="&lt;i&gt;">
                <p>단순히 시각적인 스타일(기울임꼴)을 적용합니다.</p>
              </div>
              <div className="cell content" data-tit="&lt;em&gt;">
                <p>내용에 강세를 두거나 강조의 의미를 전달합니다.</p>
              </div>
            </li>
            <li>
              <p className="cell features">용도(Usage)</p>
              <div className="cell content" data-tit="&lt;i&gt;">
                <p>
                  외국어 단어, 기술 용어, 글 제목 등 스타일에 의한 구분을 위해
                  사용됩니다.
                </p>
              </div>
              <div className="cell content" data-tit="&lt;em&gt;">
                <p>
                  텍스트의 논리적 강조나 문맥상 중요한 부분을 표시할 때
                  사용합니다.
                </p>
              </div>
            </li>
            <li>
              <p className="cell features">기본 스타일</p>
              <div className="cell content" data-tit="&lt;i&gt;">
                <p>
                  브라우저에서 기본적으로 <i className="italic">italic</i>{" "}
                  스타일이 적용됩니다.
                </p>
              </div>
              <div className="cell content" data-tit="&lt;em&gt;">
                <p>
                  브라우저에서 기본적으로 <i className="italic">italic</i>{" "}
                  스타일이 적용되지만, 의미론적 강조로도 해석됩니다.
                </p>
              </div>
            </li>
            <li>
              <p className="cell features">의미론적 역할</p>
              <div className="cell content" data-tit="&lt;i&gt;">
                <p>단순한 스타일링 요소로 의미론적 역할이 약합니다.</p>
              </div>
              <div className="cell content" data-tit="&lt;em&gt;">
                <p>강조의 의미를 갖는 시맨틱 요소입니다.</p>
              </div>
            </li>
            <li>
              <p className="cell features">접근성(Accessibility)</p>
              <div className="cell content" data-tit="&lt;i&gt;">
                <p>보조 기술에서 특별히 강조되지 않습니다.</p>
              </div>
              <div className="cell content" data-tit="&lt;em&gt;">
                <p>스크린 리더가 강조된 부분으로 읽을 가능성이 있습니다.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <aside className="browser_support mt_xxl" data-tit="i">
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
        <img src={`${IMG.HTML}/05_html_03.png`} alt="i 요소" />
        <figcaption>i 요소</figcaption>
      </figure>
    </>
  );
}

export default IElementPage;
