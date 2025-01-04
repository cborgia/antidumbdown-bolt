'use client';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ResourceType, ContentFormat, ContentStyle } from '@/lib/types';
import { Search } from 'lucide-react';

interface ResourceFiltersProps {
  onFilterChange: (filters: {
    search: string;
    type?: ResourceType;
    format?: ContentFormat;
    style?: ContentStyle;
  }) => void;
}

export function ResourceFilters({ onFilterChange }: ResourceFiltersProps) {
  return (
    <div className="w-full md:w-64 space-y-4 sticky top-4">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search resources..." 
          className="pl-8"
          onChange={(e) => onFilterChange({ search: e.target.value })}
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Type</label>
          <Select onValueChange={(value) => onFilterChange({ type: value as ResourceType })}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="youtube">YouTube</SelectItem>
              <SelectItem value="website">Website</SelectItem>
              <SelectItem value="podcast">Podcast</SelectItem>
              <SelectItem value="book">Book</SelectItem>
              <SelectItem value="tv_show">TV Show</SelectItem>
              <SelectItem value="blog">Blog</SelectItem>
              <SelectItem value="substack">Substack</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Format</label>
          <Select onValueChange={(value) => onFilterChange({ format: value as ContentFormat })}>
            <SelectTrigger>
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="video">Video</SelectItem>
              <SelectItem value="audio">Audio</SelectItem>
              <SelectItem value="text">Text</SelectItem>
              <SelectItem value="mixed">Mixed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Style</label>
          <Select onValueChange={(value) => onFilterChange({ style: value as ContentStyle })}>
            <SelectTrigger>
              <SelectValue placeholder="Select style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="casual">Casual</SelectItem>
              <SelectItem value="academic">Academic</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="educational">Educational</SelectItem>
              <SelectItem value="entertainment">Entertainment</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
