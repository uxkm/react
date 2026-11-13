/**
 * 수동 페이지 스켈레톤.
 * page/list/form/card 프리셋으로 로딩 뼈대를 그린다.
 */
import type { HTMLAttributes, ReactNode } from 'react' // React
import { classNames } from '@/utils/classNames' // 조건부 className 조합
import { hasNodes } from '@/utils/react' // has Nodes
import { Skeleton } from './Skeleton' // Skeleton 컴포넌트

/** 수동 스켈레톤 모양. page 일반, list 목록, form 입력, card 카드 */
export type PageSkeletonType = 'page' | 'list' | 'form' | 'card'

/** 수동 스켈레톤이 받는 값. 줄 수, 카드 수 */
export interface PageSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  type?: PageSkeletonType
  showMeta?: boolean
  showLinks?: boolean
  linkCount?: number
  rows?: number
  fields?: number
  cards?: number
  /** 기본 프리셋 대신 직접 구성 */
  children?: ReactNode
}

/** 1부터 count 까지 번호. 스켈레톤 행을 반복할 때 쓴다 */
const range = (count: number) => Array.from({ length: Math.max(0, count) }, (_, i) => i + 1)

/**
 * 공통 스켈레톤 프리셋: page / list / form / card
 * 페이지마다 다르면 PageLoading 의 skeleton prop 에 노드를 전달
 */
export function PageSkeleton ({
  type = 'page',
  showMeta = true,
  showLinks = false,
  linkCount = 3,
  rows = 5,
  fields = 2,
  cards = 4,
  children,
  className,
  ...rest
}: PageSkeletonProps) {
  let preset: ReactNode = null

  if (type === 'page') {
    preset = (
      <>
        <div className="page-skeleton_eyebrow">
          <Skeleton variant="eyebrow" />
        </div>
        <div className="page-skeleton_title">
          <Skeleton variant="title" />
        </div>
        {showMeta && (
          <div className="page-skeleton_meta">
            <Skeleton variant="meta" />
          </div>
        )}
        <div className="page-skeleton_desc">
          <Skeleton variant="text" />
          <Skeleton variant="text-sm" />
        </div>
        {showLinks && (
          <div className="page-skeleton_links">
            {range(linkCount).map((n) => (
              <Skeleton key={'link-' + n} variant="chip" width={72 + (n % 3) * 16} />
            ))}
          </div>
        )}
      </>
    )
  } else if (type === 'list') {
    preset = (
      <>
        <div className="page-skeleton_title">
          <Skeleton variant="title" />
        </div>
        {range(rows).map((n) => (
          <div key={'row-' + n} className="page-skeleton_row">
            <Skeleton variant="avatar" />
            <div className="page-skeleton_row-body">
              <Skeleton variant="text" width="55%" />
              <Skeleton variant="text-sm" width="40%" />
            </div>
          </div>
        ))}
      </>
    )
  } else if (type === 'form') {
    preset = (
      <>
        <div className="page-skeleton_title">
          <Skeleton variant="title" width="200px" />
        </div>
        <div className="page-skeleton_form">
          {range(fields).map((n) => (
            <Skeleton key={'field-' + n} variant="meta" height="44px" />
          ))}
          <Skeleton variant="button" width="100%" height="44px" block />
        </div>
      </>
    )
  } else if (type === 'card') {
    preset = (
      <>
        <div className="page-skeleton_title">
          <Skeleton variant="title" />
        </div>
        <div className="page-skeleton_cards">
          {range(cards).map((n) => (
            <Skeleton
              key={'card-' + n}
              className="page-skeleton_card"
              width="100%"
              height="140px"
              block
            />
          ))}
        </div>
      </>
    )
  }

  return (
    <div
      {...rest}
      className={classNames('page-skeleton', 'page-skeleton_' + type, className)}
      aria-hidden="true"
    >
      {hasNodes(children) ? children : preset}
    </div>
  )
}

export default PageSkeleton
