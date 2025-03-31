import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/login') {
    const token = req.cookies.get('jwt')?.value;
    if (token) return NextResponse.redirect(new URL('/', req.url));
  }

  if (req.nextUrl.pathname === '/') {
    const token = req.cookies.get('jwt')?.value;
    if (!token) return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = { matcher: ['/((?!api|_next/static|favicon.ico).*)'] };
