'use client';

import { Entry } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { ReminderDialog } from '@/components/reminder-dialog';
import { initialSources } from '@/data/initial-data';
import Link from 'next/link';

interface EntryCardProps {
  entry: Entry;
}

export function EntryCard({ entry }: EntryCardProps) {
  const [liked, setLiked] = useState(false);
  const [reminderOpen, setReminderOpen] = useState(false);

  const source = initialSources.find(s => s.id === entry.sourceId);

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <Link href={`/entry/${entry.id}`}>
        <CardHeader>
          <div className="space-y-2">
            {entry.thumbnailUrl && (
              <img 
                src={entry.thumbnailUrl} 
                alt={entry.title} 
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            <div>
              <h3 className="font-semibold leading-tight">{entry.title}</h3>
              {source && (
                <Link 
                  href={`/source/${source.id}`}
                  className="text-sm text-muted-foreground hover:underline"
                >
                  {source.title}
                </Link>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{entry.description}</p>
          </div>
        </CardHeader>
      </Link>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        {entry.duration && (
          <div className="mt-2 text-sm text-muted-foreground">
            Duration: {entry.duration}
          </div>
        )}
      </CardContent>
      <CardFooter className="gap-2">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={(e) => {
            e.preventDefault();
            setLiked(!liked);
          }}
          className={liked ? 'text-red-500' : ''}
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={(e) => {
            e.preventDefault();
            setReminderOpen(true);
          }}
        >
          <Clock className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <MessageCircle className="h-4 w-4" />
        </Button>
        <Button variant="default" size="sm" className="ml-auto" asChild>
          <a href={entry.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Watch
          </a>
        </Button>
      </CardFooter>
      <ReminderDialog 
        open={reminderOpen} 
        onOpenChange={setReminderOpen}
        resourceId={entry.id}
        resourceTitle={entry.title}
      />
    </Card>
  );
}
