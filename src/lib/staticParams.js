/** Static route metadata only. Never import optional project loaders here. */
import { projectRoutes, componentNames, demoNames } from '@/generated/registry-ids'
export function projectStaticParams (id) {
  return (projectRoutes[id] || []).map((key) => ({ slug: key.split('/') }))
}
export function componentStaticParams () {
  return componentNames.map((name) => ({ name: name.split('/') }))
}
export function demoStaticParams () {
  return demoNames.map((name) => ({ name: name.split('/') }))
}
