import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";
const AUTH_URL = "https://reqres.in/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const authAxiosInstance = axios.create({
  baseURL: AUTH_URL,
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => Promise.reject(error)
);

authAxiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

authAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => Promise.reject(error)
);

export { axiosInstance, authAxiosInstance };
