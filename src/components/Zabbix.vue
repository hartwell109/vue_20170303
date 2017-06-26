<template>
  <div class="zabbix">
    <h3>Zabbix</h3>
    <button type="primary" @click="getData">Zabbix</button>
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
      clickit: function (event) {
        console.log(new Date())
        this.result = new Date()
//        this.$set(this.$data.mssg, 'mssg', new Date())
      },
      getData: function (event) {
        var axios = require('axios')
        axios({
          method: 'post',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          },
          url: 'http://118.144.88.17:33305/api_jsonrpc.php',
          data: '{"jsonrpc": "2.0","method":"hostgroup.get","params":{"output":["groupid","name"]},"auth":"3d9f8e4b950a235bd1b66cb8355839bb","id": 1}'
        }).then((response) => {
          this.$nextTick(function () {
            this.result = response.data.result.length
            console.log(response.data.result)
          })
        }).catch(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
