'use client'

import { useHydrated } from '@/hooks/useHydrated' // Hydrated 훅

import { useCallback, useState } from 'react' // React
import {
  SUPPORTED_LOCALES, // SUPPORTED LOCALES 컴포넌트
  DEFAULT_LOCALE, // 기본 언어 코드
  normalizeLocale, // normalize Locale
  setAppLocale // set App Locale
} from '@/lib/i18n' // 라이브러리/유틸 · i18n
import { useLocaleStore } from '@/lib/localeStore' // 언어(locale) 전역 상태
import { resetTranslationService } from '@/lib/pageTranslate' // reset Translation Service

/**
 * 현재 언어 + 전환 API.
 * 화면 번역은 AppLayout GlobalTranslator.
 */
export function useLocale () {
  const storeLocale = useLocaleStore((s) => s.locale)
  const setStoreLocale = useLocaleStore((s) => s.setLocale)
  const localeProgress = useLocaleStore((s) => s.localeProgress)
  const translationError = useLocaleStore((s) => s.translationError)
  const requestRetry = useLocaleStore((s) => s.retryTranslation)
  const hydrated = useHydrated()
  const [localeLoading, setLocaleLoading] = useState(false)
  const [localeError, setLocaleError] = useState('')
  /** 언어 저장 중 또는 페이지 번역 진행 중 */
  const localeBusy = localeLoading || localeProgress != null


  const locale = hydrated
    ? normalizeLocale(storeLocale || DEFAULT_LOCALE)
    : DEFAULT_LOCALE

  const setLocale = useCallback(
    async (next) => {
      setLocaleLoading(true)
      setLocaleError('')
      resetTranslationService()
      useLocaleStore.getState().setTranslationError('')
      try {
        const applied = await setAppLocale(next)
        setStoreLocale(applied)
        return applied
      } catch (err) {
        setLocaleError(err?.message || '언어 전환에 실패했습니다')
        throw err
      } finally {
        setLocaleLoading(false)
      }
    },
    [setStoreLocale]
  )

  const retryTranslation = useCallback(() => {
    resetTranslationService()
    setLocaleError('')
    requestRetry()
  }, [requestRetry])

  return {
    locale,
    setLocale,
    hydrated,
    locales: SUPPORTED_LOCALES,
    localeLoading,
    localeBusy,
    localeProgress,
    localeError: localeError || translationError,
    retryTranslation,
    isKo: locale === 'ko',
    isTh: locale === 'th',
    isVi: locale === 'vi',
    isRu: locale === 'ru',
    isEn: locale === 'en'
  }
}

export default useLocale
