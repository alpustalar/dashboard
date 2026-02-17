"use client";
import { Avatar, Menu, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { appLanguages } from "@/data/appLanguages";
import { LANGUAGE_FLAG } from "@/constants/language-flag";
import imagePlaceholder from "@/utils/image-placeholder";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { Locale } from "@/types";
import ClientOnly from "@/components/util/client-only";

const slotProps = {
  paper: {
    elevation: 0,
    sx: {
      overflow: "visible",
      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
      mt: 6.5,
      "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1.5,
      },
    },
  },
};

interface Props {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
}

const LanguagesMenu = ({ anchorEl, open, handleClose }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleLanguageChange = (newLocale: Locale) => {
    // @ts-expect-error
    router.replace({ pathname, params }, { locale: newLocale });
    handleClose();
  };

  return (
    <ClientOnly>
      <Menu
        anchorEl={anchorEl}
        id="contacts-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={slotProps}
        transformOrigin={{ horizontal: "center", vertical: "bottom" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        {appLanguages.map((value, key) => {
          const image = imagePlaceholder(LANGUAGE_FLAG[value]);
          return (
            <MenuItem key={key} onClick={() => handleLanguageChange(value)}>
              <Avatar src={image} />
              <Typography variant="overline">{value}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </ClientOnly>
  );
};

export default LanguagesMenu;
