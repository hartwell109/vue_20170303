import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import UserList from '@/components/UserList'
import Menu from '@/components/Menu'
import QRcord from '@/components/QRcord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/userlist',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/qrcord',
      name: 'QRcord',
      component: QRcord
    }
  ]
})
