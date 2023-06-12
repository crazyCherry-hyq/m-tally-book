import axios from 'axios'
import qs from "qs";

const MODE = import.meta.env.MODE

const service = axios.create({
  baseURL: MODE === 'development' ? '/api' : null,
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

service.interceptors.response.use(res => {
  return res.data
})

export default service;
