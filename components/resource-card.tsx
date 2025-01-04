'use client';

import { Resource } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { ReminderDialog } from '@/components/reminder-dialog';

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const [liked, setLiked] = useState(false);
  const [reminderOpen, setReminderOpen] = useState(false);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-semibold leading-tight">{resource.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLiked(!liked)}
            className={liked ? 'text-red-500' : ''}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {resource.style.map((style) => (
            <Badge key={style} variant="secondary">
              {style}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {resource.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm" onClick={() => setReminderOpen(true)}>
          <Clock className="h-4 w-4 mr-2" />
          Remind
        </Button>
        <Button variant="outline" size="sm">
          <MessageCircle className="h-4 w-4 mr-2" />
          Comment
        </Button>
        <Button variant="default" size="sm" className="ml-auto" asChild>
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Visit
          </a>
        </Button>
      </CardFooter>
      <ReminderDialog 
        open={reminderOpen} 
        onOpenChange={setReminderOpen}
        resourceId={resource.id}
        resourceTitle={resource.title}
      />
    </Card>
  );
}
