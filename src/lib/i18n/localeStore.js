import { create } from 'zustand' // create
import { DEFAULT_LOCALE } from './i18n' // 기본 언어 코드

/** 언어 선택·번역 진행률·오류·재시도 상태 (Zustand) */
export const useLocaleStore = create((set) => ({
  /** 현재 언어. 기본은 원문(ko) */
  locale: DEFAULT_LOCALE,
  /** 언어를 저장소에 기록 */
  setLocale: (locale) => set({ locale }),
  /**
   * 페이지 번역 진행률 0~100.
   * null 이면 대기(표시 안 함).
   */
  localeProgress: null,
  setLocaleProgress: (localeProgress) => set({ localeProgress }),
  translationError: '',
  setTranslationError: (translationError) => set({ translationError }),
  translationAttempt: 0,
  retryTranslation: () => set((state) => ({
    translationAttempt: state.translationAttempt + 1,
    translationError: ''
  }))
}))

export default useLocaleStore
