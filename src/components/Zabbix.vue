<template>
  <div class="zabbix">
    <h3>Zabbix</h3>
    <button type="primary" @click="getData">getData</button>
    <br/>
    <div>Time:{{result}}</div>
    <br/>
  </div>
</template>

<script>
  export default {
    name: 'zabbix',
    data: function () {
      return {
        result: 'abc'
      }
    },
    methods: {
      getData: function (event) {
        const params = {pageNum: 0}
        this.$jsonp('http://localhost:3000/dao/list', params, (err, data) => {
          if (err) {
            console.log(err)
          } else {
            this.result = JSON.stringify(data)
            console.log(this)
          }
        })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
