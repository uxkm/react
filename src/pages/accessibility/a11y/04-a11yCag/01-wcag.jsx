import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "cagWcag",
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
  title: "웹 콘텐츠 접근성 | 접근성 가이드라인",
  description: "웹 콘텐츠 접근성 가이드라인(WCAG)은 웹사이트와 온라인 서비스가 모든 사용자에게 접근 가능하도록 하는 국제 표준 문서입니다. 이 가이드라인은 세 가지 준수 수준(A, AA, AAA)을 제시하여, 접근성을 향상시키기 위한 구체적인 원칙과 기준을 제공합니다. 이 페이지에서는 WCAG의 버전과 표준화 제정 단계 및 가이드라인을 간결히 설명하며, 각 수준의 기준이 웹사이트와 디지털 콘텐츠에 어떻게 적용되는지 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function WcagPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>









      	<link href="/cagWcag.min.css" rel="stylesheet" />



      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			웹 콘텐츠 접근성 가이드라인(이하 '<b className="t_black">WCAG</b>' - Web Content Accessibility Guidelines)은
      			웹사이트와 온라인 서비스를 모든 사용자가 접근할 수 있도록 만드는 국제 표준 문서입니다.<br />
      			이 문서에서 제공된 원칙들을 따르기 위한 구체적인 기준을 제공하며, 각 기준은 세 가지 준수 수준(A, AA, AAA)으로 구분됩니다.<br />
      			<b className="t_lightblue">[A: 최소 준수 수준]</b>,
      			<b className="t_blue">[AA: 보통 준수 수준]</b>,
      			<b className="t_darkblue">[AAA: 고급 준수 수준]</b>의 접근성을 의미합니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.1.1. WCAG 적합성 수준</h2>

      		<ol className="mt_l ol_lst info_lst gap-column-m">
      			<li className="weight-600-before t_lightblue_before">
      				<strong className="t_lightblue">Level A</strong>
      				<ul className="dot_lst">
      					<li>최소 수준의 적합성(광범위한 접근성을 달성 하지는 못함)</li>
      					<li>가장 기본적인 접근성 성공 기준이 포함되어 있습니다.</li>
      					<li>기본적인 만큼 Level A에 해당하는 성공 기준을 만족하지 않으면 다양한 유형의 사용자가 해당 웹 페이지를 전혀 사용할 수 없습니다.</li>
      				</ul>
      			</li>
      			<li className="weight-600-before t_blue_before">
      				<strong className="t_blue">Level AA</strong>
      				<ul className="dot_lst">
      					<li>가장 일반적인 수준의 적합성 (대부분의 법률 및 공식 요구 사항으로 준수를 권장)</li>
      					<li>Level A처럼 준수하지 않았을 때 전혀 사용할 수 없는 수준은 아니지만, 다양한 유형의 사용자가 동등하게 웹 페이지를 사용하기 위해 꼭 필요한 성공 기준을 포함합니다.</li>
      					<li>일반적으로 웹 페이지의 접근성 요구 사항(VPAT)은 Level AA를 만족해야 합니다.</li>
      				</ul>
      			</li>
      			<li className="weight-600-before t_darkblue_before">
      				<strong className="t_darkblue">Level AAA</strong>
      				<ul className="dot_lst">
      					<li>어려운 수준의 적합성 (매우 까다롭고, 구현에 많은 시간이 요구됨)</li>
      					<li>WCAG가 규정하는 가장 높은 수준의 접근성 기준을 만족하기 위한 성공 기준을 포함합니다.</li>
      				</ul>
      			</li>
      		</ol>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.1.2. 접근성 적합성 수준의 준수 예시</h2>

      		<article className="indent mt_xl">
      			<h3 className="ml_mn">웹 페이지의 경우</h3>
      			<ol className="mt_ml ol_lst info_lst gap-column-ms">
      				<li className="weight-600-before t_lightblue_before">
      					<strong className="t_lightblue">Level A</strong>
      					<ul className="dot_lst mt_s gap-column-s">
      						<li>
      							<strong className="t_black">예시 1: 이미지 대체 텍스트</strong>
      							<p>
      								모든 웹 페이지 이미지는 alt 텍스트를 포함하여야 합니다.
      								예를 들어, &quot;회사 로고&quot;라는 이미지는 &quot;회사 로고&quot;라는 대체 텍스트를 갖춰야 합니다.
      							</p>
      						</li>
      						<li>
      							<strong className="t_black">예시 2: 링크 설명</strong>
      							<p>
      								링크 텍스트는 명확하고 직관적이어야 합니다.
      								예를 들어, &quot;자세한 정보 보기&quot; 대신에 &quot;접근성 원칙 자세히 보기&quot;와 같이 구체적인 설명을 제공해야 합니다.
      							</p>
      						</li>
      					</ul>
      				</li>
      				

      				<li className="weight-600-before t_lightblue_before">
      					<strong className="t_blue">Level AA</strong>
      					<ul className="dot_lst mt_s gap-column-s">
      						<li>
      							<strong className="t_black">예시 1: 색상 대비</strong>
      							<p>
      								텍스트와 배경 사이의 색상 대비는 최소한 4.5:1 이상을 충족해야 합니다.
      								예를 들어, 흰색 배경에 회색 텍스트는 적절한 대비를 유지해야 합니다.
      							</p>
      						</li>
      						<li>
      							<strong className="t_black">예시 2: 키보드 접근성</strong>
      							<p>
      								모든 기능은 키보드로 접근 가능해야 합니다.
      								예를 들어, 모든 웹 페이지의 콘텐츠를 키보드 만으로 탐색이 가능해야 하고,
      								드롭다운 메뉴는 키보드 탐색 시 스페이스나 엔터 키를 사용하여 열 수 있어야 합니다.
      							</p>
      						</li>
      					</ul>
      				</li>
      				

      				<li className="weight-600-before t_lightblue_before">
      					<strong className="t_darkblue">Level AAA</strong>
      					<ul className="dot_lst mt_s gap-column-s">
      						<li>
      							<strong className="t_black">예시 1: 동영상 자막</strong>
      							<p>
      								동영상에는 오디오 대화의 자막이 제공되어야 합니다.
      								자막은 음성 내용을 정확하게 반영하고 시각적으로 명확하게 표시되어야 합니다.
      							</p>
      						</li>
      						<li>
      							<strong className="t_black">예시 2: 명료성과 이해도</strong>
      							<p>
      								복잡한 용어나 문장보다는 간단하고 명확한 언어를 사용해야 합니다.
      								예를 들어, 기술적인 용어 대신 일반 사용자도 이해할 수 있는 용어를 사용해야 합니다.
      							</p>
      						</li>
      					</ul>
      				</li>
      				
      			</ol>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn">오디오와 비디오 같은 미디어의 경우</h3>
      			<ol className="mt_ml ol_lst info_lst gap-column-ms">
      				<li className="weight-600-before t_lightblue_before">
      					<strong className="t_lightblue">Level A</strong>
      					<ul className="dot_lst mt_s gap-column-s">
      						<li>
      							<strong className="t_black">오디오</strong>
      							<p>
      								오디오 콘텐츠에는
      								모든 사용자가 이해할 수 있도록
      								텍스트로 된 대체 자료가 포함되어야 합니다.

      								
      							</p>
      						</li>
      						<li>
      							<strong className="t_black">비디오</strong>
      							<p>
      								비디오 콘텐츠는 자막을 포함해야 합니다.
      								자막은 비디오의 오디오 내용을 정확히 반영하고,
      								사용자가 콘텐츠를 시청하는 동안 시각적으로 접근할 수 있어야 합니다.
      							</p>
      						</li>
      					</ul>
      				</li>
      				

      				<li className="weight-600-before t_lightblue_before">
      					<strong className="t_blue">Level AA</strong>
      					<ul className="dot_lst mt_s gap-column-s">
      						<li>
      							<strong className="t_black">오디오</strong>
      							<p>
      								오디오 콘텐츠에는 명확하고 이해하기 쉬운 언어를 사용해야 합니다.
      								복잡한 용어나 문장보다는 일반 사용자도 이해할 수 있는 단순한 언어를 사용해야 합니다.
      							</p>
      						</li>
      						<li>
      							<strong className="t_black">비디오</strong>
      							<p>
      								비디오 콘텐츠의 자막은 오디오와 시각적 콘텐츠 사이의 정확한 타이밍과 일치해야 합니다.
      								또한, 사용자가 자막의 크기나 색상을 조정할 수 있도록 해야 합니다.
      							</p>
      						</li>
      					</ul>
      				</li>
      				

      				<li className="weight-600-before t_lightblue_before">
      					<strong className="t_darkblue">Level AAA</strong>
      					<ul className="dot_lst mt_s gap-column-s">
      						<li>
      							<strong className="t_black">오디오</strong>
      							<p>
      								오디오 콘텐츠에는 추가적인 언어 옵션이 제공되어야 합니다.
      								다국적 환경을 고려하여 여러 언어의 자막을 제공하는 것이 이 예시에 해당합니다.
      							</p>
      						</li>
      						<li>
      							<strong className="t_black">비디오</strong>
      							<p>
      								비디오 콘텐츠의 자막은 사용자가 자막을 간단히 숨길 수 있도록 하는 기능을 제공해야 합니다.
      								사용자가 필요할 때 언제든지 자막을 다시 켤 수 있도록 해야 합니다.
      							</p>
      						</li>
      					</ul>
      				</li>
      				
      			</ol>
      			<p className="mt_ml">
      				국제 디지털 출판 포럼인 IDPF(International Digital Publishing Forum)에서 제정한 전자 출판물 표준인
      				EPUB(Electronic PUBlication) 출판물의 경우 반드시 수준 <b className="t_lightblue">A</b>를 충족해야 하지만 <b className="t_blue">AA</b>는 준수하는 것을 권고하고 있습니다.
      			</p>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.1.3. WCAG 버전과 표준화 제정 단계</h2>

      		<article className="indent mt_xl">
      			<h3 className="ml_mn">WCAG 버전</h3>
      			<p className="mt_ml">
      				<mark>최신 버전은 2023년 10월 5일 권고사항으로 <b className="t_blue">WCAG 2.2</b> 입니다.</mark>
      			</p>
      			<ol className="mt_l ol_lst info_lst gap-column-ms">
      				<li className="weight-600-before t_black_before">
      					<strong>WCAG 1.0 (1999) 제정</strong>
      					<ul className="dot_lst">
      						<li>1999년에 출간.</li>
      						<li>14개의 가이드라인을 우선 순위에 따라 1~3점으로 구분하여 평가.</li>
      						<li>접근성 가이드라인이 생겼다는 점에서는 큰 의미가 있지만, 웹 페이지가 제작되는 방식이나 보조기술 등이 급격히 발전 함에 따라 가이드라인이 해당 기술을 따라가지 못했다는 면에서 한계를 들어내기도 했습니다.</li>
      					</ul>
      				</li>
      				

      				<li className="weight-600-before t_black_before">
      					<strong>WCAG 1.0 개정</strong>
      				</li>
      				

      				<li className="weight-600-before t_black_before">
      					<strong>WCAG 2.0 (2008)</strong>
      					<ul className="dot_lst">
      						<li>2008년에 발표.</li>
      						<li>1.0의 준수사항을 모두 통합하면서, 콘텐츠를 인지 가능하고 조작 가능하며 이해할 수 있고 견고해야 한다는 4가지 원칙으로 구조가 개편.</li>
      						<li>구분된 원칙에 따라 장애가 있는 사용자가 웹 콘텐츠를 보다 쉽게 접근할 수 있도록 하기 위한 기본 목표를 제시하는 12개 가이드라인을 제시.</li>
      						<li>4가지 원칙(인지 가능, 운용 가능, 이해 가능, 견고성)도 확립.</li>
      					</ul>
      				</li>
      				

      				<li className="weight-600-before t_black_before">
      					<strong>WCAG 2.0 (2010) 개정</strong>
      				</li>
      				

      				<li className="weight-600-before t_black_before">
      					<strong>WCAG 2.1 (2015) 개정</strong>
      				</li>
      				

      				<li className="weight-600-before t_black_before">
      					<strong>WCAG 2.1 (2018) 권고안</strong>
      					<ul className="dot_lst">
      						<li>WCAG 2.0을 확장한 버전으로 2018년 6월에 최종 권고안이 발표됨.</li>
      						<li>2.0 가이드라인 자체를 대체하는 것이 아니라, 장애가 있는 사람들의 모바일 장치 사용, 저시력, 인지 또는 학습 장애를 가진 사람들이 웹 콘텐츠에 보다 쉽게 접근할 수 있도록 만드는 요구 사항 중 일부를 개선.</li>
      						<li>17개의 새로운 가이드라인(성공기준)을 제공.</li>
      						<li>2.0이 출시 되었던 당시(2008) 보다 모바일 장치 사용률이 높아졌고 기존 환경보다 조작 자체가 복잡해진 점 등을 고려.</li>
      						<li>이전 버전의 WCAG를 개선하기 위해 지속적으로 연구된 개발 성과물.</li>
      						<li>WCAG 2.0과 호환 되므로 웹 사이트가 2.1에 부합하면 2.0에도 부합하는 것입니다.</li>
      						<li>WCAG 2.1의 새로운 요구 사항은 2.0과 마찬가지로 특정 장치, 운영 체제, 브라우저 또는 기타 기술 사용에 의존하지 않음.</li>
      					</ul>
      				</li>
      				

      				<li className="weight-600-before t_black_before">
      					<strong>WCAG 2.2 (2020) 초안</strong>
      				</li>
      				

      				<li className="weight-600-before t_black_before">
      					<strong>WCAG 2.2 (2022) 개정</strong>
      					<p>
      						2.1 기준에서 9개 성공기준 새로 추가.
      					</p>
      				</li>
      				

      				<li className="weight-600-before t_black_before">
      					<strong>WCAG 2.2 (2023) 권고</strong>
      				</li>
      				

      				<li className="weight-600-before t_black_before">
      					<strong>WCAG 3.0 (2023) 초기단계(Draft)</strong>
      					<ul className="dot_lst">
      						<li>2.2 버전의 다음 버전.</li>
      						<li>WCAG 3.0은 웹 콘텐츠, 앱, 도구, 출판, 웹상의 신기술에 적용됩니다.</li>
      					</ul>
      				</li>
      				
      			</ol>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn">W3C 표준화 제정 단계</h3>
      			<p className="mt_ml">
      				W3C(세계 웹 consotium)는 WCAG를 개발하고 유지 관리하는 기관입니다. WCAG의 표준화 제정 단계는 W3C의 프로세스를 따릅니다.
      			</p>
      			<ol className="mt_l ol_lst info_lst gap-column-ms">
      				<li className="weight-600-before t_black_before">
      					<strong>초안 - Working Draft (WD)</strong>
      					<p>
      						W3C7 W3C Member, 대중, 다른 기관, 단체 등에 검토받기 위한 초안
      					</p>
      				</li>
      				

      				<li className="weight-600-before t_black_before">
      					<strong>후보 권고안 - Candidate Recommendation (CR)</strong>
      					<p>
      						초안을 통해 다양한 검토를 받고, 워킹 그룹의 기술적 요구사항을 정리하고, 구현 경험을 공유, 확인하기 위한 문서
      					</p>
      				</li>
      				

      				<li className="weight-600-before t_black_before">
      					<strong>제안 권고안 - Proposed Recommendation (PR)</strong>
      					<ul className="dot_lst">
      						<li>기술 구현과 검토가 끝나 거의 완성된 문서</li>
      						<li>최종 승인을 위해 자문위원회에 제출</li>
      					</ul>
      				</li>
      				

      				<li className="weight-600-before t_black_before">
      					<strong>권고안 - W3C Recommendation (REC)</strong>
      					<p>
      						모든 합의를 마치고, W3C Member들과 감독, 위원회 승인을 모두 마친 널리 적용을 권장하는 문서
      					</p>
      				</li>
      				
      			</ol>
      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/4.1_a11y01.png`} alt="W3C 표준화 제정 단계 : 웹 기술을 표준화하기 위한 절차와 요구 사항" />
      				<figcaption>
      					<b className="t_black">WCAG - W3C 표준화 제정 단계</b><br />
      					[이미지 출처 : NULI]
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.1.4. WCAG 2.1 - <i className="t_blue">4가지 원칙</i></h2>

      		<ol className="mt_l ol_lst info_lst gap-column-m">
      			<li className="weight-600-before t_black_before">
      				<strong>Perceivable(인지 가능성)</strong>
      				<ul className="dot_lst">
      					<li>사용자가 정보를 인지하고 콘텐츠를 볼 수 있어야 합니다.</li>
      					<li>예) 시각적 콘텐츠는 대체 텍스트를 통해 설명되어야 하며, 오디오 콘텐츠는 자막이나 수화 번역을 통해 제공되어야 합니다.</li>
      				</ul>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>Operable(운용 가능성)</strong>
      				<ul className="dot_lst">
      					<li>사용자가 콘텐츠의 인터페이스 요소를 운용할 수 있어야 합니다.</li>
      					<li>이는 웹사이트가 키보드만으로도 전체적으로 사용될 수 있어야 하며, 충분한 시간을 제공하고, 발작을 유발할 수 있는 콘텐츠를 피하는 것을 의미합니다.</li>
      				</ul>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>Understandable(이해 가능성)</strong>
      				<ul className="dot_lst">
      					<li>사용자가 정보와 인터페이스의 운용 방식을 이해할 수 있어야 합니다.</li>
      					<li>이는 웹 페이지가 예측 가능하게 작동하며, 사용자가 실수를 할 경우 이를 정정할 수 있는 방법을 제공해야 함을 의미합니다.</li>
      				</ul>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong>견고성(Robust)</strong>
      				<ul className="dot_lst">
      					<li>다양한 사용자 에이전트(브라우저 등)와 보조 기술에서 콘텐츠를 정확하게 해석할 수 있어야 합니다.</li>
      					<li>이는 웹 콘텐츠가 현재 및 미래의 기술과 호환될 수 있도록 보장합니다.</li>
      				</ul>
      			</li>
      			
      		</ol>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.1.5. WCAG 2.1 - <i className="t_blue">가이드라인</i></h2>

      		<ol className="mt_l ol_lst info_lst gap-column-m">
      			<li className="weight-600-before t_black_before">
      				<strong className="reference">
      					<a href="https://www.w3.org/TR/WCAG21/#perceivable" target="_blank" rel="noreferrer" title="Perceivable(인지 가능성) 새창열림" className="fas weight-700">Perceivable(인지 가능성)</a>
      				</strong>
      				<ul className="dot_lst">
      					<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#text-alternatives" target="_blank" rel="noreferrer" title="Text Alternatives(대체 텍스트) 새창열림" className="fas weight-500">1.1 Text Alternatives(대체 텍스트)</a></li>
      					<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#time-based-media" target="_blank" rel="noreferrer" title="Time-based Media(시간 기반 미디어) 새창열림" className="fas weight-500">1.2 Time-based Media(시간 기반 미디어)</a></li>
      					<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#adaptable" target="_blank" rel="noreferrer" title="Adaptable(적응성) 새창열림" className="fas weight-500">1.3 Adaptable(적응성)</a></li>
      					<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#distinguishable" target="_blank" rel="noreferrer" title="Distinguishable(명료성) 새창열림" className="fas weight-500">1.4 Distinguishable(명료성)</a></li>
      				</ul>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong className="reference">
      					<a href="https://www.w3.org/TR/WCAG21/#operable" target="_blank" rel="noreferrer" title="Operable(운용 가능성) 새창열림" className="fas weight-700">Operable(운용 가능성)</a>
      				</strong>
      				<ul className="dot_lst">
      					<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#keyboard-accessible" target="_blank" rel="noreferrer" title="Keyboard Accessible(키보드 접근) 새창열림" className="fas weight-500">2.1 Keyboard Accessible(키보드 접근)</a></li>
      					<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#enough-time" target="_blank" rel="noreferrer" title="Enough Time(충분한 시간 제공) 새창열림" className="fas weight-500">2.2 Enough Time(충분한 시간 제공)</a></li>
      					<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions" target="_blank" rel="noreferrer" title="Seizures and Physical Reactions(발작 예방) 새창열림" className="fas weight-500">2.3 Seizures and Physical Reactions(발작 예방)</a></li>
      					<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#navigable" target="_blank" rel="noreferrer" title="Navigable(탐색 가능) 새창열림" className="fas weight-500">2.4 Navigable(탐색 가능)</a></li>
      					<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#input-modalities" target="_blank" rel="noreferrer" title="Input Modalities(입력 양식) [New] 새창열림" className="fas weight-500">2.5 Input Modalities(입력 양식) [New]</a></li>
      				</ul>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong className="reference">
      					<a href="https://www.w3.org/TR/WCAG21/#understandable" target="_blank" rel="noreferrer" title="Understandable(이해 가능성) 새창열림" className="fas weight-700">Understandable(이해 가능성)</a>
      				</strong>
      				<ul className="dot_lst">
      					<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#readable" target="_blank" rel="noreferrer" title="Readable(가독성) 새창열림" className="fas weight-500">3.1 Readable(가독성)</a></li>
      					<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#predictable" target="_blank" rel="noreferrer" title="Predictable(예측 가능성) 새창열림" className="fas weight-500">3.2 Predictable(예측 가능성)</a></li>
      					<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#input-assistance" target="_blank" rel="noreferrer" title="Input Assistance(입력 지원) 새창열림" className="fas weight-500">3.3 Input Assistance(입력 지원)</a></li>
      				</ul>
      			</li>
      			

      			<li className="weight-600-before t_black_before">
      				<strong className="reference">
      					<a href="https://www.w3.org/TR/WCAG21/#robust" target="_blank" rel="noreferrer" title="견고성(Robust) 새창열림" className="fas weight-700">견고성(Robust)</a>
      				</strong>
      				<ul className="dot_lst">
      					<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#compatible" target="_blank" rel="noreferrer" title="Compatible(호환성) 새창열림" className="fas weight-500">4.1 Compatible(호환성)</a></li>
      				</ul>
      			</li>
      			
      		</ol>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.1.6. WCAG - <i className="t_blue">성공 기준</i></h2>

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">WCAG 2.1 성공 기준</h3>
      			<p className="mt_m">
      				WCAG 전체 성공 기준 - 총 78개(<b className="t_lightblue">A 30개</b>, <b className="t_blue">AA 20개</b>, <b className="t_darkblue">AAA 28개</b>)
      			</p>
      			<ol className="mt_ml success_list">
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#non-text-content" target="_blank" rel="noreferrer" title="Non-text Content (Level A) 새창열림" className="fas">1.1.1 <i className="ko">비텍스트 콘텐츠</i> Non-text Content <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded" target="_blank" rel="noreferrer" title="Audio-only and Video-only (Prerecorded) (Level A) 새창열림" className="fas">1.2.1 <i className="ko">오디오 전용 및 비디오 전용 (사전 녹화)</i> Audio-only and Video-only (Prerecorded) <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#captions-prerecorded" target="_blank" rel="noreferrer" title="Captions (Prerecorded) (Level A) 새창열림" className="fas">1.2.2 <i className="ko">자막 (사전 녹화)</i> Captions (Prerecorded) <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded" target="_blank" rel="noreferrer" title="Audio Description or Media Alternative (Prerecorded) (Level A) 새창열림" className="fas">1.2.3 <i className="ko">오디오 설명 또는 미디어 대체물 (사전 녹화)</i> Audio Description or Media Alternative (Prerecorded) <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#captions-live" target="_blank" rel="noreferrer" title="Captions (Live) (Level AA) 새창열림" className="fas">1.2.4 <i className="ko">실시간 자막</i> Captions (Live) <b className="t_blue">(Level AA)</b></a></li>

      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#audio-description-prerecorded" target="_blank" rel="noreferrer" title="Audio Description (Prerecorded) (Level AA) 새창열림" className="fas">1.2.5 <i className="ko">오디오 설명 (사전 녹화)</i> Audio Description (Prerecorded) <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#sign-language-prerecorded" target="_blank" rel="noreferrer" title="Sign Language (Prerecorded) (Level AAA) 새창열림" className="fas">1.2.6 <i className="ko">수화 (사전 녹화)</i> Sign Language (Prerecorded) <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded" target="_blank" rel="noreferrer" title="Extended Audio Description (Prerecorded) (Level AAA) 새창열림" className="fas">1.2.7 <i className="ko">확장된 오디오 설명 (사전 녹화)</i> Extended Audio Description (Prerecorded) <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded" target="_blank" rel="noreferrer" title="Media Alternative (Prerecorded) (Level AAA) 새창열림" className="fas">1.2.8 <i className="ko">미디어 대체물 (사전 녹화)</i> Media Alternative (Prerecorded) <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#audio-only-live" target="_blank" rel="noreferrer" title="Audio-only (Live) (Level AAA) 새창열림" className="fas">1.2.9 <i className="ko">오디오 전용 (실시간)</i> Audio-only (Live) <b className="t_darkblue">(Level AAA)</b></a></li>

      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#info-and-relationships" target="_blank" rel="noreferrer" title="Info and Relationships (Level A) 새창열림" className="fas">1.3.1 <i className="ko">정보와 관계</i> Info and Relationships <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#meaningful-sequence" target="_blank" rel="noreferrer" title="Meaningful Sequence (Level A) 새창열림" className="fas">1.3.2 <i className="ko">의미 있는 순서</i> Meaningful Sequence <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#sensory-characteristics" target="_blank" rel="noreferrer" title="Sensory Characteristics (Level A) 새창열림" className="fas">1.3.3 <i className="ko">감각적 특성</i> Sensory Characteristics <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#orientation" target="_blank" rel="noreferrer" title="Orientation (Level AA) 새창열림" className="fas">1.3.4 <i className="ko">방향성</i> Orientation <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#identify-input-purpose" target="_blank" rel="noreferrer" title="Identify Input Purpose (Level AA) 새창열림" className="fas">1.3.5 <i className="ko">입력 목적 식별</i> Identify Input Purpose <b className="t_blue">(Level AA)</b></a></li>

      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#identify-purpose" target="_blank" rel="noreferrer" title="Identify Purpose (Level AAA) 새창열림" className="fas">1.3.6 <i className="ko">목적 식별</i> Identify Purpose <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#use-of-color" target="_blank" rel="noreferrer" title="Use of Color (Level A) 새창열림" className="fas">1.4.1 <i className="ko">색상 사용</i> Use of Color <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#audio-control" target="_blank" rel="noreferrer" title="Audio Control (Level A) 새창열림" className="fas">1.4.2 <i className="ko">오디오 제어</i> Audio Control <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#contrast-minimum" target="_blank" rel="noreferrer" title="Contrast (Minimum) (Level AA) 새창열림" className="fas">1.4.3 <i className="ko">대비 (최소)</i> Contrast (Minimum) <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#resize-text" target="_blank" rel="noreferrer" title="Resize Text (Level AA) 새창열림" className="fas">1.4.4 <i className="ko">텍스트 크기 조정</i> Resize Text <b className="t_blue">(Level AA)</b></a></li>

      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#images-of-text" target="_blank" rel="noreferrer" title="Images of Text (Level AA) 새창열림" className="fas">1.4.5 <i className="ko">텍스트 이미지</i> Images of Text <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#contrast-enhanced" target="_blank" rel="noreferrer" title="Contrast (Enhanced) (Level AAA) 새창열림" className="fas">1.4.6 <i className="ko">대비 (강화)</i> Contrast (Enhanced) <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#low-or-no-background-audio" target="_blank" rel="noreferrer" title="Low or No Background Audio (Level AAA) 새창열림" className="fas">1.4.7 <i className="ko">낮거나 없는 배경 오디오</i> Low or No Background Audio <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#visual-presentation" target="_blank" rel="noreferrer" title="Visual Presentation (Level AAA) 새창열림" className="fas">1.4.8 <i className="ko">시각적 프레젠테이션</i> Visual Presentation <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#images-of-text-no-exception" target="_blank" rel="noreferrer" title="Images of Text (No Exception) (Level AAA) 새창열림" className="fas">1.4.9 <i className="ko">텍스트 이미지 (예외 없음)</i> Images of Text (No Exception) <b className="t_darkblue">(Level AAA)</b></a></li>

      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#reflow" target="_blank" rel="noreferrer" title="Reflow (Level AA) 새창열림" className="fas">1.4.10 <i className="ko">리플로우</i> Reflow <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#non-text-contrast" target="_blank" rel="noreferrer" title="Non-text Contrast (Level AA) 새창열림" className="fas">1.4.11 <i className="ko">비텍스트 대비</i> Non-text Contrast <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#text-spacing" target="_blank" rel="noreferrer" title="Text Spacing (Level AA) 새창열림" className="fas">1.4.12 <i className="ko">텍스트 간격</i> Text Spacing <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus" target="_blank" rel="noreferrer" title="Content on Hover or Focus (Level AA) 새창열림" className="fas">1.4.13 <i className="ko">호버 또는 포커스 시 내용</i> Content on Hover or Focus <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#keyboard" target="_blank" rel="noreferrer" title="Keyboard (Level A) 새창열림" className="fas">2.1.1 <i className="ko">키보드</i> Keyboard <b className="t_lightblue">(Level A)</b></a></li>

      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#no-keyboard-trap" target="_blank" rel="noreferrer" title="No Keyboard Trap (Level A) 새창열림" className="fas">2.1.2 <i className="ko">키보드 포착 방지</i> No Keyboard Trap <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#keyboard-no-exception" target="_blank" rel="noreferrer" title="Keyboard (No Exception) (Level AAA) 새창열림" className="fas">2.1.3 <i className="ko">키보드 (예외 없음)</i> Keyboard (No Exception) <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#character-key-shortcuts" target="_blank" rel="noreferrer" title="Character Key Shortcuts (Level A) 새창열림" className="fas">2.1.4 <i className="ko">문자 키 바로 가기</i> Character Key Shortcuts <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#timing-adjustable" target="_blank" rel="noreferrer" title="Timing Adjustable (Level A) 새창열림" className="fas">2.2.1 <i className="ko">시간 조정 가능</i> Timing Adjustable <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#pause-stop-hide" target="_blank" rel="noreferrer" title="Pause, Stop, Hide (Level A) 새창열림" className="fas">2.2.2 <i className="ko">일시 정지, 정지, 숨기기</i> Pause, Stop, Hide <b className="t_lightblue">(Level A)</b></a></li>

      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#no-timing" target="_blank" rel="noreferrer" title="No Timing (Level AAA) 새창열림" className="fas">2.2.3 <i className="ko">시간 지정 없음</i> No Timing <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#interruptions" target="_blank" rel="noreferrer" title="Interruptions (Level AAA) 새창열림" className="fas">2.2.4 <i className="ko">중단</i> Interruptions <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#re-authenticating" target="_blank" rel="noreferrer" title="Re-authenticating (Level AAA) 새창열림" className="fas">2.2.5 <i className="ko">재인증</i> Re-authenticating <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#timeouts" target="_blank" rel="noreferrer" title="Timeouts (Level AAA) 새창열림" className="fas">2.2.6 <i className="ko">시간 초과</i> Timeouts <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold" target="_blank" rel="noreferrer" title="Three Flashes or Below Threshold (Level A) 새창열림" className="fas">2.3.1 <i className="ko">임계값 이하의 세 번의 번쩍임</i> Three Flashes or Below Threshold <b className="t_lightblue">(Level A)</b></a></li>

      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#three-flashes" target="_blank" rel="noreferrer" title="Three Flashes (Level AAA) 새창열림" className="fas">2.3.2 <i className="ko">세 번의 번쩍임</i> Three Flashes <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#animation-from-interactions" target="_blank" rel="noreferrer" title="Animation from Interactions (Level AAA) 새창열림" className="fas">2.3.3 <i className="ko">상호 작용으로 인한 애니메이션</i> Animation from Interactions <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#bypass-blocks" target="_blank" rel="noreferrer" title="Bypass Blocks (Level A) 새창열림" className="fas">2.4.1 <i className="ko">블록 바이패스</i> Bypass Blocks <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#page-titled" target="_blank" rel="noreferrer" title="Page Titled (Level A) 새창열림" className="fas">2.4.2 <i className="ko">페이지 제목</i> Page Titled <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#focus-order" target="_blank" rel="noreferrer" title="Focus Order (Level A) 새창열림" className="fas">2.4.3 <i className="ko">포커스 순서</i> Focus Order <b className="t_lightblue">(Level A)</b></a></li>

      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#link-purpose-in-context" target="_blank" rel="noreferrer" title="Link Purpose (In Context) (Level A) 새창열림" className="fas">2.4.4 <i className="ko">링크 목적 (컨텍스트 내)</i> Link Purpose (In Context) <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#multiple-ways" target="_blank" rel="noreferrer" title="Multiple Ways (Level AA) 새창열림" className="fas">2.4.5 <i className="ko">다양한 방법</i> Multiple Ways <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#headings-and-labels" target="_blank" rel="noreferrer" title="Headings and Labels (Level AA) 새창열림" className="fas">2.4.6 <i className="ko">제목과 라벨</i> Headings and Labels <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#focus-visible" target="_blank" rel="noreferrer" title="Focus Visible (Level AA) 새창열림" className="fas">2.4.7 <i className="ko">포커스 시 가시성</i> Focus Visible <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#location" target="_blank" rel="noreferrer" title="Location (Level AAA) 새창열림" className="fas">2.4.8 <i className="ko">위치</i> Location <b className="t_darkblue">(Level AAA)</b></a></li>

      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#link-purpose-link-only" target="_blank" rel="noreferrer" title="Link Purpose (Link Only) (Level AAA) 새창열림" className="fas">2.4.9 <i className="ko">링크 목적 (링크만)</i> Link Purpose (Link Only) <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#section-headings" target="_blank" rel="noreferrer" title="Section Headings (Level AAA) 새창열림" className="fas">2.4.10 <i className="ko">섹션 제목</i> Section Headings <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#pointer-gestures" target="_blank" rel="noreferrer" title="Pointer Gestures (Level A) 새창열림" className="fas">2.5.1 <i className="ko">포인터 제스처</i> Pointer Gestures <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#pointer-cancellation" target="_blank" rel="noreferrer" title="Pointer Cancellation (Level A) 새창열림" className="fas">2.5.2 <i className="ko">포인터 취소</i> Pointer Cancellation <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#label-in-name" target="_blank" rel="noreferrer" title="Label in Name (Level A) 새창열림" className="fas">2.5.3 <i className="ko">이름으로 레이블</i> Label in Name <b className="t_lightblue">(Level A)</b></a></li>

      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#motion-actuation" target="_blank" rel="noreferrer" title="Motion Actuation (Level A) 새창열림" className="fas">2.5.4 <i className="ko">동작 활성화</i> Motion Actuation <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#target-size" target="_blank" rel="noreferrer" title="Target Size (Level AAA) 새창열림" className="fas">2.5.5 <i className="ko">대상 크기</i> Target Size <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms" target="_blank" rel="noreferrer" title="Concurrent Input Mechanisms (Level AAA) 새창열림" className="fas">2.5.6 <i className="ko">동시 입력 메커니즘</i> Concurrent Input Mechanisms <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#language-of-page" target="_blank" rel="noreferrer" title="Language of Page (Level A) 새창열림" className="fas">3.1.1 <i className="ko">페이지의 언어</i> Language of Page <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#language-of-parts" target="_blank" rel="noreferrer" title="Language of Parts (Level AA) 새창열림" className="fas">3.1.2 <i className="ko">부분의 언어</i> Language of Parts <b className="t_blue">(Level AA)</b></a></li>

      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#unusual-words" target="_blank" rel="noreferrer" title="Unusual Words (Level AAA) 새창열림" className="fas">3.1.3 <i className="ko">이상한 단어</i> Unusual Words <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#abbreviations" target="_blank" rel="noreferrer" title="Abbreviations (Level AAA) 새창열림" className="fas">3.1.4 <i className="ko">약어</i> Abbreviations <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#reading-level" target="_blank" rel="noreferrer" title="Reading Level (Level AAA) 새창열림" className="fas">3.1.5 <i className="ko">읽기 수준</i> Reading Level <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#pronunciation" target="_blank" rel="noreferrer" title="Pronunciation (Level AAA) 새창열림" className="fas">3.1.6 <i className="ko">발음</i> Pronunciation <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#on-focus" target="_blank" rel="noreferrer" title="On Focus (Level A) 새창열림" className="fas">3.2.1 <i className="ko">포커스 시</i> On Focus <b className="t_lightblue">(Level A)</b></a></li>

      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#on-input" target="_blank" rel="noreferrer" title="On Input (Level A) 새창열림" className="fas">3.2.2 <i className="ko">입력 시</i> On Input <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#consistent-navigation" target="_blank" rel="noreferrer" title="Consistent Navigation (Level AA) 새창열림" className="fas">3.2.3 <i className="ko">일관된 탐색</i> Consistent Navigation <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#consistent-identification" target="_blank" rel="noreferrer" title="Consistent Identification (Level AA) 새창열림" className="fas">3.2.4 <i className="ko">일관된 식별</i> Consistent Identification <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#change-on-request" target="_blank" rel="noreferrer" title="Change on Request (Level AAA) 새창열림" className="fas">3.2.5 <i className="ko">요청에 따른 변경</i> Change on Request <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#error-identification" target="_blank" rel="noreferrer" title="Error Identification (Level A) 새창열림" className="fas">3.3.1 <i className="ko">오류 식별</i> Error Identification <b className="t_lightblue">(Level A)</b></a></li>

      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#labels-or-instructions" target="_blank" rel="noreferrer" title="Labels or Instructions (Level A) 새창열림" className="fas">3.3.2 <i className="ko">레이블 또는 지침</i> Labels or Instructions <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#error-suggestion" target="_blank" rel="noreferrer" title="Error Suggestion (Level AA) 새창열림" className="fas">3.3.3 <i className="ko">오류 제안</i> Error Suggestion <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data" target="_blank" rel="noreferrer" title="Error Prevention (Legal, Financial, Data) (Level AA) 새창열림" className="fas">3.3.4 <i className="ko">오류 예방 (법적, 금융, 데이터)</i> Error Prevention (Legal, Financial, Data) <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#help" target="_blank" rel="noreferrer" title="Help (Level AAA) 새창열림" className="fas">3.3.5 <i className="ko">도움말</i> Help <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#error-prevention-all" target="_blank" rel="noreferrer" title="Error Prevention (All) (Level AAA) 새창열림" className="fas">3.3.6 <i className="ko">오류 예방 (모든)</i> Error Prevention (All) <b className="t_darkblue">(Level AAA)</b></a></li>

      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#parsing" target="_blank" rel="noreferrer" title="Parsing (Level A) 새창열림" className="fas">4.1.1 <i className="ko">구문 분석</i> Parsing <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#name-role-value" target="_blank" rel="noreferrer" title="Name, Role, Value (Level A) 새창열림" className="fas">4.1.2 <i className="ko">이름, 역할, 값</i> Name, Role, Value <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG21/#status-messages" target="_blank" rel="noreferrer" title="Status Messages (Level AA) 새창열림" className="fas">4.1.3 <i className="ko">상태 메시지</i> Status Messages <b className="t_blue">(Level AA)</b></a></li>
      			</ol>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_darkblue">WCAG 2.2에 새로 추가된 성공 기준</h3>
      			<p className="mt_m">
      				<mark>WCAG 2.2에서는 <b>9개의 성공 기준이 추가로 도입</b>되었습니다.</mark>
      				주로 운동 장애 사용자, 고령자, 인지 및 학습 장애 사용자, 저시력 사용자를 대상으로 하고 있습니다.
      			</p>
      			<ul className="mt_ml success_list">
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum" target="_blank" rel="noreferrer" title="Focus Not Obscured (Minimum) (AA) 새창열림" className="fas">2.4.11 <i className="ko">포커스 가려짐 (최소)</i> Focus Not Obscured (Minimum) <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced" target="_blank" rel="noreferrer" title="Focus Not Obscured (Enhanced) (AAA) 새창열림" className="fas">2.4.12 <i className="ko">포커스 가려짐 (개선)</i> Focus Not Obscured (Enhanced) <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG22/#focus-appearance" target="_blank" rel="noreferrer" title="Focus Appearance (AAA) 새창열림" className="fas">2.4.13 <i className="ko">포커스 외형</i> Focus Appearance <b className="t_darkblue">(Level AAA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG22/#dragging-movements" target="_blank" rel="noreferrer" title="Dragging Movements (AA) 새창열림" className="fas">2.5.7 <i className="ko">드래깅 동작</i> Dragging Movements <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG22/#target-size-minimum" target="_blank" rel="noreferrer" title="Target Size (Minimum) (AA) 새창열림" className="fas">2.5.8 <i className="ko">대상 크기 (최소)</i> Target Size (Minimum) <b className="t_blue">(Level AA)</b></a></li>

      				<li className="reference"><a href="https://www.w3.org/TR/WCAG22/#consistent-help" target="_blank" rel="noreferrer" title="Consistent Help (A) 새창열림" className="fas">3.2.6 <i className="ko">일관된 도움말</i> Consistent Help <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG22/#redundant-entry" target="_blank" rel="noreferrer" title="Redundant Entry (A) 새창열림" className="fas">3.3.7 <i className="ko">중복 입력</i> Redundant Entry <b className="t_lightblue">(Level A)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum" target="_blank" rel="noreferrer" title="Accessible Authentication (Minimum) (AA) 새창열림" className="fas">3.3.8 <i className="ko">접근 가능 인증 (최소)</i> Accessible Authentication (Minimum) <b className="t_blue">(Level AA)</b></a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced" target="_blank" rel="noreferrer" title="Accessible Authentication (Enhanced) (AAA) 새창열림" className="fas">3.3.9 <i className="ko">접근 가능 인증 (개선)</i> Accessible Authentication (Enhanced) <b className="t_darkblue">(Level AAA)</b></a></li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_red">WCAG 2.2에서 제거된 성공 기준</h3>
      			<p className="mt_m">
      				이 기준은 원래 보조 기술이 HTML을 직접 분석하는 문제를 해결하기 위해 도입되었습니다.
      				하지만, 시간이 지나면서 보조 기술은 HTML을 직접 분석할 필요가 없어졌고,
      				브라우저들은 마크업의 구문 분석 오류를 처리하는 능력이 크게 향상되었습니다.
      				결과적으로, 정확한 마크업 구조는 더 이상 필수 요소가 아니게 되었습니다.
      				따라서 이 기준은 그 유용성이 사라져 삭제되었습니다.<br />
      				단, 다른 기준에서 확장되어 세부적인 내용들이 추가되었습니다.
      			</p>
      			<ul className="mt_ml success_list">
      				<li className="reference"><a href="https://www.w3.org/TR/WCAG22/#parsing" target="_blank" rel="noreferrer" title="Parsing (Obsolete and removed) 새창열림" className="fas">4.1.1 <i className="ko">구문 분석(사용되지 않고 제거됨)</i> Parsing (Obsolete and removed)</a></li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.1.7. 접근성 용어정리</h2>

      		<article className="indent mt_xl">
      			<h3 className="ml_mn">ATAG(웹 저작 도구 접근성 지침)</h3>
      			<ul className="mt_m dot_lst">
      				<li>Authoring Tool Accessibility Guildelines의 약자로 접근 가능한 콘텐츠를 생성하는 접근 가능한 작성 도구를 구축하기 위한 W3C 권장 사항입니다.</li>
      				<li>저작도구는 “저자” (웹 개발자, 디자이너, 작가 등)가 웹 콘텐츠를 생산하는 데에 사용하는 서비스나 소프트웨어를 가리킵니다.</li>
      				<li>예) HTML 에디터, 콘텐츠 관리 시스템 (CMS) 그리고 사용자가 콘텐츠를 생산할 수 있는 블로그나 소셜 네트워킹 사이트가 있습니다.</li>
      				<li>목표로는 저작도구의 접근성을 보장하여 장애가 있는 사용자가 웹 콘텐츠를 생산할 수 있도록 하고, 저자가 더 접근성이 좋은 웹 콘텐츠를 생산하는 것을 돕는데 있습니다.</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn">UAAG(사용자 에이전트 접근성 지침)</h3>
      			<ul className="mt_m dot_lst">
      				<li>User Agent Accessibility Guidelines의 약자로 사용자 에이전트는 브라우저, 브라우저 확장프로그램, 미디어 플레이어, 리더기와 같은 웹 콘텐츠를 제공하는 어플리케이션을 포함합니다.</li>
      			</ul>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn">WAI-ARIA(접근가능한 리치 인터넷 어플리케이션)</h3>
      			<ul className="mt_m dot_lst">
      				<li>Web Accessibility Initiative’s Accessible Rich Internet Applications의 약자로 스크린리더가 브라우저를 읽을 때 각 요소가 어떤 역할을 하는지 무슨 의미로 존재하는지 알 수 있도록 하기 위해 만들어진 기술입니다.</li>
      				<li>ARIA는 의미를 제공하여 저자가 유저 인터페이스 행동이나 구조적 정보를 스크린 리더와 같은 보조 기술에 전달할 수 있게 합니다. ARIA 기술 명세는 역할, 상태, 접근 가능한 유저 인터페이스 요소로 정의되는 속성들의 온톨로지를 제공합니다.</li>
      				<li>ARIA 모음은 유저 에이전트 실행 지침을 제공하는 명세를 모은 API를 포함합니다. 그래픽, 디지털 출판을 위한 모듈 또한 포함됩니다.</li>
      				<li><b>WAI</b> : ‘Web Internet Applications’의 약자로 웹 접근성을 담당하는 조직.</li>
      				<li><b>ARIA</b> : ‘Accessible Rich Internet Applications’의 약자로 리치 인터넷을 위한 W3C 접근성 명세.</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.1.8. 접근성 관련 영상</h2>

      		<article className="indent mt_xl">
      			<h3 className="ml_mn">웹 접근성과 W3C 표준에 대한 소개 비디오 (4분)</h3>

      			<div className="mt_ml youtube_box" style={{ '--padding-top': "56.25%" }}>
      				<iframe width="560" height="315" src="https://www.youtube.com/embed/20SHvU2PKsM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      			</div>
      		</article>
      		

      		<article className="indent mt_xl">
      			<h3 className="ml_mn">웹 접근성의 다양한 관점들에 대한 비디오 (7분 36초)</h3>
      			<p className="mt_ms">
      				접근성이 장애를 가진 사람들에게 얼마나 필수적이고, 다양한 상황 속에 있는 모든 사람들에게 도움이 되는지에 대한 예시를 보여주는 7분짜리 비디오 입니다.
      			</p>
      			<div className="mt_ml youtube_box" style={{ '--padding-top': "56.25%" }}>
      				<iframe width="560" height="315" src="https://www.youtube.com/embed/3f31oufqFSM?si=IFOa4xOnApUkOb-4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      			</div>
      		</article>
      		
      	</section>
      	

      	<footer className="reference_box">
      		<strong className="tit">웹 콘텐츠 접근성 | 접근성 가이드라인 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.w3.org/TR/WCAG10/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 1.0</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/WCAG20/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.0</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.1</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.2</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/2021/WD-wcag-3.0-20210121/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 3.0 Draft</a></li>
      			<li className="reference"><a href="http://www.kwacc.or.kr/WAI/wcag21/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.1 한국어</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Web Content Accessibility Guidelines (WCAG) 2.2</a></li>
      			<li className="reference"><a href="https://www.w3.org/WAI/standards-guidelines/ko#wcag2" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG2 ko</a></li>
      			<li className="reference"><a href="https://www.w3.org/WAI/about/groups/agwg/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Accessibility Guidelines Working Group</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C W3C 접근성의 4가지 원칙</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/Accessibility/Understanding_WCAG" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN 웹 컨텐츠 접근성 지침 이해하기</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Learn/Accessibility/What_is_accessibility#accessibility_guidelines_and_the_law" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN 접근성이란?</a></li>
      			<li className="reference"><a href="https://nuli.navercorp.com/community/article/1133181" target="_blank" rel="noreferrer" title="새창 열림" className="fas">NULI WCAG 2.2에서 변경된 사항</a></li>
      			<li className="reference"><a href="https://brunch.co.kr/@snclab/55" target="_blank" rel="noreferrer" title="새창 열림" className="fas">brunch WCAG 2.2 작업 초안</a></li>
      			<li className="reference"><a href="https://a11y.gitbook.io/wcag/international-standards" target="_blank" rel="noreferrer" title="새창 열림" className="fas">GITBOOK WCAG 2.1</a></li>
      			<li className="reference"><a href="https://iyu88.github.io//a11y/2023/12/24/web-accessibility-1.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">WAI 문서로 접근성 이해하기</a></li>
      			<li className="reference"><a href="https://www.deque.com/blog/wcag-2-1-what-is-next-for-accessibility-guidelines/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">deque blog WCAG 2.1</a></li>
      			<li className="reference"><a href="https://seculayerlab.tistory.com/m/48" target="_blank" rel="noreferrer" title="새창 열림" className="fas">웹접근성 국가표준 개정 소개</a></li>
      			<li className="reference"><a href="https://www.samsungfashion.com/webacc.do" target="_blank" rel="noreferrer" title="새창 열림" className="fas">한국형 웹 콘텐츠 접근성 지침 2.2</a></li>
      			<li className="reference"><a href="https://aoa.gitbook.io/skymimo/undefined" target="_blank" rel="noreferrer" title="새창 열림" className="fas">AOA GITBOOK</a></li>
      		</ul>
      	</footer>

    </>
  )
}

export default WcagPage
