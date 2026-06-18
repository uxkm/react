import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import { toggleContent } from '@/utils/toggleContent.js'

const PAGE_LAYOUT = {
  mainClass: "label-in-name",
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
  title: "레이블과 네임 | 웹 접근성 콘텐츠 제작 기법(\"운용의 용이성(Operable)\")",
  description: "웹 접근성 콘텐츠 제작 기법이란 장애 유무에 관계없이 모든 사용자가 웹 콘텐츠를 쉽게 이해하고 이용할 수 있도록 하는 설계하는 방법입니다. 이 페이지에서는 웹 접근성 콘텐츠 제작 기법 중 하나인 '레이블과 네임'에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성, 웹 접근성, 웹 접근성 콘텐츠 제작 기법, 한국형 웹 콘텐츠 접근성 지침 2.2, WCAG2.2, KWCAG2.2, 보조기술과의호환성, 접근성 테스트 도구 활용 점검방법, 스크린 리더, Jaws, NVDA, 센스리더, Sense Reader, 음성명령 사용자, 텍스트 음성 변환(TTS) 사용자, 시각장애인, 인지장애인, 비장애 사용자",
}

function LabelInNamePage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>










      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_black">
      				관련 지침 : 텍스트 또는 텍스트 이미지가 포함된 레이블이 있는 사용자 인터페이스 구성요소는
      				시각적으로 표시되는 해당 텍스트를 네임에 포함해야 한다.
      			</b><br />
      			사용자 인터페이스 구성요소(예: 메뉴, 링크, 버튼 등)에서 시각적으로 표시되는 텍스트를 네임에 제공하지 않은 경우,
      			보조기술이 해당 사용자 인터페이스 구성요소를 인식할 수 없기 때문에 네임에는 시각적으로 표시되는 텍스트를 제공해야 합니다.
      			또한, 네임과 텍스트를 다르게 제공한 경우,
      			해당 정보를 사용자(예: 음성명령 사용자)가 혼란을 겪을 수 있기 때문에 네임과 텍스트는 동일하게 제공하는 것이 좋습니다.
      			만약 동일하지 않게 제공할 경우, 텍스트는 네임의 앞부분에 제시하는 것이 좋습니다.<br />
      			단, 텍스트나 텍스트 이미지가 포함된 레이블이 없는 사용자 인터페이스 구성요소는 본 지침이 적용되지 않습니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 용어 설명</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>레이블</strong>
      				<p>
      					웹 페이지에서 사용자와 상호작용하는 요소에 표시되는 텍스트를 말합니다.<br />
      					예를 들어, 버튼에 &quot;제출&quot;이라고 쓰여 있거나, 입력창 옆에 &quot;이메일&quot;이라고 표시된 텍스트가 레이블입니다.
      					이러한 텍스트는 사용자가 해당 요소가 무엇을 하는지 이해하는 데 도움을 줍니다.<br />
      					참고로 <code>&lt;input&gt;</code> 요소와 짝을 이루는 <code>&lt;label&gt;</code> 요소만을 이야기하는 것이 아닙니다.
      				</p>
      			</li>
      			<li>
      				<strong>접근 가능한 이름 (네임)</strong>
      				<p>
      					보조 기술이 상호작용 가능한 웹 콘텐츠 구성 요소를 인식하고 설명하는 데 사용하는 이름입니다.
      					이 이름은 시각적으로 보이는 레이블과 동일하거나, 시각적으로 표시되는 레이블에 포함될 수 있습니다.
      				</p>
      			</li>
      			<li>
      				<strong>상호작용 요소</strong>
      				<p>
      					사용자 인터페이스 구성요소는 사용자가 특정 기능을 사용하기 위해 상호작용할 수 있는 버튼,
      					입력창, 링크 등과 같은 웹페이지 요소를 말합니다.
      				</p>
      			</li>
      			<li>
      				<strong>접근 가능한 이름 계산 알고리즘</strong>
      				<p>
      					접근 가능한 이름은 보조기술 사용자가 웹 콘텐츠의 구성 요소를 인식할 수 있도록 제공되는 중요한 정보입니다.
      					이를 계산하는 방법을 이해하는 것이 중요합니다.<br />
      					예를 들어, <code>aria-label</code>, <code>aria-labelledby</code>, <code>alt</code>, <code>title</code>,
      					<code>placeholder</code>와 같은 속성들이 중복으로 제공될 수 있는데,
      					이러한 경우에는 우선 순위를 가지고 계산합니다.
      				</p>
      				<dl className="mt_s dl_lst">
      					<dt className="t_blue font-14-important">[접근 가능한 이름 계산 방법 및 우선순위]</dt>
      					<dd>
      						<ol className="ol_lst mt_s gap-column-important-s">
      							<li>
      								<code className="weight-600">aria-labelledby</code>
      								<p>
      									다른 요소를 참조하여 이름을 제공하는 방식입니다.
      									가장 우선순위가 높으며, 강력한 접근 가능한 이름을 제공합니다.
      								</p>
      							</li>
      							<li>
      								<code className="weight-600">aria-label</code>
      								<p>
      									요소에 직접적으로 이름을 지정합니다. <code>aria-labelledby</code> 다음으로 높은 우선순위를 가집니다.
      								</p>
      							</li>
      							<li>
      								<strong>
      									요소 속성 (<code className="weight-600">value</code>, <code className="weight-600">alt</code>)
      								</strong>
      								<p>
      									<code>&lt;button&gt;</code>, <code>&lt;input type="submit"&gt;</code>, <code>&lt;input type="reset"&gt;</code>의 경우
      									<code>value</code> 속성,<br />
      									<code>&lt;input type="image"&gt;</code>, <code>&lt;img&gt;</code>,
      									<code>&lt;area&gt;</code> 요소의 경우 <code>alt</code> 속성이 접근 가능한 이름으로 사용됩니다.<br />
      									<code>aria-label</code>보다 낮은 우선순위를 갖습니다.
      								</p>
      							</li>
      							<li>
      								<strong>
      									텍스트 콘텐츠 또는 <code className="weight-600">label</code> 요소 연결
      								</strong>
      								<p>
      									요소에 직접 포함된 텍스트나 <code>label</code> 요소로 연결된 텍스트를 접근 가능한 이름으로 사용합니다.
      								</p>
      							</li>
      							<li>
      								<strong>
      									<code className="weight-600">title</code> 속성
      								</strong>
      								<p>
      									요소에 대한 툴팁 정보를 제공하는 <code>title</code> 속성은 위의 방법들이 없을 때 이름으로 사용됩니다.
      									우선순위는 낮습니다.
      								</p>
      							</li>
      							<li>
      								<strong>
      									<code className="weight-600">placeholder</code> 속성 (<code className="weight-600">&lt;input&gt;</code> 요소에 한함)
      								</strong>
      								<p>
      									입력 필드에 대해 안내용으로 제공되며, 가장 낮은 우선순위를 가집니다.
      								</p>
      							</li>
      							<li>
      								<strong>
      									모든 방법이 적용되지 않을 경우
      								</strong>
      								<p>
      									접근 가능한 이름이 없는 것으로 판단합니다.
      								</p>
      							</li>
      						</ol>
      					</dd>
      				</dl>
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 WCAG 2.2 성공 기준</h2>

      		<p className="mt_l success_criteria">
      			<a href="https://www.w3.org/TR/WCAG22/#label-in-name" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">2.5.3 Label in Name (Level A)</a>
      			<a href="https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">WAI - Understanding Label in Name</a>
      			<a href="https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">Accessible Name and Description Computation</a>
      			<a href="https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">MDN - aria-label</a>
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">기대효과</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				음성 입력(speech-input) 사용자는 시각적으로 표시되는 텍스트를 사용하여 사용자 인터페이스 구성요소를 제어할 수 있습니다.
      			</li>
      			<li>
      				텍스트 음성 변환(TTS: Text-to-Speech) 사용자는 보조기술을 통해 음성으로 전달되는 텍스트와
      				시각적으로 표시되는 텍스트가 일치하기 때문에 해당 사용자 인터페이스 구성요소를 혼란 없이 보다 쉽게 인지하고 활용할 수 있습니다.
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">필요성</h2>

      		<p className="mt_l">
      			음성 입력 사용자는 <b>화면에 보이는 레이블을 그대로 사용</b>하여 명령을 내립니다.<br />
      			따라서 보조기술 사용자가 <b>일관되고 명확하게 콘텐츠를 이해하고 상호작용</b>할 수 있도록,
      			<b>화면에 표시된 사용자 인터페이스(UI) 구성 요소의 눈에 보이는 레이블이
      				접근 가능한 이름(accessible name)과 일치하거나 포함되도록</b> 해야 합니다.
      		</p>
      		<ul className="mt_s indent_small dot_lst">
      			<li>
      				시각적 텍스트와 보조기술을 통한 음성 안내 간 불일치 시 사용자 혼란이 발생합니다.
      			</li>
      			<li>
      				동일 UI에서 시각적 텍스트는 “삭제”, 스크린 리더가 읽는 이름은 “제거”인 경우 → 사용자는 동일한 기능이라고 인식하기 어렵습니다.
      			</li>
      			<li>
      				일관된 이름(<code>label</code>과 <code>name</code>) 사용은 신뢰도, 사용성, 접근성 향상에 직결됩니다.
      			</li>
      		</ul>

      		<p className="mt_l">
      			웹 사이트나 애플리케이션을 개발할 때,
      			사용자 인터페이스 구성 요소에는 시각적인 레이블과 접근 가능한 이름이라는 두 가지 개념이 존재합니다.
      		</p>
      		<ul className="mt_s indent_small dot_lst">
      			<li>
      				<b>시각적인 레이블</b> : 사용자가 화면에서 볼 수 있는 텍스트.
      			</li>
      			<li>
      				<b>접근 가능한 이름</b> : 보조 기술(예: 화면 낭독 프로그램)이 인식하고 사용자에게 전달하는 이름.
      			</li>
      		</ul>

      		<p className="mt_l">
      			일반적으로 시각적 레이블이 HTML 표준 연결 방법(예: <code>label</code> 요소, <code>aria-labelledby</code> 속성 등)을 통해
      			사용자 인터페이스 구성 요소와 적절하게 연결되면, 레이블과 접근 가능한 이름이 일치합니다.<br />
      			그러나 연결이 올바르지 않거나, 시각적 레이블과 접근 가능한 이름이 일치하지 않을 경우, 다음과 같은 문제가 발생할 수 있습니다.
      		</p>
      		<ul className="mt_s indent_small dot_lst">
      			<li>
      				<b>화면 낭독 프로그램을 함께 사용하는 저시력 사용자 :</b><br />
      				시각적인 레이블과 스크린 리더가 읽어주는 이름이 다르면,
      				사용자는 올바른 버튼이나 링크를 찾았는지 확신할 수 없어 혼란을 겪게 됩니다.
      				특히 인지 장애를 복합적으로 가진 경우 그 정도가 더욱 심합니다.
      			</li>
      			<li>
      				<b>음성 명령 사용자 :</b><br />
      				화면에 보이는 레이블을 말했는데, 실제 요소의 접근 가능한 이름과 일치하지 않으면 음성 명령이 제대로 작동하지 않습니다.
      			</li>
      		</ul>

      		<p className="mt_l">
      			따라서 시각적 레이블과 접근 가능한 이름의 일치는 접근성을 보장하고 사용자 경험을 향상시키는 데 매우 중요합니다.<br />
      			다만, 디자인 제약이나 기술적 한계로 인해 완전한 일치가 어려운 경우도 있습니다.
      			이러한 경우에는 최소한 접근 가능한 이름에 시각적 레이블을 포함하고,
      			가능하면 해당 레이블을 접근 가능한 이름의 앞부분에 배치하는 것이 좋습니다.
      		</p>

      		<p className="mt_l">
      			예를 들어, &apos;<b>구매하기</b>&apos;라는 텍스트 버튼이 아래 예시 처럼 구성되면,
      			보조기기 사용자는 &apos;<b>선물하기</b>&apos;라는 잘못된 정보를 전달받아 원하는 작업을 수행할 수 없게 됩니다
      		</p>
      		
      <CodeBlock title="잘못된 레이블과 네임" language="javascript" className="uk_gist_code_box mt_ms">
      {`<a href="example.com" aria-label="선물하기">구매하기</a>`}
      </CodeBlock>

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
      					<p className="cell content">스크린 리더 사용 시, 시각 정보와 음성 정보 일치 필요</p>
      				</li>
      				<li>
      					<p className="cell value">인지장애 사용자</p>
      					<p className="cell content">UI 기능과 안내 음성 간 의미 일치로 혼란 방지</p>
      				</li>
      				<li>
      					<p className="cell value">비장애 사용자</p>
      					<p className="cell content">시각 정보와 동작 이름 간의 연계성 인식</p>
      				</li>
      			</ul>
      		</div>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">체크리스트</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				UI 구성 요소에 시각적으로 표시된 레이블이 있는가?
      			</li>
      			<li>
      				접근 가능한 네임(name)에 시각적 레이블이 그대로 포함되어 있는가?
      			</li>
      			<li>
      				<code>aria-label</code>, <code>aria-labelledby</code>, <code>alt</code>, <code>title</code>
      				등으로 name을 설정할 경우 시각 텍스트와 일치하는가?
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">테스트 방법</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				버튼, 링크, 입력필드 등의 시각적 텍스트를 확인합니다.
      			</li>
      			<li>
      				보조기술(스크린 리더) 사용 시 해당 UI 이름을 읽는지 확인합니다.
      			</li>
      			<li>
      				눈으로 보이는 텍스트와 음성으로 출력되는 텍스트가 동일한지 비교합니다.
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">QA 지표</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				시각적 텍스트와 네임 일치율
      			</li>
      			<li>
      				네임 누락 또는 불일치 항목 수
      			</li>
      			<li>
      				스크린 리더 사용자 테스트 일치도
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">개발방법</h2>

      		<article className="mt_l indent">
      			<h3 className="ml_mn t_blue">html 예시 – 시각 텍스트와 name 일치</h3>

      			
      <CodeBlock title="html - 레이블과 네임" language="javascript" className="uk_gist_code_box">
      {`<button aria-label="삭제">삭제</button> <!-- 일치 → 적합 -->`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">Vue 예시</h3>

      			
      <CodeBlock title="Vue - 레이블과 네임" language="javascript" className="uk_gist_code_box">
      {`<template>
      						<button aria-label="삭제">삭제</button>
      					</template>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">React 예시</h3>

      			
      <CodeBlock title="React - 레이블과 네임" language="javascript" className="uk_gist_code_box">
      {`function DeleteButton() {
      						return <button aria-label="삭제">삭제</button>;
      					}`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 기준</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				모든 시각적 레이블이 접근 가능한 이름에도 포함되어 있는가?
      			</li>
      			<li>
      				<code>aria-label</code>, <code>alt</code>, <code>title</code> 등을 사용할 경우 시각적 텍스트와 같은가?
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 방법</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				DOM 요소에 정의된 텍스트 및 <code>aria-*</code>, <code>alt</code> 속성을 확인합니다.
      			</li>
      			<li>
      				스크린 리더(NVDA, JAWS 등)로 네임을 읽는지 테스트합니다.
      			</li>
      			<li>
      				디자인 화면과 실제 UI 요소 간 텍스트 불일치 여부를 비교합니다.
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">준수/미준수 사례</h2>

      		<article className="mt_l indent">
      			<h3 className="ml_mn t_red">미준수 사례</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">접근 가능한 이름에 포함되지 않는 레이블</h4>
      				<p className="mt_s">
      					다음은 더 많은 콘텐츠를 불러올 수 있는 버튼이 눈에 보이는 레이블과 접근 가능한 이름이 서로 상이한 사례입니다.<br />
      					다음 사례에서 눈에 보이는 레이블은 “SHOW MORE”로 되어 있으나, 접근 가능한 이름은 “Load more Instagram posts”로 되어 있습니다.<br />
      					사람이 인식하는 레이블과 소프트웨어가 인식하게 되는 이름이 서로 다르기 때문에 음성 명령
      					사용자나 화면 낭독 프로그램 사용자는 컨트롤을 활성화시키지 못하거나 커뮤니케이션에서 혼란을 느끼기 쉽습니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/214/img-label-in-name05.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      				<dl className="mt_ms dl_lst">
      					<dt className="font-14-important t_black">개선 방법</dt>
      					<dd>
      						접근 가능한 이름을 눈에 보이는 레이블과 일치되도록 <code>aria-label</code>을 삭제하거나,
      						<code>aria-label</code>에 눈에 보이는 레이블이 포함되도록 수정하셔야 합니다.
      					</dd>
      				</dl>
      			</div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue" data-conlist-h4="true">준수 사례</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">눈에 보이는 텍스트 레이블과 일치하는 접근 가능한 이름 제공</h4>
      				<p className="mt_s">
      					접근 가능한 이름을 눈에 보이는 텍스트와 일치하게 제공해야 합니다.<br />
      					다음은 버튼의 접근 가능한 이름을 눈에 보이는 레이블과 일치하게 제공하는 가장 일반적인 사례입니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/214/img-label-in-name01.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">눈에 보이는 레이블을 포함하여 접근 가능한 이름 제공</h4>
      				<p className="mt_s">
      					눈에 보이는 레이블이 접근 가능한 이름에 포함되도록 제공해야 합니다.<br />
      					다음은 “상세 정보”라는 레이블을 가진 버튼이 있는 페이지의 사례입니다.
      					여러 목록에서 동일한 레이블의 버튼이 반복되기 때문에,
      					시각을 활용하기 어려운 사용자가 무엇에 대한 상세 정보 버튼인지 명확히
      					구분할 수 있도록 정보를 조합하여 접근 가능한 이름을 제공할 수 있습니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/214/img-label-in-name02.png`} alt="" /><br />
      					<img src={`${IMG.A11Y_TECH_W_O}/214/img-label-in-name03.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">텍스트가 기호를 상징하는 기호 문자로 사용된 경우</h4>
      				<p className="mt_s">
      					에디터에서 'B', 'I'와 같이 텍스트가 상징적인 의미를 가지는 경우,
      					'B'가 아닌 '굵게'로 해당 버튼이 제공하는 기능에 대해 접근 가능한 이름을 제공해야 합니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_O}/214/img-label-in-name04.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      			</div>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 영상</h2>
      		<div className="mt_xl youtube_box" style={{ '--padding-top': "56.25%" }}>
      			<iframe width="560" height="315" src="https://www.youtube.com/embed/7yznv92N96U?si=U4G9Sz6QXyKK0uDs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      		</div>
      		<p className="mt_ms">
      			출처 : 리베하얀
      		</p>
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">레이블과 네임 | 웹 접근성 콘텐츠 제작 기법(&quot;운용의 용이성(Operable)&quot;) 참조</strong>
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

export default LabelInNamePage
