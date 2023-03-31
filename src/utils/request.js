import axios from "axios";

import { useState } from "../store";
const { userInfo } = useState();

const baseURL = process.env.NODE_ENV === 'development'
  ? import.meta.env.VITE_APP_URL_DEV
  : import.meta.env.VITE_APP_URL_PROD

const request = axios.create({
  baseURL: baseURL,
});

request.interceptors.request.use(
  function (config) {
    console.log("origin request", config);
    console.log("current state", { userInfo: userInfo.value });
    if (userInfo.value && userInfo.value.token) {
      config.headers.Authorization = `Bearer ${userInfo.value.token}`;
    }
    return config;
  },

  function (err) {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  function (response) {
    console.log("original response", response);
    return response;
  },
  function (err) {
    console.log("error response", err.response);
    return Promise.reject(err);
  }
);

export default request;
