"use client";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { useTheme } from "@mui/material/styles";
import { SidebarRouteItem } from "@/components/_layout/data/sidebar-routes";
import {
  listItemHoverColor,
  listItemSelectedColor,
} from "@/styles/themes/constants";

interface Props {
  item: SidebarRouteItem;
  path?: string;
  open: boolean;
}

const CustomListItemButton = ({ item, path, open }: Props) => {
  const theme = useTheme();

  return (
    <>
      <ListItemButton
        sx={{
          minHeight: 48,
          px: 2.5,
          m: 0.5,
          justifyContent: open ? "initial" : "center",
          borderRadius: 3,
          ...(path && {
            backgroundColor:
              item?.route === path ? listItemSelectedColor : "inherit",
            "&:hover": {
              backgroundColor:
                item?.route === path
                  ? listItemSelectedColor
                  : listItemHoverColor,
            },
          }),
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            justifyContent: "center",
            mr: open ? 3 : "auto",
            "& *": {
              ...(theme?.palette?.primary?.customColor?.light && {
                color: `${theme.palette.primary.customColor.light} !important`,
              }),
            },
          }}
        >
          {item?.icon}
        </ListItemIcon>
        <ListItemText
          sx={{
            opacity: open ? 1 : 0,
          }}
        >
          <span
            style={{
              fontWeight: item.route === path ? 700 : 500,
              ...(theme?.palette?.primary?.customColor?.light && {
                color: theme.palette.primary.customColor.light,
              }),
            }}
          >
            {item?.label}
          </span>
        </ListItemText>
      </ListItemButton>
    </>
  );
};

export default CustomListItemButton;
