'use client';

import { Button } from '@/components/ui/button';
import { Grid2X2, List } from 'lucide-react';

interface ViewToggleProps {
  showEntries: boolean;
  onToggle: (show: boolean) => void;
}

export function ViewToggle({ showEntries, onToggle }: ViewToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant={showEntries ? 'outline' : 'default'}
        size="sm"
        onClick={() => onToggle(false)}
      >
        <Grid2X2 className="h-4 w-4 mr-2" />
        Sources
      </Button>
      <Button
        variant={showEntries ? 'default' : 'outline'}
        size="sm"
        onClick={() => onToggle(true)}
      >
        <List className="h-4 w-4 mr-2" />
        Latest Entries
      </Button>
    </div>
  );
}
