import NextAuth from 'next-auth';
import authConfig from '@/auth.config';
const { auth } = NextAuth(authConfig);

import {
  authRoutes,
  publicRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT,
} from '@/routes';

export default auth((req) => {
  /* if there is no session then the "req.auth" is "null", !null is "true", "!true" is "false", therefore !!null is false. 
  
  "!!req.auth" is "false" if there is no session
  */

  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) return;

  if (isAuthRoute) {
    // console.log('loggedin1', isLoggedIn);
    if (isLoggedIn) {
      // console.log('loggedin2', isLoggedIn);

      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (
    !isLoggedIn &&
    !isPublicRoute &&
    nextUrl.pathname !== '/auth/login' &&
    nextUrl.pathname !== '/auth/register'
  ) {
    return Response.redirect(new URL('/auth/login', nextUrl)); // we pass nextUrl to make is
  }

  return;
});

// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
