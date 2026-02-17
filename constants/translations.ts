import { Locale } from "@/types";

export const tHelper = (tr: string, en: string) => ({
  tr,
  en,
});

// eslint-disable-next-line
const translateNested = <T extends object>(obj: T, lang: Locale): object => {
  // eslint-disable-next-line
  const result: any = {};

  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "object" && "tr" in value && "en" in value) {
      result[key] = value[lang];
    } else if (typeof value === "object") {
      result[key] = translateNested(value, lang);
    } else {
      result[key] = value;
    }
  }

  return result;
};
