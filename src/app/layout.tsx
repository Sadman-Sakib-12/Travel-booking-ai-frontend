import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingAIChatbot from '@/components/layout/FloatingAIChatbot';

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TripBooking.ai - AI-Powered Travel & Tour Booking Platform | TripBookingAI',
  description: 'Handpicked hotels and exclusive deals across beautiful destinations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingAIChatbot />
      </body>
    </html>
  );
}
