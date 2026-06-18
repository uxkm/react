import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "rolesWidget",
  type: "accessibility",
  titleSticky: true,
  info: false,
  note: false,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: true,
  bottomEditor: false
}

const PAGE_DATA = {
  title: "복합형 위젯 역할(Composite Widget Roles) | WAI-ARIA 역할",
  description: "WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)의 역할(Role)은 웹 콘텐츠와 웹 애플리케이션의 접근성을 향상시키기 위해 사용되는 속성입니다. 이 페이지에서는 WAI-ARIA의 역할 중 복합형 위젯 역할(Composite Widget Roles)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function RolesWidgetCompositePage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		<b>위젯 역할(Widget Roles)</b>는 다른 역할을 정의하는 데 사용되는 개념적 역할로, 웹 페이지에 직접 사용되지는 않습니다.
      		대신, 구체적인 역할을 정의하고 이들 간의 관계를 설명하여 웹 접근성을 높이는 데 중요한 역할을 합니다.<br />
      		<b>위젯 역할(Widget Roles)</b>을 올바르게 이해하고 사용함으로써 웹 콘텐츠의 접근성을 개선할 수 있습니다.
      	</p>
      	<p className="reference mt_ms">
      		<a href="https://www.w3.org/TR/wai-aria-1.2/#widget_roles" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA Widget Roles</a><br />
      	</p>
      </blockquote>











      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b>
      				복합형 위젯 역할(Composite Widget Roles)은 여러 개의 하위 요소를 포함하며, 상호작용할 수 있는 복잡한 UI 구성 요소를 의미합니다.
      			</b>
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">combobox (콤보 박스 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>combobox</code> 역할은 사용자가 직접 입력하거나, 목록에서 선택할 수 있는 요소를 나타냅니다.<br />
      				콤보 박스는 드롭다운 리스트와 텍스트 입력 필드를 결합한 형태로, 사용자는 제시된 목록에서 선택하거나 새 값을 입력할 수 있습니다.
      				<code>combobox</code>는 보통 <code>listbox</code>, <code>tree</code>, <code>grid</code>와 같은
      				관련된 선택 목록과 함께 사용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#combobox" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA combobox</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA combobox</a><br />
      				<a href="/publishing/html/09-forms/05-select_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">select 요소 참조 - UXKM select</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>combobox</code> 역할은 텍스트 입력 필드와 선택 가능한 항목 목록을 결합한 UI 요소를 정의합니다.
      				</li>
      				<li>
      					콤보 박스는 <code>aria-expanded</code>, <code>aria-controls</code>,
      					<code>aria-haspopup</code>, <code>aria-autocomplete</code>
      					등의 속성을 사용하여 보조 기술에 현재 상태와 동작을 알립니다.
      				</li>
      				<li>
      					콤보 박스에 연결된 선택 목록은 보통 <code>listbox</code>, <code>tree</code>, 또는 <code>grid</code> 역할을 가지며,
      					이는 콤보 박스의 <code>aria-controls</code> 속성에 의해 참조됩니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>combobox</code> 역할을 사용할 때는 <code>aria-expanded</code>, <code>aria-controls</code>, <code>aria-haspopup</code>
      					속성을 설정하여 콤보 박스의 현재 상태와 관련된 목록을 명확히 정의해야 합니다.
      				</li>
      				<li>
      					자동 완성 기능을 제공하는 경우 <code>aria-autocomplete</code> 속성을 사용하여 보조 기술이 이 기능을 인식할 수 있도록 합니다.
      				</li>
      				<li>
      					콤보 박스의 목록이 동적으로 확장/축소될 때, <code>aria-expanded</code> 속성을 동적으로 업데이트하여 현재 상태를 반영해야 합니다.
      				</li>
      				<li>
      					비활성화된 콤보 박스는 <code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 이를 명확히 표시해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-expanded</strong>
      					<p>
      						콤보 박스의 선택 목록이 확장되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-controls</strong>
      					<p>
      						콤보 박스가 제어하는 선택 목록의 <code>ID</code>를 참조합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-haspopup</strong>
      					<p>
      						콤보 박스가 선택 목록을 가지고 있음을 나타냅니다.
      						일반적으로 <code>listbox</code>, <code>tree</code>, <code>grid</code> 중 하나입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-autocomplete</strong>
      					<p>
      						콤보 박스에 자동 완성 기능이 있는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						콤보 박스가 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						콤보 박스의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 combobox 역할 예시</h4>
      				<p className="mt_s">
      					HTML5의 <code>&lt;select&gt;</code> 요소는 기본적으로 콤보 박스 역할을 하며 브라우저와 보조 기술에서 지원됩니다.<br />
      					그러나 자인적으로 UI를 수정하여 사용해야하는 경우 , 텍스트 입력 필드에 <code>role=&quot;combobox&quot;</code>를 설정하고,
      					선택 목록을 <code>aria-controls</code> 속성으로 참조합니다. 또한, <code>aria-expanded</code>는 목록의 확장 상태를,
      					<code>aria-autocomplete=&quot;list&quot;</code>는 입력 시 목록을 제시할 수 있음을 나타냅니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 기본 combobox" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							combobox 요소가 단독으로 사용되었으며, 텍스트 입력 필드와 선택 목록이 포함되지 않았습니다.
      							이 상태에서는 보조 기술이 콤보 박스의 기능을 제대로 인식할 수 없습니다.
      						-->
      						<div role="combobox">Choose an option</div>

      						<!-- (권장) 올바른 예시 디자인에 맞추어서 사용하는 경우 -->
      						<label for="combo1">Choose an option:</label>
      						<input id="combo1" type="text" role="combobox" aria-expanded="false" aria-controls="listbox1" aria-autocomplete="list" aria-haspopup="listbox">
      						<ul id="listbox1" role="listbox" hidden>
      							<li role="option">Option 1</li>
      							<li role="option">Option 2</li>
      							<li role="option">Option 3</li>
      						</ul>

      						<!-- (권장) 응용한 예시 디자인에 맞추어서 사용하는 경우 -->
      						<label>
      							<span>Choose an option:</span>
      							<input id="combo1" type="text" role="combobox" aria-expanded="false" aria-controls="radiocheck" aria-autocomplete="list" aria-haspopup="listbox">
      						</label>
      						<div id="radiocheck" role="listbox" hidden>
      							<li>
      								 <label>
      									 <input type="radio" name="radCheck" checked aria-checked="true">
      									 <span>option 1</span>
      								 </label>
      							/li>
      							<li>
      								 <label>
      									 <input type="radio" name="radCheck">
      									 <span>option 2</span>
      								 </label>
      							/li>
      							<li>
      								 <label>
      									 <input type="radio" name="radCheck">
      									 <span>option 3</span>
      								 </label>
      							/li>
      						</div>

      						<!-- (권장) 올바른 예시 시멘틱 요소 사용 -->
      						<label for="combo1">Choose an option:</label>
      						<select id="combo1">
      							<option>Option 1</option>
      							<option>Option 2</option>
      							<option>Option 3</option>
      						</select>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 확장/축소 가능한 combobox 예시</h4>
      				<p className="mt_s">
      					사용자가 입력할 때 관련된 선택 목록을 동적으로 확장하거나 축소하는 기능을 구현한 콤보 박스입니다.
      					텍스트 필드에 입력이 시작되면 목록이 확장되고, 항목을 클릭하면 목록이 축소되며 선택된 값이 텍스트 필드에 입력됩니다.
      				</p>
      				<p className="dp_pc full_screen_code_info">(Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.</p>
      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.3.1.combobox1.html" className="uk_editor min_height_300 mb_result_height_210" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="210px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">자동 완성 기능이 포함된 combobox 예시</h4>
      				<p className="mt_s">
      					자동 완성 기능이 포함된 콤보 박스를 구현한 것입니다. 사용자가 텍스트를 입력하면 해당 텍스트로 시작하는 항목만 목록에 표시됩니다.
      					사용자는 입력을 통해 목록을 필터링할 수 있으며, 목록에서 항목을 선택할 수 있습니다.
      				</p>
      				<p className="dp_pc full_screen_code_info">(Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.</p>
      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.3.1.combobox2.html" className="uk_editor min_height_300 mb_result_height_210" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="210px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 combobox 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성과 함께 <code>disabled</code> 속성을 사용하여 콤보 박스를 비활성화합니다.
      					이 상태에서는 사용자가 입력할 수 없으며, 보조 기술은 이 필드가 비활성화되었음을 알립니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할 / 비활성화된 combobox" language="javascript" className="uk_gist_code_box mt_m">
      {`<label for="combo4">Choose an option:</label>
      						<input id="combo4" type="text" role="combobox" aria-expanded="false" aria-controls="listbox4" aria-autocomplete="list" aria-haspopup="listbox" aria-disabled="true" disabled>
      						<ul id="listbox4" role="listbox" hidden>
      							<li role="option">Option 1</li>
      							<li role="option">Option 2</li>
      							<li role="option">Option 3</li>
      						</ul>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">grid (그리드 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>grid</code> 역할은 행과 열로 구성된 데이터를 구조화하여 대화형으로 표시하는 표 형식을 나타냅니다.
      				사용자는 각 셀을 클릭하거나 탐색하여 상호작용할 수 있습니다.
      				<code>grid</code>는 행(<code>row</code>), 열(<code>column</code>), 셀(<code>gridcell</code>)
      				등의 역할과 함께 사용되며, 복잡한 테이블이나 데이터를 표현할 때 유용합니다.<br />
      				하지만 시멘틱한 <code>&lt;table&gt;</code> 요소를 사용해 그리드를 구현하는 것이 더 권장됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria/#grid" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA grid</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA grid</a><br />
      				<a href="/publishing/html/08-table/01-table_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">table 요소 참조 - UXKM table</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>grid</code> 역할은 데이터를 구조화된 행과 열로 표시하는 인터랙티브 컴포넌트를 정의합니다.
      				</li>
      				<li>
      					키보드 내비게이션을 지원하여 사용자가 그리드 내의 데이터를 쉽게 탐색할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					대화형 요소(예: 정렬 가능한 컬럼 헤더 등)를 포함할 경우,
      					<code>aria-sort</code>와 같은 속성을 사용해 현재 상태를 명확히 나타내야 합니다.
      				</li>
      				<li>
      					비활성화된 셀이나 행이 포함된 경우, <code>aria-disabled</code> 속성을 사용해 보조 기술이 이를 인식할 수 있도록 해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>grid</code> 역할을 사용할 때는 <code>row</code>, <code>gridcell</code>, <code>columnheader</code>
      					등의 하위 요소를 적절히 사용하여 그리드 구조를 명확히 정의해야 합니다.
      				</li>
      				<li>
      					키보드 내비게이션을 지원하여 사용자가 그리드 내의 데이터를 쉽게 탐색할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					대화형 요소(예: 정렬 가능한 컬럼 헤더 등)를 포함할 경우,
      					<code>aria-sort</code>와 같은 속성을 사용해 현재 상태를 명확히 나타내야 합니다.
      				</li>
      				<li>
      					비활성화된 셀이나 행이 포함된 경우, <code>aria-disabled</code> 속성을 사용해 보조 기술이 이를 인식할 수 있도록 해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-readonly</strong>
      					<p>
      						그리드나 그리드 내의 셀이 읽기 전용인지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-multiselectable</strong>
      					<p>
      						그리드에서 다중 선택이 가능한지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-colcount</strong>
      					<p>
      						그리드의 열 수를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-rowcount</strong>
      					<p>
      						그리드의 행 수를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-colindex</strong>
      					<p>
      						그리드 내 열의 위치를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-rowindex</strong>
      					<p>
      						그리드 내 행의 위치를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-sort</strong>
      					<p>
      						열의 정렬 상태를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						그리드 내의 셀이 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						그리드의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 grid 역할 예시</h4>
      				<p className="mt_s">
      					행(<code>row</code>)과 셀(<code>gridcell</code>)로 구성된 기본 그리드를 정의하여 사용할 수 있습니다.<br />
      					그러나, 시멘틱한 <code>&lt;table&gt;</code> 요소를 사용하여 그리드를 구현하는것을 권장합니다.
      					<code>&lt;th&gt;</code> 요소는 <code>columnheader</code> 역할을 지원하며,
      					<code>&lt;td&gt;</code> 요소는 gridcell 역할을 지원하고 있습니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 기본 grid" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							이 예시는 단순히 그리드 역할만 지정되어 있으며, 데이터의 행과 열을 정의하는 row 및 gridcell 요소가 포함되지 않아 그리드의 구조가 명확하지 않습니다
      						-->
      						<div role="grid">Data Grid</div>

      						<!-- 올바른 예시 -->
      						<div role="grid">
      							<div role="row" tabindex="0">
      								<div role="gridcell">Header 1</div>
      								<div role="gridcell">Header 2</div>
      								<div role="gridcell">Header 3</div>
      							</div>
      							<div role="row" tabindex="0">
      								<div role="gridcell">Data 1</div>
      								<div role="gridcell">Data 2</div>
      								<div role="gridcell">Data 3</div>
      							</div>
      							<div role="row" tabindex="0">
      								<div role="gridcell">Data 4</div>
      								<div role="gridcell">Data 5</div>
      								<div role="gridcell">Data 6</div>
      							</div>
      						</div>

      						<!-- (권장) 시멘틱 요소 사용 -->
      						<table>
      							<thead>
      								<tr>
      									<th scope="col">Header 1</th>
      									<th scope="col">Header 2</th>
      									<th scope="col">Header 3</th>
      								</tr>
      							</thead>
      							<tbody>
      								<tr>
      									<td>Data 1</td>
      									<td>Data 2</td>
      									<td>Data 3</td>
      								</tr>
      								<tr>
      									<td>Data 4</td>
      									<td>Data 5</td>
      									<td>Data 6</td>
      								</tr>
      							</tbody>
      						</table>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">대화형 그리드 예시</h4>
      				<p className="mt_s">
      					사용자가 헤더를 클릭하여 데이터를 정렬할 수 있는 대화형 그리드 입니다.
      					각 <code>columnheader</code>는 <code>aria-sort</code> 속성을 사용해 정렬 상태를 나타내며, 사용자가 정렬 상태를 변경할 수 있습니다.
      				</p>
      				<p className="dp_pc full_screen_code_info">(Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.</p>
      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.3.2.grid_div.html" className="uk_editor min_height_300 mb_result_height_400" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="400px" />
      </Suspense>
      </div>
      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.3.2.grid_table.html" className="uk_editor min_height_300 mb_result_height_350" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="350px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">키보드 내비게이션을 지원하는 그리드 예시</h4>
      				<p className="mt_s">
      					키보드 내비게이션을 지원하는 그리드 예제입니다.
      					사용자는 화살표 키를 사용해 그리드 내의 셀과 행을 탐색할 수 있으며, 보조 기술은 이 구조를 올바르게 인식합니다.
      				</p>
      				
      <CodeBlock title="키보드 내비게이션을 지원하는 그리드" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="grid" aria-labelledby="keyboardGridLabel">
      							<div role="row" tabindex="0">
      								<div role="gridcell" tabindex="-1">Row 1, Cell 1</div>
      								<div role="gridcell" tabindex="-1">Row 1, Cell 2</div>
      								<div role="gridcell" tabindex="-1">Row 1, Cell 3</div>
      							</div>
      							<div role="row" tabindex="-1">
      								<div role="gridcell" tabindex="-1">Row 2, Cell 1</div>
      								<div role="gridcell" tabindex="-1">Row 2, Cell 2</div>
      								<div role="gridcell" tabindex="-1">Row 2, Cell 3</div>
      							</div>
      							<div role="row" tabindex="-1">
      								<div role="gridcell" tabindex="-1">Row 3, Cell 1</div>
      								<div role="gridcell" tabindex="-1">Row 3, Cell 2</div>
      								<div role="gridcell" tabindex="-1">Row 3, Cell 3</div>
      							</div>
      						</div>
      						<div id="keyboardGridLabel">Keyboard Accessible Grid</div>

      						<script>
      							const gridRows = document.querySelectorAll('[role="row"]');
      							gridRows.forEach(row => {
      								row.addEventListener('keydown', event => {
      									const cells = Array.from(row.querySelectorAll('[role="gridcell"]'));
      									const currentIndex = cells.findIndex(cell => cell === document.activeElement);
      									if (event.key === 'ArrowRight' && currentIndex < cells.length - 1) {
      										cells[currentIndex + 1].focus();
      									} else if (event.key === 'ArrowLeft' && currentIndex > 0) {
      										cells[currentIndex - 1].focus();
      									} else if (event.key === 'ArrowDown' && row.nextElementSibling) {
      										row.nextElementSibling.querySelector('[role="gridcell"]').focus();
      									} else if (event.key === 'ArrowUp' && row.previousElementSibling) {
      										row.previousElementSibling.querySelector('[role="gridcell"]').focus();
      									}
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 셀을 포함하는 그리드 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 비활성화된 셀을 나타낼 수 있습니다.
      					이 셀은 포커스를 받을 수 없으며, 시각적으로도 비활성화 상태임을 나타냅니다.
      				</p>
      				
      <CodeBlock title="비활성화된 셀을 포함하는 그리드" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="grid">
      							<div role="row">
      								<div role="gridcell" tabindex="0">Active Cell 1</div>
      								<div role="gridcell" aria-disabled="true" tabindex="-1" style="color: grey;">Disabled Cell</div>
      								<div role="gridcell" tabindex="0">Active Cell 2</div>
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">listbox (리스트 상자 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>listbox</code> 역할은 사용자가 목록에서 하나 이상의 항목을 선택할 수 있는 인터페이스 요소를 나타냅니다.
      				일반적으로 <code>listbox</code>는 여러 개의 <code>option</code> 요소로 구성되며, 사용자는 마우스 클릭이나 키보드 입력으로 항목을 선택할 수 있습니다.
      				<code>listbox</code>는 단일 선택 또는 다중 선택이 가능하며,
      				선택된 항목은 <code>aria-selected</code> 속성으로 표시됩니다.<br />
      				시멘틱한 <code>&lt;select&gt;</code> 요소를 사용하여 <code>listbox</code>를 구현하는것을 권장합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#listbox" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA listbox</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA listbox</a><br />
      				<a href="/publishing/html/09-forms/05-select_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">select 요소 참조 - UXKM select</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>listbox</code> 역할은 사용자가 하나 이상의 항목을 선택할 수 있는 목록을 정의합니다.
      				</li>
      				<li>
      					<code>listbox</code>는 <code>option</code> 역할을 가진 여러 항목으로 구성되며,
      					각 항목은 선택 가능 상태를 나타내는 <code>aria-selected</code> 속성을 가질 수 있습니다.
      				</li>
      				<li>
      					<code>listbox</code>는 다양한 형태로 구현될 수 있으며, 단일 선택이나 다중 선택이 가능한 인터페이스로 설정할 수 있습니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>listbox</code> 역할을 사용할 때는 반드시 <code>option</code> 역할을 가진 요소를 포함해야 하며,
      					각 옵션에는 선택 상태를 나타내는 <code>aria-selected</code> 속성이 필요합니다.
      				</li>
      				<li>
      					단일 선택 또는 다중 선택 기능을 제공할 경우,
      					<code>aria-multiselectable</code> 속성을 사용하여 보조 기술이 이 기능을 인식할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					키보드 내비게이션을 지원하여 사용자가 <code>listbox</code>를 쉽게 탐색하고 선택할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					비활성화된 <code>listbox</code>의 경우, <code>aria-disabled</code> 속성을 사용하여 이를 명확히 표시해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-multiselectable</strong>
      					<p>
      						<code>listbox</code>가 다중 선택을 지원하는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-required</strong>
      					<p>
      						<code>listbox</code>가 필수 입력 필드인지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						<code>listbox</code>가 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-selected</strong>
      					<p>
      						개별 <code>option</code>의 선택 상태를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						<code>listbox</code>의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 listbox 역할 예시</h4>
      				<p className="mt_s">
      					시멘틱한 <code>&lt;select&gt;</code> 요소를 사용하여 구현하는것을 권장합니다.
      					<code>&lt;select&gt;</code> 요소는 기본적으로 <code>listbox</code> 역할을 가지며,
      					브라우저와 보조 기술에서 기본적으로 지원됩니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 기본 listbox" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							이 예시는 listbox의 기본 구조를 제공하지만, 개별 항목(option)에 역할이 지정되지 않았습니다.
      							보조 기술은 각 항목이 선택 가능한 option임을 인식하지 못합니다.
      						-->
      						<div role="listbox">
      							<div>Option 1</div>
      							<div>Option 2</div>
      							<div>Option 3</div>
      						</div>

      						<!--
      							올바른 예시
      							각 항목에 role="option"을 추가하여 보조 기술이 이를 선택 가능한 옵션으로 인식할 수 있도록 했습니다.
      							또한 aria-selected 속성을 사용하여 항목이 선택되었는지 여부를 나타냅니다.
      						-->
      						<div role="listbox">
      							<div role="option" aria-selected="false">Option 1</div>
      							<div role="option" aria-selected="false">Option 2</div>
      							<div role="option" aria-selected="false">Option 3</div>
      						</div>

      						<!-- (권장) 시멘틱 요소 사용 -->
      						<select>
      							<option>Option 1</option>
      							<option>Option 2</option>
      							<option>Option 3</option>
      						</select>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">단일 선택 가능한 listbox 예시</h4>
      				<p className="mt_s">
      					단일 선택 가능한 <code>listbox</code>를 예시입니다.
      					사용자가 하나의 <code>option</code>을 클릭하면,
      					다른 <code>option</code>의 <code>aria-selected</code> 속성은 <code>false</code>로 설정되고
      					클릭된 옵션만 <code>true</code>로 설정됩니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할 / 단일 선택 가능한 listbox" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="listbox" aria-labelledby="listbox-label" tabindex="0">
      							<div role="option" aria-selected="false">Option 1</div>
      							<div role="option" aria-selected="false">Option 2</div>
      							<div role="option" aria-selected="false">Option 3</div>
      						</div>
      						<div id="listbox-label">Choose an option:</div>

      						<script>
      							const listbox = document.querySelector('[role="listbox"]');
      							const options = listbox.querySelectorAll('[role="option"]');

      							options.forEach(option => {
      								option.addEventListener('click', () => {
      									options.forEach(opt => opt.setAttribute('aria-selected', 'false'));
      									option.setAttribute('aria-selected', 'true');
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">다중 선택 가능한 listbox 예시</h4>
      				<p className="mt_s">
      					다중 선택이 가능한 <code>listbox</code>를 예시입니다.
      					<code>aria-multiselectable=&quot;true&quot;</code> 속성을 사용하여 다중 선택 기능을 활성화했으며,
      					사용자가 여러 옵션을 선택할 수 있도록 했습니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할 / 다중 선택 가능한 listbox" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="listbox" aria-multiselectable="true" tabindex="0">
      							<div role="option" aria-selected="false" tabindex="-1">Option 1</div>
      							<div role="option" aria-selected="false" tabindex="-1">Option 2</div>
      							<div role="option" aria-selected="false" tabindex="-1">Option 3</div>
      						</div>

      						<script>
      							const multiSelectListbox = document.querySelector('[role="listbox"]');
      							const multiSelectOptions = multiSelectListbox.querySelectorAll('[role="option"]');

      							multiSelectOptions.forEach(option => {
      								option.addEventListener('click', () => {
      									const isSelected = option.getAttribute('aria-selected') === 'true';
      									option.setAttribute('aria-selected', !isSelected);
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">키보드 내비게이션을 지원하는 listbox 예시</h4>
      				<p className="mt_s">
      					키보드 내비게이션을 지원하는 <code>listbox</code>를 예시입니다.
      					사용자는 화살표 키로 <code>option</code> 간을 이동하고,
      					<i className="key_enter">Enter</i> 또는 <i className="key_space">Space bar</i> 키로 옵션을 선택할 수 있습니다.
      				</p>
      				
      <CodeBlock title="키보드 내비게이션을 지원하는 listbox" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="listbox" tabindex="0">
      							<div role="option" aria-selected="false" tabindex="-1">Option 1</div>
      							<div role="option" aria-selected="false" tabindex="-1">Option 2</div>
      							<div role="option" aria-selected="false" tabindex="-1">Option 3</div>
      						</div>

      						<script>
      							const listbox = document.querySelector('[role="listbox"]');
      							const options = listbox.querySelectorAll('[role="option"]');

      							let currentIndex = 0;
      							options[currentIndex].tabIndex = 0;
      							options[currentIndex].focus();

      							listbox.addEventListener('keydown', event => {
      								if (event.key === 'ArrowDown') {
      									options[currentIndex].tabIndex = -1;
      									currentIndex = (currentIndex + 1) % options.length;
      									options[currentIndex].tabIndex = 0;
      									options[currentIndex].focus();
      								} else if (event.key === 'ArrowUp') {
      									options[currentIndex].tabIndex = -1;
      									currentIndex = (currentIndex - 1 + options.length) % options.length;
      									options[currentIndex].tabIndex = 0;
      									options[currentIndex].focus();
      								} else if (event.key === 'Enter' || event.key === ' ') {
      									const isSelected = options[currentIndex].getAttribute('aria-selected') === 'true';
      									options[currentIndex].setAttribute('aria-selected', !isSelected);
      								}
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 listbox 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 비활성화된 <code>listbox</code>를 나타낼 수 있습니다.
      					이 상태에서는 사용자가 옵션을 선택할 수 없으며, 시각적으로도 비활성화된 상태임을 나타냅니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 비활성화된 listbox" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="listbox" aria-disabled="true" tabindex="-1">
      							<div role="option" aria-selected="false" tabindex="-1" style="color: grey;">Option 1</div>
      							<div role="option" aria-selected="false" tabindex="-1" style="color: grey;">Option 2</div>
      							<div role="option" aria-selected="false" tabindex="-1" style="color: grey;">Option 3</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">menu (메뉴 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>menu</code> 역할은 메뉴 항목의 그룹을 정의하는 UI 컴포넌트로,
      				일반적으로 웹 애플리케이션의 내비게이션 또는 상호작용을 위한 요소로 사용됩니다.
      				메뉴는 여러 개의 <code>menuitem</code>, <code>menuitemcheckbox</code>, <code>menuitemradio</code>와 같은 요소로 구성되며,
      				사용자는 메뉴 항목을 클릭하거나 키보드로 탐색할 수 있습니다.<br />
      				<code>menu</code>는 드롭다운, 컨텍스트 메뉴, 내비게이션 메뉴 등의 형태로 사용될 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#menu" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA menu</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA menu</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>menu</code> 역할은 메뉴 항목의 그룹을 정의하며, 주로 내비게이션 또는 상호작용을 위한 UI 컴포넌트로 사용됩니다.
      				</li>
      				<li>
      					메뉴는 <code>menuitem</code>, <code>menuitemcheckbox</code>, <code>menuitemradio</code>와 같은 하위 항목으로 구성되며,
      					이러한 항목은 각각의 역할과 기능을 명확히 정의합니다.
      				</li>
      				<li>
      					메뉴는 사용자가 키보드나 마우스를 사용하여 항목을 선택하고 탐색할 수 있는 구조로 구현됩니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>menu</code> 역할을 사용할 때는 반드시 <code>menuitem</code>,
      					<code>menuitemcheckbox</code>, <code>menuitemradio</code>
      					등의 하위 항목 역할을 사용하여 메뉴 항목의 유형을 명확히 정의해야 합니다.
      				</li>
      				<li>
      					드롭다운 메뉴와 컨텍스트 메뉴는 <code>aria-haspopup</code> 및 <code>aria-expanded</code> 속성을 사용해
      					보조 기술이 현재 메뉴의 상태를 인식할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					키보드 내비게이션을 지원하여 사용자가 메뉴 항목을 쉽게 탐색하고 선택할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					체크박스 및 라디오 버튼 메뉴 항목의 경우, <code>aria-checked</code> 속성을 사용하여 선택 상태를 명확히 나타내야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-haspopup</strong>
      					<p>
      						메뉴를 호출하는 요소가 메뉴나 다른 팝업 요소를 가지고 있음을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-expanded</strong>
      					<p>
      						메뉴가 확장되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-checked</strong>
      					<p>
      						<code>menuitemcheckbox</code> 또는 <code>menuitemradio</code> 요소의 선택 상태를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						메뉴 항목이 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						메뉴와 메뉴 항목의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 menu 역할 예시</h4>
      				<p className="mt_s">
      					<code>role=&quot;menuitem&quot;</code>을 추가하여 보조 기술이 이를 메뉴 항목으로 인식할 수 있도록 해야 합니다.
      					또한, <code>tabindex=&quot;0&quot;</code>을 사용해 각 항목이 키보드 탐색이 가능하도록 설정해야 합니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 기본 menu" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							이 예시는 menu의 기본 구조를 제공하지만,
      							각 메뉴 항목에 적절한 역할(menuitem, menuitemcheckbox, menuitemradio)이 지정되지 않았습니다.
      							보조 기술은 각 항목이 메뉴의 일부임을 제대로 인식하지 못합니다.
      						-->
      						<div role="menu">
      							<div>Item 1</div>
      							<div>Item 2</div>
      							<div>Item 3</div>
      						</div>

      						<!--
      							올바른 예시
      							각 항목에 role="option"을 추가하여 보조 기술이 이를 선택 가능한 옵션으로 인식할 수 있도록 했습니다.
      							또한 aria-selected 속성을 사용하여 항목이 선택되었는지 여부를 나타냅니다.
      						-->
      						<div role="menu">
      							<div role="menuitem" tabindex="0">Item 1</div>
      							<div role="menuitem" tabindex="0">Item 2</div>
      							<div role="menuitem" tabindex="0">Item 3</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">드롭다운 메뉴 예시</h4>
      				<p className="mt_s">
      					버튼을 클릭하면 메뉴가 확장되거나 축소되며, <code>aria-expanded</code> 속성으로 현재 상태를 표시합니다.
      					또한, <code>aria-haspopup=&quot;true&quot;</code> 속성은 해당 버튼이 메뉴를 제어한다는 것을 나타냅니다.
      				</p>
      				<p className="dp_pc full_screen_code_info">(Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 드롭다운 메뉴" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-haspopup="true" aria-expanded="false" aria-controls="menu1">Options</button>
      						<div role="menu" id="menu1" hidden>
      							<div role="menuitem" tabindex="-1">Profile</div>
      							<div role="menuitem" tabindex="-1">Settings</div>
      							<div role="menuitem" tabindex="-1">Log out</div>
      						</div>`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.3.4.menu1.html" className="uk_editor min_height_300" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">컨텍스트 메뉴 예시</h4>
      				<p className="mt_s">
      					사용자가 마우스 오른쪽 버튼을 클릭할 때 나타나는 컨텍스트 메뉴를 구현한 예제입니다.
      					마우스 위치에 메뉴가 나타나며, 클릭 시 메뉴가 사라집니다.
      				</p>
      				<p className="dp_pc full_screen_code_info">(Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.</p>
      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.3.4.menu2.html" className="uk_editor min_height_300" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">다중 선택 가능한 체크박스 메뉴 예시</h4>
      				<p className="mt_s">
      					다중 선택이 가능한 체크박스 메뉴를 구현한 예시입니다.
      					<code>menuitemcheckbox</code> 역할을 사용해 각 항목이 체크 가능한 메뉴 항목임을 나타내며,
      					사용자가 클릭하여 항목을 선택 또는 해제할 수 있습니다.
      				</p>
      				<p className="dp_pc full_screen_code_info">(Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.</p>
      				
      <CodeBlock title="다중 선택 가능한 체크박스 메뉴" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="menu">
      							<div role="menuitemcheckbox" aria-checked="false" tabindex="0">Enable notifications</div>
      							<div role="menuitemcheckbox" aria-checked="false" tabindex="0">Enable dark mode</div>
      							<div role="menuitemcheckbox" aria-checked="true" tabindex="0">Enable auto-update</div>
      						</div>`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.3.4.menu3.html" className="uk_editor min_height_300" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">키보드 내비게이션을 지원하는 메뉴 예시</h4>
      				<p className="mt_s">
      					키보드 내비게이션을 지원하는 메뉴 예시입니다.
      					사용자는 <i className="key_arrow_down">ArrowDown</i> 및 <i className="key_arrow_up">ArrowUp</i> 키로 메뉴 항목 간을
      					탐색할 수 있으며, 현재 포커스된 항목이 명확하게 표시됩니다.
      				</p>
      				
      <CodeBlock title="키보드 내비게이션을 지원하는 메뉴" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="menu" tabindex="0">
      							<div role="menuitem" tabindex="-1">New File</div>
      							<div role="menuitem" tabindex="-1">Open File</div>
      							<div role="menuitem" tabindex="-1">Save File</div>
      						</div>

      						<script>
      							const menuItems = document.querySelectorAll('[role="menuitem"]');
      							let currentIndex = 0;

      							menuItems[currentIndex].tabIndex = 0;
      							menuItems[currentIndex].focus();

      							menuItems.forEach((item, index) => {
      								item.addEventListener('keydown', event => {
      									if (event.key === 'ArrowDown') {
      										menuItems[currentIndex].tabIndex = -1;
      										currentIndex = (currentIndex + 1) % menuItems.length;
      										menuItems[currentIndex].tabIndex = 0;
      										menuItems[currentIndex].focus();
      									} else if (event.key === 'ArrowUp') {
      										menuItems[currentIndex].tabIndex = -1;
      										currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
      										menuItems[currentIndex].tabIndex = 0;
      										menuItems[currentIndex].focus();
      									}
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">menubar (메뉴 모음 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>menubar</code> 역할은 일반적으로 애플리케이션이나 웹사이트의 상단에 위치하는 메뉴 모음을 나타냅니다.
      				<code>menubar</code>는 <code>menuitem</code>, <code>menuitemcheckbox</code>,
      				<code>menuitemradio</code>, <code>submenu</code>와 같은 하위 요소로 구성되며,
      				사용자는 메뉴 모음에서 다양한 작업을 수행할 수 있습니다.<br />
      				<code>menubar</code>는 내비게이션 메뉴 또는 애플리케이션의 주요 기능을 제공하는 UI 컴포넌트로 사용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#menubar" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA menubar</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA menubar</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>menubar</code> 역할은 상단 메뉴 모음을 나타내며, 사용자가 다양한 메뉴 항목을 선택하고 탐색할 수 있도록 돕습니다.
      				</li>
      				<li>
      					<code>menubar</code>는 일반적으로 <code>menuitem</code> 요소로 구성되며,
      					각 항목은 드롭다운 메뉴 또는 하위 메뉴를 포함할 수 있습니다.
      				</li>
      				<li>
      					사용자는 키보드와 마우스를 사용해 메뉴 항목 간을 탐색하고 선택할 수 있습니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>menubar</code> 역할을 사용할 때는 반드시 <code>menuitem</code>,
      					<code>menuitemcheckbox</code>, <code>menuitemradio</code>
      					등의 하위 항목 역할을 사용하여 메뉴 항목의 유형을 명확히 정의해야 합니다.
      				</li>
      				<li>
      					<code>aria-haspopup</code> 및 <code>aria-expanded</code>
      					속성을 사용해 보조 기술이 현재 메뉴 항목의 상태를 인식할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					키보드 내비게이션을 지원하여 사용자가 메뉴 항목을 쉽게 탐색하고 선택할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					서브메뉴를 포함한 복잡한 메뉴 구조를 구현할 때는 계층적 구조가 명확히 전달되도록 해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-haspopup</strong>
      					<p>
      						메뉴 항목이 서브메뉴 또는 다른 팝업 요소를 가지고 있음을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-expanded</strong>
      					<p>
      						메뉴 항목이 확장되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						메뉴 항목이 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						메뉴 모음의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 menubar 역할 예시</h4>
      				<p className="mt_s">
      					<code>role=&quot;menuitem&quot;</code>을 추가하여 보조 기술이 이를 메뉴 항목으로 인식할 수 있도록 해야 합니다.
      					또한, <code>tabindex=&quot;0&quot;</code>을 사용해 각 항목이 키보드 탐색이 가능하도록 설정해야 합니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 기본 menubar" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							이 예시는 menubar의 기본 구조를 제공하지만, 개별 메뉴 항목에 적절한 역할(menuitem)이 지정되지 않았습니다.
      							보조 기술은 각 항목이 메뉴 모음의 일부임을 인식하지 못합니다.
      						-->
      						<div role="menubar">
      							<div>File</div>
      							<div>Edit</div>
      							<div>View</div>
      						</div>

      						<!-- 올바른 예시 -->
      						<div role="menubar">
      							<div role="menuitem" tabindex="0">File</div>
      							<div role="menuitem" tabindex="0">Edit</div>
      							<div role="menuitem" tabindex="0">View</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">드롭다운 메뉴가 포함된 menubar 예시</h4>
      				<p className="mt_s">
      					<code>aria-haspopup</code> 속성으로 메뉴 항목이 드롭다운 메뉴를 포함하고 있음을 나타내며,
      					<code>aria-expanded</code> 속성으로 메뉴가 확장되었는지 여부를 나타냅니다.
      					사용자가 메뉴 항목을 클릭하면 관련된 드롭다운 메뉴가 표시됩니다.
      				</p>
      				<p className="dp_pc full_screen_code_info">(Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.</p>
      				
      <CodeBlock title="드롭다운 메뉴가 포함된 menubar" language="javascript" className="uk_gist_code_box mt_m">
      {`<nav role="menubar">
      							<div role="menuitem" aria-haspopup="true" aria-expanded="false" tabindex="0">File</div>
      							<div role="menu" hidden>
      								<div role="menuitem" tabindex="-1">New</div>
      								<div role="menuitem" tabindex="-1">Open</div>
      								<div role="menuitem" tabindex="-1">Save</div>
      							</div>
      							<div role="menuitem" aria-haspopup="true" aria-expanded="false" tabindex="0">Edit</div>
      							<div role="menu" hidden>
      								<div role="menuitem" tabindex="-1">Cut</div>
      								<div role="menuitem" tabindex="-1">Copy</div>
      								<div role="menuitem" tabindex="-1">Paste</div>
      							</div>
      						</nav>

      						<script>
      							const menubarItems = document.querySelectorAll('[role="menuitem"]');

      							menubarItems.forEach(item => {
      								item.addEventListener('click', () => {
      									const expanded = item.getAttribute('aria-expanded') === 'true';
      									item.setAttribute('aria-expanded', !expanded);
      									const menu = item.nextElementSibling;
      									menu.hidden = expanded;
      								});
      							});
      						</script>`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.3.5.menubar1.html" className="uk_editor min_height_300" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">서브메뉴가 포함된 menubar 예시</h4>
      				<p className="mt_s">
      					<code>menuitem</code> 내에 또 다른 <code>menuitem</code>과 <code>menu</code>가 포함되어 있는 계층적인 메뉴 구조 형태입니다.
      					각 서브메뉴는 상위 메뉴와 연결되어 있으며, 클릭 시 확장/축소됩니다.
      				</p>
      				
      <CodeBlock title="서브메뉴가 포함된 menubar" language="javascript" className="uk_gist_code_box mt_m">
      {`<nav role="menubar">
      							<div role="menuitem" aria-haspopup="true" aria-expanded="false" tabindex="0">File</div>
      							<div role="menu" hidden>
      								<div role="menuitem" aria-haspopup="true" aria-expanded="false" tabindex="-1">New</div>
      								<div role="menu" hidden>
      									<div role="menuitem" tabindex="-1">Project</div>
      									<div role="menuitem" tabindex="-1">File</div>
      								</div>
      								<div role="menuitem" tabindex="-1">Open</div>
      								<div role="menuitem" tabindex="-1">Save</div>
      							</div>
      							<div role="menuitem" aria-haspopup="true" aria-expanded="false" tabindex="0">Edit</div>
      							<div role="menu" hidden>
      								<div role="menuitem" tabindex="-1">Cut</div>
      								<div role="menuitem" tabindex="-1">Copy</div>
      								<div role="menuitem" tabindex="-1">Paste</div>
      							</div>
      						</nav>

      						<script>
      							const menubarItems = document.querySelectorAll('[role="menuitem"]');

      							menubarItems.forEach(item => {
      								item.addEventListener('click', () => {
      									const expanded = item.getAttribute('aria-expanded') === 'true';
      									item.setAttribute('aria-expanded', !expanded);
      									const menu = item.nextElementSibling;
      									menu.hidden = expanded;
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">키보드 내비게이션을 지원하는 menubar 예시</h4>
      				<p className="mt_s">
      					키보드 내비게이션을 지원하는 <code>menubar</code> 에시입니다.
      					사용자는 <i className="key_arrow_right">ArrowRight</i> 및
      					<i className="key_arrow_left">ArrowLeft</i> 키로 메뉴 항목 간을 이동할 수 있으며,
      					현재 포커스된 항목이 명확하게 표시됩니다.<br />
      					또한,
      					<i className="key_enter">Enter</i> 또는 <i className="key_space">Space</i> 키를 사용해
      					메뉴를 확장하거나 동작을 트리거할 수 있습니다.
      				</p>
      				
      <CodeBlock title="키보드 내비게이션을 지원하는 menubar" language="javascript" className="uk_gist_code_box mt_m">
      {`<nav role="menubar">
      							<div role="menuitem" tabindex="0">File</div>
      							<div role="menuitem" tabindex="-1">Edit</div>
      							<div role="menuitem" tabindex="-1">View</div>
      						</nav>

      						<script>
      							const menuItems = document.querySelectorAll('[role="menuitem"]');
      							let currentIndex = 0;

      							menuItems[currentIndex].focus();

      							menuItems.forEach((item, index) => {
      								item.addEventListener('keydown', event => {
      									if (event.key === 'ArrowRight') {
      										menuItems[currentIndex].tabIndex = -1;
      										currentIndex = (currentIndex + 1) % menuItems.length;
      										menuItems[currentIndex].tabIndex = 0;
      										menuItems[currentIndex].focus();
      									} else if (event.key === 'ArrowLeft') {
      										menuItems[currentIndex].tabIndex = -1;
      										currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
      										menuItems[currentIndex].tabIndex = 0;
      										menuItems[currentIndex].focus();
      									} else if (event.key === 'Enter' || event.key === ' ') {
      										// Trigger the associated action or expand the menu
      									}
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">radiogroup (라디오 그룹 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>radiogroup</code> 역할은 하나 이상의 라디오 버튼으로 구성된 그룹을 나타냅니다.
      				<code>radiogroup</code> 내의 라디오 버튼은 단일 선택 항목을 제공하며, 사용자는 그룹 내에서 하나의 버튼만 선택할 수 있습니다.<br />
      				이 역할은 라디오 버튼들이 논리적으로 연결되어 있으며, 상호 배타적인 옵션을 제공한다는 점을 보조 기술에 전달합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#radiogroup" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA radiogroup</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA radiogroup</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>radiogroup</code> 역할은 여러 개의 <code>radio</code> 버튼을 그룹화하여 단일 선택 옵션을 제공하는 UI 컴포넌트를 정의합니다.
      				</li>
      				<li>
      					<code>radiogroup</code> 내의 radio 버튼은 <code>aria-checked</code> 속성을 사용하여 현재 선택된 버튼을 표시하며,
      					사용자는 그룹 내에서 하나의 옵션만 선택할 수 있습니다.
      				</li>
      				<li>
      					<code>radiogroup</code>은 <code>aria-labelledby</code> 또는 <code>aria-describedby</code>
      					속성을 사용하여 그룹의 레이블이나 설명을 제공할 수 있습니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>radiogroup</code> 역할을 사용할 때는 각 <code>radio</code> 버튼에 <code>aria-checked</code>
      					속성을 사용하여 선택 상태를 명확히 나타내야 합니다.
      				</li>
      				<li>
      					<code>aria-labelledby</code> 또는 <code>aria-describedby</code> 속성을 사용하여 라디오 그룹의 레이블이나
      					설명을 제공해 보조 기술이 그룹의 목적을 이해할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					키보드 내비게이션을 지원하여 사용자가 라디오 버튼을 쉽게 탐색하고 선택할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					비활성화된 라디오 버튼의 경우, <code>aria-disabled</code> 속성을 사용해 선택할 수 없음을 명확히 표시해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-checked</strong>
      					<p>
      						<code>radio</code> 버튼의 선택 상태를 나타냅니다. 값은 <code>true</code>(선택됨) 또는 <code>false</code>(선택되지 않음)입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						라디오 버튼이 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						라디오 그룹의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 radiogroup 역할 예시</h4>
      				<p className="mt_s">
      					각 라디오 버튼에 <code>aria-checked</code> 속성을 추가하여 현재 선택된 상태를 명확히 나타내야 합니다.
      					<code>aria-labelledby</code> 속성을 사용해 라디오 그룹의 레이블을 참조하며,
      					보조 기술이 이 그룹이 무엇을 나타내는지 이해할 수 있도록 합니다.<br />
      					권장하는 방식은 <code>&lt;fieldset&gt;</code> 및 <code>&lt;input type="radio"&gt;</code> 요소를 사용하여
      					시멘틱하게 라디오 그룹을 구현합니다. <code>&lt;legend&gt;</code> 요소는 그룹의 레이블을 제공하며,
      					<code>&lt;input&gt;</code> 요소는 각각의 라디오 버튼 역할을 합니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 기본 radiogroup" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							이 예시는 radiogroup의 기본 구조를 제공하지만, 각 라디오 버튼에 aria-checked 속성이 없으며,
      							사용자가 선택한 상태를 알 수 없습니다. 또한, 라디오 버튼을 선택할 수 있는 메커니즘이 구현되지 않았습니다.
      						-->
      						<div role="radiogroup">
      							<div role="radio">Option 1</div>
      							<div role="radio">Option 2</div>
      							<div role="radio">Option 3</div>
      						</div>

      						<!-- 올바른 예시 -->
      						<div id="radioGroupLabel">Choose an option:</div>
      						<div role="radiogroup" aria-labelledby="radioGroupLabel">
      							<div role="radio" aria-checked="false" tabindex="0">Option 1</div>
      							<div role="radio" aria-checked="true" tabindex="0">Option 2</div>
      							<div role="radio" aria-checked="false" tabindex="0">Option 3</div>
      						</div>

      						<!-- (권장)시멘틱 요소 사용 -->
      						<fieldset>
      							<legend>Choose an option:</legend>
      							<input type="radio" id="option1" name="options" value="1">
      							<label for="option1">Option 1</label><br>
      							<input type="radio" id="option2" name="options" value="2" checked>
      							<label for="option2">Option 2</label><br>
      							<input type="radio" id="option3" name="options" value="3">
      							<label for="option3">Option 3</label>
      						</fieldset>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 선택이 가능한 radiogroup 예시</h4>
      				<p className="mt_s">
      					<code>aria-checked와</code> <code>role=&quot;radio&quot;</code> 속성을 사용하여 접근성 준수하며,
      					사용자가 라디오 버튼을 클릭하면 해당 그룹에서 다른 라디오 버튼들이 선택 해제되는 예시입니다.
      				</p>
      				<p className="dp_pc full_screen_code_info">(Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.</p>
      				
      <CodeBlock title="동적 선택이 가능한 radiogroup" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="radioGroupLabel">Choose an option:</div>
      						<div role="radiogroup" aria-labelledby="radioGroupLabel">
      							<div role="radio" tabindex="0" aria-checked="false">Option 1</div>
      							<div role="radio" tabindex="0" aria-checked="false">Option 2</div>
      							<div role="radio" tabindex="0" aria-checked="false">Option 3</div>
      						</div>`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.3.6.radiogroup1.html" className="uk_editor min_height_300 mb_result_height_310" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="310px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">키보드 내비게이션을 지원하는 radiogroup 예시</h4>
      				<p className="mt_s">
      					키보드 내비게이션을 지원하는 라디오 그룹 예시입니다.
      					사용자는 화살표 키로 라디오 버튼을 탐색하고,
      					<i className="key_enter">Enter</i> 또는 <i className="key_space">Space</i> 키로 선택할 수 있습니다.
      				</p>
      				
      <CodeBlock title="키보드 내비게이션을 지원하는 radiogroup" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="keyboardRadioGroup">Choose an option:</div>
      						<div role="radiogroup" aria-labelledby="keyboardRadioGroup">
      							<div role="radio" aria-checked="false" tabindex="0">Option 1</div>
      							<div role="radio" aria-checked="true" tabindex="0">Option 2</div>
      							<div role="radio" aria-checked="false" tabindex="0">Option 3</div>
      						</div>

      						<script>
      							const radios = document.querySelectorAll('[role="radio"]');
      							let currentIndex = 1;

      							radios[currentIndex].focus();

      							radios.forEach((radio, index) => {
      								radio.addEventListener('keydown', event => {
      									if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      										radios[currentIndex].setAttribute('aria-checked', 'false');
      										currentIndex = (currentIndex + 1) % radios.length;
      										radios[currentIndex].setAttribute('aria-checked', 'true');
      										radios[currentIndex].focus();
      									} else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      										radios[currentIndex].setAttribute('aria-checked', 'false');
      										currentIndex = (currentIndex - 1 + radios.length) % radios.length;
      										radios[currentIndex].setAttribute('aria-checked', 'true');
      										radios[currentIndex].focus();
      									} else if (event.key === 'Enter' || event.key === ' ') {
      										radios[currentIndex].click();
      									}
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 라디오 그룹 항목 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 비활성화된 라디오 버튼 예시입니다.
      					이 버튼은 선택할 수 없으며, 시각적으로도 비활성화 상태임을 나타냅니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 비활성화된 라디오 그룹" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="disabledRadioGroup">Choose an option:</div>
      						<div role="radiogroup" aria-labelledby="disabledRadioGroup">
      							<div role="radio" aria-checked="false" tabindex="0">Option 1</div>
      							<div role="radio" aria-checked="false" aria-disabled="true" tabindex="-1" style="color: grey;">Option 2 (Disabled)</div>
      							<div role="radio" aria-checked="false" tabindex="0">Option 3</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">tablist (탭 목록 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>tablist</code> 역할은 관련된 여러 개의 tab 요소를 그룹화하여, 사용자가 여러 패널 사이를 전환할 수 있는 탭 인터페이스를 정의합니다.
      				<code>tablist</code>는 일반적으로 <code>tabpanel</code>과 함께 사용되며,
      				사용자가 선택한 탭에 따라 관련된 콘텐츠 패널이 활성화됩니다.<br />
      				<code>tablist</code>는 <code>tab</code> 요소들의 컨테이너 역할을 하며, 탭 간의 내비게이션과 선택을 관리합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#tablist" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA tablist</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA tablist</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>tablist</code> 역할은 여러 개의 <code>tab</code> 요소를 그룹화하여
      					사용자가 탭 인터페이스를 통해 콘텐츠를 전환할 수 있도록 합니다.
      				</li>
      				<li>
      					<code>tablist</code>는 각 <code>tab</code> 요소와 관련된 <code>tabpanel</code>과 함께 사용되며,
      					선택된 탭에 따라 해당 <code>tabpanel</code>이 활성화됩니다.
      				</li>
      				<li>
      					보조 기술은 <code>tablist</code>와 연결된 <code>tab</code> 및 <code>tabpanel</code> 요소를 인식하여 사용자가 현재 어떤 탭을 선택했는지,
      					그리고 관련된 콘텐츠가 무엇인지 알 수 있도록 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>tablist</code> 역할을 사용할 때는 각 탭 요소에 <code>role=&quot;tab&quot;</code>을 지정하고,
      					<code>tabpanel</code>과 연관된 콘텐츠를 <code>aria-controls</code> 속성으로 연결해야 합니다.
      				</li>
      				<li>
      					현재 선택된 탭은 <code>aria-selected=&quot;true&quot;</code>로 표시하고, 다른 탭은 <code>aria-selected=&quot;false&quot;</code>로 표시해야 합니다.
      					선택된 탭은 <code>tabindex=&quot;0&quot;</code>을 가져야 하며, 다른 탭은 <code>tabindex=&quot;-1&quot;</code>을 가져야 합니다.
      				</li>
      				<li>
      					키보드 내비게이션을 지원하여 사용자가 탭을 쉽게 탐색하고 전환할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					비활성화된 탭은 <code>aria-disabled=&quot;true&quot;</code> 속성을 사용해 선택할 수 없도록 해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-controls</strong>
      					<p>
      						각 탭이 제어하는 <code>tabpanel</code>의 <code>ID</code>를 참조합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-selected</strong>
      					<p>
      						현재 탭의 선택 상태를 나타냅니다. 값은 <code>true</code>(선택됨) 또는 <code>false</code>(선택되지 않음)입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						탭이 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						탭 목록의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 tablist 역할 예시</h4>
      				<p className="mt_s">
      					각 <code>tab</code> 요소에 <code>role=&quot;tab&quot;</code>을 추가하여 보조 기술이 이를 인식할 수 있도록 합니다.
      					<code>aria-controls</code> 속성으로 각 탭이 제어하는 <code>tabpanel</code>을 지정하고,
      					<code>aria-selected</code> 속성으로 현재 선택된 탭을 나타냅니다.
      					<code>tablist</code>는 관련된 탭들의 컨테이너 역할을 합니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 기본 tablist" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							이 예시는 tablist의 기본 구조를 제공하지만, 각 탭에 role="tab"이 지정되지 않았으며, 보조 기술이 탭과 콘텐츠 간의 관계를 인식하지 못합니다.
      						-->
      						<div role="tablist">
      							<div>Tab 1</div>
      							<div>Tab 2</div>
      							<div>Tab 3</div>
      						</div>

      						<!-- 올바른 예시 -->
      						<div role="tablist" aria-labelledby="tablistLabel">
      							<div role="tab" id="tab1" aria-controls="panel1" aria-selected="true" tabindex="0">Tab 1</div>
      							<div role="tab" id="tab2" aria-controls="panel2" aria-selected="false" tabindex="-1">Tab 2</div>
      							<div role="tab" id="tab3" aria-controls="panel3" aria-selected="false" tabindex="-1">Tab 3</div>
      						</div>
      						<div id="panel1" role="tabpanel" aria-labelledby="tab1">Content for Tab 1</div>
      						<div id="panel2" role="tabpanel" aria-labelledby="tab2" hidden>Content for Tab 2</div>
      						<div id="panel3" role="tabpanel" aria-labelledby="tab3" hidden>Content for Tab 3</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">키보드 내비게이션을 지원하는 tablist 예시</h4>
      				<p className="mt_s">
      					키보드 내비게이션을 지원하는 <code>tablist</code>를 구현한 예시입니다.
      					사용자는 화살표 키로 탭 간을 탐색할 수 있으며, 선택된 탭에 따라 관련 콘텐츠 패널이 표시됩니다.
      				</p>
      				
      <CodeBlock title="키보드 내비게이션을 지원하는 tablist" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="tablist" aria-labelledby="keyboardTablist">
      							<div role="tab" id="tab1" aria-controls="panel1" aria-selected="true" tabindex="0">Tab 1</div>
      							<div role="tab" id="tab2" aria-controls="panel2" aria-selected="false" tabindex="-1">Tab 2</div>
      							<div role="tab" id="tab3" aria-controls="panel3" aria-selected="false" tabindex="-1">Tab 3</div>
      						</div>
      						<div id="panel1" role="tabpanel" aria-labelledby="tab1">Content for Tab 1</div>
      						<div id="panel2" role="tabpanel" aria-labelledby="tab2" hidden>Content for Tab 2</div>
      						<div id="panel3" role="tabpanel" aria-labelledby="tab3" hidden>Content for Tab 3</div>

      						<script>
      							const tabs = document.querySelectorAll('[role="tab"]');
      							let currentIndex = 0;

      							tabs[currentIndex].focus();

      							tabs.forEach((tab, index) => {
      								tab.addEventListener('keydown', event => {
      									if (event.key === 'ArrowRight') {
      										tabs[currentIndex].setAttribute('tabindex', '-1');
      										tabs[currentIndex].setAttribute('aria-selected', 'false');
      										currentIndex = (currentIndex + 1) % tabs.length;
      										tabs[currentIndex].setAttribute('tabindex', '0');
      										tabs[currentIndex].setAttribute('aria-selected', 'true');
      										tabs[currentIndex].focus();
      										showPanel(tabs[currentIndex]);
      									} else if (event.key === 'ArrowLeft') {
      										tabs[currentIndex].setAttribute('tabindex', '-1');
      										tabs[currentIndex].setAttribute('aria-selected', 'false');
      										currentIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      										tabs[currentIndex].setAttribute('tabindex', '0');
      										tabs[currentIndex].setAttribute('aria-selected', 'true');
      										tabs[currentIndex].focus();
      										showPanel(tabs[currentIndex]);
      									}
      								});
      							});

      							function showPanel(tab) {
      								document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
      									panel.hidden = true;
      								});
      								document.getElementById(tab.getAttribute('aria-controls')).hidden = false;
      							}
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 콘텐츠 전환을 지원하는 tablist 예시</h4>
      				<p className="mt_s">
      					사용자가 탭을 클릭할 때마다 콘텐츠가 동적으로 전환되는 <code>tablist</code> 예시입니다.
      					선택된 탭에 따라 <code>aria-selected</code> 속성이 업데이트되고, 관련된 <code>tabpanel</code>이 표시됩니다.
      				</p>
      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.3.7.tablist1.html" className="uk_editor min_height_300 mb_result_height_300" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="300px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 탭을 포함한 tablist 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 비활성화된 탭을 포함한 <code>tablist</code>를 나타냅니다.
      					비활성화된 탭은 선택할 수 없으며, 시각적으로도 비활성화 상태임을 표시합니다.
      				</p>
      				
      <CodeBlock title="비활성화된 탭을 포함한 tablist" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="tablist">
      							<div role="tab" id="tab1" aria-controls="panel1" aria-selected="true" tabindex="0">Tab 1</div>
      							<div role="tab" id="tab2" aria-controls="panel2" aria-selected="false" tabindex="-1" aria-disabled="true" style="color: grey;">Tab 2 (Disabled)</div>
      							<div role="tab" id="tab3" aria-controls="panel3" aria-selected="false" tabindex="-1">Tab 3</div>
      						</div>
      						<div id="panel1" role="tabpanel" aria-labelledby="tab1">Content for Tab 1</div>
      						<div id="panel2" role="tabpanel" aria-labelledby="tab2" hidden>Content for Tab 2</div>
      						<div id="panel3" role="tabpanel" aria-labelledby="tab3" hidden>Content for Tab 3</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">tree (트리 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>tree</code> 역할은 계층적 데이터 구조를 표현하는 UI 컴포넌트를 정의합니다.
      				트리 구조는 여러 개의 <code>treeitem</code> 요소로 구성되며, 각 항목은 하위 항목을 포함할 수 있습니다.
      				사용자는 트리 항목을 확장하거나 축소하여 관련된 하위 항목을 표시하거나 숨길 수 있습니다.<br />
      				이 역할은 복잡한 계층적 데이터를 직관적으로 표현하고 탐색할 수 있도록 도와줍니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#tree" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA tree</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA tree</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>tree</code> 역할은 계층적으로 정리된 데이터를 표현하는 UI 컴포넌트를 정의합니다.
      				</li>
      				<li>
      					<code>treeitem</code>은 트리 내의 개별 항목을 나타내며, 각 항목은 하위 항목을 포함할 수 있습니다.
      				</li>
      				<li>
      					<code>tree</code>는 보조 기술이 전체 트리 구조를 이해하고, 사용자가 트리 항목을 탐색하며 상호작용할 수 있도록 지원합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>tree</code> 역할을 사용할 때는 각 트리 항목에 <code>role=&quot;treeitem&quot;</code>을 지정하고, 트리 구조를 명확히 표현해야 합니다.
      				</li>
      				<li>
      					트리 항목이 하위 항목을 포함할 경우, <code>role=&quot;group&quot;</code>을 사용하여 하위 항목들을 그룹화하고,
      					<code>aria-expanded</code> 속성을 통해 상위 항목의 확장 상태를 명확히 해야 합니다.
      				</li>
      				<li>
      					키보드 내비게이션을 지원하여 사용자가 트리 항목을 쉽게 탐색하고 상호작용할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					비활성화된 트리 항목은 <code>aria-disabled=&quot;true&quot;</code> 속성을 사용해 선택할 수 없도록 해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-expanded</strong>
      					<p>
      						트리 항목의 하위 항목이 확장되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						트리 항목이 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-selected</strong>
      					<p>
      						트리 항목이 선택되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						트리 항목의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 tree 역할 예시</h4>
      				<p className="mt_s">
      					각 트리 항목에 <code>role=&quot;treeitem&quot;</code>을 추가하고,
      					보조 기술이 트리 항목의 확장 상태를 인식할 수 있도록 <code>aria-expanded</code> 속성을 설정합니다.
      					사용자가 키보드를 사용해 트리 항목을 탐색할 수 있도록 <code>tabindex</code> 속성도 설정되어야 합니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 기본 tree" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							이 예시는 tree의 기본 구조를 제공하지만, 트리 항목에 role="treeitem"이 지정되지 않았으며, 보조 기술이 트리 구조를 인식하지 못합니다.
      						-->
      						<div role="tree">
      							<div>Item 1</div>
      							<div>Item 2</div>
      							<div>Item 3</div>
      						</div>

      						<!-- 올바른 예시 -->
      						<div role="tree">
      							<div role="treeitem" aria-expanded="false" tabindex="0">Item 1</div>
      							<div role="treeitem" aria-expanded="false" tabindex="-1">Item 2</div>
      							<div role="treeitem" aria-expanded="false" tabindex="-1">Item 3</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하위 항목을 포함한 tree 예시</h4>
      				<p className="mt_s">
      					트리 항목이 하위 항목을 포함하는 트리 구조입니다.
      					<code>role=&quot;group&quot;</code>은 하위 항목을 그룹화하는 역할을 하며,
      					<code>aria-expanded=&quot;true&quot;</code>로 설정된 상위 항목은 기본적으로 확장된 상태로 표시됩니다.
      				</p>
      				
      <CodeBlock title="하위 항목을 포함한 tree" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="tree">
      							<div role="treeitem" aria-expanded="true" tabindex="0">
      								Item 1
      								<div role="group">
      									<div role="treeitem" tabindex="-1">Sub-item 1.1</div>
      									<div role="treeitem" tabindex="-1">Sub-item 1.2</div>
      								</div>
      							</div>
      							<div role="treeitem" aria-expanded="false" tabindex="-1">Item 2</div>
      							<div role="treeitem" aria-expanded="false" tabindex="-1">Item 3</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">키보드 내비게이션을 지원하는 tree 예시</h4>
      				<p className="mt_s">
      					키보드 내비게이션을 지원하는 트리 구조입니다.
      					사용자는 <i className="key_arrow_right">ArrowRight</i> 및 <i className="key_arrow_left">ArrowLeft</i>
      					키를 사용해 트리 항목을 확장하거나 축소할 수 있으며,
      					<i className="key_arrow_down">ArrowDown</i> 및 <i className="key_arrow_up">ArrowUp</i> 키를 사용해 트리 항목 간을 탐색할 수 있습니다.
      				</p>
      				
      <CodeBlock title="키보드 내비게이션을 지원하는 tree" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="tree">
      							<div role="treeitem" aria-expanded="true" tabindex="0">
      								Item 1
      								<div role="group">
      									<div role="treeitem" tabindex="-1">Sub-item 1.1</div>
      									<div role="treeitem" tabindex="-1">Sub-item 1.2</div>
      								</div>
      							</div>
      							<div role="treeitem" aria-expanded="false" tabindex="-1">Item 2</div>
      							<div role="treeitem" aria-expanded="false" tabindex="-1">Item 3</div>
      						</div>

      						<script>
      							const treeItems = document.querySelectorAll('[role="treeitem"]');

      							treeItems.forEach(item => {
      								item.addEventListener('keydown', event => {
      									if (event.key === 'ArrowRight' && item.getAttribute('aria-expanded') === 'false') {
      										item.setAttribute('aria-expanded', 'true');
      										const group = item.querySelector('[role="group"]');
      										if (group) group.hidden = false;
      									} else if (event.key === 'ArrowLeft' && item.getAttribute('aria-expanded') === 'true') {
      										item.setAttribute('aria-expanded', 'false');
      										const group = item.querySelector('[role="group"]');
      										if (group) group.hidden = true;
      									} else if (event.key === 'ArrowDown') {
      										const nextItem = item.nextElementSibling;
      										if (nextItem) nextItem.focus();
      									} else if (event.key === 'ArrowUp') {
      										const prevItem = item.previousElementSibling;
      										if (prevItem) prevItem.focus();
      									}
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 tree 항목 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 비활성화된 트리 항목을 나타냅니다.
      					이 항목은 포커스를 받을 수 없으며, 시각적으로도 비활성화 상태임을 나타냅니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 비활성화된 tree" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="tree">
      							<div role="treeitem" aria-expanded="false" tabindex="0">Item 1</div>
      							<div role="treeitem" aria-expanded="false" tabindex="-1" aria-disabled="true" style="color: grey;">Item 2 (Disabled)</div>
      							<div role="treeitem" aria-expanded="false" tabindex="-1">Item 3</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">treegrid (트리 그리드 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>treegrid</code> 역할은 트리 구조와 그리드 구조를 결합한 복합 UI 컴포넌트를 정의합니다.
      				<code>treegrid</code>는 계층적 데이터를 행과 열로 구성된 그리드 형식으로 표현하며, 각 행은 하위 항목을 포함할 수 있습니다.
      				사용자는 트리 항목을 확장하거나 축소하여 관련 데이터를 탐색할 수 있으며, 그리드의 행과 열 사이를 탐색할 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#treegrid" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA treegrid</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA treegrid</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>treegrid</code> 역할은 그리드와 트리 구조를 결합한 UI 컴포넌트를 정의합니다.
      					이는 트리 구조를 그리드 형식으로 표현하며, 각 행은 하위 항목을 포함할 수 있습니다.
      				</li>
      				<li>
      					<code>treegrid</code>는 <code>row</code>, <code>gridcell</code>, <code>treeitem</code>과 같은 요소로 구성되며,
      					사용자는 계층적 데이터를 탐색하면서 그리드의 개별 셀과 상호작용할 수 있습니다.
      				</li>
      				<li>
      					이 역할은 복잡한 계층적 데이터를 직관적으로 표현하고 상호작용할 수 있는 강력한 구조를 제공합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>treegrid</code> 역할을 사용할 때는 각 행에 <code>role=&quot;row&quot;</code>를 지정하고,
      					그리드 셀에는 <code>role=&quot;gridcell&quot;</code>을 지정하여 그리드의 구조를 명확히 표현해야 합니다.
      				</li>
      				<li>
      					트리 구조의 확장 상태를 관리하기 위해 <code>aria-expanded</code> 속성을 사용하고,
      					하위 항목을 포함할 경우 <code>role=&quot;rowgroup&quot;</code>을 사용해 그룹화해야 합니다.
      				</li>
      				<li>
      					키보드 내비게이션을 지원하여 사용자가 트리 그리드를 쉽게 탐색하고 상호작용할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					비활성화된 항목은 <code>aria-disabled=&quot;true&quot;</code> 속성을 사용해 명확히 표시해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-expanded</strong>
      					<p>
      						트리 그리드 항목의 하위 항목이 확장되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						트리 그리드 항목이 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-selected</strong>
      					<p>
      						트리 그리드 항목이 선택되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						트리 그리드의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 treegrid 역할 예시</h4>
      				<p className="mt_s">
      					<code>treegrid</code>의 기본 구조를 정의합니다.
      					<code>row</code> 요소는 그리드의 각 행을 나타내고, <code>gridcell</code> 요소는 각 셀을 나타냅니다.
      					상위 폴더(Folder 1)는 확장된 상태(<code>aria-expanded=&quot;true&quot;</code>)로 표시되며,
      					하위 항목(Sub-folder 1, Sub-folder 2)을 포함합니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 기본 treegrid" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							이 예시는 treegrid의 기본 구조를 제공하지만, 트리 항목과 그리드 셀에 적절한 역할이 지정되지 않았습니다.
      							보조 기술은 데이터의 계층적 구조와 그리드 형식을 인식하지 못합니다.
      						-->
      						<div role="treegrid">
      							<div>Item 1</div>
      							<div>Item 2</div>
      							<div>Item 3</div>
      						</div>

      						<!-- 올바른 예시 -->
      						<div role="treegrid" aria-label="File Explorer">
      							<div role="row" aria-expanded="true" tabindex="0">
      								<div role="gridcell">Folder 1</div>
      								<div role="gridcell">3 items</div>
      								<div role="gridcell">Jan 1, 2024</div>
      							</div>
      							<div role="rowgroup">
      								<div role="row" tabindex="-1">
      									<div role="gridcell" style="padding-left: 20px;">Sub-folder 1</div>
      									<div role="gridcell">2 items</div>
      									<div role="gridcell">Jan 2, 2024</div>
      								</div>
      								<div role="row" tabindex="-1">
      									<div role="gridcell" style="padding-left: 20px;">Sub-folder 2</div>
      									<div role="gridcell">1 item</div>
      									<div role="gridcell">Jan 3, 2024</div>
      								</div>
      							</div>
      							<div role="row" aria-expanded="false" tabindex="-1">
      								<div role="gridcell">Folder 2</div>
      								<div role="gridcell">5 items</div>
      								<div role="gridcell">Feb 1, 2024</div>
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 확장/축소 가능한 treegrid 예시</h4>
      				<p className="mt_s">
      					<code>treegrid</code> 항목을 동적으로 확장하거나 축소할 수 있는 기능을 구현한 예시입니다.
      					사용자가 상위 폴더를 클릭하면 하위 항목이 표시되거나 숨겨집니다. 이와 같은 구조는 <code>aria-expanded</code> 속성에 따라 동적으로 업데이트됩니다.
      				</p>
      				
      <CodeBlock title="동적 확장/축소 가능한 treegrid" language="javascript" className="uk_gist_code_box mt_m">
      {`000000000`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.3.9.treegrid1.html" className="uk_editor min_height_400 mb_result_height_400" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="400px" mbResultHeight="400px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">키보드 내비게이션을 지원하는 treegrid 예시</h4>
      				<p className="mt_s">
      					키보드 내비게이션을 지원하는 <code>treegrid</code> 예시입니다.
      					사용자는 <i className="key_arrow_right">ArrowRight</i> 및 <i className="key_arrow_left">ArrowLeft</i> 키를 사용하여 항목을 확장하거나 축소할 수 있으며,
      					<i className="key_arrow_down">ArrowDown</i> 및 <i className="key_arrow_up">ArrowUp</i> 키를 사용해 행 간을 탐색할 수 있습니다.
      				</p>
      				
      <CodeBlock title="키보드 내비게이션을 지원하는 treegrid" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="treegrid" aria-label="File Explorer">
      							<div role="row" aria-expanded="true" tabindex="0">
      								<div role="gridcell">Folder 1</div>
      								<div role="gridcell">3 items</div>
      								<div role="gridcell">Jan 1, 2024</div>
      							</div>
      							<div role="rowgroup">
      								<div role="row" tabindex="-1">
      									<div role="gridcell" style="padding-left: 20px;">Sub-folder 1</div>
      									<div role="gridcell">2 items</div>
      									<div role="gridcell">Jan 2, 2024</div>
      								</div>
      								<div role="row" tabindex="-1">
      									<div role="gridcell" style="padding-left: 20px;">Sub-folder 2</div>
      									<div role="gridcell">1 item</div>
      									<div role="gridcell">Jan 3, 2024</div>
      								</div>
      							</div>
      							<div role="row" aria-expanded="false" tabindex="-1">
      								<div role="gridcell">Folder 2</div>
      								<div role="gridcell">5 items</div>
      								<div role="gridcell">Feb 1, 2024</div>
      							</div>
      						</div>

      						<script>
      							const rows = document.querySelectorAll('[role="row"]');

      							rows.forEach(row => {
      								row.addEventListener('keydown', event => {
      									if (event.key === 'ArrowRight' && row.getAttribute('aria-expanded') === 'false') {
      										row.setAttribute('aria-expanded', 'true');
      										const group = row.nextElementSibling;
      										if (group && group.getAttribute('role') === 'rowgroup') {
      											group.hidden = false;
      										}
      									} else if (event.key === 'ArrowLeft' && row.getAttribute('aria-expanded') === 'true') {
      										row.setAttribute('aria-expanded', 'false');
      										const group = row.nextElementSibling;
      										if (group && group.getAttribute('role') === 'rowgroup') {
      											group.hidden = true;
      										}
      									} else if (event.key === 'ArrowDown') {
      										const nextRow = row.nextElementSibling;
      										if (nextRow && nextRow.getAttribute('role') === 'row') {
      											nextRow.focus();
      										}
      									} else if (event.key === 'ArrowUp') {
      										const prevRow = row.previousElementSibling;
      										if (prevRow && prevRow.getAttribute('role') === 'row') {
      											prevRow.focus();
      										}
      									}
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 treegrid 항목 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 비활성화된 트리 그리드 항목을 나타냅니다.
      					이 항목은 선택할 수 없으며, 시각적으로도 비활성화 상태임을 표시합니다.
      				</p>
      				
      <CodeBlock title="비활성화된 treegrid" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="treegrid" aria-label="File Explorer">
      							<div role="row" aria-expanded="false" tabindex="0">
      								<div role="gridcell">Folder 1</div>
      								<div role="gridcell">3 items</div>
      								<div role="gridcell">Jan 1, 2024</div>
      							</div>
      							<div role="row" aria-expanded="false" aria-disabled="true" tabindex="-1" style="color: grey;">
      								<div role="gridcell">Folder 2 (Disabled)</div>
      								<div role="gridcell">5 items</div>
      								<div role="gridcell">Feb 1, 2024</div>
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.WAI_ARIA}/02_wai-aria_role_02_02.png`} alt="복합형 위젯 역할(Composite Widget Roles)" />
      		<figcaption>
      			<b>[복합형 위젯 역할(Composite Widget Roles)]</b><br />
      			<a href={`${IMG.WAI_ARIA}/02_wai-aria_role_02_02.png`} className="mt_ms box_link" title="새창 열림" target="_blank" rel="noreferrer">크게 보기</a>
      		</figcaption>
      	</figure>


      <footer className="reference_box">
      	<strong className="tit">복합형 위젯 역할(Composite Widget Roles) | WAI-ARIA 역할 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.1/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Accessible Rich Internet Applications (WAI-ARIA) 1.1</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.2/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Accessible Rich Internet Applications (WAI-ARIA) 1.2</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.3/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Accessible Rich Internet Applications (WAI-ARIA) 1.3</a></li>
      		<li className="reference"><a href="https://w3c.github.io/aria/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Editor’s Draft - Accessible Rich Internet Applications (WAI-ARIA) 1.3</a></li>
      		<li className="reference"><a href="https://wicg.github.io/aom/explainer.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">Accessibility Object Model</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.1/img/rdf_model.svg" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Class diagram of the relationships described in the role data model.</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Guides" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN ARIA guides</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default RolesWidgetCompositePage
