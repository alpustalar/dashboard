// components/layout/sidebar/sidebar-styled.tsx
import { CSSObject, styled, Theme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  border: "none",
  borderRight: "1px solid",
  borderColor: theme.palette.divider,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden",
  "& *": {
    color: theme.palette.primary.contrastText
  }
});

const closedMixin = (theme: Theme): CSSObject => ({
  border: "none",
  borderRight: "1px solid",
  borderColor: theme.palette.divider,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  },
  "& *": {
    color: theme.palette.primary.contrastText
  }
});

interface DrawerProps {
  open?: boolean;
}

const StyledSidebarDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})<DrawerProps>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

export default StyledSidebarDrawer;