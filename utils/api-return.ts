import errorMessage from "@/utils/error-message";
import { ApiReturn } from "@/types";

const apiReturn = <T>(
  data?: T | undefined | null,
  error?: Error | unknown,
  message?: string,
): ApiReturn<T> => {
  if (error || !data) {
    return {
      data: null,
      error: true,
      message: errorMessage(error, message),
    };
  }

  return {
    data,
    error: false,
    message: "Başarılı",
  };
};

export default apiReturn;
