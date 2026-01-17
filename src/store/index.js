import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import auth from './modules/auth'


Vue.use(Vuex) 

export default new Vuex.Store({
   modules: {
    counter,
    auth
   }
})