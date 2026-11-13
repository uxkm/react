'use client'

import { Link } from '@/lib/router'
import { Header, Page, PageLayoutVisibility } from '@/comp'

/**
 * 오류 화면 크롬.
 */
export const meta = {
  header: true,
  footer: false
}

/**
 * @param {{ error?: Error & { digest?: string }, reset?: () => void }} props
 */
export default function ErrorView ({ error, reset }) {
  const detail = error?.digest
    ? `digest: ${error.digest}`
    : (error?.message || '')

  return (
    <>
      <Page page="error" title="Error" />
      <PageLayoutVisibility meta={meta} />
      <Header
        layout="inline"
        brand={<Link className="app-header_brand" to="/">퍼블리싱 목록</Link>}
        actions={<Link className="app-header_link" to="/pub">목록으로</Link>}
      />

      <div className="page-container error-status">
        <p className="error-status_code">Error</p>
        <h1 className="error-status_title">문제가 발생했습니다</h1>
        <p className="error-status_desc">
          화면을 표시하는 중 오류가 났습니다. 다시 시도하거나 목록으로 이동해 주세요.
        </p>
        {detail
          ? <pre className="error-status_detail">{detail}</pre>
          : null}
        <div className="error-status_actions">
          {typeof reset === 'function'
            ? (
              <button
                type="button"
                className="error-status_btn error-status_btn_primary"
                onClick={reset}
              >
                다시 시도
              </button>
              )
            : null}
          <Link className="error-status_btn" to="/pub">
            퍼블리시 목록
          </Link>
        </div>
      </div>
    </>
  )
}
