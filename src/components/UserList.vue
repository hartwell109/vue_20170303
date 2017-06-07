<template>
  <div class="UserList">
    <el-button type="text" @click="getLet">UserList</el-button>
    <div v-model="userlist">{{userlist}}</div>
  </div>
</template>

<script>
  var http = require('http')
  var options = {
    host: 'localhost',
    post: 3000,
    path: '/dao/list',
    method: 'GET'
  }
  export default {
    name: 'UserList',
    methods: {
      getLet: function () {
        http.request(options, function (response) {
          console.log(response)
          this.userlist = response.toString()
        })
      }
    },
    data: function () {
      return {
        userlist: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
