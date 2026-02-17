import { styled } from "@mui/material/styles";
import { Tab } from "@mui/material";
import { TabList } from "@mui/lab";

export const StyledTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: "transparent",
    borderBottom: `5px solid ${theme.palette.primary?.customColor.light}`,
  },
}));

export const StyledTabs = styled(TabList)(() => ({
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
}));
