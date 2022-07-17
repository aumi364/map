import axios from "axios";
import { fourSquareBaseUrl } from "../helpers/apiUrl";
import { fourSquaretoken } from "../helpers/secretKeys";

//fourSquare http instance
const fourSquareHttp = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  baseURL: fourSquareBaseUrl,
});

fourSquareHttp.interceptors.request.use((config: any) => {
  const token = fourSquaretoken;

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

export default fourSquareHttp;
