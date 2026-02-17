"use client";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Collapse } from "@mui/material";
import Link from "next/link";
import { MdOutlineArrowDropDown, MdOutlineArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import { useToggle } from "@reactuses/core";
import {
  listItemHoverColor,
  listItemSelectedColor,
  ListItemTextColor,
} from "@/styles/themes/constants";
import { SidebarRouteItem } from "@/components/_layout/data/sidebar-routes";

type Props = {
  item: SidebarRouteItem;
  open: boolean;
};

const CustomListItemWithChildrenButton = ({ item, open }: Props) => {
  const path = usePathname();
  const [childrenIsOpen, ChildrenToggle] = useToggle(false);
  const theme = useTheme();

  return (
    <List>
      {/*list item*/}

      <ListItemButton
        sx={{
          minHeight: 48,
          px: 2.5,
          m: 0.5,
          justifyContent: open ? "initial" : "center",
          borderRadius: 3,
          opacity: childrenIsOpen ? 1 : 0.7,
          transition: "background .3s ease",
        }}
        onClick={ChildrenToggle}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            justifyContent: "center",
            mr: open ? 3 : "auto",
            "& *": {
              ...(theme?.palette?.primary?.["customColor"]?.light && {
                color: `${theme.palette?.primary?.["customColor"].light} !important`,
              }),
            },
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          sx={{
            opacity: open ? 1 : 0,
          }}
        >
          <span
            style={{
              ...(item.route && {
                fontWeight: path.startsWith(item.route) ? 700 : 500,
              }),
            }}
          >
            {item.label}
          </span>
        </ListItemText>
        {childrenIsOpen ? (
          <MdOutlineArrowDropDown fontSize={24} />
        ) : (
          <MdOutlineArrowRight fontSize={24} />
        )}
      </ListItemButton>

      <Collapse in={childrenIsOpen} timeout="auto" unmountOnExit>
        {/*children start*/}
        {item.children?.map((children, i) => {
          const route = `${item.route}${children.route}`;
          return (
            <List
              key={i}
              component="div"
              disablePadding
              sx={{ position: "relative" }}
            >
              <Link href={route} replace={false} scroll={false}>
                <ListItemButton
                  className={open ? "list-item-button" : ""}
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    m: 0.5,
                    justifyContent: open ? "initial" : "center",
                    borderRadius: 3,
                    ...(path && {
                      backgroundColor:
                        route === path ? listItemSelectedColor : "inherit",
                      "&:hover": {
                        backgroundColor:
                          route === path
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
                      ...(open && {
                        position: open && "absolute",
                      }),
                      left: 40,
                      top: 25,
                      color:
                        route === path
                          ? ListItemTextColor
                          : (theme?.palette?.primary?.customColor?.light ?? ""),
                    }}
                  >
                    {children.icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      opacity: open ? 1 : 0,
                      ...(open && {
                        position: open && "absolute",
                      }),
                      left: 70,
                      top: 17,
                    }}
                  >
                    <span
                      style={{
                        fontWeight: route === path ? 600 : 400,
                        fontSize: 14,
                      }}
                    >
                      {children?.label}
                    </span>
                  </ListItemText>
                </ListItemButton>
              </Link>
            </List>
          );
        })}
      </Collapse>
    </List>
  );
};
export default CustomListItemWithChildrenButton;
