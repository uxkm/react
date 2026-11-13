'use client'

import { Page, PageLoading } from '@/comp'
import { FullMenuContent } from '@/widgets/b2b/common/FullMenu'
import { resolveSkeletonMode } from '@/config/skeleton'
import FullMenuSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "전체메뉴"
export const meta = { banner: false, header: false, footer: false, floating: false }

export default function B2bCommonFullMenuPage () {
  const skeletonId = 'b2b/common/full-menu'
  const skeletonMode = resolveSkeletonMode(skeletonId)
  return <>
    <Page page="common-full-menu" title={pageTitle} className="project-content widget-preview" />
    <PageLoading loading={false} skeletonId={skeletonId} skeletonMode={skeletonMode} skeleton={skeletonMode === 'manual' ? <FullMenuSkeleton /> : undefined} className="full-menu-content-preview">
      <FullMenuContent initialSection="business" />
    </PageLoading>
  </>
}
