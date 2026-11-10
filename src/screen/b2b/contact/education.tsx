'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import EducationSkeleton from './skeleton/educationSkeleton'

export const pageTitle = "기업교육문의"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bContactEducationPage () {
  const links = []
  const skeletonId = 'b2b/contact/education'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-contact-education" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <EducationSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
          device="B2B"
          folderId="contact"
          folderName="문의하기"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-INSIGH-001"
          pageUrl="/b2b/contact/education"
          links={links}
        />

        <section id="inquiry"><h2>문의 정보</h2><p>문의구분, 교육인원, 교육일정, 교육방식, 문의내용, 상담 필요 여부</p></section>
        <section id="company"><h2>기업·담당자 정보</h2><p>회사명, 기업유형, 이름, 부서, 연락처, 이메일</p></section>
        <section id="privacy"><h2>개인정보 수집 및 이용 동의</h2><p>개인정보 수집·이용 동의 안내</p></section>
      </PageLoading>
    </>
  )
}
