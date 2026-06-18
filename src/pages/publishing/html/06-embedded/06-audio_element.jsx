import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "audio_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "audio element",
  description:
    "audio 요소는 HTML 문서에서 웹 브라우저 상에서 오디오 파일을 삽입하고 재생할 수 있도록 하는 태그로, src 속성이나 source 요소를 통해 음원 파일을 지정하며 controls, autoplay, loop, muted 등의 속성으로 재생 방식과 사용자 조작 기능을 설정할 수 있습니다. 이 페이지에서는 audio 요소의 주요 역할 및 특징을 설명하고, audio 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, audio",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_350" aria-hidden />;
}

function AudioElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;audio&gt;</code> 요소는{" "}
          <b>
            웹 페이지에 오디오(음성, 음악, 효과음 등)를 삽입하고 재생할 수
            있도록 하는 시맨틱 태그
          </b>
          로,
          <b>브라우저에서 추가 플러그인 없이 사운드를 직접 처리</b>할 수 있게
          해줍니다.
          <br />
          <code>src</code> 또는 <code>&lt;source&gt;</code>로 파일을 지정하며,
          <code>controls</code>, <code>autoplay</code>, <code>loop</code>,{" "}
          <code>muted</code>로 재생 동작을 제어할 수 있습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>브라우저 내 오디오 재생</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;audio&gt;</code> 요소만으로 기본 재생이 가능합니다.
              </li>
              <li>
                <code>&lt;source&gt;</code>를 활용하면 포맷별 대체 재생이
                가능합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>기본 컨트롤 UI 제공</strong>
            <p>
              <code>controls</code> 속성으로 재생/일시정지/볼륨 조절 UI를
              제공합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>자동/반복 재생 설정</strong>
            <p>
              <code>autoplay</code>, <code>loop</code>, <code>muted</code>{" "}
              조합으로 재생 정책을 제어할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다양한 오디오 포맷 지원</strong>
            <p>
              브라우저 호환을 위해 <code>mp3</code>, <code>ogg</code>,{" "}
              <code>wav</code>를 함께 제공하는 방식이 유리합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>대체 콘텐츠 제공 가능</strong>
            <p>
              지원하지 않는 환경을 위해 fallback 텍스트나 다운로드 링크를 제공할
              수 있습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;audio&gt;</code> 요소는 기본적으로 인라인 레벨 요소입니다.
        </p>
        <CodeBlock title="audio element CSS" className="mt_m" language="css">
          {`audio {
  display: inline;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="audio element syntax"
          className="mt_l"
          language="html"
        >
          {`<audio src="audio.mp3" controls>
  브라우저가 오디오 태그를 지원하지 않습니다.
</audio>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;audio&gt;
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
                  재생할 오디오 파일의 경로를 지정합니다.
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
                  페이지 로드 시 자동으로 오디오를 재생합니다.
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>loop</code>
                </p>
                <p className="cell content">
                  오디오가 끝나면 자동으로 다시 재생됩니다.
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>muted</code>
                </p>
                <p className="cell content">
                  오디오의 소리를 음소거 상태로 시작합니다.
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>preload</code>
                </p>
                <p className="cell content">
                  오디오 데이터를 미리 로드하는 방식을 설정합니다.
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>crossorigin</code>
                </p>
                <p className="cell content">
                  다른 도메인 오디오 파일 로드 시 사용합니다.
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [src] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;audio src="파일 경로(URL)"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            재생할 오디오 파일의 경로(URL)를 지정합니다. 여러 개의{" "}
            <code>&lt;source&gt;</code> 요소를 사용할 수도 있습니다.
          </p>
          <CodeBlock title="audio 속성 [src]" className="mt_m" language="html">
            {`<!-- 단일 파일 경로 -->
<audio src="audio.mp3"></audio>

<!-- 여러 파일 경로(브라우저 대응) -->
<audio>
  <source src="audio.ogg" type="audio/ogg">
  <source src="audio.mp3" type="audio/mpeg">
</audio>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [controls] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;audio controls&gt;
            </span>
          </h3>
          <CodeBlock
            title="audio 속성 [controls]"
            className="mt_m"
            language="html"
          >
            {`<audio src="audio.mp3" controls></audio>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [autoplay] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;audio autoplay&gt;
            </span>
          </h3>
          <p className="mt_ms">
            페이지 로드 시 자동으로 오디오 재생합니다. 브라우저 정책에 따라 자동
            재생이 제한될 수 있습니다.
          </p>
          <CodeBlock
            title="audio 속성 [autoplay]"
            className="mt_m"
            language="html"
          >
            {`<audio src="audio.mp3" autoplay></audio>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [loop] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">&lt;audio loop&gt;</span>
          </h3>
          <CodeBlock title="audio 속성 [loop]" className="mt_m" language="html">
            {`<audio src="audio.mp3" loop></audio>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [muted] <i className="attr_optional">Boolean - 선택 사항</i>{" "}
            <span className="t_blue el_inline_block">&lt;audio muted&gt;</span>
          </h3>
          <CodeBlock
            title="audio 속성 [muted]"
            className="mt_m"
            language="html"
          >
            {`<audio src="audio.mp3" muted></audio>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [preload] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;audio preload="값"&gt;
            </span>
          </h3>
          <dl className="dl_dot_lst mt_s">
            <dt>값 :</dt>
            <dd>
              <code>auto</code> : 필요 시 전체 오디오 미리 로드
            </dd>
            <dd>
              <code>metadata</code> : 길이 등 메타데이터만 로드
            </dd>
            <dd>
              <code>none</code> : 재생 시점에 로드
            </dd>
          </dl>
          <CodeBlock
            title="audio 속성 [preload]"
            className="mt_m"
            language="html"
          >
            {`<audio src="audio.mp3" preload="metadata"></audio>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [crossorigin] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;audio crossorigin="값"&gt;
            </span>
          </h3>
          <dl className="dl_dot_lst mt_s">
            <dt>값 :</dt>
            <dd>
              <code>anonymous</code> : 인증 정보 없이 요청
            </dd>
            <dd>
              <code>use-credentials</code> : 사용자 인증 정보 포함
            </dd>
          </dl>
          <CodeBlock
            title="audio 속성 [crossorigin]"
            className="mt_m"
            language="html"
          >
            {`<audio src="https://example.com/audio.mp3" crossorigin="anonymous"></audio>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            여러 형식의 오디오 제공 (&lt;source&gt; 사용)
          </h3>
          <CodeBlock
            title="여러 형식의 오디오 제공"
            className="mt_m"
            language="html"
          >
            {`<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  <source src="audio.wav" type="audio/wav">
  브라우저가 오디오 태그를 지원하지 않습니다. <a href="audio.mp3">오디오 다운로드</a>
</audio>`}
          </CodeBlock>
        </article>
        <article className="mt_l indent">
          <h3 className="ml_mn">자동 재생 및 반복 재생 설정</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.6.audio_element_1.html"
                className="min_height_300 mb_result_height_200"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="자동 재생 및 반복 재생 설정"
                minHeight="300px"
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">JavaScript를 활용한 오디오 제어</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/06-embedded/6.6.audio_element_2.html"
                className="min_height_300 mb_result_height_200"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="JavaScript를 활용한 오디오 제어"
                minHeight="300px"
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
            {`<audio src="podcast.mp3" controls aria-label="웹 접근성 관련 팟캐스트"></audio>`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            브라우저별 지원 포맷이 다르므로 <code>mp3</code>, <code>ogg</code>,{" "}
            <code>wav</code>를 함께 제공하는 것이 좋습니다.
          </li>
          <li>
            오디오 파일 용량이 클 경우 <code>preload=&quot;metadata&quot;</code>
            를 사용해 초기 로딩 부담을 줄일 수 있습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="audio">
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
        <h2 className="ml_mn">웹에서 사용되는 오디오 파일 형식 정리</h2>
        <blockquote className="uk_note mt_xl" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>
            웹에서 사용되는 오디오 파일 형식은{" "}
            <b>파일 확장자, 코덱, 브라우저 지원 여부</b> 등에 따라 구분됩니다.
            <br />
            오디오 파일 형식은 단순히 확장자만이 아니라 <b>코덱(Codec)</b>에
            따라서도 지원 여부가 달라질 수 있습니다.
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
                  <code>.mp3</code>
                </p>
                <p className="cell format">MPEG-1 Audio Layer 3</p>
                <p className="cell codec">MP3</p>
                <p className="cell browser">✅ 모든 최신 브라우저 지원</p>
              </li>
              <li>
                <p className="cell extension">
                  <code>.ogg</code>
                </p>
                <p className="cell format">Ogg</p>
                <p className="cell codec">Vorbis, Opus</p>
                <p className="cell browser">
                  ✅ 크롬, 파이어폭스, 오페라, 엣지 (❌ 사파리 제한적 지원)
                </p>
              </li>
              <li>
                <p className="cell extension">
                  <code>.wav</code>
                </p>
                <p className="cell format">Waveform Audio</p>
                <p className="cell codec">PCM, ADPCM</p>
                <p className="cell browser">
                  ✅ 모든 최신 브라우저 지원 (파일 크기 큼)
                </p>
              </li>
              <li>
                <p className="cell extension">
                  <code>.aac</code>
                </p>
                <p className="cell format">Advanced Audio Codec</p>
                <p className="cell codec">AAC</p>
                <p className="cell browser">
                  ✅ 사파리, iOS 최적화 (❌ 일부 브라우저 미지원)
                </p>
              </li>
              <li>
                <p className="cell extension">
                  <code>.flac</code>
                </p>
                <p className="cell format">Free Lossless Audio Codec</p>
                <p className="cell codec">FLAC</p>
                <p className="cell browser">
                  ✅ 크롬, 파이어폭스, 오페라 (❌ 사파리 미지원)
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">비디오 파일 형식 상세 설명</h3>

          <div className="mt_m indent">
            <h4 className="ml_mn t_blue">
              ✅ MP3 (<code className="font-18-important weight-600">.mp3</code>
              )
            </h4>
            <p className="mt_ms">
              MP3는 웹 오디오 파일 형식으로 가장 널리 사용되며, 기본적으로{" "}
              <code>&lt;audio&gt;</code> 요소에서 추천됩니다.
            </p>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">코덱</dt>
              <dd>MP3 (MPEG-1 Audio Layer 3)</dd>
            </dl>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">장점</dt>
              <dd>모든 최신 브라우저에서 지원됩니다.</dd>
              <dd>높은 압축률을 유지하면서도 음질이 우수합니다.</dd>
              <dd>스트리밍 및 다운로드에 최적화되어 있습니다.</dd>
            </dl>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">단점</dt>
              <dd>
                일부 최신 코덱(Opus, AAC)보다 압축 효율이 다소 낮을 수 있습니다.
              </dd>
            </dl>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn t_blue">
              ✅ OGG (<code className="font-18-important weight-600">.ogg</code>
              )
            </h4>
            <p className="mt_ms">
              오픈 소스 오디오 파일 형식으로, 주로 Vorbis 또는 Opus 코덱을
              사용합니다. MP3와 함께 제공하면 브라우저 호환성을 높일 수
              있습니다.
            </p>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">코덱</dt>
              <dd>Vorbis, Opus</dd>
            </dl>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">장점</dt>
              <dd>
                무료 오픈 소스 형식으로 라이선스 문제 없이 사용할 수 있습니다.
              </dd>
              <dd>
                Opus 코덱 사용 시 MP3보다 음질/압축 효율이 우수할 수 있습니다.
              </dd>
            </dl>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">단점</dt>
              <dd>iOS 사파리에서 기본적으로 지원되지 않습니다.</dd>
            </dl>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn t_blue">
              ✅ WAV (<code className="font-18-important weight-600">.wav</code>
              )
            </h4>
            <p className="mt_ms">
              비압축 오디오 파일 형식으로 고품질 사운드를 제공합니다. 주로
              효과음에 적합하며, 음악 스트리밍 용도로는 권장되지 않습니다.
            </p>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">코덱</dt>
              <dd>PCM, ADPCM</dd>
            </dl>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">장점</dt>
              <dd>오디오 품질이 가장 뛰어납니다(무손실).</dd>
              <dd>모든 최신 브라우저에서 지원됩니다.</dd>
            </dl>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">단점</dt>
              <dd>압축되지 않아 파일 크기가 매우 큽니다.</dd>
              <dd>스트리밍보다는 다운로드/효과음 용도로 적합합니다.</dd>
            </dl>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">
              ✅ AAC (<code className="font-18-important weight-600">.aac</code>
              )
            </h4>
            <p className="mt_ms">
              MP3보다 효율적인 오디오 포맷으로, 특히 애플 기기에서 최적화되어
              있습니다.
            </p>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">코덱</dt>
              <dd>AAC (Advanced Audio Codec)</dd>
            </dl>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">장점</dt>
              <dd>MP3보다 높은 음질을 유지하면서 압축 효율이 좋습니다.</dd>
              <dd>사파리 및 iOS 환경에서 최적화되어 있습니다.</dd>
            </dl>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">단점</dt>
              <dd>일부 브라우저(특히 구형)에서 지원되지 않을 수 있습니다.</dd>
            </dl>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">
              ✅ FLAC (
              <code className="font-18-important weight-600">.flac</code>)
            </h4>
            <p className="mt_ms">
              FLAC는 무손실 오디오 포맷으로 고음질 저장에 적합하며, 일반 웹
              스트리밍보다는 고음질 서비스에서 더 많이 사용됩니다.
            </p>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">코덱</dt>
              <dd>FLAC (Free Lossless Audio Codec)</dd>
            </dl>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">장점</dt>
              <dd>WAV보다 압축률이 높으면서도 무손실 오디오를 제공합니다.</dd>
              <dd>고음질 스트리밍 서비스에서 많이 사용됩니다.</dd>
            </dl>
            <dl className="dl_dot_lst mt_s">
              <dt className="t_black">단점</dt>
              <dd>파일 크기가 크고 일반 웹 스트리밍에는 적합하지 않습니다.</dd>
              <dd>사파리에서는 지원되지 않습니다.</dd>
            </dl>
          </div>
        </article>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/06_html_06.png"} alt="audio 요소" />
        <figcaption>audio 요소</figcaption>
      </figure>
    </>
  );
}

export default AudioElementPage;
