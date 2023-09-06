import axios from 'axios'
import { getCookie } from '../utils'
const instance = axios.create({
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  withCredentials: true
})
// 请求发送拦截，把数据发送给后台之前做些什么......
instance.interceptors.request.use(request => {
  let session = getCookie('session')

  request.headers['value'] = session
  return request
}, function (error) {
  return Promise.reject(error)
})
instance.interceptors.response.use((response) => {
  let res = response.data
  return res
}, (err) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求参数错误'
        break
      case 401:
        err.message = '未授权，请登录'
        break
      case 403:
        err.message = '跨域拒绝访问'
        break
      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`
        break
      case 408:
        err.message = '请求超时'
        break
      case 500:
        err.message = '服务器内部错误'
        break
      case 501:
        err.message = '服务未实现'
        break
      case 502:
        err.message = '网关错误'
        break
      case 503:
        err.message = '服务不可用'
        break
      case 504:
        err.message = '网关超时'
        break
      case 505:
        err.message = 'HTTP版本不受支持'
        break
      default:
        break
    }
  }
  return Promise.reject(err)
})

let baseUrl: string = import.meta.env.VITE_BASE_URL;
const requestApi = {
  get(url: string, params = {}, config = {}) {
    return instance.get(baseUrl + url, {
      params,
      ...config,
    });
  },

  post(url: string, params = {}, config = {}) {
    return instance.post(baseUrl + url, params, config);
  },

  file(url: string, options = {}, config = {}) {
    let formData = new FormData();
    for (let key in options) {
      formData.append(key, options[key]);
    }
    return instance.post(baseUrl + url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      ...config,
    });
  },

  delete(url: string, data = {}, config = {}) {
    return instance.delete(baseUrl + url, { data, ...config });
  },

  put(url: string, options = {}, config = {}) {
    return instance.put(baseUrl + url, options, config);
  },
}

export const request = requestApi
