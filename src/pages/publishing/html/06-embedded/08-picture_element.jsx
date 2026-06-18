import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "picture_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "picture element",
  description:
    "picture 요소는 HTML 문서에서 화면 크기, 해상도, 이미지 형식 등에 따라 적절한 이미지를 선택적으로 로딩할 수 있도록 하는 태그로, 내부에 여러 개의 source 요소를 포함하여 조건별 이미지를 정의하고 마지막에 img 요소를 포함해 기본 이미지를 지정합니다. 이 페이지에서는 picture 요소의 주요 역할 및 특징을 설명하고, picture 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, HTML5 tag, elements, picture",
};

function PictureElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;picture&gt;</code> 요소는 웹 페이지에서{" "}
          <b>
            상황에 따라 다른 이미지 소스를 선택적으로 표시할 수 있도록 하는
            시맨틱 태그
          </b>
          로,
          <b>반응형 이미지나 포맷별 대체 이미지 제공에 사용됩니다.</b>
          <br />
          내부에 <code>&lt;source&gt;</code> 요소를 여러 개 포함하여{" "}
          <strong>화면 크기, 해상도, 이미지 형식(webp, jpg 등)</strong>에 따라
          적절한 이미지를 브라우저가 자동으로 선택하게 할 수 있으며,
          <br />
          마지막에는{" "}
          <b>
            기본 이미지로 <code className="weight-600">&lt;img&gt;</code> 요소를
            포함
          </b>
          하여,
          <b>
            브라우저가 <code className="weight-600">&lt;source&gt;</code> 조건과
            일치하는 이미지를 찾지 못했을 때를 대비
          </b>
          하거나,
          <b>
            HTML 문서가 <code className="weight-600">&lt;picture&gt;</code>를
            지원하지 않는 경우에도 이미지가 표시
          </b>
          되도록 해야 합니다.
          <br />
          이를 통해, <b>성능 최적화와 다양한 디바이스 대응</b>을 동시에 할 수
          있습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>반응형 이미지 제공</strong>
            <ul className="dot_lst">
              <li>
                디바이스/화면 크기에 맞는 이미지를 선택 제공할 수 있습니다.
              </li>
              <li>모바일/데스크톱별 다른 이미지를 분기할 수 있습니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>브라우저별 이미지 형식 지원</strong>
            <ul className="dot_lst">
              <li>
                일부 브라우저는 WebP 또는 AVIF와 같은 최신 이미지 포맷을
                지원하고, 일부는 지원하지 않습니다.
              </li>
              <li>
                <code>&lt;picture&gt;</code> 요소를 사용하면 브라우저가 지원하는
                최적의 이미지 포맷을 자동으로 선택할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>
              화면 크기에 따라 적절한 이미지 제공 (media 속성 사용)
            </strong>
            <p>
              CSS의 <code>media query</code>와 유사한 <code>media</code> 속성을
              사용하여 화면 크기에 따라 다른 이미지를 제공합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>호환성 및 접근성 고려</strong>
            <p>
              <code>&lt;picture&gt;</code> 요소 내의 <code>&lt;img&gt;</code>{" "}
              태그는 필수 요소이며, 브라우저가 <code>&lt;picture&gt;</code>{" "}
              요소를 지원하지 않더라도 기본적으로 표시됩니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>웹 성능 최적화</strong>
            <ul className="dot_lst">
              <li>과도한 대형 이미지 로드를 줄여 초기 로딩을 개선합니다.</li>
              <li>특히 모바일 데이터 사용량 절감에 효과적입니다.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;picture&gt;</code> 요소는 기본적으로 인라인 레벨 요소입니다.
        </p>
        <CodeBlock title="picture element CSS" className="mt_m" language="css">
          {`picture {
  display: inline;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <p className="mt_l">
          <mark>
            <code>&lt;picture&gt;</code> 요소는 내부에 <code>&lt;img&gt;</code>
            와 <code>&lt;source&gt;</code>를 함께 사용할 때 의미가 있으며,
            <i className="underline">
              단순히 <code>&lt;img&gt;</code> 요소만 포함하는 것은 잘못된 방식은
              아니지만 불필요한 태그 사용이 될 수 있습니다.
            </i>
          </mark>
        </p>
        <dl className="dl_dot_lst mt_s">
          <dt>문법 상세 설명 :</dt>
          <dd>
            브라우저는 <code>&lt;source&gt;</code> 요소들의 속성을 순서대로
            확인하며, 첫 번째로 조건을 만족하는 요소를 사용 하고 이후 요소들은
            무시합니다.
          </dd>
          <dd>
            <code>&lt;img&gt;</code> 요소는 <code>&lt;picture&gt;</code> 요소
            내에서 가장 마지막에 위치 해야 합니다.
          </dd>
          <dd>
            모든 <code>&lt;source&gt;</code> 요소가 조건을 만족하지 못하면
            마지막에 위치한 <code>&lt;img&gt;</code> 요소가 대신 표시됩니다.
          </dd>
          <dd>
            또한, <code>&lt;picture&gt;</code> 요소를 지원하지 않는
            브라우저에서는 하위 호환성을 위해 <code>&lt;img&gt;</code> 요소가
            사용됩니다.
          </dd>
        </dl>
        <CodeBlock
          title="picture element syntax"
          className="mt_m"
          language="html"
        >
          {`<picture>
  <source srcset="image-large.jpg" media="(min-width: 1024px)">
  <source srcset="image-medium.jpg" media="(min-width: 600px)">
  <img src="image-default.jpg" alt="설명 이미지">
</picture>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">
          속성
          <i className="t_blue">
            (
            <code className="font-24-important weight-600">
              &lt;picture&gt;
            </code>
            에서 사용하는{" "}
            <code className="font-24-important weight-600">&lt;source&gt;</code>{" "}
            속성)
          </i>
        </h2>
        <p className="notice_blue mt_l">중요합니다!</p>
        <p className="mt_sm">
          <code>&lt;picture&gt;</code> 요소 자체에는 특별한 속성이 없으며,
          <mark>
            내부의 <code>&lt;source&gt;</code> 요소가 주요 속성을 가집니다.
          </mark>
        </p>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            &lt;source&gt;의 [srcset] <i className="attr_required">필수</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;source srcset="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            사용할 이미지 파일과 해상도(또는 크기)를 지정합니다.
            <br />
            여러 개의 이미지를 쉼표(,)로 구분하여 제공할 수 있습니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>사용 방법 :</dt>
            <dd>
              <b>이미지URL [해상도]w</b> : 다른 해상도의 이미지 지정
            </dd>
            <dd>
              <b>이미지URL [배율]x</b> : 디스플레이 배율(레티나)에 따른 이미지
              지정
            </dd>
          </dl>
          <CodeBlock title="source의 [srcset]" className="mt_m" language="html">
            {`<picture>
  <!--
    다른 해상도의 이미지 제공
    : 브라우저는 뷰포트 크기에 따라 적절한 이미지를 선택합니다.
  -->
  <source srcset="image-small.jpg 480w, image-medium.jpg 1024w, image-large.jpg 1920w">

  <!--
    디스플레이 배율에 따른 이미지 제공
    : 2배 또는 3배 해상도를 지원하는 디스플레이에서 고해상도 이미지를 자동으로 선택합니다.
  -->
  <source srcset="image-1x.jpg 1x, image-2x.jpg 2x, image-3x.jpg 3x">
</picture>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            &lt;source&gt;의 [media] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;source media="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            미디어 쿼리를 사용하여 특정 화면 크기에 맞는 이미지를 선택할 수
            있습니다.
            <br />
            일반적으로 <code>min-width</code>, <code>max-width</code> 등의 CSS
            미디어 쿼리를 활용하며, <code>media</code> 속성을 사용할 때는
            <code>srcset</code> 또는 <code>src</code>를 통해 최소한 하나의
            이미지를 지정해야 합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>예시 설명 :</dt>
            <dd>화면 너비가 600px 이하일 경우 image-small.jpg 사용합니다.</dd>
            <dd>601px 이상일 경우 image-large.jpg 사용합니다.</dd>
          </dl>
          <CodeBlock title="source의 [media]" className="mt_m" language="html">
            {`<picture>
  <source media="(max-width: 600px)" srcset="image-small.jpg">
  <source media="(min-width: 601px)" srcset="image-large.jpg">
</picture>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            &lt;source&gt;의 [type] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;source type="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            이미지 파일의 MIME 유형을 지정하여 브라우저가 지원하는 포맷을
            로드하도록 합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>브라우저별 지원 형식 :</dt>
            <dd>
              <code>image/webp</code> : 고효율 이미지 포맷 (WebP)
            </dd>
            <dd>
              <code>image/avif</code> : 최신 고압축 이미지 포맷 (AVIF)
            </dd>
            <dd>
              <code>image/jpeg</code>, <code>image/png</code>,{" "}
              <code>image/svg+xml</code> 등
            </dd>
          </dl>
          <dl className="dl_dot_lst mt_s">
            <dt>예시 설명 :</dt>
            <dd>
              브라우저가 WebP를 지원하면 <code>image.webp</code>를 사용하고,
            </dd>
            <dd>
              그렇지 않으면 JPEG(<code>image.jpg</code>)를 사용합니다.
            </dd>
          </dl>
          <CodeBlock title="source의 [type]" className="mt_m" language="html">
            {`<picture>
  <source type="image/webp" srcset="image.webp"> <!-- 고효율 이미지 포맷 -->
  <source type="image/jpeg" srcset="image.jpg">
</picture>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본적인 반응형 이미지 제공</h3>
          <p className="mt_ms">
            화면 크기에 따라 <code>large.jpg</code>, <code>medium.jpg</code>,{" "}
            <code>small.jpg</code> 중 적절한 이미지를 로드합니다. 모든 조건을
            충족하지 못하면 <code>small.jpg</code>가 기본값으로 표시됩니다.
          </p>
          <CodeBlock
            title="기본적인 반응형 이미지 제공"
            className="mt_m"
            language="html"
          >
            {`<picture>
  <source srcset="large.jpg" media="(min-width: 1000px)">
  <source srcset="medium.jpg" media="(min-width: 600px)">
  <img src="small.jpg" alt="반응형 이미지">
</picture>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            이미지 포맷(WebP 지원 여부 확인 후 대체 이미지 제공)
          </h3>
          <p className="mt_ms">
            브라우저가 WebP 형식을 지원하면 <code>image.webp</code>를 사용하고,
            그렇지 않으면 <code>image.jpg</code>를 표시합니다.
          </p>
          <CodeBlock title="이미지 포맷" className="mt_m" language="html">
            {`<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="웹피(WebP) 지원 여부를 확인하는 이미지">
</picture>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            고해상도 이미지 제공 (Retina 디스플레이 대응)
          </h3>
          <p className="mt_ms">
            <code>2x</code>, <code>3x</code> 설정을 통해 고해상도(Retina)
            디스플레이에 적합한 이미지를 제공합니다.
          </p>
          <CodeBlock
            title="고해상도 이미지 제공(Retina)"
            className="mt_m"
            language="html"
          >
            {`<picture>
  <source srcset="image@2x.jpg 2x, image@3x.jpg 3x">
  <img src="image.jpg" alt="고해상도 이미지">
</picture>`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l gap-column-important-sm">
          <li>
            <code>&lt;picture&gt;</code> 요소를 지원하지 않는 브라우저나 모든{" "}
            <code>&lt;source&gt;</code> 조건이 충족되지 않는 경우를 대비해야
            합니다.
            <br />
            <code>&lt;img&gt;</code> 태그 없이 <code>&lt;source&gt;</code>{" "}
            요소만 사용할 경우 이미지가 표시되지 않을 수 있습니다.
          </li>
          <li>
            <code>&lt;picture&gt;</code> 내부에는 반드시{" "}
            <code>&lt;img&gt;</code> 요소를 포함해야 하며, 기본 이미지로
            사용됩니다.
          </li>
          <li>
            <code>&lt;picture&gt;</code> 요소는 주로 페이지 로드 시 적절한
            이미지를 선택하는 용도이므로, 자바스크립트로 동적으로 변경할 필요가
            있는 이미지에는 적합하지 않습니다.
          </li>
          <li>
            이미지 로딩 우선순위는 <code>&lt;source&gt;</code> 요소의 순서에
            따라 결정됩니다.
            <br />
            브라우저는 위에서 아래로 차례대로 평가하며, 조건을 만족하는 첫 번째
            이미지를 로드합니다. 따라서, 가장 넓은 조건을 마지막에 배치하는 것이
            좋습니다.
          </li>
          <li>
            화면 크기에 맞게 이미지를 제공하더라도, 너무 큰 파일을 사용하면 로딩
            속도가 느려질 수 있습니다.
            <br />
            따라서 이미지 용량을 압축하여 <code>&lt;picture&gt;</code> 요소를
            사용하는 의미가 퇴색되지 않도록 하는 것이 좋습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="picture">
        <ul>
          <li className="ie">지원안함</li>
          <li className="edge">13.0</li>
          <li className="chrome">38.0</li>
          <li className="firefox">38.0</li>
          <li className="opera">25.0</li>
          <li className="safari">9.1</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/06_html_08.png"} alt="picture 요소" />
        <figcaption>picture 요소</figcaption>
      </figure>
    </>
  );
}

export default PictureElementPage;
