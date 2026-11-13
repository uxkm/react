// @generated-project-route
import { RegistryPage } from '@/lib/RegistryPage' // 레지스트리 페이지 렌더
import { b2bStaticParams } from '@/lib/staticParams' // B2B 정적 경로 파라미터
import { routeMetadata } from '@/lib/routeMetadata' // 라우트 메타데이터
import { indexLoaders, screenLoaders, indexMeta, screenMeta } from '@/generated/registry-b2b' // B2B 화면 레지스트리
import RouteRedirect from '@/comp/providers/RouteRedirect' // 라우트 리다이렉트

export const dynamicParams = false
export function generateStaticParams () { return b2bStaticParams() }
export default async function Page ({ params }) {
  const { slug } = await params
  const key = slug.join('/')
  if (key === 'main') return <RouteRedirect href="/b2b" />
  return <RegistryPage loaders={{ ...indexLoaders, ...screenLoaders }} metaMap={{ ...indexMeta, ...screenMeta }} routeKey={key} />
}
export async function generateMetadata ({ params }) {
  const { slug } = await params
  return routeMetadata('/b2b/' + slug.join('/'))
}
