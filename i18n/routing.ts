import { defineRouting } from "next-intl/routing";
import { defaultLocale, LOCALES as locales } from "@/constants/locale";

export const routing = defineRouting({ locales, defaultLocale });
