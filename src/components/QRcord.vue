<template>
  <div>
    <h3>二维码</h3>
    <div>
      <video id="video" autoplay="true" style="display:none;"></video>
      <canvas id="canvas" style="width:640px; height:480px;"></canvas>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
