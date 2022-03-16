// 对于axios进行二次封装
import axios from 'axios';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
// 1，利用axios对象的方法create，去创建一个对象
const requests = axios.create({
  baseURL: '/api',
  timeout: 5000,
});
// 请求拦截器，在发送请求之前，请求拦截器可以检测到，在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
  nprogress.start();
  return config;
});
// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
  },
  (error) => {
    return Promise.reject(new Error('faile'));
  }
);
// 对外暴露
export default requests;
