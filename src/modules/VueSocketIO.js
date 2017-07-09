/**
 * Created by Mars on 7/7/2017.
 */
exports.install = function (Vue, options) {
  var io = require('socket.io-client')
  var socket = io('http://localhost:3333', {reconnect: true})
  Vue.prototype.$socketio = socket
}
