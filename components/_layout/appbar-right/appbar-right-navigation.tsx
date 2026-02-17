"use client";
import IconButton from "@mui/material/IconButton";
import { Avatar, Stack } from "@mui/material";
import styles from "./AppBarRightNavigation.module.scss";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import Link from "next/link";
import AuthGuard from "@/components/auth/auth-guard";
import { MdOutlinePerson2 } from "react-icons/md";
import { useTheme } from "@mui/system";
import LanguagesMenu from "@/components/_layout/appbar-right/menu/languages-menu";
import SettingsButton from "@/components/_ui/buttons/SettingsButton";
import OptionsMenu from "@/components/_layout/appbar-right/menu/options-menu";
import { LANGUAGE_FLAG } from "@/constants/language-flag";
import imagePlaceholder from "@/utils/image-placeholder";
import { useLocale } from "next-intl";
import { Locale } from "@/types";
import { styled } from "@mui/material/styles";
import ClientOnly from "@/components/util/client-only";

const Wrapper = styled(Stack)(({}) => ({
  flexDirection: "row",
  alignItems: "center",
  columnGap: 1,
}));

interface Props {
  setProfileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const AppBarRightNavigation = ({ setProfileMenuOpen }: Props) => {
  const image = imagePlaceholder(false);
  const language = useLocale() as Locale;
  const flagImage = imagePlaceholder(LANGUAGE_FLAG[language]);
  const [openLanguagesMenu, setOpenLanguagesMenu] = useState(false);
  const [openOptionsMenu, setOpenOptionsMenu] = useState(false);
  const languageBtn = useRef<HTMLButtonElement>(null);
  const optionsBtn = useRef<HTMLButtonElement>(null);
  const theme = useTheme();

  const authenticated = (
    <Stack sx={{ position: "relative" }}>
      <IconButton size="small" onClick={() => setProfileMenuOpen(true)}>
        <Avatar sx={{ width: 30, height: 30 }} src={image}></Avatar>
      </IconButton>
    </Stack>
  );

  const unauthenticated = (
    <Link href="/auth" scroll={false}>
      <IconButton>
        <MdOutlinePerson2 />
      </IconButton>
    </Link>
  );

  return (
    <ClientOnly>
      <Wrapper>
        <Wrapper pr={2}>
          <IconButton
            ref={languageBtn}
            onClick={() => setOpenLanguagesMenu(true)}
          >
            <Avatar src={flagImage} sx={{ width: 28, height: 28 }} />
          </IconButton>
          <LanguagesMenu
            anchorEl={languageBtn.current}
            open={openLanguagesMenu}
            handleClose={() => setOpenLanguagesMenu(false)}
          />
        </Wrapper>

        <SettingsButton
          ref={optionsBtn}
          onClick={() => setOpenOptionsMenu(true)}
          buttonClass={styles.rotateIcon}
          iconColor={theme?.palette?.text?.transparentContrast}
        />

        <OptionsMenu
          anchorEl={optionsBtn.current}
          open={openOptionsMenu}
          handleClose={() => setOpenOptionsMenu(false)}
        />

        <AuthGuard
          authenticated={authenticated}
          unauthenticated={unauthenticated}
        />
      </Wrapper>
    </ClientOnly>
  );
};

export default AppBarRightNavigation;
