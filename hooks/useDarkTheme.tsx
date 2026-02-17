import { createGlobalState } from "react-use";

export const useDarkTheme = createGlobalState<boolean>(() => true);
