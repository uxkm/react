import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import InputPartTabs from "./InputPartTabs";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "input_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "input element [기본 입력 필드]",
  description:
    "기본 입력 필드는 사용자가 직접 텍스트를 입력할 수 있는 요소로, text, password, email, tel, search, url 등의 타입이 있으며 입력값을 제한하거나 가이드할 수 있도록 다양한 속성을 제공합니다. 이 페이지에서는 텍스트 기반 입력 필드의 특징과 활용 방법을 정리하고, 관련 속성을 설명합니다.",
  keyword: "Markup, HTML, tag, elements, input",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function InputElementPart2Page() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <InputPartTabs
        active={{
          part1: false,
          part2: true,
          part3: false,
          part4: false,
          part5: false,
        }}
      />
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          기본 입력 필드는{" "}
          <b>사용자가 텍스트를 입력하거나 특정 형식의 데이터를 입력받는 요소</b>
          로, 웹사이트에서 가장 많이 사용됩니다.
          <br />
          다양한 속성을 활용해 입력값을 제한하거나 검증할 수 있으며, 일반 텍스트
          입력부터 비밀번호, 이메일, URL, 전화번호 입력을 위한 특수 필드까지
          포함됩니다. 또한, <code>hidden</code> 타입을 사용하면 사용자에게
          보이지 않는 데이터를 전송할 수도 있습니다.
        </p>
        <p className="mt_s">
          대표적인 타입으로 <code>text</code>, <code>password</code>,{" "}
          <code>search</code>, <code>tel</code>, <code>url</code>,{" "}
          <code>email</code>, <code>hidden</code> 등이 있습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">관련 속성</h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">[maxlength]</code>
            <i className="attr_optional ml_0">선택 사항</i>
            <i className="t_777">최대 글자 수 제한</i>
          </h3>
          <ul className="dot_lst mt_ms">
            <li>사용자가 입력할 수 있는 최대 문자 수를 제한합니다.</li>
            <li>
              <code>maxlength</code>보다 많은 문자를 입력하려고 하면 추가 입력이
              차단됩니다.
            </li>
          </ul>
          <CodeBlock
            title="기본 입력 필드 관련 속성 [maxlength]"
            className="mt_m"
            language="html"
          >
            {`<!-- [maxlength] -->
<input type="text" name="username" maxlength="10" placeholder="최대 10자 입력 가능">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">[minlength]</code>
            <i className="attr_optional ml_0">선택 사항</i>
            <i className="t_777">최소 글자 수 제한</i>
          </h3>
          <ul className="dot_lst mt_ms">
            <li>사용자가 입력해야 하는 최소 문자 수를 지정합니다.</li>
            <li>
              <code>required</code>와 함께 사용하면 유효성 검증을 강화할 수
              있습니다.
            </li>
          </ul>
          <CodeBlock
            title="기본 입력 필드 관련 속성 [minlength]"
            className="mt_m"
            language="html"
          >
            {`<!-- [minlength] -->
<input type="password" name="password" minlength="8" placeholder="최소 8자 이상 입력">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">[pattern]</code>
            <i className="attr_optional ml_0">선택 사항</i>
            <i className="t_777">정규 표현식을 사용한 입력 검증</i>
          </h3>
          <ul className="dot_lst mt_ms">
            <li>입력값이 정해진 형식과 일치하는지 검증할 때 사용합니다.</li>
            <li>
              <code>title</code> 속성을 함께 사용하면 입력 형식을 안내할 수
              있습니다.
            </li>
          </ul>
          <CodeBlock
            title="기본 입력 필드 관련 속성 [pattern]"
            className="mt_m"
            language="html"
          >
            {`<!-- [pattern] -->
<input type="text" name="user_id" pattern="[A-Za-z0-9]{5,10}" title="영문자와 숫자로 5~10자 입력">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">[dirname]</code>
            <i className="attr_optional ml_0">선택 사항</i>
            <i className="t_777">입력 방향 정보 전송</i>
          </h3>
          <ul className="dot_lst mt_ms">
            <li>
              <code>type="text"</code> 또는 <code>type="search"</code>에서
              사용됩니다.
            </li>
            <li>
              입력 텍스트 방향(<code>ltr</code>/<code>rtl</code>)을 서버로 함께
              전송합니다.
            </li>
          </ul>
          <CodeBlock
            title="기본 입력 필드 관련 속성 [dirname]"
            className="mt_m"
            language="html"
          >
            {`<!-- [dirname] -->
<input type="search" name="query" dirname="query.dir" placeholder="검색어 입력">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">[size]</code>
            <i className="attr_optional ml_0">선택 사항</i>
            <i className="t_777">입력 필드의 시각적 크기 조정</i>
          </h3>
          <ul className="dot_lst mt_ms">
            <li>
              입력 필드의 가시적 크기를 글자 단위로 지정하며, 입력 가능한 문자
              수와는 별개입니다.
            </li>
          </ul>
          <CodeBlock
            title="기본 입력 필드 관련 속성 [size]"
            className="mt_m"
            language="html"
          >
            {`<!-- [size] -->
<input type="text" name="nickname" size="20" placeholder="20글자 크기로 표시">`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit t_darkblue">
          <code className="font-24-important weight-600 t_darkblue">
            [type]
          </code>
          별 예제
        </h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="text"]
            </code>{" "}
            <i className="t_444">(일반 텍스트 입력 필드)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.02.input_part2_text.html"
                className="min_height_450 mb_result_height_450"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type text"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="password"]
            </code>{" "}
            <i className="t_444">(비밀번호 입력 필드)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.02.input_part2_password.html"
                className="min_height_550 mb_result_height_550"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type password"
                minHeight="550px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="search"]
            </code>{" "}
            <i className="t_444">(검색 입력 필드)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.02.input_part2_search.html"
                className="min_height_450 mb_result_height_450"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type search"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="tel"]
            </code>{" "}
            <i className="t_444">(전화번호 입력 필드)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.02.input_part2_tel.html"
                className="min_height_450 mb_result_height_450"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type tel"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="url"]
            </code>{" "}
            <i className="t_444">(URL 입력 필드)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.02.input_part2_url.html"
                className="min_height_450 mb_result_height_450"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type url"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="email"]
            </code>{" "}
            <i className="t_444">(이메일 입력 필드)</i>
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/09-forms/0903-input/9.3.02.input_part2_email.html"
                className="min_height_450 mb_result_height_450"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="type email"
                minHeight="450px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600 t_darkblue">
              [type="hidden"]
            </code>{" "}
            <i className="t_444">(숨겨진 입력 필드)</i>
          </h3>
          <CodeBlock
            title='[type="hidden"] 기본 숨겨진 입력 필드'
            className="mt_ms"
            language="html"
          >
            {`<!-- 기본 숨겨진 입력 필드 -->
<input type="hidden" name="userid" value="12345">`}
          </CodeBlock>
          <CodeBlock
            title='[type="hidden"] 동적으로 값 변경'
            className="mt_ms"
            language="html"
          >
            {`<!-- 동적으로 값 변경 -->
<input type="hidden" id="token" name="session_token">
<script>
  document.getElementById("token").value = "secure123456";
</script>`}
          </CodeBlock>
          <CodeBlock
            title='[type="hidden"] 서버용 데이터 전송'
            className="mt_ms"
            language="html"
          >
            {`<!-- 서버용 데이터 전송 -->
<form action="submit.php" method="POST">
  <input type="hidden" name="csrf_token" value="abcde12345">
  <input type="submit" value="전송">
</form>`}
          </CodeBlock>
        </article>
      </section>

      <aside className="browser_support mt_xxl" data-tit="input">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">1.0</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/09_html_03_2.png"} alt="input 기본 입력 필드" />
        <figcaption>input 요소 기본 입력 필드</figcaption>
      </figure>
    </>
  );
}

export default InputElementPart2Page;
