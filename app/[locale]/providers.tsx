"use client";
import ClientOnly from "@/components/util/client-only";
import ReactQueryProvider from "@/providers/react-query-provider";
import React, { ReactNode } from "react";
import { AuthProvider } from "@/providers/auth-provider";
import { Locale } from "@/types";
import LocaleProvider from "@/providers/locale-provider";
import IsOnlineProvider from "@/providers/is-online-provider";

type Props = {
  children: ReactNode;
  locale: Locale;
};

const Providers = ({ children, locale }: Props) => {
  return (
    <ClientOnly>
      <LocaleProvider locale={locale}>
        <IsOnlineProvider>
          <AuthProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </AuthProvider>
        </IsOnlineProvider>
      </LocaleProvider>
    </ClientOnly>
  );
};

export default Providers;
