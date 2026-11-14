/**
 * PubProgressSummary
 * - 상단 전체 진행률 바와 상태별(완료/진행중/대기/지연) 건수 요약
 */
import { classNames } from '@/utils/style/classNames' // 조건부 className 조합
import { statusColor } from '../lib/publishLabels' // status Color

export default function PubProgressSummary ({
  label,
  tabLabel,
  progress,
  stats
}) {
  return (
    <div className="wbs-summary">
        <div className="wbs-summary-main">
          <span className="wbs-summary-label">
            {label}{' '}
            <span className="wbs-tag is-primary">{tabLabel}</span>
          </span>
          <strong className="wbs-summary-value">{progress}%</strong>
        </div>
        <div
          className="wbs-progress"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label={label}
        >
          <span className="wbs-progress_bar" style={{ width: progress + '%' }} />
        </div>
        <ul className="wbs-stats">
          {stats.map((stat) => (
            <li key={stat.key}>
              <span
                className={classNames('wbs-badge is-dot', 'is-' + statusColor(stat.key))}
                aria-label={stat.label}
              />{' '}
              {stat.label} {stat.count}
            </li>
          ))}
        </ul>
    </div>
  )
}
