import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import { toggleContent } from '@/utils/toggleContent.js'

const PAGE_LAYOUT = {
  mainClass: "labels-or-instructions",
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
  title: "레이블 | 모바일 접근성 콘텐츠 제작 기법(\"이해의 용이성(Understandable)\")",
  description: "모바일 접근성 콘텐츠 제작 기법이란 장애 유무에 관계없이 모든 사용자가 모바일 콘텐츠를 쉽게 이해하고 이용할 수 있도록 하는 설계하는 방법입니다. 이 페이지에서는 모바일 앱 접근성 체크리스트(이해의 용이성)의 '레이블'에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성, 모바일 앱 접근성, 모바일 앱 접근성 콘텐츠 제작 기법, WCAG2.2, 명확한 지시 사항, 사용자 인터페이스, 지침 제공, 시각 장애, 인지 장애, 색각 이상, 청각 장애",
}

function LabelsOrInstructionsPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>










      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_black">관련 지침(입력 도움) : 사용자 입력에 필요한 레이블·지시사항은 명확하고 이해 가능하게 제공되어야 한다.</b><br />
      			명확한 지시 사항은 사용자가 앱을 사용하면서 필요한 작업을 쉽게 이해하고 수행할 수 있도록 돕는 지침입니다.
      			지시 사항은 단순하고 이해하기 쉬운 언어로 작성되며,
      			행동을 유도할 때에는 구체적으로 어떤 조치를 해야 하는지 설명해야 합니다.<br />
      			버튼, 링크, 입력 필드, 경고 메시지와 같은 UI 요소에 대한 명확한 설명과 안내를 제공하여
      			사용자들이 앱을 쉽게 탐색하고 기능을 활용할 수 있도록 합니다.
      		</p>
      		<p className="mt_ms reference">
      			<a href="https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">WCAG 2.2 Quick Reference - Labels or Instructions</a>
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">필요성</h2>
      		<p className="mt_l">
      			명확한 지시 사항은 모든 사용자가 작업을 이해하고 수행할 수 있도록 돕습니다.
      			지시 사항이 불분명하면 사용자는 필요한 정보를 놓치거나 오류를 범할 수 있습니다.
      			특히, 시각 장애인이나 인지 장애가 있는 사용자들은 텍스트와 안내의 의미를 쉽게 이해할 수 있어야 하며,
      			이를 통해 접근성을 보장할 수 있습니다.
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">대상</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>시각 장애인</strong>
      				<p>
      					스크린 리더를 사용하는 사용자.
      				</p>
      			</li>
      			<li>
      				<strong>인지 장애인</strong>
      				<p>
      					복잡한 정보를 이해하기 어려운 사용자.
      				</p>
      			</li>
      			<li>
      				<strong>고령 사용자</strong>
      				<p>
      					시력이 저하되거나 빠르게 정보를 처리하기 어려운 사용자.
      				</p>
      			</li>
      			<li>
      				<strong>비장애인 포함 전체 사용자</strong>
      				<p>
      					명확하고 일관된 지시 사항을 통해 작업을 더 빠르고 쉽게 수행할 수 있는 사용자.<br />
      					(접근성이 잘 구현된 앱은 모든 사용자가 더 나은 사용자 경험을 할 수 있도록 도와줍니다.)
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">체크리스트</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>지시 사항의 명확성</strong>
      				<p>
      					모든 지시 사항이 구체적이고 이해하기 쉬운 언어로 작성되었는가?
      				</p>
      			</li>
      			<li>
      				<strong>라벨과 설명의 일관성</strong>
      				<p>
      					버튼, 링크, 입력 필드 등의 라벨과 설명이 일관되게 사용되었는가?
      				</p>
      			</li>
      			<li>
      				<strong>에러 메시지의 명확성</strong>
      				<p>
      					에러 메시지가 사용자가 문제를 이해하고 해결할 수 있도록 충분히 설명되었는가?
      				</p>
      			</li>
      			<li>
      				<strong>스크린 리더 호환성</strong>
      				<p>
      					스크린 리더를 사용할 때 지시 사항이 잘 전달되고 있는가?
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
      					<strong>VoiceOver 사용</strong>
      					<p>
      						지시 사항이 VoiceOver를 통해 명확히 전달되는지 테스트합니다.
      					</p>
      				</li>
      				<li>
      					<strong>폰트 크기 및 색상 대비 설정</strong>
      					<p>
      						지시 사항이 모든 접근성 설정에서도 읽기 쉬운지 확인합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">Android</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms reference">
      				<li>
      					<strong>TalkBack 사용</strong>
      					<p>
      						지시 사항이 TalkBack을 통해 명확하게 전달되는지 테스트합니다.
      					</p>
      				</li>
      				<li>
      					<strong>고대비 모드 테스트</strong>
      					<p>
      						고대비 모드에서 지시 사항이 잘 보이는지 확인합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">QA 지표</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>지시 사항 명확성 점수</strong>
      				<p>
      					사용자 테스트를 통해 지시 사항의 명확성을 평가.
      				</p>
      			</li>
      			<li>
      				<strong>에러 메시지 정확성 비율</strong>
      				<p>
      					제공된 에러 메시지가 문제를 설명하고 해결 방법을 제시하는 비율.
      				</p>
      			</li>
      			<li>
      				<strong>스크린 리더 적합성</strong>
      				<p>
      					스크린 리더를 사용했을 때 지시 사항이 잘 인식되고 전달되는지 여부.
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
      				<ul className="mt_ms dot_lst gap-column-important-m">
      					<li>
      						<span>UILabel과 UIButton의 접근성 속성 설정</span>
      						
      <CodeBlock title="명확한 지시 사항 - iOS 접근성 속성 설정" language="javascript" className="uk_gist_code_box">
      {`let submitButton = UIButton()
      								submitButton.setTitle("제출", for: .normal)
      								submitButton.accessibilityLabel = "신청서 제출 버튼"
      								submitButton.accessibilityHint = "신청서를 제출하려면 클릭하세요."`}
      </CodeBlock>

      					</li>
      					<li>
      						<span>에러 메시지 제공</span>
      						
      <CodeBlock title="명확한 지시 사항 - iOS 에러 메시지 제공" language="javascript" className="uk_gist_code_box">
      {`let errorMessageLabel = UILabel()
      								errorMessageLabel.text = "이름을 입력하세요."
      								errorMessageLabel.textColor = .red
      								errorMessageLabel.accessibilityLabel = "오류: 이름 입력 필드가 비어 있습니다."`}
      </CodeBlock>

      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">Android</h4>
      				<ul className="mt_ms dot_lst gap-column-important-m">
      					<li>
      						<span>Button의 접근성 속성 설정</span>
      						
      <CodeBlock title="명확한 지시 사항 - Android 접근성 속성 설정" language="javascript" className="uk_gist_code_box">
      {`Button submitButton = findViewById(R.id.submitButton);
      								submitButton.setText("제출");
      								submitButton.setContentDescription("신청서 제출 버튼. 클릭하여 제출");`}
      </CodeBlock>

      					</li>
      					<li>
      						<span>에러 메시지 제공</span>
      						
      <CodeBlock title="명확한 지시 사항 - Android 에러 메시지 제공" language="javascript" className="uk_gist_code_box">
      {`TextView errorMessage = findViewById(R.id.errorMessage);
      								errorMessage.setText("이름을 입력하세요.");
      								errorMessage.setTextColor(Color.RED);
      								errorMessage.setContentDescription("오류: 이름 입력 필드가 비어 있습니다.");`}
      </CodeBlock>

      					</li>
      				</ul>
      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">하이브리드</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드(html)</h4>
      				<ul className="mt_ms dot_lst gap-column-important-m">
      					<li>
      						<span>버튼에 aria-label 설명 추가</span>
      						
      <CodeBlock title="명확한 지시 사항 - html 버튼에 설명 추가" language="javascript" className="uk_gist_code_box">
      {`<button aria-label="신청서 제출" aria-describedby="submitHint">제출</button>
      								<div id="submitHint">신청서를 제출하려면 클릭하세요.</div>`}
      </CodeBlock>

      					</li>
      					<li>
      						<span>에러 메시지 제공</span>
      						
      <CodeBlock title="명확한 지시 사항 - html 에러 메시지 제공" language="javascript" className="uk_gist_code_box">
      {`<span role="alert" style="color: red;">오류: 이름을 입력하세요.</span>`}
      </CodeBlock>

      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드(Vue)</h4>
      				<p className="mt_ms">
      					버튼에 aria-label 설명 추가
      				</p>
      				
      <CodeBlock title="명확한 지시 사항 - Vue 버튼에 설명 추가" language="javascript" className="uk_gist_code_box">
      {`<template>
      							<button :aria-label="'신청서 제출'" @click="submitForm">제출</button>
      							<p v-if="errorMessage" role="alert"></p>
      						</template>

      						<script>
      							export default {
      								data() {
      									return {
      										errorMessage: ""
      									};
      								},
      								methods: {
      									submitForm() {
      										if (this.isFormValid()) {
      											// 제출 로직
      										} else {
      											this.errorMessage = "이름을 입력하세요.";
      										}
      									}
      								}
      							};
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드(React)</h4>
      				<p className="mt_ms">
      					버튼에 aria-label 설명 추가
      				</p>
      				
      <CodeBlock title="명확한 지시 사항 - React 버튼에 설명 추가" language="javascript" className="uk_gist_code_box">
      {`function App() {
      							const [errorMessage, setErrorMessage] = React.useState("");

      							const handleSubmit = () => {
      								if (isFormValid()) {
      									// 제출 로직
      								} else {
      									setErrorMessage("이름을 입력하세요.");
      								}
      							};

      							return (
      								<div>
      									<button aria-label="신청서 제출" onClick={handleSubmit}>
      										제출
      									</button>
      									{errorMessage && <p role="alert" style=>{errorMessage}</p>}
      								</div>
      							);
      						}`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 기준</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">오류유형</h3>
      			<ul className="mt_ml dot_lst gap-column-important-sm">
      				<li>
      					<b>모호한 지시 사항</b> : &quot;여기를 클릭하세요&quot;와 같이 구체적이지 않은 표현 사용.
      				</li>
      				<li>
      					<b>일관성 없는 라벨</b> : 같은 기능을 하는 요소가 화면마다 다른 라벨로 제공되는 경우.
      				</li>
      				<li>
      					<b>부족한 에러 메시지 정보</b> : &quot;오류 발생&quot;과 같이 구체적인 이유나 해결 방법이 없는 메시지.
      				</li>
      				<li>
      					<b>스크린 리더 호환성 부족</b> : 스크린 리더로 지시 사항이 제대로 읽히지 않거나 전달되지 않는 경우.
      				</li>
      				<li>
      					색, 크기, 모양, 방향 등으로만 정보를 제공한 경우
      				</li>
      				<li>
      					전달하고자 하는 지시사항을 소리로만 정보를 제공한 경우
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">주의사항</h3>
      			<ul className="mt_ml dot_lst gap-column-important-sm">
      				<li>
      					<b>구체적인 지시 사항 사용</b> : &quot;파일을 선택하려면 '파일 업로드' 버튼을 클릭하세요&quot;와 같이 구체적으로 작성합니다.
      				</li>
      				<li>
      					<b>일관된 라벨 사용</b> : 같은 기능을 하는 버튼이나 링크는 동일한 라벨을 사용해야 합니다.
      				</li>
      				<li>
      					<b>에러 메시지 개선</b> : 사용자가 문제를 해결할 수 있도록 구체적인 지침을 제공합니다(예: &quot;비밀번호는 최소 8자 이상이어야 합니다&quot;).
      				</li>
      				<li>
      					<b>스크린 리더 테스트 수행</b>: 개발 중 스크린 리더를 사용하여 라벨과 설명이 명확히 전달되는지 확인합니다.
      				</li>
      				<li>
      					노인이나 약시자의 경우에 브라우저의 글자체를 확대시켜 콘텐츠를 표시하면 콘텐츠의 표시 위치가 지시하는
      					위치와 달라져 혼란을 줄 수 있으므로 가급적 위치 정보를 이용하여 지시하지 않도록 콘텐츠를 구현하는 것을 권장합니다.
      				</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 방법</h2>

      		<p className="mt_l">
      			페이지를 구성하는 컨트롤이 특정 요소만으로 지시하거나 표현하는지 점검합니다.
      			(대체 수단 없이 음성 또는 음향으로 지시사항을 전달하는 경우 포함)
      		</p>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">특정요소로만 지시를 하는 사례</h3>
      			<ul className="mt_ml dot_lst gap-column-important-sm">
      				<li>
      					방향, 위치 정보로만 이용하는 사용법을 알려주는 경우
      				</li>
      				<li>
      					화면의 위치만으로 객체를 지정하는 경우
      				</li>
      				<li>
      					버튼의 모양만을 이용하여 사용법을 알려주는 경우
      				</li>
      				<li>
      					음성으로만 지시하는 경우 등
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">iOS</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong>VoiceOver 사용</strong>
      					<p>
      						iOS의 VoiceOver 기능을 켜고, 지시 사항이 음성으로 명확하게 전달되는지 테스트합니다.
      						버튼, 입력 필드, 에러 메시지 등에서 올바른 라벨과 설명이 전달되는지 확인합니다.<br />
      						예시) iPhone의 설정 &gt; 손쉬운 사용 &gt; VoiceOver를 켜고, 앱에서 버튼을 클릭할 때
      						<mark>&quot;신청서 제출 버튼&quot;</mark>이라는 지시 사항이 VoiceOver에서 출력되는지 확인합니다.
      					</p>
      				</li>
      				<li>
      					<strong>폰트 크기 및 색상 대비 설정</strong>
      					<p>
      						설정에서 폰트 크기를 크게 설정하거나 색상 대비(고대비)를 활성화한 후,
      						지시 사항이 여전히 명확하게 보이는지 확인합니다.<br />
      						예시) 설정 &gt; 손쉬운 사용 &gt; 디스플레이 및 텍스트 크기에서 <mark>'더 굵게'</mark>,
      						<mark>'투명도 줄이기'</mark> 등을 적용하여 텍스트 가독성을 확인합니다.
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
      						Android의 TalkBack 기능을 켜고, 버튼, 링크, 입력 필드 등에 올바른 지시 사항이 음성으로 전달되는지 확인합니다.<br />
      						예시) Android 설정 &gt; 손쉬운 사용 &gt; TalkBack을 켜고, 앱에서 버튼을 클릭할 때
      						<mark>&quot;신청서 제출 버튼&quot;</mark>이라는 설명이 TalkBack으로 읽히는지 테스트합니다.
      					</p>
      				</li>
      				<li>
      					<strong>고대비 모드 테스트</strong>
      					<p>
      						Android에서 색상 반전 또는 고대비 텍스트 설정을 활성화한 후, 앱에서 지시 사항이 명확하게 보이는지 테스트합니다.<br />
      						예시) 설정 &gt; 손쉬운 사용 &gt; 색상 반전 또는 고대비 텍스트 활성화 후, UI 요소들이 충분히 가독성이 있는지 확인합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">HTML</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong>스크린 리더 사용</strong>
      					<p>
      						PC에서 스크린 리더(NVDA, JAWS 등)를 사용하여 웹 페이지에서 버튼, 링크,
      						입력 필드의 접근성 라벨이 명확하게 전달되는지 확인합니다.<br />
      						예시) NVDA 스크린 리더를 실행하고, 버튼을 클릭할 때 <mark>&quot;신청서 제출 버튼&quot;</mark>이라는
      						음성 피드백이 올바르게 출력되는지 확인합니다.
      					</p>
      				</li>
      				<li>
      					<strong>색상 대비 도구 사용</strong>
      					<p>
      						Chrome의 DevTools 또는 Axe와 같은 자동화 접근성 도구를 사용하여 색상 대비 및
      						접근성 라벨 설정이 잘 되어 있는지 점검합니다.<br />
      						예시) DevTools &gt; Audits에서 접근성 분석을 실행하여 색상 대비 및 라벨 적절성을 확인합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">Vue</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong>스크린 리더 사용</strong>
      					<p>
      						Vue.js로 개발된 웹 애플리케이션에서도 NVDA 또는 VoiceOver 같은 스크린 리더를
      						사용해 지시 사항과 라벨이 적절하게 전달되는지 점검합니다.<br />
      						예시) Vue.js 컴포넌트에서 <code>aria-label</code> 속성이 올바르게 설정되어 있는지, 스크린 리더로 확인합니다.
      					</p>
      				</li>
      				<li>
      					<strong>Vue 접근성 플러그인 사용</strong>
      					<p>
      						Vue.js용 접근성 플러그인을 설치하여 자동으로 접근성 문제를 탐지하고 수정할 수 있는 방법도 사용합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">React</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong>스크린 리더 및 자동화 도구 사용</strong>
      					<p>
      						React로 개발된 애플리케이션에서는 NVDA와 같은 스크린 리더와 함께 Lighthouse 또는 Axe 같은 접근성 도구로 점검합니다.<br />
      						예시) React 컴포넌트의 접근성 속성이 제대로 설정되었는지 확인하고, 접근성 오류가 있는지 Lighthouse로 분석합니다.
      					</p>
      				</li>
      				<li>
      					<strong>React 접근성 개발자 도구</strong>
      					<p>
      						React 개발자 도구를 사용해 컴포넌트별로 접근성 라벨과 속성이 올바르게 설정되었는지 확인합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">준수 사례</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 1) 지시사항을 명확하게 제공한 경우</h3>
      			<figure className="mt_l img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_55}/5.5.a11y_tmp_01.png`} alt="" className="max-w700" />
      				<figcaption>
      					[출처 : 모바일 애플리케이션 접근성 제작기법]
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 2) 자동 가입 방지를 위한 인증 도구의 하나로 캡챠(captcha)를 사용</h3>
      			<p className="mt_ms">
      				캡챠의 지시사항이 &quot;팝콘이 있는 이미지를 모두 선택하세요&quot;와 같이 시각에만 의존하고 있어,
      				시각 장애가 있는 사용자는 이를 인식하고 수행하기 어렵습니다.<br />
      				이런 경우, 대체 수단을 제공하는 것이 바람직하며, 이 애플리케이션에서는 오디오 서비스를 통해 이를 해결하고 있습니다.
      			</p>
      			<figure className="mt_m img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_55}/5.5.a11y_tmp_02.png`} alt="" className="max-w350" />
      				<figcaption>
      					[출처 : 모바일 애플리케이션 접근성 제작기법]
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">미준수 사례</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 1) 색, 크기, 모양, 방향 등으로만 정보를 제공한 경우</h3>
      			<p className="mt_ms">
      				<mark>'여기서 확인하세요!'</mark> 텍스트로 방향으로만 정보를 제공하고 있습니다.
      			</p>
      			<figure className="mt_m img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_55}/5.5.a11y_tmp_03.png`} alt="" className="max-w350" />
      				<figcaption>
      					[출처 : 모바일 애플리케이션 접근성 제작기법]
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">사례 2) 텍스트에 링크 포함 시 스크린 리더로 링크 위치 인식 어려움</h3>
      			<p className="mt_ms">
      				텍스트 안에 링크나 버튼을 넣지 않아야 합니다.
      				아래 예와 같이 텍스트에 링크가 포함된 경우,
      				스크린 리더는 텍스트를 빠르게 읽어 내려가기 때문에
      				시각장애인은 화면의 레이아웃을 파악하기 어려워 링크 위치를 정확히 인식하기 힘듭니다.
      			</p>
      			<figure className="mt_m img_figure">
      				<img src={`${IMG.A11Y_TECH_M_P_55}/5.5.a11y_tmp_04.png`} alt="" />
      				<figcaption>
      					[출처 : 모바일 애플리케이션 접근성 제작기법]
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 영상</h2>
      		<div className="mt_xl youtube_box" style={{ '--padding-top': "56.25%" }}>
      			<iframe width="560" height="315" src="https://www.youtube.com/embed/f2M5ej1-D2w?si=eFExck_hs80jgSnM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      		</div>
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">레이블 | 모바일 접근성 콘텐츠 제작 기법(&quot;이해의 용이성(Understandable)&quot;) 참조</strong>
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

export default LabelsOrInstructionsPage
