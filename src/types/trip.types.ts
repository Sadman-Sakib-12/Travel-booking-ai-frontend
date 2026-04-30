export interface User {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'MANAGER' | 'ADMIN';
  avatar?: string;
  createdAt: string;
}

export interface Trip {
  id: string;
  title: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  category: string;
  duration: string;
  availableSeats: number;
}

export interface Booking {
  id: string;
  userId: string;
  tripId: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  totalPrice: number;
  guests: number;
  bookingDate: string;
}
