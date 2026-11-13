'use client'

import { usePathname } from 'next/navigation'
import { Header as HeaderSlot } from '@/comp/layout/Header'
import { Footer as FooterSlot } from '@/comp/layout/Footer'
import Footer from '@/widgets/b2b/common/Footer'
import Header from '@/widgets/b2b/common/Header'

/** 경로 전환 시 재등록하여 프로젝트 공통 헤더·푸터 슬롯을 유지합니다. */
export default function Template ({ children }) {
  const pathname = usePathname()
  return (
    <>
      <HeaderSlot key={pathname}>
        <Header />
      </HeaderSlot>
      {children}
      <FooterSlot key={`footer-${pathname}`}>
        <Footer />
      </FooterSlot>
    </>
  )
}
