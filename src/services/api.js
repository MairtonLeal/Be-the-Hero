import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.0.107:5555"
});

export default api;
