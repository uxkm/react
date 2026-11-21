'use client';

import { useId, useRef, useState } from 'react';
import { Link } from '@/lib/router';
import { BackTop } from '@/comp/ui/BackTop';
import { Icon } from '@/comp/ui/Icon';

/** + 버튼 위로 펼쳐지는 서비스 바로가기와 맨 위로 이동 버튼. */
export default function QuickMenuTypeB() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <nav
      className="quick-menu quick-menu_typeB"
      aria-label="빠른 서비스 메뉴"
      data-expanded={open}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          event.preventDefault();
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <button
        ref={toggleRef}
        type="button"
        className="quick-menu_toggle"
        aria-label={open ? '빠른 서비스 메뉴 닫기' : '빠른 서비스 메뉴 열기'}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((current) => !current)}
      >
        <Icon
          size={28}
          aria-hidden
        >
          <path d="M12 5v14M5 12h14" />
        </Icon>
      </button>
      <div
        id={menuId}
        className="quick-menu_links"
        aria-hidden={!open}
        inert={!open}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest('a')) setOpen(false);
        }}
      >
        <Link
          className="quick-menu_link"
          to="/b2b/contents/mandatory/estimate"
        >
          <Icon
            name="receipt"
            size={24}
            aria-hidden
          />
          <span>법정필수 간편견적</span>
        </Link>
        <Link
          className="quick-menu_link"
          to="/b2b/service/diagnosis"
        >
          <Icon
            name="clipboard-check"
            size={24}
            aria-hidden
          />
          <span>진단 &amp; 맞춤검색</span>
        </Link>
        <Link
          className="quick-menu_link quick-menu_link-download"
          to="/b2b/insight/resources/list"
        >
          <Icon
            name="cloud-download"
            size={24}
            aria-hidden
          />
          <span>제안서 다운로드</span>
        </Link>
      </div>
      <BackTop
        visible
        variant="ghost"
        label="맨 위로 이동"
        className="quick-menu_top"
        onClick={() => setOpen(false)}
      >
        <Icon
          name="chevron-up"
          size={28}
        />
      </BackTop>
    </nav>
  );
}
