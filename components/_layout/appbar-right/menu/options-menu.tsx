"use client";
import { Menu, Stack } from "@mui/material";
import { useEffect } from "react";
import { AiFillMoon } from "react-icons/ai";
import { BiFullscreen, BiSolidSun } from "react-icons/bi";
import { Toaster } from "react-hot-toast";
import { MdCloseFullscreen } from "react-icons/md";
import { OptionsMenuItems } from "@/types/ui/menu";
import { enterFullScreen } from "@/utils/enter-full-screen";
import { useTheme } from "@mui/system";
import { exitFullScreen } from "@/utils/exit-full-screen";
import OptionsMenuItem from "@/components/_layout/appbar-right/menu/options-menu-item";
import { useDarkTheme } from "@/hooks/useDarkTheme";
import { useToggle } from "@reactuses/core";
import { useTranslations } from "next-intl";
import ClientOnly from "@/components/util/client-only";

interface Props {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
  darkModeOption?: boolean;
}

const slotProps = {
  paper: {
    elevation: 0,
    sx: {
      overflow: "visible",
      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
      mt: 6.5,
      "& .MuiIconButton-root": {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1.5,
      },
    },
  },
};

const OptionsMenu = ({
  anchorEl,
  open,
  handleClose,
  darkModeOption = true,
}: Props) => {
  const theme = useTheme();

  const [isDark, setIsDark] = useDarkTheme();
  const [isFullScreen, FullScreenToggle] = useToggle(false);
  const t = useTranslations("layout.optionsMenu");

  const closeMenu = (e) => {
    e.stopPropagation();
    handleClose();
  };

  const menuItems: OptionsMenuItems = [
    darkModeOption && {
      label: t("darkMode"),
      icon: isDark ? BiSolidSun : AiFillMoon,
      iconColor: {
        dark: theme.palette.warning.main,
        light: "black",
      },
      switchIsOn: isDark,
      switchToggleFn: () => setIsDark(!isDark),
    },
    {
      label: t("screenMode"),
      icon: isFullScreen ? MdCloseFullscreen : BiFullscreen,
      iconColor: null,
      switchIsOn: isFullScreen,
      switchToggleFn: FullScreenToggle,
    },
  ].filter(Boolean);

  useEffect(() => {
    (async () => {
      try {
        if (isFullScreen) {
          await enterFullScreen();
        } else {
          await exitFullScreen();
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [isFullScreen]);

  return (
    <ClientOnly>
      <Menu
        anchorEl={anchorEl}
        id="contacts-menu"
        open={open}
        onClose={handleClose}
        onClick={closeMenu}
        slotProps={slotProps}
        transformOrigin={{ horizontal: "center", vertical: "bottom" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <Stack p={2} rowGap={2}>
          {menuItems.map((menuItem) => (
            <OptionsMenuItem key={menuItem.label} menuItem={menuItem} />
          ))}
        </Stack>
      </Menu>
      <Toaster />
    </ClientOnly>
  );
};

export default OptionsMenu;
