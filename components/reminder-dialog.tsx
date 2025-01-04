'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

interface ReminderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resourceId: string;
  resourceTitle: string;
}

export function ReminderDialog({
  open,
  onOpenChange,
  resourceId,
  resourceTitle,
}: ReminderDialogProps) {
  const [frequency, setFrequency] = useState<'monthly' | 'quarterly'>('monthly');

  const handleSetReminder = () => {
    // Here you would implement the logic to save the reminder
    console.log('Setting reminder:', { resourceId, frequency });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Set Reminder</DialogTitle>
          <DialogDescription>
            Set up a reminder to check out "{resourceTitle}"
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <RadioGroup
            value={frequency}
            onValueChange={(value: 'monthly' | 'quarterly') => setFrequency(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="monthly" id="monthly" />
              <Label htmlFor="monthly">Monthly</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="quarterly" id="quarterly" />
              <Label htmlFor="quarterly">Quarterly</Label>
            </div>
          </RadioGroup>
        </div>

        <Button onClick={handleSetReminder}>Set Reminder</Button>
      </DialogContent>
    </Dialog>
  );
}
