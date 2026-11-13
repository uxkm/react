'use client'

import { Page, PageLoading } from '@/comp' // comp
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder' // Publishing Placeholder 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import TabNavigationSkeleton from './skeleton/indexSkeleton' // Tab Navigation Skeleton 컴포넌트

export const pageTitle = "하위 탭 네비게이션"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonTabNavigationPage () {
  const links = []
  const skeletonId = 'b2b/common/tab-navigation'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="common-tab-navigation" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <TabNavigationSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Widget"
          screenId="B2B-COMMON-TAB-NAVIGATION"
          pageUrl="/b2b/common/tab-navigation"
          links={links}
        />

      </PageLoading>
    </>
  )
}
