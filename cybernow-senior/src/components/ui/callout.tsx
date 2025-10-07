import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CalloutProps {
  children: React.ReactNode;
  variant?: 'default' | 'warning' | 'danger' | 'success' | 'info';
  icon?: LucideIcon;
  className?: string;
}

const variantStyles = {
  default: 'bg-muted border-border text-foreground',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
  danger: 'bg-red-50 border-red-200 text-red-900',
  success: 'bg-green-50 border-green-200 text-green-900',
  info: 'bg-blue-50 border-blue-200 text-blue-900',
};

export function Callout({ 
  children, 
  variant = 'default', 
  icon: Icon,
  className 
}: CalloutProps) {
  return (
    <div 
      className={cn(
        "p-4 rounded-2xl border",
        variantStyles[variant],
        className
      )}
      role={variant === 'danger' ? 'alert' : variant === 'warning' ? 'note' : undefined}
    >
      <div className="flex gap-3">
        {Icon && (
          <Icon 
            className="h-5 w-5 mt-0.5 flex-shrink-0" 
            aria-hidden="true"
          />
        )}
        <div className="flex-1 text-body leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}