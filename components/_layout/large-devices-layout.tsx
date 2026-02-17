"use client";
import ClientOnly from "@/components/util/client-only";
import IconButton from "@mui/material/IconButton";
import { Dispatch, ReactNode, SetStateAction } from "react";
import DashboardAppBar from "@/components/_layout/appbar/dashboard-app-bar";
import CustomLogo from "@/components/_ui/CustomLogo";
import { FaChevronLeft } from "react-icons/fa";
import CustomList from "@/components/_ui/menu-list/CustomList";
import ProfileMenuDrawer from "@/components/_layout/profile-drawer/profile-menu-drawer";
import SidebarDrawer from "@/components/_ui/emotion-styled/StyledSidebarDrawer";
import DrawerHeader from "@/components/_ui/emotion-styled/StyledSidebarDrawerHeader";
import { styled, Theme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import SidebarRoutes from "@/components/_layout/routes/sidebar-routes";

const Wrapper = styled(Box)(({ theme: { palette } }: { theme: Theme }) => ({
  display: "flex",
  backgroundColor: palette.primary.main,
  color: palette.primary.contrastText,
  transition: "all .3s linear",
}));

const App = styled(Box)<BoxProps>(({ theme: { palette, spacing } }) => ({
  flexGrow: 1,
  padding: spacing(3),
  minHeight: "100vh",
  backgroundColor: palette.background.default,
}));

const ChevronButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "drawerIsOpen",
})<{ drawerIsOpen: boolean }>(({ theme, drawerIsOpen }) => {
  const { palette } = theme;
  return {
    opacity: drawerIsOpen ? 1 : 0,
    backgroundColor: palette.background.transparentContrast,
  };
});

interface PropTypes {
  children: ReactNode;
  setProfileMenuOpen: Dispatch<SetStateAction<boolean>>;
  drawerIsOpen: boolean;
  setDrawerIsOpen: Dispatch<SetStateAction<boolean>>;
  profileMenuOpen: boolean;
}

const Logo = styled(CustomLogo, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>(({ isOpen }) => {
  return {
    objectFit: "cover",
    opacity: isOpen ? 1 : 0,
    transition: ".3s ease",
  };
});

const LargeDevicesLayout = ({
  children,
  setProfileMenuOpen,
  drawerIsOpen,
  setDrawerIsOpen,
  profileMenuOpen,
}: PropTypes) => {
  const drawerToggle = () => setDrawerIsOpen((prev) => !prev);
  return (
    <ClientOnly>
      <Wrapper>
        <DashboardAppBar
          setProfileMenuOpen={setProfileMenuOpen}
          open={drawerIsOpen}
          handleDrawerOpen={() => setDrawerIsOpen(true)}
        />

        <SidebarDrawer variant="permanent" open={drawerIsOpen}>
          <DrawerHeader>
            <Logo isOpen={drawerIsOpen} />
            <ChevronButton drawerIsOpen onClick={drawerToggle}>
              <FaChevronLeft fontSize={12} />
            </ChevronButton>
          </DrawerHeader>

          <CustomList route={SidebarRoutes()} open={drawerIsOpen} />
        </SidebarDrawer>

        <App component="main">
          <DrawerHeader />
          {children}
        </App>

        <ProfileMenuDrawer
          profileMenuOpen={profileMenuOpen}
          setProfileMenuOpen={setProfileMenuOpen}
        />
      </Wrapper>
    </ClientOnly>
  );
};

export default LargeDevicesLayout;
