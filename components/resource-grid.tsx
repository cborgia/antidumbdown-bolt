'use client';

import { SourceCard } from './source-card';
import { EntryCard } from './entry-card';
import { initialSources } from '@/data/initial-data';
import { initialEntries } from '@/data/initial-data';
import { ResourceType, ContentFormat, ContentStyle } from '@/lib/types';

interface ResourceGridProps {
  showEntries: boolean;
  filters: {
    search: string;
    type?: ResourceType;
    format?: ContentFormat;
    style?: ContentStyle;
  };
}

export function ResourceGrid({ showEntries, filters }: ResourceGridProps) {
  const filteredSources = initialSources.filter(source => {
    if (filters.search && !source.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !source.description.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    if (filters.type && source.type !== filters.type) return false;
    if (filters.format && source.format !== filters.format) return false;
    if (filters.style && !source.style.includes(filters.style)) return false;
    return true;
  });

  const filteredEntries = initialEntries.filter(entry => {
    const source = initialSources.find(s => s.id === entry.sourceId);
    if (!source) return false;

    if (filters.search && !entry.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !entry.description.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    if (filters.type && source.type !== filters.type) return false;
    if (filters.format && source.format !== filters.format) return false;
    if (filters.style && !source.style.includes(filters.style)) return false;
    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {showEntries
        ? filteredEntries.map((entry) => (
            <EntryCard key={entry.id} entry={entry} />
          ))
        : filteredSources.map((source) => (
            <SourceCard key={source.id} source={source} />
          ))}
    </div>
  );
}
