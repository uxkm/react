'use client'

import { Page, PageLoading } from '@/comp' // comp
import ComingSoon from '@/widgets/b2b/common/ComingSoon' // Coming Soon 컴포넌트
import { resolveSkeletonMode } from '@/config/skeleton' // resolve Skeleton Mode
import EducationSkeleton from './skeleton/indexSkeleton' // Education Skeleton 컴포넌트

export const pageTitle = "기업교육문의"

/** 미작업 화면 — ComingSoon. 시안 반영 시 본문을 교체한다. */
export default function B2bContactEducationPage () {
  const skeletonId = 'b2b/contact/education'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="contact-education" title={pageTitle}  className="p-content" />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <EducationSkeleton /> : undefined}
        className="page-container"
      >
        <h1 className="visually-hidden">{pageTitle}</h1>
        <ComingSoon />

        <section id="inquiry"><h2>문의 정보</h2><p>문의구분, 교육인원, 교육일정, 교육방식, 문의내용, 상담 필요 여부</p></section>
        <section id="company"><h2>기업·담당자 정보</h2><p>회사명, 기업유형, 이름, 부서, 연락처, 이메일</p></section>
        <section id="privacy"><h2>개인정보 수집 및 이용 동의</h2><p>개인정보 수집·이용 동의 안내</p></section>
      </PageLoading>
    </>
  )
}
