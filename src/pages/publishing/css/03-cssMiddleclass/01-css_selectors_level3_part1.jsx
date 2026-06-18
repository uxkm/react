import { usePageMeta } from '@/components/common/PageMeta'
import '../../../../assets/css/css_selectors.scss'
import PublishingPartTabs from '@/components/docs/PublishingPartTabs'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_selectors_level3_part1",
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
  title: "CSS 선택자 level 3 part-1",
  description: "CSS 선택자 Level 3는 HTML 요소를 선택하는 규칙들을 표준화한 W3C 기술 문서이며, CSS 3에서 새로 추가되거나 개선된 선택자들을 의미합니다. 이 페이지에서는 일반 형제 선택자(General Sibling Combinator)를 포함한 조합 선택자(Combinators), 속성 선택자(Attribute Selector)의 다양한 패턴을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, 선택자, selector, 조합 선택자, 속성 선택자",
}

function CssSelectorsLevel3Part1Page() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		<b>CSS 선택자 Level 3</b>는 HTML 요소를 선택하는 규칙들을 표준화한 <strong className="t_black">W3C</strong> 기술 문서이며, <strong className="t_black">CSS 3</strong>에서 새로 추가되거나 개선된 선택자들을 의미합니다.<br />
      		선택자는 스타일을 적용할 요소를 지정하는 방법으로, 요소의 태그명, 클래스, 속성, 구조적 위치 등을 기반으로 요소를 선택할 수 있습니다.
      	</p>
      	<p className="mt_ms">
      		<b>CSS 선택자 Level 3</b>에는 <b>조합 선택자</b>, <b>속성 선택자</b>, <b>의사(가상) 클래스</b>, <b>의사(가상) 요소</b> 등 다양한 선택 방법이 포함되어 있으며,
      		<i className="underline">오늘날 웹에서 사용하는 선택자의 대부분이 Level 3 기준입니다.</i>
      	</p>
      </blockquote>
      <PublishingPartTabs sectionType="css" />

      <blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_blue">CSS 선택자 level 3 part-1</b>에서는<br />
      		</p>
      		<ul className="dot_lst indent_small">
      			<li className="before_note"><b>조합 선택자(Combinators)</b></li>
      			<li className="before_note"><b>속성 선택자(Attribute Selector)</b>에 대한 내용을 다루고 있습니다.</li>
      		</ul>
      	</blockquote>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">조합 선택자(Combinators)</h2>

      		
      		<article className="indent mt_l">
      			<h3 className="ml_mn t_blue css3">일반 형제 셀렉터(General Sibling Combinator) <i className="fab fa-css3-alt"></i></h3>
      			<p className="mt_m">
      				<strong className="t_black">CSS Level 3 선택자</strong><br />
      				형제(동위) 셀렉터는 형제 관계(동위 관계)에서 뒤에 위치하는 요소를 선택할 때 사용합니다.<br />
      				셀렉터A의 형제 요소 중 셀렉터A 뒤에 위치하는 셀렉터B 요소를 모두 선택합니다.
      			</p>
      			<p className="mt_m t_black"><strong><code>Element ~ Element</code>(셀렉터A ~ 셀렉터B)</strong></p>
      			
      <CodeBlock title="General Sibling Combinator" language="javascript" className="uk_gist_code_box mt_m">
      {`p ~ ul {
      						/* style 작성 */
      					}`}
      </CodeBlock>


      			<div className="adjacent_sibling mt_m">
      				<div className="inner_wrap">
      					<ul>
      						<li>body</li>
      						<li>p</li>
      						<li>
      							ul
      							<p className="arr t_black">p ~ ul {'{'}<i className="t_red">color:</i><i className="t_green">#ff0000</i><i className="t_red">;</i>{'}'}</p>
      							<i className="fas fa-long-arrow-alt-left"></i>
      						</li>
      						<li>h1</li>
      						<li>
      							ul
      							<p className="arr t_black">p ~ ul {'{'}<i className="t_red">color:</i><i className="t_green">#ff0000</i><i className="t_red">;</i>{'}'}</p>
      							<i className="fas fa-long-arrow-alt-left"></i>
      						</li>
      					</ul>
      				</div>
      				<p className="txt mt_ms">[일반 형제 셀렉터]</p>
      			</div>

      			<div className="view_editor edit_code mt_m">
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.1.1.general-sibling-combinator.html" className="uk_editor min_height_450 mb_result_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="450px" />
      </Suspense></div>
      			<aside className="browser_support mt_m" data-tit="General Sibling Combinator">
      				<ul>
      					<li className="ie">7+</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">1.0</li>
      					<li className="firefox">1.0</li>
      					<li className="opera">9.2</li>
      					<li className="safari">3.1</li>
      				</ul>
      			</aside>
      		</article>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn css3">속성 선택자(Attribute Selector)</h2>
      		<p className="mt_l">
      			<strong className="t_black">CSS Level 3 선택자</strong><br />
      			CSS 속성 선택기는 주어진 속성의 존재 또는 값에 따라 요소를 일치시킵니다.<br />
      			대소문자를 정확하게 구분하여 사용합니다.
      		</p>
      		
      <CodeBlock title="Attribute Selector" language="javascript" className="uk_gist_code_box mt_ms">
      {`[attribute^='value'] {
      						/* style 작성 */
      					}
      					[attribute$='value'] {
      						/* style 작성 */
      					}
      					[attribute*='value'] {
      						/* style 작성 */
      					}`}
      </CodeBlock>


      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">[attribute^=&quot;value&quot;]</h3>
      			<p className="mt_m">
      				지정된 속성 값으로 시작하는 요소를 선택합니다.<br />
      				속성의 값이 <code>value</code>로 시작하는 요소를 선택합니다. 단어 기준이 아니라 문자열 기준입니다.
      			</p>
      			
      <CodeBlock title="[attribute^=&quot;value&quot;]" language="javascript" className="uk_gist_code_box mt_m">
      {`/* title 속성의 값이 abc로 시작하는 h1 요소를 선택. "abc xyz", "abc-xyz" 모두 선택됩니다. */
      						h1[title^="abc"] {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">[attribute$=&quot;value&quot;]</h3>
      			<p className="mt_m">
      				지정된 속성 값으로 끝나는 요소를 선택합니다.<br />
      				속성의 값이 <code>value</code>로 끝나는 요소를 선택합니다. 단어 기준이 아니라 문자열 기준입니다.
      			</p>
      			
      <CodeBlock title="[attribute$=&apos;value&quot;]" language="javascript" className="uk_gist_code_box mt_m">
      {`/* title 속성의 값이 abc로 끝나는 h1 요소를 선택. "xyz abc", "xyz-abc" 모두 선택됩니다. */
      						h1[title$="abc"] {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">[attribute*=&quot;value&quot;]</h3>
      			<p className="mt_m">
      				지정된 속성 값을 포함하는 요소를 선택합니다.<br />
      				속성의 값이 <code>value</code>를 포함한 요소를 선택합니다. 포함 여부는 문자열 기준으로 판단합니다.
      			</p>
      			
      <CodeBlock title="[attribute*=&apos;value&quot;]" language="javascript" className="uk_gist_code_box mt_m">
      {`/* title 속성의 값이 abc를 포함한 h1 요소를 선택. "abc xyz", "abcxyz", "abc-xyz" 모두 선택됩니다. */
      						h1[title*="abc"] {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      		</article>

      		<article className="view_editor edit_code mt_xl">
      			<h3 className="ve_tit">Attribute Selector 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.2.attribute-selector.html" className="uk_editor indent mt_m min_height_450 mb_result_height_300" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="300px" />
      </Suspense>
      		</article>

      		<aside className="browser_support mt_m" data-tit="Attribute Selector">
      			<ul>
      				<li className="ie">8+</li>
      				<li className="edge">12.0</li>
      				<li className="chrome">1.0</li>
      				<li className="firefox">1.0</li>
      				<li className="opera">9.2</li>
      				<li className="safari">3.1</li>
      			</ul>
      		</aside>
      	</section>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/03_css_01_1.png`} alt="CSS 선택자 level 3 part-1" />
      		<figcaption className="reference">
      			CSS 선택자 level 3 part-1
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<h2 className="tit">CSS 선택자 level 3 참조</h2>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.w3.org/TR/selectors-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C Selectors Level 3</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN CSS Selectors</a></li>
      			<li className="reference"><a href="http://www.topdesignagencies.com/nth-test/" target="_blank" rel="noreferrer" className="fas" title="새창열림">NTH TEST</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssSelectorsLevel3Part1Page
