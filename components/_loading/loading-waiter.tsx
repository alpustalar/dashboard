"use client";
import { useTimeout } from "react-use";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const LoadingWaiter = ({ children }: Props) => {
  const [ready] = useTimeout(1000);
  if (!ready()) return null;
  return <>{children}</>;
};

export default LoadingWaiter;
