<template>
  <div class="Login">
    <el-row>
      <h3>用户登陆</h3>
    </el-row>
    <el-row :gutter="10">
      <el-col class="col" :span="2" :offset="10">用户：</el-col>
      <el-col class="col" :span="2">
        <el-input v-model="username" placeholder="username"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="10" align="middle" justify="center">
      <el-col class="col" :span="2" :offset="10">口令：</el-col>
      <el-col class="col" :span="2">
        <el-input v-model="password" placeholder="password"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="10" align="middle" justify="center">
      <el-col :span="2" :offset="10">
        <el-button type="primary" >确定</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary">取消</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    emmite: function () {
      console.log('emmit')
    },
    name: 'Login',
    data: function () {
      return {
        username: 'abcd',
        password: 'abcd'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .col {
    padding: 10px 0;
  }
</style>
