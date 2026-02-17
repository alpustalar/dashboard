import { styled, Theme } from "@mui/material/styles";

interface ThemedProps {
  theme?: Theme;
}

const SidebarDrawerHeader = styled("div")<ThemedProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: theme?.spacing ? theme.spacing(0, 1) : "0 8px",
  ...(theme?.mixins?.toolbar || { minHeight: 64 }),
}));

export default SidebarDrawerHeader;
