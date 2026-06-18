import { IMG } from '@/config/path'

function CheckWcagReferencePage() {

  return (
    <>
      <hr />

      <section className="mt_xxl">
      	<h2 data-icon="pen">웹 접근성 요약 보고서 예시</h2>
      	<p className="mt_ml indent">
      		아래 표는 웹 접근성 요약 보고서 예시로, 체크박스의 체크 여부가 저장되지 않습니다.
      	</p>
      	<div className="mt_m indent">
      		<div className="checkWcag_table web_table">
      			<ul className="head">
      				<li className="guide" data-tit="지침(14개) / 검사항목(33개)">지침(14개)</li>
      				<li className="items">
      					<div className="item">
      						<p className="text">검사항목(33개)</p>
      						<p className="check">준수 여부</p>
      					</div>
      				</li>
      			</ul>
      			<div className="body">
      				<ul>
      					<li className="guide">
      						5.1. 대체 텍스트
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">5.1.1. (적절한 대체 텍스트 제공) 텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						5.2. 멀티미디어 대체수단
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">5.2.1. (자막 제공) 멀티미디어 콘텐츠에는 자막, 대본 또는 수어를 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						5.3. 적응성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">5.3.1. (표의 구성) 표는 이해하기 쉽게 구성해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">5.3.2. (콘텐츠의 선형구조) 콘텐츠는 논리적인 순서로 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">5.3.3. (명확한 지시사항 제공) 지시사항은 모양, 크기, 위치, 방향, 색, 소리 등에 관계없이 인식될 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						5.4. 명료성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">5.4.1. (색에 무관한 콘텐츠 인식) 콘텐츠는 색에 관계없이 인식될 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">5.4.2. (자동 재생 금지) 자동으로 소리가 재생되지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">5.4.3. (텍스트 콘텐츠의 명도 대비) 텍스트 콘텐츠와 배경 간의 명도대비는 4.5 대 1 이상이어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">5.4.4. (콘텐츠 간의 구분) 이웃한 콘텐츠는 구별될 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6.1. 입력장치 접근성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">6.1.1. (키보드 사용 보장) 모든 기능은 키보드만으로도 사용할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.1.2. (초점 이동과 표시) 키보드에 의한 초점은 논리적으로 이동해야 하며, 시각적으로 구별할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.1.3. (조작 가능) 사용자 입력 및 콘트롤은 조작 가능하도록 제공되어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.1.4. (문자 단축키) 문자 단축키는 오동작으로 인한 오류를 방지하여야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6.2. 충분한 시간 제공
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">6.2.1. (응답시간 조절) 시간제한이 있는 콘텐츠는 응답시간을 조절할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.2.2. (정지 기능 제공) 자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6.3. 광과민성 발작 예방
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">6.3.1. (깜빡임과 번쩍임 사용 제한) 초당 3~50회 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공하지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6.4 쉬운 내비게이션
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">6.4.1. (반복 영역 건너뛰기) 콘텐츠의 반복되는 영역은 건너뛸 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.4.2. (제목 제공) 페이지, 프레임, 콘텐츠 블록에는 적절한 제목을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.4.3. (적절한 링크 텍스트) 링크 텍스트는 용도나 목적을 이해할 수 있도록 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.4.4. (고정된 참조 위치 정보) 전자출판문서 형식의 웹 페이지는 각 페이지로 이동할 수 있는 기능이 있어야 하고, 서식이나 플랫폼에 상관없이 참조 위치 정보를 일관되게 제공ㆍ유지해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6.5. 입력 방식
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">6.5.1. (단일 포인터 입력 지원) 다중 포인터 또는 경로기반 동작을 통한 입력은 단일 포인터 입력으로도 조작할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.5.2. (포인터 입력 취소) 단일 포인터 입력으로 실행되는 기능은 취소할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.5.3. (레이블과 네임) 텍스트 또는 텍스트 이미지가 포함된 레이블이 있는 사용자 인터페이스 구성요소는 네임에 시각적으로 표시되는 해당 텍스트를 포함해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.5.4. (동작기반 작동) 동작기반으로 작동하는 기능은 사용자 인터페이스 구성요소로 조작할 수 있고, 동작기반 기능을 비활성화할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						7.1. 가독성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">7.1.1. (기본 언어 표시) 주로 사용하는 언어를 명시해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						7.2. 예측 가능성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">7.2.1. (사용자 요구에 따른 실행) 사용자가 의도하지 않은 기능(새 창, 초점에 의한 맥락 변화 등)은 실행되지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">7.2.2. (찾기 쉬운 도움 정보) 도움 정보가 제공되는 경우, 각 페이지에서 동일한 상대적인 순서로 접근할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						7.3. 입력 도움
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">7.3.1. (오류 정정) 입력 오류를 정정할 수 있는 방법을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">7.3.2. (레이블 제공) 사용자 입력에는 대응하는 레이블을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">7.3.3. (접근 가능한 인증) 인증 과정은 인지 기능 테스트에만 의존해서는 안 된다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">7.3.4. (반복 입력 정보) 반복되는 입력 정보는 자동 입력 또는 선택 입력할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						8.1. 문법 준수
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">8.1.1. (마크업 오류 방지) 마크업 언어의 요소는 열고 닫음, 중첩 관계 및 속성 선언에 오류가 없어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						8.2. 웹 애플리케이션 접근성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">8.2.1. (웹 애플리케이션 접근성 준수) 콘텐츠에 포함된 웹 애플리케이션은 접근성이 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				
      			</div>
      		</div>
      	</div>
      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y}/kwcag_all_checklist.png`} alt="웹 접근성 체크리스트" />
      		<figcaption>
      			웹 접근성 체크리스트
      		</figcaption>
      	</figure>
      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y}/kwcag_all_checklist_mo.png`} alt="웹 접근성 체크리스트" />
      		<figcaption>
      			웹 접근성 체크리스트
      		</figcaption>
      	</figure>
      </section>

      <footer className="reference_box">
      	<strong className="tit"> - 웹 콘텐츠 접근성 참조</strong>
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
      		<li className="reference"><a href="https://www.w3.org/WAI/WCAG21/Techniques/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Techniques for WCAG 2.1</a></li>
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
      	</ul>
      </footer>
    </>
  )
}

export default CheckWcagReferencePage
