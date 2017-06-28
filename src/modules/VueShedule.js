/**
 * Created by Mars on 2017/6/28.
 */
exports.install = function (Vue, options) {
  var schedule = require('node-schedule')
  Vue.prototype.scheduleJob = function (cron, callback) {
    schedule.scheduleJob(cron, callback)
  }
}
