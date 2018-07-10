import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'
import TimeEntries from '@/components/TimeEntries'
import LogTime from '@/components/LogTime'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'Home',
      component: Home
    },
    {
      path: '/home',
      // name: 'Home',
      component: Home
    },
    {
      path: '/time-entries',
      // name: 'Home',
      component: TimeEntries,
      children:
      [
        {
          path: 'log-time',
          component: LogTime
        }]
    },
    {
      path: '*',
      // name: 'Home',
      component: NotFound
    }
  ]
})
