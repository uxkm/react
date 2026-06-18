import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "rolesAbstract",
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
  title: "추상적 역할(Abstract Roles) | WAI-ARIA 역할",
  description: "WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)의 역할(Role)은 웹 콘텐츠와 웹 애플리케이션의 접근성을 향상시키기 위해 사용되는 속성입니다. 이 페이지에서는 WAI-ARIA의 역할 중 추상적 역할(Abstract Roles)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function RolesAbstractPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>










      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b>추상적 역할(Abstract Roles)</b>은 다른 역할을 정의하는 데 사용되는 개념적 역할로, 웹 페이지에 직접 사용되지는 않습니다.
      			대신, 구체적인 역할을 정의하고 이들 간의 관계를 설명하며, 웹 접근성을 높이는 데 중요한 역할을 합니다.<br />
      			<b>추상적 역할(Abstract Roles)</b>을 올바르게 이해하고 사용함으로써 웹 콘텐츠의 접근성을 개선할 수 있습니다.
      		</p>
      		<p className="reference mt_ms">
      			<a href="https://www.w3.org/TR/wai-aria-1.2/#abstract_roles" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA Abstract Roles</a><br />
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">command (명령 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				사용자 명령을 나타내는 역할의 상위 개념입니다. 이 역할을 통해 사용자가 상호작용할 수 있는 다양한 UI 요소를 정의합니다.
      				<code>command</code> 역할 자체는 직접 사용되지 않으며,
      				<code>button</code>, <code>link</code>, <code>menuitem</code> 등의 구체적인 역할이 이 역할에서 파생됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#command" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA command</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/command_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA command</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>command</code>는 직접 사용되지 않으며,
      					이를 상속하는 구체적인 역할(<code>button</code>, <code>link</code> 등)을 사용해야 합니다.
      				</li>
      				<li>
      					명령 요소는 사용자에게 명확히 전달되도록 <code>aria-label</code> 또는 <code>aria-labelledby</code> 속성을 사용할 수 있습니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						요소가 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-expanded</strong>
      					<p>
      						요소가 확장되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			
      <CodeBlock title="WAI-ARIA / Abstract Roles / command" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 잘못된 예시 - input는 직접 사용되지 않음 -->
      					<div role="input">Enter text</div>

      					<!-- 올바른 예시 -->
      					<input role="textbox" type="text" aria-label="Enter text">

      					<!-- (권장)시맨틱 마크업과의 비교 - HTML5 시맨틱 요소 사용 -->
      					<input type="text" aria-label="Enter text">`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">composite (복합 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>composite</code> 역할은 여러 개의 상호작용 가능한 위젯을 포함하는 복합 위젯을 정의하는 상위 개념입니다.
      				<code>combobox</code>, <code>grid</code>, <code>tablist</code>, <code>tree</code> 등이 이 역할을 상속받습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#composite" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA composite</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/composite_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA composite</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>composite</code>는 직접 사용되지 않고, 구체적인 복합 위젯 역할을 사용해야 합니다.
      				</li>
      				<li>
      					복합 위젯 내의 자식 요소는 명확하게 정의되고 접근 가능해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-activedescendant</strong>
      					<p>
      						복합 위젯 내에서 현재 활성화된 자식 요소의 <code>ID</code>를 지정합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						요소가 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-expanded</strong>
      					<p>
      						요소가 확장되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			
      <CodeBlock title="WAI-ARIA / Abstract Roles / composite" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 잘못된 예시 - composite는 직접 사용되지 않음 -->
      					<div role="composite">Items</div>

      					<!-- 올바른 예시 -->
      					<div role="tablist">
      						<div role="tab" aria-selected="true">Tab 1</div>
      						<div role="tab" aria-selected="false">Tab 2</div>
      					</div>

      					<!-- (권장)시맨틱 마크업과의 비교 - 시맨틱 마크업만으로는 복합 위젯을 정의하기 어려움 -->
      					<div>
      						<button type="button">Tab 1</button>
      						<button type="button">Tab 2</button>
      					</div>`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">input (입력 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>input</code> 역할은 사용자가 입력할 수 있는 요소를 정의하는 상위 개념입니다.
      				<code>checkbox</code>, <code>radio</code>, <code>slider</code>, <code>spinbutton</code>, <code>textbox</code>
      				등이 이 역할을 상속받습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#input" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA input</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/input_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA input</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>input</code> 역할은 직접 사용되지 않으며, 이를 상속하는 구체적인 입력 역할을 사용해야 합니다.
      				</li>
      				<li>
      					사용자는 입력 필드의 상태(예: 필수, 읽기 전용, 비활성화)를 명확히 알 수 있어야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-required</strong>
      					<p>
      						필드가 필수인지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-readonly</strong>
      					<p>
      						필드가 읽기 전용인지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						요소가 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			
      <CodeBlock title="WAI-ARIA / Abstract Roles / input" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 잘못된 예시 - input는 직접 사용되지 않음 -->
      					<div role="input">Enter text</div>

      					<!-- 올바른 예시 -->
      					<input role="textbox" type="text" aria-label="Enter text">

      					<!-- (권장)시맨틱 마크업과의 비교 - HTML5 시맨틱 요소 사용 -->
      					<input type="text" aria-label="Enter text">`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">landmark (랜드마크 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>landmark</code> 역할은 웹 페이지의 주요 섹션을 정의하는 상위 개념입니다.
      				<code>banner</code>, <code>navigation</code>, <code>main</code>, <code>contentinfo</code> 등에서 파생됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#landmark" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA landmark</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA landmark</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>landmark</code> 역할은 직접 사용되지 않으며, 이를 상속하는 구체적인 랜드마크 역할을 사용해야 합니다.
      				</li>
      				<li>
      					각 랜드마크 역할은 페이지 내에서 고유한 역할을 가지며, 중복되지 않도록 주의해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-label</strong>
      					<p>
      						요소의 레이블을 제공하여 사용자에게 명확한 정보를 전달합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						요소를 레이블링하는 다른 요소의 <code>ID</code>를 지정합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			
      <CodeBlock title="WAI-ARIA / Abstract Roles / landmark" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 잘못된 예시 - landmark는 직접 사용되지 않음 -->
      					<div role="landmark">Main Content</div>

      					<!-- 올바른 예시 -->
      					<div role="main">
      						<h1>Main Content</h1>
      						<p>This is the main area of the page.</p>
      					</div>

      					<!-- (권장)시맨틱 마크업과의 비교 - 시맨틱 요소를 통해 main 역할이 암시됨 -->
      					<main>
      						<h1>Main Content</h1>
      						<p>This is the main area of the page.</p>
      					</main>`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">range (범위 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>range</code> 역할은 특정 범위 내에서 값을 설정하거나 선택할 수 있는 위젯을 정의하는 상위 개념입니다.
      				<code>progressbar</code>, <code>slider</code>, <code>spinbutton</code> 등에서 파생됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#range" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA range</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/range_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA range</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>range</code> 역할은 직접 사용되지 않으며, 이를 상속하는 구체적인 역할을 사용해야 합니다.
      				</li>
      				<li>
      					사용자는 현재 값과 범위를 명확히 이해할 수 있어야 하며, 필요한 경우 <code>aria-valuetext</code>를 사용하여 설명을 제공합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-valuemin</strong>
      					<p>
      						값의 최소 범위를 지정합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuemax</strong>
      					<p>
      						값의 최대 범위를 지정합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuenow</strong>
      					<p>
      						현재 값을 지정합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuetexts</strong>
      					<p>
      						현재 값을 텍스트로 표현할 수 있도록 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			
      <CodeBlock title="WAI-ARIA / Abstract Roles / range" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 잘못된 예시 - range는 직접 사용되지 않음 -->
      					<div role="range">50</div>

      					<!-- 올바른 예시 -->
      					<div role="slider" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" tabindex="0"></div>

      					<!-- (권장)시맨틱 마크업과의 비교 - HTML5의 range 요소 -->
      					<input type="range" min="0" max="100" value="50">`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">roletype (역할 유형)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>roletype</code>은 모든 <b>WAI-ARIA 역할</b>의 최상위 추상적 역할로, 다른 모든 역할이 이 역할에서 파생됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#roletype" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA roletype</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/roletype_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA roletype</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>roletype</code>은 직접 사용되지 않고, 구체적인 역할에서만 상속되어 사용됩니다.
      				</li>
      				<li>
      					적절한 <b>aria 속성</b>을 사용하여 역할이 명확히 전달되도록 해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-atomic</strong>
      					<p>
      						변경 시 전체 영역을 다시 읽어야 하는지 여부를 지정합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-busy</strong>
      					<p>
      						요소가 현재 작업 중인지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-controls</strong>
      					<p>
      						이 요소가 제어하는 다른 요소의 <code>ID</code>를 지정합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-describedby</strong>
      					<p>
      						이 요소를 설명하는 다른 요소의 <code>ID</code>를 지정합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			
      <CodeBlock title="WAI-ARIA / Abstract Roles / roletype" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 'roletype'은 다른 역할을 정의하는 데 사용되므로 직접 사용되지 않음 -->

      					<!-- 잘못된 예시 - roletype은 직접 사용되지 않음 -->
      					<div role="roletype">Item</div>

      					<!-- 권장사항 - 사용하지 마십시오. -->`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">section (섹션 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>section</code> 역할은 문서의 주제별 섹션을 정의하는 상위 개념입니다.
      				<code>region</code>, <code>alert</code>, <code>log</code>, <code>status</code> 등이 이 역할을 상속받습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#section" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA section</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/section_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA section</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>section</code> 역할은 직접 사용되지 않으며, 이를 상속하는 구체적인 섹션 역할을 사용해야 합니다.
      				</li>
      				<li>
      					각 섹션은 명확히 구분되고, 적절한 레이블과 설명이 제공되어야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						이 섹션을 레이블링하는 다른 요소의 ID를 지정합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-describedby</strong>
      					<p>
      						이 섹션을 설명하는 다른 요소의 ID를 지정합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			
      <CodeBlock title="WAI-ARIA / Abstract Roles / section" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 잘못된 예시 - section은 직접 사용되지 않음 -->
      					<div role="section">Section Content</div>

      					<!-- 올바른 예시 -->
      					<div role="region" aria-labelledby="section-title">
      						<h2 id="section-title">Section Title</h2>
      						<p>This is a section of the document.</p>
      					</div>

      					<!-- (권장)시맨틱 마크업과의 비교 - HTML5의 section 요소 -->
      					<section aria-labelledby="section-title">
      						<h2 id="section-title">Section Title</h2>
      						<p>This is a section of the document.</p>
      					</section>`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">sectionhead (섹션 헤더 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>sectionhead</code> 역할은 문서 내 섹션의 제목을 나타내는 역할입니다.
      				<code>heading</code>, <code>tab</code>, <code>columnheader</code>, <code>rowheader</code>
      				등이 이 역할을 상속받습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#sectionhead" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA sectionhead</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/sectionhead_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA sectionhead</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>sectionhead</code> 역할은 직접 사용되지 않으며, 이를 상속하는 구체적인 역할을 사용해야 합니다.
      				</li>
      				<li>
      					문서 구조와 일치하는 헤더 계층이 중요하며, <code>aria-level</code> 속성을 사용하여 정의합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-level</strong>
      					<p>
      						섹션 헤더의 계층적 수준을 지정합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			
      <CodeBlock title="WAI-ARIA / Abstract Roles / sectionhead" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 잘못된 예시 - sectionhead는 직접 사용되지 않음 -->
      					<div role="sectionhead">Section Title</div>

      					<!-- 올바른 예시 -->
      					<div role="heading" aria-level="2">Section Title</div>

      					<!-- (권장)시맨틱 마크업과의 비교 - HTML5의 heading 요소 -->
      					<h2>Section Title</h2>`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">select (선택 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>select</code> 역할은 사용자가 옵션을 선택할 수 있는 위젯을 정의하는 상위 개념입니다.
      				<code>combobox</code>, <code>listbox</code>, <code>menu</code>, <code>radiogroup</code>
      				등이 이 역할을 상속받습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#select" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA select</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/select_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA select</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>select</code> 역할은 직접 사용되지 않으며, 이를 상속하는 구체적인 선택 위젯 역할을 사용해야 합니다.
      				</li>
      				<li>
      					사용자는 선택 가능한 옵션의 수와 상태를 명확히 이해할 수 있어야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-multiselectable</strong>
      					<p>
      						사용자가 여러 항목을 선택할 수 있는지 여부를 지정합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-required</strong>
      					<p>
      						선택이 필수인지 여부를 지정합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			
      <CodeBlock title="WAI-ARIA / Abstract Roles / select" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 잘못된 예시 - select는 직접 사용되지 않음 -->
      					<div role="select">Option 1</div>

      					<!-- 올바른 예시 -->
      					<ul role="listbox" aria-multiselectable="true">
      						<li role="option">Option 1</li>
      						<li role="option">Option 2</li>
      					</ul>

      					<!-- (권장)시맨틱 마크업과의 비교 - HTML5의 select 요소 -->
      					<select>
      						<option>Option 1</option>
      						<option>Option 2</option>
      					</select>`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">structure (구조 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>structure</code> 역할은 문서의 구조를 정의하는 상위 개념입니다.
      				<code>document</code>, <code>article</code>, <code>section</code>, <code>group</code>, <code>heading</code>
      				등이 이 역할을 상속받습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#structure" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA structure</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/structure_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA structure</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>structure</code> 역할은 직접 사용되지 않으며, 이를 상속하는 구체적인 구조 역할을 사용해야 합니다.
      				</li>
      				<li>
      					문서 구조의 일관성을 유지하고, 사용자에게 명확한 내비게이션을 제공해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						이 구조를 레이블링하는 다른 요소의 <code>ID</code>를 지정합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-describedby</strong>
      					<p>
      						이 구조를 설명하는 다른 요소의 <code>ID</code>를 지정합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			
      <CodeBlock title="WAI-ARIA / Abstract Roles / structure" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 잘못된 예시 - structure는 직접 사용되지 않음 -->
      					<div role="structure">Document Structure</div>

      					<!-- 올바른 예시 -->
      					<div role="article">
      						<h2>Article Title</h2>
      						<p>This is an article content.</p>
      					</div>

      					<!-- (권장)시맨틱 마크업과의 비교 - HTML5의 article 요소 -->
      					<article>
      						<h2>Article Title</h2>
      						<p>This is an article content.</p>
      					</article>`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">widget (위젯 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>widget</code> 역할은 사용자가 상호작용할 수 있는 UI 요소를 정의하는 상위 개념입니다.
      				<code>button</code>, <code>checkbox</code>, <code>slider</code>, <code>link</code>, <code>textbox</code>
      				등이 이 역할을 상속받습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#widget" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA widget</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/widget_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA widget</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>widget</code> 역할은 직접 사용되지 않으며, 이를 상속하는 구체적인 역할을 사용해야 합니다.
      				</li>
      				<li>
      					상호작용 가능한 위젯은 사용자에게 명확히 전달되고, 키보드 및 보조 기술을 통한 접근성이 보장되어야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-disabled</strong>
      					<p>
      						요소가 비활성화되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-expanded</strong>
      					<p>
      						요소가 확장되었는지 여부를 나타냅니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			
      <CodeBlock title="WAI-ARIA / Abstract Roles / widget" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 잘못된 예시 - widget은 직접 사용되지 않음 -->
      					<div role="widget">Interactive Element</div>

      					<!-- 올바른 예시 -->
      					<div role="button" aria-disabled="true">Click me</div>

      					<!-- (권장)시맨틱 마크업과의 비교 - HTML5의 button 요소 -->
      					<button type="button">Click me</button>`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">window (윈도우 역할)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>window</code> 역할은 사용자 인터페이스의 창 요소를 정의하는 역할입니다.
      				<code>alertdialog</code>, <code>dialog</code>, <code>tooltip</code> 등이 이 역할을 상속받습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#window" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA window</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/window_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA window</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					<code>window</code> 역할은 직접 사용되지 않으며, 이를 상속하는 구체적인 역할을 사용해야 합니다.
      				</li>
      				<li>
      					창 요소는 포커스(초점) 관리가 중요하며, 창이 닫힐 때 이전 상태로 포커스(초점)를 반환해야 합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-modal</strong>
      					<p>
      						창이 모달 대화 상자인지 여부를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						창을 레이블링하는 다른 요소의 ID를 지정합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-describedby</strong>
      					<p>
      						창을 설명하는 다른 요소의 ID를 지정합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			
      <CodeBlock title="WAI-ARIA / Abstract Roles / window" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 잘못된 예시 - window는 직접 사용되지 않음 -->
      					<div role="window">Dialog Window</div>

      					<!-- 올바른 예시- 시맨틱 마크업으로 직접 대응할 수 없는 역할로, ARIA를 사용하여 정의 -->
      					<div role="dialog" aria-labelledby="dialog-title">
      						<h2 id="dialog-title">Settings</h2>
      						<p>Adjust your preferences below:</p>
      					</div>`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	
      	
      	<figure className="img_figure mt_l">
      		<img src={`${IMG.WAI_ARIA}/02_wai-aria_role_01.png`} alt="추상적 역할" />
      		<figcaption>
      			<b>[추상적 역할(Abstract Roles)]</b><br />
      			<a href={`${IMG.WAI_ARIA}/02_wai-aria_role_01.png`} className="mt_ms box_link" title="새창 열림" target="_blank" rel="noreferrer">크게 보기</a>
      		</figcaption>
      	</figure>


      <footer className="reference_box">
      	<strong className="tit">추상적 역할(Abstract Roles) | WAI-ARIA 역할 참조</strong>
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

export default RolesAbstractPage
