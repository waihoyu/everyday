import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/pages/home')
const login = () => import('@/pages/login')
//延迟加载

Vue.use(Router)

export default new Router({
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
    }
  ]
})
