import useAuth from "@/hooks/useAuth";
import { ReactNode, useEffect } from "react";
import { useRouter } from "@/i18n/navigation";

type Props = {
  authenticated: ReactNode;
  unauthenticated?: ReactNode;
  fallback?: ReactNode;
  redirectTo?: string;
};

const AuthGuard = ({
  authenticated,
  unauthenticated,
  fallback = null,
  redirectTo,
}: Props) => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user && redirectTo) {
      router.push(redirectTo);
    }
  }, [loading, user, redirectTo, router]);

  if (loading) return fallback;

  return user ? authenticated : unauthenticated;
};

export default AuthGuard;
