'use client';

import { Source } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { ReminderDialog } from '@/components/reminder-dialog';
import Link from 'next/link';

interface SourceCardProps {
  source: Source;
}

export function SourceCard({ source }: SourceCardProps) {
  const [liked, setLiked] = useState(false);
  const [reminderOpen, setReminderOpen] = useState(false);

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <Link href={`/source/${source.id}`}>
        <CardHeader>
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="font-semibold leading-tight">{source.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{source.description}</p>
            </div>
            {source.imageUrl && (
              <img 
                src={source.imageUrl} 
                alt={source.title} 
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
          </div>
        </CardHeader>
      </Link>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {source.style.map((style) => (
            <Badge key={style} variant="secondary">
              {style}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {source.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
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
          <a href={source.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Visit
          </a>
        </Button>
      </CardFooter>
      <ReminderDialog 
        open={reminderOpen} 
        onOpenChange={setReminderOpen}
        resourceId={source.id}
        resourceTitle={source.title}
      />
    </Card>
  );
}
