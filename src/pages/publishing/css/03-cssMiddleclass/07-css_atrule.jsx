import { usePageMeta } from '@/components/common/PageMeta'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_atrule",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: false,
  contentList: true,
  depth3Last: false,
  bottomEditor: false
}

const PAGE_DATA = {
  title: "@규칙(At-Rule)",
  description: "@규칙(At-Rule)은 CSS에서 at 기호(@)로 시작하는 특수한 문법으로, 스타일시트의 메타데이터를 정의하거나 특정 조건에 따라 스타일을 적용하는 규칙을 지정합니다. 이 페이지에서는 @charset를 통한 문자 인코딩 지정, @import를 통한 외부 스타일시트 불러오기, @namespace를 통한 XML 네임스페이스 선언, @supports를 통한 기능 지원 여부 확인, @media를 통한 미디어별 스타일 적용, @page를 통한 인쇄 스타일 정의, @font-face를 통한 웹 폰트 정의, @keyframes를 통한 애니메이션 키프레임 정의를 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, @규칙, at규칙, @import, @font-face, @media, @charset, @namespace, @supports",
}

function CssAtrulePage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_blue">@규칙(At-Rule)</b> 식별자(identifier)가 뒤따르는 at 기호(<code>@</code>)로 시작하는 CSS 문이며, 다음 세미콜론(<code>;</code>) 또는 다음 CSS 블록 중 먼저 오는 쪽까지 모든 것을 포함합니다.<br />
      			많이 사용되는 대표적인 @규칙으로는 <code>@import</code>, <code>@font-face</code>, <code>@media</code> 등이 있습니다.
      		</p>
      	</blockquote>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn t_blue">@charset</h2>
      		<p className="mt_l">
      			스타일 시트에 쓰이는 문자 인코딩을 지정합니다.<br />
      			스타일 시트의 첫 번째 요소여야 하며 어떤 문자가 선행되지 않아야 합니다. 중첩된 문이 아니므로 조건부 그룹 at-규칙 내에 사용될 수 없습니다.<br />
      			여러 <code>@charset</code> at-규칙이 정의된 경우, 첫 번째 것만 사용되며 HTML 요소의 <code>style</code> 속성이나 HTML 페이지의 문자 집합과 관련 있는 <code>&lt;style&gt;</code> 요소 내에서 사용될 수 없습니다.
      		</p>
      		
      <CodeBlock title="@charset" language="javascript" className="uk_gist_code_box mt_m">
      {`@charset "utf-8"; /* 스타일 시트의 인코딩을 Unicode UTF-8로 설정 */
      				@charset 'iso-8859-15'; /* 스타일 시트의 인코딩을 Latin-9 (서유럽어, euro sign 있는) 로 설정 */`}
      </CodeBlock>

      		<aside className="browser_support mt_m" data-tit="@charset">
      			<ul>
      				<li className="ie">5.5+</li>
      				<li className="edge">12.0</li>
      				<li className="chrome">1.0</li>
      				<li className="firefox">1.5</li>
      				<li className="opera">9.0</li>
      				<li className="safari">4.0</li>
      			</ul>
      		</aside>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn t_blue">@import</h2>
      		<p className="mt_l">
      			스타일 시트에서 다른 스타일 규칙을 가져올 때 사용합니다.<br />
      			이 규칙은 <code>@charset</code> 규칙을 제외하고 모든 다른 종류의 규칙보다 선행해야 하며, 중첩 명령문이 아니기 때문에 조건부 그룹 @규칙 내에 사용할 수 없습니다.
      		</p>
      		
      		
      <CodeBlock title="@import" language="css" className="uk_gist_code_box mt_m">
      {`@import [ <string> | <url> ] [ <media-query-list> ];
      				@import 'uxkm.css'; /* 일반적인 사용 */
      				@import url("uxkmprint.css") print; /* 인쇄용 */
      				@import url("bluish.css") speech; /* 페이지를 읽어주는 화면낭독기 */
      				@import url("chrome://communicator/skin/"); /* URL이 지정되지 않은 경우 자동으로 할당된 경우 */
      				@import "uxReset.css" screen;/* 컴퓨터 스크린, 테블릿, 스마트폰 등 screen을 지정 않해도 기본이 screen임 */
      				@import url('landscape.css') screen and (orientation:landscape); /* 화면이 가로/세로 유형을 선택 */`}
      </CodeBlock>

      		<p className="mt_m">
      			<code>@import</code> 규칙을 사용해도 추가하는 CSS 파일의 개수가 늘어나면 HTTP 요청이 증가하여 웹 서버의 부하는 커질 수밖에 없습니다.<br />
      			하지만 <code>@import</code> 규칙을 미디어 쿼리(media query)와 함께 사용하면 조건에 따라 필요한 CSS만 적용할 수 있어 불필요한 스타일 처리를 줄일 수 있습니다.<br />
      			다음 예제는 프린트할 때에는 <mark>firstStyleSheet.css</mark> 파일을 불러오고, 스크린이 가로 방향으로 설정되어 있을 때는 <mark>secondStyleSheet.css</mark> 파일을 불러오는 예제입니다.
      		</p>
      		
      		
      <CodeBlock title="@import" language="css" className="uk_gist_code_box mt_m">
      {`@import url("firstStyleSheet.css") print;
      				@import "secondStyleSheet.css" screen and (orientation:landscape);`}
      </CodeBlock>

      		<aside className="browser_support mt_m" data-tit="@import">
      			<ul>
      				<li className="ie">5.5+</li>
      				<li className="edge">12.0</li>
      				<li className="chrome">1.0</li>
      				<li className="firefox">1.0</li>
      				<li className="opera">지원</li>
      				<li className="safari">4.0</li>
      			</ul>
      		</aside>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn t_blue">@namespace</h2>
      		<p className="mt_l">
      			CSS 스타일 시트에서 사용되는 XML 네임스페이스를 정의하는 at-규칙입니다. 정의된 네임스페이스는 그 네임스페이스 내의 요소만 선택하기 위해 universal, type 및 attribute 선택자를 제한하는 데 사용됩니다.
      		</p>
      		<p className="mt_s">
      			<code>@namespace</code> 규칙은 보통 여러 네임스페이스(인라인 SVG 또는 MathML이 있는 HTML5 등)를 포함하는 문서를 처리하는 경우에만 유용합니다. 모든 <code>@charset</code> 및 <code>@import</code> 규칙의 다음에 오고, 스타일시트에서 모든 다른 at-규칙 및 스타일 선언보다 앞서야 합니다.
      		</p>
      		<p className="mt_s">
      			<code>@namespace</code>는 기본 네임스페이스나 네임스페이스 접두어를 정의하는 데 사용됩니다. 기본 네임스페이스가 정의된 경우, 모든 universal 및 type 선택자는 그 네임스페이스 내 요소에만 적용됩니다. 네임스페이스 접두어가 정의된 경우, 선택자가 접두어로 시작하면 해당 네임스페이스와 이름이 일치하는 경우에만 일치합니다.
      		</p>
      		<p className="mt_s">
      			HTML5에서는 자동으로 네임스페이스가 할당됩니다. HTML 요소는 XHTML 네임스페이스에 있는 것처럼 행동하고, <code>&lt;svg&gt;</code> 및 <code>&lt;math&gt;</code> 요소는 각각의 적절한 네임스페이스가 자동으로 할당됩니다.
      		</p>
      		
      <CodeBlock title="@namespace" language="javascript" className="uk_gist_code_box mt_m">
      {`/* 기본 네임스페이스 */
      				@namespace url('XML-namespace-URL');
      				@namespace "XML-namespace-URL";

      				/* 접두어 붙은 네임스페이스 */
      				@namespace prefix url('XML-namespace-URL');
      				@namespace prefix "XML-namespace-URL";

      				@namespace url('http://www.w3.org/1999/xhtml');
      				@namespace svg url('http://www.w3.org/2000/svg');

      				/* 이는 모든 XHTML <a> 요소와 일치합니다, XHTML이 접두어 붙지 않은 기본 네임스페이스이기에 */
      				a {}

      				/* 이는 모든 SVG <a> 요소와 일치합니다 */
      				svg|a {}

      				/* 이는 XHTML 및 SVG <a>요소 둘 다와 일치합니다 */
      				*|a {}`}
      </CodeBlock>

      		<aside className="browser_support mt_m" data-tit="@namespace">
      			<ul>
      				<li className="ie">9+</li>
      				<li className="edge">12.0</li>
      				<li className="chrome">4.0</li>
      				<li className="firefox">3.5</li>
      				<li className="opera">10.0</li>
      				<li className="safari">3.1</li>
      			</ul>
      		</aside>
      	</section>

      	<hr />
      	<p className="mt_xxl t_black font-16 weight-600">
      		위에서 지정된 규칙외에 중첩 문의 부분 집합으로 이루어진 중첩 @-규칙 대해 설명합니다.<br />
      		중첩 @-규칙 - 중첩 문의 부분 집합으로, 조건부 그룹 규칙 속뿐만 아니라 스타일 시트의 문으로 사용될 수 있습니다.
      	</p>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn t_blue">@supports</h2>
      		<p className="mt_l">
      			하나 이상의 특정 CSS 기능에 대한 브라우저의 지원에 따라 선언을 지정할 수 있습니다. 이를 기능 쿼리라고합니다.<br />
      			규칙은 코드의 최상위 수준에 배치되거나 다른 조건부 그룹 규칙 안에 중첩 될 수 있습니다.<br />
      			지원 조건은 하나 이상의 키-값 쌍을 논리곱(and), 논리합(or), 부정(not)으로 연결해 구성합니다. 괄호로 묶어 우선순위를 지정할 수도 있습니다.
      		</p>
      		
      <CodeBlock title="@supports" language="javascript" className="uk_gist_code_box mt_m">
      {`/* 가장 기본적인 지원 조건은 단순한 선언(속성 이름과 그 값)입니다. 선언은 괄호로 묶여야 합니다.*/
      				/* 브라우저가 transform-origin 속성의 값으로 5% 5%가 유효하다고 여길 때 통과합니다. */
      				@supports (transform-origin: 5% 5%) {}

      				/* 주어진 CSS 속성의 지원 여부 판별 예시 */
      				@supports (animation-name: test) {
      					… /* 애니메이션 속성을 접두사 없이 사용할 수 있을 때 CSS 적용 */
      					@keyframes { /* 다른 @-규칙을 중첩 가능 */
      					…
      					}
      				}
      				/* 주어진 CSS 속성 및 접두사 버전의 지원 여부 판별 예시 */
      				@supports ( (perspective: 10px) or (-moz-perspective: 10px) or (-webkit-perspective: 10px) or (-ms-perspective: 10px) or (-o-perspective: 10px) ) {
      					… /* 접두사가 붙더라도 3D 변형을 지원하면 CSS 적용 */
      				}

      				/* 특정 CSS 속성의 미지원 여부 판별 예시 */
      				@supports not ((text-align-last: justify) or (-moz-text-align-last: justify) ){
      					… /* text-align-last: justify를 대체할 CSS */
      				}

      				/* 사용자 정의 속성 지원 여부 판별 예시 */
      				@supports (--foo: green) {
      					body {
      						color: var(--varName);
      					}
      				}

      				/* :is()를 지원하지 않는 브라우저에서는 무시함 */
      				:is(ul, ol) > li {
      					… /* :is() 선택자를 지원할 때 적용할 CSS */
      				}

      				@supports not selector(:is(a, b)) {
      					/* :is()를 지원하지 않을 때 대체할 CSS */
      					ul > li,
      					ol > li {
      						… /* :is()를 지원하지 않을 때 적용할 CSS */
      					}
      				}

      				@supports selector(:nth-child(1n of a, b)) {
      					/* @supports로 먼저 묶지 않으면 :nth-child()의 of 구문을 지원하지 않는 브라우저에서 스타일을 잘못 적용할 수 있음 */
      					:is(:nth-child(1n of ul, ol) a, details > summary) {
      						… /* :is() 선택자와 :nth-child()의 of 구문을 지원할 때 적용할 CSS */
      					}
      				}`}
      </CodeBlock>

      		<aside className="browser_support mt_m" data-tit="@supports">
      			<ul>
      				<li className="ie false">지원안함</li>
      				<li className="edge">12.0</li>
      				<li className="chrome">28.0</li>
      				<li className="firefox">22.0</li>
      				<li className="opera">12.1</li>
      				<li className="safari">9.0</li>
      			</ul>
      		</aside>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn t_blue">@media</h2>
      		<p className="mt_l">
      			장치가 미디어 질의(media query)를 사용하여 정의된 조건의 기준을 만족하면 해당 콘텐츠를 적용하는 조건부 그룹 규칙입니다.<br />
      			<code>min-width</code> 또는 <code>max-width</code> 를 활용하여 반응형 레이아웃(Responsive layout)을 구현할 수 있습니다.
      		</p>
      		
      <CodeBlock title="@media" language="javascript" className="uk_gist_code_box mt_m">
      {`/* 최상위 코드 레벨 */
      				@media screen and (min-width: 900px) {
      					article {
      						padding: 1rem 3rem;
      					}
      				}

      				/* 다른 조건부 @규칙 내에 중첩 */
      				@supports (display: flex) {
      					@media screen and (min-width: 900px) {
      						article {
      							display: flex;
      						}
      					}
      				}

      				/* desktop first 반응형 레이아웃 예시 (아래는 예시에 의한 수치이므로 실제 프로젝트에 사용할 때는 bootstrap의 media사이즈를 참고하는 것을 추천) */
      				/* 기본 1280+ 해상도의 기본 css 선언 후 */
      				@media(max-width:1279px;){ /* wrap이 1280px보다 클 경우 그보다 작은 브라우져 크기에도 대응 */ }
      				@media(max-width:993px;){ /* 테블릿 pc 해상도에 대응 */ }
      				@media(max-width:767px;){ /* 작은 테블릿 pc & 모바일 가로 모드에 대응 */ }
      				@media(max-width:620px;){ /* 모바일 세로 모드에 대응 */ }`}
      </CodeBlock>

      		<aside className="browser_support mt_m" data-tit="@media">
      			<ul>
      				<li className="ie">9+</li>
      				<li className="edge">12.0</li>
      				<li className="chrome">21.0</li>
      				<li className="firefox">3.5</li>
      				<li className="opera">9.0</li>
      				<li className="safari">4.0</li>
      			</ul>
      		</aside>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn t_blue">@page</h2>
      		<p className="mt_l">
      			문서를 인쇄할 때 일부 CSS 속성을 수정하는 데 쓰입니다. <code>@page</code>로 모든 CSS 속성을 바꿀 수는 없습니다.<br />
      			문서의 margin, orphan, widow(앞단에서 넘어온 짤막한 행) 및 page break만 바꿀 수 있습니다. 다른 CSS 속성을 바꾸려는 시도는 무시됩니다.
      		</p>
      		
      <CodeBlock title="@page" language="javascript" className="uk_gist_code_box mt_m">
      {`@page {
      					margin: 1cm;
      				}

      				@page :first {
      					margin: 2cm;
      				}`}
      </CodeBlock>

      		<aside className="browser_support mt_m" data-tit="@page">
      			<ul>
      				<li className="ie">8+</li>
      				<li className="edge">12.0</li>
      				<li className="chrome">2.0</li>
      				<li className="firefox">19.0</li>
      				<li className="opera">6.0</li>
      				<li className="safari false">지원안함</li>
      			</ul>
      		</aside>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn t_blue">@font-face</h2>
      		<p className="mt_l reference">
      			텍스트를 표시 할 사용자 정의 글꼴을 지정합니다. 글꼴은 원격 서버나 로컬 컴퓨터에서 사용자 컴퓨터에로드 할 수 있습니다.<br />
      			<code>@font-face</code>을 사용하는 자세한 방법은 CSS 중급과정
      			<a href="/publishing/css/03-cssMiddleclass/08-css_fontface" className="uk_link t_blue underline weight-600" title="새창열림" target="_blank" rel="noreferrer">@font-face</a>에서 설명합니다.
      		</p>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn t_blue">@keyframes</h2>
      		<p className="mt_l reference">
      			애니메이션 시퀀스를 따라 키 프레임 (또는 웨이 포인트)의 스타일을 정의하여 CSS 애니메이션 시퀀스의 중간 단계를 제어합니다.<br />
      			<code>@keyframes</code>을 사용하는 자세한 방법은 CSS 고급과정
      			<a href="/publishing/css/04-cssAdvanced/03-css_animation" className="uk_link t_blue underline weight-600" title="새창열림" target="_blank" rel="noreferrer">Animation</a>에서 설명합니다.
      		</p>
      	</section>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/03_css_07.png`} alt="CSS At-Rule" />
      		<figcaption className="reference">
      			CSS At-Rule
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<strong className="tit">@규칙(At-Rule) 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://compat.spec.whatwg.org/#css-at-rules" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS At-rules</a></li>
      			<li className="reference"><a href="https://drafts.csswg.org/css-conditional-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">CSS Conditional Rules Module Level 3</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN At-rule</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/CSS2/syndata.html#x57" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Level 2 (Revision 1) </a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/CSS1/#the-cascade" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Level 1 @import specification.</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/CSS2/cascade.html#at-import" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Level 2 (Revision 1) @import specification.</a></li>
      			<li className="reference"><a href="https://drafts.csswg.org/mediaqueries-3/#media0" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C Media Queries @import specification.</a></li>
      			<li className="reference"><a href="https://drafts.csswg.org/css-cascade-3/#at-ruledef-import" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Cascading and Inheritance Level 3 @import specification.</a></li>
      			<li className="reference"><a href="https://drafts.csswg.org/css-namespaces-3/#declaration" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Namespaces Module</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/CSS2/page.html#page-selectors" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Level 2 (Revision 1) @page specification</a></li>
      			<li className="reference"><a href="https://drafts.csswg.org/css-animations/#keyframes" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Animations</a></li>
      			<li className="reference"><a href="https://drafts.csswg.org/css-device-adapt/#the-atviewport-rule" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Device Adaptation</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssAtrulePage
