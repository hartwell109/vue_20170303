<template>
  <div class="hello">
    <h2>{{mssg}}</h2>
    <el-carousel :interval="4000" height="600px" arrow="always">
      <el-carousel-item v-for="item in sliderList" :key="item">
        <router-link :to="item.click">
          <img :src="item.url"></img>
        </router-link>
        <h1 style="margin-top:-5%;border: medium;">{{item.text}}</h1>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        mssg: '欢迎使用Vuejs及ElementUI组件',
        sliderList: [
          {url: 'http://unsplash.it/800/600', click: '/login', text: '登陆与权限'},
          {url: 'http://unsplash.it/800/601', click: '/menu', text: '菜单格式'},
          {url: 'http://unsplash.it/800/604', click: '/userlist', text: '用户列表'},
          {url: 'http://unsplash.it/800/608', click: '/echarts', text: '统计图表'},
          {url: 'http://unsplash.it/800/605', click: '/qrcode', text: '二维码生成'},
          {url: 'http://unsplash.it/800/609', click: '/jsqr', text: '二维码扫描 '},
          {url: 'http://unsplash.it/800/611', click: '/schedule', text: '任务调度 '},
          {url: 'http://unsplash.it/800/612', click: '/controlers', text: '设备控制 '},
          {url: 'http://unsplash.it/800/613', click: '/tree', text: '树形目录 '}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
