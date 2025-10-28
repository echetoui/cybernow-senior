"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  bestTime: string;
  message: string;
  urgency: 'low' | 'medium' | 'high';
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export function EnhancedContactForm() {
  const t = useTranslations();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    bestTime: '',
    message: '',
    urgency: 'medium',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [currentStep, setCurrentStep] = useState(1);

  // Validation
  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Le nom est requis';
        if (value.trim().length < 2) return 'Le nom doit contenir au moins 2 caractères';
        break;
      case 'phone':
        if (!value.trim()) return 'Le téléphone est requis';
        const phoneRegex = /^[\d\s\-\(\)]+$/;
        if (!phoneRegex.test(value)) return 'Format de téléphone invalide';
        break;
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Format d\'email invalide';
        }
        break;
      case 'message':
        if (!value.trim()) return 'Le message est requis';
        if (value.trim().length < 10) return 'Le message doit contenir au moins 10 caractères';
        break;
    }
  };

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    // Validation en temps réel
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation complète
    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach(key => {
      if (['name', 'phone', 'message'].includes(key)) {
        const error = validateField(key as keyof FormData, formData[key]);
        if (error) newErrors[key as keyof FormErrors] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simuler envoi (à remplacer par vraie API)
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        bestTime: '',
        message: '',
        urgency: 'medium',
      });
      setCurrentStep(1);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalSteps = 3;
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Barre de progression */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-secondary">
            Étape {currentStep} sur {totalSteps}
          </span>
          <span className="text-sm text-muted-foreground">
            {Math.round(progressPercentage)}% complété
          </span>
        </div>
        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-warm transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {submitStatus === 'success' ? (
        <div className="text-center py-12 bg-soft-beige rounded-2xl">
          <CheckCircle className="h-16 w-16 text-success-green mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-2">Message envoyé !</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Nous vous contacterons sous 24h. Merci pour votre confiance.
          </p>
          <Button
            onClick={() => setSubmitStatus('idle')}
            variant="outline"
          >
            Envoyer un autre message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Étape 1 : Informations personnelles */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right duration-300">
              <div>
                <Label htmlFor="name" className="text-lg font-semibold">
                  Votre nom complet *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Ex: Marie Tremblay"
                  className={`mt-2 text-lg ${errors.name ? 'border-destructive' : ''}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-destructive text-sm mt-2 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-lg font-semibold">
                  Numéro de téléphone *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="581-705-0399"
                  className={`mt-2 text-lg ${errors.phone ? 'border-destructive' : ''}`}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-2 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-lg font-semibold">
                  Email (optionnel)
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="marie@exemple.com"
                  className="mt-2 text-lg"
                />
              </div>
            </div>
          )}

          {/* Étape 2 : Disponibilité */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right duration-300">
              <div>
                <Label htmlFor="bestTime" className="text-lg font-semibold">
                  Meilleur moment pour vous appeler
                </Label>
                <Input
                  id="bestTime"
                  type="text"
                  value={formData.bestTime}
                  onChange={(e) => handleChange('bestTime', e.target.value)}
                  placeholder="Ex: En matinée entre 9h et 11h"
                  className="mt-2 text-lg"
                />
              </div>

              <div>
                <Label className="text-lg font-semibold mb-3 block">
                  Niveau d&apos;urgence
                </Label>
                <div className="grid grid-cols-3 gap-3">
                  {['low', 'medium', 'high'].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, urgency: level as 'low' | 'medium' | 'high' }))}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        formData.urgency === level
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <span className="text-2xl block mb-2">
                        {level === 'low' && '😊'}
                        {level === 'medium' && '🤔'}
                        {level === 'high' && '🚨'}
                      </span>
                      <span className="text-sm font-medium">
                        {level === 'low' && 'Pas pressé'}
                        {level === 'medium' && 'Modéré'}
                        {level === 'high' && 'Urgent'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Étape 3 : Message */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right duration-300">
              <div>
                <Label htmlFor="message" className="text-lg font-semibold">
                  Votre message *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Décrivez-nous votre situation ou vos questions. Nous sommes là pour vous aider, sans jugement."
                  rows={6}
                  className={`mt-2 text-lg resize-none ${errors.message ? 'border-destructive' : ''}`}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-2 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    {errors.message}
                  </p>
                )}
                <p className="text-sm text-muted-foreground mt-2">
                  {formData.message.length} caractères (minimum 10)
                </p>
              </div>
            </div>
          )}

          {/* Boutons de navigation */}
          <div className="flex justify-between pt-6">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(prev => prev - 1)}
                size="lg"
              >
                ← Précédent
              </Button>
            )}

            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={() => setCurrentStep(prev => prev + 1)}
                size="lg"
                className="ml-auto bg-gradient-warm hover:bg-gradient-warm-hover text-white"
              >
                Suivant →
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="ml-auto bg-gradient-warm hover:bg-gradient-warm-hover text-white min-w-[200px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer le message'
                )}
              </Button>
            )}
          </div>

          {submitStatus === 'error' && (
            <div className="bg-destructive/10 border border-destructive rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-destructive">Erreur d&apos;envoi</p>
                <p className="text-sm text-muted-foreground">
                  Une erreur s&apos;est produite. Appelez-nous directement au {t('common.phone')}
                </p>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
