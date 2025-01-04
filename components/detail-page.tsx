'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Clock, MessageCircle, Share2 } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Source, Entry } from '@/lib/types';
import { initialEntries } from '@/data/initial-data';
import { useState } from 'react';
import { ReminderDialog } from './reminder-dialog';

interface DetailPageProps {
  item: Source | Entry;
  type: string;
  source: Source | null;
}

export default function DetailPage({ item, type, source }: DetailPageProps) {
  const [liked, setLiked] = useState(false);
  const [reminderOpen, setReminderOpen] = useState(false);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
          </Button>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">{item.title}</h1>
              {type === 'entry' && source && (
                <Link href={`/source/${source.id}`} className="text-muted-foreground hover:underline">
                  {source.title}
                </Link>
              )}
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setLiked(!liked)}
                className={liked ? 'text-red-500' : ''}
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setReminderOpen(true)}
              >
                <Clock className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <p className="text-lg text-muted-foreground">{item.description}</p>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {type === 'source' && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Latest Entries</h2>
              <div className="space-y-4">
                {initialEntries
                  .filter(entry => entry.sourceId === item.id)
                  .map(entry => (
                    <Link 
                      key={entry.id}
                      href={`/entry/${entry.id}`}
                      className="block p-4 rounded-lg border hover:bg-accent"
                    >
                      <h3 className="font-medium">{entry.title}</h3>
                      <p className="text-sm text-muted-foreground">{entry.description}</p>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <ReminderDialog 
        open={reminderOpen} 
        onOpenChange={setReminderOpen}
        resourceId={item.id}
        resourceTitle={item.title}
      />
    </div>
  );
}
