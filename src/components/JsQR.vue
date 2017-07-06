<template>
  <div>
    <h3>二维码扫描</h3>
    <div>
      <el-row border>
        <el-col :span="10" :offset="7">
          <video id="video" autoplay="true" style="display:none;"></video>
          <canvas id="canvas" style="width:640px; height:480px;"></canvas>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    },
    mounted: function () {
      /**
       * jsqr
       */
      var jsQR = require('jsqr')
      var video = document.getElementById('video')
      var canvas = document.getElementById('canvas')
      var context = canvas.getContext('2d')

      var width = parseInt(canvas.style.width)
      var height = parseInt(canvas.style.height)
      canvas.width = width
      canvas.height = height
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
      if (navigator.getUserMedia) {
        var successCallback = function (stream) {
          if (window.URL) {
            video.src = window.URL.createObjectURL(stream)
          } else if (video.mozSrcObject !== undefined) {
            video.mozSrcObject = stream
          } else {
            video.src = stream
          }
        }

        var errorCallback = function () {}

        navigator.getUserMedia({video: true}, successCallback, errorCallback)
        requestAnimationFrame(tick)
      }

      function tick () {
        requestAnimationFrame(tick)
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          // Load the video onto the canvas
          context.drawImage(video, 0, 0, width, height)
          // Load the image data from the canvas
          var imageData = context.getImageData(0, 0, width, height)
          var decoded = jsQR.decodeQRFromImage(imageData.data, imageData.width, imageData.height)
          if (decoded) {
            alert(decoded)
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
