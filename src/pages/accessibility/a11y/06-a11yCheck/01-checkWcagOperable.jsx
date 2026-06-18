import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "checkWcag",
  type: "accessibility",
  titleSticky: true,
  info: false,
  note: false,
  sideMenu: true,
  reference: false,
  contentList: true,
  depth3Last: true,
  bottomEditor: false
}

const PAGE_DATA = {
  title: "운용의 용이성 | 접근성 체크리스트(웹 콘텐츠 접근성)",
  description: "웹 콘텐츠 접근성 체크리스트는 다양한 사용자들이 웹 콘텐츠를 문제 없이 이용할 수 있도록 보장하기 위해 설계된 필수 항목들을 제공합니다. 이 페이지에서는 웹 콘텐츠 접근성 체크리스트의 운용의 용이성(Operable)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function CheckWcagOperablePage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		kwcag 2.2 원칙을 구현하기 위해 14개의 지침을 따라야 하고, 각 지침의 준수 여부를 확인하기 위해 33개의 검사 항목을 마련해야 합니다.<br />
      		검사 항목은 구체적인 테스트가 가능한 기준을 제공하여 웹사이트가 원칙 및 지침을 준수하고 있는지 확인하는 데 사용됩니다.<br />
      		<b>지능정보화기본법 시행규칙 일부개정령(안) 입법예고에 따라 ‘24.9.1부터 심사기준이 변경되며 이에따라 kwcag 2.2 기준으로 체크리스트를 제공합니다.</b>
      	</p>
      </blockquote>










      	<link href="/a11yStart.min.css" rel="stylesheet" />
      	<link href="/checkWcag.min.css" rel="stylesheet" />



      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">키보드 사용 보장</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">모든 기능은 키보드만으로도 사용할 수 있어야 합니다.</b><br />
      				웹 접근성에서 키보드 사용 보장이란 모든 기능이 키보드만으로도 사용할 수 있어야 한다는 것을 의미합니다.
      				이는 시각 장애나 지체 장애가 있는 사용자들이 마우스를 사용할 수 없는 경우에도 웹 페이지의 모든 기능을 사용할 수 있도록 하기 위함이며,
      				키보드 네비게이션, 폼 요소의 접근성, 인터랙티브 요소의 포커스 등이 포함됩니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#keyboard" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.1.1 Keyboard</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				버튼을 마우스 클릭만으로 조작 가능하며, 키보드로는 조작할 수 없습니다.<br />
      				<span className="dp_pc t_666">(예제 우측에 있는 미니 브라우저의 타이틀을 클릭하고 포커스 이동(tab) 해보세요.)</span>
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.1.Keyboard_false.html" className="uk_editor min_height_450 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="450px" mbResultHeight="200px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				<code>role=&quot;button&quot;</code> 속성을 추가하여 버튼이 아닌 요소가 버튼 역할을 한다고 명시하고,
      				<code>tabindex=&quot;0&quot;</code> 속성을 추가하여 키보드 포커스를 받을 수 있게 합니다.<br />
      				그리고 <code>onkeypress</code> 이벤트를 사용하여 Enter 키로 버튼을 조작할 수 있게 합니다.<br />
      				<span className="dp_pc t_666">(예제 우측에 있는 미니 브라우저의 타이틀을 클릭하고 포커스 이동(tab) 해보세요.)</span>
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.1.Keyboard_true.html" className="uk_editor min_height_450 mb_result_height_300" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="450px" mbResultHeight="300px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>키보드만 사용하여 웹 애플리케이션의 모든 기능을 탐색하고 조작할 수 있는지 확인하였는가?</li>
      				<li>Tab, Shift+Tab, Enter, Space, Arrow 키 등을 사용하여 인터페이스 요소가 예상대로 작동하는지 테스트하였는가?</li>
      				<li>Axe와 같은 접근성 검사 도구를 사용하여 키보드 접근성의 문제를 평가하였는가?</li>
      				<li>WAVE 도구를 사용하여 키보드 접근성과 관련된 접근성 문제를 검사하였는가?</li>
      				<li>NVDA, JAWS와 같은 스크린 리더를 사용하여 키보드만으로 모든 기능을 사용할 수 있는지 확인하였는가?</li>
      				<li>스크린 리더로 각 인터페이스 요소를 탐색하며 키보드 접근성이 보장되는지 확인하였는가?</li>
      				<li>브라우저의 개발자 도구를 사용하여 HTML 구조와 접근성 속성을 검사하고, 모든 인터페이스 요소가 키보드로 접근 가능한지 확인하였는가?</li>
      				<li>다양한 사용자가 웹 사이트를 탐색하면서 키보드만으로 모든 기능을 사용하는 데 어려움이 없는지 피드백을 받았는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">초점 이동과 표시</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">키보드에 의한 초점은 논리적으로 이동해야 하며, 시각적으로 구별할 수 있어야 합니다.</b><br />
      				사용자가 키보드를 통해 웹 페이지를 탐색할 때 초점의 위치를 쉽게 인식하고, 초점 이동이 자연스럽게 이루어지도록 해야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#focus-order" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.4.3 Focus Order</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				초점이 이동할 때 시각적 표시가 약하며, 초점 이동의 순서가 논리적이지 않습니다.<br />
      				아래 예제는 Button 1 다음에 Button 2가 위치하지 않고 text input이 위치함으로써 사용자가 순차적으로 초점을 이동할 때 불편을 겪을 수 있습니다.<br />
      				<span className="dp_pc t_666">(예제 우측에 있는 미니 브라우저의 타이틀을 클릭하고 포커스 이동(tab) 해보세요.)</span>
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.2.Focus_Order_false.html" className="uk_editor min_height_300 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="200px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				<code>:focus</code> 가상 클래스를 사용하여 초점이 맞춰진 요소를 시각적으로 명확히 구별할 수 있도록 하고,
      				요소의 배치와 순서를 논리적으로 배치하였습니다.<br />
      				<span className="dp_pc t_666">(예제 우측에 있는 미니 브라우저의 타이틀을 클릭하고 포커스 이동(tab) 해보세요.)</span>
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.2.Focus_Order_true.html" className="uk_editor min_height_450 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="450px" mbResultHeight="200px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>키보드만 사용해서 페이지를 탐색하면서 초점 이동이 논리적으로 이루어지는지 확인하였는가?</li>
      				<li>초점이 맞춰진 요소가 시각적으로 구별되는지 확인하였는가?</li>
      				<li>Axe 같은 접근성 검사 도구로 초점 이동의 논리성과 시각적 구별 가능성을 평가하였는가?</li>
      				<li>WAVE 도구로 초점 이동과 관련된 접근성 문제를 검사하였는가?</li>
      				<li>NVDA나 JAWS 같은 스크린 리더로 초점 이동이 논리적이고 시각적으로 구별 가능한지 확인하였는가?</li>
      				<li>브라우저의 개발자 도구로 HTML 구조와 CSS 스타일을 검사해서 초점 이동이 제대로 구현되었는지 확인하였는가?</li>
      				<li>다양한 사용자한테 웹 사이트를 탐색하게 하고 초점 이동과 시각적 구별이 원활한지 피드백을 받았는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">조작 가능</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">사용자 입력 및 콘트롤은 조작 가능하도록 제공되어야 합니다.</b><br />
      				사용자 입력 및 컨트롤이 조작 가능하게 제공된다는 것은, 모든 사용자(장애가 있는 사용자 포함)가
      				웹 페이지의 모든 기능을 문제없이 사용할 수 있도록 하는 것을 의미하며,
      				키보드, 마우스, 터치스크린 등 다양한 입력 장치를 사용하여 웹 페이지를 조작할 수 있어야 함을 포함합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#keyboard-accessible" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.1 Keyboard Accessible</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시 1</h3>
      			<p className="mt_ms t_red">
      				버튼이 숨겨져 있어 접근할 수 없고, 텍스트 입력 필드가 읽기 전용으로 설정되어 있어 사용자가 입력할 수 없습니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.3.Keyboard_Accessible_false1.html" className="uk_editor min_height_300 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="200px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시 1</h3>
      			<p className="mt_ms t_green">
      				버튼이 표시되어 있으며, 텍스트 입력 필드가 조작 가능하게 설정되어 있습니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.3.Keyboard_Accessible_true1.html" className="uk_editor min_height_300 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="200px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시 2</h3>
      			<p className="mt_ms t_red">
      				<code>tabindex=&quot;-1&quot;</code> 속성으로 인해 버튼이 키보드 포커스를 받을 수 없습니다.<br />
      				<span className="dp_pc t_666">(예제 우측에 있는 미니 브라우저의 타이틀을 클릭하고 포커스 이동(tab) 해보세요.)</span>
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.3.Keyboard_Accessible_false2.html" className="uk_editor min_height_300 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="200px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시 2</h3>
      			<p className="mt_ms t_green">
      				버튼이 키보드 포커스를 받을 수 있도록 설정되어 있습니다.<br />
      				<span className="dp_pc t_666">(예제 우측에 있는 미니 브라우저의 타이틀을 클릭하고 포커스 이동(tab) 해보세요.)</span>
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.3.Keyboard_Accessible_true2.html" className="uk_editor min_height_300 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="200px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>키보드, 마우스, 터치스크린 등 다양한 입력 장치를 사용해서 웹 페이지의 모든 기능을 테스트하였는가?</li>
      				<li>모든 버튼, 링크, 입력 필드 등이 조작 가능한지 확인하였는가?</li>
      				<li>Axe 같은 접근성 검사 도구로 사용자 입력 및 컨트롤의 접근성을 평가하였는가?</li>
      				<li>WAVE 도구로 조작 가능 여부를 검사하였는가?</li>
      				<li>NVDA나 JAWS 같은 스크린 리더로 모든 사용자 입력 및 컨트롤이 접근 가능하고 조작 가능한지 확인하였는가?</li>
      				<li>브라우저의 개발자 도구로 HTML 구조와 CSS 스타일을 검사하여 모든 사용자 입력 및 컨트롤이 조작 가능하게 설정되었는지 확인하였는가?</li>
      				<li>다양한 사용자에게 웹 사이트를 탐색하게 하고 모든 기능을 문제없이 사용할 수 있는지 피드백을 받았는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">문자 단축키</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">문자 단축키는 오동작으로 인한 오류를 방지하여야 합니다.</b><br />
      				문자 단축키는 오동작을 방지할 수 있도록 설계되어야 하며, 사용자에게 혼란을 주지 않도록,
      				단축키를 사용할 때 명확한 컨텍스트가 필요하거나 추가 키(예: Ctrl, Alt, Shift)와 함께 사용해야 함을 의미합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#character-key-shortcuts" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.1.4 Character Key Shortcuts</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				사용자가 입력 필드에 텍스트를 입력할 때 '<b>a</b>' 키를 누르면 의도하지 않은 동작이 발생할 수 있습니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.4.Character_Key_Shortcuts_false.html" className="uk_editor min_height_300 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="200px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				'<b>Ctrl</b>' 키와 함께 '<b>a</b>' 키를 눌러야 단축키가 작동하도록 하여 오동작을 방지할 수 있습니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.4.Character_Key_Shortcuts_true.html" className="uk_editor min_height_300 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="200px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>다양한 입력 시나리오를 테스트하여 단축키가 의도치 않게 작동하지 않는지 확인하였는가?</li>
      				<li>단축키를 사용할 때 추가 키(예: Ctrl, Alt, Shift)와 함께 사용하도록 설정되었는가?</li>
      				<li>Axe 같은 접근성 검사 도구로 문자 단축키 사용의 접근성을 평가하였는가?</li>
      				<li>WAVE 도구로 단축키 사용과 관련된 접근성 문제를 검사하였는가?</li>
      				<li>NVDA나 JAWS 같은 스크린 리더로 단축키가 올바르게 작동하고, 오동작을 방지하도록 설정되었는지 확인하였는가?</li>
      				<li>브라우저의 개발자 도구로 단축키 이벤트 리스너와 스크립트를 검사하고, 오동작을 방지하기 위한 추가 키 설정이 올바르게 구현되었는지 확인하였는가?</li>
      				<li>다양한 사용자에게 웹 사이트를 탐색하게 하여 단축키 사용에 불편함이 없는지 피드백을 받았는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">응답시간 조절</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">시간제한이 있는 콘텐츠는 응답시간을 조절할 수 있어야 합니다.</b><br />
      				시간제한이 있는 콘텐츠는 사용자가 응답시간을 조절할 수 있도록 해야 하며, 사용자가 콘텐츠를 충분히 읽고 이해하며
      				상호작용할 수 있는 시간을 제공하는 것을 의미합니다.
      				사용자는 시간을 연장하거나, 일시 정지하거나, 시간제한을 제거할 수 있는 옵션을 제공받아야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#timing-adjustable" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.2.1 Timing Adjustable</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				시간 제한이 고정되어 있어 사용자가 조절할 수 없습니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.5.Timing_Adjustable_false.html" className="uk_editor min_height_400" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="400px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				사용자가 시간을 연장하거나 일시 정지하거나 다시 시작할 수 있는 옵션을 제공하여 응답시간을 조절할 수 있습니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.5.Timing_Adjustable_true.html" className="uk_editor min_height_400" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="400px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>시간을 연장, 일시 정지 및 다시 시작할 수 있는 옵션이 제공되는지 확인하였는가?</li>
      				<li>다양한 시나리오에서 시간이 올바르게 조절되는지 테스트하였는가?</li>
      				<li>Axe 같은 접근성 검사 도구로 시간제한 조절 기능의 접근성을 평가하였는가?</li>
      				<li>WAVE 도구로 시간제한 조절 기능과 관련된 접근성 문제를 검사하였는가?</li>
      				<li>NVDA나 JAWS 같은 스크린 리더로 시간제한 조절 기능이 올바르게 작동하고 접근 가능한지 확인하였는가?</li>
      				<li>브라우저의 개발자 도구로 시간제한 조절 스크립트와 HTML 구조를 검사하고, 모든 기능이 올바르게 구현되었는지 확인하였는가?</li>
      				<li>다양한 사용자에게 웹 사이트를 탐색하게 하여 시간제한 조절 기능을 사용하는 데 어려움이 없는지 피드백을 받았는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">정지 기능 제공</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 합니다.</b><br />
      				자동으로 변경되는 콘텐츠는 사용자가 이를 제어할 수 있도록 기능을 제공해야 하며,
      				사용자가 콘텐츠의 자동 변환을 멈추거나 일시 정지할 수 있는 옵션을 포함하여 시각적 혼란을 최소화하는 것을 의미합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#pause-stop-hide" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.2.2 Pause, Stop, Hide</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				자동 슬라이드쇼를 제어할 수 있는 방법이 없습니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.6.Pause_Stop_Hide_false.html" className="uk_editor min_height_400" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="400px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				사용자가 슬라이드쇼를 일시 정지하거나 다시 시작할 수 있는 버튼을 제공하여 자동으로 변경되는 콘텐츠를 제어할 수 있습니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.6.Pause_Stop_Hide_true.html" className="uk_editor min_height_400" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="400px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>콘텐츠의 자동 변환을 멈추거나 일시 정지할 수 있는 옵션이 제공되는지 확인하였는가?</li>
      				<li>다양한 시나리오에서 제어 기능이 올바르게 작동하는지 테스트하였는가?</li>
      				<li>Axe 같은 접근성 검사 도구로 자동으로 변경되는 콘텐츠 제어 기능의 접근성을 평가하였는가?</li>
      				<li>WAVE 도구로 제어 기능과 관련된 접근성 문제를 검사하였는가?</li>
      				<li>NVDA나 JAWS 같은 스크린 리더로 자동으로 변경되는 콘텐츠 제어 기능이 올바르게 작동하고 접근 가능한지 확인하였는가?</li>
      				<li>브라우저의 개발자 도구로 제어 스크립트와 HTML 구조를 검사하여 모든 기능이 올바르게 구현되었는지 확인하였는가?</li>
      				<li>다양한 사용자에게 웹 사이트를 탐색하게 하여 자동으로 변경되는 콘텐츠 제어 기능을 사용하는 데 어려움이 없는지 피드백을 받았는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">깜빡임과 번쩍임 사용 제한</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">초당 3~50회 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공하지 않아야 합니다.</b><br />
      				초당 3~50회 주기로 깜빡이거나 번쩍이는 콘텐츠는 사용자가 발작을 경험할 수 있는 위험을 증가시키므로 피해야 하며,
      				깜빡임을 줄이거나 제거하고 다른 시각적 효과로 대체해야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#three-flashes-or-below-threshold" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.3.1 Three Flashes or Below Threshold</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				애니메이션이 초당 10회 깜빡이도록 설정되어 있어 광과민성 장애가 있는 사용자에게 문제를 일으킬 수 있습니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.7.Three_Flashes_or_Below_Threshold_false.html" className="uk_editor min_height_400 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="400px" mbResultHeight="200px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				깜빡임 대신 배경색이 부드럽게 전환되도록 설정하여 안전하게 시각적 주의를 끌 수 있습니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.7.Three_Flashes_or_Below_Threshold_true.html" className="uk_editor min_height_400 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="400px" mbResultHeight="200px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>모든 콘텐츠를 확인하여 초당 3~50회 주기로 깜빡이거나 번쩍이는 요소가 있는지 검사하였는가?</li>
      				<li>깜빡임이 있는 콘텐츠를 다른 시각적 효과로 대체하였는가?</li>
      				<li>Axe와 같은 접근성 검사 도구를 사용하여 깜빡임과 번쩍임 문제를 평가하였는가?</li>
      				<li>WAVE 도구를 사용하여 깜빡임 관련 접근성 문제를 검사하였는가?</li>
      				<li>브라우저의 개발자 도구를 사용하여 애니메이션 및 전환 효과를 검사하고, 깜빡임이 없는지 확인하였는가?</li>
      				<li>다양한 사용자가 웹 사이트를 탐색하며 깜빡임이나 번쩍임이 발생하지 않는지 피드백을 받았는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">고정된 참조 위치 정보</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">
      					전자출판문서 형식의 웹 페이지는 각페이지로 이동할 수 있는 기능이 있어야 하고,
      					서식이나 플랫폼에 상관없이 참조 위치 정보를 일관되게 제공ㆍ유지해야 합니다.
      				</b><br />
      				전자출판문서 형식의 웹 페이지는 각 페이지로 이동할 수 있는 기능을 제공해야 합니다.
      				또한, 서식이나 플랫폼에 상관없이 참조 위치 정보를 일관되게 제공·유지하여 사용자가 문서 내에서 일관된 경험을 할 수 있도록 해야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/epub-a11y-11/" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">Navigable EPUB Accessibility Guidelines</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				페이지 이동 기능이 제공되지 않아 사용자가 문서 내에서 쉽게 탐색 불가능 합니다.
      			</p>
      			
      <CodeBlock title="고정된 참조 위치 정보 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="content">
      						<h1>Chapter 1</h1>
      						<p>Content of chapter 1...</p>
      						<h1>Chapter 2</h1>
      						<p>Content of chapter 2...</p>
      					</div>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시 1</h3>
      			<p className="mt_ms t_green">
      				내비게이션 링크를 제공하여 사용자가 각 챕터로 쉽게 이동할 수 있습니다.
      			</p>
      			
      <CodeBlock title="고정된 참조 위치 정보 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<nav>
      						<ul>
      							<li><a href="#chapter1">Chapter 1</a></li>
      							<li><a href="#chapter2">Chapter 2</a></li>
      							<li><a href="#chapter3">Chapter 3</a></li>
      						</ul>
      					</nav>
      					<div id="content">
      						<h1 id="chapter1">Chapter 1</h1>
      						<p>Content of chapter 1...</p>
      						<h1 id="chapter2">Chapter 2</h1>
      						<p>Content of chapter 2...</p>
      						<h1 id="chapter3">Chapter 3</h1>
      						<p>Content of chapter 3...</p>
      					</div>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시 2</h3>
      			<p className="mt_ms t_green">
      				<code>id</code> 속성을 사용하여 페이지를 구분하고, 내비게이션 링크를 통해 각 페이지로 이동할 수 있도록 하며,
      				각 페이지는 <code>:target</code> CSS 선택자를 사용하여 참조 위치가 일관되게 유지할 수 있습니다.<br />
      				<span className="dp_pc t_666">(왼쪽 에디터 영역의 <b>full Screen 모드</b>를 켜거나, 오른쪽 미니 브라우저를 <b>전체화면(브라우저 전체화면 또는 모니터 전체화면) 모드로 변경</b>한 후 페이지를 클릭하세요.)</span>
      				<span className="dp_mb t_666">(본 예제는 desktop에서 확인 가능합니다.)</span>
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.8.Navigable_EPUB_Accessibility_true.html" className="uk_editor min_height_400 mb_result_height_250" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="400px" mbResultHeight="250px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>내비게이션 링크를 클릭하여 각 페이지로 이동할 수 있는지 확인하였는가?</li>
      				<li>모든 페이지가 일관된 참조 위치를 유지하고 있는지 확인하였는가?</li>
      				<li>Axe와 같은 접근성 검사 도구를 사용하여 내비게이션 기능의 접근성을 평가하였는가?</li>
      				<li>WAVE 도구를 사용하여 내비게이션과 참조 위치 정보와 관련된 접근성 문제를 검사하였는가?</li>
      				<li>NVDA, JAWS와 같은 스크린 리더를 사용하여 내비게이션 링크와 참조 위치가 올바르게 작동하는지 확인하였는가?</li>
      				<li>브라우저의 개발자 도구를 사용하여 HTML 구조와 CSS 스타일을 검사하고, 모든 기능이 올바르게 구현되었는가?</li>
      				<li>다양한 사용자가 웹 사이트를 탐색하며 내비게이션 기능과 참조 위치 정보 제공에 어려움이 없는지 피드백을 받았는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">단일 포인터 입력 지원</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">다중 포인터 또는 경로기반 동작을 통한 입력은 단일 포인터 입력으로도 조작할 수 있어야 합니다.</b><br />
      				웹 애플리케이션은 다중 포인터나 경로 기반 동작을 사용할 때, 단일 포인터 입력으로도 동일한 작업을 수행할 수 있도록 지원해야 합니다.
      				이는 사용자가 한 손가락만으로도 모든 기능을 이용할 수 있게 하여 접근성을 높이는 데 기여합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#pointer-gestures" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.5.1 Pointer Gestures</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				다중 포인터 입력(예: 두 손가락으로 줌)을 지원하지만, 단일 포인터 입력에 대한 대체 방법이 제공되지 않습니다.
      			</p>
      			
      <CodeBlock title="단일 포인터 입력 지원 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="image"></div>

      					<script>
      						const image = document.getElementById('image');
      						image.addEventListener('touchstart', function(event) {
      							if (event.touches.length > 1) {
      								// Handle multi-touch zoom or pan
      							}
      						});
      					</script>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				단일 포인터 입력(예: 마우스를 통한 드래그)을 지원하여 모든 사용자가 이미지를 조작할 수 있도록 제공합니다.
      			</p>
      			
      <CodeBlock title="단일 포인터 입력 지원 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="image"></div>

      					<script>
      						const image = document.getElementById('image');
      						let isDragging = false;
      						let startX, startY;

      						// Multi-pointer input (e.g., zoom)
      						image.addEventListener('touchstart', function(event) {
      							if (event.touches.length > 1) {
      								// Handle multi-touch zoom or pan
      							}
      						});

      						// Single pointer input (e.g., drag)
      						image.addEventListener('mousedown', function(event) {
      							isDragging = true;
      							startX = event.pageX - image.offsetLeft;
      							startY = event.pageY - image.offsetTop;
      						});

      						document.addEventListener('mousemove', function(event) {
      							if (isDragging) {
      								image.style.left = \`\${event.pageX - startX}px\`;
      								image.style.top = \`\${event.pageY - startY}px\`;
      							}
      						});

      						document.addEventListener('mouseup', function() {
      							isDragging = false;
      						});
      					</script>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>터치스크린, 마우스, 스타일러스 등 다양한 입력 장치를 사용하여 웹 애플리케이션의 모든 기능이 단일 포인터 입력으로 작동하는지 확인하였는가?</li>
      				<li>다중 포인터 입력이 필요한 기능이 단일 포인터 입력으로도 수행될 수 있는지 테스트하였는가?</li>
      				<li>Axe와 같은 접근성 검사 도구를 사용하여 포인터 입력 지원의 접근성을 평가하였는가?</li>
      				<li>WAVE 도구를 사용하여 포인터 입력과 관련된 접근성 문제를 검사하였는가?</li>
      				<li>NVDA, JAWS와 같은 스크린 리더를 사용하여 단일 포인터 입력이 올바르게 작동하고 접근 가능한지 확인하였는가?</li>
      				<li>브라우저의 개발자 도구를 사용하여 입력 이벤트 리스너와 스크립트를 검사하고, 모든 기능이 단일 포인터 입력으로도 조작 가능하게 구현되었는가?</li>
      				<li>다양한 사용자가 웹 사이트를 탐색하며 단일 포인터 입력으로 모든 기능을 사용하는 데 어려움이 없는지 피드백을 받았는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">포인터 입력 취소</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">단일 포인터 입력으로 실행되는 기능은 취소할 수 있어야 합니다.</b><br />
      				단일 포인터 입력으로 실행되는 기능은 사용자가 쉽게 취소할 수 있어야 합니다.
      				이를 통해 사용자는 실수로 실행된 동작을 되돌릴 수 있으며, 웹 애플리케이션을 더 편리하게 사용할 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#pointer-cancellation" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.5.2 Pointer Cancellation</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				사용자가 삭제 버튼을 클릭하면 즉시 동작이 실행되며, 이를 취소할 수 있는 방법이 제공되지 않습니다.<br />
      				<span className="t_666">(삭제하기 버튼을 클릭해 보세요.)</span>
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.10.Pointer_Cancellation_false.html" className="uk_editor min_height_300" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				삭제 버튼을 클릭하면 확인 대화 상자가 나타나며, 사용자가 동작을 취소할 수 있는 옵션을 제공합니다.<br />
      				<span className="t_666">(삭제하기 버튼을 클릭해 보세요.)</span>
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.2.10.Pointer_Cancellation_true.html" className="uk_editor min_height_300" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>단일 포인터 입력(예: 마우스 클릭, 터치)을 통해 실행되는 모든 기능이 취소 가능한지 확인하였는가?</li>
      				<li>실행된 동작을 쉽게 취소할 수 있는지 테스트하였는가?</li>
      				<li>Axe와 같은 접근성 검사 도구를 사용하여 포인터 입력 취소 기능의 접근성을 평가하였는가?</li>
      				<li>WAVE 도구를 사용하여 포인터 입력과 관련된 접근성 문제를 검사하였는가?</li>
      				<li>NVDA, JAWS와 같은 스크린 리더를 사용하여 포인터 입력 취소 기능이 올바르게 작동하고 접근 가능한지 확인하였는가?</li>
      				<li>브라우저의 개발자 도구를 사용하여 이벤트 리스너와 스크립트를 검사하고, 모든 기능이 취소 가능하게 구현되었는가?</li>
      				<li>다양한 사용자가 웹 사이트를 탐색하며 포인터 입력 취소 기능을 사용하는 데 어려움이 없는지 피드백을 받았는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">레이블과 네임</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">
      					텍스트 또는 텍스트 이미지가 포함된 레이블이 있는 사용자 인터페이스 구성요소는 네임에 시각적으로 표시되는 해당 텍스트를 포함해야 합니다.
      				</b><br />
      				텍스트 또는 텍스트 이미지를 포함한 레이블이 있는 사용자 인터페이스 구성 요소는 네임에 시각적으로 표시되는 해당 텍스트를 포함해야 하며,
      				사용자 인터페이스의 일관성을 유지하고, 보조 기술이 정확하게 정보를 전달할 수 있도록 보장해야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#label-in-name" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.5.3 Label in Name</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				레이블과 네임이 일치하지 않는 경우 : 시각적으로 <b>&quot;Find:&quot;</b>가 표시되지만,
      				스크린 리더는 <b>&quot;Search&quot;</b>라는 네임을 읽게 되어 일관성이 없습니다.
      			</p>
      			
      <CodeBlock title="레이블과 네임 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<label for="search">Find:</label>
      					<input type="text" id="search" aria-label="Search">`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				레이블과 네임이 일치하는 경우 : 시각적으로 표시되는 텍스트 <b>&quot;Search:&quot;</b>와
      				스크린 리더가 읽는 네임 <b>&quot;Search&quot;</b>가 일치하여 일관성이 유지됩니다.
      			</p>
      			
      <CodeBlock title="레이블과 네임 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<label for="search">Search:</label>
      					<input type="text" id="search" aria-label="Search">`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>UI 요소의 시각적 레이블과 네임이 일치하는지 확인하였는가?</li>
      				<li>HTML 소스 코드를 확인하여 aria-label 또는 aria-labelledby 속성이 올바르게 설정되었는지 확인하였는가?</li>
      				<li>Axe와 같은 접근성 검사 도구를 사용하여 레이블과 네임의 일치성을 평가하였는가?</li>
      				<li>WAVE 도구를 사용하여 레이블과 관련된 접근성 문제를 검사하였는가?</li>
      				<li>NVDA, JAWS와 같은 스크린 리더를 사용하여 레이블과 네임이 일치하는지 확인하였는가?</li>
      				<li>스크린 리더로 각 UI 요소를 탐색하며 시각적으로 표시된 텍스트와 네임이 일치하는지 확인하였는가?</li>
      				<li>브라우저의 개발자 도구를 사용하여 HTML 구조와 접근성 속성을 검사하고, 레이블과 네임이 일치하는지 확인하였는가?</li>
      				<li>다양한 사용자가 웹 사이트를 탐색하며 레이블과 네임의 일치성에 대한 피드백을 받았는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">동작기반 작동</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">동작기반으로 작동하는 기능은 사용자 인터페이스 구성요소로 조작할 수 있고, 동작기반 기능을 비활성화할 수 있어야 합니다.</b><br />
      				동작기반으로 작동하는 기능은 사용자 인터페이스 구성 요소로도 조작할 수 있어야 하며,
      				사용자가 이러한 기능을 비활성화할 수 있는 옵션을 제공해야 합니다.
      				이를 통해 다양한 사용자가 동일한 기능을 접근하고 사용할 수 있도록 보장합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#motion-actuation" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.5.4 Motion Actuation</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				기기를 흔드는 동작으로만 기능이 작동하며, 다른 대체 방법이 제공되지 않습니다.
      			</p>
      			
      <CodeBlock title="동작기반 작동 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>기기를 흔들어 동작을 실행해 보세요.</p>

      					<script>
      						window.addEventListener('devicemotion', function(event) {
      							if (event.acceleration.x > 2) {
      								alert('Motion detected!');
      							}
      						});
      					</script>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				사용자가 기기를 흔드는 동작과 버튼 클릭을 통해 동일한 기능을 사용할 수 있으며,
      				동작기반 기능을 비활성화할 수 있는 옵션을 제공합니다.
      			</p>
      			
      <CodeBlock title="동작기반 작동 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>기기를 흔들어 동작을 실행하거나 아래 버튼을 클릭하세요.</p>

      					<!-- 버튼으로 동장 실행 -->
      					<button onclick="alert('버튼이 클릭되었습니다!')">동작 실행</button>

      					<!-- 모션 감지 기능 켜기/끄기 -->
      					<button onclick="toggleMotion()">모션 감지 켜기/끄기</button>

      					<!-- 모션 감지 기능 상태 표시 -->
      					<p>모션 감지 상태: <span id="motionStatus">활성화됨</span>.</p>

      					<script>
      						let motionEnabled = true;

      						function handleMotion(event) {
      							if (motionEnabled && event.acceleration.x > 2) {
      								alert('Motion detected!');
      							}
      						}

      						window.addEventListener('devicemotion', handleMotion);

      						function toggleMotion() {
      							motionEnabled = !motionEnabled;
      							document.getElementById('motionStatus').textContent = motionEnabled ? 'enabled' : 'disabled';
      						}
      					</script>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>동작기반 기능이 사용자 인터페이스 구성 요소(예: 버튼 클릭)를 통해 조작될 수 있는지 확인하였는가?</li>
      				<li>동작기반 기능을 비활성화할 수 있는 옵션이 제공되는지 확인하였는가?</li>
      				<li>Axe와 같은 접근성 검사 도구를 사용하여 동작기반 기능의 접근성을 평가하였는가?</li>
      				<li>WAVE 도구를 사용하여 동작기반 기능과 관련된 접근성 문제를 검사하였는가?</li>
      				<li>NVDA, JAWS와 같은 스크린 리더를 사용하여 동작기반 기능이 올바르게 작동하고 접근 가능한지 확인하였는가?</li>
      				<li>스크린 리더를 사용하여 비활성화 옵션이 제대로 작동하는지 확인하였는가?</li>
      				<li>브라우저의 개발자 도구를 사용하여 이벤트 리스너와 스크립트를 검사하고, 동작기반 기능이 사용자 인터페이스 구성 요소로 조작될 수 있는지 확인하였는가?</li>
      				<li>다양한 사용자가 웹 사이트를 탐색하며 동작기반 기능과 비활성화 옵션을 사용하는 데 어려움이 없는지 피드백을 받았는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	


      <hr />

      <section className="mt_xxl">
      	<h2 data-icon="pen">웹 접근성 요약 보고서 예시</h2>
      	<p className="mt_ml indent">
      		아래 표는 웹 접근성 요약 보고서 예시로, 체크박스의 체크 여부가 저장되지 않습니다.
      	</p>
      	<div className="mt_m indent">
      		<div className="checkWcag_table web_table">
      			<ul className="head">
      				<li className="guide" data-tit="지침(14개) / 검사항목(33개)">지침(14개)</li>
      				<li className="items">
      					<div className="item">
      						<p className="text">검사항목(33개)</p>
      						<p className="check">준수 여부</p>
      					</div>
      				</li>
      			</ul>
      			<div className="body">
      				<ul>
      					<li className="guide">
      						5.1. 대체 텍스트
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">5.1.1. (적절한 대체 텍스트 제공) 텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						5.2. 멀티미디어 대체수단
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">5.2.1. (자막 제공) 멀티미디어 콘텐츠에는 자막, 대본 또는 수어를 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						5.3. 적응성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">5.3.1. (표의 구성) 표는 이해하기 쉽게 구성해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">5.3.2. (콘텐츠의 선형구조) 콘텐츠는 논리적인 순서로 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">5.3.3. (명확한 지시사항 제공) 지시사항은 모양, 크기, 위치, 방향, 색, 소리 등에 관계없이 인식될 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						5.4. 명료성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">5.4.1. (색에 무관한 콘텐츠 인식) 콘텐츠는 색에 관계없이 인식될 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">5.4.2. (자동 재생 금지) 자동으로 소리가 재생되지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">5.4.3. (텍스트 콘텐츠의 명도 대비) 텍스트 콘텐츠와 배경 간의 명도대비는 4.5 대 1 이상이어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">5.4.4. (콘텐츠 간의 구분) 이웃한 콘텐츠는 구별될 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6.1. 입력장치 접근성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">6.1.1. (키보드 사용 보장) 모든 기능은 키보드만으로도 사용할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.1.2. (초점 이동과 표시) 키보드에 의한 초점은 논리적으로 이동해야 하며, 시각적으로 구별할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.1.3. (조작 가능) 사용자 입력 및 콘트롤은 조작 가능하도록 제공되어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.1.4. (문자 단축키) 문자 단축키는 오동작으로 인한 오류를 방지하여야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6.2. 충분한 시간 제공
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">6.2.1. (응답시간 조절) 시간제한이 있는 콘텐츠는 응답시간을 조절할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.2.2. (정지 기능 제공) 자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6.3. 광과민성 발작 예방
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">6.3.1. (깜빡임과 번쩍임 사용 제한) 초당 3~50회 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공하지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6.4 쉬운 내비게이션
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">6.4.1. (반복 영역 건너뛰기) 콘텐츠의 반복되는 영역은 건너뛸 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.4.2. (제목 제공) 페이지, 프레임, 콘텐츠 블록에는 적절한 제목을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.4.3. (적절한 링크 텍스트) 링크 텍스트는 용도나 목적을 이해할 수 있도록 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.4.4. (고정된 참조 위치 정보) 전자출판문서 형식의 웹 페이지는 각 페이지로 이동할 수 있는 기능이 있어야 하고, 서식이나 플랫폼에 상관없이 참조 위치 정보를 일관되게 제공ㆍ유지해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6.5. 입력 방식
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">6.5.1. (단일 포인터 입력 지원) 다중 포인터 또는 경로기반 동작을 통한 입력은 단일 포인터 입력으로도 조작할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.5.2. (포인터 입력 취소) 단일 포인터 입력으로 실행되는 기능은 취소할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.5.3. (레이블과 네임) 텍스트 또는 텍스트 이미지가 포함된 레이블이 있는 사용자 인터페이스 구성요소는 네임에 시각적으로 표시되는 해당 텍스트를 포함해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.5.4. (동작기반 작동) 동작기반으로 작동하는 기능은 사용자 인터페이스 구성요소로 조작할 수 있고, 동작기반 기능을 비활성화할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						7.1. 가독성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">7.1.1. (기본 언어 표시) 주로 사용하는 언어를 명시해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						7.2. 예측 가능성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">7.2.1. (사용자 요구에 따른 실행) 사용자가 의도하지 않은 기능(새 창, 초점에 의한 맥락 변화 등)은 실행되지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">7.2.2. (찾기 쉬운 도움 정보) 도움 정보가 제공되는 경우, 각 페이지에서 동일한 상대적인 순서로 접근할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						7.3. 입력 도움
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">7.3.1. (오류 정정) 입력 오류를 정정할 수 있는 방법을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">7.3.2. (레이블 제공) 사용자 입력에는 대응하는 레이블을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">7.3.3. (접근 가능한 인증) 인증 과정은 인지 기능 테스트에만 의존해서는 안 된다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">7.3.4. (반복 입력 정보) 반복되는 입력 정보는 자동 입력 또는 선택 입력할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						8.1. 문법 준수
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">8.1.1. (마크업 오류 방지) 마크업 언어의 요소는 열고 닫음, 중첩 관계 및 속성 선언에 오류가 없어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						8.2. 웹 애플리케이션 접근성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">8.2.1. (웹 애플리케이션 접근성 준수) 콘텐츠에 포함된 웹 애플리케이션은 접근성이 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				
      			</div>
      		</div>
      	</div>
      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y}/kwcag_all_checklist.png`} alt="웹 접근성 체크리스트" />
      		<figcaption>
      			웹 접근성 체크리스트
      		</figcaption>
      	</figure>
      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y}/kwcag_all_checklist_mo.png`} alt="웹 접근성 체크리스트" />
      		<figcaption>
      			웹 접근성 체크리스트
      		</figcaption>
      	</figure>
      </section>

      <footer className="reference_box">
      	<strong className="tit">운용의 용이성 | 접근성 체크리스트(웹 콘텐츠 접근성) - 웹 콘텐츠 접근성 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG10/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 1.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG20/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.1</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.2</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/2021/WD-wcag-3.0-20210121/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 3.0 Draft</a></li>
      		<li className="reference"><a href="http://www.kwacc.or.kr/WAI/wcag21/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.1 한국어</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Web Content Accessibility Guidelines (WCAG) 2.2</a></li>
      		<li className="reference"><a href="https://www.w3.org/WAI/standards-guidelines/ko#wcag2" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG2 ko</a></li>
      		<li className="reference"><a href="https://www.w3.org/WAI/about/groups/agwg/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Accessibility Guidelines Working Group</a></li>
      		<li className="reference"><a href="https://www.w3.org/WAI/WCAG21/Techniques/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Techniques for WCAG 2.1</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C 접근성의 4가지 원칙</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/Accessibility/Understanding_WCAG" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN 웹 콘텐츠 접근성 지침 이해하기</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Learn/Accessibility/What_is_accessibility#accessibility_guidelines_and_the_law" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN 접근성이란?</a></li>
      		<li className="reference"><a href="https://nuli.navercorp.com/community/article/1133181" target="_blank" rel="noreferrer" title="새창 열림" className="fas">NULI WCAG 2.2에서 변경된 사항</a></li>
      		<li className="reference"><a href="https://brunch.co.kr/@snclab/55" target="_blank" rel="noreferrer" title="새창 열림" className="fas">brunch WCAG 2.2 작업 초안</a></li>
      		<li className="reference"><a href="https://a11y.gitbook.io/wcag/international-standards" target="_blank" rel="noreferrer" title="새창 열림" className="fas">GITBOOK WCAG 2.1</a></li>
      		<li className="reference"><a href="https://iyu88.github.io//a11y/2023/12/24/web-accessibility-1.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">WAI 문서로 접근성 이해하기</a></li>
      		<li className="reference"><a href="https://www.deque.com/blog/wcag-2-1-what-is-next-for-accessibility-guidelines/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">deque blog WCAG 2.1</a></li>
      		<li className="reference"><a href="https://seculayerlab.tistory.com/m/48" target="_blank" rel="noreferrer" title="새창 열림" className="fas">웹접근성 국가표준 개정 소개</a></li>
      		<li className="reference"><a href="https://www.samsungfashion.com/webacc.do" target="_blank" rel="noreferrer" title="새창 열림" className="fas">한국형 웹 콘텐츠 접근성 지침 2.2</a></li>
      		<li className="reference"><a href="https://aoa.gitbook.io/skymimo/undefined" target="_blank" rel="noreferrer" title="새창 열림" className="fas">AOA GITBOOK</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default CheckWcagOperablePage
