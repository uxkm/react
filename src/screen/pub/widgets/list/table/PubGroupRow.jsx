/**
 * PubGroupRow
 * - 폴더(depth=0) / 그룹(depth=1) 공통 컨테이너 행 (+/- 토글 + 하위 목록)
 * - 리프는 PubScreenRow 로 렌더
 */
import { classNames } from '@/utils/style/classNames' // 조건부 className 조합
import { folderLabel } from '../lib/publishLabels' // folder Label
import { ellipsisAttr } from './useEllipsisTooltip.jsx' // ellipsis Attr
import {
  countLeaves, // count Leaves
  groupExpandKey, // group Expand Key
  groupLabel, // group Label
  isGroupNode // is Group Node
} from '../lib/publishTree' // 라이브러리/유틸 · publish Tree
import PubScreenRow, { screenRowKey } from './PubScreenRow' // Pub Screen Row 컴포넌트

export default function PubGroupRow ({
  folder,
  node,
  depth = 0,
  open,
  columns,
  showProgress,
  collapseLabel,
  expandLabel,
  isOpen,
  onToggle,
  onRemark
}) {
  const isRoot = depth === 0
  const childrenKey = isRoot ? 'depth2' : 'depth3'
  const children = node[childrenKey] || []
  const expandId = isRoot ? node.id : groupExpandKey(folder.id, node)
  const leafCount = countLeaves(node)
  const showToggle = isRoot || leafCount > 0
  const label = isRoot ? folderLabel(node) : groupLabel(node)
  const rootFolder = isRoot ? node : folder

  return (
    <li
      id={isRoot ? ('wbs-folder-' + node.id) : undefined}
      className={isRoot ? 'wbs-table_group' : 'wbs-table_subgroup'}
    >
      <div
        className={classNames(
          'wbs-table_row',
          isRoot ? 'level-0' : 'level-1',
          'status-' + (node.status || 'pending')
        )}
        role="row"
      >
        <div className="col-name" role="cell">
          <span className={classNames('name', { 'name_child': !isRoot })}>
            {showToggle && (
              <button
                type="button"
                className="toggle"
                aria-label={open ? collapseLabel : expandLabel}
                aria-expanded={open ? 'true' : 'false'}
                onClick={() => onToggle(expandId)}
              >{open ? '−' : '+'}</button>
            )}
            {showToggle
              ? (
                <button
                  type="button"
                  className="folder-name"
                  aria-expanded={open ? 'true' : 'false'}
                  onClick={() => onToggle(expandId)}
                >
                  <span className="folder-name-label" {...ellipsisAttr}>{label}</span>
                  <span className="wbs-badge is-muted is-count folder-count">{leafCount}</span>
                </button>
              )
              : (
                <span className="folder-name">
                  <span className="folder-name-label" {...ellipsisAttr}>{label}</span>
                  <span className="wbs-badge is-muted is-count folder-count">{leafCount}</span>
                </span>
              )}
          </span>
        </div>
        {columns.filter((col) => col.key !== 'name').map((col) => (
          <div key={col.key} className={'col-' + col.key} role="cell" />
        ))}
      </div>
      <ul
        className={isRoot ? 'wbs-table_depth2' : 'wbs-table_depth3'}
        style={open ? undefined : { display: 'none' }}
      >
        {isRoot
          ? children.map((child, idx) => (
            isGroupNode(child)
              ? (
                <PubGroupRow
                  key={branchRowKey(rootFolder, child, idx)}
                  folder={rootFolder}
                  node={child}
                  depth={1}
                  open={isOpen(groupExpandKey(rootFolder.id, child))}
                  columns={columns}
                  showProgress={showProgress}
                  collapseLabel={collapseLabel}
                  expandLabel={expandLabel}
                  isOpen={isOpen}
                  onToggle={onToggle}
                  onRemark={onRemark}
                />
              )
              : (
                <PubScreenRow
                  key={screenRowKey(rootFolder, child, idx)}
                  folder={rootFolder}
                  item={child}
                  level={1}
                  showProgress={showProgress}
                  onRemark={onRemark}
                />
              )
          ))
          : children.map((item, idx) => (
            <PubScreenRow
              key={screenRowKey(rootFolder, item, idx, node.id || node.name)}
              folder={rootFolder}
              item={item}
              level={2}
              showProgress={showProgress}
              onRemark={onRemark}
            />
          ))}
      </ul>
    </li>
  )
}

/** 키. 부모 목록에서 쓴다 */
export function branchRowKey (folder, group, index) {
  return folder.id + '-g-' + (group.id || group.name || index) + '-' + index
}
