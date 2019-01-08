import axios from '../libs/http'
// import axios from '@/libs/api.request'

// export function Login (data) {
//   return axios({
//     url: '/api/users/login',
//     method: 'post',
//     data: data
//   })
// }

export const Login = (data) => {
  return axios.request({
    url: '/api/users/login',
    data,
    method: 'post'
  })
}
