import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
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

function StructureDocumentPart3Page() {
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
      		<h2 className="ml_mn" data-conlist="false">toolbar 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>toolbar</code> 역할은 웹 애플리케이션에서 여러 상호작용 가능한 도구(버튼, 메뉴 등)가 모여 있는 도구 모음(툴바)을 나타내는 데 사용됩니다.
      				이 역할은 보조 기술이 도구 모음을 인식하고, 사용자에게 이 도구들이 한 그룹으로 묶여 있다는 정보를 제공할 수 있도록 돕습니다.
      				툴바는 일반적으로 관련된 작업을 수행하는 여러 컨트롤을 포함하고 있으며,
      				이는 사용자가 한 번에 접근할 수 있는 인터페이스 요소로 그룹화됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#toolbar" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA toolbar</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/toolbar_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA toolbar</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>toolbar</code> 역할은 여러 컨트롤(예: 버튼, 체크박스, 드롭다운 메뉴 등)이 함께 배치된 도구 모음을 나타냅니다.
      					이 역할을 사용하면 보조 기술이 이러한 컨트롤들을 한 그룹으로 처리하고,
      					사용자에게 이들이 같은 작업 범주에 속해 있음을 알릴 수 있습니다.
      				</li>
      				<li>
      					HTML에서 <code>toolbar</code> 역할을 특정 요소에 할당함으로써, 해당 요소와 그 자식 요소들을 보조 기술이 툴바로 인식하게 됩니다.
      					툴바 내의 개별 컨트롤은 자체적인 역할(예: <code>button</code>, <code>menuitem</code>, <code>checkbox</code> 등)을 가질 수 있습니다.
      				</li>
      				<li>
      					<code>toolbar</code> 역할은 툴바 안에 있는 도구들이 상호 관련이 있음을 나타내며,
      					사용자가 관련 작업을 수행하기 위해 쉽게 접근할 수 있는 인터페이스를 제공합니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						툴바는 관련된 작업을 수행하기 위해 필요한 도구들을 그룹화하는 데 사용되며,
      						시멘틱한 HTML 요소를 사용하여 각 컨트롤을 정의해야 합니다.
      						툴바의 방향(<code>aria-orientation</code>)을 명확히 지정하는 것이 좋습니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>toolbar</code> 역할을 통해 사용자 인터페이스를 구조화하고, 사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      						이를 통해 사용자는 관련된 작업 도구를 한 번에 쉽게 접근하고 사용할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>적절한 그룹화</strong>
      					<p>
      						<code>toolbar</code> 역할은 관련된 도구나 컨트롤을 그룹화하는 데 사용됩니다.
      						사용자가 관련된 작업을 수행하기 위해 한 번에 접근할 수 있는 인터페이스 요소로 구성해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>시멘틱 마크업을 우선 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 요소를 사용하여 툴바 내의 개별 컨트롤을 정의해야 합니다.
      						툴바의 역할은 전체 그룹에만 적용되며, 각 컨트롤에는 그에 맞는 역할(예: <code>button</code>, <code>menuitem</code>)을 적용해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>툴바의 방향 지정</strong>
      					<p>
      						툴바의 컨트롤이 수직 또는 수평으로 배치되어 있는지 명확히 하기 위해, <code>aria-orientation</code> 속성을 사용해야 합니다.
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
      						툴바의 방향을 지정합니다. <code>horizontal</code>(수평) 또는 <code>vertical</code>(수직) 값으로 설정할 수 있으며,
      						기본값은 <code>horizontal</code>입니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						툴바의 제목을 지정하여, 보조 기술이 이 제목을 툴바와 연관지어 사용자에게 전달할 수 있게 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-controls</strong>
      					<p>
      						툴바에서 제어하는 요소의 <code>ID</code>를 참조하여, 보조 기술이 툴바가 제어하는 콘텐츠와의 관계를 명확히 할 수 있도록 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 툴바 내에 적절한 역할 미지정</h4>
      				<p className="mt_s">
      					이 예시는 툴바 내의 컨트롤에 적절한 역할(<code>button</code> 등)을 지정하지 않았으며,
      					이는 보조 기술이 툴바의 개별 도구를 올바르게 인식하지 못하게 합니다.
      					각 컨트롤에는 그에 맞는 역할을 지정해야 합니다.
      				</p>
      				
      <CodeBlock title="toolbar 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="toolbar">
      							<div>Bold</div>
      							<div>Italic</div>
      							<div>Underline</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 올바른 예시 - 툴바 내에 적절한 역할 지정</h4>
      				<p className="mt_s">
      					이 예시는 툴바 내의 각 컨트롤에 button 역할을 지정하여,
      					보조 기술이 툴바의 개별 도구를 올바르게 인식하고 사용자에게 전달할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="toolbar 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="toolbar" aria-label="Formatting options">
      							<button>Bold</button>
      							<button>Italic</button>
      							<button>Underline</button>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">수평 툴바 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 수평 툴바를 나타내며, 텍스트 서식 옵션을 제공하는 버튼들이 그룹화되어 있습니다.
      					<code>aria-label</code> 속성은 툴바의 목적을 설명하며,
      					<code>aria-orientation=&quot;horizontal&quot;</code>은 툴바가 수평으로 배열되어 있음을 명시합니다.
      				</p>
      				
      <CodeBlock title="toolbar 역할 / 수평 툴바 사용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="toolbar" aria-label="Text formatting options" aria-orientation="horizontal">
      							<button>Bold</button>
      							<button>Italic</button>
      							<button>Underline</button>
      							<div role="separator"></div>
      							<button>Left Align</button>
      							<button>Center Align</button>
      							<button>Right Align</button>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">수직 툴바 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 수직 툴바를 나타내며, 문서 관련 작업을 수행하는 버튼들이 수직으로 배열되어 있습니다.
      					<code>aria-orientation=&quot;vertical&quot;</code>은 툴바가 수직으로 배열되어 있음을 명시합니다.
      				</p>
      				
      <CodeBlock title="toolbar 역할 / 수직 툴바 사용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="toolbar" aria-label="Document tools" aria-orientation="vertical">
      							<button>New</button>
      							<button>Open</button>
      							<button>Save</button>
      							<div role="separator"></div>
      							<button>Print</button>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">tooltip 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>tooltip</code> 역할은 요소와 연관된 추가 정보를 제공하는 작은 팝업 창을 나타냅니다.
      				툴팁은 일반적으로 마우스오버, 포커스, 또는 키보드 상호작용 시 나타나며,
      				해당 요소에 대한 설명이나 추가 정보를 간략하게 제공하는 데 사용됩니다.
      				툴팁은 시각적으로 나타나며, 보조 기술이 이를 사용자에게 올바르게 전달할 수 있도록 해야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#tooltip" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA tooltip</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA tooltip</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>tooltip</code> 역할은 사용자가 요소와 상호작용할 때 표시되는 작은 팝업 설명을 나타냅니다.
      					이는 주로 버튼, 링크, 아이콘 등과 같은 인터페이스 요소에 대한 추가 설명을 제공하는 데 사용됩니다.<br />
      					툴팁은 사용자가 요소의 기능을 더 잘 이해할 수 있도록 도와주며, 시각적으로 요소 위에 나타나는 짧은 텍스트 설명입니다.
      				</li>
      				<li>
      					HTML에서 툴팁을 구현할 때는 일반적으로 <code>title</code> 속성을 사용하거나,
      					<code>aria-describedby</code> 속성을 통해 툴팁과 연관된 요소를 지정합니다.
      					<code>tooltip</code> 역할을 명시적으로 지정할 수도 있습니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						툴팁은 관련된 요소와 직접적으로 연결되어야 하며, 명확하고 유용한 정보를 제공해야 합니다.
      						<code>aria-describedby</code> 속성을 사용해 툴팁을 참조하거나, 동적으로 툴팁을 표시할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>tooltip</code> 역할을 통해 사용자 인터페이스의 접근성과 사용자 경험을 향상시킬 수 있습니다.
      						툴팁은 사용자가 인터페이스 요소를 더 잘 이해하고, 이를 효과적으로 사용할 수 있도록 돕습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>적절한 컨텍스트 제공</strong>
      					<p>
      						툴팁은 관련된 요소에 대한 추가 정보를 제공하는 것이므로,
      						툴팁이 제공하는 정보는 해당 요소와 직접적으로 관련되어 있어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>키보드 접근성</strong>
      					<p>
      						툴팁이 포커스를 받을 수 없는 경우, 사용자가 키보드로 상호작용할 때 툴팁이 접근 가능해야 합니다.
      						일반적으로 <code>aria-describedby</code> 속성을 사용하여 툴팁을 참조합니다.
      					</p>
      				</li>
      				<li>
      					<strong>자동적으로 표시되지 않도록 주의</strong>
      					<p>
      						툴팁은 사용자가 요소와 상호작용할 때만 나타나야 하며, 자동으로 나타나거나 사라지지 않도록 해야 합니다.
      						사용자가 툴팁을 읽을 충분한 시간을 가져야 합니다.
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
      						툴팁에 대한 제목을 지정하여, 보조 기술이 이 제목을 툴팁과 연관지어 사용자에게 전달할 수 있게 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-describedby</strong>
      					<p>
      						툴팁이 설명하는 요소를 지정하여, 보조 기술이 이를 사용자에게 연결된 설명으로 전달할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 툴팁의 정보 부족</h4>
      				<p className="mt_s">
      					이 예시는 툴팁에 제공되는 정보가 불충분하여, 사용자에게 도움이 되지 않습니다.
      					툴팁은 해당 요소에 대한 명확한 설명이나 추가 정보를 제공해야 합니다.
      				</p>
      				
      <CodeBlock title="tooltip 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-describedby="tooltip3">Submit</button>
      						<div role="tooltip" id="tooltip3">
      							클릭하세요.
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 올바른 예시 - 명확한 정보 제공</h4>
      				<p className="mt_s">
      					이 예시는 툴팁에 명확한 정보를 제공하여, 사용자가 해당 버튼의 기능을 쉽게 이해할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="tooltip 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-describedby="tooltip4">Submit</button>
      						<div role="tooltip" id="tooltip4">
      							버튼을 클릭하면 내용이 저장됩니다.
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적 툴팁 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 버튼에 마우스를 올리면 툴팁이 나타나고, 마우스를 떼면 툴팁이 사라지도록 동적으로 처리한 예시입니다.
      					<code>aria-describedby</code> 속성을 사용해 툴팁을 연결합니다.
      				</p>
      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/02-waiAriaRole/2.3.27.tooltip.html" className="uk_editor min_height_300 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="200px" />
      </Suspense>
      </div>
      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">time 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>time</code> 역할은 웹 페이지에서 날짜나 시간을 나타내는 요소에 사용됩니다.
      				이 역할은 특정한 시간, 날짜, 기간을 명확하게 표현하고, 보조 기술이 이를 사용자에게 올바르게 전달할 수 있도록 돕습니다.
      				HTML의 <code>&lt;time&gt;</code> 요소는 기본적으로 time 역할을 수행합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#time" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA time</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs : time element</a><br />
      				<a href="/publishing/html/05-textLevel/18-time_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : time element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>time</code> 역할은 시간이나 날짜와 관련된 정보를 나타내는 데 사용되며,
      					HTML에서 <code>&lt;time&gt;</code> 요소가 이 역할을 수행합니다.
      				</li>
      				<li>
      					<code>&lt;time&gt;</code> 요소는 날짜와 시간 정보에 의미를 부여하고, 이 정보를 구조화하여 보조 기술이 정확하게 해석할 수 있도록 합니다.
      					예를 들어, 보조 기술은 이러한 요소를 사용해 사용자에게 시간을 읽어주거나 날짜를 설명할 수 있습니다.
      					또한, <code>datetime</code> 속성을 사용하여 기계가 읽을 수 있는 형태로 날짜와 시간을 명시할 수 있고,
      					날짜와 시간을 구체적으로 지정할 수 있습니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;time&gt;</code>)를 사용하여 날짜와 시간을 명확하게 표현하고,
      						<code>datetime</code> 속성을 통해 기계가 읽을 수 있는 형식으로 시간을 명시하는 것이 중요합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>time</code> 역할을 통해 웹 콘텐츠에서 날짜와 시간을 명확하게 전달할 수 있으며,
      						이는 사용자 경험과 접근성을 향상시킬 수 있습니다.
      						이를 통해 사용자는 중요한 시간을 정확히 이해하고, 필요한 정보를 효율적으로 탐색할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>정확한 날짜와 시간 제공</strong>
      					<p>
      						<code>&lt;time&gt;</code> 요소를 사용할 때는 정확한 날짜와 시간을 제공해야 하며,
      						<code>datetime</code> 속성을 사용해 기계가 읽을 수 있는 형식으로 명시하는 것이 좋습니다.
      					</p>
      				</li>
      				<li>
      					<strong>날짜 및 시간의 명확한 표시</strong>
      					<p>
      						날짜와 시간은 사람이 읽을 수 있는 형식과 기계가 읽을 수 있는 형식으로 모두 제공되어야 합니다.
      						이를 통해 보조 기술이 정확한 정보를 사용자에게 전달할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>시멘틱 마크업을 우선 사용</strong>
      					<p>
      						가능한 경우, <code>&lt;time&gt;</code> 요소를 사용하여 시간을 시멘틱하게 표현하는 것이 좋습니다.
      						이는 문서의 구조를 명확히 하고, 보조 기술이 시간을 올바르게 해석할 수 있도록 돕습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>datetime 속성</strong>
      					<p>
      						이 속성은 날짜와 시간을 ISO 8601 형식으로 명시하여, 보조 기술이 이를 정확하게 해석하고 사용자에게 전달할 수 있도록 돕습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - datetime 속성 누락</h4>
      				<p className="mt_s">
      					이 예시는 날짜를 나타내고 있지만, <code>datetime</code> 속성이 없어 보조 기술이 이를 정확히 해석하지 못할 수 있습니다.
      					날짜와 시간을 명확히 전달하기 위해 <code>datetime</code> 속성을 포함하는 것이 좋습니다.
      				</p>
      				
      <CodeBlock title="time 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>The conference will be held on <time>August 25</time>.</p>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 올바른 예시 - datetime 속성을 포함한 날짜 표시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;time&gt;</code> 요소를 사용하여 이벤트 시작 시간을 나타내고 있으며,
      					<code>datetime</code> 속성을 통해 <mark>ISO 8601 형식으로 시간을 명시</mark>하고 있습니다.
      					보조 기술은 이를 통해 정확한 시간을 사용자에게 전달할 수 있습니다.
      				</p>
      				
      <CodeBlock title="time 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>The conference will be held on <time datetime="2024-08-25">August 25</time>.</p>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">날짜를 나타내는 예시</h4>
      				<p className="mt_s">
      					이 예시는 프로젝트 마감일을 <code>&lt;time&gt;</code> 요소로 나타내고 있으며,
      					<code>datetime</code> 속성을 통해 보조 기술이 날짜를 정확히 해석할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="time 역할 / 날짜를 나타내는 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>Project deadline is <time datetime="2024-09-15">September 15, 2024</time>.</p>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">meter 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>meter</code> 역할은 웹 콘텐츠에서 특정 범위 내에서의 측정된 값이나 분포를 나타내는 데 사용됩니다.
      				이 역할은 보조 기술이 해당 값을 적절히 해석하고 사용자에게 전달할 수 있도록 돕습니다.
      				일반적으로 진행률, 점수, 용량 등의 상대적인 값을 표현하는 데 사용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#meter" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA meter</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs : meter element</a><br />
      				<a href="/publishing/html/09-forms/12-meter_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : meter element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>meter</code> 역할은 숫자 범위 내에서 측정된 값을 나타내며, 사용자가 그 값이 어디에 위치하는지 쉽게 이해할 수 있도록 합니다.
      					이 역할은 측정된 값이 특정 범위 내에 있음을 나타내기 때문에, 사용자가 값의 상태를 더 잘 이해할 수 있게 합니다.
      				</li>
      				<li>
      					HTML의 <code>&lt;meter&gt;</code> 요소가 기본적으로 <code>meter</code> 역할을 수행합니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;meter&gt;</code>)를 우선 사용하고,
      						명시적으로 <code>role=&quot;meter&quot;</code>를 지정하여 필요한 경우 값을 명확하게 표현합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>meter</code> 역할을 통해 웹 콘텐츠에서 값을 효과적으로 전달할 수 있으며,
      						이는 사용자 경험과 접근성을 향상시키는 데 기여합니다.
      						잘못된 사용을 피하고, 명확한 속성 설정을 통해 값의 의미를 정확히 전달하는 것이 중요합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>적절한 범위 설정</strong>
      					<p>
      						<code>meter</code> 역할을 사용할 때는
      						<code>aria-valuemin</code>, <code>aria-valuemax</code>, <code>aria-valuenow</code> 속성을 명확히 정의하여
      						사용자가 값을 쉽게 이해할 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>시멘틱 마크업을 우선 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 요소인 <code>&lt;meter&gt;</code>를 사용하는 것이 좋습니다.
      						이는 보조 기술이 값을 더 잘 해석할 수 있게 돕습니다.
      					</p>
      				</li>
      				<li>
      					<strong>값의 텍스트 표현 고려</strong>
      					<p>
      						특정 경우에 <code>aria-valuetext</code> 속성을 사용해 사용자에게 더 나은 텍스트 설명을 제공할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-valuenow</strong>
      					<p>
      						현재 값으로, <code>meter</code> 요소가 나타내는 정확한 값을 지정합니다.
      						이 속성은 보조 기술이 사용자에게 현재 값을 전달하는 데 사용됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuemin</strong>
      					<p>
      						허용되는 최솟값을 지정합니다. 이 속성을 통해 현재 값이 전체 범위 내에서 어디에 위치하는지 알 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuemax</strong>
      					<p>
      						허용되는 최댓값을 지정합니다. 이 속성은 값이 얼마나 높은지를 정의하는 데 사용됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-valuetext</strong>
      					<p>
      						<code>aria-valuenow</code>의 값 대신 사용자에게 표시될 텍스트를 제공합니다. 예를 들어, 숫자 대신 설명이 필요할 때 유용합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 불명확한 값과 범위 설정</h4>
      				<p className="mt_s">
      					이 예시는 <code>meter</code> 역할을 사용했으나,
      					<code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code>와 같은 중요한 속성들을 누락하여
      					보조 기술이 값을 올바르게 해석할 수 없습니다.
      					이러한 속성들은 값이 무엇을 의미하는지 명확히 설명할 수 있도록 추가되어야 합니다.
      				</p>
      				
      <CodeBlock title="meter 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="meter">70%</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시 - 명시적으로 meter 역할 지정하여 명확한 범위와 값 설정</h4>
      				<p className="mt_s">
      					이 예시는 <code>role=&quot;meter&quot;</code>를 사용하여 <code>div</code> 요소를 통해 값을 표시합니다.
      					<code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code> 속성을 통해 값의 범위를 명확히 지정합니다.
      					이로 인해 보조 기술이 값을 정확히 인식하고 사용자에게 전달할 수 있습니다.
      				</p>
      				
      <CodeBlock title="meter 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="meter" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
      							70%
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 마크업으로 제공되는 meter 역할 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>value</code>, <code>min</code>, <code>max</code> 속성을 사용하여 현재 값이 전체 범위 내에서 어디에 위치하는지를 표시합니다.
      					<code>&lt;meter&gt;</code> 요소는 기본적으로 meter 역할을 수행합니다.
      				</p>
      				
      <CodeBlock title="meter 역할 / 시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<meter value="70" min="0" max="100">70%</meter>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">blockquote 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>blockquote</code> 요소는 웹 페이지에서 인용된 텍스트를 나타내는 데 사용되는 시멘틱 HTML 요소입니다.
      				이 요소는 다른 출처에서 인용된 긴 텍스트 블록을 구분하여, 보조 기술이 이를 사용자에게 명확하게 전달할 수 있도록 돕습니다.
      				일반적으로 인용문은 들여쓰기를 통해 시각적으로 구분되며, 출처를 명시할 수도 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#blockquote" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA blockquote</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs : blockquote element</a><br />
      				<a href="/publishing/html/04-grouping/13-blockquote_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : blockquote element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>blockquote</code> 요소는 긴 인용문을 나타내며, 주로 다른 출처에서 가져온 내용을 강조하거나 인용할 때 사용됩니다.
      				</li>
      				<li>
      					HTML의 <code>&lt;blockquote&gt;</code> 요소는 인용된 콘텐츠가 원래 출처에서 온 것임을 나타내며,
      					인용문의 출처를 명시하기 위해 <code>cite</code> 속성을 사용할 수 있습니다.
      					<code>&lt;blockquote&gt;</code> 요소는 시멘틱 마크업을 통해 보조 기술이 인용문을 올바르게 인식하고 사용자에게 전달할 수 있도록 합니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;blockquote&gt;</code>)를 사용하여 인용문을 명확하게 표현하고,
      						<code>cite</code> 속성을 사용해 인용문의 출처를 명시하는 것이 좋습니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>blockquote</code> 요소를 통해 웹 콘텐츠에서 인용문을 명확하게 구분할 수 있으며,
      						이는 사용자 경험과 접근성을 향상시키는 데 도움이 됩니다. 이를 통해 사용자는 인용문의 의미와 출처를 정확히 이해할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>긴 인용문에 사용</strong>
      					<p>
      						<code>&lt;blockquote&gt;</code> 요소는 긴 인용문을 나타내는 데 사용되며, 짧은 인용문에는 <code>&lt;q&gt;</code> 요소를 사용하는 것이 더 적합합니다.
      					</p>
      				</li>
      				<li>
      					<strong>출처 명시</strong>
      					<p>
      						인용문의 출처를 명확히 하기 위해 <code>cite</code> 속성을 사용하는 것이 바람직합니다.
      						이 속성은 인용문의 출처를 URL로 지정하여, 보조 기술이 이를 사용자에게 전달할 수 있도록 돕습니다.
      					</p>
      				</li>
      				<li>
      					<strong>시멘틱 마크업 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 요소(<code>&lt;blockquote&gt;</code>)를 사용하여 인용문을 명확하게 표현하는 것이 좋습니다.
      						이는 문서의 구조를 명확히 하고, 보조 기술이 콘텐츠를 올바르게 해석할 수 있도록 돕습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>cite 속성</strong>
      					<p>
      						인용문의 출처를 URL로 지정합니다. 이 속성을 사용하여 보조 기술이 출처를 사용자에게 전달할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - blockquote 요소 없이 인용문 표시</h4>
      				<p className="mt_s">
      					이 예시는 blockquote 요소 없이 인용문을 단락(&lt;p&gt;) 내에 포함시켰습니다.
      					이 경우 인용문이 시각적으로 또는 시멘틱적으로 구분되지 않으며, 보조 기술이 이를 인용문으로 인식하지 못할 수 있습니다.
      				</p>
      				
      <CodeBlock title="blockquote 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>
      							"I Am Your Father." - Darth Vader
      						</p>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 올바른 예시 - blockquote 요소 사용</h4>
      				<p className="mt_s">
      					이 예시는 <code>blockquote</code> 요소를 사용하여 인용문을 명확히 구분하고 있으며,
      					<code>cite</code> 속성을 통해 인용문의 출처를 제공하여 보조 기술이 이를 올바르게 전달할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="blockquote 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<blockquote cite="https://www.w3.org/WAI/fundamentals/accessibility-intro/ko#context">
      							웹의 힘은 보편성에 있습니다. 장애에 상관없이 모두가 접근할 수 있다는 것이 가장 중요한 부분입니다.
      						</blockquote>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">출처를 명시하지 않은 인용문 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>blockquote</code> 요소를 사용하여 인용문을 나타내고 있으며,
      					<code>cite</code> 속성을 사용하지 않아 출처를 명시하지 않은 인용문입니다.
      					출처를 명시하지 않은 경우, 인용문이 어디에서 왔는지 보조 기술이 사용자에게 알리지 못할 수 있습니다.
      				</p>
      				
      <CodeBlock title="blockquote 역할 / 출처 없는 인용문" language="javascript" className="uk_gist_code_box mt_m">
      {`<blockquote>
      							웹의 힘은 보편성에 있습니다. 장애에 상관없이 모두가 접근할 수 있다는 것이 가장 중요한 부분입니다.
      						</blockquote>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">caption 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>caption</code> 역할은 웹 콘텐츠에서 표, 그림, 동영상 등의 요소에 대한 제목이나 설명을 제공하는 역할을 합니다.
      				이 역할을 통해 보조 기술이 표나 다른 미디어 콘텐츠에 대한 제목 또는 설명을 인식하고 사용자에게 전달할 수 있도록 돕습니다.
      				HTML의 <code>&lt;caption&gt;</code> 요소는 기본적으로 표의 제목을 제공하는 데 사용되며, 시멘틱하게 콘텐츠의 목적을 명확히 합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#caption" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA caption</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs : caption element</a><br />
      				<a href="/publishing/html/08-table/02-caption_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : caption element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>caption</code> 역할은 주로 표와 같은 구조화된 데이터 또는 다른 미디어 콘텐츠의 제목이나 설명을 제공하는 데 사용됩니다.
      				</li>
      				<li>
      					HTML의 <code>&lt;caption&gt;</code> 요소는 <code>&lt;table&gt;</code> 요소와 함께 사용되어, 표의 내용을 요약하거나 설명하는 역할을 합니다.<br />
      					이는 보조 기술이 표의 목적을 이해하고 사용자에게 전달하는 데 도움이 됩니다.
      					<code>caption</code>은 <code>table</code>, <code>grid</code>, <code>treegrid</code>의 첫 번째 자식 요소로 위치하며,
      					<code>figure</code>의 첫 번째 또는 마지막 자식 요소로 위치합니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;caption&gt;</code>)를 사용하여 콘텐츠의 제목이나 설명을 명확하게 제공하고,
      						사용자가 콘텐츠의 목적을 쉽게 이해할 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>caption</code> 역할을 통해 웹 콘텐츠의 목적을 명확하게 전달할 수 있으며,
      						이는 사용자 경험과 접근성을 향상시키는 데 기여합니다.
      						이를 통해 사용자는 콘텐츠의 의미를 더 쉽게 이해하고, 관련 정보를 효과적으로 탐색할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>적절한 위치에 사용</strong>
      					<p>
      						<code>caption</code> 역할은 표의 제목이나 설명을 제공하는 것이므로,
      						<code>&lt;caption&gt;</code> 요소는 반드시 <code>&lt;table&gt;</code> 요소의 첫 번째 자식 요소로 사용되어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>시멘틱 마크업 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 요소인 <code>&lt;caption&gt;</code>을 사용하여 표의 제목이나 설명을 제공하는 것이 좋습니다.
      						이는 문서의 구조를 명확히 하고, 보조 기술이 표의 내용을 올바르게 해석할 수 있도록 돕습니다.
      					</p>
      				</li>
      				<li>
      					<strong>다양한 미디어에 적용</strong>
      					<p>
      						표뿐만 아니라 다른 미디어 요소(예: 동영상, 이미지 갤러리)에도 <code>caption</code> 역할을 적용하여 콘텐츠에 대한 설명을 제공할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      				<li>
      					<b className="t_black">aria-labelledby</b>를 설정하여 간결한 이름을 포함하는 요소를 참조하고,
      				</li>
      				<li>
      					<b className="t_black">aria-describedby</b>를 설정하여 설명 콘텐츠가 포함된 요소를 참조할 수 있습니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - caption 역할 없이 표 표시</h4>
      				<p className="mt_s">
      					이 예시는 표에 제목이나 설명을 제공하지 않아서, 표의 목적을 이해하기 어려울 수 있습니다.
      					<code>caption</code> 요소를 사용하여 표의 내용을 설명하는 것이 중요합니다.
      				</p>
      				
      <CodeBlock title="caption 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      							<tr>
      								<th>Product</th>
      								<th>Sales</th>
      								<th>Revenue</th>
      							</tr>
      							<tr>
      								<td>Apples</td>
      								<td>1000</td>
      								<td>$500</td>
      							</tr>
      							<tr>
      								<td>Oranges</td>
      								<td>1500</td>
      								<td>$750</td>
      							</tr>
      						</table>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 올바른 예시 - caption 요소를 사용하여 설명 제공</h4>
      				<p className="mt_s">
      					이 예시는 <code>caption</code> 요소를 사용하여 표의 내용을 설명하는 “Quarterly Revenue by Product”라는 제목을 제공하고 있습니다.
      					이는 보조 기술이 표의 목적을 사용자에게 올바르게 전달하는 데 도움이 됩니다.
      				</p>
      				
      <CodeBlock title="caption 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      							<caption>Quarterly Revenue by Product</caption>
      							<tr>
      								<th scope="col">Product</th>
      								<th scope="col">Q1</th>
      								<th scope="col">Q2</th>
      							</tr>
      							<tr>
      								<td>Apples</td>
      								<td>$1000</td>
      								<td>$1200</td>
      							</tr>
      							<tr>
      								<td>Oranges</td>
      								<td>$1500</td>
      								<td>$1600</td>
      							</tr>
      						</table>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동영상에 설명 제공 예시</h4>
      				<p className="mt_s">
      					이 예시는 동영상 콘텐츠에 대한 설명을 제공하기 위해 <code>&lt;figcaption&gt;</code> 요소를 사용했습니다.
      					이와 같이 다양한 미디어 콘텐츠에 caption 역할을 적용하여 사용자에게 추가 정보를 제공할 수 있습니다.
      				</p>
      				
      <CodeBlock title="caption 역할 / 동영상에 설명 제공" language="javascript" className="uk_gist_code_box mt_m">
      {`<figure>
      							<video src="video.mp4" controls></video>
      							<figcaption>This video explains the process of data analysis.</figcaption>
      						</figure>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">명시적으로 사용한 예시</h4>

      				
      <CodeBlock title="caption 역할 / 명시적으로 사용" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="table" aria-labelledby="name" aria-describedby="desc">
      							<div role="caption">
      								<div id="name">Contest Entrants</div>
      								<div id="desc">
      									This table shows the total number of entrants (500) the
      									contest accepted over the past four weeks.
      								</div>
      							</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">deletion 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>deletion</code> 역할은 웹 콘텐츠에서 삭제된 텍스트를 나타내는 데 사용됩니다.
      				이 역할을 통해 보조 기술이 해당 텍스트가 문서에서 삭제되었음을 인식하고 사용자에게 이를 전달할 수 있습니다.
      				이 역할은 보통 HTML에서 <code>&lt;del&gt;</code> 요소로 구현되며, 삭제된 텍스트는 취소선으로 표시됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#caption" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA deletion</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs : del element</a><br />
      				<a href="/publishing/html/07-edits/01-del_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : del element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>deletion</code> 역할은 문서에서 삭제된 텍스트를 나타내며, 이 텍스트는 더 이상 사용되지 않거나 변경된 내용임을 의미합니다.
      					보조 기술은 <code>deletion</code> 역할이 해당 텍스트가 삭제되었음을 사용자에게 알릴 수 있습니다.
      				</li>
      				<li>
      					HTML의 <code>&lt;del&gt;</code> 요소는 이 역할을 기본적으로 수행하며, 문서에서 삭제된 텍스트를 시각적으로 취소선으로 표시합니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;del&gt;</code>)를 사용하여 삭제된 텍스트를 명확하게 표시하고,
      						필요에 따라 <code>cite</code> 및 <code>datetime</code> 속성을 사용하여 삭제된 텍스트의 출처와 날짜를 제공하는 것이 좋습니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>deletion</code> 역할을 통해 웹 콘텐츠에서 삭제된 텍스트를 명확하게 전달할 수 있으며,
      						이는 사용자 경험과 접근성을 향상시키는 데 도움이 됩니다.
      						이를 통해 사용자는 텍스트의 변화를 정확히 이해하고, 관련 정보를 효율적으로 탐색할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>삭제된 텍스트의 명확한 표시</strong>
      					<p>
      						<code>deletion</code> 역할은 문서에서 삭제된 텍스트를 명확히 표시하는 데 사용됩니다.
      						텍스트가 시멘틱하게 삭제되었음을 나타내기 위해 이 역할을 사용하는 것이 좋습니다.
      					</p>
      				</li>
      				<li>
      					<strong>cite 및 datetime 속성 사용 고려</strong>
      					<p>
      						삭제된 텍스트의 출처나 삭제된 날짜를 명확히 하기 위해 <code>cite</code> 및 <code>datetime</code> 속성을 사용하는 것이 바람직합니다.
      					</p>
      				</li>
      				<li>
      					<strong>시멘틱 마크업 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 요소(<code>&lt;del&gt;</code>)를 사용하여 삭제된 텍스트를 명확하게 표시하는 것이 좋습니다.
      						이는 문서의 구조를 명확히 하고, 보조 기술이 텍스트의 변화를 올바르게 해석할 수 있도록 돕습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>cite 속성</strong>
      					<p>
      						삭제된 텍스트의 출처를 URL로 지정합니다. 이를 통해 보조 기술이 삭제된 이유나 출처를 사용자에게 전달할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>datetime 속성</strong>
      					<p>
      						텍스트가 삭제된 날짜와 시간을 ISO 8601 형식으로 지정합니다. 이를 통해 보조 기술이 삭제된 시점을 사용자에게 전달할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 단순 취소선</h4>
      				<p className="mt_s">
      					이 예시는 <code>span</code> 요소에 취소선 스타일을 적용하여 텍스트를 시각적으로 삭제된 것처럼 보이게 하지만,
      					시멘틱 마크업을 사용하지 않았기 때문에 보조 기술이 이를 삭제된 텍스트로 인식하지 못합니다.
      				</p>
      				
      <CodeBlock title="deletion 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>이 <span style="text-decoration: line-through;">삭제된 텍스트</span>는 보조 기술이 인식하지 못합니다.</p>`}
      </CodeBlock>

      				<div className="ex_code_view error mt_m">
      					<p className="font-16 t_black weight-500">이 <span style={{ textDecoration: "line-through" }}>삭제된 텍스트</span>는 보조 기술이 인식하지 못합니다.</p>
      				</div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 올바른 예시 - 시멘틱 마크업 사용</h4>
      				<p className="mt_s">
      					이 예시는 HTML의 <code>&lt;del&gt;</code> 요소를 사용하여 &quot;outdated&quot;라는 단어가 삭제되었음을 표시하고 있습니다.
      					이 요소는 텍스트가 문서에서 삭제되었음을 명확히 표시하고 있으며, 보조 기술이 이를 올바르게 인식할 수 있습니다.
      				</p>
      				
      <CodeBlock title="deletion 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>이 <span style="text-decoration: line-through;">삭제된 텍스트</span>는 보조 기술이 올바르게 인식합니다.</p>`}
      </CodeBlock>

      				<div className="ex_code_view mt_m">
      					<p className="font-16 t_black weight-500">이 <span style={{ textDecoration: "line-through" }}>삭제된 텍스트</span>는 보조 기술이 올바르게 인식합니다.</p>
      				</div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) cite 및 datetime 속성을 사용한 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>cite</code> 속성을 사용하여 삭제된 텍스트의 출처를 명시하고,
      					<code>datetime</code> 속성을 통해 텍스트가 삭제된 날짜를 지정하고 있습니다.
      					이는 보조 기술이 삭제된 텍스트에 대한 추가 정보를 사용자에게 전달할 수 있도록 돕습니다.
      				</p>
      				
      <CodeBlock title="deletion 역할 / 권장 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>The policy was updated from <del cite="https://www.example.com/old-policy" datetime="2024-08-10">previous terms</del> to reflect new guidelines.</p>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">emphasis 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>emphasis</code> 역할은 웹 콘텐츠에서 텍스트를 강조하는 데 사용됩니다.
      				이 역할은 텍스트의 중요성을 강조하거나 특정 부분에 의미를 부여할 때 사용되며,
      				보조 기술이 이 강조를 인식하고 사용자에게 전달할 수 있도록 돕습니다.
      				HTML에서 <code>&lt;em&gt;</code> 요소는 이 역할을 기본적으로 수행하며, 일반적으로 이탤릭체로 표시됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#emphasis" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA emphasis</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs : em element</a><br />
      				<a href="/publishing/html/05-textLevel/02-em_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : em element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>emphasis</code> 역할은 강조해야 할 텍스트를 나타내며, 이 텍스트는 문맥상 중요한 의미를 가집니다.
      					강조된 텍스트는 브라우저에서 일반적으로 이탤릭체로 표시되지만, 시멘틱하게 강조된 텍스트로 해석됩니다.
      				</li>
      				<li>
      					HTML의 <code>&lt;em&gt;</code> 요소는 시멘틱 마크업으로, 문서 내에서 특정 텍스트에 강조를 부여하는 역할을 합니다.
      					이는 보조 기술이 강조된 부분을 인식하고 사용자에게 전달할 수 있게 합니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;em&gt;</code>)를 우선 사용하여 강조의 의미를 부여하고, 텍스트를 명확하게 표현하는 것이 중요합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>emphasis</code> 역할을 통해 웹 콘텐츠에서 텍스트를 시멘틱하게 강조함으로써, 사용자 경험과 접근성을 향상시킬 수 있습니다.
      						강조의 의미를 정확히 전달하여, 사용자가 중요한 정보를 더 쉽게 인식하고 이해할 수 있도록 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>의미 있는 강조에 사용</strong>
      					<p>
      						<code>emphasis</code> 역할은 단순히 텍스트의 스타일을 변경하기 위해 사용해서는 안 됩니다.
      						강조의 의미를 실제로 부여해야 하는 경우에만 사용해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중첩 사용 고려</strong>
      					<p>
      						다른 강조 요소(<code>&lt;strong&gt;</code>, <code>&lt;b&gt;</code> 등)와 함께 사용될 수 있습니다.
      						그러나 지나친 중첩은 피해야 하며, 중첩 사용 시에는 각 요소의 시멘틱 의미를 고려해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>시멘틱 마크업 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 요소인 <code>&lt;em&gt;</code>을 사용하여 텍스트를 강조하는 것이 좋습니다.
      						이는 문서의 구조를 명확히 하고, 보조 기술이 콘텐츠를 올바르게 해석할 수 있도록 돕습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				기본적으로 상속된 상태나 속성은 없습니다.
      				<mark><code>emphasis</code> 역할은 텍스트에 시멘틱 강조를 부여하는 데 사용되며, 추가적인 ARIA 상태나 속성이 필요하지 않습니다.</mark>
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 스타일링을 위한 잘못된 사용</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;span&gt;</code> 요소에 이탤릭 스타일을 적용하여 텍스트를 강조하고 있지만,
      					시멘틱 마크업을 사용하지 않았기 때문에 보조 기술이 이를 강조된 텍스트로 인식하지 못합니다.
      					<code>em</code> 요소를 사용하는 것이 더 적절합니다.
      				</p>
      				
      <CodeBlock title="emphasis 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>This is <span style="font-style: italic;">important</span> information.</p>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 올바른 예시 - 기본적으로 제공되는 emphasis 역할 사용</h4>
      				<p className="mt_s">
      					이 예시는 HTML의 <code>&lt;em&gt;</code> 요소를 사용하여 <mark>&quot;always&quot;</mark>라는 단어를 강조하고 있습니다.
      					이 텍스트는 브라우저에서 이탤릭체로 표시되며, 보조 기술이 이를 강조된 텍스트로 인식하여 사용자에게 전달할 수 있습니다.
      				</p>
      				
      <CodeBlock title="emphasis 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>You should <em>always</em> check your work before submitting it.</p>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">insertion 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>insertion</code> 역할은 웹 콘텐츠에서 새로 추가된 텍스트를 나타내는 역할을 합니다.
      				이 역할은 보조 기술이 문서에 추가된 내용을 인식하고 사용자에게 전달할 수 있도록 돕습니다.
      				HTML에서 이 역할은 <code>&lt;ins&gt;</code> 요소를 통해 구현되며, 일반적으로 밑줄로 표시됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#insertion" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA insertion</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs : ins element</a><br />
      				<a href="/publishing/html/07-edits/02-ins_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : ins element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>insertion</code> 역할은 문서에서 새로 추가된 텍스트를 나타냅니다.
      					이 역할을 통해 보조 기술은 해당 텍스트가 문서에 추가되었음을 사용자에게 알릴 수 있습니다.
      					이 역할은 문서의 수정 기록이나 텍스트 변경 사항을 명확히 하여 사용자에게 중요한 정보를 전달하는 데 사용됩니다.
      				</li>
      				<li>
      					HTML의 <code>&lt;ins&gt;</code> 요소는 기본적으로 이 역할을 수행하며, 문서에서 추가된 텍스트를 시각적으로 표시합니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;ins&gt;</code>)를 사용하여 추가된 텍스트를 명확하게 표시하고,
      						필요에 따라 <code>cite</code> 및 <code>datetime</code> 속성을 사용하여 추가된 텍스트의 출처와 날짜를 제공하는 것이 좋습니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>insertion</code> 역할을 통해 웹 콘텐츠에서 새로 추가된 텍스트를 명확하게 전달할 수 있으며,
      						이는 사용자 경험과 접근성을 향상시키는 데 도움이 됩니다.
      						이를 통해 사용자는 텍스트의 변화를 정확히 이해하고, 관련 정보를 효율적으로 탐색할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>새로 추가된 텍스트의 명확한 표시</strong>
      					<p>
      						<code>insertion</code> 역할은 문서에서 새로 추가된 텍스트를 명확히 표시하는 데 사용됩니다. 시멘틱 마크업을 통해 이 역할을 명확히 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>cite 및 datetime 속성 사용 고려</strong>
      					<p>
      						새로 추가된 텍스트의 출처와 날짜를 명확히 하기 위해 <code>cite</code> 및 <code>datetime</code> 속성을 사용하는 것이 바람직합니다.
      					</p>
      				</li>
      				<li>
      					<strong>시멘틱 마크업 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 요소인 <code>&lt;ins&gt;</code>를 사용하여 텍스트를 추가된 내용으로 명확하게 표시하는 것이 좋습니다.
      						이는 보조 기술이 콘텐츠의 변경 사항을 올바르게 해석할 수 있도록 돕습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>cite 속성</strong>
      					<p>
      						새로 추가된 텍스트의 출처를 URL로 지정합니다. 이를 통해 보조 기술이 추가된 텍스트의 출처를 사용자에게 전달할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>datetime 속성</strong>
      					<p>
      						텍스트가 추가된 날짜와 시간을 ISO 8601 형식으로 지정합니다. 이를 통해 보조 기술이 해당 시점을 사용자에게 전달할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 단순 밑줄 스타일링</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;span&gt;</code> 요소에 밑줄 스타일을 적용하여 텍스트를 시각적으로 추가된 것처럼 보이게 했지만,
      					시멘틱 마크업을 사용하지 않았기 때문에 보조 기술이 이를 추가된 텍스트로 인식하지 못합니다.
      				</p>
      				
      <CodeBlock title="insertion 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>This is an <span style="text-decoration: underline;">updated</span> information.</p>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 올바른 예시 - 시멘틱 마크업 사용</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;ins&gt;</code> 요소를 사용하여 텍스트가 시멘틱하게 추가되었음을 명확히 표시하고 있으며,
      					보조 기술이 이를 올바르게 인식할 수 있습니다.
      				</p>
      				
      <CodeBlock title="insertion 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>This is an <ins>updated</ins> information.</p>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) cite 및 datetime 속성을 사용한 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>cite</code> 속성을 사용하여 새로 추가된 텍스트의 출처를 명시하고,
      					<code>datetime</code> 속성을 통해 텍스트가 추가된 날짜를 지정하고 있습니다.
      					이는 보조 기술이 추가된 텍스트에 대한 추가 정보를 사용자에게 전달할 수 있도록 돕습니다.
      				</p>
      				
      <CodeBlock title="insertion 역할 / 권장 속성 사용" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>The policy was revised to include <ins cite="https://www.example.com/new-policy" datetime="2024-08-10">new terms</ins> for better clarity.</p>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">strong 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>strong</code> 역할은 웹 콘텐츠에서 텍스트의 중요성을 강조하는 역할을 합니다.
      				이 역할은 해당 텍스트가 문맥적으로 매우 중요한 의미를 가지며, 보조 기술이 이를 인식하여 사용자에게 전달할 수 있도록 돕습니다.
      				HTML에서는 <code>&lt;strong&gt;</code> 요소가 이 역할을 기본적으로 수행하며, 브라우저에서 일반적으로 굵은 글씨체로 표시됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#strong" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA strong</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs : strong element</a><br />
      				<a href="/publishing/html/05-textLevel/04-strong_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : strong element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>strong</code> 역할은 문서 내에서 특정 텍스트가 매우 중요하거나 강조되어야 할 경우 사용됩니다.
      					이 요소를 사용하면 브라우저는 해당 텍스트를 굵게 표시하여 시각적으로 강조하며,
      					보조 기술은 이 텍스트가 중요함을 사용자에게 전달합니다.
      				</li>
      				<li>
      					HTML의 <code>&lt;strong&gt;</code> 요소는 시멘틱 마크업으로, 문서 내에서 중요한 텍스트를 강조하는 역할을 합니다.
      					이는 단순한 시각적 강조를 넘어서, 텍스트의 의미를 명확하게 전달하기 위한 시멘틱한 의미를 부여합니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;strong&gt;</code>)를 우선 사용하여 강조의 의미를 부여하고, 텍스트를 명확하게 표현하는 것이 중요합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>strong</code> 역할을 통해 웹 콘텐츠에서 텍스트를 시멘틱하게 강조함으로써,
      						사용자 경험과 접근성을 향상시킬 수 있습니다.
      						강조의 의미를 정확히 전달하여, 사용자가 중요한 정보를 더 쉽게 인식하고 이해할 수 있도록 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>의미 있는 강조에 사용</strong>
      					<p>
      						<code>strong</code> 역할은 단순히 텍스트의 스타일을 변경하기 위해 사용해서는 안 되며,
      						문맥적으로 중요한 의미를 가진 텍스트에만 사용해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중첩 사용 고려</strong>
      					<p>
      						다른 강조 요소(<code>&lt;em&gt;</code>, <code>&lt;b&gt;</code> 등)와 함께 사용될 수 있지만, 지나친 중첩은 피하는 것이 좋습니다.
      						각 요소의 시멘틱 의미를 고려하여 사용해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>시멘틱 마크업 사용</strong>
      					<p>
      						가능한 경우, 시멘틱한 HTML 요소인 <code>&lt;strong&gt;</code>을 사용하여 텍스트를 강조하는 것이 좋습니다.
      						이는 문서의 구조를 명확히 하고, 보조 기술이 콘텐츠를 올바르게 해석할 수 있도록 돕습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				기본적으로 상속된 상태나 속성은 없습니다.
      				<mark><code>strong</code> 역할은 텍스트에 시멘틱한 중요성을 부여하는 데 사용되며, 추가적인 ARIA 상태나 속성이 필요하지 않습니다.</mark>
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 단순 굵은 글씨를 위한 잘못된 사용</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;span&gt;</code> 요소에 굵은 글씨 스타일을 적용하여 텍스트를 강조하고 있지만,
      					시멘틱 마크업을 사용하지 않았기 때문에 보조 기술이 이를 강조된 텍스트로 인식하지 못합니다.
      					<code>strong</code> 요소를 사용하는 것이 더 적절합니다.
      				</p>
      				
      <CodeBlock title="strong 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>This is <span style="font-weight: bold;">important</span> information.</p>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 올바른 예시 - 시멘틱 마크업 사용</h4>
      				<p className="mt_s">
      					이 예시는 HTML의 <code>&lt;strong&gt;</code> 요소를 사용하여 <mark>&quot;very important&quot;</mark>라는 단어를 강조하고 있습니다.
      					이 텍스트는 브라우저에서 굵은 글씨로 표시되며,
      					보조 기술이 이를 강조된 텍스트로 인식하여 사용자에게 전달할 수 있습니다.
      				</p>
      				
      <CodeBlock title="strong 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>This is <strong>very important</strong> information.</p>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">subscript 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>subscript</code> 역할은 웹 콘텐츠에서 텍스트를 아래 첨자로 표시하는 역할을 합니다.
      				이 역할은 주로 수학적 표현, 화학식, 또는 특정 약어에서 사용되며, 텍스트가 일반 텍스트 라인 아래로 이동하여 표시됩니다.
      				HTML에서 <code>&lt;sub&gt;</code> 요소가 이 역할을 기본적으로 수행합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#subscript" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA subscript</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs : sub element</a><br />
      				<a href="/publishing/html/05-textLevel/10-sub_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : sub element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>subscript</code> 역할은 텍스트를 아래 첨자로 표시하며, 이는 주로 과학적, 수학적, 또는 기술적 문서에서 사용됩니다.
      					예를 들어, 화학식에서 물(H₂O)의 숫자 2는 아래 첨자로 표시됩니다.
      				</li>
      				<li>
      					HTML의 <code>&lt;sub&gt;</code> 요소는 기본적으로 <code>subscript</code> 역할을 수행하며,
      					보조 기술이 이 텍스트를 아래 첨자로 인식하고 사용자에게 올바르게 전달할 수 있도록 돕습니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;sub&gt;</code>)를 우선 사용하고,
      						필요한 경우 <code>role=&quot;subscript&quot;</code>를 명시적으로 지정하여 텍스트를 아래 첨자로 표시합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>subscript</code> 역할을 통해 텍스트를 시멘틱하게 표시함으로써, 웹 콘텐츠의 접근성과 사용성을 향상시킬 수 있습니다.
      						잘못된 사용을 피하고, 시멘틱한 요소를 통해 텍스트를 정확히 표시하는 것이 중요합니다.
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
      						가능한 경우, 시멘틱한 HTML 요소인 <code>&lt;sub&gt;</code>를 사용하여 텍스트를 아래 첨자로 표시하는 것이 좋습니다.
      						이는 보조 기술이 텍스트를 올바르게 해석할 수 있도록 돕습니다.
      					</p>
      				</li>
      				<li>
      					<strong>올바른 용도</strong>
      					<p>
      						<code>subscript</code> 역할은 텍스트를 아래 첨자로 표시해야 하는 경우에만 사용해야 하며,
      						단순한 시각적 스타일링을 위해 사용하지 않도록 주의해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				기본적으로 상속된 상태나 속성은 없습니다.
      				<mark><code>subscript</code> 역할은 텍스트를 시각적으로 아래 첨자로 표시하는 데 사용되며, 추가적인 ARIA 상태나 속성이 필요하지 않습니다.</mark>
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 스타일링을 위한 잘못된 사용</h4>
      				<p className="mt_s">
      					이 예시는 단순히 텍스트 크기를 줄이는 방식으로 아래 첨자 효과를 내고 있지만,
      					시멘틱 마크업을 사용하지 않았기 때문에 보조 기술이 이를 아래 첨자로 인식하지 못합니다.
      					<code>sub</code> 요소 또는 <code>subscript</code> 역할을 사용하는 것이 더 적절합니다.
      				</p>
      				
      <CodeBlock title="subscript 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<span style="font-size: smaller;">2</span>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 올바른 예시 - 시멘틱 마크업 사용</h4>
      				<p className="mt_s">
      					이 예시는 시멘틱한 HTML 요소인 <code>&lt;sub&gt;</code>를 사용하여 &quot;mc²&quot;에서 숫자 2를 아래 첨자로 표시하고 있습니다.
      					<code>&lt;sub&gt;</code> 요소는 기본적으로 <code>subscript</code> 역할을 수행합니다.
      				</p>
      				
      <CodeBlock title="subscript 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>The equation is E = mc<sub>2</sub>.</p>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">명시적으로 subscript 역할 지정</h4>
      				<p className="mt_s">
      					이 예시는 <code>div</code> 요소에 <code>role=&quot;subscript&quot;</code>를 사용하여 숫자 2를 아래 첨자로 명시적으로 지정한 예시입니다.
      				</p>
      				
      <CodeBlock title="subscript 역할 / 명시적 역할 지정" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="subscript">2</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">superscript 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>superscript</code> 역할은 웹 콘텐츠에서 텍스트를 위 첨자로 표시하는 역할을 합니다.
      				이 역할은 주로 수학적 지수, 상표 기호, 또는 특정 약어에서 사용되며, 텍스트가 일반 텍스트 라인 위로 이동하여 표시됩니다.
      				HTML에서 <code>&lt;sup&gt;</code> 요소가 이 역할을 기본적으로 수행합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#superscript" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA superscript</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs : sup element</a><br />
      				<a href="https://uxkm.io/publishing/html/05-textLevel/11-sup_element#gsc.tab=0" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : sup element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>superscript</code> 역할은 텍스트를 위 첨자로 표시하며, 이는 주로 과학적, 수학적, 또는 기술적 문서에서 사용됩니다.<br />
      					예를 들어, 수학적 표현에서 <mark>E=mc²</mark>에서 <mark>숫자 2는 위 첨자로 표시</mark>됩니다.
      				</li>
      				<li>
      					HTML의 <code>&lt;sup&gt;</code> 요소는 기본적으로 <code>superscript</code> 역할을 수행하며,
      					보조 기술이 이 텍스트를 위 첨자로 인식하고 사용자에게 올바르게 전달할 수 있도록 돕습니다.
      				</li>
      				<li>
      					<strong>적절한 사용</strong>
      					<p>
      						시멘틱한 HTML 요소(<code>&lt;sup&gt;</code>)를 우선 사용하고,
      						필요한 경우 <code>role=&quot;superscript&quot;</code>를 명시적으로 지정하여 텍스트를 위 첨자로 표시합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>superscript</code> 역할을 통해 텍스트를 시멘틱하게 표시함으로써, 웹 콘텐츠의 접근성과 사용성을 향상시킬 수 있습니다.
      						잘못된 사용을 피하고, 시멘틱한 요소를 통해 텍스트를 정확히 표시하는 것이 중요합니다.
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
      						가능한 경우, 시멘틱한 HTML 요소인 <code>&lt;sup&gt;</code>를 사용하여 텍스트를 위 첨자로 표시하는 것이 좋습니다.
      						이는 보조 기술이 텍스트를 올바르게 해석할 수 있도록 돕습니다.
      					</p>
      				</li>
      				<li>
      					<strong>올바른 용도</strong>
      					<p>
      						<code>superscript</code> 역할은 텍스트를 위 첨자로 표시해야 하는 경우에만 사용해야 하며,
      						단순한 시각적 스타일링을 위해 사용하지 않도록 주의해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				기본적으로 상속된 상태나 속성은 없습니다.
      				<mark><code>superscript</code> 역할은 텍스트를 시각적으로 위 첨자로 표시하는 데 사용되며, 추가적인 ARIA 상태나 속성이 필요하지 않습니다.</mark>
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시 - 스타일링을 위한 잘못된 사용</h4>
      				<p className="mt_s">
      					이 예시는 단순히 텍스트 크기를 줄이고 위치를 올리는 방식으로 위 첨자 효과를 내고 있지만,
      					시멘틱 마크업을 사용하지 않았기 때문에 보조 기술이 이를 위 첨자로 인식하지 못합니다.
      					<code>sup</code> 요소 또는 <code>superscript</code> 역할을 사용하는 것이 더 적절합니다.
      				</p>
      				
      <CodeBlock title="superscript 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<span style="vertical-align: super; font-size: smaller;">2</span>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 올바른 예시 - 시멘틱 마크업 사용</h4>
      				<p className="mt_s">
      					이 예시는 HTML의 <code>&lt;sup&gt;</code> 요소를 사용하여 &quot;mc²&quot;에서 숫자 2를 위 첨자로 표시하고 있습니다.
      					<code>&lt;sup&gt;</code> 요소는 기본적으로 <code>superscript</code> 역할을 수행합니다.
      				</p>
      				
      <CodeBlock title="superscript 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>The equation for energy is E = mc<sup>2</sup>.</p>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">명시적으로 superscript 역할 지정</h4>
      				<p className="mt_s">
      					이 예시는 <code>div</code> 요소에 <code>role=&quot;superscript&quot;</code>를 사용하여 숫자 2를 위 첨자로 명시적으로 지정한 예시입니다.
      				</p>
      				
      <CodeBlock title="superscript 역할 / 명시적 역할 지정" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="superscript">2</div>`}
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

export default StructureDocumentPart3Page
