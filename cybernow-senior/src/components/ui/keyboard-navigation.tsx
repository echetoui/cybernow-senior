"use client";

import * as React from "react";

/**
 * Hook pour gérer la navigation clavier dans les composants
 */
export function useKeyboardNavigation() {
  const [focusedIndex, setFocusedIndex] = React.useState(-1);

  const handleKeyDown = React.useCallback((
    event: React.KeyboardEvent,
    items: NodeListOf<Element> | Element[],
    options: {
      loop?: boolean;
      orientation?: 'horizontal' | 'vertical' | 'both';
      onEnter?: (index: number) => void;
      onEscape?: () => void;
    } = {}
  ) => {
    const { loop = true, orientation = 'vertical', onEnter, onEscape } = options;
    const itemsArray = Array.from(items);

    switch (event.key) {
      case 'ArrowDown':
        if (orientation === 'vertical' || orientation === 'both') {
          event.preventDefault();
          const nextIndex = focusedIndex < itemsArray.length - 1 ? focusedIndex + 1 : loop ? 0 : focusedIndex;
          setFocusedIndex(nextIndex);
          (itemsArray[nextIndex] as HTMLElement)?.focus();
        }
        break;

      case 'ArrowUp':
        if (orientation === 'vertical' || orientation === 'both') {
          event.preventDefault();
          const prevIndex = focusedIndex > 0 ? focusedIndex - 1 : loop ? itemsArray.length - 1 : focusedIndex;
          setFocusedIndex(prevIndex);
          (itemsArray[prevIndex] as HTMLElement)?.focus();
        }
        break;

      case 'ArrowRight':
        if (orientation === 'horizontal' || orientation === 'both') {
          event.preventDefault();
          const nextIndex = focusedIndex < itemsArray.length - 1 ? focusedIndex + 1 : loop ? 0 : focusedIndex;
          setFocusedIndex(nextIndex);
          (itemsArray[nextIndex] as HTMLElement)?.focus();
        }
        break;

      case 'ArrowLeft':
        if (orientation === 'horizontal' || orientation === 'both') {
          event.preventDefault();
          const prevIndex = focusedIndex > 0 ? focusedIndex - 1 : loop ? itemsArray.length - 1 : focusedIndex;
          setFocusedIndex(prevIndex);
          (itemsArray[prevIndex] as HTMLElement)?.focus();
        }
        break;

      case 'Home':
        event.preventDefault();
        setFocusedIndex(0);
        (itemsArray[0] as HTMLElement)?.focus();
        break;

      case 'End':
        event.preventDefault();
        const lastIndex = itemsArray.length - 1;
        setFocusedIndex(lastIndex);
        (itemsArray[lastIndex] as HTMLElement)?.focus();
        break;

      case 'Enter':
      case ' ':
        if (focusedIndex >= 0 && onEnter) {
          event.preventDefault();
          onEnter(focusedIndex);
        }
        break;

      case 'Escape':
        if (onEscape) {
          event.preventDefault();
          onEscape();
        }
        break;
    }
  }, [focusedIndex]);

  return {
    focusedIndex,
    setFocusedIndex,
    handleKeyDown
  };
}

/**
 * Hook pour gérer le focus trap (modal, dropdown)
 */
export function useFocusTrap(isActive: boolean) {
  const containerRef = React.useRef<HTMLElement>(null);
  const previousActiveElement = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!isActive) return;

    // Sauvegarder l'élément actuellement focusé
    previousActiveElement.current = document.activeElement as HTMLElement;

    const container = containerRef.current;
    if (!container) return;

    // Trouver tous les éléments focusables
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    // Focus sur le premier élément
    firstElement?.focus();

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // Retourner le focus à l'élément précédent
        previousActiveElement.current?.focus();
      }
    };

    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('keydown', handleEscapeKey);
      
      // Restaurer le focus
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isActive]);

  return containerRef;
}

/**
 * Hook pour annoncer des changements aux lecteurs d'écran
 */
export function useScreenReaderAnnouncer() {
  const [announcement, setAnnouncement] = React.useState('');

  const announce = React.useCallback((message: string) => {
    setAnnouncement(message);
    
    // Clear après un délai pour permettre les nouvelles annonces
    setTimeout(() => setAnnouncement(''), 1000);
  }, []);

  const AnnouncementRegion = React.useMemo(() => (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
      role="status"
    >
      {announcement}
    </div>
  ), [announcement]);

  return {
    announce,
    AnnouncementRegion
  };
}

/**
 * Composant Skip Link pour navigation clavier
 */
export function SkipLinks() {
  return (
    <div className="skip-links">
      <a 
        href="#main-content" 
        className="skip-link"
      >
        Aller au contenu principal
      </a>
      <a 
        href="#navigation" 
        className="skip-link"
      >
        Aller à la navigation
      </a>
      <a 
        href="#search" 
        className="skip-link"
      >
        Aller à la recherche
      </a>
      <a 
        href="#footer" 
        className="skip-link"
      >
        Aller au pied de page
      </a>
    </div>
  );
}

/**
 * Composant pour améliorer l'accessibilité des listes interactives
 */
interface AccessibleListProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  onItemSelect?: (index: number) => void;
  className?: string;
  role?: string;
}

export function AccessibleList({ 
  children, 
  orientation = 'vertical',
  onItemSelect,
  className = '',
  role = 'menu'
}: AccessibleListProps) {
  const listRef = React.useRef<HTMLDivElement>(null);
  const { handleKeyDown } = useKeyboardNavigation();

  const handleKeyDownWrapper = (event: React.KeyboardEvent) => {
    const items = listRef.current?.querySelectorAll('[role="menuitem"], button, a');
    if (items) {
      handleKeyDown(event, items, {
        orientation,
        onEnter: onItemSelect
      });
    }
  };

  return (
    <div
      ref={listRef}
      role={role}
      className={`accessible-list ${className}`}
      onKeyDown={handleKeyDownWrapper}
      tabIndex={-1}
    >
      {children}
    </div>
  );
}

/**
 * Hook pour gérer l'état de loading accessible
 */
export function useAccessibleLoading() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [loadingMessage, setLoadingMessage] = React.useState('');

  const startLoading = (message: string = 'Chargement en cours...') => {
    setIsLoading(true);
    setLoadingMessage(message);
  };

  const stopLoading = () => {
    setIsLoading(false);
    setLoadingMessage('');
  };

  const LoadingIndicator = React.useMemo(() => (
    isLoading ? (
      <div
        role="status"
        aria-live="polite"
        aria-label={loadingMessage}
        className="loading-indicator"
      >
        <span className="sr-only">{loadingMessage}</span>
        <div className="loading-spinner" aria-hidden="true" />
      </div>
    ) : null
  ), [isLoading, loadingMessage]);

  return {
    isLoading,
    startLoading,
    stopLoading,
    LoadingIndicator
  };
}