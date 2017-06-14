<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <el-carousel :interval="4000" height="600px" arrow="always">
      <el-carousel-item v-for="item in sliderList" :key="item">
        <router-link :to="item.click">
          <img :src="item.url"></img>
        </router-link>
        <h3 type="text">{{item.text}}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: '欢迎使用Vuejs及ElementUI组件',
        sliderList: [
          {url: 'http://unsplash.it/800/600', click: '/login', text: 'login'},
          {url: 'http://unsplash.it/800/601', click: '/menu', text: 'menu'},
          {url: 'http://unsplash.it/800/604', click: '/userlist', text: 'userlist'},
          {url: 'http://unsplash.it/800/608', click: '/echarts', text: 'echarts'},
          {url: 'http://unsplash.it/800/608', click: '/qrcord', text: 'qrcord'}
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
