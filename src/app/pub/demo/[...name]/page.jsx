import { routeMetadata } from '@/lib/routeMetadata' // route Metadata
import { demoStaticParams } from '@/lib/staticParams' // demo Static Params
import { RegistryPage } from '@/lib/RegistryPage' // Registry Page 컴포넌트
import { demoLoaders, demoMeta } from '@/generated/registry-demo' // registry demo

// 정적 export에 등록되지 않은 경로는 개발 환경에서도 404로 처리한다.
export const dynamicParams = false

export function generateStaticParams () {
  return demoStaticParams()
}

export default async function Page ({ params }) {
  const { name: segments } = await params
  const name = segments.join('/')
  return <RegistryPage loaders={demoLoaders} metaMap={demoMeta} routeKey={name} />
}

export async function generateMetadata ({ params }) {
  const { name: segments } = await params
  const name = segments.join('/')
  return routeMetadata(`/pub/demo/${name}`)
}
