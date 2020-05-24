import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        routeNow: '/',
        scrollPositon: []
    },
    getters: {
        // store的计算属性
    },
    mutations: {
        changeRoute(state, value) {
            state.routeNow = value
        },
        changescrollPositon(state, value) {
            if(state.scrollPositon.length === 0) {
                state.scrollPositon.push(value)
            } else {
                let tmp
                state.scrollPositon.forEach(o => {
                    if(o.page === value.page) {
                        o.position = value.position
                        tmp = true
                    }
                })
                if(!tmp){
                    state.scrollPositon.push(value)
                } 
            }
            
        }
    },
    actions: {
        changeRouteAction: (context) => {
            context.commit('changeRoute')
        },
        changescrollPositonAction: (context) => {
            context.commit('changescrollPositon')
        },
    }
})
