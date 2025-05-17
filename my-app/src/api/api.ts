import axios from "axios";

export const api = axios.create({
  // baseURL: "http://172.28.0.1:3000/",
  baseURL: "http://192.168.3.28:3000",
});
