/**
 * 페이지 스켈레톤 모드 설정
 *
 * - auto   : 실제 UI DOM 을 측정해 자동으로 뼈대 그림 (기본)
 * - manual : 페이지에서 넘긴 수동 스켈레톤(디자인 확정본) 사용
 *
 * 권장: 각 페이지 PageLoading 의 skeletonMode prop 으로 지정
 *   <PageLoading skeletonMode="manual" skeleton={<IndexSkeleton />} ... />
 *
 * 우선순위: PageLoading 의 skeletonMode prop > 여기 페이지 맵 > DEFAULT_MODE
 */

export type SkeletonMode = 'auto' | 'manual'

/** 전역 기본 모드 */
export const SKELETON_DEFAULT_MODE: SkeletonMode = 'auto'

/**
 * (선택) 여러 페이지를 한곳에서 덮어쓸 때만 사용.
 * 일반 화면은 PageLoading 의 skeletonMode prop 을 우선한다.
 *
 * key = PageLoading 의 skeletonId 또는 className
 */
export const SKELETON_PAGE_MODE: Record<string, SkeletonMode> = {
  // 예) 'main': 'manual',
}

/**
 * 이 화면의 스켈레톤 모드.
 * prop 이 auto/manual 이면 그걸 쓰고, 없으면 페이지 맵, 그것도 없으면 전역 기본값.
 */
export function resolveSkeletonMode (
  skeletonId?: string | null,
  propMode?: SkeletonMode | null
): SkeletonMode {
  if (propMode === 'auto' || propMode === 'manual') return propMode
  if (skeletonId && SKELETON_PAGE_MODE[skeletonId]) {
    return SKELETON_PAGE_MODE[skeletonId]
  }
  return SKELETON_DEFAULT_MODE
}
