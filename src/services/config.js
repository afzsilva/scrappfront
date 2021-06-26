import axios from "axios";

//http://127.0.0.1:8000/api/citacoes/

export const http = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});
