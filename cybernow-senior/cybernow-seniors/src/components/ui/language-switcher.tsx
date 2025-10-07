'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from './button';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLocale('fr')}
        className={cn(
          "rounded-none min-h-10 px-3 border-0",
          locale === 'fr' 
            ? "bg-primary text-primary-foreground font-semibold" 
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        )}
        aria-label="Changer pour le français"
        aria-pressed={locale === 'fr'}
      >
        FR
      </Button>
      
      <div className="w-px h-6 bg-border" />
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLocale('en')}
        className={cn(
          "rounded-none min-h-10 px-3 border-0",
          locale === 'en' 
            ? "bg-primary text-primary-foreground font-semibold" 
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        )}
        aria-label="Switch to English"
        aria-pressed={locale === 'en'}
      >
        EN
      </Button>
    </div>
  );
}