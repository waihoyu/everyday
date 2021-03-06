import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)

// Vuex 管理Vue  大型项目中的数据流
// Vue项目将分为两部分
// Vue VueRouter  界面构建部分  组件化
// Vuex  数据流  

export default new Vuex.Store({
    modules: {
        products,
        cart
    }
})