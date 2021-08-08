import Vue from 'vue'
import axios from 'axios'
import {Notify} from 'quasar'

Vue.prototype.$axios = axios

axios.defaults.baseURL = process.env.VUE_APP_API + '/api'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

axios.interceptors.response.use(
  function(response) {
    return response.data
  },
  function(error) {
    if(error.response.status == 400) {
      Notify.create({
            type: 'negative',
            color: 'negative',
            timeout: 1000,
            position: 'top-right',
            message: error.response.data.message
          })

    }

    return Promise.reject(error)
  }
)
