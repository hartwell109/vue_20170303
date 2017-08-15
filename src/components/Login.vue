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
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      size="tiny"
      :before-close="handleClose">
      <span>{{msg}}</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data: function () {
      return {
        dialogVisible: false,
        msg: '',
        username: 'abcd',
        password: '1234'
      }
    },
    methods: {
      emitit: function () {
        var schema = this.$joi.object().keys({
          username: this.$joi.string().alphanum().max(10).min(3).required(),
          password: this.$joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
        })
        this.$joi.validate({username: this.username, password: this.password}, schema, (err, result) => {
          if (err) {
            this.msg = err
          } else {
            this.msg = result
          }
        })
        this.dialogVisible = true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
