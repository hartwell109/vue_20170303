import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import UserList from '@/components/UserList'
import Menu from '@/components/Menu'
import QRcode from '@/components/QRcode'
import JsQR from '@/components/JsQR'
import ECharts from '@/components/ECharts'
import Zabbix from '@/components/Zabbix'
import Schedule from '@/components/Schedule'
import Tree from '@/components/Tree'

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
      path: '/qrcode',
      name: 'QRcode',
      component: QRcode
    },
    {
      path: '/jsqr',
      name: 'JsQR',
      component: JsQR
    },
    {
      path: '/echarts',
      name: 'ECharts',
      component: ECharts
    },
    {
      path: '/zabbix',
      name: 'Zabbix',
      component: Zabbix
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/tree',
      name: 'Tree',
      component: Tree
    }]
})
