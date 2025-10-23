"use client";

import { Phone, AlertCircle } from 'lucide-react';
import { Button } from './button';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface EmergencyButtonProps {
  phoneNumber?: string;
  variant?: 'floating' | 'inline';
  className?: string;
}

export function EmergencyButton({
  phoneNumber,
  variant = 'floating',
  className = '',
}: EmergencyButtonProps) {
  const t = useTranslations();
  const phone = phoneNumber || t('common.phone');
  const [isHovered, setIsHovered] = useState(false);

  if (variant === 'floating') {
    return (
      <>
        {/* Bouton flottant fixe en bas à droite */}
        <div className={`fixed bottom-6 right-6 z-40 ${className}`}>
          <a
            href={`tel:${phone}`}
            className="group relative block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Aide urgente - Appelez-nous maintenant"
          >
            {/* Cercles de pulse */}
            <span className="absolute inset-0 rounded-full bg-alert-orange animate-ping opacity-75" />
            <span className="absolute inset-0 rounded-full bg-alert-orange animate-pulse" />

            {/* Bouton principal */}
            <div className="relative flex items-center gap-3 bg-gradient-to-r from-alert-orange to-orange-600 text-white rounded-full px-6 py-4 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 min-h-[60px]">
              <AlertCircle className="h-6 w-6 animate-pulse" aria-hidden="true" />
              <div className="flex flex-col items-start">
                <span className="text-xs font-semibold uppercase tracking-wide">Urgence</span>
                <span className="text-sm font-bold whitespace-nowrap">Aide immédiate</span>
              </div>
              <Phone className="h-6 w-6" aria-hidden="true" />
            </div>

            {/* Tooltip au hover */}
            {isHovered && (
              <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-sm py-2 px-4 rounded-lg shadow-xl whitespace-nowrap">
                Cliquez pour appeler {phone}
                <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900" />
              </div>
            )}
          </a>
        </div>

        {/* Styles d'animation personnalisés */}
        <style jsx>{`
          @keyframes ping {
            75%, 100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }
          .animate-ping {
            animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}</style>
      </>
    );
  }

  // Variant inline pour insertion dans sections
  return (
    <Button
      asChild
      className={`bg-gradient-to-r from-alert-orange to-orange-600 hover:from-orange-600 hover:to-alert-orange text-white font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-pulse ${className}`}
      size="lg"
    >
      <a href={`tel:${phone}`} className="flex items-center gap-3">
        <AlertCircle className="h-5 w-5" aria-hidden="true" />
        <span>Aide urgente 24/7</span>
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>
    </Button>
  );
}

// Composant pour afficher conditionnellement selon l'heure
export function SmartEmergencyButton() {
  // Détecte si c'est en dehors des heures d'ouverture
  const isAfterHours = () => {
    const hour = new Date().getHours();
    return hour < 8 || hour > 20; // Fermé entre 20h et 8h
  };

  return (
    <div className="relative">
      <EmergencyButton variant="floating" />

      {isAfterHours() && (
        <div className="fixed bottom-28 right-6 z-39 bg-white border-2 border-alert-orange rounded-xl p-4 shadow-2xl max-w-xs">
          <p className="text-sm font-semibold text-secondary mb-2">
            ⏰ Hors heures d&apos;ouverture
          </p>
          <p className="text-xs text-muted-foreground">
            Laissez un message ou appelez pour une urgence. Nous vous rappellerons dès 8h.
          </p>
        </div>
      )}
    </div>
  );
}
