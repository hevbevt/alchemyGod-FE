import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import inventory from './modules/inventory'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        counter,
        inventory,
    },
})