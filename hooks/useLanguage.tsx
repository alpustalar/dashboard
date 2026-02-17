import { createGlobalState } from "react-use";

type Language = "tr" | "en";

export const useLanguage = createGlobalState<Language>(() => "tr");
