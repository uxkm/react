/** 정적 경로 목록만 사용합니다. B2B 화면 로더는 가져오지 않습니다. */
import { b2bRoutes, componentNames, demoNames } from '@/generated/registry-ids' // registry ids
export function b2bStaticParams () {
  return b2bRoutes.map((key) => ({ slug: key.split('/') }))
}
export function componentStaticParams () {
  return componentNames.map((name) => ({ name: name.split('/') }))
}
export function demoStaticParams () {
  return demoNames.map((name) => ({ name: name.split('/') }))
}
