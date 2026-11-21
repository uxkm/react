'use client';

// 공통 모듈 — 페이지 설정, 로딩 및 공용 UI
import { Page, PageLoading } from '@/comp';
import { resolveSkeletonMode } from '@/config/skeleton';

// 페이지 전용 모듈 — 본문 및 수동 스켈레톤
import AiLanguageSkeleton from './skeleton/indexSkeleton'; // Ai Language Skeleton 컴포넌트

import ComingSoon from '@/widgets/b2b/common/ComingSoon'; // 준비 중인 페이지에서 사용

export const pageTitle = 'AI 외국어';

/** 미작업 화면 — ComingSoon. 시안 반영 시 본문을 교체한다. */
export default function B2bContentsLanguageAiLanguagePage() {
  const skeletonId = 'b2b/contents/language/ai-language';
  const skeletonMode = resolveSkeletonMode(skeletonId);

  return (
    <>
      <Page
        page="contents-language-ai-language"
        title={pageTitle}
        className="p-content"
      />
      <PageLoading
        loading={false}
        skeletonId={skeletonId}
        skeletonMode={skeletonMode}
        skeleton={skeletonMode === 'manual' ? <AiLanguageSkeleton /> : undefined}
        className="page-container"
      >
        <h1 className="visually-hidden">{pageTitle}</h1>
        <ComingSoon />
      </PageLoading>
    </>
  );
}
