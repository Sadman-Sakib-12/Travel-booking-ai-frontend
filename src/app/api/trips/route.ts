import { NextResponse } from 'next/server';

const trips = [
  { id: '1', title: 'Cox\'s Bazar Luxury', price: 250, location: 'Bangladesh', category: 'Beach' },
  { id: '2', title: 'Paris Getaway', price: 1200, location: 'France', category: 'City' },
  { id: '3', title: 'Sylhet Adventure', price: 180, location: 'Bangladesh', category: 'Mountain' },
];

export async function GET() {
  return NextResponse.json({ success: true, data: trips });
}

export async function POST(req: Request) {
  const body = await req.json();
  // Mock adding a trip
  return NextResponse.json({ success: true, message: 'Trip created' });
}
