import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This is a mock auth check. In a real app, use next-auth or a custom session check.
const getSession = (req: NextRequest) => {
  const token = req.cookies.get('auth-token')?.value;
  if (!token) return null;
  // Mocking roles based on tokens for demo purposes
  if (token === 'admin-token') return { role: 'ADMIN' };
  if (token === 'manager-token') return { role: 'MANAGER' };
  return { role: 'USER' };
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = getSession(request);

  // 1. Protected Dashboard Routes
  if (pathname.startsWith('/dashboard')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // 2. Admin Only Routes
    if (pathname.startsWith('/dashboard/admin') && session.role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // 3. Manager Only Routes
    if (pathname.startsWith('/dashboard/manager') && session.role !== 'MANAGER' && session.role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/admin/:path*'],
};
