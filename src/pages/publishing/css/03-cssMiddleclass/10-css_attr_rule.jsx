import { usePageMeta } from '@/components/common/PageMeta'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_attr_rule",
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
  title: "CSS 속성 선언 순서",
  description: "CSS 속성을 선언하는 데에는 정확한 순서는 없지만, 일반적인 규칙(컨벤션)이 있으며, 이는 개발자들 간의 암묵적인 약속으로 코드의 가독성과 협업 효율을 높이기 위한 관례입니다. 이 페이지에서는 CSS 속성 선언 순서의 일반적인 규칙, 위치 속성부터 디자인 속성까지의 순서 체계, 팀 또는 개인만의 규칙을 정하는 방법을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, css 속성 선언 순서, css 선언 규칙",
}

function CssAttrRulePage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			CSS 속성을 선언하는 데에는 정확한 순서는 없지만, 일반적인 규칙(컨벤션)이 있습니다.<br />
      			컨벤션은 개발자들 간의 암묵적인 약속으로, 코드의 가독성과 협업 효율을 높이기 위한 관례입니다.
      		</p>
      		<p className="mt_s">
      			가독성 측면에서 CSS 속성은 큰 흐름에서 작은 흐름 순으로 작성하는 것을 권장합니다.<br />
      			CSS는 시각적인 표현이므로 가장 중요한 것은 보이게 하느냐 숨기느냐입니다. 따라서 <code>display</code> 속성이 있다면 먼저 정의하고, 순차적으로 레이아웃에 필요한 속성 순으로 작성합니다.<br />
      			그 다음 디자인의 세부적인 제어를 위한 속성(보통 레이아웃과 거리가 먼 속성) 순으로 작성하는 것이 일반적입니다.
      		</p>
      		<p className="mt_s">
      			속성 순서를 완전히 지키지 않아도 되지만, 큰 틀 안에서 대략적으로 지키면 유지보수나 협업 시 어느 곳에 어떤 CSS 속성이 정의되어 있는지 빠르게 예측할 수 있어 코드의 가독성을 높일 수 있습니다.
      		</p>
      	</blockquote>
      	<p className="mt_l">
      		CSS 속성 선언 순서는 정해진 규칙은 없지만, CSS의 가독성과 프로젝트 협업을 위해 팀 또는 개인만의 규칙을 지키는 습관이 중요합니다.<br />
      		대표적인 CSS 속성 선언 순서 사례를 소개합니다.
      	</p>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">해당 문서에서 사용되는 CSS 속성 선언 순서</h2>
      		<div className="ol_lst mt_l">
      			<ol>
      				
      				<li><code>overflow</code> - 시각적인 속성(Visual effects)</li>
      				<li><code>visibility</code> - 시각적인 속성(Visual effects)</li>
      				<li><code>display</code> - 위치 속성(Visual formatting model)</li>
      				<li><code>position</code> - 위치 속성(Visual formatting model)</li>
      				<li><code>top</code> - 위치 속성(Visual formatting model)</li>
      				<li><code>right</code> - 위치 속성(Visual formatting model)</li>
      				<li><code>bottom</code> - 위치 속성(Visual formatting model)</li>
      				<li><code>left</code> - 위치 속성(Visual formatting model)</li>
      				<li><code>float</code> - 위치 속성(Visual formatting model)</li>
      				<li><code>clear</code> - 위치 속성(Visual formatting model)</li>
      				<li><code>width</code> - 박스 모델 속성(Box Model)</li>
      				<li><code>height</code> - 박스 모델 속성(Box Model)</li>
      				<li><code>margin</code> - 박스 모델 속성(Box Model)</li>
      				<li><code>padding</code> - 박스 모델 속성(Box Model)</li>
      				<li><code>border</code> - 박스 모델 속성(Box Model)</li>
      				<li><code>border-radius</code> - 박스 모델 속성(Box Model)</li>
      				<li><code>box-shadow</code> - 박스 모델 속성(Box Model)</li>
      				<li><code>background</code> - Background 속성</li>
      				<li><code>font</code> - Font 속성</li>
      				<li><code>text-align</code> - Text 속성</li>
      				<li><code>vertical-align</code> - Text 속성</li>
      				<li><code>letter-spacing</code> - Text 속성</li>
      				<li><code>word-spacing</code> - Text 속성</li>
      				<li><code>word-break</code> - Text 속성</li>
      				<li><code>word-wrap</code> - Text 속성</li>
      				<li><code>white-space</code> - Text 속성</li>
      				<li><code>text-indent</code> - Text 속성</li>
      				<li><code>text-decoration</code> - Text 속성</li>
      				<li><code>text-transform</code> - Text 속성</li>
      				<li><code>text-overflow</code> - Text 속성</li>
      				<li><code>text-shadow</code> - Text 속성</li>
      				<li><code>color</code> - Color 속성</li>
      				<li><code>outline</code> - 사용자 인터페이스 속성(User interface)</li>
      				<li><code>cursor</code> - 사용자 인터페이스 속성(User interface)</li>
      				<li><code>opacity</code> - 사용자 인터페이스 속성(User interface)</li>
      				<li><code>etc</code> - 위에 언급되지 않은 기타 나머지 속성들</li>
      			</ol>
      		</div>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn"><i className="t_green">Naver</i> Site CSS 속성 선언 순서</h2>
      		<div className="ol_lst mt_l">
      			<ol>
      				<li><code>display</code> - 표시(관련 속성: <code>visibility</code>)</li>
      				<li><code>overflow</code> - 넘침</li>
      				<li><code>float</code> - 흐름(관련 속성: <code>clear</code>)</li>
      				<li><code>position</code> - 위치(관련 속성: <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>, <code>z-index</code>)</li>
      				<li><code>width</code> & <code>height</code> - 크기</li>
      				<li><code>margin</code> & <code>padding</code>(그룹) - 간격</li>
      				<li><code>border</code>(그룹) - 테두리</li>
      				<li><code>background</code>(그룹) - 배경</li>
      				<li><code>font</code>(그룹) - 폰트(관련 속성: <code>color</code>, <code>letter-spacing</code>, <code>text-align</code>, <code>text-decoration</code>, <code>text-indent</code>, <code>vertical-align</code>, <code>white-space</code> 등)</li>
      				<li><code>animation</code> - 동작(관련 속성: <code>animation</code>, <code>transform</code>, <code>transition</code>, <code>marquee</code> 등)</li>
      				<li><b>기타</b> - 위에 언급되지 않은 나머지 속성들로 폰트의 관련 속성 이후에 선언하며, 기타 속성 내의 선언 순서는 무관합니다.</li>
      			</ol>
      		</div>
      		
      <CodeBlock title="Naver [CSS attr rule]" language="javascript" className="uk_gist_code_box mt_m">
      {`display: block;                                  /* 표시 */
      				visibility: hidden;                              /* 표시 */
      				overflow: hidden;                                /* 넘침 */
      				float: left;                                     /* 흐름 */
      				clear: both;                                     /* float해제 */
      				position: absolute;                              /* 위치 */
      				top: 0;                                          /* 상단 */
      				right: 0;                                        /* 우측 */
      				bottom: 0;                                       /* 하단 */
      				left: 0;                                         /* 좌측 */
      				z-index: 1;                                      /* 정렬 */
      				width: 200px;                                    /* 가로사이즈 */
      				height: 200px;                                   /* 세로사이즈 */
      				margin: 0;                                       /* 바깥 여백 */
      				padding: 0;                                      /* 안쪽 여백 */
      				border: none;                                    /* 테두리 */
      				background: #000 url('../a.png') no-repeat 0 0;  /* 색상, 이미지경로, 반복여부, x좌표, y좌표 이미지고정*/
      				font: italic small-caps bold 12px/1.5 'Gulim';   /* 기울임꼴, 소문자, 굵기 폰트사이즈/행간간격, 폰트서체 */
      				color: #000;                                     /* 폰트색상 */
      				text-decoration: none;                           /* 텍스트에 라인표시 효과 */
      				text-indent: -999px;                             /* 들여쓰기 */`}
      </CodeBlock>

      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn"><i className="t_blue">Daum</i> Site CSS 속성 선언 순서</h2>
      		<div className="ol_lst mt_l">
      			<ol>
      				<li><code>display</code> - 표시</li>
      				<li><code>overflow</code> - 넘침</li>
      				<li><code>float</code> - 흐름</li>
      				<li><code>position</code> - 위치</li>
      				<li><code>z-index</code> - 정렬</li>
      				<li><code>width</code> & <code>height</code> - 크기</li>
      				<li><code>margin</code> & <code>padding</code> - 간격</li>
      				<li><code>border</code> - 보더</li>
      				<li><code>font</code> - 폰트(축약형 사용 시)</li>
      				<li><code>font-style</code> - 폰트 스타일(축약형 비사용 시)</li>
      				<li><code>font-variant</code> - 폰트 소문자, 대문자(축약형 비사용 시)</li>
      				<li><code>font-weight</code> - 폰트 굵기(축약형 비사용 시)</li>
      				<li><code>font-size</code> - 폰트 사이즈(축약형 비사용 시)</li>
      				<li><code>line-height</code> - 폰트 행간 높이(축약형 비사용 시)</li>
      				<li><code>font-family</code> - 폰트(축약형 비사용 시)</li>
      				<li><code>background</code> - 배경</li>
      				<li><b>기타</b> - <code>color</code>, <code>text-decoration</code>, <code>text-indent</code>, <code>clear</code> 등</li>
      			</ol>
      		</div>
      		
      <CodeBlock title="Daum [CSS attr rule]" language="javascript" className="uk_gist_code_box mt_m">
      {`display: block;                                       /* 표시 */
      				overflow: hidden;                                     /* 넘침 */
      				float: left;                                          /* 흐름 */
      				position: absolute;                                   /* 위치 */
      				top: 0;                                               /* 상단 */
      				right: 0;                                             /* 우측 */
      				bottom: 0;                                            /* 하단 */
      				left: 0;                                              /* 좌측 */
      				z-index: 1;                                           /* 정렬 */
      				width: 200px;                                         /* 가로사이즈 */
      				height: 200px;                                        /* 세로사이즈 */
      				margin: 0;                                            /* 바깥 여백 */
      				padding: 0;                                           /* 안쪽 여백 */
      				border: none;                                         /* 테두리 */
      				font: italic small-caps bold 12px/1.5 'Gulim';        /* 기울임꼴, 소문자, 굵기 폰트사이즈/행간간격, 폰트서체 */
      				background: #000 url('../a.png') no-repeat 0 0 fixed; /* 색상, 이미지경로, 반복여부, x좌표, y좌표 이미지고정*/
      				color: #000;                                          /* 폰트색상 */
      				text-decoration: none;                                /* 텍스트에 라인표시 효과 */
      				text-indent: -999px;                                  /* 들여쓰기 */
      				clear: both;                                          /* float해제 */`}
      </CodeBlock>

      	</section>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/03_css_10.png`} alt="CSS 속성 선언순서" />
      		<figcaption className="reference">
      			CSS 속성 선언순서
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<strong className="tit">CSS 속성 선언순서 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://nuli.navercorp.com/sharing/fe/coding" target="_blank" rel="noreferrer" className="fas" title="새창열림">NHN Coding Convention</a></li>
      			<li className="reference"><a href="http://darum.daum.net/convention/css/css_convention" target="_blank" rel="noreferrer" className="fas" title="새창열림">Web Standards Darum</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssAttrRulePage
