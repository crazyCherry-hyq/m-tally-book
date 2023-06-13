import axios from 'axios'
import qs from "qs";
import Cookies from "js-cookie";
import httpCode from "@/enums/httpCode.js";
import { Toast } from "antd-mobile";

const MODE = import.meta.env.MODE

const service = axios.create({
  baseURL: MODE === 'development' ? '/api' : '',
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: `${localStorage.getItem('token') || null}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  paramsSerializer(params) {
    return qs.stringify(params, {indices: false})
  }
})

service.interceptors.request.use(
  (config) => {
    const token = Cookies.get('tally-book-token');
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(res => {
  const { code, msg } = res.data;
  if (code) {
    switch (code) {
      case httpCode.INTERNAL_SERVER_ERROR:
        if (msg) {
          Toast.show({
            content: msg,
            position: 'top',
          })
        }
        break;
      case httpCode.SUCCESS:
        if (msg) {
          Toast.show({
            content: msg,
            position: 'top'
          })
        }
        return res.data
      default:
        throw res
    }
  } else {
    return res
  }
}, error => {
  if (error.response && error.response.status) {
    switch (error.response.status) {
      case httpCode.BAD_REQUEST:
        location.reload()
        break
    }
  }
  console.log(error)
  return Promise.reject(error);
})

export default service;
