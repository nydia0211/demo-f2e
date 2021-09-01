import Vue from 'vue'
import Vuex from 'vuex'

import orders from './modules/orders'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        orders
    }
})

export default store