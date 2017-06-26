<template>
  <div class="Zabbix">
    <h3>Zabbix</h3>
    <button type="primary" @click="change">Zabbix</button>
    <br/>
    <div>Time:{{ mssg }}</div>
    <br/>
  </div>
</template>

<script>
  export default {
    name: 'Zabbix',
    data: () => {
      return {
        mssg: 'abc'
      }
    },
    methods: {
      change: (event) => {
        console.log(new Date())
        this.mssg = new Date()
      },
      getData: (event) => {
        var axios = require('axios')
        axios({
          method: 'post',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          },
          url: 'http://118.144.88.17:33305/api_jsonrpc.php',
          data: '{"jsonrpc": "2.0","method":"hostgroup.get","params":{"output":["groupid","name"]},"auth":"3d9f8e4b950a235bd1b66cb8355839bb","id": 1}'
        }).then(function (response) {
          console.log(response.data.result)
          this.msg = response.data.result.length
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
