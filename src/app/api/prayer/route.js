import { NextResponse } from 'next/server';
import { sendEmail, generateEmailTemplate } from '@/lib/email';

export async function POST(request) {
  try {
    const { name, email, request: prayerRequest } = await request.json();

    if (!prayerRequest || prayerRequest.trim().length === 0) {
      return NextResponse.json(
        { error: 'Prayer request is required' },
        { status: 400 }
      );
    }

    // Log the request
    console.log('📩 Prayer Request Received:', {
      name: name || 'Anonymous',
      email: email || 'Not provided',
      timestamp: new Date().toISOString(),
    });

    // Send the email
    const emailHtml = generateEmailTemplate('New Prayer Request', {
      Name: name || 'Anonymous',
      Email: email || 'Not provided',
      Request: prayerRequest,
    });

    const emailResult = await sendEmail({
      subject: `New Prayer Request from ${name || 'Anonymous'}`,
      html: emailHtml,
      replyTo: email || undefined,
    });

    if (!emailResult.success) {
      console.warn('Email failed to send. Check SMTP settings. Proceeding anyway.');
    }

    return NextResponse.json({ success: true, message: 'Prayer request received' });
  } catch (error) {
    console.error('Prayer handler error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
