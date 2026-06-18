import { usePageMeta } from '@/components/common/PageMeta'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_ir",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: false,
  contentList: true,
  depth3Last: false,
  bottomEditor: false
}

const PAGE_DATA = {
  title: "IR 기법",
  description: "IR(Image Replacement) 기법은 이미지 대체텍스트 제공을 위한 CSS 기법으로, 다양한 CSS 속성을 사용하여 텍스트를 이미지로 대체할 수 있으며, 주로 이미지 스프라이트(image sprite)와 함께 사용되어 여러 개의 이미지를 하나의 이미지로 합쳐서 관리하여 웹 페이지의 로딩 시간을 단축할 수 있습니다. 이 페이지에서는 이미지 스프라이트를 활용한 IR 기법의 다양한 구현 방법과 텍스트를 숨기고 이미지를 표시하는 CSS 기법들을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, 이미지 스프라이트(image sprite), IR(Image Replacement), ir 기법, image sprite",
}

function CssIrPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<strong>IR(Image Replacement) 기법</strong>은 이미지 대체텍스트 제공을 위한 CSS 기법으로, 다양한 CSS 속성을 사용하여 텍스트를 이미지로 대체할 수 있습니다.<br />
      			주로 <strong>이미지 스프라이트(image sprite)</strong>와 함께 사용되며, 여러 개의 이미지를 하나의 이미지로 합쳐서 관리하여 웹 페이지의 로딩 시간을 단축할 수 있습니다.
      		</p>
      		<p className="mt_ms">
      			이미지 스프라이트를 사용하면 이미지를 다운받기 위한 서버 요청을 단 몇 번으로 줄일 수 있어, 모바일 환경과 같이 한정된 자원을 사용하는 플랫폼에서 효과적입니다.<br />
      			또한 많은 이미지 파일을 관리하는 대신 몇 개의 스프라이트 이미지 파일만을 관리하면 되므로 매우 간편합니다.
      		</p>
      	</blockquote>

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.CSS}/cssMiddleclass/uxkm_sprite.svg`} alt="이미지 스프라이트 사용 방법" />
      		<figcaption className="t_666">[스프라이트 이미지를 이용한 IR 기법]</figcaption>
      	</figure>

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.CSS}/cssMiddleclass/uxkm_sprite.png`} alt="이미지 스프라이트 사용 예시" />
      		<figcaption className="t_666">[이미지 스프라이트 사용 예시]</figcaption>
      		<p className="t_blue">w:48px h:48px / margin:10px / 총사이즈 : w:106px h:154px</p>
      	</figure>

      	<section className="view_editor edit_code mt_xxl">
      		
      		<h2 className="ve_tit">Sprite Image 활용 예제</h2>
      		<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.5.ir/3.5.ir.html" className="uk_editor indent mt_ml min_height_400 mb_result_height_300" mode="htmlmixed" theme="moxer" browser="default" result minHeight="400px" mbResultHeight="300px" />
      </Suspense>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">Daum CSS Convention</h2>
      		<p className="mt_l">아래 방법은 <i className="underline">Daum CSS Convention</i>에서 명시한 방법입니다.</p>

      		
      		<article className="indent_max mt_l">
      			<h3 className="ml_mn"><i className="t_blue">Phark Method</i> (권장)</h3>
      			<p className="mt_m">
      				이미지로 대체할 요소에 배경 이미지를 설정하고, 글자는 <code>text-indent</code>를 이용하여 화면 바깥으로(<code>-9999px</code>만큼 들여쓰기) 빼내어 보이지 않게 하는 방법입니다.
      			</p>
      			<div className="ol_lst mt_m">
      				<ol>
      					<li className="line_code font14">
      						<strong className="mb_sm">장점</strong>
      						<p>스크린 리더기 읽어줌</p>
      						<p>추가적인 요소 사용 안 함</p>
      					</li>
      					<li className="line_code font14 mt_s">
      						<strong className="mb_sm">단점</strong>
      						<p>CSS on / Image off 시 텍스트 안보임</p>
      					</li>
      				</ol>
      			</div>
      			
      <CodeBlock title="Daum CSS Convention [Phark Method]" language="javascript" className="uk_gist_code_box mt_m">
      {`<button type="button">검색</button>
      					<a href="#">검색</a>

      					<style>
      						button {
      							display:block; width:49px; height:36px; margin:0; padding:0;
      							text-indent:-9999px; /* 들여쓰기를 -9999px만큼 지정하여 글자를 버튼 밖으로 숨김 처리 */
      							background:url('btn_search.gif') no-repeat;
      							border:none;
      						}
      						a {
      							display:block; overflow:hidden; float:left; width:49px; height:36px;
      							text-indent:-9999px; /* 들여쓰기를 -9999px만큼 지정하여 글자를 버튼 밖으로 숨김 처리 */
      							background:url('btn_search.gif') no-repeat;
      						}
      					</style>`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">WA IR</i> (권장)</h3>
      			<p className="mt_m">
      				이미지로 대체할 요소에 배경 이미지를 설정하고, 글자는 <code>&lt;span&gt;</code> 태그로 감싼 후 <code>position:relative</code>와 <code>z-index:-1</code>을 이용하여 화면에 보이지 않게 처리합니다.
      			</p>
      			<div className="ol_lst mt_m">
      				<ol>
      					<li className="line_code font14">
      						<strong className="mb_sm">장점</strong>
      						<p>스크린 리더기 읽어줌</p>
      						<p>CSS on / Image off 시 텍스트 보임</p>
      					</li>
      					<li className="line_code font14 mt_s">
      						<strong className="mb_sm">단점</strong>
      						<p>추가적인 요소 사용함</p>
      						<p>position 속성 사용(성능 관련 이슈)</p>
      					</li>
      				</ol>
      			</div>
      			
      <CodeBlock title="Daum CSS Convention [WA IR]" language="javascript" className="uk_gist_code_box mt_m">
      {`<button type="button"><span>검색</span></button>
      					<a href="#"><span>검색</span></a>

      					<style>
      						button {
      							width:49px; height:36px; margin:0; padding:0;
      							background:url('btn_search.gif') no-repeat;
      							border:none;
      						}
      						a {
      							display:block; width:49px; height:36px;
      							text-decoration:none;
      							background:url('btn_search.gif') no-repeat;
      						}
      						span {
      							position:relative; z-index:-1;
      						}
      					</style>`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">Farhner Image Replacement</i></h3>
      			<p className="mt_m">
      				이미지로 대체할 요소에 배경 이미지를 설정하고, 글자는 <code>&lt;span&gt;</code> 태그로 감싼 후 <code>display:none</code>을 이용하여 화면에 보이지 않게 처리합니다.
      			</p>
      			<div className="ol_lst mt_m">
      				<ol>
      					<li className="line_code font14">
      						<strong className="mb_sm">장점</strong>
      						<p>없음</p>
      					</li>
      					<li className="line_code font14 mt_s">
      						<strong className="mb_sm">단점</strong>
      						<p>스크린 리더기 안읽어줌</p>
      						<p>CSS on / Image off 시 텍스트 안보임</p>
      						<p>추가적인 요소 사용함</p>
      					</li>
      				</ol>
      			</div>
      			
      <CodeBlock title="Daum CSS Convention [Farhner Image Replacement]" language="javascript" className="uk_gist_code_box mt_m">
      {`<button type="button"><span>검색</span></button>
      					<a href="#"><span>검색</span></a>

      					<style>
      						button {
      							width:49px; height:36px; margin:0; padding:0;
      							background:url('btn_search.gif') no-repeat;
      							border:none;
      						}
      						a {
      							display:block; width:49px; height:36px;
      							text-decoration:none;
      							background:url('btn_search.gif') no-repeat;
      						}
      						span {
      							display:none;
      						}
      					</style>`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">Dwyer Method</i></h3>
      			<p className="mt_m">
      				이미지로 대체할 요소에 배경 이미지를 설정하고, 글자는 <code>&lt;span&gt;</code> 태그로 감싼 후 <code>width</code>와 <code>height</code>를 각각 <code>0</code>으로 하여 글자를 숨기는 방법입니다.
      			</p>
      			<div className="ol_lst mt_m">
      				<ol>
      					<li className="line_code font14">
      						<strong className="mb_sm">장점</strong>
      						<p>스크린 리더기 읽어줌</p>
      					</li>
      					<li className="line_code font14 mt_s">
      						<strong className="mb_sm">단점</strong>
      						<p>CSS on / Image off 시 텍스트 안보임</p>
      						<p>추가적인 요소 사용함</p>
      					</li>
      				</ol>
      			</div>
      			
      <CodeBlock title="Daum CSS Convention [Dwyer Method]" language="javascript" className="uk_gist_code_box mt_m">
      {`<button type="button"><span>검색</span></button>
      					<a href="#"><span>검색</span></a>

      					<style>
      						button {
      							width:49px; height:36px; margin:0; padding:0;
      							background:url('btn_search.gif') no-repeat;
      							border:none;
      						}
      						a {
      							display:block; width:49px; height:36px;
      							text-decoration:none;
      							background:url('btn_search.gif') no-repeat;
      						}
      						span {
      							display:block; overflow:hidden;
      							width:0; height:0;
      						}
      					</style>`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">Gilder/Levin Method</i></h3>
      			<p className="mt_m">
      				이미지로 대체할 요소 내에 빈 <code>&lt;span&gt;</code> 태그를 추가하여 배경 이미지를 설정하고, <code>position:absolute</code> 스타일을 이용하여 글자를 덮는 방법입니다.
      			</p>
      			<div className="ol_lst mt_m">
      				<ol>
      					<li className="line_code font14">
      						<strong className="mb_sm">장점</strong>
      						<p>스크린 리더기 읽어줌</p>
      						<p>추가적인 요소 사용안함</p>
      					</li>
      					<li className="line_code font14 mt_s">
      						<strong className="mb_sm">단점</strong>
      						<p>CSS on / Image off 시 텍스트 안보임</p>
      						<p>IE 5에서 제대로 출력하기 위해 <code>button</code> 요소를 제외한 다른 요소에서는 Box model hack을 사용해야 함</p>
      					</li>
      				</ol>
      			</div>
      			
      <CodeBlock title="Daum CSS Convention [Gilder/Levin Method]" language="javascript" className="uk_gist_code_box mt_m">
      {`<button type="button"><span></span>검색</button>
      					<a href="#"><span></span>검색</a>

      					<style>
      						button {
      							display:block; position:relative;
      							width:49px; height:36px;
      							background-color:transparent;
      							cursor:pointer;
      							border:0;
      						}
      						button span {
      							position:absolute; top:0; left:0;
      							width:100%; height:100%;
      							background:url('http://icon.daum-img.net/top/2008/btn_search.gif') no-repeat 0 0;
      						}
      						a {
      							display:block; position:relative;
      							width:49px; height:36px;
      						}
      						a span {
      							position:absolute; top:0; left:0;
      							width:100%; height:100%;
      							background:url('http://icon.daum-img.net/top/2008/btn_search.gif') no-repeat 0 0;
      						}
      					</style>`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">Leahy/Langridge Method</i></h3>
      			<p className="mt_m">
      				이미지로 대체할 요소에 배경 이미지를 설정하고, <code>height: 0</code>과 <code>padding-top</code>(이미지의 높이 값)을 지정하여 글자를 아래로 숨기는 방법입니다.<br />
      				<code>height: 0</code>으로 지정하여 글자를 숨기려면 반드시 <code>overflow: hidden</code>이 선언되어야 합니다.
      			</p>
      			<div className="ol_lst mt_m">
      				<ol>
      					<li className="line_code font14">
      						<strong className="mb_sm">장점</strong>
      						<p>스크린 리더기 읽어줌</p>
      						<p>CSS on / Image off 시 텍스트 보임</p>
      					</li>
      					<li className="line_code font14 mt_s">
      						<strong className="mb_sm">단점</strong>
      						<p>추가적인 요소 사용함</p>
      						<p>투명한 이미지인 경우 텍스트가 비칠 수 있음</p>
      						<p>파이어폭스 2.0/크롬/IE 5.0에서 <code>&lt;button&gt;</code> 요소와 <code>&lt;span&gt;</code> 요소의 위치가 약간 밀림</p>
      					</li>
      				</ol>
      			</div>
      			
      <CodeBlock title="Daum CSS Convention [Leahy/Langridge Method]" language="javascript" className="uk_gist_code_box mt_m">
      {`<button type="button">검색</button>
      					<a href="#">검색</a>

      					<style>
      						button {
      							display:block; overflow:hidden;
      							width:49px; height:0; padding:36px 0 0 0;
      							background:url('btn_search.gif') no-repeat;
      							border:0;
      						}
      						a {
      							display:block; overflow:hidden;
      							width:49px; height:0; padding:36px 0 0 0;
      							background:url('btn_search.gif') no-repeat;
      						}
      					</style>`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">span padding : applied Method</i></h3>
      			<p className="mt_m">
      				이미지로 대체할 요소에 배경 이미지를 설정하고, 글자는 <code>&lt;span&gt;</code>으로 감싼 후 블록화하여 <code>padding-top</code>의 값을 이미지의 높이만큼 주어 글자를 아래로 밀어내어 숨기는 방법입니다.
      			</p>
      			<div className="ol_lst mt_m">
      				<ol>
      					<li className="line_code font14">
      						<strong className="mb_sm">장점</strong>
      						<p>스크린 리더기 읽어줌</p>
      					</li>
      					<li className="line_code font14 mt_s">
      						<strong className="mb_sm">단점</strong>
      						<p>추가적인 요소 사용함</p>
      						<p>CSS on / Image off 시 텍스트 안보임</p>
      					</li>
      				</ol>
      			</div>
      			
      <CodeBlock title={"Daum CSS Convention [span padding : applied Method]"} language="javascript" className="uk_gist_code_box mt_m">
      {`<button type="button"><span>검색</span></button>
      					<a href="#"><span>검색</span></a>

      					<style>
      						button {
      							display:block; overflow:hidden;
      							width:49px; height:36px; margin:0; padding:0;
      							border:none;
      							background:url('btn_search.gif') no-repeat;
      						}
      						a {
      							display:block; overflow:hidden;
      							width:49px; height:36px;
      							background:url('btn_search.gif') no-repeat;
      						}
      						span {
      							display:block;
      							padding-top:40px
      						}
      					</style>`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">script replace Method</i></h3>
      			<p className="mt_m">
      				자바스크립트를 이용하여 이미지로 대체할 요소의 텍스트를 <code>&lt;img&gt;</code> 태그로 교체하는 방법입니다.
      			</p>
      			<div className="ol_lst mt_m">
      				<ol>
      					<li className="line_code font14">
      						<strong className="mb_sm">장점</strong>
      						<p>스크린 리더기 읽어줌</p>
      						<p>CSS on / Image off 시 텍스트 보임</p>
      					</li>
      					<li className="line_code font14 mt_s">
      						<strong className="mb_sm">단점</strong>
      						<p>추가적인 요소 사용함</p>
      						<p>이미지 절대경로를 포함한 <code>class</code>명과 별도의 스크립트를 필요로 함</p>
      						<p>파이어폭스 2.0/크롬/IE 5.0에서 <code>&lt;button&gt;</code> 요소 안의 <code>&lt;img&gt;</code> 요소의 위치가 약간 밀림</p>
      					</li>
      				</ol>
      			</div>
      			
      <CodeBlock title="Daum CSS Convention [script replace Method]" language="javascript" className="uk_gist_code_box mt_m">
      {`<button type="button" id="btn_button">검색</button>
      					<a href="#" id="btn_a">검색</a>

      					<style>
      						button {
      							width:49px; height:36px; margin:0; padding:0;
      							border:none;
      							background-image:none; background-color:transparent;
      						}
      						button img {
      							display:block;
      						}
      						a img {
      							border:0;
      						}
      					</style>

      					<script>
      						function replaceImg() {
      							var replaceImgButton = document.getElementById("btn_button");
      							replaceImgButton.innerHTML = "<img src=\\"" + replaceImgButton.className + ".gif\\" alt=\\"" + replaceImgButton.innerHTML + "\\" />";
      							var replaceImgA = document.getElementById("btn_a");
      							replaceImgA.innerHTML = "<img src=\\"" + replaceImgA.className + ".gif\\" alt=\\"" + replaceImgA.innerHTML + "\\" />";
      						}
      						window.onload = replaceImg;
      					</script>`}
      </CodeBlock>

      		</article>
      	</section>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/03_css_05.png`} alt="CSS IR 기법" />
      		<figcaption className="reference">
      			CSS IR 기법
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<strong className="tit">IR 기법 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="http://ui.daum.net/convention/css/css_ir" target="_blank" rel="noreferrer" className="fas" title="새창열림">DAUM Web Standard Tech</a></li>
      			<li className="reference"><a href="https://developer.yahoo.com/performance/rules.html?guccounter=1&guce_referrer=aHR0cHM6Ly91eGttLmdpdGh1Yi5pby91a25jcy91eGttLWNzcy5odG1s&guce_referrer_sig=AQAAAMjaw5jTFsTIWzKgs2Mq5hJ4JhcdjVta89Jww48JEpRMYv5YXGN_2tgmOHjb2Fg5XJvbc5Gux3H0vu1bZPBNVusWU512JaMEafJjycq-iuZUDXmihIytDWa8QWk6P0f-67o8V0f2snf-PYdGb7Bg6UpohK3QHW81YFvUWhs7JQxn#opt_sprites" target="_blank" rel="noreferrer" className="fas" title="새창열림">Yahoo Developer</a></li>
      			<li className="reference"><a href="https://developer.yahoo.com/performance/rules.html#opt_sprites" target="_blank" rel="noreferrer" className="fas" title="새창열림">Yahoo Developer</a></li>
      			<li className="reference"><a href="https://www.toptal.com/developers/css/sprite-generator/" target="_blank" rel="noreferrer" className="fas" title="새창열림">toptal CSS Sprites Generator</a></li>
      			<li className="reference"><a href="https://www.giftofspeed.com/sprite-generator/" target="_blank" rel="noreferrer" className="fas" title="새창열림">giftofspeed CSS Sprites Generator</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssIrPage
