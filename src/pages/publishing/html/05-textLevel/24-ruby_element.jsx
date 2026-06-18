import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "ruby_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "ruby element",
  description:
    "ruby 요소는 HTML 문서에서 한자, 중국어, 일본어 등 동아시아 문자에 대한 발음이나 설명을 보조 텍스트로 표시할 때 사용하는 시맨틱 태그로, rt 요소와 함께 사용하여 기본 문자 위 또는 옆에 발음을 제공하며 rp 요소를 추가하면 루비를 지원하지 않는 브라우저에서도 괄호 등으로 보조 텍스트를 나타낼 수 있습니다. 이 페이지에서는 ruby 요소의 주요 역할 및 특징을 설명하고, ruby 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, ruby, 루비 문자",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_350" aria-hidden />;
}

function RubyElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;ruby&gt;</code> 요소는 동아시아 문자(특히 한자)에 대한
          발음이나 의미를 보조적으로 표시할 때 사용하는 시맨틱 태그로, 본문
          텍스트 위나 옆에 작은 글씨 형태의 설명(주석)을 함께 보여줄 수 있도록
          합니다.
          <br />
          <code>&lt;rt&gt;</code>(루비 텍스트)와 함께 사용되어 발음을 표시하고,
          <code>&lt;rp&gt;</code>를 통해 루비를 지원하지 않는 브라우저에서 대체
          괄호 문자를 제공할 수 있습니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>한자의 발음 또는 설명 표시</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;ruby&gt;</code> 안에 한자와 보조 설명(발음, 의미 등)을
                함께 제공할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>주석(설명) 기능</strong>
            <p>
              발음 안내뿐 아니라 단어의 뜻이나 부가 설명을 표시하는 데도 사용할
              수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>
              <code className="font-16-important">&lt;rt&gt;</code> 요소와 함께
              사용
            </strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;rt&gt;</code>는 루비 텍스트(발음/번역)를 제공합니다.
              </li>
              <li>
                <code>&lt;rp&gt;</code>는 루비 미지원 브라우저에서 대체 괄호를
                표시합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다국어 콘텐츠 지원</strong>
            <p>
              일본어 후리가나, 중국어 병음, 한국어 한자 음독 표시에 활용됩니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;ruby&gt;</code> 요소는 기본적으로 인라인 레벨 요소입니다.
        </p>
        <CodeBlock title="ruby element CSS" className="mt_m" language="css">
          {`ruby {
  display: inline;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="ruby element syntax" className="mt_l" language="html">
          {`<ruby>
  韓國<rt>한국</rt>
</ruby>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <p className="mt_l">
          <code>&lt;ruby&gt;</code> 요소는 고유 속성을 가지지 않으며, 글로벌
          속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
          <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
        </p>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">
          <code className="font-24-important t_darkblue weight-600">
            &lt;ruby&gt;
          </code>{" "}
          요소의 세부 요소와 예제
        </h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">&lt;ruby&gt;</code>{" "}
            세부 요소의 종류
          </h3>
          <CodeBlock
            title="ruby element parts"
            className="mt_m"
            language="html"
          >
            {`<ruby>...</ruby>  <!-- 루비 주석 부모 요소 -->
<rt>...</rt>      <!-- 루비 텍스트(발음/설명) -->
<rp>(</rp>        <!-- 루비 미지원 환경 대체 괄호 -->`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_darkblue weight-600">
              &lt;rt&gt;
            </code>{" "}
            (루비 텍스트) 예제
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.24.ruby_element_1.html"
                className="min_height_300 mb_result_height_260"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="rt 루비 텍스트 예제"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_darkblue weight-600">
              &lt;rp&gt;
            </code>{" "}
            (대체 괄호) 예제
          </h3>
          <p className="mt_ms">
            루비를 지원하지 않는 브라우저에서는 <code>&lt;rp&gt;</code> 요소의
            텍스트(괄호)가 표시됩니다.
          </p>
          <div className="view_editor edit_code mt_ms">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.24.ruby_element_2.html"
                className="min_height_350 mb_result_height_350"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="rp 대체 괄호 예제"
                minHeight="350px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 루비 표시</h3>
          <CodeBlock
            title="접근성을 고려한 루비 표시"
            className="mt_m"
            language="html"
          >
            {`<p>
  <ruby aria-label="한국의 수도 서울">
    首爾<rt>서울</rt>
  </ruby>는 대한민국의 수도입니다.
</p>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;ruby&gt;</code> 요소는 단독으로 사용하지 말고 반드시{" "}
            <code>&lt;rt&gt;</code> 요소를 포함해 사용하세요.
          </li>
          <li>
            <code>&lt;rt&gt;</code>는 기본적으로 작은 글씨로 표시되며 필요하면
            CSS로 조정할 수 있습니다.
          </li>
          <li>
            발음 표기뿐 아니라 단어의 뜻 설명 용도로도 사용할 수 있습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="ruby">
        <ul>
          <li className="ie">5.0+</li>
          <li className="edge">지원</li>
          <li className="chrome">5.0</li>
          <li className="firefox">38.0</li>
          <li className="opera">15.0</li>
          <li className="safari">5.0</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/05_html_24.png`} alt="ruby 요소" />
        <figcaption>ruby 요소</figcaption>
      </figure>
    </>
  );
}

export default RubyElementPage;
