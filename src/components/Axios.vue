<template>
  <div>
    <h3>Axios获取数据</h3>
    <div>{{msg}}</div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        msg: []
      }
    },
    mounted: function () {
      var axios = require('axios')
      var config = {
        baseURL: 'http://192.168.0.100:3000',
        timeout: 5000,
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'},
        responseType: 'json',
        data: {
          pageNum: 0,
          pageSize: 10
        }
      }
      var that = this
      const Axios = axios.create(config)
      Axios.get('/dao/list')
        .then(function (response) {
          that.msg = response.data
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
