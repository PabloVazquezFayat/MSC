import axios from "axios";
import config from "./config";

const axiosInstance = axios.create({
  baseURL: config.domain,
  headers: config.headers,
});

const httpClient = {
  get: async (endpoint) => {
    const { data } = await axiosInstance.get(endpoint);
    return data;
  },
  put: async (enpoint, payload) => {
    const { data } = await axiosInstance.put(enpoint, payload);
    return data;
  },
  delete: async (endpoint) => {
    const { data } = await axiosInstance.delete(endpoint);
    return data;
  },
};

export default httpClient;
