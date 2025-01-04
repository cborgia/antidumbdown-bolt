import { Source, Entry } from '@/lib/types';

export const initialSources: Source[] = [
  {
    id: '1',
    title: 'Animagraffs',
    url: 'https://www.youtube.com/@animagraffs',
    type: 'youtube',
    format: 'video',
    style: ['educational', 'professional'],
    description: 'Detailed animated explanations of how things work',
    tags: ['animation', 'engineering', 'education', 'explainer'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    imageUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKYYrXovRlrMZ2tVwYgQPbEZh3Z4b0J9G9nBsQ=s176-c-k-c0x00ffffff-no-rj'
  },
  // ... other sources
];

export const initialEntries: Entry[] = [
  {
    id: 'e1',
    sourceId: '1',
    title: 'How Jet Engines Work',
    url: 'https://www.youtube.com/watch?v=example1',
    description: 'Detailed explanation of jet engine mechanics',
    publishedAt: new Date().toISOString(),
    duration: '15:30',
    thumbnailUrl: 'https://example.com/thumbnail1.jpg',
    tags: ['engineering', 'aviation', 'mechanics']
  },
  // ... other entries
];
