exports.install = function (Vue, options) {
  var joi = require('joi')
  Vue.prototype.$joi = joi
}
