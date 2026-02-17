/* eslint-disable */
"use client";

import { useMediaQuery, useTheme } from "@mui/system";
import { useEffect, useState } from "react";
import Shadow from "@/components/_ui/Shadow";
import Box from "@mui/material/Box";
import { Skeleton, Stack, Typography } from "@mui/material";
import { uiValidRoles } from "@/data/validRoles";
import {
  StyledTab,
  StyledTabs,
} from "@/components/_ui/emotion-styled/StyledTab";
import Image from "next/image";

const bgDefault = "rgba(25,68,72,0.66)";
const bgTransparent = "rgba(25,68,72,0.73)";

const ProfileHero = ({
  apiData,
  setTabValue,
  isPending,
  supervisor,
  strangeUser,
  userSelf,
}) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [visibleAll, setVisibleAll] = useState(false);
  useState(false);

  const [supervisorSelf, setSupervisorSelf] = useState(false);

  useEffect(() => {
    if (supervisor || strangeUser || userSelf) {
      setVisibleAll(true);
    }

    if (supervisor && userSelf) {
      setSupervisorSelf(true);
    }
  }, [supervisor, strangeUser, userSelf]);

  return (
    <>
      <Shadow
        sx={{
          height: { xs: "30vh", md: "40vh" },
          padding: "0px !important",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: isSm ? "30%" : 25,
            left: isSm ? "50%" : 20,
            transform: isSm ? "translateX(-50%)" : "",
            display: "flex",
            alignItems: "center",
            columnGap: 5,
            flexDirection: isSm ? "column" : "row",
          }}
          className={"img-container"}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 80, sm: 100, md: 125 },
              height: { xs: 80, sm: 100, md: 125 },
            }}
          >
            <Image
              unoptimized={false}
              src={"/profile-picture.webp"}
              alt={"key"}
              fill
              style={{ objectFit: "cover", borderRadius: 100 }}
              loading={"lazy"}
            />
          </Box>
          <Stack>
            <Typography
              fontWeight={600}
              variant="h5"
              sx={{
                textTransform: "capitalize",
                color: "white",
              }}
            >
              {isPending ? (
                <Skeleton animation="wave" width={100} />
              ) : (
                `${apiData?.data?.firstName ?? ""} ${apiData?.data?.lastName ?? ""}`
              )}
            </Typography>

            <Typography
              variant="caption"
              sx={{
                textAlign: isSm ? "center" : "",
                color: "#d3d3d3",
              }}
            >
              {isPending ? (
                <Skeleton animation="wave" width={50} />
              ) : (
                uiValidRoles[apiData?.data?.role]
              )}
            </Typography>
          </Stack>
        </Box>

        <Stack
          sx={{
            background: `linear-gradient(to top, ${bgDefault} 85%, ${bgTransparent}), url(/profile-header-cover.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            flex: { xs: 6, sm: 4 },
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        ></Stack>
        <Stack
          sx={{
            flex: { xs: 2, sm: 1 },
            flexDirection: "row",
            justifyContent: { xs: "center", sm: "flex-end" },
            alignItems: "center",
            px: 2,
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <StyledTabs onChange={(event, newValue) => setTabValue(newValue)}>
              {visibleAll && <StyledTab label="Profil" value={"1"} />}
              {userSelf && <StyledTab label="Şifre Güncelle" value={"2"} />}
              {supervisor && !supervisorSelf && (
                <StyledTab label="Yönetici" value={"3"} />
              )}
              {userSelf && <StyledTab label="Çıkış Yap" value={"4"} />}
            </StyledTabs>
          </Box>
        </Stack>
      </Shadow>
    </>
  );
};

export default ProfileHero;
