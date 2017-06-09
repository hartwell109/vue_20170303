<template>
  <div class="UserList">
    <el-button type="text" v-on:click="getLet">获取用户列表</el-button>
    <el-table stripe border :data="userlist" style="width:100%">
      <el-table-column fixed label="id" width="250" prop="_id"></el-table-column>
      <el-table-column label="用户" width="320" prop="userName"></el-table-column>
      <el-table-column label="邮箱" width="180" prop="email"></el-table-column>
      <el-table-column label="部门" width="180" prop="department"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'UserList',
    data: function () {
      return {
        userlist: []
      }
    },
    methods: {
      getLet: function () {
        this.$http
          .jsonp('http://localhost:3000/dao/list', {emulateJSON: true})
          .then(
            res => {
              this.userlist = res.data
            },
            res => {
              console.log(res.status)
            }
          )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
