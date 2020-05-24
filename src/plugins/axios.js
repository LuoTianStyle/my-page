"use strict";
import Vue from 'vue';
import axios from "axios";
// 请求时提示
import { Loading } from 'element-ui'
let loadingCount = 0
let loading
const startLoading = () => {
    loading = Loading.service({
        lock: true,
        text: '拼命加载中……',
        background: 'rgba(0, 0, 0, 0.7)',
        spinner: 'el-icon-loading'
    })
}
const endLoading = () => {
    loading.close()
}
const showLoading = () => {
    if (loadingCount === 0) {
        startLoading()
    }
    loadingCount += 1
}

const hideLoading = () => {
    if (loadingCount <= 0) {
        return
    }
    loadingCount -= 1
    if (loadingCount === 0) {
        endLoading()
    }
}
axios.defaults.baseURL = process.env.VUE_APP_BASE_API || process.env.VUE_APP_BASE_PRO || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
let config = {
  timeout: 5 * 1000
};
const _axios = axios.create(config);
_axios.interceptors.request.use(
  config => {
    showLoading()
    config.data = JSON.stringify(config.data)
    config.headers = {
        'Content-Type': 'application/json;charset=UTF-8'
    }
    // Do something before request is sent
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);
// Add a response interceptor
_axios.interceptors.response.use(
  response => {
    hideLoading()
    // Do something with response data
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);
Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};
Vue.use(Plugin)
export default Plugin;
