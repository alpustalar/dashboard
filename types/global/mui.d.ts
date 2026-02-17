import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    transparent?: string;
    transparentContrast?: string;
    customColor?: CustomColor;
    componentColor?: string;
  }

  interface TypeBackground {
    transparentContrast?: string;
    transparent?: string;
  }

  interface TypeText {
    transparentContrast?: string;
    transparent?: string;
    customColor?: CustomColor;
    componentColor?: string;
    contrastText?: string;
  }

  interface PaletteOptions {
    transparent?: string;
    transparentContrast?: string;
    customColor?: CustomColor;
    componentColor?: string;
  }

  interface PaletteColor {
    transparent?: string;
    transparentLight?: string;
    customColor?: CustomColor;
    componentColor?: string;
  }

  interface SimplePaletteColorOptions {
    transparent?: string;
    transparentLight?: string;
    customColor?: CustomColor;
    componentColor?: string;
  }
}
