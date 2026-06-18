import { usePageMeta } from '@/components/common/PageMeta'
import '../../../../assets/css/css_selectors.scss'
import PublishingPartTabs from '@/components/docs/PublishingPartTabs'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_selectors_level3_part2",
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
  title: "CSS 선택자 level 3 part-2",
  description: "CSS 선택자 Level 3는 HTML 요소를 선택하는 규칙들을 표준화한 W3C 기술 문서이며, CSS 3에서 새로 추가되거나 개선된 선택자들을 의미합니다. 이 페이지에서는 구조적 의사(가상) 클래스(Structural pseudo-class), 사용자 동작 의사(가상) 클래스(User action pseudo-class), 기타 의사(가상) 클래스(Pseudo-classes)를 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, 의사(가상) 클래스, Pseudo-classes",
}

function CssSelectorsLevel3Part2Page() {
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
      			<b className="t_blue">CSS 선택자 level 3 part-2</b>에서는<br />
      		</p>
      		<ul className="dot_lst indent_small">
      			<li className="before_note"><b>의사(가상) 클래스(Pseudo-classes)</b>에 대한 내용을 다루고 있습니다.</li>
      		</ul>
      	</blockquote>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">의사(가상) 클래스(Pseudo-classes)</h2>

      		
      		<article className="indent mt_l">
      			<h3 className="ml_mn t_blue css3" data-conlist-h4="true">구조적 의사(가상)클래스(Structural pseudo-class) <i className="fab fa-css3-alt"></i></h3>
      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<strong className="t_black">CSS Level 3 선택자</strong><br />
      					구조 의사 클래스를 사용하면 HTML 요소의 계층 구조에서 특정 위치에 있는 요소를 선택할 수 있습니다.
      				</p>
      			</blockquote>
      			
      <CodeBlock title="Structural pseudo-class" language="javascript" className="uk_gist_code_box mt_m">
      {`:root { … }
      					li:empty { … }
      					li:last-child { … }
      					li:only-child { … }
      					li:first-of-type { … }
      					li:last-of-type { … }
      					li:only-of-type { … }
      					li:nth-child(n) { … }
      					li:nth-last-child(n) { … }
      					li:nth-of-type(n) { … }
      					li:nth-last-of-type(n) { … }`}
      </CodeBlock>


      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">:root</h4>
      				<p className="mt_ms">
      					문서의 root 요소(최상위 요소 <code>html</code>)를 선택합니다.
      				</p>
      				
      <CodeBlock title={"Structural pseudo-class [:root]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`:root {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_ms">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.3.1.structural-pseudo-class-root.html" className="uk_editor min_height_450 mb_result_height_300" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="300px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">:empty</h4>
      				<p className="mt_ms">
      					아무런 자식(child) 요소도 가지지 않는 요소를 모두 선택합니다.<br />
      					엘리먼트 내에 스페이스 빈 공간이라도 있다면 그 요소는 비어있는 요소가 아니기 때문에 선택할 수 없습니다.
      				</p>
      				
      <CodeBlock title={"Structural pseudo-class [:empty]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`li:empty {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_ms">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.3.1.structural-pseudo-class-empty.html" className="uk_editor min_height_450 mb_result_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="450px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">:last-child</h4>
      				<p className="mt_ms">
      					모든 자식(child) 요소 중에서 요소 유형(타입)에 상관없이 마지막에 위치하는 자식(child) 요소를 모두 선택합니다.
      				</p>
      				
      <CodeBlock title={"Structural pseudo-class [:last-child]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`li:last-child {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_ms">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.3.1.structural-pseudo-class-last-child.html" className="uk_editor min_height_450 mb_result_height_300" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="300px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">:first-of-type</h4>
      				<p className="mt_ms">
      					모든 자식(child) 요소 중에서 첫 번째로 등장하는 특정 요소를 모두 선택합니다.<br />
      					컨테이너 안에서 특정 유형(타입)의 요소에서 첫 번째를 찾습니다.<br />
      					예를 들어서 <code>p:first-of-type</code>은 부모의 첫 번째 자식이든 아니든 상관하지 않고 첫 번째 <code>&lt;p&gt;</code> 요소를 선택하게 됩니다.
      				</p>
      				
      <CodeBlock title={"Structural pseudo-class [:first-of-type]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`li:first-of-type {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_ms">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.3.1.structural-pseudo-class-first-of-type.html" className="uk_editor min_height_450 mb_result_height_300" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="300px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">:last-of-type</h4>
      				<p className="mt_ms">
      					모든 자식(child) 요소 중에서 마지막으로 등장하는 특정 요소를 모두 선택합니다.<br />
      					<code>:first-of-type</code>과 정확하게 동일하지만 컨테이너의 특정 유형(타입)의 요소에서 마지막을 찾습니다.
      				</p>
      				
      <CodeBlock title={"Structural pseudo-class [:last-of-type]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`li:last-of-type {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_ms">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.3.1.structural-pseudo-class-last-of-type.html" className="uk_editor min_height_450 mb_result_height_300" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="300px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">:only-child</h4>
      				<p className="mt_ms">
      					자식(child) 요소를 단 하나만 가지는 모든 요소의 자식(child) 요소를 선택합니다.<br />
      					만약 컨테이너에서 자식이 하나라면 그 요소를 선택하게 됩니다.
      				</p>
      				
      <CodeBlock title={"Structural pseudo-class [:only-child]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`li:only-child {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_ms">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.3.1.structural-pseudo-class-only-child.html" className="uk_editor min_height_450 mb_result_height_300" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="300px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">:only-of-type</h4>
      				<p className="mt_ms">
      					자식(child) 요소 중 동일한 유형의 형제가 없는 요소를 선택합니다.<br />
      					<code>:only-child</code>와 마찬가지입니다. 단지 해당 요소가 컨테이너에서 그 유형(타입)에서 유일한 하나라면 그 요소를 선택합니다.<br />
      					예를 들어서 <code>&lt;div&gt;</code>가 하나의 <code>&lt;h1&gt;</code>과 하나의 <code>&lt;p&gt;</code>를 포함하고 있다면 이들 각각은 해당 유형(타입)이 유일한 요소일 것입니다.
      				</p>
      				
      <CodeBlock title={"Structural pseudo-class [:only-of-type]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`li:only-of-type {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_ms">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.3.1.structural-pseudo-class-only-of-type.html" className="uk_editor min_height_450 mb_result_height_300" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="300px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">:nth-child(n)</h4>
      				<p className="mt_ms">
      					모든 자식(child) 요소 중에서 앞에서부터 n번째에 위치하는 자식(child) 요소를 모두 선택합니다.<br />
      					<code>:nth-child</code>는 정수, 표현식, 키워드(<code>odd</code><i className="t_skyblue">:홀수</i>, <code>even</code><i className="t_skyblue">:짝수</i>)를 사용할 수 있습니다.<br />
      					n은 0부터 시작하는 정수이며, 양수뿐만 아니라 음수도 사용할 수 있습니다.<br />
      					0과 음수는 생략되기 때문에 <code>2n+1</code>과 <code>2n-1</code>, <code>3n-2</code>와 <code>3n+1</code>은 결과적으로 같은 수열을 생성합니다.<br />
      					<code>:nth-child</code>는 활용도가 높은 의사(가상) 클래스이지만, 복잡한 페이지 선택의 경우 혼란스러운 표현식보다 클래스를 직접 사용하는 것이 좋습니다.
      				</p>
      				
      <CodeBlock title={"Structural pseudo-class [:nth-child(n)]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`li:nth-child(n) {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      				<div className="ol_lst mt_m">
      					<strong className="font-16 t_skyblue">n번째 유형별 설명</strong>
      					<ol className="indent">
      						<li className="line_code font14 mt_s">
      							<strong className="el_block mb_sm"><mark><code>:nth-child(odd)</code></mark> odd 키워드</strong>
      							<p>홀수(odd number) 인 요소 선택 (1, 3, 5 ...)</p>
      							<p>:nth-child(2n+1) 과 동일</p>
      						</li>
      						<li className="line_code font14 mt_s">
      							<strong className="el_block mb_sm"><mark><code>:nth-child(even)</code></mark> even 키워드</strong>
      							<p>짝수(even number) 인 요소 선택 (2, 4, 6 ...)</p>
      							<p>:nth-child(2n) 과 동일</p>
      						</li>
      						<li className="line_code font14 mt_s">
      							<strong className="el_block mb_sm"><mark><code>:nth-child(An+B)</code></mark> 기능표기법(A x n) + B</strong>
      							<p>일련의 형제의 숫자 위치가 An+B모든 양의 정수 또는 0의 값에 대해 패턴과 일치하는 요소(n)를 나타냅니다.</p>
      							<p>
      								(-1 x n) + 2 (-n+2 로도 표현할 수 있다)<br />
      								(-1 x 0) + 2 = 2 (두 번째 자식이 선택된다)<br />
      								(-1 x 1) + 2 = 1 (첫 번째 자식이 선택된다)<br />
      								(-1 x 2) + 2 = 0 (선택없음)
      							</p>

      							<strong className="el_block mb_sm mt_sm"><mark><code>:nth-child(3n + 3)</code></mark></strong>
      							<p>3n은 &quot;3xn&quot;이고 전체 표현은 &quot;(3xn) + 3&quot;입니다. 0과 양의 정수로 대체하면 다음과 같습니다.</p>
      							<p>
      								(3 x 0) + 3 = 3 = 3 번째 Element<br />
      								(3 x 1) + 3 = 6 = 6 번째 Element<br />
      								(3 x 2) + 3 = 9 = 9 번째 Element
      							</p>

      							<strong className="el_block mb_sm mt_sm"><mark><code>:nth-child(3n + 3)</code></mark></strong>
      							<p>&quot;3n + 3&quot; 대신 &quot;3n + 0&quot; 또는 더 간단한 &quot;3n&quot;을 사용하여 대체하면 다음과 같습니다.</p>
      							<p>
      								(3 x 0) = 0 = 일치하지 않음<br />
      								(3 x 1) = 3 = 3 번째 요소<br />
      								(3 x 2) = 6 = 6 번째 요소<br />
      								(3 x 3) = 9 = 9 번째 요소
      							</p>

      							<strong className="el_block mb_sm mt_sm"><mark><code>:nth-child(2n+1)</code></mark></strong>
      							<p>
      								(2 x 0) + 1 = 1 = 1 번째 Element<br />
      								(2 x 1) + 1 = 3 = 3 번째 Element<br />
      								(2 x 2) + 1 = 5 = 5 번째 Element
      							</p>

      							<strong className="el_block mb_sm mt_sm"><mark><code>:nth-child(4n-1)</code></mark></strong>
      							<p>음수 n 값을 사용하고 표현식에서 빼기를 사용할 수 있습니다. 예를 들어, 4n-1</p>
      							<p>
      								(4 x 0)-1 = -1 = 일치하지 않음<br />
      								(4 x 1)-1 = 3 = 3 번째 요소<br />
      								(4 x 2)-1 = 7 = 7 번째 요소
      							</p>
      							<p>&quot;-n&quot;값을 사용하면 약간 이상하게 보일 수 있습니다. 최종 결과가 음수이면 일치하는 것이 없으므로 식을 다시 추가하여 다시 양수로 만들어야합니다.</p>

      							<strong className="el_block mb_sm mt_sm"><mark><code>:nth-child(-n + 3)</code></mark></strong>
      							<p>&quot;-n + 3&quot;으로 &quot;first n elements&quot;를 선택할 때 사용할 수 있습니다.</p>
      							<p>
      								-0 + 3 = 3 = 3 번째 요소<br />
      								-1 + 3 = 2 = 2 번째 요소<br />
      								-2 + 3 = 1 = 1 번째 요소<br />
      								-3 + 3 = 0 = 일치하지 않음
      							</p>
      						</li>
      					</ol>
      				</div>

      				<div className="mt_m nth_chart">
      					<strong className="font-16 t_skyblue">nth-child() 계산법 한눈에 보기</strong>
      					<div className="table_basic indent first_cell_th mt_s t_center">
      						<ul className="lst_hd">
      							<li className="cell">n</li>
      							<li className="cell">2n+1</li>
      							<li className="cell">4n+1</li>
      							<li className="cell">4n+4</li>
      							<li className="cell">4n</li>
      							<li className="cell">5n-2</li>
      							<li className="cell">-n+3</li>
      						</ul>
      						<ul className="lst_bd">
      							<li>
      								<p className="cell">0</p>
      								<p className="cell">1</p>
      								<p className="cell">1</p>
      								<p className="cell">4</p>
      								<p className="cell">-</p>
      								<p className="cell">-</p>
      								<p className="cell">3</p>
      							</li>
      							<li>
      								<p className="cell">1</p>
      								<p className="cell">3</p>
      								<p className="cell">5</p>
      								<p className="cell">8</p>
      								<p className="cell">4</p>
      								<p className="cell">3</p>
      								<p className="cell">2</p>
      							</li>
      							<li>
      								<p className="cell">2</p>
      								<p className="cell">5</p>
      								<p className="cell">9</p>
      								<p className="cell">12</p>
      								<p className="cell">8</p>
      								<p className="cell">8</p>
      								<p className="cell">1</p>
      							</li>
      							<li>
      								<p className="cell">3</p>
      								<p className="cell">7</p>
      								<p className="cell">13</p>
      								<p className="cell">16</p>
      								<p className="cell">12</p>
      								<p className="cell">13</p>
      								<p className="cell">-</p>
      							</li>
      							<li>
      								<p className="cell">4</p>
      								<p className="cell">9</p>
      								<p className="cell">17</p>
      								<p className="cell">20</p>
      								<p className="cell">16</p>
      								<p className="cell">18</p>
      								<p className="cell">-</p>
      							</li>
      							<li>
      								<p className="cell">5</p>
      								<p className="cell">11</p>
      								<p className="cell">21</p>
      								<p className="cell">24</p>
      								<p className="cell">20</p>
      								<p className="cell">23</p>
      								<p className="cell">-</p>
      							</li>
      						</ul>
      					</div>
      					<div className="table_basic indent first_cell_th mt_s t_center">
      						<ul className="lst_hd">
      							<li className="cell">n</li>
      							<li className="cell">2n+1</li>
      							<li className="cell">2n-1</li>
      							<li className="cell">3n-2</li>
      							<li className="cell">3n+1</li>
      							<li className="cell">-n+5</li>
      						</ul>
      						<ul className="lst_bd">
      							<li>
      								<p className="cell">0</p>
      								<p className="cell">1</p>
      								<p className="cell">-1</p>
      								<p className="cell">-2</p>
      								<p className="cell">1</p>
      								<p className="cell">5</p>
      							</li>
      							<li>
      								<p className="cell">1</p>
      								<p className="cell">3</p>
      								<p className="cell">1</p>
      								<p className="cell">1</p>
      								<p className="cell">4</p>
      								<p className="cell">4</p>
      							</li>
      							<li>
      								<p className="cell">2</p>
      								<p className="cell">5</p>
      								<p className="cell">3</p>
      								<p className="cell">4</p>
      								<p className="cell">7</p>
      								<p className="cell">3</p>
      							</li>
      							<li>
      								<p className="cell">3</p>
      								<p className="cell">7</p>
      								<p className="cell">5</p>
      								<p className="cell">7</p>
      								<p className="cell">10</p>
      								<p className="cell">2</p>
      							</li>
      							<li>
      								<p className="cell">4</p>
      								<p className="cell">9</p>
      								<p className="cell">7</p>
      								<p className="cell">10</p>
      								<p className="cell">13</p>
      								<p className="cell">1</p>
      							</li>
      							<li>
      								<p className="cell">5</p>
      								<p className="cell">11</p>
      								<p className="cell">9</p>
      								<p className="cell">13</p>
      								<p className="cell">16</p>
      								<p className="cell">0</p>
      							</li>
      						</ul>
      					</div>
      				</div>

      				<div className="view_editor edit_code mt_ml">
      					<h5 className="ve_tit font-16-important">nth-child 예제1</h5>
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.3.1.structural-pseudo-class-nth-child.html" className="uk_editor indent min_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" />
      </Suspense></div>

      				<div className="view_editor edit_code mt_ml">
      					<h5 className="ve_tit font-16-important">nth-child 예제2</h5>
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.3.1.structural-pseudo-class-nth-child2.html" className="uk_editor indent min_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">:nth-last-child(n)</h4>
      				<p className="mt_ms">
      					모든 자식(child) 요소 중에서 뒤에서부터 n번째에 위치하는 자식(child) 요소를 모두 선택합니다.
      				</p>
      				
      <CodeBlock title={"Structural pseudo-class [:nth-last-child(n)]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`li:nth-last-child(n) {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_ms">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.3.1.structural-pseudo-class-nth-last-child.html" className="uk_editor min_height_450 mb_result_height_330" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="330px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">:nth-of-type(n)</h4>
      				<p className="mt_ms">
      					모든 자식(child) 요소 중에서 n번째로 등장하는 특정 요소를 모두 선택합니다.<br />
      					<code>:nth-child</code>와 마찬가지로 모든 선택자 속성을 사용할 수 있습니다.<br />
      					<code>:nth-child</code>와 차이점은 모든 속성이 아닌 선택한 요소 중에서 선택합니다.
      				</p>
      				
      <CodeBlock title={"Structural pseudo-class [:nth-of-type(n)]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`li:nth-of-type(n) {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_ms">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.3.1.structural-pseudo-class-nth-of-type.html" className="uk_editor min_height_450 mb_result_height_430" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="430px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">:nth-last-of-type(n)</h4>
      				<p className="mt_ms">
      					모든 자식(child) 요소 중에서 뒤에서부터 n번째로 등장하는 특정 요소를 모두 선택합니다.
      				</p>
      				
      <CodeBlock title={"Structural pseudo-class [:nth-last-of-type(n)]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`li:nth-last-of-type(n) {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_ms">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.3.1.structural-pseudo-class-nth-last-of-type.html" className="uk_editor min_height_450 mb_result_height_430" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="430px" />
      </Suspense></div>
      			</div>

      			<aside className="browser_support mt_ml" data-tit="Pseudo-classes">
      				<ul>
      					<li className="ie">9+</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">1.0</li>
      					<li className="firefox">3.5</li>
      					<li className="opera">9.5</li>
      					<li className="safari">3.1</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="indent mt_xxl">
      			<h3 className="ml_mn t_blue css3" data-conlist-h4="true">UI 요소 상태 의사(가상) 클래스(UI element states pseudo-classes) <i className="fab fa-css3-alt"></i></h3>
      			<p className="mt_m">
      				<strong className="t_black">CSS Level 3 선택자</strong><br />
      				폼 요소에 사용되며, 체크 상태이거나 활성화 및 비활성 상태를 표현합니다.
      			</p>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">:checked</h4>
      				<p className="mt_ms">
      					선택 옵션 의사 클래스(Selected-option pseudo-class)<br />
      					<code>:checked</code>는 <code>&lt;input&gt;</code> 요소 중에서 체크된(checked) 상태의 <code>&lt;input&gt;</code> 요소를 선택합니다.
      				</p>
      				
      <CodeBlock title={"UI element states pseudo-classes [:checked]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`input[type="checkbox"]:checked {
      							/* style 작성 */
      						}
      						input[type="radio"]:checked {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">:enabled</h4>
      				<p className="mt_ms">
      					활성화된 의사 클래스(Enabled pseudo-class)<br />
      					<code>:enabled</code>는 <code>&lt;input&gt;</code> 요소 중에서 사용할 수 있는 <code>&lt;input&gt;</code> 요소를 선택합니다.<br />
      					기본 <code>:enabled</code> 상태로 표현됩니다.
      				</p>
      				
      <CodeBlock title={"UI element states pseudo-classes [:enabled]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`input:enabled {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">:disabled</h4>
      				<p className="mt_ms">
      					비활성화된 의사 클래스(Disabled pseudo-class)<br />
      					<code>:disabled</code>는 <code>&lt;input&gt;</code> 요소 중에서 사용할 수 없는 <code>&lt;input&gt;</code> 요소를 선택합니다.
      				</p>
      				
      <CodeBlock title={"UI element states pseudo-classes [:disabled]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`input:disabled {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      			</div>

      			<div className="view_editor edit_code mt_l">
      				<h4 className="ve_tit">UI 요소 상태 의사(가상) 클래스 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.3.2.ui-states-pseudo-class.html" className="uk_editor indent mt_ms min_height_450 mb_result_height_300" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="300px" />
      </Suspense></div>

      			<aside className="browser_support mt_ml" data-tit="ui-states-pseudo-class">
      				<ul>
      					<li className="ie">9+</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">1.0</li>
      					<li className="firefox">1.0</li>
      					<li className="opera">9.0</li>
      					<li className="safari">3.0</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="indent mt_xxl">
      			<h3 className="ml_mn t_blue css3" data-conlist-h4="true">대상 의사 클래스(Target pseudo-class) <i className="fab fa-css3-alt"></i></h3>
      			<p className="mt_m">
      				<strong className="t_black">CSS Level 3 선택자</strong>
      			</p>

      			
      			<div className="indent mt_m">
      				<h4 className="ml_mn">:target</h4>
      				<p className="mt_s">
      					참조 URL의 대상인 E 요소를 선택합니다.<br />
      					현재 활성화된 target 요소를 모두 선택합니다.<br />
      					문서의 URI에서 부위 식별자(fragment identifier)의 목표가 되는 요소를 선택합니다.<br />
      					예를 들어서 주소창에서 <code>#demo</code>가 URI의 끝부분에 나오게 된다면 <code>:target</code>을 사용하여 <code>#demo</code>라는 id를 가진 HTML상의 요소를 선택할 수 있습니다.
      				</p>
      				
      <CodeBlock title={"Target pseudo-class [:target]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`:target {
      							/* style 작성 */
      						}`}
      </CodeBlock>

      			</div>

      			<div className="view_editor edit_code mt_m">
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.3.3.target-pseudo-class.html" className="uk_editor indent min_height_620 mb_result_height_570" mode="htmlmixed" theme="moxer" browser="default" result minHeight="620px" mbResultHeight="570px" />
      </Suspense></div>

      			<aside className="browser_support mt_ml" data-tit="target-pseudo-class">
      				<ul>
      					<li className="ie">9+</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">2.0</li>
      					<li className="firefox">1.0</li>
      					<li className="opera">9.5</li>
      					<li className="safari">1.3</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="indent mt_xxl">
      			<h3 className="ml_mn t_blue css3" data-conlist-h4="true">부정 의사 클래스(Negation pseudo-class) <i className="fab fa-css3-alt"></i></h3>
      			<p className="mt_m">
      				<strong className="t_black">CSS Level 3 선택자</strong><br />
      				셀렉터에 해당하지 않는 모든 요소를 선택합니다.<br />
      				특정 항목을 선택하지 못하기 때문에 부정 의사 클래스라고 합니다.
      			</p>

      			
      			<div className="indent mt_m">
      				<h4 className="ml_mn">:not(selector)</h4>
      				<p className="mt_s">
      					<code>:not</code> 선택자는 모든 선택자와 함께 사용할 수 있으며, 해당 선택자를 반대로 적용하여 선택합니다.<br />
      					부정 의사 클래스라고 하며, selector를 제외한 모든 요소들을 선택할 때 사용할 수 있습니다.
      				</p>
      				
      <CodeBlock title={"Negation pseudo-class [:not]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`:not(selector) {
      							/* style 작성 */
      						}

      						/* 특정 class를 제외 할 경우 .box 예) */
      						:not(.box) { … }

      						/* 의사(가상) 클래스를 제외 할 경우 :first-child 예) */
      						:not(:first-child) { … }
      						:not(:last-child) { … }

      						/* 한 가지 조건 이상를 제외하는 경우  */
      						:not(.box):not(:first-child) { … }`}
      </CodeBlock>

      			</div>

      			<div className="view_editor edit_code indent mt_m">
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.1.selector/3.1.3.4.negation-pseudo-class.html" className="uk_editor min_height_500 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="500px" />
      </Suspense></div>

      			<aside className="browser_support mt_ml" data-tit="Negation pseudo-class">
      				<ul>
      					<li className="ie">9+</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">1.0</li>
      					<li className="firefox">1.0</li>
      					<li className="opera">9.5</li>
      					<li className="safari">1.0</li>
      				</ul>
      			</aside>
      		</article>
      	</section>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/03_css_01_2.png`} alt="CSS 선택자 level 3 part-2" />
      		<figcaption className="reference">
      			CSS 선택자 level 3 part-2
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

export default CssSelectorsLevel3Part2Page
