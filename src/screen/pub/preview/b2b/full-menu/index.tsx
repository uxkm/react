'use client';

import { Page } from '@/comp'; // comp
import { FullMenuContent } from '@/widgets/b2b/common/FullMenu'; // Full Menu Content 컴포넌트
import { useMainDesignType } from '@/widgets/b2b/main/useMainDesignType'; // use Main Design Type

export const pageTitle = '전체메뉴';
export const meta = { banner: false, header: false, footer: false, floating: false };

export default function B2bCommonFullMenuPage() {
  const designType = useMainDesignType();

  return (
    <>
      <Page
        page="common-full-menu"
        title={pageTitle}
        className="project-content widget-preview"
      />
      <h1 className="visually-hidden">{pageTitle}</h1>
      <div className={`full-menu-content-preview full-menu-content-preview_${designType}`}>
        <FullMenuContent
          designType={designType}
          initialSection="business"
        />
      </div>
    </>
  );
}
