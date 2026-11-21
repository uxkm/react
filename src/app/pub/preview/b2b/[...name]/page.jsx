import { routeMetadata } from '@/lib/page/routeMetadata';
import { previewStaticParams } from '@/lib/page/staticParams';
import { RegistryPage } from '@/lib/page/RegistryPage';
import { previewLoaders, previewMeta } from '@/generated/registry-preview-b2b';

export const dynamicParams = false;
export const generateStaticParams = previewStaticParams;

export default async function Page({ params }) {
  const { name } = await params;
  return (
    <RegistryPage
      loaders={previewLoaders}
      metaMap={previewMeta}
      routeKey={name.join('/')}
    />
  );
}

export async function generateMetadata({ params }) {
  const { name } = await params;
  return routeMetadata('/pub/preview/b2b/' + name.join('/'));
}
