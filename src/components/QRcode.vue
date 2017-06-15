<template>
  <div>
    <h3>生成二维码</h3>
    <el-row>
      <el-col :span="8" :offset="8">
        <canvas id="canvas" width="600px" height="600px"></canvas>
      </el-col>
      <el-col :span="8" :offset="8">
        <el-input :value="message" @change="makeCanvas"></el-input>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        message: 'This a QRcode canvas!'
      }
    },
    methods: {
      makeCanvas: function (msg) {
        var QRcode = require('qrcode')
        var canvas = document.getElementById('canvas')
        QRcode.toCanvas(canvas, msg, function (error) {
          if (error) console.error(error)
          console.log(msg)
        })
      }
    },
    mounted: function () {
      this.makeCanvas(this.message)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
