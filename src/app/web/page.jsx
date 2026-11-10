// @generated-project-route
import { RegistryPage } from '@/lib/RegistryPage'
import { indexLoaders, indexMeta } from '@/generated/registry-web'
import { routeMetadata } from '@/lib/routeMetadata'
export const metadata = routeMetadata('/web')
export default function Page () { return <RegistryPage loaders={indexLoaders} metaMap={indexMeta} routeKey="main" /> }
