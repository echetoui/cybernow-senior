'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Callout } from '@/components/ui/callout';
import { contactFormSchema, type ContactFormData } from '@/lib/schemas/contact';
import { cn } from '@/lib/utils';

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const t = useTranslations();
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [honeypot, setHoneypot] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    // Basic honeypot check
    if (honeypot !== '') {
      return;
    }

    setSubmissionState('submitting');

    // Minimum delay for anti-bot protection
    const delay = new Promise(resolve => setTimeout(resolve, 600));

    try {
      const [response] = await Promise.all([
        fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }),
        delay
      ]);

      if (response.ok) {
        setSubmissionState('success');
        reset();
        
        // Reset success state after 10 seconds
        setTimeout(() => {
          setSubmissionState('idle');
        }, 10000);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionState('error');
      
      // Reset error state after 10 seconds
      setTimeout(() => {
        setSubmissionState('idle');
      }, 10000);
    }
  };

  if (submissionState === 'success') {
    return (
      <Callout variant="success" icon={CheckCircle}>
        <h3 className="font-semibold mb-2">
          {t('contact.form.success')}
        </h3>
        <p>
          {t('contact.form.fallback', { phone: t('common.phone') })}
        </p>
      </Callout>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8" noValidate>
      {/* Honeypot field (hidden) */}
      <div className="hidden">
        <Input
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {submissionState === 'error' && (
        <Callout variant="danger" icon={XCircle}>
          <p>
            {t('contact.form.error')}
          </p>
          <p className="mt-2 text-sm">
            {t('contact.form.fallback', { phone: t('common.phone') })}
          </p>
        </Callout>
      )}

      {/* Name Field */}
      <div>
        <Label htmlFor="name" className="text-base font-medium">
          {t('contact.form.name')} <span className="text-red-500" aria-label="requis">*</span>
        </Label>
        <Input
          id="name"
          type="text"
          placeholder={t('contact.form.namePlaceholder')}
          className={cn(
            "mt-3 min-h-[56px] text-lg md:text-base px-4 py-4 touch-manipulation",
            errors.name && "border-red-500 focus:border-red-500"
          )}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          autoComplete="name"
          {...register('name')}
        />
        {errors.name && (
          <p 
            id="name-error" 
            className="mt-2 text-sm text-red-600" 
            role="alert"
          >
            {errors.name.message || t('contact.form.nameRequired')}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <Label htmlFor="phone" className="text-base font-medium">
          {t('contact.form.phone')} <span className="text-red-500" aria-label="requis">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder={t('contact.form.phonePlaceholder')}
          className={cn(
            "mt-3 min-h-[56px] text-lg md:text-base px-4 py-4 touch-manipulation",
            errors.phone && "border-red-500 focus:border-red-500"
          )}
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          autoComplete="tel"
          inputMode="tel"
          {...register('phone')}
        />
        {errors.phone && (
          <p 
            id="phone-error" 
            className="mt-2 text-sm text-red-600" 
            role="alert"
          >
            {errors.phone.message || t('contact.form.phoneInvalid')}
          </p>
        )}
      </div>

      {/* Best Time Field */}
      <div>
        <Label htmlFor="bestTime" className="text-base font-medium">
          {t('contact.form.bestTime')}
        </Label>
        <Input
          id="bestTime"
          type="text"
          placeholder={t('contact.form.bestTimePlaceholder')}
          className="mt-3 min-h-[56px] text-lg md:text-base px-4 py-4 touch-manipulation"
          autoComplete="off"
          {...register('bestTime')}
        />
      </div>

      {/* Message Field */}
      <div>
        <Label htmlFor="message" className="text-base font-medium">
          {t('contact.form.message')} <span className="text-red-500" aria-label="requis">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder={t('contact.form.messagePlaceholder')}
          rows={5}
          className={cn(
            "mt-3 text-lg md:text-base resize-none min-h-[120px] px-4 py-4 touch-manipulation",
            errors.message && "border-red-500 focus:border-red-500"
          )}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
        />
        {errors.message && (
          <p 
            id="message-error" 
            className="mt-2 text-sm text-red-600" 
            role="alert"
          >
            {errors.message.message || t('contact.form.messageRequired')}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={submissionState === 'submitting'}
        className="w-full min-h-[64px] text-xl md:text-lg bg-gradient-cta hover:bg-gradient-cta/90 focus-visible:outline-primary touch-manipulation font-semibold"
      >
        {submissionState === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 mr-3 animate-spin" aria-hidden="true" />
            {t('contact.form.submitting')}
          </>
        ) : (
          t('contact.form.submit')
        )}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        {t('contact.form.fallback', { phone: t('common.phone') })}
      </p>
    </form>
  );
}