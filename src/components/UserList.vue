<template>
  <div class="UserList">
    <el-table stripe border :data="userlist" style="width:100%">
      <el-table-column sortable fixed label="id" width="250" prop="_id"></el-table-column>
      <el-table-column sortable label="用户" width="320" prop="userName"></el-table-column>
      <el-table-column sortable label="邮箱" width="180" prop="email"></el-table-column>
      <el-table-column sortable label="部门" width="180" prop="department"></el-table-column>
    </el-table>
    <div>
      <el-pagination layout="prev, pager, next" :total="500" @current-change="changePage"></el-pagination>
    </div>
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
    created: function () {
      this.$http
        .jsonp('http://localhost:3000/dao/list?pageNum=0', {emulateJSON: true})
        .then(
          res => {
            this.userlist = res.data
          },
          res => {
            console.log(res.status)
          }
        )
    },
    methods: {
      changePage: function (event) {
        console.log(event)
        this.$http
          .jsonp('http://localhost:3000/dao/list?pageNum=' + event, {emulateJSON: true})
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
