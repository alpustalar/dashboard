import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default function proxy(request) {
  const handleI18nRouting = createMiddleware(routing);
  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/", "/(tr|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
