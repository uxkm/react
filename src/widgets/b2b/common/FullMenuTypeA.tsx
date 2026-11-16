'use client'

import { Icon } from '@/comp/ui/Icon'
import { Accordion, AccordionItem, AccordionPanel } from '@/comp/ui/Accordion'
import { b2bMenu } from './menuData'
import { MenuGroup } from './fullMenuShared'

/** 기존 원본(typeA) 전체메뉴. 기업교육·회사소개 아코디언 구성. */
export default function FullMenuTypeA ({
  initialSection = 'business',
  onNavigate
}: Readonly<{
  initialSection?: 'business' | 'company'
  onNavigate?: () => void
}>) {
  return (
    <nav
      className="full-menu-content full-menu-content_default full-menu-content_typeA"
      aria-label="전체메뉴"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('a')) onNavigate?.()
      }}
    >
      <Accordion
        headingLevel={2}
        className="full-menu-content_accordion"
        defaultValue={initialSection}
        skin="flush"
        effect="none"
        collapsible
        renderItem={(item) => (
          <>
            <span>{item.label}</span>
            <Icon name="chevron-down" size={20} />
          </>
        )}
      >
        <AccordionItem
          value="business"
          className="full-menu-content_panel"
          label={
            <>
              기업교육
              <span aria-hidden="true">/</span>
              <span>서비스</span>
              <span aria-hidden="true">/</span>
              <span>HR인사이트</span>
              <span aria-hidden="true">/</span>
              <span>문의하기</span>
            </>
          }
        />
        <AccordionPanel value="business">
          <div className="full-menu-content_education">
            <h2>기업교육</h2>
            {b2bMenu.education.map((group) => (
              <MenuGroup key={group.label} group={group} />
            ))}
          </div>
          <div className="full-menu-content_secondary">
            <div className="full-menu-content_services">
              <h2>서비스</h2>
              <MenuGroup group={b2bMenu.services[0]} />
              <div className="full-menu-content_service-links">
                {b2bMenu.services.slice(1).map((group) => (
                  <MenuGroup key={group.label} group={group} />
                ))}
              </div>
            </div>
            <div className="full-menu-content_insights">
              <h2>HR인사이트</h2>
              <div>
                {b2bMenu.insights.map((group) => (
                  <MenuGroup key={group.label} group={group} />
                ))}
              </div>
            </div>
            <div className="full-menu-content_contact">
              <h2>문의하기</h2>
              <MenuGroup group={b2bMenu.contact} />
            </div>
          </div>
        </AccordionPanel>
        <AccordionItem value="company" label="회사소개" className="full-menu-content_panel" />
        <AccordionPanel value="company">
          <div className="full-menu-content_company">
            <h2>회사소개</h2>
            {b2bMenu.company.map((group) => (
              <MenuGroup key={group.label} group={group} />
            ))}
          </div>
        </AccordionPanel>
      </Accordion>
    </nav>
  )
}
