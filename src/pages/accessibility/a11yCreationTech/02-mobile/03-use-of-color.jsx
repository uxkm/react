import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import { toggleContent } from '@/utils/toggleContent.js'

const PAGE_LAYOUT = {
  mainClass: "use-of-color",
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
  title: "색에 무관한 인식 | 모바일 접근성 콘텐츠 제작 기법(\"인식의 용이성(Perceivable)\")",
  description: "모바일 접근성 콘텐츠 제작 기법이란 장애 유무에 관계없이 모든 사용자가 모바일 콘텐츠를 쉽게 이해하고 이용할 수 있도록 하는 설계하는 방법입니다. 이 페이지에서는 모바일 접근성 콘텐츠 제작 기법 중 하나인 '색에 무관한 인식'에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성, 모바일 앱 접근성, 모바일 앱 접근성 콘텐츠 제작 기법, WCAG2.2, 색각 이상, 색에 무관한 정보 제공, 색상 인식, 대체 텍스트, 기호 사용, 스크린 리더, VoiceOver, TalkBack, 네이티브, 하이브리드",
}

function UseOfColorPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>










      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_black">관련 지침(명료성) : 화면에 표시되는 모든 정보는 색에 관계없이 인식될 수 있어야 한다.</b><br />
      			모바일 앱에서 제공되는 콘텐츠는 색에 의존하지 않고 모든 정보가 전달될 수 있어야 합니다.
      			사용자가 색각 이상, 시각 장애, 또는 기타 이유로 색 구분이 어려운 상황에서도
      			정보를 인식할 수 있도록 콘텐츠를 구성해야 합니다.
      		</p>
      		<p className="mt_ms reference">
      			<a href="https://www.w3.org/WAI/WCAG22/quickref/#use-of-color" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">WCAG 2.2 Quick Reference - Use of Color</a>
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">필요성</h2>
      		<p className="mt_l">
      			색각 이상이나 시각 장애를 가진 사용자는 색상 구분이 어려울 수 있습니다.
      			이들이 중요한 정보를 놓치지 않도록 색상 외에도 텍스트, 기호, 패턴 등을 사용해 정보를 제공해야 합니다.<br />
      			색에 의존하지 않는 정보 제공은 접근성을 보장하고, 사용자 경험을 개선하며, 법적 요구사항을 충족하는 데 필수적입니다.
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">대상</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>색각 이상 사용자</strong>
      				<p>
      					색을 구분하기 어려운 사용자.
      				</p>
      			</li>
      			<li>
      				<strong>시각 장애인</strong>
      				<p>
      					색 정보를 인식할 수 없는 사용자.
      				</p>
      			</li>
      			<li>
      				<strong>고령자</strong>
      				<p>
      					색 인식 능력이 저하된 사용자.
      				</p>
      			</li>
      			<li>
      				<strong>비장애인 포함 전체 사용자</strong>
      				<p>
      					화면의 가시성 문제나 기기 설정으로 인해 색 구분이 어려운 사용자.
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">체크리스트</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>색상 외의 시각적 단서 제공</strong>
      				<p>
      					중요한 정보나 상태를 색상 외의 방법(예: 텍스트, 기호)으로도 전달하고 있는가?
      				</p>
      			</li>
      			<li>
      				<strong>텍스트 또는 아이콘 추가</strong>
      				<p>
      					색을 통해 상태나 피드백을 제공하는 경우, 추가적인 텍스트나 아이콘으로 설명이 제공되는가?
      				</p>
      			</li>
      			<li>
      				<strong>배경과 대비</strong>
      				<p>
      					텍스트와 배경색 간의 충분한 색 대비를 통해 모든 사용자가 정보를 인식할 수 있는가?
      				</p>
      			</li>
      			<li>
      				<strong>색각 이상 시뮬레이션 테스트</strong>
      				<p>
      					색각 이상 사용자들에게 어떻게 보일지 시뮬레이션 테스트가 이루어졌는가?
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">기기별 테스트 방법</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">iOS</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms reference">
      				<li>
      					<strong>색상 필터 활성화</strong>
      					<p>
      						설정 &gt; 접근성 &gt; 디스플레이 및 텍스트 크기 &gt; 색상 필터를 사용해
      						앱의 콘텐츠가 색각 이상 사용자에게 어떻게 보이는지 테스트합니다.
      					</p>
      				</li>
      				<li>
      					<strong>VoiceOver 활성화</strong>
      					<p>
      						텍스트나 기호를 통해 충분히 설명이 제공되고 있는지 확인합니다.
      					</p>
      				</li>
      				<li>
      					<strong>상세 가이드</strong>
      					<p>
      						<a href="https://help.apple.com/iphone/11/?lang=ko#/iph3e2e415f" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">iPhone 사용 설명서 - VoiceOver</a>
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">Android</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms reference">
      				<li>
      					<strong>색상 보정 모드</strong>
      					<p>
      						설정 &gt; 접근성 &gt; 색상 보정 기능을 사용하여 색각 이상 모드를 활성화하고 테스트합니다.
      					</p>
      				</li>
      				<li>
      					<strong>TalkBack 활성화</strong>
      					<p>
      						색 외의 시각적 단서가 제대로 제공되고 있는지 확인합니다.
      					</p>
      				</li>
      				<li>
      					<strong>상세 가이드</strong>
      					<p>
      						<a href="https://support.google.com/accessibility/android/topic/10601571?hl=ko&ref_topic=3529932&sjid=14261166623289476037-AP" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">Android 접근성 고객센터 - TalkBack 및 Android</a>
      					</p>
      				</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">QA 지표</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>색상 외 정보 제공 비율</strong>
      				<p>
      					색상 외의 텍스트, 기호, 아이콘 등을 통해 정보를 제공하는 비율.
      				</p>
      			</li>
      			<li>
      				<strong>색상 대비 비율</strong>
      				<p>
      					텍스트와 배경 사이의 색상 대비 비율(최소 4.5:1 이상)을 유지하는지 여부.
      				</p>
      			</li>
      			<li>
      				<strong>시뮬레이션 테스트</strong>
      				<p>
      					색각 이상 시뮬레이션 테스트 결과 및 사용자 피드백.
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">개발방법</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">네이티브</h3>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">iOS</h4>
      				<p className="mt_ms">
      					경고 메시지 제공
      				</p>
      				
      <CodeBlock title="색에 무관한 인식 - iOS" language="javascript" className="uk_gist_code_box">
      {`let warningLabel = UILabel()
      						warningLabel.text = "Error occurred"
      						warningLabel.textColor = .red
      						warningLabel.accessibilityLabel = "Error occurred"`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">Android</h4>
      				<p className="mt_ms">
      					버튼 색상과 텍스트로 상태 표시
      				</p>
      				
      <CodeBlock title="색에 무관한 인식 - Android" language="javascript" className="uk_gist_code_box">
      {`<Button
      							android:id="@+id/button"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="Submit"
      							android:backgroundTint="@color/green"
      							android:contentDescription="Submit button, status: success" />`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">하이브리드</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드(html)</h4>
      				
      <CodeBlock title="색에 무관한 인식 - 하이브리드(html)" language="javascript" className="uk_gist_code_box">
      {`<button style="background-color: green;">
      							Submit
      							<span>(성공)</span>
      						</button>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드(Vue)</h4>
      				
      <CodeBlock title="색에 무관한 인식 - 하이브리드(Vue)" language="javascript" className="uk_gist_code_box">
      {`<template>
      							<button :style="{ backgroundColor: buttonColor }">
      								Submit <span v-if="status === 'success'">(성공)</span>
      							</button>
      						</template>

      						<script>
      							export default {
      								data() {
      									return {
      										buttonColor: 'green',
      										status: 'success'
      									};
      								}
      							};
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드(React)</h4>
      				
      <CodeBlock title="색에 무관한 인식 - 하이브리드(React)" language="html" className="uk_gist_code_box">
      {`import React from 'react';

      						function SubmitButton({ status }) {
      							const isSuccess = status === 'success';

      							return (
      								<button style={{ backgroundColor: isSuccess &#63; green &#58; red }}>
      									{isSuccess ? '성공' : '제출'}
      								</button>
      							);
      						}

      						export default SubmitButton;`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 기준</h2>
      		<p className="mt_l">
      			색상으로 정보를 구분할 경우, 색상 이외의 다른 방법으로도 동등한 내용을 전달합니다.
      		</p>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">오류유형</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong>색상 외 정보 제공 여부</strong>
      					<p>
      						색상만으로 정보를 전달하지 않고 텍스트, 기호, 패턴 등의 추가적인 시각적 단서가 있는가?
      					</p>
      				</li>
      				<li>
      					<strong>색상 대비 확인</strong>
      					<p>
      						텍스트와 배경 간의 색상 대비가 최소 4.5:1을 유지하는가?
      					</p>
      				</li>
      				<li>
      					<strong>색각 이상 사용자를 고려한 설계</strong>
      					<p>
      						색각 이상 사용자가 정보를 인식할 수 있도록 보완적인 디자인 요소가 적용되었는가?
      					</p>
      				</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 방법</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">iOS</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong>VoiceOver 사용</strong>
      					<p>
      						색상 외의 정보 제공 여부를 확인합니다.
      					</p>
      				</li>
      				<li>
      					<strong>색상 필터 사용</strong>
      					<p>
      						다양한 색각 이상 조건에서 앱의 가시성을 테스트합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">Android</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong>TalkBack 사용</strong>
      					<p>
      						색 외의 정보가 적절히 제공되는지 확인합니다.
      					</p>
      				</li>
      				<li>
      					<strong>색상 보정 모드 사용</strong>
      					<p>
      						색각 이상 사용자에 대한 대응 여부를 테스트합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">방법 1 (네이티브-문서 제공기준)</h3>
      			<p className="mt_ml">
      				색상으로 정보를 구분하는 경우, 색상을 대체할 수 있는 정보(텍스트, 이미지, 심볼 등)도 함께 제공하는지를 점검합니다.
      			</p>
      			<ul className="mt_s dot_lst gap-column-important-sm">
      				<li>
      					화면의 구성 요소(List 등)들이 색으로만 구분토록 되어 있는지 확인합니다.
      				</li>
      				<li>
      					화면 내 콘텐츠(이미지, 그래프, 차트 등)이 색상만으로 구분토록 되어 있는 지 확인합니다.
      				</li>
      				<li>
      					화면 변환 (현재 위치/변경 화면)이 색상만으로 제공 되어 있는지 확인합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">방법 2 (네이티브-문서 제공기준)</h3>
      			<p className="mt_ml">
      				접근성 기능의 흑백음영 기능을 이용하여 색상정보 없이 콘텐츠 정보를 인식할 수 있는지 확인합니다.
      			</p>
      			<figure className="mt_ms img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_01.png`} alt="" />
      				<figcaption>
      					[출처 : 모바일 애플리케이션 접근성 제작기법]
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">방법 3 (하이브리드)</h3>
      			<p className="mt_ml">
      				크롬(Chrome) 브라우저 요소검사를 이용하여 점검합니다.
      			</p>
      			<ul className="mt_s dot_lst gap-column-important-sm">
      				<li>
      					현재 페이지에서 F12 를 눌러 Chrome DevTools를 실행합니다.
      				</li>
      				<li>
      					우측 상단 메뉴 → 도구 더 보기 → 렌더링을 클릭합니다.
      				</li>
      				<li>
      					스크롤을 내려 색맹 에뮬레이션을 찾고 에뮬레이션 옵션을 변경합니다.
      				</li>
      				<li>
      					색맹 에뮬레이션(Emulate vision deficiencies) 옵션을 변경하며 위 이미지의 변화를 확인합니다.
      				</li>
      				<li>
      					Customize and Control DevTools → More tools → Rendering
      				</li>
      			</ul>
      			<figure className="mt_ms img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_02.png`} alt="" /><br />
      				<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_03.png`} alt="" className="mt_s" /><br />
      				<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_04.png`} alt="" className="mt_s" />
      				<figcaption>
      					[크롬(Chrome) 브라우저 색맹 에뮬레이션 테스트]
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">방법 4 (하이브리드 : 색맹 에뮬레이션)</h3>
      			<p className="mt_ml">
      				색맹 에뮬레이션(Emulate vision deficiencies)은 아래의 6개 옵션을 제공합니다.
      			</p>
      			<ul className="mt_s dot_lst info_lst gap-column-important-s">
      				<li className="mb_s">
      					<b className="t_black">흐릿한 시야(Blurred vision)</b><br />
      					블러 모드를 선택하면 화면이 뿌옇게 표시되어 저시력 장애를 간접 체험할 수 있게 합니다.

      					<figure className="mt_ms img_figure">
      						<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_05.png`} alt="" className="max-w350" />
      						&nbsp;
      						<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_06.png`} alt="" />
      						<figcaption>
      							[저시력 장애 간접 체험]
      						</figcaption>
      					</figure>
      				</li>
      				<li>
      					<b className="t_black">대비 감소(Reduced contrast)</b>
      				</li>
      				<li className="mb_s">
      					<b className="t_black">제1색맹(적색맹) / 제2색맹(녹색맹)</b><br />
      					Deuteranopia(no green / no red): 적색과 녹색을 구별할 수 없고, 어두운 색상으로 인식합니다.<br />
      					적색맹 이상(Protanopia) 또는 녹색맹(Deuteranopia) 모드를 선택하면 빨간색과 녹색 대신 노란색과 갈색으로 표시되는 색각 이상을 체험할 수 있습니다.

      					<figure className="mt_ms img_figure">
      						<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_07.png`} alt="" className="max-w350" />
      						&nbsp;
      						<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_08.png`} alt="" />
      						<figcaption>
      							[적녹 색각 이상 간접 경험]
      						</figcaption>
      					</figure>
      				</li>
      				<li className="mb_s">
      					<b className="t_black">제3색맹(청색맹)</b><br />
      					Tritanopia(no blue): 청색과 노란색을 구분할 수 없습니다.

      					<figure className="mt_ms img_figure">
      						<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_09.png`} alt="" className="max-w350" />
      						&nbsp;
      						<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_10.png`} alt="" />
      						<figcaption>
      							[청황 색각 이상 간접 경험]
      						</figcaption>
      					</figure>
      				</li>
      				<li className="mb_s">
      					<b className="t_black">색맹(전색맹)</b><br />
      					색상을 전혀 구별할 수 없습니다. 약 4만 명 중에 한 명 정도로 나타나는 희귀 유전질환입니다.<br />
      					전색맹(Achromatopsia) 모드를 선택하면 빨간색, 녹색, 파란색을 모두 구분할 수 없는
      					흑백 비전(Vision)으로 화면에 표시되어 간접적으로 체험할 수 있습니다.

      					<figure className="mt_ms img_figure">
      						<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_11.png`} alt="" className="max-w350" />
      						&nbsp;
      						<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_12.png`} alt="" />
      						<figcaption>
      							[전 색맹 간접 경험 ]
      						</figcaption>
      					</figure>
      				</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">준수 사례</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 1) 색상에만 의존하지 않는 그래프 정보를 제공한 경우</h3>
      			<p className="mt_ms">
      				그래프 내 값을 제공하여 그래프 구분이 가능할 수 있도록 제공합니다.
      			</p>
      			<figure className="mt_m img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_13.png`} alt="" />
      				<figcaption>
      					[출처 : 모바일애플리케이션콘텐츠접근성지침2.0]
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 2) 선택된 항목을 적절하게 제공한 경우</h3>
      			<p className="mt_ms">
      				<b>'중형'</b> 항목에 테두리 선을 제공하여 색상 정보 없이도 선택된 콘텐츠를 인식 가능하게 테두리를 제공합니다.
      			</p>
      			<figure className="mt_m img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_14.png`} alt="" />
      				<figcaption>
      					[출처 : 모바일애플리케이션콘텐츠접근성지침2.0]
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">미준수 사례</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 1) 그래프 내 각 항목 등 정보의 구분을 색상으로만 표시하여, 색상 제거 시 동등한 정보 전달이 되지 않는 경우</h3>
      			<p className="mt_ms">
      				납부 금액 그래프의 구분을 색상으로만 구분하여 제공하고 있습니다.
      			</p>
      			<figure className="mt_m img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_15.png`} alt="" />
      				<figcaption>
      					[출처 : 모바일애플리케이션콘텐츠접근성지침2.0]
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 2) 그래프 내 각 항목 등 정보의 구분을 색상으로만 표시하여, 색상 제거 시 동등한 정보 전달이 되지 않는 경우</h3>
      			<p className="mt_ms">
      				전국의 투표결과 색상으로만 제공하고 있습니다.
      			</p>
      			<figure className="mt_m img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_16.png`} alt="" />
      				<figcaption>
      					[출처 : 모바일애플리케이션콘텐츠접근성지침2.0]
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 3) 선택된 항목을 색상으로만 제공한 경우</h3>
      			<p className="mt_ms">
      				<mark>'휴대폰'</mark> 선택 정보를 색상으로만 제공하고 있고,
      				<mark>'약관 동의'</mark> 선택 정보를 색상으로만 제공하고 있습니다.
      			</p>
      			<figure className="mt_m img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_53}/5.3.a11y_tmp_17.png`} alt="" />
      				<figcaption>
      					[출처 : 모바일애플리케이션콘텐츠접근성지침2.0]
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 영상</h2>
      		<div className="mt_xl youtube_box" style={{ '--padding-top': "56.25%" }}>
      			<iframe width="560" height="315" src="https://www.youtube.com/embed/W1e3oeXSaZQ?si=I_QUln4IFznHhVEu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      		</div>
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">색에 무관한 인식 | 모바일 접근성 콘텐츠 제작 기법(&quot;인식의 용이성(Perceivable)&quot;) 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/WAI/standards-guidelines/mobile/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility at W3C</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/mobile-accessibility-mapping/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility: How WCAG 2.0 and Other W3C/WAI Guidelines Apply to Mobile</a></li>
      		<li className="reference"><a href="https://www.w3.org/news/2015/first-public-working-draft-performance-timeline-level-2/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C First Public Working Draft</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/UAAG20/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C User Agent Accessibility Guidelines (UAAG) 2.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/IMPLEMENTING-UAAG20/mobile.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility Examples from UAAG 2.0 Reference</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Mobile_accessibility_checklist" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN Mobile accessibility checklist</a></li>
      		<li className="reference"><a href="https://blog.naver.com/prologue/PrologueList.naver?blogId=mohw2016" target="_blank" rel="noreferrer" title="새창 열림" className="fas">보건복지부 블로그</a></li>
      		<li className="reference"><a href="https://www.mois.go.kr/frt/bbs/type001/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000045&nttId=69451" target="_blank" rel="noreferrer" title="새창 열림" className="fas">행정안전부 - 전자정부 웹사이트 UI UX 가이드라인</a></li>
      		<li className="reference"><a href="https://nuli.navercorp.com/community/article" target="_blank" rel="noreferrer" title="새창 열림" className="fas">널리 알리는 기술 소식 커뮤니티</a></li>
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

export default UseOfColorPage
