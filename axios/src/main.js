// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import qs from 'qs'

Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/api'

//Axios.defaults.baseURL = 'http://api.douban.com/v2'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App},
  template: '<App/>'
})
