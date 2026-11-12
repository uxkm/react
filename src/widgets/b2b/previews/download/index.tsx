'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import DownloadSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "자료 다운로드 팝업"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonDownloadPage () {
  const links = []
  const skeletonId = 'b2b/common/download'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common-download" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <DownloadSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Layer"
          screenId="B2B-COMMON-DOWNLOAD"
          pageUrl="/b2b/common/download"
          links={links}
        />

      </PageLoading>
    </>
  )
}
