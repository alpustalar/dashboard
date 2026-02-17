import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import CustomToast from "@/components/_ui/toast/CustomToast";
import CustomButton from "@/components/_ui/buttons/CustomButton";

const UserLogoutTab = () => {
  const router = useRouter();

  const [btnLoading, setBtnLoading] = useState(false);

  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      setBtnLoading(true);
      await logout();
      router.push("/hesap");
    } catch (e) {
      console.error(e);
      CustomToast("Sunucu hatası, lütfen daha sonra tekrar dene", true);
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <>
      <Stack alignItems="center" gap={3}>
        <Typography textAlign="center" variant={"h6"} className="gradient-text">
          Çıkış yapmak istediğinizden emin misiniz?
        </Typography>

        <CustomButton
          onClick={handleLogout}
          loading={btnLoading}
          variant="contained"
          sx={{
            width: 100,
            height: 40,
            fontWeight: 700,
            backgroundColor: "primary.customColor.light",
            "&:hover": {
              backgroundColor: "primary.customColor.light",
            },
          }}
        >
          Evet
        </CustomButton>
      </Stack>
    </>
  );
};

export default UserLogoutTab;
