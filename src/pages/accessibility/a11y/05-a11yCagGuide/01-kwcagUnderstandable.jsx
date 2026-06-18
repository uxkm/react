import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "kwcagUnderstandable",
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
  title: "이해의 용이성(Understandable) | 접근성 항목별 준수 가이드(웹 콘텐츠 접근성)",
  description: "접근성 항목별 준수 가이드는 웹 콘텐츠 접근성을 보장하기 위한 구체적인 지침을 제공합니다. 이 페이지에서는 웹 콘텐츠 접근성 준수 가이드의 이해의 용이성(Understandable)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단말기 접근성",
}

function KwcagUnderstandablePage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>









      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b>이해의 용이성(Understandable)</b>은 사용자가 장애 유무 등에 관계없이 웹 사이트에서 제공하는 콘텐츠를 이해할 수 있도록 제공하는 것을 의미합니다.<br />
      			KWCAG 2.1 이해의 용이성은 가독성, 예측 가능성, 콘텐츠의 논리성, 입력 도움의 4가지 지침으로 구성되어 있으며,<br />
      			KWCAG 2.2 이해의 용이성은 가독성, 예측 가능성, 입력 도움의 3가지 지침으로 구성되어 있습니다.
      		</p>
      	</blockquote>

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y}/5_1_kwcag_understandable.png`} alt="이해의 용이성" />
      		<figcaption>
      			이해의 용이성
      		</figcaption>
      	</figure>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">가독성</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 언어 표시</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">주로 사용하는 언어를 명시해야 합니다.</b><br />
      					웹 브라우저는 웹 페이지를 구성하는 텍스트 콘텐츠의 언어 정보를 바탕으로 텍스트 콘텐츠를 화면에 표시하거나 보조 기술로 전달합니다.
      					다국어를 지원하는 화면 낭독 프로그램을 사용하는 경우,
      					텍스트 콘텐츠의 언어 정보를 화면 낭독 프로그램으로 전달하여 정확한 발음으로 읽어주도록 제어할 수 있기 때문에, 웹 페이지의 기본 언어는 정확히 정의해야 합니다.
      				</p>
      				<p className="reference mt_ms">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#language-of-page" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.1.1 Language of Page (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>웹 페이지의 언어 명시</strong>
      						<p>
      							웹 페이지에서 제공하는 콘텐츠에 적용되는 기본 언어를 반드시 정의해야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<p className="mt_m">
      					화면 낭독 프로그램과 점역 프로그램과 같은 보조 기술은 웹 페이지의 기본 언어를 인식하여 자동적으로
      					음성 모듈을 선택하거나 해당 언어에 적합한 점역 방법을 선택할 수 있는 편리함이 있다.
      				</p>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_25.png`} alt="25 기본 언어 표시" />
      				<figcaption>
      					이해의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">예측 가능성</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용자 요구에 따른 실행</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">사용자가 의도하지 않은 기능(새 창, 초점에 의한 맥락 변화 등)은 실행되지 않아야 합니다.</b><br />
      					컨트롤이나 사용자 입력은 초점을 받았을 때에 의도하지 않는 기능이 자동적으로 실행되지 않도록 콘텐츠를 개발해야 합니다.<br />
      					즉, 컨트롤이나 사용자 입력의 기능은 사용자의 마우스 클릭이나 키보드 조작에 의하여 실행되어야 합니다.
      					특히 사용자가 인지하지 못한 상황에서 새 창, 팝업 창 등이 열리지 않아야 합니다.
      				</p>
      				<p className="reference mt_ms">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#on-focus" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.2.1 On Focus (Level A)</a><br />
      					<a href="https://www.w3.org/TR/WCAG21/#on-input" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.2.2 On Input (Level A)</a>
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>초점에 의한 맥락 변화</strong>
      						<p>
      							웹 콘텐츠를 구성하는 컨트롤이 초점을 받았을 경우, 사용자가 의도하지 않은 기능이 실행되지 않아야 합니다.
      							단, 기능의 실행이 아니라 초점을 받은 요소의 색깔이 반전되거나 테두리가 생기는 것과 같은 시각적인 변화,
      							또는 사용자 제어가 이동하지 않은 상태에서 나타나는 추가 정보 등은 초점에 의한 맥락 변화를 일으키는 기능의 실행으로 간주하지 않습니다.

      						</p>
      						<dl className="mt_s dl_lst">
      							<dt className="font-14-important">다음은 종종 발생하는 대표적인 오류들입니다.</dt>
      							<dd className="mt_sm">
      								<ul className="dot_lst">
      									<li>온라인 서식이 자동적으로 제출됨.</li>
      									<li>새 창이 열림.</li>
      									<li>드롭다운 메뉴가 열림만으로 특정 메뉴 항목이 실행됨.</li>
      									<li>풀다운 메뉴를 사용하는 콘텐츠에서 초점을 받는 것만으로 특정 메뉴의 기능이 실행됨.</li>
      									<li>사용자 제어(초점)가 다른 컨트롤로 이동하거나 사라지거나 또는 그 위치를 예측할 수 없음.</li>
      								</ul>
      							</dd>
      						</dl>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>입력에 따른 변화</strong>
      						<p>
      							사용자가 선택할 수 있는 컨트롤(예 : 콤보 상자, 라디오 버튼, 체크 상자 등)에서 어떤 항목을 선택하는 경우,
      							해당 항목이 의미하는 기능이 실행되거나 서식 제출이 일어나지 않아야 합니다.<br />
      							실제로 기능이 실행되거나 서식이 제출되는 것은 사용자가 선택할 수 있는 컨트롤과 함께
      							제공되는 실행 버튼을 활성화(클릭)했을 때 비로소 진행되어야 합니다.<br />
      							단, 기능의 실행이 아니라 초점을 받은 사용자 입력 또는 컨트롤의 색깔이 반전되거나 테두리가 생기는 것과 같은 시각적인 변화,
      							또는 사용자 제어(초점)가 이동하지 않은 상태에서 나타나는 추가 정보 등은 입력 변화에 따른 기능의 실행으로 간주하지 않습니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>새 창/팝업 창</strong>
      						<p>
      							사용자가 예측할 수 없는 상황에서 새 창을 열어 정보를 전달해서는 안 됩니다.
      							사용자는 새로운 창이 열리는 것을 예측할 수 있어야 하며, 이를 명확히 안내받아야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>레이어 팝업</strong>
      						<p>
      							레이어 팝업은 콘텐츠의 논리적 초점 이동 및 콘텐츠의 선형 구조를 위반할 가능성이 많으므로 사용하지 않는 것이 바람직합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>새 창/팝업 창/레이어 팝업의 닫음</strong>
      						<p>
      							새 창/팝업 창/레이어 팝업에 초점이 있을 경우 새 창/팝업 창/레이어 팝업을 닫거나 종료 버튼을 클릭하였을 경우,
      							해당 창 또는 팝업 등이 종료되어야 합니다.<br />
      							사용자가 화면에 나타난 새 창/팝업 창/레이어 팝업을 닫거나 종료하도록 요구하였음에도 불구하고
      							해당 창 또는 팝업 등이 종료되지 않으면 사용자는 매우 당황하게 됩니다. 특히 레이어 팝업의 경우에 이러한 혼란이 가중될 수 있습니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						시각 장애, 지적 장애 또는 지체 장애가 있는 사람들도 초점 및 문맥의 변화를 이해할 수 있게 됩니다.
      					</li>
      					<li>
      						사용자에게 미리 새 창 열림을 경고하면 뒤로 가기 버튼이 더 이상 예상처럼 동작하지 않는다는 사실을 알 수 있으므로 이용하는 데 따른 혼란이 줄어듭니다.
      					</li>
      				</ul>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_26.png`} alt="26 사용자 요구에 따른 실행" />
      				<figcaption>
      					이해의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">찾기 쉬운 도움 정보</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">도움 정보가 제공되는 경우, 각 페이지에서 동일한 상대적인 순서로 접근할 수 있어야 합니다.</b><br />
      					단일 페이지 애플리케이션 또는 웹 페이지 세트에서 연락처, FAQ, 챗봇 등 도움 정보가 제공되면 최소 하나 이상의 도움 정보는 모든 페이지에서 동일한 상대적 위치로 제공되어야 합니다.
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>일관된 도움 정보 위치</strong>
      						<p>
      							담당자 연락처, 문의 방법, FAQ, 챗봇 등 도움 정보는 페이지마다 위치가 크게 달라지지 않도록 동일한 상대적 순서로 제공해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>최소 1개 이상 고정 제공</strong>
      						<p>
      							여러 종류의 도움 정보를 제공하더라도, 사용자가 항상 찾을 수 있도록 최소 하나 이상의 도움 정보는 모든 관련 페이지에서 일관되게 제공해야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<p className="mt_m">
      					도움 정보 위치가 일관되면 사용자는 필요한 지원 수단을 빠르게 찾을 수 있어 탐색 부담이 줄고 서비스 이용 안정성이 높아집니다.
      				</p>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_27.png`} alt="27 찾기 쉬운 도움 정보" />
      				<figcaption>
      					이해의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">입력 도움</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">오류 정정</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">입력 오류를 정정할 수 있는 방법을 제공해야 합니다.</b><br />
      					입력 서식 작성 시, 사용자의 실수로 오류가 발생할 경우 이를 정정할 수 있는 방법을 제공해야 합니다.
      				</p>
      				<p className="reference mt_ms">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#error-identification" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.3.1 Error Identification (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>사용자 입력 오류 안내</strong>
      						<p>
      							온라인 서식에서 오류가 발생하는 경우, 사용자에게 오류가 발생한 위치와 오류를 유발하게 된 이유 등에 관한 정보를 알려 주어야 합니다.<br />
      							예를 들어, 이름, 주소, 전화번호, 이메일 주소를 입력하도록 구성한 입력 서식에서 일부 항목을 기입하지 않고 제출한 경우,
      							어떤 항목이 누락되었는지를 사용자에게 알려주어야 합니다. 그러나 시스템이나 플랫폼에서 발생한 오류에는 이 검사 항목이 적용되지 않습니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						입력 오류를 수정할 수 있는 방법에 대한 정보를 텍스트로 자세하게 제공하는 것은 학습 장애가 있는
      						사용자들이 입력 서식을 성공적으로 작성할 수 있도록 도와줍니다.<br />
      						오류가 있는 곳에만 오류 표시를 하면 시각 장애인이나 저시력 장애인은 오류가 난 곳에 도달하기 전까지는 어떤 오류가 발생했는지 알기 어렵지만,
      						오류의 내용을 먼저 텍스트로 설명해주거나, 프로그램을 통해 오류가 난 위치로 초점을 이동시킨 후에 오류의
      						내용을 설명해 주면 입력 오류를 더 쉽게 정정할 수 있습니다.
      					</li>
      					<li>
      						실수로 인해 빚어지는 심각한 결과 또는 과실을 피하기 위해 오류 정정에 필요한 정보나
      						수단을 제공하는 것은 장애인뿐 아니라 모든 사용자들에게 도움을 줍니다.
      					</li>
      				</ul>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_28.png`} alt="28 오류 정정" />
      				<figcaption>
      					이해의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">레이블 제공</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">사용자 입력에는 대응하는 레이블을 제공해야 합니다.</b><br />
      					사용자 입력은 용도를 이해할 수 있도록 레이블을 제공해야 합니다.
      				</p>
      				<p className="reference mt_ms">
      					WCAG 2.1 부분 참조.<br />
      					<a href="https://www.w3.org/TR/WCAG21/#labels-or-instructions" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.3.2 Labels or Instructions (Level A)</a><br />
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>사용자 입력에 대응하는 레이블 제공</strong>
      						<p>
      							사용자 입력의 근처에 사용법을 알려주는 레이블을 보조 기술이 알 수 있도록 해당 컨트롤과 대응하여 제공해야 합니다.<br />
      							레이블과 사용자 입력 간의 관계를 보조 기술이 인식할 수 있도록 대응시키지 않고 단순히 텍스트로만 제공할 경우,
      							보조 기술은 해당 사용자 입력에 대한 레이블을 인식할 수 없습니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<p className="mt_m">
      					레이블과 사용자 입력 간의 관계를 보조 기술이 인식할 수 있도록 대응시키면 화면 낭독 프로그램을 사용하는
      					시각 장애인에게 해당 컨트롤이 어떤 용도로 사용되는지를 알려줄 수 있으므로 잘못된 데이터의 입력을 방지할 수 있습니다.
      				</p>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_29.png`} alt="29 레이블 제공" />
      				<figcaption>
      					이해의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">접근 가능한 인증</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">인증 과정은 인지 기능 테스트에만 의존해서는 안 됩니다.</b><br />
      					로그인 등 인증 과정이 비밀번호 기억, 계산, 패턴 인식, 특정 이미지 찾기 등 인지 기능 테스트에 의존하는 경우,
      					인지 기능 테스트에 의존하지 않는 인증 방법을 최소 1개 이상 제공해야 합니다.
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>대체 인증 수단 제공</strong>
      						<p>
      							브라우저 저장 비밀번호 사용이 가능한 서식 제공, 공개 인증(OAuth), 생체 인증, 소지 기반 인증 등 인지 부담이 낮은 인증 수단을 함께 제공해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>인지 예외 인식</strong>
      						<p>
      							사용자 이름, 이메일 주소, 전화번호처럼 이미 익숙하여 별도의 인지 노력이 거의 없는 정보는 인지 기능 테스트로 간주하지 않을 수 있습니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<p className="mt_m">
      					기억, 읽기, 숫자 계산 등에 어려움이 있는 사용자도 인지 능력에 상관없이 인증 과정을 수행할 수 있어 서비스 접근성이 향상됩니다.
      				</p>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_30.png`} alt="30 접근 가능한 인증" />
      				<figcaption>
      					이해의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">반복 입력 정보</h3>

      			<blockquote className="uk_note mt_l" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					<b className="t_black">반복되는 입력 정보는 자동 입력 또는 선택 입력할 수 있어야 합니다.</b><br />
      					동일한 과정에서 이전 단계에 이미 입력한 정보를 다시 입력해야 하는 경우, 해당 정보는 자동으로 채우거나 사용자가 선택해 재사용할 수 있어야 합니다.
      				</p>
      			</blockquote>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">고려 사항</h4>
      				<ol className="mt_m ol_lst info_lst gap-column-important-ms">
      					<li className="t_black_before weight-600-before">
      						<strong>자동/선택 입력 제공</strong>
      						<p>
      							이전 단계 입력값과 동일한 정보가 필요할 때 재입력 강제를 피하고, 자동 채움 또는 '동일 정보 사용' 선택 기능을 제공해야 합니다.
      						</p>
      					</li>
      					<li className="t_black_before weight-600-before">
      						<strong>보안 예외 처리</strong>
      						<p>
      							비밀번호 재입력처럼 보안상 재확인이 필요한 항목은 예외로 둘 수 있으나, 그 외 항목은 반복 입력 부담을 최소화해야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue weight-800">기대 효과</h4>
      				<ul className="mt_m dot_lst info_lst gap-column-important-sm">
      					<li>
      						기억 또는 인지 기능에 어려움을 겪는 사용자의 반복 입력 부담과 실수 가능성을 줄일 수 있습니다.
      					</li>
      					<li>
      						스위치 컨트롤, 음성 입력 등 텍스트 입력 비용이 큰 사용자도 보다 효율적으로 입력 과정을 완료할 수 있습니다.
      					</li>
      				</ul>
      			</div>
      			

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.A11Y}/5_1_kwcag_31.png`} alt="31 반복 입력 정보" />
      				<figcaption>
      					이해의 용이성
      				</figcaption>
      			</figure>
      		</article>
      		
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">접근성 항목별 준수 가이드 - 웹 콘텐츠 접근성 참조</strong>
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
      		<li className="reference"><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C 접근성의 4가지 원칙</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/Accessibility/Understanding_WCAG" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN 웹 콘텐츠 접근성 지침 이해하기</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Learn/Accessibility/What_is_accessibility#accessibility_guidelines_and_the_law" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN 접근성이란?</a></li>
      		<li className="reference"><a href="https://nuli.navercorp.com/community/article/1133181" target="_blank" rel="noreferrer" title="새창 열림" className="fas">NULI WCAG 2.2에서 변경된 사항</a></li>
      		<li className="reference"><a href="https://brunch.co.kr/@snclab/55" target="_blank" rel="noreferrer" title="새창 열림" className="fas">brunch WCAG 2.2 작업 초안</a></li>
      		<li className="reference"><a href="https://a11y.gitbook.io/wcag/international-standards" target="_blank" rel="noreferrer" title="새창 열림" className="fas">GITBOOK WCAG 2.1</a></li>
      		<li className="reference"><a href="https://iyu88.github.io//a11y/2023/12/24/web-accessibility-1.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">WAI 문서로 접근성 이해하기</a></li>
      		<li className="reference"><a href="https://www.deque.com/blog/wcag-2-1-what-is-next-for-accessibility-guidelines/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">deque blog WCAG 2.1</a></li>
      		<li className="reference"><a href="https://seculayerlab.tistory.com/m/48" target="_blank" rel="noreferrer" title="새창 열림" className="fas">웹접근성 국가표준 개정 소개</a></li>
      		<li className="reference"><a href="https://www.samsungfashion.com/webacc.do" target="_blank" rel="noreferrer" title="새창 열림" className="fas">한국형 웹 콘텐츠 접근성 지침 2.2</a></li>
      		<li className="reference"><a href="https://aoa.gitbook.io/skymimo/undefined" target="_blank" rel="noreferrer" title="새창 열림" className="fas">AOA GITBOOK</a></li>
      		<li className="reference"><a href="https://nia-a11y.github.io/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">웹 접근성을 고려한 콘텐츠 제작기법 2.2 개정판</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default KwcagUnderstandablePage
