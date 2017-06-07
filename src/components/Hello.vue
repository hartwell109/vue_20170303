<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <el-carousel :interval="4000" height="600px" arrow="always">
      <el-carousel-item v-for="item in sliderList" :key="item">
        <img :src="item.url"></img>
      </el-carousel-item>
    </el-carousel>
    <router-link to="/login">
      <el-button type="text">Next</el-button>
    </router-link>

  </div>
</template>

<script>
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  export default {
    components: {ElButton},
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Our First Vue.js App',
        sliderList: [
          {url: 'http://unsplash.it/800/600', click: '', text: ''},
          {url: 'http://unsplash.it/800/601', click: '', text: ''},
          {url: 'http://unsplash.it/800/604', click: '', text: ''},
          {url: 'http://unsplash.it/800/608', click: '', text: ''}
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
