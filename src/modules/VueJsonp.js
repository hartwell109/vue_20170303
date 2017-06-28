/**
 * Created by Mars on 2017/6/28.
 */
exports.install = function (Vue, options) {
  var jsonp = require('jsonp')
  var vueJsonp = function (url, params, callback) {
    jsonp(url, params, callback)
  }
  Vue.prototype.$jsonp = vueJsonp
}
