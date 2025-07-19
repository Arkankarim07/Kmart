import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.100.154:3000", // Ganti dengan IP lokal kamu
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
