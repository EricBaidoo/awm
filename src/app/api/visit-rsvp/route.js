import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, phone, guests, date, notes } = await request.json();

    if (!name || !email || !phone || !date) {
      return NextResponse.json(
        { error: 'Name, email, phone, and visit date are required' },
        { status: 400 }
      );
    }

    // Log visit pre-registration
    console.log('📍 Plan Your Visit RSVP Received:', {
      name,
      email,
      phone,
      guests,
      date,
      notes: notes || 'None',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: 'Visit planned successfully' });
  } catch (error) {
    console.error('Visit RSVP handler error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
