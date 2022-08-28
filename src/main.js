import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Meta from 'vue-meta'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

// VueMeta
Vue.use(Meta, {
    attribute: 'data-vue-meta',
})