function FolderCommonNote({ sectionTitle = "" }) {
  return (
    <>
      <blockquote className="uk_note" role="note">
      	<strong className="sound_only">{sectionTitle} 요약 설명</strong>
      	<ul>
      		<li>
      			<b>접근성 콘텐츠 제작 기법</b>은 모든 사용자,
      			특히 장애가 있는 사용자가 웹과 모바일 콘텐츠에 접근하고 사용할 수 있도록 보장하는 방법이며,
      			웹 접근성 지침(WCAG: Web Content Accessibility Guidelines)과 모바일 접근성 표준을 따르는 것이 중요합니다.
      		</li>
      		<li className="t_blue weight-500">
      			<b>무인정보 단말기 접근성 제작 기법</b>이란,
      			장애인이나 고령자 등 모든 사용자가 키오스크와 같은 무인 단말기를 불편 없이 사용할 수 있도록
      			화면 구성, 입력 방식, 안내 음성, 높이 조절 등 다양한 요소를 고려해 접근성을 높이는 제작 방법을 말합니다.
      		</li>
      	</ul>
      </blockquote>
    </>
  )
}

export default FolderCommonNote
