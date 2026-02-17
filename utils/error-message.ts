import { AxiosError } from "axios";

type ErrorType = AxiosError | Error | unknown;

const isAxiosError = (error: unknown): error is AxiosError => {
  return (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof error.response === "object" &&
    error.response !== null &&
    "data" in error.response
  );
};
const errorMessage = (error: ErrorType, message?: string): string => {
  if (isAxiosError(error)) {
    return error.response.data + ` ** ${message}`;
  }

  if (error instanceof Error) {
    return error.message + ` ** ${message}`;
  }

  return message ?? "Bilinmeyen hata";
};

export default errorMessage;
