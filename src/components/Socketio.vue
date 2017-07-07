<template>
  <div>
    <h2>Socketio客户端</h2>
    <el-button type="primary" @click="emitit">发送socketio消息</el-button>
    <div>收到服务器回复：{{message}}</div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        message: null
      }
    },
    created: function () {
      this.$socketio.on('connect', function () {
        console.log('socketio is connected!')
      })
      this.$socketio.on('toClient', (data) => {
        console.log('event:' + data)
        this.message = data
      })
    },
    methods: {
      emitit: function (event) {
        this.$socketio.emit('toServer', new Date())
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped>
</style>
