import { Locale } from "@/types";
import { homePageTranslations as homePage } from "@/locales/home-page";
import { layoutTranslations as layout } from "@/locales/layout";
import { authPageTranslations as authPage } from "@/locales/auth-page";
import { sharedTranslations } from "@/locales/shared";

const translations = {
  authPage,
  homePage,
  layout,
  ...sharedTranslations,
};

const isLanguageObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && "tr" in value && "en" in value;
};
const translateNested = <T extends object>(obj: T, lang: Locale): object => {
  // eslint-disable-next-line
  const result: any = {};

  for (const key in obj) {
    const value = obj[key];
    if (isLanguageObject(value)) {
      result[key] = value[lang];
    } else if (typeof value === "object") {
      result[key] = translateNested(value, lang);
    } else {
      result[key] = value;
    }
  }
  return result;
};

const messages = {
  tr: translateNested(translations, "tr"),
  en: translateNested(translations, "en"),
};

export default messages;
