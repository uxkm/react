function FolderCommonReference({ sectionTitle = "" }) {
  return (
    <>
      <footer className="reference_box">
        <strong className="tit">{sectionTitle} 참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a
              href="https://www.w3.org/TR/html52/dom.html#content-models"
              target="_blank"
              className="fas"
              title="새창열기"
            >
              W3C 문서
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories"
              target="_blank"
              className="fas"
              title="새창열기"
            >
              MDN 문서
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default FolderCommonReference;
