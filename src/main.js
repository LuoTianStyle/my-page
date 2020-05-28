import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import vuescroll from 'vuescroll/dist/vuescroll-native'
Vue.use(vuescroll)
import 'normalize.css'
import './assets/fonts/iconfont.js'
import 'animate.css'
require('./mock')
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = `洛之空的${to.meta.title}`
    }
    next()
})
new Vue({
    router,
    store,
    watch: {
        '$route.path': function(val) {
            this.$store.commit('changeRoute', val)
        }
    },
    render: h => h(App)
}).$mount('#app')
