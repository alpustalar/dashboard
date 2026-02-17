export type ApiReturn<T = unknown> = {
  data: T | null | true;
  error: boolean;
  message: string;
};
