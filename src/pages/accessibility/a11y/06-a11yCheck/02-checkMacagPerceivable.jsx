import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
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
  title: "인식의 용이성 | 접근성 체크리스트(모바일 앱 접근성)",
  description: "모바일 앱 접근성 체크리스트는 다양한 사용자들이 모바일 앱 콘텐츠를 문제 없이 이용할 수 있도록 보장하기 위해 설계된 필수 항목들을 제공합니다. 이 페이지에서는 모바일 앱 접근성 체크리스트의 인식의 용이성(Perceivable)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성",
}

function CheckMacagPerceivablePage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		모바일 애플리케이션 콘텐츠를 구축, 운영, 개선 및 유지 보수할 경우에 적용하는 것으로 모바일 전화기,
      		태블릿기기 등 모바일 기기에서 실행되는 모든 애플리케이션 및 콘텐츠를
      		WCAG 2.0(Web Content Accessibility Guidelines 2.0)에서 제시하고 있는 접근성 설계의 4가지 원칙 기준으로,
      		<b>모바일 애플리케이션 콘텐츠의 설계 및 개발을 위한 지침을 제시하고 있습니다.</b>
      	</p>
      </blockquote>










      	<link href="/a11yStart.min.css" rel="stylesheet" />
      	<link href="/checkWcag.min.css" rel="stylesheet" />



      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">텍스트 아닌 콘텐츠 [유지]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 합니다.</b><br />
      				시각 장애인이 스크린 리더를 통해 이미지 내용을 이해할 수 있도록 모든 이미지에 대체 텍스트를 제공해야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#non-text-content" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.1.1 Non-text Content</a><br />
      				<a href="https://www.w3.org/TR/IMPLEMENTING-UAAG20/mobile.html#gl-access-alternative-content" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UAAG 2.0 Reference</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">접근성 보장</strong>
      					<p>
      						시각 장애 사용자는 스크린 리더를 통해 앱의 내용을 접근합니다.
      						대체 텍스트를 제공하면 스크린 리더가 이미지나 비디오의 의미를 읽어줄 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">SEO 향상</strong>
      					<p>
      						검색 엔진은 이미지 파일을 직접 해석하지 못하므로, 대체 텍스트는 검색 엔진 최적화(SEO)에 기여합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">콘텐츠 로드 실패 시 대처</strong>
      					<p>
      						이미지가 로드되지 않거나 손상된 경우, 대체 텍스트는 이미지의 의미를 그대로 전달할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">법적 준수</strong>
      					<p>
      						웹 접근성 관련 법률을 준수하여 모든 사용자가 정보에 동등하게 접근할 수 있도록 보장합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black ">모든 이미지에 대체 텍스트 제공</strong>
      					<p>
      						콘텐츠의 의미를 설명하는 간단하고 명확한 대체 텍스트를 모든 이미지에 추가합니다.
      						의미 없는 장식용 이미지는 <code>alt=&quot;&quot;</code>로 설정하여 스크린 리더가 이를 무시하도록 할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">기타 비텍스트 콘텐츠에 대한 설명 제공</strong>
      					<p>
      						비디오나 오디오 콘텐츠에는 자막이나 텍스트 설명을 제공하여,
      						청각 장애 사용자나 비디오를 시청할 수 없는 사용자들도 콘텐츠를 이해할 수 있도록 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">적절한 길이와 명확성 유지</strong>
      					<p>
      						대체 텍스트는 간결하고 명확하며, 콘텐츠의 핵심 의미를 정확하게 전달해야 합니다.
      						다만, 너무 길거나 짧아서 의미 전달이 어려워지지 않도록 주의해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>
      			
      <CodeBlock title="텍스트 아닌 콘텐츠 - 예시" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 기본 예시 -->
      					<img src="created_by02_gray.jpg" alt="마이크 앞에서 노래를 부르는 아이">

      					<!-- 잘못된 예시 : alt 속성과 aria-label을 중복 사용한 경우 -->
      					<img src="submit_button.png" alt="제출" aria-label="제출">

      					<!-- 올바른 예시1 : alt 속성만 사용하는 경우 (이미지) -->
      					<img src="submit_button.png" alt="제출">

      					<!-- 올바른 예시2 : aria-label 속성만 사용하는 경우 (텍스트가 없는 버튼 등) -->
      					<button aria-label="제출"><img src="submit_button.png" alt=""></button>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>모든 이미지 및 비텍스트 콘텐츠에 적절한 대체 텍스트가 제공되고 있는지 확인하였는가?</li>
      				<li>마크업에서 alt 속성, aria-label 속성 등이 올바르게 사용되고 중복된 정보를 제공하였는지 확인하였는가?</li>
      				<li>모바일 기기에서 화면 읽기 소프트웨어(예: iOS의 VoiceOver, Android의 TalkBack)를 사용하여 텍스트가 아닌 콘텐츠에 대한 대체 텍스트가 올바르게 읽히는지 확인하였는가?</li>
      				<li>접근성 검사 도구(예: Google Lighthouse, Axe)를 사용하여 자동화된 접근성 검사를 수행하고 문제점을 확인하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">자막 또는 수어 [강화]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">멀티미디어 콘텐츠는 자막 또는 수어를 제공해야 합니다.</b><br />
      				영상이나 음성 콘텐츠는 모든 사용자에게 동일한 정보를 제공하기 위해, 자막, 원고, 또는 수화와 같은 동등한 형태의 대체 콘텐츠를 포함해야 합니다.
      				이를 통해 청각 장애가 있거나 음성을 이해하기 어려운 사용자도 콘텐츠를 충분히 접하고 이해할 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#captions-prerecorded" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.2.2 Captions (Prerecorded)</a><br />
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#audio-description-or-media-alternative-prerecorded" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.2.3 Audio Description or Media Alternative (Prerecorded)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">청각 장애인</strong>
      					<p>
      						청각 장애를 가진 사용자도 콘텐츠를 이해할 수 있어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">비공개 환경</strong>
      					<p>
      						공공장소나 소음을 내기 어려운 환경에서도 콘텐츠를 이용할 수 있어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">언어 학습</strong>
      					<p>
      						자막을 통해 외국어 학습이나 언어 이해를 도울 수 있어야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black ">자막 (Captions)</strong>
      					<ul className="dot_lst dot_lst_inner gap-column-sm">
      						<li>
      							<b>동기 자막</b> :
      							영상과 동시에 제공되는 자막으로, 대화뿐만 아니라 중요한 소리(예: [박수], [전화벨])도 포함합니다.
      						</li>
      						<li>
      							<b>폐쇄 자막(Closed Captions)</b> :
      							사용자가 켜고 끌 수 있는 자막.
      						</li>
      						<li>
      							<b>열린 자막(Open Captions)</b> :
      							영상에 항상 표시되는 자막.
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong className="t_black">원고 (Transcript)</strong>
      					<ul className="dot_lst dot_lst_inner gap-column-sm">
      						<li>
      							영상이나 오디오의 대화 내용과 중요한 소리를 텍스트로 제공합니다.
      						</li>
      						<li>
      							동기화가 필요 없는 경우, 사용자가 내용을 쉽게 검색하고 읽을 수 있습니다.
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong className="t_black">수화 (Sign Language)</strong>
      					<ul className="dot_lst dot_lst_inner gap-column-sm">
      						<li>
      							수화 통역을 통해 청각 장애인이 콘텐츠를 이해할 수 있도록 돕습니다.
      						</li>
      						<li>
      							화면 구석에 수화 통역사를 표시하는 방법을 사용합니다.
      						</li>
      					</ul>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>
      			
      <CodeBlock title="자막 또는 수어 - 예시" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 잘못된 예시 : 영상 콘텐츠에 자막, 원고 또는 수화가 제공되지 않은 경우 -->
      					<video src="video.mp4" controls></video>

      					<!-- 올바른 예시1 : 영상 콘텐츠에 자막을 제공하는 경우 -->
      					<video src="video.mp4" controls>
      						<track kind="captions" src="captions_en.vtt" srclang="en" label="English">
      					</video>

      					<!-- 올바른 예시2 : 영상 콘텐츠에 원고를 제공하는 경우 -->
      					<video src="video.mp4" controls></video>
      					<a href="transcript.txt">영상 원고 보기</a>

      					<!-- 올바른 예시3 : 영상 콘텐츠에 수화 통역을 제공하는 경우 -->
      					<video src="video_with_sign_language.mp4" controls></video>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>자막이 정확하게 표시되고, 대화와 동기화되는지 확인하였는가?</li>
      				<li>원고가 영상이나 오디오의 내용을 정확히 반영하고 있는지 확인하였는가?</li>
      				<li>수화 통역이 영상의 내용을 정확히 전달하는지, 화면에 잘 보이는지 확인하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">화면해설 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">멀티미디어 콘텐츠에서 음성 정보가 없는 시각 정보는 인식할 수 있도록 화면해설을 제공해야 합니다.</b><br />
      				대사·나레이션 없이 전달되는 중요한 시각 정보(화면 전환, 그래픽, 텍스트 등)는 음성 설명·화면해설 트랙 등으로 동등하게 전달할 수 있어야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#audio-description-or-media-alternative-prerecorded" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.2.3 Audio Description or Media Alternative (Prerecorded)</a><br />
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#audio-description-prerecorded" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.2.5 Audio Description (Prerecorded)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">시각 정보의 동등한 전달</strong>
      					<p>
      						시각 장애 사용자는 화면에만 나타나는 정보를 음성으로만 들을 수 없을 때 내용을 놓칠 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">별도 오디오·트랙</strong>
      					<p>
      						화면해설(오디오 설명) 트랙, 또는 동등한 대체 콘텐츠(텍스트 원고 등)를 제공합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      				<p className="mt_s">
      					자막과 화면해설(설명) 트랙을 함께 제공합니다.
      				</p>
      				
      <CodeBlock title="화면해설 - 올바른 예시(하이브리드)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- 올바른 예시 : 자막 + 화면해설(설명) 트랙 -->
      						<video src="video.mp4" controls>
      							<track kind="captions" src="captions_en.vtt" srclang="en" label="English">
      							<track kind="descriptions" src="descriptions_en.vtt" srclang="en" label="English">
      						</video>`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">잘못된 / 올바른 예시</h4>
      				
      <CodeBlock title="화면해설 - 잘못된 예시 / 올바른 예시" language="html" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 : 시각 정보만 있고 자막·화면해설·원고 등 동등한 대체가 없음 -->
      						<video src="video_no_audio_desc.mp4" controls></video>

      						<!-- 올바른 예시 : 동등한 대체(화면해설 트랙 또는 텍스트 원고 링크) 제공 -->
      						<video src="video.mp4" controls>
      							<track kind="descriptions" src="descriptions_ko.vtt" srclang="ko" label="화면해설">
      						</video>
      						<p><a href="media-alternative.html">영상에 대한 텍스트 설명 보기</a></p>`}
      </CodeBlock>

      			</div>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>음성 없이 전달되는 시각 정보는 화면해설·원고 등으로 동등하게 제공되는지 확인하였는가?</li>
      				<li>멀티미디어 재생 시 화면해설 트랙을 켜거나 끌 수 있는지 확인하였는가?</li>
      			</ul>
      		</article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">표의 구성 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">표는 이해하기 쉽게 구성해야 합니다.</b><br />
      				제목 셀과 데이터 셀의 관계가 드러나도록 표를 마크업하고, 캡션·헤더 연결을 제공합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#info-and-relationships" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.3.1 Info and Relationships</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">관계 이해</strong>
      					<p>
      						스크린 리더 사용자가 어떤 셀이 행·열 제목과 연결되는지 알 수 있어야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">헤더·범위</strong>
      					<p>
      						<code>th</code>/<code>scope</code> 또는 <code>headers</code>/<code>id</code> 등으로 연결을 명시합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">캡션</strong>
      					<p>
      						<code>caption</code> 또는 <code>aria-label</code>로 표의 목적을 설명합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      				<p className="mt_s">
      					캡션과 <code>scope</code>로 헤더 관계를 명시합니다.
      				</p>
      				
      <CodeBlock title="표의 구성 - 올바른 예시(하이브리드)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<table>
      							<caption>제품 가격표</caption>
      							<thead>
      								<tr>
      									<th scope="col">제품명</th>
      									<th scope="col">가격</th>
      								</tr>
      							</thead>
      							<tbody>
      								<tr>
      									<th scope="row">사과</th>
      									<td>1,000원</td>
      								</tr>
      							</tbody>
      						</table>`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">잘못된 / 올바른 예시</h4>
      				
      <CodeBlock title="표의 구성 - 잘못된 예시 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 : 캡션·scope 없이 div만으로 격자를 흉내냄 -->
      						<div class="fake-table">
      							<div><span>제품명</span><span>가격</span></div>
      							<div><span>사과</span><span>1,000원</span></div>
      						</div>

      						<!-- 올바른 예시 : table, caption, th scope -->
      						<table>
      							<caption>제품 가격표</caption>
      							<thead>
      								<tr>
      									<th scope="col">제품명</th>
      									<th scope="col">가격</th>
      								</tr>
      							</thead>
      							<tbody>
      								<tr>
      									<th scope="row">사과</th>
      									<td>1,000원</td>
      								</tr>
      							</tbody>
      						</table>`}
      </CodeBlock>

      			</div>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>표의 헤더와 데이터 셀의 관계가 프로그램적으로 식별 가능한가?</li>
      				<li>스크린 리더로 제목 셀과의 관계가 올바르게 읽히는가?</li>
      			</ul>
      		</article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">콘텐츠의 선형구조 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">콘텐츠는 논리적인 순서로 제공해야 합니다.</b><br />
      				시각적 배치와 DOM 순서·스크린 리더 읽기 순서가 일치하도록 구성합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#meaningful-sequence" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.3.2 Meaningful Sequence</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">일관된 읽기 순서</strong>
      					<p>
      						보조기술은 DOM 순서대로 읽으므로, 시각적 순서와 문서 순서가 같아야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">헤딩·레이아웃</strong>
      					<p>
      						제목 단계(<code>h1</code>~<code>h6</code>)를 건너뛰지 않고, 의미 있는 순서로 마크업합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">동적 UI</strong>
      					<p>
      						포커스 순서가 사용자가 기대하는 흐름과 같도록 조정합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      				<p className="mt_s">
      					제목과 본문이 논리적 순서로 배치됩니다.
      				</p>
      				
      <CodeBlock title="콘텐츠의 선형구조 - 올바른 예시(하이브리드)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<h1>사이트 제목</h1>
      						<p>이 사이트는 다양한 정보를 제공합니다.</p>
      						<nav>
      							<a href="#section1">섹션 1</a>
      							<a href="#section2">섹션 2</a>
      						</nav>
      						<h2 id="section1">섹션 1</h2>
      						<p>여기는 섹션 1의 내용입니다.</p>
      						<h2 id="section2">섹션 2</h2>
      						<p>여기는 섹션 2의 내용입니다.</p>`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">잘못된 / 올바른 예시</h4>
      				
      <CodeBlock title="콘텐츠의 선형구조 - 잘못된 예시 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 : h1이 중간에 끼어 DOM 순서가 논리적이지 않음 -->
      						<p>이 사이트는 다양한 정보를 제공합니다.</p>
      						<nav>
      							<a href="#section1">섹션 1</a>
      							<a href="#section2">섹션 2</a>
      						</nav>
      						<h2 id="section1">섹션 1</h2>
      						<p>여기는 섹션 1의 내용입니다.</p>
      						<h1>사이트 제목</h1>
      						<h2 id="section2">섹션 2</h2>
      						<p>여기는 섹션 2의 내용입니다.</p>

      						<!-- 올바른 예시 : h1이 먼저 오고 제목 단계가 순서대로 -->
      						<h1>사이트 제목</h1>
      						<p>이 사이트는 다양한 정보를 제공합니다.</p>
      						<nav>
      							<a href="#section1">섹션 1</a>
      							<a href="#section2">섹션 2</a>
      						</nav>
      						<h2 id="section1">섹션 1</h2>
      						<p>여기는 섹션 1의 내용입니다.</p>
      						<h2 id="section2">섹션 2</h2>
      						<p>여기는 섹션 2의 내용입니다.</p>`}
      </CodeBlock>

      			</div>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>스크린 리더로 읽는 순서가 논리적인가?</li>
      				<li>CSS로 시각 순서만 바꾸어 DOM 순서와 어긋나지 않는가?</li>
      			</ul>
      		</article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">다양한 감각 지원 [통합]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">지시사항이나 알림정보 등은 모양, 크기, 위치, 방향, 색, 소리 등에 관계없이 다양한 감각으로 인식할 수 있어야 합니다.</b><br />
      				지시는 색·위치·소리 등 한 가지 감각에만 의존하지 않고, 알림은 화면·소리·진동 등 여러 경로로 전달할 수 있어야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#sensory-characteristics" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.3.3 Sensory Characteristics</a><br />
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#labels-or-instructions" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.3.2 Labels or Instructions</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">다양한 사용자를 고려</strong>
      					<p>
      						시각, 청각, 인지·촉각 장애를 가진 사용자와 다양한 환경에서도 지시·알림을 인지할 수 있어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">명확한 커뮤니케이션</strong>
      					<p>
      						모호하지 않은 지시와 중복되지 않는 다중 채널 알림은 실수를 줄이고 정보를 놓치지 않게 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_ms dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">지시 사항</strong>
      					<p>
      						지시를 텍스트로 명확히 하고, 아이콘에는 라벨·<code>contentDescription</code> 등을 붙입니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">알림</strong>
      					<p>
      						팝업·토스트 등 시각 알림과, 소리·진동 등을 조합해 사용자 설정에 맞게 제공합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">지시 사항 — 네이티브 앱 예시(Android)</h4>
      				<p className="mt_s">
      					텍스트 기반의 명확한 지시 사항 제공
      				</p>
      				
      <CodeBlock title="다양한 감각 지원 - 지시(네이티브)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<TextView
      							android:id="@+id/instructionText"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="다음 단계로 진행하려면 '다음' 버튼을 누르세요."
      							android:textSize="16sp" />

      						<Button
      							android:id="@+id/nextButton"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="다음"
      							android:contentDescription="다음 단계로 진행 버튼" />`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/JavaScript)</h4>
      				<p className="mt_s">
      					지시 사항을 텍스트로 명확하게 제공
      				</p>
      				<div className="view_editor edit_code mt_ms">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.2.1.5.Labels_or_Instructions.html" className="uk_editor min_height_300 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="200px" />
      </Suspense>
      </div>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">알림 — 네이티브 앱 예시(Android)</h4>
      				<p className="mt_s">
      					화면 표시, 소리, 진동을 통한 알림
      				</p>
      				
      <CodeBlock title="다양한 감각 지원 - 알림(네이티브)" language="javascript" className="uk_gist_code_box mt_ms">
      {`NotificationCompat.Builder builder = new NotificationCompat.Builder(this, "channelId")
      							.setSmallIcon(R.drawable.notification_icon)
      							.setContentTitle("새 메시지")
      							.setContentText("새로운 메시지가 도착했습니다.")
      							.setPriority(NotificationCompat.PRIORITY_HIGH)
      							.setVibrate(new long[] { 0, 500, 1000 })
      							.setSound(RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION))
      							.setAutoCancel(true);

      						NotificationManagerCompat notificationManager = NotificationManagerCompat.from(this);
      						notificationManager.notify(1001, builder.build());`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">알림 — 하이브리드 앱 예시 (HTML/JavaScript)</h4>
      				<p className="mt_s">
      					화면 표시와 소리, 진동을 통한 알림('<b>알림 보내기</b>' 버튼을 클릭하세요.)
      				</p>
      				<div className="view_editor edit_code mt_ms">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.2.1.6.Sensory_Characteristics.html" className="uk_editor min_height_300 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="200px" />
      </Suspense>
      </div>
      			</div>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>지시 사항이 색상, 위치, 모양 등에만 의존하지 않는지 확인하였는가?</li>
      				<li>알림이 화면·소리·진동 등 여러 경로로 전달되거나 사용자 설정에 맞게 제공되는지 확인하였는가?</li>
      				<li>조용한 환경, 시끄러운 환경, 어두운 환경 등에서 지시·알림이 인지되는지 확인하였는가?</li>
      			</ul>
      		</article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">방향 설정 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">콘텐츠는 특정 화면 방향으로만 고정하지 않아야 합니다.</b><br />
      				가로·세로 전환을 허용하거나, 고정이 불가피한 경우 동등한 대안을 제공합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#orientation" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.3.4 Orientation</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">기기·사용자 선택</strong>
      					<p>
      						휠체어 거치대 등으로 세로 고정만 가능한 경우와 사용자의 회전 선호가 다를 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">회전 허용</strong>
      					<p>
      						시스템 설정에 따라 가로·세로 모두에서 콘텐츠를 이용할 수 있게 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">예외 시</strong>
      					<p>
      						방향 고정이 필수인 경우(예: 카메라 뷰파인더) 동등한 정보를 다른 방향에서도 제공합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">네이티브 앱 예시(Android)</h4>
      				<p className="mt_s">
      					<code>AndroidManifest.xml</code>에서 불필요한 방향 고정을 피합니다.
      				</p>
      				
      <CodeBlock title="방향 설정 - 네이티브 예시(Android)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- 올바른 예시 : activity에 orientation을 portrait로만 강제하지 않음 (sensor 또는 user) -->
      						<activity
      							android:name=".MainActivity"
      							android:configChanges="orientation|screenSize"
      							android:screenOrientation="sensor" />

      						<!-- 잘못된 예시 : 항상 세로만 허용 (필수 사유 없이) -->
      						<!--
      						<activity
      							android:name=".MainActivity"
      							android:screenOrientation="portrait" />
      						-->`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/JavaScript)</h4>
      				<p className="mt_s">
      					뷰포트·CSS로 가로 폭을 유연하게 두어 회전·좁은 폭에 대응합니다.
      				</p>
      				
      <CodeBlock title="방향 설정 - 하이브리드 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<meta name="viewport" content="width=device-width, initial-scale=1">
      						<style>
      							.main { max-width: 100%; box-sizing: border-box; }
      						</style>`}
      </CodeBlock>

      			</div>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>불필요하게 한 방향만 허용하는 제한이 없는지 확인하였는가?</li>
      			</ul>
      		</article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">입력 목적 식별 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">입력 서식의 목적은 식별할 수 있어야 합니다.</b><br />
      				<code>autocomplete</code> 등으로 필드 목적을 프로그램적으로 드러내거나, 일관된 레이블을 제공합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#identify-input-purpose" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.3.5 Identify Input Purpose</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">자동완성·보조기술</strong>
      					<p>
      						필드 목적이 알려져 있으면 비밀번호 관리자·자동완성·음성 입력이 정확해집니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">HTML</strong>
      					<p>
      						<code>autocomplete</code> 등 HTML 표준 자동완성 토큰을 사용합니다.
      						<a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-detail-tokens" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WHATWG autofill tokens</a>
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">Android</strong>
      					<p>
      						<code>android:importantForAutofill</code>, <code>autofillHints</code> 등으로 목적을 힌트합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">네이티브 앱 예시(Android)</h4>
      				<p className="mt_s">
      					자동 채우기 힌트로 입력 목적을 식별합니다.
      				</p>
      				
      <CodeBlock title="입력 목적 식별 - 네이티브 예시(Android)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<EditText
      							android:id="@+id/email"
      							android:layout_width="match_parent"
      							android:layout_height="wrap_content"
      							android:inputType="textEmailAddress"
      							android:importantForAutofill="yes"
      							android:autofillHints="emailAddress"
      							android:hint="이메일" />`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      				<p className="mt_s">
      					<code>label</code>, <code>type</code>, <code>autocomplete</code>로 목적을 연결합니다.
      				</p>
      				
      <CodeBlock title="입력 목적 식별 - 하이브리드 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<label for="email">이메일</label>
      						<input id="email" type="email" name="email" autocomplete="email" />`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">잘못된 / 올바른 예시</h4>
      				
      <CodeBlock title="입력 목적 식별 - 잘못된 예시 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 : placeholder만 있고 타입·autocomplete 없음 -->
      						<input type="text" placeholder="여기 입력" />

      						<!-- 올바른 예시 : 레이블 + 타입 + autocomplete -->
      						<label for="tel">전화번호</label>
      						<input id="tel" type="tel" name="tel" autocomplete="tel" />`}
      </CodeBlock>

      			</div>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>입력 필드의 목적이 레이블·자동완성 등으로 식별 가능한가?</li>
      			</ul>
      		</article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">색에 무관한 콘텐츠 [유지]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">콘텐츠는 색에 관계없이 인식할 수 있어야 합니다.</b><br />
      				콘텐츠는 색상에 관계없이 인식될 수 있어야 합니다. 색상에 의존한 정보 전달을 피하고, 색상만으로 정보를 전달하지 않도록 주의해야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#use-of-color" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.4.1 Use of Color</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">색각 장애 사용자 보호</strong>
      					<p>
      						색각 장애를 가진 사용자가 색을 구별하기 어려운 상황에서 정보를 놓칠 수 있기 때문에,
      						색 외의 다른 요소를 사용하면 이 문제를 해결할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">사용자 경험 향상</strong>
      					<p>
      						색만으로 정보를 전달하지 않음으로써 모든 사용자가 쉽게 정보를 인식하고 이해할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">접근성 보장</strong>
      					<p>
      						색을 구별하기 어려운 사용자를 포함해 다양한 사용자가 앱을 접근 가능하게 이용할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black ">텍스트 및 패턴 사용</strong>
      					<p>
      						중요한 정보나 상태는 색상 외에도 텍스트, 패턴, 아이콘 등의 다른 시각적 요소를 함께 사용해 전달해야 합니다.<br />
      						예를 들어, 오류 메시지를 빨간색으로만 표시하는 대신 '오류'라는 텍스트나 아이콘을 함께 표시합니다
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">명확한 레이블 제공</strong>
      					<p>
      						색으로 구분되는 요소들은 명확한 레이블이나 설명을 포함하여, 색을 구별하지 않아도 이해할 수 있도록 해야 합니다.<br />
      						예를 들어, 그래프에서 색으로 표시된 데이터는 각 데이터의 의미를 레이블로 표시해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">색상 대비를 고려한 디자인</strong>
      					<p>
      						색각 장애 사용자가 색을 구분할 수 있도록 색상 대비를 충분히 명확하게 설계해야 합니다. 그러나 색상 외에도 추가적인 구별 요소를 함께 제공해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black ">테스트 및 검수</strong>
      					<p>
      						색각 장애 시뮬레이션 도구를 사용해 디자인을 테스트하고, 색상에 관계없이 정보가 제대로 전달되는지 확인합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">네이티브 앱 예시(Android)</h4>
      				<p className="mt_s">
      					텍스트와 아이콘을 사용하여 상태를 전달합니다.
      				</p>
      				
      <CodeBlock title="색에 무관한 콘텐츠 - 네이티브 앱 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`// xml code
      						<TextView
      							android:id="@+id/statusText"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="오류 발생"
      							android:textColor="#FF0000"                   /* 색상 외에 텍스트로 오류 상태를 전달 */
      							android:drawableStart="@drawable/ic_error" /> /* 오류 아이콘 사용 */

      						// java code
      						<script>
      							Button button = findViewById(R.id.myButton); // 버튼 상태를 텍스트와 색상으로 구분
      							button.setText("비활성화됨");
      							button.setTextColor(Color.GRAY);             // 비활성화된 상태를 회색 텍스트로 표시
      							button.setEnabled(false);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/JavaScript)</h4>
      				<p className="mt_s">
      					색상 외의 요소를 사용하여 정보를 구분합니다.
      				</p>
      				<div className="view_editor edit_code mt_ms">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.2.1.3.Use_of_Color.html" className="uk_editor min_height_500 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="500px" mbResultHeight="200px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">잘못된 / 올바른 예시</h4>
      				
      <CodeBlock title="색에 무관한 콘텐츠 - 잘못된 예시 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 (네이티브) - 텍스트 없이 색상만으로 상태를 전달하여 색각 장애 사용자가 정보를 이해하기 어려움 -->
      						<TextView
      							android:id="@+id/statusText"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:textColor="#FF0000" /> <!-- 텍스트 없이 색상만 사용 -->

      						<!-- 올바른 예시 - (네이티브) - 색상과 함께 텍스트 및 아이콘을 사용하여 상태를 명확하게 전달함 -->
      						<TextView
      							android:id="@+id/statusText"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="오류 발생"
      							android:textColor="#FF0000"
      							android:drawableStart="@drawable/ic_error" />

      						<!-- 잘못된 예시 (하이브리드) - 색상만으로 정보를 구분하여 색각 장애 사용자가 정보를 구별하기 어려움 -->
      						<p style="color: #FF0000;">오류</p> <!-- 색상만으로 정보 전달 -->
      						<p style="color: #008000;">성공</p> <!-- 색상만으로 정보 전달 -->

      						<!-- 올바른 예시 (하이브리드) - 색상 외의 텍스트와 아이콘을 사용하여 정보를 전달함. -->
      						<p class="error-message">⚠️ 오류 발생: 입력한 데이터가 유효하지 않습니다.</p>
      						<p class="success-message">✔️ 성공: 데이터가 정상적으로 저장되었습니다.</p>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>
      					
      					<p>
      						모든 중요한 정보가 색상 외의 텍스트, 아이콘, 패턴 등 다른 시각적 요소로도 전달되고 있는지 확인하였는가?
      					</p>
      				</li>
      				<li>
      					
      					<p>
      						색각 장애 시뮬레이션 도구를 사용하여 디자인이 색각 장애 사용자에게도 동일한 정보를 제공하는지 테스트하였는가?
      					</p>
      				</li>
      				<li>
      					
      					<p>
      						다양한 사용자가 색상 외의 요소를 통해 정보를 올바르게 인식할 수 있는지 테스트하였는가?
      					</p>
      				</li>
      				<li>
      					
      					<p>
      						WAVE, Axe 등의 도구를 사용하여 색상만으로 정보를 전달하는 요소를 점검하였는가?
      					</p>
      				</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">소리 자동 재생 [유지]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">소리는 자동으로 재생되지 않아야 합니다.</b><br />
      				3초 이상 자동 재생되는 소리는 사용자가 중지·일시정지·음량 조절 등으로 제어할 수 있어야 하며, 배경음이 스크린 리더 음량에 영향을 주지 않아야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#audio-control" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.4.2 Audio Control</a><br />
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#pause-stop-hide" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.2.2 Pause, Stop, Hide</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">스크린 리더와의 충돌 방지</strong>
      					<p>
      						갑자기 재생되는 소리는 음성 안내를 가려 사용자가 콘텐츠를 인지하기 어렵게 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">자동 재생 금지·제어</strong>
      					<p>
      						<code>autoplay</code> 사용을 피하거나, 기본 꺼짐·재생 전 확인을 제공합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML)</h4>
      				<p className="mt_s">
      					자동 재생을 끄고, 사용자가 재생을 시작하도록 합니다.
      				</p>
      				
      <CodeBlock title="소리 자동 재생 - 올바른 예시(하이브리드)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<video id="intro" width="320" height="240" controls preload="metadata">
      							<source src="movie.mp4" type="video/mp4">
      						</video>
      						<script>
      							document.addEventListener('DOMContentLoaded', function () {
      								document.getElementById('intro').autoplay = false;
      							});
      						</script>`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">잘못된 / 올바른 예시</h4>
      				
      <CodeBlock title="소리 자동 재생 - 잘못된 예시 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 : 로드와 동시에 자동 재생 -->
      						<audio src="bgm.mp3" autoplay></audio>

      						<!-- 올바른 예시 : autoplay 없음, controls로 사용자 제어 -->
      						<audio src="bgm.mp3" controls></audio>`}
      </CodeBlock>

      			</div>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>페이지·화면 로드 시 소리가 의도 없이 자동 재생되지 않는지 확인하였는가?</li>
      				<li>3초 이상 재생되는 소리에 대해 제어 수단이 있는지 확인하였는가?</li>
      			</ul>
      		</article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">콘텐츠의 명도대비 [강화]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">콘텐츠와 배경 간의 명도는 충분하게 대비되도록 제공해야 합니다.</b><br />
      				화면에 표시되는 모든 사용자 인터페이스 컴포넌트와 텍스트는 전경색과 배경색이 구분될 수 있도록 제공되어야 합니다.<br />
      				페이지에서 보이는 텍스트 콘텐츠(텍스트 및 텍스트 이미지)와 배경 간의 충분한 대비를 제공하여, 저시력장애인,
      				색각 장애인, 고령자 등도 콘텐츠를 인식할 수 있도록 제공해야 합니다.<br />
      				다만, 로고, 장식목적의 콘텐츠, 마우스나 키보드를 활용하여 초점을 받았을 때 명도 대비가 커지는 콘텐츠 등은 예외로 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#contrast-minimum" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.4.3 Contrast (Minimum)</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">시각 장애 사용자</strong>
      					<p>
      						저시력 사용자나 색각 이상 사용자도 명확하게 텍스트와 UI 요소를 인식할 수 있어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">다양한 환경</strong>
      					<p>
      						밝은 햇빛이나 어두운 조명 환경에서도 정보를 쉽게 읽을 수 있어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">사용자 피로 감소</strong>
      					<p>
      						명도 대비가 충분하면 눈의 피로를 줄이고 장시간 사용에도 더 편안합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black ">충분한 명도 대비 비율 사용</strong>
      					<ul className="dot_lst dot_lst_inner gap-column-sm">
      						<li>
      							<b>일반 텍스트</b> :
      							최소 명도 대비 비율 4.5:1
      						</li>
      						<li>
      							<b>큰 텍스트(18pt 이상 또는 14pt 볼드체 이상)</b> :
      							최소 명도 대비 비율 3:1
      						</li>
      						<li>
      							<b>UI 요소와 그래픽 객체</b> :
      							최소 명도 대비 비율 3:1
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong className="t_black ">색 선택</strong>
      					<ul className="dot_lst dot_lst_inner gap-column-sm">
      						<li>
      							전경색과 배경색의 대비를 명확히 하여 가독성을 높입니다.<br />
      							예를 들어, 흰색 배경에 검은색 텍스트를 사용하거나 어두운 배경에 밝은 텍스트를 사용하는 방식입니다.
      						</li>
      					</ul>
      				</li>
      				<li>
      					<strong className="t_black ">명도 대비 도구 사용</strong>
      					<ul className="dot_lst dot_lst_inner gap-column-sm">
      						<li>
      							명도 대비를 계산해주는 툴(예: WebAIM Contrast Checker)을 사용하여 충분한 대비를 보장합니다.
      						</li>
      					</ul>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">네이티브 앱 예시(Android)</h4>
      				<p className="mt_s">
      					명도 대비를 고려한 텍스트와 버튼 디자인
      				</p>
      				
      <CodeBlock title="콘텐츠의 명도대비 - 네이티브 앱 예시(Android)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- TextView -->
      						<TextView
      							android:id="@+id/label"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="로그인"
      							android:textColor="#FFFFFF"  /* 전경색: 흰색 */
      							android:background="#000000" /* 배경색: 검정색 */
      							android:textSize="18sp" />

      						<!-- Button -->
      						<Button
      							android:id="@+id/submitButton"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="제출"
      							android:textColor="#FFFFFF"  /* 전경색: 흰색 */
      							android:background="#007AFF" /* 배경색: 파란색 */
      							android:padding="16dp" />`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">네이티브(잘못된 / 올바른 예시)</h4>
      				
      <CodeBlock title="콘텐츠의 명도대비 - 네이티브(잘못된 / 올바른 예시)" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 (네이티브) - 텍스트와 배경색의 대비가 부족하여, 사용자가 내용을 읽기 어려움 -->
      						<TextView
      							android:id="@+id/label"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="로그인"
      							android:textColor="#888888"  /* 전경색: 회색 */
      							android:background="#AAAAAA" /* 배경색: 연회색 */
      							android:textSize="18sp" />

      						<!-- 올바른 예시 (네이티브) - 텍스트와 배경의 명도 대비를 충분히 확보하여, 텍스트가 명확하게 보이도록 함 -->
      						<TextView
      							android:id="@+id/label"
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="로그인"
      							android:textColor="#FFFFFF"  /* 전경색: 흰색 */
      							android:background="#000000" /* 배경색: 검정색 */
      							android:textSize="18sp" />`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/JavaScript)</h4>
      				<p className="mt_s">
      					명도 대비를 고려한 텍스트와 버튼 스타일
      				</p>
      				<div className="view_editor edit_code mt_ms">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.2.1.4.Contrast(Minimum)_01.html" className="uk_editor min_height_300 mb_result_height_220" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="300px" mbResultHeight="220px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드(잘못된 / 올바른 예시)</h4>
      				<ul className="mt_s dot_lst">
      					<li className="t_red">잘못된 예시 : 명도 대비가 낮아 텍스트가 배경에 묻혀 잘 보이지 않습니다.</li>
      					<li className="t_green">올바른 예시 : 텍스트와 배경색 간의 명도 대비를 충분히 확보하여 가독성을 보장합니다.</li>
      				</ul>
      				<div className="view_editor edit_code mt_ms">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.2.1.4.Contrast(Minimum)_02.html" className="uk_editor min_height_400 mb_result_height_380" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="400px" mbResultHeight="380px" />
      </Suspense>
      </div>
      			</div>
      			
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>페이지가 제공하는 텍스트 콘텐츠(텍스트 및 텍스트 이미지)와 배경 간의 명도 대비는 4.5:1 이상이어야 한다. 준수하였는가?</li>
      				<li>텍스트 콘텐츠를 구성하고 있는 텍스트 폰트를 18pt 이상 또는 14pt 이상의 굵은 폰트를 사용하는 경우, 명도 대비를 3:1까지 낮출 수 있다. 준수하였는가?</li>
      				<li>화면 확대가 가능하도록 구현한 텍스트 콘텐츠(텍스트 및 텍스트 이미지)의 명도 대비는 3:1까지 낮출 수 있다. 준수하였는가?</li>
      				<li>명도 대비 검사 도구를 사용하여 텍스트와 UI 요소의 대비 비율을 확인하였는가?</li>
      				<li>Axe, WAVE 등의 접근성 검사 도구를 사용하여 페이지 전체의 명도 대비 문제를 확인하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">콘텐츠 간의 구분 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">이웃한 콘텐츠는 시각적으로 구별할 수 있어야 합니다.</b><br />
      				여백, 테두리, 배경 차이 등으로 인접 블록을 구분합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#non-text-contrast" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.4.11 Non-text Contrast</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">인접 UI 구별</strong>
      					<p>
      						버튼·링크·입력란이 붙어 있으면 저시력 사용자가 대상을 구분하기 어렵습니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">시각적 구획</strong>
      					<p>
      						구분선, 카드 UI, 그림자 등으로 영역을 나눕니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">비텍스트 대비</strong>
      					<p>
      						아이콘·테두리 등 비텍스트 UI는 인접 색과 3:1 이상 대비를 확보합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">네이티브 앱 예시(Android)</h4>
      				<p className="mt_s">
      					카드·구분선으로 블록을 나눕니다.
      				</p>
      				
      <CodeBlock title="콘텐츠 간의 구분 - 네이티브 예시(Android)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<com.google.android.material.card.MaterialCardView
      							android:layout_width="match_parent"
      							android:layout_height="wrap_content"
      							android:layout_margin="8dp"
      							app:cardElevation="4dp"
      							app:strokeWidth="1dp"
      							app:strokeColor="?attr/colorOutline" />`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/CSS)</h4>
      				<p className="mt_s">
      					여백과 테두리로 인접 영역을 구분합니다.
      				</p>
      				
      <CodeBlock title="콘텐츠 간의 구분 - 하이브리드 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<style>
      							.card {
      								border: 1px solid #ccc;
      								border-radius: 8px;
      								padding: 16px;
      								margin-bottom: 16px;
      								background: #fff;
      							}
      						</style>
      						<section class="card">
      							<h2>공지</h2>
      							<p>내용</p>
      						</section>`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">잘못된 / 올바른 예시</h4>
      				
      <CodeBlock title="콘텐츠 간의 구분 - 잘못된 예시 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 : 여백·테두리 없이 블록이 붙어 구분 어려움 -->
      						<div class="a">블록 A</div>
      						<div class="b">블록 B</div>

      						<!-- 올바른 예시 : 간격·테두리·배경으로 구분 -->
      						<div style="padding:12px; margin-bottom:12px; border:1px solid #999;">블록 A</div>
      						<div style="padding:12px; border:1px solid #999;">블록 B</div>`}
      </CodeBlock>

      			</div>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>인접한 콘텐츠가 시각적으로 구별되는지 확인하였는가?</li>
      			</ul>
      		</article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">텍스트 크기 조정 [강화]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">텍스트는 내용이나 기능의 손실 없이 200%까지 크기 조정이 가능해야 합니다.</b><br />
      				OS·브라우저 글자 크기 설정과 확대에 대응합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#resize-text" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.4.4 Resize Text</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">가독성</strong>
      					<p>
      						저시력 사용자는 시스템 글자 크기를 키워야 본문을 읽을 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">상대 단위</strong>
      					<p>
      						<code>sp</code>(Android), <code>rem</code>/<code>em</code>(웹) 등으로 사용자·브라우저 배율을 따릅니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">고정 높이 지양</strong>
      					<p>
      						텍스트 영역에 <code>px</code>로 고정 높이만 주어 잘리지 않게 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">네이티브 앱 예시(Android)</h4>
      				<p className="mt_s">
      					<code>sp</code> 단위로 텍스트 크기를 지정합니다.
      				</p>
      				
      <CodeBlock title="텍스트 크기 조정 - 네이티브 예시(Android)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<TextView
      							android:layout_width="wrap_content"
      							android:layout_height="wrap_content"
      							android:text="본문 텍스트"
      							android:textSize="16sp" />`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/CSS)</h4>
      				<p className="mt_s">
      					<code>rem</code>과 유연한 레이아웃으로 확대에 대응합니다.
      				</p>
      				
      <CodeBlock title="텍스트 크기 조정 - 하이브리드 예시" language="javascript" className="uk_gist_code_box mt_ms">
      {`<style>
      							html { font-size: 100%; }
      							body { font-size: 1rem; line-height: 1.5; }
      							.box { min-height: 3em; } /* 고정 px 높이만 쓰지 않음 */
      						</style>
      						<p class="box">확대해도 잘리지 않도록 최소 높이는 상대 단위로.</p>`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">잘못된 / 올바른 예시</h4>
      				
      <CodeBlock title="텍스트 크기 조정 - 잘못된 예시 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 : px 고정 + overflow hidden으로 확대 시 잘림 -->
      						<style>
      							.bad { font-size: 14px; height: 40px; overflow: hidden; }
      						</style>

      						<!-- 올바른 예시 : rem + min-height 또는 overflow visible -->
      						<style>
      							.good { font-size: 1rem; min-height: 2.5em; }
      						</style>`}
      </CodeBlock>

      			</div>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>200% 확대 시 텍스트가 잘리거나 겹치지 않는지 확인하였는가?</li>
      			</ul>
      		</article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">이미지 텍스트 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">텍스트는 이미지로 제공하지 않아야 합니다.</b><br />
      				필수 본문은 실제 텍스트로 제공하고, 장식용 이미지 텍스트는 예외를 따릅니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#images-of-text" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.4.5 Images of Text</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">확대·보조기술</strong>
      					<p>
      						이미지 속 글자는 사용자 글꼴 설정을 따르지 않고, 스크린 리더가 읽기 어렵습니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">실제 텍스트 사용</strong>
      					<p>
      						본문·제목·버튼은 HTML 텍스트, Android <code>TextView</code> 등으로 제공합니다.
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">예외</strong>
      					<p>
      						로고·장식 등 필수적 이미지 텍스트는 예외를 따릅니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/CSS)</h4>
      				<p className="mt_s">
      					버튼 텍스트는 마크업 텍스트로 제공합니다.
      				</p>
      				
      <CodeBlock title="이미지 텍스트 - 올바른 예시(하이브리드)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button type="button" class="btn-primary">로그인</button>
      						<style>
      							.btn-primary {
      								font-size: 1rem;
      								padding: 0.5em 1em;
      								background: #0d6efd;
      								color: #fff;
      								border: none;
      								border-radius: 4px;
      							}
      						</style>`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">잘못된 / 올바른 예시</h4>
      				
      <CodeBlock title="이미지 텍스트 - 잘못된 예시 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 : 본문 문장을 이미지로만 제공 -->
      						<img src="paragraph-as-image.png" alt="..." />

      						<!-- 올바른 예시 : 동일 내용을 텍스트로 -->
      						<p>서비스 이용 약관에 동의합니다.</p>`}
      </CodeBlock>

      			</div>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>본문·버튼 라벨 등이 이미지 텍스트에만 의존하지 않는지 확인하였는가?</li>
      			</ul>
      		</article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">리플로우 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">콘텐츠는 화면 크기에 따라 손실 없이 표시되어야 합니다.</b><br />
      				가로·세로 동시 스크롤 없이 한 방향 스크롤로 읽을 수 있도록 레이아웃합니다(예외 제외).
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#reflow" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.4.10 Reflow</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">좁은 화면</strong>
      					<p>
      						모바일·분할 화면에서는 가로 스크롤 없이 세로로 읽을 수 있어야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">유연한 레이아웃</strong>
      					<p>
      						플렉스·그리드·퍼센트 폭 등으로 뷰포트에 맞게 줄바꿈합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/CSS)</h4>
      				<p className="mt_s">
      					뷰포트 메타와 유동 폭으로 리플로우합니다.
      				</p>
      				
      <CodeBlock title="리플로우 - 올바른 예시(하이브리드)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<meta name="viewport" content="width=device-width, initial-scale=1">
      						<style>
      							.wrap { max-width: 100%; padding: 1rem; box-sizing: border-box; }
      							.row { display: flex; flex-wrap: wrap; gap: 8px; }
      						</style>
      						<div class="wrap row">
      							<article>블록 1</article>
      							<article>블록 2</article>
      						</div>`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">잘못된 / 올바른 예시</h4>
      				
      <CodeBlock title="리플로우 - 잘못된 예시 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 : 고정 폭 1200px로 좁은 화면에서 가로 스크롤 -->
      						<style>
      							.bad { width: 1200px; }
      						</style>

      						<!-- 올바른 예시 : max-width:100%, flex-wrap 등 -->
      						<style>
      							.good { max-width: 100%; box-sizing: border-box; }
      						</style>`}
      </CodeBlock>

      			</div>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>320 CSS px 등 좁은 폭에서 콘텐츠가 리플로우되어 읽을 수 있는지 확인하였는가?</li>
      			</ul>
      		</article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">텍스트 간격 [신규]</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">텍스트는 내용과 기능의 손실 없이 간격을 조정할 수 있어야 합니다.</b><br />
      				줄 간격, 글자·단어 간격을 사용자가 일정 범위에서 바꿔도 레이아웃이 깨지지 않아야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#text-spacing" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.4.12 Text Spacing</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">필요성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">개인별 가독성</strong>
      					<p>
      						읽기 어려움 사용자는 줄·글자·단어 간격을 넓혀야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">제공 방법</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-ms">
      				<li>
      					<strong className="t_black">CSS로 수용</strong>
      					<p>
      						사용자 스타일·브라우저 확장이 적용돼도 레이아웃이 깨지지 않게 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">하이브리드 앱 예시 (HTML/CSS)</h4>
      				<p className="mt_s">
      					WCAG 검증용으로 줄·글자·단어 간격을 넓혀도 겹침이 없어야 합니다.
      				</p>
      				
      <CodeBlock title="텍스트 간격 - 올바른 예시(하이브리드)" language="javascript" className="uk_gist_code_box mt_ms">
      {`<style>
      							.content {
      								line-height: 1.5 !important;
      								letter-spacing: 0.12em !important;
      								word-spacing: 0.16em !important;
      							}
      						</style>
      						<p class="content">
      							간격을 넓혀도 잘리지 않도록 충분한 여백과 유동 높이를 사용합니다.
      						</p>`}
      </CodeBlock>

      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">잘못된 / 올바른 예시</h4>
      				
      <CodeBlock title="텍스트 간격 - 잘못된 예시 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 : 고정 높이 + overflow hidden으로 간격 늘리면 잘림 -->
      						<style>
      							.bad { height: 48px; overflow: hidden; line-height: 1.2; }
      						</style>

      						<!-- 올바른 예시 : min-height 또는 auto 높이 -->
      						<style>
      							.good { min-height: 3em; overflow: visible; line-height: 1.5; }
      						</style>`}
      </CodeBlock>

      			</div>
      		</article>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_m dot_lst gap-column-important-sm">
      				<li>텍스트 간격 조정 시 콘텐츠가 잘리거나 겹치지 않는지 확인하였는가?</li>
      			</ul>
      		</article>
      	</section>
      	


      <hr />

      <section className="mt_xxl">
      	<h2 data-icon="pen">모바일 앱 접근성 요약 보고서</h2>
      	<p className="mt_ml indent">
      		모바일 앱 접근성 요약 보고서 예시로, 체크박스의 체크 여부가 저장되지 않습니다.
      	</p>
      	<div className="mt_m indent">
      		<div className="checkWcag_table">
      			<ul className="head">
      				<li className="guide" data-tit="검사항목(41개)">검사항목(41개)</li>
      				<li className="items">
      					<div className="item">
      						<p className="text">검사항목(41개)</p>
      						<p className="check">준수 여부</p>
      					</div>
      				</li>
      			</ul>
      			<div className="body">
      				<ul>
      					<li className="guide">
      						1. 텍스트 아닌 콘텐츠 [유지]<br />
      						(KS X 3253:2016 대체텍스트)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						2. 자막 또는 수어 [강화]<br />
      						(KS X 3253:2016 자막, 수화 등의 제공)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">멀티미디어 콘텐츠는 자막 또는 수어를 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						3. 화면해설 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">멀티미디어 콘텐츠에서 음성 정보가 없는 시각 정보는 인식할 수 있도록 화면해설을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						4. 표의 구성 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">표는 이해하기 쉽게 구성해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						5. 콘텐츠의 선형구조 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 논리적인 순서로 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6. 다양한 감각 지원 [통합]<br />
      						(KS X 3253:2016 명확한 지시사항)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">지시사항이나 알림정보 등은 모양, 크기, 위치, 방향, 색, 소리 등에 관계없이 다양한 감각으로 인식할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						7. 방향 설정 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 특정 화면 방향으로만 고정하지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						8. 입력 목적 식별 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">입력 서식의 목적은 식별할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						9. 색에 무관한 콘텐츠 [유지]<br />
      						(KS X 3253:2016 색에 무관한 인식)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 색에 관계없이 인식할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						10. 소리 자동 재생 [유지]<br />
      						(KS X 3253:2016 자동재생 금지)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">소리는 자동으로 재생되지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						11. 콘텐츠의 명도대비 [강화]<br />
      						(KS X 3253:2016 명도대비)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠와 배경 간의 명도는 충분하게 대비되도록 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						12. 콘텐츠 간의 구분 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">이웃한 콘텐츠는 시각적으로 구별할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						13. 텍스트 크기 조정 [강화]<br />
      						(KS X 3253:2016 폰트기능의 활용)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트는 내용이나 기능의 손실 없이 200%까지 크기 조정이 가능해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						14. 이미지 텍스트 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트는 이미지로 제공하지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						15. 리플로우 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 화면 크기에 따라 손실 없이 표시되어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						16. 텍스트 간격 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트는 내용과 기능의 손실 없이 간격을 조정할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						17. 초점 이동과 표시 [유지]<br />
      						(KS X 3253:2016 초점)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">의미나 기능을 갖는 모든 콘텐츠 요소는 초점이 적용되고, 초점은 논리적인 순서로 이동해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						18. 조작 가능한 크기 [현행화]<br />
      						(KS X 3253:2016 컨트롤의 크기와 간격)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자 입력 및 컨트롤은 조작 가능한 충분한 크기로 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						19. 단일 문자 단축키 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">단일 문자 단축키는 오동작으로 인한 오류를 방지해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						20. 응답시간 조절 [유지]<br />
      						(KS X 3253:2016 응답 시간 조절)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">시간제한이 있는 콘텐츠는 응답시간을 조절할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						21. 움직임 제어 [유지]<br />
      						(KS X 3253:2016 정지 기능 제공)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						22. 깜빡임과 번쩍임 [유지]<br />
      						(KS X 3253:2016 깜박거림의 사용 제한)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">초당 3~50회 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공하지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						23. 제목 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠 블록에는 적절한 제목을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						24. 링크 텍스트 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">링크 텍스트는 용도나 목적을 이해할 수 있도록 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						25. 다양한 탐색 방법 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 다양한 방법으로 탐색할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						26. 단일 포인터 입력 [유지]<br />
      						(KS X 3253:2016 누르기 동작 지원)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">다중 포인트 동작 또는 경로기반 동작을 통한 입력은 단일 포인터 입력으로도 조작할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						27. 포인터 입력 취소 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">단일 포인터 입력으로 실행되는 기능은 취소할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						28. 네임 안의 레이블 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트 또는 텍스트 이미지가 포함된 레이블이 있는 사용자 인터페이스 구성요소는 네임에 시각적으로 표시되는 해당 텍스트를 포함해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						29. 동작기반 작동 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">동작기반으로 작동하는 기능은 사용자 인터페이스 구성요소로 조작할 수 있고, 동작기반 기능을 비활성화할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						30. 기본 언어 표시 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">주로 사용하는 언어는 명시해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						31. 부분 언어 표시 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">기본 언어와 구별되는 다른 언어는 해당 언어를 명시해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						32. 사용자 요구에 따른 실행 [유지]<br />
      						(KS X 3253:2016 예측가능성)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자가 의도하지 않은 기능은 자동적으로 실행되지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						33. 사용자 인터페이스 컴포넌트의 일관성 [강화]<br />
      						(KS X 3253:2016 사용자 인터페이스의 일관성)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자 인터페이스 컴포넌트는 일관성 있게 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						34. 도움 정보 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">도움 정보가 제공되는 경우, 각 페이지에 동일한 순서로 접근할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						35. 오류 정정 [분리]<br />
      						(KS X 3253:2016 입력도움)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">입력 오류를 정정할 수 있는 방법을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						36. 레이블 [분리]<br />
      						(KS X 3253:2016 입력도움)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자 입력에는 대응하는 레이블을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						37. 오류 방지 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">중요한 정보가 제출되기 전 되돌리기 어려운 오류를 방지할 수 있는 수단을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						38. 반복 입력 정보 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">동일한 정보를 반복하여 입력하지 않도록 해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						39. 접근 가능한 인증 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">인증 과정은 인지 기능 테스트에만 의존해서는 안 된다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						40. 사용자 인터페이스 컴포넌트 [강화]<br />
      						(KS X 3253:2016 보조기술과의 호환성)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자 인터페이스 컴포넌트는 보조기술을 이용하여 사용할 수 있도록 해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						41. 상태 메시지 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">중요한 상태 메시지는 보조기술 사용자에게도 전달되어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				
      			</div>
      		</div>
      	</div>
      </section>

      <footer className="reference_box">
      	<strong className="tit">인식의 용이성 | 접근성 체크리스트(모바일 앱 접근성) - 모바일 앱 접근성 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/WAI/standards-guidelines/mobile/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility at W3C</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/mobile-accessibility-mapping/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility: How WCAG 2.0 and Other W3C/WAI Guidelines Apply to Mobile</a></li>
      		<li className="reference"><a href="https://www.w3.org/news/2015/first-public-working-draft-performance-timeline-level-2/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C First Public Working Draft</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/UAAG20/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C User Agent Accessibility Guidelines (UAAG) 2.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/IMPLEMENTING-UAAG20/mobile.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility Examples from UAAG 2.0 Reference</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Mobile_accessibility_checklist" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN Mobile accessibility checklist</a></li>
      		<li className="reference"><a href="https://blog.naver.com/prologue/PrologueList.naver?blogId=mohw2016" target="_blank" rel="noreferrer" title="새창 열림" className="fas">보건복지부 블로그</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default CheckMacagPerceivablePage
