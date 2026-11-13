'use client'

import { Link } from '@/lib/router' // 클라이언트 링크
import { Page, PageLayoutVisibility } from '@/comp' // Page · 레이아웃 표시 제어

/**
 * 오류 화면 — 헤더·푸터 없이 본문만.
 */
export const meta = {
  header: false,
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

      <div className="page-container error-status">
        <p className="error-status_code">Error</p>
        <h1 className="error-status_title">문제가 발생했습니다</h1>
        <p className="error-status_desc">
          화면을 표시하는 중 오류가 났습니다. 다시 시도하거나 메인으로 이동해 주세요.
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
          <Link
            className={typeof reset === 'function'
              ? 'error-status_btn'
              : 'error-status_btn error-status_btn_primary'}
            to="/"
          >
            메인으로 가기
          </Link>
        </div>
      </div>
    </>
  )
}
