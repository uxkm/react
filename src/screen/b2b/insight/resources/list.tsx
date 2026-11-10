'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import ListSkeleton from './skeleton/listSkeleton'

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
      <Page page="b2b-insight-resources-list" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <ListSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
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
