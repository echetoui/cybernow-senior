"use client";

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  className = '',
  threshold = 0.1,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Une fois visible, arrête d'observer (performance)
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Déclenche légèrement avant
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  // Classes d'animation selon le type
  const animationClasses = {
    'fade-up': {
      initial: 'opacity-0 translate-y-8',
      animate: 'opacity-100 translate-y-0',
    },
    'fade-in': {
      initial: 'opacity-0',
      animate: 'opacity-100',
    },
    'slide-left': {
      initial: 'opacity-0 -translate-x-8',
      animate: 'opacity-100 translate-x-0',
    },
    'slide-right': {
      initial: 'opacity-0 translate-x-8',
      animate: 'opacity-100 translate-x-0',
    },
    'zoom-in': {
      initial: 'opacity-0 scale-95',
      animate: 'opacity-100 scale-100',
    },
  };

  const { initial, animate } = animationClasses[animation];

  return (
    <div
      ref={elementRef}
      className={`transition-all ${className} ${isVisible ? animate : initial}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
}

// Hook personnalisé pour utilisation flexible
export function useScrollReveal(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return { elementRef, isVisible };
}

// Composant pour animer une liste d'éléments en cascade
interface ScrollRevealListProps {
  children: ReactNode[];
  stagger?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in';
  className?: string;
}

export function ScrollRevealList({
  children,
  stagger = 100,
  animation = 'fade-up',
  className = '',
}: ScrollRevealListProps) {
  return (
    <>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          animation={animation}
          delay={index * stagger}
          className={className}
        >
          {child}
        </ScrollReveal>
      ))}
    </>
  );
}
