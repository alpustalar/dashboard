"use client";
import ClientOnly from "@/components/util/client-only";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode, useMemo, useState } from "react";
import { useMedia } from "react-use";
import LargeDevicesLayout from "@/components/_layout/large-devices-layout";
import SmallMediaDevicesLayout from "@/components/_layout/small-media-devices-layout";
import { ThemeProvider } from "@mui/system";
import getDarkTheme from "@/styles/themes/dark.theme";
import getLightTheme from "@/styles/themes/light.theme";
import { useDarkTheme } from "@/hooks/useDarkTheme";
import AuthGuard from "@/components/auth/auth-guard";
import { useLocale } from "next-intl";
import { Locale } from "@/types";
import { Show } from "@/components/util/show";

interface PropTypes {
  children: ReactNode;
}

const DashboardLayout = ({ children }: PropTypes) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
  const [isDark] = useDarkTheme();
  const [profileMenuOpen, setProfileMenuOpen] = useState<boolean>(false);
  const locale = useLocale() as Locale;
  const isSmDown = useMedia("(max-width: 680px)");

  const themeHandler = useMemo(() => {
    return isDark ? getDarkTheme(locale) : getLightTheme(locale);
  }, [isDark, locale]);

  const authenticated = (
    <Show>
      <Show.When isTrue={isSmDown}>
        <SmallMediaDevicesLayout
          profileMenuOpen={profileMenuOpen}
          setProfileMenuOpen={setProfileMenuOpen}
        >
          {children}
        </SmallMediaDevicesLayout>
      </Show.When>
      <Show.Else>
        <LargeDevicesLayout
          setProfileMenuOpen={setProfileMenuOpen}
          drawerIsOpen={drawerIsOpen}
          setDrawerIsOpen={setDrawerIsOpen}
          profileMenuOpen={profileMenuOpen}
        >
          {children}
        </LargeDevicesLayout>
      </Show.Else>
    </Show>
  );

  return (
    <ClientOnly>
      <ThemeProvider theme={themeHandler}>
        <CssBaseline />
        <AuthGuard authenticated={authenticated} redirectTo={"/auth"} />
      </ThemeProvider>
    </ClientOnly>
  );
};

export default DashboardLayout;
