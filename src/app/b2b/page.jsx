// @generated-project-route
import { RegistryPage } from '@/lib/RegistryPage'
import { indexLoaders, indexMeta } from '@/generated/registry-b2b'
import { routeMetadata } from '@/lib/routeMetadata'
export const metadata = routeMetadata('/b2b')
export default function Page () { return <RegistryPage loaders={indexLoaders} metaMap={indexMeta} routeKey="main" /> }
