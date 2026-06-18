import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import { toggleContent } from '@/utils/toggleContent.js'

const PAGE_LAYOUT = {
  mainClass: "non-text-content",
  type: "accessibility",
  titleSticky: true,
  info: false,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: true,
  bottomEditor: false,
  sideMenuSticky: true
}

const PAGE_DATA = {
  title: "대체 텍스트 제공 | 웹 접근성 콘텐츠 제작 기법(\"인식의 용이성(Perceivable)\")",
  description: "웹 접근성 콘텐츠 제작 기법이란 장애 유무에 관계없이 모든 사용자가 웹 콘텐츠를 쉽게 이해하고 이용할 수 있도록 하는 설계하는 방법입니다. 이 페이지에서는 웹 접근성 콘텐츠 제작 기법 중 하나인 '대체 텍스트 제공'에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성, 웹 접근성, 웹 접근성 콘텐츠 제작 기법, 한국형 웹 콘텐츠 접근성 지침 2.2, WCAG2.2, KWCAG2.2, 대체 텍스트, 비 텍스트 콘텐츠, 보조기술과의호환성, 접근성 테스트 도구 활용 점검방법, 스크린 리더, Jaws, NVDA, 센스리더, Sense Reader, 시각 장애인, 저시력 사용자, 고령자, 인지 장애인",
}

function NonTextContentPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>










      	<blockquote className="uk_note mt_xxl" role="note" style={{ position: "sticky" }}>
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_black">관련 지침 : 텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 한다.</b><br />
      			이미지 등 텍스트 아닌 콘텐츠를 이용할 경우, <b>그 의미나 용도를 동등하게 인식할 수 있도록 적절한 대체 텍스트를 제공</b>해야 합니다.
      			또한 대체 텍스트는 간단명료하게 제공해야 합니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 WCAG 2.2 성공 기준</h2>
      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>구체적인 정보를 제공해야 하는 경우</strong>
      				<p>
      					이미지 링크, 이미지 버튼 등은 용도가 매우 명확하므로, 이미지 링크나 이미지 버튼의 핵심 기능에 대한 설명을 간단한 대체 텍스트로 제공해야 합니다.
      				</p>
      			</li>
      			<li>
      				<strong>의미 있는 배경 이미지</strong>
      				<p>
      					배경 이미지의 의미가 사용자에게 전달되어야 하는 콘텐츠는 그 의미가 보조기술로 전달되도록 대체 텍스트를 제공해야 합니다.
      				</p>
      			</li>
      			<li>
      				<strong>충분한 정보가 필요한 경우</strong>
      				<p>
      					데이터 차트와 같이, 내용이 복잡한 콘텐츠는 사용자가 해당 콘텐츠의 의미를 충분히 파악할 수 있도록 대체 텍스트를 제공해야 합니다.
      				</p>
      			</li>
      		</ul>
      		<p className="mt_ml success_criteria">
      			<a href="https://www.w3.org/TR/WCAG22/#non-text-content" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">1.1.1 Non-text Content (Level A)</a>
      			<a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">WAI - Understanding Non-text Content</a>
      			<a href="https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/img#%EB%B3%80%EC%88%98_alt" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">MDN - alt 속성</a>
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">기대효과</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				시각장애 또는 지적장애 등으로 인해 시각적으로 정보를 습득하는 데 어려움을 겪는 사용자들이
      				화면낭독프로그램과 같은 보조기술을 사용하여 해당 콘텐츠를 음성을 통해 들을 수 있으므로 최소한의 접근권을 보장받을 수 있게 됩니다.
      			</li>
      			<li>
      				사용자들을 위해 텍스트 아닌 콘텐츠를 텍스트로 표시하거나 대체 텍스트를 수어로 제공함으로써 해당 콘텐츠에 접근할 수 있습니다.
      				시청각중복장애인들 역시 텍스트 아닌 콘텐츠에 대응하는 대체텍스트를 점자로 변환하는 보조기술을 이용하여 해당 콘텐츠에 대한 접근권을 보장받을 수 있습니다.
      			</li>
      			<li>
      				콘텐츠에 적절한 대체 텍스트를 제공한 경우,
      				시각으로 제공받는 정보가 불충분하여 사용자가 콘텐츠의 핵심내용을 인지할 수 없거나 잘못된 정보를 제공받음으로써 겪게 되는 불필요한 혼동을 줄일 수 있습니다.
      			</li>
      			<li>
      				대체 텍스트를 제공함으로써 텍스트 아닌 콘텐츠에 대한 검색이 가능하게 됩니다.
      			</li>
      			<li>
      				의미가 있는 배경 이미지가 의미하는 대체 텍스트를 보조기술 사용자가 인지할 수 있어 콘텐츠의 이해와 사용이 가능하게 됩니다.
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">필요성</h2>

      		<p className="mt_l">
      			이미지, 아이콘, 도형, 차트 등 비텍스트 콘텐츠는 시각적 정보만으로 의미를 전달하기 때문에,
      			이를 인식할 수 없는 사용자(예: 시각장애인 등)를 위해 반드시 대체 텍스트(<code>alt</code>, <code>aria-label</code> 등)를 제공해야 합니다.
      		</p>
      		<ul className="mt_ml dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>시각장애인 및 저시력 사용자 지원</strong>
      				<p>
      					스크린 리더가 이미지를 설명하여 의미를 전달할 수 있습니다.
      				</p>
      			</li>
      			<li>
      				<strong>이미지 로딩 실패 시 대체 정보 제공</strong>
      				<p>
      					이미지가 로드되지 않을 경우 내용을 파악할 수 있습니다.
      				</p>
      			</li>
      			<li>
      				<strong>검색 엔진 최적화(SEO) 개선</strong>
      				<p>
      					검색 엔진이 콘텐츠를 더 잘 인식할 수 있습니다.
      				</p>
      			</li>
      			<li>
      				<strong>법적 준수 요구</strong>
      				<p>
      					WCAG(Web Content Accessibility Guidelines), ADA(Americans with Disabilities Act) 등의 접근성 가이드라인을 준수할 필요가 있습니다.
      				</p>
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
      					<p className="cell value">시각장애인</p>
      					<p className="cell content">이미지 등 시각적 콘텐츠를 음성으로 전달</p>
      				</li>
      				<li>
      					<p className="cell value">인지장애 사용자</p>
      					<p className="cell content">복잡한 이미지 의미를 대체 텍스트로 명확히 전달</p>
      				</li>
      				<li>
      					<p className="cell value">고령 사용자</p>
      					<p className="cell content">시력이 저하된 사용자들 이미지가 로드되지 않아도 텍스트로 정보 전달 가능</p>
      				</li>
      				<li>
      					<p className="cell value">저시력 사용자</p>
      					<p className="cell content">이미지가 로드되지 않아도 텍스트로 정보 전달 가능</p>
      				</li>
      			</ul>
      		</div>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">체크리스트</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>대체 텍스트 제공 여부</strong>
      				<p>
      					모든 비 텍스트 콘텐츠에 대체 텍스트가 제공되고 있는가?
      				</p>
      			</li>
      			<li>
      				<strong>적절성</strong>
      				<p>
      					대체 텍스트가 콘텐츠의 의미를 정확하게 전달하고 있는가?
      				</p>
      			</li>
      			<li>
      				<strong>중복 여부</strong>
      				<p>
      					같은 콘텐츠에 대해 중복된 대체 텍스트가 제공되고 있지 않은가?
      				</p>
      			</li>
      			<li>
      				<strong>불필요한 정보 배제</strong>
      				<p>
      					장식용 이미지에 대체 텍스트가 불필요하게 포함되어 있지 않은가?
      				</p>
      			</li>
      			<li>
      				<strong>스크린 리더 테스트</strong>
      				<p>
      					대체 텍스트가 스크린 리더에서 올바르게 읽히는가?
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">테스트 방법</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				HTML 요소에서 <code>alt</code> 속성 유무 확인
      			</li>
      			<li>
      				스크린 리더(NVDA, JAWS 등)로 이미지가 올바르게 설명되는지 확인
      			</li>
      			<li>
      				장식용 이미지가 스크린 리더에 의해 무시되는지 확인
      			</li>
      			<li>
      				<strong className="t_black">자동 접근성 검사 도구 활용</strong>
      				<div className="table_summary a11y_tool mt_s">
      					<ul className="lst_hd">
      						<li className="cell value">종류</li>
      						<li className="cell content">설명</li>
      					</ul>
      					<ul className="lst_bd">
      						<li>
      							<p className="cell value">
      								<a href="https://www.freedomscientific.com/Products/Blindness/JAWS" title="새창 열림" target="_blank" rel="noreferrer">
      									<img src={`${IMG.A11Y_TECH}/a11y_tool_JAWS.png`} width="80" alt="JAWS® Solutions 페이지로 이동" loading="lazy" />
      								</a>
      							</p>
      							<p className="cell content">
      								<strong className="t_black">JAWS® Solutions</strong><br />
      								시각 장애인을 위한 대표적인 유료 스크린 리더로, 텍스트를 음성이나 점자 디스플레이로 출력하여 웹 콘텐츠를 탐색할 수 있게 해줍니다.<br />
      								<i className="t_skyblue">(이미지를 클릭하면 해당 페이지로 이동합니다.)</i>
      							</p>
      						</li>
      						<li>
      							<p className="cell value">
      								<a href="https://www.nvaccess.org/download/" title="새창 열림" target="_blank" rel="noreferrer">
      									<img src={`${IMG.A11Y_TECH}/a11y_tool_NVDA.png`} width="80" alt="NVDA Screen Reader 페이지로 이동" loading="lazy" />
      								</a>
      							</p>
      							<p className="cell content">
      								<strong className="t_black">NVDA Screen Reader</strong><br />
      								무료로 사용할 수 있는 윈도우용 스크린 리더로, 키보드만으로도 화면의 텍스트 내용을 음성으로 읽어주는 접근성 도구입니다.<br />
      								<i className="t_skyblue">(이미지를 클릭하면 해당 페이지로 이동합니다.)</i>
      							</p>
      						</li>
      						<li>
      							<p className="cell value">
      								<a href="https://wave.webaim.org/" title="새창 열림" target="_blank" rel="noreferrer">
      									<img src={`${IMG.A11Y_TECH}/a11y_tool_WAVE.png`} width="80" alt="WAVE 페이지로 이동" loading="lazy" />
      								</a>
      							</p>
      							<p className="cell content">
      								<strong className="t_black">WAVE</strong><br />
      								웹 페이지의 접근성 문제를 시각적으로 분석하고 표시해주는 평가 도구로, 시각적인 피드백을 통해 문제를 쉽게 식별할 수 있습니다.<br />
      								<i className="t_skyblue">(이미지를 클릭하면 해당 페이지로 이동합니다.)</i>
      							</p>
      						</li>
      						<li>
      							<p className="cell value">
      								<a href="https://www.deque.com/axe/devtools/" title="새창 열림" target="_blank" rel="noreferrer">
      									<img src={`${IMG.A11Y_TECH}/a11y_tool_Axe.png`} width="80" alt="Axe DevTools 페이지로 이동" loading="lazy" />
      								</a>
      							</p>
      							<p className="cell content">
      								<strong className="t_black">Axe DevTools</strong><br />
      								브라우저 개발자 도구에 통합되어 자동으로 웹 접근성 오류를 감지하고 수정 방법을 제시해주는 접근성 테스트 도구입니다.<br />
      								<i className="t_skyblue">(이미지를 클릭하면 해당 페이지로 이동합니다.)</i>
      							</p>
      						</li>
      						<li>
      							<p className="cell value">
      								<a href="https://developers.google.com/web/tools/lighthouse/" title="새창 열림" target="_blank" rel="noreferrer">
      									<img src={`${IMG.A11Y_TECH}/a11y_tool_Lighthouse.png`} width="80" alt="Lighthouse (Chrome 내장) 페이지로 이동" loading="lazy" />
      								</a>
      							</p>
      							<p className="cell content">
      								<strong className="t_black">Lighthouse (Chrome 내장)</strong><br />
      								웹 접근성, 성능, SEO 등을 종합적으로 분석하여 개선 사항을 리포트 형식으로 제공하는 크롬 내장 진단 도구입니다.<br />
      								<i className="t_skyblue">(이미지를 클릭하면 해당 페이지로 이동합니다.)</i>
      							</p>
      						</li>
      					</ul>
      				</div>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">QA 지표</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>대체 텍스트 오류 비율</strong>
      				<p>
      					대체 텍스트가 누락되거나 부정확하게 제공된 UI 요소의 비율.
      				</p>
      			</li>
      			<li>
      				<strong>스크린 리더 정확성</strong>
      				<p>
      					스크린 리더를 통해 올바르게 읽히는 대체 텍스트의 비율.
      				</p>
      			</li>
      			<li>
      				<strong>사용자 피드백</strong>
      				<p>
      					실제 사용자 테스트를 통해 대체 텍스트의 적절성에 대한 피드백을 수집.
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">개발방법</h2>

      		<article className="mt_l indent">
      			<h3 className="ml_mn t_blue">html 예시</h3>

      			
      <CodeBlock title="html - 대체 텍스트" language="javascript" className="uk_gist_code_box">
      {`<img src="sunrise.png" alt="A beautiful sunrise over the mountains">`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">Vue 예시</h3>

      			
      <CodeBlock title="Vue - 대체 텍스트" language="javascript" className="uk_gist_code_box">
      {`<template>
      						<img :src="sunriseImage" alt="A beautiful sunrise over the mountains">
      					</template>

      					<script>
      						export default {
      							data() {
      								return {
      									sunriseImage: 'sunrise.png'
      								};
      							}
      						};
      					</script>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">React 예시</h3>

      			
      <CodeBlock title="React - 대체 텍스트" language="javascript" className="uk_gist_code_box">
      {`import React from 'react';

      					function SunriseImage() {
      						return <img src="sunrise.png" alt="A beautiful sunrise over the mountains" />;
      					}

      					export default SunriseImage;`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">이미지 alt속성 작성 예시</h3>
      			<figure className="mt_ml img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_04.png`} alt="기뻐하는 죠르디" className="max-w300" />
      				<figcaption>
      					[출처 : kakaopay]
      				</figcaption>
      			</figure>
      			<p className="mt_ms">
      				위 이미지는 카카오페이 신용대출 서비스 화면에서 대출 가능성이 높음을 안내하는 배너입니다.
      				이 이미지를 기준으로 <code>alt</code> 속성을 작성한 여러 예시입니다.
      			</p>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">alt 속성을 사용하지 않은 경우</h4>
      				
      <CodeBlock title="alt 속성을 사용하지 않은 경우" language="javascript" className="uk_gist_code_box mt_m">
      {`<img src="/img/img_nudge_typeB_320x219.png" />
      						<!-- 음성출력 형태 : 이미지 넛지 타입비 삼백이십엑스이백십구피엔지 이미지 -->`}
      </CodeBlock>

      				<ul className="mt_m dot_lst gap-column-important-sm">
      					<li>
      						스크린 리더는 이미지에 <code>alt</code> 속성이 없으면 파일 이름을 표현합니다.
      					</li>
      					<li>
      						대체 텍스트가 없기 때문에 대신 이미지 경로 정보인 <code>src</code>를 음성으로 전달합니다.
      					</li>
      					<li>
      						파일의 이름으로 콘텐츠를 설명하는 것도 방법이 될 수는 있습니다.<br />
      						하지만 네트워크 오류, 콘텐츠 차단 등 서비스 관련 이미지를 표시할 수 없는 경우에는
      						서비스와 무관한 이미지의 <code>alt</code> 값이 음성으로 출력되기 때문에
      						접근성뿐만 아니라 다양한 환경의 사용자를 고려한다면 <code>alt</code> 속성은 꼭 필요한 속성입니다.
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">alt 속성을 사용했지만 값을 제공하지 않는 경우</h4>
      				
      <CodeBlock title="alt 속성을 사용했지만 값을 제공하지 않는 경우" language="javascript" className="uk_gist_code_box mt_m">
      {`<img src="/img/img_nudge_typeB_320x219.png" alt="" />
      						<!-- 음성출력 형태 : 없음 -->`}
      </CodeBlock>

      				<ul className="mt_m dot_lst gap-column-important-sm">
      					<li>
      						<code>alt</code> 속성의 값을 빈 값(<code>&quot;&quot;</code>)으로 생략해 제공하는 경우에는
      						이미지가 핵심 요소가 아님을 뜻하기 때문에 스크린 리더는 <code>img</code> 태그를 해석하지 않습니다.
      					</li>
      					<li>
      						이 경우 스크린 리더 사용자는 웹 브라우징 과정에서 이미지 요소가 있다는 것을 알 수 없습니다.
      					</li>
      					<li>
      						따라서 배경 이미지처럼 단순 디자인의 목적을 가진 이미지는
      						의도적으로 대체 텍스트를 빈 값으로 작성해 스크린 리더가 읽지 않도록 할 수 있습니다.
      					</li>
      					<li>
      						하지만 예시의 <span style={{ padding: "2px 5px", color: "#fff", backgroundColor: "#f00", borderRadius: "5px" }}>1번 이미지 영역</span>
      						<b>죠르디의 상태로 높은 대출 승인율을 표현하는 콘텐츠임을 감안</b>하면,
      						사용자에게 이미지 설명을 전달할 필요가 있기 때문에 다음 단계에서 alt 속성에 대체 텍스트를 적용합니다.
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">적합한 대체 텍스트를 작성하지 않은 경우</h4>
      				
      <CodeBlock title="alt 속성을 사용했지만 값을 제공하지 않는 경우" language="javascript" className="uk_gist_code_box mt_m">
      {`<img src="/img/img_nudge_typeB_320x219.png" alt="기뻐하는 죠르디 이미지" />
      						<!-- 음성출력 형태 : 기뻐하는 죠르디 이미지 이미지 -->`}
      </CodeBlock>

      				<ul className="mt_m dot_lst gap-column-important-sm">
      					<li>
      						시맨틱 태그는 암시적으로 <code>role</code>을 갖고 있으며, 스크린 리더는 <code>&lt;img&gt;</code> 요소를 '이미지'로 자동으로 결정하게 됩니다.
      					</li>
      					<li>
      						따라서 이미지의 존재 여부를 표현하는 '사진, 이미지, 아이콘'등의 단어를 대체 텍스트에 포함하게 되면
      						스크린 리더가 기본적으로 해석한 '이미지'와 중복된 의미를 갖기 때문에 적합하지 않습니다.
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장)적합한 대체 텍스트를 제공한 경우</h4>
      				
      <CodeBlock title="(권장)적합한 대체 텍스트를 제공한 경우" language="javascript" className="uk_gist_code_box mt_m">
      {`<img src="/img/img_nudge_typeB_320x219.png" alt="기뻐하는 죠르디" />
      						<!-- 음성출력 형태 : 기뻐하는 죠르디 이미지 -->`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">버튼에 이미지 작성 예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">스크린 리더가 코드 해석하는 방식</h4>
      				<ul className="mt_ms dot_lst gap-column-important-sm">
      					<li>
      						브라우저는 코드를 스크린 리더가 읽을 수 있는 접근성 트리(Accessibility Tree)로 만듭니다.
      					</li>
      					<li>
      						스크린 리더는 접근성 트리의 요소를 순차 탐색하게 되는데, 접근성 트리에 표시되는 요소의 Name을 기반으로 해석합니다.
      					</li>
      					<li>
      						여기서 말하는 Name은 Accessible Name이라고도 하며 스크린 리더가 요소를 포커스했을 때 읽는 값으로
      						<i className="t_blue weight-500">author</i>와 <i className="t_green weight-500">contents</i> 중 하나로 결정됩니다.
      					</li>
      					<li>
      						이때, <i className="t_blue weight-500">author</i>가 <i className="t_green weight-500">contents</i>보다 우선순위가 높습니다.
      						<ul className="dot_lst dot_lst_inner">
      							<li>
      								<b className="t_blue">author</b> :
      								<code>aria-label</code>, <code>aria-labelledby</code>, <code>title</code> 속성,
      								<code>&lt;img&gt;</code>의 <code>alt</code> 속성, svg의 <code>&lt;desc&gt;</code>
      							</li>
      							<li>
      								<b className="t_green">contents</b> : Text 노드
      							</li>
      						</ul>
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">버튼 예시</h4>
      				<figure className="mt_m img_figure">
      					<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_05.png`} alt="기뻐하는 죠르디" className="max-w400" />
      					<figcaption>
      						[출처 : kakaopay]
      					</figcaption>
      				</figure>
      				<p className="mt_ms">
      					위 이미지의 <span style={{ padding: "2px 5px", color: "#fff", backgroundColor: "#f00", borderRadius: "5px" }}>2번 이미지 영역</span>에
      					있는 물음표 모양 버튼을 보면, 내 대출 승인율이 무엇인지 자세한 정보를 확인할 수 있는 버튼임을 인식할 수 있습니다.
      					
      				</p>
      				
      <CodeBlock title="타이틀" language="javascript" className="uk_gist_code_box mt_m">
      {`<button type="button">
      						<!-- <img src="/img/img_common_question.png" alt="물음표" /> | alt 값이 구체적이지 않으며 추상적 -->
      						<img src="/img/img_common_question.png" alt="내 대출 승인율이란" /><!-- 올바른 alt 값 -->
      					</button>
      					<!-- 음성출력 형태 : 내 대출 승인율이란 버튼 -->`}
      </CodeBlock>


      				<ul className="mt_m dot_lst gap-column-important-sm">
      					<li>
      						<code>&lt;img&gt;</code>의 <i className="t_blue weight-500">author</i>는 <code>alt</code> 속성으로
      						Accessible Name은 <mark>&quot;내 대출 승인율이란&quot;</mark>이 됩니다.
      					</li>
      					<li>
      						<code>&lt;button&gt;</code>은 <i className="t_blue weight-500">author</i>가 설정되지 않은 경우
      						자식 요소의 Accessible Name을 모아
      						<i className="t_green weight-500">contents</i>로 사용하는 Children Presentational이라는 특징을 갖습니다.
      					</li>
      					<li>
      						따라서 <code>&lt;button&gt;</code>의 <i className="t_green weight-500">content</i>는
      						<mark>'내 대출 승인율이란'</mark>이 되고 스크린 리더는
      						자동적으로 결정한 <code>role</code>과 결합해 <mark>&quot;내 대출 승인율이란 버튼&quot;</mark>이라고 해석하게 됩니다.
      					</li>
      				</ul>
      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 기준</h2>

      		<p className="mt_l t_blue weight-600">
      			텍스트가 아닌 콘텐츠에 해당 이미지가 제공하는 의미나 용도를 동일하게 인식할 수 있는 적절한 대체 텍스트를 제공한다.
      		</p>
      		<ul className="mt_m dot_lst gap-column-important-sm">
      			<li>
      				모든 비텍스트 콘텐츠에 의미 있는 대체 텍스트가 있는가?
      			</li>
      			<li>
      				장식용 이미지의 경우 적절히 무시되도록 처리되었는가?
      			</li>
      			<li>
      				텍스트로 대체하기 어려운 경우 적절한 설명, 캡션, 수어, 대본 등을 제공하였는가?
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 방법</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				페이지 내 <code>&lt;img&gt;</code>, <code>&lt;svg&gt;</code>, <code>&lt;object&gt;</code> 등의 대체 텍스트 존재 여부를 확인합니다.
      			</li>
      			<li>
      				보조기술을 사용한 음성 설명 테스트를 진행합니다.
      			</li>
      			<li>
      				이미지에 적절한 <code>alt</code>, <code>aria-label</code>, <code>title</code> 속성 사용 여부 여부를 확인합니다.
      			</li>
      			<li>
      				크롬(Chrome) 브라우저 요소검사를 이용하여 점검합니다.<br />
      				해당 이미지 요소를 선택하여 우측클릭하여 요소검사를 하여 코드로 확인합니다.

      				<figure className="mt_s img_figure">
      					<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_22.jpg`} alt="" />
      					<figcaption>
      						[크롬(Chrome) 브라우저 이미지 요소검사]
      					</figcaption>
      				</figure>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">대체 텍스트를 제한적으로 제공할 수 있는 경우</h2>
      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>대체 콘텐츠의 경우</strong>
      				<p>
      					대체 콘텐츠에는 대체 텍스트를 반드시 제공할 필요는 없습니다.
      					예를 들어, 텍스트와 함께 동등한 내용의 수어 동영상을 제공하는 경우, 수어 동영상에는 대체 텍스트를 제공할 필요가 없습니다.
      				</p>
      			</li>
      			<li>
      				<strong>콘텐츠의 내용을 설명하는 대체 텍스트를 제공할 수 없는 경우</strong>
      				<p>
      					생방송 콘텐츠와 같이, 그 내용이 지속적으로 변화하여 설명하기 어려운 경우, 해당 콘텐츠에 대한 간략한 용도를 알려주는 대체 텍스트를 제공하는 것으로 충분합니다. 또한 색맹검사, 청각검사, 시력검사, 받아쓰기 등과 같은 검사 또는 시험의 경우에도 콘텐츠의 간략한 용도를 알려주는 대체 텍스트만으로 충분합니다.
      				</p>
      			</li>
      			<li>
      				<strong>특정 감각으로만 제공되는 콘텐츠인 경우</strong>
      				<p>
      					플루트 독주나 시각적 예술 작품 등의 경우, 해당 콘텐츠에 대한 간략한 용도를 알려주는 대체 텍스트만으로 충분합니다.
      				</p>
      			</li>
      			<li>
      				<strong>불필요한 설명을 제공하는 경우</strong>
      				<p>
      					단순히 장식이나 시각적인 형태를 위해 사용되는 콘텐츠의 경우, 보조기술을 통해 해당 설명을 제공받을 때 오히려 혼란을 일으킬 가능성이 있으므로 대체 텍스트로 공백 문자를 제공해야 합니다.
      				</p>
      			</li>
      			<li>
      				<strong>동일한 정보를 중복해서 제공하는 경우</strong>
      				<p>
      					보조기술로 동일한 정보가 반복해서 전달되지 않도록 구현하는 것이 바람직합니다.
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 영상</h2>
      		<div className="mt_xl youtube_box" style={{ '--padding-top': "56.25%" }}>
      			<iframe width="560" height="315" src="https://www.youtube.com/embed/n8pd6_MUzFA?si=lUQplHWABtmx1lyn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      		</div>
      		<p className="mt_ms">
      			출처 : AOA11Y (Academy Of Accessibility)
      		</p>
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">대체 텍스트 제공 | 웹 접근성 콘텐츠 제작 기법(&quot;인식의 용이성(Perceivable)&quot;) 참조</strong>
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

export default NonTextContentPage
