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
  title: "독립형 위젯 역할(Standalone Widget Roles) | WAI-ARIA 역할",
  description: "WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)의 역할(Role)은 웹 콘텐츠와 웹 애플리케이션의 접근성을 향상시키기 위해 사용되는 속성입니다. 이 페이지에서는 WAI-ARIA의 역할 중 독립형 위젯 역할(Standalone Widget Roles)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function RolesWidgetStandalonePage() {
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
      				독립형 위젯 역할(Standalone Widget Roles)은 단일 UI 요소로서 작동하며,
      				사용자가 직접 상호작용할 수 있는 개별적인 요소를 의미합니다.
      			</b>
      		</p>
      	</blockquote>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">button (버튼 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				사용자가 클릭하여 특정 동작을 수행할 수 있는 UI 요소입니다.<br />
      				<code>button</code> 역할은 웹 페이지에서 다양한 형태로 사용될 수 있으며, 각 상황에 맞게 구현 방식이 다를 수 있습니다.
      				중요한 것은 각 버튼의 역할을 명확히 하여 접근성을 보장하고,
      				<b>aria 속성</b>을 사용하여 보조 기술이 버튼의 상태와 기능을 올바르게 이해할 수 있도록 돕는 것입니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#button" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA button</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA button</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>button</code> 역할은 사용자가 클릭하여 특정 작업을 수행할 수 있는 요소를 정의합니다.
      				</li>
      				<li>
      					HTML의 <code>&lt;button&gt;</code> 요소는 기본적으로 <code>button</code> 역할을 가지며,
      					접근성 및 사용자 경험 측면에서 매우 중요합니다.
      				</li>
      				<li>
      					버튼은 텍스트, 이미지, 또는 다른 콘텐츠를 포함할 수 있으며,
      					보조 기술에서 이 버튼의 기능을 인식할 수 있도록 접근성 속성을 설정할 수 있습니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					버튼을 클릭하거나 키보드를 통해 활성화할 수 있도록,
      					<code>button</code> 역할을 가지는 요소는 <code>tabindex=&quot;0&quot;</code>을 사용하여 키보드 접근성을 보장해야 합니다.
      				</li>
      				<li>
      					<code>button</code> 역할을 명시적으로 설정할 때는, 보조 기술이 이 요소를 버튼으로 인식하도록 해야 합니다.
      				</li>
      				<li>
      					토글 버튼이나 확장/축소 버튼과 같은 동적인 버튼의 경우,
      					<code>aria-pressed</code> 또는 <code>aria-expanded</code> 속성을 사용하여 상태를 명확히 전달해야 합니다.
      				</li>
      				<li>
      					비활성화된 버튼은 <code>disabled</code> 속성을 사용하여 보조 기술에 의해 인식되도록 해야 하며,
      					시각적으로도 비활성화 상태를 명확히 나타내야 합니다.
      				</li>
      				<li>
      					버튼 내에서 이미지, 아이콘 등을 사용할 경우, 반드시 <code>alt</code> 속성이나 다른 접근성 속성을 통해 버튼의 기능을 설명해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-pressed</strong>
      					<p>
      						버튼의 토글 상태를 나타냅니다. 가능한 값은 <code>true</code>, <code>false</code>, <code>mixed</code>입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-expanded</strong>
      					<p>
      						버튼이 제어하는 콘텐츠의 확장 상태를 나타냅니다. 가능한 값은 <code>true</code> 또는 <code>false</code>입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						버튼이 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>-labelledby, aria-describedby</strong>
      					<p>
      						버튼의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 버튼 예시</h4>
      				<p className="mt_s">
      					가장 일반적인 버튼으로, 사용자가 클릭하여 특정 동작을 수행할 수 있습니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 기본 버튼" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							<div> 요소는 본래 버튼 역할을 하지 않으므로, 키보드 접근성이 부족할 수 있습니다.
      							이 경우 tabindex와 aria-pressed 같은 추가적인 속성이 필요
      						-->
      						<div role="button">저장</div>

      						<!-- 올바른 예시 -->
      						<div role="button" tabindex="0" aria-pressed="false">저장</div>

      						<!-- (권장)시멘틱 요소 예시 -->
      						<button type="button">저장</button>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">링크로 구현된 버튼 예시</h4>
      				<p className="mt_s">
      					<code>&lt;a&gt;</code> 태그를 버튼처럼 스타일링하여 사용한 예시입니다.
      					<code>role=&quot;button&quot;</code>을 추가하여 보조 기술이 이를 버튼으로 인식하게 하고,
      					키보드 탐색을 위한 <code>tabindex</code>와 클릭 이벤트 핸들러를 추가해야 합니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 링크로 구현된 버튼" language="javascript" className="uk_gist_code_box mt_m">
      {`<a href="submit-form" role="button" class="btn">Submit</a>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">이미지를 포함한 버튼 예시</h4>
      				<p className="mt_s">
      					버튼 내에 이미지를 포함하여 시각적인 단서를 제공하는 방법입니다.
      					이미지에는 <code>alt</code> 텍스트를 제공하여, 보조 기술 사용자에게 버튼의 기능을 설명할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 이미지를 포함한 버튼" language="javascript" className="uk_gist_code_box mt_m">
      {`<button>
      							<img src="submit-icon.png" alt="Submit">
      						</button>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 버튼 예시</h4>
      				<p className="mt_s">
      					<code>disabled</code> 속성을 사용하여 버튼을 비활성화할 수 있습니다.
      					이 경우, 버튼은 클릭할 수 없으며, 보조 기술은 버튼이 비활성화된 상태임을 인식합니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 비활성화된 버튼" language="javascript" className="uk_gist_code_box mt_m">
      {`<button disabled>Submit</button>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">토글 버튼 예시</h4>
      				<p className="mt_s">
      					<code>aria-pressed</code> 속성을 사용하여 버튼의 토글 상태를 나타냅니다.
      					이 버튼은 사용자가 클릭할 때마다 상태가 바뀌며, 보조 기술은 이 변화를 인식할 수 있습니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 토글 버튼" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-pressed="false" onclick="toggleButton(this)">Toggle</button>

      						<script>
      							function toggleButton(button) {
      								const isPressed = button.getAttribute('aria-pressed') === 'true';
      								button.setAttribute('aria-pressed', !isPressed);
      							}
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">확장/축소 버튼 예시</h4>
      				<p className="mt_s">
      					<code>aria-expanded</code>와 <code>aria-controls</code> 속성을 사용하여 버튼이 제어하는 콘텐츠의 확장/축소 상태를 명확하게 나타냅니다.
      				</p>
      				
      <CodeBlock title="복합형 위젯 역할(WAI-ARIA) / 확장/축소 버튼" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-expanded="false" aria-controls="details" onclick="toggleDetails(this)">
      							Show Details
      						</button>
      						<div id="details" style="display:none;">
      							More details here...
      						</div>

      						<script>
      							function toggleDetails(button) {
      								const expanded = button.getAttribute('aria-expanded') === 'true';
      								button.setAttribute('aria-expanded', !expanded);
      								document.getElementById(button.getAttribute('aria-controls')).style.display = expanded ? 'none' : 'block';
      							}
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">커스텀 스타일 버튼 예시</h4>
      				<p className="mt_s">
      					다양한 CSS 스타일링을 적용한 커스텀 버튼으로, 외관을 다양하게 변경할 수 있습니다.
      				</p>
      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.2.1.button1.html" className="uk_editor min_height_500 mb_result_height_500" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="500px" mbResultHeight="500px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">상태가 있는 아코디언 버튼 예시</h4>
      				<p className="mt_s">
      					아코디언 UI를 구현하는 버튼입니다. 아코디언 패널을 열거나 닫을 때 버튼 상태를 <code>aria-expanded</code> 속성으로 표시합니다.
      				</p>
      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.2.1.button2.html" className="uk_editor min_height_300 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="200px" />
      </Suspense>
      </div>
      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">checkbox (체크박스 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>checkbox</code> 역할은 사용자가 선택하거나 선택 해제할 수 있는 옵션을 나타냅니다.
      				일반적으로 단일 선택이 가능하며, 하나의 체크박스는 독립적인 상태를 가질 수 있습니다.
      				웹 접근성을 위해 <code>aria-checked</code> 속성을 사용하여 체크박스의 상태를 나타내며,
      				<code>mixed</code> 상태도 지원됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#checkbox" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA checkbox</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA checkbox</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>checkbox</code> 역할은 사용자가 선택하거나 선택 해제할 수 있는 항목을 정의합니다.
      				</li>
      				<li>
      					체크박스의 상태는 <code>aria-checked</code> 속성을 통해 표현되며,
      					상태는 <code>true</code>(선택됨), <code>false</code>(선택되지 않음), <code>mixed</code>(혼합 상태) 중 하나입니다.
      				</li>
      				<li>
      					<code>checkbox</code>는 단일 체크박스 또는 여러 체크박스로 구성된 그룹으로 사용될 수 있습니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>checkbox</code> 역할을 사용할 때는 항상 <code>aria-checked</code> 속성을 사용하여 체크박스의 상태를 명확히 나타내야 합니다.
      					가능한 값은 <code>true</code>(선택됨), <code>false</code>(선택되지 않음), <code>mixed</code>(혼합 상태)입니다.
      				</li>
      				<li>
      					비활성화된 체크박스는 <code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 표시할 수 있으며,
      					키보드 탐색에서 제외하려면 <code>tabindex=&quot;-1&quot;</code>을 설정할 수 있습니다.
      				</li>
      				<li>
      					비활성화된 항목은 <code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 표시할 수 있으며,
      					키보드 탐색에서 제외하려면 <code>tabindex=&quot;-1&quot;</code>을 설정할 수 있습니다.
      				</li>
      				<li>
      					사용자가 키보드를 사용하여 체크박스를 탐색하고 선택할 수 있도록,
      					<code>tabindex</code> 속성을 적절히 설정해야 합니다.
      				</li>
      				<li>
      					<code>role=&quot;group&quot;</code>을 사용하여 여러 체크박스를 논리적으로 그룹화할 수 있습니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-checked</strong>
      					<p>
      						체크박스의 선택 상태를 나타냅니다. 가능한 값은 <code>true</code>, <code>false</code>, <code>mixed</code>입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						체크박스가 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						체크박스의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 checkbox 역할 예시</h4>
      				<p className="mt_s">
      					<code>checkbox</code> 요소는 <code>aria-checked</code> 속성을 사용하여 선택 상태를 나타내며,
      					<code>tabindex=&quot;0&quot;</code>을 설정하여 키보드 탐색이 가능하게 해야 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 checkbox 역할" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 - 체크 상태를 나타내는 aria-checked 속성이 필요. 키보드 접근성을 위해 tabindex가 필요 -->
      						<div role="checkbox">I agree to the terms and conditions</div>

      						<!-- 올바른 예시 -->
      						<div role="checkbox" aria-checked="false" tabindex="0" onclick="toggleCheckbox(this)">
      							I agree to the terms and conditions
      						</div>

      						<script>
      							function toggleCheckbox(checkbox) {
      								const isChecked = checkbox.getAttribute('aria-checked') === 'true';
      								checkbox.setAttribute('aria-checked', !isChecked);
      							}
      						</script>

      						<!-- (권장)시멘틱 요소 사용 -->
      						<input type="checkbox" id="terms">
      						<label for="terms">I agree to the terms and conditions</label>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">혼합 상태 checkbox 예시</h4>
      				<p className="mt_s">
      					체크박스가 <code>mixed</code> 상태를 가질 수 있도록 설정되었습니다.
      					혼합 상태는 일부 항목이 선택된 경우를 나타내며, 클릭 시 상태가 변경됩니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 혼합 상태 checkbox" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="checkbox" aria-checked="mixed" tabindex="0" onclick="toggleCheckbox(this)">
      							Select All (Some items selected)
      						</div>

      						<script>
      							function toggleCheckbox(checkbox) {
      								const currentState = checkbox.getAttribute('aria-checked');
      								const newState = currentState === 'mixed' ? 'true' : (currentState === 'true' ? 'false' : 'mixed');
      								checkbox.setAttribute('aria-checked', newState);
      							}
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 checkbox 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 체크박스가 비활성화되었음을 나타내고 있으며,
      					키보드 탐색에서 제외하기 위해 <code>tabindex=&quot;-1&quot;</code>로 설정되었습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 비활성화된 checkbox" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="checkbox" aria-checked="false" aria-disabled="true" tabindex="-1">
      							이용 약관에 동의합니다.
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">그룹화된 체크박스 예시</h4>
      				<p className="mt_s">
      					<code>role=&quot;group&quot;</code> 속성을 사용하여 여러 체크박스를 하나의 그룹으로 묶었습니다. 각각의 체크박스는 독립적으로 선택될 수 있습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 그룹화된 체크박스" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="group" aria-labelledby="group-label">
      							<span id="group-label">Choose your preferences:</span>
      							<div role="checkbox" aria-checked="false" tabindex="0" onclick="toggleCheckbox(this)">Option 1</div>
      							<div role="checkbox" aria-checked="true" tabindex="0" onclick="toggleCheckbox(this)">Option 2</div>
      							<div role="checkbox" aria-checked="false" tabindex="0" onclick="toggleCheckbox(this)">Option 3</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">radio (라디오 버튼 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>radio</code> 역할은 사용자가 상호 배타적인 옵션 중 하나를 선택할 수 있는 라디오 버튼을 나타냅니다.
      				여러 개의 <code>radio</code> 요소가 <code>radiogroup</code> 안에 포함되며,
      				사용자는 한 번에 하나의 <code>radio</code>만 선택할 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#radio" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA radio</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA radio</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>radio</code> 역할은 사용자가 여러 옵션 중 하나를 선택할 수 있는 라디오 버튼을 정의합니다.
      				</li>
      				<li>
      					<code>radio</code> 요소는 반드시 <code>radiogroup</code> 역할을 가진 컨테이너 안에 포함되어야 합니다.
      				</li>
      				<li>
      					선택된 상태는 <code>aria-checked</code> 속성을 통해 나타내며,
      					키보드 탐색과 선택이 가능하도록 <code>tabindex</code> 속성을 적절히 설정해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>radio</code> 역할은 반드시 <code>radiogroup</code> 역할을 가진 요소 안에 있어야 합니다.
      				</li>
      				<li>
      					각 <code>radio</code> 요소는 선택 상태를 나타내기 위해 <code>aria-checked</code> 속성을 사용해야 합니다.
      					값은 <code>true</code>(선택됨) 또는 <code>false</code>(선택되지 않음) 중 하나입니다.
      				</li>
      				<li>
      					비활성화된 항목은 <code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 표시할 수 있으며,
      					키보드 탐색에서 제외하려면 <code>tabindex=&quot;-1&quot;</code>을 설정할 수 있습니다.
      				</li>
      				<li>
      					<code>radiogroup</code> 내에서는 하나의 <code>radio</code>만 <code>aria-checked=&quot;true&quot;</code> 상태여야 합니다.
      				</li>
      				<li>
      					사용자가 키보드를 사용하여 라디오 버튼 그룹을 탐색하고 선택할 수 있어야 하므로,
      					<code>tabindex</code> 속성을 적절히 설정해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-checked</strong>
      					<p>
      						라디오 버튼의 선택 상태를 나타냅니다. 가능한 값은 <code>true</code> 또는 <code>false</code>입니다.
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
      						라디오 버튼의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 radio 역할 예시</h4>
      				<p className="mt_s">
      					각 <code>radio</code> 요소는 <code>radiogroup</code> 역할을 가진 컨테이너(부모요소) 안에 포함되어 있어야 하며,
      					<code>aria-checked</code> 속성을 사용해 현재 선택 상태를 나타내고,
      					각 항목은 <code>tabindex=&quot;0&quot;</code>으로 설정되어 키보드 탐색이 가능하게 해야 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 radio 역할" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 - 단독으로 사용할 수 없음. 선택 상태를 나타내는 aria-checked 속성 누락 -->
      						<div role="radio">Option 1</div>

      						<!-- 올바른 예시 -->
      						<div role="radiogroup" aria-labelledby="group-label">
      							<span id="group-label">Choose an option:</span>
      							<div role="radio" aria-checked="true" tabindex="0">Option 1</div>
      							<div role="radio" aria-checked="false" tabindex="0">Option 2</div>
      							<div role="radio" aria-checked="false" tabindex="0">Option 3</div>
      						</div>

      						<!-- (권장)시멘틱 요소 사용 - 시멘틱하게 구성된 라디오 버튼 그룹으로, <input type="radio">와 <label>을 사용해 라디오 버튼을 제공 -->
      						<fieldset>
      							<legend>Choose an option:</legend>
      							<input type="radio" id="option1" name="options" checked>
      							<label for="option1">Option 1</label><br>
      							<input type="radio" id="option2" name="options">
      							<label for="option2">Option 2</label><br>
      							<input type="radio" id="option3" name="options">
      							<label for="option3">Option 3</label>
      						</fieldset>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 상태 변경을 고려한 radio 예시</h4>
      				<p className="mt_s">
      					사용자가 클릭할 때마다 <code>aria-checked</code> 속성이 업데이트되어 라디오 버튼의 선택 상태가 변경됩니다.
      					선택된 항목만이 <code>aria-checked=&quot;true&quot;</code> 상태가 되며, 다른 항목의 선택이 해제됩니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 동적 상태 변경을 고려한 radio" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="radiogroup" aria-labelledby="group-label">
      							<span id="group-label">Choose an option:</span>
      							<div role="radio" aria-checked="true" tabindex="0" onclick="selectRadio(this)">Option 1</div>
      							<div role="radio" aria-checked="false" tabindex="0" onclick="selectRadio(this)">Option 2</div>
      							<div role="radio" aria-checked="false" tabindex="0" onclick="selectRadio(this)">Option 3</div>
      						</div>

      						<script>
      							function selectRadio(selectedRadio) {
      								const radios = document.querySelectorAll('[role="radiogroup"] [role="radio"]');
      								radios.forEach(radio => {
      									radio.setAttribute('aria-checked', 'false');
      									radio.setAttribute('tabindex', '-1');
      								});
      								selectedRadio.setAttribute('aria-checked', 'true');
      								selectedRadio.setAttribute('tabindex', '0');
      								selectedRadio.focus();
      							}
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 radio 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 두 번째 라디오 버튼이 비활성화되었음을 나타내고 있으며,
      					이 항목은 키보드 탐색에서 제외되도록 <code>tabindex=&quot;-1&quot;</code>로 설정되었습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 비활성화된 radio" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="radiogroup" aria-labelledby="group-label">
      							<span id="group-label">Choose an option:</span>
      							<div role="radio" aria-checked="true" tabindex="0">Option 1</div>
      							<div role="radio" aria-checked="false" aria-disabled="true" tabindex="-1">Option 2 (Disabled)</div>
      							<div role="radio" aria-checked="false" tabindex="0">Option 3</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">gridcell (그리드 셀 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>gridcell</code> 역할은 그리드나 테이블 내 개별 셀을 나타내는 데 사용됩니다.
      				이 역할은 표 형식 데이터를 구조화해 사용자가 셀의 데이터를 쉽게 탐색하고 접근할 수 있도록 도와줍니다.<br />
      				그러나 일부 보조 기술에서는 특정 관련 <b>ARIA 역할 및 속성</b>에 대한 지원이 부족할 수 있으므로,
      				가능한 경우 HTML의 기본 테이블 마크업을 사용하는 것이 좋습니다.
      			</p>

      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#gridcell" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA gridcell</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA gridcell</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>gridcell</code>은 그리드의 한 칸 또는 테이블 셀에 해당하는 역할입니다.
      				</li>
      				<li>
      					<code>gridcell</code>은 보통 <code>grid</code>, <code>row</code>, <code>rowgroup</code>과 함께 사용됩니다.
      				</li>
      				<li>
      					사용자는 키보드를 통해 <code>gridcell</code> 사이를 탐색할 수 있으며,
      					이때 보조 기술이 셀의 상태(예: 선택됨, 비활성화됨 등)를 올바르게 읽을 수 있습니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>gridcell</code>은 항상 <code>row</code> 역할을 가진 요소 내에 있어야 하며,
      					<code>row</code>는 <code>grid</code> 역할을 가진 요소 내에 있어야 합니다.
      				</li>
      				<li>
      					<code>aria-selected</code> 속성을 사용하여 셀의 선택 여부를 나타낼 수 있습니다.
      					사용자가 셀을 클릭하거나 선택했을 때 보조 기술이 이 상태를 정확히 인식할 수 있도록 합니다.
      				</li>
      				<li>
      					키보드 탐색을 고려하여 <code>tabindex</code> 속성을 적절하게 설정해야 합니다.
      					<code>tabindex=&quot;0&quot;</code>을 사용하여 포커스를 받을 수 있도록 하거나,
      					<code>tabindex=&quot;-1&quot;</code>을 사용하여 포커스를 제거할 수 있습니다.
      				</li>
      				<li>
      					<code>aria-rowindex</code>, <code>aria-colindex</code> 속성을 사용하여 그리드 내의 셀의 위치를 명시할 수 있습니다.
      					이는 큰 그리드에서 사용자가 현재 어느 셀에 있는지를 이해하는 데 도움이 됩니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-selected</strong>
      					<p>
      						셀이 현재 선택되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-readonly</strong>
      					<p>
      						셀이 읽기 전용인지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-required</strong>
      					<p>
      						셀이 필수 입력 항목인지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						셀의 레이블 및 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					<code>gridcell</code> 요소는 반드시 <code>row</code> 역할을 가진 컨테이너 내부에 있어야 하며, 단독으로 사용할 수 없습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / gridcell 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="gridcell">Cell Content</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					<code>gridcell</code>은 <code>row</code> 역할을 가진 요소 안에 배치되어 있으며,
      					<code>aria-selected</code> 속성을 사용하여 선택 여부를 나타내고 있습니다.
      					또한, <code>tabindex=&quot;0&quot;</code>을 설정하여 키보드로 포커스를 받을 수 있게 했습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / gridcell 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="row">
      							<div role="gridcell" aria-selected="false" tabindex="0">Cell Content</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장)시멘틱 요소 사용</h4>
      				<p className="mt_s">
      					HTML 표 요소 <code>&lt;td&gt;</code>를 사용하여 시멘틱하게 그리드 셀을 표현할 수 있습니다.
      					이 경우, <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>와 같은 시멘틱 요소들이 함께 사용됩니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / gridcell (권장)시멘틱 요소 사용" language="javascript" className="uk_gist_code_box mt_m">
      {`<tr>
      							<td>Cell Content</td>
      						</tr>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">ARIA 속성을 사용한 복합 그리드 예시</h4>
      				<p className="mt_s">
      					이 예시에서는 <code>aria-rowcount</code>, <code>aria-colcount</code>,
      					<code>aria-rowindex</code>, <code>aria-colindex</code>와 같은 속성을 사용하여
      					그리드의 행과 열을 정의하고, 각 셀이 어떤 위치에 있는지 명시합니다.
      					<code>aria-selected</code> 속성으로 각 셀의 선택 상태를 나타내고 있습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / ARIA 속성을 사용한 복합 그리드 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="grid" aria-rowcount="2" aria-colcount="3">
      							<div role="row" aria-rowindex="1">
      								<div role="gridcell" aria-colindex="1" aria-selected="true" tabindex="0">Row 1, Cell 1</div>
      								<div role="gridcell" aria-colindex="2" aria-selected="false" tabindex="-1">Row 1, Cell 2</div>
      								<div role="gridcell" aria-colindex="3" aria-selected="false" tabindex="-1">Row 1, Cell 3</div>
      							</div>
      							<div role="row" aria-rowindex="2">
      								<div role="gridcell" aria-colindex="1" aria-selected="false" tabindex="-1">Row 2, Cell 1</div>
      								<div role="gridcell" aria-colindex="2" aria-selected="false" tabindex="-1">Row 2, Cell 2</div>
      								<div role="gridcell" aria-colindex="3" aria-selected="true" tabindex="0">Row 2, Cell 3</div>
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">link (링크 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>link</code> 역할은 다른 페이지나 리소스로 연결되는 클릭 가능한 요소를 나타냅니다.
      				일반적으로 <code>&lt;a&gt;</code> 태그로 구현되지만,
      				다른 HTML 요소에 <code>role=&quot;link&quot;</code> 속성을 추가하여 링크로 동작하게 할 수도 있습니다.
      				이 역할은 웹 내비게이션의 핵심 요소로, 사용자에게 페이지 간의 이동 경로를 제공합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#link" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA link</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/link_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA link</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>기본적인 역할</strong>
      					<p>
      						<code>link</code> 역할은 클릭하거나 <i className="key_enter">Enter</i> 키를 눌렀을 때 사용자를 다른 리소스로 이동시킵니다.
      					</p>
      				</li>
      				<li>
      					<strong>보조 기술과의 통합</strong>
      					<p>
      						보조 기술은 <code>link</code> 역할을 인식하여 사용자에게 클릭 가능한 링크가 있다는 것을 알리고, 그 링크가 어디로 이동하는지 알려줍니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>&lt;a&gt;</code> 태그를 사용할 때는 <code>href</code> 속성을 반드시 지정해야 합니다.
      					<code>href</code> 속성이 없는 <code>&lt;a&gt;</code> 태그는 보조 기술에서 링크로 인식되지 않을 수 있습니다.
      				</li>
      				<li>
      					<code>role=&quot;link&quot;</code>를 사용하는 경우, <code>tabindex=&quot;0&quot;</code>을 추가하여 키보드 탐색이 가능하도록 해야 합니다.
      				</li>
      				<li>
      					<code>aria-disabled</code> 속성을 사용하여 링크를 비활성화할 수 있습니다.
      					그러나 링크를 완전히 비활성화하려면 <code>href=&quot;#&quot;</code>와 함께 스크립트로 클릭 이벤트를 차단하는 것이 좋습니다.
      				</li>
      				<li>
      					이미지 링크의 경우, <code>alt</code> 속성을 사용하여 이미지의 의미를 명확하게 설명해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						링크가 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-label</strong>
      					<p>
      						링크의 대체 텍스트를 제공합니다. 링크의 목적을 명확히 하기 위해 사용됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						링크의 레이블을 지정하는 다른 요소의 <code>ID</code>를 참조합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					<code>&lt;div&gt;</code> 태그는 본래 링크 역할이 아니며, 적절한 키보드 탐색 기능이 부족할 수 있습니다.
      					보조 기술이 이를 링크로 인식하지 않을 수 있습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / link 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="link">Go to Example</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					<code>&lt;a&gt;</code> 태그는 본래 링크 역할을 가지므로,
      					<code>role=&quot;link&quot;</code>를 명시적으로 지정할 필요는 없습니다.
      					이 예시에서는 올바르게 링크를 구현했습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / link 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<a href="https://example.com" role="link">Go to Example</a>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장)시멘틱 요소 사용</h4>
      				<p className="mt_s">
      					시멘틱하게 적절히 구현된 <code>&lt;a&gt;</code> 요소입니다.
      					<code>href</code> 속성으로 링크를 지정하면, 보조 기술은 이를 자동으로 인식합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / link (권장)시멘틱 요소 사용" language="javascript" className="uk_gist_code_box mt_m">
      {`<a href="https://example.com">Go to Example</a>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">이미지를 포함한 링크</h4>
      				<p className="mt_s">
      					이 예시는 이미지 전체가 클릭 가능한 링크로 설정된 경우입니다. <code>alt</code> 속성을 통해 이미지의 의미를 명확히 설명해야 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 이미지를 포함한 링크" language="javascript" className="uk_gist_code_box mt_m">
      {`<a href="https://example.com">
      							<img src="example.jpg" alt="Example Image">
      						</a>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">키보드 탐색이 가능한 링크</h4>
      				<p className="mt_s">
      					<code>&lt;div&gt;</code> 요소에 <code>role=&quot;link&quot;</code>와
      					<code>tabindex=&quot;0&quot;</code>을 추가하여 키보드 탐색이 가능하게 하고,
      					<code>onclick</code> 이벤트를 사용하여 링크 동작을 구현합니다.
      					이렇게 하면 <code>&lt;div&gt;</code> 요소가 링크처럼 작동합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 키보드 탐색이 가능한 링크" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="link" tabindex="0" onclick="window.location.href='https://example.com'">Go to Example</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 링크</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 링크가 비활성화되었음을 나타냅니다.
      					이 경우 시각적으로도 비활성화된 상태를 표현하는 것이 중요합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 비활성화된 링크" language="javascript" className="uk_gist_code_box mt_m">
      {`<a href="#" role="link" aria-disabled="true">Disabled Link</a>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">menuitem (메뉴 항목 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>menuitem</code> 역할은 메뉴에서 선택할 수 있는 개별 항목을 나타냅니다.
      				이 역할은 <code>menu</code> 역할을 가진 컨테이너(부모요소) 안에서 사용되며, 사용자가 선택하거나 클릭할 수 있는 항목을 정의합니다.
      				<code>menuitem</code>은 일반적인 단일 선택 메뉴 항목을 나타내며,
      				<code>menuitemcheckbox</code>와 <code>menuitemradio</code>와 구별됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#menuitem" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA menuitem</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA menuitem</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>menuitem</code> 역할은 일반적으로 <code>menu</code> 역할을 가진 요소 안에 포함됩니다.
      				</li>
      				<li>
      					이 역할은 사용자가 특정 동작을 트리거할 수 있는 선택 가능한 항목을 나타냅니다.
      				</li>
      				<li>
      					<code>menuitem</code>은 보통 파일 메뉴, 드롭다운 메뉴, 컨텍스트 메뉴와 같은 메뉴 구조에서 사용됩니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>menuitem</code>은 항상 <code>menu</code> 또는 <code>menubar</code> 역할을 가진 요소 안에 있어야 합니다.
      				</li>
      				<li>
      					각 <code>menuitem</code> 요소는 키보드로 탐색할 수 있도록 <code>tabindex=&quot;0&quot;</code>을 설정해야 합니다.
      					비활성화된 항목의 경우 <code>tabindex=&quot;-1&quot;</code>을 설정할 수 있습니다.
      				</li>
      				<li>
      					서브메뉴를 가진 <code>menuitem</code>의 경우 <code>aria-haspopup=&quot;true&quot;</code>와
      					<code>aria-expanded</code> 속성을 사용해 서브메뉴의 상태를 관리해야 합니다.
      				</li>
      				<li>
      					사용자가 메뉴 항목을 선택할 수 없는 경우,
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 비활성화 상태를 명확히 해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						메뉴 항목이 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-haspopup</strong>
      					<p>
      						메뉴 항목이 서브메뉴 또는 다른 팝업을 가지고 있는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-expanded</strong>
      					<p>
      						서브메뉴가 확장되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-label</strong>
      					<p>
      						메뉴 항목의 대체 텍스트를 제공합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 menuitem 역할 예시</h4>
      				<p className="mt_s">
      					<code>menuitem</code> 역할은 <code>menu</code> 역할을 가진 요소 안에 포함되어야 하며,
      					각 항목은 키보드로 초점을 받을 수 있도록 <code>tabindex=&quot;0&quot;</code>이 설정되어야 합니다.
      					그러나 기본 HTML 시멘틱 요소를 사용하는 것을 더 권장하고 있습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 menuitem 역할" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							menuitem 역할은 단독으로 사용될 수 없으며, 반드시 menu 역할을 가진 컨테이너 안에 있어야 합니다. 또한 키보드 접근성에 대한 고려가 부족합니다.
      						-->
      						<div role="menuitem">Save</div>

      						<!-- 올바른 예시 -->
      						<ul role="menu">
      							<li role="menuitem" tabindex="0">Save</li>
      							<li role="menuitem" tabindex="0">Open</li>
      							<li role="menuitem" tabindex="0">Exit</li>
      						</ul>

      						<!--
      							(권장)시멘틱 요소 사용
      							시멘틱하게 구성된 메뉴로, <a> 태그를 사용해 각 메뉴 항목을 정의했습니다. 일반적인 내비게이션 메뉴에 사용됩니다.
      						-->
      						<nav>
      							<ul>
      								<li><a href="#">Save</a></li>
      								<li><a href="#">Open</a></li>
      								<li><a href="#">Exit</a></li>
      							</ul>
      						</nav>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">키보드 내비게이션을 고려한 menuitem 예시</h4>
      				<p className="mt_s">
      					각 <code>menuitem</code> 요소에 <code>onclick&gt;</code> 이벤트가 추가되어 있어 사용자가 항목을 클릭하거나
      					<i className="key_enter">Enter</i> 키를 눌렀을 때 동작이 실행됩니다.
      					<code>tabindex=&quot;0&quot;</code>을 설정해 키보드 내비게이션이 가능합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 키보드 내비게이션을 고려한 menuitem 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<ul role="menu">
      							<li role="menuitem" tabindex="0" onclick="alert('New File')">New File</li>
      							<li role="menuitem" tabindex="0" onclick="alert('Open File')">Open File</li>
      							<li role="menuitem" tabindex="0" onclick="alert('Save File')">Save File</li>
      						</ul>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 menuitem 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 Save 메뉴 항목이 비활성화되었음을 나타냅니다.
      					이 항목은 포커스를 받을 수 없도록 <code>tabindex=&quot;-1&quot;</code>로 설정합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 비활성화된 menuitem 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<ul role="menu">
      							<li role="menuitem" tabindex="-1" aria-disabled="true">Save</li>
      							<li role="menuitem" tabindex="0">Open</li>
      							<li role="menuitem" tabindex="0">Exit</li>
      						</ul>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">서브메뉴를 가진 menuitem 예시</h4>
      				<p className="mt_s">
      					File 메뉴 항목은 서브메뉴를 가지고 있으며,
      					<code>aria-haspopup=&quot;true&quot;</code>와 <code>aria-expanded</code> 속성을 사용해 서브메뉴의 표시 여부를 관리합니다.
      					클릭 시 서브메뉴가 표시되거나 숨겨집니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 서브메뉴를 가진 menuitem 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<ul role="menu">
      							<li role="menuitem" aria-haspopup="true" aria-expanded="false" onclick="toggleSubMenu(this)">
      								File
      								<ul role="menu" class="submenu" style="display: none;">
      									<li role="menuitem" tabindex="0">New</li>
      									<li role="menuitem" tabindex="0">Open</li>
      								</ul>
      							</li>
      							<li role="menuitem" tabindex="0">Edit</li>
      							<li role="menuitem" tabindex="0">View</li>
      						</ul>

      						<script>
      							function toggleSubMenu(menuitem) {
      								const submenu = menuitem.querySelector('.submenu');
      								const expanded = menuitem.getAttribute('aria-expanded') === 'true';
      								menuitem.setAttribute('aria-expanded', !expanded);
      								submenu.style.display = expanded ? 'none' : 'block';
      							}
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">menuitemcheckbox (메뉴 항목 체크박스 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>menuitemcheckbox</code> 역할은 메뉴에서 선택 가능하거나 선택 해제할 수 있는 체크박스 항목을 나타냅니다.
      				이 역할은 일반적인 체크박스와 유사하지만, 메뉴 구조 내에서 사용됩니다.
      				사용자는 하나 이상의 <code>menuitemcheckbox</code>를 선택하거나 해제할 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#menuitemcheckbox" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA menuitemcheckbox</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA menuitemcheckbox</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>menuitemcheckbox</code> 역할은 주로 <code>menu</code> 역할을 가진 컨테이너(부모요소) 안에 포함되어 사용됩니다.
      				</li>
      				<li>
      					사용자는 이 요소를 클릭하거나 선택하여 항목을 켜거나 끌 수 있으며, 이를 통해 여러 옵션을 선택할 수 있습니다.
      				</li>
      				<li>
      					<code>menuitemcheckbox</code>는 선택 상태를 나타내기 위해 <code>aria-checked</code> 속성을 사용합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>menuitemcheckbox</code>는 반드시 <code>menu</code> 또는 <code>menubar</code> 역할을 가진 요소 안에 있어야 합니다.
      				</li>
      				<li>
      					각 <code>menuitemcheckbox</code> 요소는 선택 상태를 나타내기 위해 <code>aria-checked</code> 속성을 사용해야 합니다.
      					값은 <code>true</code>(선택됨), <code>false</code>(선택되지 않음), <code>mixed</code>(혼합 상태) 중 하나입니다.
      				</li>
      				<li>
      					비활성화된 항목은 <code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 표시할 수 있으며,
      					키보드 탐색에서 제외하려면 <code>tabindex=&quot;-1&quot;</code>을 설정할 수 있습니다.
      				</li>
      				<li>
      					사용자는 키보드를 사용하여 메뉴 항목을 탐색하고 선택할 수 있어야 하므로, <code>tabindex</code> 속성을 적절히 설정해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-checked</strong>
      					<p>
      						메뉴 항목의 체크 상태를 나타냅니다.
      						가능한 값은 <code>true</code>, <code>false</code>, <code>mixed</code>입니다.
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
      						메뉴 항목의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 menuitemcheckbox 역할 예시</h4>
      				<p className="mt_s">
      					<code>menuitemcheckbox</code>는 <code>menu</code> 역할을 가진
      					<code>&lt;element&gt;</code> 요소 안에 포함되어 있어야 하며,
      					<code>aria-checked</code> 속성을 사용해 현재 선택 상태를 명확히 나타내고 있어야 합니다.
      					또한 각 항목은 <code>tabindex=&quot;0&quot;</code>을 설정해 키보드 탐색이 가능하게 해야 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 menuitemcheckbox 역할 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							menuitemcheckbox 역할은 반드시 menu 역할을 가진 컨테이너 안에 있어야 합니다. 또한, 체크 상태를 나타내는 aria-checked 속성이 누락되었습니다.
      						-->
      						<div role="menuitemcheckbox">Enable Notifications</div>

      						<!-- 올바른 예시 -->
      						<ul role="menu">
      							<li role="menuitemcheckbox" aria-checked="false" tabindex="0">Enable Notifications</li>
      							<li role="menuitemcheckbox" aria-checked="true" tabindex="0">Receive Newsletters</li>
      						</ul>

      						<!--
      							(권장)시멘틱 요소 사용
      							시멘틱하게 구현된 체크박스 메뉴 항목으로, <input type="checkbox">와 <label>을 사용해 체크박스 기능을 제공
      						-->
      						<ul>
      							<li>
      								<input type="checkbox" id="notifications" checked>
      								<label for="notifications">Enable Notifications</label>
      							</li>
      							<li>
      								<input type="checkbox" id="newsletters">
      								<label for="newsletters">Receive Newsletters</label>
      							</li>
      						</ul>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 상태 변경을 고려한 menuitemcheckbox 예시</h4>
      				<p className="mt_s">
      					사용자가 클릭할 때마다 <code>aria-checked</code> 속성이 변경되어 체크박스의 상태를 업데이트합니다.
      					이를 통해 사용자는 메뉴 항목을 선택하거나 해제할 수 있습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 동적 상태 변경을 고려한 menuitemcheckbox 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<ul role="menu">
      							<li role="menuitemcheckbox" aria-checked="false" tabindex="0" onclick="toggleCheckbox(this)">
      								Enable Notifications
      							</li>
      							<li role="menuitemcheckbox" aria-checked="true" tabindex="0" onclick="toggleCheckbox(this)">
      								Receive Newsletters
      							</li>
      						</ul>

      						<script>
      							function toggleCheckbox(menuItem) {
      								const isChecked = menuItem.getAttribute('aria-checked') === 'true';
      								menuItem.setAttribute('aria-checked', !isChecked);
      							}
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 menuitemcheckbox 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용해 첫 번째 항목이 비활성화되었음을 나타내주고,
      					키보드 탐색에서 제외하기 위해 <code>tabindex=&quot;-1&quot;</code>을 설정합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 비활성화된 menuitemcheckbox 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<ul role="menu">
      							<li role="menuitemcheckbox" aria-checked="false" aria-disabled="true" tabindex="-1">
      								Enable Notifications
      							</li>
      							<li role="menuitemcheckbox" aria-checked="true" tabindex="0">Receive Newsletters</li>
      						</ul>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">menuitemradio (메뉴 항목 라디오 버튼 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>menuitemradio</code> 역할은 메뉴 내에서 사용자가 선택할 수 있는 라디오 버튼 항목을 나타냅니다.
      				<code>menuitemradio</code>는 상호 배타적인 선택 항목을 제공하며, 동일한 그룹 내에서 하나의 항목만 선택할 수 있습니다.
      				일반적인 라디오 버튼과 유사하지만, 메뉴 구조 내에서 사용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#menuitemradio" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA menuitemradio</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA menuitemradio</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>menuitemradio</code> 역할은 일반적으로 <code>menu</code> 역할을 가진 컨테이너(부모요소) 안에서 사용됩니다.
      				</li>
      				<li>
      					이 역할은 사용자가 하나의 항목만 선택할 수 있는 상호 배타적인 옵션을 제공하며,
      					선택된 상태를 <code>aria-checked</code> 속성을 통해 나타냅니다.
      				</li>
      				<li>
      					라디오 버튼 그룹은 <code>role=&quot;group&quot;</code> 또는 <code>role=&quot;menu&quot;</code>로 그룹화할 수 있습니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>menuitemradio</code>는 반드시 <code>menu</code> 또는 <code>group</code> 역할을 가진 요소 안에 있어야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-checked</strong>
      					<p>
      						라디오 버튼의 선택 상태를 나타냅니다. 가능한 값은 <code>true</code> 또는 <code>false</code>입니다.
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
      						메뉴 항목의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 menuitemradio 역할 예시</h4>
      				<p className="mt_s">
      					각 <code>menuitemradio</code> 요소는 <code>menu</code> 역할을 가진 요소 안에 포함되어 있어야 하며,
      					<code>aria-checked</code> 속성을 사용해 현재 선택 상태를 명확히 나타내야 합니다.
      					또한 각 항목은 <code>tabindex=&quot;0&quot;</code>으로 설정되어 있어 키보드 탐색이 가능하게 해야 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 menuitemradio 역할 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							menuitemradio 역할은 반드시 menu 또는 group 역할을 가진 컨테이너 안에 있어야 하며, aria-checked 속성이 없어 선택 상태가 명확하지 않습니다.
      						-->
      						<div role="menuitemradio">Option 1</div>

      						<!-- 올바른 예시 -->
      						<ul role="menu">
      							<li role="menuitemradio" aria-checked="true" tabindex="0">Option 1</li>
      							<li role="menuitemradio" aria-checked="false" tabindex="0">Option 2</li>
      							<li role="menuitemradio" aria-checked="false" tabindex="0">Option 3</li>
      						</ul>

      						<!--
      							(권장)시멘틱 요소 사용
      							시멘틱하게 구성된 라디오 버튼 그룹으로, <input type="radio">와 <label> 요소를 사용해 라디오 버튼을 제공합니다.
      						-->
      						<fieldset>
      							<legend>Choose an option:</legend>
      							<input type="radio" id="option1" name="options" checked>
      							<label for="option1">Option 1</label><br>
      							<input type="radio" id="option2" name="options">
      							<label for="option2">Option 2</label><br>
      							<input type="radio" id="option3" name="options">
      							<label for="option3">Option 3</label>
      						</fieldset>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 상태 변경을 고려한 menuitemradio 예시</h4>
      				<p className="mt_s">
      					사용자가 클릭할 때마다 <code>aria-checked</code> 속성이 업데이트되어 라디오 버튼의 상태를 변경합니다.
      					이 예시는 다른 <code>menuitemradio</code> 요소들의 선택을 해제하고, 클릭된 항목을 선택 상태로 만듭니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 동적 상태 변경을 고려한 menuitemradio 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<ul role="menu">
      							<li role="menuitemradio" aria-checked="true" tabindex="0" onclick="selectRadio(this)">
      								Option 1
      							</li>
      							<li role="menuitemradio" aria-checked="false" tabindex="0" onclick="selectRadio(this)">
      								Option 2
      							</li>
      							<li role="menuitemradio" aria-checked="false" tabindex="0" onclick="selectRadio(this)">
      								Option 3
      							</li>
      						</ul>

      						<script>
      							function selectRadio(selectedItem) {
      								const menu = selectedItem.parentElement;
      								const items = menu.querySelectorAll('[role="menuitemradio"]');
      								items.forEach(item => {
      									item.setAttribute('aria-checked', 'false');
      									item.setAttribute('tabindex', '-1');
      								});
      								selectedItem.setAttribute('aria-checked', 'true');
      								selectedItem.setAttribute('tabindex', '0');
      								selectedItem.focus();
      							}
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 menuitemradio 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 두 번째 항목이 비활성화되었음을 나타냅니다.
      					이 항목은 키보드 탐색에서 제외되도록 <code>tabindex=&quot;-1&quot;</code>로 설정되었습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 비활성화된 menuitemradio 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<ul role="menu">
      							<li role="menuitemradio" aria-checked="true" tabindex="0">Option 1</li>
      							<li role="menuitemradio" aria-checked="false" aria-disabled="true" tabindex="-1">Option 2</li>
      							<li role="menuitemradio" aria-checked="false" tabindex="0">Option 3</li>
      						</ul>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">option (옵션 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>option</code> 역할은 사용자가 선택할 수 있는 개별 항목을 나타내며,
      				일반적으로 <code>listbox</code>, <code>select</code>, <code>combobox</code> 등의 컨테이너(부모요소) 안에서 사용됩니다.
      				이 역할은 사용자가 여러 옵션 중 하나를 선택할 수 있는 상황에서 사용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#option" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA option</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/option_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA option</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>option</code> 역할은 사용자가 선택할 수 있는 항목을 정의하며,
      					주로 <code>listbox</code>, <code>select</code>, <code>combobox</code> 역할과 함께 사용됩니다.
      				</li>
      				<li>
      					선택된 상태는 <code>aria-selected</code> 속성을 통해 나타내며,
      					키보드 탐색을 지원하기 위해 적절한 <code>tabindex</code> 설정이 필요합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>option</code> 역할은 반드시 <code>listbox</code>, <code>select</code>,
      					또는 <code>combobox</code> 역할을 가진 컨테이너 안에 있어야 합니다.
      				</li>
      				<li>
      					각 <code>option</code> 요소는 선택 상태를 나타내기 위해 <code>aria-selected</code> 속성을 사용해야 합니다.
      					값은 <code>true</code>(선택됨) 또는 <code>false</code>(선택되지 않음) 중 하나입니다.
      				</li>
      				<li>
      					비활성화된 항목은 <code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 표시할 수 있으며,
      					키보드 탐색에서 제외하려면 <code>tabindex=&quot;-1&quot;</code>을 설정할 수 있습니다.
      				</li>
      				<li>
      					<code>aria-multiselectable</code> 속성을 <code>listbox</code>에 추가하면 여러 옵션을 동시에 선택할 수 있습니다.
      				</li>
      				<li>
      					사용자가 키보드를 사용하여 옵션을 탐색하고 선택할 수 있어야 하므로,
      					<code>tabindex</code> 속성을 적절히 설정해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-selected</strong>
      					<p>
      						옵션의 선택 상태를 나타냅니다. 가능한 값은 <code>true</code> 또는 <code>false</code>입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						옵션이 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						옵션의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 option 역할 예시</h4>
      				<p className="mt_s">
      					각 <code>option</code> 요소는 <code>listbox</code> 역할을 가진 요소 안에 포함되어 있어야 하며,
      					<code>aria-selected</code> 속성을 사용해 현재 선택 상태를 명확히 나타내고 있어야 합니다.
      					각 항목은 <code>tabindex=&quot;0&quot;</code>으로 설정되어 있어 키보드 탐색이 가능하게 해야 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 option 역할 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							option 역할은 반드시 listbox 또는 select, combobox 역할을 가진 컨테이너 안에 있어야 하며, 단독으로 사용될 수 없습니다. 선택 상태를 나타내는 aria-selected 속성도 누락되었습니다.
      						-->
      						<div role="option">Item 1</div>

      						<!-- 올바른 예시 -->
      						<ul role="listbox">
      							<li role="option" aria-selected="true" tabindex="0">Item 1</li>
      							<li role="option" aria-selected="false" tabindex="0">Item 2</li>
      							<li role="option" aria-selected="false" tabindex="0">Item 3</li>
      						</ul>

      						<!--
      							(권장)시멘틱 요소 사용
      							시멘틱하게 구성된 선택 목록으로, <select>와 <option> 요소를 사용해 옵션을 제공합니다. 브라우저와 보조 기술에서 기본적으로 지원하는 시멘틱 마크업입니다.
      						-->
      						<select>
      							<option selected>Item 1</option>
      							<option>Item 2</option>
      							<option>Item 3</option>
      						</select>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 상태 변경을 고려한 option 예시</h4>
      				<p className="mt_s">
      					사용자가 클릭할 때마다 <code>aria-selected</code> 속성이 업데이트되어 옵션의 선택 상태가 변경됩니다.
      					선택된 항목만이 <code>aria-selected=&quot;true&quot;</code> 상태가 되며, 다른 항목의 선택이 해제됩니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 동적 상태 변경을 고려한 option 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<ul role="listbox" id="myListbox">
      							<li role="option" aria-selected="true" tabindex="0" onclick="selectOption(this)">Item 1</li>
      							<li role="option" aria-selected="false" tabindex="0" onclick="selectOption(this)">Item 2</li>
      							<li role="option" aria-selected="false" tabindex="0" onclick="selectOption(this)">Item 3</li>
      						</ul>

      						<script>
      							function selectOption(selectedOption) {
      								const options = document.querySelectorAll('#myListbox [role="option"]');
      								options.forEach(option => {
      									option.setAttribute('aria-selected', 'false');
      									option.setAttribute('tabindex', '-1');
      								});
      								selectedOption.setAttribute('aria-selected', 'true');
      								selectedOption.setAttribute('tabindex', '0');
      								selectedOption.focus();
      							}
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 option 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 두 번째 옵션이 비활성화되었음을 나타내고 있으며,
      					이 항목은 키보드 탐색에서 제외되도록 <code>tabindex=&quot;-1&quot;</code>로 설정되었습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 비활성화된 option 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<ul role="listbox">
      							<li role="option" aria-selected="true" tabindex="0">Item 1</li>
      							<li role="option" aria-selected="false" aria-disabled="true" tabindex="-1">Item 2 (Disabled)</li>
      							<li role="option" aria-selected="false" tabindex="0">Item 3</li>
      						</ul>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">다중 선택이 가능한 option 예시</h4>
      				<p className="mt_s">
      					<code>aria-multiselectable=&quot;true&quot;</code> 속성을 사용해 여러 항목을 선택할 수 있도록 설정한 예시입니다.
      					사용자가 클릭할 때마다 선택 상태가 토글됩니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 다중 선택이 가능한 option 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<ul role="listbox" aria-multiselectable="true">
      							<li role="option" aria-selected="true" tabindex="0" onclick="toggleOption(this)">Item 1</li>
      							<li role="option" aria-selected="true" tabindex="0" onclick="toggleOption(this)">Item 2</li>
      							<li role="option" aria-selected="false" tabindex="0" onclick="toggleOption(this)">Item 3</li>
      						</ul>

      						<script>
      							function toggleOption(option) {
      								const isSelected = option.getAttribute('aria-selected') === 'true';
      								option.setAttribute('aria-selected', !isSelected);
      							}
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">progressbar (진행 상태 막대 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>progressbar</code> 역할은 작업의 진행 상태를 시각적으로 나타내는 막대를 정의합니다.
      				이 역할은 사용자가 특정 작업이 얼마나 완료되었는지 확인할 수 있도록 도와줍니다.<br />
      				<code>progressbar</code>는 진행률을 나타내기 위해
      				<code>aria-valuenow</code>, <code>aria-valuemin&gt;</code>, <code>aria-valuemax</code>와 같은
      				<b>ARIA 속성</b>을 사용하여 현재 진행 상태를 전달합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#progressbar" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA progressbar</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA progressbar</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>progressbar</code> 역할은 파일 다운로드, 업로드, 데이터 처리 등의 작업 진행 상황을 나타내기 위해 사용됩니다.
      				</li>
      				<li>
      					보조 기술은 <code>progressbar</code>의 현재 값(<code>aria-valuenow</code>),
      					최소 값(<code>aria-valuemin</code>), 최대 값(<code>aria-valuemax</code>)을
      					사용해 진행 상태를 인식하고 사용자에게 전달합니다.
      				</li>
      				<li>
      					진행률을 나타내는 숫자(퍼센트)와 시각적인 막대가 함께 사용될 수 있습니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>progressbar</code> 역할을 사용할 때는 반드시
      					<code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code> 속성을 설정해야 하며,
      					이를 통해 보조 기술이 진행 상태를 정확히 전달할 수 있도록 합니다.
      				</li>
      				<li>
      					<code>aria-valuenow</code>는 현재 진행 상태를 나타내는 값이며,
      					<code>aria-valuemin</code>은 진행 상태의 최소값(일반적으로 0),
      					<code>aria-valuemax</code>는 최대값(일반적으로 100)을 나타냅니다.
      				</li>
      				<li>
      					동적 콘텐츠에서 <code>progressbar</code>의 상태를 자주 업데이트할 경우,
      					진행 상태가 사용자가 이해할 수 있는 속도로 적절히 업데이트되도록 해야 합니다.
      				</li>
      				<li>
      					비활성화된 상태를 나타내기 위해 <code>aria-disabled</code> 속성을 사용할 수 있습니다.
      				</li>
      				<li>
      					시각적인 진행 상태와 텍스트로 표시된 퍼센트 값을 함께 제공하면,
      					시각적 장애가 있는 사용자뿐만 아니라 모든 사용자에게 더 명확한 정보를 제공할 수 있습니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-valuenow</strong>
      					<p>
      						현재 진행 상태를 나타냅니다. 값은 숫자로 설정됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuemin</strong>
      					<p>
      						진행 상태의 최소값을 나타냅니다. 값은 숫자로 설정되며, 기본값은 <code>0</code>입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuemax</strong>
      					<p>
      						진행 상태의 최대값을 나타냅니다. 값은 숫자로 설정되며, 기본값은 <code>100</code>입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						진행 상태 막대가 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						진행 상태 막대의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 progressbar 역할 예시</h4>
      				<p className="mt_s">
      					<code>aria-valuenow</code>를 사용해 현재 진행률을 나타내고,
      					<code>aria-valuemin</code>과 <code>aria-valuemax</code>를 사용해 진행 상태의 범위를 지정합니다.
      					시각적인 막대는 <code>width</code> 스타일을 통해 진행 상태를 시각적으로 표현할 수 있습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 progressbar 역할 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							진행 상태를 나타내기 위한 aria-valuenow, aria-valuemin, aria-valuemax 속성이 누락
      						-->
      						<div role="progressbar">70%</div>

      						<!-- 올바른 예시 -->
      						<div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;">
      							70%
      						</div>

      						<!--
      							(권장)시멘틱 요소 사용
      							HTML5의 <progress> 요소를 사용하여 시멘틱하게 진행 상태를 나타냅니다. <progress> 요소는 기본적으로 progressbar 역할을 가집니다.
      						-->
      						<progress value="70" max="100">70%</progress>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 업데이트가 가능한 progressbar 예시</h4>
      				<p className="mt_s">
      					이 예시는 자바스크립트를 사용해 진행 상태를 동적으로 업데이트합니다.
      					<code>updateProgress</code> 함수는 <code>aria-valuenow</code> 속성을 업데이트하고,
      					시각적 막대의 너비와 텍스트를 변경하여 진행 상태를 반영합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 동적 업데이트가 가능한 progressbar 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="progressbar" style="width: 0%;">
      							0%
      						</div>

      						<script>
      							function updateProgress(value) {
      								const progressBar = document.getElementById('progressbar');
      								progressBar.setAttribute('aria-valuenow', value);
      								progressBar.style.width = value + '%';
      								progressBar.textContent = value + '%';
      							}

      							// Example: simulate progress update
      							let value = 0;
      							const interval = setInterval(() => {
      								if (value >= 100) clearInterval(interval);
      								updateProgress(value);
      								value += 10;
      							}, 1000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 progressbar 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 진행 상태 막대가 비활성화되었음을 나타냅니다.
      					이 상태에서는 진행 상태의 업데이트가 중지되었음을 시각적으로나 보조 기술을 통해 사용자에게 전달할 수 있습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 비활성화된 progressbar 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-disabled="true" style="width: 50%;">
      							50% (Disabled)
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">scrollbar (스크롤바 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>scrollbar</code> 역할은 스크롤 가능한 콘텐츠 영역의 스크롤바를 나타내며, 사용자가 콘텐츠의 특정 부분을 탐색할 수 있도록 도와줍니다.
      				스크롤바는 수직 또는 수평으로 나타날 수 있고, 사용자는 스크롤바를 이동시켜 콘텐츠를 탐색합니다.<br />
      				<code>scrollbar</code> 역할은 보조 기술에서 이 요소를 스크롤바로 인식하게 하여 사용자가 콘텐츠의 어느 부분을 보고 있는지,
      				스크롤 가능한 범위 내에서 현재 위치가 어디인지를 전달합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#scrollbar" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA scrollbar</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA scrollbar</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>scrollbar</code> 역할은 스크롤 가능한 콘텐츠 영역의 스크롤바를 정의하며,
      					사용자가 스크롤 가능한 콘텐츠를 탐색할 수 있도록 돕습니다.
      				</li>
      				<li>
      					스크롤바의 위치 및 상태를 나타내기 위해
      					<code>aria-valuenow</code>, <code>aria-valuemin</code>,
      					<code>aria-valuemax</code>, <code>aria-orientation</code> 등의 속성이 사용됩니다.
      				</li>
      				<li>
      					수직 스크롤바는 <code>aria-orientation=&quot;vertical&quot;</code>을,
      					수평 스크롤바는 <code>aria-orientation=&quot;horizontal&quot;</code>을 사용하여 정의됩니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>scrollbar</code> 역할을 사용할 때는 반드시
      					<code>aria-valuenow</code>, <code>aria-valuemin</code>,
      					<code>aria-valuemax</code>, <code>aria-orientation</code> 속성을 설정해야 하며,
      					이를 통해 보조 기술이 스크롤바의 상태를 정확히 전달할 수 있도록 합니다.
      				</li>
      				<li>
      					<code>aria-valuenow</code>는 현재 스크롤바 위치를 나타내며,
      					<code>aria-valuemin</code>은 스크롤 가능한 범위의 최소값,
      					<code>aria-valuemax</code>는 최대값을 나타냅니다.
      				</li>
      				<li>
      					<code>aria-orientation</code> 속성은 스크롤 방향을 지정하며,
      					가능한 값은 <code>vertical</code>(수직) 또는 <code>horizontal</code>(수평)입니다.
      				</li>
      				<li>
      					비활성화된 스크롤바를 나타내기 위해 <code>aria-disabled</code> 속성을 사용할 수 있습니다.
      					이 경우, 사용자에게 스크롤이 불가능함을 명확히 전달해야 합니다.
      				</li>
      				<li>
      					시각적인 스크롤 핸들을 제공하여 사용자가 스크롤 가능한 범위와 현재 위치를 명확히 이해할 수 있도록 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-valuenow</strong>
      					<p>
      						스크롤바의 현재 위치를 나타냅니다. 값은 숫자로 설정됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuemin</strong>
      					<p>
      						스크롤 가능한 범위의 최소값을 나타냅니다. 값은 숫자로 설정되며, 기본값은 <code>0</code>입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuemax</strong>
      					<p>
      						스크롤 가능한 범위의 최대값을 나타냅니다. 값은 숫자로 설정되며, 기본값은 <code>100</code>입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-orientation</strong>
      					<p>
      						스크롤바의 방향을 나타냅니다. 가능한 값은 <code>vertical</code>(수직) 또는 <code>horizontal</code>(수평)입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						스크롤바가 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						스크롤바의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 scrollbar 역할 예시</h4>
      				<p className="mt_s">
      					<code>scrollbar</code> 역할을 제대로 구현하기 위해서는
      					<code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code> 속성을 사용하여
      					스크롤바의 현재 위치와 범위를 정의하고 <code>aria-orientation=&quot;vertical&quot;</code> 속성을 사용하여 스크롤바가 수직임을 나타냅니다.
      					또한, <code>tabindex=&quot;0&quot;</code>을 추가하여 키보드 탐색이 가능하도록 해야 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 scrollbar 역할 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							스크롤 가능한 범위 및 현재 위치를 나타내는 aria-valuenow, aria-valuemin, aria-valuemax 속성이 누락,
      							스크롤 방향을 나타내기 위해 aria-orientation 속성 누락
      						-->
      						<div role="scrollbar"></div>

      						<!-- 올바른 예시 -->
      						<div role="scrollbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-orientation="vertical" tabindex="0" style="height: 100px;">
      							<!-- 스크롤 핸들 -->
      							<div style="height: 50%; background-color: #ccc;"></div>
      						</div>

      						<!-- 기본 HTML에서는 별도의 시멘틱 스크롤바 요소가 없으므로, ARIA 속성을 사용하여 의미를 명확히 합니다. -->`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 스크롤바 업데이트 예시</h4>
      				<p className="mt_s">
      					스크롤바의 위치를 동적으로 업데이트하는 예제입니다.
      					<code>updateScrollbar</code> 함수는 스크롤바의 위치를 변경하면서 <code>aria-valuenow</code> 속성을 업데이트하고,
      					시각적으로도 스크롤 핸들의 위치를 변경합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 동적 스크롤바 업데이트 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="scrollbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" aria-orientation="horizontal" tabindex="0" id="scrollbar" style="width: 100%;">
      							<!-- 스크롤 핸들 -->
      							<div id="scroll-handle" style="width: 10%; background-color: #ccc;"></div>
      						</div>

      						<script>
      							function updateScrollbar(position) {
      								const scrollbar = document.getElementById('scrollbar');
      								const handle = document.getElementById('scroll-handle');
      								scrollbar.setAttribute('aria-valuenow', position);
      								handle.style.left = position + '%';
      							}

      							// 예시: 스크롤바 업데이트 시뮬레이션
      							let position = 0;
      							const interval = setInterval(() => {
      								if (position >= 100) clearInterval(interval);
      								updateScrollbar(position);
      								position += 10;
      							}, 1000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 scrollbar 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 스크롤바가 비활성화되었음을 나타내고 있으며,
      					키보드 탐색에서 제외하기 위해 <code>tabindex=&quot;-1&quot;</code>을 설정했습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 비활성화된 scrollbar 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="scrollbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" aria-orientation="vertical" aria-disabled="true" tabindex="-1" style="height: 100px;">
      							<!-- 스크롤 핸들 -->
      							<div style="height: 50%; background-color: #ccc;"></div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">searchbox (검색 상자 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>searchbox</code> 역할은 사용자가 검색어를 입력할 수 있는 텍스트 필드를 나타냅니다.
      				이 역할은 검색 기능을 제공하는 입력 필드를 정의하며, 일반적으로 검색 버튼과 함께 사용됩니다.
      				<code>searchbox</code> 역할을 사용하면 보조 기술이 이 필드가 검색을 위한 것임을 명확히 인식할 수 있습니다.<br />
      				HTML5의 <code>&lt;input type="search"&gt;</code> 요소는 기본적으로 검색 상자 역할을 가지며,
      				보조 기술이 이 필드가 검색을 위한 것임을 자동으로 인식하기 때문에 <code>role=&quot;searchbox&quot;</code>는 사용을 안하는것을 권장합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#searchbox" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA searchbox</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA searchbox</a><br />
      				<a href="/publishing/html/09-forms/03-input_element_part1#inner_link:search" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">input type요소 참조 - UXKM search</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>searchbox</code> 역할은 사용자가 검색어를 입력할 수 있는 필드를 정의합니다.
      				</li>
      				<li>
      					이 역할은 <code>aria-required</code>, <code>aria-invalid</code>, <code>aria-autocomplete</code>
      					등의 속성을 사용하여 필드의 상태와 동작을 정의할 수 있습니다.
      				</li>
      				<li>
      					검색 상자는 기본적으로 텍스트 입력 필드로 구현되며, 보조 기술은 이 필드가 검색 목적임을 알 수 있습니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					시멘틱 요소 사용을 권장합니다.
      				</li>
      				<li>
      					<code>searchbox</code> 역할을 사용할 때는 <code>aria-label</code> 속성을 통해 검색 상자의 목적을 명확히 해야 합니다.
      				</li>
      				<li>
      					필수 입력 필드일 경우 <code>aria-required=&quot;true&quot;</code>를 사용하여 사용자에게 이를 알립니다.
      				</li>
      				<li>
      					자동 완성 기능이 포함된 경우, <code>aria-autocomplete</code> 속성을 사용하여 보조 기술이 자동 완성 기능을 인식하도록 합니다.
      				</li>
      				<li>
      					유효성 검사가 필요한 경우, <code>aria-invalid</code> 속성을 사용하여 검색어의 유효성을 나타낼 수 있습니다. 유효하지 않은 경우 관련 메시지를 제공해야 합니다.
      				</li>
      				<li>
      					검색 상자는 일반적으로 버튼과 함께 사용되므로, 검색 버튼과의 관계를 명확히 해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-required</strong>
      					<p>
      						검색 상자가 필수 입력 필드인지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-invalid</strong>
      					<p>
      						검색 상자의 입력 내용이 유효한지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-autocomplete</strong>
      					<p>
      						검색 상자에서 자동 완성 기능이 작동하는 방식을 나타냅니다. 가능한 값은 <code>none</code>, <code>list</code>, <code>inline</code>, <code>both</code> 입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						검색 상자의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 searchbox 역할 예시</h4>
      				<p className="mt_s">
      					<code>role=&quot;searchbox&quot;</code>를 사용해 검색 상자 역할을 명확히 정의하고
      					<code>aria-label</code> 속성을 통해 보조 기술이 검색 상자의 목적을 명확히 알 수 있도록 해야 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 searchbox 역할 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							기본 텍스트 입력 필드로 검색 기능을 제공할 수 있지만, 보조 기술이 이 필드가 검색을 위한 것임을 명확히 인식하지 못할 수 있습니다.
      						-->
      						<input type="text" placeholder="Search...">

      						<!--
      							(권장) 올바른 예시 시멘틱 요소 사용
      							HTML5의 <input type="search"> 요소는 기본적으로 검색 상자 역할을 가지며, 보조 기술이 이 필드가 검색을 위한 것임을 자동으로 인식합니다.
      						-->
      						<input type="search" aria-label="Search the site" placeholder="Search...">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">자동 완성 기능이 포함된 searchbox 예시</h4>
      				<p className="mt_s">
      					<code>aria-autocomplete=&quot;list&quot;</code> 속성을 사용하여 자동 완성 기능이 포함된 <code>searchbox</code> 예시입니다.
      					<code>datalist</code> 요소는 사용자가 입력할 때 검색어 제안을 제공합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 자동 완성 기능이 포함된 searchbox 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="search" aria-label="Search the site" aria-autocomplete="list" placeholder="Search..." list="search-suggestions">
      						<datalist id="search-suggestions">
      							<option value="HTML"></option>
      							<option value="CSS"></option>
      							<option value="JavaScript"></option>
      						</datalist>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">필수 입력 searchbox 예시</h4>
      				<p className="mt_s">
      					<code>aria-required=&quot;true&quot;</code> 속성을 사용하여 검색 상자가 필수 입력 필드임을 나타냅니다.
      					사용자가 이 필드를 비워두고 제출하려고 할 때, 보조 기술은 이를 경고할 수 있습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 필수 입력 searchbox 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="search" aria-label="Search the site" aria-required="true" placeholder="Search...">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">유효성 검사가 포함된 searchbox 예시</h4>
      				<p className="mt_s">
      					<code>aria-invalid</code> 속성을 사용하여 검색 쿼리의 유효성을 검사하는 예제입니다.
      					사용자가 입력한 내용이 유효하지 않은 경우, 보조 기술은 이를 알리고 관련 오류 메시지를 제공할 수 있습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 유효성 검사가 포함된 searchbox 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="search" aria-label="Search the site" aria-invalid="false" placeholder="Search...">
      						<p id="error-message" style="display: none;">Invalid search query</p>

      						<script>
      							const searchBox = document.querySelector('input[role="searchbox"]');
      							searchBox.addEventListener('input', function() {
      								if (searchBox.value.length < 3) {
      									searchBox.setAttribute('aria-invalid', 'true');
      									document.getElementById('error-message').style.display = 'block';
      								} else {
      									searchBox.setAttribute('aria-invalid', 'false');
      									document.getElementById('error-message').style.display = 'none';
      								}
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">separator (구분선 역할, 포커스 가능할 때)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>separator</code> 역할은 콘텐츠를 구분하기 위한 시각적인 선을 나타내며,
      				이 요소가 포커스(초점)를 받을 수 있을 때 <b>ARIA 역할</b>로 설정됩니다.
      				포커스(초점) 가능한 구분선은 종종 슬라이더, 드래그 앤 드롭 또는 키보드 내비게이션을 위한 핸들 역할을 수행합니다.
      				이러한 구분선은 사용자가 구분선을 이동시켜 레이아웃을 조정하거나 특정 동작을 트리거할 수 있도록 설계됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#separator" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA separator</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA separator</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>separator</code> 역할은 일반적으로 콘텐츠를 시각적으로 구분하는 수평 또는 수직 선을 나타냅니다.
      				</li>
      				<li>
      					포커스(초점) 가능한 경우, 이 역할은 슬라이더나 패널 조절기 등으로 사용될 수 있으며,
      					<code>aria-orientation</code>, <code>aria-valuenow</code>,
      					<code>aria-valuemin</code>, <code>aria-valuemax</code>
      					등의 속성으로 현재 상태를 나타낼 수 있습니다.
      				</li>
      				<li>
      					보조 기술을 통해 구분선의 위치와 역할이 사용자에게 전달됩니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>separator</code> 역할을 사용할 때는 반드시 <code>aria-orientation</code> 속성을 통해 구분선의 방향을 지정해야 합니다.
      					가능한 값은 <code>horizontal</code>(수평) 또는 <code>vertical</code>(수직)입니다.
      				</li>
      				<li>
      					포커스 가능한 구분선의 경우,
      					<code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code>
      					속성을 설정하여 구분선의 현재 위치와 조정 가능한 범위를 나타내야 합니다.
      				</li>
      				<li>
      					사용자가 키보드를 사용해 구분선을 조정할 수 있도록,
      					<code>tabindex=&quot;0&quot;</code>을 설정하고 적절한 키보드 이벤트 핸들러를 구현해야 합니다.
      				</li>
      				<li>
      					비활성화된 구분선은 <code>aria-disabled=&quot;true&quot;</code> 속성을 사용해 표시할 수 있으며,
      					이 경우 포커스가 불가능하도록 설정해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-orientation</strong>
      					<p>
      						구분선의 방향을 나타냅니다. 가능한 값은 <code>horizontal</code> 또는 <code>vertical</code>입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuenow</strong>
      					<p>
      						구분선의 현재 위치를 나타냅니다. 값은 숫자로 설정됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuemin</strong>
      					<p>
      						구분선의 조정 가능한 범위의 최소값을 나타냅니다. 값은 숫자로 설정됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuemax</strong>
      					<p>
      						구분선의 조정 가능한 범위의 최대값을 나타냅니다. 값은 숫자로 설정됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						구분선이 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						구분선의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 separator 역할 (포커스 불가능한 상태) 예시</h4>
      				<p className="mt_s">
      					이 예시는 포커스가 불가능한 기본 구분선을 나타냅니다. <code>&lt;hr&gt;</code> 요소는 시각적으로 콘텐츠를 구분하는 역할을 하며,
      					보조 기술에서 이 요소를 구분선으로 인식하게 합니다. 이 경우, <code>separator</code>는 단순한 시각적 구분용으로만 사용됩니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 separator 역할 (포커스 불가능한 상태) 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<hr role="separator">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">포커스 가능한 separator 역할 예시</h4>
      				<p className="mt_s">
      					이 예시는 포커스 가능한 구분선으로, 사용자가 키보드나 마우스를 통해 이 구분선을 이동하여 레이아웃을 조정할 수 있습니다.
      					<code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code> 속성을 통해 구분선의 현재 위치와 조정 가능한 범위를 나타내며,
      					<code>aria-orientation</code> 속성으로 구분선의 방향(수평)을 지정합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 포커스 가능한 separator 역할 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="separator" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-orientation="horizontal" tabindex="0" style="height: 5px; background-color: #ccc;">
      							<!-- 구분선을 조정할 수 있는 핸들 -->
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 조절 가능한 separator 예시</h4>
      				<p className="mt_s">
      					이 구분선은 키보드(화살표 키)를 통해 조정할 수 있으며, <code>aria-valuenow</code> 속성이 업데이트됩니다.
      					사용자는 이 구분선을 사용해 패널의 크기를 조정할 수 있습니다.
      					스크립트는 키보드 입력에 따라 구분선의 위치를 변경하고, 보조 기술이 구분선의 새 위치를 인식하도록 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 동적 조절 가능한 separator 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="separator" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-orientation="vertical" tabindex="0" id="separator" style="width: 5px; background-color: #ccc;">
      							<!-- 구분선을 조정할 수 있는 핸들 -->
      						</div>

      						<script>
      							document.getElementById('separator').addEventListener('keydown', function(event) {
      								let currentValue = parseInt(this.getAttribute('aria-valuenow'));
      								if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
      									currentValue = Math.min(currentValue + 10, 100);
      								} else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
      									currentValue = Math.max(currentValue - 10, 0);
      								}
      								this.setAttribute('aria-valuenow', currentValue);
      								// 시각적으로 구분선 위치를 조정
      								this.style.height = currentValue + '%';
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 separator 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 구분선이 비활성화되었음을 나타내고 있으며,
      					이 상태에서는 구분선을 조정할 수 없습니다. 또한, 포커스가 불가능하도록 <code>tabindex=&quot;-1&quot;</code>로 설정되었습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 비활성화된 separator 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="separator" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-orientation="horizontal" aria-disabled="true" tabindex="-1" style="height: 5px; background-color: #ccc;">
      							<!-- 비활성화된 구분선 -->
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">slider (슬라이더 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>slider</code> 역할은 사용자가 특정 범위 내에서 값을 선택할 수 있도록 해주는 UI 요소를 나타냅니다.
      				슬라이더는 일반적으로 사용자가 드래그하거나 키보드를 사용하여 값을 조정할 수 있는 수평 또는 수직의 막대 형태로 제공됩니다.<br />
      				슬라이더는 <code>aria-valuenow</code>, <code>aria-valuemin</code>,
      				<code>aria-valuemax</code>, <code>aria-orientation</code>
      				등의 <b>ARIA 속성</b>을 통해 현재 값과 범위를 설정하고,
      				사용자가 슬라이더의 상태를 쉽게 파악할 수 있도록 돕습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#slider" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA slider</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA slider</a><br />
      				<a href="/publishing/html/09-forms/03-input_element_part1#inner_link:range" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">input type요소 참조 - UXKM range</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>slider</code> 역할은 사용자가 특정 값이나 범위를 선택할 수 있는 인터랙티브 요소를 정의합니다.
      				</li>
      				<li>
      					슬라이더는 수평(<code>horizontal</code>) 또는 수직(<code>vertical</code>) 방향으로 설정될 수 있으며,
      					현재 선택된 값을 시각적으로 나타냅니다.
      				</li>
      				<li>
      					보조 기술은 <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code>
      					속성을 사용하여 슬라이더의 현재 값, 최소값, 최대값을 사용자에게 전달합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>slider</code> 역할을 사용할 때는 반드시
      					<code>aria-valuenow</code>, <code>aria-valuemin</code>,
      					<code>aria-valuemax</code>, <code>aria-orientation</code>
      					속성을 설정하여 슬라이더의 현재 값, 최소값, 최대값, 방향을 명확히 정의해야 합니다.
      				</li>
      				<li>
      					사용자가 키보드를 사용해 슬라이더를 탐색하고 값을 조정할 수 있도록,
      					<code>tabindex=&quot;0&quot;</code>을 설정하고 키보드 이벤트 핸들러를 구현해야 합니다.
      				</li>
      				<li>
      					슬라이더가 비활성화된 경우, <code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 보조 기술이 이를 인식할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					수직 또는 수평 방향의 슬라이더를 구현할 때, <code>aria-orientation</code> 속성을 적절히 설정해야 합니다.
      				</li>
      				<li>
      					슬라이더의 현재 값을 시각적으로도 반영하여 사용자가 시각적으로 현재 위치를 쉽게 파악할 수 있도록 해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-valuenow</strong>
      					<p>
      						슬라이더의 현재 값을 나타냅니다. 값은 숫자로 설정됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuemin</strong>
      					<p>
      						슬라이더의 최소값을 나타냅니다. 값은 숫자로 설정되며, 기본값은 <code>0</code>입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuemax</strong>
      					<p>
      						슬라이더의 최대값을 나타냅니다. 값은 숫자로 설정되며, 기본값은 <code>100</code>입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-orientation</strong>
      					<p>
      						슬라이더의 방향을 나타냅니다. 가능한 값은 <code>horizontal</code>(수평) 또는 <code>vertical</code>(수직)입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						슬라이더가 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						슬라이더의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 slider 역할 예시</h4>
      				<p className="mt_s">
      					시멘틱 요소 사용을 권장하며, HTML5의 <code>&lt;input type="range"&gt;</code> 요소를 사용하여 시멘틱하게 슬라이더를 구현합니다.
      					이 요소는 기본적으로 <code>slider</code> 역할을 가지며, 보조 기술은 이를 슬라이더로 인식합니다.<br />
      					슬라이더는 <code>aria-valuenow</code>(현재 값), <code>aria-valuemin</code>(최소값),
      					<code>aria-valuemax</code>(최대값) 속성을 사용하여 현재 상태를 정의하고,
      					키보드 탐색이 가능하도록 <code>tabindex=&quot;0&quot;</code>이 설정되어 있어야 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 slider 역할 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 - aria-valuenow, aria-valuemin, aria-valuemax 등의 속성 미제공. 또한, 슬라이더의 방향을 지정하는 aria-orientation 속성도 미제공 -->
      						<div role="slider">50</div>

      						<!-- 올바른 예시 -->
      						<div role="slider" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-orientation="horizontal" tabindex="0" style="width: 200px; height: 10px; background-color: #ddd;">
      							<!-- 슬라이더 핸들 -->
      							<div style="width: 20px; height: 20px; background-color: #000; position: relative; left: 50%; top: -5px;"></div>
      						</div>

      						<!-- (권장) 시멘틱 요소 사용 -->
      						<input type="range" min="0" max="100" value="50">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적으로 업데이트 가능한 slider 예시</h4>
      				<p className="mt_s">
      					이 예시는 키보드를 사용해 슬라이더의 값을 동적으로 변경할 수 있는 슬라이더를 구현한 것입니다.
      					<i className="key_arrow_right">ArrowRight</i>, <i className="key_arrow_left">ArrowLeft</i>,
      					<i className="key_arrow_up">ArrowUp</i>, <i className="key_arrow_down">ArrowDown</i>
      					키로 슬라이더 값을 조정할 수 있으며, 이에 따라 슬라이더 핸들의 위치가 변경됩니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 동적으로 업데이트 가능한 slider 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="slider" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-orientation="horizontal" tabindex="0" id="mySlider" style="width: 200px; height: 10px; background-color: #ddd;">
      							<!-- 슬라이더 핸들 -->
      							<div id="handle" style="width: 20px; height: 20px; background-color: #000; position: relative; left: 50%; top: -5px;"></div>
      						</div>

      						<script>
      							const slider = document.getElementById('mySlider');
      							const handle = document.getElementById('handle');

      							slider.addEventListener('keydown', function(event) {
      								let value = parseInt(slider.getAttribute('aria-valuenow'));
      								if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      									value = Math.min(value + 1, 100);
      								} else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      									value = Math.max(value - 1, 0);
      								}
      								slider.setAttribute('aria-valuenow', value);
      								handle.style.left = value + '%';
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">수직 slider 예시</h4>
      				<p className="mt_s">
      					이 예시는 수직 슬라이더를 구현한 것입니다.
      					<code>aria-orientation=&quot;vertical&quot;</code> 속성을 사용해 슬라이더의 방향을 수직으로 설정했으며, 슬라이더 핸들은 현재 값에 따라 위치가 조정됩니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 수직 slider 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="slider" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" aria-orientation="vertical" tabindex="0" style="width: 10px; height: 200px; background-color: #ddd;">
      							<!-- 슬라이더 핸들 -->
      							<div style="width: 20px; height: 20px; background-color: #000; position: relative; top: 30%;"></div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 slider 예시</h4>
      				<p className="mt_s">
      					이 슬라이더는 <code>aria-disabled=&quot;true&quot;</code> 속성을 사용해 비활성화되었습니다.
      					슬라이더는 비활성화 상태이므로, 키보드 탐색에서도 제외되도록 <code>tabindex=&quot;-1&quot;</code>로 설정되었습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 비활성화된 slider 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="slider" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-orientation="horizontal" aria-disabled="true" tabindex="-1" style="width: 200px; height: 10px; background-color: #ddd;">
      							<!-- 비활성화된 슬라이더 핸들 -->
      							<div style="width: 20px; height: 20px; background-color: #888; position: relative; left: 50%; top: -5px;"></div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">spinbutton (스핀 버튼 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>spinbutton</code> 역할은 사용자가 특정 범위 내에서 값을 증가 또는 감소시켜 선택할 수 있는 입력 필드를 나타냅니다.
      				스핀 버튼은 일반적으로 숫자 입력 필드로 구현되며, 사용자는 키보드나 마우스를 사용하여 값을 조정할 수 있습니다.<br />
      				<code>spinbutton</code> 역할은 <code>aria-valuenow</code>, <code>aria-valuemin</code>,
      				<code>aria-valuemax</code> 등의 ARIA 속성을 통해
      				현재 값과 범위를 설정하여 보조 기술이 이를 정확하게 인식하도록 도와줍니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#spinbutton" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA spinbutton</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA spinbutton</a><br />
      				<a href="/publishing/html/09-forms/03-input_element_part1#inner_link:number" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">input type요소 참조 - UXKM number</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>spinbutton</code> 역할은 사용자가 값을 직접 입력하거나 버튼을 사용해 값을 증가 또는 감소시킬 수 있는 UI 요소를 정의합니다.
      				</li>
      				<li>
      					보조 기술은 <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code> 속성을 사용하여
      					스핀 버튼의 현재 값, 최소값, 최대값을 사용자에게 전달합니다.
      				</li>
      				<li>
      					스핀 버튼은 일반적으로 숫자 입력 필드로 사용되며, 사용자가 특정 범위 내에서 값을 선택할 수 있도록 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>spinbutton</code> 역할을 사용할 때는 반드시
      					<code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code> 속성을 설정하여
      					스핀 버튼의 현재 값과 조정 가능한 범위를 정의해야 합니다.
      				</li>
      				<li>
      					사용자가 키보드를 사용해 스핀 버튼의 값을 조정할 수 있도록,
      					<code>tabindex=&quot;0&quot;</code>을 설정하고 키보드 이벤트 핸들러를 구현해야 합니다.
      				</li>
      				<li>
      					스핀 버튼이 비활성화된 경우, <code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 보조 기술이 이를 인식할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					스핀 버튼의 현재 값을 시각적으로도 반영하여 사용자가 현재 선택된 값을 쉽게 파악할 수 있도록 해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-valuenow</strong>
      					<p>
      						스핀 버튼의 현재 값을 나타냅니다. 값은 숫자로 설정됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuemin</strong>
      					<p>
      						스핀 버튼의 최소값을 나타냅니다. 값은 숫자로 설정되며, 기본값은 <code>0</code>입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuemax</strong>
      					<p>
      						스핀 버튼의 최대값을 나타냅니다. 값은 숫자로 설정되며, 기본값은 <code>100</code>입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						스핀 버튼이 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						스핀 버튼의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 spinbutton 역할 예시</h4>
      				<p className="mt_s">
      					기본적으로 시멘틱 요소 사용을 권장합니다.
      					HTML5의 <code>&lt;input type="number"&gt;</code> 요소는 기본적으로 <code>spinbutton</code> 역할을 가지며,
      					보조 기술은 이를 스핀 버튼으로 인식합니다.<br />
      					<code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code>
      					속성을 사용하여 스핀 버튼의 현재 값과 범위를 정의해야 하며,
      					<code>tabindex=&quot;0&quot;</code>을 설정하여 키보드 탐색이 가능하도록 해야 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 spinbutton 역할 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 - aria-valuenow, aria-valuemin, aria-valuemax 속성 미제공. 이러한 속성 없이 보조 기술은 현재 값을 전달할 수 없습니다. -->
      						<div role="spinbutton">10</div>

      						<!-- 올바른 예시 -->
      						<div role="spinbutton" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" tabindex="0" style="display: inline-block; border: 1px solid #ccc; padding: 5px; width: 50px; text-align: center;">
      							10
      						</div>

      						<!-- (권장) 시멘틱 요소 사용 -->
      						<input type="number" min="0" max="100" value="10">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적으로 업데이트 가능한 spinbutton 예시</h4>
      				<p className="mt_s">
      					이 예시는 키보드를 사용해 값을 증가(<i className="key_arrow_up">위쪽 화살표</i>) 또는
      					감소(<i className="key_arrow_down">아래쪽 화살표</i>)할 수 있는 스핀 버튼을 구현한 것입니다.
      					현재 값은 <code>aria-valuenow</code> 속성에 반영되며, 시각적으로도 업데이트됩니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 동적으로 업데이트 가능한 spinbutton 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="spinbutton" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" tabindex="0" id="mySpinbutton" style="display: inline-block; border: 1px solid #ccc; padding: 5px; width: 50px; text-align: center;">
      							10
      						</div>

      						<script>
      							const spinbutton = document.getElementById('mySpinbutton');

      							spinbutton.addEventListener('keydown', function(event) {
      								let value = parseInt(spinbutton.getAttribute('aria-valuenow'));
      								if (event.key === 'ArrowUp') {
      									value = Math.min(value + 1, 100);
      								} else if (event.key === 'ArrowDown') {
      									value = Math.max(value - 1, 0);
      								}
      								spinbutton.setAttribute('aria-valuenow', value);
      								spinbutton.textContent = value;
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 spinbutton 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 스핀 버튼이 비활성화되었음을 나타내며,
      					이 상태에서는 <code>tabindex=&quot;-1&quot;</code>를 적용하여 스핀 버튼이 포커스를 받지 않도록 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 비활성화된 spinbutton 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="spinbutton" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" aria-disabled="true" tabindex="-1" style="display: inline-block; border: 1px solid #ccc; padding: 5px; width: 50px; text-align: center; color: #999;">
      							10
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">증가 및 감소 버튼이 포함된 spinbutton 예시</h4>
      				<p className="mt_s">
      					이 예시는 증가(+) 및 감소(-) 버튼이 포함된 스핀 버튼입니다.
      					사용자는 버튼을 클릭하여 값을 조정할 수 있으며, 보조 기술은 현재 값을 정확히 전달받을 수 있습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 증가 및 감소 버튼이 포함된 spinbutton 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="spinbutton" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" tabindex="0" id="spinbuttonWithControls" style="display: flex; align-items: center; border: 1px solid #ccc; width: 100px;">
      							<button onclick="adjustValue(-1)" style="width: 30px;">-</button>
      							<div id="spinbuttonValue" style="flex: 1; text-align: center;">10</div>
      							<button onclick="adjustValue(1)" style="width: 30px;">+</button>
      						</div>

      						<script>
      							function adjustValue(change) {
      								const spinbutton = document.getElementById('spinbuttonWithControls');
      								let value = parseInt(spinbutton.getAttribute('aria-valuenow'));
      								value = Math.max(0, Math.min(100, value + change));
      								spinbutton.setAttribute('aria-valuenow', value);
      								document.getElementById('spinbuttonValue').textContent = value;
      							}
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">switch (스위치 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>switch</code> 역할은 사용자가 켜기와 끄기 상태 사이를 전환할 수 있는 토글 버튼을 나타냅니다.
      				스위치는 일반적으로 두 가지 상태(예: “켜짐&quot;/&quot;꺼짐&quot;, “사용&quot;/&quot;미사용&quot;) 중 하나를 나타내며, 사용자가 이 상태를 변경할 수 있습니다.
      				이 역할은 <code>aria-checked</code> 속성을 사용하여 스위치의 현재 상태를 보조 기술이 인식할 수 있도록 합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#switch" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA switch</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA switch</a><br />
      				<a href="/publishing/html/09-forms/03-input_element_part1#inner_link:checkbox" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">input type요소 참조 - UXKM checkbox</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>switch</code> 역할은 사용자가 클릭하여 두 가지 상태(예: 켜짐/꺼짐)를 전환할 수 있는 UI 요소를 정의합니다.
      				</li>
      				<li>
      					<code>switch</code> 역할은 기본적으로 토글 버튼과 유사하지만, 스위치를 표현할 때 더 적합한 역할입니다.
      				</li>
      				<li>
      					보조 기술은 <code>aria-checked</code> 속성을 통해 스위치가 현재 켜져 있는지(<code>true</code>)
      					또는 꺼져 있는지(<code>false</code>)를 인식합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>switch</code> 역할을 사용할 때는 반드시 <code>aria-checked</code> 속성을 사용하여 스위치의 상태를 명확히 나타내야 합니다.
      					가능한 값은 <code>true</code>(켜짐)와 <code>false</code>(꺼짐)입니다.
      				</li>
      				<li>
      					키보드 접근성을 보장하기 위해 <code>tabindex=&quot;0&quot;</code>을 설정하고, 키보드 이벤트 핸들러를 통해 스위치를 제어할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					스위치가 비활성화된 경우, <code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 보조 기술이 이를 인식할 수 있도록 해야 하며,
      					시각적으로도 비활성화 상태를 명확히 나타내야 합니다.
      				</li>
      				<li>
      					스위치의 상태를 시각적으로 명확하게 표현하여 사용자가 상태 변화를 쉽게 인식할 수 있도록 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-checked</strong>
      					<p>
      						스위치의 현재 상태를 나타냅니다. 값은 <code>true</code>(켜짐) 또는 <code>false</code>(꺼짐)입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						스위치가 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						스위치의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 switch 역할 예시</h4>
      				<p className="mt_s">
      					시멘틱 요소 사용을 권장하며, HTML5의 <code>&lt;input type="checkbox"&gt;</code> 요소를 사용하면
      					기본적으로 <code>switch</code> 역할을 가지며, 보조 기술은 이를 스위치로 인식합니다.<br />
      					<code>aria-checked=&quot;false&quot;</code> 속성으로 초기 상태를 꺼짐(Off)으로 설정하고, 클릭 시 상태를 토글합니다.
      					시각적으로도 상태를 업데이트하여 사용자가 스위치의 현재 상태를 쉽게 확인할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 switch 역할 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 - aria-checked 속성 미제공 또한, 키보드 탐색을 위한 tabindex 미제공. -->
      						<div role="switch">Toggle</div>

      						<!-- 올바른 예시 -->
      						<div role="switch" aria-checked="false" tabindex="0" style="display: inline-block; padding: 10px; background-color: #ddd; cursor: pointer;">
      							Off
      						</div>

      						<script>
      							const switchElement = document.querySelector('[role="switch"]');
      							switchElement.addEventListener('click', function() {
      								const isChecked = this.getAttribute('aria-checked') === 'true';
      								this.setAttribute('aria-checked', !isChecked);
      								this.textContent = !isChecked ? 'On' : 'Off';
      								this.style.backgroundColor = !isChecked ? '#4CAF50' : '#ddd';
      							});
      						</script>

      						<!-- (권장) 시멘틱 요소 사용 -->
      						<label class="switch">
      							<input type="checkbox">
      							<span class="slider"></span>
      						</label>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적으로 업데이트 가능한 switch 예시</h4>
      				<p className="mt_s">
      					이 예시는 키보드와 마우스를 사용해 상태를 토글할 수 있는 동적 스위치를 구현한 것입니다.
      					<i className="key_enter">Enter</i> 키 또는 <i className="key_space">Space</i> 키를 눌러 스위치 상태를 변경할 수 있으며,
      					보조 기술은 이 상태 변화를 인식합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 동적으로 업데이트 가능한 switch 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="switch" aria-checked="true" tabindex="0" id="dynamicSwitch" style="display: inline-block; padding: 10px; background-color: #4CAF50; cursor: pointer;">
      							On
      						</div>

      						<script>
      							const dynamicSwitch = document.getElementById('dynamicSwitch');

      							dynamicSwitch.addEventListener('keydown', function(event) {
      								if (event.key === 'Enter' || event.key === ' ') {
      									const isChecked = this.getAttribute('aria-checked') === 'true';
      									this.setAttribute('aria-checked', !isChecked);
      									this.textContent = !isChecked ? 'On' : 'Off';
      									this.style.backgroundColor = !isChecked ? '#4CAF50' : '#ddd';
      								}
      							});

      							dynamicSwitch.addEventListener('click', function() {
      								const isChecked = this.getAttribute('aria-checked') === 'true';
      								this.setAttribute('aria-checked', !isChecked);
      								this.textContent = !isChecked ? 'On' : 'Off';
      								this.style.backgroundColor = !isChecked ? '#4CAF50' : '#ddd';
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 switch 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 스위치가 비활성화되었음을 나타냅니다.
      					이 상태에서는 스위치가 클릭되지 않게 하며, <code>tabindex=&quot;-1&quot;</code>를 적용하여 포커스를 받지 않도록 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 비활성화된 switch 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="switch" aria-checked="true" aria-disabled="true" tabindex="-1" style="display: inline-block; padding: 10px; background-color: #bbb; cursor: not-allowed;">
      							On
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">다양한 스타일의 switch 예시</h4>
      				<p className="mt_s">
      					이 예시는 스위치를 다양한 스타일로 꾸며서, 시각적으로 더 눈에 띄는 인터페이스를 제공합니다.
      					스위치가 클릭될 때마다 핸들이 이동하며 배경색도 변경됩니다.
      				</p>
      				<p className="dp_pc full_screen_code_info">(Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.</p>
      				
      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.2.16.switch.html" className="uk_editor min_height_300 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="200px" />
      </Suspense>
      </div>
      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">tab (탭 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>tab</code> 역할은 탭 인터페이스에서 사용되는 개별 탭을 나타냅니다.
      				사용자는 탭을 클릭하거나 키보드를 사용해 선택하여 관련 콘텐츠를 활성화할 수 있습니다.<br />
      				<code>tab</code> 역할은 일반적으로 <code>tablist</code> 역할과 함께 사용되며,
      				<code>tablist</code>는 여러 <code>tab</code>을 포함하는 컨테이너 역할을 합니다.
      				각 <code>tab</code> 요소는 고유한 <code>tabpanel</code>과 연관되어 있어,
      				사용자가 선택한 탭에 따라 해당 <code>tabpanel</code>이 활성화됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#tab" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA tab</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA tab</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>tab</code> 역할은 탭 인터페이스에서 개별 탭을 정의합니다.
      				</li>
      				<li>
      					사용자는 클릭하거나 키보드를 사용해 탭을 탐색하고 선택할 수 있습니다.
      				</li>
      				<li>
      					<code>aria-selected</code> 속성을 사용하여 현재 선택된 탭을 나타내며,
      					<code>aria-controls</code> 속성으로 해당 탭이 제어하는 tabpanel을 지정합니다.
      				</li>
      				<li>
      					탭은 일반적으로 <code>tablist</code> 컨테이너 안에 포함되며,
      					선택된 탭에 따라 관련 콘텐츠(<code>tabpanel</code>)가 표시됩니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>tab</code> 역할을 사용할 때는 반드시 <code>aria-selected</code> 속성을 설정하여 현재 선택된 탭을 명확히 표시해야 합니다.
      					값은 <code>true</code>(선택됨) 또는 <code>false</code>(선택되지 않음)입니다.
      				</li>
      				<li>
      					각 <code>tab</code> 요소는 <code>aria-controls</code> 속성을 사용하여 제어하는 <code>tabpanel</code>을 지정해야 합니다.
      					이 속성은 <code>tabpanel</code>의 <code>ID</code>와 연결되어야 합니다.
      				</li>
      				<li>
      					<code>tabpanel</code>은 <code>tab</code>과 연결되어야 하며,
      					탭이 선택될 때 해당 <code>tabpanel</code>만 표시되고 나머지는 숨겨져야 합니다.
      				</li>
      				<li>
      					비활성화된 탭은 <code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 표시하며, 시각적으로도 이를 나타내야 합니다.
      				</li>
      				<li>
      					키보드 내비게이션을 지원하도록 구현하여 사용자가 탭을 쉽게 탐색할 수 있도록 해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-selected</strong>
      					<p>
      						현재 탭의 선택 상태를 나타냅니다. 값은 <code>true</code>(선택됨) 또는 <code>false</code>(선택되지 않음)입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-controls</strong>
      					<p>
      						탭이 제어하는 tabpanel의 <code>ID</code>를 참조합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						탭이 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 tab 역할 예시</h4>
      				<p className="mt_s">
      					시멘틱 요소 사용을 권장합니다.<br />
      					아래는 <code>&lt;button&gt;</code> 요소를 사용하여 탭을 구현한 예제이며,
      					탭 버튼과 관련 콘텐츠가 올바르게 연결되어 보조 기술이 이 구조를 정확히 이해할 수 있도록 해야 합니다.
      					<code>tab</code>과 <code>tabpanel</code>을 올바르게 연결해야 하며,
      					<code>aria-controls</code> 속성을 사용해 각 <code>tab</code>이 제어하는 <code>tabpanel</code>을 명시하고,
      					<code>aria-selected</code> 속성으로 현재 선택된 탭을 나타냅니다.<br />
      					선택되지 않은 탭은 <code>tabindex=&quot;-1&quot;</code>을 사용해 포커스가 불가능하도록 설정해야 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 tab 역할 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 - tab과 tabpanel이 연결되지 않았고, aria-selected 및 aria-controls 속성 누락. -->
      						<div role="tab">Tab 1</div>
      						<div role="tabpanel">Content for Tab 1</div>

      						<!-- 올바른 예시 -->
      						<div role="tablist">
      							<div role="tab" id="tab1" aria-selected="true" aria-controls="panel1" tabindex="0">Tab 1</div>
      							<div role="tab" id="tab2" aria-selected="false" aria-controls="panel2" tabindex="-1">Tab 2</div>
      						</div>
      						<div role="tabpanel" id="panel1" aria-labelledby="tab1">Content for Tab 1</div>
      						<div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>Content for Tab 2</div>

      						<!-- (권장) 시멘틱 요소 사용 -->
      						<div role="tablist">
      							<button role="tab" id="tab1" aria-selected="true" aria-controls="panel1">Tab 1</button>
      							<button role="tab" id="tab2" aria-selected="false" aria-controls="panel2">Tab 2</button>
      						</div>
      						<div role="tabpanel" id="panel1" aria-labelledby="tab1">Content for Tab 1</div>
      						<div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>Content for Tab 2</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적으로 업데이트 가능한 tab 예시</h4>
      				<p className="mt_s">
      					이 예시는 탭을 동적으로 업데이트할 수 있는 기능을 구현한 것입니다.
      					사용자가 탭을 클릭하면, 이전에 선택된 탭은 비활성화되고 새 탭이 활성화됩니다.
      					보조 기술은 현재 선택된 탭과 그에 따른 콘텐츠를 정확히 전달받습니다.
      				</p>
      				<p className="dp_pc full_screen_code_info">(Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.</p>
      				
      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.2.17.tab.html" className="uk_editor min_height_300 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="200px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 tab 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 <code>tab</code> 버튼이 비활성화되었음을 나타냅니다.
      					<code>tabindex=&quot;-1&quot;</code>를 적용하여 포커스를 받지 않도록 하며, 시각적으로도 비활성화된 상태임을 표시해야 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 비활성화된 tab 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="tablist">
      							<div role="tab" id="tab1" aria-selected="true" aria-controls="panel1" tabindex="0">Tab 1</div>
      							<div role="tab" id="tab2" aria-selected="false" aria-controls="panel2" aria-disabled="true" tabindex="-1" style="color: grey;">Tab 2</div>
      						</div>
      						<div role="tabpanel" id="panel1" aria-labelledby="tab1">Content for Tab 1</div>
      						<div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>Content for Tab 2</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">키보드 내비게이션을 지원하는 tab 예시</h4>
      				<p className="mt_s">
      					이 예시는 키보드 내비게이션을 지원하는 탭 인터페이스를 구현한 것입니다.
      					사용자는 <i className="key_arrow_right">ArrowRight</i> 및 <i className="key_arrow_left">ArrowLeft</i> 키를 사용하여 탭 간에 이동할 수 있으며, 탭의 선택이 자동으로 업데이트됩니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 키보드 내비게이션을 지원하는 tab 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="tablist">
      							<div role="tab" id="tab1" aria-selected="true" aria-controls="panel1" tabindex="0">Tab 1</div>
      							<div role="tab" id="tab2" aria-selected="false" aria-controls="panel2" tabindex="-1">Tab 2</div>
      							<div role="tab" id="tab3" aria-selected="false" aria-controls="panel3" tabindex="-1">Tab 3</div>
      						</div>
      						<div role="tabpanel" id="panel1" aria-labelledby="tab1">Content for Tab 1</div>
      						<div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>Content for Tab 2</div>
      						<div role="tabpanel" id="panel3" aria-labelledby="tab3" hidden>Content for Tab 3</div>

      						<script>
      							const tabElements = document.querySelectorAll('[role="tab"]');

      							tabElements.forEach((tab, index) => {
      								tab.addEventListener('keydown', (event) => {
      									let newIndex;
      									if (event.key === 'ArrowRight') {
      										newIndex = (index + 1) % tabElements.length;
      									} else if (event.key === 'ArrowLeft') {
      										newIndex = (index - 1 + tabElements.length) % tabElements.length;
      									} else {
      										return;
      									}
      									tabElements[newIndex].focus();
      									tabElements[newIndex].click();
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">tabpanel (탭 패널 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>tabpanel</code> 역할은 탭 인터페이스에서 개별 탭(<code>tab</code>)과 연결된 콘텐츠 영역을 나타냅니다.
      				사용자가 특정 탭을 선택하면 해당 <code>tabpanel</code>이 활성화되며, 사용자는 탭과 관련된 콘텐츠를 볼 수 있습니다.
      				<code>tabpanel</code>은 <code>tablist</code> 내의 <code>tab과</code> 함께 사용되며,
      				각 <code>tab</code> 요소는 <code>aria-controls</code> 속성을 통해 자신이 제어하는 <code>tabpanel</code>을 가리킵니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#tabpanel" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA tabpanel</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA tabpanel</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>tabpanel</code> 역할은 탭 인터페이스에서 개별 탭에 연결된 콘텐츠 영역을 정의합니다.
      				</li>
      				<li>
      					사용자는 <code>tab</code> 요소를 선택하여 관련 <code>tabpanel</code>을 활성화할 수 있으며,
      					활성화된 <code>tabpanel</code>은 사용자가 현재 보고 있는 콘텐츠를 나타냅니다.
      				</li>
      				<li>
      					<code>tabpanel</code>은 <code>aria-labelledby</code> 속성을 사용하여 자신을 설명하는 탭의 <code>ID</code>를 참조하며,
      					이를 통해 보조 기술이 이 패널과 관련된 탭을 인식할 수 있습니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>tabpanel</code> 역할을 사용할 때는 반드시 <code>aria-labelledby</code> 속성을 사용하여
      					해당 <code>tabpanel</code>을 설명하는 <code>tab</code>의 <code>ID</code>를 참조해야 합니다.
      				</li>
      				<li>
      					<code>tabpanel</code>은 탭 인터페이스의 일부로 사용되며, 탭과 연결되어 있어야 합니다.
      					선택된 탭과 연결된 <code>tabpanel</code>만 표시되며, 나머지 패널은 숨겨져야 합니다.
      				</li>
      				<li>
      					<code>tabpanel</code>의 콘텐츠가 동적으로 업데이트될 경우, 사용자가 선택한 탭에 따라 관련 콘텐츠만 표시되도록 구현해야 합니다.
      				</li>
      				<li>
      					비활성화된 탭의 경우, 해당 탭과 관련된 <code>tabpanel</code>은 접근할 수 없도록 해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						<code>tabpanel</code>이 연결된 <code>tab</code>의 <code>ID</code>를 참조하여, 해당 탭과의 관계를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-describedby</strong>
      					<p>
      						<code>tabpanel</code>에 대한 추가 설명을 제공하는 요소를 참조할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-hidden</strong>
      					<p>
      						<code>tabpanel</code>이 숨겨져 있는지를 나타냅니다. <code>hidden</code> 속성과 함께 사용되어야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 tabpanel 역할 예시</h4>
      				<p className="mt_s">
      					각 <code>tabpanel</code> 요소는 <code>aria-labelledby</code> 속성을 통해 자신을 설명하는 탭의 <code>ID</code>를 참조하고 있으며,
      					또한, <code>aria-controls</code> 속성을 사용하여 각 탭이 관련된 <code>tabpanel</code>을 가리키도록 설정해야 합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 tabpanel 역할 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							tabpanel은 올바른 tab과 연결되어야 합니다. 이를 위해 aria-labelledby 속성을 사용하여 해당 탭의 ID를 참조해야 합니다.
      							또한, 초기에는 선택된 탭과 관련된 tabpanel만 표시되고, 나머지 tabpanel은 숨겨져 있어야 합니다.
      						-->
      						<div role="tabpanel">Content for Tab 1</div>

      						<!-- 올바른 예시 -->
      						<div role="tablist">
      							<div role="tab" id="tab1" aria-selected="true" aria-controls="panel1" tabindex="0">Tab 1</div>
      							<div role="tab" id="tab2" aria-selected="false" aria-controls="panel2" tabindex="-1">Tab 2</div>
      						</div>
      						<div role="tabpanel" id="panel1" aria-labelledby="tab1">Content for Tab 1</div>
      						<div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>Content for Tab 2</div>

      						<!-- (권장) 시멘틱 요소 사용 -->
      						<div role="tablist">
      							<button role="tab" id="tab1" aria-selected="true" aria-controls="panel1">Tab 1</button>
      							<button role="tab" id="tab2" aria-selected="false" aria-controls="panel2">Tab 2</button>
      						</div>
      						<div role="tabpanel" id="panel1" aria-labelledby="tab1">Content for Tab 1</div>
      						<div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>Content for Tab 2</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적으로 업데이트 가능한 tabpanel 예시</h4>
      				<p className="mt_s">
      					이 예시는 탭을 클릭할 때마다 관련된 <code>tabpanel</code>이 표시되고 나머지 패널은 숨겨지도록 동적으로 업데이트되는 기능을 구현한 것입니다.
      					선택된 탭에 따라 관련된 콘텐츠가 표시되며, 보조 기술은 이 변화된 상태를 인식할 수 있습니다.
      				</p>
      				
      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.2.18.tabpanel.html" className="uk_editor min_height_300 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="200px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 tabpanel 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 <code>tab</code> 버튼이 비활성화되었음을 나타내고 있습니다.
      					비활성화 된 탭은 포커스를 받을 수 없으며, 연결된 <code>tabpanel</code>은 표시되지 않습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 비활성화된 tabpanel 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="tablist">
      							<div role="tab" id="tab1" aria-selected="true" aria-controls="panel1" tabindex="0">Tab 1</div>
      							<div role="tab" id="tab2" aria-selected="false" aria-controls="panel2" aria-disabled="true" tabindex="-1" style="color: grey;">Tab 2</div>
      						</div>
      						<div role="tabpanel" id="panel1" aria-labelledby="tab1">Content for Tab 1</div>
      						<div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>Content for Tab 2</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">textbox (텍스트 상자 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>textbox</code> 역할은 사용자가 텍스트를 입력할 수 있는 UI 요소를 나타냅니다.
      				이 역할은 일반적으로 HTML의 <code>&lt;input&gt;</code> 요소와 <code>&lt;textarea&gt;</code> 요소에 해당하며,
      				단일 또는 여러 줄의 텍스트를 입력할 수 있는 필드를 정의합니다.
      				<code>textbox</code>는 사용자가 정보를 입력할 수 있는 기본적인 인터랙티브 요소로, 다양한 입력 유형을 지원할 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#textbox" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA textbox</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA textbox</a><br />
      				<a href="/publishing/html/09-forms/03-input_element_part1#inner_link:text" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">input type요소 참조 - UXKM input text</a><br />
      				<a href="/publishing/html/09-forms/09-textarea_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">textarea요소 참조 - UXKM textarea</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>textbox</code> 역할은 사용자가 텍스트를 입력할 수 있는 필드를 정의합니다.
      				</li>
      				<li>
      					보조 기술은 <code>aria-multiline</code>, <code>aria-required</code>,
      					<code>aria-readonly</code>, <code>aria-invalid</code>
      					등의 속성을 통해 텍스트 상자의 상태와 동작을 인식할 수 있습니다.
      				</li>
      				<li>
      					단일 줄 텍스트 상자(<code>input type="text"</code>)와
      					여러 줄 텍스트 상자(<code>textarea</code>) 모두 <code>textbox</code> 역할을 가집니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>textbox</code> 역할을 사용할 때는 사용자가 입력해야 할 내용의 목적을 명확히 설명하기 위해
      					<code>aria-label</code> 또는 <code>aria-labelledby</code> 속성을 사용해야 합니다.
      				</li>
      				<li>
      					필수 입력 필드일 경우 <code>aria-required=&quot;true&quot;</code>를 사용하여 사용자에게 이를 알립니다.
      				</li>
      				<li>
      					읽기 전용 텍스트 상자의 경우 <code>aria-readonly=&quot;true&quot;</code> 속성을 사용해 수정이 불가능함을 나타내야 합니다.
      				</li>
      				<li>
      					유효성 검사가 필요한 경우 <code>aria-invalid</code> 속성을 사용하여 입력 값이 유효한지 여부를 나타낼 수 있습니다.
      					유효하지 않은 경우 관련 메시지를 제공해야 합니다.
      				</li>
      				<li>
      					여러 줄 입력이 필요한 경우, <code>aria-multiline=&quot;true&quot;</code>
      					속성을 사용하여 보조 기술이 이 필드가 여러 줄을 지원함을 알 수 있도록 해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-required</strong>
      					<p>
      						텍스트 상자가 필수 입력 필드인지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-invalid</strong>
      					<p>
      						텍스트 상자의 입력 내용이 유효한지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-readonly</strong>
      					<p>
      						텍스트 상자가 읽기 전용인지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-multiline</strong>
      					<p>
      						텍스트 상자가 여러 줄을 지원하는지 여부를 나타냅니다. 값은 <code>true</code> 또는 <code>false</code>입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby, aria-describedby</strong>
      					<p>
      						텍스트 상자의 레이블과 설명을 참조하는 속성입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 textbox 역할 예시</h4>
      				<p className="mt_s">
      					<code>&lt;input type="text"&gt;</code> 또는 <code>&lt;textarea&gt;</code> 요소는 기본적으로 <code>textbox</code> 역할을 가지며,
      					사용자가 텍스트를 입력할 수 있는 필드로 동작합니다.
      					<code>aria-label</code> 속성을 사용해 보조 기술이 이 필드의 목적을 이해할 수 있도록 제공합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 textbox 역할 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							텍스트 상자를 나타내는 div 요소에 role="textbox"를 사용했지만, 사용자가 실제로 텍스트를 입력할 수 있는 필드로 동작하지 않습니다.
      							보조 기술이 이 요소를 텍스트 입력 필드로 인식할 수 없으며, 입력도 불가능합니다.
      						-->
      						<div role="textbox">Enter text here...</div>

      						<!-- (권장) 올바른 예시 시멘틱 요소 사용 -->
      						<textarea aria-label="Enter your message"></textarea>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">여러 줄 입력이 가능한 textbox 예시</h4>
      				<p className="mt_s">
      					
      					<code>aria-multiline=&quot;true&quot;</code> 속성을 사용하여 텍스트 상자가 여러 줄을 입력하는 필드임을 나타냅니다.
      					보조 기술은 해당 필드가 한 줄 이상의 텍스트 입력이 가능하다는 정보를 사용자에게 전달합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 여러 줄 입력이 가능한 textbox 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<textarea aria-label="Enter your message" aria-multiline="true"></textarea>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">필수 입력 필드인 textbox 예시</h4>
      				<p className="mt_s">
      					<code>aria-required=&quot;true&quot;</code> 속성을 사용하여 이 텍스트 상자가 필수 입력 필드임을 나타냅니다.
      					보조 기술은 사용자가 이 필드를 비워두고 제출하려고 할 때 이를 경고할 수 있습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 필수 입력 필드인 textbox 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-label="Enter your email" aria-required="true">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">읽기 전용 textbox 예시</h4>
      				<p className="mt_s">
      					<code>aria-readonly=&quot;true&quot;</code> 속성을 사용하여 이 텍스트 상자가 읽기 전용임을 나타냅니다.
      					사용자는 이 필드의 내용을 수정할 수 없으며, 보조 기술은 이 필드가 수정 불가능하다는 정보를 사용자에게 전달합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 읽기 전용 textbox 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-label="Username" value="Kyo-sung" aria-readonly="true">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">유효성 검사가 필요한 textbox 예시</h4>
      				<p className="mt_s">
      					<code>aria-invalid</code> 속성을 사용하여 텍스트 상자 입력 값의 유효성을 검사하는 예시입니다.
      					사용자가 올바른 이메일 형식을 입력하지 않으면, 보조 기술은 이 필드가 유효하지 않음을 경고할 수 있으며, 관련 오류 메시지를 표시합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 유효성 검사가 필요한 textbox 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-label="Enter your email" aria-invalid="false" placeholder="example@domain.com">
      						<p id="error-message" style="display: none;">Invalid email address</p>

      						<script>
      							const textbox = document.querySelector('input[aria-label="Enter your email"]');
      							textbox.addEventListener('input', function() {
      								const isValid = textbox.value.includes('@');
      								textbox.setAttribute('aria-invalid', !isValid);
      								document.getElementById('error-message').style.display = isValid ? 'none' : 'block';
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">treeitem (트리 항목 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>treeitem</code> 역할은 트리 구조 내에서 개별 항목을 나타냅니다.
      				<code>treeitem</code>은 보통 계층적 데이터 구조를 표현하는 트리 컴포넌트 내에서 사용되며,
      				각 항목은 다른 항목을 포함하거나 포함하지 않을 수 있습니다.
      				<code>treeitem</code>은 일반적으로 <code>tree</code> 또는 <code>group</code> 역할과 함께 사용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#treeitem" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA treeitem</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/treeitem_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA treeitem</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>treeitem</code> 역할은 트리 구조의 개별 항목을 정의하며, 사용자는 이를 클릭하거나 확장/축소할 수 있습니다.
      				</li>
      				<li>
      					트리 항목은 <code>aria-expanded</code> 속성을 사용하여 현재 하위 항목이 표시되는지 여부를 나타냅니다.
      				</li>
      				<li>
      					<code>treeitem</code>은 계층적 구조를 표현하기 위해 <code>group</code> 역할을 가진 컨테이너에 포함될 수 있으며,
      					최상위 항목은 <code>tree</code> 역할을 가진 컨테이너에 직접 포함됩니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>treeitem</code> 역할을 사용할 때는 필수적으로
      					<code>aria-expanded</code> 속성을 설정하여 하위 항목의 표시 여부를 명확히 해야 합니다.
      					값은 <code>true</code>(확장됨) 또는 <code>false</code>(축소됨)입니다.
      				</li>
      				<li>
      					트리 항목이 하위 항목을 포함할 경우, 이 하위 항목들은 <code>group</code> 역할을 가진 컨테이너에 포함되어야 하며,
      					이 컨테이너는 <code>treeitem</code> 내에 있어야 합니다.
      				</li>
      				<li>
      					키보드 내비게이션을 지원하도록 구현하여 사용자가 트리 항목을 쉽게 탐색하고 확장/축소할 수 있도록 해야 합니다.
      				</li>
      				<li>
      					비활성화된 트리 항목의 경우, <code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 이를 명확히 표시해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-expanded</strong>
      					<p>
      						트리 항목의 하위 항목이 확장되었는지 여부를 나타냅니다. 값은 <code>true</code>(확장됨) 또는 <code>false</code>(축소됨)입니다.
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
      				<h4 className="ml_mn">기본 treeitem 역할 예시</h4>
      				<p className="mt_s">
      					<code>tree</code> 역할을 가진 컨테이너 안에 <code>treeitem</code>을 포함시켜 트리 구조를 정의합니다.
      					<code>aria-expanded</code> 속성을 사용하여 첫 번째 항목이 확장된 상태임을 나타내고,
      					해당 항목에 포함된 하위 항목들은 <code>group</code> 역할을 가진 컨테이너에 포함되어 제공합니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 기본 treeitem 역할 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!--
      							잘못된 예시
      							treeitem 요소가 단독으로 사용되고 있으며, 이를 포함하는 트리 구조(tree 역할)가 정의되지 않았습니다.
      							또한, 하위 항목의 확장 상태를 나타내는 aria-expanded 속성이 누락되었습니다.
      						-->
      						<div role="textbox">Enter text here...</div>

      						<!-- 올바른 예시
      						<div role="tree">
      							<div role="treeitem" aria-expanded="true" tabindex="0">Item 1
      								<div role="group">
      									<div role="treeitem">Sub-item 1</div>
      									<div role="treeitem">Sub-item 2</div>
      								</div>
      							</div>
      							<div role="treeitem" aria-expanded="false" tabindex="-1">Item 2</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 확장/축소 가능한 treeitem 예시</h4>
      				<p className="mt_s">
      					이 예시는 사용자가 <code>treeitem</code>을 클릭하면 하위 항목의 표시 여부를 토글할 수 있는 트리 구조를 구현합니다.
      					<code>aria-expanded</code> 속성은 클릭에 따라 동적으로 업데이트되며, 하위 항목(<code>group</code> 역할)이 표시되거나 숨겨집니다.
      				</p>
      				<p className="dp_pc full_screen_code_info">(Full screen) 버튼을 클릭하여 전체 화면으로 예제를 확인하세요.</p>
      				
      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.2.2.20.treeitem.html" className="uk_editor min_height_300 mb_result_height_220" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="220px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">키보드 내비게이션을 지원하는 treeitem 예시</h4>
      				<p className="mt_s">
      					이 예시는 키보드 내비게이션을 지원하는 트리 구조를 구현한 것입니다.
      					사용자는 <i className="key_arrow_right">ArrowRight</i> 및 <i className="key_arrow_left">ArrowLeft</i> 키를 사용하여 트리 항목을 확장하거나 축소할 수 있으며,
      					<i className="key_arrow_down">ArrowDown</i> 및 <i className="key_arrow_up">ArrowUp</i> 키를 사용해 항목 간을 탐색할 수 있습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 키보드 내비게이션을 지원하는 treeitem 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="tree" id="keyboardTree">
      							<div role="treeitem" aria-expanded="false" tabindex="0">Item 1
      								<div role="group" hidden>
      									<div role="treeitem">Sub-item 1</div>
      									<div role="treeitem">Sub-item 2</div>
      								</div>
      							</div>
      							<div role="treeitem" aria-expanded="false" tabindex="-1">Item 2</div>
      						</div>

      						<script>
      							const treeItems = document.querySelectorAll('#keyboardTree [role="treeitem"]');

      							treeItems.forEach((item, index) => {
      								item.addEventListener('keydown', function(event) {
      									if (event.key === 'ArrowRight' && this.getAttribute('aria-expanded') === 'false') {
      										this.setAttribute('aria-expanded', 'true');
      										this.querySelector('[role="group"]').hidden = false;
      									} else if (event.key === 'ArrowLeft' && this.getAttribute('aria-expanded') === 'true') {
      										this.setAttribute('aria-expanded', 'false');
      										this.querySelector('[role="group"]').hidden = true;
      									} else if (event.key === 'ArrowDown') {
      										treeItems[Math.min(index + 1, treeItems.length - 1)].focus();
      									} else if (event.key === 'ArrowUp') {
      										treeItems[Math.max(index - 1, 0)].focus();
      									}
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 treeitem 예시</h4>
      				<p className="mt_s">
      					<code>aria-disabled=&quot;true&quot;</code> 속성을 사용하여 비활성화된 트리 항목을 나타냈습니다.
      					이 항목은 포커스를 받을 수 없으며, 시각적으로도 비활성화된 상태임을 나타내고 있습니다.
      				</p>
      				
      <CodeBlock title="위젯 역할 / 비활성화된 treeitem 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="tree">
      							<div role="treeitem" aria-expanded="false" tabindex="0">Item 1</div>
      							<div role="treeitem" aria-expanded="false" aria-disabled="true" tabindex="-1" style="color: grey;">Item 2 (Disabled)</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.WAI_ARIA}/02_wai-aria_role_02_01.png`} alt="독립형 위젯 역할(Standalone Widget Roles)" />
      		<figcaption>
      			<b>[독립형 위젯 역할(Standalone Widget Roles)]</b><br />
      			<a href={`${IMG.WAI_ARIA}/02_wai-aria_role_02_01.png`} className="mt_ms box_link" title="새창 열림" target="_blank" rel="noreferrer">크게 보기</a>
      		</figcaption>
      	</figure>


      <footer className="reference_box">
      	<strong className="tit">독립형 위젯 역할(Standalone Widget Roles) | WAI-ARIA 역할 참조</strong>
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

export default RolesWidgetStandalonePage
