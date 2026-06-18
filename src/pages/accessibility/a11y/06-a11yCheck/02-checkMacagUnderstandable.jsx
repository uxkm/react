import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
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
  title: "이해의 용이성 | 접근성 체크리스트(모바일 앱 접근성)",
  description: "모바일 앱 접근성 체크리스트는 다양한 사용자들이 모바일 앱 콘텐츠를 문제 없이 이용할 수 있도록 보장하기 위해 설계된 필수 항목들을 제공합니다. 이 페이지에서는 모바일 앱 접근성 체크리스트의 이해의 용이성(Understandable)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성",
}

function CheckMacagUnderstandablePage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		모바일 애플리케이션 콘텐츠를 구축, 운영, 개선 및 유지 보수할 경우에 적용하는 것으로 모바일 전화기,
      		태블릿기기 등 모바일 기기에서 실행되는 모든 애플리케이션 및 콘텐츠를
      		WCAG 2.0(Web Content Accessibility Guidelines 2.0)에서 제시하고 있는 접근성 설계의 4가지 원칙 기준으로,
      		<b>모바일 애플리케이션 콘텐츠의 설계 및 개발을 위한 지침을 제시하고 있습니다.</b>
      	</p>
      </blockquote>










      	<link href="/a11yStart.min.css" rel="stylesheet" />
      	<link href="/checkWcag.min.css" rel="stylesheet" />



      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">기본 언어 표시 [신규]</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">주로 사용하는 언어를 명시해야 합니다.</b><br />
      				기본 언어가 지정되어야 스크린 리더가 문장을 올바른 발음과 규칙으로 처리할 수 있습니다.
      			</p>
      			<p className="reference mt_ms">WCAG 2.2 Guidelines : <a href="https://www.w3.org/TR/WCAG22/#language-of-page" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.1.1 Language of Page</a></p>
      		</blockquote>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>
      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      				
      <CodeBlock title="기본 언어 표시 - 하이브리드 예시" language="html" className="uk_gist_code_box mt_ms">
      {`<html lang="ko">
      						<body>...</body>
      						</html>`}
      </CodeBlock>

      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn">Vue 예시</h4>
      				
      <CodeBlock title="기본 언어 표시 - Vue 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<template>
      							<div lang="ko">...</div>
      						</template>`}
      </CodeBlock>

      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn">React 예시</h4>
      				
      <CodeBlock title="기본 언어 표시 - React 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<div lang="ko">...</div>`}
      </CodeBlock>

      			</div>
      		</article>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>문서/화면 기본 언어가 코드 수준에서 명시되어 있는가?</li>
      				<li>주요 화면(로그인, 입력, 결과)에서 언어 설정 누락이 없는가?</li>
      			</ul>
      		</article>
      	</section>
      	
      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">부분 언어 표시 [신규]</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">기본 언어와 다른 언어 구간은 해당 언어를 별도로 명시해야 합니다.</b><br />
      				외국어 단어, 인용문, 혼합 언어 구간은 언어 속성으로 구분해야 오독을 줄일 수 있습니다.
      			</p>
      			<p className="reference mt_ms">WCAG 2.2 Guidelines : <a href="https://www.w3.org/TR/WCAG22/#language-of-parts" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.1.2 Language of Parts</a></p>
      		</blockquote>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>
      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      				
      <CodeBlock title="부분 언어 표시 - 하이브리드 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<p>제품명은 <span lang="en">Smart Home Hub</span> 입니다.</p>`}
      </CodeBlock>

      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn">Vue 예시</h4>
      				
      <CodeBlock title="부분 언어 표시 - Vue 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<template>
      							<p>제품명은 <span lang="en">Smart Home Hub</span> 입니다.</p>
      						</template>`}
      </CodeBlock>

      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn">React 예시</h4>
      				
      <CodeBlock title="부분 언어 표시 - React 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<p>제품명은 <span lang="en">Smart Home Hub</span> 입니다.</p>`}
      </CodeBlock>

      			</div>
      		</article>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>외국어 문장/용어에 언어 속성(<code>lang</code> 등)을 적용했는가?</li>
      				<li>다국어 전환 시 보조기술이 언어 변화를 정확히 인식하는가?</li>
      			</ul>
      		</article>
      	</section>
      	
      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">사용자 요구에 따른 실행 [유지]</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">사용자가 의도하지 않은 기능은 자동적으로 실행되지 않아야 합니다.</b><br />
      				화면 전환·팝업·외부 앱 연결 등 맥락 변화가 있을 때는 사전 안내 또는 확인 절차를 제공해야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#on-focus" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.2.1 On Focus</a><br />
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#on-input" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.2.2 On Input</a>
      			</p>
      		</blockquote>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>
      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (JavaScript)</h4>
      				
      <CodeBlock title="사용자 요구에 따른 실행 - 하이브리드 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`select.addEventListener('change', () => {
      							showNotice('국가를 변경하면 배송비가 다시 계산됩니다.');
      						});`}
      </CodeBlock>

      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn">Vue 예시</h4>
      				
      <CodeBlock title="사용자 요구에 따른 실행 - Vue 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<select @change="notifyChange"></select>
      						<script>
      						export default {
      							methods: { notifyChange() { this.notice = '국가를 변경하면 배송비가 다시 계산됩니다.'; } }
      						}
      						</script>`}
      </CodeBlock>

      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn">React 예시</h4>
      				
      <CodeBlock title="사용자 요구에 따른 실행 - React 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<select onChange={() => setNotice('국가를 변경하면 배송비가 다시 계산됩니다.')}></select>`}
      </CodeBlock>

      			</div>
      		</article>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>선택/입력 즉시 페이지 이동, 제출, 외부 앱 실행이 자동 발생하지 않는가?</li>
      				<li>맥락 변화가 필요한 경우 사전 안내 또는 확인 절차를 제공하는가?</li>
      			</ul>
      		</article>
      	</section>
      	
      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">사용자 인터페이스 컴포넌트의 일관성 [강화]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">사용자 인터페이스 컴포넌트는 일관성 있게 제공해야 합니다.</b><br />
      				사용자 인터페이스(UI) 컴포넌트들이 일관성 있게 배치되면 사용자는 앱을 보다 쉽게 탐색하고 이해할 수 있습니다.<br />
      				일관성 있는 UI는 사용자가 각 요소의 위치와 동작을 예측할 수 있게 해주며, 특히 장애를 가진 사용자들에게 더욱 중요한 역할을 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#consistent-navigation" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.2.3 Consistent Navigation</a><br />
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#consistent-identification" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.2.4 Consistent Identification</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">사용자 경험 향상</strong>
      					<p>
      						일관성 있는 UI는 사용자가 앱을 더 쉽게 배우고 사용할 수 있도록 합니다. 반복적인 패턴은 사용자에게 익숙함을 주어 학습 곡선을 줄입니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">오류 감소</strong>
      					<p>
      						일관성 있는 배치는 사용자가 인터페이스의 작동 방식을 이해하기 쉽게 하여, 실수로 잘못된 요소를 누르거나 잘못된 동작을 수행하는 것을 줄입니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">접근성 보장</strong>
      					<p>
      						특히 인지 장애나 시각 장애를 가진 사용자들이 앱을 사용할 때, 일관된 레이아웃과 컴포넌트 배치는 중요한 접근성 요소가 됩니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black ">컴포넌트의 위치 일관성 유지</strong>
      					<p>
      						주요 UI 컴포넌트(예: 내비게이션 메뉴, 버튼, 입력 필드 등)는 앱 내 모든 화면에서 일관된 위치에 배치되어야 합니다.<br />
      						예를 들어, “뒤로 가기” 버튼은 항상 화면의 왼쪽 상단에 위치해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">시각적 디자인 일관성 유지</strong>
      					<ul className="dot_lst dot_lst_inner gap-column-sm">
      						<li>
      							버튼, 텍스트, 아이콘 등의 시각적 스타일(예: 색상, 폰트, 크기)을 일관되게 사용하여 사용자에게 일관된 시각적 경험을 제공합니다.
      						</li>
      						<li>
      							텍스트 필드는 모든 화면에서 동일한 크기와 스타일을 사용하여 일관된 시각적 힌트를 제공합니다.
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong className="t_black ">동작 패턴 일관성 유지</strong>
      					<p>
      						특정 동작(예: 스와이프, 탭 등)에 대한 응답은 모든 화면에서 동일하게 처리되어야 합니다.<br />
      						예를 들어, 스와이프 제스처로 메뉴를 열거나 닫는 경우, 모든 화면에서 동일하게 작동하도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">내비게이션 구조의 일관성 유지</strong>
      					<p>
      						앱 내 모든 페이지와 기능은 일관된 내비게이션 구조를 따라야 합니다.
      						사용자는 언제든지 동일한 방식으로 원하는 페이지로 이동할 수 있어야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">네이티브 앱 예시(Android)</h4>
      				<p className="mt_s">
      					일관된 버튼 배치
      				</p>
      				
      <CodeBlock title="사용자 인터페이스 컴포넌트의 일관성 - 네이티브 앱 예시(Android)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<LinearLayout
      							android:layout_width="match_parent"
      							android:layout_height="wrap_content"
      							android:orientation="vertical"
      							android:padding="16dp">

      							<!-- 뒤로 가기 버튼: 모든 화면에서 왼쪽 상단에 일관되게 배치 -->
      							<Button
      								android:id="@+id/backButton"
      								android:layout_width="wrap_content"
      								android:layout_height="wrap_content"
      								android:text="뒤로 가기"
      								android:layout_gravity="start" />

      							<!-- 주요 작업 버튼: 항상 동일한 스타일과 위치 유지 -->
      							<Button
      								android:id="@+id/mainActionButton"
      								android:layout_width="match_parent"
      								android:layout_height="wrap_content"
      								android:text="저장"
      								android:layout_marginTop="16dp" />
      						</LinearLayout>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">네이티브(잘못된 / 올바른 예시)</h4>
      				
      <CodeBlock title="사용자 인터페이스 컴포넌트의 일관성 - 네이티브(잘못된 / 올바른 예시)" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 (네이티브) - 동일한 작업을 수행하는 버튼이 각 화면마다 다른 위치에 배치되거나 스타일이 일관되지 않음 -->
      						<LinearLayout
      							android:layout_width="match_parent"
      							android:layout_height="wrap_content"
      							android:orientation="vertical"
      							android:padding="16dp">

      							<!-- 동일한 기능을 하는 버튼이 다른 위치에 배치됨 -->
      							<Button
      								android:id="@+id/backButton"
      								android:layout_width="wrap_content"
      								android:layout_height="wrap_content"
      								android:text="뒤로 가기"
      								android:layout_gravity="end" />

      							<Button
      								android:id="@+id/saveButton"
      								android:layout_width="wrap_content"
      								android:layout_height="wrap_content"
      								android:text="저장"
      								android:layout_gravity="center" />
      						</LinearLayout>

      						<!-- 잘못된 예시 (네이티브) - 동일한 동작을 수행하는 버튼이 다른 페이지에서 서로 다른 색상과 크기로 제공됨 -->
      						<button style="padding: 12px; background-color: green;">저장</button>
      						<button style="padding: 20px; background-color: red;">저장</button>

      						<!-- 올바른 예시 (네이티브) - 동일한 기능을 수행하는 버튼이 모든 화면에서 일관된 위치에 배치되고, 일관된 스타일이 적용됨 -->
      						<LinearLayout
      							android:layout_width="match_parent"
      							android:layout_height="wrap_content"
      							android:orientation="vertical"
      							android:padding="16dp">

      							<Button
      								android:id="@+id/backButton"
      								android:layout_width="wrap_content"
      								android:layout_height="wrap_content"
      								android:text="뒤로 가기"
      								android:layout_gravity="start" />

      							<Button
      								android:id="@+id/saveButton"
      								android:layout_width="match_parent"
      								android:layout_height="wrap_content"
      								android:text="저장"
      								android:layout_marginTop="16dp" />
      						</LinearLayout>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/JavaScript)</h4>
      				<p className="mt_s">
      					일관된 내비게이션과 버튼 스타일
      				</p>
      				<div className="view_editor edit_code mt_ms">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.2.3.2.Consistent_Identification.html" className="uk_editor min_height_400 mb_result_height_350" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="400px" mbResultHeight="350px" />
      </Suspense>
      </div>
      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>모든 화면에서 주요 UI 컴포넌트(예: 내비게이션 바, 버튼 등)가 일관된 위치와 스타일로 배치되었는지 확인하였는가?</li>
      				<li>다양한 사용자가 앱을 사용하면서 일관성 있는 인터페이스로 인해 앱 사용이 쉬운지, 예상 가능한지 평가하였는가?</li>
      				<li>Google Accessibility Scanner와 같은 도구를 사용하여 UI 컴포넌트의 일관성이 접근성 기준을 충족하는지 점검하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	
      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">도움 정보 [신규]</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">도움 정보가 있다면 화면마다 동일한 순서로 접근할 수 있어야 합니다.</b><br />
      				FAQ, 고객센터, 문의 등 반복 제공되는 도움 경로는 일관된 위치와 명칭을 유지해야 합니다.
      			</p>
      			<p className="reference mt_ms">WCAG 2.2 Guidelines : <a href="https://www.w3.org/TR/WCAG22/#consistent-help" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.2.6 Consistent Help</a></p>
      		</blockquote>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>
      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      				
      <CodeBlock title="도움 정보 - 하이브리드 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<nav aria-label="도움 정보">
      							<a href="/help">도움말</a>
      							<a href="/faq">FAQ</a>
      							<a href="/contact">문의하기</a>
      						</nav>`}
      </CodeBlock>

      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn">Vue 예시</h4>
      				
      <CodeBlock title="도움 정보 - Vue 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<nav aria-label="도움 정보">
      							<RouterLink to="/help">도움말</RouterLink>
      							<RouterLink to="/faq">FAQ</RouterLink>
      							<RouterLink to="/contact">문의하기</RouterLink>
      						</nav>`}
      </CodeBlock>

      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn">React 예시</h4>
      				
      <CodeBlock title="도움 정보 - React 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<nav aria-label="도움 정보">
      							<Link to="/help">도움말</Link>
      							<Link to="/faq">FAQ</Link>
      							<Link to="/contact">문의하기</Link>
      						</nav>`}
      </CodeBlock>

      			</div>
      		</article>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>고객센터/FAQ/문의하기가 화면마다 같은 위치와 같은 명칭으로 제공되는가?</li>
      				<li>키보드/보조기술 사용 시에도 도움 정보에 일관되게 도달 가능한가?</li>
      			</ul>
      		</article>
      	</section>
      	
      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">오류 정정 [분리]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">입력 오류를 정정할 수 있는 방법을 제공해야 합니다.</b><br />
      				입력 서식을 이용할 때 사용자가 잘못된 정보를 입력하지 않도록 도와주는 방법을 제공하거나, 오류 발생 시 이를 쉽게 정정할 수 있도록 안내해야 합니다.
      				이러한 기능은 사용자들이 올바른 데이터를 입력하도록 유도하며, 특히 인지 장애가 있는 사용자들에게 매우 중요합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#error-identification" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.3.1 Error Identification</a><br />
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#error-suggestion" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.3.3 Error Suggestion</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">사용자 편의성</strong>
      					<p>
      						입력 과정에서 발생할 수 있는 오류를 최소화하여 사용자의 부담을 줄입니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">오류 방지</strong>
      					<p>
      						사용자가 입력해야 하는 형식에 대한 명확한 지침을 제공함으로써 오류 발생을 줄일 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">오류 정정 지원</strong>
      					<p>
      						오류가 발생했을 때 사용자가 쉽게 수정할 수 있도록 피드백과 도움을 제공합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">접근성 보장</strong>
      					<p>
      						특히 인지 장애나 시각 장애가 있는 사용자들이 입력 오류를 쉽게 식별하고 수정할 수 있도록 돕습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black ">명확한 입력 지침 제공</strong>
      					<ul className="dot_lst dot_lst_inner gap-column-sm">
      						<li>
      							입력 서식의 각 필드에 대해 사용자가 기대되는 입력 형식을 명확히 안내합니다(예: 전화번호 형식, 이메일 형식).
      						</li>
      						<li>
      							입력 필드에 힌트(placeholder)나 레이블(label)을 사용하여 입력 형식을 설명합니다.
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong className="t_black ">실시간 입력 검증</strong>
      					<p>
      						사용자가 입력하는 동안 실시간으로 오류를 검증하고, 문제가 있을 경우 즉시 피드백을 제공합니다(예: 이메일 주소 형식 오류).
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">오류 발생 시 시각적 피드백 제공</strong>
      					<p>
      						오류가 발생한 필드를 시각적으로 강조(예: 빨간색 테두리)하고, 오류 메시지를 명확하게 표시하여 무엇이 잘못되었는지 설명합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">오류 수정 가이드 제공</strong>
      					<p>
      						오류 메시지에 오류 수정 방법을 포함시켜 사용자가 쉽게 문제를 해결할 수 있도록 제공합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">네이티브 앱 예시(Android)</h4>
      				<p className="mt_s">
      					실시간 입력 검증과 오류 피드백
      				</p>
      				
      <CodeBlock title="오류 정정 - 네이티브 앱 예시(Android)" language="javascript" className="uk_gist_code_box mt_ms">
      {`// xml code
      						<EditText
      							android:id="@+id/emailInput"
      							android:layout_width="match_parent"
      							android:layout_height="wrap_content"
      							android:hint="이메일 입력"
      							android:inputType="textEmailAddress" />

      						<TextView
      							android:id="@+id/emailError"
      							android:layout_width="match_parent"
      							android:layout_height="wrap_content"
      							android:text="올바른 이메일 주소를 입력하세요."
      							android:textColor="#FF0000"
      							android:visibility="gone" />

      						// java code
      						EditText emailInput = findViewById(R.id.emailInput);
      						TextView emailError = findViewById(R.id.emailError);

      						emailInput.addTextChangedListener(new TextWatcher() {
      							@Override
      							public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

      							@Override
      							public void onTextChanged(CharSequence s, int start, int before, int count) {
      								if (!Patterns.EMAIL_ADDRESS.matcher(s).matches()) {
      									emailError.setVisibility(View.VISIBLE);
      								} else {
      									emailError.setVisibility(View.GONE);
      								}
      							}

      							@Override
      							public void afterTextChanged(Editable s) {}
      						});`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">네이티브(잘못된 / 올바른 예시)</h4>
      				
      <CodeBlock title="오류 정정 - 네이티브(잘못된 / 올바른 예시)" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 (네이티브) - 이메일 형식이 잘못되었을 때 아무런 피드백을 제공하지 않음 -->
      						<EditText
      							android:id="@+id/emailInput"
      							android:layout_width="match_parent"
      							android:layout_height="wrap_content"
      							android:hint="이메일 입력" />

      						<!-- 잘못된 예시 (네이티브) - 사용자가 입력한 내용이 잘못되었을 때에도 명확한 오류 메시지를 제공하지 않음 -->
      						<input type="email" id="emailInput" placeholder="example@domain.com">

      						<!-- 올바른 예시 (네이티브) - 실시간으로 이메일 형식을 검증하고, 오류 시 사용자에게 명확한 피드백을 제공 -->
      						<EditText
      							android:id="@+id/emailInput"
      							android:layout_width="match_parent"
      							android:layout_height="wrap_content"
      							android:hint="이메일 입력"
      							android:inputType="textEmailAddress" />

      						<TextView
      							android:id="@+id/emailError"
      							android:layout_width="match_parent"
      							android:layout_height="wrap_content"
      							android:text="올바른 이메일 주소를 입력하세요."
      							android:textColor="#FF0000"
      							android:visibility="gone" />`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/JavaScript)</h4>
      				<p className="mt_s">
      					실시간 입력 검증과 오류 피드백
      				</p>
      				<div className="view_editor edit_code mt_ms">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.2.3.1.Error_Identification.html" className="uk_editor min_height_300 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="200px" />
      </Suspense>
      </div>
      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>모든 입력 필드에 대해 실시간 검증과 오류 피드백이 제대로 작동하는지 확인하였는가?</li>
      				<li>오류 메시지가 명확하고 사용자가 쉽게 이해할 수 있는지 검토하였는가?</li>
      				<li>실제 사용자들이 입력 과정에서 발생한 오류를 쉽게 식별하고 수정할 수 있는지 테스트하였는가?</li>
      				<li>Google Accessibility Scanner와 같은 도구를 사용하여 입력 필드와 오류 메시지가 접근성 기준을 충족하는지 점검하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	
      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">레이블 [분리]</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">사용자 입력 항목에는 대응하는 레이블을 제공해야 합니다.</b><br />
      				레이블은 입력 항목의 목적을 명확히 알려 주며, 보조기술이 항목 정보를 정확히 읽을 수 있도록 연결되어야 합니다.
      			</p>
      			<p className="reference mt_ms">WCAG 2.2 Guidelines : <a href="https://www.w3.org/TR/WCAG22/#labels-or-instructions" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.3.2 Labels or Instructions</a></p>
      		</blockquote>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>
      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      				
      <CodeBlock title="레이블 - 하이브리드 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<label for="email">이메일</label>
      						<input id="email" type="email" autocomplete="email" />`}
      </CodeBlock>

      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn">Vue 예시</h4>
      				
      <CodeBlock title="레이블 - Vue 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<template>
      							<label for="email">이메일</label>
      							<input id="email" v-model="email" type="email" autocomplete="email" />
      						</template>`}
      </CodeBlock>

      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn">React 예시</h4>
      				
      <CodeBlock title="레이블 - React 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<label htmlFor="email">이메일</label>
      						<input id="email" type="email" autoComplete="email" />`}
      </CodeBlock>

      			</div>
      		</article>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>모든 입력 필드에 시각적 레이블이 제공되고, 플레이스홀더만으로 대체하지 않았는가?</li>
      				<li><code>label for</code>, <code>aria-label</code>, 네이티브 접근성 라벨 등으로 보조기술 연결을 제공했는가?</li>
      			</ul>
      		</article>
      	</section>
      	
      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">오류 방지 [신규]</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">중요한 제출은 실수로 완료되지 않도록 확인·취소·수정 수단을 제공해야 합니다.</b><br />
      				법률, 금융, 개인정보 등 영향이 큰 작업은 사전 확인 또는 제출 후 되돌리기 기능이 필요합니다.
      			</p>
      			<p className="reference mt_ms">WCAG 2.2 Guidelines : <a href="https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.3.4 Error Prevention (Legal, Financial, Data)</a></p>
      		</blockquote>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>
      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/JavaScript)</h4>
      				
      <CodeBlock title="오류 방지 - 하이브리드 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button id="submit">전송</button>
      						<script>
      							document.getElementById('submit').addEventListener('click', () => {
      								if (confirm('제출하시겠습니까?')) submitForm();
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn">Vue 예시</h4>
      				
      <CodeBlock title="오류 방지 - Vue 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button @click="confirmSubmit">전송</button>
      						<script>
      						export default {
      							methods: {
      								confirmSubmit() { if (confirm('제출하시겠습니까?')) this.submitForm(); }
      							}
      						}
      						</script>`}
      </CodeBlock>

      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn">React 예시</h4>
      				
      <CodeBlock title="오류 방지 - React 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button onClick={() => window.confirm('제출하시겠습니까?') && submitForm()}>
      							전송
      						</button>`}
      </CodeBlock>

      			</div>
      		</article>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>결제·삭제·전송 등 중요 작업에 확인 단계가 제공되는가?</li>
      				<li>사용자가 취소, 수정, 되돌리기 중 하나 이상을 수행할 수 있는가?</li>
      			</ul>
      		</article>
      	</section>
      	
      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">반복 입력 정보 [신규]</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">같은 정보를 불필요하게 반복 입력하지 않도록 해야 합니다.</b><br />
      				자동완성, 이전 값 불러오기, 복사 기능 등으로 입력 부담을 줄여야 합니다.
      			</p>
      			<p className="reference mt_ms">WCAG 2.2 Guidelines : <a href="https://www.w3.org/TR/WCAG22/#redundant-entry" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.3.7 Redundant Entry</a></p>
      		</blockquote>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>
      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      				
      <CodeBlock title="반복 입력 정보 - 하이브리드 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<input name="billingAddress" autocomplete="street-address" />
      						<label><input type="checkbox" id="sameAsBilling" /> 배송지 동일</label>`}
      </CodeBlock>

      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn">Vue 예시</h4>
      				
      <CodeBlock title="반복 입력 정보 - Vue 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<input v-model="billingAddress" autocomplete="street-address" />
      						<label><input type="checkbox" v-model="sameAsBilling" /> 배송지 동일</label>
      						<input :value="sameAsBilling ? billingAddress : shippingAddress" />`}
      </CodeBlock>

      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn">React 예시</h4>
      				
      <CodeBlock title="반복 입력 정보 - React 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`const [sameAsBilling, setSameAsBilling] = useState(false);
      						<input autoComplete="street-address" />
      						<input value={sameAsBilling ? billingAddress : shippingAddress} readOnly />`}
      </CodeBlock>

      			</div>
      		</article>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>동일 사용자 정보(이름, 연락처, 주소 등)를 재입력하지 않아도 되는가?</li>
      				<li>자동완성/기존 값 선택/복사 등 대체 입력 수단이 제공되는가?</li>
      			</ul>
      		</article>
      	</section>
      	
      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">접근 가능한 인증 [신규]</h2>
      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">인증 과정은 인지 시험에만 의존하지 않아야 합니다.</b><br />
      				패스키, 생체인증, 일회용 링크 등 대체 인증 수단을 제공해 다양한 사용자가 인증할 수 있어야 합니다.
      			</p>
      			<p className="reference mt_ms">WCAG 2.2 Guidelines : <a href="https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.3.8 Accessible Authentication (Minimum)</a></p>
      		</blockquote>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>
      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      				
      <CodeBlock title="접근 가능한 인증 - 하이브리드 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button type="button">패스키로 로그인</button>
      						<button type="button">일회용 링크 받기</button>`}
      </CodeBlock>

      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn">Vue 예시</h4>
      				
      <CodeBlock title="접근 가능한 인증 - Vue 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button @click="signInWithPasskey">패스키로 로그인</button>
      						<button @click="sendMagicLink">일회용 링크 받기</button>`}
      </CodeBlock>

      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn">React 예시</h4>
      				
      <CodeBlock title="접근 가능한 인증 - React 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button onClick={signInWithPasskey}>패스키로 로그인</button>
      						<button onClick={sendMagicLink}>일회용 링크 받기</button>`}
      </CodeBlock>

      			</div>
      		</article>
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>기억·암기·퍼즐 해석 등 인지 부담이 큰 방식 외의 인증 수단이 있는가?</li>
      				<li>보조기술 사용자도 인증을 완료할 수 있도록 포커스/읽기 순서/안내가 적절한가?</li>
      			</ul>
      		</article>
      	</section>
      	



      <hr />

      <section className="mt_xxl">
      	<h2 data-icon="pen">모바일 앱 접근성 요약 보고서</h2>
      	<p className="mt_ml indent">
      		모바일 앱 접근성 요약 보고서 예시로, 체크박스의 체크 여부가 저장되지 않습니다.
      	</p>
      	<div className="mt_m indent">
      		<div className="checkWcag_table">
      			<ul className="head">
      				<li className="guide" data-tit="검사항목(41개)">검사항목(41개)</li>
      				<li className="items">
      					<div className="item">
      						<p className="text">검사항목(41개)</p>
      						<p className="check">준수 여부</p>
      					</div>
      				</li>
      			</ul>
      			<div className="body">
      				<ul>
      					<li className="guide">
      						1. 텍스트 아닌 콘텐츠 [유지]<br />
      						(KS X 3253:2016 대체텍스트)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						2. 자막 또는 수어 [강화]<br />
      						(KS X 3253:2016 자막, 수화 등의 제공)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">멀티미디어 콘텐츠는 자막 또는 수어를 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						3. 화면해설 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">멀티미디어 콘텐츠에서 음성 정보가 없는 시각 정보는 인식할 수 있도록 화면해설을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						4. 표의 구성 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">표는 이해하기 쉽게 구성해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						5. 콘텐츠의 선형구조 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 논리적인 순서로 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6. 다양한 감각 지원 [통합]<br />
      						(KS X 3253:2016 명확한 지시사항)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">지시사항이나 알림정보 등은 모양, 크기, 위치, 방향, 색, 소리 등에 관계없이 다양한 감각으로 인식할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						7. 방향 설정 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 특정 화면 방향으로만 고정하지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						8. 입력 목적 식별 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">입력 서식의 목적은 식별할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						9. 색에 무관한 콘텐츠 [유지]<br />
      						(KS X 3253:2016 색에 무관한 인식)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 색에 관계없이 인식할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						10. 소리 자동 재생 [유지]<br />
      						(KS X 3253:2016 자동재생 금지)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">소리는 자동으로 재생되지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						11. 콘텐츠의 명도대비 [강화]<br />
      						(KS X 3253:2016 명도대비)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠와 배경 간의 명도는 충분하게 대비되도록 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						12. 콘텐츠 간의 구분 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">이웃한 콘텐츠는 시각적으로 구별할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						13. 텍스트 크기 조정 [강화]<br />
      						(KS X 3253:2016 폰트기능의 활용)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트는 내용이나 기능의 손실 없이 200%까지 크기 조정이 가능해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						14. 이미지 텍스트 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트는 이미지로 제공하지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						15. 리플로우 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 화면 크기에 따라 손실 없이 표시되어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						16. 텍스트 간격 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트는 내용과 기능의 손실 없이 간격을 조정할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						17. 초점 이동과 표시 [유지]<br />
      						(KS X 3253:2016 초점)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">의미나 기능을 갖는 모든 콘텐츠 요소는 초점이 적용되고, 초점은 논리적인 순서로 이동해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						18. 조작 가능한 크기 [현행화]<br />
      						(KS X 3253:2016 컨트롤의 크기와 간격)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자 입력 및 컨트롤은 조작 가능한 충분한 크기로 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						19. 단일 문자 단축키 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">단일 문자 단축키는 오동작으로 인한 오류를 방지해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						20. 응답시간 조절 [유지]<br />
      						(KS X 3253:2016 응답 시간 조절)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">시간제한이 있는 콘텐츠는 응답시간을 조절할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						21. 움직임 제어 [유지]<br />
      						(KS X 3253:2016 정지 기능 제공)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						22. 깜빡임과 번쩍임 [유지]<br />
      						(KS X 3253:2016 깜박거림의 사용 제한)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">초당 3~50회 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공하지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						23. 제목 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠 블록에는 적절한 제목을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						24. 링크 텍스트 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">링크 텍스트는 용도나 목적을 이해할 수 있도록 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						25. 다양한 탐색 방법 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 다양한 방법으로 탐색할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						26. 단일 포인터 입력 [유지]<br />
      						(KS X 3253:2016 누르기 동작 지원)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">다중 포인트 동작 또는 경로기반 동작을 통한 입력은 단일 포인터 입력으로도 조작할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						27. 포인터 입력 취소 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">단일 포인터 입력으로 실행되는 기능은 취소할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						28. 네임 안의 레이블 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트 또는 텍스트 이미지가 포함된 레이블이 있는 사용자 인터페이스 구성요소는 네임에 시각적으로 표시되는 해당 텍스트를 포함해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						29. 동작기반 작동 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">동작기반으로 작동하는 기능은 사용자 인터페이스 구성요소로 조작할 수 있고, 동작기반 기능을 비활성화할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						30. 기본 언어 표시 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">주로 사용하는 언어는 명시해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						31. 부분 언어 표시 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">기본 언어와 구별되는 다른 언어는 해당 언어를 명시해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						32. 사용자 요구에 따른 실행 [유지]<br />
      						(KS X 3253:2016 예측가능성)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자가 의도하지 않은 기능은 자동적으로 실행되지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						33. 사용자 인터페이스 컴포넌트의 일관성 [강화]<br />
      						(KS X 3253:2016 사용자 인터페이스의 일관성)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자 인터페이스 컴포넌트는 일관성 있게 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						34. 도움 정보 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">도움 정보가 제공되는 경우, 각 페이지에 동일한 순서로 접근할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						35. 오류 정정 [분리]<br />
      						(KS X 3253:2016 입력도움)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">입력 오류를 정정할 수 있는 방법을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						36. 레이블 [분리]<br />
      						(KS X 3253:2016 입력도움)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자 입력에는 대응하는 레이블을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						37. 오류 방지 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">중요한 정보가 제출되기 전 되돌리기 어려운 오류를 방지할 수 있는 수단을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						38. 반복 입력 정보 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">동일한 정보를 반복하여 입력하지 않도록 해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						39. 접근 가능한 인증 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">인증 과정은 인지 기능 테스트에만 의존해서는 안 된다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						40. 사용자 인터페이스 컴포넌트 [강화]<br />
      						(KS X 3253:2016 보조기술과의 호환성)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자 인터페이스 컴포넌트는 보조기술을 이용하여 사용할 수 있도록 해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						41. 상태 메시지 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">중요한 상태 메시지는 보조기술 사용자에게도 전달되어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				
      			</div>
      		</div>
      	</div>
      </section>

      <footer className="reference_box">
      	<strong className="tit">이해의 용이성 | 접근성 체크리스트(모바일 앱 접근성) - 모바일 앱 접근성 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/WAI/standards-guidelines/mobile/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility at W3C</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/mobile-accessibility-mapping/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility: How WCAG 2.0 and Other W3C/WAI Guidelines Apply to Mobile</a></li>
      		<li className="reference"><a href="https://www.w3.org/news/2015/first-public-working-draft-performance-timeline-level-2/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C First Public Working Draft</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/UAAG20/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C User Agent Accessibility Guidelines (UAAG) 2.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/IMPLEMENTING-UAAG20/mobile.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility Examples from UAAG 2.0 Reference</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Mobile_accessibility_checklist" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN Mobile accessibility checklist</a></li>
      		<li className="reference"><a href="https://blog.naver.com/prologue/PrologueList.naver?blogId=mohw2016" target="_blank" rel="noreferrer" title="새창 열림" className="fas">보건복지부 블로그</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default CheckMacagUnderstandablePage
