import { initialSources, initialEntries } from '@/data/initial-data';
import { DetailPageClient } from './detail-page-client';

export async function generateStaticParams() {
  const sourceParams = initialSources.map((source) => ({
    type: 'source',
    id: source.id,
  }));

  const entryParams = initialEntries.map((entry) => ({
    type: 'entry',
    id: entry.id,
  }));

  return [...sourceParams, ...entryParams];
}

export default function DetailPage({ params }: { params: { type: string; id: string } }) {
  const { type, id } = params;

  const item = type === 'source' 
    ? initialSources.find(s => s.id === id)
    : initialEntries.find(e => e.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  const source = type === 'source' 
    ? item 
    : initialSources.find(s => s.id === (item as any).sourceId);

  return <DetailPageClient item={item} type={type} source={source} />;
}
