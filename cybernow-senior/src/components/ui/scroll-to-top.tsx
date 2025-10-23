"use client";

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from './button';

interface ScrollToTopProps {
  showAfter?: number;
  className?: string;
}

export function ScrollToTop({ showAfter = 300, className = '' }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          variant="default"
          size="icon"
          className={`fixed bottom-6 left-6 z-40 h-14 w-14 rounded-full shadow-2xl bg-gradient-warm hover:bg-gradient-warm-hover text-white transition-all hover:scale-110 ${className}`}
          aria-label="Retour en haut de la page"
        >
          <ArrowUp className="h-6 w-6" aria-hidden="true" />
        </Button>
      )}
    </>
  );
}
