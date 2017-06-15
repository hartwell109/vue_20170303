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
  export default {
    data: function () {
      return {
        menuList: [
          {imgUrl: 'http://unsplash.it/200/300', price: '￥9.00', pName: '登陆'},
          {imgUrl: 'http://unsplash.it/200/301', price: '￥9.00', pName: '菜单'},
          {imgUrl: 'http://unsplash.it/200/302', price: '￥9.00', pName: '图表'},
          {imgUrl: 'http://unsplash.it/200/303', price: '￥9.00', pName: '二维码扫描'},
          {imgUrl: 'http://unsplash.it/200/304', price: '￥9.00', pName: '生成二维码'},
          {imgUrl: 'http://unsplash.it/200/305', price: '￥9.00', pName: '用户列表'},
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
