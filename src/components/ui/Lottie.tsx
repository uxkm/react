'use client'

/**
 * Lottie 애니메이션.
 * 마크업은 span 기반으로 `<p>` 등 phrasing 컨텍스트에도 넣을 수 있다.
 * name 으로 public/images/lottie JSON을 넣고, controls 로 재생·정지 버튼을 켠다.
 */
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type HTMLAttributes
} from 'react'
import lottie, { type AnimationItem, type RendererType } from 'lottie-web'
import { Button } from './Button'
import { Icon } from './Icon'
import { classNames } from '@/utils/classNames'
import { imgLottie } from '@/utils/images'

/**
 * Lottie 경로 해석 (Icon resolveIconSrc 와 동일 규칙).
 * - `/…` · `http(s):` · `data:` 는 그대로
 * - `b2b/finish` 처럼 폴더 포함이면 `/images/lottie/…`
 * - `fireworks` · `fireworks.json` 은 `/images/lottie/…`
 */
export function resolveLottieSrc (nameOrSrc: string): string {
  const value = String(nameOrSrc || '').trim()
  if (!value) return ''
  if (/^(https?:)?\/\//i.test(value) || value.startsWith('/') || value.startsWith('data:')) {
    return value
  }
  if (value.includes('/')) {
    const path = value.replace(/^\/+/, '')
    const withExt = path.endsWith('.json') ? path : `${path}.json`
    return `/images/lottie/${withExt}`
  }
  return imgLottie(value)
}

function subscribeReducedMotion (onChange: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

function getReducedMotionSnapshot () {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getReducedMotionServerSnapshot () {
  return false
}

/** respectReducedMotion 이 켜져 있을 때만 prefers-reduced-motion 구독 */
function usePrefersReducedMotion (enabled: boolean) {
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  )
  return enabled && reduced
}

type FetchState = {
  key: string
  status: 'success' | 'error'
  data?: unknown
}

/** Lottie 가 받는 값 — 루트는 span */
export interface LottieProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children' | 'color'> {
  /**
   * Lottie 파일 이름.
   * `fireworks` · `fireworks.json` → /images/lottie/fireworks.json
   */
  name?: string
  /** Lottie JSON 객체. name · src 보다 우선 */
  animationData?: unknown
  /**
   * JSON URL 직접 지정.
   * name 이 있으면 name 을 쓰고, 절대 URL이 필요할 때만 src 를 쓴다.
   */
  src?: string
  loop?: boolean | number
  /** 최초 자동 재생. 기본 true. controls 와 함께 쓰면 playing 상태의 초기값으로도 쓰인다 */
  autoplay?: boolean
  /**
   * 재생·정지 아이콘 버튼 표시.
   * 움직이는 애니메이션에 접근성 제어가 필요할 때 켠다. 기본 false
   */
  controls?: boolean
  /** 제어 재생 여부 */
  playing?: boolean
  /** 비제어 초기 재생. 기본은 autoplay */
  defaultPlaying?: boolean
  /** 재생/정지 상태가 바뀔 때 호출 */
  onPlayingChange?: (playing: boolean) => void
  /** prefers-reduced-motion 이면 처음부터 정지. 기본 true */
  respectReducedMotion?: boolean
  ariaLabel?: string
  width?: number | string
  height?: number | string
  renderer?: RendererType
  /** 로딩 문구. fetch 중 표시 */
  loadingLabel?: string
}

/**
 * Lottie JSON 애니메이션.
 * 모든 래퍼는 span. lottie-web 도 span 컨테이너에 붙여 표준 마크업을 유지한다.
 */
