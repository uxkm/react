import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import { toggleContent } from '@/utils/toggleContent.js'

const PAGE_LAYOUT = {
  mainClass: "accessible-authentication",
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
  title: "접근 가능한 인증 | 웹 접근성 콘텐츠 제작 기법(\"이해의 용이성(Understandable)\")",
  description: "웹 접근성 콘텐츠 제작 기법이란 장애 유무에 관계없이 모든 사용자가 웹 콘텐츠를 쉽게 이해하고 이용할 수 있도록 하는 설계하는 방법입니다. 이 페이지에서는 웹 접근성 콘텐츠 제작 기법 중 하나인 '접근 가능한 인증'에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성, 웹 접근성, 웹 접근성 콘텐츠 제작 기법, 한국형 웹 콘텐츠 접근성 지침 2.2, WCAG2.2, KWCAG2.2, 접근 가능한 인증, 보조기술과의호환성, 접근성 테스트 도구 활용 점검방법, 스크린 리더, Jaws, NVDA, 센스리더, Sense Reader, 인지장애인, 시각장애인, 고령자, 보조기기 사용자",
}

function AccessibleAuthenticationPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>










      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_black">관련 지침 : 인증 과정은 인지 기능 테스트에만 의존해서는 안 된다.</b><br />
      			사용자 로그인 등과 같은 인증 과정이 인지 기능 테스트(예: 로그인을 위한 비밀번호 입력, 터치스크린 화면의 패턴 인식,
      			임의의 문자열 기억, 계산 수행, 특정 객체를 포함하고 있는 이미지 찾기 등)에 의존하는 경우,
      			인지 기능 테스트에 의존하지 않는 인증 방법을 적어도 하나 이상 제공해야 합니다.<br />
      			인지 기능 테스트에 의존하지 않고 인증을 하기 위해서는 브라우저가 아이디/비밀번호를 저장할 수 있도록 마크업된 서식,
      			공개 인증(OAuth: Open Authorization)을 통한 서드 파티, 신체(얼굴, 지문 등)나 물건(휴대폰, USB 등)을 이용한 인증 등을 이용할 수 있습니다.<br />
      			다만, 이미 사용자 자신에게 익숙하여 별도의 인지적인 노력을 필요로 하지 않는 사용자의 이름이나 이메일 주소,
      			전화번호는 인지 기능 테스트로 간주하지 않습니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">인지 기능 테스트란?</h2>

      		<p className="mt_l">
      			<b className="t_black">인지 기능 테스트</b>란, 사용자가
      			<b>기억하거나, 인식하거나, 추론하거나, 문제를 해결해야만 통과할 수 있는 과정</b>을 의미합니다.
      			이러한 테스트는 특히 인지 장애가 있는 사용자에게 <b>장벽</b>이 될 수 있으므로,
      			웹 접근성 지침에서는 <b>이러한 테스트만으로 인증을 요구하지 말 것을 권장</b>하고 있습니다.
      		</p>

      		<article className="mt_l indent">
      			<h3 className="ml_mn">인지 기능 테스트 예시</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-m">
      				<li>
      					<strong>비밀번호 입력</strong>
      					<p>
      						사용자가 기억한 비밀번호를 정확히 입력해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>이미지 선택 CAPTCHA</strong>
      					<p>
      						&quot;자동차가 있는 이미지를 모두 고르세요&quot; 같은 시각 인식과 판단이 필요합니다.
      					</p>
      				</li>
      				<li>
      					<strong>문자 인식 CAPTCHA</strong>
      					<p>
      						&quot;일그러진 문자를 읽고 입력하세요&quot; – 문자 인식과 입력이 요구됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>패턴 입력</strong>
      					<p>
      						정해진 순서의 패턴이나 그림을 기억해서 입력해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>간단한 산수 문제</strong>
      					<p>
      						&quot;5 + 3 = ?&quot; 같은 계산 능력이 요구됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>임의의 문자열 따라 입력하기</strong>
      					<p>
      						&quot;ABX7D2&quot; 같은 무작위 문자열을 보고 따라 써야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">관련 WCAG 2.2 성공 기준</h2>

      		<ul className="mt_l dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>3.3.8 접근 가능한 인증(최소) (레벨 AA)</strong>
      				<p>
      					인증 과정에서 인지 기능 테스트(예: 비밀번호 입력, 패턴 인식 등)에 의존하는 경우, 인지 기능을 사용하지 않는 하나 이상의 대체 수단을 제공해야 합니다. ​
      				</p>
      			</li>
      			<li>
      				<strong>3.3.9 접근 가능한 인증(향상) (레벨 AAA)</strong>
      				<p>
      					인증 과정에서 인지 기능 테스트를 완전히 배제하고, 다른 인증 수단을 제공해야 합니다.
      				</p>
      			</li>
      		</ul>
      		<p className="mt_ml success_criteria">
      			<a href="https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">3.3.8 접근 가능한 인증 (최소, Level AA)</a>
      			<a href="https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced" title="새창 열림" target="_blank" rel="noreferrer" className="fas weight-500 box_link external before_none">3.3.9 접근 가능한 인증 (향상, Level AAA)</a>
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">기대효과</h2>

      		<p className="mt_l">
      			사용자는 복잡한 기억이나 판단 없이도 로그인 및 인증 과정을 원활하게 진행할 수 있어,
      			<b>기억, 읽기, 숫자 계산 등에 어려움이 있는 사용자도 인지 능력에 상관없이 인증 과정을 수행할 수 있습니다.</b><br />
      			이를 통해 인지 장애를 포함한 다양한 사용자들이 서비스에 동등하게 접근할 수 있으며,
      			사용자 경험이 향상되고 인증 실패로 인한 이탈률이 줄어들어
      			더 많은 사용자층의 신뢰와 참여를 유도하는 긍정적인 효과를 가져옵니다.
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">필요성</h2>

      		<p className="mt_l">
      			가장 널리 사용되고 있는 인증 형태인 아이디(또는 이름, 이메일 등)와 비밀번호를 사용하는 방법은
      			사용자의 기억 능력에 의존해야 하기 때문에 인지 장애가 있는 사용자들은 어려움을 겪을 수 있습니다.<br />
      			또한 추가 인증 단계로 일회성 확인 코드를 따라 작성하거나 문제를 풀어야 하는 등의 방식이 제공되는 경우,
      			학습 능력이나 인지 능력에 어려움이 있는 사용자는 인증이 불가능할 수 있습니다.
      		</p>
      		<ul className="mt_ms dot_lst gap-column-important-sm">
      			<li>
      				인지 기능에 대한 부담 감소
      			</li>
      			<li>
      				보조 기술 사용자 배려
      			</li>
      			<li>
      				다양한 수단 제공 (메일 인증, 생체 인증 등)
      			</li>
      		</ul>
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
      					<p className="cell value">인지장애인</p>
      					<p className="cell content">비밀번호 기억, 보안 질문 응답이 어려움</p>
      				</li>
      				<li>
      					<p className="cell value">시각장애인</p>
      					<p className="cell content">CAPTCHA 이미지 해석 불가</p>
      				</li>
      				<li>
      					<p className="cell value">고령자</p>
      					<p className="cell content">복잡한 인증 구조 인지 어려움</p>
      				</li>
      				<li>
      					<p className="cell value">보조기기 사용자</p>
      					<p className="cell content">인증 흐름에 대한 시멘틱 안내 필요</p>
      				</li>
      			</ul>
      		</div>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">체크리스트</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				CAPTCHA에 대체 수단 제공 여부
      			</li>
      			<li>
      				autocomplete 등 저장된 인증 정보 활용 가능 여부
      			</li>
      			<li>
      				인증 흐름을 보조기술로 안내 가능한지
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">테스트 방법</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				스크린 리더 인증 흐름을 테스트합니다.
      			</li>
      			<li>
      				키보드만으로 인증 가능 여부를 확인합니다.
      			</li>
      			<li>
      				오류 메시지와 재입력 UX를 확인합니다.
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">QA 지표</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				인증 실패율
      			</li>
      			<li>
      				자동입력 필드 활용률
      			</li>
      			<li>
      				보조기기 사용자의 인증 완료 성공률
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">개발방법</h2>

      		<p className="mt_l">
      			인증 과정에서 보안과 접근성 사이의 균형을 유지하면서,
      			사용자의 인지 또는 학습 능력에 의존하지 않는 다양한 인증 방식의 대안을 제공해야 합니다.<br />
      			<b>예를 들어, 다음과 같은 대안을 고려해 볼 수 있습니다.</b>
      		</p>
      		<ul className="mt_m dot_lst info_lst gap-column-important-m">
      			<li>
      				<strong>생체인증</strong>
      				<p>
      					지문, 얼굴 인식 등 사용자가 별도로 기억하실 필요 없이 신체 정보를 활용하여 인증합니다.
      				</p>
      			</li>
      			<li>
      				<strong>기기 기반 인증</strong>
      				<p>
      					패스키, 인증 앱 등을 통해 간편하게 인증합니다.
      				</p>
      			</li>
      			<li>
      				<strong>자동 완성 지원</strong>
      				<p>
      					비밀번호 관리 프로그램이 입력 필드를 자동으로 채울 수 있도록 허용합니다.
      				</p>
      			</li>
      			<li>
      				<strong>복사/붙여넣기 허용</strong>
      				<p>
      					OTP나 비밀번호를 복사하여 붙여넣는 과정을 제한하지 않습니다.
      				</p>
      			</li>
      			<li>
      				<strong>링크 기반 인증</strong>
      				<p>
      					이메일 또는 SMS로 전달되는 링크를 클릭하여 인증을 완료하실 수 있도록 제공합니다.
      				</p>
      			</li>
      		</ul>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">html 예시 – 이메일 인증</h3>

      			
      <CodeBlock title="html - 접근 가능한 인증" language="javascript" className="uk_gist_code_box">
      {`<form>
      						<label for="email">이메일</label>
      						<input type="email" id="email" autocomplete="email" />
      						<button type="submit">인증 메일 보내기</button>
      					</form>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">CAPTCHA 대체 질문</h3>

      			
      <CodeBlock title="html - 접근 가능한 인증" language="javascript" className="uk_gist_code_box">
      {`<label for="question">5 더하기 3은?</label>
      					<input id="question" type="text" />`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">Vue 예시</h3>

      			
      <CodeBlock title="Vue - 접근 가능한 인증" language="javascript" className="uk_gist_code_box">
      {`<template>
      						<div>
      							<label>이메일</label>
      							<input v-model="email" autocomplete="email" />
      							<button @click="sendLoginLink">로그인 링크 전송</button>
      						</div>
      					</template>

      					<script setup>
      						import { ref } from 'vue';
      						const email = ref('');
      						const sendLoginLink = () => alert(\`\${email.value} 주소로 인증 메일을 전송했습니다.\`);
      					</script>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">React 예시</h3>

      			
      <CodeBlock title="React - 접근 가능한 인증" language="javascript" className="uk_gist_code_box">
      {`function LoginForm() {
      						const [email, setEmail] = React.useState('');
      						const sendLogin = () => alert(\`\${email}로 인증 메일 전송\`);
      						return (
      							<>
      								<label htmlFor="email">이메일</label>
      								<input
      									id="email"
      									type="email"
      									value={email}
      									onChange={e => setEmail(e.target.value)}
      									autoComplete="email"
      								/>
      								<button onClick={sendLogin}>로그인 링크 전송</button>
      							</>
      						);
      					}`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 기준</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				인증 방식이 기억 기반만인가?
      			</li>
      			<li>
      				CAPTCHA에 대체 수단 제공되는가?
      			</li>
      			<li>
      				시멘틱 구조로 스크린 리더가 흐름 안내 가능한가?
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">점검 방법</h2>

      		<ul className="mt_l dot_lst gap-column-important-sm">
      			<li>
      				보조기기(스크린 리더 등)를 사용하여 필드 및 버튼 안내가 제대로 이루어지는지 테스트합니다.
      			</li>
      			<li>
      				키보드 조작만으로 인증을 완료할 수 있는지 확인합니다.
      			</li>
      		</ul>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">준수/미준수 사례</h2>

      		<article className="mt_l indent">
      			<h3 className="ml_mn t_red" data-conlist-h4="true">미준수 사례</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">인지 기능 테스트만으로 인증</h4>
      				<p className="mt_s">
      					다음은 게시글 자동 등록을 방지하기 위한 인지 기능 테스트로, 사람이 맞는지를 인증하는 사례입니다.<br />
      					왜곡된 문자 그림을 보고 그대로 입력하거나, 빠르게 들려주는 음성을 듣고 기억하여 입력해야 하는 테스트이기 때문에,
      					난독증 등을 가진 일부 사용자분들께는 테스트를 통과하기가 매우 어려울 수 있습니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_U}/36/img-auth06.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      				<dl className="mt_ms dl_lst">
      					<dt className="font-14-important t_black">개선 방법</dt>
      					<dd>
      						사용자께서 패턴을 찾거나 해독하지 않아도 되는, 인지적 부담이 적은 대체 방법을 제공합니다.<br />
      						예를 들어 “나는 로봇이 아닙니다”와 같은 <b>ReCAPTCHA v3</b>를 고려해 볼 수 있습니다.
      					</dd>
      				</dl>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">캡챠 인식과 인지 기능을 같이 요구</h4>
      				<p className="mt_s">
      					인증 과정에서 문자 인식, 순서 기억, 시각적 탐색, 정확한 클릭 등 복잡한 인지 과정을 동시에 요구하는
      					CAPTCHA 방식은 기억력이나 주의력, 시각 처리 능력 등에 어려움이 있는 사용자분들께 심각한 접근성 장벽이 됩니다.<br />
      					문자가 왜곡되어 표현되고 배경에 시각적 노이즈가 많아 시각적 혼란을 유발하며,
      					스크린 리더를 사용하는 사용자에게는 인식이 불가능합니다.<br />
      					또한, 이러한 인지 기능 테스트 외에 대체 인증 수단이 제공되지 않아,
      					인지 장애나 시각 장애가 있는 사용자분들은 서비스 이용 자체가 제한될 수 있는 문제가 있습니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_U}/36/img-auth07.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      				<dl className="mt_ms dl_lst">
      					<dt className="font-14-important t_black">개선 방법</dt>
      					<dd>
      						시각 장애인도 가능한 인증 방법 및 사용자가 패턴을 찾거나 해독하지 않아도 되는 인지 부담이 적은 대체 방법을 제공합니다.
      					</dd>
      				</dl>
      			</div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue" data-conlist-h4="true">준수 사례</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">사용자 기기를 사용한 인증 방식 제공</h4>
      				<p className="mt_s">
      					사용자 기기를 사용하여 기기의 생체 인증, 패스키, 인증 애플리케이션 등을 통해 인증을 대체하는 방식을 제공합니다.
      					이는 기기에 저장된 패스키를 사용하여 인지 능력을 활용하지 않고도 인증을 받을 수 있도록 제공한 사례입니다.<br />
      					단, 이러한 방식으로 제공할 경우 QR 코드를 촬영하기 위해서는 시각을 활용하기 어려운 사용자분들을 위한
      					또 다른 대체 방안이 제공되어야 할 수 있습니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_U}/36/img-auth01.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">복사하여 붙여넣기, 자동 채움 기능 허용</h4>
      				<p className="mt_s">
      					비밀번호 관리 프로그램을 사용하여 비밀번호 입력 필드를 자동으로 채우는 기능을 허용함으로써
      					사용자가 기억력에 의존하지 않도록 합니다.<br />
      					추가 인증 과정에서 이메일로 OTP 코드를 발송하고 이를 작성하게 하는 등의 경우에도,
      					단순히 복사하여 붙여넣는 기능을 허용하여 사용자가 인지 능력에 의존하지 않도록 합니다.<br />
      					다음은 메일로 전송된 인증 코드를 복사하여 인증 코드 입력창에 붙여넣을 수 있도록 허용된 사례입니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_U}/36/img-auth02.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">oAuth를 사용하여 타사 공급자를 통한 인증 제공</h4>
      				<p className="mt_s">
      					소셜 미디어 계정이나 이메일 계정과 같이 익숙한 타사 공급자 계정을 사용하여 인증할 수 있도록 제공합니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_U}/36/img-auth03.png`} alt="" />
      					<figcaption>
      						[출처 : 웹 접근성을 고려한 콘텐츠 제작기법 개정판]
      					</figcaption>
      				</figure>
      			</div>

      			<div className="mt_l indent">
      				<h4 className="ml_mn">이메일 링크 인증</h4>
      				<p className="mt_s">
      					이메일 링크 인증은 사용자가 인지 능력을 과도하게 사용하지 않고도 계정에 접근할 수 있도록 돕는 인증 방식입니다.
      					기본적으로 사용자 이름과 비밀번호를 통한 로그인 방식을 제공하되,
      					비밀번호를 잊었을 경우 이메일을 통해 별도의 인증 링크를 제공합니다.
      					사용자가 자신의 이메일 주소를 입력하고 양식을 제출하면, 사이트는 해당 이메일로 인증 링크를 전송합니다.
      					사용자는 도착한 이메일 속 링크를 클릭하기만 하면 복잡한 절차 없이 곧바로 웹 사이트에 로그인됩니다.<br />
      					이 방법을 통해 사용자는 복잡한 비밀번호를 기억하거나 퍼즐을 푸는 등의 인지 부담을 덜 수 있으며,
      					별도의 인지 기능 테스트에 의존하지 않고도 안전하고 편리하게 인증 과정을 거칠 수 있습니다.
      					이러한 접근은 다양한 사용자분들께 편의를 제공하며, 접근 가능한 인증을 구현하는 한 사례가 됩니다.
      				</p>
      				<figure className="img_figure mt_ms">
      					<img src={`${IMG.A11Y_TECH_W_U}/36/img-auth04.png`} alt="" /><br />
      					<img src={`${IMG.A11Y_TECH_W_U}/36/img-auth05.png`} alt="" />
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
      			<iframe width="560" height="315" src="https://www.youtube.com/embed/GLdQvi-SWGQ?si=oTPR5wBO3yqWjpD5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      		</div>
      		<p className="mt_ms">
      			출처 : 리베하얀
      		</p>
      	</section>
      	


      <footer className="reference_box">
      	<strong className="tit">접근 가능한 인증 | 웹 접근성 콘텐츠 제작 기법(&quot;이해의 용이성(Understandable)&quot;) 참조</strong>
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

export default AccessibleAuthenticationPage
