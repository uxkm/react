'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import EstimateSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "법정교육 간편견적"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContentsMandatoryEstimatePage () {
  const links = [
    {
      "to": "/b2b/contents/mandatory/features",
      "label": "법정필수교육 서비스 특징",
      "screenId": "B2B-CONTENTS-MANDATORY-FEATURES"
    },
    {
      "to": "/b2b/contents/mandatory/courses",
      "label": "법정필수교육 대표 과정",
      "screenId": "B2B-CONTENTS-MANDATORY-COURSES"
    }
  ]
  const skeletonId = 'b2b/contents/mandatory/estimate'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-contents-mandatory-estimate" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <EstimateSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="contents"
          folderName="기업교육"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-CONTENTS-MANDATORY-ESTIMATE"
          pageUrl="/b2b/contents/mandatory/estimate"
          links={links}
        />

        <section id="category"><h2>STEP 01 카테고리 선택</h2><p>법정의무·산업안전보건·금융부문·공공부문·전체필수 카테고리 선택</p></section>
        <section id="courses"><h2>STEP 02 과정·인원 선택</h2><p>선택한 카테고리 과정 목록과 교육 인원 선택</p></section>
        <section id="quotation"><h2>STEP 03 정보 입력·견적서 받기</h2><p>담당자 정보와 동의 후 견적서 다운로드 또는 교육문의 연결</p></section>
      </PageLoading>
    </>
  )
}
