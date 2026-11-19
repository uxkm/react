'use client'

import { Page } from '@/comp'
import { LayoutProvider } from '@/comp/layout/LayoutContext'
import { Floating } from '@/comp/ui/Floating'
import QuickMenuTypeA from '@/widgets/b2b/common/QuickMenuTypeA'

export const pageTitle = '퀵메뉴'
export const meta = { banner: false, header: false, footer: false, floating: false }

export default function TypeAQuickMenuPreview () {
  return (
    <>
      <Page page="type-a-quick-menu" title={pageTitle} className="project-content widget-preview" />
      <h1 className="visually-hidden">{pageTitle}</h1>
      <LayoutProvider>
        <Floating className="b2b-quick-floating_typeA" style={{ position: 'static', margin: 'var(--space-24) auto' }}>
          <Floating.Item name="quick-menu"><QuickMenuTypeA /></Floating.Item>
        </Floating>
      </LayoutProvider>
    </>
  )
}
