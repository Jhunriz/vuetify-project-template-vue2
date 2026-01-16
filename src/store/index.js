import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex) 

export default new Vuex.Store({
    // where the actual state origin 
    state: {
        count: 0
    },
    mutations: {
        // actual function where incrementation of data.
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    },
    actions: {

        increment(commit) {
            commit('increment')
        },
        decrement(commit) {
            commit(commit)
        }
    }
})