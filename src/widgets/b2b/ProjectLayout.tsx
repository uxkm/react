import type { ReactNode } from 'react' // React Node 타입
import { AppLayout } from '@/comp/widget/AppLayout' // 공통 앱 레이아웃
import Header from './common/Header' // B2B 헤더
import Footer from './common/Footer' // B2B 푸터

/** B2B 헤더·푸터를 첫 HTML부터 포함해 본문 레이아웃 점프를 방지한다. */
export default function ProjectLayout ({ children }: { children: ReactNode }) {
  return <AppLayout header={<Header />} footer={<Footer />}>{children}</AppLayout>
}
