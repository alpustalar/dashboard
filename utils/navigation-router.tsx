"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface Route {
  label?: string;
  icon?: ReactNode;
  route?: string;
  children?: Route[];
}

interface Props {
  value: Route[];
}

export const NavigationRouter = ({ value }: Props) => {
  const path = usePathname();

  const handleRoute = (routeValue: Route[]) => {
    return routeValue.map((route) => {
      const { route: pathname, label, icon, children } = route;

      if (!pathname) {
        console.error("Route is missing in:", route);
        return null;
      }

      const isActive = path.startsWith(pathname);

      return (
        <div key={pathname}>
          <Link href={pathname}>
            <Stack
              sx={{
                fontWeight: isActive ? "bold" : "400",
              }}
              direction="row"
              alignItems="center"
            >
              {icon && icon} <Typography>{label}</Typography>
            </Stack>
          </Link>
          {children && (
            <div style={{ paddingLeft: 20 }}>{handleRoute(children)}</div>
          )}
        </div>
      );
    });
  };

  return <>{handleRoute(value)}</>;
};
