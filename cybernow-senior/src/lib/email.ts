import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormEmail {
  name: string;
  phone: string;
  bestTime?: string;
  message: string;
  timestamp: string;
  userAgent?: string | null;
  ip?: string | null;
}

export async function sendContactFormEmail(data: ContactFormEmail) {
  const { name, phone, bestTime, message, timestamp, userAgent, ip } = data;

  const emailHtml = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouvelle demande de contact</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
          padding: 20px;
          border-radius: 8px 8px 0 0;
        }
        .content {
          background: #f9fafb;
          padding: 30px;
          border-radius: 0 0 8px 8px;
        }
        .field {
          margin-bottom: 20px;
          background: white;
          padding: 15px;
          border-radius: 6px;
          border-left: 4px solid #3b82f6;
        }
        .label {
          font-weight: 600;
          color: #1e40af;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }
        .value {
          color: #374151;
          font-size: 16px;
        }
        .message-content {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        .footer {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          font-size: 12px;
          color: #6b7280;
        }
        .urgent {
          background: #fef2f2;
          border-left-color: #ef4444;
          padding: 15px;
          border-radius: 6px;
          margin-bottom: 20px;
        }
        .urgent-text {
          color: #991b1b;
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1 style="margin: 0; font-size: 24px;">📞 Nouvelle demande de contact</h1>
        <p style="margin: 5px 0 0 0; opacity: 0.9;">CyberNow Seniors</p>
      </div>

      <div class="content">
        <div class="urgent">
          <p class="urgent-text" style="margin: 0;">⚠️ Veuillez contacter ce client dans les 2 heures</p>
        </div>

        <div class="field">
          <div class="label">Nom du client</div>
          <div class="value">${name}</div>
        </div>

        <div class="field">
          <div class="label">Numéro de téléphone</div>
          <div class="value">
            <a href="tel:${phone}" style="color: #1e40af; text-decoration: none; font-weight: 600;">
              ${phone}
            </a>
          </div>
        </div>

        ${bestTime ? `
        <div class="field">
          <div class="label">Meilleur moment pour appeler</div>
          <div class="value">${bestTime}</div>
        </div>
        ` : ''}

        <div class="field">
          <div class="label">Message</div>
          <div class="value message-content">${message}</div>
        </div>

        <div class="footer">
          <p><strong>Détails techniques:</strong></p>
          <p>Date et heure: ${new Date(timestamp).toLocaleString('fr-CA', { timeZone: 'America/Toronto' })}</p>
          ${ip ? `<p>IP: ${ip}</p>` : ''}
          ${userAgent ? `<p>Navigateur: ${userAgent}</p>` : ''}
        </div>
      </div>
    </body>
    </html>
  `;

  const emailText = `
Nouvelle demande de contact - CyberNow Seniors

Nom: ${name}
Téléphone: ${phone}
${bestTime ? `Meilleur moment: ${bestTime}` : ''}

Message:
${message}

---
Envoyé le ${new Date(timestamp).toLocaleString('fr-CA', { timeZone: 'America/Toronto' })}
  `.trim();

  try {
    const result = await resend.emails.send({
      from: 'CyberNow Seniors <notifications@cybernow.io>',
      to: process.env.CONTACT_EMAIL || 'info@cybernow.io',
      subject: `🔔 Nouvelle demande de ${name}`,
      html: emailHtml,
      text: emailText,
      replyTo: phone ? `${name} <noreply@cybernow.io>` : undefined,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}
