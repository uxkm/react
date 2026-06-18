import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import { toggleContent } from '@/utils/toggleContent.js'

const PAGE_LAYOUT = {
  mainClass: "contrast-minimum",
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
  title: "명도 대비 | 모바일 접근성 콘텐츠 제작 기법(\"인식의 용이성(Perceivable)\")",
  description: "모바일 접근성 콘텐츠 제작 기법이란 장애 유무에 관계없이 모든 사용자가 모바일 콘텐츠를 쉽게 이해하고 이용할 수 있도록 하는 설계하는 방법입니다. 이 페이지에서는 모바일 접근성 콘텐츠 제작 기법 중 하나인 '명도 대비'에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성, 모바일 앱 접근성, 모바일 앱 접근성 콘텐츠 제작 기법, WCAG2.2, 명도 대비, 저시력 사용자, 색상 대비, 사용자 인터페이스, 텍스트 가독성",
}

function ContrastMinimumPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>










      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_black">관련 지침(명료성) : 화면에 표시되는 모든 사용자 인터페이스 컴포넌트와 텍스트는 전경색과 배경색이 구분될 수 있도록 제공되어야 한다.</b><br />
      			명도 대비는 텍스트와 배경 또는 인터페이스 컴포넌트 간의 색상 차이를 의미하며,
      			이를 통해 콘텐츠가 보다 쉽게 인식될 수 있도록 해야 합니다.<br />
      			WCAG 가이드라인에서는 명도 대비 비율을 최소한 4.5:1 이상 유지할 것을 권장하며,
      			큰 텍스트(18pt 이상) 또는 굵은 텍스트(14pt 이상)는 3:1의 비율을 유지하도록 규정하고 있습니다.
      			명도 대비가 부족하면 저시력 사용자나 시각 장애인은 콘텐츠를 인식하는 데 어려움을 겪게 됩니다.
      		</p>
      		<p className="mt_ms reference">
      			<a href="https://www.w3.org/WAI/WCAG22/quickref/#contrast-minimum" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">WCAG 2.2 Quick Reference - Contrast (Minimum)</a>
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">WCAG 명도 대비 권장사항 및 시맨틱 컬러 가이드</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">WCAG 명도 대비 권장사항</h3>
      			<figure className="mt_ml img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_01.png`} alt="WCAG 명도 대비 권장사항" className="max-w550" />

      				<figcaption>
      					[WCAG 명도 대비 권장사항]
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">텍스트 크기와 무게 명도 대비 상세</h3>
      			<figure className="mt_ml img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_02.png`} alt="텍스트 크기와 무게 명도 대비 상세" className="max-w450" />

      				<figcaption>
      					[텍스트 크기와 무게 명도 대비 상세]
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">디자인 설계시 시맨틱 컬러 가이드 예시</h3>
      			<figure className="mt_ml img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_03.png`} alt="디자인 설계시 시맨틱 컬러 가이드 예시" className="max-w900" />

      				<figcaption>
      					[디자인 설계시 시맨틱 컬러 가이드 예시]
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">텍스트에 사용 가능한 색상 예시</h3>
      			<figure className="mt_ml img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_04.png`} alt="텍스트에 사용 가능한 색상 예시" className="max-w900" />

      				<figcaption>
      					[텍스트에 사용 가능한 색상 예시]
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">필요성</h2>
      		<p className="mt_l">
      			명도 대비는 저시력 사용자, 고령자, 시각 장애인이 앱을 사용할 때 중요한 정보를 놓치지 않도록 보장하는 핵심 요소입니다.<br />
      			명확한 대비가 없으면 텍스트와 UI 컴포넌트가 배경과 혼동되어 접근성이 떨어질 수 있습니다.
      			반면, 명도 대비를 유지하면 더 많은 사용자가 콘텐츠를 쉽게 인식하고 접근할 수 있습니다.
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">대상</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>저시력 사용자</strong>
      				<p>
      					명도 대비가 낮은 텍스트와 UI 컴포넌트를 인식하는 데 어려움을 겪는 사용자.
      				</p>
      			</li>
      			<li>
      				<strong>고령자</strong>
      				<p>
      					시력 저하로 인해 명도 대비가 중요한 사용자.
      				</p>
      			</li>
      			<li>
      				<strong>시각 장애인</strong>
      				<p>
      					색상 인식이 어렵거나 제한적인 사용자.
      				</p>
      			</li>
      			<li>
      				<strong>비장애인 포함 전체 사용자</strong>
      				<p>
      					햇빛이나 어두운 환경에서 명도 대비가 적절치 않을 경우 콘텐츠를 인식하는 데 어려움을 겪는 사용자.
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">체크리스트</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>명도 대비 비율 확인</strong>
      				<p>
      					텍스트와 배경, UI 요소의 대비가 WCAG 기준(최소 4.5:1)을 충족하는가?
      				</p>
      			</li>
      			<li>
      				<strong>폰트 크기와 대비 비율</strong>
      				<p>
      					큰 텍스트나 굵은 텍스트의 경우 최소 3:1의 대비 비율을 유지하는가?
      				</p>
      			</li>
      			<li>
      				<strong>상태 변화 반영</strong>
      				<p>
      					버튼, 링크, 체크박스 등 UI 요소의 활성화 상태가 색상 변화 외에도 명확하게 표시되고 있는가?
      				</p>
      			</li>
      			<li>
      				<strong>배경 이미지 사용 시 대비</strong>
      				<p>
      					배경 이미지 위에 텍스트를 배치할 경우, 텍스트가 이미지와 충분한 대비를 이루고 있는가?
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
      					<strong>명도 대비 테스트</strong>
      					<p>
      						iOS 설정에서 색상 필터 및 스마트 반전 기능을 사용하여 명도 대비가 유지되고 있는지 확인합니다.
      					</p>
      				</li>
      				<li>
      					<strong>VoiceOver 사용</strong>
      					<p>
      						VoiceOver를 통해 텍스트 및 UI 요소가 명확하게 인식되는지 확인합니다.
      					</p>
      				</li>
      				<li>
      					<strong>iOS 개발자 도구</strong>
      					<p>
      						Xcode의 Accessibility Inspector를 사용하여 명도 대비를 자동으로 분석하고, 기준에 맞는지 확인합니다.
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
      					<strong>명도 대비 테스트</strong>
      					<p>
      						Android 디바이스에서 '색상 반전'과 '고대비 텍스트' 설정을 활성화하여 앱의 명도 대비를 테스트합니다.
      					</p>
      				</li>
      				<li>
      					<strong>TalkBack 사용</strong>
      					<p>
      						텍스트와 UI 요소가 충분한 대비를 유지하여 사용자가 쉽게 인식할 수 있는지 확인합니다.
      					</p>
      				</li>
      				<li>
      					<strong>Accessibility Scanner 사용</strong>
      					<p>
      						Google Play에서 제공하는 Accessibility Scanner 앱을 통해 명도 대비 문제를 자동으로 탐지합니다.
      					</p>
      				</li>
      				<li>
      					<strong>상세 가이드</strong>
      					<p>
      						<a href="https://support.google.com/accessibility/android/topic/10601571?hl=ko&ref_topic=3529932&sjid=14261166623289476037-AP" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">Android 접근성 고객센터 - TalkBack 및 Android</a>
      					</p>
      					<p>
      						<a href="https://developer.android.com/codelabs/starting-android-accessibility?hl=ko#2" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">접근성 검사기 (Accessibility Scanner)</a>
      					</p>
      				</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">QA 지표</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>대비 비율</strong>
      				<p>
      					텍스트와 배경, UI 요소 간의 대비 비율이 4.5:1(일반 텍스트) 또는 3:1(큰 텍스트)을 충족하는지 여부.
      				</p>
      			</li>
      			<li>
      				<strong>대비 문제 비율</strong>
      				<p>
      					앱 내에서 명도 대비가 부족한 요소의 비율.
      				</p>
      			</li>
      			<li>
      				<strong>사용자 피드백</strong>
      				<p>
      					저시력 사용자, 고령자 등을 대상으로 한 접근성 테스트 결과 및 피드백.
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
      					명도 대비 체크 및 조정
      				</p>
      				
      <CodeBlock title="명도 대비 - 명도 대비 체크 및 조정" language="javascript" className="uk_gist_code_box">
      {`let label = UILabel()
      						label.text = "Important Info"
      						label.textColor = .darkGray  // 명도 대비 기준을 충족하도록 적절한 색상 사용
      						label.backgroundColor = .white`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">Android</h4>
      				<p className="mt_ms">
      					명도 대비 조정
      				</p>
      				
      <CodeBlock title="명도 대비 - 명도 대비 조정" language="javascript" className="uk_gist_code_box">
      {`<TextView
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="Important Info"
      							android:textColor="#4A4A4A"  <!-- 진한 색상으로 명도 대비 기준 충족 -->
      							android:background="#FFFFFF" />`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">하이브리드</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드(html)</h4>
      				
      <CodeBlock title="명도 대비 - 하이브리드(html)" language="javascript" className="uk_gist_code_box">
      {`<div style="background-color: #FFFFFF; color: #333333;">
      							Important Info
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드(Vue)</h4>
      				
      <CodeBlock title="명도 대비 - 하이브리드(Vue)" language="javascript" className="uk_gist_code_box">
      {`<template>
      							<div :style="{ backgroundColor: '#FFFFFF', color: '#333333' }">
      								Important Info
      							</div>
      						</template>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드(React)</h4>
      				
      <CodeBlock title="명도 대비 - 하이브리드(React)" language="javascript" className="uk_gist_code_box">
      {`function ImportantInfo() {
      							return (
      								<div style=>
      									Important Info
      								</div>
      							);
      						}`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 기준</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>명도 대비 비율</strong>
      				<p>
      					텍스트와 배경, UI 요소의 대비 비율이 최소 4.5:1(일반 텍스트) 또는 3:1(큰 텍스트) 이상을 유지하고 있는가?
      				</p>
      			</li>
      			<li>
      				<strong>대비 문제 시각화</strong>
      				<p>
      					명도 대비 부족 시 텍스트나 UI 요소가 충분히 구별될 수 있는 대체 방법이 제공되고 있는가?
      				</p>
      			</li>
      			<li>
      				<strong>대비 도구 사용 여부</strong>
      				<p>
      					앱 설계 시 명도 대비를 확인하기 위한 자동화된 도구를 사용하여 테스트가 이루어졌는가?
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 방법</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">iOS</h3>
      			<p className="mt_m">
      				Xcode Accessibility Inspector: Xcode의 Accessibility Inspector를 사용해 앱의 명도 대비를 분석하고 자동으로 테스트합니다.
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">Android</h3>
      			<p className="mt_m">
      				Accessibility Scanner: Android의 Accessibility Scanner 앱을 사용하여 명도 대비 문제를 탐지합니다.
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">하이브리드</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn t_blue">Colour Contrast Analyser (CCA)</h4>
      				<p className="mt_ms reference">
      					Colour Contrast Analyser (CCA) 프로그램을 사용해 전경색과 배경색의 대비를 측정하고 점검할 수 있습니다.<br />
      					<a href="https://www.tpgi.com/color-contrast-checker/" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">평가툴 다운로드 - Colour Contrast Analyser (CCA)</a>
      				</p>
      				<figure className="mt_m img_figure">
      					<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_05.png`} alt="Colour Contrast Analyser (CCA)" />
      					<figcaption>
      						[Colour Contrast Analyser (CCA)]
      					</figcaption>
      				</figure>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn t_blue">Color Contrast Checker</h4>
      				<p className="mt_ms reference">
      					Color Contrast Checker 사이트에서는 배경색과 텍스트 색상을 지정하여 작은 텍스트와 큰 텍스트의 명암비를 확인할 수 있습니다.
      					결과는 Poor, Good, Super 등의 상태로 표시되어, 사용자가 적절한 대비 상태를 직관적으로 파악할 수 있습니다.<br />
      					<a href="https://coolors.co/contrast-checker/112a46-acc8e5" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">Color Contrast Checker</a>
      				</p>
      				<figure className="mt_m img_figure">
      					<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_06.png`} alt="Color Contrast Checker" />
      					<figcaption>
      						[Color Contrast Checker]
      					</figcaption>
      				</figure>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn t_blue">WCAG Color Contrast Checker</h4>
      				<p className="mt_ms reference">
      					WCAG Color Contrast Checker 사이트에서는 배경색과 텍스트 색상을 지정해
      					WCAG(Web Content Accessibility Guidelines) 기준에 따라
      					Small text, Large text, UI components의 대비 상태를 점검할 수 있습니다.
      					결과는 AA, AAA 기준에 따라 Pass 또는 Fail로 표시되어,
      					사용자가 명도 대비가 적절한지 확인할 수 있습니다.<br />
      					<a href="https://accessibleweb.com/color-contrast-checker/" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">WCAG Color Contrast Checker</a>
      				</p>
      				<figure className="mt_m img_figure">
      					<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_07.png`} alt="WCAG Color Contrast Checker" className="max-w900" />
      					<figcaption>
      						[WCAG Color Contrast Checker]
      					</figcaption>
      				</figure>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn t_blue">Leonardo</h4>
      				<p className="mt_ms reference">
      					Leonardo 사이트에서는 여러 색상을 동시에 확인하거나 색상 팔레트의 명암비를 점검할 때 유용합니다.
      					사용자가 다양한 색상을 추가하여 대비나 밝기를 조정해 팔레트를 구성할 수 있으며,
      					오른쪽에 표시된 팔레트에서 배경 색상과의 대비 명암비가 자동으로 업데이트됩니다.
      					배경 색상을 변경하면 명암비도 실시간으로 조정됩니다.<br />
      					<a href="https://leonardocolor.io/theme.html#" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">Leonardo</a>
      				</p>
      				<figure className="mt_m img_figure">
      					<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_08.png`} alt="Leonardo" />
      					<figcaption>
      						[Leonardo]
      					</figcaption>
      				</figure>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn t_blue">WCAG Color contrast checker</h4>
      				<p className="mt_ms reference">
      					WCAG Color Contrast Checker 확장 프로그램은 현재 활성화된 웹사이트의 명암비를 점검할 수 있는 플러그인입니다.
      					설치 후 실행하면 좌측 패널에서 페이지의 각 콘텐츠 명암비를 확인할 수 있으며,
      					콘텐츠 크기는 Small과 Large로 자동 구분됩니다.
      					또한, 특정 요소를 클릭하면 페이지에서 해당 위치로 자동 스크롤되어 명암비를 손쉽게 점검할 수 있습니다.<br />
      					<a href="https://chromewebstore.google.com/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf?pli=1" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">WCAG Color contrast checker</a>
      				</p>
      				<figure className="mt_m img_figure">
      					<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_09.png`} alt="WCAG Color contrast checker" className="max-w900" />
      					<figcaption>
      						[WCAG Color contrast checker]
      					</figcaption>
      				</figure>
      			</div>
      			

      			<div className="mt_ml indent">
      				<h4 className="ml_mn t_blue">Figma : Stark - Contrast & Accessibility Checker</h4>
      				<p className="mt_ms reference">
      					피그마 플러그인을 사용하면 선택한 디자인의 명암비를 바로 확인할 수 있습니다.
      					이 플러그인은 웹 접근성 지침(AA, AAA) 기준에 맞는 명암비를 표시해 주며,
      					제안된 색상으로 일괄적으로 변경할 수도 있습니다.
      					Pro 버전에서는 색상 변경 기능이 제공되지만,
      					무료 버전으로도 명암비를 확인하는 용도로 충분히 유용하게 사용할 수 있습니다.<br />
      					<a href="https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">Figma : Stark - Contrast & Accessibility Checker</a>
      				</p>
      				<figure className="mt_m img_figure">
      					<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_10.png`} alt="Figma : Stark - Contrast & Accessibility Checker" /><br />
      					<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_11.png`} alt="Figma : Stark - Contrast & Accessibility Checker" className="mt_ms" /><br />
      					<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_12.png`} alt="Figma : Stark - Contrast & Accessibility Checker" className="mt_ms" />
      					<figcaption>
      						[Figma : Stark - Contrast & Accessibility Checker]
      					</figcaption>
      				</figure>
      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">준수 사례</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 1) 텍스트 그림자 효과 적용</h3>
      			<figure className="mt_ml img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_13.png`} alt="" className="max-w700" />
      				<figcaption>
      					[텍스트 그림자 효과 적용]
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 2) 글자와 배경의 명도대비가 3:1 이상인 경우</h3>
      			<figure className="mt_ml img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_14.png`} alt="" className="max-w700" />
      				<figcaption>
      					[글자와 배경의 명도대비가 3:1 이상인 경우]
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">미준수 사례</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 1) input의 placeholder나 버튼의 색상</h3>
      			<figure className="mt_ml img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_15.png`} alt="" className="max-w450" /><br />
      				<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_16.png`} alt="" className="max-w450 mt_ms" />
      				<figcaption>
      					[input의 placeholder나 버튼의 색상]
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 2) 글자와 배경의 명도대비가 3:1 미만인 경우</h3>
      			<figure className="mt_ml img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_17.png`} alt="" className="max-w550" /><br />
      				<img src={`${IMG.A11Y_TECH_M_P_54}/5.4.a11y_tmp_18.png`} alt="" className="max-w550 mt_ms" />
      				<figcaption>
      					[0000000000000]
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 영상</h2>

      		<article className="mt_l indent">
      			<h3 className="ml_mn">모바일 앱 접근성 (명도 대비)</h3>
      			<div className="mt_ml youtube_box" style={{ '--padding-top': "56.25%" }}>
      				<iframe width="560" height="315" src="https://www.youtube.com/embed/UeRoj4zVQKU?si=HmF1ezEljt0pq6Bl" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      			</div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">갤럭시 접근성 배워보기 (시각편)</h3>
      			<div className="mt_ml youtube_box" style={{ '--padding-top': "56.25%" }}>
      				<iframe width="560" height="315" src="https://www.youtube.com/embed/q8THhm0y1GA?si=npQe6MpgZbS4N7dg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      			</div>
      		</article>
      		
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">명도 대비 | 모바일 접근성 콘텐츠 제작 기법(&quot;인식의 용이성(Perceivable)&quot;) 참조</strong>
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

export default ContrastMinimumPage
