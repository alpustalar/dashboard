"use client";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255,0)",
  "& label": {
    color: theme?.palette?.text?.primary,
  },

  "&:hover label": {
    fontWeight: 700,
  },
  "& label.Mui-focused": {
    color: theme?.palette?.text?.primary,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme?.palette?.text?.primary,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme?.palette?.text?.primary,
    },
    "&:hover fieldset": {
      borderColor: theme?.palette?.text?.primary,
      borderWidth: 2,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme?.palette?.text?.primary,
    },
  },
}));

export default StyledTextField;
