import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

axios.defaults.baseURL = process.env.VUE_APP_API + '/api'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

axios.interceptors.response.use(
  function(response) {
    return response.data
  },
  function(error) {
    return Promise.reject(error)
  }
)
