import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schemas/contact';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body);
    
    // Log the contact request (in production, this would be sent to email service)
    console.log('📞 New contact request:', {
      name: validatedData.name,
      phone: validatedData.phone,
      bestTime: validatedData.bestTime,
      message: validatedData.message,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
    });

    // TODO: Replace with actual email service (Resend, SendGrid, etc.)
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `Nouveau contact de ${validatedData.name}`,
    //   html: generateEmailTemplate(validatedData),
    // });

    // TODO: Add to CRM or database if needed
    // await addToDatabase(validatedData);

    // TODO: Send confirmation email to user
    // await sendConfirmationEmail(validatedData.email);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully' 
      },
      { status: 202 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit contact form' 
      },
      { status: 500 }
    );
  }
}

// Utility function to generate email template (for future use)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function generateEmailTemplate(data: Record<string, unknown>) {
  return `
    <h2>Nouvelle demande de contact - CyberNow Seniors</h2>
    <p><strong>Nom:</strong> ${data.name}</p>
    <p><strong>Téléphone:</strong> ${data.phone}</p>
    ${data.bestTime ? `<p><strong>Meilleur moment:</strong> ${data.bestTime}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p>${String(data.message).replace(/\n/g, '<br>')}</p>
    <hr>
    <p><small>Envoyé le ${new Date().toLocaleString('fr-CA')}</small></p>
  `;
}