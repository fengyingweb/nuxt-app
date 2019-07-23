import axios from 'axios'
import NProgress from 'nprogress'
import { Message } from 'element-ui'

// 创建axios实例
const httpReq = axios.create({
  timeout: 15000, // 请求超时时间
  withCredentials: true,
  headers: {'Pragma': 'no-cache', 'Cache-Control': 'no-cache', 'Content-Type': 'application/json'}
})

// 请求拦截
httpReq.interceptors.request.use((config) => {
  NProgress.start()
  return config
}, (error) => {
  NProgress.done()
  Promise.reject(error)
})

// 响应拦截
httpReq.interceptors.response.use((response) => {
  NProgress.done()
  return response.data
}, (error) => {
  NProgress.done()
  const res = error.response
  if (res) {
    switch (res.status) {
      case 401:
        Message.error(`${res.status}没有权限`)
        break;
      case 500:
        Message.error('内部服务器错误')
        break;
    }
  }

  console.log('异常:', error)
  return Promise.reject(error)
})

export default httpReq
