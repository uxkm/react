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
  title: "인식의 용이성 | 접근성 체크리스트(웹 콘텐츠 접근성)",
  description: "웹 콘텐츠 접근성 체크리스트는 다양한 사용자들이 웹 콘텐츠를 문제 없이 이용할 수 있도록 보장하기 위해 설계된 필수 항목들을 제공합니다. 이 페이지에서는 웹 콘텐츠 접근성 체크리스트의 인식의 용이성(Perceivable)에 대해 소개합니다.'",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function CheckWcagPerceivablePage() {
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
      		<h2 className="ml_mn" data-conlist="false">적절한 대체 텍스트 제공</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 합니다.</b><br />
      				시각 장애인 사용자가 스크린 리더를 통해 이미지의 내용을 이해할 수 있도록 모든 이미지에는 대체 텍스트를 제공하여야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#text-alternatives" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.1 Text Alternatives</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">예시 이미지</h3>
      			<p className="mt_ml">
      				<img src="/_assets/images/created_by02.jpg" alt="마이크 앞에서 노래를 부르는 아이" className="max-w600" />
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">예시 코드</h3>
      			
      <CodeBlock title="적절한 대체 텍스트 제공 예시 코드" language="javascript" className="uk_gist_code_box mt_ml">
      {`<img src="image.jpg" alt="마이크 앞에서 노래를 부르는 아이">`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>이미지가 적절한 대체 텍스트를 포함하고 있는가?</li>
      				<li>스크린 리더로 테스트하여 텍스트가 올바르게 읽히는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">자막 제공</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">멀티미디어 콘텐츠에는 자막, 대본 또는 수어를 제공해야 합니다.</b><br />
      				동영상 및 오디오 콘텐츠에는 자막, 대체 텍스트, 오디오 설명, 수어 등을 제공해야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#time-based-media" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.2 Time-based Media</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">예시 비디오</h3>
      			<div className="mt_ml max-w600">
      				<div className="youtube_box" style={{ '--padding-top': "56.25%" }}>
      					<video src="https://www.w3.org/WAI/content-assets/wcag-act-rules/test-assets/perspective-video/perspective-video.mp4" controls>
      						<track src="https://www.w3.org/WAI/content-assets/wcag-act-rules/test-assets/perspective-video/perspective-caption.vtt" kind="captions" />
      					</video>
      				</div>
      			</div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">예시 코드 1</h3>
      			<p className="mt_ms">
      				캡션이 있는 비디오.
      			</p>
      			
      <CodeBlock title="자막 제공 - 예시 코드 1" language="javascript" className="uk_gist_code_box mt_m">
      {`<video src="perspective-video-with-captions.mp4" controls></video>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">예시 코드 2</h3>
      			<p className="mt_ms">
      				캡션을 포함 track 요소가 연결되어 있는 비디오.
      			</p>
      			
      <CodeBlock title="자막 제공 - 예시 코드 2" language="javascript" className="uk_gist_code_box mt_m">
      {`<video src="perspective-video.mp4" controls>
      						<track src="perspective-caption.vtt" kind="captions" />
      					</video>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>비디오 플레이어에서 자막이 정상적으로 표시되는가?</li>
      				<li>오디오 설명이 포함된 경우 자막, 대본 또는 수어를 제공하는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">표의 구성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">표는 이해하기 쉽게 구성해야 합니다.</b><br />
      				표는 데이터를 체계적으로 정리하고, 쉽게 이해할 수 있도록 구성해야 합니다.
      			</p>
      			<p className="reference mt_ml">
      				<a href="https://www.w3.org/WAI/tutorials/tables/" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C Accessible Tables</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				caption 미제공, scope속성 미제공, aria-* 속성 미제공
      			</p>
      			
      <CodeBlock title="표의 구성 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      						<thead>
      							<tr>
      								<th>제품명</th>
      								<th>가격</th>
      								<th>수량</th>
      								<th>총 가격</th>
      							</tr>
      						</thead>
      						<tbody>
      							<tr>
      								<td>사과</td>
      								<td>1000원</td>
      								<td>5</td>
      								<td>5000원</td>
      							</tr>
      							... 중략
      						</tbody>
      					</table>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				caption제공, scope속성 제공, aria-* 속성 연결
      			</p>
      			
      <CodeBlock title="표의 구성 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<table aria-describedby="tableDescription">
      						<caption id="tableDescription">다양한 제품의 가격, 수량 및 총 가격을 나타내는 표입니다.</caption>
      						<thead>
      							<tr>
      								<th scope="col">제품명</th>
      								<th scope="col">가격</th>
      								<th scope="col">수량</th>
      								<th scope="col">총 가격</th>
      							</tr>
      						</thead>
      						<tbody>
      							<tr>
      								<td>사과</td>
      								<td>1000원</td>
      								<td>5</td>
      								<td>5000원</td>
      							</tr>
      							... 중략
      						</tbody>
      					</table>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>제목이 표의 내용을 잘 설명하고 있는지 확인하였는가?</li>
      				<li>표의 헤더 셀과 테이터 셀의 관계(scope 속성) 정의가 되어있는가?</li>
      				<li>캡션과 ARIA 속성이 적절하게 사용되었는지 확인하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">콘텐츠의 선형구조</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">콘텐츠는 논리적인 순서로 제공해야 합니다.</b><br />
      				모든 사용자가 콘텐츠를 쉽게 탐색하고 이해할 수 있어야 하며, 논리적인 순서는 시각적으로나 코드 구조적으로나 일관되어야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#meaningful-sequence" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WCAG 2.2 - 1.3.2 Meaningful Sequence</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				&lt;h1&gt; 요소가 제목을 나타내기보다는 섹션 1과 섹션 2의 제목 사이에 위치해 있어 문서의 구조가 잘못되었습니다.
      			</p>
      			
      <CodeBlock title="콘텐츠의 선형구조 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>이 사이트는 다양한 정보를 제공합니다.</p>
      					<nav>
      						<a href="#section1">섹션 1</a>
      						<a href="#section2">섹션 2</a>
      					</nav>
      					<h2>섹션 1</h2>
      					<p>여기는 섹션 1의 내용입니다.</p>
      					<h1>사이트 제목</h1>
      					<h2>섹션 2</h2>
      					<p>여기는 섹션 2의 내용입니다.</p>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				콘텐츠가 논리적인 순서로 제공되어 있습니다.
      			</p>
      			
      <CodeBlock title="콘텐츠의 선형구조 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<h1>사이트 제목</h1>
      					<p>이 사이트는 다양한 정보를 제공합니다.</p>
      					<nav>
      						<a href="#section1">섹션 1</a>
      						<a href="#section2">섹션 2</a>
      					</nav>
      					<h2>섹션 1</h2>
      					<p>여기는 섹션 1의 내용입니다.</p>
      					<h2>섹션 2</h2>
      					<p>여기는 섹션 2의 내용입니다.</p>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>논리적인 순서로 배치되었는지 확인하였는가?</li>
      				<li>스크린 리더(센스리더, JAWS, NVDA 등) 테스트를 통하여 확인하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">명확한 지시사항 제공</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">지시사항은 모양, 크기, 위치, 방향, 색, 소리 등에 관계없이 인식될 수 있어야 합니다.</b><br />
      				웹 콘텐츠나 사용자 인터페이스를 설계할 때, 지시사항이나 안내는 특정 감각적 특성(모양, 크기, 위치, 방향, 색, 소리 등)에
      				의존하지 않고 명확히 전달되어야 합니다.<br />
      				즉, 색상에만 의존하여 정보를 전달하는 것이 아니라 텍스트나 다른 시각적 단서도 함께 제공해야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#sensory-characteristics" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WCAG 2.2 - 1.3.3 Sensory Characteristics</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				버튼에 색상만으로 기능을 설명하고 있어, 색맹 사용자가 버튼의 기능을 인식하기 어렵습니다.
      			</p>
      			
      <CodeBlock title="타이틀" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>녹색 버튼을 클릭하세요.</p>
      					<button style="background-color: green;">제출</button>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				버튼에 대한 텍스트 설명을 제공하여 색상에 의존하지 않고 버튼의 기능을 명확히 전달하고 있습니다.
      			</p>
      			
      <CodeBlock title="타이틀" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>제출 버튼을 클릭하세요.</p>
      					<button style="background-color: green;">제출</button>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>지시 사항이 색상, 위치, 모양 등에 의존하지 않고 텍스트로 명확하게 제공되는지 확인하였는가?</li>
      				<li>지시 사항이 색상이나 소리 이외에도 텍스트로 제공되었는지 확인하였는가?</li>
      				<li>지시 사항이 일관되게 사용되고 있는지, 모호한 부분이 없는지 검토하였는가?</li>
      				<li>Axe, WAVE 등의 접근성 검사 도구를 사용하여 지시 사항의 명확성을 점검하였는가?</li>
      				<li>다양한 사용자(시각, 청각, 인지 장애를 가진 사용자 포함)와 상황에서 지시 사항이 명확하게 이해되는지 테스트하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">색에 무관한 콘텐츠 인식</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">콘텐츠는 색에 관계없이 인식될 수 있어야 합니다.</b><br />
      				색상에 의존하는 정보 전달을 피해야 하며, 색상만으로는 정보를 전달하지 않도록 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#use-of-color" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.4.1 Use of Color</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				색상만으로 중요한 정보를 전달합니다.
      			</p>
      			
      <CodeBlock title="색에 무관한 콘텐츠 인식 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>이 문장에서 <span style="color: red;">빨간색 텍스트</strong>는 중요한 정보입니다.</p>`}
      </CodeBlock>

      			<p className="mt_m ex_a11y_text_red">
      				이 문장에서 <span style={{ color: "red" }}>빨간색 텍스트</span>는 중요한 정보입니다.
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				색상 외에 굵은 글씨체와 밑줄 사용하여 중요한 정보를 전달합니다.
      			</p>
      			
      <CodeBlock title="색에 무관한 콘텐츠 인식 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<p>이 문장에서 <strong style="color: red; font-weight: bold; text-decoration: underline;">중요한 정보</strong>가 포함되어 있습니다.</p>`}
      </CodeBlock>

      			<p className="mt_m ex_a11y_text_green">
      				이 문장에서 <strong style={{ color: "green", fontWeight: "bold", textDecoration: "underline" }}>중요한 정보</strong>가 포함되어 있습니다.
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>색상만으로 정보를 전달하지 않았는가?</li>
      				<li>흑백 모드나 명도 대비를 낮춘 상태에서 정보를 인식할 수 있는지 확인하였는가?</li>
      				<li>접근성 검사 도구(예: Axe, WAVE)를 사용하여 색 정보 사용 문제를 자동으로 검출하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">자동 재생 금지</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">자동으로 소리가 재생되지 않아야 합니다.</b><br />
      				웹 페이지에서 자동으로 소리(동영상, 오디오, 음성, 배경 음악 등 콘텐츠가 제공하는 모든 소리)가 재생됨으로 인해
      				화면낭독프로그램 사용자가 콘텐츠를 인식하고 사용하는 데 방해받지 않아야 합니다.<br />
      				단, 3초 미만의 소리는 허용하며, 3초 이상 재생되는 소리는 제어할 수 있는 수단(멈춤, 일시정지, 음량 조절 등)을 함께 제공해야 합니다.<br />
      				플랫폼은 콘텐츠가 제공하는 배경음의 음량을 조절하더라도 화면낭독프로그램의 음량에는 영향을 주지 않아야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#pause-stop-hide" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.2.2 Pause, Stop, Hide</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">예시 코드(자동 재생 금지)</h3>
      			
      <CodeBlock title="자동 재생 금지 - 예시 코드" language="javascript" className="uk_gist_code_box mt_m">
      {`<video id="myVideo" width="320" height="240" controls>
      						<source src="movie.mp4" type="video/mp4">
      						Your browser does not support the video tag.
      					</video>

      					<script>
      						document.addEventListener('DOMContentLoaded', (event) => {
      							const video = document.getElementById('myVideo');
      							video.autoplay = false;
      						});
      					</script>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>페이지에 포함된 모든 오디오 및 비디오 요소를 확인하였는가?</li>
      				<li>페이지가 로드될 때 오디오나 비디오가 자동으로 재생되지 않는지 확인하였는가?</li>
      				<li>코드를 검토하여 autoplay 속성이 ‘false’로 설정, 제거되었는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">텍스트 콘텐츠의 명도 대비</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">텍스트 콘텐츠와 배경 간의 명도대비는 4.5 대 1 이상이어야 합니다.</b><br />
      				페이지에서 보이는 텍스트 콘텐츠(텍스트 및 텍스트 이미지)와 배경 간의 충분한 대비를 제공하여, 저시력장애인, 색각장애인,
      				고령자 등도 콘텐츠를 인식할 수 있도록 제공해야 합니다.<br />
      				다만, 로고, 장식목적의 콘텐츠, 마우스나 키보드를 활용하여 초점을 받았을 때 명도 대비가 커지는 콘텐츠 등은 예외로 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#contrast-minimum" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.4.3 Contrast (Minimum)</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				명도 대비가 충분하지 않습니다.
      			</p>
      			
      <CodeBlock title="텍스트 콘텐츠의 명도 대비 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<style>
      						.low-contrast {
      							color: #777; /* 회색 텍스트 */
      							background-color: #eee; /* 연한 회색 배경 */
      						}
      					</style>
      					<div class="low-contrast">
      						명도 대비가 충분하지 않습니다.
      					</div>`}
      </CodeBlock>

      			<p className="mt_m ex_a11y_text_red" style={{ backgroundColor: "#eee", color: "#777" }}>
      				명도 대비가 충분하지 않습니다.
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				명도 대비가 충분합니다.
      			</p>
      			
      <CodeBlock title="텍스트 콘텐츠의 명도 대비 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<style>
      						.high-contrast {
      							color: #000; /* 검은색 텍스트 */
      							background-color: #fff; /* 흰색 배경 */
      						}
      					</style>
      					<div class="high-contrast">
      						명도 대비가 충분합니다.
      					</div>`}
      </CodeBlock>

      			<p className="mt_m ex_a11y_text_green" style={{ backgroundColor: "#fff", color: "#000" }}>
      				명도 대비가 충분합니다.
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-s">
      				<li>
      					<strong className="t_black">콘텐츠의 명도 대비</strong>
      					<p>
      						웹 페이지가 제공하는 텍스트 콘텐츠(텍스트 및 텍스트 이미지)와 배경 간의 명도 대비는 4.5:1 이상이어야 한다. 준수하였는가?
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">폰트 크기에 따른 명도 대비</strong>
      					<p>
      						텍스트 콘텐츠를 구성하고 있는 텍스트 폰트를 18pt 이상 또는 14pt 이상의 굵은 폰트를 사용하는 경우,
      						명도 대비를 3:1까지 낮출 수 있다. 준수하였는가?
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">화면 확대가 가능한 콘텐츠</strong>
      					<p>
      						화면 확대가 가능하도록 구현한 텍스트 콘텐츠(텍스트 및 텍스트 이미지)의 명도 대비는 3:1까지 낮출 수 있다. 준수하였는가?
      					</p>
      				</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">콘텐츠 간의 구분</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">이웃한 콘텐츠는 구별될 수 있어야 합니다.</b><br />
      				웹 페이지 내에서 서로 인접한 콘텐츠 블록들이 명확하게 구분되어 사용자가 쉽게 이해하고, 탐색하며, 상호작용할 수 있어야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#visual-presentation" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.4.8 Visual Presentation</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				이웃한 콘텐츠가 구별되지 않습니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.1.9.ex_code_false.html" className="uk_editor min_height_350 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="350px" mbResultHeight="200px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				충분한 간격과 각 콘텐츠에 테두리가 있어 이웃한 콘텐츠가 명확히 구분됩니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.1.9.ex_code_true.html" className="uk_editor min_height_400 mb_result_height_220" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="400px" mbResultHeight="220px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-s">
      				<li>
      					<strong className="t_black">시각적 구분 확인</strong>
      					<p>
      						콘텐츠 간에 충분한 여백, 구분선, 또는 배경색이 사용되어 이웃한 콘텐츠가 명확히 구별되는지 확인하였는가?
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">콘텐츠의 가독성 확인</strong>
      					<p>
      						텍스트와 배경의 대비가 충분하여 가독성이 높은지 확인였는가?
      					</p>
      				</li>
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
      	<strong className="tit">인식의 용이성 | 접근성 체크리스트(웹 콘텐츠 접근성) - 웹 콘텐츠 접근성 참조</strong>
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

export default CheckWcagPerceivablePage
