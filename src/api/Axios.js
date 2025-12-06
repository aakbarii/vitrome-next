import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://api.myresome.ir/api",
  headers: {
    "Content-Type": "application/json",
  },
});

Axios.interceptors.request.use(
  (config) => {
    // const token = Cookies.get("token");
    // if (token) {
    //   config.headers["x-auth-token"] = token;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);