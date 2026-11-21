'use client';

import { useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';

const subscribe = (notify: () => void) => {
  window.addEventListener('popstate', notify);
  return () => window.removeEventListener('popstate', notify);
};
const snapshot = () => {
  const type = new URLSearchParams(window.location.search).get('type');
  return type === 'typeA' || type === 'typeB' || type === 'typeVideo' ? type : undefined;
};
const serverSnapshot = () => undefined;

/** 메인은 기본 도형 애니메이션을 사용하며 쿼리로 다른 시안을 선택할 수 있습니다. */
export function useMainPageType() {
  usePathname();
  return useSyncExternalStore(subscribe, snapshot, serverSnapshot);
}

/** 공통 헤더·푸터와 본문은 typeVideo에서도 typeB 디자인을 사용합니다. */
export function useMainDesignType() {
  return useMainPageType() === 'typeA' ? 'typeA' : 'typeB';
}
