import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCookies } from '@/utils/cookies';
import { getNewToken } from '@/services/fetch';
import { getUrl } from '@/lib/getUrl';

export async function middleware(request: NextRequest) {
  const [tokenCookie, refreshCookie] = getCookies();
  const pathname = request.nextUrl.pathname;

  if (tokenCookie && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL(getUrl('/dashboard')));
  }

  if (
    !tokenCookie &&
    refreshCookie &&
    (pathname === '/login' || pathname === '/register')
  ) {
    await getNewToken();
    return NextResponse.redirect(new URL(getUrl('/dashboard')));
  }

  if (!tokenCookie && refreshCookie && pathname.includes('/dashboard')) {
    await getNewToken();
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
