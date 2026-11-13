'use client'

import { Page, PageLoading } from '@/comp' // comp
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder' // Publishing Placeholder 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import ListSkeleton from './skeleton/indexSkeleton' // List Skeleton 컴포넌트

export const pageTitle = "자료실 목록"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bInsightResourcesListPage () {
  const links = [
    {
      "to": "/b2b/insight/resources/detail",
      "label": "자료실 상세",
      "screenId": "B2B-INSIGHT-RESOURCES-DETAIL"
    }
  ]
  const skeletonId = 'b2b/insight/resources/list'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="insight-resources-list" title={pageTitle}  className="project-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <ListSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="insight"
          folderName="HR인사이트"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-INSIGHT-RESOURCES-LIST"
          pageUrl="/b2b/insight/resources/list"
          links={links}
        />

      </PageLoading>
    </>
  )
}
