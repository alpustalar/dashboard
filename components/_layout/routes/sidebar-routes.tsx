"use client";
import { GoHomeFill } from "react-icons/go";
import { ReactElement } from "react";
import { useTranslations } from "next-intl";

export type SidebarRouteItem = {
  label: string;
  route: string;
  icon?: ReactElement;
  children?: SidebarRouteItem[];
  divider?: boolean;
};

export type SidebarRouteItems = SidebarRouteItem[];

const SidebarRoutes = (): SidebarRouteItems => {
  const t = useTranslations();

  return [
    {
      label: t("home"),
      icon: <GoHomeFill />,
      route: "/",
    },
  ];
};

export default SidebarRoutes;
