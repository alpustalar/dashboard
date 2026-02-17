"use client";
import { Button, Container, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useMemo, useState } from "react";
import AccountLeft from "@/components/hesap/AccountLeft";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import useAuth from "@/hooks/useAuth";
import CustomModal from "@/components/_ui/CustomModal";
import { useModal } from "@/hooks/useModal";
import { useTranslations } from "next-intl";

const AuthPage = () => {
  const router = useRouter();
  const { modal, showError, closeModal } = useModal();
  const { googleLogin } = useAuth();

  const [btnLoading, setBtnLoading] = useState(false);

  const t = useTranslations("authPage");

  const handleGoogleLogin = async () => {
    try {
      setBtnLoading(true);
      await googleLogin();
      router.replace("/");
    } catch (error) {
      console.error("Google login error:", error);
      showError(t("googleLogin.error"));
    } finally {
      setBtnLoading(false);
    }
  };

  const ButtonText = useMemo(() => {
    return btnLoading ? t("googleLogin.loading") : t("googleLogin.default");
  }, [btnLoading, t]);

  return (
    <>
      <Stack direction="row">
        <AccountLeft
          title={t("accountLeft.title")}
          description={t("accountLeft.description")}
        />
        <Stack
          flex={5.5}
          minHeight={"100vh"}
          bgcolor={"rgb(20, 26, 33)"}
          color={"white"}
          alignItems="center"
          justifyContent="center"
        >
          <Container maxWidth="xs">
            <Stack width={"100%"} height={"25vh"} rowGap={1} mb={28}>
              <Typography fontWeight={"700"} variant="h6">
                {t("title")}
              </Typography>
              <Stack my={5}>
                <Button
                  type="button"
                  disabled={btnLoading}
                  sx={{
                    mt: 2,
                    backgroundColor: "white",
                    height: 50,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.75)",
                    },
                    "&:disabled": {
                      backgroundColor: "rgba(255,255,255,0.5)",
                    },
                  }}
                  fullWidth
                  variant="contained"
                  onClick={handleGoogleLogin}
                >
                  <Stack direction="row" alignItems="center" columnGap={5}>
                    <FcGoogle fontSize={26} />
                    <Typography
                      sx={{ textTransform: "capitalize", color: "black" }}
                      fontWeight={"700"}
                      component={"span"}
                    >
                      {ButtonText}
                    </Typography>
                  </Stack>
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Stack>
        <Toaster />
      </Stack>
      <CustomModal
        modal={modal}
        closeFn={closeModal}
        icon
        boxStyle={{ backgroundColor: "background.default" }}
      />
    </>
  );
};

export default AuthPage;
