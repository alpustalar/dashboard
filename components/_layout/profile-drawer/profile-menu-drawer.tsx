"use client";
import { Button, Drawer, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { IoIosClose } from "react-icons/io";
import React, { Dispatch, SetStateAction } from "react";
import useAuth from "@/hooks/useAuth";
import Typography from "@mui/material/Typography";
import { toast, Toaster } from "react-hot-toast";
import DrawerProfilePicture from "@/components/_layout/profile-drawer/DrawerProfilePicture";
import { isUser } from "@/lib/firebase/auth";
import { useTranslations } from "next-intl";
import { styled } from "@mui/material/styles";

const LogoutButtonWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(1),
}));

const LogoutButton = styled(Button)(({ theme }) => ({
  backgroundImage:
    "linear-gradient(to right, #321200, #2f1100, #2b1001, #280f01, #250e01)",
  height: "50px",
  color: theme.palette.warning.main,
}));

type Props = {
  profileMenuOpen: boolean;
  setProfileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const ProfileMenuDrawer = ({ profileMenuOpen, setProfileMenuOpen }: Props) => {
  const { user, logout } = useAuth() ?? {};

  const t = useTranslations();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.error(e);
      toast.error(t("serverError"));
    }
  };

  return (
    <>
      <Drawer
        sx={{ position: "fixed", zIndex: 999999999 }}
        open={profileMenuOpen}
        anchor={"right"}
        onClick={(e) => {
          e.stopPropagation();
          setProfileMenuOpen(false);
        }}
        ModalProps={{
          BackdropProps: { style: { backgroundColor: "transparent" } },
        }}
      >
        <Box
          width={320}
          height={"100vh"}
          sx={{ bgcolor: "inherit", position: "relative" }}
          onClick={(e) => e.stopPropagation()}
          pt={10}
          px={2}
        >
          <Stack sx={{ overflow: "scroll" }}>
            <Stack alignItems="center" sx={{ height: "30vh" }}>
              <DrawerProfilePicture />
              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                {isUser(user) && user.displayName}
              </Typography>
              <Typography variant="caption" color={"textDisabled"}>
                {isUser(user) && user.email}
              </Typography>
              <Typography
                mt={2}
                sx={{
                  textTransform: "capitalize",
                  color: "primary.customColor.light",
                }}
              ></Typography>
            </Stack>
            <Stack py={2}></Stack>
          </Stack>

          <LogoutButtonWrapper>
            <LogoutButton variant="contained" fullWidth onClick={handleLogout}>
              {t("logout")}
            </LogoutButton>
          </LogoutButtonWrapper>
        </Box>

        <IoIosClose className="closeIcon" style={{ left: 15, top: 15 }} />
      </Drawer>
      <Toaster />
    </>
  );
};

export default ProfileMenuDrawer;
