'use client';

import type { ReactNode } from 'react'; // React Node 타입
import { AppLayout } from '@/comp/widget/AppLayout'; // 공통 앱 레이아웃
import Header from './common/Header'; // B2B 헤더
import { FloatingItem } from '@/comp/ui/Floating';
import QuickMenu from './common/QuickMenu';
import { useMainDesignType } from './main/useMainDesignType';
import Footer from './common/Footer'; // B2B 푸터

/** B2B 헤더·푸터를 첫 HTML부터 포함해 본문 레이아웃 점프를 방지한다. */
export default function ProjectLayout({ children }: { children: ReactNode }) {
  const designType = useMainDesignType();
  return (
    <AppLayout
      header={<Header />}
      footer={<Footer designType={designType} />}
      floating={
        <FloatingItem name="quick-menu">
          <QuickMenu designType={designType} />
        </FloatingItem>
      }
      floatingProps={{
        placement: designType === 'typeA' ? 'top-right' : 'bottom-right',
        offsetBottom: designType === 'typeA' ? 180 : 120,
        offsetRight: 24,
        gap: 0,
        className: `b2b-quick-floating b2b-quick-floating_${designType}`,
        boundary: 'footer',
      }}
    >
      {children}
    </AppLayout>
  );
}
