import { ButtonHTMLAttributes, forwardRef } from "react";
import IconButton from "@mui/material/IconButton";
import { AiFillSetting } from "react-icons/ai";

interface SettingsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconColor?: string;
  buttonClass?: string;
}

const SettingsButton = forwardRef<HTMLButtonElement, SettingsButtonProps>(
  (props, ref) => {
    const { iconColor, buttonClass, ...rest } = props;

    return (
      // @ts-expect-error some
      <div {...rest} style={{ position: "relative" }}>
        <IconButton className={buttonClass} ref={ref}>
          <AiFillSetting color={iconColor} fontSize={26} />
        </IconButton>
        <div
          style={{
            width: 7,
            height: 7,
            backgroundColor: "#ff4841",
            position: "absolute",
            top: 0,
            right: 0,
            margin: 5,
            borderRadius: 100,
          }}
        ></div>
      </div>
    );
  },
);

export default SettingsButton;
