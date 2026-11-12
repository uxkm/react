'use client'

import { Page, PageLoading } from '@/comp'
import { PublishingPlaceholder } from '@/screen/pub/widgets/publishing/PublishingPlaceholder'
import { resolveSkeletonMode } from '@/config/skeleton'
import IndexSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "공통 위젯 프리뷰 목록"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bCommonPage () {
  const links = [
    {
      "to": "/b2b/common/gnb",
      "label": "GNB",
      "screenId": "B2B-COMMON-001"
    },
    {
      "to": "/b2b/common/mega-menu",
      "label": "메가메뉴",
      "screenId": "B2B-COMMON-MEGA-MENU"
    },
    {
      "to": "/b2b/common/full-menu",
      "label": "전체 사이트맵",
      "screenId": "B2B-COMMON-002"
    },
    {
      "to": "/b2b/common/sitemap",
      "label": "About 사이트맵",
      "screenId": "B2B-COMMON-004"
    },
    {
      "to": "/b2b/common/tab-navigation",
      "label": "하위 탭 네비게이션",
      "screenId": "B2B-COMMON-TAB-NAVIGATION"
    },
    {
      "to": "/b2b/common/quick-links",
      "label": "퀵링크",
      "screenId": "B2B-COMMON-QUICK-LINKS"
    },
    {
      "to": "/b2b/common/back-top",
      "label": "TOP 버튼",
      "screenId": "B2B-COMMON-BACK-TOP"
    },
    {
      "to": "/b2b/common/integrated-search",
      "label": "통합검색",
      "screenId": "B2B-COMMON-003"
    },
    {
      "to": "/b2b/common/integrated-search-results",
      "label": "통합검색 결과",
      "screenId": "B2B-COMMON-INTEGRATED-SEARCH-RESULTS"
    },
    {
      "to": "/b2b/common/footer",
      "label": "Footer",
      "screenId": "B2B-COMMON-005"
    },
    {
      "to": "/b2b/common/terms",
      "label": "이용약관",
      "screenId": "B2B-COMMON-TERMS"
    },
    {
      "to": "/b2b/common/privacy",
      "label": "개인정보처리방침",
      "screenId": "B2B-COMMON-PRIVACY"
    },
    {
      "to": "/b2b/common/email-privacy",
      "label": "알기쉬운 개인정보처리방침",
      "screenId": "B2B-COMMON-EMAIL-PRIVACY"
    },
    {
      "to": "/b2b/common/notice-list",
      "label": "공지사항 목록",
      "screenId": "B2B-COMMON-NOTICE-LIST"
    },
    {
      "to": "/b2b/common/notice-detail",
      "label": "공지사항 상세",
      "screenId": "B2B-COMMON-NOTICE-DETAIL"
    },
    {
      "to": "/b2b/common/contact-us",
      "label": "Contact us",
      "screenId": "B2B-COMMON-CONTACT-US"
    },
    {
      "to": "/b2b/common/family-site",
      "label": "Family Site",
      "screenId": "B2B-COMMON-FAMILY-SITE"
    },
    {
      "to": "/b2b/common/download",
      "label": "자료 다운로드 팝업",
      "screenId": "B2B-COMMON-DOWNLOAD"
    },
    {
      "to": "/b2b/common/education-diagnosis",
      "label": "간편 진단 모달",
      "screenId": "B2B-INSIGH-002"
    }
  ]
  const skeletonId = 'b2b/common'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-common" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IndexSkeleton /> : undefined}
        className="page-container"
      >
        <PublishingPlaceholder
          device="B2B"
          folderId="common"
          folderName="공통"
          screenName={pageTitle}
          screenType="Index"
          screenId="B2B-COMMON-000"
          pageUrl="/b2b/common"
          links={links}
        />

      </PageLoading>
    </>
  )
}