export function Lottie ({
  name = '',
  animationData: animationDataProp,
  src = '',
  loop = true,
  autoplay = true,
  controls = false,
  playing: playingProp,
  defaultPlaying,
  onPlayingChange,
  respectReducedMotion = true,
  ariaLabel = '애니메이션',
  width,
  height,
  renderer = 'svg',
  loadingLabel = '로딩 중…',
  className,
  style,
  ...rest
}: LottieProps) {
  const [fetchState, setFetchState] = useState<FetchState | null>(null)
  const playingControlled = playingProp !== undefined
  /** null 이면 아직 사용자가 토글하지 않음 → reduced motion / autoplay 기본값 사용 */
  const [userPlaying, setUserPlaying] = useState<boolean | null>(null)
  const reducedMotion = usePrefersReducedMotion(respectReducedMotion)
  const defaultPlay = defaultPlaying ?? !!autoplay
  const playing = playingControlled
    ? !!playingProp
    : (userPlaying ?? (reducedMotion ? false : defaultPlay))

  const playerRef = useRef<HTMLSpanElement | null>(null)
  const animRef = useRef<AnimationItem | null>(null)

  const resolvedSrc = animationDataProp
    ? ''
    : resolveLottieSrc(name || src)

  const fetchMatches = fetchState?.key === resolvedSrc
  const fetchedData = fetchMatches && fetchState.status === 'success'
    ? fetchState.data
    : null
  const fetchError = !!(fetchMatches && fetchState.status === 'error')
  const animationData = animationDataProp ?? fetchedData
  const loading = !!resolvedSrc && !animationDataProp && !fetchMatches

  useEffect(() => {
    if (animationDataProp || !resolvedSrc) return

    let cancelled = false
    fetch(resolvedSrc)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${resolvedSrc}`)
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        setFetchState({ key: resolvedSrc, status: 'success', data })
      })
      .catch((err) => {
        console.error(err)
        if (!cancelled) setFetchState({ key: resolvedSrc, status: 'error' })
      })

    return () => {
      cancelled = true
    }
  }, [resolvedSrc, animationDataProp])

  useEffect(() => {
    const container = playerRef.current
    if (!container || !animationData) return

    container.replaceChildren()
    const anim = lottie.loadAnimation({
      container,
      renderer,
      loop,
      autoplay: false,
      animationData: animationData as object
    })
    animRef.current = anim

    if (playing) anim.play()
    else anim.goToAndStop(0, true)

    return () => {
      anim.destroy()
      if (animRef.current === anim) animRef.current = null
    }
    // playing 은 아래 effect 에서 동기화
    // eslint-disable-next-line react-hooks/exhaustive-deps -- remount only when data/renderer/loop change
  }, [animationData, renderer, loop])

  useEffect(() => {
    const anim = animRef.current
    if (!anim) return
    if (!playing) {
      anim.pause()
      return
    }
    // loop=false 로 끝난 뒤 재생하면 처음부터 다시 재생
    const atEnd = anim.currentFrame >= anim.totalFrames - 1
    if (atEnd) anim.goToAndPlay(0, true)
    else anim.play()
  }, [playing])

  function setPlaying (next: boolean) {
    if (!playingControlled) setUserPlaying(next)
    onPlayingChange?.(next)
  }

  function togglePlaying () {
    setPlaying(!playing)
  }

  const rootStyle: CSSProperties | undefined = style
  const stageStyle: CSSProperties = {
    ...(width !== undefined ? { width } : null),
    ...(height !== undefined ? { height } : null)
  }

  return (
    <span
      {...rest}
      className={classNames(
        'lottie',
        controls && 'lottie_controls-on',
        loading && 'is-loading',
        fetchError && 'is-error',
        className
      )}
      style={rootStyle}
      data-playing={playing ? 'true' : 'false'}
      data-lottie={name || undefined}
    >
      <span
        className="lottie_stage"
        role="img"
        aria-label={ariaLabel}
        style={stageStyle}
      >
        {animationData ? (
          <span
            ref={playerRef}
            className="lottie_player"
            aria-hidden="true"
          />
        ) : loading ? (
          <span className="lottie_loading">{loadingLabel}</span>
        ) : fetchError ? (
          <span className="lottie_loading">불러오지 못했습니다</span>
        ) : null}
      </span>

      {controls ? (
        <span className="lottie_controls">
          <Button
            iconOnly
            variant="outline"
            color="default"
            ariaLabel={playing ? '애니메이션 정지' : '애니메이션 재생'}
            aria-pressed={playing}
            disabled={!animationData}
            onClick={togglePlaying}
            iconBefore={<Icon name={playing ? 'pause' : 'play'} />}
          />
        </span>
      ) : null}
    </span>
  )
}

export default Lottie
