import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/pages/home')
const login = () => import('@/pages/login')
//延迟加载
const city = () => import('@/pages/city')
const msite = () => import('@/pages/msite')
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login,
      meta:{
        keepalive:true
      }
    },
    {
      //动态路由
      path:'/city/:cityid',
      component: city
    },
    {
      //动态路由
      path:'/msite',
      component: msite
    }
  ]
})
