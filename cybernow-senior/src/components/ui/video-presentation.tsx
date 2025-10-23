"use client";

import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Button } from './button';
import Image from 'next/image';

interface VideoPresentationProps {
  videoUrl: string;
  thumbnailUrl?: string;
  title: string;
  description?: string;
  className?: string;
}

export function VideoPresentation({
  videoUrl,
  thumbnailUrl,
  title,
  description,
  className = '',
}: VideoPresentationProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extraire l'ID YouTube si c'est une URL YouTube
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youtubeId = getYouTubeId(videoUrl);
  const embedUrl = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`
    : videoUrl;

  const thumbnail = thumbnailUrl || (youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    : '/images/video-placeholder.jpg');

  return (
    <div className={`relative ${className}`}>
      {!isPlaying ? (
        // Thumbnail avec bouton play
        <div className="relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

            {/* Bouton Play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-warm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="h-12 w-12 text-white ml-1" fill="white" aria-hidden="true" />
              </div>
            </div>

            {/* Badge durée (optionnel) */}
            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-white text-sm font-medium">2:30</span>
            </div>
          </div>

          {/* Titre et description */}
          {(title || description) && (
            <div className="mt-6 text-center">
              {title && (
                <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
              )}
              {description && (
                <p className="text-base text-muted-foreground">{description}</p>
              )}
            </div>
          )}
        </div>
      ) : (
        // Lecteur vidéo
        <div className="relative">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Bouton fermer */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute -top-4 -right-4 bg-white hover:bg-slate-100 rounded-full shadow-lg"
            onClick={() => setIsPlaying(false)}
            aria-label="Fermer la vidéo"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
      )}
    </div>
  );
}

// Composant simplifié pour intégration directe dans hero
export function VideoHero({
  videoUrl,
  title,
  subtitle,
}: {
  videoUrl: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{title}</h2>
        {subtitle && (
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        )}
      </div>

      <VideoPresentation
        videoUrl={videoUrl}
        title="Rencontrez notre équipe"
        description="Découvrez comment nous accompagnons les aînés avec bienveillance (2min30)"
      />
    </div>
  );
}
