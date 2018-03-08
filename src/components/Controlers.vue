<template>
  <div class="controlers">
    <el-row>
      <h3>设备控制</h3>
    </el-row>
    <el-row>
      <el-col class="col" :span="2">
        <h5>CRT_310读卡器：</h5>
      </el-col>
      <el-col class="col" :span="2">
        <el-button>初始化</el-button>
      </el-col>
      <el-col class="col" :span="2">
        <el-button>读卡</el-button>
      </el-col>
      <el-col class="col" :span="2">
        <el-button>前端退卡</el-button>
      </el-col >
      <el-col class="col" :span="2">
        <el-button>后端退卡</el-button>
      </el-col>
      <el-col class="col" :span="2">
        <el-button>关闭</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'controler'
  }
</script>

<style scoped>

</style>
