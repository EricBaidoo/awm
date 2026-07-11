import { NextResponse } from 'next/server';

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
      name,
      email,
      phone,
      ministry,
      message: message || 'None',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: 'Volunteer registration submitted' });
  } catch (error) {
    console.error('Volunteer handler error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
