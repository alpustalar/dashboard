"use client";
import { useCallback, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import {
  firebaseLogin,
  firebaseRegister,
  loginWithGoogle,
  resetPassword,
  sendVerificationEmail as sendVerifyEmailService,
} from "@/services/user/auth";
import { ApiReturn, EmailPassword } from "@/types";
import clientReturn from "@/utils/client-return";
import { AuthContext } from "@/context/AuthContext";
import { isUser } from "@/lib/firebase/auth";
import { asyncHandler } from "@/utils/async-handler";

type Props = {
  children: Readonly<React.ReactNode>;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const googleLogin = useCallback(async (): Promise<ApiReturn> => {
    const [result, e] = await asyncHandler(loginWithGoogle());

    if (e || !result) {
      return clientReturn(null, "Giriş yapılamadı");
    }

    if (result.error || !isUser(result.data)) {
      return clientReturn(null, "Giriş yapılamadı");
    }

    return clientReturn(true, "Giriş yapıldı");
  }, []);

  const logout = useCallback(async (): Promise<void | ApiReturn> => {
    const [, e] = await asyncHandler(signOut(auth));
    if (e) return clientReturn(null, "Çıkış yapılamadı");
    window.location.reload();
  }, []);

  const sendVerifyEmail = useCallback(
    async (firebaseUser: User): Promise<ApiReturn> => {
      const [result, e] = await asyncHandler(
        sendVerifyEmailService(firebaseUser),
      );

      if (e || !result)
        return clientReturn(null, "Doğrulama e-postası gönderilemedi");
      if (result.error)
        return clientReturn(null, result.message || "Hata oluştu");

      return clientReturn(result.data, "Doğrulama e-postası gönderildi");
    },
    [],
  );

  const resetPW = useCallback(async (email: string): Promise<ApiReturn> => {
    const [result, e] = await asyncHandler(resetPassword(email));

    if (e || !result)
      return clientReturn(null, "Sıfırlama e-postası gönderilemedi");
    if (result.error)
      return clientReturn(null, "E-posta bulunamadı veya bir hata oluştu");

    return clientReturn(true, "Sıfırlama e-postası gönderildi");
  }, []);

  const fbRegistration = useCallback(
    async ({ email, password }: EmailPassword): Promise<ApiReturn> => {
      const [result, e] = await asyncHandler(
        firebaseRegister({ email, password }),
      );

      if (e || !result) return clientReturn(null, "Sunucu hatası");
      if (result.error) return clientReturn(null, "Kayıt gerçekleştirilemedi");

      const userData = result.data;
      if (isUser(userData)) {
        // Kayıt başarılı olduktan sonra otomatik doğrulama maili tetikleme
        const [, e] = await asyncHandler(sendVerifyEmailService(userData));
        if (e)
          clientReturn(true, "Kayıt başarılı. Onay e-postası gönderilemedi.");
      }

      return clientReturn(true, "Kayıt Başarılı");
    },
    [],
  );

  const fbLogin = useCallback(
    async ({ email, password }: EmailPassword): Promise<ApiReturn> => {
      const [result, e] = await asyncHandler(
        firebaseLogin({ email, password }),
      );

      if (e || !result) return clientReturn(null, "Sunucu hatası");
      if (result.error) return clientReturn(null, "Email ya da şifre hatalı");

      return clientReturn(true, "Giriş başarılı");
    },
    [],
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const idToken = await firebaseUser.getIdToken();
        setUser(firebaseUser);
        setToken(idToken);
      } else {
        setUser(null);
        setToken(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        googleLogin,
        logout,
        fbRegistration,
        fbLogin,
        resetPW,
        sendVerifyEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
