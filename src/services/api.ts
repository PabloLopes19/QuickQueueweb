import axios from "axios";

const baseURL = "https://api-quickqueue-9d311ca15f87.herokuapp.com/api";

const api = axios.create({
  baseURL: baseURL,
});

export default api;
