import axios from "axios";
const API_URL = process.env.VUE_APP_ROOT_API;
export const http = axios.create({
  // baseURL: "http://127.0.0.1:8000/api/",
  baseURL: API_URL,
});
