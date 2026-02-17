"use client";
import List from "@mui/material/List";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import { usePathname } from "next/navigation";
import React from "react";
import CustomListItemWithChildrenButton from "@/components/_ui/menu-list/CustomListItemWithChildrenButton";
import CustomListItemButton from "@/components/_ui/menu-list/CustomListItemButton";
import { SidebarRouteItem } from "@/components/_layout/routes/sidebar-routes";

type Props = {
  route: SidebarRouteItem[];
  open?: boolean | null;
};

const CustomList = ({ route, open }: Props) => {
  const path = usePathname();

  return (
    <List>
      {route.map((item) => {
        return item.children ? (
          <CustomListItemWithChildrenButton
            open={open ? open : false}
            item={item}
            key={item.route}
          />
        ) : item.divider ? (
          <Divider key={item.route} variant="middle" sx={{ pt: 1 }} />
        ) : (
          <Link
            key={item.route}
            href={item.route ?? "/"}
            replace={false}
            scroll={false}
          >
            <CustomListItemButton item={item} path={path} open={open} />
          </Link>
        );
      })}
    </List>
  );
};

export default CustomList;
