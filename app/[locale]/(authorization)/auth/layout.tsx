import { ReactNode } from "react";
import AuthLayout from "@/components/_layout/auth-layout";

type Props = {
  children: Readonly<ReactNode>;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <AuthLayout>{children}</AuthLayout>
    </div>
  );
}
