"use client";
import { Container, Drawer, Stack } from "@mui/material";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { BiMenu } from "react-icons/bi";
import Box from "@mui/material/Box";
import { useWindowScroll } from "@reactuses/core";
import { IoIosClose } from "react-icons/io";
import { NavigationRouter } from "@/utils/navigation-router";
import AppBarRightNavigation from "@/components/_layout/appbar-right/appbar-right-navigation";
import ProfileMenuDrawer from "@/components/_layout/profile-drawer/profile-menu-drawer";
import { styled, Theme } from "@mui/material/styles";
import SidebarRoutes from "@/components/_layout/routes/sidebar-routes";

type WrapperStackProps = {
  axisY: number;
};

const WrapperStack = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "axisY",
})<WrapperStackProps>(({ theme, axisY }) => {
  const { palette } = theme;
  return {
    transition: "all .6s linear",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1),
    ...(axisY > 100 && {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 999,
      backdropFilter: "blur(10px)",
      backgroundColor: palette.background.transparent,
    }),
  };
});

const Spacer = styled("div")(({}) => ({
  width: "100%",
  height: "60px",
}));

const NavigationRouterWrapper = styled(Box)(({ theme }: { theme: Theme }) => ({
  width: "80vw",
  height: "100vh",
  backgroundColor: theme.palette.background.paper,
}));

interface Props {
  children: Readonly<ReactNode>;
  profileMenuOpen: boolean;
  setProfileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const SmallMediaDevicesLayout = ({
  children,
  setProfileMenuOpen,
  profileMenuOpen,
}: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openMobileMenu = () => setMobileMenuOpen(true);
  const { y } = useWindowScroll();

  return (
    <>
      <WrapperStack axisY={y}>
        <IconButton onClick={openMobileMenu}>
          <BiMenu />
        </IconButton>
        <AppBarRightNavigation setProfileMenuOpen={setProfileMenuOpen} />
      </WrapperStack>
      <Spacer />

      <Container maxWidth="sm">{children}</Container>
      <Drawer
        sx={{ position: "fixed" }}
        open={mobileMenuOpen}
        onClick={(e) => {
          e.stopPropagation();
          setMobileMenuOpen(false);
        }}
      >
        <NavigationRouterWrapper onClick={(e) => e.stopPropagation()}>
          <NavigationRouter value={SidebarRoutes()} />
        </NavigationRouterWrapper>

        <IoIosClose className={"closeIcon"} />
      </Drawer>
      <ProfileMenuDrawer
        profileMenuOpen={profileMenuOpen}
        setProfileMenuOpen={setProfileMenuOpen}
      />
    </>
  );
};

export default SmallMediaDevicesLayout;
