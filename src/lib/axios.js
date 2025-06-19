import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://taskproductivity-api.onrender.com/api"
      : "http://localhost:5001/api",
  withCredentials: true,
});
