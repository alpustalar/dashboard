"use client";
import { Container, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "@mui/system";
import { useTheme } from "@mui/material/styles";

type Props = {
  title: string;
  description: string;
};

const AccountLeft = ({ title, description }: Props) => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  if (isMdDown) return null;

  return (
    <>
      <Container className={"container-bg"} maxWidth="xs">
        <Stack
          sx={{ position: "relative", zIndex: 1 }}
          flex={3.5}
          alignItems={"center"}
          justifyContent={"center"}
          minHeight={"100vh"}
          rowGap={12}
          pb={10}
        >
          <Stack rowGap={1} alignItems={"center"}>
            <Typography variant="h5" fontWeight={700}>
              {title}
            </Typography>
            <Typography variant="subtitle2">{description}</Typography>
          </Stack>
          <Image
            unoptimized={false}
            src={`/account-left.webp`}
            alt={"key"}
            width={300}
            height={300}
            style={{ objectFit: "cover" }}
            loading={"eager"}
          />
        </Stack>
      </Container>
    </>
  );
};

export default AccountLeft;
