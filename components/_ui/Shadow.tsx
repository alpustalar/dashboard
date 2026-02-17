import { Stack, styled } from "@mui/material";

export const Shadow = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.componentColor,
  boxShadow:
    "rgba(0, 0, 0, 0.02) 0 0 2px 0, rgba(0, 0, 0, 0.06) 0 8px 12px -4px",
  borderRadius: "16px",
  padding: "24px",
}));

export default Shadow;
