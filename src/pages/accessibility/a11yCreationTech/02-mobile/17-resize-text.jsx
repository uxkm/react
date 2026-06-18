import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import { toggleContent } from '@/utils/toggleContent.js'

const PAGE_LAYOUT = {
  mainClass: "resize-text",
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
  title: "폰트 관련 기능의 활용 | 모바일 접근성 콘텐츠 제작 기법(\"인식의 용이성(Perceivable)\")",
  description: "모바일 접근성 콘텐츠 제작 기법이란 장애 유무에 관계없이 모든 사용자가 모바일 콘텐츠를 쉽게 이해하고 이용할 수 있도록 하는 설계하는 방법입니다. 이 페이지에서는 모바일 앱 접근성 체크리스트(인식의 용이성)의 '텍스트 크기 조정'에 해당하는 OS 폰트·텍스트 스케일 활용을 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성, 모바일 앱 접근성, 모바일 앱 접근성 콘텐츠 제작 기법, WCAG2.2, 폰트 관련 기능의 활용, 시각 장애인, 고령 사용자, 인지 장애인, 비장애인 포함 전체 사용자, 폰트 크기 조절, 가독성, 사용자 정의 폰트, Dynamic Type, Accessibility Text Scaling",
}

function ResizeTextPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>










      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_black">관련 지침(명료성) : 텍스트 콘텐츠는 운영체제에서 제공하는 폰트 관련 기능을 활용할 수 있는 방법을 제공해야 한다.</b><br />
      			모바일 앱의 폰트 관련 기능 활용은 사용자가 운영체제(OS)에서 제공하는
      			폰트 크기 조절 및 텍스트 스타일 옵션을 앱 내에서 사용할 수 있도록 보장하는 중요한 접근성 요소입니다.
      			이를 통해 시력 저하, 인지 장애, 노화로 인한 가독성 저하 등을 겪는 사용자가 텍스트를 보다 쉽게 읽고 이해할 수 있습니다.
      		</p>
      		<p className="mt_ms reference">
      			<a href="https://www.w3.org/WAI/WCAG22/quickref/#text-resize" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500">WCAG 2.2 Quick Reference - Text Resize</a>
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">필요성</h2>
      		<p className="mt_l">
      			폰트 크기와 스타일 조절 기능은 다양한 사용자 그룹의 접근성과 가독성을 보장하는 데 필수적입니다.
      			운영체제의 기본 텍스트 조절 기능을 무시하거나 앱 내에서 비활성화하면
      			사용자가 자신에게 편한 크기와 스타일로 텍스트를 읽지 못할 수 있습니다.
      			특히 시각 장애인, 고령 사용자, 인지 장애를 가진 사용자는 더 큰 글씨와 명확한 글꼴을 통해 앱을 더 잘 이용할 수 있습니다.
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">대상</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>시각 장애인</strong>
      				<p>
      					더 큰 글씨와 명확한 글꼴을 필요로 하는 사용자.
      				</p>
      			</li>
      			<li>
      				<strong>고령 사용자</strong>
      				<p>
      					시력이 저하되거나 텍스트 가독성이 낮은 사용자.
      				</p>
      			</li>
      			<li>
      				<strong>인지 장애인</strong>
      				<p>
      					더 쉽게 읽을 수 있는 글꼴과 폰트 스타일을 선호하는 사용자.
      				</p>
      			</li>
      			<li>
      				<strong>비장애인 포함 전체 사용자</strong>
      				<p>
      					개인의 선호에 맞게 폰트 크기와 스타일을 조정하여 편리하게 사용할 수 있습니다.
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">체크리스트</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>폰트 크기 조절 가능 여부</strong>
      				<p>
      					앱이 운영체제에서 제공하는 폰트 크기 조절 기능을 따르는지 확인합니다.
      				</p>
      			</li>
      			<li>
      				<strong>동적 글꼴 지원</strong>
      				<p>
      					앱 내 텍스트가 iOS의 Dynamic Type 또는 Android의 Accessibility Text Scaling을 지원하는지 확인합니다.
      				</p>
      			</li>
      			<li>
      				<strong>글꼴 스타일 적용</strong>
      				<p>
      					글꼴 굵기나 스타일 변경이 앱 내에서 반영되는지 점검합니다.
      				</p>
      			</li>
      			<li>
      				<strong>텍스트 가독성 보장</strong>
      				<p>
      					폰트 변경 시에도 텍스트의 가독성이 유지되는지 확인합니다.
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">기기별 테스트 방법</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">iOS</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong>Dynamic Type 설정 확인</strong>
      					<p>
      						[iOS의 설정 &gt; 손쉬운 사용 &gt; 디스플레이 및 텍스트 크기]에서 글꼴 크기를 조정한 후 앱 내에서 적용되는지 확인합니다.
      					</p>
      				</li>
      				<li>
      					<strong>가독성 테스트</strong>
      					<p>
      						Dynamic Type이 앱의 모든 텍스트에 적절히 반영되는지 확인하고, 가독성이 유지되는지 테스트합니다.
      					</p>
      				</li>
      				<li>
      					<strong>레이아웃 검증</strong>
      					<p>
      						폰트 크기 조절 후에도 레이아웃이 정상적으로 유지되는지 확인합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">Android</h3>
      			<ul className="mt_ml dot_lst gap-column-important-sm">
      				<li>
      					[Android의 설정 &gt; 손쉬운 사용 &gt; 글꼴 크기 및 화면 크기]에서 글꼴 크기를 조정한 후 앱 내에서 적용되는지 확인합니다.
      				</li>
      				<li>
      					TextView 및 EditText 컴포넌트가 OS의 글꼴 조절 설정에 따라 크기가 변경되는지 점검합니다.
      				</li>
      				<li>
      					Accessibility Scanner를 사용하여 폰트 크기 조절 시 문제가 발생하지 않는지 테스트합니다.
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">Android</h3>
      			<div className="mt_ml">
      				<strong className="el_block mb_sm font-16 weight-700 t_black">글꼴 크기 변경</strong>
      				<p>
      					HTML, Vue, React에서 버튼 클릭 시 글꼴 크기를 기본, 크게, 작게로 변경하고,
      					변경 시 aria-live 속성을 사용하여 사용자에게 toast 메시지를 음성 출력 가능하게 구현이 되었는지 테스트합니다.
      				</p>
      			</div>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">QA 지표</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>동적 글꼴 반영률</strong>
      				<p>
      					앱 내 텍스트가 운영체제의 폰트 크기 조정 기능을 따르는 비율.
      				</p>
      			</li>
      			<li>
      				<strong>텍스트 가독성</strong>
      				<p>
      					폰트 크기 및 스타일 변경 시에도 텍스트가 명확하게 보이는지 여부.
      				</p>
      			</li>
      			<li>
      				<strong>사용자 피드백</strong>
      				<p>
      					사용자 테스트를 통해 폰트 관련 기능의 사용 편의성을 평가.
      				</p>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">개발방법</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">네이티브</h3>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">iOS에서 Dynamic Type 적용 방법</h4>
      				<ul className="mt_ms dot_lst gap-column-important-m">
      					<li>
      						<span>UILabel 및 UITextView에 Dynamic Type 활성화</span>
      						
      <CodeBlock title="폰트 관련 기능의 활용 - iOS Dynamic Type" language="javascript" className="uk_gist_code_box">
      {`let label = UILabel()
      								label.font = UIFont.preferredFont(forTextStyle: .body)
      								label.adjustsFontForContentSizeCategory = true`}
      </CodeBlock>

      					</li>
      					<li>
      						Interface Builder에서 텍스트 스타일을 설정하고 Dynamic Type 지원 옵션을 활성화합니다.
      					</li>
      				</ul>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">Android에서 폰트 크기 조절 기능 구현 방법</h4>
      				<ul className="mt_ms dot_lst gap-column-important-m">
      					<li>
      						<span>TextView에서 글꼴 크기 반영</span>
      						
      <CodeBlock title="폰트 관련 기능의 활용 - Android TextView에서 글꼴 크기 반영" language="javascript" className="uk_gist_code_box">
      {`<TextView
      									android:layout_width="wrap_content"
      									android:layout_height="wrap_content"
      									android:text="Hello World"
      									android:textSize="16sp" />`}
      </CodeBlock>

      					</li>
      					<li>
      						<span>글꼴 크기 조절 기능을 지원하도록 설정</span>
      						
      <CodeBlock title="폰트 관련 기능의 활용 - Android 글꼴 크기 조절 기능을 지원하도록 설정" language="javascript" className="uk_gist_code_box">
      {`textView.textSize = resources.getDimension(R.dimen.default_text_size) * context.resources.configuration.fontScale`}
      </CodeBlock>

      					</li>
      				</ul>
      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">하이브리드</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드(html)</h4>
      				
      <CodeBlock title="폰트 관련 기능의 활용 - html" language="javascript" className="uk_gist_code_box">
      {`<div id="content">텍스트 콘텐츠 예제</div>
      						<button onclick="changeFontSize('small')">폰트 작게</button>
      						<button onclick="changeFontSize('medium')">기본 크기</button>
      						<button onclick="changeFontSize('large')">폰트 크게</button>
      						<div id="toast" aria-live="polite" class="toast-message"></div>

      						<script>
      							function changeFontSize(size) {
      								const content = document.getElementById('content');
      								if (size === 'small') {
      									content.style.fontSize = '12px';
      									showToast('폰트가 작게 설정되었습니다.');
      								} else if (size === 'medium') {
      									content.style.fontSize = '16px';
      									showToast('기본 폰트 크기가 설정되었습니다.');
      								} else if (size === 'large') {
      									content.style.fontSize = '20px';
      									showToast('폰트가 크게 설정되었습니다.');
      								}
      							}

      							function showToast(message) {
      								const toast = document.getElementById('toast');
      								toast.textContent = message;
      								toast.classList.add('show');
      								setTimeout(() => {
      									toast.classList.remove('show');
      									toast.textContent = '';
      								}, 3000);
      								if (window.speechSynthesis) {
      									const utterance = new SpeechSynthesisUtterance(message);
      									window.speechSynthesis.speak(utterance);
      								}
      							}
      						</script>

      						<style>
      							.toast-message {
      								position: fixed;
      								bottom: 10px;
      								left: 50%;
      								transform: translateX(-50%);
      								background-color: #333;
      								color: #fff;
      								padding: 10px;
      								border-radius: 5px;
      								display: none;
      							}

      							.toast-message.show {
      								display: block;
      							}
      						</style>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드(Vue)</h4>
      				
      <CodeBlock title="폰트 관련 기능의 활용 - Vue" language="javascript" className="uk_gist_code_box">
      {`<template>
      							<div>
      								<p :style="{ fontSize: fontSize }">텍스트 콘텐츠 예제</p>
      								<button @click="changeFontSize('small')">폰트 작게</button>
      								<button @click="changeFontSize('medium')">기본 크기</button>
      								<button @click="changeFontSize('large')">폰트 크게</button>
      								<div ref="toast" aria-live="polite" class="toast-message"></div>
      							</div>
      						</template>

      						<script>
      							export default {
      								data() {
      									return {
      										fontSize: '16px',
      										toastMessage: ''
      									};
      								},
      								methods: {
      									changeFontSize(size) {
      										if (size === 'small') {
      											this.fontSize = '12px';
      											this.showToast('폰트가 작게 설정되었습니다.');
      										} else if (size === 'medium') {
      											this.fontSize = '16px';
      											this.showToast('기본 폰트 크기가 설정되었습니다.');
      										} else if (size === 'large') {
      											this.fontSize = '20px';
      											this.showToast('폰트가 크게 설정되었습니다.');
      										}
      									},
      									showToast(message) {
      										this.toastMessage = message;
      										setTimeout(() => {
      											this.toastMessage = '';
      										}, 3000);
      										if (window.speechSynthesis) {
      											const utterance = new SpeechSynthesisUtterance(message);
      											window.speechSynthesis.speak(utterance);
      										}
      									}
      								}
      							};
      						</script>

      						<style>
      							.toast-message {
      								position: fixed;
      								bottom: 10px;
      								left: 50%;
      								transform: translateX(-50%);
      								background-color: #333;
      								color: #fff;
      								padding: 10px;
      								border-radius: 5px;
      								display: none;
      							}

      							.toast-message:empty {
      								display: none;
      							}
      						</style>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드(React)</h4>
      				
      <CodeBlock title="폰트 관련 기능의 활용 - React" language="javascript" className="uk_gist_code_box">
      {`import React, { useState } from 'react';

      						function App() {
      							const [fontSize, setFontSize] = useState('16px');
      							const [toastMessage, setToastMessage] = useState('');

      							const changeFontSize = (size) => {
      								if (size === 'small') {
      									setFontSize('12px');
      									showToast('폰트가 작게 설정되었습니다.');
      								} else if (size === 'medium') {
      									setFontSize('16px');
      									showToast('기본 폰트 크기가 설정되었습니다.');
      								} else if (size === 'large') {
      									setFontSize('20px');
      									showToast('폰트가 크게 설정되었습니다.');
      								}
      							};

      							const showToast = (message) => {
      								setToastMessage(message);
      								setTimeout(() => {
      									setToastMessage('');
      								}, 3000);
      								if (window.speechSynthesis) {
      									const utterance = new SpeechSynthesisUtterance(message);
      									window.speechSynthesis.speak(utterance);
      								}
      							};

      							return (
      								<div>
      									<p style=>텍스트 콘텐츠 예제</p>
      									<button onClick={() => changeFontSize('small')}>폰트 작게</button>
      									<button onClick={() => changeFontSize('medium')}>기본 크기</button>
      									<button onClick={() => changeFontSize('large')}>폰트 크게</button>
      									<div aria-live="polite" className="toast-message">{toastMessage}</div>
      								</div>
      							);
      						}

      						export default App;

      						/* style */
      						<style>
      							.toast-message {
      								position: fixed;
      								bottom: 10px;
      								left: 50%;
      								transform: translateX(-50%);
      								background-color: #333;
      								color: #fff;
      								padding: 10px;
      								border-radius: 5px;
      								display: none;
      							}

      							.toast-message:empty {
      								display: none;
      							}
      						</style>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 기준</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">오류유형</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong>폰트 크기 변경 미지원</strong>
      					<p>
      						앱이 운영체제의 글꼴 크기 설정을 무시하는 경우.
      					</p>
      				</li>
      				<li>
      					<strong>일부 컴포넌트 비지원</strong>
      					<p>
      						특정 UI 컴포넌트에서만 폰트 크기 변경이 적용되지 않는 경우.
      					</p>
      				</li>
      				<li>
      					<strong>가독성 저하</strong>
      					<p>
      						폰트 크기나 스타일 변경 시 텍스트가 읽기 어렵거나 UI가 깨지는 경우.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">주의사항</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong>일관성 유지</strong>
      					<p>
      						폰트 크기 변경 시 모든 텍스트 요소가 일관되게 조정되어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>자동 레이아웃 사용</strong>
      					<p>
      						레이아웃이 글꼴 크기 조절에 따라 동적으로 조정되도록 설정해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>글꼴 스타일 제한</strong>
      					<p>
      						앱의 전반적인 디자인과 가독성을 해치지 않으면서 다양한 글꼴 스타일을 허용해야 합니다.
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
      					<strong>Dynamic Type 테스트</strong>
      					<p>
      						앱 내의 모든 텍스트가 Dynamic Type 설정에 맞춰 크기와 스타일이 조정되는지 테스트합니다.
      					</p>
      				</li>
      				<li>
      					<strong>손쉬운 사용 설정</strong>
      					<p>
      						iOS의 손쉬운 사용 옵션을 통해 글꼴 크기 변경 후 앱의 가독성과 UI 안정성을 확인합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">Android</h3>
      			<ul className="mt_ml dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong>Accessibility Text Scaling 테스트</strong>
      					<p>
      						Android에서 글꼴 크기 및 화면 크기 조절 옵션을 활성화한 후 앱이 설정을 따르는지 테스트합니다.
      					</p>
      				</li>
      				<li>
      					<strong>레이아웃 테스트</strong>
      					<p>
      						글꼴 크기 변경 시 레이아웃이 깨지거나 텍스트가 잘리지 않는지 확인합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 영상</h2>
      		<div className="mt_xl youtube_box" style={{ '--padding-top': "56.25%" }}>
      			<iframe width="560" height="315" src="https://www.youtube.com/embed/q8jHIdEVxSw?si=n7BBcjCq4wukdjy-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      		</div>
      		<p className="mt_ms">
      			출처 : NULI 모바일 앱 접근성 (17. 폰트 관련 기능의 활용)
      		</p>
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">폰트 관련 기능의 활용 | 모바일 접근성 콘텐츠 제작 기법(&quot;인식의 용이성(Perceivable)&quot;) 참조</strong>
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

export default ResizeTextPage
