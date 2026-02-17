import { Link } from "@/i18n/navigation";
import { CSSProperties } from "react";
import Image from "next/image";

interface Props {
  style?: CSSProperties;
  className?: string;
}

const CustomLogo = ({ style, className }: Props) => {
  return (
    <Link
      href={process.env.NEXT_PUBLIC_CLIENT_URL || "/"}
      className={className}
    >
      <Image
        src={"/logo.png"}
        alt={"logo"}
        width={50}
        height={50}
        style={{
          objectFit: "cover",
          margin: 15,
          ...style,
        }}
      />
    </Link>
  );
};

export default CustomLogo;
