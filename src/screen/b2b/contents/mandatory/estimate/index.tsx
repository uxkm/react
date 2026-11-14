'use client'

import { Page, PageLoading } from '@/comp' // comp
import ComingSoon from '@/widgets/b2b/common/ComingSoon' // Coming Soon 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import EstimateSkeleton from './skeleton/indexSkeleton' // Estimate Skeleton 컴포넌트

export const pageTitle = "간편 견적받기"

/** 미작업 화면 — ComingSoon. 시안 반영 시 본문을 교체한다. */
export default function B2bContentsMandatoryEstimatePage () {
  const skeletonId = 'b2b/contents/mandatory/estimate'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="contents-mandatory-estimate" title={pageTitle}  className="p-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <EstimateSkeleton /> : undefined}
        className="page-container"
      >
        <ComingSoon />

        <section id="category"><h2>STEP 01 카테고리 선택</h2><p>법정의무·산업안전보건·금융부문·공공부문·전체필수 카테고리 선택</p></section>
        <section id="courses"><h2>STEP 02 과정·인원 선택</h2><p>선택한 카테고리 과정 목록과 교육 인원 선택</p></section>
        <section id="quotation"><h2>STEP 03 정보 입력·견적서 받기</h2><p>담당자 정보와 동의 후 견적서 다운로드 또는 교육문의 연결</p></section>
      </PageLoading>
    </>
  )
}
