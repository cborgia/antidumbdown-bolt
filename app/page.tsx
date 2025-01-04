'use client';

import { useState } from 'react';
import { ResourceGrid } from '@/components/resource-grid';
import { ResourceFilters } from '@/components/resource-filters';
import { WizardButton } from '@/components/wizard-button';
import { ViewToggle } from '@/components/view-toggle';
import { ResourceType, ContentFormat, ContentStyle } from '@/lib/types';

export default function Home() {
  const [showEntries, setShowEntries] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    type: undefined as ResourceType | undefined,
    format: undefined as ContentFormat | undefined,
    style: undefined as ContentStyle | undefined,
  });

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">AntiDumbDown</h1>
          <p className="text-muted-foreground">
            A curated directory of high-quality knowledge resources
          </p>
        </header>
        
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <ResourceFilters onFilterChange={handleFilterChange} />
          <div className="flex-1 space-y-6">
            <div className="flex justify-between items-center">
              <ViewToggle showEntries={showEntries} onToggle={setShowEntries} />
              <WizardButton />
            </div>
            <ResourceGrid showEntries={showEntries} filters={filters} />
          </div>
        </div>
      </div>
    </main>
  );
}
