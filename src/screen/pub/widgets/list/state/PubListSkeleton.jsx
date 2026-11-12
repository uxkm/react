/**
 * PubListSkeleton
 * - PubIndex 로딩 중 실제 레이아웃과 동일한 스켈레톤 UI
 * - aria 는 SSR·하이드레이션용 원문 고정 (PubSkeletonPiece 조각 조합)
 */
import { classNames } from '@/utils/classNames'
import PubSkeletonPiece from './PubSkeletonPiece'

export default function PubListSkeleton ({
  columns,
  showProgress,
  rowCount
}) {
  const visible = columns.filter((col) => !col.progress || showProgress)

  return (
    <div
      className="wbs-skeleton"
      aria-busy="true"
      aria-label="목록을 불러오는 중"
      suppressHydrationWarning
    >
      <header className="wbs-hero">
        <PubSkeletonPiece mod="eyebrow" />
        <PubSkeletonPiece mod="title" />
        <PubSkeletonPiece mod="desc" />
        {showProgress && (
          <div className="wbs-summary">
            <div className="wbs-summary-main">
              <PubSkeletonPiece mod="label" />
              <PubSkeletonPiece mod="value" />
            </div>
            <PubSkeletonPiece mod="bar" />
            <div className="wbs-skeleton__stats">
              {[1, 2, 3, 4, 5].map((n) => <PubSkeletonPiece key={'stat-' + n} mod="stat" />)}
            </div>
          </div>
        )}
      </header>

      <div className="wbs-sticky" aria-hidden="true">
        <div className="wbs-tabs-bar wbs-skeleton__tabs">
          {[1, 2, 3, 4].map((n) => <PubSkeletonPiece key={'tab-' + n} mod="tab" />)}
        </div>
        <div className="wbs-panel-head">
          <div className="wbs-skeleton__search">
            <PubSkeletonPiece mod="select" />
            <PubSkeletonPiece mod="input" />
          </div>
          <PubSkeletonPiece mod="switch" />
        </div>
      </div>
      <div className="wbs-filter-bar" aria-hidden="true">
        <PubSkeletonPiece mod="chip" style={{ width: '88px', height: '32px' }} />
        <PubSkeletonPiece mod="chip" style={{ width: '72px' }} />
        <PubSkeletonPiece mod="chip" style={{ width: '96px' }} />
      </div>

      <section className="wbs-panel" aria-hidden="true">
        <div className="wbs-table-wrap">
          <div className={classNames('wbs-table', { 'is-progress-hidden': !showProgress })}>
            <div className="wbs-table__head" role="presentation">
              {visible.map((col) => (
                <div key={col.key} className={'col-' + col.key}>
                  <PubSkeletonPiece mod="th" />
                </div>
              ))}
            </div>
            <ul className="wbs-table__list">
              {Array.from({ length: rowCount }, (_, i) => i + 1).map((n) => (
                <li key={'row-' + n} className="wbs-table__group">
                  <div className="wbs-table__row level-0">
                    <div className="col-name" role="presentation">
                      <PubSkeletonPiece mod="toggle" />
                      <PubSkeletonPiece mod="name" style={{ width: (40 + (n % 5) * 10) + '%' }} />
                    </div>
                    {visible.filter((col) => col.key !== 'name').map((col) => (
                      <div key={col.key} className={'col-' + col.key}>
                        <PubSkeletonPiece mod="cell" />
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
