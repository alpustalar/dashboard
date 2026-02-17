"use client";
import Image from "next/image";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import useAuth from "@/hooks/useAuth";
import { Nunito } from "next/font/google";
import Shadow from "@/components/_ui/Shadow";
import imagePlaceholder from "@/utils/image-placeholder";
import { tHelper } from "@/constants/translations";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslations } from "next-intl";

const bgDefault = "rgb(20, 26, 33)";
const bgTransparent = "rgba(20,26,33,0.89)";

const texts = {
  goNow: tHelper("Başla!", "Go Now!"),
  subtitle2: tHelper(
    "Her adımında sana en iyi deneyimi sunmak için buradayız.",
    "Every step of the way, we're here to provide you with the best experience.",
  ),
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: `linear-gradient(to left, ${bgDefault} 20%, ${bgTransparent})`,
  zIndex: 2,
  borderRadius: 3,
};

const containerStyle = {
  width: "100%",
  height: "38vh",
  position: "relative",
};

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

const WelcomeCard = () => {
  const { user } = useAuth() ?? {};

  const t = useTranslations();

  const [language] = useLanguage();

  return (
    <>
      <Shadow sx={containerStyle}>
        <Box sx={overlayStyle} />
        <Image
          src={imagePlaceholder("/component-background-1.webp")}
          alt="welcome-bg"
          fill
          loading="eager"
          style={{
            objectFit: "cover",
            borderRadius: 10,
          }}
        />

        <Stack
          direction="row"
          p={2}
          px={6}
          position="relative"
          zIndex={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack>
            <Typography
              fontWeight={600}
              variant="h5"
              sx={{
                color: "white",
              }}
              className={nunito.className}
            >
              {t("welcomeBack")} 👋
            </Typography>

            <Typography
              variant="h6"
              className={nunito.className}
              sx={{ color: "white" }}
            >
              {
                // @ts-expect-error some
                user?.firstName
              }
            </Typography>
            <Typography
              sx={{ color: "#8d8d8d" }}
              className={nunito.className}
              mt={1}
              variant="subtitle2"
            >
              {texts.subtitle2[language]}
            </Typography>
          </Stack>

          <Image
            unoptimized={false}
            src={`/welcome-pic.png`}
            alt={"key"}
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
            loading={"eager"}
          />
        </Stack>
      </Shadow>
    </>
  );
};

export default WelcomeCard;
