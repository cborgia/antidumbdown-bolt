'use client';

import { Button } from '@/components/ui/button';
import { Wand2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export function WizardButton() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    medium: '',
    style: '',
  });

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Here you would implement the logic to find a matching resource
      setOpen(false);
      setStep(1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Wand2 className="mr-2 h-4 w-4" />
          Discovery Wizard
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Find Your Next Knowledge Source</DialogTitle>
          <DialogDescription>
            Let's help you discover something new to learn from
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-sm font-medium">How do you prefer to learn?</div>
              <RadioGroup
                value={preferences.medium}
                onValueChange={(value) => 
                  setPreferences({ ...preferences, medium: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="watch" id="watch" />
                  <Label htmlFor="watch">Watch</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="read" id="read" />
                  <Label htmlFor="read">Read</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="listen" id="listen" />
                  <Label htmlFor="listen">Listen</Label>
                </div>
              </RadioGroup>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="text-sm font-medium">What style do you prefer?</div>
              <RadioGroup
                value={preferences.style}
                onValueChange={(value) =>
                  setPreferences({ ...preferences, style: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="casual" id="casual" />
                  <Label htmlFor="casual">Casual Conversation</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="academic" id="academic" />
                  <Label htmlFor="academic">Academic</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="professional" id="professional" />
                  <Label htmlFor="professional">Professional</Label>
                </div>
              </RadioGroup>
            </div>
          )}
        </div>

        <Button onClick={handleNext}>
          {step === 2 ? 'Find Resources' : 'Next'}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
