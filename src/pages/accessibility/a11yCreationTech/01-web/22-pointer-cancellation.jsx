import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import { toggleContent } from '@/utils/toggleContent.js'

const PAGE_LAYOUT = {
  mainClass: "pointer-cancellation",
  type: "accessibility",
  titleSticky: true,
  info: false,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: true,
  bottomEditor: false
}

const PAGE_DATA = {
  title: "포인터 입력 취소 | 웹 접근성 콘텐츠 제작 기법(\"운용의 용이성(Operable)\")",
  description: "웹 접근성 콘텐츠 제작 기법이란 장애 유무에 관계없이 모든 사용자가 웹 콘텐츠를 쉽게 이해하고 이용할 수 있도록 하는 설계하는 방법입니다. 이 페이지에서는 웹 접근성 콘텐츠 제작 기법 중 하나인 '포인터 입력 취소'에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성, 웹 접근성, 웹 접근성 콘텐츠 제작 기법, 한국형 웹 콘텐츠 접근성 지침 2.2, WCAG2.2, KWCAG2.2, 보조기술과의호환성, 접근성 테스트 도구 활용 점검방법, 스크린 리더, Jaws, NVDA, 센스리더, Sense Reader, 지체장애 사용자, 터치 스크린 사용자, 고령 사용자, 비장애 사용자",
}

function PointerCancellationPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>










      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_black">관련 지침 : 단일 포인터 입력으로 실행되는 기능은 취소할 수 있어야 한다.</b><br />
      			사용자가 실수로 잘못된 포인터 입력(클릭, 탭 등)을 했을 때,
      			<b>원치 않는 기능이 실행되지 않도록 하거나 실행 결과를 되돌릴 수 있는 기능을 제공해야 합니다.</b><br />
      			이는 특히 <b>손떨림이 있거나 정밀한 포인터 조작이 어려운 사용자를 지원</b>하기 위한 중요한 기능으로,
      			실수로 인해 발생할 수 있는 불편함을 줄이고 사용자가 의도하지 않은 행동을 쉽게 취소하거나 수정할 수 있도록 돕습니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 용어 설명</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>다운 이벤트 (Down Event)</strong>
      				<p>
      					포인터(마우스 버튼, 터치 등)를 눌러지는 순간 발생하는 이벤트는 &quot;다운 이벤트(Down Event)&quot;라고 합니다.
      					플랫폼에 따라 &quot;터치스타트(touchstart)&quot; 또는 &quot;마우스다운(mousedown)&quot;과 같은 다른 이름을 가질 수 있습니다.
      				</p>
      			</li>
      			<li>
      				<strong>업 이벤트 (Up Event)</strong>
      				<p>
      					포인터를 눌렀다가 떼는 순간 발생하는 이벤트입니다.
      					업 이벤트는 플랫폼에 따라 &quot;터치엔드(touchend)&quot; 또는 &quot;마우스업(mouseup)&quot;과 같은 다른 이름을 가질 수 있습니다.
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 WCAG 2.2 성공 기준</h2>

      		<p className="mt_l weight-600 t_blue">
      			단일 포인터 입력으로 실행되는 기능은 해당 입력이 실수로 실행되는 것을 방지하기 위하여,
      			다음 중 하나 이상을 준수해야 합니다.
      		</p>
      		<ul className="mt_ms dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>다운 이벤트만으로 실행 금지</strong>
      				<p>
      					기능은 다운 이벤트만으로 실행되지 않아야 합니다.
      				</p>
      			</li>
      			<li>
      				<strong>중지 또는 실행취소</strong>
      				<p>
      					기능은 업 이벤트에 완료되어야 하며, 실행 전에 중지시키거나 실행 후에 취소시킬 수 있어야 합니다.
      				</p>
      			</li>
      			<li>
      				<strong>되돌리기</strong>
      				<p>
      					다운 이벤트로 실행된 모든 기능은 업 이벤트로 되돌릴 수 있어야 합니다.
      				</p>
      			</li>
      			<li>
      				<strong>필수적인 경우</strong>
      				<p>
      					기능을 완료하는 데 다운 이벤트가 반드시 필요합니다.
      					기능을 완료하는 데 다운 이벤트가 필수적인 경우로는 화면 피아노 건반, 슈팅게임 등이 있습니다.
      				</p>
      			</li>
      		</ul>
      		<p className="mt_ml success_criteria">
      			<a href="https://www.w3.org/TR/WCAG22/#pointer-cancellation" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">2.5.2 Pointer Cancellation (Level A)</a>
      			<a href="https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">WAI - Understanding Pointer Cancellation</a>
      			<a href="https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">MDN - Pointer Events</a>
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">기대효과</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				사용자가 잘못된 입력임을 인식했을 때 동작을 취소하거나 실행 결과를 되돌릴 수 있습니다.
      			</li>
      			<li>
      				이렇게 함으로써 우발적으로 오동작을 일으킬 확률을 줄여줄 수 있습니다.
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">필요성</h2>

      		<p className="mt_l">
      			마우스나 터치 스크린을 사용하여 버튼이나 링크를 클릭하거나 선택할 때,
      			손떨림이 심하거나 정밀한 포인터 조작을 하기 어려운 사용자의 경우 (장애가 없는 사용자도)
      			의도하지 않은 요소를 눌러 잘못된 작업을 수행하게 될 수 있습니다.<br />
      			예를 들어, 복잡한 양식을 작성하던 중 실수로 “취소” 버튼을 눌러 모든 정보가 사라지거나,
      			온라인 쇼핑 중 의도치 않게 제품을 구매하게 되는 상황 등이 발생할 수 있습니다.
      			이는 사용자에게 불편함을 줄 수 있으며, 특히 장애가 있는 사용자에게는 더 큰 어려움이 될 수 있습니다.
      		</p>
      		<ul className="mt_ms dot_lst gap-column-important-sm">
      			<li>
      				손떨림, 실수, 조작 오류로 인해 원치 않는 기능이 실행되는 것을 방지
      			</li>
      			<li>
      				사용자에게 실행 전 확인 또는 중단 기회 제공
      			</li>
      			<li>
      				특히 터치 기반 환경에서 잘못된 입력으로 인한 정보 손실이나 결제를 방지
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">대상</h2>

      		<div className="table_summary value_200 mt_l">
      			<ul className="lst_hd">
      				<li className="cell value">사용자 유형</li>
      				<li className="cell content">이유</li>
      			</ul>
      			<ul className="lst_bd">
      				<li>
      					<p className="cell value">지체장애 사용자</p>
      					<p className="cell content">손의 불안정성으로 인해 실수로 클릭하는 경우 발생</p>
      				</li>
      				<li>
      					<p className="cell value">터치 스크린 사용자</p>
      					<p className="cell content">손가락 오작동, 손바닥 닿음 등</p>
      				</li>
      				<li>
      					<p className="cell value">고령 사용자</p>
      					<p className="cell content">조작 실수 후 복구 어려움</p>
      				</li>
      				<li>
      					<p className="cell value">비장애 사용자</p>
      					<p className="cell content">실수에 대한 복구 경험이 중요</p>
      				</li>
      			</ul>
      		</div>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">체크리스트</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				단일 클릭 또는 터치로 기능이 즉시 실행되는가?
      			</li>
      			<li>
      				실행되기 전에 <b>중단하거나 취소할 수 있는 단계</b>가 있는가?
      			</li>
      			<li>
      				드래그, 누르고 떼는 동작이 포함된 경우 <b>해제 시점에서 실행</b>되는가?
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">테스트 방법</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				클릭 또는 터치 후 기능 실행 여부를 확인합니다.
      			</li>
      			<li>
      				클릭 상태에서 포인터를 움직이거나 취소할 수 있는지 테스트 합니다.
      			</li>
      			<li>
      				버튼 누름과 동시에 즉시 실행되는 기능의 중단 가능성을 확인합니다.
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">QA 지표</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				단일 포인터 입력 후 실행 취소 가능 비율
      			</li>
      			<li>
      				잘못된 입력 발생률 및 취소 기능 존재 비율
      			</li>
      			<li>
      				사용자 실수 후 복구 성공률
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">개발방법</h2>

      		<article className="mt_l indent">
      			<h3 className="ml_mn t_blue">원치 않는 기능 실행 방지 및 실행 취소 지원 방법</h3>

      			<p className="mt_ms">
      				사용자가 원치 않는 기능의 작동을 방지하거나,
      				잘못된 입력임을 인식했을 때 실행 결과를 되돌릴 수 있도록 다음 중 하나 이상의 방법을 적용해야 합니다.
      			</p>
      			<ol className="mt_ms ol_lst info_lst gap-column-important-ms">
      				<li className="weight-600-before t_black_before">
      					<strong>다운 이벤트에서 기능 실행 금지</strong>
      					<p>
      						포인터 입력의 다운 이벤트(누르는 순간)에서 기능이 실행되지 않고,
      						포인터가 여전히 누른 대상의 경계에 있는 동안
      						업 이벤트가 발생할(떼는 순간) 때 기능이 실행(이하, 업 이벤트 활성화)되도록 해야 합니다.<br />
      						click 이벤트가 이 방법의 대표적인 사례입니다.
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>업 이벤트 중지</strong>
      					<p>
      						업 이벤트 활성화로 기능이 작동되도록 제공하여,
      						포인터의 다운 이벤트가 발생한 후 <i className="key_esc">esc</i>키를 누르거나 포인터를 누른 대상의 경계 밖으로 옮겨
      						업 이벤트가 발생하면 기능이 실행되는 것을 중단시킬 수 있도록 해야 합니다.<br />
      						끌기와 놓기와 같은 경우, 끌기를 시작한 후 놓기 전
      						<i className="key_esc">esc</i>키를 누르거나 놓을 영역이 아닌 다른 영역에서 놓으면 기능이 무효화되도록 해야 합니다.
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>확인 또는 실행 취소 기능 제공</strong>
      					<p>
      						기능 실행 후 확인 대화상자를 띄우거나, 실행 취소 기능을 제공하여 사용자가 원치 않는 결과를 되돌릴 수 있도록 해야 합니다.
      					</p>
      				</li>
      			</ol>
      			<p className="mt_ms">
      				단, 피아노 건반과 같이 누르는 즉시 소리가 나거나 누르는 순간 발사되어야 하는
      				사격 게임과 같이 누르는 동작에서의 기능 실행이 필수적인 경우는 예외로 합니다.
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">html + JS 예시 – 클릭 후 확인창</h3>

      			
      <CodeBlock title="html - 포인터 입력 취소" language="javascript" className="uk_gist_code_box">
      {`<button onclick="confirmDelete()">삭제</button>

      					<script>
      					function confirmDelete() {
      						if (confirm('정말 삭제하시겠습니까?')) {
      							// 삭제 실행
      							alert('삭제 완료');
      						}
      					}
      					</script>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">Vue 예시</h3>

      			
      <CodeBlock title="Vue - 포인터 입력 취소" language="javascript" className="uk_gist_code_box">
      {`<template>
      						<button @click="confirmDelete">삭제</button>
      					</template>

      					<script setup>
      						function confirmDelete() {
      							if (confirm('정말 삭제하시겠습니까?')) {
      								alert('삭제 완료');
      							}
      						}
      					</script>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">React 예시</h3>

      			
      <CodeBlock title="React - 포인터 입력 취소" language="javascript" className="uk_gist_code_box">
      {`function ConfirmButton() {
      						const handleClick = () => {
      							if (window.confirm("정말 삭제하시겠습니까?")) {
      								alert("삭제 완료");
      							}
      						};

      						return <button onClick={handleClick}>삭제</button>;
      					}`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 기준</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				터치 또는 클릭으로 즉시 실행되는 기능에 확인 단계가 있는가?
      			</li>
      			<li>
      				포인터를 움직여도 실행이 취소되도록 설계되었는가?
      			</li>
      			<li>
      				취소/확정의 선택지를 제공하고 있는가?
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 방법</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				기능이 즉시 실행되는지 또는 확인 단계가 있는지 테스트합니다.
      			</li>
      			<li>
      				포인터 다운 후 이동 시 기능이 실행되지 않는지 확인합니다.
      			</li>
      			<li>
      				취소 또는 중단할 수 있는 UI가 존재하는지 확인합니다.
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">준수/미준수 사례</h2>

      		<article className="mt_l indent">
      			<h3 className="ml_mn t_red" data-conlist-h4="true">미준수 사례</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">mousedown 이벤트에 기능 실행</h4>
      				<p className="mt_s">
      					다음은 mousedown 이벤트에서 페이지가 이동하는 사례입니다.<br />
      					mousedown 이벤트에서 기능이 실행되기 때문에 실수로 다른 항목을 눌렀을 때
      					이를 되돌리기도 전에 이미 페이지를 벗어나게 됩니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/213/img-pointer-cancellation04.png`} alt="" /><br />
      					<img src={`${IMG.A11Y_TECH_W_O}/213/img-pointer-cancellation05.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      				<dl className="mt_ms dl_lst">
      					<dt className="font-14-important t_black">개선 방법</dt>
      					<dd>
      						mousedown 이벤트에서 기능을 실행하지 않고, click 이벤트를 사용하거나 mouseup 이벤트에서 기능이 실행되도록 합니다.
      					</dd>
      				</dl>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">되돌리거나 취소할 수 없는 위험한 작업 실행</h4>
      				<p className="mt_s">
      					다음은 사용자의 확인 절차 없이 바로 기능이 실행되고 되돌릴 수 없는 사례입니다.<br />
      					삭제나 결제와 같은 작업은 한 번 실행되면 되돌리기 어렵기 때문에 위험한 작업에 해당합니다.
      					실수로 포인터를 잘못 입력하기 쉬운 사용자의 경우에는 이러한 위험한 작업을 실수로 실행시켜 곤란에 빠지기 쉽습니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/213/img-pointer-cancellation06.png`} alt="" /><br />
      					<img src={`${IMG.A11Y_TECH_W_O}/213/img-pointer-cancellation07.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      				<dl className="mt_ms dl_lst">
      					<dt className="font-14-important t_black">개선 방법</dt>
      					<dd>
      						기능이 실행되기 전에 사용자에게 정말 실행할 것인지 확인하는 절차를 추가하거나,
      						실행 후 일정 시간 동안 실행한 결과를 되돌릴 수 있는 장치를 제공하는 것이 좋습니다.

      						<figure className="img_figure mt_s">
      							<img src={`${IMG.A11Y_TECH_W_O}/213/img-pointer-cancellation08.png`} alt="" /><br />
      							<img src={`${IMG.A11Y_TECH_W_O}/213/img-pointer-cancellation09.png`} alt="" />
      							<figcaption>
      								[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      							</figcaption>
      						</figure>
      					</dd>
      				</dl>
      			</div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue" data-conlist-h4="true">준수 사례</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">다운 이벤트로 버튼 실행되지 않고 업 이벤트에 실행되도록 제공</h4>
      				<p className="mt_s">
      					마우스 다운 이벤트가 발생했을 때 기능을 실행시키지 않고 업 이벤트가 발생할 때 실행시킵니다.
      					이렇게 하면 잘못 눌렀을 경우 누른 대상의 경계 밖으로 포인터를 옮겨 떼면 기능이 작동되는 것을 방지할 수 있습니다.<br />
      					다음은 메일 서비스에서 보내기 버튼이 다운 이벤트에서 실행되지 않고 업 이벤트에서 중단되는 사례입니다.<br />
      					사용자가 실수로 보내기 버튼을 눌렀다 하더라도 마우스나 손가락을 떼지 않은 상태로
      					포인터를 버튼 밖 영역으로 옮긴 이후에 떼면 기능 실행이 중단되어 메일이 발송되지 않습니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/213/img-pointer-cancellation01.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">작업이 완료되기 전에 확인 단계 추가</h4>
      				<p className="mt_s">
      					작업이 완료되기 전에 사용자가 최종적으로 작업을 확인할 수 있는 단계를 추가하여 의도하지 않은 기능 실행을 방지할 수 있습니다.<br />
      					이는 특히 한 번 실행되면 되돌리기 어려운 중요한 작업(예: 삭제, 결제 등)이 실수로 실행되는 것을 예방하는 데 유용합니다.<br />
      					다음은 파일을 삭제할 때 사용자에게 한 번 더 확인을 요구하여 실수로 삭제되는 것을 방지하는 사례입니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/213/img-pointer-cancellation02.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">완료된 작업을 되돌리는 기능 제공</h4>
      				<p className="mt_s">
      					사용자가 실수로 원하지 않은 기능을 완료했을 때, 이를 되돌릴 수 있는(Undo) 기능을 제공해야 합니다.
      					예를 들어, 파일을 삭제했을 때 즉시 이를 취소하여 되돌릴 수 있는 버튼을 제공하는 방식입니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/213/img-pointer-cancellation03.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      			</div>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 영상</h2>
      		<div className="mt_xl youtube_box" style={{ '--padding-top': "56.25%" }}>
      			<iframe width="560" height="315" src="https://www.youtube.com/embed/Qsd1NY-UTKg?si=PNG2f-f9Bf957QkT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      		</div>
      		<p className="mt_ms">
      			출처 : 리베하얀
      		</p>
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">포인터 입력 취소 | 웹 접근성 콘텐츠 제작 기법(&quot;운용의 용이성(Operable)&quot;) 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG22/" title="새창 열림" target="_blank" rel="noreferrer" className="fas">Web Content Accessibility Guidelines (WCAG) 2.2</a></li>
      		<li className="reference"><a href="https://www.w3.org/WAI/WCAG22/Understanding/" title="새창 열림" target="_blank" rel="noreferrer" className="fas">WCAG 2.2 Understanding Docs</a></li>
      		<li className="reference"><a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2&showtechniques=111" title="새창 열림" target="_blank" rel="noreferrer" className="fas">WCAG (Quick Reference)</a></li>
      		<li className="reference"><a href="https://a11ykr.github.io/wcag22/" title="새창 열림" target="_blank" rel="noreferrer" className="fas">웹 콘텐츠 접근성 지침(WCAG) 2.2 - 번역판</a></li>
      		<li className="reference"><a href="https://codepen.io/smashingmag/pen/MWLgQzm" title="새창 열림" target="_blank" rel="noreferrer" className="fas">smashingmagazine - WCAG 2.2 Checklist with Filter and Links</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/Accessibility/Guides/Understanding_WCAG" title="새창 열림" target="_blank" rel="noreferrer" className="fas">MDN 웹 컨텐츠 접근성 지침 이해하기</a></li>
      		<li className="reference"><a href="https://blog.naver.com/prologue/PrologueList.naver?blogId=mohw2016" title="새창 열림" target="_blank" rel="noreferrer" className="fas">보건복지부 블로그</a></li>
      		<li className="reference"><a href="https://www.mois.go.kr/frt/bbs/type001/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000045&nttId=69451" title="새창 열림" target="_blank" rel="noreferrer" className="fas">행정안전부 - 전자정부 웹사이트 UI UX 가이드라인</a></li>
      		<li className="reference"><a href="https://nuli.navercorp.com/community/article" title="새창 열림" target="_blank" rel="noreferrer" className="fas">널리 알리는 기술 소식 커뮤니티</a></li>
      	</ul>
      </footer>

      <hr />
      <section className="indent mt_xxl">
      	<h2 className="ml_mn" data-conlist="false">
      		접근성 테스트 도구 활용 점검방법

      		<button type="button" className="toggleButton"
      						aria-expanded="false"
      						aria-controls="toggleContent"
      						onClick={(event) => toggleContent(event.currentTarget)}>
      			자세히 보기
      		</button>
      	</h2>

      	

      	<blockquote className="mt_xl uk_note toggleContent toggleWave startContent" role="note" hidden>
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			웹 및 모바일 애플리케이션의 접근성을 평가하고 개선하기 위한 다양한 도구와 방법을 소개합니다.<br />
      			Lighthouse와 WAVE와 같은 웹 접근성 분석 도구를 사용하면 웹 페이지의 접근성을 점검할 수 있고,
      			Android와 iOS에서 활용되는 접근성 도구를 통해 앱의 접근성을 테스트하고 개선할 수 있습니다.<br />
      			여러 접근성 테스트 도구를 활용하고 웹 및 앱을 지속적으로 개선함으로써, 장애인을 포함한 모든 사용자에게 보다 편리한 환경을 제공할 수 있습니다.
      		</p>
      	</blockquote>

      	<article className="mt_xl indent toggleContent" hidden>
      		<h3 className="ml_mn t_blue">Lighthouse</h3>

      		<p className="mt_ml reference">
      			Lighthouse는 구글에서 제공하는 웹 페이지 품질 개선을 위한 오픈 소스로 자동화 도구입니다.
      			Lighthouse는 사이트의 성능, 접근성, SEO 등에 대한 전반적인 진단을 해줍니다.<br />
      			상세 설명 :
      			<a href="https://developer.chrome.com/docs/lighthouse/overview?hl=ko" title="새창 열림" target="_blank" rel="noreferrer" className="fas">Lighthouse Overview 공식 문서 참조</a>
      		</p>

      		<div className="mt_l indent">
      			<h4 className="ml_mn">참고</h4>
      			<ul className="mt_m dot_lst gap-column-important-s">
      				<li>
      					Lighthouse 모바일의 경우 네트워크 속도를 최대 4배정도 느리게 측정하기 때문에 모바일 Performance가 비교적 낮게 나옵니다.
      				</li>
      				<li>
      					Metric 별로 어떤 성능 점수가 나는지 Lighthouse 계산기를 통해서 자세히 확인할 수 있습니다.
      				</li>
      			</ul>
      		</div>
      		

      		<div className="mt_l indent">
      			<h4 className="ml_mn">카테고리가 측정하는 내용</h4>
      			<ul className="mt_m dot_lst gap-column-important-s">
      				<li>
      					<strong>Performance</strong>
      					<p className="reference">
      						웹 페이지의 로딩 속도 등 실제 성능을 측정. 성능의 측정항목은 6가지 Metric으로 정의되며,
      						각 Metric들은 페이지가 로드되는 속도를 다양한 측면에서 측정합니다.<br />
      						상세 설명 :
      						<a href="https://developer.chrome.com/docs/lighthouse/performance/performance-scoring?hl=ko" title="새창 열림" target="_blank" rel="noreferrer" className="fas">Lighthouse Performance Audits.</a>
      					</p>
      				</li>
      				<li>
      					<strong>Best practices</strong>
      					<p>
      						Best practices를 따라 개발되었는지 확인
      					</p>
      				</li>
      				<li>
      					<strong>Accessibility</strong>
      					<p>
      						접근성 확인. 폰트 사이즈, 메뉴간 간격 등을 측정
      					</p>
      				</li>
      				<li>
      					<strong>Progressive Web App (PWA)</strong>
      					<p>
      						웹과 네이티브 앱의 기능 모두의 이점을 가지도록 만들어진 서비스인지 체크
      					</p>
      				</li>
      				<li>
      					<strong>SEO</strong>
      					<p>
      						Search Engine Optimization의 약자로 검색 엔진 수집 최적화 측정
      					</p>
      				</li>
      			</ul>
      		</div>
      		

      		<div className="mt_l indent">
      			<h4 className="ml_mn">사용법</h4>
      			<ol className="mt_m ol_lst gap-column-important-s">
      				<li>
      					Google Chrome에서 웹 페이지를 엽니다.
      				</li>
      				<li>
      					DevTools (F12)를 열고 ‘Lighthouse’ 탭을 선택합니다. (단축키 맥:Cmd⌘+Option⌥+I / 윈도우:Ctrl+Shift+I)
      				</li>
      				<li className="mb_s">
      					‘Accessibility’ 항목을 선택하고 우측 상단의 ‘Analyze page load’를 클릭하여 보고서를 생성합니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool01-01.png`} alt="Lighthouse를 활용한 검사" className="max-w850" />
      						<figcaption>
      							[Lighthouse를 활용한 검사]
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					Lighthouse는 접근성 점수와 함께 개선이 필요한 부분을 제시합니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool01-02.png`} alt="Lighthouse를 활용한 검사" className="max-w850" />
      						<figcaption>
      							[Lighthouse를 활용한 검사]
      						</figcaption>
      					</figure>
      				</li>
      			</ol>
      		</div>
      		
      	</article>
      	

      	<article className="mt_xl indent toggleContent" hidden>
      		<h3 className="ml_mn t_blue">WAVE</h3>

      		<p className="mt_ml reference">
      			WAVE는 WebAIM에서 만든 확장 프로그램으로 현재 화면의 각 요소가 접근성을 준수하는지 평가합니다.
      			각 요소가 위반한 내용에 대한 이유와 해결 방법을 제시하여 접근성을 준수하는 개발을 쉽게 할 수 있도록 돕습니다.
      		</p>

      		<div className="mt_l indent">
      			<h4 className="ml_mn">사용법</h4>
      			<ol className="mt_m ol_lst gap-column-important-s">
      				<li className="mb_s">
      					Chrome 브라우저에서 WAVE 확장 프로그램을 설치합니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool02-01.png`} alt="WAVE를 활용한 검사" className="max-w850" />
      						<figcaption>
      							[WAVE를 활용한 검사]
      						</figcaption>
      					</figure>
      				</li>
      				<li className="mb_s">
      					페이지를 열고 WAVE 확장 프로그램을 실행하여 분석을 시작합니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool02-02.png`} alt="WAVE를 활용한 검사" className="max-w850" />
      						<figcaption>
      							[WAVE를 활용한 검사]
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					WAVE 페이지에서 발견된 접근성 문제를 제시합니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool02-02.png`} alt="WAVE를 활용한 검사" className="max-w850" />
      						<figcaption>
      							[WAVE를 활용한 검사]
      						</figcaption>
      					</figure>
      				</li>
      			</ol>
      		</div>
      		
      	</article>
      	

      	<article className="mt_xl indent toggleContent" hidden>
      		<h3 className="ml_mn t_blue">Accessibility Scanner (Android)</h3>

      		<p className="mt_ml reference">
      			Accessibility Scanner는 Android 기기에서 접근성 문제를 탐지하는 Google Play의 앱입니다.
      		</p>

      		<div className="mt_l indent">
      			<h4 className="ml_mn">사용법</h4>
      			<ol className="mt_m ol_lst gap-column-important-s">
      				<li className="mb_s">
      					Android 기기에 Accessibility Scanner 앱을 설치합니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool03-01.png`} alt="Accessibility Scanner 활용한 검사" />
      						<figcaption>
      							[Accessibility Scanner 활용한 검사]
      						</figcaption>
      					</figure>
      				</li>
      				<li className="mb_s">
      					앱을 실행하고 분석하려는 화면에서 스캔을 시작합니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool03-02.png`} alt="Accessibility Scanner 활용한 검사" />
      						<figcaption>
      							[Accessibility Scanner 활용한 검사]
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					앱은 화면에서 발견된 접근성 문제를 보고하고 개선 방법을 제시합니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool03-03.png`} alt="Accessibility Scanner 활용한 검사" />
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool03-04.png`} alt="Accessibility Scanner 활용한 검사" />
      						<figcaption>
      							[Accessibility Scanner 활용한 검사]
      						</figcaption>
      					</figure>
      				</li>
      			</ol>
      		</div>
      		
      	</article>
      	

      	<article className="mt_xl indent toggleContent" hidden>
      		<h3 className="ml_mn t_blue">접근성 트리 뷰(Accessibility Tree)</h3>

      		<p className="mt_ml reference">
      			스크린 리더와 같은 보조 기술은 크로미움의 접근성 API를 사용해 웹콘텐츠와 상호 작용합니다.
      			접근성 API의 기본 모델은 접근성 트리입니다. 접근성 객체의 트리를 통해 보조 기술은 각 속성과 실제 속성값을 탐색하고 필요한 작업을 수행할 수 있습니다.
      			웹 개발자는 주로 HTML에서 ARIA 속성과 같은 DOM 속성값을 통해 접근성 트리를 만들고 이를 다룹니다.<br />
      			크롬 개발자 도구에서는 개발자에게 콘텐츠가 보조 기술에 어떤 식으로 전달되는지 이해할 수 있게 접근성 창을 제공하고 있습니다.
      			DOM 트리 뷰어에서 노드를 선택하면 해당하는 접근성 노드의 속성 정보가 상위 노드, 직계 자식 노드와 함께 창에 표시됩니다.
      		</p>
      		<figure className="mt_ml img_figure">
      			<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool05-01.png`} alt="Accessibility Tree 활용한 검사" className="max-w400" />
      			<figcaption>
      				[Accessibility Tree 활용한 검사]
      			</figcaption>
      		</figure>

      		<div className="mt_l indent">
      			<h4 className="ml_mn">사용법</h4>
      			<ol className="mt_m ol_lst gap-column-important-s">
      				<li className="mb_s">
      					개발자 도구에서 Elements 항목을 선택하고 오른쪽 창에서
      					Accessibility를 선택하면 “Enable full-page accessibility tree” 항목을 체크합니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool05-02.png`} alt="Accessibility Tree 활용한 검사" />
      						<figcaption>
      							[Accessibility Tree 활용한 검사]
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					해당 노드 선택 후 검사
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool05-03.png`} alt="Accessibility Tree 활용한 검사" />
      						<figcaption>
      							[Accessibility Tree 활용한 검사]
      						</figcaption>
      					</figure>
      				</li>
      			</ol>
      		</div>
      		
      	</article>
      	

      	<article className="mt_xl indent toggleContent" hidden>
      		<h3 className="ml_mn t_blue">VSCode 확장 접근성 검사(axe Accessibility Linter)</h3>

      		<p className="mt_ml reference">
      			VSCode 사용 시 별도 확장 설치 후 소스 코드에서 잘못 작성된 부분을 사전에 감지하여 수정할 수 있습니다.
      		</p>
      		<figure className="mt_ml img_figure">
      			<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool04-01.png`} alt="VS Code extensions axe Accessibility Linter" />
      			<figcaption>
      				[VS Code extensions axe Accessibility Linter]
      			</figcaption>
      		</figure>
      	</article>
      	

      	<article className="mt_xl indent toggleContent" hidden>
      		<h3 className="ml_mn t_blue">eslint-plugin-jsx-a11y(ReactJS + ESLint)</h3>

      		<p className="mt_ml reference">
      			접근성 오류 부분이 있는지 분석해 주는 플러그인이며 서비스 개발 환경이 React라면
      			실시간으로 JSX 요소에 대한 접근성 규칙을 확인하고 준수할 수 있도록 돕는 패키지를 설치해 개발할 수 있습니다.
      			기본적으로 추천되는 규칙 외에 예외로 사용하고 싶은 부분이 있다면 같이 서비스를 개발하는 개발자들과 협의하면서
      			lint 규칙을 만들어가다 보면 접근성을 준수하는 서비스 개발에 도움이 될 것입니다.<br />
      			상세 설명 :
      			<a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y" title="새창 열림" target="_blank" rel="noreferrer" className="fas">jsx-eslint/eslint-plugin-jsx-a11y</a>
      		</p>

      		<div className="mt_l indent">
      			<h4 className="ml_mn">사용법</h4>
      			<ol className="mt_m ol_lst gap-column-important-s">
      				<li className="mb_s">
      					eslint를 전역 설치했다면, eslint-plugin-jsx-a11y 플러그인도 전역으로 설치합니다.

      					<div className="terminal_code_box mt_s" data-line="3" data-pcScroll="0" data-mbScroll="0">
      						<textarea>
      							npm install eslint-plugin-jsx-a11y
      							// 또는
      							yarn add eslint-plugin-jsx-a11y
      						</textarea>
      					</div>
      				</li>
      				<li>
      					.eslintrc.json 파일에 다음과 같이 추가합니다.

      					
      <CodeBlock title=".eslintrc.json" language="javascript" className="uk_gist_code_box mt_s">
      {`{
      								"extends": "plugin:jsx-a11y/recommended",
      								"plugins": "jsx-a11y",
      								"rules": {
      									"jsx-a11y/aria-role": [
      										"error",
      										{
      											"allowedInvalidRoles": ["text"],
      											"ignoreNonDOM": true
      										}
      									]
      								}
      							}`}
      </CodeBlock>

      				</li>
      			</ol>
      		</div>
      		
      	</article>
      	

      	<article className="mt_xl indent toggleContent" hidden>
      		<h3 className="ml_mn t_blue">iOS : Accessibility Inspector</h3>

      		<p className="mt_ml reference">
      			iOS 앱 개발도구인 xcode에는 Accessibility Inspector 툴을 통해 접근성을 수동 검사할 수 있습니다.
      		</p>

      		<div className="mt_l indent">
      			<h4 className="ml_mn">사용법</h4>
      			<ol className="mt_m ol_lst gap-column-important-s">
      				<li className="mb_s">
      					Xcode에서 Accessibility Inspector 툴을 실행합니다. (Xcode &gt; Open Developer Tool &gt; Accessibility Inspector)
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool07-01.jpg`} alt="Xcode를 활용한 검사" className="max-w500" />
      						<figcaption>
      							[출처 : NULI]
      						</figcaption>
      					</figure>
      				</li>
      				<li className="mb_s">
      					테스트할 장치를 선택합니다. 개발 중인 앱을 Simulator로 빌드 하셨다면 Simulator를 선택하여 진단하실 수 있습니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool07-02.jpg`} alt="Xcode를 활용한 검사" className="max-w550" /><br />
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool07-03.jpg`} alt="Xcode를 활용한 검사" className="max-w550" />
      						<figcaption>
      							[출처 : NULI]
      						</figcaption>
      					</figure>
      				</li>
      				<li className="mb_s">
      					Accessibility Inspector 툴 오른쪽 상단에서 audit 버튼을 선택합니다. Run Audit 버튼을 선택합니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool07-04.jpg`} alt="Xcode를 활용한 검사" className="max-w550" />
      						<figcaption>
      							[출처 : NULI]
      						</figcaption>
      					</figure>
      				</li>
      				<li className="mb_s">
      					결과 이슈 목록을 선택하거나 눈 버튼을 선택하시면 해당 항목을 보여줍니다.
      					장치를 보면 노란색으로 표시되고, 물음표 버튼를 선택하면 해당 이슈를 해결할 수 있는 방법을 알려줍니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool07-05.jpg`} alt="Xcode를 활용한 검사" className="max-w550" />
      						<figcaption>
      							[출처 : NULI]
      						</figcaption>
      					</figure>
      				</li>
      				<li className="mb_s">
      					물음표 버튼를 선택하면 해당 이슈를 해결할 수 있는 방법을 알려줍니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool07-06.jpg`} alt="Xcode를 활용한 검사" className="max-w550" />
      						<figcaption>
      							[출처 : NULI]
      						</figcaption>
      					</figure>
      				</li>
      				<li className="mb_s">
      					목록에서 주의 깊게 봐야 할 이슈는 description에 대한 이슈입니다.
      					대체 텍스트 이슈는 접근성 사용자에게 매우 크리티컬한 이슈이면서 해결 방법이 매우 수월한 이슈입니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool07-07.jpg`} alt="Xcode를 활용한 검사" className="max-w550" /><br />
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool07-08.jpg`} alt="Xcode를 활용한 검사" className="max-w550" />
      						<figcaption>
      							[출처 : NULI]
      						</figcaption>
      					</figure>
      				</li>
      				<li className="mb_s">
      					Xcode의 Identity Inspector 탭의 Accessibility 패널에 대체 텍스트를 넣어주세요.
      				</li>
      				<li className="mb_s">
      					대체 텍스트 외에도 명도대비, 작은 터치영역등 다양한 접근성 이슈를 체크해주고 있습니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool07-09.jpg`} alt="Xcode를 활용한 검사" className="max-w500" />
      						<figcaption>
      							[출처 : NULI]
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					각 요소별 접근성 항목을 확인할 수 있고, iOS 스크린리더인 VoiceOver 음성으로 들어볼 수 있습니다.
      					<figure className="mt_s img_figure">
      						<div className="a11y_inspector">
      							<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool07-10.jpg`} alt="Xcode를 활용한 검사" className="max-w550" />
      							<ol className="ol_lst_second circle_number_lst gap-column-important-s">
      								<li>
      									<strong>스피커</strong>
      									<p>
      										현재 초점이 위치한 요소의 정보를 VoiceOver 음성으로 들려줍니다.
      									</p>
      								</li>
      								<li>
      									<strong>이전 요소 탐색</strong>
      									<p>
      										현재 초점이 위치한 곳에서 이전 요소의 정보를 VoiceOver 음성으로 들려줍니다.
      									</p>
      								</li>
      								<li>
      									<strong>자동 탐색</strong>
      									<p>
      										현재 초점이 위치한 곳에서 모든 요소를 자동으로 탐색하며 요소의 정보를 VoiceOver 음성으로 들려줍니다.
      									</p>
      								</li>
      								<li>
      									<strong>다음 요소 탐색</strong>
      									<p>
      										현재 초점이 위치한 곳에서 다음 요소의 정보를 VoiceOver 음성으로 들려줍니다.
      									</p>
      								</li>
      								<li>
      									<strong>직접 탐색</strong>
      									<p>
      										마우스로 요소를 직접 선택하여 탐색합니다.
      									</p>
      								</li>
      								<li>
      									<strong>현재 초점이 위치한 요소의 접근성 항목을 나타냅니다.</strong>
      									<p>
      										항목은 Label(대체 텍스트), Value(값), Traits(유형 정보), Identifier(식별자),
      										Hint(힌트 정보), User Input Labels(사용자 입력 텍스트 정보)입니다.
      									</p>
      								</li>
      							</ol>
      						</div>
      						<figcaption>
      							[출처 : NULI]
      						</figcaption>
      					</figure>
      				</li>
      			</ol>
      		</div>
      		
      	</article>
      	

      	<article className="indent_p mt_xl toggleContent toggleWave endContent" hidden>
      		<h3 className="ml_mn t_blue">Android : Lint</h3>

      		<p className="mt_ml reference">
      			Android 앱 개발도구인 Android Studio 의 Lint를 통해 개발과정에서 접근성을 수동 검사할 수 있습니다.
      		</p>
      		<div className="mt_l indent">
      			<h4 className="ml_mn">사용법</h4>
      			<ol className="mt_m ol_lst gap-column-important-s">
      				<li className="mb_s">
      					Analyze &gt; Inspect Code를 실행합니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool08-01.png`} alt="Android : Lint 활용한 검사" className="max-w800" />
      						<figcaption>
      							[출처 : NULI]
      						</figcaption>
      					</figure>
      				</li>
      				<li className="mb_s">
      					Android Studio 4.1.1. 버전을 사용합니다.
      					Android Studio Electric Eel 2022.1.1 Patch 2버전이면 Code 메뉴에 inspect Code가 보입니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool08-02.png`} alt="Android : Lint 활용한 검사" className="max-w800" />
      						<figcaption>
      							[출처 : NULI]
      						</figcaption>
      					</figure>
      				</li>
      				<li className="mb_s">
      					Inspection profile에서 더보기 버튼을 실행합니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool08-03.jpg`} alt="Android : Lint 활용한 검사" className="max-w600" />
      						<figcaption>
      							[출처 : NULI]
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					Inspections 창에서 Lint &gt; Accessibility 항목 중 “Image without contentDescription”
      					항목과 “Missing accessibility label”을 체크합니다.
      				</li>
      				<li>
      					Android에서 Accessibility 항목 중 주의 깊게 봐야 할 이슈는 바로 이미지 대체 텍스트와 입력 서식 라벨에 대한 이슈입니다.
      				</li>
      				<li className="mb_s">
      					Severity를 Error로 체크해 주세요. Error 이슈를 해결하기 전까지는 빌드 성공을 할 수 없습니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool08-04.jpg`} alt="Android : Lint 활용한 검사" className="max-w800" />
      						<figcaption>
      							[출처 : NULI]
      						</figcaption>
      					</figure>
      				</li>
      				<li className="mb_s">
      					진단 범위도 설정해야 합니다. 모든 범위 [In All Sccopes]
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool08-05.jpg`} alt="Android : Lint 활용한 검사" className="max-w800" />
      						<figcaption>
      							[출처 : NULI]
      						</figcaption>
      					</figure>
      				</li>
      				<li className="mb_s">
      					OK를 누르고 코드를 확인합니다.
      					contentDescription 이 없는 ImageView 또는 ImageButton에 빨간색으로 표시된 것을 확인할 수가 있습니다.
      					labelFor 또는 hint가 없는 EditText 역시 빨간색으로 표시된 것을 볼 수 있습니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool08-06.jpg`} alt="Android : Lint 활용한 검사" className="max-w700" /><br />
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool08-07.jpg`} alt="Android : Lint 활용한 검사" className="max-w700 mt_s" />
      						<figcaption>
      							[출처 : NULI]
      						</figcaption>
      					</figure>
      				</li>
      				<li className="mb_s">
      					이슈 해결 : ImageView 클래스에 contentDescription을 코드에서 추가합니다. 빨간색으로 표시되었던 코드가 노란색 코드로 변경됩니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool08-08.jpg`} alt="Android : Lint 활용한 검사" className="max-w700" />
      						<figcaption>
      							[출처 : NULI]
      						</figcaption>
      					</figure>
      				</li>
      				<li className="mb_s">
      					이슈 해결 : EditText 역시 hint 코드를 추가합니다. 빨간색으로 표시되었던 코드가 노란색 코드로 변경됩니다.
      					<figure className="mt_s img_figure">
      						<img src={`${IMG.A11Y_TECH_COMMON}/img_a11yMobile_tool08-09.jpg`} alt="Android : Lint 활용한 검사" className="max-w700" />
      						<figcaption>
      							[출처 : NULI]
      						</figcaption>
      					</figure>
      				</li>
      			</ol>
      		</div>
      	</article>
      	

      	

      	<article className="mt_xl indent">
      		<h3 className="ml_mn">결론</h3>
      		<p className="mt_ml">
      			<strong className="quote_text el_inline_block t_blue font-16">접근성은 시작은 있지만 끝이 없는 작업입니다.</strong><br />
      			오류 항목을 정기적으로 점검하여 접근성 개선을 한다면 점차 검사를 할 항목이 줄어들게 될 것입니다.
      			모두가 차별 없이 서비스를 이용할 수 있도록 접근성 유지를 위한 모두의 노력이 필요합니다.
      			무엇보다 접근성 작업은 서비스를 제공한다면 선택이 아닌 필수로 지켜야하는 항목임을 잊지 말아야 합니다.
      		</p>
      	</article>
      	

      	<article className="mt_xl indent">
      		<h3 className="ml_mn">접근성 작업 시 점검 필수사항</h3>
      		<ul className="mt_ml dot_lst gap-column-important-sm">
      			<li>접근성 가이드(WCAG, KWCAG, WAI-ARIA) 내용 숙지</li>
      			<li>접근성 체크리스트 작성</li>
      			<li>접근성 자동 및 수동 검사(스크린리더) 진행</li>
      			<li>접근성 검사 툴(Lighthouse Accessibility 등) 활용 오류 항목 개선 및 내용 정리</li>
      			<li>접근성 사용자 테스트</li>
      			<li>접근성 정기적인 모니터링</li>
      		</ul>
      	</article>
      	


      	
      	
      </section>
    </>
  )
}

export default PointerCancellationPage
