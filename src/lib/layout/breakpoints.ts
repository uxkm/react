/**
 * PC 브레이크포인트(px) — styles/foundations/_variables.scss $bp-pc 와 동일
 */
export const BP_PC = {
  'pc-sm': 1024,
  'pc-md': 1440,
  'pc-lg': 1920,
  'pc-xl': 2580
} as const

export type PcBreakpointName = keyof typeof BP_PC

/** Modal/Drawer adaptive 브레이크포인트 */
export type AdaptiveBreakpoint = number | PcBreakpointName

/** adaptive 기본 기준 — pc-md (1440) */
export const ADAPTIVE_BREAKPOINT_DEFAULT: PcBreakpointName = 'pc-md'

/** 토큰명 또는 px 숫자를 min-width 기준 px로 해석 */
export function resolveAdaptiveBreakpoint (
  breakpoint: AdaptiveBreakpoint = ADAPTIVE_BREAKPOINT_DEFAULT
): number {
  if (typeof breakpoint === 'number' && Number.isFinite(breakpoint) && breakpoint > 0) {
    return Math.round(breakpoint)
  }
  if (typeof breakpoint === 'string' && breakpoint in BP_PC) {
    return BP_PC[breakpoint]
  }
  return BP_PC[ADAPTIVE_BREAKPOINT_DEFAULT]
}
