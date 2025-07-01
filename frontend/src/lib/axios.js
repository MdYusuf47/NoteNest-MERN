import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api", // Update this to your backend URL
});

export default api;