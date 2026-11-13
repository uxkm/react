// @generated-project-route
import { RegistryPage } from '@/lib/RegistryPage' // 레지스트리 페이지 렌더
import { indexLoaders, indexMeta } from '@/generated/registry-b2b' // B2B 화면 레지스트리
import { routeMetadata } from '@/lib/routeMetadata' // 라우트 메타데이터
export const metadata = routeMetadata('/b2b')
export default function Page () { return <RegistryPage loaders={indexLoaders} metaMap={indexMeta} routeKey="main" /> }
