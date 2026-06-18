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
  bottomEditor: false
}

const PAGE_DATA = {
  title: "텍스트 아닌 콘텐츠 | 모바일 접근성 콘텐츠 제작 기법(\"인식의 용이성(Perceivable)\")",
  description: "모바일 접근성 콘텐츠 제작 기법이란 장애 유무에 관계없이 모든 사용자가 모바일 콘텐츠를 쉽게 이해하고 이용할 수 있도록 하는 설계하는 방법입니다. 이 페이지에서는 모바일 앱 접근성 체크리스트(인식의 용이성)의 '텍스트 아닌 콘텐츠' 항목에 해당하는 대체 텍스트·레이블 제공 등을 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성, 모바일 앱 접근성, 모바일 앱 접근성 콘텐츠 제작 기법, WCAG2.2, 대체 텍스트, 비 텍스트 콘텐츠, accessibilityLabel, contentDescription, 보조기술과의호환성, 접근성 테스트 도구 활용 점검방법, 스크린 리더, VoiceOver, TalkBack, UIAccessibility API, AccessibilityNodeInfo API, Swift, Kotlin, 네이티브, 하이브리드, 시각 장애인, 저시력 사용자, 고령자, 인지 장애인",
}

function NonTextContentPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>










      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_black">관련 지침(대체 텍스트) : 텍스트 아닌 콘텐츠(이미지·아이콘·버튼 등)의 의미·용도를 알 수 있도록 적절한 대체 텍스트를 제공했는가?</b><br />
      			대체 텍스트는 비 텍스트 콘텐츠를 설명하는 중요한 요소로, 접근성을 높이기 위해 필수적으로 제공되어야 합니다.
      			다양한 테스트 도구를 활용해 웹 및 모바일 앱에서 대체 텍스트를 포함한 접근성 요소를 철저히 점검하고,
      			사용자 경험을 개선할 수 있습니다. 접근성을 준수함으로써 모든 사용자에게 포용적인 디지털 환경을 제공합니다.
      		</p>
      		<p className="mt_ms reference">
      			<a href="/accessibility/a11y/04-a11yCag/03-macag" className="fas weight-500">모바일 앱 접근성 체크리스트(MACAG) — 인식의 용이성</a><br />
      			<a href="https://www.w3.org/WAI/WCAG22/quickref/#non-text-content" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">WCAG 2.2 Quick Reference - Non-text Content</a>
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">필요성</h2>
      		<p className="mt_l">
      			대체 텍스트는 이미지, 동영상, 아이콘 등 비 텍스트 콘텐츠의 의미를 텍스트로 설명하여,
      			시각 장애인이나 저시력 사용자가 스크린 리더를 통해 콘텐츠를 이해할 수 있도록 돕습니다.
      			이는 접근성을 보장하며, 웹 및 앱에서 모든 사용자가 동등하게 콘텐츠에 접근할 수 있게 합니다.
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">대상</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>시각 장애인</strong>
      				<p>
      					스크린 리더를 사용하는 사용자들.
      				</p>
      			</li>
      			<li>
      				<strong>저시력 사용자</strong>
      				<p>
      					텍스트 크기 조정 및 색상 대비에 의존하는 사용자들.
      				</p>
      			</li>
      			<li>
      				<strong>고령자</strong>
      				<p>
      					시력이 저하된 사용자들.
      				</p>
      			</li>
      			<li>
      				<strong>인지 장애인</strong>
      				<p>
      					복잡한 비주얼 콘텐츠를 이해하는 데 어려움을 겪는 사용자들.
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">체크리스트</h2>

      		<p className="mt_l">
      			이미지 요소에 어떤 내용으로 대체 텍스트를 제공할 것인지 고민하기 전에, 이미지를 어떤 목적으로 사용하고 있는지를 생각해 봐야 합니다.<br />
      			이미지가 주요 콘텐츠의 일부로서 사용자에게 정보를 전달하는 역할을 한다면 적절한 의미에 맞는 대체 텍스트를 제공하면 됩니다.<br />
      			반대로 이미지가 콘텐츠의 내용을 설명하는 핵심적인 요소가 아니라면 대체 텍스트를 생략하거나 배경 이미지 속성을 활용함으로써
      			스크린 리더 사용자에게 불필요한 정보를 전달하지 않도록 합니다.
      		</p>

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
      		<h2 className="ml_mn" data-conlist="false">기기별 테스트 방법</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">iOS</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms reference">
      				<li>
      					<strong>VoiceOver 활성화</strong>
      					<p>
      						설정 &gt; 접근성 &gt; VoiceOver를 활성화하여 대체 텍스트가 올바르게 읽히는지 테스트합니다.
      					</p>
      				</li>
      				<li>
      					<strong>Accessibility Inspector 사용</strong>
      					<p>
      						Xcode의 ‘<b>Accessibility Inspector</b>’를 통해 UI 요소의 대체 텍스트 적용 상태를 확인합니다.
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
      					<strong>TalkBack 활성화</strong>
      					<p>
      						설정 &gt; 접근성 &gt; TalkBack을 활성화하여 대체 텍스트가 적절하게 읽히는지 테스트합니다.
      					</p>
      				</li>
      				<li>
      					<strong>Accessibility Scanner 사용</strong>
      					<p>
      						Google Play에서 제공하는 ‘<b>Accessibility Scanner</b>’ 앱을 사용하여 대체 텍스트의 적용 여부를 자동으로 탐지합니다.
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

      		<p className="mt_l">
      			시각장애인 사용자는 스크린리더 프로그램을 사용하여 콘텐츠 정보를 인식하고 사용합니다.
      			스크린리더는 각각의 콘텐츠가 갖고 있는 정보를 음성으로 알려줍니다.<br />
      			<b>아래 이미지중 우측 하단의 블루라이트 필터를 설정하는 스위치 버튼을 조작한다고 가정했을 때 아래와 같은 메시지를 음성으로 알려줍니다.</b>
      		</p>
      		<ul className="dot_lst mt_sm">
      			<li>
      				<span className="bg_black t_d_yellow weight-500" style={{ padding: "2px" }}>콘텐츠의 용도를 알 수 있는 텍스트 정보(●)</span>
      				<b>예) 블루라이트 필터</b>
      			</li>
      			<li>
      				<span className="bg_black weight-500" style={{ padding: "2px", color: "#9eddff" }}>콘텐츠가 어떤 컨트롤인지 버튼인지, 토글 버튼인지 등 유형 정보(▲)</span>
      				<b>예) 스위치</b>
      			</li>
      			<li>
      				<span className="bg_black weight-500" style={{ padding: "2px", color: "#eee" }} >콘텐츠 유형에 따른 상태 정보(◼︎)</span>
      				<b>예) 사용 안 함</b>
      			</li>
      			<li>
      				<span className="bg_black weight-500" style={{ padding: "2px", color: "#ffbebe" }} >콘텐츠를 사용하기에 필요한 힌트 정보(★)</span>
      				<b>예) &quot;전환하려면 두 번 탭 하세요.&quot;</b>
      			</li>
      		</ul>
      		<figure className="img_figure mt_m">
      			<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_01.gif`} alt="스크린리더가 각각의 콘텐츠가 갖고 있는 정보를 음성으로 알려주는 예시" />
      			<figcaption>
      				[출처 : NULI]
      			</figcaption>
      		</figure>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue" data-conlist-h4="true">네이티브</h3>
      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b>iOS는 accessibilityLabel</b>로 <b>Android는 contentDescription</b>으로 대체 텍스트 정보를 제공할 수 있습니다.
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">iOS</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      					<li>
      						<strong>관련 문서</strong>
      						<p className="reference">
      							<a href="https://developer.apple.com/accessibility/" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">Apple’s Accessibility Programming Guide for iOS</a>
      						</p>
      					</li>
      					<li className="mb_s">
      						<strong>Interface Builder 이용하여 요소에 대체 텍스트 적용하는 방법</strong>
      						<ul className="dot_lst dot_lst_inner info_lst gap-column-important-sm">
      							<li className="mb_s">
      								<b className="t_black">방법1. Xcode의 Accessibility 패널에서 Label 제공</b>
      								<figure className="img_figure mt_s">
      									<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_02.png`} alt="" className="max-w400" />
      									<figcaption>
      										[출처 : NULI]
      									</figcaption>
      								</figure>
      								<p className="mt_sm">
      									① Accessibility 에서 Enabled 을 선택해 접근성 기능을 활성화한 상태에서<br />
      									② Label 에 콘텐츠의 의미를 명확하게 전달할 수 있는 대체 텍스트를 작성합니다.
      								</p>
      							</li>
      							<li>
      								<b className="t_black">방법2. 코드로 Label 제공</b>
      								
      <CodeBlock title="코드로 Label 제공" language="javascript" className="uk_gist_code_box">
      {`var.isAccessibilityElement = true   // ① 접근성 요소 활성화
      										var.accessibilityLabel = "대체 텍스트" // ② 대체 텍스트 정보`}
      </CodeBlock>

      							</li>
      						</ul>
      					</li>
      					<li>
      						<strong>UIAccessibility API를 활용하여 코드에 대체 텍스트 제공</strong>
      						
      <CodeBlock title="UIAccessibility API를 활용" language="javascript" className="uk_gist_code_box">
      {`let imageView = UIImageView(image: UIImage(named: "sunrise.png"))
      								imageView.accessibilityLabel = "A beautiful sunrise over the mountains"`}
      </CodeBlock>

      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">Android</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      					<li>
      						<strong>관련 문서</strong>
      						<p className="reference">
      							<a href="https://developer.android.com/guide/topics/ui/accessibility" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">Android Accessibility Overview</a>
      						</p>
      					</li>
      					<li className="mb_sm">
      						<strong>방법1. Android Studio Properties 창에서 contentDescription 제공</strong>
      						<figure className="img_figure mt_s">
      							<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_03.png`} alt="" className="max-w350" />
      							<figcaption>
      								[출처 : NULI]
      							</figcaption>
      						</figure>
      					</li>
      					<li className="mb_sm">
      						<strong>방법2. 코드로 contentDescription제공</strong>
      						
      <CodeBlock title="코드로 contentDescription제공" language="javascript" className="uk_gist_code_box">
      {`android:contentDescription = "대체 텍스트" // UI 레이아웃 XML에서 제공`}
      </CodeBlock>

      					</li>
      					<li className="mb_sm">
      						<strong>contentDescription 속성 사용</strong>
      						
      <CodeBlock title="contentDescription 속성 사용" language="javascript" className="uk_gist_code_box">
      {`<ImageView
      									android:id="@+id/myImage"
      									android:layout_width="wrap_content"
      									android:layout_height="wrap_content"
      									android:contentDescription="A beautiful sunrise over the mountains" />`}
      </CodeBlock>

      					</li>
      					<li className="mb_sm">
      						<strong>코드에서 contentDescription 설정</strong>
      						
      <CodeBlock title="코드에서 contentDescription 설정" language="javascript" className="uk_gist_code_box">
      {`val myButton: Button = findViewById(R.id.my_button)
      								myButton.contentDescription = "Submit"`}
      </CodeBlock>

      					</li>
      				</ul>
      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue" data-conlist-h4="true">하이브리드</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드(html)</h4>
      				
      <CodeBlock title="하이브리드(html)" language="javascript" className="uk_gist_code_box">
      {`<img src="sunrise.png" alt="A beautiful sunrise over the mountains">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드(Vue)</h4>
      				
      <CodeBlock title="하이브리드(Vue)" language="javascript" className="uk_gist_code_box">
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

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드(React)</h4>
      				
      <CodeBlock title="하이브리드(React)" language="javascript" className="uk_gist_code_box">
      {`import React from 'react';

      						function SunriseImage() {
      							return <img src="sunrise.png" alt="A beautiful sunrise over the mountains" />;
      						}

      						export default SunriseImage;`}
      </CodeBlock>

      			</div>
      			
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
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">텍스트와 상호작용 요소의 분리 예시</h3>
      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					텍스트 안에는 링크나 버튼을 넣지 않는 것이 좋습니다.<br />
      					텍스트 안에 링크가 있으면 스크린 리더가 빠르게 읽어 내려가면서 시각장애인은 링크 위치를 파악하기 어려울 수 있습니다.
      					상호작용 요소는 텍스트와 분리해 디자인해야 인식이 용이합니다.
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">예시1</h4>
      				<figure className="mt_m img_figure">
      					<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_06.png`} alt="텍스트 링크는 버튼의 형태로 분리해서 디자인해야 합니다." />
      					<figcaption>
      						[출처 : 모바일 UI UX 기본가이드 | 브런치 스토리 by최철호]
      					</figcaption>
      				</figure>

      				<div className="mt_m indent">
      					<h5 className="ml_mn t_red">왼쪽(DON'T)의 잘못된 점</h5>
      					<ol className="mt_s ol_lst gap-column-important-s">
      						<li className="t_black_before weight-600-before">
      							<strong className="t_black">링크가 텍스트에 포함됨</strong>
      							<p>
      								&quot;OO서비스의 약관에 동의해주세요&quot;라는 안내문에서 링크가 &quot;마이 페이지/이곳&quot;이라는 텍스트에 포함되어 있습니다.
      								이 방식은 사용자가 정확히 어디를 클릭해야 할지 헷갈리게 만들 수 있습니다.
      								특히, 링크가 특정 단어에만 적용되면 시각적 단서가 부족하여 접근성이 떨어집니다.
      							</p>
      						</li>
      						<li className="t_black_before weight-600-before">
      							<strong className="t_black">링크의 가시성 부족</strong>
      							<p>
      								링크가 일반 텍스트와 크게 구분되지 않아서 사용자가 링크임을 인지하기 어렵습니다.
      								이는 사용성 문제를 유발하며, 시각적 장애가 있는 사용자에게 더욱 불편할 수 있습니다.
      							</p>
      						</li>
      					</ol>
      				</div>
      				<div className="mt_ms indent">
      					<h5 className="ml_mn t_green">오른쪽(DO)의 개선 사항</h5>
      					<ol className="mt_s ol_lst gap-column-important-s">
      						<li className="t_black_before weight-600-before">
      							<strong className="t_black">명확한 버튼 제공</strong>
      							<p>
      								오른쪽에서는 &quot;약관 동의하러 가기&quot;라는 명확한 버튼이 제공되어 사용자가 이 버튼을 눌러야 한다는 것을 쉽게 알 수 있습니다.
      								버튼을 사용하는 것은 링크를 텍스트에 숨기기보다 더 직관적이고 접근성을 높이는 방법입니다.
      							</p>
      						</li>
      						<li className="t_black_before weight-600-before">
      							<strong className="t_black">시각적 구분</strong>
      							<p>
      								버튼이 눈에 잘 띄는 스타일로 제공되어 사용자가 쉽게 인지할 수 있습니다.
      								버튼 형태로 제공하면 클릭 가능한 요소가 명확해지고, 이를 통해 사용자의 혼란을 줄일 수 있습니다.
      							</p>
      						</li>
      					</ol>
      				</div>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">예시2</h4>
      				<figure className="mt_m img_figure">
      					<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_07.png`} alt="" />
      					<figcaption>
      						[출처 : 모바일 UI UX 기본가이드 | 브런치 스토리 by최철호]
      					</figcaption>
      				</figure>

      				<div className="mt_m indent">
      					<h5 className="ml_mn t_red">왼쪽(DON'T)의 잘못된 점</h5>
      					<ol className="mt_s ol_lst gap-column-important-s">
      						<li className="t_black_before weight-600-before">
      							<strong className="t_black">텍스트 버튼의 모호함</strong>
      							<p>
      								왼쪽에서는 &quot;1:1 모바일 상담&quot; 버튼이 문장의 흐름에 배치되어 있습니다.
      								이런 디자인은 사용자가 클릭 가능한 요소임을 직관적으로 인지하기 어렵고, 사용자의 경험을 저해합니다.
      								특히 시각적으로 UI 요소를 쉽게 구분할 수 없는 사용자에게 혼란을 줄 수 있습니다.
      							</p>
      						</li>
      						<li className="t_black_before weight-600-before">
      							<strong className="t_black">시각적 강조 부족</strong>
      							<p>
      								텍스트와 버튼이 구별되지 않아 사용자가 쉽게 인식하지 못할 수 있습니다.
      								시각적 힌트가 부족해 접근성 측면에서 문제가 발생할 수 있습니다.
      								특히, 스크린 리더를 사용하는 사용자는 링크를 감지하는 데 어려움을 겪을 수 있습니다.
      							</p>
      						</li>
      					</ol>
      				</div>
      				<div className="mt_ms indent">
      					<h5 className="ml_mn t_green">오른쪽(DO)의 개선 사항</h5>
      					<ol className="mt_s ol_lst gap-column-important-s">
      						<li className="t_black_before weight-600-before">
      							<strong className="t_black">명확한 버튼 레이아웃</strong>
      							<p>
      								오른쪽에서는 텍스트와 &quot;1:1 모바일 상담&quot; 버튼이 명확하게 구분된 형태로 디자인되어 있어,
      								사용자가 클릭할 수 있는 요소임을 쉽게 인지할 수 있습니다.
      								시각적 구분이 명확해져 사용자가 어떤 동작을 해야 하는지 직관적으로 파악할 수 있습니다.
      							</p>
      						</li>
      						<li className="t_black_before weight-600-before">
      							<strong className="t_black">시각적 강조</strong>
      							<p>
      								버튼은 텍스트와 차별화된 디자인을 가지고 있어 클릭 가능한 요소임을 강조합니다.
      								이로 인해 접근성이 향상되며, 사용자가 혼동 없이 필요한 작업을 수행할 수 있습니다.
      							</p>
      						</li>
      					</ol>
      				</div>
      			</div>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 기준</h2>
      		<p className="mt_l">
      			텍스트가 아닌 콘텐츠에 해당 이미지가 제공하는 의미나 용도를 동일하게 인식할 수 있는 적절한 대체 텍스트를 제공해야 합니다.
      		</p>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">오류 유형</h3>
      			<ul className="mt_ml dot_lst gap-column-important-sm">
      				<li>
      					이미지 요소가 제공하는 정보와 동일한 정보가 음성으로 출력되지 않는 경우
      				</li>
      				<li>
      					의미와 용도를 이해할 수 없는 대체 텍스트를 제공하는 경우
      				</li>
      				<li>
      					의미없는 이미지에 대체텍스트를 제공하는 경우
      				</li>
      				<li>
      					대체 텍스트 제공 없이 설명만 제공되는 경우(Hint로만 제공된 경우)
      				</li>
      				<li>
      					객체 유형 정보가 반복 제공되는 경우 (~이미지이미지, ~버튼버튼 등)
      				</li>
      				<li>
      					객체 유형에 대한 정보가 잘못 제공된 경우
      				</li>
      				<li>
      					<code>display:none</code>, <code>visibility:hidden</code>으로 대체텍스트가 제공된 경우
      				</li>
      				<li>
      					화면에 보이지 않는 형태로 대체텍스트가 제공된 경우 (터치방식으로 대체정보 확인이 불가한 경우)
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">주의사항</h3>
      			<ul className="mt_ml dot_lst gap-column-important-sm">
      				<li>
      					기능을 제공하는 경우 이용방법 등 충분한 설명을 제공하지 않은 경우 (권고)
      				</li>
      				<li>
      					숫자 정보에 대해 의미전달이 미흡한 대체텍스트를 제공하는 경우 (권고)
      				</li>
      				<li>
      					준수 예) <i className="t_red">6.20</i> → <i className="t_green">6월 20일</i>
      				</li>
      				<li>
      					권고) 객체 유형정보를 정확히 제공할 것을 권장함(Traits 정보)
      				</li>
      				<li>
      					IR기법으로 대체텍스트를 제공 시 <code>hidden</code>형태가 아니더라도 화면 터치방식으로는 대체정보 인지 불가함(오류)
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
      					<strong>음성출력 형태</strong>
      					<p>
      						VoiceOver는 UI 요소의 accessibilityLabel을 읽어줍니다. 예를 들어, “Submit button”이라고 출력합니다.
      					</p>
      				</li>
      				<li>
      					<strong>제공 방법</strong>
      					<p>
      						Xcode의 Interface Builder에서 Label 필드에 텍스트를 입력하거나, 코드에서 accessibilityLabel을 설정합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">Android</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong>음성출력 형태</strong>
      					<p>
      						TalkBack은 contentDescription 속성에 설정된 텍스트를 읽어줍니다.
      					</p>
      				</li>
      				<li>
      					<strong>제공 방법</strong>
      					<p>
      						Android Studio에서 XML의 contentDescription 속성을 사용하거나, 코드에서 직접 설정합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">방법 1 (네이티브-문서 제공기준)</h3>
      			<p className="mt_ml">
      				TalkBack(또는 Voice Assistant 등) 기능으로 텍스트가 아닌 콘텐츠에 대응하는 대체 텍스트의 적절성 여부를 확인합니다.
      			</p>
      			<ul className="mt_s dot_lst gap-column-important-sm">
      				<li>
      					화면 구성 정보를 제공하는지 확인합니다. (Title, List View, Grid View)
      				</li>
      				<li>
      					화면 내 구체적인 Contents를 읽어주는지 확인합니다. (Text, Imge)
      				</li>
      				<li>
      					화면 내 기능을 읽어주는지 확인합니다. (Button 등)
      				</li>
      			</ul>
      			<figure className="mt_ms img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_08.jpg`} alt="" /><br />
      				<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_09.jpg`} alt="" className="mt_s" />
      				<figcaption>
      					[출처 : 모바일 애플리케이션 접근성 제작기법]
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">방법 2 (네이티브-문서 제공기준)</h3>
      			<p className="mt_ml">
      				음성출력 표시 기능으로 텍스트가 아닌 콘텐츠에 대응하는 대체 텍스트의 적절성 여부를 점검합니다.<br />
      				설정 → 접근성 → 시각 → Talk Back → 설정 → 개발자 설정 → 음성출력 표시 체크 후 확인합니다.
      			</p>
      			<figure className="mt_m img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_10.jpg`} alt="" />
      				<figcaption>
      					[출처 : 모바일 애플리케이션 접근성 제작기법]
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">방법 3 (네이티브-문서 제공기준)</h3>
      			<p className="mt_ml">
      				UIAutoMatorViewer를 활용하여 점검합니다.
      			</p>
      			<ol className="mt_ml ol_lst info_lst gap-column-important-ml">
      				<li className="t_black_before weight-600-before">
      					<strong>Android Studio를 이용한 실행방법</strong>
      					<ul className="mt_s dot_lst gap-column-important-sm">
      						<li className="mb_ms">
      							Toolbar에서 Android Device Monitor 버튼을 선택

      							<figure className="mt_ms img_figure">
      								<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_11.jpg`} alt="" className="max-w500" />
      								<figcaption>
      									[출처 : 모바일 애플리케이션 접근성 제작기법]
      								</figcaption>
      							</figure>
      						</li>
      						<li>
      							Devices 탭에서 디바이스가 연결된 상태로 점검할 화면을 띄운 뒤 Dump View Hierarchy for UI Automator버튼을 선택

      							<figure className="mt_ms img_figure">
      								<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_12.jpg`} alt="" className="max-w600" />
      								<figcaption>
      									[출처 : 모바일 애플리케이션 접근성 제작기법]
      								</figcaption>
      							</figure>
      						</li>
      					</ul>
      				</li>

      				<li className="t_black_before weight-600-before">
      					<strong>ADT(Android Developer Tools) 를 이용한 실행 방법</strong>
      					<ul className="mt_s dot_lst gap-column-important-sm">
      						<li>
      							DDMS(Dalvik Debug Monitor Server) 를 실행
      						</li>
      						<li>
      							Devices 탭에서 디바이스가 연결된 상태로 점검할 화면을 띄운 뒤 Dump View Hierarchy for UI Automator버튼을 선택

      							<figure className="mt_ms img_figure">
      								<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_13.jpg`} alt="" className="max-w700" />
      								<figcaption>
      									[출처 : 모바일 애플리케이션 접근성 제작기법]
      								</figcaption>
      							</figure>
      						</li>
      					</ul>
      				</li>

      				<li className="t_black_before weight-600-before">
      					<strong>SDK 내부의UIAutomator Viewer 실행</strong>
      					<ul className="mt_s dot_lst gap-column-important-sm">
      						<li className="mb_ms">
      							Android sdk폴더의 tools 안에있는 uiautomatorviewer.bat 파일실행

      							<figure className="mt_ms img_figure">
      								<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_14.jpg`} alt="" className="max-w400" />
      								<figcaption>
      									[출처 : 모바일 애플리케이션 접근성 제작기법]
      								</figcaption>
      							</figure>
      						</li>
      						<li className="mb_ms">
      							실행화면

      							<figure className="mt_ms img_figure">
      								<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_15.jpg`} alt="" className="max-w600" />
      								<figcaption>
      									[출처 : 모바일 애플리케이션 접근성 제작기법]
      								</figcaption>
      							</figure>
      						</li>
      						<li>
      							Device Screenshot 선택

      							<figure className="mt_ms img_figure">
      								<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_16.jpg`} alt="" className="max-w300" />
      								<figcaption>
      									[출처 : 모바일 애플리케이션 접근성 제작기법]
      								</figcaption>
      							</figure>
      						</li>
      					</ul>
      				</li>
      			</ol>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">방법 4 (네이티브-문서 제공기준)</h3>
      			<p className="mt_ml">
      				UIAutomatorViewer를 이용하여 점검합니다.
      			</p>
      			<ol className="mt_ml ol_lst info_lst gap-column-important-ml">
      				<li className="t_black_before weight-600-before">
      					<strong>점검할 화면을 띄운 후, 점검할 UI 객체를 선택하여 상세정보를 확인합니다.</strong>
      					<figure className="mt_m img_figure">
      						<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_17.jpg`} alt="" className="max-w750" />
      						<figcaption>
      							[출처 : 모바일 애플리케이션 접근성 제작기법]
      						</figcaption>
      					</figure>
      				</li>

      				<li className="t_black_before weight-600-before">
      					<strong>ImageButton, ImageView의경우 content-desc항목이 적용되어있는지 확인해야 합니다.</strong>
      					<ul className="mt_s dot_lst gap-column-important-sm">
      						<li className="mb_ms">
      							대체텍스트 적용 시 Node Detail과 계층구조의{ }안에 대체텍스트내용이 표시 됩니다.

      							<figure className="mt_ms img_figure">
      								<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_18.jpg`} alt="" className="max-w500" />
      								<figcaption>
      									[출처 : 모바일 애플리케이션 접근성 제작기법]
      								</figcaption>
      							</figure>
      						</li>
      						<li>
      							대체텍스트 미적용 시 Node Detai과 계층구조에 대체텍스트가 표시되지 않습니다.

      							<figure className="mt_ms img_figure">
      								<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_19.jpg`} alt="" className="max-w400" />
      								<figcaption>
      									[출처 : 모바일 애플리케이션 접근성 제작기법]
      								</figcaption>
      							</figure>
      						</li>
      					</ul>
      				</li>

      				<li className="t_black_before weight-600-before">
      					<strong>
      						TextView, Button, EditText등의 경우 content-desc에 대체텍스트가 적용되지 않고
      						text에 대체텍스트가 적용될 수 있습니다.
      					</strong>
      					<figure className="mt_m img_figure">
      						<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_20.jpg`} alt="" className="max-w850" /><br />
      						<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_21.jpg`} alt="" className="max-w850" />
      						<figcaption>
      							[출처 : 모바일 애플리케이션 접근성 제작기법]
      						</figcaption>
      					</figure>
      				</li>
      			</ol>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">방법 5 (하이브리드)</h3>
      			<p className="mt_ml">
      				크롬(Chrome) 브라우저 요소검사를 이용하여 점검합니다.<br />
      				해당 이미지 요소를 선택하여 우측클릭하여 요소검사를 하여 코드로 확인합니다.
      			</p>
      			<figure className="mt_m img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_22.jpg`} alt="" />
      				<figcaption>
      					[크롬(Chrome) 브라우저 이미지 요소검사]
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">주의사항</h3>
      			<ul className="mt_ml dot_lst gap-column-important-sm">
      				<li>
      					개발방법에 따라 연관된 타 UI 객체에 대체텍스트를 적용하고 있는경우가 있습니다. 이런경우엔 오류항목으로 볼 수 없습니다.
      				</li>
      				<li>
      					UIAutoMatorViewe를 활용한 대체텍스트 확인은 다른 점검기법과 병행되어 사용하는 것이 바람직합니다.
      				</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">준수 사례</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 1) 아이콘 + 텍스트와 같이 제공되는 경우</h3>
      			<figure className="mt_l img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_23.png`} alt="" />
      				<figcaption>
      					[출처 : 무인정보단말기 UI 플랫폼]
      				</figcaption>
      			</figure>
      			<p className="mt_ms">
      				<b>음성출력 형태(Talkback)</b> :
      				<mark>
      					&quot;UI 가이드 원칙 링크 6개 중 첫번째. 활성화하려면 두 번 탭하세요. 링크 사용가능.
      					세 손가락으로 탭 동작으로 보기.&quot;
      				</mark>
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 2) 이미지로 제공되는 경우</h3>
      			<figure className="mt_l img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_24.png`} alt="" />
      				<figcaption>
      					[출처 : 무인정보단말기 UI 플랫폼]
      				</figcaption>
      			</figure>
      			<p className="mt_ms">
      				<b>음성출력 형태(Talkback)</b> :
      				<mark>
      					&quot;정보접근성이 보장된 무인정보단말기 UI 플랫폼 고령자도 OK! 장애인도 OK!
      					무인정보단말기의 정보접근성을 모두 갖춘 무인정보단말기 UI 플랫폼과 개발도구 제공 자세히 보기.
      					활성화하려면 두 번 탭하세요. 링크 사용가능. 세 손가락으로 탭 동작으로 보기.&quot;
      				</mark>
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 3) 의미와 용도를 이해할 수 있도록 적절하게 대체텍스트를 제공한 경우</h3>
      			<figure className="mt_l img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_25.png`} alt="" className="max-w350" />
      				<figcaption>
      					[출처 : 모바일애플리케이션콘텐츠접근성지침2.0]
      				</figcaption>
      			</figure>
      			<p className="mt_ms">
      				<mark>&quot;다음 메일 Kakao corp. 별점 평점 4.3”</mark>으로 해당 메일의 정보를 올바르게 제공합니다.
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 4) 이미지 버튼에 적절한 대체텍스트를 제공한 경우</h3>
      			<figure className="mt_l img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_26.png`} alt="" className="max-w350" />
      				<figcaption>
      					[출처 : 모바일애플리케이션콘텐츠접근성지침2.0]
      				</figcaption>
      			</figure>
      			<p className="mt_ms">
      				<mark>&quot;옵션 버튼&quot;</mark> 으로 해당 버튼의 정보를 올바르게 제공합니다.
      			</p>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">미준수 사례</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 1) 이미지 요소가 제공하는 정보와 동일한 정보가 음성으로 출력되지 않는 경우</h3>
      			<figure className="mt_l img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_27.png`} alt="" className="max-w300" />
      				<figcaption>
      					[출처 : 모바일애플리케이션콘텐츠접근성지침2.0]
      				</figcaption>
      			</figure>
      			<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_red">개선 전</strong>
      					<p>
      						<mark>&quot;이벤트&quot;</mark>로 해당 이미지에 대해 대체텍스트가 부적절하게 제공됩니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_green">개선 후</strong>
      					<p>
      						<mark>&quot;릴레이팡팡 한방에 달성하기!&quot;</mark>로 해당 이미지에 대해 대체텍스트가 제공되어야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 2) 의미와 용도를 이해할 수 없는 대체 텍스트를 제공하는 경우</h3>
      			<figure className="mt_l img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_28.png`} alt="" className="max-w350" />
      				<figcaption>
      					[출처 : 모바일애플리케이션콘텐츠접근성지침2.0]
      				</figcaption>
      			</figure>
      			<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_red">개선 전</strong>
      					<p>
      						<mark>&quot;버튼 -4 라벨지정안됨&quot;</mark> 으로 해당 이미지 버튼에 대체텍스트가 부적절하게 제공됩니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_green">개선 후</strong>
      					<p>
      						<mark>&quot;카드 설정 버튼&quot;</mark> 또는 <mark>&quot;의미와 용도에 맞는 텍스트 정보&quot;</mark>로
      						해당 이미지에 대해 대체텍스트가 제공되어야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 3) 버튼에 대체텍스트가 제공되지 않은 경우</h3>
      			<figure className="mt_l img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_29.png`} alt="" className="max-w300" />
      				<figcaption>
      					[출처 : 모바일애플리케이션콘텐츠접근성지침2.0]
      				</figcaption>
      			</figure>
      			<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_red">개선 전</strong>
      					<p>
      						보안 키패드에 대체텍스트가 제공되지 않습니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_green">개선 후</strong>
      					<p>
      						각 버튼에 대해 대체텍스트가 제공되어야 합니다.
      					</p>
      				</li>
      			</ul>
      			<p className="mt_ms">
      				<a href="https://codepen.io/io-uxkm/pen/qBzgvpX" title="새창 열림" target="_blank" rel="noreferrer" className="box_link">키패드 적용 기본 예시</a>
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 4) 의미없는 대체 텍스트가 제공된 경우</h3>

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_red">개선 전</h4>
      				<p className="mt_ms">
      					의미 없는 장식용 이미지에는 <code>alt</code> 속성을 비워 <code>alt=&quot;&quot;</code>로 제공할 수 있습니다.
      					아이콘 자체에 의미가 없을 경우 빈 <code>alt</code>를 사용해도 문제없습니다.
      				</p>
      				<figure className="mt_ms img_figure">
      					<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_30.png`} alt="" />
      					<figcaption>
      						[출처 : 카카오]
      					</figcaption>
      				</figure>
      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_green">개선 후</h4>
      				<p className="mt_ms">
      					불필요한 <code>alt</code> 값을 제거해 화면 읽기를 간결하게 하고,
      					중복된 내용으로 인한 피로감을 줄일 수 있습니다.
      				</p>
      				<figure className="mt_ms img_figure">
      					<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_31.png`} alt="" />
      					<figcaption>
      						[출처 : 카카오]
      					</figcaption>
      				</figure>
      			</div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 5) 의미없는 대체 텍스트가 제공된 경우와 암묵적으로 제시된 이미지에 중복 사용된 경우</h3>

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_red">개선 전</h4>
      				<p className="mt_ms">
      					의미를 갖지 않는 장식용 이미지에 <code>alt</code>가 제공되고 있으며,
      					의미를 가지는 정보(예: 날짜)는 풀어서 제공해줘야 합니다.<br />
      					예) <i className="t_red">2024.09.30</i> → <i className="t_green">2024년 09월 30일까지</i>
      				</p>
      				<ul className="mt_s dot_lst">
      					<li>
      						<b>음성출력 형태(Talkback)</b> :
      						&quot;유플닷컴 출석체크 이벤트 2024년 9월 30일 달력 이미지&quot; 링크 활성화하려면 두 번 탭하세요. 링크 사용가능.
      						세 손가락으로 탭 동작으로 보기.
      					</li>
      					<li>
      						<b>음성출력 형태(Voiceover)</b> :
      						&quot;유플닷컴 출석체크 이벤트 물결 2024점 9점 30점 슬래시 달력 이미지&quot; 링크
      					</li>
      				</ul>
      				<figure className="mt_m img_figure">
      					<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_32.png`} alt="" />
      					<figcaption>
      						[출처 : 카카오]
      					</figcaption>
      				</figure>
      			</div>
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_green">개선 후</h4>
      				<p className="mt_ms">
      					의미 없는 장식용 이미지에는 alt 값을 제거하고, 중복된 이미지는 사용하지 않는 것이 좋습니다.
      				</p>
      				<ul className="mt_s dot_lst">
      					<li>
      						<b>음성출력 형태(Talkback)</b> :
      						&quot;유플닷컴 출석체크 이벤트 기간 2024년 9월 30일 까지&quot; 링크 활성화하려면 두 번 탭하세요. 링크 사용가능.
      						세 손가락으로 탭 동작으로 보기
      					</li>
      					<li>
      						<b>음성출력 형태(Voiceover)</b> :
      						&quot;유플닷컴 출석체크 이벤트 기간 2024년 9월 30일 까지&quot; 링크
      					</li>
      				</ul>
      				<figure className="mt_m img_figure">
      					<img src={`${IMG.A11Y_TECH_M_P_51}/5.1.a11y_tmp_33.png`} alt="" />
      					<figcaption>
      						[출처 : 카카오]
      					</figcaption>
      				</figure>
      			</div>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 영상</h2>
      		<div className="mt_xl youtube_box" style={{ '--padding-top': "56.25%" }}>
      			<iframe width="560" height="315" src="https://www.youtube.com/embed/eQHPJ4tk-ag?si=rMKZ_voTSq4Dx-WY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      		</div>
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">텍스트 아닌 콘텐츠 | 모바일 접근성 콘텐츠 제작 기법(&quot;인식의 용이성(Perceivable)&quot;) 참조</strong>
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

export default NonTextContentPage
