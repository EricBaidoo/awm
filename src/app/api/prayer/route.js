import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, request: prayerRequest } = await request.json();

    if (!prayerRequest || prayerRequest.trim().length === 0) {
      return NextResponse.json(
        { error: 'Prayer request is required' },
        { status: 400 }
      );
    }

    // In production, use Nodemailer to send email
    // For now, log the request
    console.log('📩 Prayer Request Received:', {
      name: name || 'Anonymous',
      email: email || 'Not provided',
      request: prayerRequest,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: 'Prayer request received' });
  } catch (error) {
    console.error('Prayer handler error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
