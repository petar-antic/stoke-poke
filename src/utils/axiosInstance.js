import axios from "axios";

let baseURL = process.env.REACT_APP_BASE_URL;
let token = process.env.REACT_APP_API_TOKEN;

const headers = {
  "Content-Type": "aplication/json",
  accept: "aplication/json",
  authorization: `Bearer ${token}`,
};

const api = axios.create({
  baseURL,
  headers,
});

export const getBowls = async () =>
  api.get("/bowls?currentPage=1").then((res) => res.data);

export default api;
