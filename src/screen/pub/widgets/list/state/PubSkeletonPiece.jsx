/**
 * PubSkeletonPiece
 * - PubListSkeleton용 스켈레톤 뼈대 한 조각 (`wbs-skel_{mod}`)
 */
export default function PubSkeletonPiece ({ mod, style }) {
  return <span className={'wbs-skel wbs-skel_' + mod} style={style} />
}
