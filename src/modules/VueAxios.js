/**
 * Created by Mars on 2017/6/28.
 */
exports.install = function (Vue, options) {
  var axios = require('axios')
  var qs = require('qs')
  axios.defaults.baseURL = 'http://localhost:3000'
  axios.defaults.method = 'GET'
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
  axios.defaults.timeout = 5000
  axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })
  axios.interceptors.response.use((res) => {
    if (!res.data.success) {
      return Promise.reject(res)
    }
    return res
  }, (error) => {
    return Promise.reject(error)
  })
  Vue.prototype.fetch = function (url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, params)
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
