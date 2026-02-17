import Image from "next/image";
import Box from "@mui/material/Box";
import imagePlaceholder from "@/utils/image-placeholder";
import { styled } from "@mui/material/styles";

const WrapperBox = styled(Box)(({}) => ({
  height: "10vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

type Props = {
  image?: string;
};

const DrawerProfilePicture = ({ image }: Props) => {
  const img = imagePlaceholder(image);
  return (
    <>
      <WrapperBox>
        <div
          className="gradient-box"
          style={{
            position: "absolute",
            zIndex: 0,
          }}
        ></div>

        <Image
          src={img}
          alt="key"
          width={75}
          height={75}
          style={{
            objectFit: "cover",
            borderRadius: 100,
            border: "3px solid #252525FF",
            position: "absolute",
            zIndex: 1,
            width: "80px",
            height: "80px",
          }}
          loading="lazy"
        />
      </WrapperBox>
    </>
  );
};

export default DrawerProfilePicture;
