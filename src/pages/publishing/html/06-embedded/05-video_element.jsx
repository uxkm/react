import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "video_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "video element",
  description:
    "video 요소는 HTML 문서에서 웹 브라우저 상에서 동영상을 재생할 수 있도록 하는 태그로, src 속성 또는 내부의 source 요소를 통해 영상 파일을 지정하며 controls, autoplay, loop, muted, poster 등의 속성으로 재생 기능과 표시 방식을 제어할 수 있습니다. 이 페이지에서는 video 요소의 주요 역할 및 특징을 설명하고, video 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, video",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_350" aria-hidden />;
}

function VideoElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;video&gt;</code> 요소는{" "}
          <b>
            웹 페이지에 비디오 콘텐츠를 삽입하고 재생할 수 있도록 하는 시맨틱
            태그
          </b>
          로,{" "}
          <b>
            브라우저에서 플러그인 없이 직접 동영상을 표시하고 제어할 수 있게
            합니다.
          </b>
          <br />
          <code>src</code> 속성이나 <code>&lt;source&gt;</code> 태그를 통해 영상
          파일을 지정하며, <code>controls</code>, <code>autoplay</code>,{" "}
          <code>loop</code>, <code>muted</code>, <code>poster</code> 등의
          속성으로 <b>재생 기능과 사용자 인터페이스를 제어</b>할 수 있습니다.
          접근성을 위해 자막(<code>&lt;track&gt;</code>)을 함께 제공하는 것이
          좋으며, 다양한 디바이스에서 <b>미디어 콘텐츠를 일관되게 제공</b>할 수
          있습니다.
        </p>
        <p className="mt_s">
          원본 비디오를 압축해서 동영상 파일로 변환한 것을{" "}
          <b>인코딩(encording)</b>이라 하고, 영상을 꺼내 플레이어에서 보여주는
          것을 <b>디코딩(decoding)</b>이라고 하며, 이 두 가지를 처리하는 것이{" "}
          <b>비디오 코덱</b>입니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>웹페이지에 동영상을 삽입하고 재생 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;video&gt;</code> 요소를 사용하면 브라우저에서 직접
                비디오를 재생할 수 있습니다.
              </li>
              <li>
                <code>src</code> 속성을 사용하거나 <code>&lt;source&gt;</code>{" "}
                요소를 활용하여 여러 형식의 비디오를 제공할 수 있습니다.
              </li>
              <li>
                별도의 플러그인(예: Flash)을 설치할 필요 없이 HTML5에서 기본
                지원합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>브라우저 기본 컨트롤 UI 제공</strong>
            <ul className="dot_lst">
              <li>
                <code>controls</code>로 재생/정지/볼륨 UI를 제공합니다.
              </li>
              <li>필요 시 JavaScript로 커스텀 컨트롤도 구현할 수 있습니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>자동 재생 및 반복 재생 가능</strong>
            <p>
              <code>autoplay</code>, <code>loop</code>, <code>muted</code>{" "}
              조합으로 자동 재생, 반복 재생, 음소거 등의 기능을 추가할 수
              있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다양한 비디오 포맷 지원</strong>
            <p>
              브라우저별 지원이 다르므로, 여러 개의 <code>&lt;source&gt;</code>{" "}
              태그를 사용하여 다양한 형식(mp4, webm, ogg 등)을 제공할 수
              있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>자막 및 설명 추가 가능</strong>
            <p>
              <code>&lt;track&gt;</code> 태그를 사용하면 자막 또는 설명을
              추가하여 접근성을 높일 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>대체 콘텐츠 제공 가능</strong>
            <p>
              <code>&lt;video&gt;</code> 요소를 지원하지 않는 브라우저에서는{" "}
              <code>fallback text</code>(예: 다운로드 링크)를 제공할 수
              있습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;video&gt;</code> 요소는 기본적으로 인라인 블록 레벨
          요소이며, 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="video element CSS" className="mt_m" language="css">
          {`video {
  display: inline-block;
  object-fit: contain; /* 비디오가 컨테이너에 맞춰 유지됩니다. */
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="video element syntax"
          className="mt_l"
          language="html"
        >
          {`<video src="video.mp4" controls width="600" height="400">
  브라우저가 비디오 태그를 지원하지 않습니다.
</video>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;video&gt;
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
                <p className="cell content">
                  재생할 비디오 파일의 경로를 지정합니다.
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>width / height</code>
                </p>
                <p className="cell content">
                  비디오 요소의 가로 및 세로 크기를 지정합니다.
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>controls</code>
                </p>
                <p className="cell content">
                  재생/일시정지 등의 기본 컨트롤 UI를 제공합니다.
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>autoplay</code>
                </p>
                <p className="cell content">
                  페이지 로드 시 자동으로 비디오를 재생합니다.
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>loop</code>
                </p>
                <p className="cell content">
                  비디오가 끝나면 자동으로 다시 재생됩니다.
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>muted</code>
                </p>
                <p className="cell content">
                  비디오의 소리를 음소거 상태로 시작합니다.
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>poster</code>
                </p>
                <p className="cell content">
                  비디오 로드 전 표시할 썸네일 이미지를 설정합니다.
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>preload</code>
                </p>
                <p className="cell content">
                  비디오 데이터를 미리 로드하는 방식을 설정합니다.
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [src] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;video src="파일 경로(URL)"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            재생할 비디오 파일의 경로(URL)를 지정합니다. 여러 개의{" "}
            <code>&lt;source&gt;</code> 요소를 사용할 수도 있습니다.
          </p>
          <CodeBlock title="video 속성 [src]" className="mt_m" language="html">
            {`<!-- 단일 파일 경로 -->
<video src="video.mp4"></video>

<!-- 여러개의 파일 경로(다양한 브라우저 대응) -->
<video>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
</video>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [width / height] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;video width="값" height="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            비디오의 가로(<code>width</code>), 세로(<code>height</code>) 크기를
            지정합니다. 일반적으로 픽셀(<code>px</code>), 퍼센트(<code>%</code>
            )가 가장 많이 사용됩니다.
          </p>
          <CodeBlock
            title="video 속성 [width / height]"
            className="mt_m"
            language="html"
          >
            {`<video src="video.mp4" width="640" height="360"></video>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [controls] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;video controls&gt;
            </span>
          </h3>
          <CodeBlock
            title="video 속성 [controls]"
            className="mt_m"
            language="html"
          >
            {`<video src="video.mp4" controls></video>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [autoplay] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;video autoplay&gt;
            </span>
          </h3>
          <p className="mt_ms">
            페이지 로드 시 자동으로 비디오를 재생합니다. 대부분의 브라우저에서는{" "}
            <code>muted</code> 속성과 함께 사용해야 자동 재생이 가능합니다.
          </p>
          <CodeBlock
            title="video 속성 [autoplay]"
            className="mt_m"
            language="html"
          >
            {`<video src="video.mp4" autoplay muted></video>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [loop] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">&lt;video loop&gt;</span>
          </h3>
          <CodeBlock title="video 속성 [loop]" className="mt_m" language="html">
            {`<video src="video.mp4" loop></video>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [muted] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">&lt;video muted&gt;</span>
          </h3>
          <CodeBlock
            title="video 속성 [muted]"
            className="mt_m"
            language="html"
          >
            {`<video src="video.mp4" autoplay muted></video>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [poster] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;video poster="파일 경로"&gt;
            </span>
          </h3>
          <CodeBlock
            title="video 속성 [poster]"
            className="mt_m"
            language="html"
          >
            {`<video src="video.mp4" poster="thumbnail.jpg"></video>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [preload] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;video preload="값"&gt;
            </span>
          </h3>
          <dl className="dl_dot_lst mt_s">
            <dt>값 :</dt>
            <dd>
              <code>auto</code> : 브라우저가 필요 시 전체 비디오 미리 로드
            </dd>
            <dd>
              <code>metadata</code> : 길이/썸네일 등 메타데이터만 로드
            </dd>
            <dd>
              <code>none</code> : 재생 전까지 미리 로드하지 않음
            </dd>
          </dl>
          <CodeBlock
            title="video 속성 [preload]"
            className="mt_m"
            language="html"
          >
            {`<video src="video.mp4" preload="metadata"></video>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            여러 형식의 비디오 제공 (&lt;source&gt; 사용)
          </h3>
          <p className="mt_ms">
            아래 예제에서는 <code>&lt;video&gt;</code> 요소 내부에 일반 텍스트와
            다운로드 링크가 포함되어 있습니다. 비디오를 지원하지 않는
            브라우저에서도 사용자에게 대체 옵션을 제공하기 위한 것으로, 사용자
            경험을 보장하기 위해 중요합니다.
          </p>
          <CodeBlock
            title="여러 형식의 비디오 제공"
            className="mt_m"
            language="html"
          >
            {`<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogv" type="video/ogg">
  브라우저가 비디오 태그를 지원하지 않습니다. <a href="video.mp4" download>비디오 다운로드</a>
</video>`}
          </CodeBlock>
        </article>
        <article className="mt_l indent">
          <h3 className="ml_mn">자동 재생 및 반복 재생 설정</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.5.video_element_1.html"
                className="min_height_350 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="자동 재생 및 반복 재생 설정"
                minHeight="350px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">컨트롤 설정</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.5.video_element_2.html"
                className="min_height_350 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="컨트롤 설정"
                minHeight="350px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">비디오 썸네일 추가 및 화면에 꽉차게 설정</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.5.video_element_3.html"
                className="min_height_380 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="비디오 썸네일 추가 및 화면에 꽉차게 설정"
                minHeight="380px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">JavaScript를 활용한 비디오 제어</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.5.video_element_4.html"
                className="min_height_380 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="JavaScript를 활용한 비디오 제어"
                minHeight="380px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 aria-label 활용</h3>
          <CodeBlock
            title="접근성을 고려한 aria-label 활용"
            className="mt_m"
            language="html"
          >
            {`<video src="video.mp4" controls aria-label="웹사이트 소개 비디오"></video>`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            모든 브라우저가 동일한 비디오 포맷을 지원하지 않으므로,{" "}
            <code>mp4</code>, <code>webm</code>, <code>ogg</code> 등의 다양한
            형식을 제공하는 것이 좋습니다.
            <br />
            <code>MP4(H.264)</code>는 대부분의 브라우저에서 지원되지만,{" "}
            <code>WebM</code>이나 <code>Ogg</code>는 일부 브라우저에서만
            지원됩니다.
          </li>
          <li>
            대부분의 최신 브라우저에서는 음소거(<code>muted</code>) 상태가 아닌
            경우 자동 재생이 제한됩니다.
            <br />
            따라서 <code>autoplay</code> 속성을 사용하려면 <code>muted</code>{" "}
            속성을 함께 추가해야 합니다.
          </li>
          <li>
            비디오 파일은 용량이 크므로 최적화된 파일을 제공하는 것이
            중요합니다. 브라우저가 필요할 때만 비디오를 로드하도록{" "}
            <code>preload=&quot;metadata&quot;</code> 옵션을 활용할 수도
            있습니다.
          </li>
          <li>
            일부 모바일 브라우저는 <code>autoplay</code> 기능을 지원하지 않으며,
            데이터 사용량을 줄이기 위해 자동 로딩을 제한할 수 있습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="video">
        <ul>
          <li className="ie">9+</li>
          <li className="edge">지원</li>
          <li className="chrome">3.0</li>
          <li className="firefox">3.5</li>
          <li className="opera">10.5</li>
          <li className="safari">3.1</li>
        </ul>
      </aside>

      <hr className="dashed_line mt_xxl" />

      <section className="indent mt_xxl">
        <h2 className="ml_mn">웹에서 사용되는 비디오 파일 형식 정리</h2>
        <blockquote className="uk_note mt_xl" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>
            웹에서 사용되는 비디오 파일 형식은{" "}
            <b>파일 확장자, 코덱(Codec), 브라우저 지원 여부</b> 등에 따라
            구분됩니다.
            <br />
            비디오 파일 형식은 단순히 확장자만이 아니라, 어떤 코덱을
            사용하는지도 중요한 요소입니다.
          </p>
        </blockquote>
        <article className="mt_xl indent">
          <h3 className="ml_mn">주요 비디오 파일 형식</h3>
          <div className="table_summary video_format mt_ml">
            <ul className="lst_hd">
              <li className="cell extension">확장자</li>
              <li className="cell format">형식 (컨테이너)</li>
              <li className="cell codec">주요 코덱</li>
              <li className="cell browser">지원 브라우저</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell extension">
                  <code>.mp4</code>
                </p>
                <p className="cell format">MPEG-4</p>
                <p className="cell codec">H.264, AAC</p>
                <p className="cell browser">✅ 모든 최신 브라우저에서 지원</p>
              </li>
              <li>
                <p className="cell extension">
                  <code>.webm</code>
                </p>
                <p className="cell format">WebM</p>
                <p className="cell codec">VP8, VP9, Opus</p>
                <p className="cell browser">
                  ✅ 크롬, 파이어폭스, 엣지, 오페라 (iOS 사파리 제한적 지원)
                </p>
              </li>
              <li>
                <p className="cell extension">
                  <code>.ogv</code>
                </p>
                <p className="cell format">Ogg</p>
                <p className="cell codec">Theora, Vorbis</p>
                <p className="cell browser">
                  ✅ 크롬, 파이어폭스, 오페라 (일부 브라우저 미지원)
                </p>
              </li>
              <li>
                <p className="cell extension">
                  <code>.mov</code>
                </p>
                <p className="cell format">QuickTime</p>
                <p className="cell codec">H.264, AAC</p>
                <p className="cell browser">
                  ❌ 웹에서 직접 사용 비권장 (변환 필요)
                </p>
              </li>
              <li>
                <p className="cell extension">
                  <code>.avi</code>
                </p>
                <p className="cell format">AVI</p>
                <p className="cell codec">다양한 코덱</p>
                <p className="cell browser">
                  ❌ 웹에서 직접 사용 비권장 (변환 필요)
                </p>
              </li>
              <li>
                <p className="cell extension">
                  <code>.mkv</code>
                </p>
                <p className="cell format">Matroska</p>
                <p className="cell codec">H.264, VP9, Opus 등</p>
                <p className="cell browser">
                  ❌ 웹에서 직접 사용 비권장 (변환 필요)
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">비디오 파일 형식 상세 설명</h3>

          <div className="mt_m indent">
            <h4 className="ml_mn t_blue">
              ✅ MP4 (<code className="font-18-important weight-600">.mp4</code>
              )
            </h4>
            <p className="mt_ms">
              가장 널리 사용되는 웹 비디오 형식으로,{" "}
              <b>HTML5 비디오의 기본 표준이며 가장 추천되는 형식</b>입니다.
            </p>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">코덱</dt>
              <dd>H.264 (비디오), AAC (오디오)</dd>
            </dl>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">장점</dt>
              <dd>모든 최신 브라우저에서 안정적으로 지원됩니다.</dd>
              <dd>
                압축률과 화질의 균형이 좋아 실무에서 범용적으로 사용됩니다.
              </dd>
            </dl>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">단점</dt>
              <dd>최신 코덱(VP9/AV1) 대비 압축 효율이 낮을 수 있습니다.</dd>
            </dl>
            <CodeBlock title="MP4" className="mt_ms" language="html">
              {`<video src="video.mp4" controls></video>`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn t_blue">
              ✅ WebM (
              <code className="font-18-important weight-600">.webm</code>)
            </h4>
            <p className="mt_ms">
              구글이 개발한 오픈 포맷으로, MP4보다 가볍고 효율적인 경우가 많지만
              <b> 호환성 때문에 MP4와 함께 제공</b>하는 것이 안전합니다.
            </p>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">코덱</dt>
              <dd>VP8/VP9 (비디오), Opus/Vorbis (오디오)</dd>
            </dl>
            <CodeBlock title="WebM" className="mt_ms" language="html">
              {`<video controls>
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
</video>`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn t_blue">
              ✅ OGV (<code className="font-18-important weight-600">.ogv</code>
              )
            </h4>
            <p className="mt_ms">
              오픈 소스 포맷이지만 현재는 활용 빈도가 낮아 MP4/WebM 우선 구성이
              일반적입니다.
            </p>
            <CodeBlock title="OGV" className="mt_ms" language="html">
              {`<video controls>
  <source src="video.ogv" type="video/ogg">
  <source src="video.mp4" type="video/mp4">
</video>`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">
              ❌ MOV (<code className="font-18-important weight-600">.mov</code>
              )
            </h4>
            <p className="mt_ms">애플이 개발한 QuickTime 비디오 포맷입니다.</p>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">단점</dt>
              <dd>대부분의 웹 브라우저에서 기본적으로 지원되지 않습니다.</dd>
              <dd>웹에서 사용하려면 MP4로 변환하는 것이 필요합니다.</dd>
            </dl>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">
              ❌ AVI (<code className="font-18-important weight-600">.avi</code>
              )
            </h4>
            <p className="mt_ms">
              마이크로소프트에서 개발한 오래된 비디오 컨테이너입니다.
              <br />
              웹에서는 AVI 사용을 권장하지 않으며, MP4로 변환하시는 것이
              바람직합니다.
            </p>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">단점</dt>
              <dd>파일 크기가 매우 크며, 웹에서 최적화되지 않았습니다.</dd>
              <dd>웹 브라우저에서 기본적으로 지원되지 않습니다.</dd>
            </dl>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">
              ❌ MKV (<code className="font-18-important weight-600">.mkv</code>
              )
            </h4>
            <p className="mt_ms">
              Matroska 포맷으로, 다양한 오디오 및 비디오 스트림을 포함할 수
              있습니다. 주로 영화 및 고화질 영상에 사용되며, 웹에서는 MP4 또는
              WebM이 더 적합합니다.
            </p>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">단점</dt>
              <dd>웹 브라우저에서 기본적으로 지원되지 않습니다.</dd>
              <dd>파일 크기가 클 수 있습니다.</dd>
            </dl>
          </div>
        </article>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/06_html_05.png"} alt="video 요소" />
        <figcaption>video 요소</figcaption>
      </figure>
    </>
  );
}

export default VideoElementPage;
