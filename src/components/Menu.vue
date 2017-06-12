<template>
  <div>
    <h3>菜单</h3>
    <el-row>
      <el-col :span="6" v-for="item in menuList" :key="item">
        <el-card>
          <img :src="item.imgUrl"></img>
          <div>
            <span>{{item.pName}}</span>
            <div>
              <el-button type="primary">购买</el-button>
              <span>{{item.price}}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  export default {
    components: {ElButton},
    data: function () {
      return {
        menuList: [
          {imgUrl: 'http://unsplash.it/200/300', price: '￥9.00', pName: '产品之1'},
          {imgUrl: 'http://unsplash.it/200/301', price: '￥9.00', pName: '产品之2'},
          {imgUrl: 'http://unsplash.it/200/302', price: '￥9.00', pName: '产品之3'},
          {imgUrl: 'http://unsplash.it/200/303', price: '￥9.00', pName: '产品之4'},
          {imgUrl: 'http://unsplash.it/200/304', price: '￥9.00', pName: '产品之5'},
          {imgUrl: 'http://unsplash.it/200/305', price: '￥9.00', pName: '产品之6'},
          {imgUrl: 'http://unsplash.it/200/306', price: '￥9.00', pName: '产品之7'},
          {imgUrl: 'http://unsplash.it/200/307', price: '￥9.00', pName: '产品之8'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
