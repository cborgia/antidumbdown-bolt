export type ResourceType = 'youtube' | 'website' | 'podcast' | 'book' | 'tv_show' | 'blog' | 'substack';

export type ContentFormat = 'video' | 'audio' | 'text' | 'mixed';

export type ContentStyle = 'casual' | 'academic' | 'professional' | 'educational' | 'entertainment';

export interface Source {
  id: string;
  title: string;
  url: string;
  type: ResourceType;
  format: ContentFormat;
  style: ContentStyle[];
  description: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  author?: string;
  imageUrl?: string;
}

export interface Entry {
  id: string;
  sourceId: string;
  title: string;
  url: string;
  description: string;
  publishedAt: string;
  duration?: string;
  thumbnailUrl?: string;
  tags: string[];
}

export interface Comment {
  id: string;
  resourceId: string;
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface Reminder {
  id: string;
  resourceId: string;
  userId: string;
  frequency: 'monthly' | 'quarterly';
  nextReminder: string;
  createdAt: string;
}
