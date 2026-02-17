import tHelper from "@/utils/translate-helper";

export const authPageTranslations = {
  title: tHelper("Hesabınıza giriş yapın", "Sign in to your account"),
  googleLogin: {
    error: tHelper(
      "Google ile giriş yapılamadı",
      "An error occurred during Google sign-in",
    ),
    loading: tHelper("Giriş yapılıyor", "Signing in"),
    default: tHelper("Google ile giriş yapın", "Sign in with Google"),
  },
  accountLeft: {
    title: tHelper(
      "Optimize edilmiş iş akışları ile...",
      "With optimized workflows...",
    ),
    description: tHelper(
      "Hızlı, güvenli ve ölçeklenebilir yönetim deneyimi",
      "A fast, secure, and scalable management experience",
    ),
  },
};
