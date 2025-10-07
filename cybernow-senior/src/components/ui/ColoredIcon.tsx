"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ColoredIconProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  name: "heart-handshake" | "map-pin" | "accessibility" | "shield" | "help-circle" | "alert-triangle" | "phone" | "users" | "message-square" | "clock";
  alt?: string;
  decorative?: boolean;
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8", 
  lg: "w-10 h-10",
  xl: "w-12 h-12"
};

/**
 * Icônes colorées et modernes pour Cybernow Seniors
 * Design vibrant avec dégradés et couleurs de la palette
 */
export function ColoredIcon({ 
  size = "md", 
  className, 
  name, 
  alt,
  decorative = false,
  ...props 
}: ColoredIconProps) {
  const baseClasses = cn(sizeClasses[size], className);

  // Alt text par défaut basé sur le nom de l'icône
  const defaultAltTexts = {
    "heart-handshake": "Icône aide humaine et bienveillante",
    "map-pin": "Icône service local et proximité",
    "accessibility": "Icône accessibilité et inclusion",
    "shield": "Icône protection et sécurité",
    "help-circle": "Icône aide et assistance",
    "alert-triangle": "Icône alerte et attention",
    "phone": "Icône téléphone et contact",
    "users": "Icône communauté et équipe",
    "message-square": "Icône communication et message",
    "clock": "Icône temps et disponibilité"
  };

  const iconAlt = alt || defaultAltTexts[name];
  const ariaProps = decorative 
    ? { "aria-hidden": "true" } 
    : { "aria-label": iconAlt, role: "img" };

  const icons = {
    "heart-handshake": (
      <svg viewBox="0 0 24 24" fill="none" className={baseClasses} {...ariaProps} {...props}>
        <defs>
          <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3BB8A4" />
            <stop offset="100%" stopColor="#12385D" />
          </linearGradient>
        </defs>
        <path 
          d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" 
          stroke="url(#heart-gradient)" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),

    "map-pin": (
      <svg viewBox="0 0 24 24" fill="none" className={baseClasses} {...props}>
        <defs>
          <linearGradient id="map-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B9F227" />
            <stop offset="100%" stopColor="#3BB8A4" />
          </linearGradient>
        </defs>
        <path 
          d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" 
          fill="url(#map-gradient)" 
          stroke="#12385D" 
          strokeWidth="2"
        />
        <circle 
          cx="12" 
          cy="10" 
          r="3" 
          fill="#12385D" 
        />
      </svg>
    ),

    "accessibility": (
      <svg viewBox="0 0 24 24" fill="none" className={baseClasses} {...props}>
        <defs>
          <linearGradient id="access-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A7E3F2" />
            <stop offset="50%" stopColor="#3BB8A4" />
            <stop offset="100%" stopColor="#12385D" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="10" fill="url(#access-gradient)" />
        <circle cx="12" cy="7" r="2" fill="white" />
        <path d="M8 13h8M8 13v6M16 13v6M10 16h4" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),

    "shield": (
      <svg viewBox="0 0 24 24" fill="none" className={baseClasses} {...props}>
        <defs>
          <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#12385D" />
            <stop offset="100%" stopColor="#3BB8A4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path 
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" 
          fill="url(#shield-gradient)"
          filter="url(#glow)"
        />
        <path 
          d="m9 12 2 2 4-4" 
          stroke="white" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    ),

    "help-circle": (
      <svg viewBox="0 0 24 24" fill="none" className={baseClasses} {...props}>
        <defs>
          <radialGradient id="help-gradient">
            <stop offset="0%" stopColor="#A7E3F2" />
            <stop offset="100%" stopColor="#3BB8A4" />
          </radialGradient>
        </defs>
        <circle cx="12" cy="12" r="10" fill="url(#help-gradient)" stroke="#12385D" strokeWidth="2" />
        <path 
          d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" 
          stroke="#12385D" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <circle cx="12" cy="17" r="1.5" fill="#12385D" />
      </svg>
    ),

    "alert-triangle": (
      <svg viewBox="0 0 24 24" fill="none" className={baseClasses} {...props}>
        <defs>
          <linearGradient id="alert-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA726" />
            <stop offset="100%" stopColor="#FF7043" />
          </linearGradient>
        </defs>
        <path 
          d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" 
          fill="url(#alert-gradient)"
          stroke="#D84315"
          strokeWidth="1.5"
        />
        <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="12" cy="17" r="1.5" fill="white" />
      </svg>
    ),

    "phone": (
      <svg viewBox="0 0 24 24" fill="none" className={baseClasses} {...props}>
        <defs>
          <linearGradient id="phone-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#66BB6A" />
            <stop offset="100%" stopColor="#43A047" />
          </linearGradient>
        </defs>
        <rect 
          x="5" y="2" width="14" height="20" 
          rx="3" ry="3" 
          fill="url(#phone-gradient)" 
          stroke="#2E7D32" 
          strokeWidth="2"
        />
        <rect x="7" y="4" width="10" height="14" rx="1" fill="white" />
        <circle cx="12" cy="19.5" r="1.5" fill="white" />
      </svg>
    ),

    "users": (
      <svg viewBox="0 0 24 24" fill="none" className={baseClasses} {...props}>
        <defs>
          <linearGradient id="users-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#42A5F5" />
            <stop offset="100%" stopColor="#1E88E5" />
          </linearGradient>
        </defs>
        <circle cx="9" cy="7" r="4" fill="url(#users-gradient)" />
        <circle cx="15" cy="7" r="3" fill="#A7E3F2" />
        <path 
          d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" 
          fill="url(#users-gradient)" 
          stroke="#12385D" 
          strokeWidth="1"
        />
        <path 
          d="M16 21v-2a4 4 0 0 0-3-3.87" 
          fill="#A7E3F2" 
          stroke="#12385D" 
          strokeWidth="1"
        />
      </svg>
    ),

    "message-square": (
      <svg viewBox="0 0 24 24" fill="none" className={baseClasses} {...props}>
        <defs>
          <linearGradient id="message-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#AB47BC" />
            <stop offset="100%" stopColor="#8E24AA" />
          </linearGradient>
        </defs>
        <path 
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" 
          fill="url(#message-gradient)"
          stroke="#6A1B9A"
          strokeWidth="1.5"
        />
        <circle cx="8" cy="10" r="1.5" fill="white" />
        <circle cx="12" cy="10" r="1.5" fill="white" />
        <circle cx="16" cy="10" r="1.5" fill="white" />
      </svg>
    ),

    "clock": (
      <svg viewBox="0 0 24 24" fill="none" className={baseClasses} {...props}>
        <defs>
          <linearGradient id="clock-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9800" />
            <stop offset="100%" stopColor="#F57C00" />
          </linearGradient>
        </defs>
        <circle 
          cx="12" cy="12" r="10" 
          fill="url(#clock-gradient)" 
          stroke="#E65100" 
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="2" fill="white" />
        <path d="M12 6v6l4 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="12" cy="6" r="1" fill="white" />
        <circle cx="18" cy="12" r="1" fill="white" />
        <circle cx="12" cy="18" r="1" fill="white" />
        <circle cx="6" cy="12" r="1" fill="white" />
      </svg>
    )
  };

  // Appliquer les attributs d'accessibilité à l'icône sélectionnée
  const selectedIcon = icons[name];
  if (!selectedIcon) return null;

  // Clone l'élément avec les bonnes props d'accessibilité
  return React.cloneElement(selectedIcon, ariaProps);
}

export default ColoredIcon;