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
        theTime: ''
      }
    },
    created: function () {
      this.$scheduleJob('*/5 * * * * *', () => {
        this.theTime = new Date()
        console.log(this)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
