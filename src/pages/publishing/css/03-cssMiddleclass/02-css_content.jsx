import { usePageMeta } from '@/components/common/PageMeta'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_content",
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
  title: "가상 요소",
  description: "의사(가상) 요소(pseudo-elements)는 HTML 요소에는 없는 가상의 요소를 CSS로 제어하는 기능으로, CSS1과 CSS2에서는 의사 클래스와 의사 요소를 하나의 콜론(:)으로 표기했지만, CSS3에서는 의사 요소에 두 개의 콜론(::)을 사용하여 구분합니다. 이 페이지에서는 ::first-line, ::first-letter, ::before, ::after, ::selection, ::placeholder 등 대표적인 의사 요소들과 content 속성을 사용한 콘텐츠 생성 방법을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, 콜론(:), 의사 클래스, 의사 요소",
}

function CssContentPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<strong>의사(가상) 요소(pseudo-elements)</strong>는 HTML 요소에는 없는 가상의 요소를 CSS로 제어하는 기능입니다.
      		</p>
      		<p className="mt_ms">
      			<strong className="t_black">CSS1</strong>과 <strong className="t_black">CSS2</strong>에서는 의사 클래스와 의사 요소를 나타낼 때 하나의 콜론(<code>:</code>)으로 함께 표기하였습니다.<br />
      			하지만 <strong className="t_black">CSS3</strong>에서는 의사 클래스와 의사 요소의 표현을 구분하기로 하여, 의사 클래스는 하나의 콜론(<code>:</code>)을, 의사 요소에는 두 개의 콜론(<code>::</code>)을 사용하고 있습니다.<br />
      			콜론(<code>::</code>) 두 개를 인식하지 못하는 하위 브라우저를 위해 콜론(<code>:</code>) 하나를 사용해도 현재는 가능합니다.<br />
      			선택자에 오직 가상 요소 하나만 쓸 수 있으며, 대표적인 의사 요소로는 <code>::first-line</code>, <code>::before</code>, <code>::after</code>, <code>::selection</code>, <code>::placeholder</code> 등이 있습니다.
      		</p>
      	</blockquote>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">브라우저별 콜론(:) 하나, 콜론(::) 두 개 사용여부</h2>

      		<div className="ol_lst mt_l">
      			<ol>
      				<li>Internet Explorer 8.0 = <code>:pseudo-element</code></li>
      				<li>Internet Explorer 9.0 = <code>:pseudo-element</code>, <code>::pseudo-element</code></li>
      				<li>Firefox (Gecko) 1.0 (1.0) = <code>:pseudo-element</code></li>
      				<li>Firefox (Gecko) 1.0 (1.5) = <code>:pseudo-element</code>, <code>::pseudo-element</code></li>
      				<li>Opera 4.0 = <code>:pseudo-element</code></li>
      				<li>Opera 7.0 = <code>:pseudo-element</code>, <code>::pseudo-element</code></li>
      				<li>Safari (WebKit) 1.0 (85) = <code>:pseudo-element</code>, <code>::pseudo-element</code></li>
      			</ol>
      		</div>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">::first-line (:first-line)</h2>
      		<p className="mt_l">
      			<strong className="t_black">CSS Level 1</strong><br />
      			이 의사 요소는 텍스트의 첫 라인만을 선택합니다.
      			단, 블록(block) 타입의 요소에만 사용할 수 있습니다.<br />
      			이 의사 요소를 통해 사용할 수 있는 속성은 다음과 같습니다.<br />
      			<code>::first-line</code> 선택자에는 <b>box-model</b>
      			속성(<code>margin</code>, <code>border</code>, <code>padding</code>, <code>width, height</code>)이 적용되지 않습니다.
      		</p>
      		
      <CodeBlock title={"::first-line (:first-line)"} language="javascript" className="uk_gist_code_box mt_m">
      {`p::first-line {
      					/*
      					[사용할 수 있는 속성]
      					clear,
      					line-height, vertical-align,
      					font, font-family, font-size, font-style, font-variant, font-weight, color,
      					word-spacing, text-decoration, text-transform,
      					background
      					*/
      				}`}
      </CodeBlock>

      		<div className="ol_lst indent mt_m">
      			<ol>
      				<li className="font14">
      					<strong className="mb_sm">모든 글꼴 관련 속성</strong>
      					<p className="mt_s">
      						<code className="clear p_5 ph_10">
      							<i>font,</i>
      							<i>font-kerning,</i>
      							<i>font-style,</i>
      							<i>font-variant,</i>
      							<i>font-variant-numeric,</i>
      							<i>font-variant-position,</i>
      							<i>font-variant-east-asian,</i>
      							<i>font-variant-caps,</i>
      							<i>font-variant-alternates,</i>
      							<i>font-variant-ligatures,</i>
      							<i>font-synthesis,</i>
      							<i>font-feature-settings,</i>
      							<i>font-language-override,</i>
      							<i>font-weight,</i>
      							<i>font-size,</i>
      							<i>font-size-adjust,</i>
      							<i>font-stretch,</i>
      							<i>font-family</i>
      						</code>
      					</p>
      				</li>
      				<li className="font14 mt_ms">
      					<strong className="mb_sm">모든 배경 관련 속성</strong>
      					<p className="mt_s">
      						<code className="clear p_5 ph_10">
      							<i>background-color,</i>
      							<i>background-clip,</i>
      							<i>background-image,</i>
      							<i>background-origin,</i>
      							<i>background-position,</i>
      							<i>background-repeat,</i>
      							<i>background-size,</i>
      							<i>background-attachment,</i>
      							<i>background-blend-mode</i>
      						</code>
      					</p>
      				</li>
      				<li className="font14 mt_ms">
      					<strong>color 속성</strong>
      				</li>
      				<li className="font14 mt_ms">
      					<strong className="mb_sm">text 관련 속성</strong>
      					<p className="mt_s">
      						<code className="clear p_5 ph_10">
      							<i>word-spacing,</i>
      							<i>letter-spacing,</i>
      							<i>text-decoration,</i>
      							<i>text-transform,</i>
      							<i>line-height,</i>
      							<i>text-shadow,</i>
      							<i>text-decoration-color,</i>
      							<i>text-decoration-line,</i>
      							<i>text-decoration-style,</i>
      							<i>vertical-align</i>
      						</code>
      					</p>
      				</li>
      			</ol>
      		</div>

      		<div className="view_editor edit_code mt_l">
      			<h3 className="ve_tit">::first-line (:first-line) 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.2.pseudo-elements/3.2.first-line.html" className="uk_editor indent mt_m min_height_450 mb_result_height_300" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="300px" />
      </Suspense></div>

      		<aside className="browser_support mt_m" data-tit="::first-line">
      			<ul>
      				<li className="ie">9+</li>
      				<li className="edge">12.0</li>
      				<li className="chrome">1.0</li>
      				<li className="firefox">1.0</li>
      				<li className="opera">7.0</li>
      				<li className="safari">1.0</li>
      			</ul>
      		</aside>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">::before (:before) / ::after (:after)</h2>
      		<p className="mt_l">
      			<strong className="t_black">CSS Level 2</strong><br />
      			<code>::before</code> 의사 요소는 특정 요소의 내용(content) 부분 바로 앞에, <code>::after</code> 의사 요소는 바로 뒤에 다른 요소를 삽입할 때 사용합니다.<br />
      			<code>::before</code>와 <code>::after</code> 요소는 <code>content</code> 속성을 사용해야만 콘텐츠를 삽입할 수 있으며, <code>content</code> 속성이 설정되어 있지 않으면 표시되지 않습니다.<br />
      			특수 문자 사용 시 HTML 마크업 엔티티를 사용할 수 없으므로, 백 슬래시(<code>\</code>)와 16진 유니코드 값으로 구성되는 유니코드 이스케이프 시퀀스를 사용해야 합니다.<br />
      			<code>content</code> 속성은 기본적으로 인라인 요소로 표현되지만 <code>display: block</code>을 선언하여 블록 요소로 사용할 수 있습니다.
      		</p>
      		
      <CodeBlock title={"::before / ::after"} language="javascript" className="uk_gist_code_box mt_ms">
      {`p::before {
      					content: "";
      				}
      				p::after {
      					display: block;
      					width: 100px;
      					height: 100px;
      					background: red;
      					content: "";
      				}`}
      </CodeBlock>


      		<p className="mt_m">
      			<strong className="t_black">content 속성 사용 방법은 다음과 같이 사용할 수 있습니다.</strong>
      		</p>
      		
      <CodeBlock title={"content:;"} language="javascript" className="uk_gist_code_box indent mt_m">
      {`<style>
      					p::after {content: normal | none | counter | attr | string | open-quote | close-quote | no-open-quote | no-close-quote | url | initial | inherit;}
      				</style>`}
      </CodeBlock>

      		<div className="ol_lst indent mt_m">
      			<ol>
      				<li className="line_code font14">
      					<strong className="mb_sm"><code>normal</code></strong>
      					<p>기본값으로 아무것도 표시하지 않습니다. (<code>none</code>과 같습니다)</p>
      					<p><code>::before{'{'}content:normal{'}'}</code> / <code>::after{'{'}content:normal{'}'}</code></p>
      				</li>
      				<li className="line_code font14 mt_ms">
      					<strong className="mb_sm"><code>none</code></strong>
      					<p><code>none</code> 내용에 아무것도 표시하지 않습니다.</p>
      					<p><code>::before{'{'}content:&quot;&quot;{'}'}</code> / <code>::after{'{'}content:&quot;&quot;{'}'}</code></p>
      				</li>
      				<li className="line_code font14 mt_ms">
      					<strong className="mb_sm">문자(String)</strong>
      					<p>텍스트 내용입니다. 일반 텍스트와 유니코드 문자를 삽입할 수 있습니다.</p>
      					<p>쌍따옴표(<code>&quot;&quot;</code>) 또는 홀따옴표(<code>''</code>) 안에 삽입해야 합니다.</p>
      				</li>
      				<li className="line_code font14 mt_ms">
      					<strong className="mb_sm"><code>url(주소)</code></strong>
      					<p>외부 자원(이미지, 음악, 비디오 등)을 생성합니다.</p>
      				</li>
      				<li className="line_code font14 mt_ms">
      					<strong className="mb_sm"><code>counter</code></strong>
      					<p><code>counter</code>는 HTML 문서에 쓰지 않고도, CSS로 숫자를 생성하면서 자동으로 번호를 매기는 역할을 합니다.</p>
      					<p>
      						<code>counter-increment</code>, <code>counter-reset</code> 속성과 함께 사용하며, 사용 방법은
      						<span className="reference"><a href="/publishing/css/03-cssMiddleclass/03-css_counter" target="_blank" rel="noreferrer" title="새창열림">CSS 카운터</a></span>
      						에서 자세히 설명합니다.
      					</p>
      					<p>
      						CSS <code>counter</code>를 사용하려면 먼저 <code>counter-reset</code> 속성(초깃값 0)을 사용하여 초기화해야 하며, 초기화된 <code>counter</code>의 값은 <code>counter-increment</code>에 따라 증가하거나 감소합니다.<br />
      						<code>counter</code>의 이름으로 <code>&quot;none&quot;</code>, <code>&quot;inherit&quot;</code>, <code>&quot;initial&quot;</code>은 사용할 수 없습니다.
      					</p>
      					<p><code>counter</code>와 <code>counters</code>가 있으며, <code>counters</code>는 숫자를 좀 더 세부적으로 지정합니다. (예. 1.1)</p>

      					<ol className="indent mt_s">
      						<li className="line_code font14 mt_sm">
      							<strong className="ml_mn mb_sm">5.1. <code>counter(name, style)</code></strong>
      							<p><code>name</code>만 쓸 경우 기본값 <code>decimal</code>(십진수)이 적용됩니다.</p>
      							<p><code>style</code>은 선택적이며, <code>list-style-type</code>과 동일한 값입니다.</p>
      							<p>사용 예) <code>h1::before{'{'}content:counter(name, upper-roman);{'}'}</code></p>
      						</li>
      						<li className="line_code font14 mt_sm">
      							<strong className="ml_mn mb_sm">5.2. <code>counters(name, string, style)</code></strong>
      							<p><code>name</code>, <code>string</code> 값은 필수이며, <code>string</code>은 마침표(<code>.</code>)처럼 앞뒤를 분리하기 위한 용도로 사용합니다.</p>
      							<p><code>style</code>은 선택적입니다.</p>
      							<p>사용 예) <code>h1::before {'{'}content: counters(name, &quot;.&quot;, upper-roman);{'}'}</code></p>
      						</li>
      					</ol>
      				</li>

      				<li className="line_code font14 mt_ms">
      					<strong className="mb_sm"><code>attr(속성값)</code></strong>
      					<p>선택자의 속성을 생성합니다.</p>
      				</li>
      				<li className="line_code font14 mt_ms">
      					<strong className="mb_sm"><code>open-quote</code></strong>
      					<p>여는 인용부호를 생성합니다.</p>
      				</li>
      				<li className="line_code font14 mt_ms">
      					<strong className="mb_sm"><code>close-quote</code></strong>
      					<p>닫는 인용부호를 생성합니다.</p>
      				</li>
      				<li className="line_code font14 mt_ms">
      					<strong className="mb_sm"><code>no-open-quote</code></strong>
      					<p>여는 인용부호를 없앱니다. (<code>open-quote</code>를 취소하기 위해 사용됩니다.)</p>
      				</li>
      				<li className="line_code font14 mt_ms">
      					<strong className="mb_sm"><code>no-close-quote</code></strong>
      					<p>닫는 인용부호를 없앱니다.</p>
      				</li>
      				<li className="line_code font14 mt_ms">
      					<strong className="mb_sm"><code>initial</code></strong>
      					<p>기본값으로 설정합니다.</p>
      				</li>
      				<li className="line_code font14 mt_ms">
      					<strong className="mb_sm"><code>inherit</code></strong>
      					<p>부모 요소 속성값을 상속합니다.</p>
      				</li>
      			</ol>
      		</div>

      		<div className="view_editor edit_code mt_l">
      			<h3 className="ve_tit">::before (:before) / ::after (:after) 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.2.pseudo-elements/3.2.before-after.html" className="uk_editor indent mt_m min_height_450 mb_result_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="450px" />
      </Suspense></div>

      		<aside className="browser_support mt_m" data-tit="::before, ::after">
      			<ul>
      				<li className="ie">8+</li>
      				<li className="edge">12.0</li>
      				<li className="chrome">1.0</li>
      				<li className="firefox">1.5</li>
      				<li className="opera">7.0</li>
      				<li className="safari">4.0</li>
      			</ul>
      		</aside>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn css3">::selection</h2>
      		<blockquote className="uk_note mt_l" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>::selection</code>은 <strong className="t_black">CSS 선택기 레벨 3</strong>의 초안에 있었지만 후보 권장 사항 단계에서 (특히 중첩된 요소로) 지정되지 않았으며,
      				상호 운용성이 달성되지 않았기 때문에 (<span className="reference"><a href="https://lists.w3.org/Archives/Public/www-style/2008Oct/0268.html" target="_blank" rel="noreferrer" title="새창열림">W3C 스타일 메일 링리스트의 토론을 기반으로</a></span>) 후보 추천 단계에서 제거되었습니다.<br />
      				<span className="reference"><a href="https://drafts.csswg.org/css-pseudo-4/" target="_blank" rel="noreferrer" title="새창열림">Pseudo-Elements Level 4</a></span>로 반환되었습니다.
      			</p>
      		</blockquote>
      		<p className="mt_l">
      			<strong className="t_black">CSS Level 3</strong><br />
      			이 의사 요소는 해당 요소에서 사용자가 선택한 부분만을 선택할 때 사용합니다.<br />
      			마우스 드래그 등으로 선택한 텍스트를 선택합니다.<br />
      			<code>::selection</code> 요소는 항상 이중 콜론(<code>::</code>)으로 시작합니다.<br />
      			파이어폭스 브라우저에서는 <code>::-moz-selection</code>과 같이 접두사를 붙여 사용합니다.
      		</p>
      		<p className="mt_m">
      			<strong className="t_black"><code className="weight-600">::selection</code>은 다음과 같은 특정 CSS 속성만 사용할 수 있습니다.</strong>
      		</p>
      		
      <CodeBlock title={"::selection"} language="javascript" className="uk_gist_code_box indent mt_m">
      {`::selection,
      				::-moz-selection {
      					/*
      					color
      					outline
      					text-decoration
      					text-emphasis-color
      					text-shadow
      					background-color
      					cursor
      					*/
      				}`}
      </CodeBlock>

      		<div className="view_editor edit_code mt_l">
      			<h3 className="ve_tit">::before (:before) / ::after (:after) 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.2.pseudo-elements/3.2.selection.html" className="uk_editor indent mt_m min_height_450 mb_result_height_400" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="400px" />
      </Suspense></div>

      		<aside className="browser_support mt_m" data-tit="::selection">
      			<ul>
      				<li className="ie">9+</li>
      				<li className="edge">12.0</li>
      				<li className="chrome">1.0</li>
      				<li className="firefox">62.0</li>
      				<li className="opera">9.5</li>
      				<li className="safari">1.1</li>
      			</ul>
      		</aside>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn css3">::placeholder</h2>
      		<p className="mt_l">
      			<strong className="t_black">CSS Level 3</strong><br />
      			<code>::placeholder</code> 선택자는 항상 이중 콜론(<code>::</code>)으로 시작합니다.<br />
      			HTML5에서 새로 나온 속성(attribute)으로 <code>input</code> 요소나 <code>textarea</code> 요소에 안내문(알맞은 힌트를 제공)을 넣을 수 있습니다.<br />
      			CSS에서 <code>placeholder</code> 속성 사용은 <code>::placeholder</code> 선택자로 선택하여 꾸밀 수 있습니다.<br />
      			다만, 브라우저별로 해당 요소에 포커스가 될 때 작동하는 방식에서 차이점이 발생합니다.
      		</p>
      		
      <CodeBlock title={"::placeholder"} language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" placeholder="검색어를 입력하세요." />
      				<textarea placeholder="검색어를 입력하세요."></textarea>

      				<style>
      					::placeholder { /* style 작성 */ }
      				</style>`}
      </CodeBlock>


      		<p className="mt_m">
      			<strong className="t_black">브라우저 호환성을 위해 사용하는 방법은 다음과 같습니다.</strong>
      		</p>
      		<div className="ol_lst indent mt_m">
      			<ol>
      				<li>
      					<p>지원하지 않는 브라우저들이 있어서 접두사를 붙여서 같이 사용합니다.</p>
      					
      <CodeBlock title={"::placeholder [vendor prefix]"} language="javascript" className="uk_gist_code_box mt_s">
      {`::placeholder { … }
      							::-ms-input-placeholder { … }
      							:-ms-input-placeholder { … }
      							::-webkit-input-placeholder { … }
      							::-moz-input-placeholder { … }`}
      </CodeBlock>

      				</li>
      				<li className="mt_m">
      					<p>
      						파이어폭스의 경우 같은 색을 입력하면 투명도가 증가하여 색이 흐리게 나옵니다.<br />
      						파이어폭스는 CSS 투명도를 조절하는 속성인 <code>opacity</code> 값을 조절하면 됩니다.
      					</p>
      					
      <CodeBlock title={"::placeholder [css]"} language="javascript" className="uk_gist_code_box mt_s">
      {`::placeholder {
      								color:red;
      								opacity:1;
      							}`}
      </CodeBlock>

      				</li>
      				<li className="mt_m">
      					<p>
      						마이크로소프트 Edge는 <code>placeholder</code> 색 변경이 적용되지 않습니다.<br />
      						선택자 지정 시 <code>-ms-input</code>이라는 명령어를 추가해주면 됩니다.
      					</p>
      					
      <CodeBlock title={"::-ms-input-placeholder"} language="javascript" className="uk_gist_code_box mt_s">
      {`::-ms-input-placeholder {
      								color:red;
      							}`}
      </CodeBlock>

      				</li>
      				<li className="mt_m">
      					<p>
      						익스플로러는 엣지에 삽입한 선택자로는 <code>placeholder</code> 색 변경이 되지 않습니다.<br />
      						명령어는 똑같지만 앞에 콜론(<code>:</code>) 개수를 1개로 변경해줍니다.
      					</p>
      					
      <CodeBlock title={":-ms-input-placeholder"} language="javascript" className="uk_gist_code_box mt_s">
      {`:-ms-input-placeholder {
      								color:red;
      							}`}
      </CodeBlock>

      				</li>
      			</ol>
      		</div>

      		<div className="view_editor edit_code mt_l">
      			<h3 className="ve_tit">::placeholder 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.2.pseudo-elements/3.2.placeholder.html" className="uk_editor indent mt_m min_height_450 mb_result_height_350" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="350px" />
      </Suspense></div>

      		<aside className="browser_support mt_m" data-tit="::placeholder">
      			<ul>
      				<li className="ie">10+</li>
      				<li className="edge">12.0</li>
      				<li className="chrome">57.0</li>
      				<li className="firefox">51.0</li>
      				<li className="opera">44.0</li>
      				<li className="safari">10.1</li>
      			</ul>
      		</aside>
      	</section>

      	<section className="view_editor edit_code mt_xxl">
      		<h2 className="ve_tit">가상 요소(Pseudo-elements) 예제</h2>
      		<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.2.pseudo-elements/3.2.pseudo-elements.html" className="uk_editor indent mt_ml min_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" />
      </Suspense>
      	</section>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/03_css_02.png`} alt="CSS 가상 요소" />
      		<figcaption className="reference">
      			CSS 가상 요소
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<strong className="tit">가상 요소(Pseudo-elements) 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.w3.org/TR/CSS2/selector.html#first-line-pseudo" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS 2.1 선택기</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/selectors-3/#first-line" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS 선택기 레벨 3</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN CSS Content</a></li>
      			<li className="reference"><a href="https://dev.w3.org/html5/html-author/charref" target="_blank" rel="noreferrer" className="fas" title="새창열림">HTML5 Entity Code</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssContentPage
