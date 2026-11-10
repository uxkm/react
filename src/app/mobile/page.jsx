// @generated-project-route
import { RegistryPage } from '@/lib/RegistryPage'
import { indexLoaders, indexMeta } from '@/generated/registry-mobile'
import { routeMetadata } from '@/lib/routeMetadata'
export const metadata = routeMetadata('/mobile')
export default function Page () { return <RegistryPage loaders={indexLoaders} metaMap={indexMeta} routeKey="main" /> }
