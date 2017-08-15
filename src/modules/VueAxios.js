exports.install = function (Vue, options) {
  var axios = require('axios')

  var axiosConfig = {
    baseURL: 'http://192.168.0.100:3000',
    timeout: 5000,
    headers: {token: global.token},
    responseType: 'json'
  }
  const Axios = axios.create(axiosConfig)
  Vue.prototype.$axios = {get: Axios.get, post: Axios.post}
}
