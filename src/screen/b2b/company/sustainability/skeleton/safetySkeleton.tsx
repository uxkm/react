import { Skeleton } from '@/comp/ui/Skeleton'

/** 이 화면의 디자인 확정 후 수정. manual 모드의 로딩 중에만 사용한다. */
export default function SafetySkeleton () {
  return (
    <div className="page-skeleton">
      <Skeleton variant="eyebrow" />
      <Skeleton variant="title" />
      <Skeleton variant="meta" />
      <Skeleton variant="text" />
      <Skeleton variant="text-sm" />
    </div>
  )
}
