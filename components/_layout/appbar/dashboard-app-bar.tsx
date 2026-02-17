"use client";
import { Dispatch, memo, SetStateAction, useMemo } from "react";
import { IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { useWindowScroll } from "@reactuses/core";
import { FaChevronRight } from "react-icons/fa";
import AppBarRightNavigation from "@/components/_layout/appbar-right/appbar-right-navigation";
import StyledSidebarAppBar from "@/components/_ui/emotion-styled/StyledSidebarAppBar";
import { useMediaQuery, useTheme } from "@mui/system";
import { useTranslations } from "next-intl";
import ClientOnly from "@/components/util/client-only";

const AnimatedStack = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
  flexDirection: "row",
  transition: "all 0.4s linear",
  paddingLeft: open ? 0 : theme.spacing(5),
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

const MenuIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
  marginLeft: theme.spacing(-0.6),
  backgroundColor: alpha(theme.palette.background.paper, 0.1),
  display: open ? "none" : "inline-flex",
  "&:hover": {
    backgroundColor: alpha(theme.palette.background.paper, 0.2),
  },
}));

const Spacer = styled("div")<{ visible: boolean }>(({ theme, visible }) => ({
  position: "fixed",
  top: 0,
  height: 64,
  width: "100%",
  backgroundColor: alpha(theme.palette.background.paper, 0.93),
  zIndex: 2,
  transition: "all 0.2s linear",
  opacity: visible ? 1 : 0,
  pointerEvents: "none",
}));

interface Props {
  open: boolean;
  setProfileMenuOpen: Dispatch<SetStateAction<boolean>>;
  handleDrawerOpen: () => void;
}

const DashboardAppBar = ({
  open,
  handleDrawerOpen,
  setProfileMenuOpen,
}: Props) => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const { y } = useWindowScroll();
  const t = useTranslations("layout.header");
  const showRightNav = useMemo(() => !(isMdDown && open), [isMdDown, open]);

  return (
    <ClientOnly>
      <StyledSidebarAppBar
        sx={{
          backgroundColor: "transparent",
          transition: "all 0.2s linear",
          ...(y > 50 && {
            backdropFilter: "blur(4px)",
          }),
        }}
        elevation={0}
        open={open}
      >
        <Toolbar>
          <MenuIconButton
            onClick={handleDrawerOpen}
            edge="start"
            open={open}
            aria-label="open drawer"
          >
            <FaChevronRight size={12} />
          </MenuIconButton>

          <AnimatedStack open={open}>
            <Typography variant="h6" noWrap component="div">
              {t("title")}
            </Typography>

            {showRightNav && (
              <AppBarRightNavigation setProfileMenuOpen={setProfileMenuOpen} />
            )}
          </AnimatedStack>
        </Toolbar>
      </StyledSidebarAppBar>

      <Spacer visible={y <= 50} aria-hidden="true" />
    </ClientOnly>
  );
};

export default memo(DashboardAppBar);
