import { LANGUAGE_FLAG } from "@/constants/language-flag";

export type LanguageFlag = (typeof LANGUAGE_FLAG)[keyof typeof LANGUAGE_FLAG];
