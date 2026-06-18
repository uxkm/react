import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "attrsWidgets",
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
  title: "위젯 속성(Widget Attributes) | WAI-ARIA 상태 및 속성",
  description: "WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)의 상태 및 속성(State and Properties)은 웹 애플리케이션의 접근성을 향상시키기 위해 HTML 요소에 추가적인 의미와 기능을 부여하는 메커니즘입니다. 이 페이지에서는 WAI-ARIA의 상태 및 속성 중 위젯 속성(Widget Attributes)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function AttrsWidgetsPart1Page() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		<b>위젯 속성(Widget Attributes)</b>은 위젯의 동작, 외관, 상호작용 방식을 정의하는 속성을 의미합니다.
      		위젯은 웹 애플리케이션에서 사용자와 상호작용할 수 있는 요소를 나타내며,
      		이들 속성은 위젯이 어떻게 표시되고 작동하는지를 결정합니다.
      		웹 개발에서는 이러한 속성을 사용하여 다양한 사용자 인터페이스 요소를 설정하고 제어할 수 있습니다.<br />
      		특히 장애가 있는 사용자들을 위한 접근성을 개선하기 위해 중요한 역할을 합니다.
      	</p>
      	<p className="reference mt_ms">
      		<a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA Authoring Practices</a><br />
      		<a href="https://www.w3.org/TR/wai-aria-1.2/#attrs_widgets" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA Widget Attributes</a>
      	</p>
      </blockquote>











      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-autocomplete 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-autocomplete</code> 속성은 사용자가 입력한 값에 따라 시스템이 자동으로 완성하는 입력 필드의 동작을 정의합니다.
      				이 속성은 입력 중인 텍스트 필드에서 제공되는 자동 완성 제안을 설명하며,
      				사용자가 어떤 방식으로 선택할 수 있는지에 대한 정보를 제공하는 데 사용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-autocomplete" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-autocomplete)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-autocomplete)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-autocomplete 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>none</strong>
      					<p>
      						자동 완성이 없음을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>inline</strong>
      					<p>
      						자동 완성 텍스트가 필드 내에서 즉시 채워짐을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>list</strong>
      					<p>
      						자동 완성 제안이 목록으로 제공됨을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>both</strong>
      					<p>
      						자동 완성 텍스트가 필드 내에서 채워지며, 목록으로도 제안이 제공됨을 나타냅니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;input&gt;</strong>
      					<p>
      						텍스트 입력을 받는 HTML 요소로, <code>aria-autocomplete</code> 속성이 자주 사용됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;textarea&gt;</strong>
      					<p>
      						여러 줄의 텍스트를 입력받는 HTML 요소로, <code>aria-autocomplete</code> 속성을 사용할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div&gt;</strong>
      					<p>
      						자동 완성 제안을 표시하는 컨테이너로 사용할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						<code>aria-autocomplete</code>는 자동 완성 기능이 활성화된 텍스트 입력 필드에만 사용해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 값 설정</strong>
      					<p>
      						<code>none</code>, <code>inline</code>, <code>list</code>, <code>both</code> 중 상황에 맞는 값을 설정해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>보조 기술 지원</strong>
      					<p>
      						<code>aria-autocomplete</code> 속성은 보조 기술(예: 스크린 리더)에서 사용자가 입력 필드의 자동 완성 동작을 이해하고 사용할 수 있도록 도움을 줍니다.
      					</p>
      				</li>
      				<li>
      					<strong>키보드 접근성</strong>
      					<p>
      						자동 완성 제안을 키보드로 쉽게 탐색할 수 있도록 키보드 접근성을 고려해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					<code>aria-autocomplete</code>의 값으로 유효하지 않은 <code>invalid-value</code>가 사용되었습니다.
      					속성 값은 <code>none</code>, <code>inline</code>, <code>list</code>, <code>both</code> 중 하나여야 합니다.
      				</p>
      				
      <CodeBlock title="aria-autocomplete 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-autocomplete="invalid-value" aria-controls="suggestions">
      						<div id="suggestions"></div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">속성값 none 활용 예시</h4>
      				<p className="mt_s">
      					이 예시는 자동 완성 기능이 없는 입력 필드를 나타냅니다.
      					<code>aria-autocomplete=&quot;none&quot;</code>을 사용하여 사용자에게 자동 완성이 없음을 명확히 알립니다.
      				</p>
      				
      <CodeBlock title="aria-autocomplete 속성 / 속성값 none 활용" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-autocomplete="none" placeholder="Enter text here">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">속성값 inline 활용 예시</h4>
      				<p className="mt_s">
      					<code>aria-autocomplete=&quot;inline&quot;</code>은 사용자가 입력하는 동안 자동 완성된 텍스트가 입력 필드에 바로 채워지는 경우를 나타냅니다.
      					사용자는 즉시 입력된 내용을 볼 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-autocomplete 속성 / 속성값 inline 활용" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-autocomplete="inline" placeholder="Search here" aria-haspopup="true" aria-expanded="false">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">속성값 list 활용 예시</h4>
      				<p className="mt_s">
      					<code>aria-autocomplete=&quot;list&quot;</code>는 사용자가 입력하는 동안 자동 완성 제안 목록이 표시됨을 나타냅니다.
      					사용자는 목록에서 제안을 선택할 수 있으며, <code>aria-controls</code> 속성으로 해당 제안 목록과의 관계를 정의합니다.
      				</p>
      				
      <CodeBlock title="aria-autocomplete 속성 / 속성값 list 활용" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-autocomplete="list" aria-controls="suggestions" aria-haspopup="true" aria-expanded="false">
      						<div id="suggestions" role="listbox">
      							<div role="option">Option 1</div>
      							<div role="option">Option 2</div>
      							<div role="option">Option 3</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">속성값 both 활용 예시</h4>
      				<p className="mt_s">
      					<code>aria-autocomplete=&quot;both&quot;</code>를 사용하여 사용자가 입력하는 동안 자동 완성 제안이 나타나고,
      					동시에 입력 필드에 자동 완성된 텍스트가 채워집니다.
      					<code>aria-activedescendant</code> 속성을 사용해 현재 활성화된 제안을 명확히 나타내고,
      					<code>aria-label</code>을 통해 보조 기술이 제안 목록의 역할을 이해할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="aria-autocomplete 속성 / 속성값 both 활용" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-autocomplete="both" aria-controls="suggestions" aria-haspopup="true" aria-expanded="false" aria-activedescendant="suggestion1">
      						<div id="suggestions" role="listbox" aria-label="Search suggestions">
      							<div id="suggestion1" role="option">Apple</div>
      							<div id="suggestion2" role="option">Banana</div>
      							<div id="suggestion3" role="option">Cherry</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">부가 활용 예시</h4>
      				<p className="mt_s">
      					이 예시에서는 사용자가 도시 이름을 입력할 때 자동 완성 제안을 제공합니다.
      					<code>aria-autocomplete=&quot;list&quot;</code>를 사용해 사용자가 선택할 수 있는 제안 목록을 제공합니다.
      					각 제안은 <code>role=&quot;option&quot;</code>으로 지정되어 있으며, 입력 필드와 제안 목록은 <code>aria-controls</code>로 연결됩니다.
      				</p>
      				
      <CodeBlock title="aria-autocomplete 속성 / 부가 활용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-autocomplete="list" aria-controls="city-suggestions" placeholder="Enter city">
      						<div id="city-suggestions" role="listbox">
      							<div role="option">New York</div>
      							<div role="option">Los Angeles</div>
      							<div role="option">Chicago</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-checked 상태</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-checked</code>는 ARIA(Accessible Rich Internet Applications)에서 사용하는 상태(state) 속성으로,
      				주로 체크박스, 라디오 버튼, 토글 버튼과 같은 선택 가능한 UI 요소에 적용됩니다.
      				이 속성은 보조 기술(예: 스크린 리더)에 요소의 체크 상태를 전달하며,
      				요소가 선택되었는지, 선택되지 않았는지, 또는 혼합 상태(mixed)인지를 명확하게 나타냅니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-checked" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-checked)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-checked)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-checked 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>true</strong>
      					<p>
      						요소가 선택되었음을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>false</strong>
      					<p>
      						요소가 선택되지 않았음을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>mixed</strong>
      					<p>
      						체크박스가 일부만 선택된 상태를 나타냅니다(예: 트리 구조에서 일부 하위 항목만 선택된 경우).
      					</p>
      				</li>
      				<li>
      					<strong>기본값 없음</strong>
      					<p>
      						속성이 없거나 설정되지 않은 경우, 보조 기술은 체크 상태를 특정할 수 없습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;input type="checkbox"&gt;</strong>
      					<p>
      						체크박스 입력 필드.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;input type="radio"&gt;</strong>
      					<p>
      						라디오 버튼 입력 필드.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="checkbox"&gt;</strong>
      					<p>
      						체크박스 역할을 하는 div 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;button&gt;</strong>
      					<p>
      						토글 버튼으로 사용될 수 있는 HTML 요소.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>정확한 상태 반영</strong>
      					<p>
      						<code>aria-checked</code> 속성 값은 요소의 실제 상태와 일치해야 합니다.<br />
      						예를 들어, 체크박스가 선택되지 않은 경우에는 <code>aria-checked=&quot;false&quot;</code>로 설정해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>동적 업데이트</strong>
      					<p>
      						요소의 상태가 변경될 때마다 <code>aria-checked</code> 속성을 동적으로 업데이트해야 보조 기술이 이를 올바르게 인식할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>지원하지 않는 요소에 적용 시 주의</strong>
      					<p>
      						기본적으로 체크 가능한 요소(예: <code>&lt;input type="checkbox"&gt;</code>)가 아닌 경우
      						<code>role</code> 속성을 사용해 해당 요소가 체크 가능한 것으로 인식되도록 해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					<code>aria-checked</code>는 토글 버튼에서 사용될 수 있지만,
      					이 경우 <code>role=&quot;checkbox&quot;</code> 또는 <code>role=&quot;switch&quot;</code>를 추가하여 버튼이 체크 가능함을 명확히 해야 합니다.
      				</p>
      				
      <CodeBlock title="aria-checked 상태 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-checked="true">Toggle Button</button>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 토글 버튼에서 <code>role=&quot;switch&quot;</code>와 <code>aria-checked</code>를 함께 사용하여
      					버튼이 활성화된 상태임을 보조 기술에 명확하게 전달합니다.
      				</p>
      				
      <CodeBlock title="aria-checked 상태 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button role="switch" aria-checked="true">Toggle Button</button>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">기본 체크박스 예시</h4>
      				<p className="mt_s">
      					이 체크박스는 기본적으로 선택되지 않은 상태입니다.
      					<code>aria-checked=&quot;false&quot;</code> 속성으로 이 상태를 보조 기술에 전달합니다.
      				</p>
      				
      <CodeBlock title="aria-checked 상태 / 기본 체크박스 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="checkbox" id="agree" aria-checked="false">
      						<label for="agree">I agree to the terms and conditions</label>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 체크박스 예시</h4>
      				<p className="mt_s">
      					이 예시는 커스텀 체크박스로,
      					<code>div</code> 요소에 <code>role=&quot;checkbox&quot;</code>를 설정하고 <code>aria-checked</code> 속성을 사용해 체크 상태를 보조 기술에 알립니다.
      					클릭 시 체크 상태가 반전되도록 설정되어 있습니다.
      				</p>
      				
      <CodeBlock title="aria-checked 상태 / 동적 체크박스 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="checkbox" aria-checked="true" tabindex="0" id="customCheckbox">Subscribe to newsletter</div>

      						<script>
      						document.getElementById('customCheckbox').addEventListener('click', function() {
      								var checked = this.getAttribute('aria-checked') === 'true';
      								this.setAttribute('aria-checked', !checked);
      						});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">혼합 상태(mixed) 예시</h4>
      				<p className="mt_s">
      					이 예시는 혼합 상태를 나타내는 체크박스를 구현한 것입니다.<br />
      					예를 들어, 사용자가 트리 구조의 일부 항목만 선택했을 때 전체 선택 체크박스에 혼합 상태(<code>aria-checked=&quot;mixed&quot;</code>)를 표시할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-checked 상태 / mixed 상태 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="checkbox" aria-checked="mixed" tabindex="0">Select all items</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">부가 활용 예시</h4>
      				<p className="mt_s">
      					이 예시는 라디오 버튼을 커스텀 방식으로 구현한 것입니다.
      					사용자가 하나의 옵션을 선택하면 다른 옵션의 <code>aria-checked</code> 속성이 <code>false</code>로 변경되어 하나의 라디오 버튼만 선택되도록 합니다.
      				</p>
      				
      <CodeBlock title="aria-checked 상태 / 부가 활용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="radio" aria-checked="false" tabindex="0" id="option1">Option 1</div>
      						<div role="radio" aria-checked="true" tabindex="0" id="option2">Option 2</div>

      						<script>
      						document.getElementById('option1').addEventListener('click', function() {
      								this.setAttribute('aria-checked', 'true');
      								document.getElementById('option2').setAttribute('aria-checked', 'false');
      						});
      						document.getElementById('option2').addEventListener('click', function() {
      								this.setAttribute('aria-checked', 'true');
      								document.getElementById('option1').setAttribute('aria-checked', 'false');
      						});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-disabled 상태</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-disabled</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 상태(state) 속성으로,
      				사용자 인터페이스(UI) 요소가 비활성화되었음을 보조 기술(예: 스크린 리더)에 전달합니다.
      				이 속성은 요소가 현재 상호작용할 수 없거나 사용할 수 없는 상태임을 나타냅니다.
      				비활성화된 요소는 시각적으로 표시될 수 있지만, 사용자와의 상호작용은 차단됩니다.<br />
      				기본적으로 비활성화 기능을 제공하지 않는 요소에 <code>aria-disabled</code>를 사용하는 것이 적절하며,
      				이미 <code>disabled</code> 속성을 지원하는 요소에서는 그 속성을 사용하는 것이 좋습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-disabled" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-disabled)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-disabled)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-checked 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>true</strong>
      					<p>
      						요소가 비활성화되어 있음을 나타냅니다. 사용자는 해당 요소와 상호작용할 수 없습니다.
      					</p>
      				</li>
      				<li>
      					<strong>false</strong>
      					<p>
      						요소가 활성화되어 있음을 나타냅니다. 사용자는 해당 요소와 상호작용할 수 있습니다. (기본적으로 <code>false</code> 값은 설정하지 않습니다.)
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;button&gt;</strong>
      					<p>
      						버튼 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;input&gt;</strong>
      					<p>
      						입력 필드 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;select&gt;</strong>
      					<p>
      						드롭다운 메뉴 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;a&gt;</strong>
      					<p>
      						링크 요소(종종 사용자가 클릭할 수 없는 상태를 표현할 때 사용합니다).
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>적용 대상 요소</strong>
      					<p>
      						<code>aria-disabled</code>는 대부분의 상호작용 가능한 UI 요소에 사용할 수 있습니다.<br />
      						그러나, 본래 비활성화 기능을 지원하는 HTML 요소(예: <code>button</code>, <code>input</code>)에서는
      						기본 HTML 속성인 <code>disabled</code>를 사용하는 것이 권장됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>시각적 표현과 일치</strong>
      					<p>
      						<code>aria-disabled=&quot;true&quot;</code>로 설정된 요소는 시각적으로도 비활성화된 상태임을 명확히 해야 합니다(예: 흐릿한 색상 처리).
      					</p>
      				</li>
      				<li>
      					<strong>키보드 접근성</strong>
      					<p>
      						<code>aria-disabled</code>를 사용하면 해당 요소는 포커스를 받을 수 없습니다.
      						키보드 내비게이션 시 이러한 요소를 건너뛸 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>상호작용 차단</strong>
      					<p>
      						비활성화된 요소는 클릭이나 입력과 같은 상호작용을 완전히 차단해야 하며, 이벤트 리스너도 작동하지 않도록 처리해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					본래 비활성화 기능을 지원하는 HTML 요소에서는 <code>aria-disabled</code> 대신 HTML <code>disabled</code> 속성을 사용하는 것이 더 적절합니다.
      				</p>
      				
      <CodeBlock title="aria-disabled 상태 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-disabled="true">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					본래 비활성화 기능을 지원하는 <code>input</code> 요소에서는 HTML <code>disabled</code> 속성을 사용하는 것이 적절합니다.
      					이 속성은 자동으로 보조 기술과 시각적 표현을 처리합니다.
      				</p>
      				
      <CodeBlock title="aria-disabled 상태 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" disabled>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">기본 버튼 예시</h4>
      				<p className="mt_s">
      					이 버튼은 <code>aria-disabled=&quot;true&quot;</code>로 설정되어 있으며, 사용자는 이 버튼과 상호작용할 수 없습니다.
      					스크린 리더는 이 상태를 사용자가 인식할 수 있도록 안내합니다.
      				</p>
      				
      <CodeBlock title="aria-disabled 상태 / 기본 버튼 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-disabled="true">Submit</button>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">커스텀 버튼 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>div</code> 요소를 버튼으로 사용하고 있으며, <code>aria-disabled=&quot;true&quot;</code>를 통해 이 요소가 비활성화 상태임을 나타냅니다.
      					시각적으로도 회색으로 표시하여 비활성화 상태를 표현하고 있습니다.
      				</p>
      				
      <CodeBlock title="aria-disabled 상태 / 커스텀 버튼 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="button" aria-disabled="true" tabindex="0" style="color: grey;">Custom Button</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비활성화된 링크 예시</h4>
      				<p className="mt_s">
      					이 링크는 <code>aria-disabled=&quot;true&quot;</code>로 설정되어 있으며,
      					<code>pointer-events: none;</code>을 사용해 클릭을 차단하고, 회색으로 표시하여 비활성화 상태를 시각적으로도 표현하고 있습니다.
      				</p>
      				
      <CodeBlock title="aria-disabled 상태 / 비활성 링크 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<a href="#" aria-disabled="true" style="pointer-events: none; color: grey;">Disabled Link</a>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 상태 변경 예시</h4>
      				<p className="mt_s">
      					이 예시는 버튼이 <code>aria-disabled=&quot;true&quot;</code>로 설정된 상태에서 클릭 이벤트를 감지하여 경고 메시지를 표시합니다.
      					이처럼 동적 상호작용에서 비활성화 상태를 반영해야 합니다.
      				</p>
      				
      <CodeBlock title="aria-disabled 상태 / 동적 상태 변경" language="javascript" className="uk_gist_code_box mt_m">
      {`<button id="dynamicButton" aria-disabled="true">Click Me</button>

      						<script>
      						document.getElementById('dynamicButton').addEventListener('click', function() {
      							if (this.getAttribute('aria-disabled') === 'true') {
      								alert('Button is disabled');
      							} else {
      								// Perform the action
      							}
      						});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">부가 활용 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>select</code> 요소가 비활성화된 상태임을 나타냅니다. 사용자는 드롭다운 메뉴를 열거나 선택할 수 없습니다.
      				</p>
      				
      <CodeBlock title="aria-disabled 상태 / 부가 활용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 부가 활용 예시 -->
      						<select aria-disabled="true">
      							<option>Option 1</option>
      							<option>Option 2</option>
      						</select>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-errormessage 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-errormessage</code> 속성은 입력 오류에 대한 사용자 정의 오류 메시지를 보조 기술(예: 스크린 리더)에 연결하는 데 사용되는 ARIA(Property) 속성입니다.
      				이 속성은 사용자에게 제공되는 오류 메시지의 내용을 지정하며,
      				보조 기술이 해당 오류 메시지를 사용자에게 읽어줄 수 있도록 합니다.<br />
      				<code>aria-errormessage</code> 속성은 주로 폼 필드와 같이 사용자 입력이 필요한 요소에서 사용되며,
      				사용자가 잘못된 값을 입력했을 때 제공되는 오류 메시지와 연동됩니다.
      				이 속성은 오류 메시지가 표시될 때 <code>aria-invalid=&quot;true&quot;</code> 속성과 함께 사용해야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-errormessage" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-errormessage)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-errormessage)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-errormessage 속성 값</h3>
      			<p className="mt_m">
      				<code>aria-errormessage</code> 속성의 값은 사용자에게 표시될 오류 메시지를 포함하고 있는 요소의 <code>ID</code>를 참조합니다.
      				이 값은 해당 오류 메시지 요소와 입력 필드를 연결하며,
      				보조 기술이 사용자가 입력 오류를 발생시켰을 때 해당 메시지를 읽어줄 수 있도록 합니다.
      			</p>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>값의 형식</strong>
      					<p>
      						<code>aria-errormessage</code>의 값은 반드시 오류 메시지를 포함하는 요소의 <code>ID</code>여야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>예시 값</strong>
      					<p>
      						&quot;emailError&quot;, &quot;passwordError&quot;, &quot;usernameError&quot;
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;input&gt;</strong>
      					<p>
      						입력 필드 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;textarea&gt;</strong>
      					<p>
      						여러 줄의 텍스트를 입력받는 HTML 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;select&gt;</strong>
      					<p>
      						드롭다운 메뉴 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;form&gt;</strong>
      					<p>
      						폼 요소 내의 다양한 입력 필드와 함께 사용.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-invalid와 함께 사용</strong>
      					<p>
      						<code>aria-errormessage</code> 속성은 오류 상태를 나타내는 <code>aria-invalid=&quot;true&quot;</code> 속성과 함께 사용해야 합니다.
      						이 속성이 없다면 오류 메시지는 비활성 상태로 인식될 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>명확한 오류 메시지 ID 연결</strong>
      					<p>
      						<code>aria-errormessage</code> 속성의 값은 오류 메시지를 포함하는 요소의 <code>ID</code>를 가리켜야 합니다.
      						이 메시지는 사용자가 쉽게 이해할 수 있도록 명확하고 간결하게 작성해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>동적 업데이트</strong>
      					<p>
      						입력 필드의 상태가 변경되어 오류 메시지가 업데이트될 경우,
      						보조 기술이 이를 인식할 수 있도록 <code>aria-errormessage</code> 속성의 값을 동적으로 업데이트해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					오류 메시지 div 요소와 <code>input</code> 필드 사이에 <code>aria-errormessage</code> 속성이 사용되지 않았습니다.
      					이로 인해 보조 기술이 오류 메시지를 사용자에게 전달하지 못할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-errormessage 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<form>
      							<label for="phone">Phone:</label>
      							<input type="text" id="phone" aria-invalid="true">
      							<div style="color: red;">Please enter a valid phone number.</div>
      						</form>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 오류 메시지가 <code>aria-errormessage</code> 속성을 통해 <code>input</code> 필드와 올바르게 연결된 상황을 보여줍니다.
      					보조 기술은 이 설정을 통해 사용자에게 오류 메시지를 적절히 전달할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-errormessage 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<form>
      							<label for="phone">Phone:</label>
      							<input type="text" id="phone" aria-invalid="true" aria-errormessage="phoneError">
      							<div id="phoneError" style="color: red;">Please enter a valid phone number.</div>
      						</form>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">기본 오류 메시지 예시</h4>
      				<p className="mt_s">
      					이 예시는 사용자가 잘못된 이메일 주소를 입력했을 때 표시되는 오류 메시지를 구현한 것입니다.
      					<code>aria-errormessage</code> 속성은 오류 메시지가 포함된 <code>div</code> 요소의 <code>ID</code>를 참조하며,
      					<code>aria-invalid=&quot;true&quot;</code> 속성과 함께 사용됩니다.
      				</p>
      				
      <CodeBlock title="aria-errormessage 속성 / 기본 오류 메시지" language="javascript" className="uk_gist_code_box mt_m">
      {`<form>
      							<label for="email">Email:</label>
      							<input type="email" id="email" aria-invalid="true" aria-errormessage="emailError">
      							<div id="emailError" style="color: red; display: block;">Please enter a valid email address.</div>
      						</form>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 오류 메시지 및 초점 이동 예시</h4>
      				<p className="mt_s">
      					이 예시는 사용자가 폼을 제출할 때 입력 필드에 오류가 있으면 동적으로 오류 메시지를 표시하고,
      					오류가 발생한 필드로 초점을 이동하는 방법을 보여줍니다.
      					<code>aria-errormessage</code> 속성은 오류 메시지가 포함된 요소와 연결되어 있으며,
      					<code>aria-invalid</code> 속성은 사용자의 입력 상태에 따라 동적으로 업데이트됩니다.
      					첫 번째 오류가 발생한 필드로 초점이 이동하여 사용자가 쉽게 오류를 수정할 수 있도록 도와줍니다.
      				</p>
      				
      <CodeBlock title="aria-errormessage 속성 / 동적 오류 메시지" language="javascript" className="uk_gist_code_box mt_m">
      {`<form id="userForm" novalidate>
      							<!-- Username field -->
      							<label for="username">Username:</label>
      							<input type="text" id="username" aria-errormessage="usernameError" aria-invalid="false" required>
      							<div id="usernameError" class="error">이름을 입력해 주세요.</div>
      							<br><br>

      							<!-- Email field -->
      							<label for="email">Email:</label>
      							<input type="email" id="email" aria-errormessage="emailError" aria-invalid="false" required>
      							<div id="emailError" class="error">유효한 이메일 주소를 입력해 주세요.</div>
      							<br><br>

      							<button type="submit">제출하기</button>
      						</form>

      						<script>
      							document.getElementById('userForm').addEventListener('submit', function(event) {
      								event.preventDefault();  // 폼 제출 방지
      								let hasError = false;
      								&nbsp;
      								// Username validation
      								const usernameInput = document.getElementById('username');
      								const usernameError = document.getElementById('usernameError');
      								if (usernameInput.value.trim() === "") {
      									usernameInput.setAttribute('aria-invalid', 'true');
      									usernameError.style.display = 'block';
      									if (!hasError) {
      										usernameInput.focus();
      										hasError = true;
      									}
      								} else {
      									usernameInput.setAttribute('aria-invalid', 'false');
      									usernameError.style.display = 'none';
      								}
      								&nbsp;
      								// Email validation
      								const emailInput = document.getElementById('email');
      								const emailError = document.getElementById('emailError');
      								const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
      								if (!emailPattern.test(emailInput.value.trim())) {
      									emailInput.setAttribute('aria-invalid', 'true');
      									emailError.style.display = 'block';
      									if (!hasError) {
      										emailInput.focus();
      										hasError = true;
      									}
      								} else {
      									emailInput.setAttribute('aria-invalid', 'false');
      									emailError.style.display = 'none';
      								}
      								&nbsp;
      								// 폼 제출 성공 시 알림
      								if (!hasError) {
      									alert('성공적으로 제출되었습니다!!');
      								}
      							});
      						</script>`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_ml">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/03-waiAriaAttrs/3.1.4.aria-errormessage.html" className="uk_editor min_height_400 mb_result_height_370" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="400px" mbResultHeight="370px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">부가 활용 예시</h4>
      				<p className="mt_s">
      					이 예시는 비밀번호 필드에 대한 오류 메시지를 표시하는 상황을 보여줍니다.
      					<code>aria-errormessage</code> 속성은 사용자에게 비밀번호 길이에 대한 구체적인 오류 메시지를 전달합니다.
      				</p>
      				
      <CodeBlock title="aria-errormessage 속성 / 부가 활용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<form>
      							<label for="password">Password:</label>
      							<input type="password" id="password" aria-invalid="true" aria-errormessage="passwordError">
      							<div id="passwordError" style="color: red; display: block;">Password must be at least 8 characters long.</div>
      						</form>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-expanded 상태</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-expanded</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 상태(state) 속성으로,
      				사용자가 상호작용할 수 있는 UI 요소(예: 버튼, 링크, 메뉴)가 확장되었는지 또는 축소되었는지를 보조 기술(예: 스크린 리더)에 전달합니다.<br />
      				이 속성은 주로 드롭다운 메뉴, 아코디언 패널, 트리 구조 등에서 사용되며, 사용자에게 현재 해당 요소의 상태를 명확하게 전달하는 역할을 합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-expanded" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-expanded)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-expanded)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-expanded 상태 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>true</strong>
      					<p>
      						요소가 확장된 상태임을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>false</strong>
      					<p>
      						요소가 축소된 상태임을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>기본값 없음</strong>
      					<p>
      						속성이 없거나 설정되지 않은 경우, 보조 기술은 확장/축소 상태를 인식하지 않습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;button&gt;</strong>
      					<p>
      						확장 가능/축소 가능한 콘텐츠를 제어하는 버튼 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;a&gt;</strong>
      					<p>
      						드롭다운 메뉴 또는 서브메뉴를 확장/축소하는 링크 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div&gt;</strong>
      					<p>
      						아코디언 패널이나 기타 확장 가능한 콘텐츠를 포함하는 컨테이너 요소.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>명확한 상태 표시</strong>
      					<p>
      						<code>aria-expanded</code> 속성은 UI 요소의 실제 상태와 항상 일치해야 합니다.<br />
      						예를 들어, 드롭다운 메뉴가 열리면 <code>aria-expanded=&quot;true&quot;</code>로 설정하고,
      						닫히면 <code>aria-expanded=&quot;false&quot;</code>로 설정해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>동적 업데이트</strong>
      					<p>
      						사용자가 상호작용하여 요소의 상태가 변경될 때마다 <code>aria-expanded</code> 속성을 동적으로 업데이트해야
      						보조 기술이 이를 올바르게 인식할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>적용 대상 요소</strong>
      					<p>
      						<code>aria-expanded</code>는 주로 버튼이나 링크와 같은 상호작용 가능한 요소에 사용되며,
      						이들이 제어하는 확장/축소 가능한 콘텐츠와 연결됩니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시에서는 <code>aria-expanded</code> 속성이 전혀 사용되지 않았기 때문에,
      					보조 기술이 콘텐츠가 확장되었는지 여부를 알 수 없습니다. 이로 인해 접근성이 떨어질 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-expanded 상태 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button>Toggle Content</button>
      						<div id="content">This is some content.</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-expanded</code> 속성을 올바르게 사용하여,
      					버튼이 제어하는 콘텐츠가 확장되었는지 여부를 보조 기술에 전달합니다.
      					사용자가 클릭할 때마다 속성이 동적으로 업데이트되어 정확한 상태를 반영합니다.
      				</p>
      				
      <CodeBlock title="aria-expanded 상태 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-expanded="false" aria-controls="content">Toggle Content</button>
      						<div id="content" style="display: none;">This is some content.</div>

      						<script>
      						document.querySelector('button').addEventListener('click', function() {
      							var content = document.getElementById('content');
      							var expanded = this.getAttribute('aria-expanded') === 'true';
      							this.setAttribute('aria-expanded', !expanded);
      							content.style.display = expanded ? 'none' : 'block';
      						});`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">기본 드롭다운 메뉴 예시</h4>
      				<p className="mt_s">
      					이 예시는 버튼을 클릭하여 드롭다운 메뉴를 열고 닫을 수 있는 기본적인 드롭다운 메뉴 구현을 보여줍니다.
      					<code>aria-expanded</code> 속성은 버튼이 제어하는 메뉴의 확장 상태를 명확히 나타내며,
      					사용자가 클릭할 때마다 동적으로 업데이트됩니다.
      				</p>
      				
      <CodeBlock title="aria-expanded 상태 / 기본 드롭다운 메뉴" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-expanded="false" aria-controls="menu" id="dropdownButton">Menu</button>
      						<ul id="menu" style="display: none;">
      							<li><a href="#">Option 1</a></li>
      							<li><a href="#">Option 2</a></li>
      							<li><a href="#">Option 3</a></li>
      						</ul>

      						<script>
      						document.getElementById('dropdownButton').addEventListener('click', function() {
      							var menu = document.getElementById('menu');
      							var expanded = this.getAttribute('aria-expanded') === 'true';
      							this.setAttribute('aria-expanded', !expanded);
      							menu.style.display = expanded ? 'none' : 'block';
      						});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">아코디언 패널 예시</h4>
      				<p className="mt_s">
      					이 예시는 아코디언 패널을 구현한 예시입니다. 각 패널은 버튼으로 제어되며,
      					<code>aria-expanded</code> 속성은 패널이 확장되었는지 또는 축소되었는지를 나타냅니다.
      					사용자가 패널을 클릭하여 상태를 변경할 때마다 <code>aria-expanded</code>가 동적으로 업데이트됩니다.
      				</p>
      				
      <CodeBlock title="aria-expanded 상태 / 아코디언 패널" language="javascript" className="uk_gist_code_box mt_m">
      {`<div>
      							<button aria-expanded="false" aria-controls="section1" id="accordionButton1">Section 1</button>
      							<div id="section1" style="display: none;">Content for section 1.</div>

      							<button aria-expanded="false" aria-controls="section2" id="accordionButton2">Section 2</button>
      							<div id="section2" style="display: none;">Content for section 2.</div>
      						</div>

      						<script>
      							document.querySelectorAll('button[aria-expanded]').forEach(button => {
      								button.addEventListener('click', function() {
      									var content = document.getElementById(this.getAttribute('aria-controls'));
      									var expanded = this.getAttribute('aria-expanded') === 'true';
      									this.setAttribute('aria-expanded', !expanded);
      									content.style.display = expanded ? 'none' : 'block';
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">부가 활용 예시</h4>
      				<p className="mt_s">
      					이 예시는 링크 요소를 사용하여 서브메뉴를 확장/축소하는 예시입니다.
      					<code>aria-expanded</code> 속성이 링크에 적용되어, 사용자가 서브메뉴의 현재 상태를 알 수 있도록 합니다.
      					링크를 클릭할 때 서브메뉴의 상태가 동적으로 업데이트됩니다.
      				</p>
      				
      <CodeBlock title="aria-expanded 상태 / 부가 활용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<a href="#" aria-expanded="false" aria-controls="submenu" id="submenuLink">Submenu</a>
      						<ul id="submenu" style="display: none;">
      							<li><a href="#">Sub Option 1</a></li>
      							<li><a href="#">Sub Option 2</a></li>
      						</ul>

      						<script>
      							document.getElementById('submenuLink').addEventListener('click', function(event) {
      								event.preventDefault();
      								var submenu = document.getElementById('submenu');
      								var expanded = this.getAttribute('aria-expanded') === 'true';
      								this.setAttribute('aria-expanded', !expanded);
      								submenu.style.display = expanded ? 'none' : 'block';
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-haspopup 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-haspopup</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 속성(Property)으로,
      				UI 요소가 팝업(popup)과 같은 추가적인 인터페이스 요소를 트리거할 수 있음을 보조 기술(예: 스크린 리더)에 알리는 데 사용됩니다.
      				이 속성은 메뉴, 대화 상자, 트리 리스트, 그리드 등의 팝업 요소가 사용자 상호작용에 의해 나타나거나 열릴 수 있음을 명확히 전달합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-haspopup" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-haspopup)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-haspopup)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-haspopup 속성 값</h3>
      			<p className="mt_m">
      				aria-haspopup 속성은 팝업의 유형을 지정하는 다양한 값을 가질 수 있습니다.
      			</p>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>false</strong>
      					<p>
      						팝업이 없음을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>true</strong>
      					<p>
      						팝업 메뉴가 있음을 나타냅니다(이 값은 menu 값과 동일합니다).
      					</p>
      				</li>
      				<li>
      					<strong>menu</strong>
      					<p>
      						팝업 메뉴가 있음을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>listbox</strong>
      					<p>
      						팝업 목록 상자가 있음을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>tree</strong>
      					<p>
      						팝업 트리뷰가 있음을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>grid</strong>
      					<p>
      						팝업 그리드가 있음을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>dialog</strong>
      					<p>
      						팝업 대화 상자가 있음을 나타냅니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;button&gt;</strong>
      					<p>
      						메뉴, 대화 상자, 그리드 등의 팝업 요소를 트리거하는 버튼 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;a&gt;</strong>
      					<p>
      						서브메뉴나 팝업을 트리거하는 링크 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div&gt;</strong>
      					<p>
      						커스텀 위젯에서 팝업 요소를 트리거하는 컨테이너.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>적절한 값 선택</strong>
      					<p>
      						<code>aria-haspopup</code> 속성은 요소가 트리거하는 팝업의 유형에 따라 적절한 값을 선택해야 합니다.<br />
      						예를 들어, 메뉴를 트리거하는 요소에는 <code>aria-haspopup=&quot;menu&quot;</code>를 사용합니다.
      					</p>
      				</li>
      				<li>
      					<strong>팝업의 명확한 표시</strong>
      					<p>
      						이 속성을 사용하여 보조 기술에 팝업의 존재를 알리면,
      						사용자가 키보드나 스크린 리더로 상호작용할 때 팝업이 나타날 수 있음을 알 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>연관된 속성들과 함께 사용</strong>
      					<p>
      						<code>aria-expanded</code>, <code>aria-controls</code> 등의 속성과 함께 사용하여 팝업의 상태(예: 열림/닫힘)와 관계를 명확하게 전달할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시에서는 <code>aria-haspopup</code> 속성이 전혀 사용되지 않았기 때문에,
      					보조 기술이 버튼이 팝업 메뉴를 트리거할 수 있는지 여부를 알 수 없습니다.
      				</p>
      				
      <CodeBlock title="aria-haspopup 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button>Show Options</button>
      						<ul>
      							<li><a href="#">Option 1</a></li>
      							<li><a href="#">Option 2</a></li>
      							<li><a href="#">Option 3</a></li>
      						</ul>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-haspopup=&quot;menu&quot;</code> 속성을 사용하여,
      					버튼이 팝업 메뉴를 트리거할 수 있음을 보조 기술에 전달합니다.
      					이로 인해 접근성이 향상되며, 사용자가 버튼과 상호작용할 때 팝업 메뉴의 존재를 인식할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-haspopup 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-haspopup="menu" aria-controls="optionsMenu">Show Options</button>
      						<ul id="optionsMenu" style="display: none;">
      							<li><a href="#">Option 1</a></li>
      							<li><a href="#">Option 2</a></li>
      							<li><a href="#">Option 3</a></li>
      						</ul>

      						<script>
      							document.querySelector('button[aria-haspopup="menu"]').addEventListener('click', function() {
      								var menu = document.getElementById('optionsMenu');
      								menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">aria-haspopup=&quot;menu&quot; - 팝업 메뉴 트리거 예시</h4>
      				<p className="mt_s">
      					이 예시는 버튼이 팝업 메뉴를 트리거하는 기본적인 메뉴 구현을 보여줍니다.
      					<code>aria-haspopup=&quot;menu&quot;</code>는 버튼이 메뉴를 열 수 있음을 나타내며,
      					<code>aria-expanded</code> 속성은 메뉴가 열려 있는지 여부를 나타냅니다.
      				</p>
      				
      <CodeBlock title="aria-haspopup 속성 / 팝업 메뉴 트리거" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-haspopup="menu" aria-expanded="false" aria-controls="menu" id="menuButton">Open Menu</button>
      						<ul id="menu" style="display: none;">
      							<li><a href="#">Option 1</a></li>
      							<li><a href="#">Option 2</a></li>
      							<li><a href="#">Option 3</a></li>
      						</ul>

      						<script>
      							document.getElementById('menuButton').addEventListener('click', function() {
      								var menu = document.getElementById('menu');
      								var expanded = this.getAttribute('aria-expanded') === 'true';
      								this.setAttribute('aria-expanded', !expanded);
      								menu.style.display = expanded ? 'none' : 'block';
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">aria-haspopup=”listbox” - 팝업 목록 상자 예시</h4>
      				<p className="mt_s">
      					이 예시는 링크가 목록 상자(listbox)를 트리거하는 상황을 보여줍니다.
      					<code>aria-haspopup=&quot;listbox&quot;</code> 속성을 통해 링크가 팝업 목록 상자를 열 수 있음을 명확히 나타냅니다.
      				</p>
      				
      <CodeBlock title="aria-haspopup 속성 / 팝업 목록 상자 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<a href="#" aria-haspopup="listbox" aria-controls="dropdownList" id="dropdownLink">Select an Option</a>
      						<ul id="dropdownList" role="listbox" style="display: none;">
      							<li role="option">Option 1</li>
      							<li role="option">Option 2</li>
      							<li role="option">Option 3</li>
      						</ul>

      						<script>
      							document.getElementById('dropdownLink').addEventListener('click', function(event) {
      								event.preventDefault();
      								var listbox = document.getElementById('dropdownList');
      								var isVisible = listbox.style.display === 'block';
      								listbox.style.display = isVisible ? 'none' : 'block';
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">aria-haspopup=”tree” - 팝업 트리뷰 예시</h4>
      				<p className="mt_s">
      					이 예시는 버튼이 트리뷰(treeview)를 트리거하는 상황을 보여줍니다.
      					<code>aria-haspopup=&quot;tree&quot;</code> 속성을 통해 이 버튼이 트리뷰를 열 수 있음을 보조 기술에 전달합니다.
      				</p>
      				
      <CodeBlock title="aria-haspopup 속성 / 팝업 트리뷰 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-haspopup="tree" aria-controls="treeMenu" id="treeButton">Toggle Tree Menu</button>
      						<ul id="treeMenu" role="tree" style="display: none;">
      							<li role="treeitem">Item 1
      								<ul role="group">
      									<li role="treeitem">Sub-item 1</li>
      									<li role="treeitem">Sub-item 2</li>
      								</ul>
      							</li>
      							<li role="treeitem">Item 2</li>
      						</ul>

      						<script>
      							document.getElementById('treeButton').addEventListener('click', function() {
      								var treeMenu = document.getElementById('treeMenu');
      								var isVisible = treeMenu.style.display === 'block';
      								treeMenu.style.display = isVisible ? 'none' : 'block';
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">aria-haspopup=”grid” - 팝업 그리드 예시</h4>
      				<p className="mt_s">
      					이 예시는 버튼이 팝업 그리드(grid)를 트리거하는 상황을 보여줍니다.
      					<code>aria-haspopup=&quot;grid&quot;</code> 속성을 통해 이 버튼이 그리드를 열 수 있음을 명확히 나타냅니다.
      				</p>
      				
      <CodeBlock title="aria-haspopup 속성 / 팝업 그리드 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-haspopup="grid" aria-controls="gridMenu" id="gridButton">Show Grid</button>
      						<table id="gridMenu" role="grid" style="display: none;">
      							<tr>
      								<th role="columnheader">Header 1</th>
      								<th role="columnheader">Header 2</th>
      							</tr>
      							<tr role="row">
      								<td role="gridcell">Cell 1</td>
      								<td role="gridcell">Cell 2</td>
      							</tr>
      							<tr role="row">
      								<td role="gridcell">Cell 3</td>
      								<td role="gridcell">Cell 4</td>
      							</tr>
      						</table>

      						<script>
      							document.getElementById('gridButton').addEventListener('click', function() {
      								var gridMenu = document.getElementById('gridMenu');
      								var isVisible = gridMenu.style.display === 'block';
      								gridMenu.style.display = isVisible ? 'none' : 'block';
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">aria-haspopup=”dialog” - 팝업 대화 상자 예시</h4>
      				<p className="mt_s">
      					이 예시는 버튼을 클릭하여 대화 상자(dialog)를 트리거하는 예시입니다.
      					<code>aria-haspopup=&quot;dialog&quot;</code>는 이 버튼이 대화 상자를 열 수 있음을 나타내며,
      					대화 상자가 열리면 보조 기술은 이를 인식할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-haspopup 속성 / 팝업 대화 상자 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-haspopup="dialog" aria-controls="dialog" id="openDialog">Open Dialog</button>
      						<div id="dialog" role="dialog" style="display: none;" aria-labelledby="dialogTitle">
      							<h2 id="dialogTitle">Dialog Title</h2>
      							<p>This is a dialog box.</p>
      							<button id="closeDialog">Close</button>
      						</div>

      						<script>
      							document.getElementById('openDialog').addEventListener('click', function() {
      								var dialog = document.getElementById('dialog');
      								dialog.style.display = 'block';
      								dialog.focus();
      							});

      							document.getElementById('closeDialog').addEventListener('click', function() {
      								var dialog = document.getElementById('dialog');
      								dialog.style.display = 'none';
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-hidden 상태</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-hidden</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 상태(state) 속성으로,
      				특정 UI 요소와 그 자식 요소들이 보조 기술(예: 스크린 리더)에 의해 무시되도록 설정합니다.
      				이 속성은 시각적으로는 표시되지만 보조 기술에서는 무시되어야 하는 콘텐츠를 숨기거나,
      				반대로 화면에는 보이지 않지만 보조 기술에서 접근 가능하게 할 때 사용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-hidden" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-hidden)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-hidden)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-hidden 상태 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>true</strong>
      					<p>
      						요소가 보조 기술에 의해 무시됨을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>false</strong>
      					<p>
      						요소가 보조 기술에 의해 접근 가능함을 나타냅니다.(기본값으로 간주)
      					</p>
      				</li>
      				<li>
      					<strong>기본값 없음</strong>
      					<p>
      						속성이 없으면 요소는 보조 기술에 의해 일반적으로 접근 가능합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>모든 HTML 요소에 적용 가능</strong>
      					<p>
      						<code>&lt;div&gt;</code>,
      						<code>&lt;span&gt;</code>,
      						<code>&lt;section&gt;</code>,
      						<code>&lt;header&gt;</code>,
      						<code>&lt;footer&gt;</code>,
      						<code>&lt;button&gt;</code>,
      						<code>&lt;input&gt;</code>,
      						<code>&lt;img&gt;</code> 등
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>콘텐츠 숨기기</strong>
      					<p>
      						<code>aria-hidden=&quot;true&quot;</code>를 사용하여 보조 기술에서 특정 콘텐츠를 숨길 때는,
      						해당 콘텐츠가 시각적으로는 유효하더라도 보조 기술 사용자에게 혼동을 주지 않도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중복된 콘텐츠 피하기</strong>
      					<p>
      						이미 다른 방식으로 제공된 콘텐츠나 보조 기술이 처리할 필요가 없는 장식적 콘텐츠에
      						<code>aria-hidden=&quot;true&quot;</code>를 적용하여 중복되는 내용을 피할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>동적 상태 변경</strong>
      					<p>
      						특정 상황에서만 보조 기술에 의해 무시되도록 하려면, <code>aria-hidden</code> 상태를 동적으로 업데이트할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-hidden=&quot;true&quot;</code> 속성을 상호작용 가능한 요소(버튼)에 적용했기 때문에,
      					이 버튼은 시각적으로는 보이지만 스크린 리더에서는 완전히 무시됩니다. 이는 사용자의 접근성을 해칠 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-hidden 상태 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-hidden="true">
      							<button>Click me</button>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					상호작용 가능한 요소는 일반적으로 <code>aria-hidden</code>을 사용하지 않습니다. 대신, 이러한 요소는 보조 기술에서도 접근 가능하도록 해야 합니다.
      				</p>
      				
      <CodeBlock title="aria-hidden 상태 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div>
      							<button>Click me</button>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">화면에 보이는 텍스트 숨기기 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-hidden=&quot;true&quot;</code>를 사용하여, 이 텍스트가 화면에는 보이지만 스크린 리더와 같은 보조 기술에서는 무시되도록 합니다.
      					이 방식은 장식적 텍스트나 중복된 정보에 유용합니다.
      				</p>
      				
      <CodeBlock title="aria-hidden 상태 / 보조 기술이 무시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-hidden="true">
      							이 텍스트는 화면에 보이지만 스크린 리더에서는 숨겨져 있습니다.
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">대체 텍스트 제공 예시</h4>
      				<p className="mt_s">
      					이 예시는 장식용 이미지를 스크린 리더에서 무시하도록 설정합니다.
      					이미지에 의미가 없으므로, <code>aria-hidden=&quot;true&quot;</code>와 빈 <code>alt</code> 속성을 함께 사용하여 보조 기술이 이 이미지를 무시하도록 합니다.
      				</p>
      				
      <CodeBlock title="aria-hidden 상태 / 대체 텍스트 제공" language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-hidden="true">
      							<img src="decorative-image.jpg" alt="">
      						</div>
      						<p>이 이미지는 장식용이며 스크린 리더에서 숨겨져 있습니다.</p>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">중복된 메뉴 항목 숨기기 예시</h4>
      				<p className="mt_s">
      					이 예시는 중복된 메뉴 항목을 스크린 리더에서 숨기는 방법을 보여줍니다.
      					<code>aria-hidden=&quot;true&quot;</code>를 사용하여, 보조 기술이 중복된 항목을 무시하도록 설정합니다.
      				</p>
      				
      <CodeBlock title="aria-hidden 상태 / 중복된 메뉴 숨김" language="javascript" className="uk_gist_code_box mt_m">
      {`<nav>
      							<ul>
      								<li><a href="#home">Home</a></li>
      								<li><a href="#about">About</a></li>
      								<li aria-hidden="true"><a href="#services">Services</a></li> <!-- Hidden from screen readers -->
      								<li><a href="#contact">Contact</a></li>
      							</ul>
      						</nav>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적으로 요소 숨기기 예시</h4>
      				<p className="mt_s">
      					이 예시는 버튼을 클릭하여 특정 콘텐츠의 가시성을 동적으로 전환하는 방법을 보여줍니다.
      					<code>aria-hidden</code> 속성은 동적으로 업데이트되어 보조 기술에서 해당 요소가 무시될지 여부를 결정합니다.
      				</p>
      				
      <CodeBlock title="aria-hidden 상태 / 동적으로 요소 숨김" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="dynamicContent">This content may be hidden from screen readers.</div>
      						<button onclick="toggleVisibility()">Toggle Visibility</button>

      						<script>
      							function toggleVisibility() {
      								var content = document.getElementById('dynamicContent');
      								var isHidden = content.getAttribute('aria-hidden') === 'true';
      								content.setAttribute('aria-hidden', !isHidden);
      							}
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">부가 활용 예시</h4>
      				<p className="mt_s">
      					이 예시는 장식용 아이콘을 <code>aria-hidden=&quot;true&quot;</code>로 설정하여 스크린 리더에서 무시되도록 합니다.
      					스크린 리더는 별표 아이콘을 읽지 않고 <mark>&quot;Save&quot;</mark> 버튼만 사용자에게 전달합니다.
      				</p>
      				
      <CodeBlock title="aria-hidden 상태 / 부가 활용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<span class="icon" aria-hidden="true">★</span>
      						<button>Save</button>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-invalid 상태</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-invalid</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 상태(state) 속성으로,
      				사용자 입력 필드의 현재 값이 유효하지 않음을 보조 기술(예: 스크린 리더)에 알리는 데 사용됩니다.
      				이 속성은 주로 폼 요소(예: 텍스트 입력, 체크박스 등)에서 사용되며,
      				사용자가 유효하지 않은 데이터를 입력했을 때 해당 요소에 <code>aria-invalid</code> 속성을 설정하여 이를 명확히 표시합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-invalid" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-invalid)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-invalid)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-invalid 상태 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>false</strong>
      					<p>
      						필드의 현재 값이 유효함을 나타냅니다(기본값).
      					</p>
      				</li>
      				<li>
      					<strong>true</strong>
      					<p>
      						필드의 현재 값이 유효하지 않음을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>grammar</strong>
      					<p>
      						문법 오류가 있음을 나타냅니다(예: 텍스트에서 문법 오류가 발생한 경우).
      					</p>
      				</li>
      				<li>
      					<strong>spelling</strong>
      					<p>
      						철자 오류가 있음을 나타냅니다(예: 텍스트에서 철자 오류가 발생한 경우).
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;input&gt;</strong>
      					<p>
      						텍스트 입력 필드 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;textarea&gt;</strong>
      					<p>
      						여러 줄의 텍스트 입력 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;select&gt;</strong>
      					<p>
      						드롭다운 메뉴 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;form&gt;</strong>
      					<p>
      						다양한 입력 필드를 포함하는 폼 요소.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>정확한 상태 반영</strong>
      					<p>
      						<code>aria-invalid</code> 속성은 필드의 실제 유효성 상태를 정확하게 반영해야 합니다.
      						유효하지 않은 필드에 대해 <code>aria-invalid=&quot;true&quot;</code>를 설정하여 사용자가 문제를 인식할 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>오류 메시지와 함께 사용</strong>
      					<p>
      						<code>aria-invalid</code> 속성은 오류 메시지를 함께 제공하는 것이 일반적입니다.
      						이를 통해 사용자는 오류의 원인을 이해하고 수정할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>동적 업데이트</strong>
      					<p>
      						사용자가 입력을 수정하고 유효성을 검토할 때마다 <code>aria-invalid</code> 상태를 동적으로 업데이트하여 보조 기술이 최신 상태를 반영하도록 해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-invalid=&quot;true&quot;</code> 속성이 설정된 상태에서 오류 메시지나 추가 설명이 제공되지 않기 때문에,
      					사용자는 필드가 왜 유효하지 않은지 이해할 수 없습니다.
      				</p>
      				
      <CodeBlock title="aria-invalid 상태 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-invalid="true">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 오류 메시지를 함께 제공하여 사용자가 필드가 유효하지 않은 이유를 이해할 수 있도록 도와줍니다.
      					<code>aria-errormessage</code> 속성은 오류 메시지와 필드를 연결합니다.
      				</p>
      				
      <CodeBlock title="aria-invalid 상태 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-invalid="true" aria-errormessage="error1">
      						<div id="error1" style="color: red;">This field is required.</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">기본 입력 필드 예시</h4>
      				<p className="mt_s">
      					이 예시는 사용자가 잘못된 이메일 주소를 입력했을 때 입력 필드에 <code>aria-invalid=&quot;true&quot;</code>를 설정하여 유효하지 않음을 표시합니다.
      					오류 메시지는 <code>aria-errormessage</code> 속성을 통해 제공됩니다.
      				</p>
      				
      <CodeBlock title="aria-invalid 상태 / 기본 입력 필드" language="javascript" className="uk_gist_code_box mt_m">
      {`<form>
      							<label for="email">Email:</label>
      							<input type="email" id="email" aria-invalid="true" aria-errormessage="emailError">
      							<div id="emailError" style="color: red;">Please enter a valid email address.</div>
      						</form>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 유효성 검사 예시</h4>
      				<p className="mt_s">
      					이 예시는 사용자가 폼을 제출할 때 각 필드의 유효성을 동적으로 검사하여 <code>aria-invalid</code> 속성을 업데이트하는 방법을 보여줍니다.
      					유효하지 않은 필드에는 <code>aria-invalid=&quot;true&quot;</code>가 설정되고, 이에 따른 오류 메시지가 표시됩니다.
      				</p>
      				
      <CodeBlock title="aria-invalid 상태 / 동적 유효성 검사" language="javascript" className="uk_gist_code_box mt_m">
      {`<form id="registrationForm">
      							<label for="username">Username:</label>
      							<input type="text" id="username" aria-invalid="false" aria-errormessage="usernameError">
      							<div id="usernameError" style="color: red; display: none;">Username is required.</div>

      							<label for="password">Password:</label>
      							<input type="password" id="password" aria-invalid="false" aria-errormessage="passwordError">
      							<div id="passwordError" style="color: red; display: none;">Password must be at least 8 characters long.</div>

      							<button type="submit">Register</button>
      						</form>

      						<script>
      							document.getElementById('registrationForm').addEventListener('submit', function(event) {
      								var isValid = true;
      								&nbsp;
      								// Username validation
      								var username = document.getElementById('username');
      								var usernameError = document.getElementById('usernameError');
      								if (username.value.trim() === '') {
      									username.setAttribute('aria-invalid', 'true');
      									usernameError.style.display = 'block';
      										isValid = false;
      								} else {
      									username.setAttribute('aria-invalid', 'false');
      									usernameError.style.display = 'none';
      								}
      								&nbsp;
      								// Password validation
      								var password = document.getElementById('password');
      								var passwordError = document.getElementById('passwordError');
      								if (password.value.length < 8) {
      									password.setAttribute('aria-invalid', 'true');
      									passwordError.style.display = 'block';
      									isValid = false;
      								} else {
      									password.setAttribute('aria-invalid', 'false');
      									passwordError.style.display = 'none';
      								}
      								&nbsp;
      								if (!isValid) {
      									event.preventDefault(); // Prevent form submission if validation fails
      								}
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">문법 오류 예시</h4>
      				<p className="mt_s">
      					이 예시는 텍스트 입력 필드에서 문법 오류가 있는 경우를 나타냅니다.
      					<code>aria-invalid=&quot;grammar&quot;</code>는 문법 오류가 있음을 나타내며, 보조 기술이 이를 사용자에게 전달할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="aria-invalid 상태 / 문법 오류 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<textarea aria-invalid="grammar" aria-errormessage="grammarError">This is an example sentence with a mistake</textarea>
      						<div id="grammarError" style="color: red;">There is a grammar error in your text.</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">철자 오류 예시</h4>
      				<p className="mt_s">
      					이 예시는 텍스트 입력 필드에서 철자 오류가 있는 경우를 나타냅니다.
      					<code>aria-invalid=&quot;spelling&quot;</code>은 철자 오류가 있음을 나타내며, 보조 기술이 이를 사용자에게 알릴 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-invalid 상태 / 철자 오류 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<textarea aria-invalid="spelling" aria-errormessage="spellingError">This is a smaple text with spelling errors.</textarea>
      						<div id="spellingError" style="color: red;">There are spelling errors in your text.</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">부가 활용 예시</h4>
      				<p className="mt_s">
      					이 예시는 장식용 아이콘을 <code>aria-hidden=&quot;true&quot;</code>로 설정하여 스크린 리더에서 무시되도록 합니다.
      					스크린 리더는 별표 아이콘을 읽지 않고 “Save” 버튼만 사용자에게 전달합니다.
      				</p>
      				
      <CodeBlock title="aria-invalid 상태 / 부가 활용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<select aria-invalid="false" id="countrySelect" aria-errormessage="countryError">
      							<option value="">Select a country</option>
      							<option value="usa">United States</option>
      							<option value="canada">Canada</option>
      						</select>
      						<div id="countryError" style="color: red; display: none;">Please select a country.</div>

      						<script>
      							document.getElementById('countrySelect').addEventListener('change', function() {
      								var error = document.getElementById('countryError');
      								if (this.value === '') {
      									this.setAttribute('aria-invalid', 'true');
      									error.style.display = 'block';
      								} else {
      									this.setAttribute('aria-invalid', 'false');
      									error.style.display = 'none';
      								}
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-label 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-label</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 속성(Property)으로,
      				요소에 접근할 때 보조 기술(예: 스크린 리더)에 의해 사용자에게 읽히는 레이블을 제공하는 역할을 합니다.
      				이 속성은 요소에 시각적인 레이블이 없거나, 화면에 표시된 텍스트와는 다른 레이블을 제공해야 할 때 사용됩니다.
      				또한, 버튼, 입력 필드, 링크 등 다양한 요소에 사용되며, 사용자의 경험을 일관되게 유지하면서 접근성을 높이는 데 중요한 역할을 합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-label" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-label)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-label)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-label 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>문자열 값(String)</strong>
      					<p>
      						요소에 대한 대체 텍스트로, 보조 기술이 이 텍스트를 사용자에게 읽어줍니다.<br />
      						예) “Submit”, “Search”, “Close menu”.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;button&gt;</strong>
      					<p>
      						버튼 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;input&gt;</strong>
      					<p>
      						텍스트 입력 필드 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;a&gt;</strong>
      					<p>
      						링크 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div&gt;</strong>
      					<p>
      						다른 인터랙티브 요소와 함께 사용할 수 있는 컨테이너 요소.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>명확한 레이블 제공</strong>
      					<p>
      						<code>aria-label</code>의 값은 명확하고 간결한 텍스트로 설정되어야 하며, 요소의 목적을 이해할 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>시각적 레이블과의 일관성 유지</strong>
      					<p>
      						<code>aria-label</code>을 사용하는 경우,
      						요소에 시각적인 레이블이 없다면 스크린 리더 사용자와 시각적인 사용자 간에 일관된 경험을 제공하도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중복 레이블 피하기</strong>
      					<p>
      						<code>aria-label</code>을 사용하여 레이블을 설정할 때는 중복되는 레이블이 없도록 주의해야 하며,
      						필요할 경우 <code>aria-labelledby</code>를 고려할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 버튼에는 레이블이 제공되지만, 버튼의 시각적인 요소가 전혀 없어서 시각적인 사용자들은 버튼의 목적을 알 수 없습니다.
      					레이블을 추가했더라도, 시각적으로도 사용자가 버튼의 기능을 인식할 수 있도록 해야 합니다.
      				</p>
      				
      <CodeBlock title="aria-label 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-label="Submit Form"></button>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-label</code> 속성을 사용해 보조 기술 사용자에게 <mark>&quot;Submit Form&quot;</mark>이라는 명확한 레이블을 제공하면서,
      					시각적인 사용자에게는 체크 아이콘을 통해 버튼의 기능을 인식할 수 있도록 설정합니다.
      				</p>
      				
      <CodeBlock title="aria-label 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-label="Submit Form">
      							<span aria-hidden="true">✔</span> <!-- 시각적인 아이콘 또는 텍스트 제공 -->
      						</button>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">레이블이 없는 아이콘 버튼에 레이블 제공 예시</h4>
      				<p className="mt_s">
      					이 예시는 시각적인 텍스트 레이블이 없는 아이콘 버튼에 <code>aria-label=&quot;Close&quot;</code>를 추가하여,
      					보조 기술 사용자가 이 버튼의 목적을 이해할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="aria-label 속성 / 버튼에 레이블 제공" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-label="Close">
      							<svg width="16" height="16" aria-hidden="true">
      								<!-- SVG content -->
      							</svg>
      						</button>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">검색 입력 필드에 레이블 제공 예시</h4>
      				<p className="mt_s">
      					이 예시는 시각적인 레이블이 없고,
      					<code>placeholder</code> 텍스트가 레이블 역할을 하지 않는 검색 입력 필드에
      					<code>aria-label=&quot;Search&quot;</code>를 추가하여 보조 기술이 이 필드를 적절히 설명할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="aria-label 속성 / 입력 필드에 레이블" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-label="Search" placeholder="Search...">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">링크 텍스트 대신 레이블 제공 예시</h4>
      				<p className="mt_s">
      					이 예시는 링크의 시각적인 텍스트 대신, <code>aria-label</code>을 사용하여 더 구체적인 설명을 제공합니다.
      					시각적인 텍스트는 <mark>&quot;More info&quot;</mark>이지만,
      					스크린 리더 사용자에게는 <mark>&quot;Learn more about our services&quot;</mark>라고 읽히도록 설정되었습니다.
      				</p>
      				
      <CodeBlock title="aria-label 속성 / 링크 레이블 제공" language="javascript" className="uk_gist_code_box mt_m">
      {`<a href="#" aria-label="Learn more about our services">
      							<span aria-hidden="true">More info</span>
      						</a>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">부가 활용 예시 - 가시적인 텍스트가 없는 스크린 리더 전용 레이블</h4>
      				<p className="mt_s">
      					이 예시는 가시적인 텍스트가 없는 영역에 <code>aria-label</code>을 사용해 스크린 리더 전용 레이블을 제공합니다.
      					이 레이블은 <mark>&quot;Navigation menu&quot;</mark>로 설정되어 있어, 보조 기술 사용자가 이 영역의 목적을 이해할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-label 속성 / 부가 활용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="region" aria-label="Navigation menu" tabindex="0">
      							<ul>
      								<li><a href="#">Home</a></li>
      								<li><a href="#">About</a></li>
      								<li><a href="#">Contact</a></li>
      							</ul>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-modal 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-modal</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 속성(Property)으로,
      				현재 요소(일반적으로 대화 상자(dialog))가 모달 대화 상자임을 보조 기술(예: 스크린 리더)에 알리는 데 사용됩니다.
      				<code>aria-modal</code> 속성은 대화 상자가 모달임을 보조 기술에 전달하여,
      				사용자가 모달이 열려 있는 동안 다른 UI 요소와 상호작용할 수 없음을 명확히 알리는 중요한 ARIA 속성입니다.<br />
      				이 속성은 포커스 관리, 백그라운드 콘텐츠 비활성화 등의 기능과 함께 사용하여 모달 대화 상자가 제대로 작동하도록 해야 합니다.
      				<code>aria-modal</code> 속성을 올바르게 사용하면 모달 인터페이스의 접근성을 크게 향상시킬 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-modal" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-modal)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-modal)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-modal 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>true</strong>
      					<p>
      						현재 대화 상자가 모달임을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>false (기본값)</strong>
      					<p>
      						대화 상자가 모달이 아님을 나타냅니다(보통 설정되지 않음).
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;div&gt;</strong>
      					<p>
      						모달 대화 상자로 사용될 수 있는 컨테이너 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;dialog&gt;</strong>
      					<p>
      						HTML5의 대화 상자 요소(이 요소에 <code>aria-modal</code>을 추가해 모달로 설정 가능).
      					</p>
      				</li>
      				<li>
      					<strong>&lt;section&gt;</strong>
      					<p>
      						특정한 컨텐츠 영역을 모달로 설정할 때 사용.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>포커스 관리</strong>
      					<p>
      						<code>aria-modal=&quot;true&quot;</code>를 사용하면, 모달 대화 상자가 열려 있을 때 포커스가 모달 내부에만 머물도록 해야 합니다.
      						사용자가 포커스를 모달 외부로 이동할 수 없도록 보장해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>배경 요소 비활성화</strong>
      					<p>
      						모달 대화 상자가 열려 있을 때, 사용자는 배경에 있는 다른 UI 요소와 상호작용할 수 없어야 하며, 이 상태를 시각적으로도 명확히 표시해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>닫기 기능 제공</strong>
      					<p>
      						모달 대화 상자에는 닫기 버튼을 제공해야 하며, <i className="key_esc">Esc</i> 키를 통해 모달을 닫을 수 있도록 하는 것이 일반적입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시에서는 모달 대화 상자가 <code>aria-modal=&quot;true&quot;</code>로 설정되어 있지만,
      					포커스 관리가 전혀 이루어지지 않았습니다.
      					이로 인해 사용자가 포커스를 모달 외부로 이동할 수 있게 되어, 모달의 목적이 손상될 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-modal 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="dialog" aria-modal="true">
      							<p>This is a modal dialog without focus management.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-modal=&quot;true&quot;</code>를 사용하여 포커스 관리가 제대로 된 모달 대화 상자를 구현한 것입니다.
      					사용자는 <i className="key_esc">Esc</i> 키를 사용해 모달을 닫을 수 있고, 모달이 닫히면 포커스가 원래 위치로 돌아갑니다.
      				</p>
      				
      <CodeBlock title="aria-modal 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="modalDialog" role="dialog" aria-modal="true" aria-labelledby="dialogTitle" style="display:none;">
      							<h2 id="dialogTitle">Dialog Title</h2>
      							<p>This modal dialog properly manages focus.</p>
      							<button id="closeDialog">Close</button>
      						</div>

      						<script>
      							document.getElementById('closeDialog').addEventListener('click', function() {
      								var modal = document.getElementById('modalDialog');
      								modal.style.display = 'none';
      								document.getElementById('openDialog').focus();
      							});

      							document.addEventListener('keydown', function(event) {
      								var modal = document.getElementById('modalDialog');
      								if (event.key === 'Escape' && modal.style.display === 'block') {
      									modal.style.display = 'none';
      									document.getElementById('openDialog').focus();
      								}
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">기본 모달 대화 상자 예시</h4>
      				<p className="mt_s">
      					이 예시는 버튼을 클릭하여 모달 대화 상자를 열고, 모달 내부에서만 포커스가 유지되도록 설정한 것입니다.
      					<code>aria-modal=&quot;true&quot;</code> 속성은 대화 상자가 모달임을 명확히 나타내며,
      					사용자가 다른 UI 요소와 상호작용할 수 없도록 합니다.
      				</p>
      				
      <CodeBlock title="aria-modal 속성 / 기본 모달 대화 상자" language="javascript" className="uk_gist_code_box mt_m">
      {`<button id="openModal">Open Modal</button>

      						<div id="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" style="display:none;">
      							<h2 id="modalTitle">Modal Title</h2>
      							<p>This is a modal dialog.</p>
      							<button id="closeModal">Close</button>
      						</div>

      						<script>
      							document.getElementById('openModal').addEventListener('click', function() {
      								var modal = document.getElementById('modal');
      								modal.style.display = 'block';
      								modal.querySelector('button').focus();
      							});

      							document.getElementById('closeModal').addEventListener('click', function() {
      								var modal = document.getElementById('modal');
      								modal.style.display = 'none';
      								document.getElementById('openModal').focus();
      							});

      							document.addEventListener('keydown', function(event) {
      								var modal = document.getElementById('modal');
      								if (event.key === 'Escape' && modal.style.display === 'block') {
      									modal.style.display = 'none';
      									document.getElementById('openModal').focus();
      								}
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">다양한 콘텐츠를 포함한 모달</h4>
      				<p className="mt_s">
      					이 예시는 사용자가 중요한 정보를 포함한 모달 대화 상자를 열고, 이를 확인한 후 닫는 기능을 제공합니다.
      					모달이 열리면 보조 기술은 <code>aria-modal=&quot;true&quot;</code>를 사용해 이 상태를 인식합니다.
      				</p>
      				
      <CodeBlock title="aria-modal 속성 / 다양한 콘텐츠를 포함" language="javascript" className="uk_gist_code_box mt_m">
      {`<button id="launchModal">Launch Info Modal</button>

      						<div id="infoModal" role="dialog" aria-modal="true" aria-labelledby="infoTitle" style="display:none;">
      							<h2 id="infoTitle">Information</h2>
      							<p>This modal contains important information.</p>
      							<button id="closeInfoModal">Got it</button>
      						</div>

      						<script>
      							document.getElementById('launchModal').addEventListener('click', function() {
      								var modal = document.getElementById('infoModal');
      								modal.style.display = 'block';
      								modal.querySelector('button').focus();
      							});

      							document.getElementById('closeInfoModal').addEventListener('click', function() {
      								var modal = document.getElementById('infoModal');
      								modal.style.display = 'none';
      								document.getElementById('launchModal').focus();
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">부가 활용 예시 - 백그라운드 콘텐츠 비활성화</h4>
      				<p className="mt_s">
      					이 예시는 모달이 열릴 때 백그라운드 콘텐츠를 비활성화하고, 보조 기술에서 이를 숨기는 방법을 보여줍니다.
      					모달이 열리면 백그라운드 콘텐츠에 <code>aria-hidden=&quot;true&quot;</code>를 설정하여 사용자가 모달 외부의 다른 콘텐츠와 상호작용할 수 없도록 합니다.
      				</p>
      				
      <CodeBlock title="aria-modal 속성 / 부가 활용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="pageContent" aria-hidden="true">
      							<p>This is the main page content, which will be hidden when the modal is open.</p>
      						</div>

      						<div id="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" style="display:none;">
      							<h2 id="modalTitle">Modal Title</h2>
      							<p>This is a modal dialog.</p>
      							<button id="closeModal">Close</button>
      						</div>

      						<script>
      							document.getElementById('openModal').addEventListener('click', function() {
      								document.getElementById('modal').style.display = 'block';
      								document.getElementById('pageContent').setAttribute('aria-hidden', 'true');
      							});

      							document.getElementById('closeModal').addEventListener('click', function() {
      								document.getElementById('modal').style.display = 'none';
      								document.getElementById('pageContent').removeAttribute('aria-hidden');
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-multiline 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-multiline</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 속성(Property)으로,
      				UI 요소(예: 텍스트 입력 필드)가 여러 줄의 텍스트를 지원하는지 여부를 보조 기술(예: 스크린 리더)에 알리는 데 사용됩니다.
      				이 속성은 주로 단일 줄 입력과 여러 줄 입력을 구분할 필요가 있는 상황에서 사용됩니다.<br />
      				기본적인 HTML 요소인 <code>textarea</code>에서는 암시적으로 적용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-multiline" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-multiline)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-multiline)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-multiline 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>true</strong>
      					<p>
      						요소가 여러 줄의 텍스트를 지원함을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>false (기본값)</strong>
      					<p>
      						요소가 단일 줄의 텍스트만 지원함을 나타냅니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;input&gt;</strong>
      					<p>
      						단일 줄 텍스트 입력 필드. 일반적으로 <code>aria-multiline=&quot;false&quot;</code>로 설정.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;textarea&gt;</strong>
      					<p>
      						여러 줄 텍스트 입력 필드. 일반적으로 <code>aria-multiline=&quot;true&quot;</code>로 설정.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="textbox"&gt;</strong>
      					<p>
      						텍스트 입력이 가능한 커스텀 컨테이너.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>정확한 값 설정</strong>
      					<p>
      						<code>aria-multiline</code> 속성 값은 요소의 실제 동작과 일치해야 합니다.
      						여러 줄 입력이 가능한 경우 <code>true</code>, 단일 줄 입력만 가능한 경우 <code>false</code>로 설정합니다.
      					</p>
      				</li>
      				<li>
      					<strong>보조 기술과의 호환성</strong>
      					<p>
      						스크린 리더 등 보조 기술은 이 속성을 통해 사용자가 입력하는 필드가 여러 줄을 지원하는지 알 수 있으므로, 올바른 사용이 중요합니다.
      					</p>
      				</li>
      				<li>
      					<strong>기본 HTML 요소 고려</strong>
      					<p>
      						<code>textarea</code>와 같은 기본 HTML 요소는 이미 여러 줄을 지원하므로,
      						추가적으로 <code>aria-multiline</code> 속성을 설정할 필요는 없습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시에서는 단일 줄 텍스트 입력 필드에 <code>aria-multiline=&quot;true&quot;</code>를 설정했습니다.
      					그러나 실제로는 단일 줄만 지원하기 때문에 이 설정은 오해를 불러일으킬 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-multiline 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-multiline="true" placeholder="Enter your name">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 단일 줄 텍스트 입력 필드에 <code>aria-multiline=&quot;false&quot;</code>를 설정하여, 필드의 실제 동작과 일치하는 상태를 유지합니다.
      				</p>
      				
      <CodeBlock title="aria-multiline 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-multiline="false" placeholder="Enter your name">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">단일 줄 텍스트 입력 필드 예시</h4>
      				<p className="mt_s">
      					이 예시는 단일 줄 텍스트 입력 필드를 나타냅니다. <code>aria-multiline=&quot;false&quot;</code>로 설정되어 있으며,
      					보조 기술은 이 필드가 단일 줄 입력만 지원함을 인식합니다.
      				</p>
      				
      <CodeBlock title="aria-multiline 속성 / 단일 줄 입력 필드" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-multiline="false" placeholder="Enter your name">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">여러 줄 텍스트 입력 필드 예시</h4>
      				<p className="mt_s">
      					이 예시는 div 요소를 여러 줄 텍스트 입력 필드로 사용한 커스텀 구현입니다.
      					<code>aria-multiline=&quot;true&quot;</code>로 설정하여, 보조 기술이 이 필드가 여러 줄을 지원함을 알 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="aria-multiline 속성 / 여러 줄 입력 필드" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="textbox" aria-multiline="true" contenteditable="true" style="border: 1px solid #ccc; padding: 8px;">
      							Enter your comments here...
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">자동 줄바꿈 지원 입력 필드 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>textarea</code> 요소를 사용한 기본적인 여러 줄 텍스트 입력 필드입니다.
      					<code>aria-multiline</code> 속성은 기본적으로 <code>true</code>로 간주되므로, 추가 설정 없이도 보조 기술은 여러 줄 입력을 인식합니다.
      				</p>
      				
      <CodeBlock title="aria-multiline 속성 / 자동 줄바꿈 지원" language="javascript" className="uk_gist_code_box mt_m">
      {`<textarea aria-multiline="true" rows="4" cols="50" placeholder="Type your message here..."></textarea>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">부가 활용 예시 - 여러 줄을 지원하는 커스텀 입력 필드</h4>
      				<p className="mt_s">
      					이 예시는 커스텀 입력 필드에서 여러 줄을 지원하는 상황을 보여줍니다.
      					<code>contenteditable</code> 속성과 함께 사용하여 사용자가 자유롭게 텍스트를 입력할 수 있도록 하며, 보조 기술은 이를 적절히 인식합니다.
      				</p>
      				
      <CodeBlock title="aria-multiline 속성 / 부가 활용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="textbox" aria-multiline="true" contenteditable="true" style="border: 1px solid #ccc; padding: 8px; min-height: 100px;">
      							Start typing your text here...
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-multiselectable 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-multiselectable</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 속성(Property)으로,
      				사용자가 여러 항목을 선택할 수 있는 UI 요소임을 보조 기술(예: 스크린 리더)에 알리는 데 사용됩니다.<br />
      				이 속성은 주로 <code>role=&quot;listbox&quot;</code> 또는 <code>role=&quot;grid&quot;</code> 같은 요소에서 사용되며,
      				이 속성은 다중 선택이 가능한 상황에서만 <code>true</code>로 설정해야 하며, 단일 선택만 가능한 경우에는 설정하지 않는 것이 좋습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-multiselectable" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-multiselectable)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-multiselectable)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">0000 상태 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>true</strong>
      					<p>
      						요소에서 다중 선택이 가능함을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>false (기본값)</strong>
      					<p>
      						요소에서 다중 선택이 불가능함을 나타냅니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그 및 역할</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;div role="listbox"&gt;</strong>
      					<p>
      						다중 선택이 가능한 리스트박스 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="grid"&gt;</strong>
      					<p>
      						다중 선택이 가능한 그리드 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;ul role="tree"&gt;</strong>
      					<p>
      						다중 선택이 가능한 트리뷰 요소.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>적절한 값 설정</strong>
      					<p>
      						<code>aria-multiselectable</code> 속성은 다중 선택이 실제로 가능한 경우에만 <code>true</code>로 설정해야 합니다.
      						그렇지 않으면, 보조 기술 사용자에게 잘못된 정보를 제공할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>연관된 역할과 함께 사용</strong>
      					<p>
      						이 속성은 주로 <code>role=&quot;listbox&quot;</code>, <code>role=&quot;grid&quot;</code>, <code>role=&quot;tree&quot;</code>와 같은 역할을 가진 요소에 사용됩니다.
      						이러한 역할과 함께 사용하여 보조 기술이 UI 요소의 다중 선택 가능 여부를 올바르게 인식할 수 있도록 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>사용자 상호작용 고려</strong>
      					<p>
      						다중 선택이 가능하도록 설정할 때는, 사용자가 <i className="key_shift">Shift</i> 키나 <i className="key_ctrl">Ctrl(Command)</i> 키를 사용해 여러 항목을 선택할 수 있도록 해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-multiselectable=&quot;true&quot;</code>를 사용하고 있지만,
      					여러 개의 옵션이 없는 상황에서는 다중 선택이 불가능하므로 이 속성을 설정할 필요가 없습니다.
      				</p>
      				
      <CodeBlock title="aria-multiselectable 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="listbox" aria-multiselectable="true">
      							<div role="option" aria-selected="true">Option 1</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					다중 선택이 불가능한 경우, <code>aria-multiselectable=&quot;false&quot;</code>로 설정하여 보조 기술이 이를 올바르게 인식하도록 합니다.
      				</p>
      				
      <CodeBlock title="aria-multiselectable 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="listbox" aria-multiselectable="false">
      							<div role="option" aria-selected="true">Option 1</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">다중 선택 가능한 리스트박스 예시</h4>
      				<p className="mt_s">
      					이 예시는 다중 선택이 가능한 리스트박스를 구현한 것입니다.
      					<code>aria-multiselectable=&quot;true&quot;</code> 속성을 사용하여 보조 기술이 사용자가 여러 옵션을 선택할 수 있음을 알 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="aria-multiselectable 속성 / 다중 선택 리스트" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="listbox" aria-multiselectable="true">
      							<div role="option" aria-selected="false">Option 1</div>
      							<div role="option" aria-selected="false">Option 2</div>
      							<div role="option" aria-selected="false">Option 3</div>
      							<div role="option" aria-selected="false">Option 4</div>
      						</div>

      						<script>
      							document.querySelectorAll('[role="option"]').forEach(option => {
      								option.addEventListener('click', function(event) {
      									if (event.ctrlKey || event.metaKey) {
      										this.setAttribute('aria-selected', this.getAttribute('aria-selected') === 'true' ? 'false' : 'true');
      									} else {
      										document.querySelectorAll('[role="option"]').forEach(opt => opt.setAttribute('aria-selected', 'false'));
      										this.setAttribute('aria-selected', 'true');
      									}
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">다중 선택 가능한 그리드 예시</h4>
      				<p className="mt_s">
      					이 예시는 다중 선택이 가능한 그리드를 구현한 것입니다.
      					<code>aria-multiselectable=&quot;true&quot;</code> 속성을 통해 사용자가 여러 그리드 셀을 선택할 수 있음을 나타냅니다.
      				</p>
      				
      <CodeBlock title="aria-multiselectable 속성 / 다중 선택 그리드" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="grid" aria-multiselectable="true">
      							<div role="row">
      								<div role="gridcell" aria-selected="false">Cell 1</div>
      								<div role="gridcell" aria-selected="false">Cell 2</div>
      							</div>
      							<div role="row">
      								<div role="gridcell" aria-selected="false">Cell 3</div>
      								<div role="gridcell" aria-selected="false">Cell 4</div>
      							</div>
      						</div>

      						<script>
      							document.querySelectorAll('[role="gridcell"]').forEach(cell => {
      								cell.addEventListener('click', function(event) {
      									if (event.ctrlKey || event.metaKey) {
      										this.setAttribute('aria-selected', this.getAttribute('aria-selected') === 'true' ? 'false' : 'true');
      									} else {
      										document.querySelectorAll('[role="gridcell"]').forEach(cell => cell.setAttribute('aria-selected', 'false'));
      										this.setAttribute('aria-selected', 'true');
      									}
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">다중 선택 가능한 트리뷰 예시</h4>
      				<p className="mt_s">
      					이 예시는 다중 선택이 가능한 트리뷰를 구현한 것입니다.
      					사용자는 <code>aria-multiselectable=&quot;true&quot;</code>로 설정된 트리뷰에서 여러 항목을 선택할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-multiselectable 속성 / 다중 선택 트리뷰" language="javascript" className="uk_gist_code_box mt_m">
      {`<ul role="tree" aria-multiselectable="true">
      							<li role="treeitem" aria-selected="false">Item 1</li>
      							<li role="treeitem" aria-selected="false">Item 2</li>
      							<li role="treeitem" aria-selected="false">Item 3</li>
      						</ul>

      						<script>
      							document.querySelectorAll('[role="treeitem"]').forEach(item => {
      								item.addEventListener('click', function(event) {
      									if (event.ctrlKey || event.metaKey) {
      										this.setAttribute('aria-selected', this.getAttribute('aria-selected') === 'true' ? 'false' : 'true');
      									} else {
      										document.querySelectorAll('[role="treeitem"]').forEach(item => item.setAttribute('aria-selected', 'false'));
      										this.setAttribute('aria-selected', 'true');
      									}
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.WAI_ARIA}/03_wai-aria_role_01.png`} alt="위젯 속성(Widget Attributes)" />
      		<figcaption>
      			<b>[위젯 속성(Widget Attributes)]</b><br />
      			<a href={`${IMG.WAI_ARIA}/03_wai-aria_role_01.png`} className="mt_ms box_link" title="새창 열림" target="_blank" rel="noreferrer">크게 보기</a>
      		</figcaption>
      	</figure>


      <footer className="reference_box">
      	<strong className="tit">위젯 속성(Widget Attributes) | WAI-ARIA 상태 및 속성 참조</strong>
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

export default AttrsWidgetsPart1Page
