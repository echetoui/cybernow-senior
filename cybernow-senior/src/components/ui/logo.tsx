"use client";

import { Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'dark';
  showText?: boolean;
  className?: string;
  alt?: string;
}

const sizeConfig = {
  sm: {
    icon: 'h-5 w-5',
    text: 'text-sm',
    container: 'gap-1.5',
    cybernow: 'text-sm font-bold leading-none',
    seniors: 'text-xs font-medium leading-none'
  },
  md: {
    icon: 'h-6 w-6',
    text: 'text-base',
    container: 'gap-2',
    cybernow: 'text-base font-bold leading-none',
    seniors: 'text-sm font-medium leading-none'
  },
  lg: {
    icon: 'h-12 w-12',
    text: 'text-3xl',
    container: 'gap-3',
    cybernow: 'text-3xl font-bold',
    seniors: 'text-xl font-medium'
  },
  xl: {
    icon: 'h-16 w-16',
    text: 'text-4xl',
    container: 'gap-4',
    cybernow: 'text-4xl font-bold',
    seniors: 'text-2xl font-medium'
  }
};

const variantConfig = {
  default: {
    icon: 'text-primary',
    cybernow: 'text-primary',
    seniors: 'text-primary' // Changed to primary for WCAG compliance
  },
  white: {
    icon: 'text-white',
    cybernow: 'text-white',
    seniors: 'text-white'
  },
  dark: {
    icon: 'text-primary',
    cybernow: 'text-primary',
    seniors: 'text-primary' // Changed to primary for WCAG compliance
  }
};

export function Logo({ 
  size = 'md', 
  variant = 'default', 
  showText = true, 
  className,
  alt = "Logo Cybernow Seniors - Protection numérique pour aînés"
}: LogoProps) {
  const sizeClasses = sizeConfig[size];
  const variantClasses = variantConfig[variant];

  return (
    <div className={cn(
      'flex items-center justify-center', 
      sizeClasses.container,
      className
    )}>
      {/* Icon avec effet de protection */}
      <div className="relative flex items-center" role="img" aria-label={alt}>
        <Shield 
          className={cn(
            sizeClasses.icon, 
            variantClasses.icon,
            'drop-shadow-sm'
          )} 
          aria-hidden="true" 
        />
      </div>
      
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          {/* CYBERNOW */}
          <span className={cn(
            sizeClasses.cybernow,
            variantClasses.cybernow,
            'tracking-wide font-heading font-bold'
          )}>
            CYBERNOW
          </span>
          {/* Seniors */}
          <span className={cn(
            sizeClasses.seniors,
            variantClasses.seniors,
            'tracking-wide font-heading font-semibold'
          )}>
            Seniors
          </span>
        </div>
      )}
    </div>
  );
}

// Composant Logo pour usage en tant que lien
interface LogoLinkProps extends LogoProps {
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export function LogoLink({ 
  href = '/', 
  onClick, 
  ariaLabel = 'Accueil CyberNow Seniors',
  className,
  ...logoProps 
}: LogoLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        'inline-flex items-center transition-all duration-200',
        'hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2',
        'focus-visible:outline-brand rounded-lg p-1',
        className
      )}
      aria-label={ariaLabel}
    >
      <Logo {...logoProps} />
    </a>
  );
}