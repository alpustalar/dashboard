"use client";
import { User } from "firebase/auth";
import { EmailPassword } from "@/types/transport/auth";
import { ApiReturn } from "@/types";
import { createContext } from "react";

interface AuthContext {
  user: User | null;
  token: string | null;
  loading: boolean;
  googleLogin: () => Promise<ApiReturn>;
  logout: () => Promise<void | ApiReturn>;
  sendVerifyEmail: (user: User) => Promise<ApiReturn>;
  resetPW: (email: string) => Promise<ApiReturn>;
  fbRegistration: (payload: EmailPassword) => Promise<ApiReturn>;
  fbLogin: (payload: EmailPassword) => Promise<ApiReturn>;
}

export const AuthContext = createContext<AuthContext | null>(null);
