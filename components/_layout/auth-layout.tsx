"use client";
import React, { ReactNode, useRef, useState } from "react";
import CustomLogo from "@/components/_ui/CustomLogo";
import SettingsButton from "@/components/_ui/buttons/SettingsButton";
import styles from "@/components/_ui/shadow.module.scss";
import { ThemeProvider, useTheme } from "@mui/system";
import OptionsMenu from "@/components/_layout/appbar-right/menu/options-menu";
import CssBaseline from "@mui/material/CssBaseline";
import getDarkTheme from "@/styles/themes/dark.theme";
import { useLocale } from "next-intl";
import { Locale } from "@/types";
import styled from "@emotion/styled";

type Props = {
  children: ReactNode;
};

const Wrapper = styled("div")(({}) => ({
  marginTop: "5px",
  padding: "0 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 2,
}));

export default function AuthLayout({ children }: Props) {
  const optionsBtn = useRef<HTMLButtonElement>(null);
  const [openOptionsMenu, setOpenOptionsMenu] = useState(false);
  const theme = useTheme();

  const locale = useLocale() as Locale;

  return (
    <>
      <ThemeProvider theme={getDarkTheme(locale)}>
        <CssBaseline />
        <Wrapper>
          <CustomLogo />
          <SettingsButton
            ref={optionsBtn}
            onClick={() => setOpenOptionsMenu(true)}
            buttonClass={styles.rotateIcon}
            iconColor={theme.palette?.text?.transparentContrast}
          />

          <OptionsMenu
            darkModeOption={false}
            anchorEl={optionsBtn.current}
            open={openOptionsMenu}
            handleClose={() => setOpenOptionsMenu(false)}
          />
        </Wrapper>
        {children}
      </ThemeProvider>
    </>
  );
}
