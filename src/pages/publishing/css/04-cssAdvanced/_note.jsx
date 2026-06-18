function FolderCommonNote({ sectionTitle = "" }) {
  return (
    <>
      <blockquote className="uk_note" role="note">
      	<strong className="sound_only">{sectionTitle} 요약 설명</strong>
      	<ul>
      		<li>
      			<code>transform</code> 속성으로 요소를 이동, 회전, 크기 변경, 기울이기 등 2D/3D 변형을 수행하고,
      			<code>transition</code>과 <code>animation</code> 속성으로 CSS 속성 변화와 복잡한 애니메이션 효과를 구현합니다.
      		</li>
      		<li>
      			<strong className="t_black">Flexbox</strong>는 1차원 레이아웃 시스템으로, 컨테이너와 요소 속성을 활용하여
      			유연하고 반응형인 레이아웃을 구현합니다.
      		</li>
      		<li>
      			<strong className="t_black">CSS Grid</strong>는 2차원 레이아웃 시스템으로 행과 열을 동시에 제어하며,
      			<code>multi-column</code> 속성으로 신문과 같은 다단 레이아웃을 구현합니다.
      		</li>
      	</ul>
      </blockquote>
    </>
  )
}

export default FolderCommonNote
