import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import auth from '@/auth.js'

Vue.use(Router)

const requireAuth = (to, from, next) => {
    // console.log(to,from);
    // 用户有登录权限吗？
    if (!auth.loggeIn()) {
        next({
            path: '/login',
            query: {
                redirect: to.fullPath
            }
        })
    }
    next()
}

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: About
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/dashboard',
            component: Dashboard,
            beforeEnter: requireAuth
        },        
        {
          path: '/login',
          component: Login,
          // beforeEnter: requireAuth
         }
    ]
})