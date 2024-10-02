// 这个文件用于

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

function setAuthToken(token) {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
}

export { axiosInstance, setAuthToken };
