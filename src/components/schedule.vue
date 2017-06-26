<template>
  <div id="schedule">
    <h3>任务调度</h3>
    <h3>{{theTime}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'schedule',
    data: function () {
      return {
        theTime: new Date()
      }
    },
    created: function () {
      var schedule = require('node-schedule')
      schedule.scheduleJob('*/5 * * * * *', function () {
        let t = new Date()
        this.theTime = t
        console.log(this.theTime)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
