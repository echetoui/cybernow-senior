"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Shield } from 'lucide-react';
import Image from 'next/image';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  experience: string;
  email?: string;
  phone?: string;
  imagePath?: string;
  specialties?: string[];
}

export function TeamMemberCard({
  name,
  role,
  bio,
  experience,
  email,
  phone,
  imagePath,
  specialties = [],
}: TeamMemberCardProps) {
  // Initiales pour l'avatar de secours
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="overflow-hidden border-2 hover:border-sage-green/30 hover:shadow-xl transition-all group">
      <CardContent className="p-0">
        {/* Photo / Avatar */}
        <div className="relative h-64 bg-gradient-warm overflow-hidden">
          {imagePath ? (
            <Image
              src={imagePath}
              alt={`Photo de ${name}, ${role}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            // Avatar de secours avec initiales
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/40">
                <span className="text-5xl font-bold text-white">{initials}</span>
              </div>
            </div>
          )}

          {/* Badge de rôle */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <p className="text-sm font-semibold text-primary flex items-center gap-2">
              <Shield className="h-4 w-4 text-success-green" aria-hidden="true" />
              {role}
            </p>
          </div>
        </div>

        {/* Informations */}
        <div className="p-6">
          {/* Nom */}
          <h3 className="text-2xl font-bold text-primary mb-2">{name}</h3>

          {/* Expérience */}
          <p className="text-sm text-sage-green font-medium mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            {experience}
          </p>

          {/* Bio */}
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            {bio}
          </p>

          {/* Spécialités */}
          {specialties.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-semibold text-secondary mb-2">Spécialités :</p>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-soft-beige text-secondary rounded-full border border-sage-green/20"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Contact */}
          <div className="space-y-2 pt-4 border-t border-border">
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
              >
                <Mail className="h-4 w-4 text-trust-blue group-hover/link:text-primary" aria-hidden="true" />
                <span>{email}</span>
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
              >
                <Phone className="h-4 w-4 text-success-green group-hover/link:text-primary" aria-hidden="true" />
                <span>{phone}</span>
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
