import { User } from "firebase/auth";
import { waitForUser } from "@/lib/firebase/auth";
import { AxiosInstance } from "axios";

export function interceptors(client: AxiosInstance) {
  client.interceptors.request.use(
    async (config) => {
      // @ts-expect-error
      const user: User = await waitForUser();

      if (user) {
        const token = await user.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  return client;
}
