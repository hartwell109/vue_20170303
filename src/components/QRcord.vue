<template>
  <div>
    <h3>二维码</h3>
    <div>
      <el-row border>
        <el-col :span="10" :offset="1">
          <video id="video" autoplay="true" style="display:none;"></video>
          <canvas id="canvas" style="width:640px; height:480px;"></canvas>
        </el-col>
        <el-col :span="10" :offset="1">

        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'
  export default {
    components: {
      ElCol,
      ElRow
    },
    data: function () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
