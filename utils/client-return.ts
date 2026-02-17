import { ApiReturn } from "@/types";

const clientReturn = <T>(
  data?: T | undefined | null,
  msg?: string,
): ApiReturn => {
  if (!data) {
    return {
      data: null,
      error: true,
      message: msg || "Hata oluştu",
    };
  }

  return {
    data,
    error: false,
    message: msg || "Başarılı",
  };
};

export default clientReturn;
