"use client";
import { Tab, Tabs } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { styled, Theme } from "@mui/material/styles";

type TabItem = {
  href: string;
  label: string;
  icon: JSX.Element;
};

type TabItems = TabItem[];

interface PropTypes {
  tabItems: TabItems;
}

const isTabItems = (item: unknown): item is TabItems => {
  return (
    Array.isArray(item) &&
    item.every(
      (i) =>
        i &&
        typeof item === "object" &&
        "href" in i &&
        "label" in i &&
        "icon" in i,
    )
  );
};

const StyledTabs = styled(Tabs)(({ theme }: { theme: Theme }) => ({
  borderRadius: 5,
  my: 2,
  "& *": {
    color: "text.primary",
  },
  backgroundColor: theme.palette.primary.componentColor,
  boxShadow:
    "rgba(0, 0, 0, 0.02) 0 0 2px 0, rgba(0, 0, 0, 0.06) 0 8px 12px -4px",
  padding: "24px",
}));

interface StyledTabProps {
  isActive?: boolean;
}

const StyledTab = styled(Tab, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<StyledTabProps>(({ isActive }) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
}));

const CustomTabs = ({ tabItems }: PropTypes) => {
  const path = usePathname();

  return (
    <>
      <StyledTabs variant="scrollable" aria-label="icon label tabs ">
        {isTabItems(tabItems) &&
          tabItems.map((item, i) => {
            const isActive = path === item.href;

            return (
              <Link
                style={{
                  cursor: "pointer",
                }}
                key={item.href}
                href={item?.href}
                replace={false}
                scroll={false}
              >
                <StyledTab
                  value={i}
                  icon={item?.icon}
                  label={item?.label}
                  isActive={isActive}
                />
              </Link>
            );
          })}
      </StyledTabs>
    </>
  );
};

export default CustomTabs;
