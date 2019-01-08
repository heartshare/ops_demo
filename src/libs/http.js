import axios from 'axios'
// import { Loading, Message } from 'element-ui'
import router from '../router'
import { getToken, setToken } from '@/libs/util'

// let loading
// function startLoading() {
//     loading = Loading.service({
//         lock: true,
//         text: '拼命加载中...',
//         background: 'rgba(0, 0, 0, 0,0.7)'
//     })
// }
// function endLoading(){
//     loading.close();
// }

// 请求拦截
axios.interceptors.request.use(config => {
  // 加载动画
  // startLoading()
  console.log('请求拦截...')
  const token = getToken()
  if (token) {
    // 设置统一的请求头header
    config.headers.Authorization = token
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
  console.log('响应拦截...')
  // 结束加载动画
  // endLoading()
  return response
}, error => {
  // endLoading()
  // alert(error.response.data)

  // 获取错误状态码
  const { status } = error.response
  if (status === 401) {
    alert('Token已失效，请重新登录')
    localStorage.removeItem('eleToken')
    setToken('')
    router.push('/login')
  }
  return Promise.reject(error)
})

export default axios
