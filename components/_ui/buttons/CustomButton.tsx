"use client";
import { forwardRef } from "react";
import { darken, lighten, SxProps } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";

interface Props extends LoadingButtonProps {
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
  loading?: boolean;
}

const CustomButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const theme = useTheme();

  const mode = theme.palette.mode;

  const { children, sx, loading = false, ...rest } = props ?? {};

  const contrast = theme.palette.text.primary;
  const mainColor = theme.palette.text.contrastText;

  return (
    <LoadingButton
      ref={ref}
      sx={{
        backgroundColor: loading ? mainColor : contrast,
        height: 50,
        "&:hover": {
          backgroundColor:
            mode === "dark" ? darken(contrast, 0.2) : lighten(contrast, 0.2),
        },
        color: loading ? contrast : mainColor,
        ...sx,
      }}
      loading={loading}
      {...rest}
    >
      {children}
    </LoadingButton>
  );
});

export default CustomButton;
