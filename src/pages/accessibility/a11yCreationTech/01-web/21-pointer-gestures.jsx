import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import { toggleContent } from '@/utils/toggleContent.js'

const PAGE_LAYOUT = {
  mainClass: "pointer-gestures",
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
  title: "단일 포인터 입력 지원 | 웹 접근성 콘텐츠 제작 기법(\"운용의 용이성(Operable)\")",
  description: "웹 접근성 콘텐츠 제작 기법이란 장애 유무에 관계없이 모든 사용자가 웹 콘텐츠를 쉽게 이해하고 이용할 수 있도록 하는 설계하는 방법입니다. 이 페이지에서는 웹 접근성 콘텐츠 제작 기법 중 하나인 '단일 포인터 입력 지원'에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성, 웹 접근성, 웹 접근성 콘텐츠 제작 기법, 한국형 웹 콘텐츠 접근성 지침 2.2, WCAG2.2, KWCAG2.2, 보조기술과의호환성, 접근성 테스트 도구 활용 점검방법, 스크린 리더, Jaws, NVDA, 센스리더, Sense Reader, 지체 장애 사용자, 시각장애인, 고령자",
}

function PointerGesturesPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>










      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_black">관련 지침 : 다중 포인터 또는 경로기반 동작을 통한 입력은 단일 포인터 입력으로도 조작할 수 있어야 한다.</b><br />
      			터치 기반 기기에서 두 손가락 이상을 요구하거나 특정 경로를 따라야 하는 제스처가 필요한 경우에도,
      			<b>사용자가 한 손가락만으로 최소한의 동작으로 콘텐츠와 상호작용할 수 있도록 보장하기 위함</b>입니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 용어 설명</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>포인터 입력</strong>
      				<p>
      					마우스, 펜 또는 터치 접촉과 같이 화면에서 특정 좌표(또는 좌표 세트)를 대상으로 삼는 입력
      				</p>
      			</li>
      			<li>
      				<strong>단일 포인터(single pointer)</strong>
      				<p>
      					단일 탭과 클릭, 더블 탭과 클릭, 길게 누르기 등을 포함하여, 화면과 접촉하는 한 지점에서 작동하는 포인터 입력
      				</p>
      			</li>
      			<li>
      				<strong>다중 포인터(multipoint gesture)</strong>
      				<p>
      					핀치 줌, 멀티 터치 회전, 세 손가락 탭 등 두 개 이상의 포인터를 이용해서 입력해야 하는 입력 방식
      				</p>
      			</li>
      			<li>
      				<strong>경로기반 동작(path-based gesture)</strong>
      				<p>
      					직선 그리기, Z 자 그리기와 같이 사용자가 화면에서 특정한 경로나 모양을 그리는 동작
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 WCAG 2.2 성공 기준</h2>

      		<p className="mt_l success_criteria">
      			<a href="https://www.w3.org/TR/WCAG22/#pointer-gestures" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">2.5.1 Pointer Gestures (Level A)</a>
      			<a href="https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">WAI - Understanding Pointer Gestures</a>
      			<a href="https://developer.mozilla.org/en-US/docs/Web/API/Touch_events" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">MDN - Touch events</a>
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">단일 포인터 입력 지원 예외 상황</h2>

      		

      		<p className="mt_l">
      			두 개 이상의 손가락을 동시에 사용해야 하는 다중 포인터(예: 핀치 줌, 두 손가락 탭 등) 또는
      			쓸어 넘기기 등의 경로 기반 동작(예: 스와이프, 끌기와 놓기, 그리기 등)을 통한 입력으로 작동하는 모든 기능은
      			<b>단일 포인터 입력으로도 조작할 수 있는 대체 수단</b>이 제공되어야 합니다.
      		</p>
      		<dl className="dl_dot_lst mt_sm">
      			<dt>구체적인 대체 방법 예시 :</dt>
      			<dd>
      				두 손가락 핀치 줌 기능 대신, 한 손가락으로 조작 가능한 <i className="key_plus">+</i>, <i className="key_minus">-</i> 버튼을 제공
      			</dd>
      			<dd>
      				회전 제스처 대신 회전 버튼 제공
      			</dd>
      			<dd>
      				파일이나 항목 끌기(drag) 대신, “선택” 후 “이동” 버튼 제공
      			</dd>
      			<dd>
      				특정 모양을 그려야 하는 동작 대신, 동일한 기능을 실행하는 버튼 제공
      			</dd>
      		</dl>

      		<p className="mt_ml">
      			이러한 대체 수단은 사용자가 쉽게 발견할 수 있어야 하며, 원래 제스처나 끌기(drag) 동작과 동등한 기능을 제공해야 합니다.
      		</p>
      		<dl className="dl_dot_lst">
      			<dt>다만, 다음의 경우에는 예외로 인정됩니다.</dt>
      			<dd>
      				<strong>필수적인 경우</strong>
      				<p>
      					피아노 애플리케이션에서 건반을 동시에 눌러야 하거나, 서명 기능처럼 사용자의 자유로운 손 움직임이 핵심 기능에 필수적인 경우
      				</p>
      			</dd>
      			<dd className="mt_sm">
      				<strong>운영체제·브라우저 기본 제공 동작</strong>
      				<p>
      					두 손가락으로 화면 스크롤, 핀치 줌 아웃, 엣지 스와이프 등 표준 제스처는 예외로 간주됩니다.
      				</p>
      			</dd>
      		</dl>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">기대효과</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				한 손가락 또는 스틱 포인팅 장치를 사용하거나 다중 포인터 동작을 통한 입력이 불가능하거나
      				어려운 사용자도 해당 장치나 동작을 통한 입력을 할 수 있습니다.
      			</li>
      			<li>
      				손떨림, 시각장애 등으로 끌기 동작이나 복잡하거나 정교한 동작, 또는 그리기 동작을 통한 입력이
      				어려운 사용자도 해당 동작을 통한 입력을 적절하게 수행할 수 있습니다.
      			</li>
      			<li>
      				복잡한 조작 과정이나 수단을 통한 입력을 이해하기 어려운 인지 또는 학습장애 사용자도 해당 조작
      				과정이나 수단을 통한 입력을 보다 쉽게 수행할 수 있습니다.
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">필요성</h2>

      		

      		<p className="mt_l">
      			두 손가락으로 쓸어내리는 동작이나 다중 포인터 기반 입력은, 일부 장애가 있거나 한 손가락만 사용할 수 있는 사용자에게는 수행이 어렵습니다.<br />
      			또한, 스와이프 제스처나 끌기(drag) 기반 조작은 손떨림이나 근력 약화, 정밀 조작이 어려운 사용자에게 큰 부담이 될 수 있습니다.
      		</p>
      		<p className="mt_sm">
      			따라서 모든 기능은 <b>단일 입력 방식</b>으로도 작동할 수 있어야 하며, 다음과 같은 대체 수단을 제공할 필요가 있습니다:
      		</p>
      		<ul className="mt_ms dot_lst gap-column-important-sm">
      			<li>
      				스와이프 대신 버튼이나 슬라이더 형태로 제공
      			</li>
      			<li>
      				끌기와 놓기 기능을 버튼 클릭으로 대체
      			</li>
      			<li>
      				핀치 줌이나 회전 기능을 각각 확대/축소 버튼, 회전 버튼으로 대체
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
      					<p className="cell content">다중 입력 불가 또는 복잡한 제스처 수행 어려움</p>
      				</li>
      				<li>
      					<p className="cell value">시각장애인</p>
      					<p className="cell content">스크린 리더 사용 시 제스처 수행 불가능</p>
      				</li>
      				<li>
      					<p className="cell value">고령자</p>
      					<p className="cell content">정밀한 손동작 조작이 어려움</p>
      				</li>
      			</ul>
      		</div>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">체크리스트</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				핀치 확대/축소 또는 회전 등의 기능이 단일 입력으로도 제공되는가?
      			</li>
      			<li>
      				다중 경로를 요구하는 기능에 대체 UI 또는 단일 입력 방식이 있는가?
      			</li>
      			<li>
      				스와이프 등의 제스처가 버튼, 슬라이더 등으로 대체 가능한가?
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">테스트 방법</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				핀치 줌 또는 회전 기능을 단일 포인터로 수행 가능한지 확인합니다.
      			</li>
      			<li>
      				다중 손가락 제스처 대신 버튼이나 UI 구성요소로 대체되어 있는지 확인합니다.
      			</li>
      			<li>
      				스크린 리더 사용 또는 한 손가락 입력만으로 기능 사용 가능 여부를 테스트 합니다.
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">QA 지표</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				단일 포인터 대체 기능 제공률
      			</li>
      			<li>
      				제스처 기반 기능의 접근 가능한 UI 제공률
      			</li>
      			<li>
      				다중 제스처 사용이 요구되는 기능 수
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">개발방법</h2>

      		<article className="mt_l indent">
      			<h3 className="ml_mn t_blue">html + JavaScript 예시 – 확대/축소 대체 버튼 제공</h3>

      			
      <CodeBlock title="html - 단일 포인터 입력 지원" language="javascript" className="uk_gist_code_box">
      {`<button onclick="zoomIn()">확대</button>
      					<button onclick="zoomOut()">축소</button>

      					<script>
      						function zoomIn() {
      							document.body.style.zoom = (parseFloat(document.body.style.zoom) || 1) + 0.1;
      						}
      						function zoomOut() {
      							document.body.style.zoom = (parseFloat(document.body.style.zoom) || 1) - 0.1;
      						}
      					</script>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">Vue 예시 – 제스처 대신 버튼 UI 제공</h3>

      			
      <CodeBlock title="Vue - 단일 포인터 입력 지원" language="javascript" className="uk_gist_code_box">
      {`<template>
      						<div>
      							<button @click="zoomIn">확대</button>
      							<button @click="zoomOut">축소</button>
      						</div>
      					</template>

      					<script setup>
      						import { ref } from 'vue';
      						const zoom = ref(1);

      						function zoomIn() {
      							zoom.value += 0.1;
      							document.body.style.zoom = zoom.value;
      						}

      						function zoomOut() {
      							zoom.value -= 0.1;
      							document.body.style.zoom = zoom.value;
      						}
      					</script>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">React 예시 – 확대/축소 버튼 제공</h3>

      			
      <CodeBlock title="React - 단일 포인터 입력 지원" language="javascript" className="uk_gist_code_box">
      {`import React, { useState } from "react";

      					function ZoomButtons() {
      						const [zoom, setZoom] = useState(1);

      						const zoomIn = () => {
      							const newZoom = zoom + 0.1;
      							document.body.style.zoom = newZoom;
      							setZoom(newZoom);
      						};

      						const zoomOut = () => {
      							const newZoom = zoom - 0.1;
      							document.body.style.zoom = newZoom;
      							setZoom(newZoom);
      						};

      						return (
      							<>
      								<button onClick={zoomIn}>확대</button>
      								<button onClick={zoomOut}>축소</button>
      							</>
      						);
      					}

      					export default ZoomButtons;`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 기준</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				다중 포인터 또는 제스처 기반 기능에 단일 입력 대안이 있는가?
      			</li>
      			<li>
      				사용자가 단일 손가락/마우스 입력으로도 조작 가능하도록 되어 있는가?
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 방법</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				핀치 줌이나 회전 제스처를 단일 클릭 또는 버튼으로 대체 가능한지 확인해야 합니다.
      			</li>
      			<li>
      				UI 내 확대, 축소, 슬라이드 등 기능에 접근 가능한 대체 요소 존재 여부를 확인해야 합니다.
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">준수/미준수 사례</h2>

      		<article className="mt_l indent">
      			<h3 className="ml_mn t_red" data-conlist-h4="true">미준수 사례</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">다중 포인터 동작을 대체할 수 있는 단일 포인터 입력 미지원</h4>
      				<p className="mt_s">
      					다음은 숙소 서비스에서 핀치 줌 인/아웃 기능으로 확대 및 축소할 수 있는 지도 기반 검색 기능 사례입니다.<br />
      					핀치 줌 인/아웃은 동시에 두 손가락으로 조작해야 하기 때문에, 손가락을 사용할 수 없거나
      					원하는 대로 움직일 수 없는 사용자의 경우에는 이 조작이 매우 어려울 수 있습니다.
      					음성 명령 사용자도 핀치 줌 조작을 명령할 수 없기 때문에 확대/축소 행위를 할 수 없습니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/212/img-pointer-gestures03.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      				<dl className="mt_ms dl_lst">
      					<dt className="font-14-important t_black">개선 방법</dt>
      					<dd>
      						단일 포인터 입력만으로 확대/축소가 가능하도록 확대/축소 버튼을 제공합니다.
      						버튼으로 제공된 컨트롤은 보조기기 등을 통해서도 조작할 수 있습니다.
      					</dd>
      				</dl>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">끌기와 놓기를 대체할 수 있는 단일 포인터 입력 미지원</h4>
      				<p className="mt_s">
      					다음은 끌기와 놓기를 통한 이미지 업로드를 제공하는 웹 앨범 서비스 사례입니다.<br />
      					끌기와 놓기 동작으로만 파일 첨부가 가능한 사용자 인터페이스의 경우,
      					마우스나 터치 스크린과 같은 포인팅 기기를 사용하기 어려운 사용자
      					또는 화면을 볼 수 없는 사용자는 파일을 첨부하기 매우 어렵습니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/212/img-pointer-gestures04.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      				<dl className="mt_ms dl_lst">
      					<dt className="font-14-important t_black">개선 방법</dt>
      					<dd>
      						‘파일선택’ 버튼 등을 제공하여 끌어다 놓는 동작이 아닌 단순 버튼 클릭만으로도 파일을 선택하여 파일 첨부가 가능하도록 제공합니다.
      					</dd>
      				</dl>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">경로 기반 동작을 대체할 수 있는 단일 포인터 입력 미지원</h4>
      				<p className="mt_s">
      					다음은 쇼핑몰에서 작은 화면에 여러 추천 상품을 노출하기 위해 스와이프 동작을 통해 이전/다음 콘텐츠를 보여주는 사례입니다.<br />
      					좌에서 우 또는 우에서 좌로의 경로를 그려 이전/다음 콘텐츠를 표시하는 경우,
      					화면을 볼 수 없는 사용자 또는 손 떨림이 심한 사용자 등은 올바른 경로를 그리기 어렵기 때문에 기능을 이용하기 어려울 수 있습니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/212/img-pointer-gestures05.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      				<dl className="mt_ms dl_dot_lst">
      					<dt>개선 방법</dt>
      					<dd>
      						단일 포인터 입력만으로 이전/다음 콘텐츠를 노출할 수 있는 버튼을 제공합니다.
      					</dd>
      					<dd>
      						특정 순서의 콘텐츠를 바로 노출할 수 있는 컨트롤(예를 들어, 페이지 입력 상자 또는 인디케이터 등)을 제공합니다.
      					</dd>
      					<dd>
      						전체 콘텐츠를 한 번에 펼쳐 볼 수 있는 버튼을 제공합니다.
      					</dd>
      				</dl>
      			</div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">준수 사례</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">다중 포인터 동작을 단일 포인터 동작으로 조작할 수 있는 버튼 제공</h4>
      				<p className="mt_s">
      					다음은 지도 서비스로 두 손가락 핀치 줌 인/아웃 기능이 제공되는 사례입니다.<br />
      					한 손가락으로 조작 가능한 <i className="key_plus none_text">+</i> / <i className="key_minus none_text">-</i> 버튼을 제공함으로써,
      					다중 포인터 동작이 어렵거나 불가능한 사용자도 쉽게 지도를 확대하고 축소할 수 있습니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/212/img-pointer-gestures01.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">경로 기반 동작을 단일 포인터 동작으로 조작할 수 있도록 제공</h4>
      				<p className="mt_s">
      					다음은 스와이프 제스처로 이전/다음 콘텐츠를 볼 수 있는 기능입니다.<br />
      					스와이프 동작뿐만 아니라 한 손가락으로 조작 가능한 이전/다음 버튼으로도 제공함으로써,
      					스와이프 동작이 어려운 사용자도 쉽게 콘텐츠를 탐색할 수 있습니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/212/img-pointer-gestures02.png`} alt="" />
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
      			<iframe width="560" height="315" src="https://www.youtube.com/embed/eV90b5w3qJk?si=dnrwLzHf9_mmR0yB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      		</div>
      		<p className="mt_ms">
      			출처 : 리베하얀
      		</p>
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">단일 포인터 입력 지원 | 웹 접근성 콘텐츠 제작 기법(&quot;운용의 용이성(Operable)&quot;) 참조</strong>
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

export default PointerGesturesPage
