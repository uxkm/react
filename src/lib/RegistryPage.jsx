import 'server-only' // server-only 패키지

import { notFound } from 'next/navigation' // 404 처리
import { PageLayoutVisibility } from '@/comp/layout/PageLayoutVisibility' // Page Layout Visibility 컴포넌트

/** 서버에서 화면 모듈을 읽어 초기 HTML과 RSC 응답에 본문을 포함한다. */
export async function RegistryPage ({ loaders, metaMap, routeKey, meta }) {
  const load = Object.hasOwn(loaders, routeKey) ? loaders[routeKey] : null
  if (!load) notFound()

  // 청크 로딩 오류는 error.jsx에 전달하고, 없는 경로만 404로 처리한다.
  const { default: Screen } = await load()
  return (
    <>
      <PageLayoutVisibility meta={meta ?? metaMap?.[routeKey]} />
      <Screen />
    </>
  )
}
