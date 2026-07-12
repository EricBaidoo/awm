import { NextResponse } from 'next/server';
import { sendEmail, generateEmailTemplate } from '@/lib/email';

export async function POST(request) {
  try {
    const { name, email, phone, ministry, message } = await request.json();

    if (!name || !email || !phone || !ministry) {
      return NextResponse.json(
        { error: 'Name, email, phone, and ministry selection are required' },
        { status: 400 }
      );
    }

    // Log volunteer submission
    console.log('🤝 Volunteer Registration Received:', {
      name, email, ministry, timestamp: new Date().toISOString(),
    });

    // Send the email
    const emailHtml = generateEmailTemplate('New Volunteer Application', {
      Name: name,
      Email: email,
      Phone: phone,
      Ministry_Interest: ministry,
      Message_or_Experience: message,
    });

    const emailResult = await sendEmail({
      subject: `New Volunteer: ${name} (${ministry})`,
      html: emailHtml,
      replyTo: email,
    });

    if (!emailResult.success) {
      console.warn('Email failed to send. Check SMTP settings. Proceeding anyway.');
    }

    return NextResponse.json({ success: true, message: 'Volunteer registration submitted' });
  } catch (error) {
    console.error('Volunteer handler error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
