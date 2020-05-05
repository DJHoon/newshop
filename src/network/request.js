import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/',
    timeout: 5000
  })
  instance.interceptors.response.use(function (config) {
    return config.data
  } ,function (error) {
  })
  return instance({
    url: config.url,
    method: config.method,
    params: config.params
  })
}