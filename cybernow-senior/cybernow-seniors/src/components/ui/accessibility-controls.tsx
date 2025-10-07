'use client';

import { useState, useEffect } from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';

type TextSize = 'normal' | 'large' | 'xl';

export function AccessibilityControls() {
  const [textSize, setTextSize] = useState<TextSize>('normal');

  useEffect(() => {
    // Load saved preference
    const saved = localStorage.getItem('textSize') as TextSize | null;
    if (saved) {
      setTextSize(saved);
      applyTextSize(saved);
    }
  }, []);

  const applyTextSize = (size: TextSize) => {
    const html = document.documentElement;
    html.classList.remove('large-text', 'xl-text');
    
    if (size === 'large') {
      html.classList.add('large-text');
    } else if (size === 'xl') {
      html.classList.add('xl-text');
    }
  };

  const changeTextSize = (newSize: TextSize) => {
    setTextSize(newSize);
    applyTextSize(newSize);
    localStorage.setItem('textSize', newSize);
  };

  const increaseText = () => {
    if (textSize === 'normal') changeTextSize('large');
    else if (textSize === 'large') changeTextSize('xl');
  };

  const decreaseText = () => {
    if (textSize === 'xl') changeTextSize('large');
    else if (textSize === 'large') changeTextSize('normal');
  };

  const getSizeLabel = (size: TextSize) => {
    switch (size) {
      case 'normal': return 'Normale';
      case 'large': return 'Grande';
      case 'xl': return 'Très grande';
    }
  };

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Contrôles d'accessibilité">
      <Button
        variant="ghost"
        size="sm"
        onClick={decreaseText}
        disabled={textSize === 'normal'}
        aria-label="Diminuer la taille du texte"
        className={cn(
          "min-w-10 min-h-10 text-sm font-semibold",
          "hover:bg-muted focus-visible:outline-brand"
        )}
      >
        A-
      </Button>
      
      <span 
        className="text-xs text-muted-foreground px-2 sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        Taille actuelle: {getSizeLabel(textSize)}
      </span>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={increaseText}
        disabled={textSize === 'xl'}
        aria-label="Augmenter la taille du texte"
        className={cn(
          "min-w-10 min-h-10 text-sm font-semibold",
          "hover:bg-muted focus-visible:outline-brand"
        )}
      >
        A+
      </Button>
    </div>
  );
}