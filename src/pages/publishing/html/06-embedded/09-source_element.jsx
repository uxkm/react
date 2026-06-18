import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "source_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "source element",
  description:
    "source 요소는 HTML 문서에서 picture, audio, video 요소 내부에 사용되며, 조건에 따라 다른 미디어 파일을 제공할 수 있도록 하는 태그로, srcset, media, type 등의 속성을 통해 브라우저가 디바이스 환경, 지원 형식, 화면 크기에 따라 가장 적합한 파일을 선택하도록 도와줍니다. 이 페이지에서는 source 요소의 주요 역할 및 특징을 설명하고, source 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, source",
};

function SourceElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;source&gt;</code> 요소는 <code>&lt;picture&gt;</code>,{" "}
          <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code> 요소 안에서{" "}
          <b>
            미디어 소스 파일을 조건에 따라 선택적으로 제공할 때 사용하는 태그
          </b>
          입니다.
          <br />
          <code>src</code>, <code>type</code>, <code>media</code> 속성 등을 통해{" "}
          <b>파일 경로, 파일 형식, 화면 조건 등</b>을 지정하며, 브라우저는 이를
          참고해 가장 적합한 소스를 자동으로 선택합니다.
          <br />
          <b>대체 형식이나 해상도, 포맷별 이미지·음성·영상 대응</b>을 할 수
          있도록 도와주며, <code>&lt;source&gt;</code>는{" "}
          <b className="underline">
            단독으로 사용되지 않고 항상 부모 미디어 요소 안에 포함되어야 합니다.
          </b>
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>다양한 미디어 형식 제공</strong>
            <p>
              <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code>,{" "}
              <code>&lt;picture&gt;</code> 내부에서 브라우저가 지원하는 형식을
              선택할 수 있게 합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>브라우저별 포맷 지원 최적화</strong>
            <p>
              일부 브라우저는 특정 미디어 포맷(WebP, AVIF, Ogg 등)을 지원하지
              않기 때문에, 여러 포맷을 제공하여 호환성을 높일 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>미디어 쿼리와 함께 사용 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>media</code> 속성으로 화면 조건별 리소스를 선택할 수
                있습니다.
              </li>
              <li>반응형 이미지 구성에서 핵심 역할을 합니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>비디오, 오디오 파일의 대체 포맷 제공</strong>
            <p>
              <code>type</code> 속성을 활용하여 MP4, WebM, Ogg 등 다양한 형식을
              지정할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>파일 로딩 최적화 및 성능 개선</strong>
            <p>
              사용자의 디바이스나 네트워크 상태에 따라 적절한 리소스를
              제공함으로써 로딩 속도를 향상시킬 수 있습니다.
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
            <code>&lt;source&gt;</code> 요소 자체는 화면에 표시되지 않으며
          </mark>
          , <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code>,{" "}
          <code>&lt;picture&gt;</code> 내부에서만 동작합니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-l">
          <li className="t_black_before weight-600-before">
            <strong>
              반응형 이미지 제공 (
              <code className="font-16-important">&lt;picture&gt;</code> 내
              사용)
            </strong>
            <CodeBlock
              title="source 요소 picture 내 사용"
              className="mt_m"
              language="html"
            >
              {`<picture>
  <source srcset="image-large.jpg" media="(min-width: 1024px)">
  <source srcset="image-medium.jpg" media="(min-width: 600px)">
  <img src="image-default.jpg" alt="반응형 이미지">
</picture>`}
            </CodeBlock>
          </li>
          <li className="t_black_before weight-600-before">
            <strong>
              비디오 파일 형식별 대체 제공 (
              <code className="font-16-important">&lt;video&gt;</code> 내 사용)
            </strong>
            <CodeBlock
              title="source 요소 video 내 사용"
              className="mt_m"
              language="html"
            >
              {`<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogv" type="video/ogg">
  브라우저가 비디오를 지원하지 않습니다. <a href="video.mp4">비디오 다운로드</a>
</video>`}
            </CodeBlock>
          </li>
          <li className="t_black_before weight-600-before">
            <strong>
              오디오 파일 형식별 대체 제공 (
              <code className="font-16-important">&lt;audio&gt;</code> 내 사용)
            </strong>
            <CodeBlock
              title="source 요소 audio 내 사용"
              className="mt_m"
              language="html"
            >
              {`<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  <source src="audio.wav" type="audio/wav">
  브라우저가 오디오를 지원하지 않습니다. <a href="audio.mp3">오디오 다운로드</a>
</audio>`}
            </CodeBlock>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">
              &lt;source&gt;
            </code>{" "}
            속성 요약
          </h3>
          <div className="table_summary video_format mt_ml">
            <ul className="lst_hd">
              <li className="cell attr_req">속성명</li>
              <li className="cell tag">사용 가능한 요소</li>
              <li className="cell content">설명</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell attr_req t_darkgreen">
                  <code className="t_darkgreen">src</code>
                  [필수 - <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code>
                  ]
                </p>
                <p className="cell tag">
                  <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code>,{" "}
                  <code>&lt;picture&gt;</code>
                </p>
                <p className="cell content">
                  미디어 파일의 URL을 지정 (<code>&lt;video&gt;</code>,{" "}
                  <code>&lt;audio&gt;</code> 요소 내에서 사용하는 경우에만 필수)
                </p>
              </li>
              <li>
                <p className="cell attr_req">
                  <code>type</code>
                </p>
                <p className="cell tag">
                  <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code>,{" "}
                  <code>&lt;picture&gt;</code>
                </p>
                <p className="cell content">미디어의 MIME 유형을 지정</p>
              </li>
              <li>
                <p className="cell attr_req t_darkgreen">
                  <code className="t_darkgreen">srcset</code>
                  [필수 - <code>src</code> 대신]
                </p>
                <p className="cell tag">
                  <code>&lt;picture&gt;</code>
                </p>
                <p className="cell content">
                  이미지의 다양한 해상도 및 크기별 URL을 지정 (
                  <code>&lt;picture&gt;</code> 요소 내에 사용 시{" "}
                  <code>src</code> 속성을 사용하지 않는 조건에 필수)
                </p>
              </li>
              <li>
                <p className="cell attr_req">
                  <code>media</code>
                </p>
                <p className="cell tag">
                  <code>&lt;video&gt;</code>, <code>&lt;picture&gt;</code>
                </p>
                <p className="cell content">
                  특정 미디어 조건에서만 해당 리소스를 로드
                </p>
              </li>
            </ul>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [src]{" "}
            <i className="attr_required">필수 : &lt;video&gt;, &lt;audio&gt;</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;source src="파일 경로(URL)"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            비디오, 오디오 또는 이미지 파일의 경로를 지정합니다.
            <br />
            <code>&lt;audio&gt;</code> 및 <code>&lt;video&gt;</code> 요소에서는
            미디어 파일의 URL을 지정하는 필수 속성이지만,{" "}
            <code>&lt;picture&gt;</code> 요소에서는 <code>srcset</code>이 대신
            사용되므로 필수 속성이 아닙니다.
          </p>
          <CodeBlock title="source 속성 [src]" className="mt_m" language="html">
            {`<video controls>
  <source src="video.mp4" type="video/mp4">   <!-- src -->
  <source src="video.webm" type="video/webm"> <!-- src -->
  브라우저가 지원하지 않습니다.
</video>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [type] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;source type="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            미디어 파일의 MIME 유형을 지정합니다.
            <br />
            <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>,{" "}
            <code>&lt;picture&gt;</code> 요소에서 사용되며, 브라우저가 지원하는
            포맷인지 확인할 때 유용합니다.
          </p>
          <CodeBlock
            title="source 속성 [type]"
            className="mt_m"
            language="html"
          >
            {`<audio controls>
  <source src="audio.ogg" type="audio/ogg">  <!-- type -->
  <source src="audio.mp3" type="audio/mpeg"> <!-- type -->
  브라우저가 지원하지 않습니다.
</audio>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [srcset] <i className="attr_required">필수 : &lt;picture&gt;</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;source srcset="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;picture&gt;</code> 요소에서만 사용되며, src를 대신할 수
            있습니다.
            <br />
            여러 해상도에 따라 적절한 이미지를 로드하도록 설정하며, 해상도(
            <code>1x</code>, <code>2x</code> 등) 또는 <code>w</code> 단위(폭
            기준)로 이미지를 선택할 수 있습니다.
          </p>
          <CodeBlock
            title="source 속성 [srcset]"
            className="mt_m"
            language="html"
          >
            {`<picture>
  <source srcset="image-480w.jpg 480w, image-800w.jpg 800w" media="(max-width: 600px)">
  <img src="fallback.jpg" alt="반응형 이미지">
</picture>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [media] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;source media="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            <code>&lt;picture&gt;</code> 및 <code>&lt;video&gt;</code> 요소에서
            사용됩니다.
            <br />
            미디어 조건을 지정하여 특정 화면 크기나 기기에서만 해당 리소스를
            로드하며, CSS의 <code>@media</code>와 동일한 문법을 사용합니다.
          </p>
          <CodeBlock
            title="source 속성 [media]"
            className="mt_m"
            language="html"
          >
            {`<picture>
  <source srcset="image-mobile.jpg" media="(max-width: 600px)">
  <source srcset="image-desktop.jpg" media="(min-width: 601px)">
  <img src="fallback.jpg" alt="반응형 이미지">
</picture>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            다양한 형식의 비디오 제공{" "}
            <i className="t_blue">(&lt;video&gt;와 함께 사용)</i>
          </h3>
          <p className="mt_ms">
            사용자의 브라우저가 MP4를 지원하지 않으면 WebM 또는 Ogg 형식을
            시도합니다.
            <br />
            모든 형식이 지원되지 않으면,{" "}
            <mark>"비디오를 지원하지 않는 브라우저입니다."</mark>라는 메시지가
            표시됩니다.
          </p>
          <CodeBlock
            title="다양한 형식의 비디오 제공"
            className="mt_m"
            language="html"
          >
            {`<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogv" type="video/ogg">
  비디오를 지원하지 않는 브라우저입니다. <a href="audio.mp4">비디오 다운로드</a>
</video>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            오디오 파일 형식별 지원 (&lt;audio&gt;와 함께 사용)
          </h3>
          <p className="mt_ms">
            사용자의 브라우저가 MP3를 지원하지 않으면 WebM 또는 Ogg 형식을
            시도합니다.
            <br />
            모든 형식이 지원되지 않으면,{" "}
            <mark>"브라우저가 오디오를 지원하지 않습니다."</mark>라는 메시지가
            표시됩니다.
          </p>
          <CodeBlock
            title="오디오 파일 형식별 지원"
            className="mt_m"
            language="html"
          >
            {`<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  브라우저가 오디오를 지원하지 않습니다. <a href="audio.mp3">오디오 다운로드</a>
</audio>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            반응형 이미지 제공 (&lt;picture&gt;와 함께 사용)
          </h3>
          <p className="mt_ms">
            화면 크기 조건에 맞는 이미지를 선택하여 로드합니다.
            <br />
            <code>media</code> 속성을 통해 미디어 쿼리를 사용하여 이미지를
            동적으로 바꿔줍니다.
          </p>
          <CodeBlock
            title="반응형 이미지 제공"
            className="mt_m"
            language="html"
          >
            {`<picture>
  <source srcset="image-large.jpg" media="(min-width: 1200px)">
  <source srcset="image-medium.jpg" media="(min-width: 768px)">
  <img src="image-default.jpg" alt="반응형 이미지">
</picture>`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;source&gt;</code>는 반드시 상위 요소(
            <code>&lt;picture&gt;</code>, <code>&lt;video&gt;</code>,{" "}
            <code>&lt;audio&gt;</code>) 내에서 사용해야 합니다.
            <br />
            <code>&lt;source&gt;</code> 요소 단독으로 사용될 수 없습니다.
          </li>
          <li>
            모든 브라우저가 동일한 이미지 및 미디어 포맷을 지원하는 것이
            아니므로, 다양한 형식을 제공하는 것이 중요합니다.
          </li>
          <li>
            대용량 미디어 파일을 제공할 경우, 모바일 사용자의 데이터 사용량을
            고려하여 적절한 크기의 파일을 제공해야 합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="source">
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
        <img src={IMG.HTML + "/06_html_09.png"} alt="source 요소" />
        <figcaption>source 요소</figcaption>
      </figure>
    </>
  );
}

export default SourceElementPage;
