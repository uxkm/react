// @generated-project-route
import { RegistryPage } from '@/lib/RegistryPage'
import { projectStaticParams } from '@/lib/staticParams'
import { routeMetadata } from '@/lib/routeMetadata'
import { indexLoaders, screenLoaders, indexMeta, screenMeta } from '@/generated/registry-b2b'
import RouteRedirect from '@/comp/providers/RouteRedirect'

export const dynamicParams = false
export function generateStaticParams () { return projectStaticParams('b2b') }
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
