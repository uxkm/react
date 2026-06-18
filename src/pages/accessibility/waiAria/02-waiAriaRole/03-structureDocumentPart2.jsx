import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "structureDocument",
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
  title: "문서 구조 역할(Document Structure Roles) part1 | WAI-ARIA 역할",
  description: "WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)의 역할(Role)은 웹 콘텐츠와 웹 애플리케이션의 접근성을 향상시키기 위해 사용되는 속성입니다. 이 페이지에서는 WAI-ARIA의 역할 중 문서 구조 역할(Document Structure Roles)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function StructureDocumentPart2Page() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		<b>문서 구조 역할(Document Structure Roles)</b>은 웹 페이지나 애플리케이션의 콘텐츠를 논리적이고 의미 있는 방식으로 구성하는 데 사용됩니다.
      		이 역할은 문서의 주요 부분을 정의하고, 보조 기술이 이 구조를 이해할 수 있도록 도와줍니다.
      		또한, 페이지를 효율적으로 탐색할 수 있도록 콘텐츠를 구조화하는 데 필수적입니다.
      	</p>
      	<p className="reference mt_ms">
      		<a href="https://www.w3.org/TR/wai-aria-1.2/#document_structure_roles" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA Document Structure Roles</a><br />
      	</p>
      </blockquote>











      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">list 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>list</code> 역할은 항목들이 모여 있는 목록을 나타내는 데 사용됩니다.
      				이 역할은 항목들 간의 관계를 정의하고, 보조 기술이 이러한 항목들이 논리적으로 그룹화되어 있음을 인식할 수 있도록 돕습니다.
      				HTML에서 <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;dl&gt;</code> 요소가 기본적으로 list 역할을 수행합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#list" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA list</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA list</a><br />
      				<a href="/publishing/html/04-grouping/04-ul_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : ul element</a><br />
      				<a href="/publishing/html/04-grouping/03-ol_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : ol element</a><br />
      				<a href="/publishing/html/04-grouping/06-dl_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : dl element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>list</code> 역할은 항목들의 집합을 의미하며, 목록 구조를 정의하는 데 사용됩니다. 이는 보조 기술이 목록을 그룹으로 인식하고, 항목들 간의 관계를 올바르게 전달할 수 있도록 합니다.
      					이 역할은 주로 <code>&lt;ul&gt;</code>(비순서형 목록), <code>&lt;ol&gt;</code>(순서형 목록), <code>&lt;dl&gt;</code>(정의 목록) 요소에서 자동으로 적용됩니다.
      				</li>
      				<li>
      					<code>list</code> 역할은 다른 요소에 적용할 수 있으며, 해당 요소가 목록처럼 동작하도록 할 수 있습니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 목록 요소(<code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;dl&gt;</code>)를 사용하여 목록을 정의하는 것이 가장 바람직하며,
      						비표준 마크업에서는 <code>role=&quot;list&quot;</code>와 <code>role=&quot;listitem&quot;</code>을 명시적으로 지정해야 합니다.
      						목록 구조는 일관되게 유지되어야 하며, 불필요한 경우에 <code>list</code> 역할을 사용하지 않는 것이 좋습니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>list</code> 역할을 통해 웹 페이지의 구조를 명확하게 정의함으로써, 사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      						이를 통해 사용자는 목록을 쉽게 탐색하고, 항목들 간의 관계를 명확히 이해할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>시멘틱 마크업 우선 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 목록 요소(<code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;dl&gt;</code>)를 사용하여 목록을 정의하는 것이 좋습니다.
      						이 요소들은 자동으로 <code>list</code> 역할을 수행하며, 문서의 구조를 명확하게 정의합니다.
      					</p>
      				</li>
      				<li>
      					<strong>일관된 구조 유지</strong>
      					<p>
      						목록을 정의할 때는 일관된 구조를 유지하여, 보조 기술이 목록 항목 간의 관계를 명확하게 인식할 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>목록 항목 정의</strong>
      					<p>
      						<code>list</code> 역할과 함께 <code>listitem</code> 역할을 사용하여 목록 항목을 명확하게 정의해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						목록의 제목을 지정하여, 보조 기술이 목록을 사용자에게 명확하게 설명할 수 있도록 돕습니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-describedby</strong>
      					<p>
      						목록에 대한 추가 설명을 제공하여, 보조 기술이 이 설명을 목록과 연관지어 사용자에게 전달할 수 있게 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 목록 항목에 listitem 역할 누락</h4>
      				<p className="mt_s">
      					이 예시는 <code>listitem</code> 역할을 명시하지 않아 보조 기술이 목록 항목을 올바르게 인식하지 못할 수 있습니다.
      					목록 항목에는 반드시 <code>listitem</code> 역할을 지정해야 합니다.
      				</p>
      				
      <CodeBlock title="list 역할 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="list">
      							<div>Apples</div>
      							<div>Bananas</div>
      							<div>Cherries</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시 - 일관된 목록 구조 유지</h4>
      				<p className="mt_s">
      					이 예시는 <code>role=&quot;list&quot;</code>와 <code>role=&quot;listitem&quot;</code>을 사용하여 목록과 목록 항목을 명확하게 정의하고,
      					<code>aria-labelledby</code> 속성으로 목록의 제목을 지정하여 보조 기술이 목록을 올바르게 설명할 수 있습니다.
      				</p>
      				
      <CodeBlock title="list 역할 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="list" aria-labelledby="fruit-list">
      							<h2 id="fruit-list">Favorite Fruits</h2>
      							<div role="listitem">Apples</div>
      							<div role="listitem">Bananas</div>
      							<div role="listitem">Cherries</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 마크업에서의 기본 사용</h4>
      				<p className="mt_s">
      					이 예시는 HTML의 <code>&lt;ul&gt;</code> 요소를 사용하여 비순서형 목록을 정의하고 있습니다.
      					각 항목은 <code>&lt;li&gt;</code> 요소로 표시되며, 이 구조는 자동으로 <code>list</code>와 <code>listitem</code> 역할을 수행합니다.
      				</p>
      				
      <CodeBlock title="list 역할 - 시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<ul>
      							<li>Apples</li>
      							<li>Bananas</li>
      							<li>Cherries</li>
      						</ul>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">명시적으로 list 역할 지정 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;list&quot;</code>를 지정하고,
      					각 항목에 <code>role=&quot;listitem&quot;</code>을 사용하여 비표준 마크업에서 목록을 정의한 예시입니다.
      					이는 시멘틱한 목록 요소를 사용할 수 없는 상황에서 유용합니다.
      				</p>
      				
      <CodeBlock title="list 역할 - 명시적 list 역할 지정" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="list">
      							<div role="listitem">Apples</div>
      							<div role="listitem">Bananas</div>
      							<div role="listitem">Cherries</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">listitem 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>listitem</code> 역할은 목록 내의 개별 항목을 나타냅니다.
      				이 역할은 항목들이 논리적으로 그룹화된 <code>list</code> 요소 내에서 사용되며,
      				보조 기술이 각 항목을 독립적으로 식별하고, 사용자에게 목록의 내용을 명확하게 전달할 수 있도록 돕습니다.
      				HTML에서 <code>&lt;li&gt;</code> 요소가 기본적으로 <code>listitem</code> 역할을 수행합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#listitem" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA listitem</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA listitem</a><br />
      				<a href="/publishing/html/04-grouping/05-li_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : li element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>listitem</code> 역할은 목록(<code>list</code> 역할을 가진 요소) 내에서 각 항목을 나타냅니다.
      					이 역할은 목록 항목을 구성하는 중요한 요소로, 보조 기술이 목록의 구조를 이해하고,
      					각 항목을 사용자에게 올바르게 전달할 수 있도록 합니다.
      				</li>
      				<li>
      					HTML에서 <code>&lt;li&gt;</code> 요소는 자동으로 <code>listitem</code> 역할을 수행하며, 목록의 맥락에 맞게 적절히 사용됩니다.
      					<code>listitem</code> 역할은 비표준 마크업에서 목록 항목을 명확히 정의할 때 유용하게 사용할 수 있습니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;li&gt;</code>)를 사용하여 목록 항목을 정의하는 것이 가장 바람직하며,
      						비표준 마크업에서는 <code>role=&quot;listitem&quot;</code>을 명시적으로 지정해야 합니다.
      						<code>listitem</code> 역할은 반드시 <code>list</code> 역할을 가진 요소 내에서 사용되어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>listitem</code> 역할을 통해 웹 페이지의 목록 구조를 명확하게 정의함으로써,
      						사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      						이를 통해 사용자는 목록을 쉽게 탐색하고, 항목들 간의 관계를 명확히 이해할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>시멘틱 마크업을 우선 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 목록 요소(<code>&lt;li&gt;</code>)를 사용하여 목록 항목을 정의하는 것이 좋습니다.
      						이는 자동으로 <code>listitem</code> 역할을 수행하며, 문서의 구조를 명확히 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>list 역할과 함께 사용</strong>
      					<p>
      						<code>listitem</code> 역할은 반드시 <code>list</code> 역할을 가진 요소 내에서 사용해야 합니다.
      						독립적으로 사용하면 보조 기술이 이를 목록 항목으로 인식하지 못할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>비표준 마크업에서의 사용</strong>
      					<p>
      						시멘틱한 HTML 요소를 사용할 수 없는 경우,
      						<code>role=&quot;listitem&quot;</code>을 사용하여 비표준 마크업에서도 목록 항목을 명확히 정의할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				기본적으로 상속된 상태나 속성은 없습니다.
      				<mark><code>listitem</code> 역할은 단순히 목록 항목을 정의하는 역할을 하므로, 특별한 ARIA 상태나 속성이 필요하지 않습니다.</mark>
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - listitem 역할을 list 없이 사용</h4>
      				<p className="mt_s">
      					이 예시는 <code>list</code> 역할을 가진 요소 없이 <code>listitem</code> 역할을 사용하고 있으며,
      					이는 보조 기술이 이 항목을 목록의 일부로 인식하지 못하게 할 수 있습니다.
      					<code>listitem</code> 역할은 항상 <code>list</code> 역할 내에서 사용되어야 합니다.
      				</p>
      				
      <CodeBlock title="listitem 역할 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="listitem">Item without list context</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시 - list 역할과 함께 사용</h4>
      				<p className="mt_s">
      					이 예시는 <code>role=&quot;list&quot;</code>와 <code>role=&quot;listitem&quot;</code>을 함께 사용하여 목록과 목록 항목을 명확하게 정의하고,
      					또한, <code>aria-labelledby</code> 속성으로 목록의 제목을 지정하여 보조 기술이 목록을 올바르게 설명할 수 있습니다.
      				</p>
      				
      <CodeBlock title="listitem 역할 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="list" aria-labelledby="todo-list">
      							<h2 id="todo-list">To-Do List</h2>
      							<div role="listitem">Buy groceries</div>
      							<div role="listitem">Call the bank</div>
      							<div role="listitem">Schedule a doctor's appointment</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 마크업에서의 기본 사용</h4>
      				<p className="mt_s">
      					이 예시는 HTML의 <code>&lt;ul&gt;</code> 요소 내에서 <code>&lt;li&gt;</code> 요소를 사용하여 목록 항목을 정의하고 있습니다.
      					각 <code>&lt;li&gt;</code> 요소는 자동으로 <code>listitem</code> 역할을 수행합니다.
      				</p>
      				
      <CodeBlock title="listitem 역할 - 시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<ul>
      							<li>Apples</li>
      							<li>Bananas</li>
      							<li>Cherries</li>
      						</ul>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">명시적으로 listitem 역할 지정 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;listitem&quot;</code>을 지정하여 마크업에서 목록 항목을 정의한 예시입니다.
      					이는 시멘틱한 목록 요소를 사용할 수 없는 상황에서 유용합니다.
      				</p>
      				
      <CodeBlock title="listitem 역할 - 명시적 listitem 역할 지정" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="list">
      							<div role="listitem">First item</div>
      							<div role="listitem">Second item</div>
      							<div role="listitem">Third item</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">math 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>math</code> 역할은 수학적 표현이나 수식을 나타내는 콘텐츠를 정의하는 데 사용됩니다.
      				이 역할은 보조 기술이 수식이나 수학적 내용을 올바르게 이해하고, 사용자에게 적절히 전달할 수 있도록 돕습니다.
      				HTML의 <code>&lt;math&gt;</code> 요소 또는 MathML(Markup Language for Mathematical Notation)을 사용하여 수학적 표현을 나타낼 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#math" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA math</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/math_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA math</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/MathML/Element/math" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN math element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>math</code> 역할은 수학적 표현을 나타내며, 보조 기술이 수학적 콘텐츠를 사용자에게 올바르게 전달할 수 있도록 합니다.
      					이 역할은 복잡한 수식을 포함한 콘텐츠를 시각적으로 명확하게 표현하고, 보조 기술이 이를 음성으로 표현하거나, 다른 형식으로 변환하여 사용자에게 제공할 수 있도록 합니다.
      				</li>
      				<li>
      					<code>math</code> 역할은 일반적으로 MathML(Markup Language for Mathematical Notation)과 함께 사용되지만, <code>HTML</code> 요소에도 적용될 수 있습니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						복잡한 수식이나 수학적 표현에는 가능한 <code>MathML</code>을 사용하는 것이 가장 바람직하며,
      						<code>HTML</code> 요소에서 수식을 표현할 경우 <code>role=&quot;math&quot;</code>를 명시적으로 지정하여 보조 기술이 이를 인식할 수 있도록 해야 합니다.
      						중요한 수식에는 대체 텍스트나 설명을 제공하여 접근성을 향상시킬 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>math</code> 역할을 통해 수학적 콘텐츠를 명확하게 정의함으로써, 사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      						이를 통해 사용자는 수식을 쉽게 이해하고, 필요한 내용을 효율적으로 탐색할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>MathML 사용 권장</strong>
      					<p>
      						수학적 표현이 복잡하거나 다양한 기호를 포함하는 경우, <code>MathML</code>을 사용하는 것이 좋습니다.
      						<code>MathML</code>은 수학적 표현을 시멘틱하게 정의하고,
      						다양한 출력 장치와 보조 기술에서 일관되게 표현할 수 있도록 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>대체 텍스트 제공</strong>
      					<p>
      						수학적 표현이 보조 기술에 의해 정확하게 전달되지 않을 수 있으므로,
      						중요한 수식에는 대체 텍스트를 제공하여 수식을 설명하는 것이 좋습니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 역할 지정</strong>
      					<p>
      						비표준 마크업에서 수학적 표현을 정의하는 경우,
      						<code>role=&quot;math&quot;</code>를 명시적으로 지정하여 보조 기술이 이를 수학적 콘텐츠로 인식하도록 해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				기본적으로 상속된 상태나 속성은 없습니다.
      				<mark><code>math</code> 역할은 수학적 표현을 정의하는 역할을 하므로, 추가적인 ARIA 상태나 속성이 필요하지 않습니다.</mark>
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 수학적 표현을 일반 텍스트로 처리</h4>
      				<p className="mt_s">
      					이 예시는 수학적 표현을 일반 텍스트로만 제공하고 있으며,
      					<code>math</code> 역할이나 대체 텍스트가 없어 보조 기술이 이 수식을 올바르게 해석하지 못할 수 있습니다.
      					적절한 역할 지정이나 <code>MathML</code> 사용이 필요합니다.
      				</p>
      				
      <CodeBlock title="math 역할 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>a = (-b ± √(b² - 4ac)) / 2a</p>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시 - MathML과 함께 math 역할 사용</h4>
      				<p className="mt_s">
      					이 예시는 <code>MathML</code>과 함께 <code>role=&quot;math&quot;</code>을 사용하여 수학적 표현을 명확히 정의하고 있으며,
      					<code>aria-labelledby</code> 속성을 통해 수식의 의미를 설명하는 레이블을 제공하고 있습니다.
      				</p>
      				
      <CodeBlock title="math 역할 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="math" aria-labelledby="equation-label">
      							<p id="equation-label">Quadratic formula:</p>
      							<math xmlns="http://www.w3.org/1998/Math/MathML">
      								<mrow>
      									<mi>a</mi>
      									<mo>=</mo>
      									<mfrac>
      										<mrow>
      											<mtext>b</mtext>
      											<mo>&#xB1;</mo>
      											<msqrt>
      												<mrow>
      													<msup>
      														<mi>b</mi>
      														<mn>2</mn>
      													</msup>
      													<mo>-</mo>
      													<mn>4ac</mn>
      												</mrow>
      											</msqrt>
      										</mrow>
      										<mrow>
      											<mn>2a</mn>
      										</mrow>
      									</mfrac>
      								</mrow>
      							</math>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) MathML을 사용한 수학적 표현 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>MathML</code>을 사용하여 이차 방정식의 해를 나타내는 수식을 표현하고 있습니다.
      					<code>MathML</code>은 수학적 표현을 시멘틱하게 정의하며,
      					다양한 출력 장치와 보조 기술에서 일관되게 표현할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="math 역할 - MathML을 사용한 수학적 표현" language="javascript" className="uk_gist_code_box mt_m">
      {`<math xmlns="http://www.w3.org/1998/Math/MathML">
      							<mrow>
      								<mi>a</mi>
      								<mo>=</mo>
      								<mfrac>
      									<mrow>
      										<mtext>b</mtext>
      										<mo>&#xB1;</mo>
      										<msqrt>
      											<mrow>
      												<msup>
      													<mi>b</mi>
      													<mn>2</mn>
      												</msup>
      												<mo>-</mo>
      												<mn>4ac</mn>
      											</mrow>
      										</msqrt>
      									</mrow>
      									<mrow>
      										<mn>2a</mn>
      									</mrow>
      								</mfrac>
      							</mrow>
      						</math>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">명시적으로 math 역할 지정 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;math&quot;</code>를 지정하여 수학적 표현을 명시적으로 나타내고 있으며,
      					<code>aria-label</code>을 사용해 수식의 의미를 설명하고 있습니다.
      					<code>MathML</code>을 사용할 수 없는 상황에서 유용한 방법입니다.
      				</p>
      				
      <CodeBlock title="math 역할 - 명시적으로 math 역할 지정" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="math" aria-label="Quadratic formula">
      							<p>a = (-b ± √(b² - 4ac)) / 2a</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">note 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>note</code> 역할은 웹 페이지나 애플리케이션에서 부가적인 정보를 제공하는 데 사용됩니다.
      				이 역할은 중요한 정보를 보완하거나, 추가적인 설명을 제공하기 위한 콘텐츠를 나타내며,
      				보조 기술이 이 정보를 사용자에게 명확히 전달할 수 있도록 돕습니다.
      				일반적으로 노트, 팁, 경고 등과 같은 콘텐츠를 설명하는 데 사용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#note" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA note</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/note_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA note</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>note</code> 역할은 주 콘텐츠와는 별도로 부가적인 정보를 제공하는 데 사용됩니다.
      					이 정보는 본문의 내용이나 주요 콘텐츠를 보완하는 역할을 하며, 콘텐츠의 흐름을 중단하지 않으면서 중요한 정보를 제공할 때 유용합니다.<br />
      					보조 기술은 이 역할을 통해 사용자가 페이지 내에서 노트나 추가 설명을 쉽게 탐색하고, 필요한 정보를 얻을 수 있도록 돕습니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(예: <code>&lt;aside&gt;</code>, <code>&lt;blockquote&gt;</code>)를 사용하여 부가적인 정보를 제공하는 것이 가장 바람직하며,
      						비표준 마크업에서는 <code>role=&quot;note&quot;</code>를 명시적으로 지정해야 합니다.
      						<code>note</code> 역할은 콘텐츠의 주요 흐름을 방해하지 않도록 주의 깊게 사용해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>note</code> 역할을 통해 부가적인 정보를 명확하게 정의함으로써, 사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      						이를 통해 사용자는 필요한 추가 정보를 쉽게 이해하고, 문서의 내용을 효과적으로 탐색할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>콘텐츠의 주요 흐름을 방해하지 않도록 주의</strong>
      					<p>
      						<code>note</code> 역할은 부가적인 정보나 설명을 제공하기 위해 사용되므로, 콘텐츠의 주요 흐름을 방해하지 않도록 배치해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>시멘틱 마크업 우선 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 요소(예: <code>&lt;aside&gt;</code>, <code>&lt;blockquote&gt;</code>)를 사용하여 부가적인 정보를 제공하는 것이 좋습니다.
      						이들은 자동으로 부가적인 정보를 설명하는 역할을 수행합니다.
      					</p>
      				</li>
      				<li>
      					<strong>명확한 정보 제공</strong>
      					<p>
      						<code>note</code> 역할을 사용하여 제공되는 정보는 명확하고 간결하게 작성되어야 하며, 사용자에게 중요한 추가 정보를 전달할 수 있어야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				기본적으로 상속된 상태나 속성은 없습니다.
      				<mark><code>note</code> 역할은 부가적인 정보를 제공하는 역할을 하므로, 추가적인 ARIA 상태나 속성이 필요하지 않습니다.</mark>
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - note 역할을 사용하지 않아야 하는 경우</h4>
      				<p className="mt_s">
      					이 예시는 페이지의 주요 제목에 <code>note</code> 역할을 사용했으나, 이는 잘못된 사용입니다.
      					<code>note</code> 역할은 부가적인 정보나 설명을 제공할 때 사용되어야 하며, 주 콘텐츠에 적용해서는 안 됩니다.
      				</p>
      				
      <CodeBlock title="note 역할 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="note">
      							<h1>Welcome to Our Website</h1>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시 - note 역할의 적절한 사용</h4>
      				<p className="mt_s">
      					이 예시는 부가적인 정보를 제공하는 데 <code>role=&quot;note&quot;</code>를 적절하게 사용하여,
      					보조 기술이 이 정보를 올바르게 사용자에게 전달할 수 있습니다.
      				</p>
      				
      <CodeBlock title="note 역할 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="note">
      							<p>Note: Make sure to check your email for order confirmation.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 마크업에서의 기본 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 HTML의 <code>&lt;aside&gt;</code> 요소를 사용하여 추가적인 정보를 제공하고 있습니다.
      					<code>&lt;aside&gt;</code> 요소는 부가적인 정보를 나타내며, 자동으로 <code>note</code> 역할을 수행합니다.
      				</p>
      				
      <CodeBlock title="note 역할 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<aside>
      							<p>Note: This product is only available in select regions.</p>
      						</aside>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">명시적으로 note 역할 지정 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;note&quot;</code>를 지정하여 비표준 마크업에서 추가 정보를 제공하는 예시입니다.
      					이 방법은 시멘틱한 요소를 사용할 수 없는 상황에서 유용합니다.
      				</p>
      				
      <CodeBlock title="note 역할 - 명시적으로 note 역할 지정" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="note">
      							<p>Tip: You can save 10% by signing up for our newsletter.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">paragraph 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>paragraph</code> 역할은 텍스트를 그룹화하여 하나의 논리적인 단락을 나타내는 역할을 합니다.
      				HTML에서 <code>&lt;p&gt;</code> 요소가 기본적으로 paragraph 역할을 수행합니다.
      				이 역할은 보조 기술이 텍스트의 구조와 의미를 올바르게 이해하고, 사용자에게 전달할 수 있도록 돕습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#paragraph" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA paragraph</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs: HTML: p element</a><br />
      				<a href="/publishing/html/04-grouping/02-p_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : p element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>paragraph</code> 역할은 텍스트를 하나의 논리적 단위로 묶는 역할을 하며, 주로 텍스트 콘텐츠의 구조와 흐름을 나타내는 데 사용됩니다.
      					이 역할은 보조 기술이 문서의 텍스트를 올바르게 인식하고, 텍스트 간의 관계를 이해할 수 있도록 돕습니다.
      				</li>
      				<li>
      					HTML의 <code>&lt;p&gt;</code> 요소는 기본적으로 <code>paragraph</code> 역할을 수행하여, 문서 내에서 텍스트 단락을 정의합니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;p&gt;</code>)를 사용하여 텍스트 단락을 정의하는 것이 가장 바람직하며,
      						비표준 마크업에서는 <code>role=&quot;paragraph&quot;</code>를 명시적으로 지정해야 합니다.
      						<code>paragraph</code> 역할은 논리적인 텍스트 단락을 나타낼 때만 사용해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>paragraph</code> 역할을 통해 웹 페이지의 텍스트 구조를 명확하게 정의함으로써,
      						사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      						이를 통해 사용자는 텍스트를 쉽게 탐색하고, 내용을 명확히 이해할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>시멘틱 마크업 우선 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 요소(<code>&lt;p&gt;</code>)를 사용하여 텍스트 단락을 정의하는 것이 좋습니다.
      						이는 자동으로 <code>paragraph</code> 역할을 수행하며, 문서의 구조를 명확히 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 텍스트 그룹화</strong>
      					<p>
      						텍스트를 논리적인 단락으로 묶어야 할 때, <code>paragraph</code> 역할을 사용하거나,
      						<code>&lt;p&gt;</code> 요소를 사용하여 텍스트의 흐름과 의미를 명확히 표현해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>불필요한 사용 피하기</strong>
      					<p>
      						<code>paragraph</code> 역할은 단순 텍스트 블록이 아닌, 논리적으로 구분된 단락을 나타낼 때 사용해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				기본적으로 상속된 상태나 속성은 없습니다.
      				<mark><code>paragraph</code> 역할은 텍스트 단락을 정의하는 역할을 하므로, 추가적인 ARIA 상태나 속성이 필요하지 않습니다.</mark>
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - paragraph 역할을 불필요하게 사용</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;span&gt;</code> 요소에 <code>role=&quot;paragraph&quot;</code>를 지정했으나,
      					<code>&lt;span&gt;</code>은 인라인 요소로 단락을 나타내는 데 적합하지 않습니다.
      					또한, 시멘틱한 마크업인 <code>&lt;p&gt;</code> 요소를 사용하는 것이 더 적절합니다.
      				</p>
      				
      <CodeBlock title="paragraph 역할 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 -->
      						<span role="paragraph">This text is incorrectly marked as a paragraph.</span>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 올바른 예시 - 시멘틱 마크업에서의 기본 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 HTML의 <code>&lt;p&gt;</code> 요소를 사용하여 텍스트 단락을 정의하고 있습니다.
      					<code>&lt;p&gt;</code> 요소는 자동으로 <code>paragraph</code> 역할을 수행하여,
      					보조 기술이 이 텍스트를 올바르게 인식하고 사용자에게 전달할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="paragraph 역할 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 올바른 예시 -->
      						<p>This is a paragraph of text that provides information on a particular topic.</p>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">명시적으로 paragraph 역할 지정 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;paragraph&quot;</code>를 지정하여 비표준 마크업에서 텍스트 단락을 정의한 예시입니다.
      					이 방법은 <code>&lt;p&gt;</code> 요소를 사용할 수 없는 상황에서 유용할 수 있지만,
      					일반적으로는 <code>&lt;p&gt;</code> 요소를 사용하는 것이 더 적절합니다.
      				</p>
      				
      <CodeBlock title="paragraph 역할 - 명시적 역할 지정" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 명시적 역할 지정 -->
      						<div role="paragraph">
      							This is a paragraph of text that is wrapped in a div element.
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">presentation 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>presentation</code> 역할은 HTML 요소의 시멘틱 의미를 제거하여,
      				보조 기술이 해당 요소를 단순히 레이아웃 목적으로만 인식하도록 하는 역할을 합니다.
      				이 역할은 시각적으로는 중요한 요소이지만, 접근성 측면에서는 의미를 전달할 필요가 없는 경우에 사용됩니다.
      				주로 시멘틱 마크업을 무효화하고, 콘텐츠를 단순히 시각적으로만 표시할 때 사용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#presentation" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA presentation</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA presentation</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>presentation</code> 역할은 HTML 요소의 시멘틱 의미를 제거하여 보조 기술이 해당 요소를 무시하도록 합니다.
      					예를 들어, <code>&lt;table&gt;</code> 요소에 <code>role=&quot;presentation&quot;</code>을 지정하면,
      					보조 기술은 이 표를 데이터 구조가 아닌 단순한 레이아웃 도구로 인식합니다.<br />
      					이 역할은 주로 레이아웃을 위해 사용된 시멘틱 요소가 접근성 측면에서 불필요한 정보를 전달할 때 사용됩니다.
      					예를 들어, 레이아웃을 위한 표나 목록이 실제로 의미 있는 데이터나 항목을 전달하지 않을 때 사용됩니다.
      				</li>
      				<li>
      					<code>presentation</code> 역할을 사용하면, 해당 요소가 문서의 시멘틱 구조에 기여하지 않으며, 보조 기술이 이를 무시할 수 있습니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						레이아웃 목적으로만 사용된 시멘틱한 HTML 요소에 <code>role=&quot;presentation&quot;</code>을 사용하여,
      						불필요한 정보를 제거할 수 있습니다. 그러나 실제 의미 있는 콘텐츠에는 이 역할을 사용하지 않아야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>presentation</code> 역할을 통해 접근성을 유지하면서 불필요한 시멘틱 정보를 제거함으로써,
      						사용자 경험을 향상시킬 수 있습니다. 이를 통해 사용자는 콘텐츠를 효과적으로 탐색하고, 불필요한 정보를 피할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>의미 없는 시멘틱 제거</strong>
      					<p>
      						<code>presentation</code> 역할은 시멘틱한 HTML 요소가 단순히 레이아웃 목적으로만 사용될 때 사용됩니다.
      						이 역할을 적용하면 보조 기술이 해당 요소를 무시하게 되므로, 실제 의미 있는 콘텐츠에는 사용하지 않아야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 사용 사례</strong>
      					<p>
      						레이아웃 목적으로 사용된 표나 목록, 아이콘 폰트 등에 <code>presentation</code> 역할을 사용하여,
      						접근성 측면에서 불필요한 정보를 제거할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>과도한 사용 피하기</strong>
      					<p>
      						문서의 구조를 명확히 하기 위해 시멘틱 요소를 사용하는 것이 중요합니다.
      						<code>presentation</code> 역할을 과도하게 사용하여 문서의 시멘틱 구조를 무너뜨리지 않도록 주의해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				기본적으로 상속된 상태나 속성은 없습니다.
      				<mark><code>presentation</code> 역할은 시멘틱 의미를 제거하는 역할이므로, 추가적인 ARIA 상태나 속성이 필요하지 않습니다.</mark>
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">role=&quot;presentation&quot; 과 aria-hidden="true"의 비교</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>role=&quot;presentation&quot;</code>은 요소가 시각적으로 레이아웃을 유지하는데 필요하지만 접근성 도구에는 구조적 의미를 주고 싶지 않을 때 사용합니다.
      				</li>
      				<li>
      					<code>aria-hidden=&quot;true&quot;</code>는 그 요소와 하위 요소들을 스크린 리더에서 완전히 숨기고자 할 때 사용합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					<b className="t_black">중요한 콘텐츠에 <code>role=&quot;presentation&quot;</code>을 사용하여 스크린 리더에서 이 콘텐츠를 무시하게 만든 경우</b><br />
      					이 예시에서는 <code>role=&quot;presentation&quot;</code> 속성이 <code>div</code> 요소에 적용되어 있어,
      					해당 <code>div</code> 안에 포함된 모든 콘텐츠(<code>h1</code>과 <code>p</code>)가 스크린 리더에서 무시됩니다.
      					그러나 이 콘텐츠는 중요한 정보이므로, 사용자가 이를 인식할 수 있도록
      					<code>role=&quot;presentation&quot;</code>을 제거하거나 적절한 ARIA 속성을 사용하여 보조 기술이 콘텐츠를 인식할 수 있게 해야 합니다.
      				</p>
      				
      <CodeBlock title="presentation 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="presentation">
      							 <h1>웹사이트 방문을 환영합니다.</h1>
      							 <p>이 웹사이트는 접근성에 대한 중요한 정보를 제공합니다.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 올바른 예시</h4>
      				<p className="mt_s">
      					<b className="t_black">시각적인 레이아웃을 위해 사용된 비중요 요소에 <code>role=&quot;presentation&quot;</code>을 사용하여 스크린 리더가 무시하도록 설정</b><br />
      					이 예시에서 <code>visual-separator</code> 요소는 단순히 레이아웃을 구분하는 용도이므로,
      					스크린 리더가 이를 무시하도록 <code>role=&quot;presentation&quot;</code> 속성을 사용했습니다.
      					이렇게 하면 스크린 리더 사용자는 구분선을 건너뛰고 중요한 콘텐츠에 집중할 수 있게 됩니다.
      				</p>
      				
      <CodeBlock title="presentation 역할 / (권장) 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div class="layout-container">
      							<div class="sidebar">
      								<p>Sidebar content here</p>
      							</div>

      							<!-- 이 요소는 단순히 시각적 구분을 위한 것이므로 role="presentation"을 사용 -->
      							<div class="visual-separator" role="presentation"></div>

      							<div class="content">
      								<h1>Main Content Area</h1>
      								<p>This is where the main content of the page resides.</p>
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">표 안의 role="presentation" 상황</h4>
      				<p className="mt_s">
      					<b className="t_black">레이아웃용 표에서 의미 없는 행과 셀에 <code>role=&quot;presentation&quot;</code>을 사용</b><br />
      					이 예시는 빈 행이 시각적으로만 필요하고 접근성 도구에서는 중요하지 않기 때문에
      					<code>role=&quot;presentation&quot;</code>을 사용했습니다. 스크린 리더는 이 행을 무시하고 중요한 정보로 넘어갑니다.
      				</p>
      				
      <CodeBlock title="presentation 역할 / 표에 사용" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      							<tr>
      								<td>Name:</td>
      								<td>John Doe</td>
      							</tr>
      							<tr>
      								<!-- 시각적 구분을 위한 빈 행 -->
      								<td colspan="2" role="presentation"></td>
      							</tr>
      							<tr>
      								<td>Email:</td>
      								<td>johndoe@example.com</td>
      							</tr>
      						</table>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">아이콘에 role="presentation" 적용</h4>
      				<p className="mt_s">
      					이 예시는 아이콘이 단순히 장식적인 요소일 때,
      					<code>alt</code> 속성을 비워두고 <code>role=&quot;presentation&quot;</code>을 사용하여 스크린 리더가 이미지를 무시하도록 설정한 것입니다.
      					이렇게 하면 스크린 리더 사용자가 불필요한 정보를 듣지 않고, 중요한 콘텐츠에 집중할 수 있습니다.
      				</p>
      				
      <CodeBlock title="presentation 역할 / 아이콘에 사용" language="javascript" className="uk_gist_code_box mt_m">
      {`<button>
      							<img src="icon.png" alt="" role="presentation">
      							Submit
      						</button>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">role=&quot;presentation&quot; 과 aria-hidden="true"의 비교 예시</h4>
      				<p className="mt_s">
      					이 두 속성은 서로 다른 용도로 사용되므로, 어떤 상황에서 어느 속성을 사용하는 것이 적절한지 판단하는 것이 중요합니다.<br />
      					role="presentation"은 주로 구조적 의미가 없을 때 사용되고,<br />
      					aria-hidden="true"는 특정 콘텐츠를 스크린 리더에서 숨기고자 할 때 사용됩니다.
      				</p>
      				
      <CodeBlock title="presentation 역할 / aria-hidden과 비교" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- table 요소는 스크린 리더에게 테이블로 인식되지 않고, 단순히 텍스트와 이미지가 나열된 것처럼 인식됩니다. -->
      						<table role="presentation">
      							<tr>
      								<td><img src="icon.png" alt=""></td>
      								<td>Item description here</td>
      							</tr>
      						</table>

      						<!-- div 요소와 그 안에 있는 모든 콘텐츠(이미지와 텍스트 포함)는 스크린 리더에 의해 완전히 무시됩니다. -->
      						<div aria-hidden="true">
      							<img src="decorative-image.png" alt="Decorative">
      							<p>This text is hidden from screen readers.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">row 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>row</code> 역할은 테이블, 그리드, 트리그리드 등에서 데이터를 행(<code>row</code>) 단위로 그룹화하여 나타내는 역할을 합니다.
      				이 역할은 보조 기술이 행 단위로 데이터를 올바르게 인식하고, 각 셀이나 항목 간의 관계를 사용자에게 전달할 수 있도록 돕습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#row" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA row</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/row_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA row</a><br />
      				<a href="/publishing/html/08-table/08-tr_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : tr element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>row</code> 역할은 테이블이나 그리드와 같은 데이터 구조에서 행을 나타내며,
      					보조 기술이 데이터를 행 단위로 처리하도록 도와, 사용자가 데이터 구조를 더 쉽게 이해할 수 있습니다.<br />
      					HTML의 <code>&lt;tr&gt;</code> 요소는 기본적으로 <code>row</code> 역할을 수행하며, 행에 포함된 데이터를 그룹화하는 기능을 합니다.
      					이 역할은 그리드나 트리그리드와 같은 다양한 데이터 구조에서 데이터를 논리적으로 정리하는 데 중요한 역할을 합니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;tr&gt;</code>)를 사용하여 테이블 행을 정의하는 것이 가장 바람직하며,
      						비표준 마크업에서는 <code>role=&quot;row&quot;</code>를 명시적으로 지정해야 합니다.
      						<code>row</code> 역할은 반드시 데이터 구조 내에서 사용되어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>row</code> 역할을 통해 데이터 구조를 명확하게 정의함으로써,
      						사용자 경험과 접근성을 모두 향상시며, 데이터를 쉽게 탐색하고, 구조를 명확히 이해할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>시멘틱 마크업을 우선 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 요소(<code>&lt;tr&gt;</code>)를 사용하여 테이블 행을 정의하는 것이 좋습니다.
      						<code>&lt;tr&gt;</code>요소는 자동으로 row 역할을 수행하며, 문서의 구조를 명확히 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>그리드 및 트리그리드에서의 사용</strong>
      					<p>
      						그리드나 트리그리드 구조에서는 <code>row</code> 역할을 사용하여 행을 명확하게 정의하고, 각 셀 간의 관계를 명확히 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 구조 유지</strong>
      					<p>
      						<code>row</code> 역할을 사용할 때는 반드시 그리드, 테이블, 트리그리드 등의 시멘틱 구조 내에서 사용해야 하며,
      						이 구조를 무너뜨리지 않도록 주의해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						행의 제목을 지정하여, 보조 기술이 이 제목을 행과 연관지어 사용자에게 전달할 수 있게 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-level</strong>
      					<p>
      						트리그리드 구조에서 행의 깊이를 나타냅니다. 이 속성은 행이 트리 구조 내에서 어느 수준에 위치하는지 정의하는 데 사용됩니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - row 역할을 사용하지 않아야 하는 경우</h4>
      				<p className="mt_s">
      					이 예시는 데이터 구조와 무관한 단락에 <code>row</code> 역할을 사용했습니다.
      					<code>row</code> 역할은 반드시 데이터 테이블, 그리드, 트리그리드 등의 구조 내에서 사용해야 하며,
      					단순한 텍스트 블록에는 사용하지 않아야 합니다.
      				</p>
      				
      <CodeBlock title="row 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="row">
      							<p>This is not a data row</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시 - 그리드 구조 내에서 row 역할 사용</h4>
      				<p className="mt_s">
      					이 예시는 그리드 구조 내에서 <code>role=&quot;row&quot;</code>와 <code>role=&quot;gridcell&quot;</code>을 사용하여,
      					보조 기술이 데이터를 올바르게 인식하고 사용자에게 전달할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="row 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="grid">
      							<div role="row">
      								<div role="gridcell">Apple</div>
      								<div role="gridcell">$1.00</div>
      								<div role="gridcell">50</div>
      							</div>
      							<div role="row">
      								<div role="gridcell">Banana</div>
      								<div role="gridcell">$0.50</div>
      								<div role="gridcell">100</div>
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 마크업에서의 기본 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 HTML의 <code>&lt;tr&gt;</code> 요소를 사용하여 테이블 행을 정의하고 있습니다.
      					<code>&lt;tr&gt;</code> 요소는 자동으로 <code>row</code> 역할을 수행하여, 보조 기술이 이 구조를 올바르게 인식할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="row 역할 / 권장 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      							<tr>
      								<td>Apple</td>
      								<td>$1.00</td>
      								<td>50</td>
      							</tr>
      							<tr>
      								<td>Banana</td>
      								<td>$0.50</td>
      								<td>100</td>
      							</tr>
      						</table>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">명시적으로 row 역할 지정 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;row&quot;</code>를 지정하여 비표준 마크업에서 그리드 행을 정의한 예시입니다.
      					각 셀은 <code>role=&quot;gridcell&quot;</code>로 정의되어 있습니다.
      				</p>
      				
      <CodeBlock title="row 역할 / 명시적 역할 지정" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="row">
      							<div role="gridcell">Apple</div>
      							<div role="gridcell">$1.00</div>
      							<div role="gridcell">50</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">rowgroup 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>rowgroup</code> 역할은 테이블, 그리드, 트리그리드 등의 데이터 구조에서 여러 행(<code>row</code>)을 묶어 하나의 그룹으로 나타내는 역할을 합니다.
      				이 역할은 행 그룹을 정의하여 보조 기술이 이 그룹을 올바르게 인식하고,
      				사용자에게 데이터를 더 구조적으로 전달할 수 있도록 돕습니다.
      				HTML에서 <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code> 요소가 기본적으로 <code>rowgroup</code> 역할을 수행합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#rowgroup" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA rowgroup</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA rowgroup</a><br />
      				<a href="/publishing/html/08-table/05-thead_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : thead element</a><br />
      				<a href="/publishing/html/08-table/06-tbody_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : tbody element</a><br />
      				<a href="/publishing/html/08-table/07-tfoot_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : tfoot element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>rowgroup</code> 역할은 여러 개의 행을 논리적으로 묶어 하나의 그룹으로 표현하며,
      					보조 기술이 이 그룹을 문서의 다른 행과 구분하여 인식할 수 있도록 합니다.<br />
      					이 역할은 주로 테이블의 머리글, 본문, 꼬리글 등을 그룹화하는 데 사용됩니다.
      					HTML에서 <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code> 요소는 각각 행 그룹을 나타내며,
      					자동으로 <code>rowgroup</code> 역할을 수행합니다.
      				</li>
      				<li>
      					<code>rowgroup</code> 역할은 테이블이나 그리드와 같은 구조에서 데이터를 구조화하고,
      					사용자에게 데이터의 논리적인 구성을 명확히 전달하는 데 도움이 됩니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>)를 사용하여 행 그룹을 정의하는 것이 가장 바람직하며,
      						비표준 마크업에서는 <code>role=&quot;rowgroup&quot;</code>을 명시적으로 지정해야 합니다. <code>rowgroup</code> 역할은 반드시 데이터 구조 내에서 사용되어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>rowgroup</code> 역할을 통해 데이터 구조를 명확하게 정의함으로써, 사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      						이를 통해 사용자는 데이터를 구조적으로 이해하고, 필요한 내용을 효율적으로 탐색할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>시멘틱 마크업을 우선 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 요소(<code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>)를 사용하여 행 그룹을 정의하는 것이 좋습니다.
      						이는 자동으로 <code>rowgroup</code> 역할을 수행하며, 문서의 구조를 명확히 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>그리드 및 트리그리드에서의 사용</strong>
      					<p>
      						그리드나 트리그리드 구조에서는 <code>rowgroup</code> 역할을 사용하여 여러 행을 그룹화하고,
      						그룹 내에서 행 간의 관계를 명확히 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 구조 유지</strong>
      					<p>
      						<code>rowgroup</code> 역할을 사용할 때는 데이터 구조 내에서 사용해야 하며, 구조를 무너뜨리지 않도록 주의해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						행 그룹의 제목을 지정하여, 보조 기술이 이 제목을 그룹과 연관지어 사용자에게 전달할 수 있게 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 의미 없는 그룹화</h4>
      				<p className="mt_s">
      					이 예시는 데이터 구조와 무관한 텍스트를 <code>role=&quot;rowgroup&quot;</code>으로 지정했으나,
      					<code>rowgroup</code> 역할은 반드시 데이터 구조 내에서 사용되어야 합니다.
      					의미 없는 콘텐츠에 이 역할을 사용하면 보조 기술이 혼란스러울 수 있습니다.
      				</p>
      				
      <CodeBlock title="rowgroup 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="rowgroup">
      							<p>This text does not belong to a row group</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시 - 그리드 구조 내에서 rowgroup 역할 사용 사용</h4>
      				<p className="mt_s">
      					이 예시는 그리드 구조 내에서 <code>role=&quot;rowgroup&quot;</code>과 <code>role=&quot;row&quot;</code>를 사용하여,
      					보조 기술이 데이터를 그룹 단위로 인식하고, 사용자에게 구조화된 정보를 제공할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="rowgroup 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="table">
      							<div role="rowgroup" aria-labelledby="header-row">
      								<div role="row" id="header-row">
      									<div role="columnheader">Product</div>
      									<div role="columnheader">Price</div>
      									<div role="columnheader">Quantity</div>
      								</div>
      							</div>
      							<div role="rowgroup">
      								<div role="row">
      									<div role="gridcell">Apple</div>
      									<div role="gridcell">$1.00</div>
      									<div role="gridcell">50</div>
      								</div>
      								<div role="row">
      									<div role="gridcell">Banana</div>
      									<div role="gridcell">$0.50</div>
      									<div role="gridcell">100</div>
      								</div>
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 마크업에서의 기본 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 HTML의 <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code> 요소를 사용하여 테이블의 행을 그룹화하고 있습니다.
      					각 요소는 자동으로 <code>rowgroup</code> 역할을 수행하며, 보조 기술이 이 구조를 올바르게 인식할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="rowgroup 역할 / 시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      							<thead>
      								<tr>
      									<th>Product</th>
      									<th>Price</th>
      									<th>Quantity</th>
      								</tr>
      							</thead>
      							<tbody>
      								<tr>
      									<td>Apple</td>
      									<td>$1.00</td>
      									<td>50</td>
      								</tr>
      								<tr>
      									<td>Banana</td>
      									<td>$0.50</td>
      									<td>100</td>
      								</tr>
      							</tbody>
      							<tfoot>
      								<tr>
      									<td colspan="3">Total</td>
      								</tr>
      							</tfoot>
      						</table>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">명시적으로 rowgroup 역할 지정 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;rowgroup&quot;</code>을 지정하여 비표준 마크업에서 행 그룹을 정의한 예시입니다.
      					각 그룹은 <code>role=&quot;row&quot;</code>를 사용하여 행을 포함하며, 보조 기술이 그룹 간의 관계를 인식할 수 있도록 돕습니다.
      				</p>
      				
      <CodeBlock title="rowgroup 역할 / 명시적 역할 지정" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="table">
      							<div role="rowgroup">
      								<div role="row">
      									<div role="columnheader">Product</div>
      									<div role="columnheader">Price</div>
      									<div role="columnheader">Quantity</div>
      								</div>
      							</div>
      							<div role="rowgroup">
      								<div role="row">
      									<div role="gridcell">Apple</div>
      									<div role="gridcell">$1.00</div>
      									<div role="gridcell">50</div>
      								</div>
      								<div role="row">
      									<div role="gridcell">Banana</div>
      									<div role="gridcell">$0.50</div>
      									<div role="gridcell">100</div>
      								</div>
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">rowheader 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>rowheader</code> 역할은 테이블, 그리드, 또는 트리그리드에서 행의 제목을 나타내는 셀에 사용됩니다.
      				이 역할은 각 행의 주제를 설명하며, 보조 기술이 이를 올바르게 인식하고 사용자에게 전달할 수 있도록 돕습니다.
      				일반적으로 테이블의 첫 번째 열에 위치하며, 해당 행의 모든 데이터를 설명하는 역할을 합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#rowheader" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA rowheader</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA rowheader</a><br />
      				<a href="/publishing/html/08-table/09-th_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : th element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>rowheader</code> 역할은 테이블이나 그리드에서 행의 주제를 나타내는 셀에 사용됩니다. 이 셀은 행 내의 다른 데이터 셀들과 관련된 정보를 제공합니다.
      				</li>
      				<li>
      					HTML의 <code>&lt;th scope="row"&gt;</code> 요소는 자동으로 <code>rowheader</code> 역할을 수행합니다.
      					이 역할을 통해 보조 기술은 해당 셀을 행의 제목으로 인식하고, 사용자가 데이터의 맥락을 이해할 수 있도록 합니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;th scope="row"&gt;</code>)를 사용하여 행 머리글을 정의하는 것이 가장 바람직하며,
      						비표준 마크업에서는 <code>role=&quot;rowheader&quot;</code>를 명시적으로 지정해야 합니다.
      						<code>rowheader</code> 역할은 반드시 데이터 구조 내에서 사용되어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>rowheader</code> 역할을 통해 데이터 구조를 명확하게 정의함으로써,
      						사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      						이를 통해 사용자는 데이터를 더 쉽게 탐색하고, 각 행의 내용을 명확히 이해할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>시멘틱 마크업을 우선 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 요소(<code>&lt;th scope="row"&gt;</code>)를 사용하여 행 머리글을 정의하는 것이 좋습니다.
      						이는 자동으로 <code>rowheader</code> 역할을 수행하며, 문서의 구조를 명확히 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>그리드 및 트리그리드에서의 사용</strong>
      					<p>
      						그리드나 트리그리드 구조에서는 <code>rowheader</code> 역할을 사용하여 각 행의 주제를 명확하게 정의하고,
      						셀 간의 관계를 명확히 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 구조 유지</strong>
      					<p>
      						<code>rowheader</code> 역할을 사용할 때는 반드시 데이터 구조 내에서 사용해야 하며,
      						구조를 무너뜨리지 않도록 주의해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-sort</strong>
      					<p>
      						이 속성은 해당 행이 정렬된 상태인 경우 정렬 방향을 나타냅니다.
      						<code>ascending</code>, <code>descending</code>, <code>none</code> 또는 <code>other</code> 값을 가질 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						이 속성은 셀의 제목을 지정하여, 보조 기술이 이 제목을 셀과 연관지어 사용자에게 전달할 수 있게 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 의미 없는 셀에 rowheader 역할 사용</h4>
      				<p className="mt_s">
      					이 예시는 단순 텍스트 블록에 <code>rowheader</code> 역할을 사용했으나,
      					<code>rowheader</code> 역할은 반드시 테이블, 그리드, 또는 트리그리드와 같은 데이터 구조 내에서 사용되어야 합니다.
      					의미 없는 콘텐츠에 이 역할을 사용하면 보조 기술이 혼란스러울 수 있습니다.
      				</p>
      				
      <CodeBlock title="rowheader 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="rowheader">This is not a row header</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시 - 그리드 구조 내에서 rowheader 역할 사용</h4>
      				<p className="mt_s">
      					이 예시는 그리드 구조 내에서 <code>role=&quot;rowheader&quot;</code>과 <code>role=&quot;gridcell&quot;</code>을 사용하여,
      					보조 기술이 데이터를 올바르게 인식하고, 사용자에게 행의 주제를 명확히 전달할 수 있도록 했습니다.
      				</p>
      				
      <CodeBlock title="rowheader 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="grid">
      							<div role="row">
      								<div role="rowheader">Apple</div>
      								<div role="gridcell">$1.00</div>
      								<div role="gridcell">50</div>
      							</div>
      							<div role="row">
      								<div role="rowheader">Banana</div>
      								<div role="gridcell">$0.50</div>
      								<div role="gridcell">100</div>
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 마크업에서의 기본 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 HTML의 <code>&lt;th scope="row"&gt;</code> 요소를 사용하여 테이블 행의 머리글을 정의하고 있습니다.
      					<code>&lt;h&gt;</code> 요소는 자동으로 <code>rowheader</code> 역할을 수행하며, 보조 기술이 이 구조를 올바르게 인식할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="rowheader 역할 / 시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      							<tr>
      								<th scope="row">Apple</th>
      								<td>$1.00</td>
      								<td>50</td>
      							</tr>
      							<tr>
      								<th scope="row">Banana</th>
      								<td>$0.50</td>
      								<td>100</td>
      							</tr>
      						</table>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">명시적으로 rowheader 역할 지정 </h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;rowheader&quot;</code>를 지정하여 비표준 마크업에서 행 머리글을 정의한 예시입니다.
      					각 행의 데이터는 <code>role=&quot;gridcell&quot;</code>을 사용하여 정의됩니다.
      				</p>
      				
      <CodeBlock title="rowheader 역할 / 명시적 역할 지정 " language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="row">
      							<div role="rowheader">Apple</div>
      							<div role="gridcell">$1.00</div>
      							<div role="gridcell">50</div>
      						</div>
      						<div role="row">
      							<div role="rowheader">Banana</div>
      							<div role="gridcell">$0.50</div>
      							<div role="gridcell">100</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">table 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>table</code> 역할은 데이터를 행과 열로 구성된 표 형식으로 나타내는 구조를 정의하는 데 사용됩니다.
      				이 역할은 보조 기술이 데이터를 테이블 형식으로 인식하고, 각 셀 간의 관계를 사용자에게 명확히 전달할 수 있도록 돕습니다.
      				HTML의 <code>&lt;table&gt;</code> 요소는 기본적으로 <code>table</code> 역할을 수행합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#table" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA table</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/table_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA table</a><br />
      				<a href="/publishing/html/08-table/01-table_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : table element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>table</code> 역할은 데이터를 표 형식으로 나타내는 구조를 정의합니다.
      					이 역할을 통해 보조 기술은 데이터를 행과 열로 구성된 테이블로 인식하고,
      					사용자가 각 셀 간의 관계를 쉽게 이해할 수 있도록 합니다.
      				</li>
      				<li>
      					HTML의 <code>&lt;table&gt;</code> 요소는 자동으로 table 역할을 수행하며,
      					이 요소 내에서 <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code> 등의 요소가 사용됩니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code>)를
      						사용하여 테이블 구조를 정의하는 것이 가장 바람직하며,
      						비표준 마크업에서는 <code>role=&quot;table&quot;</code>을 명시적으로 지정해야 합니다.
      						레이아웃 목적으로 사용되는 테이블에는 <code>role=&quot;presentation&quot;</code>을 사용하는 것이 좋습니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>table</code> 역할을 통해 데이터 구조를 명확하게 정의함으로써, 사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      						이를 통해 사용자는 데이터를 더 쉽게 탐색하고, 각 셀 간의 관계를 명확히 이해할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>시멘틱 마크업을 우선 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 요소(<code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code>)를
      						사용하여 데이터를 정의하는 것이 좋습니다.
      						<code>&lt;table&gt;</code> 요소는 자동으로 <code>table</code> 역할을 수행하며, 문서의 구조를 명확히 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>데이터 테이블과 레이아웃 테이블 구분</strong>
      					<p>
      						데이터 구조를 나타내는 테이블과 레이아웃 목적으로 사용되는 테이블을 구분해야 합니다.
      						데이터 테이블에는 <code>table</code> 역할이 필요하지만, 레이아웃을 위한 테이블에는
      						<code>role=&quot;presentation&quot;</code>을 사용하여 보조 기술이 이를 무시하도록 하는 것이 좋습니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 테이블 구조 유지</strong>
      					<p>
      						<code>table</code> 역할을 사용할 때는 각 셀(<code>td</code>, <code>th</code>)이 적절한 행(<code>tr</code>)과 열로 구성되도록 구조를 유지해야 합니다.
      						이렇게 하면 보조 기술이 데이터를 정확하게 전달할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-label</strong>
      					<p>
      						테이블의 이름이나 설명을 지정하여 보조 기술이 이를 사용자에게 전달할 수 있도록 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						테이블의 제목을 지정하여 보조 기술이 이 제목을 테이블과 연관지어 사용자에게 전달할 수 있게 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-describedby</strong>
      					<p>
      						테이블에 대한 추가 설명을 제공하여, 보조 기술이 이 설명을 테이블과 연관지어 사용자에게 전달할 수 있게 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 레이아웃 테이블에 table 역할 사용</h4>
      				<p className="mt_s">
      					이 예시는 레이아웃을 위한 테이블에 <code>table</code> 역할을 사용하고 있으며, 이는 잘못된 사용입니다.
      					레이아웃 목적으로 사용되는 테이블에는 <code>role=&quot;presentation&quot;</code>을 사용하여 보조 기술이 이를 무시하도록 하는 것이 좋습니다.
      				</p>
      				
      <CodeBlock title="table 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<table role="table">
      							<tr>
      								<td><img src="image1.jpg" alt="Image 1"></td>
      								<td><img src="image2.jpg" alt="Image 2"></td>
      								<td><img src="image3.jpg" alt="Image 3"></td>
      							</tr>
      						</table>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 마크업 - 데이터 테이블에 table 역할 사용</h4>
      				<p className="mt_s">
      					이 예시는 HTML의 <code>&lt;table&gt;</code> 요소를 사용하여 테이블 구조를 정의하고 있으며,
      					<code>&lt;caption&gt;</code> 요소로 테이블의 제목을 제공하고 있습니다.
      					<code>table</code> 역할은 자동으로 적용되며, 보조 기술이 이 테이블을 데이터 구조로 인식하고 사용자에게 전달할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="table 역할 / 시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      							<caption>Product Pricing</caption>
      							<thead>
      								<tr>
      									<th>Product</th>
      									<th>Price</th>
      									<th>Quantity</th>
      								</tr>
      							</thead>
      							<tbody>
      								<tr>
      									<td>Apple</td>
      									<td>$1.00</td>
      									<td>50</td>
      								</tr>
      								<tr>
      									<td>Banana</td>
      									<td>$0.50</td>
      									<td>100</td>
      								</tr>
      							</tbody>
      						</table>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">명시적으로 table 역할 지정 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;table&quot;</code>을 지정하여 비표준 마크업에서 테이블 구조를 정의한 예시입니다.
      					각 행과 셀은 <code>role=&quot;row&quot;</code> 및 <code>role=&quot;gridcell&quot;</code>로 정의되어 있습니다.
      				</p>
      				
      <CodeBlock title="table 역할 / 명시적 역할 지정" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="table">
      							<div role="rowgroup">
      								<div role="row">
      									<div role="columnheader">Product</div>
      									<div role="columnheader">Price</div>
      									<div role="columnheader">Quantity</div>
      								</div>
      							</div>
      							<div role="rowgroup">
      								<div role="row">
      									<div role="gridcell">Apple</div>
      									<div role="gridcell">$1.00</div>
      									<div role="gridcell">50</div>
      								</div>
      								<div role="row">
      									<div role="gridcell">Banana</div>
      									<div role="gridcell">$0.50</div>
      									<div role="gridcell">100</div>
      								</div>
      							</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">separator(구분선) 역할 (포커스 불가능한 경우)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>separator</code> 역할은 콘텐츠를 논리적으로 구분하는 시각적인 구분선을 나타내는 데 사용됩니다.
      				이 역할은 주로 메뉴, 툴바, 대화 상자, 또는 기타 인터페이스 구성 요소 내에서 그룹을 나누거나 구획을 구분할 때 사용됩니다.
      				포커스 불가능한 <code>separator</code>는 보조 기술이 해당 요소를 콘텐츠 간의 구분자로 인식하지만,
      				이 요소에 포커스를 둘 수 없도록 설정된 경우입니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#separator" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA separator</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA separator</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>separator</code> 역할은 시각적으로 구분선을 나타내며, 보조 기술이 이를 콘텐츠의 구분자로 인식할 수 있도록 돕습니다.
      					이 역할은 주로 메뉴나 툴바에서 항목을 구분하는 수평선이나 수직선, 또는 다른 콘텐츠를 구분하는 데 사용됩니다.
      				</li>
      				<li>
      					포커스 불가능한 <code>separator</code>는 사용자가 키보드 네비게이션을 통해 이 요소에 포커스를 둘 수 없으며,
      					시각적 또는 논리적인 구분만 제공합니다.
      				</li>
      				<li>
      					HTML에서 <code>&lt;hr&gt;</code> 요소는 기본적으로 시각적 구분선을 나타내며, <code>separator</code> 역할을 암시적으로 수행합니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;hr&gt;</code>)를 사용하여 구분선을 정의하는 것이 가장 바람직하며,
      						비표준 마크업에서는 <code>role=&quot;separator&quot;</code>를 명시적으로 지정해야 합니다.
      						구분선이 단순히 시각적인 구분만 제공할 경우, 포커스 불가능하게 설정하는 것이 좋습니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>separator</code> 역할을 통해 사용자 인터페이스를 구조화하고,
      						접근성을 유지하면서 불필요한 포커스를 제거하여 사용자 경험을 향상시킬 수 있습니다.
      						이를 통해 사용자는 시각적인 구분을 쉽게 이해하고, 필요한 내용을 효율적으로 탐색할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>포커스 가능 여부 결정</strong>
      					<p>
      						구분선이 사용자 인터페이스에서 중요한 역할을 하지 않으며, 단지 시각적 구분만 제공한다면 포커스 불가능한 상태로 유지해야 합니다.
      						그렇지 않으면 포커스 가능하게 설정하여 사용자에게 중요한 정보로 전달해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>시멘틱 마크업 우선 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 요소(<code>&lt;hr&gt;</code>)를 사용하여 구분선을 정의하는 것이 좋습니다.
      						이 요소는 자동으로 <code>separator</code> 역할을 수행하며, 포커스 불가능한 상태로 작동합니다.
      					</p>
      				</li>
      				<li>
      					<strong>구분선 방향 지정</strong>
      					<p>
      						<code>aria-orientation</code> 속성을 사용하여 구분선의 방향을 명확히 지정해야 합니다. 수평 구분선이 기본값이므로,
      						수직 구분선이 필요할 경우 명시적으로 지정해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-orientation</strong>
      					<p>
      						이 속성은 구분선의 방향을 지정합니다. <code>horizontal</code>(수평) 또는 <code>vertical</code>(수직) 값으로 설정할 수 있습니다.
      						기본값은 <code>horizontal</code>입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						구분선이 설명 또는 제목과 연관될 경우, 보조 기술이 이를 설명할 수 있도록 이 속성을 사용할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 불필요한 포커스 가능 설정 사용</h4>
      				<p className="mt_s">
      					이 예시는 구분선에 <code>tabindex=&quot;0&quot;</code>을 지정하여 포커스 가능하게 만들었지만,
      					구분선이 단순히 시각적인 구분만 제공하는 경우 포커스가 필요하지 않습니다.
      					이러한 설정은 사용자에게 혼란을 줄 수 있습니다.
      				</p>
      				
      <CodeBlock title="separator 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="separator" tabindex="0"></div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시 - 포커스 불가능한 상태 유지 사용</h4>
      				<p className="mt_s">
      					이 예시는 마크업에서 <code>role=&quot;separator&quot;</code>와 <code>aria-orientation=&quot;vertical&quot;</code>을 사용하여,
      					포커스 불가능한 수직 구분선을 정의하고 있습니다. 포커스가 불가능하므로,
      					이 요소는 시각적 구분만 제공하며 사용자 인터페이스에서 중요한 역할을 하지 않습니다.
      				</p>
      				
      <CodeBlock title="separator 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="separator" aria-orientation="vertical"></div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 마크업에서의 기본 사용</h4>
      				<p className="mt_s">
      					이 예시는 HTML의 <code>&lt;hr&gt;</code> 요소를 사용하여 콘텐츠를 구분하는 구분선을 나타냅니다.
      					<code>&lt;hr&gt;</code> 요소는 기본적으로 포커스 불가능하며, <code>separator</code> 역할을 자동으로 수행합니다.
      				</p>
      				
      <CodeBlock title="separator 역할 / 시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<hr>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">명시적으로 separator 역할 지정 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;separator&quot;</code>를 지정하여,
      					포커스 불가능한 수평 구분선을 비표준 마크업으로 정의한 예시입니다.
      					<code>aria-orientation=&quot;horizontal&quot;</code> 속성은 구분선의 방향을 명확히 지정합니다.
      				</p>
      				
      <CodeBlock title="separator 역할 / 명시적 역할 지정" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="separator" aria-orientation="horizontal"></div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">term 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>term</code> 역할은 정의 목록에서 정의될 용어 또는 단어를 나타내는 데 사용됩니다.
      				이 역할은 용어가 정의된 내용과 함께 그룹화되어 보조 기술이 이를 올바르게 해석하고 사용자에게 전달할 수 있도록 돕습니다.
      				HTML에서 <code>&lt;dt&gt;</code> 요소가 기본적으로 <code>term</code> 역할을 수행합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#term" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA term</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/term_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA term</a><br />
      				<a href="/publishing/html/04-grouping/06-dl_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : dl element</a><br />
      				<a href="/publishing/html/04-grouping/07-dt_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : dt element</a><br />
      				<a href="/publishing/html/04-grouping/08-dd_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : dd element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>term</code> 역할은 정의 목록(<code>&lt;dl&gt;</code>) 내에서 특정 용어를 나타내며,
      					뒤따르는 정의(<code>definition</code> 역할)가 해당 용어를 설명하는 데 사용됩니다.
      					이 역할은 보조 기술이 용어를 정의된 내용과 연관지어 올바르게 사용자에게 전달할 수 있도록 돕습니다.
      				</li>
      				<li>
      					HTML의 <code>&lt;dt&gt;</code> 요소는 자동으로 <code>term</code> 역할을 수행합니다.
      					<code>&lt;dt&gt;</code> 요소와 <code>&lt;dd&gt;</code> 요소가 함께 사용되어, 용어와 그 정의를 시멘틱하게 구조화합니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;dt&gt;</code>, <code>&lt;dl&gt;</code>, <code>&lt;dd&gt;</code>)를 사용하여
      						용어와 그 정의를 정의하는 것이 가장 바람직하며,
      						비표준 마크업에서는 <code>role=&quot;term&quot;</code>을 명시적으로 지정해야 합니다.
      						<code>term</code> 역할은 항상 정의(<code>definition</code> 역할)와 함께 사용되어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>term</code> 역할을 통해 정의 목록을 명확하게 구조화함으로써, 사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      						이를 통해 사용자는 용어의 의미를 쉽게 이해하고, 정의된 내용을 효과적으로 탐색할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>시멘틱 마크업을 우선 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 요소(<code>&lt;dt&gt;</code>, <code>&lt;dl&gt;</code>, <code>&lt;dd&gt;</code>)를
      						사용하여 용어와 그 정의를 정의하는 것이 좋습니다.
      						이는 자동으로 <code>term</code> 역할을 수행하며, 문서의 구조를 명확히 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>정의와 함께 사용</strong>
      					<p>
      						<code>term</code> 역할은 반드시 정의(<code>definition</code> 역할)와 함께 사용되어야 합니다.
      						정의 목록에서 용어는 해당 정의와 논리적으로 연결되어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>비표준 마크업에서의 사용</strong>
      					<p>
      						시멘틱한 요소를 사용할 수 없는 경우, <code>role=&quot;term&quot;</code>을 사용하여 용어를 명시적으로 정의할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				기본적으로 상속된 상태나 속성은 없습니다.
      				<mark><code>term</code> 역할은 정의될 용어를 나타내는 역할을 하므로, 추가적인 ARIA 상태나 속성이 필요하지 않습니다.</mark>
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 정의 없이 term 역할 사용</h4>
      				<p className="mt_s">
      					이 예시는 용어를 정의하는 내용 없이 <code>term</code> 역할만 사용하고 있습니다.
      					<code>term</code> 역할은 항상 정의(<code>definition</code> 역할)와 함께 사용되어야 합니다.
      				</p>
      				
      <CodeBlock title="term 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="term">Web API</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시 - 용어와 정의를 함께 사용</h4>
      				<p className="mt_s">
      					이 예시는 <code>role=&quot;term&quot;</code>과 <code>role=&quot;definition&quot;</code>을 함께 사용하여 용어와 그 정의를 명확히 연결하고 있습니다.
      					보조 기술이 이 정보를 사용자에게 올바르게 전달할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="term 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="term">Web API</div>
      						<div role="definition">An interface that allows software applications to interact with each other over the web.</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 마크업에서의 기본 사용</h4>
      				<p className="mt_s">
      					이 예시는 HTML의 <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code>, <code>&lt;dd&gt;</code> 요소를 사용하여
      					정의 목록을 시멘틱하게 구조화하고 있습니다. <code>&lt;dt&gt;</code> 요소는 자동으로 term 역할을 수행합니다.
      				</p>
      				
      <CodeBlock title="term 역할 / 시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<dl>
      							<dt>HTML</dt>
      							<dd>HyperText Markup Language, the standard language for documents designed to be displayed in a web browser.</dd>
      							<dt>CSS</dt>
      							<dd>Cascading Style Sheets, a language used to describe the presentation of a document written in HTML or XML.</dd>
      						</dl>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">명시적으로 term 역할 지정 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;term&quot;</code>과 <code>role=&quot;definition&quot;</code>을 지정하여
      					비표준 마크업에서 정의 목록을 구성한 예시입니다.
      					보조 기술이 용어와 정의를 올바르게 연결할 수 있도록 돕습니다.
      				</p>
      				
      <CodeBlock title="term 역할 / 명시적 역할 지정" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="term">CSS</div>
      						<div role="definition">
      							CSS(또는 Cascading Style Sheets)는 웹 페이지의 디자인과 스타일을 정의하는 언어입니다.
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.WAI_ARIA}/02_wai-aria_role_03.png`} alt="문서 구조 역할(Document Structure Roles)" />
      		<figcaption>
      			<b>[문서 구조 역할(Document Structure Roles)]</b><br />
      			<a href={`${IMG.WAI_ARIA}/02_wai-aria_role_03.png`} className="mt_ms box_link" title="새창 열림" target="_blank" rel="noreferrer">크게 보기</a>
      		</figcaption>
      	</figure>


      <footer className="reference_box">
      	<strong className="tit">문서 구조 역할(Document Structure Roles) part1 | WAI-ARIA 역할 참조</strong>
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

export default StructureDocumentPart2Page
