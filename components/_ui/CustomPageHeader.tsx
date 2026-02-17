"use client";
import { FC } from "react";
import Typography from "@mui/material/Typography";
import Shadow from "@/components/_ui/Shadow";

interface CustomPageHeaderPropTypes {
  title: string;
  image?: string;
  height?: string;
}

const CustomPageHeader: FC<CustomPageHeaderPropTypes> = ({
  title,
  image,
  height,
}) => {
  const bgDefault = "rgba(20,26,33,0.87)";
  const bgTransparent = "rgba(20,26,33,0.68)";

  const bgImage = image ?? "";
  const headerHeight = height ?? "10vh";

  return (
    <>
      <Shadow
        sx={{
          mb: 2,
          height: `${headerHeight}`,
          width: "100%",
          background: `linear-gradient(to right, ${bgDefault} 65%, ${bgTransparent}), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          sx={{ color: "white", textTransform: "uppercase" }}
          variant={"h4"}
        >
          {title}
        </Typography>
      </Shadow>
    </>
  );
};

export default CustomPageHeader;
