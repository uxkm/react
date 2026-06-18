function FolderCommonReference({ sectionTitle = "" }) {
  return (
    <>
      <footer className="reference_box">
      	<strong className="tit">{sectionTitle} 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://gulpjs.com/" target="_blank" className="fas">gulpjs.com</a></li>
      		<li className="reference"><a href="https://nomadcoders.co/gulp-for-beginners/lectures/1631" target="_blank" className="fas">Gulp 90분 마스터하기 - 노마드 코더</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default FolderCommonReference
