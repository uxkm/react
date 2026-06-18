function FolderCommonNote({ sectionTitle = "" }) {
  return (
    <>
      <blockquote className="uk_note" role="note">
      	<strong className="sound_only">{sectionTitle} 요약 설명</strong>
      	<ul>
      		<li>
      			<strong className="t_black">CSS Level 3</strong> 선택자(조합 선택자, 속성 선택자, 의사 클래스)를 활용하여 더 정밀한 요소 선택이 가능하며, 의사(가상) 요소로 HTML 요소에 없는 가상의 요소를 제어할 수 있습니다.
      		</li>
      		<li>
      			CSS 카운터로 자동 번호 매기기를 구현하고, 벤더 프리픽스로 실험적 기능을 활용합니다. IR 기법으로 이미지 대체텍스트를 제공하며, CSS 속성 선언 순서의 컨벤션을 이해합니다.
      		</li>
      		<li>
      			<strong className="t_black">CSS3 Module</strong>의 신규 속성(positioned, background and border, overflow, gradient, <code>calc()</code> 등)과 @규칙(<code>@import</code>, <code>@font-face</code>, <code>@media</code>)을 활용하여 웹 폰트 적용과 반응형/적응형 웹을 구현합니다.
      		</li>
      	</ul>
      </blockquote>
    </>
  )
}

export default FolderCommonNote
