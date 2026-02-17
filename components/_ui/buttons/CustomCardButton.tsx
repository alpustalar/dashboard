import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { darken } from "@mui/material";
import Shadow from "@/components/_ui/Shadow";

const bgDefault = "rgb(20, 26, 33)";
const bgTransparent = "rgba(20,26,33,0.33)";
const hoveredOverlayTransparent = darken(bgTransparent, 2);

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: `linear-gradient(to top , ${bgDefault} 20%, ${bgTransparent})`,
  zIndex: 2,
  borderRadius: 3,
  transition: "all .4s ease",
  "&:hover": {
    background: hoveredOverlayTransparent,
  },
};

interface CustomCardButtonPropTypes {
  path?: string;
  title: string;
  bgImage?: string;
}

const CustomCardButton = ({
  path = "/",
  title = "",
  bgImage = "",
}: CustomCardButtonPropTypes) => {
  return (
    <Link href={path} replace={false} scroll={false}>
      <Shadow
        sx={{
          position: "relative",
          "&:hover h4": {
            opacity: 0,
            transition: "opacity 0.4s ease",
          },
        }}
      >
        <Box sx={overlayStyle} />

        <Typography
          variant="overline"
          component="h4"
          sx={{
            position: "absolute",
            zIndex: 3,
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            transition: "opacity 0.4s ease",
          }}
        >
          {title}
        </Typography>

        <div style={{ position: "relative", width: "100%", height: 200 }}>
          <Image
            unoptimized={false}
            src={bgImage}
            alt={"key"}
            fill
            style={{ objectFit: "contain" }}
            loading={"lazy"}
          />
        </div>
      </Shadow>
    </Link>
  );
};

export default CustomCardButton;
