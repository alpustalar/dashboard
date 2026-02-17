// light.theme.ts
import { Locale } from "@/types";
import { createTheme } from "@mui/material";
import { customColor } from "@/styles/themes/constants";
import { blue, green, grey, orange, red } from "@mui/material/colors";
import {
  MuiTab,
  THEME_LOCALE_MAP,
  typography,
} from "@/styles/themes/index.theme";

const getLightTheme = (locale: Locale) => {
  return createTheme(
    {
      palette: {
        mode: "light",
        background: {
          default: "#FFFFFF", // Ana arka plan
          paper: "#F5F5F5", // Kartlar ve kağıt elemanlar için
          transparent: "rgba(255,255,255,0.65)",
          transparentContrast: "rgba(0,0,0,0.07)",
        },
        primary: {
          main: "#B2DFDB", // Solgun yeşil tonları
          light: "#E0F2F1",
          dark: "#00796B",
          transparent: "rgba(0,121,107,0.25)",
          contrastText: "#000000",
          componentColor: "rgb(255, 255, 255)",
          customColor,
        },
        secondary: {
          main: "#CE93D8", // Solgun mor tonları
          light: "#E1BEE7",
          dark: "#8E24AA",
          transparent: "rgba(142,36,170,0.25)",
          transparentLight: "rgba(142,36,170,0.75)",
          contrastText: "#000000",
        },
        error: {
          main: red[400], // Solgun kırmızı tonları
          light: red[300],
          dark: red[700],
          transparent: "rgba(211,47,47,0.25)",
          transparentLight: "rgba(211,47,47,0.75)",
          contrastText: "#000000",
        },
        warning: {
          main: orange[400], // Solgun turuncu tonları
          light: orange[300],
          dark: orange[700],
          transparent: "rgba(245,124,0,0.25)",
          transparentLight: "rgba(245,124,0,0.75)",
          contrastText: "#000000",
        },
        info: {
          main: blue[400], // Solgun mavi tonları
          light: blue[300],
          dark: blue[700],
          transparent: "rgba(25,118,210,0.25)",
          transparentLight: "rgba(25,118,210,0.75)",
          contrastText: "#000000",
        },
        success: {
          main: green[400], // Solgun yeşil tonları
          light: green[300],
          dark: green[700],
          transparent: "rgba(56,142,60,0.25)",
          transparentLight: "rgba(56,142,60,0.75)",
          contrastText: "#000000",
        },
        text: {
          primary: grey[900],
          secondary: grey[700],
          disabled: grey[500],
          contrastText: "white",
          transparent: "rgba(255,255,255,0.65)",
          transparentContrast: "rgba(0,0,0,0.56)",
        },
        divider: grey[300],
      },
      typography,
      components: {
        MuiTab,
      },
    },
    THEME_LOCALE_MAP[locale],
  );
};

export default getLightTheme;
