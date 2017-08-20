/**
 * Created by Mars on 7/7/2017.
 */
exports.install = function (Vue, options) {
  var io = require('socket.io-client')
  var socketConfig = require('./config').socket
  var socket = io(socketConfig.url, {reconnect: true})
  Vue.prototype.$socketio = socket
}
