'use client'

/**
 * 앱 루트 Provider.
 * 저장 언어 복원·document lang 적용 후 AppLayout 으로 전 라우트를 감싼다.
 */
import { useEffect } from 'react' // 마운트 시 부트스트랩 effect
import { AppLayout } from '@/comp' // 전 라우트 공통 앱 레이아웃
import {
  DEFAULT_LOCALE, // 기본 언어 코드
  applyDocumentLang, // document lang 속성 반영
  bootstrapLocale // 저장·감지 언어 복원
} from '@/lib/i18n' // 라이브러리/유틸 · i18n
import { useLocaleStore } from '@/lib/localeStore' // 언어(locale) 전역 상태
import { initDetectEnvironment } from '@/utils/detectEnvironment' // OS·브라우저·디바이스 class를 <html>에 부여
import { initOverlayScrollbar } from '@/utils/overlayScrollbar' // classic 스크롤바 OS용 오버레이 스크롤
import { initRipple } from '@/utils/ripple' // data-ripple 클릭 파장 효과
import DevelopmentRefresh from './DevelopmentRefresh' // 개발 모드 핫리프레시 보조

/** soft nav 시 중복 bootstrap 방지 */
let localeBootstrapped = false

/** 저장 언어 복원 후 전 라우트에 적용 (번역은 AppLayout GlobalTranslator) */
function LocaleBootstrap ({ children }) {
  const setLocale = useLocaleStore((s) => s.setLocale)

  useEffect(() => {
    if (localeBootstrapped) return undefined

    let cancelled = false

    ;(async () => {
      setLocale(DEFAULT_LOCALE)
      applyDocumentLang(DEFAULT_LOCALE)

      try {
        const locale = await bootstrapLocale()
        if (cancelled) return
        setLocale(locale)
      } catch (err) {
        console.warn('[locale] bootstrap failed', err)
        if (cancelled) return
        setLocale(DEFAULT_LOCALE)
        applyDocumentLang(DEFAULT_LOCALE)
      } finally {
        if (!cancelled) localeBootstrapped = true
      }
    })()

    return () => {
      cancelled = true
    }
  }, [setLocale])

  return children
}

/** 클릭 파장(data-ripple) 전역 등록 */
function RippleBootstrap ({ children }) {
  useEffect(() => {
    initRipple()
  }, [])
  return children
}

/** classic 스크롤바 OS에서 맥 스타일 오버레이 스크롤 등록 */
function ScrollbarBootstrap ({ children }) {
  useEffect(() => initOverlayScrollbar(), [])
  return children
}

/** OS·브라우저·디바이스 class를 <html>에 부여 */
function DetectBootstrap ({ children }) {
  useEffect(() => {
    initDetectEnvironment()
  }, [])
  return children
}

/** 앱 레이아웃으로 화면을 감싼다 */
export default function AppProviders ({ children }) {
  return (
    <>
      <DevelopmentRefresh />
      <DetectBootstrap>
        <LocaleBootstrap>
          <RippleBootstrap>
            <ScrollbarBootstrap>
              <AppLayout>{children}</AppLayout>
            </ScrollbarBootstrap>
          </RippleBootstrap>
        </LocaleBootstrap>
      </DetectBootstrap>
    </>
  )
}
