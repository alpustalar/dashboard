import "./globals.scss";
import { ReactNode } from "react";
import { publicSans } from "@/components/_ui/fonts/fonts";
import Providers from "@/app/[locale]/providers";
import { Locale } from "@/types";

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${publicSans.className}`}>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
