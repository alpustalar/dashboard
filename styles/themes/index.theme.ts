import { nunito } from "@/components/_ui/fonts/fonts";
import { enUS, trTR } from "@mui/material/locale";

export const typography = {
  fontFamily: nunito.style.fontFamily,
};

export const MuiTab = {
  styleOverrides: {
    root: {
      "&.Mui-selected": {
        color: "rgb(48, 199, 134)",
        backgroundColor: "rgba(0,255,178,0.13)",
      },
    },
  },
};

export const THEME_LOCALE_MAP = {
  tr: trTR,
  en: enUS,
};
