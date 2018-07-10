import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// lbs 应用
const state = {totalTime: 0,list: []}
// const mutations = {}
// const actions = {}





export default new Vuex.Store({state, mutations, actions})
