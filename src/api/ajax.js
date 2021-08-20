/**
 * 对axios进行2次封装
 * 1.统一处理请求异常
 * 2.异步请求成功的数据不是response，而是response.data
 * 3.对请求体参数进行urlencode处理，而不使用默认的json方式(后台接口不支持)
 * 4.配置请求超时的时间
 * 5.通过请求头携带token参数
 */

import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
  // 4.配置请求超时的时间
  timeout: 20 * 1000,
});

// 添加请求拦截器
instance.interceptors.requset.use(config => {
  console.log('request interceptor run');

  // 3.对请求体参数进行urlencode处理，而不使用默认的json方式(当前后台接口不支持)
  const data = config.data;
  if (data instanceof Object) {
    config.data = qs.stringify(data);
  }
  return config;
});

// 添加相应拦截器
instance.interceptors.response.use(
  response => {
    console.log('response interceptor run');

    // 2.异步请求成功的数据不是response，而是response.data
    return response.data;
  },
  error => {
    alert('请求出错：', error.message)

    // 1.统一处理异常（返回一个pending状态的promise，中断promise链）
    return new Promise(() => {});
  }
);

export default instance;
