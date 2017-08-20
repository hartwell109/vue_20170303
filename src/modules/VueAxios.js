exports.install = function (Vue, options) {
  var axios = require('axios')
  const axiosConfig = require('./config').axios
  const Axios = axios.create(axiosConfig)
  Vue.prototype.$axios = {get: Axios.get, post: Axios.post}
}
