import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const newsletterSchema = z.object({
  email: z.string().email(),
  locale: z.enum(['fr', 'en']),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, locale } = newsletterSchema.parse(body);

    // Send welcome email
    const emailContent = locale === 'fr' ? {
      subject: 'Bienvenue à l\'infolettre CyberNow Seniors! 🎉',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #004C97 0%, #003D7A 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Bienvenue! 👋</h1>
            <p style="margin: 16px 0 0; font-size: 16px; opacity: 0.9;">Votre inscription est confirmée</p>
          </div>

          <div style="background: #f8f9fa; padding: 40px 30px; border-radius: 0 0 12px 12px;">
            <p style="margin: 0 0 20px; font-size: 16px; color: #333;">
              Merci de votre confiance! 🙏
            </p>

            <p style="margin: 0 0 20px; font-size: 16px; color: #555; line-height: 1.6;">
              Vous recevrez maintenant :
            </p>

            <ul style="margin: 0 0 30px; padding-left: 20px; color: #555;">
              <li style="margin-bottom: 12px;">
                🚨 <strong>Alertes immédiates</strong> sur les nouvelles arnaques ciblant les aînés
              </li>
              <li style="margin-bottom: 12px;">
                💡 <strong>Conseils pratiques</strong> pour naviguer en ligne en toute sécurité
              </li>
              <li style="margin-bottom: 12px;">
                📚 <strong>Guides détaillés</strong> et tutoriels adaptés à votre rythme
              </li>
              <li>
                🎁 <strong>Offres exclusives</strong> réservées aux abonnés
              </li>
            </ul>

            <div style="background: white; border-left: 4px solid #004C97; padding: 20px; margin: 30px 0; border-radius: 8px;">
              <h3 style="margin: 0 0 12px; color: #004C97; font-size: 18px;">📞 Besoin d'aide immédiate?</h3>
              <p style="margin: 0; color: #555; line-height: 1.6;">
                Notre équipe est disponible pour vous aider:<br/>
                <strong style="color: #004C97; font-size: 18px;">581-705-0399</strong>
              </p>
            </div>

            <p style="margin: 30px 0 20px; font-size: 14px; color: #666; text-align: center;">
              À très bientôt,<br/>
              <strong style="color: #004C97;">L'équipe CyberNow Seniors</strong>
            </p>

            <div style="border-top: 1px solid #ddd; margin-top: 30px; padding-top: 20px; text-align: center;">
              <p style="margin: 0 0 10px; font-size: 12px; color: #999;">
                Vous recevez ce courriel car vous vous êtes abonné à notre infolettre.
              </p>
              <p style="margin: 0; font-size: 12px; color: #999;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL}/fr/unsubscribe?email=${encodeURIComponent(email)}" style="color: #666; text-decoration: underline;">
                  Se désabonner
                </a>
              </p>
            </div>
          </div>
        </div>
      `,
    } : {
      subject: 'Welcome to CyberNow Seniors Newsletter! 🎉',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #004C97 0%, #003D7A 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Welcome! 👋</h1>
            <p style="margin: 16px 0 0; font-size: 16px; opacity: 0.9;">Your subscription is confirmed</p>
          </div>

          <div style="background: #f8f9fa; padding: 40px 30px; border-radius: 0 0 12px 12px;">
            <p style="margin: 0 0 20px; font-size: 16px; color: #333;">
              Thank you for your trust! 🙏
            </p>

            <p style="margin: 0 0 20px; font-size: 16px; color: #555; line-height: 1.6;">
              You will now receive:
            </p>

            <ul style="margin: 0 0 30px; padding-left: 20px; color: #555;">
              <li style="margin-bottom: 12px;">
                🚨 <strong>Immediate alerts</strong> about new scams targeting seniors
              </li>
              <li style="margin-bottom: 12px;">
                💡 <strong>Practical tips</strong> to navigate online safely
              </li>
              <li style="margin-bottom: 12px;">
                📚 <strong>Detailed guides</strong> and tutorials adapted to your pace
              </li>
              <li>
                🎁 <strong>Exclusive offers</strong> reserved for subscribers
              </li>
            </ul>

            <div style="background: white; border-left: 4px solid #004C97; padding: 20px; margin: 30px 0; border-radius: 8px;">
              <h3 style="margin: 0 0 12px; color: #004C97; font-size: 18px;">📞 Need immediate help?</h3>
              <p style="margin: 0; color: #555; line-height: 1.6;">
                Our team is available to help you:<br/>
                <strong style="color: #004C97; font-size: 18px;">581-705-0399</strong>
              </p>
            </div>

            <p style="margin: 30px 0 20px; font-size: 14px; color: #666; text-align: center;">
              See you soon,<br/>
              <strong style="color: #004C97;">The CyberNow Seniors Team</strong>
            </p>

            <div style="border-top: 1px solid #ddd; margin-top: 30px; padding-top: 20px; text-align: center;">
              <p style="margin: 0 0 10px; font-size: 12px; color: #999;">
                You received this email because you subscribed to our newsletter.
              </p>
              <p style="margin: 0; font-size: 12px; color: #999;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL}/en/unsubscribe?email=${encodeURIComponent(email)}" style="color: #666; text-decoration: underline;">
                  Unsubscribe
                </a>
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send welcome email
    await resend.emails.send({
      from: 'CyberNow Seniors <newsletter@cybernow.io>',
      to: email,
      subject: emailContent.subject,
      html: emailContent.html,
    });

    // Notify admin (optional)
    await resend.emails.send({
      from: 'CyberNow Seniors <notifications@cybernow.io>',
      to: process.env.CONTACT_EMAIL || 'info@cybernow.io',
      subject: `Nouvelle inscription à l'infolettre: ${email}`,
      html: `
        <h2>Nouvelle inscription à l'infolettre</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Langue:</strong> ${locale === 'fr' ? 'Français' : 'English'}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString('fr-CA')}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Subscription successful', email },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}
