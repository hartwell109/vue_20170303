/**
 * Created by Mars on 7/7/2017.
 */
exports.install = function (Vue, options) {
  var io = require('socket.io-client')
  var socket = io('http://192.168.0.102:3333', {reconnect: true})
  Vue.prototype.$socketio = socket
}
