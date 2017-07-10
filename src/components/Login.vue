<template>
  <div class="Login">
    <el-row>
      <h3>用户登陆</h3>
    </el-row>
    <el-row :gutter="10">
      <el-col class="col" :span="2" :offset="10">用户：</el-col>
      <el-col class="col" :span="2">
        <el-input v-model="username">{{username}}</el-input>
      </el-col>
    </el-row>
    <el-row :gutter="10" align="middle" justify="center">
      <el-col class="col" :span="2" :offset="10">口令：</el-col>
      <el-col class="col" :span="2">
        <el-input v-model="password">{{password}}</el-input>
      </el-col>
    </el-row>
    <el-row :gutter="10" align="middle" justify="center">
      <el-col :span="2" :offset="10">
        <el-button type="primary" @click="emitit">确定</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary">取消</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  export default {
    components: {ElButton},
    name: 'Login',
    data: function () {
      return {
        username: 'abcd',
        password: '1234'
      }
    },
    methods: {
      emitit: function () {
        console.log('emmit')
        var Joi = require('joi')
        var schema = Joi.object().keys({
          username: Joi.string().alphanum().max(10).min(3).required(),
          password: Joi.string().regex(/^[a-z0-9A-Z]{3,30}$/)
        })
        Joi.validate({username: this.username, password: this.password}, schema, function (err, result) {
          if (err) {
            console.log('err:' + err)
          } else {
            console.log(result)
          }
        })
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
