'use client';

import { useEffect, type RefObject } from 'react';

export function useFormReset(
  ref: RefObject<HTMLInputElement | HTMLTextAreaElement | null>,
  onReset: ((value: string) => void) | undefined,
) {
  useEffect(() => {
    const control = ref.current;
    if (!control || !onReset) return;

    const document = control.ownerDocument;
    let resetTimer: ReturnType<typeof setTimeout> | undefined;

    function handleReset(event: Event) {
      if (event.target !== ref.current?.form) return;
      clearTimeout(resetTimer);
      // 브라우저의 폼 초기화가 끝난 뒤 실제 값을 읽는다.
      resetTimer = setTimeout(() => {
        if (ref.current) onReset?.(ref.current.value);
      }, 0);
    }

    document.addEventListener('reset', handleReset, true);
    return () => {
      document.removeEventListener('reset', handleReset, true);
      clearTimeout(resetTimer);
    };
  }, [ref, onReset]);
}
