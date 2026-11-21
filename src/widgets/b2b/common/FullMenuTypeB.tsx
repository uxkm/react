'use client';

import { fullMenuTypeBSections } from './menuDataTypeB';
import { MenuGroup } from './fullMenuShared';

/** 현재 시안(typeB) 전체메뉴. 기업교육·서비스·회사소개 3단 메가메뉴. */
export default function FullMenuTypeB({
  onNavigate,
}: Readonly<{
  onNavigate?: () => void;
}>) {
  return (
    <nav
      className="full-menu-content full-menu-content_default full-menu-content_typeB"
      aria-label="전체메뉴"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('a')) onNavigate?.();
      }}
    >
      {fullMenuTypeBSections.map((section) => (
        <section
          key={section.id}
          className={`full-menu-content_section full-menu-content_section-${section.id}`}
          aria-labelledby={`full-menu-typeB-${section.id}`}
        >
          <div className="full-menu-content_intro">
            <h2 id={`full-menu-typeB-${section.id}`}>{section.title}</h2>
            <p>{section.description}</p>
            <span
              className="full-menu-content_intro-art"
              aria-hidden="true"
            />
          </div>
          <div className="full-menu-content_columns">
            {section.groups.map((group) => (
              <MenuGroup
                key={group.label}
                group={group}
              />
            ))}
          </div>
        </section>
      ))}
    </nav>
  );
}
