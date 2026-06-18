import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "em_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "em element",
  description:
    "em 요소는 HTML 문서에서 텍스트에 의미상 강조를 부여하기 위한 태그로, 해당 내용이 문맥상 중요하다는 점을 전달할 때 사용되며 브라우저는 기본적으로 기울임체로 표시하고 스크린 리더 등 보조 기술에서는 강조된 어조로 읽히도록 처리됩니다. 이 페이지에서는 em 요소의 주요 역할 및 특징을 설명하고, em 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, em",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_300" aria-hidden />;
}

function EmElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl italic" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p className="italic">
          <code className="italic">&lt;em&gt;</code> 요소는 텍스트에{" "}
          <b>
            <strong>강조(emphasis)</strong>를 부여하기 위한 시맨틱 태그
          </b>
          로, <b>의미상 강조가 필요할 때 사용되며 보통 기울임체로 표시</b>
          됩니다.
          <br />
          시각적 표현보다 문맥적인 강조에 초점이 있으며, 스크린 리더 등 보조
          기술에서도 <b>강조된 음성 처리</b>가 적용될 수 있습니다. 중첩하여
          사용할 경우 더 강한 강조를 의미하며,{" "}
          <b>단순한 스타일링이 아닌 의미 전달 목적의 마크업</b>입니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>의미적 강조</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;em&gt;</code>은 단순한 스타일링 목적이 아니라 텍스트가
                문맥상 중요함을 의미론적으로 나타냅니다.
              </li>
              <li>
                브라우저와 스크린 리더는 강조된 텍스트로 처리하며, 음성 톤을
                바꿔 읽거나 속도를 조절할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>중첩된 강조</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;em&gt;</code> 요소는 중첩될 수 있으며, 중첩 수준에
                따라 강조의 강도가 달라질 수 있습니다.
              </li>
              <li>
                중첩 예시: 첫 번째 <code>&lt;em&gt;</code>은 기본 강조, 두 번째{" "}
                <code>&lt;em&gt;</code>은 더 강한 강조를 나타냅니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>시각적 효과</strong>
            <ul className="dot_lst">
              <li>
                브라우저에서 기본적으로 이탤릭체(
                <code>font-style: italic;</code>)로 표시됩니다.
              </li>
              <li>CSS를 사용하여 스타일을 커스터마이징할 수 있습니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다른 요소와의 관계</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;strong&gt;</code> 요소는 텍스트의{" "}
                <strong>&quot;강한 중요성&quot;</strong>을 나타내고,{" "}
                <code>&lt;em&gt;</code>은 텍스트의{" "}
                <em>&quot;미묘한 강조&quot;</em>를 나타냅니다.
              </li>
              <li>강조의 목적과 강도에 따라 적절한 요소를 선택해야 합니다.</li>
            </ul>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;em&gt;</code> 요소는 기본적으로 인라인 레벨 요소이며, 별도의
          CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="em element CSS" className="mt_m" language="css">
          {`em {
  display: inline;
  font-style: italic;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="em element syntax" className="mt_l" language="html">
          {`<em>강조할 텍스트</em>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;em&gt;</code> 요소는 <b className="t_black">고유 속성</b>을
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
          <h3 className="ml_mn">기본 텍스트 강조</h3>
          <CodeBlock title="기본 텍스트 강조" className="mt_m" language="html">
            {`<p>
  HTML에서 <em>중요한</em> 부분을 강조합니다.
</p>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">중첩된 강조</h3>
          <CodeBlock title="중첩된 강조" className="mt_m" language="html">
            {`<p>
  그녀는 <em>정말로 <em>중요한</em> 일을 한다</em>고 말했습니다.
</p>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">CSS로 스타일링된 강조</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.2.em_element.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="CSS로 스타일링된 강조"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 강조</h3>
          <CodeBlock
            title="접근성을 고려한 강조"
            className="mt_m"
            language="html"
          >
            {`<p aria-label="강조된 문장입니다.">
  이 문장에서 <em>중요한</em> 부분이 강조되었습니다.
</p>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">가벼운 강조와 강한 중요성의 비교</h3>
          <CodeBlock
            title="가벼운 강조와 강한 중요성의 비교"
            className="mt_m"
            language="html"
          >
            {`<p>이 문장은 <em>가벼운 강조</em>를 나타냅니다.</p>
<p>이 문장은 <strong>강한 중요성</strong>을 나타냅니다.</p>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;em&gt;</code>은 텍스트의 의미적 강조를 나타내는 데
            적합하며, 단순히 스타일을 변경하려면 CSS와 함께{" "}
            <code>&lt;span&gt;</code> 또는 <code>&lt;i&gt;</code>를 사용하는
            것이 권장됩니다.
          </li>
          <li>
            강조가 실제로 문맥상 중요한 부분인지 확인하고, 과도하게 사용하지
            않도록 해야합니다.
          </li>
          <li>
            <code>&lt;strong&gt;</code>과 <code>&lt;em&gt;</code>의 차이를
            이해하고, 텍스트의 중요성과 강조 강도에 따라 적절한 요소를
            선택하세요.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="em">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">1.0</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/05_html_02.png`} alt="em 요소" />
        <figcaption>em 요소</figcaption>
      </figure>
    </>
  );
}

export default EmElementPage;
