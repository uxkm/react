'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import TabNavigationSkeleton from './skeleton/tab-navigationSkeleton'

export const pageTitle = "하위 탭 네비게이션"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonTabNavigationPage () {
  const links = []
  const skeletonId = 'b2b/common/tab-navigation'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-tab-navigation" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <TabNavigationSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
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
