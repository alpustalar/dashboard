import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { Locale } from "@/types";
import turkish from "../locales/json/tr.json";
import english from "../locales/json/en.json";

const LOCALE_MAP = {
  tr: turkish,
  en: english,
};

type Props = {
  children: ReactNode;
  locale: Locale;
};

const LocaleProvider = ({ children, locale }: Props) => {
  return (
    <NextIntlClientProvider locale={locale} messages={LOCALE_MAP[locale]}>
      {children}
    </NextIntlClientProvider>
  );
};

export default LocaleProvider;
