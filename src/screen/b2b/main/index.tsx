'use client'

import { Page, PageLoading, PublishScreenStub } from '@/comp'
import { resolveSkeletonMode } from '@/config/skeleton'
import IndexSkeleton from './skeleton/indexSkeleton'

export const pageTitle = "메인"

/** IA publishing scaffold. Replace this screen body with the approved markup. */
export default function B2bMainPage () {
  const links = [
    {
      "to": "/b2b/contents/ax/overview",
      "label": "기업교육 > AX교육 Overview",
      "screenId": "B2B-CORPED-001"
    },
    {
      "to": "/b2b/contents/ax/ai-search",
      "label": "기업교육 > AI 교육 탐색",
      "screenId": "B2B-CONTENTS-AX-AI-SEARCH"
    },
    {
      "to": "/b2b/contents/ax/competency",
      "label": "기업교육 > AX 역량수준 진단",
      "screenId": "B2B-CONTENTS-AX-COMPETENCY"
    },
    {
      "to": "/b2b/contents/ax/ai-studio",
      "label": "기업교육 > AI Studio",
      "screenId": "B2B-CONTENTS-AX-AI-STUDIO"
    },
    {
      "to": "/b2b/contents/ax/workshop",
      "label": "기업교육 > AX 워크숍",
      "screenId": "B2B-CONTENTS-AX-WORKSHOP"
    },
    {
      "to": "/b2b/contents/ax/hackathon",
      "label": "기업교육 > AX 해커톤",
      "screenId": "B2B-CONTENTS-AX-HACKATHON"
    },
    {
      "to": "/b2b/contents/it",
      "label": "기업교육 > IT교육",
      "screenId": "B2B-CORPED-002"
    },
    {
      "to": "/b2b/contents/job",
      "label": "기업교육 > 직무교육",
      "screenId": "B2B-CORPED-003"
    },
    {
      "to": "/b2b/contents/job/professional",
      "label": "기업교육 > 직무 전문 역량",
      "screenId": "B2B-CONTENTS-JOB-PROFESSIONAL"
    },
    {
      "to": "/b2b/contents/job/industry",
      "label": "기업교육 > 산업 전문 역량",
      "screenId": "B2B-CONTENTS-JOB-INDUSTRY"
    },
    {
      "to": "/b2b/contents/job/certification",
      "label": "기업교육 > 자격대비",
      "screenId": "B2B-CONTENTS-JOB-CERTIFICATION"
    },
    {
      "to": "/b2b/contents/leadership",
      "label": "기업교육 > 리더십 교육",
      "screenId": "B2B-CORPED-004"
    },
    {
      "to": "/b2b/contents/leadership/assessment",
      "label": "기업교육 > 리더십 진단",
      "screenId": "B2B-CONTENTS-LEADERSHIP-ASSESSMENT"
    },
    {
      "to": "/b2b/contents/leadership/executive",
      "label": "기업교육 > 임원 리더십",
      "screenId": "B2B-CONTENTS-LEADERSHIP-EXECUTIVE"
    },
    {
      "to": "/b2b/contents/leadership/mba",
      "label": "기업교육 > MBA 프로그램",
      "screenId": "B2B-CONTENTS-LEADERSHIP-MBA"
    },
    {
      "to": "/b2b/contents/mandatory",
      "label": "기업교육 > 법정필수교육",
      "screenId": "B2B-CORPED-005"
    },
    {
      "to": "/b2b/contents/mandatory/features",
      "label": "기업교육 > 법정필수교육 서비스 특징",
      "screenId": "B2B-CONTENTS-MANDATORY-FEATURES"
    },
    {
      "to": "/b2b/contents/mandatory/courses",
      "label": "기업교육 > 법정필수교육 대표 과정",
      "screenId": "B2B-CONTENTS-MANDATORY-COURSES"
    },
    {
      "to": "/b2b/contents/mandatory/estimate",
      "label": "기업교육 > 법정교육 간편견적",
      "screenId": "B2B-CONTENTS-MANDATORY-ESTIMATE"
    },
    {
      "to": "/b2b/contents/language",
      "label": "기업교육 > 외국어 교육",
      "screenId": "B2B-CORPED-006"
    },
    {
      "to": "/b2b/contents/language/ai-language",
      "label": "기업교육 > AI 외국어",
      "screenId": "B2B-CONTENTS-LANGUAGE-AI-LANGUAGE"
    },
    {
      "to": "/b2b/contents/language/language-life",
      "label": "기업교육 > 외국어생활관",
      "screenId": "B2B-CONTENTS-LANGUAGE-LANGUAGE-LIFE"
    },
    {
      "to": "/b2b/contents/small-business",
      "label": "기업교육 > 중소기업 인재키움 프리미엄",
      "screenId": "B2B-CONTENTS-SMALL-BUSINESS"
    },
    {
      "to": "/b2b/service/platform",
      "label": "서비스 > 러닝플랫폼",
      "screenId": "B2B-SERVIC-001"
    },
    {
      "to": "/b2b/service/platform/consulting",
      "label": "서비스 > 플랫폼 활용 컨설팅",
      "screenId": "B2B-SERVICE-PLATFORM-CONSULTING"
    },
    {
      "to": "/b2b/service/learning",
      "label": "서비스 > 러닝 서비스",
      "screenId": "B2B-SERVIC-002"
    },
    {
      "to": "/b2b/service/diagnosis",
      "label": "서비스 > 진단 서비스",
      "screenId": "B2B-SERVIC-003"
    },
    {
      "to": "/b2b/service/consulting",
      "label": "서비스 > 컨설팅 서비스",
      "screenId": "B2B-SERVIC-004"
    },
    {
      "to": "/b2b/service/bpo",
      "label": "서비스 > BPO 서비스",
      "screenId": "B2B-SERVIC-005"
    },
    {
      "to": "/b2b/insight/on/list",
      "label": "HR인사이트 > 멀캠ON 목록",
      "screenId": "B2B-INSIGHT-ON-LIST"
    },
    {
      "to": "/b2b/insight/on/detail",
      "label": "HR인사이트 > 멀캠ON 상세",
      "screenId": "B2B-INSIGHT-ON-DETAIL"
    },
    {
      "to": "/b2b/insight/resources/list",
      "label": "HR인사이트 > 자료실 목록",
      "screenId": "B2B-INSIGHT-RESOURCES-LIST"
    },
    {
      "to": "/b2b/insight/resources/detail",
      "label": "HR인사이트 > 자료실 상세",
      "screenId": "B2B-INSIGHT-RESOURCES-DETAIL"
    },
    {
      "to": "/b2b/contact/education",
      "label": "문의하기 > 기업교육문의",
      "screenId": "B2B-INSIGH-001"
    },
    {
      "to": "/b2b/company/intro",
      "label": "회사소개 > 멀티캠퍼스 소개",
      "screenId": "B2B-ABOUT-001"
    },
    {
      "to": "/b2b/company/ceo",
      "label": "회사소개 > CEO 인사말",
      "screenId": "B2B-ABOUT-002"
    },
    {
      "to": "/b2b/company/history",
      "label": "회사소개 > 연혁",
      "screenId": "B2B-ABOUT-003"
    },
    {
      "to": "/b2b/company/ethics/management",
      "label": "회사소개 > 경영원칙",
      "screenId": "B2B-ABOUT-004"
    },
    {
      "to": "/b2b/company/ethics/compliance",
      "label": "회사소개 > 준법경영",
      "screenId": "B2B-COMPANY-ETHICS-COMPLIANCE"
    },
    {
      "to": "/b2b/company/sustainability/esg",
      "label": "회사소개 > ESG경영체계",
      "screenId": "B2B-ABOUT-005"
    },
    {
      "to": "/b2b/company/sustainability/environment",
      "label": "회사소개 > 환경경영",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-ENVIRONMENT"
    },
    {
      "to": "/b2b/company/sustainability/diversity",
      "label": "회사소개 > 다양성/노사",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-DIVERSITY"
    },
    {
      "to": "/b2b/company/sustainability/human-rights",
      "label": "회사소개 > 인권경영",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-HUMAN-RIGHTS"
    },
    {
      "to": "/b2b/company/sustainability/safety",
      "label": "회사소개 > 안전보건",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-SAFETY"
    },
    {
      "to": "/b2b/company/sustainability/information",
      "label": "회사소개 > 정보보호",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-INFORMATION"
    },
    {
      "to": "/b2b/company/sustainability/consumer",
      "label": "회사소개 > 소비자보호",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-CONSUMER"
    },
    {
      "to": "/b2b/company/sustainability/contribution",
      "label": "회사소개 > 사회공헌",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-CONTRIBUTION"
    },
    {
      "to": "/b2b/company/sustainability/esg-data",
      "label": "회사소개 > ESG Data",
      "screenId": "B2B-COMPANY-SUSTAINABILITY-ESG-DATA"
    },
    {
      "to": "/b2b/company/investors/financial",
      "label": "회사소개 > 재무정보",
      "screenId": "B2B-ABOUT-006"
    },
    {
      "to": "/b2b/company/investors/stock",
      "label": "회사소개 > 주주정보",
      "screenId": "B2B-COMPANY-INVESTORS-STOCK"
    },
    {
      "to": "/b2b/company/investors/disclosure",
      "label": "회사소개 > 공시정보",
      "screenId": "B2B-COMPANY-INVESTORS-DISCLOSURE"
    },
    {
      "to": "/b2b/company/investors/ir",
      "label": "회사소개 > IR 자료실",
      "screenId": "B2B-COMPANY-INVESTORS-IR"
    },
    {
      "to": "/b2b/company/pr/news-list",
      "label": "회사소개 > 언론보도 목록",
      "screenId": "B2B-ABOUT-007"
    },
    {
      "to": "/b2b/company/pr/news-detail",
      "label": "회사소개 > 언론보도 상세",
      "screenId": "B2B-COMPANY-PR-NEWS-DETAIL"
    },
    {
      "to": "/b2b/company/pr/awards",
      "label": "회사소개 > 수상실적",
      "screenId": "B2B-COMPANY-PR-AWARDS"
    }
  ]
  const skeletonId = 'b2b/main'
  const skeletonMode = resolveSkeletonMode(skeletonId)

  return (
    <>
      <Page page="b2b-main" title={pageTitle} />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <IndexSkeleton /> : undefined}
        className="page-container"
      >
        <PublishScreenStub
          device="B2B"
          folderId="main"
          folderName="메인"
          screenName={pageTitle}
          screenType="Page"
          screenId="B2B-MAIN-000"
          pageUrl="/b2b"
          links={links}
        />
        <section id="hero">
          <h2>타이틀</h2>
          <p>상단 히어로 홍보 문구</p>
        </section>
        <section id="search">
          <h2>통합검색 위젯</h2>
          <p>가이드 문구 최대 5종 자동 롤링, 추천 검색 키워드 최대 5개</p>
        </section>
        <section id="card-grid">
          <h2>메인 카드그리드</h2>
          <p>히어로 하단 주요 진입 카드 모음</p>
        </section>
        <section id="cases">
          <h2>고객 사례</h2>
          <p>고객 사례 카드·로고 및 HR인사이트 연계</p>
        </section>
        <section id="on">
          <h2>멀캠ON</h2>
          <p>멀캠ON 카드 콘텐츠와 좌우 컨트롤바</p>
        </section>
        <section id="cta">
          <h2>무엇이든 물어보세요</h2>
          <p>기업교육 문의와 간편 진단 진입 CTA</p>
        </section>
        <section id="newsletter">
          <h2>최신 트렌드를 확인하세요</h2>
          <p>멀캠ON 수신동의·유튜브·블로그·링크드인 구독 홍보</p>
        </section>
      </PageLoading>
    </>
  )
}
