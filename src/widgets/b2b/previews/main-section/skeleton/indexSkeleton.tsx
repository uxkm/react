import { Skeleton } from '@/comp/ui/Skeleton' // Skeleton 컴포넌트

/** 수동 스켈레톤 모드에서 사용하는 섹션 프리뷰 로딩 화면. */
export default function IndexSkeleton () {
  return (
    <div className="page-skeleton">
      <Skeleton variant="title" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </div>
  )
}
