import { usePageMeta } from '@/components/common/PageMeta'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_counter",
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
  title: "CSS 카운터",
  description: "CSS 카운터(counter)는 HTML 문서에 쓰지 않고도 CSS로 숫자를 생성하면서 자동으로 번호를 매기는 기능으로, counter-reset으로 초기화하고 counter-increment로 값을 증가시키며, ::before나 ::after의 content 속성에서 counter()나 counters() 함수를 사용하여 표시할 수 있습니다. 이 페이지에서는 counter-reset, counter-increment 속성과 counter(), counters() 함수를 사용한 자동 번호 부여 방법을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, counter, counters, 자동 번호 부여",
}

function CssCounterPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<code>counter</code>는 HTML 문서에 쓰지 않고도, CSS로 숫자를 생성하면서 자동으로 번호를 매기는 역할을 합니다.<br />
      			<code>counter</code>를 사용하려면 먼저 <code>counter-reset</code> 속성(초깃값 0)을 사용하여 초기화해야 하며, 초기화된 <code>counter</code>의 값은 <code>counter-increment</code>에 따라 증가하거나 감소합니다.<br />
      			<code>counter</code>의 이름으로 <code>&quot;none&quot;</code>, <code>&quot;inherit&quot;</code>, <code>&quot;initial&quot;</code>은 사용할 수 없습니다.
      		</p>
      	</blockquote>

      	<section className="mt_xxl indent">
      		<h2 className="ml_mn">CSS 카운터 기본 설명 및 예제</h2>
      		<p className="mt_l">
      			<code>counter</code>의 값은 <code>::before</code> 또는 <code>::after</code>의 <code>content</code> 속성에서 <code>counter()</code>나 <code>counters()</code> 함수를 사용하여 표시할 수 있습니다.<br />
      			일련 번호를 붙이려는 요소의 부모 요소에 <code>counter-reset</code>으로 시작하는 번호를 정하고, 일련 번호가 붙을 요소에 <code>counter-increment</code>로 증가량을 정합니다.
      		</p>
      		
      <CodeBlock title="CSS Counter" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 마크업 예제 -->
      			<ol class="list">
      				<li><li>
      				<li><li>
      				<li><li>
      			</ol>

      			<!-- style 예제 -->
      			<style>
      				.list { counter-reset: 카운터 이름 / 시작 숫자; }
      				.list li { list-style: none; }
      				.list li:before {
      					counter-increment: 카운터 이름 / 증감 숫자;
      					content: counter(카운터 이름);
      				}
      			</style>`}
      </CodeBlock>

      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">counter-reset 속성</h2>
      		<p className="mt_l">
      			카운터를 사용하려면, <code>counter-reset</code>으로 먼저 카운터 이름과 시작값을 설정해야 합니다.<br />
      			<code>counter-reset</code> 속성을 사용하여 카운터 값을 임의의 숫자로 재설정할 수 있습니다.
      		</p>
      		
      <CodeBlock title="counter-reset" language="javascript" className="uk_gist_code_box mt_m">
      {`요소 {
      					counter-reset: initial | 카운터 이름/숫자 | none;
      				}`}
      </CodeBlock>

      		<div className="ol_lst indent mt_m">
      			<ol>
      				<li><b className="t_black weight-500"><code>initial</code></b> : 초기화</li>
      				<li><b className="t_black weight-500">카운터 이름</b> : 카운터로 사용할 이름(예: <code>chapter</code>, <code>section</code>, <code>장</code>, <code>제</code>)</li>
      				<li><b className="t_black weight-500">숫자</b> : 숫자를 지정하지 않으면 기본값이 0입니다. 숫자는 음수값도 가능하며, 여러 개의 카운터를 설정하고자 할 때 공백으로 분리합니다.</li>
      				<li><b className="t_black weight-500"><code>none</code></b> : 설정값이 없습니다. (이미 설정된 것을 취소하고자 할 때 사용합니다)</li>
      			</ol>
      		</div>
      		
      <CodeBlock title="CSS Counter [counter-reset]" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- html 예제 -->
      				<ol class="list">
      					<li><li>
      					<li><li>
      					<li><li>
      				</ol>

      				<!-- style 예제 -->
      				<style>
      					.list {
      						counter-reset: title; /* 카운터 이름을 'title'로 설정, 기본값 0으로 지정 */
      						counter-reset: none; /* 설정값을 취소 */
      						&nbsp;
      						/* 여러 카운터를 동시에 설정도 가능(공백으로 분리) */
      						counter-reset: chapter section 1 page; /* chapter와 page는 시작값을 0으로 설정하며 section은 1로 설정 */
      					}
      				</style>`}
      </CodeBlock>

      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">counter-increment 속성</h2>
      		<p className="mt_l">
      			<code>counter-reset</code>으로 설정한 값을 증가 또는 감소시키는 역할을 합니다.
      		</p>
      		
      <CodeBlock title="counter-increment" language="javascript" className="uk_gist_code_box mt_m">
      {`요소:before {
      					counter-increment: initial | 카운터 이름/숫자 | none;
      				}`}
      </CodeBlock>

      		<div className="ol_lst indent mt_m">
      			<ol>
      				<li><b className="t_black weight-500"><code>initial</code></b> : 초기화</li>
      				<li><b className="t_black weight-500">숫자</b> : 숫자를 지정하지 않으면 기본값으로 1씩 증가합니다. 음수값이 가능합니다.</li>
      				<li><b className="t_black weight-500"><code>none</code></b> : 설정값이 없습니다. (이미 설정된 것을 취소하고자 할 때 사용합니다)</li>
      			</ol>
      		</div>
      		
      <CodeBlock title="CSS Counter [counter-increment]" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- html 예제 -->
      				<ol class="list">
      					<li><li>
      					<li><li>
      					<li><li>
      				</ol>

      				<!-- style 예제 -->
      				<style>
      					.list li:before {
      						counter-increment:chapter; /* 숫자를 설정하지 않으면 기본값으로 1씩 증가함. */
      						counter-increment:chapter -1; /* 1씩 감소. */
      						counter-increment:chapter 2 section -1; /* chapter는 2씩 증가, section은 -1씩 감소. */
      						counter-increment:chapter section 2 page; /* chapter와 page는 1씩 증가 section은 2씩 증가. */
      					}
      				</style>`}
      </CodeBlock>

      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">counter() 문법</h2>
      		<p className="mt_l">
      			<code>counter()</code> 함수는 <code>counter(name)</code>와 <code>counter(name, style)</code> 두 가지 형태로 사용할 수 있습니다.<br />
      			생성된 텍스트는 가상 요소가 속한 범위에 있는 이름(name)의 가장 안쪽 <code>counter</code>의 값입니다. 텍스트는 지정된 서식(기본값은 십진수 <code>decimal</code>)으로 표시됩니다.
      		</p>
      		<div className="ol_lst indent mt_m">
      			<ol>
      				<li><b className="t_black weight-500"><code>name</code></b> : 카운터의 이름, 이름만 쓸 경우 기본값 <code>decimal</code>(십진수)이 적용됩니다.</li>
      				<li>
      					<b className="t_black weight-500"><code>style</code></b> : 선택적, <code>style</code>은 <code>list-style-type</code>과 동일한 값입니다.
      					<div className="line_code mt_sm">
      						<p>
      							<code className="clear">
      								<i>disc,</i>
      								<i>circle,</i>
      								<i>square,</i>
      								<i>decimal,</i>
      								<i>decimal-leading-zero,</i>
      								<i>lower-roman,</i>
      								<i>upper-roman,</i>
      								<i>lower-greek,</i>
      								<i>lower-latin,</i>
      								<i>upper-latin,</i>
      								<i>armenian,</i>
      								<i>georgian,</i>
      								<i>lower-alpha,</i>
      								<i>upper-alpha,</i>
      								<i>or none</i>
      							</code>
      						</p>
      					</div>
      				</li>
      			</ol>
      		</div>
      		
      <CodeBlock title="CSS Counter [counter]" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- html 예제 -->
      				<ol class="list">
      					<li><li>
      					<li><li>
      					<li><li>
      				</ol>

      				<!-- style 예제 -->
      				<style>
      					.list {counter-reset: section;}
      					.list li {list-style:none;}
      					.list li:before {
      						counter-increment: section;
      						content: counter(section) ". ";
      					}
      				</style>`}
      </CodeBlock>

      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">counters() 문법</h2>
      		<p className="mt_l">
      			<code>counters()</code> 함수는 <code>counters(name, string)</code>나 <code>counters(name, string, style)</code> 두 가지 형태로 사용할 수 있습니다.<br />
      			생성된 텍스트는 가상 요소가 속한 모든 범위에서 지정된 이름을 가진 <code>counters</code>의 값으로, 바깥쪽부터 안쪽까지 값이 주어지며 지정된 문자열로 구분됩니다.<br />
      			<code>counters</code>는 지정된 스타일(기본값은 십진수 <code>decimal</code>)로 렌더링됩니다.
      		</p>
      		<div className="ol_lst indent mt_m">
      			<ol>
      				<li><b className="t_black weight-500"><code>name</code>, <code>string</code></b> : 값은 필수입니다. (기본값 <code>decimal</code>)</li>
      				<li><b className="t_black weight-500"><code>string</code></b> : 마침표(<code>.</code>)처럼 앞뒤를 분리하기 위해 사용합니다.</li>
      				<li><b className="t_black weight-500"><code>style</code></b> : 선택적으로 사용합니다.</li>
      			</ol>
      		</div>
      		
      <CodeBlock title="CSS Counter [counters]" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- html 예제 (counters 적용 시 html도 아래 예제처럼 중첩된 구조로 만들어야 합니다.) -->
      				<div class="list">
      					<ol>
      						<li><li>
      						<li><li>
      						<li>
      							<ol>
      								<li><li>
      								<li><li>
      								<li><li>
      							</ol>
      						<li>
      					</ol>
      				</div>

      				<!-- style 예제 -->
      				<style>
      					.list ol { counter-reset: chapter;}
      					.list li {list-style:none;}
      					.list li:before {
      						counter-increment: chapter;
      						content: counters(chapter, ".") ". ";
      					}
      				</style>`}
      </CodeBlock>

      	</section>

      	<section className="view_editor edit_code mt_xxl">
      		<h2 className="ve_tit">counters() 예제</h2>
      		<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.3.counter/3.3.counter.html" className="uk_editor indent min_height_450 mt_ml" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" />
      </Suspense>
      		<figure className="img_figure indent mt_m">
      			<figcaption className="mt_0 font-16 t_blue">위 예제 <code>counters</code> 문법의 중첩 관계도</figcaption>
      			<img src={`${IMG.CSS}/cssMiddleclass/uxkm_counters.svg`} alt="counters 문법의 중첩 관계도" className="mt_m" />
      		</figure>
      	</section>

      	<aside className="browser_support mt_xxl" data-tit="counter">
      		<ul>
      			<li className="ie">8+</li>
      			<li className="edge">12.0</li>
      			<li className="chrome">4.0</li>
      			<li className="firefox">2.0</li>
      			<li className="opera">10.0</li>
      			<li className="safari">3.1</li>
      		</ul>
      	</aside>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/03_css_03.png`} alt="CSS 카운터" />
      		<figcaption className="reference">
      			CSS 카운터
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<strong className="tit">CSS 카운터 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.w3.org/TR/css-content-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">CSS Generated Content Module Level 3</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters" target="_blank" rel="noreferrer" className="fas" title="새창열림">CSS 카운터 사용하기</a></li>
      			<li className="reference"><a href="https://www.smashingmagazine.com/2013/04/css-generated-content-counters/" target="_blank" rel="noreferrer" className="fas" title="새창열림">smashingmagazine CSS Generated Content And Counters</a></li>
      			<li className="reference"><a href="https://css-tricks.com/almanac/properties/c/counter-increment/" target="_blank" rel="noreferrer" className="fas" title="새창열림">css-tricks.com counter-increment</a></li>
      			<li className="reference"><a href="https://css-tricks.com/almanac/properties/c/counter-reset/" target="_blank" rel="noreferrer" className="fas" title="새창열림">css-tricks.com counter-reset</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssCounterPage
