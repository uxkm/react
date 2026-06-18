import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "track_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "track element",
  description:
    "track 요소는 HTML 문서에서 video나 audio 요소에 자막, 대체 텍스트, 음성 해설 등 보조 텍스트 트랙을 제공할 때 사용하는 태그로, kind, src, srclang, label, default 등의 속성을 통해 트랙의 유형, 언어, 표시 이름, 기본 활성화 여부 등을 정의할 수 있습니다. 이 페이지에서는 track 요소의 주요 역할 및 특징을 설명하고, track 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, track",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function TrackElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;track&gt;</code> 요소는 <code>&lt;video&gt;</code> 또는{" "}
          <code>&lt;audio&gt;</code> 요소 안에서{" "}
          <b>자막, 캡션, 설명, 대화 텍스트 등 보조 텍스트 정보를 제공</b>할 때
          사용하는 시맨틱 태그입니다.
          <br />
          <code>src</code>, <code>kind</code>, <code>srclang</code>,{" "}
          <code>label</code>, <code>default</code> 속성으로 트랙 종류/언어/표시
          이름/기본 활성화를 설정할 수 있습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>비디오/오디오에 텍스트 트랙 추가</strong>
            <p>
              <code>&lt;video&gt;</code> 또는 <code>&lt;audio&gt;</code>와 함께
              자막, 설명, 대화 텍스트를 제공합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다양한 트랙 유형 지원</strong>
            <p>
              <code>subtitles</code>, <code>captions</code>,{" "}
              <code>descriptions</code>, <code>chapters</code>,{" "}
              <code>metadata</code>를 지원합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다국어 자막 구성 가능</strong>
            <p>여러 개의 트랙을 등록해 언어별 자막 선택을 제공합니다.</p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>브라우저가 자동으로 지원하는 기능</strong>
            <p>자막을 직접 스타일링하지 않아도 브라우저가 기본 렌더링합니다.</p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>WebVTT 형식 사용</strong>
            <p>
              <code>src</code>에는 일반적으로 <code>.vtt</code>(WebVTT) 파일을
              연결합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>JavaScript 동적 제어 가능</strong>
            <p>
              <code>textTracks</code> API로 트랙 활성화/비활성화 제어가
              가능합니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <mark>
            <code>&lt;track&gt;</code> 요소 자체는 화면에 표시되지 않으며,
          </mark>{" "}
          <code>&lt;video&gt;</code>/<code>&lt;audio&gt;</code> 내부에서만
          동작합니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="track element syntax"
          className="mt_l"
          language="html"
        >
          {`<video controls>
  <source src="video.mp4" type="video/mp4">
  <track src="subtitles_ko.vtt" kind="subtitles" srclang="ko" label="Korean">
</video>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;track&gt;
            </code>{" "}
            속성 요약
          </h3>
          <div className="table_summary value_200 mt_ml">
            <ul className="lst_hd">
              <li className="cell value">속성명</li>
              <li className="cell content">설명</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">src</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">자막 파일의 경로를 지정합니다.</p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">kind</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">
                  트랙 유형을 지정합니다. (<code>subtitles</code>,{" "}
                  <code>captions</code> 등)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">srclang</code>{" "}
                  <i className="t_darkgreen">[필수]</i>
                </p>
                <p className="cell content">
                  자막 언어를 설정합니다. (<code>en</code>, <code>ko</code> 등)
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>label</code>
                </p>
                <p className="cell content">
                  사용자가 선택할 때 표시될 자막 이름을 지정합니다.
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>default</code>
                </p>
                <p className="cell content">
                  기본적으로 활성화할 트랙을 지정합니다.
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [src] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;track src="파일 경로"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            자막 파일의 URL 또는 경로를 지정합니다. 보통 <code>.vtt</code>
            (WebVTT) 형식 파일을 사용합니다.
          </p>
          <CodeBlock title="track 속성 [src]" className="mt_m" language="html">
            {`<track src="subtitles_ko.vtt" kind="subtitles" srclang="ko">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [kind] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;track kind="값"&gt;
            </span>
          </h3>
          <dl className="dl_dot_lst mt_s">
            <dt>값 :</dt>
            <dd>
              <code>subtitles</code> : 번역된 자막
            </dd>
            <dd>
              <code>captions</code> : 청각 장애인을 위한 자막
            </dd>
            <dd>
              <code>descriptions</code> : 시각 장애인을 위한 설명
            </dd>
            <dd>
              <code>chapters</code> : 비디오 챕터 정보
            </dd>
            <dd>
              <code>metadata</code> : 스크립트용 메타데이터
            </dd>
          </dl>
          <CodeBlock title="track 속성 [kind]" className="mt_m" language="html">
            {`<track src="captions_en.vtt" kind="captions" srclang="en">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [srclang] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;track srclang="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            자막 언어를 설정합니다. ISO 639-1 언어 코드를 사용합니다. 예:{" "}
            <code>ko</code>, <code>en</code>, <code>fr</code>
          </p>
          <CodeBlock
            title="track 속성 [srclang]"
            className="mt_m"
            language="html"
          >
            {`<track src="subtitles_fr.vtt" kind="subtitles" srclang="fr">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [label] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;track label="자막 이름"&gt;
            </span>
          </h3>
          <CodeBlock
            title="track 속성 [label]"
            className="mt_m"
            language="html"
          >
            {`<track src="subtitles_ko.vtt" kind="subtitles" srclang="ko" label="한국어">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [default] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;track default&gt;
            </span>
          </h3>
          <p className="mt_ms">
            기본 활성 트랙을 지정합니다. 여러 <code>&lt;track&gt;</code> 중
            하나만 <code>default</code>로 설정합니다.
          </p>
          <CodeBlock
            title="track 속성 [default]"
            className="mt_m"
            language="html"
          >
            {`<track src="subtitles_ko.vtt" kind="subtitles" srclang="ko" default>
<track src="subtitles_en.vtt" kind="subtitles" srclang="en">
<track src="subtitles_fr.vtt" kind="subtitles" srclang="fr">`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">여러 언어 자막 제공 및 기본 자막 지정</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.7.track_element_1.html"
                className="min_height_400 mb_result_height_320"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="여러 언어 자막 제공 및 기본 자막 지정"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">위 영상의 언어별 .vtt</h3>
          <div className="mt_m indent">
            <h4 className="ml_mn t_blue">friday_ko.vtt</h4>
            <CodeBlock title="friday_ko.vtt" className="mt_ms" language="text">
              {`WEBVTT

00:00:00.000 --> 00:00:00.999  line:80%
힐디!

00:00:01.000 --> 00:00:01.499 line:80%
어떻게 지내?

00:00:01.500 --> 00:00:02.999 line:80%
말해봐, 우주의 지배자는 계신가?`}
            </CodeBlock>
          </div>
          <div className="mt_ml indent">
            <h4 className="ml_mn t_blue">friday_en.vtt</h4>
            <CodeBlock title="friday_en.vtt" className="mt_ms" language="text">
              {`WEBVTT

00:00:00.000 --> 00:00:00.999  line:80%
Hildy!

00:00:01.000 --> 00:00:01.499 line:80%
How are you?

00:00:01.500 --> 00:00:02.999 line:80%
Tell me, is the lord of the universe in?`}
            </CodeBlock>
          </div>
          <div className="mt_ml indent">
            <h4 className="ml_mn t_blue">friday_fr.vtt</h4>
            <CodeBlock title="friday_fr.vtt" className="mt_ms" language="text">
              {`WEBVTT

00:00:00.000 --> 00:00:00.999  line:80%
Hildy !

00:00:01.000 --> 00:00:01.499 line:80%
Comment ça va ?

00:00:01.500 --> 00:00:02.999 line:80%
Dis-moi, le seigneur de l'univers est-il là ?`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">청각 장애인을 위한 캡션 추가</h3>
          <p className="mt_ms">
            대화뿐만 아니라 배경 소리(예: &quot;[박수 소리]&quot;)까지
            표시합니다.
          </p>
          <CodeBlock
            title="청각 장애인을 위한 캡션 추가"
            className="mt_m"
            language="html"
          >
            {`<video controls>
  <source src="video.mp4" type="video/mp4">
  <track src="captions_en.vtt" kind="captions" srclang="en" label="English Captions">
</video>`}
          </CodeBlock>
          <CodeBlock
            title="청각 장애인을 위한 캡션 [.vtt]"
            className="mt_ms"
            language="text"
          >
            {`WEBVTT

00:00:00.000 --> 00:00:05.000
안녕하세요! 이 비디오는 청각 장애인을 위한 캡션을 포함하고 있습니다.

00:00:10.000 --> 00:00:15.000
[음악 재생 중]`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;track&gt;</code>은 WebVTT(<code>.vtt</code>) 형식만
            지원하며, SRT(<code>.srt</code>)는 직접 지원하지 않습니다.
          </li>
          <li>
            여러 개의 자막이 있을 경우, 하나만 기본(<code>default</code>)으로
            설정해야 합니다.
          </li>
          <li>
            최신 브라우저는 <code>&lt;track&gt;</code> 요소를 지원하지만, 일부
            구형 브라우저에서는 작동하지 않을 수 있습니다. 필요하다면
            자바스크립트를 사용하여 자막을 추가하는 방식도 고려할 수 있습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="track">
        <ul>
          <li className="ie">10+</li>
          <li className="edge">지원</li>
          <li className="chrome">23.0</li>
          <li className="firefox">31.0</li>
          <li className="opera">12.1</li>
          <li className="safari">6.0</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/06_html_07.png"} alt="track 요소" />
        <figcaption>track 요소</figcaption>
      </figure>
    </>
  );
}

export default TrackElementPage;
