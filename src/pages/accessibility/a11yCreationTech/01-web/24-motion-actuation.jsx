import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import { toggleContent } from '@/utils/toggleContent.js'

const PAGE_LAYOUT = {
  mainClass: "motion-actuation",
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
  title: "동작기반 작동 | 웹 접근성 콘텐츠 제작 기법(\"운용의 용이성(Operable)\")",
  description: "웹 접근성 콘텐츠 제작 기법이란 장애 유무에 관계없이 모든 사용자가 웹 콘텐츠를 쉽게 이해하고 이용할 수 있도록 하는 설계하는 방법입니다. 이 페이지에서는 웹 접근성 콘텐츠 제작 기법 중 하나인 '동작기반 작동'에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성, 웹 접근성, 웹 접근성 콘텐츠 제작 기법, 한국형 웹 콘텐츠 접근성 지침 2.2, WCAG2.2, KWCAG2.2, 보조기술과의호환성, 접근성 테스트 도구 활용 점검방법, 스크린 리더, Jaws, NVDA, 센스리더, Sense Reader, 휠체어 사용자, 파키슨병, 손떨림, 음성 명령 사용자, 지체 장애 사용자, 고정된 환경 사용자, 저시력·인지장애 사용자",
}

function MotionActuationPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>










      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_black">
      				관련 지침 : 동작기반으로 작동하는 기능은 사용자 인터페이스 구성요소로 조작할 수 있고,
      				동작기반 기능을 비활성화할 수 있어야 한다.
      			</b><br />
      			기기를 기울이거나 흔들고, 카메라를 통한 제스처 인식 등을 입력 수단으로 활용할 때,
      			모든 사용자가 의도치 않은 실행을 방지하고 대체 조작 수단(버튼 등)으로 동일한 기능을 실행할 수 있도록 해야 합니다.
      			이는 손떨림, 휠체어 사용자, 음성 명령 사용자 등 동작 기반 입력이 곤란한 환경에서도
      			서비스 사용이 가능하도록 보장하는 데 목적이 있습니다.<br />
      			사용자가 장치를 움직이거나 사용자의 움직임을 통하여 작동하는
      			기능(예: 흔들어서 실행 취소, 손동작을 이용한 사진 촬영 등)은 사용자 인터페이스 구성요소로 조작할 수 있어야 하며,
      			의도하지 않는 동작으로 기능이 작동하는 것을 예방하기 위해 해당 기능을 비활성화할 수 있어야 합니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 용어 설명</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>동작기반 작동</strong>
      				<p>
      					장치를 흔들거나 기울이는 동작, 카메라를 향한 제스처 등 센서를 통한 신체적 움직임을 직접 입력 신호로 사용하는 방식을 의미합니다.<br />
      					예를 들어, 흔들어 새로 고침하거나 손동작으로 이전/다음 슬라이드를 전환하는 등의 동작이 있습니다.
      				</p>
      			</li>
      			<li>
      				<strong>접근성 지원 인터페이스</strong>
      				<p>
      					사용자의 보조 기술(스크린 리더, 음성 명령, 안구 마우스 등) 및 브라우저/OS의 접근성 기능과 호환되어 작동하는 대체 조작 수단입니다.<br />
      					예를 들어, 카메라 센서를 사용하여 눈동자나 깜박임을 인식해 클릭 동작을 대체하는 시스템이 있습니다.
      				</p>
      			</li>
      			<li>
      				<strong>가속도계 / 자이로스코프</strong>
      				<p>
      					모바일 기기 내부에 탑재된 물리 센서를 통해, 기기의 기울기, 흔들림, 회전 등을 감지하여 동작 기반 입력으로 활용할 수 있습니다.
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 WCAG 2.2 성공 기준</h2>

      		<p className="mt_l success_criteria">
      			<a href="https://www.w3.org/TR/WCAG22/#motion-actuation" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">2.5.4 동작 기반 입력 취소 가능 (Motion Actuation) (Level A)</a>
      			<a href="https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">MDN - DeviceMotionEvent</a>
      			<a href="https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">WAI Understanding Motion Actuation</a>
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">동작기반 작동 예외 상황</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>접근성 지원 인터페이스</strong>
      				<p>
      					동작이 접근성 지원 인터페이스를 통해 기능을 조작하는 데 사용되는 경우(예: 안구마우스)
      				</p>
      			</li>
      			<li>
      				<strong>필수적인 경우</strong>
      				<p>
      					동작이 기능의 실행에 반드시 필요하고, 동작의 실행에 대한 비활성화가 기능 자체를 무효화할 수 있는 경우(예: 만보기)
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">기대효과</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				장치가 고정되어 있거나 특정 동작을 행할 수 없는 사용자도 기능을 사용할 수 있어야 합니다.
      			</li>
      			<li>
      				정확한 동작을 할 수 없거나, 의도하지 않은 동작으로 기능이 실행되는 것을 방지할 수 있어야 합니다.
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">필요성</h2>

      		<p className="mt_l">
      			스마트폰, 태블릿 등에서 가속도계, 자이로스코프, 카메라 센서를 이용해 흔들기, 기울이기,
      			제스처 명령 등 동작 기반 기능을 활용하여 기능을 작동시킬 수 있습니다.
      			예를 들어, 장치를 흔들어 정보를 최신화하거나 특정 기능을 실행할 수 있고,
      			전면 카메라 위에서 손을 움직여 이전/다음 콘텐츠로 이동시킬 수도 있습니다.<br />
      			그러나 이러한 기능을 사용하면서 일부 사용자는 다음과 같은 어려움을 겪을 수 있습니다.
      			파킨슨 병처럼 심한 손떨림을 가진 사용자는 의도치 않게 기능이 실행될 수 있으며,
      			휠체어에 기기를 고정한 채 사용하는 경우 기기를 움직이는 동작을 할 수 없습니다.
      			또한, 음성 명령과 같은 대체 수단을 사용하는 사용자는 기기를 움직이거나 제스처를 취할 수 없습니다.
      		</p>
      		<ul className="mt_ms dot_lst gap-column-important-sm">
      			<li>
      				모바일 기기에서 흔들기, 회전 등의 동작은 사용자가 원치 않는 상황에서 기능이 실행될 수 있습니다.
      			</li>
      			<li>
      				특정 장애 사용자나 고정된 환경(휠체어나 테이블)에 있는 경우, 디바이스를 움직이는 것이 불가능합니다.
      			</li>
      			<li>
      				이러한 기능은 반드시 UI 요소로 대체 가능하며, 비활성화 옵션도 제공해야 접근성이 확보됩니다.
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
      					<p className="cell value">지체 장애 사용자</p>
      					<p className="cell content">기기를 물리적으로 움직이기 어렵거나 불가능한 경우</p>
      				</li>
      				<li>
      					<p className="cell value">고정된 환경 사용자</p>
      					<p className="cell content">흔들기, 회전 등이 불가한 환경 (휠체어 장착, 고정 거치대 등)</p>
      				</li>
      				<li>
      					<p className="cell value">저시력·인지장애 사용자</p>
      					<p className="cell content">의도치 않은 동작 인식으로 인한 오류 가능성 있음</p>
      				</li>
      			</ul>
      		</div>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">체크리스트</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				흔들기, 기울이기 등 동작 기반 기능이 존재하는가?
      			</li>
      			<li>
      				동작을 대체하는 UI 버튼이 제공되는가?
      			</li>
      			<li>
      				설정에서 해당 동작 기반 기능을 끌 수 있는가?
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">테스트 방법</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				모바일 기기에서 흔들기, 회전 등의 제스처로 기능이 실행되는지 확인합니다.
      			</li>
      			<li>
      				동일한 기능을 수행할 수 있는 UI 버튼 또는 입력 수단이 존재하는지 확인합니다.
      			</li>
      			<li>
      				설정 또는 스위치를 통해 해당 기능을 끌 수 있는지 점검합니다.
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">QA 지표</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				동작 기반 기능의 UI 대체 제공률
      			</li>
      			<li>
      				비활성화 가능한 기능 여부
      			</li>
      			<li>
      				제스처 입력 실패 시 대응 성공률
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">개발방법</h2>

      		<article className="mt_l indent">
      			<h3 className="ml_mn t_blue">html + JavaScript 예시 – 기기 흔들기 감지 및 대체 버튼 제공</h3>

      			<p className="mt_ms">
      				위 코드에서는 <code>resetForm()</code>이라는 기능을 흔들기 동작과 버튼 클릭으로 모두 수행할 수 있게 설정하였습니다.
      				또한, 사용자가 필요에 따라 동작 기반 기능을 끌 수 있도록, 설정에서 motion 기능 끄기 옵션을 제공하는 것이 좋습니다.<br />
      				예를 들어, toggle 스위치를 사용하여 흔들기 동작을 비활성화할 수 있도록 하는 방법을 고려할 수 있습니다.
      			</p>
      			
      <CodeBlock title="html - 동작기반 작동" language="javascript" className="uk_gist_code_box">
      {`<button onclick="resetForm()">초기화</button>

      					<script>
      						function resetForm() {
      							alert('초기화 되었습니다.');
      						}

      						if (window.DeviceMotionEvent) {
      							window.addEventListener("devicemotion", function(event) {
      								const acceleration = event.accelerationIncludingGravity;
      								if (acceleration.x > 15 || acceleration.y > 15 || acceleration.z > 15) {
      									resetForm(); // 기기 흔들림 감지
      								}
      							});
      						}
      					</script>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">Vue 예시 (흔들기와 버튼으로 초기화 기능)</h3>

      			
      <CodeBlock title="Vue - 동작기반 작동" language="javascript" className="uk_gist_code_box">
      {`<template>
      						<div>
      							<button @click="resetForm">초기화</button>
      							<label>
      								<input type="checkbox" v-model="motionEnabled" />
      								동작 기반 기능 사용
      							</label>
      						</div>
      					</template>

      					<script setup>
      						import { ref, onMounted, onUnmounted } from 'vue';

      						const motionEnabled = ref(true);

      						function resetForm() {
      							alert('초기화 되었습니다.');
      						}

      						function handleMotion(event) {
      							const acc = event.accelerationIncludingGravity;
      							if (motionEnabled.value && (acc.x > 15 || acc.y > 15 || acc.z > 15)) {
      								resetForm();
      							}
      						}

      						onMounted(() => {
      							window.addEventListener('devicemotion', handleMotion);
      						});

      						onUnmounted(() => {
      							window.removeEventListener('devicemotion', handleMotion);
      						});
      					</script>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">React 예시</h3>

      			
      <CodeBlock title="React - 동작기반 작동" language="javascript" className="uk_gist_code_box">
      {`import React, { useEffect, useState } from "react";

      					function MotionComponent() {
      						const [motionEnabled, setMotionEnabled] = useState(true);

      						const resetForm = () => {
      							alert("초기화 되었습니다.");
      						};

      						useEffect(() => {
      							const handleMotion = (event) => {
      								const acc = event.accelerationIncludingGravity;
      								if (motionEnabled && (acc.x > 15 || acc.y > 15 || acc.z > 15)) {
      									resetForm();
      								}
      							};

      							window.addEventListener("devicemotion", handleMotion);
      							return () => {
      								window.removeEventListener("devicemotion", handleMotion);
      							};
      						}, [motionEnabled]);

      						return (
      							<>
      								<button onClick={resetForm}>초기화</button>
      								<label>
      									<input
      										type="checkbox"
      										checked={motionEnabled}
      										onChange={(e) => setMotionEnabled(e.target.checked)}
      									/>
      									동작 기반 기능 사용
      								</label>
      							</>
      						);
      					}

      					export default MotionComponent;`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 기준</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				동작 기반 기능을 수행할 수 있는 대체 UI가 존재하는가?
      			</li>
      			<li>
      				사용자가 해당 기능을 비활성화할 수 있는가?
      			</li>
      			<li>
      				기능이 의도하지 않게 실행되지 않도록 설계되었는가?
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 방법</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				실제 디바이스 테스트를 통한 동작 감지합니다.
      			</li>
      			<li>
      				UI 버튼 조작 가능 여부 확인합니다.
      			</li>
      			<li>
      				비활성화 스위치 존재 여부 점검합니다.
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">준수/미준수 사례</h2>

      		<article className="mt_l indent">
      			<h3 className="ml_mn t_red" data-conlist-h4="true">미준수 사례</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">동작기반 작동 비활성화 기능 미제공</h4>
      				<p className="mt_s">
      					모바일 기기를 흔들면 결제 바코드가 화면에 노출되는 모바일 애플리케이션 사례입니다.<br />
      					기본적으로 ‘흔들기’ 기능이 활성화되어 있어, 손떨림이 심한 사용자는 의도치 않게 결제 바코드가 계속 노출됩니다.<br />
      					이 기능을 끌 수 있는 설정을 제공하지 않아, 손떨림 또는 의도치 않게 기기가 흔들리는 상황에서
      					바코드가 실행되는 오작동이 발생할 수 있으며, 사용자가 불편을 겪을 수 있습니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/215/img-motion-actuation02.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      				<dl className="mt_ms dl_lst">
      					<dt className="font-14-important t_black">개선 방법</dt>
      					<dd>
      						흔들어 결제 바코드를 보여주는 기능을 켜고 끌 수 있는 설정 기능을 제공합니다.<br />
      						문제를 사전에 예방하기 위해 끔 상태를 기본으로 제공하고, 사용자가 원할 때 켤 수 있도록 제공하는 것을 고려할 수 있습니다.
      					</dd>
      				</dl>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">접근 가능한 대체 인터페이스 미제공</h4>
      				<p className="mt_s">
      					건물 내부를 VR을 통해 둘러볼 수 있도록 제공한 관광지를 소개하는 웹 페이지 예시입니다.<br />
      					기기를 기울이거나 몸을 돌려서 360도 화면을 둘러볼 수 있고, 터치 스와이프 제스처로도 시점을 이동할 수 있습니다.
      					하지만 상하좌우 버튼과 같은 추가 조작 인터페이스가 없어,
      					휠체어에 고정된 기기를 사용하거나 음성 명령만 이용하는 사용자에게는 사실상 VR 시점 이동이 어렵습니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/215/img-motion-actuation03.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      				<dl className="mt_ms dl_lst">
      					<dt className="font-14-important t_black">개선 방법</dt>
      					<dd>
      						“상하좌우” 이동 버튼을 제공하여, 마우스 클릭이나 키보드·음성 입력만으로도 VR 시점을 조정할 수 있도록 합니다.<br />
      						버튼을 길게 누르면 화면이 계속 회전되는 등 세밀한 이동 방식을 마련해, 동작 없이도 원활히 VR 체험이 가능하도록 합니다.
      						또한 기기를 기울이거나 회전하는 입력을 아예 끌 수 있는 설정을 두어, 의도치 않게 화면이 움직이지 않도록 합니다.
      					</dd>
      				</dl>
      			</div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">준수 사례</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">동작 기반 기능 비활성화 설정과 접근 가능한 사용자 인터페이스 제공</h4>
      				<p className="mt_s">
      					기기를 흔들어 결제를 위한 바코드를 노출시키는 기능이 제공되는 모바일 애플리케이션의 사례입니다.
      				</p>
      				<ul className="mt_sm indent_small dot_lst">
      					<li>
      						손떨림이 심한 사용자의 경우, 손떨림으로 인한 기기의 흔들림이 의도하지 않은
      						결제 바코드 노출을 실행하지 않도록 기능을 꺼둘 수 있는 설정이 제공됩니다.
      					</li>
      					<li>
      						동시에 이 기능을 꺼두더라도, 버튼을 누르는 것만으로 결제 바코드를 노출시킬 수 있는 대체 버튼이 제공됩니다.
      					</li>
      					<li>
      						모바일 애플리케이션의 사례이지만, 웹 페이지에서 이러한 동작 기반 기능을 제공할
      						경우에도 이와 동등한 수준으로 제공할 필요가 있습니다.
      					</li>
      				</ul>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/215/img-motion-actuation01.png`} alt="" />
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
      			<iframe width="560" height="315" src="https://www.youtube.com/embed/59e421exjHQ?si=pQkjgsPYldmaemDG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      		</div>
      		<p className="mt_ms">
      			출처 : 리베하얀
      		</p>
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">동작기반 작동 | 웹 접근성 콘텐츠 제작 기법(&quot;운용의 용이성(Operable)&quot;) 참조</strong>
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

export default MotionActuationPage
