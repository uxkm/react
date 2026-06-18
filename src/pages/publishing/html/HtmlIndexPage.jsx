import { Link } from 'react-router-dom'
import { htmlMigrationMap } from '../../../data/htmlMigrationMap.js'

function HtmlIndexPage() {
  return (
    <section className="indent html-index-page">
      <header>
        <p className="sound_only">Publishing &gt; HTML</p>
        <h1>HTML 폴더 마이그레이션</h1>
        <p>기존 `publishing/html` 구조를 React 페이지로 순차 전환합니다.</p>
      </header>

      <div className="html-category-grid">
        {htmlMigrationMap.map((section) => (
          <article key={section.category} className="html-category-card">
            <h2>{section.title}</h2>
            <p>{section.category}</p>
            <ul>
              {section.pages.map((page) => (
                <li key={page.slug}>
                  <Link to={`/publishing/html/${section.category}/${page.slug}`}>
                    {page.title}
                    {page.converted ? ' (완료)' : ''}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">주의사항</h2>
        <ul className="dot_lst mt_l">
          <li>마이그레이션 완료 표시는 실제 페이지 품질 점검(내용/예제/메타)과 함께 갱신해야 정확합니다.</li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="html index">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">지원</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src="/images/html/html_index.png" alt="HTML 마이그레이션 인덱스" />
        <figcaption>HTML 마이그레이션 인덱스</figcaption>
      </figure>
    </section>
  )
}

export default HtmlIndexPage
