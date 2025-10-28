import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schemas/contact';
import { sendContactFormEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the form data
    const validatedData = contactFormSchema.parse(body);

    const timestamp = new Date().toISOString();
    const userAgent = request.headers.get('user-agent');
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');

    // Log the contact request
    console.log('📞 New contact request:', {
      name: validatedData.name,
      phone: validatedData.phone,
      bestTime: validatedData.bestTime,
      message: validatedData.message,
      timestamp,
      userAgent,
      ip,
    });

    // Send email notification to info@cybernow.io
    const emailResult = await sendContactFormEmail({
      name: validatedData.name,
      phone: validatedData.phone,
      bestTime: validatedData.bestTime,
      message: validatedData.message,
      timestamp,
      userAgent,
      ip,
    });

    if (!emailResult.success) {
      console.error('Failed to send email:', emailResult.error);
      // Still return success to user, but log the error
      // The contact info is logged above as backup
    }

    // TODO: Add to CRM or database if needed
    // await addToDatabase(validatedData);

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