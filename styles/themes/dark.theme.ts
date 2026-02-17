import { blue, green, grey, orange, red } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import "@mui/material/styles";
import {
  MuiTab,
  THEME_LOCALE_MAP,
  typography,
} from "@/styles/themes/index.theme";
import { customColor } from "@/styles/themes/constants";
import { Locale } from "@/types";
import { Theme } from "@mui/material/styles";

const getDarkTheme = (locale: Locale): Theme => {
  return createTheme(
    {
      palette: {
        mode: "dark",
        background: {
          default: "rgb(20, 26, 33)",
          paper: "rgb(20, 26, 33)",
          transparent: "rgba(20,26,33,0.66)",
          transparentContrast: "rgba(255,255,255,0.07)",
        },
        primary: {
          main: "rgb(0,115,54)",
          light: "#484848",
          dark: "#000000",
          transparent: "rgba(0,0,0,0.25)",
          contrastText: "#FFFFFF",
          componentColor: "rgb(28, 37, 46)",
          customColor,
        },
        secondary: {
          main: "#424242",
          light: "#6D6D6D",
          dark: "#1B1B1B",
          transparent: "rgba(27,27,27,0.25)",
          transparentLight: "rgba(27,27,27,0.75)",
          contrastText: "#FFFFFF",
        },
        error: {
          main: red[700],
          light: red[500],
          dark: red[900],
          transparent: `rgba(183, 28, 28, 0.25)`,
          transparentLight: `rgba(183, 28, 28, 0.75)`,
          contrastText: "#FFFFFF",
        },
        warning: {
          main: orange[700],
          light: orange[500],
          dark: orange[900],
          transparent: "rgba(230,81,0,0.25)",
          transparentLight: "rgba(230,81,0,0.75)",
          contrastText: "#FFFFFF",
        },
        info: {
          main: blue[700],
          light: blue[500],
          dark: blue[900],
          transparent: "rgba(13,71,161,0.25)",
          transparentLight: "rgba(13,71,161,0.75)",
          contrastText: "#FFFFFF",
        },
        success: {
          main: green[700],
          light: green[500],
          dark: green[900],
          transparent: "rgba(27,94,32,0.25)",
          transparentLight: "rgba(27,94,32,0.75)",
          contrastText: "#FFFFFF",
        },
        text: {
          primary: "#FFFFFF",
          secondary: grey[500],
          contrastText: "#000000",
          disabled: grey[600],
          transparent: "rgba(20,26,33,0.66)",
          transparentContrast: "rgba(255,255,255,0.56)",
        },
        divider: grey[700],
      },
      typography,
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              backgroundColor: "#333333",
              "& .MuiInputBase-root": {
                color: "#FFFFFF",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: grey[700],
                },
                "&:hover fieldset": {
                  borderColor: grey[500],
                },
                "&.Mui-focused fieldset": {
                  borderColor: blue[700],
                },
              },
            },
          },
        },
        MuiTab,
      },
    },
    THEME_LOCALE_MAP[locale],
  );
};

export default getDarkTheme;
