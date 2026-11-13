import { routeMetadata } from '@/lib/routeMetadata' // route Metadata
import { componentStaticParams } from '@/lib/staticParams' // component Static Params
import { RegistryPage } from '@/lib/RegistryPage' // Registry Page 컴포넌트
import { componentLoaders, componentMeta } from '@/generated/registry-component' // registry component

// 정적 export에 등록되지 않은 경로는 개발 환경에서도 404로 처리한다.
export const dynamicParams = false

export function generateStaticParams () {
  return componentStaticParams()
}

export default async function Page ({ params }) {
  const { name: segments } = await params
  const name = segments.join('/')
  return <RegistryPage loaders={componentLoaders} metaMap={componentMeta} routeKey={name} meta={{ ...componentMeta[name], footer: false }} />
}

export async function generateMetadata ({ params }) {
  const { name: segments } = await params
  const name = segments.join('/')
  return routeMetadata(`/pub/guide/${name}`)
}
