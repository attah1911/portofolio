import { intlayerProxy } from 'next-intlayer/proxy';
import type { NextFetchEvent, NextRequest } from 'next/server';

// First visit (no saved INTLAYER_LOCALE cookie) should always land on the
// default locale (English), ignoring the browser's Accept-Language. Once the
// visitor picks a locale, setLocale() writes the cookie and that choice wins.
export const proxy = (request: NextRequest, event: NextFetchEvent) => {
  if (!request.cookies.has('INTLAYER_LOCALE')) {
    request.headers.delete('accept-language');
  }

  return intlayerProxy(request, event);
};

export const config = {
  matcher: '/((?!api|static|assets|robots|sitemap|sw|service-worker|manifest|.*\\..*|_next).*)'
};
