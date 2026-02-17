import axios from "axios";
import { interceptors } from "@/lib/api/interceptors";

const createAxiosClient = (path = "") => {
  const apiClient = axios.create({
    baseURL: `http://localhost/api/${path}`,
    withCredentials: true,
  });

  return interceptors(apiClient);
};

export default createAxiosClient;
