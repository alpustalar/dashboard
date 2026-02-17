import { ReactNode } from "react";
import DashboardLayout from "@/components/_layout/dashboard-layout";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
}
