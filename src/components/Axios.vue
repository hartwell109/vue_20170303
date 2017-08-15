<template>
  <div>
    <h3>Axios获取数据</h3>
    <div>{{msg}}</div>
  </div>
</template>

<script>
  export default {
    name: 'axios',
    data: function () {
      return {
        msg: []
      }
    },
    mounted: function () {
      var that = this
      const params = this.$qs.stringify({
        pageNum: 0,
        pageSize: 10
      })
      this.$axios.get('/dao/list', params)
        .then(function (response) {
          that.msg = response.data
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
