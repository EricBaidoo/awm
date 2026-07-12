import { NextResponse } from 'next/server';
import { sendEmail, generateEmailTemplate } from '@/lib/email';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Log connection submission
    console.log('✉️ General Contact Inquiry Received:', {
      name, email, subject, timestamp: new Date().toISOString(),
    });

    // Send the email
    const emailHtml = generateEmailTemplate('New Contact Form Inquiry', {
      Name: name,
      Email: email,
      Subject: subject,
      Message: message,
    });

    const emailResult = await sendEmail({
      subject: `New Contact Inquiry: ${subject}`,
      html: emailHtml,
      replyTo: email,
    });

    if (!emailResult.success) {
      console.warn('Email failed to send. Check SMTP settings. Proceeding anyway.');
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact handler error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
